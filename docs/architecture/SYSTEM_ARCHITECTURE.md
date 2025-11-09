# KEKTECH System Architecture

## 🏗️ Overview

KEKTECH 3.0 uses a **Registry + Clone Pattern** architecture deployed to BasedAI mainnet on November 6, 2025. The system consists of 9 core contracts working together to provide a decentralized prediction market platform.

---

## Core Architecture Pattern

### Registry + Clone (EIP-1167) Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                    VersionedRegistry                        │
│  - Stores all contract addresses                           │
│  - Manages versions                                         │
│  - Single source of truth                                   │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ├──> ParameterStorage (v1)
                          ├──> AccessControlManager (v1)
                          ├──> ResolutionManager (v1)
                          ├──> RewardDistributor (v1)
                          ├──> FlexibleMarketFactoryUnified (v1)
                          ├──> PredictionMarketTemplate (v1)
                          └──> LMSRCurve (v1)

┌─────────────────────────────────────────────────────────────┐
│           FlexibleMarketFactoryUnified                      │
│  - Clones PredictionMarketTemplate                          │
│  - Initializes market instances                             │
│  - Manages market lifecycle                                 │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          │ EIP-1167 Clones
                          │
         ┌────────────────┼────────────────┐
         │                │                │
    ┌────▼────┐      ┌────▼────┐     ┌────▼────┐
    │ Market1 │      │ Market2 │ ... │ MarketN │
    │ (Clone) │      │ (Clone) │     │ (Clone) │
    └─────────┘      └─────────┘     └─────────┘

    Each Market:
    - Immutable after creation
    - Self-contained logic
    - State transitions
    - LMSR pricing
```

---

## Contract Details

### 1. VersionedRegistry

**Purpose**: Central contract registry and version management

**Responsibilities**:
- Store addresses of all system contracts
- Manage contract versions
- Enable clean upgradability
- Provide single source of truth

**Key Storage**:
```solidity
mapping(bytes32 => mapping(uint256 => address)) private _contracts;
mapping(bytes32 => uint256) private _latestVersion;
```

**Why It's Important**:
- No hardcoded addresses anywhere
- Contracts discover each other via registry
- Upgrade by registering new version
- Old markets continue using old versions

**Upgrade Process**:
1. Deploy new contract version
2. Register in VersionedRegistry with incremented version
3. New markets automatically use new version
4. Old markets stay on old version (immutable!)

---

### 2. FlexibleMarketFactoryUnified

**Purpose**: Create and manage prediction markets

**Responsibilities**:
- Clone PredictionMarket template
- Initialize market instances
- Manage market approval workflow
- Track all created markets

**Market Creation Flow**:
```
User calls createMarket()
    ↓
Factory validates parameters
    ↓
Factory clones template (EIP-1167)
    ↓
Factory initializes clone
    ↓
Market enters PROPOSED state
    ↓
Admin approves market
    ↓
Factory activates market
    ↓
Market enters ACTIVE state
```

**Why Clone Pattern**:
- 687k gas (vs 2.3M for full deployment)
- 71% gas savings per market
- Each market is immutable
- Upgrades don't affect existing markets

---

### 3. PredictionMarket (Template & Clones)

**Purpose**: Individual market logic

**State Machine**:
```
PROPOSED → APPROVED → ACTIVE → CLOSED → RESOLVING → RESOLVED → FINALIZED
                                              ↓
                                          DISPUTED
                                              ↓
                                          RESOLVED
```

**Core Functionality**:
- Accept bets (ACTIVE state only)
- Calculate shares via LMSR
- Enforce time-based transitions
- Distribute winnings
- Enforce access controls

**Immutability**:
- Once deployed, logic cannot change
- Users trust market won't be modified
- Resolution is guaranteed by code
- No rug-pull risk

---

### 4. ParameterStorage

**Purpose**: Global configuration parameters

**Parameter Categories**:

1. **Time Parameters**:
   - MIN_MARKET_DURATION: 1 hour
   - MAX_MARKET_DURATION: 180 days
   - RESOLUTION_BUFFER_TIME: 24 hours
   - DISPUTE_PERIOD: 48 hours

2. **Economic Parameters**:
   - MIN_CREATOR_BOND: 0.01 ETH
   - MIN_BET_AMOUNT: 0.001 ETH
   - PROTOCOL_FEE_PERCENTAGE: 200 (2%)
   - CREATOR_FEE_PERCENTAGE: 100 (1%)
   - RESOLVER_FEE_PERCENTAGE: 50 (0.5%)

3. **Operational Parameters**:
   - MAX_OUTCOMES: 10
   - MIN_OUTCOMES: 2

**Why Centralized**:
- Single update point for all markets
- Consistent parameters system-wide
- Admin can adjust as needed
- Emergency parameter updates possible

---

### 5. AccessControlManager

**Purpose**: Role-based access control (RBAC)

**Role Hierarchy**:
```
DEFAULT_ADMIN_ROLE (Owner)
    ├─> MARKET_ADMIN_ROLE (Approve/reject markets)
    ├─> PARAMETER_ADMIN_ROLE (Update parameters)
    ├─> RESOLVER_ROLE (Resolve markets)
    └─> EMERGENCY_ROLE (Emergency functions)
```

**Security Model**:
- Role-based permissions
- Multiple admins possible
- Role delegation
- Emergency response capability

**Why Separate Contract**:
- Centralized permission management
- Easier to audit
- Can upgrade access control logic
- Consistent across all contracts

---

### 6. ResolutionManager

**Purpose**: Handle market resolution and disputes

**Resolution Flow**:
```
Market CLOSED
    ↓
Resolver proposes outcome
    ↓
Market enters RESOLVING
    ↓
48h dispute period
    ↓
If disputed:
    ├─> Admin investigates
    └─> Admin finalizes (uphold or reject)
If not disputed:
    └─> Auto-finalize after 48h
    ↓
Market enters FINALIZED
```

**Batch Operations**:
- `batchProposeOutcomes()` - Multiple markets at once
- `batchFinalizeResolutions()` - Bulk finalization
- Gas-efficient for high volumes

**Why Centralized**:
- Consistent resolution logic
- Easier dispute handling
- Batch operations for efficiency
- Upgradeable resolution logic

---

### 7. RewardDistributor

**Purpose**: Distribute fees and rewards

**Fee Distribution**:
```
Total Bet Amount
    ↓
├─> 2% Protocol Fee → RewardDistributor
├─> 1% Creator Fee → Market Creator
├─> 0.5% Resolver Fee → Resolver
└─> 96.5% Betting Pool → Winners
```

**Claim Process**:
- Winners claim from markets directly
- Resolvers claim from RewardDistributor
- Protocol claims accumulated fees
- Automated distribution logic

**Why Centralized**:
- Track all resolver earnings
- Accumulate protocol fees
- Single claim point
- Prevent fee manipulation

---

### 8. LMSRCurve

**Purpose**: LMSR bonding curve pricing

**LMSR Formula**:
```
C(q) = b * ln(Σ e^(q_i/b))

Where:
- C(q) = Cost function
- b = Liquidity parameter (100 * 10^18)
- q_i = Quantity of shares for outcome i
- Σ = Sum over all outcomes
```

**Why LMSR**:
- Automatic liquidity provision
- Price discovery mechanism
- No need for order books
- Proven in prediction markets (Gnosis)

**Gas Optimization**:
- View-only functions
- Efficient math library
- Pre-computed constants
- Minimal storage

---

## Data Flow Architecture

### Market Creation Flow
```
User
  ↓ createMarket() + 0.01 ETH bond
Factory
  ↓ Validates via ParameterStorage
  ↓ Checks AccessControlManager
  ↓ Clones PredictionMarketTemplate
  ↓ Initializes with LMSR params
Market (PROPOSED)
  ↓ Admin approval
Factory
  ↓ activateMarket()
Market (ACTIVE)
```

### Betting Flow
```
User
  ↓ placeBet(outcome, minShares) + ETH
Market
  ↓ Checks state (must be ACTIVE)
  ↓ Gets LMSRCurve address from Registry
LMSRCurve
  ↓ calculateCost(shares, outcome)
Market
  ↓ Validates cost matches sent ETH
  ↓ Updates share balances
  ↓ Emits BetPlaced event
User receives shares
```

### Resolution Flow
```
Market CLOSED (time passed)
  ↓
Resolver
  ↓ proposeOutcome(marketAddr, outcome)
ResolutionManager
  ↓ Validates resolver role
  ↓ Marks market as RESOLVING
  ↓ Starts 48h dispute timer
Market (RESOLVING)
  ↓ Wait 48h or admin finalize
ResolutionManager
  ↓ finalizeResolution()
Market (FINALIZED)
  ↓
Winner claims
  ↓ claimWinnings()
Market
  ↓ Calculates share %
  ↓ Transfers winnings
  ↓ Updates claim status
```

---

## Upgrade Strategy

### What Can Be Upgraded

**✅ System Contracts** (via VersionedRegistry):
- FlexibleMarketFactoryUnified
- ParameterStorage
- AccessControlManager
- ResolutionManager
- RewardDistributor
- LMSRCurve
- PredictionMarketTemplate

**How to Upgrade**:
1. Deploy new contract version
2. Register in VersionedRegistry with incremented version number
3. New markets use new version automatically
4. Old markets continue using old version

**⛔ Cannot Upgrade**:
- VersionedRegistry (permanent, by design)
- Existing market clones (immutable, by design)

### Why This Design

**Benefits**:
- No proxies (simpler, cheaper)
- Gradual migration (old markets work)
- User trust (markets immutable)
- Clean separation (registry handles discovery)

**Trade-offs**:
- VersionedRegistry must be perfect
- Old markets stay on old logic
- Need migration path for users

---

## Security Architecture

### Defense Layers

**1. Economic Security**:
- Creator bonds prevent spam
- Minimum bet amounts
- Fee structure alignment
- Time-based transitions

**2. Access Control**:
- Role-based permissions
- Multi-admin capability
- Emergency roles
- Granular permissions

**3. Time-Based Security**:
- Resolution buffers
- Dispute periods
- Market duration limits
- Time-lock mechanisms

**4. Code Security**:
- Reentrancy guards (all functions)
- Integer overflow protection (Solidity 0.8+)
- Input validation
- State machine enforcement

### Attack Resistance

**Reentrancy**: ReentrancyGuard on all payment functions
**Front-running**: Time-weighted resolution prevents manipulation
**Sybil**: Creator bonds and minimum bets
**Oracle Manipulation**: Community resolution with disputes
**Admin Abuse**: Multi-admin, time-locks, transparency

---

## Gas Optimization

### Strategies Used

1. **EIP-1167 Clones**: 71% savings on market creation
2. **Batch Operations**: Resolve multiple markets at once
3. **View Functions**: LMSR calculations off-chain when possible
4. **Event Logs**: Use events instead of storage lookups
5. **Packed Storage**: Optimize storage layout
6. **Registry Pattern**: Cache addresses instead of lookups

### Gas Costs (Actual)

| Operation | Gas | Cost ($BASED @ 0.1 gwei) |
|-----------|-----|--------------------------|
| Create Market | 687k | $0.0000687 |
| Place Bet | 100k | $0.0000100 |
| Resolve Market | 150k | $0.0000150 |
| Claim Winnings | 80k | $0.0000080 |
| Batch Resolve (10) | 800k | $0.0000800 |

---

## Scalability Considerations

### Current Limits
- Unlimited markets (memory bound only)
- 10 outcomes per market (gas optimization)
- No theoretical bet size limit (economic only)

### Future Improvements
- Layer 2 integration (lower fees)
- Optimistic rollups (higher throughput)
- Cross-chain markets (multiple chains)

---

## Integration Points

### For Frontend
- Registry: Get all contract addresses
- Factory: Create and list markets
- Market: Place bets, check status
- LMSRCurve: Price calculations (view only)

### For Backend
- Events: Index all activity
- Registry: Monitor contract versions
- ResolutionManager: Track resolutions

### For Other Contracts
- Registry: Discover contracts
- ParameterStorage: Get global params
- AccessControlManager: Check permissions

---

**Last Updated**: November 8, 2025
**Deployed**: November 6, 2025
**Network**: BasedAI (Chain ID: 32323)
**Status**: LIVE AND OPERATIONAL