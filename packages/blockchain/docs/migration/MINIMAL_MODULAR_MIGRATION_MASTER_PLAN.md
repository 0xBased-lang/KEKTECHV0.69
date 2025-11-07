# 🎯 MINIMAL MODULAR MIGRATION MASTER PLAN
**Date**: November 7, 2025
**Version**: 1.0
**Status**: ACTIVE - Ready for Implementation
**Target**: Complete "Minimal Modular" architecture transformation before mainnet

---

## 📋 DOCUMENT PURPOSE

This is the **PRIMARY REFERENCE** for the complete migration from current 13-contract architecture to the bulletproof "Minimal Modular" 7-contract system.

**This document contains:**
- Executive summary and objectives
- Complete architecture transformation (current → target)
- 7-phase implementation roadmap (Days 18-65)
- Links to detailed phase implementation guides
- Success criteria and validation gates

**Before ANY implementation work, CHECK THIS DOCUMENT.**

---

## 🔗 RELATED DOCUMENTS

**Detailed Implementation:**
- [Phase 0: Size Verification](./PHASE_0_SIZE_VERIFICATION.md) - Days 18-20 ⚠️ BLOCKER
- [Phase 1: Internal Libraries](./PHASE_1_INTERNAL_LIBRARIES.md) - Days 21-25
- [Phase 2: Enhanced Metadata](./PHASE_2_ENHANCED_METADATA.md) - Days 26-28
- [Phase 3: VersionedRegistry](./PHASE_3_VERSIONED_REGISTRY.md) - Days 29-35 🔴 CRITICAL
- [Phase 4: Factory Unification](./PHASE_4_FACTORY_UNIFICATION.md) - Days 36-43
- [Phase 5: Market Lifecycle](./PHASE_5_MARKET_LIFECYCLE.md) - Days 44-50
- [Phase 6: Resolution Disputes](./PHASE_6_RESOLUTION_DISPUTES.md) - Days 51-56
- [Phase 7: Full Integration](./PHASE_7_FULL_INTEGRATION.md) - Days 57-66 🔴 CRITICAL

**Supporting Guides:**
- [Frontend Integration Guide](./FRONTEND_INTEGRATION_GUIDE.md) - Contract-UI integration
- [Parameter Flexibility Guide](./PARAMETER_FLEXIBILITY_GUIDE.md) - All adjustable parameters
- [Testing Procedures Guide](./TESTING_PROCEDURES_GUIDE.md) - Complete testing methodology
- [Deployment Procedures Guide](./DEPLOYMENT_PROCEDURES_GUIDE.md) - Production deployment
- [Security & Governance Guide](./SECURITY_GOVERNANCE_GUIDE.md) - Security architecture

**Reference Documents:**
- [Topics Inventory](../../MIGRATION_TOPICS_MASTER_INVENTORY.md) - All 151 topics
- [Documentation Structure](../../DOCUMENTATION_STRUCTURE.md) - Topic mapping

---

## PART 1: EXECUTIVE SUMMARY

### 1.1 Migration Objective

**Goal**: Transform current architecture to "Minimal Modular" design before mainnet deployment

**Why This Migration:**
- ✅ **Simpler**: 7 core contracts (down from 13) - easier to audit and maintain
- ✅ **More Efficient**: Unified factory with internal libraries - better gas optimization
- ✅ **More Flexible**: VersionedRegistry enables seamless upgrades
- ✅ **Frontend-Ready**: Clear lifecycle states and events - easy UI integration
- ✅ **Production-Ready**: Automatic + admin override patterns - hybrid control

**What Success Looks Like:**
- All 260+ tests passing with 90%+ coverage
- Security audit score 95+ (maintain current excellence)
- Gas costs <15% increase from current
- All contracts <24KB bytecode limit
- Fork + Sepolia validation successful
- Complete documentation and deployment procedures
- Ready for Day 65 mainnet launch

---

### 1.2 Current Architecture (ARCH-01)

**Current System: 13 Contracts**

```
Current Architecture (Before Migration)

MasterRegistry (336 lines)
 ├─ FlexibleMarketFactory (MONOLITHIC - 947 lines) ⚠️ EXCEEDS 24KB
 │   ├─ FlexibleMarketFactoryCore (548 lines)
 │   └─ FlexibleMarketFactoryExtensions (357 lines)
 ├─ PredictionMarket (binary betting)
 ├─ CurveRegistry (345 lines)
 ├─ MarketTemplateRegistry (365 lines)
 ├─ ParameterStorage
 ├─ AccessControlManager
 ├─ ResolutionManager
 ├─ RewardDistributor
 ├─ ProposalManager (governance V1)
 └─ ProposalManagerV2 (governance V2)

Total: 13 contracts
Issues:
- Factory split into 3 files (monolithic exceeded 24KB)
- No versioning in registry
- No market lifecycle states
- No approval system (markets activate immediately)
- No dispute aggregation (resolution not validated)
- Two governance contracts (unnecessary for V1)
```

**Current Limitations:**

1. **Factory Size Problem**: Original monolithic factory (947 lines) exceeded 24KB bytecode limit
   - Split into Core (548L) + Extensions (357L) as workaround
   - Awkward architecture, harder to maintain
   - Still at risk of exceeding 24KB with new features

2. **Registry Lacks Versioning**: MasterRegistry has no version tracking
   - Can't track which version of contracts are deployed
   - Difficult to coordinate upgrades
   - No backward compatibility support

3. **No Market Lifecycle**: PredictionMarket has no state management
   - Can't track if market is proposed, approved, active, resolving, etc.
   - Frontend can't easily display market status
   - No clear workflow for market activation

4. **No Approval System**: Markets activate immediately upon creation
   - No community validation
   - No spam prevention
   - No admin oversight

5. **No Dispute Aggregation**: Resolution happens without community validation
   - Resolver proposes outcome, immediately final (unless manually disputed)
   - No systematic way to aggregate community disagreement
   - Admin override only option for disputes

6. **Unnecessary Governance Contracts**: ProposalManager + V2 not needed for V1
   - Over-engineered for initial launch
   - Can add governance in V2 when needed
   - Adds unnecessary complexity

**Dependency Graph (Current):**

```
Circular Dependencies:

MasterRegistry
 ↓ (used by)
FlexibleMarketFactory
 ↓ (creates)
PredictionMarket
 ↓ (queries)
MasterRegistry
 ↑ (circular dependency)

This circular dependency makes upgrades complex.
```

---

### 1.3 Target Architecture (ARCH-02)

**Target System: 7 Core Contracts + 2 Supporting Registries**

```
Target Architecture (After Migration)

VersionedRegistry (NEW - with version tracking)
 ├─ FlexibleMarketFactory (UNIFIED - Core + Ext + Approval System)
 │   ├─ Uses CurveMarketLogic (internal library)
 │   └─ Uses TemplateMarketLogic (internal library)
 │   └─ Approval system (automatic + admin override)
 ├─ PredictionMarket (enhanced with lifecycle states)
 │   └─ MarketState: PROPOSED → APPROVED → ACTIVE → RESOLVING → FINALIZED
 ├─ ResolutionManager (enhanced with dispute aggregation)
 │   └─ Automatic finalization + admin override
 ├─ ParameterStorage (enhanced with new parameters)
 ├─ RewardDistributor (unchanged)
 ├─ AccessControlManager (unchanged)
 ├─ CurveRegistry (enhanced with metadata)
 └─ MarketTemplateRegistry (enhanced with metadata)

Core: 7 contracts
Supporting: 2 registries
Libraries: 2 internal (no deployment cost)

Removed for V1:
- ProposalManager (deferred to V2)
- ProposalManagerV2 (deferred to V2)

Deleted after merge:
- FlexibleMarketFactoryCore (merged into unified)
- FlexibleMarketFactoryExtensions (merged into unified)
```

**Key Improvements:**

1. **Simplified Contract Count**: 7 core contracts (down from 13)
   - Removed unnecessary governance contracts for V1
   - Merged split factory into unified contract
   - Cleaner, easier to audit

2. **VersionedRegistry**: Upgrade control and version tracking
   - Track version number for each registered contract
   - Query latest version or specific version
   - Seamless upgrade path (point to new version)
   - No circular dependencies

3. **Unified Factory <24KB**: Single contract with internal libraries
   - Merge Core + Extensions + new approval system
   - Extract logic to CurveMarketLogic + TemplateMarketLogic libraries
   - Internal libraries (no separate deployment)
   - Stays under 24KB bytecode limit

4. **Market Lifecycle States**: Clear state machine in PredictionMarket
   - 6 states: PROPOSED → APPROVED → ACTIVE → RESOLVING → DISPUTED → FINALIZED
   - State transition functions with validation
   - Events for each state change
   - Easy frontend tracking

5. **Approval System**: Community validation + admin override
   - Off-chain likes/dislikes aggregated by backend
   - Automatic approval when threshold met (70% default)
   - Admin can override (approve/reject anytime)
   - Spam prevention, quality control

6. **Dispute Aggregation**: Community validation of resolutions
   - Off-chain agree/disagree votes aggregated
   - Automatic finalization when strong agreement (75% default)
   - Automatic dispute marking when disagreement
   - Admin can override (force resolve anytime)

7. **Enhanced Metadata**: Registry metadata for discovery
   - CurveRegistry: curve metadata (name, version, category, deployer)
   - MarketTemplateRegistry: template metadata
   - Frontend can list available curves/templates
   - Better UX, easier integration

8. **Full Parameter Flexibility**: Everything adjustable via ParameterStorage
   - Existing parameters (market creation, economics, governance)
   - New approval parameters (threshold, time window, min votes)
   - New dispute parameters (agreement %, dispute window, min votes)
   - Admin can tune system without redeployment

**Architecture Diagram:**

```
┌─────────────────────────────────────────────────────────────┐
│                     VersionedRegistry                        │
│  - Tracks contract addresses + versions                      │
│  - Single source of truth for all contracts                  │
│  - Enables seamless upgrades                                 │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┬──────────────┐
         │               │               │              │
         ▼               ▼               ▼              ▼
┌────────────────┐ ┌─────────────┐ ┌───────────┐ ┌──────────┐
│ FlexibleMarket │ │ Resolution  │ │ Parameter │ │ Reward   │
│ Factory        │ │ Manager     │ │ Storage   │ │ Distrib  │
│                │ │             │ │           │ │          │
│ - Approval     │ │ - Dispute   │ │ - All     │ │          │
│   system       │ │   system    │ │   params  │ │          │
│ - Libraries    │ │ - Auto/     │ │ - Setters │ │          │
│   (Curve,      │ │   Override  │ │           │ │          │
│   Template)    │ │             │ │           │ │          │
└───────┬────────┘ └──────┬──────┘ └───────────┘ └──────────┘
        │                 │
        │ creates         │ resolves
        ▼                 ▼
┌───────────────────────────────────┐
│      PredictionMarket              │
│  - Lifecycle states (6 states)    │
│  - State transitions              │
│  - Events for frontend            │
└───────────────────────────────────┘
```

---

### 1.4 Key Changes Summary (ARCH-03)

**Contract-by-Contract Comparison:**

| Contract | Before | After | Change |
|----------|---------|-------|--------|
| **Registry** | MasterRegistry (no versioning) | VersionedRegistry (version tracking) | 🔄 REPLACED |
| **Factory** | 3 files (Core + Ext + Monolithic) | 1 unified file + 2 libraries | 🔀 MERGED |
| **Market** | No states | 6 lifecycle states | ➕ ENHANCED |
| **Resolution** | Manual only | Automatic + override | ➕ ENHANCED |
| **Parameters** | Basic | Full flexibility | ➕ ENHANCED |
| **Registries** | Basic | With metadata | ➕ ENHANCED |
| **Reward** | Unchanged | Unchanged | ✅ SAME |
| **AccessControl** | Unchanged | Unchanged | ✅ SAME |
| **Proposal** | ProposalManager + V2 | None (defer to V2) | ❌ REMOVED |

**What's Removed:**
- ❌ ProposalManager.sol (governance - not needed for V1 launch)
- ❌ ProposalManagerV2.sol (governance - not needed for V1 launch)
- ❌ FlexibleMarketFactoryCore.sol (merged into unified factory)
- ❌ FlexibleMarketFactoryExtensions.sol (merged into unified factory)

**What's New:**
- 🆕 VersionedRegistry.sol (replaces MasterRegistry)
- 🆕 IVersionedRegistry.sol (new interface)
- 🆕 libraries/CurveMarketLogic.sol (internal library)
- 🆕 libraries/TemplateMarketLogic.sol (internal library)
- 🆕 MarketState enum (in PredictionMarket)
- 🆕 Approval system functions (in Factory)
- 🆕 Dispute aggregation functions (in ResolutionManager)
- 🆕 Lifecycle events (in PredictionMarket)

**What's Enhanced:**
- ✨ FlexibleMarketFactory: unified + approval system + libraries
- ✨ PredictionMarket: lifecycle states + events + flexible init
- ✨ ResolutionManager: dispute aggregation + automatic finalization
- ✨ ParameterStorage: approval + dispute parameters
- ✨ CurveRegistry: metadata struct + getMetadata()
- ✨ MarketTemplateRegistry: metadata struct + getMetadata()

---

### 1.5 Timeline Overview

**Total Duration**: 48 days (Days 18-65)
**Mainnet Target**: Day 65 (mid-range estimate)
**Current Status**: Week 2 Complete (Day 17), Ready to Start Phase 0

**7 Phases:**

| Phase | Days | Duration | Risk | Deliverable |
|-------|------|----------|------|-------------|
| **Phase 0** | 18-20 | 2-3 days | ⚠️ BLOCKER | Size verification (GO/NO-GO) |
| **Phase 1** | 21-25 | 3-5 days | 🟢 LOW | Internal libraries |
| **Phase 2** | 26-28 | 2-3 days | 🟢 LOW | Enhanced metadata |
| **Phase 3** | 29-35 | 5-7 days | 🔴 CRITICAL | VersionedRegistry (7 contracts) |
| **Phase 4** | 36-43 | 6-8 days | 🟡 MEDIUM-HIGH | Unified factory + approval |
| **Phase 5** | 44-50 | 5-7 days | 🟡 MEDIUM-HIGH | Market lifecycle |
| **Phase 6** | 51-56 | 4-6 days | 🟡 MEDIUM-HIGH | Resolution + disputes |
| **Phase 7** | 57-66 | 7-10 days | 🔴 CRITICAL | Full validation |

**Gantt Chart:**

```
Week 3 (Days 18-21):  [████████] Phase 0 Complete
Week 4 (Days 22-28):  [█████████████████] Phase 1 + Phase 2 Complete
Week 5 (Days 29-35):  [████████████████] Phase 3 Complete (CRITICAL)
Week 6 (Days 36-42):  [███████████████] Phase 4 (Ongoing)
Week 7 (Days 43-49):  [██████████] Phase 4 Complete + Phase 5 Start
Week 8 (Days 50-56):  [████████████] Phase 5 Complete + Phase 6 Complete
Week 9 (Days 57-63):  [███████████████] Phase 7 (Validation)
Week 10 (Days 64-65): [█████] Final checks → MAINNET DAY 65! 🚀
```

---

## PART 2: ARCHITECTURE DEEP DIVE

### 2.1 Contract Comparison Matrix (ARCH-03)

**Detailed Before/After Comparison:**

#### 1. Registry System

**Before:**
```solidity
// MasterRegistry.sol (336 lines)
contract MasterRegistry {
    mapping(bytes32 => address) private contracts;

    function setContract(bytes32 id, address addr) external onlyOwner {
        contracts[id] = addr;
        emit ContractSet(id, addr);
    }

    function getContract(bytes32 id) external view returns (address) {
        address addr = contracts[id];
        require(addr != address(0), "Contract not found");
        return addr;
    }
}

// NO VERSION TRACKING
// NO UPGRADE HISTORY
// SIMPLE MAPPING ONLY
```

**After:**
```solidity
// VersionedRegistry.sol (NEW)
contract VersionedRegistry {
    struct Entry {
        address contractAddress;
        uint256 version;
        bool active;
    }

    mapping(bytes32 => Entry) private entries;
    mapping(bytes32 => mapping(uint256 => address)) private versionHistory;

    function setContract(bytes32 id, address addr, uint256 version)
        external onlyOwner
    {
        entries[id] = Entry(addr, version, true);
        versionHistory[id][version] = addr;
        emit ContractRegistered(id, addr, version);
    }

    function getContract(bytes32 id) external view returns (address) {
        require(entries[id].active, "Contract inactive");
        return entries[id].contractAddress;
    }

    function getContractVersion(bytes32 id, uint256 version)
        external view returns (address)
    {
        return versionHistory[id][version];
    }

    function getLatestVersion(bytes32 id)
        external view returns (uint256)
    {
        return entries[id].version;
    }
}

// ✅ VERSION TRACKING
// ✅ UPGRADE HISTORY
// ✅ BACKWARD COMPATIBILITY
```

**Key Differences:**
- ✅ Version number stored for each contract
- ✅ Version history mapping (can query old versions)
- ✅ Active/inactive flag (can deactivate old versions)
- ✅ Query latest version or specific version
- ✅ Better upgrade path

---

#### 2. Factory System

**Before:**
```
FlexibleMarketFactory.sol (947 lines) - EXCEEDS 24KB ❌
 ↓ Split into:
FlexibleMarketFactoryCore.sol (548 lines)
FlexibleMarketFactoryExtensions.sol (357 lines)

Issues:
- Awkward split (some functions in Core, some in Extensions)
- No clear logic separation
- Hard to maintain
- No approval system
- Markets activate immediately
```

**After:**
```
FlexibleMarketFactory.sol (UNIFIED - estimated 850-900 lines)
 ├─ State variables (from Core)
 ├─ Core functions (from Core)
 ├─ Extension functions (from Extensions)
 ├─ NEW: Approval system (automatic + override)
 ├─ Uses CurveMarketLogic library (extracted logic)
 └─ Uses TemplateMarketLogic library (extracted logic)

Benefits:
- Single contract (cleaner)
- Logic extracted to libraries (stays <24KB)
- Approval system integrated
- Markets require approval before activation
- Admin override capabilities
```

**Factory Function Comparison:**

| Function | Before | After |
|----------|---------|-------|
| `createMarket()` | Core.sol | Unified (same) |
| `createMarketWithTemplate()` | Extensions.sol | Unified (same) |
| `createMarketWithCurve()` | Extensions.sol | Unified (same) |
| `approveMarket()` | ❌ Doesn't exist | ✅ NEW (automatic) |
| `adminApproveMarket()` | ❌ Doesn't exist | ✅ NEW (override) |
| `adminRejectMarket()` | ❌ Doesn't exist | ✅ NEW (override) |
| `activateMarket()` | ❌ Doesn't exist | ✅ NEW (after approval) |

---

#### 3. Market System

**Before:**
```solidity
// PredictionMarket.sol
contract PredictionMarket {
    // NO STATE MANAGEMENT
    // Market is just "active" or "resolved"

    bool public resolved;
    bool public outcome;

    function initialize(...) external {
        // Market immediately active
        // No approval needed
        // No lifecycle tracking
    }
}
```

**After:**
```solidity
// PredictionMarket.sol (ENHANCED)
contract PredictionMarket {
    enum MarketState {
        PROPOSED,    // Just created, awaiting approval
        APPROVED,    // Approved, ready to activate
        ACTIVE,      // Live trading
        RESOLVING,   // Trading ended, awaiting resolution
        DISPUTED,    // Resolution challenged
        FINALIZED    // Final outcome set
    }

    MarketState public state;

    function initialize(...) external {
        state = MarketState.PROPOSED;
        emit MarketProposed(creator, question);
        // Market NOT active yet
        // Needs approval first
    }

    function approve() external onlyFactory {
        require(state == MarketState.PROPOSED);
        state = MarketState.APPROVED;
        emit MarketApproved(msg.sender);
    }

    function activate() external onlyFactory {
        require(state == MarketState.APPROVED);
        state = MarketState.ACTIVE;
        emit MarketActivated(block.timestamp);
    }

    // State query functions
    function isActive() public view returns (bool) {
        return state == MarketState.ACTIVE;
    }
}
```

**Key Differences:**
- ✅ 6 clear lifecycle states
- ✅ State transition functions
- ✅ State validation (can only placeBet when ACTIVE)
- ✅ Events for each state change
- ✅ Easy frontend tracking (query state)

---

#### 4. Resolution System

**Before:**
```solidity
// ResolutionManager.sol
contract ResolutionManager {
    function resolveMarket(address market, bool outcome)
        external onlyResolver
    {
        // Resolver proposes, immediately final
        // No community validation
        // No dispute window

        IPredictionMarket(market).resolve(outcome);
        emit MarketResolved(market, outcome);
    }
}
```

**After:**
```solidity
// ResolutionManager.sol (ENHANCED)
contract ResolutionManager {
    struct DisputeWindow {
        uint256 startTime;
        uint256 endTime;
        uint256 agreeCount;
        uint256 disagreeCount;
        bool isActive;
    }

    mapping(address => DisputeWindow) public disputes;

    function proposeResolution(address market, bool outcome)
        external onlyResolver
    {
        // Open dispute window (48h default)
        disputes[market] = DisputeWindow({
            startTime: block.timestamp,
            endTime: block.timestamp + disputeWindowDuration,
            agreeCount: 0,
            disagreeCount: 0,
            isActive: true
        });

        emit ResolutionProposed(market, outcome);
        emit DisputeWindowOpened(market, outcome, disputeWindowDuration);
    }

    function submitDisputeSignals(
        address market,
        uint256 agreeCount,
        uint256 disagreeCount
    ) external onlyBackend {
        DisputeWindow storage window = disputes[market];
        window.agreeCount = agreeCount;
        window.disagreeCount = disagreeCount;

        // Auto-finalize if strong agreement (75%+)
        if (agreeCount >= disagreeCount * 3) {
            IPredictionMarket(market).finalize(proposedOutcome);
            emit MarketAutoFinalized(market);
        }
        // Auto-dispute if disagreement
        else if (disagreeCount > agreeCount) {
            IPredictionMarket(market).dispute("Community disagreement");
            emit MarketMarkedDisputed(market);
        }
    }

    function adminResolveMarket(
        address market,
        bool outcome,
        string calldata reason
    ) external onlyAdmin {
        // Admin can force resolve anytime
        IPredictionMarket(market).finalize(outcome);
        emit AdminOverride(market, outcome, reason);
    }
}
```

**Key Differences:**
- ✅ Dispute window opens automatically
- ✅ Off-chain votes aggregated by backend
- ✅ Automatic finalization when agreement threshold met
- ✅ Automatic dispute marking when disagreement
- ✅ Admin can override (force resolve anytime)

---

### 2.2 Interface Changes Map (ARCH-04)

**All Interface Changes:**

#### 1. IMasterRegistry → IVersionedRegistry

```solidity
// BEFORE: IMasterRegistry.sol
interface IMasterRegistry {
    function setContract(bytes32 id, address contractAddress) external;
    function getContract(bytes32 id) external view returns (address);

    event ContractSet(bytes32 indexed id, address indexed contractAddress);
}

// AFTER: IVersionedRegistry.sol
interface IVersionedRegistry {
    function setContract(bytes32 id, address contractAddress, uint256 version) external;
    function getContract(bytes32 id) external view returns (address);
    function getContractVersion(bytes32 id, uint256 version) external view returns (address);
    function getLatestVersion(bytes32 id) external view returns (uint256);
    function updateContract(bytes32 id, address newAddress, uint256 newVersion) external;
    function deactivateContract(bytes32 id) external;

    event ContractRegistered(bytes32 indexed id, address indexed contractAddress, uint256 version);
    event ContractUpdated(bytes32 indexed id, address indexed oldAddress, address indexed newAddress, uint256 newVersion);
    event ContractDeactivated(bytes32 indexed id);
}

// BREAKING CHANGES:
// - setContract() now requires version parameter
// - Added version query functions
// - Added update and deactivate functions
// - New events with version info
```

**Migration Required**: All contracts using `IMasterRegistry` must update to `IVersionedRegistry`

---

#### 2. IFlexibleMarketFactory (Enhanced)

```solidity
// BEFORE
interface IFlexibleMarketFactory {
    function createMarket(...) external returns (address);
    function createMarketWithTemplate(...) external returns (address);
    function createMarketWithCurve(...) external returns (address);
}

// AFTER (ENHANCED)
interface IFlexibleMarketFactory {
    // Existing functions (unchanged)
    function createMarket(...) external returns (address);
    function createMarketWithTemplate(...) external returns (address);
    function createMarketWithCurve(...) external returns (address);

    // NEW: Approval system
    function approveMarket(address market) external;
    function adminApproveMarket(address market) external;
    function adminRejectMarket(address market) external;
    function activateMarket(address market) external;
    function hasApprovalThreshold(address market) external view returns (bool);

    // NEW: Events
    event MarketApproved(address indexed market, address indexed approver);
    event MarketRejected(address indexed market, address indexed rejector, string reason);
    event AdminOverride(address indexed market, string action, address indexed admin);
    event MarketActivated(address indexed market, uint256 timestamp);
}

// ADDITIVE CHANGES (backward compatible):
// - Existing functions unchanged
// - New approval functions added
// - New events added
```

**Migration Required**: Tests need to handle new approval flow (create → approve → activate)

---

#### 3. IPredictionMarket (Enhanced)

```solidity
// BEFORE
interface IPredictionMarket {
    function initialize(bytes calldata data) external;
    function placeBet(bool outcome) external payable;
    function resolve(bool outcome) external;
}

// AFTER (ENHANCED)
interface IPredictionMarket {
    enum MarketState {
        PROPOSED, APPROVED, ACTIVE, RESOLVING, DISPUTED, FINALIZED
    }

    // Existing functions (signatures unchanged, but behavior enhanced)
    function initialize(bytes calldata data) external;
    function placeBet(bool outcome) external payable;

    // NEW: Lifecycle functions
    function approve() external;
    function activate() external;
    function dispute(string calldata reason) external;
    function finalize(bool outcome) external;

    // NEW: State queries
    function state() external view returns (MarketState);
    function isProposed() external view returns (bool);
    function isApproved() external view returns (bool);
    function isActive() external view returns (bool);
    function isResolving() external view returns (bool);
    function isDisputed() external view returns (bool);
    function isFinalized() external view returns (bool);

    // NEW: Events
    event MarketStateChanged(MarketState newState, uint256 timestamp);
    event MarketProposed(address indexed creator, string question);
    event MarketApproved(address indexed approver);
    event MarketActivated(uint256 timestamp);
    event ResolutionStarted(uint256 timestamp);
    event MarketDisputed(address indexed disputer, string reason);
    event MarketFinalized(bool outcome, uint256 timestamp);
}

// BEHAVIORAL CHANGES:
// - initialize() now sets state = PROPOSED (not immediately active)
// - placeBet() now requires state == ACTIVE
// - resolve() replaced with proposeResolution() → finalize() flow
```

**Migration Required**:
- Tests must handle lifecycle (propose → approve → activate → trade)
- Resolution tests must handle dispute window

---

### 2.3 Event Schema Evolution (ARCH-05)

**All New/Changed Events:**

#### Factory Events

```solidity
// NEW EVENTS
event MarketApproved(
    address indexed market,
    address indexed approver,
    uint256 timestamp
);

event MarketRejected(
    address indexed market,
    address indexed rejector,
    string reason,
    uint256 timestamp
);

event AdminOverride(
    address indexed market,
    string action,
    address indexed admin,
    uint256 timestamp
);

event MarketActivated(
    address indexed market,
    uint256 timestamp
);
```

**Frontend Usage:**
```typescript
// Listen for approval
factory.on("MarketApproved", (market, approver, timestamp) => {
    console.log(`Market ${market} approved by ${approver}`);
    updateUI(market, "APPROVED");
});

// Listen for activation
factory.on("MarketActivated", (market, timestamp) => {
    console.log(`Market ${market} is now ACTIVE`);
    updateUI(market, "ACTIVE");
});
```

---

#### Market Lifecycle Events

```solidity
// NEW EVENTS
event MarketStateChanged(
    MarketState indexed newState,
    uint256 timestamp
);

event MarketProposed(
    address indexed creator,
    string question,
    uint256 indexed category,
    uint256 expiry
);

event MarketApproved(
    address indexed approver
);

event MarketActivated(
    uint256 timestamp
);

event ResolutionStarted(
    uint256 timestamp
);

event MarketDisputed(
    address indexed disputer,
    string reason
);

event MarketFinalized(
    bool outcome,
    uint256 timestamp
);
```

**Frontend Usage:**
```typescript
// Listen to state changes
market.on("MarketStateChanged", (newState, timestamp) => {
    const stateName = ["PROPOSED", "APPROVED", "ACTIVE", "RESOLVING", "DISPUTED", "FINALIZED"][newState];
    console.log(`Market state: ${stateName}`);
    updateUI(market, stateName);
});

// Listen for disputes
market.on("MarketDisputed", (disputer, reason) => {
    console.log(`Market disputed by ${disputer}: ${reason}`);
    showDisputeUI(market, reason);
});
```

---

#### Resolution Manager Events

```solidity
// NEW EVENTS
event ResolutionProposed(
    address indexed market,
    bool outcome,
    address indexed resolver
);

event DisputeWindowOpened(
    address indexed market,
    bool proposedOutcome,
    uint256 windowDuration
);

event DisputeSignalsSubmitted(
    address indexed market,
    uint256 agreeCount,
    uint256 disagreeCount
);

event MarketAutoFinalized(
    address indexed market,
    bool outcome
);

event MarketMarkedDisputed(
    address indexed market
);

event AdminOverride(
    address indexed market,
    bool outcome,
    string reason,
    address indexed admin
);
```

**Frontend Usage:**
```typescript
// Listen for resolution proposal
resolutionManager.on("DisputeWindowOpened", (market, outcome, duration) => {
    console.log(`Dispute window opened for ${market}`);
    showDisputeUI(market, outcome, duration);
    startCountdown(duration);
});

// Listen for dispute signals
resolutionManager.on("DisputeSignalsSubmitted", (market, agree, disagree) => {
    const agreePct = (agree / (agree + disagree)) * 100;
    console.log(`Market ${market}: ${agreePct}% agreement`);
    updateDisputeUI(market, agreePct);
});

// Listen for auto-finalization
resolutionManager.on("MarketAutoFinalized", (market, outcome) => {
    console.log(`Market ${market} auto-finalized: ${outcome}`);
    hideDisputeUI(market);
    showFinalOutcome(market, outcome);
});
```

---

### 2.4 State Management Changes (ARCH-06)

**Market Lifecycle State Machine:**

```
State Machine Diagram:

    PROPOSED
       │
       │ approve()
       ▼
    APPROVED
       │
       │ activate()
       ▼
     ACTIVE
       │
       │ expiry reached
       ▼
   RESOLVING ───────┐
       │            │
       │ finalize() │ dispute()
       │            │
       ▼            ▼
   FINALIZED     DISPUTED
                    │
                    │ adminResolve()
                    │
                    ▼
                 FINALIZED
```

**Valid State Transitions:**

| From | To | Function | Who Can Call |
|------|-----|----------|--------------|
| PROPOSED | APPROVED | `approve()` | Factory (auto or admin) |
| PROPOSED | PROPOSED | (rejected, stays proposed) | Admin can reject |
| APPROVED | ACTIVE | `activate()` | Factory |
| ACTIVE | RESOLVING | (automatic on expiry) | Internal |
| RESOLVING | FINALIZED | `finalize()` | Resolver or auto |
| RESOLVING | DISPUTED | `dispute()` | Anyone or auto |
| DISPUTED | FINALIZED | `adminResolve()` | Admin only |

**Invalid Transitions** (will revert):
- ❌ PROPOSED → ACTIVE (must approve first)
- ❌ ACTIVE → FINALIZED (must resolve first)
- ❌ FINALIZED → any (immutable once finalized)
- ❌ DISPUTED → RESOLVING (can only go to FINALIZED via admin)

**State Validation Example:**

```solidity
// In PredictionMarket.sol
modifier onlyInState(MarketState requiredState) {
    require(state == requiredState, "Invalid state");
    _;
}

function placeBet(bool outcome) external payable onlyInState(MarketState.ACTIVE) {
    // Can only bet when market is ACTIVE
    // Will revert if PROPOSED, APPROVED, RESOLVING, DISPUTED, or FINALIZED
    ...
}

function finalize(bool outcome) external onlyResolver onlyInState(MarketState.RESOLVING) {
    // Can only finalize when market is RESOLVING
    // Will revert if in any other state
    state = MarketState.FINALIZED;
    emit MarketFinalized(outcome, block.timestamp);
}
```

---

### 2.5 Approval System Design (ARCH-07)

**Complete Approval Flow:**

```
User Approval Flow (Automatic + Override):

1. USER CREATES PROPOSAL
   │
   │ factory.createMarket(...)
   │
   ▼
2. MARKET PROPOSED (state = PROPOSED)
   │
   │ emit MarketProposed event
   │
   ▼
3. OFF-CHAIN AGGREGATION
   │
   │ Users click "Like" or "Dislike" (stored in Supabase)
   │ Backend aggregates: 124 likes, 31 dislikes = 80% likes
   │
   ▼
4. THRESHOLD CHECK (every 5 minutes)
   │
   │ Backend checks: likes / (likes + dislikes) >= 70%?
   │
   ├─ YES (80% >= 70%) ──────────────────┐
   │                                      │
   │                                      ▼
   │                              5. AUTOMATIC APPROVAL
   │                                      │
   │                                      │ backend calls factory.approveMarket(market)
   │                                      │
   │                                      ▼
   │                              6. MARKET APPROVED (state = APPROVED)
   │                                      │
   │                                      │ emit MarketApproved event
   │                                      │
   │                                      ▼
   │                              7. ACTIVATION
   │                                      │
   │                                      │ backend calls factory.activateMarket(market)
   │                                      │
   │                                      ▼
   │                              8. MARKET ACTIVE (state = ACTIVE)
   │                                      │
   │                                      │ emit MarketActivated event
   │                                      │
   │                                      ▼
   │                              9. TRADING BEGINS
   │
   │
   └─ NO (60% < 70%) OR ADMIN OVERRIDE
       │
       │ Admin can manually approve/reject anytime
       │
       ├─ ADMIN APPROVES ──────────────────┐
       │                                    │
       │  adminApproveMarket(market)        │
       │                                    ▼
       │                           MARKET APPROVED (skip threshold)
       │
       └─ ADMIN REJECTS
           │
           │ adminRejectMarket(market)
           │
           ▼
          MARKET STAYS PROPOSED (or deleted)
```

**Code Implementation:**

```solidity
// In FlexibleMarketFactory.sol

// Automatic approval (called by backend relayer)
function approveMarket(address market) external onlyBackend nonReentrant {
    require(hasApprovalThreshold(market), "Threshold not met");
    _approveMarket(market);
}

// Admin override - approve anytime
function adminApproveMarket(address market) external onlyAdmin nonReentrant {
    _approveMarket(market);
    emit AdminOverride(market, "APPROVED", msg.sender);
}

// Admin override - reject anytime
function adminRejectMarket(address market) external onlyAdmin nonReentrant {
    IPredictionMarket(market).reject();
    emit AdminOverride(market, "REJECTED", msg.sender);
}

// Internal approval logic
function _approveMarket(address market) internal {
    IPredictionMarket(market).approve();
    emit MarketApproved(market, msg.sender, block.timestamp);
}

// Check if threshold met (called by backend)
function hasApprovalThreshold(address market) public view returns (bool) {
    // Query approval data from backend (off-chain)
    // This function would integrate with backend API or oracle
    // For now, backend makes this determination before calling approveMarket()
    return true; // Placeholder
}
```

**Backend Relayer Logic (Node.js):**

```javascript
// Backend cron job (runs every 5 minutes)
async function checkPendingApprovals() {
    // 1. Get all PROPOSED markets from contract
    const proposedMarkets = await factory.getPendingMarkets();

    for (const market of proposedMarkets) {
        // 2. Get like/dislike counts from Supabase
        const { likes, dislikes } = await db.getMarketVotes(market);

        // 3. Check threshold
        const total = likes + dislikes;
        const likePct = (likes / total) * 100;

        // 4. Get threshold from ParameterStorage
        const threshold = await parameterStorage.approvalLikeThreshold();
        const minVotes = await parameterStorage.minApprovalsRequired();

        // 5. If threshold met, trigger approval
        if (total >= minVotes && likePct >= threshold) {
            console.log(`Market ${market}: ${likePct}% likes >= ${threshold}% threshold`);

            // Call contract to approve
            const tx = await factory.approveMarket(market);
            await tx.wait();

            console.log(`Market ${market} approved! Tx: ${tx.hash}`);

            // Activate market
            const activateTx = await factory.activateMarket(market);
            await activateTx.wait();

            console.log(`Market ${market} activated! Tx: ${activateTx.hash}`);
        }
    }
}

// Run every 5 minutes
setInterval(checkPendingApprovals, 5 * 60 * 1000);
```

---

### 2.6 Dispute System Design (ARCH-08)

**Complete Dispute Flow:**

```
Resolution & Dispute Flow (Automatic + Override):

1. MARKET EXPIRES
   │
   │ Trading ends, state → RESOLVING
   │
   ▼
2. RESOLVER PROPOSES OUTCOME
   │
   │ resolutionManager.proposeResolution(market, outcome)
   │
   ▼
3. DISPUTE WINDOW OPENS (48h default)
   │
   │ emit DisputeWindowOpened(market, outcome, 48h)
   │
   ▼
4. OFF-CHAIN VOTING
   │
   │ Users click "Agree" or "Disagree" (stored in Supabase)
   │ Backend aggregates: 78 agree, 22 disagree = 78% agreement
   │
   ▼
5. BACKEND SUBMITS SIGNALS (every 5 minutes)
   │
   │ backend calls submitDisputeSignals(market, agreeCount, disagreeCount)
   │
   ▼
6. AUTOMATIC DECISION
   │
   ├─ STRONG AGREEMENT (≥75%) ──────────────────┐
   │                                             │
   │  78% >= 75% threshold                       ▼
   │                                     7. AUTO-FINALIZE
   │                                             │
   │                                             │ market.finalize(outcome)
   │                                             │
   │                                             ▼
   │                                     8. MARKET FINALIZED
   │                                             │
   │                                             │ emit MarketAutoFinalized
   │                                             │
   │                                             ▼
   │                                     9. PAYOUTS DISTRIBUTED
   │
   ├─ STRONG DISAGREEMENT (>50% disagree) ──────┐
   │                                             │
   │  disagree > agree                           ▼
   │                                     7. AUTO-DISPUTE
   │                                             │
   │                                             │ market.dispute("Community disagreement")
   │                                             │
   │                                             ▼
   │                                     8. MARKET DISPUTED
   │                                             │
   │                                             │ emit MarketMarkedDisputed
   │                                             │
   │                                             ▼
   │                                     9. REQUIRES ADMIN RESOLUTION
   │                                             │
   │                                             │ admin calls adminResolveMarket()
   │                                             │
   │                                             ▼
   │                                     10. MARKET FINALIZED (admin decision)
   │
   └─ INCONCLUSIVE OR ADMIN OVERRIDE
       │
       │ Admin can manually resolve anytime
       │
       └─ ADMIN RESOLVES
           │
           │ adminResolveMarket(market, outcome, reason)
           │
           ▼
          MARKET FINALIZED (override automatic)
```

**Code Implementation:**

```solidity
// In ResolutionManager.sol

struct DisputeWindow {
    uint256 startTime;
    uint256 endTime;
    uint256 agreeCount;
    uint256 disagreeCount;
    bool outcome;
    bool isActive;
}

mapping(address => DisputeWindow) public disputes;

// Resolver proposes outcome → opens dispute window
function proposeResolution(address market, bool outcome) external onlyResolver {
    uint256 windowDuration = IParameterStorage(registry.getContract("ParameterStorage")).disputeWindowDuration();

    disputes[market] = DisputeWindow({
        startTime: block.timestamp,
        endTime: block.timestamp + windowDuration,
        agreeCount: 0,
        disagreeCount: 0,
        outcome: outcome,
        isActive: true
    });

    IPredictionMarket(market).startResolving();

    emit ResolutionProposed(market, outcome, msg.sender);
    emit DisputeWindowOpened(market, outcome, windowDuration);
}

// Backend submits aggregated vote signals
function submitDisputeSignals(
    address market,
    uint256 agreeCount,
    uint256 disagreeCount
) external onlyBackend nonReentrant {
    DisputeWindow storage window = disputes[market];
    require(window.isActive, "No active dispute window");

    window.agreeCount = agreeCount;
    window.disagreeCount = disagreeCount;

    emit DisputeSignalsSubmitted(market, agreeCount, disagreeCount);

    uint256 total = agreeCount + disagreeCount;
    uint256 agreePct = (agreeCount * 100) / total;
    uint256 threshold = IParameterStorage(registry.getContract("ParameterStorage")).disputeAgreementThreshold();

    // Auto-finalize if strong agreement
    if (agreePct >= threshold) {
        window.isActive = false;
        IPredictionMarket(market).finalize(window.outcome);
        emit MarketAutoFinalized(market, window.outcome);
    }
    // Auto-dispute if strong disagreement
    else if (disagreeCount > agreeCount) {
        window.isActive = false;
        IPredictionMarket(market).dispute("Community disagreement");
        emit MarketMarkedDisputed(market);
    }
}

// Admin can force resolve anytime
function adminResolveMarket(
    address market,
    bool outcome,
    string calldata reason
) external onlyAdmin nonReentrant {
    DisputeWindow storage window = disputes[market];
    window.isActive = false;

    IPredictionMarket(market).finalize(outcome);

    emit AdminOverride(market, outcome, reason, msg.sender);
}
```

**Backend Relayer Logic (Node.js):**

```javascript
// Backend cron job (runs every 5 minutes)
async function checkActiveDisputes() {
    // 1. Get all RESOLVING markets with active dispute windows
    const resolvingMarkets = await resolutionManager.getActiveDisputes();

    for (const market of resolvingMarkets) {
        // 2. Get agree/disagree counts from Supabase
        const { agrees, disagrees } = await db.getDisputeVotes(market);

        // 3. Submit signals to contract
        const tx = await resolutionManager.submitDisputeSignals(
            market,
            agrees,
            disagrees
        );
        await tx.wait();

        const total = agrees + disagrees;
        const agreePct = (agrees / total) * 100;

        console.log(`Market ${market}: ${agreePct}% agreement (${agrees}/${total})`);

        // 4. Check if auto-finalized or auto-disputed
        const marketState = await predictionMarket.state();
        if (marketState === 5) { // FINALIZED
            console.log(`Market ${market} auto-finalized!`);
        } else if (marketState === 4) { // DISPUTED
            console.log(`Market ${market} marked as DISPUTED, requires admin`);
        }
    }
}

// Run every 5 minutes
setInterval(checkActiveDisputes, 5 * 60 * 1000);
```

---

### 2.7 Registry Pattern Evolution (ARCH-09)

**Migration Strategy: MasterRegistry → VersionedRegistry**

**Why Versioning Matters:**

```
Scenario: You want to upgrade FlexibleMarketFactory

Without Versioning (Current):
1. Deploy new FlexibleMarketFactoryV2
2. Call masterRegistry.setContract("FlexibleMarketFactory", newAddress)
3. Old address overwritten, can't access v1 anymore
4. If v2 has bug, can't rollback to v1 (address lost)
5. Don't know which version is deployed

With Versioning (New):
1. Deploy new FlexibleMarketFactoryV2
2. Call versionedRegistry.setContract("FlexibleMarketFactory", newAddress, 2)
3. V2 is now latest, but v1 address still stored (versionHistory[id][1])
4. Can query: getContractVersion("FlexibleMarketFactory", 1) → old address
5. Can rollback: setContract("FlexibleMarketFactory", v1Address, 1)
6. Always know which version: getLatestVersion("FlexibleMarketFactory") → 2
```

**Version Storage Design:**

```solidity
contract VersionedRegistry {
    struct Entry {
        address contractAddress;  // Current/latest version
        uint256 version;          // Current version number
        bool active;              // Can be deactivated
    }

    // Latest version for each module
    mapping(bytes32 => Entry) private entries;

    // Version history: module ID → version → address
    mapping(bytes32 => mapping(uint256 => address)) private versionHistory;

    // Example state after 3 factory upgrades:
    // entries["FlexibleMarketFactory"] = Entry(0x789..., 3, true)
    // versionHistory["FlexibleMarketFactory"][1] = 0x123...
    // versionHistory["FlexibleMarketFactory"][2] = 0x456...
    // versionHistory["FlexibleMarketFactory"][3] = 0x789...
}
```

**Migration Process (Old → New):**

```javascript
// Export all entries from old MasterRegistry
const oldEntries = [
    { id: "FlexibleMarketFactory", address: "0x123..." },
    { id: "PredictionMarket", address: "0x456..." },
    { id: "CurveRegistry", address: "0x789..." },
    // ... all entries
];

// Deploy VersionedRegistry
const versionedRegistry = await VersionedRegistry.deploy();

// Import all entries with version = 1
for (const entry of oldEntries) {
    await versionedRegistry.setContract(
        ethers.utils.id(entry.id),
        entry.address,
        1 // Initial version
    );
}

// Update all dependent contracts to use VersionedRegistry
// (This is done in Phase 3)
```

**Backward Compatibility:**

```solidity
// Old contracts can still call getContract() without changes
function getContract(bytes32 id) external view returns (address) {
    return entries[id].contractAddress; // Returns latest version
}

// New contracts can query specific versions
function getContractVersion(bytes32 id, uint256 version)
    external view returns (address)
{
    return versionHistory[id][version];
}
```

---

### 2.8 Library Strategy (ARCH-10)

**Why Internal Libraries:**

```
Problem: FlexibleMarketFactory (Core 548L + Ext 357L = 905L) exceeds 24KB limit

Solution: Extract logic to internal libraries
- CurveMarketLogic: curve validation + curve-based market creation
- TemplateMarketLogic: template validation + template-based market creation

Benefits:
✅ Reduces factory bytecode size (stays <24KB)
✅ No separate deployment (internal libraries compiled into factory)
✅ No additional deployment cost
✅ Cleaner code organization
✅ Reusable logic (could use in other factories later)
```

**Library Architecture:**

```solidity
// libraries/CurveMarketLogic.sol
library CurveMarketLogic {
    function validateCurve(
        address curveRegistry,
        bytes32 curveId
    ) internal view returns (address) {
        // Validate curve exists and is active
        address curveAddress = ICurveRegistry(curveRegistry).getCurveByName(curveId);
        require(curveAddress != address(0), "Invalid curve");
        return curveAddress;
    }

    function createWithCurve(
        address curveRegistry,
        bytes32 curveId,
        bytes calldata data
    ) internal returns (address) {
        // Validate curve
        address curveAddress = validateCurve(curveRegistry, curveId);

        // Clone and initialize market with curve
        address market = Clones.clone(curveAddress);
        IPredictionMarket(market).initialize(data);

        return market;
    }
}

// libraries/TemplateMarketLogic.sol
library TemplateMarketLogic {
    function validateTemplate(
        address templateRegistry,
        uint256 templateId
    ) internal view returns (address) {
        // Validate template exists and is active
        address templateAddress = IMarketTemplateRegistry(templateRegistry).getTemplate(templateId);
        require(templateAddress != address(0), "Invalid template");
        return templateAddress;
    }

    function createWithTemplate(
        address templateRegistry,
        uint256 templateId,
        bytes calldata data
    ) internal returns (address) {
        // Validate template
        address templateAddress = validateTemplate(templateRegistry, templateId);

        // Clone and initialize market with template
        address market = Clones.clone(templateAddress);
        IPredictionMarket(market).initialize(data);

        return market;
    }
}
```

**Integration in Factory:**

```solidity
// FlexibleMarketFactory.sol
import "./libraries/CurveMarketLogic.sol";
import "./libraries/TemplateMarketLogic.sol";

contract FlexibleMarketFactory {
    using CurveMarketLogic for address;
    using TemplateMarketLogic for address;

    function createMarketWithCurve(
        bytes32 curveId,
        bytes calldata data
    ) external returns (address) {
        // Use library function (compiled inline)
        address curveRegistry = registry.getContract("CurveRegistry");
        address market = curveRegistry.createWithCurve(curveId, data);

        emit MarketCreated(market, msg.sender, curveId);
        return market;
    }

    function createMarketWithTemplate(
        uint256 templateId,
        bytes calldata data
    ) external returns (address) {
        // Use library function (compiled inline)
        address templateRegistry = registry.getContract("MarketTemplateRegistry");
        address market = templateRegistry.createWithTemplate(templateId, data);

        emit MarketCreated(market, msg.sender, templateId);
        return market;
    }
}
```

**Bytecode Size Impact:**

```
Before (split factory):
- FlexibleMarketFactoryCore: ~18KB
- FlexibleMarketFactoryExtensions: ~12KB
- Total: ~30KB (need 2 contracts)

After (unified with libraries):
- FlexibleMarketFactory: ~22KB (includes approval system)
- CurveMarketLogic: compiled inline (no separate deployment)
- TemplateMarketLogic: compiled inline (no separate deployment)
- Total: ~22KB (single contract, <24KB ✅)
```

---

### 2.9 Parameter Flexibility System (ARCH-11)

**Complete Parameter Reference:**

```solidity
// ParameterStorage.sol (ENHANCED)

contract ParameterStorage {
    // ===== EXISTING PARAMETERS =====

    // Market Creation Parameters
    uint256 public minBondAmount;          // Min creator bond (default: 1 ETH)
    uint256 public maxBondAmount;          // Max creator bond (default: 10 ETH)
    uint256 public minResolutionTime;      // Min market duration (default: 1 day)
    uint256 public maxResolutionTime;      // Max market duration (default: 365 days)
    uint256 public creatorBondPercentage;  // % of volume for creator bond (default: 2%)

    // Economic Parameters
    uint256 public platformFeePercentage;         // Platform fee (default: 2%)
    uint256 public liquidityProviderFeePercentage; // LP fee (default: 1%)
    uint256 public creatorFeePercentage;          // Creator fee (default: 1%)

    // Governance Parameters (for future V2)
    uint256 public proposalThreshold;   // Min tokens to propose (default: 100)
    uint256 public votingDelay;         // Blocks before voting (default: 1 day)
    uint256 public votingPeriod;        // Voting duration (default: 7 days)
    uint256 public quorumPercentage;    // Min votes needed (default: 10%)

    // ===== NEW APPROVAL PARAMETERS =====

    uint256 public approvalLikeThreshold;   // % likes to auto-approve (default: 70%)
    uint256 public approvalTimeWindow;      // Time to gather likes (default: 7 days)
    uint256 public minApprovalsRequired;    // Min votes needed (default: 10)

    // ===== NEW DISPUTE PARAMETERS =====

    uint256 public disputeAgreementThreshold;  // % agreement to finalize (default: 75%)
    uint256 public disputeWindowDuration;      // Dispute period (default: 48 hours)
    uint256 public minDisputeVotes;           // Min votes to consider (default: 20)

    // ===== SETTER FUNCTIONS (all onlyAdmin) =====

    // Market creation setters
    function setMinBondAmount(uint256 _amount) external onlyAdmin {
        require(_amount > 0, "Invalid amount");
        uint256 oldValue = minBondAmount;
        minBondAmount = _amount;
        emit ParameterUpdated("minBondAmount", oldValue, _amount);
    }

    // Approval parameter setters
    function setApprovalLikeThreshold(uint256 _threshold) external onlyAdmin {
        require(_threshold >= 50 && _threshold <= 95, "Invalid threshold");
        uint256 oldValue = approvalLikeThreshold;
        approvalLikeThreshold = _threshold;
        emit ApprovalParameterUpdated("approvalLikeThreshold", oldValue, _threshold);
    }

    function setApprovalTimeWindow(uint256 _duration) external onlyAdmin {
        require(_duration >= 1 days && _duration <= 30 days, "Invalid duration");
        uint256 oldValue = approvalTimeWindow;
        approvalTimeWindow = _duration;
        emit ApprovalParameterUpdated("approvalTimeWindow", oldValue, _duration);
    }

    function setMinApprovalsRequired(uint256 _min) external onlyAdmin {
        require(_min >= 5 && _min <= 100, "Invalid minimum");
        uint256 oldValue = minApprovalsRequired;
        minApprovalsRequired = _min;
        emit ApprovalParameterUpdated("minApprovalsRequired", oldValue, _min);
    }

    // Dispute parameter setters
    function setDisputeAgreementThreshold(uint256 _threshold) external onlyAdmin {
        require(_threshold >= 50 && _threshold <= 95, "Invalid threshold");
        uint256 oldValue = disputeAgreementThreshold;
        disputeAgreementThreshold = _threshold;
        emit DisputeParameterUpdated("disputeAgreementThreshold", oldValue, _threshold);
    }

    function setDisputeWindowDuration(uint256 _duration) external onlyAdmin {
        require(_duration >= 12 hours && _duration <= 7 days, "Invalid duration");
        uint256 oldValue = disputeWindowDuration;
        disputeWindowDuration = _duration;
        emit DisputeParameterUpdated("disputeWindowDuration", oldValue, _duration);
    }

    function setMinDisputeVotes(uint256 _min) external onlyAdmin {
        require(_min >= 10 && _min <= 200, "Invalid minimum");
        uint256 oldValue = minDisputeVotes;
        minDisputeVotes = _min;
        emit DisputeParameterUpdated("minDisputeVotes", oldValue, _min);
    }

    // ===== EVENTS =====

    event ParameterUpdated(
        string indexed paramName,
        uint256 oldValue,
        uint256 newValue
    );

    event ApprovalParameterUpdated(
        string indexed paramName,
        uint256 oldValue,
        uint256 newValue
    );

    event DisputeParameterUpdated(
        string indexed paramName,
        uint256 oldValue,
        uint256 newValue
    );
}
```

**Parameter Impact Analysis:**

| Parameter | Lower Value → | Higher Value → | Recommended Range |
|-----------|---------------|----------------|-------------------|
| `approvalLikeThreshold` | More markets approved (easier) | Fewer markets approved (stricter) | 60-80% |
| `approvalTimeWindow` | Less time to gather votes | More time to gather votes | 3-14 days |
| `minApprovalsRequired` | Easier to meet threshold | Harder to meet threshold | 5-50 votes |
| `disputeAgreementThreshold` | Easier to auto-finalize | Harder to auto-finalize | 60-85% |
| `disputeWindowDuration` | Less time to dispute | More time to dispute | 24-96 hours |
| `minDisputeVotes` | Easier to trigger decision | Harder to trigger decision | 10-100 votes |

**Default Configuration (Production):**

```javascript
// Recommended defaults for mainnet launch
const defaultParams = {
    // Approval system
    approvalLikeThreshold: 70,         // 70% likes to approve
    approvalTimeWindow: 7 * 24 * 3600, // 7 days
    minApprovalsRequired: 10,          // 10 min votes

    // Dispute system
    disputeAgreementThreshold: 75,        // 75% agreement to finalize
    disputeWindowDuration: 48 * 3600,     // 48 hours
    minDisputeVotes: 20,                  // 20 min votes
};

// Apply during deployment
await parameterStorage.setApprovalLikeThreshold(defaultParams.approvalLikeThreshold);
await parameterStorage.setApprovalTimeWindow(defaultParams.approvalTimeWindow);
// ... etc
```

---

### 2.10 Gas Optimization Strategy (ARCH-12)

**Gas Cost Targets:**

```
Current Baseline (from Week 2 testing):
- createMarket(): ~200,000 gas
- placeBet(): ~80,000 gas
- resolveMarket(): ~150,000 gas

Target After Migration:
- createMarket(): <230,000 gas (+15% acceptable)
- placeBet(): <92,000 gas (+15% acceptable)
- resolveMarket(): <172,500 gas (+15% acceptable)

New Functions (estimate):
- approveMarket(): <80,000 gas
- activateMarket(): <60,000 gas
- submitDisputeSignals(): <100,000 gas

Overall: <15% increase acceptable for added functionality
```

**Optimization Techniques:**

1. **Storage Packing**: Pack state variables to save storage slots
```solidity
// Before (3 storage slots)
bool public resolved;
bool public outcome;
uint256 public resolutionTime;

// After (2 storage slots)
struct MarketState {
    bool resolved;       // 1 byte
    bool outcome;        // 1 byte
    uint248 reserved;    // 30 bytes (for future use)
    uint256 resolutionTime; // 32 bytes
}
// Saves 1 storage slot = 20,000 gas on deployment
```

2. **Internal Libraries**: Reduce bytecode size → cheaper deployment
```solidity
// Internal libraries compiled into contract (no external calls)
using CurveMarketLogic for address;
using TemplateMarketLogic for address;
// No DELEGATECALL overhead
```

3. **Event Optimization**: Use indexed parameters wisely
```solidity
// Before (3 indexed = more expensive)
event MarketCreated(
    address indexed market,
    address indexed creator,
    uint256 indexed category
);

// After (2 indexed = cheaper, still searchable)
event MarketCreated(
    address indexed market,
    address indexed creator,
    uint256 category // Not indexed (less common search)
);
```

4. **Batch Operations**: Reduce number of transactions
```solidity
// Instead of: approve() then activate() (2 txs)
// Option: approveAndActivate() (1 tx, saves gas)
function approveAndActivate(address market) external onlyBackend {
    _approveMarket(market);
    _activateMarket(market);
    // Saves ~21,000 gas (base tx cost)
}
```

**Gas Benchmarking Process:**

```javascript
// hardhat.config.js
module.exports = {
    gasReporter: {
        enabled: true,
        currency: 'USD',
        gasPrice: 20, // gwei
        showTimeSpent: true,
        showMethodSig: true,
    }
};

// Run gas benchmarking
// npx hardhat test --grep "gas benchmark"

// Compare before/after
const results = {
    before: {
        createMarket: 200000,
        placeBet: 80000,
        resolveMarket: 150000
    },
    after: {
        createMarket: 220000, // +10% ✅
        placeBet: 85000,      // +6.25% ✅
        resolveMarket: 165000 // +10% ✅
    },
    increase: {
        createMarket: '10%',
        placeBet: '6.25%',
        resolveMarket: '10%'
    }
};
// All <15% target ✅
```

---

### 2.11 Security Architecture (ARCH-13)

**Access Control Matrix:**

| Role | Functions | Scope | Who |
|------|-----------|-------|-----|
| **Owner** | transferOwnership, grantRole, revokeRole | All contracts | Multisig/DAO |
| **Admin** | setContract (registry), updateParameters, adminApprove, adminResolve | System-wide | Multisig (3-of-5) |
| **Backend** | approveMarket, submitDisputeSignals | Automation | Hot wallet (limited permissions) |
| **Resolver** | proposeResolution | Resolution | Appointed address or oracle |
| **Factory** | createMarket, approve (internal), activate (internal) | Market creation | Factory contract |
| **User** | createProposal, vote, trade, dispute | Public | Anyone |

**Security Patterns:**

1. **Reentrancy Protection**: All state-changing external functions
```solidity
function approveMarket(address market)
    external
    onlyBackend
    nonReentrant // ✅ Prevents reentrancy attacks
{
    _approveMarket(market);
}
```

2. **Checks-Effects-Interactions**: Update state before external calls
```solidity
function finalize(bool outcome) external onlyResolver {
    // 1. CHECKS
    require(state == MarketState.RESOLVING, "Invalid state");

    // 2. EFFECTS (update state first)
    state = MarketState.FINALIZED;
    finalOutcome = outcome;

    // 3. INTERACTIONS (external calls last)
    rewardDistributor.distributeRewards(address(this));

    emit MarketFinalized(outcome, block.timestamp);
}
```

3. **Input Validation**: All user inputs validated
```solidity
function setApprovalLikeThreshold(uint256 _threshold) external onlyAdmin {
    require(_threshold >= 50 && _threshold <= 95, "Invalid threshold");
    // ✅ Prevents invalid parameter values
    approvalLikeThreshold = _threshold;
}
```

4. **Access Control**: Every privileged function protected
```solidity
modifier onlyAdmin() {
    require(
        IAccessControlManager(accessControl).hasRole(ADMIN_ROLE, msg.sender),
        "Not admin"
    );
    _;
}
```

**Backend Relayer Security:**

```
Backend Wallet (Hot Wallet):
- LIMITED permissions (only approveMarket, submitDisputeSignals)
- CANNOT updateParameters, transferOwnership, adminResolve
- Rate limited (max 10 calls/minute)
- Monitored (alert on unusual activity)
- Rotated keys (every 90 days)

If Compromised:
- Worst case: Spam approvals (fixable via admin reject)
- Cannot steal funds
- Cannot change system parameters
- Cannot force resolve markets
```

**Security Audit Checklist:**

```
✅ Reentrancy protection on all external functions
✅ Access control on all privileged functions
✅ Input validation on all user inputs
✅ Checks-Effects-Interactions pattern
✅ No unchecked external calls
✅ No delegatecall to untrusted contracts
✅ No selfdestruct
✅ SafeMath or Solidity 0.8+ (overflow protection)
✅ Events for all state changes
✅ No tx.origin (use msg.sender)
✅ No block.timestamp for critical logic (use block.number)
✅ Emergency pause mechanism (if needed)
```

---

### 2.12 Frontend Integration Architecture (ARCH-14)

**Event-Driven Architecture:**

```
Frontend ←─(WebSocket)─← Contract Events
   │
   ├─ MarketProposed → Show in "Pending Approval" feed
   ├─ MarketApproved → Move to "Approved" feed
   ├─ MarketActivated → Move to "Active Markets" feed
   ├─ BetPlaced → Update bet history
   ├─ ResolutionProposed → Show dispute window UI
   ├─ DisputeSignalsSubmitted → Update vote percentages
   ├─ MarketAutoFinalized → Show final outcome
   └─ MarketMarkedDisputed → Alert admin

No polling needed - real-time updates via events ✅
```

**State Query Patterns:**

```typescript
// Get current market state
const state = await predictionMarket.state();
const stateNames = ["PROPOSED", "APPROVED", "ACTIVE", "RESOLVING", "DISPUTED", "FINALIZED"];
console.log(`Market is ${stateNames[state]}`);

// Get dispute window data
const disputeWindow = await resolutionManager.disputes(marketAddress);
const timeRemaining = disputeWindow.endTime - Date.now() / 1000;
const agreePct = (disputeWindow.agreeCount / (disputeWindow.agreeCount + disputeWindow.disagreeCount)) * 100;

// Display in UI
<div>
  <h3>Dispute Window: {formatTime(timeRemaining)} remaining</h3>
  <ProgressBar agree={agreePct} disagree={100 - agreePct} />
</div>
```

**Off-Chain Aggregation Model:**

```
User Actions (Off-Chain):
- Click "Like" → Store in Supabase (no gas cost)
- Click "Agree" → Sign message (EIP-712), store in Supabase

Backend Aggregation:
- Every 5 minutes: aggregate counts
- If threshold met: trigger on-chain action
- Emit events → Frontend updates

Benefits:
✅ Users don't pay gas for voting
✅ System aggregates efficiently
✅ On-chain actions only when necessary
✅ Verifiable (signatures stored)
```

**Complete Integration Example:**

```typescript
// Market creation flow
async function createMarket(data) {
    // 1. User fills form
    const { question, category, expiry } = data;

    // 2. Create market on-chain
    const tx = await factory.createMarket(question, category, expiry);
    await tx.wait();

    // 3. Listen for MarketProposed event
    factory.on("MarketProposed", (market, creator, question) => {
        console.log(`Market ${market} proposed!`);
        addToFeed(market, "PROPOSED");
    });

    // 4. Listen for approval
    factory.on("MarketApproved", (market, approver) => {
        console.log(`Market ${market} approved!`);
        updateFeed(market, "APPROVED");
    });

    // 5. Listen for activation
    factory.on("MarketActivated", (market, timestamp) => {
        console.log(`Market ${market} is now ACTIVE!`);
        updateFeed(market, "ACTIVE");
        enableTradingUI(market);
    });
}
```

---

### 2.13 Upgrade Path & Future Versions (ARCH-15)

**Version Roadmap:**

```
V1 (Current Migration) - Days 18-65:
✅ 7 core contracts
✅ Market lifecycle states
✅ Approval system (auto + override)
✅ Dispute aggregation (auto + override)
✅ Full parameter flexibility
✅ Frontend-ready architecture

V2 (Post-Launch, ~3 months):
🔄 Add ProposalManager (governance)
🔄 Add staking mechanism
🔄 Add token-weighted voting
🔄 Enhanced reputation system
🔄 Community moderation

V3 (6-9 months):
🔄 Full DAO control
🔄 Decentralized backend relayer
🔄 EAS attestations for identity
🔄 Advanced market types
🔄 Cross-chain support

V4 (12+ months):
🔄 Fully autonomous
🔄 AI-assisted resolution
🔄 Prediction aggregation
🔄 Data marketplace
🔄 Research DAO
```

**Upgrade Process (Using VersionedRegistry):**

```javascript
// Upgrade FlexibleMarketFactory to V2

// 1. Deploy new version
const factoryV2 = await FlexibleMarketFactoryV2.deploy(registryAddress);

// 2. Test extensively on Fork + Sepolia
await testFactoryV2OnFork();
await testFactoryV2OnSepolia();

// 3. Register new version in registry
await versionedRegistry.setContract(
    ethers.utils.id("FlexibleMarketFactory"),
    factoryV2.address,
    2 // Version 2
);

// 4. All contracts now use V2 automatically
const factory = await registry.getContract("FlexibleMarketFactory");
// Returns: factoryV2.address

// 5. Old version still accessible if needed
const factoryV1 = await registry.getContractVersion("FlexibleMarketFactory", 1);
// Returns: factoryV1.address (for reference or rollback)

// 6. If V2 has critical bug, can rollback
await versionedRegistry.setContract(
    ethers.utils.id("FlexibleMarketFactory"),
    factoryV1.address,
    1 // Rollback to V1
);
```

**Upgrade Compatibility:**

```
V1 Markets (created with V1 factory):
- Continue working with V2 factory ✅
- State stored in individual market contracts
- Factory only creates markets, doesn't manage them
- Markets are immutable once created

V2 Features (governance, staking):
- New contracts added to registry
- Existing contracts unchanged
- Backward compatible with V1 markets
- Can be enabled gradually
```

---

## PART 3: PHASE ROADMAP

### 3.1 Phase 0: Size Verification (Days 18-20)

**Overview**: Critical bytecode size verification - MUST PASS before proceeding

**Duration**: 2-3 days
**Risk**: ⚠️ BLOCKER if fails
**Team**: 1 developer

**Objective:**
Create prototype unified FlexibleMarketFactory (Core + Extensions + Approval system) and verify bytecode size <24KB. If >24KB, design library extraction strategy.

**Critical Tasks:**
1. Create prototype unified factory
2. Compile and measure bytecode
3. If >24KB: design library strategy
4. Document findings
5. GO/NO-GO decision

**Success Criteria:**
- ✅ Unified factory compiles successfully
- ✅ Bytecode size measured accurately
- ✅ If <24KB: GO (proceed to Phase 1)
- ✅ If >24KB: Strategy documented (proceed with caution)
- ✅ Clear plan for Phase 1

**Detailed Guide**: [Phase 0: Size Verification](./PHASE_0_SIZE_VERIFICATION.md)

---

### 3.2 Phase 1: Internal Libraries (Days 21-25)

**Overview**: Create CurveMarketLogic and TemplateMarketLogic internal libraries

**Duration**: 3-5 days
**Risk**: 🟢 LOW
**Team**: 1 developer

**Objective:**
Extract curve and template creation logic into internal libraries to reduce factory bytecode size.

**Key Tasks:**
1. Design library interfaces
2. Implement CurveMarketLogic.sol
3. Implement TemplateMarketLogic.sol
4. Write 20+ unit tests (10 per library)
5. Gas benchmarking
6. Integration testing

**Success Criteria:**
- ✅ Both libraries compile and test independently
- ✅ 100% test coverage for library functions
- ✅ Gas costs within 5% of inline implementation
- ✅ Integration with mock factory successful

**Detailed Guide**: [Phase 1: Internal Libraries](./PHASE_1_INTERNAL_LIBRARIES.md)

---

### 3.3 Phase 2: Enhanced Metadata (Days 26-28)

**Overview**: Add metadata to CurveRegistry and MarketTemplateRegistry

**Duration**: 2-3 days
**Risk**: 🟢 LOW
**Team**: 1 developer

**Objective:**
Add metadata structs to registries for better discovery and frontend integration.

**Key Tasks:**
1. Design ModuleMetadata struct
2. Update CurveRegistry (add struct, update functions)
3. Update MarketTemplateRegistry (add struct, update functions)
4. Update tests
5. Gas benchmarking

**Success Criteria:**
- ✅ Both registries updated successfully
- ✅ All tests passing (backward compatible)
- ✅ Gas increase <10%
- ✅ Frontend can query metadata

**Detailed Guide**: [Phase 2: Enhanced Metadata](./PHASE_2_ENHANCED_METADATA.md)

---

### 3.4 Phase 3: VersionedRegistry (Days 29-35) 🔴 CRITICAL

**Overview**: Most complex phase - migrate from MasterRegistry to VersionedRegistry (affects 7 contracts)

**Duration**: 5-7 days
**Risk**: 🔴 CRITICAL
**Team**: 2 developers (parallel work on contracts)

**Objective:**
Replace MasterRegistry with VersionedRegistry and update all 7 dependent contracts.

**Key Tasks:**
1. Design versioning system
2. Implement VersionedRegistry.sol + interface
3. Update 7 contracts (Factory, Market, 4 managers, 1 template registry)
4. Update 40+ test files
5. Rewrite deployment scripts
6. Integration testing

**Success Criteria:**
- ✅ VersionedRegistry fully functional
- ✅ All 7 contracts updated and compiling
- ✅ All 260+ tests passing
- ✅ Deployment successful on Fork
- ✅ No security vulnerabilities

**Detailed Guide**: [Phase 3: VersionedRegistry](./PHASE_3_VERSIONED_REGISTRY.md)

---

### 3.5 Phase 4: Factory Unification (Days 36-43)

**Overview**: Merge Core + Extensions + add approval system (must stay <24KB)

**Duration**: 6-8 days
**Risk**: 🟡 MEDIUM-HIGH
**Team**: 1-2 developers

**Objective:**
Create unified FlexibleMarketFactory with approval system and library integration, staying under 24KB bytecode limit.

**Key Tasks:**
1. Design unified factory
2. Merge state variables and functions
3. Integrate libraries (CurveMarketLogic, TemplateMarketLogic)
4. Add approval system (automatic + admin override)
5. Verify bytecode <24KB
6. Update 50+ factory tests
7. Gas benchmarking

**Success Criteria:**
- ✅ Unified factory <24KB bytecode
- ✅ All factory tests passing
- ✅ Approval system working (auto + override)
- ✅ Gas costs <15% increase
- ✅ Old factory files deleted

**Detailed Guide**: [Phase 4: Factory Unification](./PHASE_4_FACTORY_UNIFICATION.md)

---

### 3.6 Phase 5: Market Lifecycle (Days 44-50)

**Overview**: Add MarketState enum and lifecycle transitions to PredictionMarket

**Duration**: 5-7 days
**Risk**: 🟡 MEDIUM-HIGH
**Team**: 1 developer

**Objective:**
Implement 6-state lifecycle in PredictionMarket for clear tracking and frontend integration.

**Key Tasks:**
1. Design state machine
2. Add MarketState enum
3. Implement state transition functions
4. Add state query functions
5. Add lifecycle events
6. Update tests
7. Create frontend integration guide

**Success Criteria:**
- ✅ All 6 states implemented
- ✅ All state transitions working
- ✅ All lifecycle tests passing
- ✅ Events emitted correctly
- ✅ Gas costs <10% increase

**Detailed Guide**: [Phase 5: Market Lifecycle](./PHASE_5_MARKET_LIFECYCLE.md)

---

### 3.7 Phase 6: Resolution + Disputes (Days 51-56)

**Overview**: Add dispute window system to ResolutionManager (automatic + admin override)

**Duration**: 4-6 days
**Risk**: 🟡 MEDIUM-HIGH
**Team**: 1 developer

**Objective:**
Implement dispute aggregation system with automatic finalization and admin overrides.

**Key Tasks:**
1. Design dispute window system
2. Update ResolutionManager (add struct, functions)
3. Add ParameterStorage parameters
4. Implement automatic finalization logic
5. Implement automatic dispute marking
6. Add admin override functions
7. Update tests

**Success Criteria:**
- ✅ Dispute window system working
- ✅ Automatic finalization working (≥75% agreement)
- ✅ Automatic dispute marking working (>50% disagreement)
- ✅ Admin overrides working
- ✅ All tests passing

**Detailed Guide**: [Phase 6: Resolution + Disputes](./PHASE_6_RESOLUTION_DISPUTES.md)

---

### 3.8 Phase 7: Full Integration (Days 57-66) 🔴 CRITICAL

**Overview**: Complete validation - all tests, security audit, Fork + Sepolia deployment

**Duration**: 7-10 days
**Risk**: 🔴 CRITICAL
**Team**: Full team (2-3 developers)

**Objective:**
Complete system validation before mainnet - testing, security, deployment, documentation.

**Key Tasks:**
1. Run all 260+ tests (fix any failures)
2. Gas benchmarking (all functions)
3. Load testing (10+ parallel markets)
4. Slither analysis (fix CRITICAL/HIGH)
5. Foundry invariant testing
6. Manual security review
7. Fork deployment + validation
8. Sepolia deployment + validation
9. Cross-validation (Fork vs Sepolia <1%)
10. Documentation updates
11. Final code review
12. GO/NO-GO decision

**Success Criteria** (ALL MUST PASS):
- ✅ All 260+ tests passing
- ✅ 90%+ code coverage
- ✅ Security audit 95+ score
- ✅ Gas costs <15% increase
- ✅ All contracts <24KB
- ✅ Fork deployment successful
- ✅ Sepolia deployment successful
- ✅ Cross-validation <1% variance
- ✅ Documentation complete
- ✅ Team approval

**Detailed Guide**: [Phase 7: Full Integration](./PHASE_7_FULL_INTEGRATION.md)

---

## PART 4: VALIDATION & SUCCESS CRITERIA

### 4.1 Validation Gates (Per Phase)

**Every phase must pass these gates before proceeding:**

```
Phase Completion Checklist:

□ All tasks for this phase complete
□ All code compiled successfully
□ All tests passing (no failures)
□ Code coverage maintained (90%+ overall)
□ Gas benchmarking complete (within targets)
□ Code review completed (peer reviewed)
□ Documentation updated (phase docs, comments)
□ No security vulnerabilities introduced
□ Git branch merged (feature branch → main)
□ Ready for next phase (dependencies met)
```

---

### 4.2 Testing Requirements

**Test Coverage Targets:**

```
Overall Coverage: 90%+ required

Per-Contract Coverage:
- Critical contracts (Factory, Market, Registry): 95%+ required
- Supporting contracts (Managers, Distributors): 85%+ required
- Registries: 85%+ required

Per-Function Coverage:
- Critical functions (finalize, refund, approve): 100% required
- Standard functions: 90%+ required
- View functions: 80%+ required
```

**Test Types:**

```
1. Unit Tests (per contract):
   - Test all public/external functions
   - Test success cases
   - Test error cases (reverts)
   - Test events emitted
   - Test gas costs
   - Use mocks for dependencies

2. Integration Tests (end-to-end):
   - Deploy complete system
   - Test full user flows
   - Test cross-contract interactions
   - Test edge cases
   - Test concurrent operations

3. Security Tests:
   - Static analysis (Slither, Mythril)
   - Invariant testing (Foundry)
   - Manual review (access control, reentrancy)
   - Attack scenarios (overflow, unauthorized access)
   - Fuzz testing (random inputs)

4. Performance Tests:
   - Gas benchmarking (all functions)
   - Load testing (10+ parallel operations)
   - Stress testing (extreme values)
```

---

### 4.3 Security Requirements

**Security Audit Checklist:**

```
✅ Static Analysis:
   - Slither: 0 CRITICAL, 0 HIGH issues
   - Mythril: 0 CRITICAL, 0 HIGH issues
   - Document all MEDIUM/LOW findings

✅ Invariant Testing:
   - Define system invariants
   - Test with Foundry fuzzing
   - All invariants hold after 10,000+ runs

✅ Manual Review:
   - Access control verified
   - Reentrancy protection verified
   - Input validation verified
   - External calls safe
   - No delegatecall to untrusted
   - Checks-Effects-Interactions pattern

✅ Attack Scenarios:
   - Reentrancy attacks: blocked ✅
   - Overflow/underflow: protected ✅
   - Unauthorized access: prevented ✅
   - Front-running: mitigated ✅
   - Flash loan attacks: considered ✅

✅ Professional Audit:
   - Score: 95+ required
   - 0 CRITICAL issues
   - 0 HIGH issues
   - All MEDIUM issues addressed or documented
```

---

### 4.4 Performance Requirements

**Gas Cost Targets:**

```
Market Creation:
- createMarket(): <230,000 gas (+15% from 200K baseline)
- createMarketWithTemplate(): <250,000 gas
- createMarketWithCurve(): <250,000 gas

Trading:
- placeBet(): <92,000 gas (+15% from 80K baseline)

Approval:
- approveMarket(): <80,000 gas (new)
- activateMarket(): <60,000 gas (new)

Resolution:
- proposeResolution(): <120,000 gas
- submitDisputeSignals(): <100,000 gas (new)
- finalize(): <172,500 gas (+15% from 150K baseline)

Overall Increase: <15% acceptable
```

**Performance Benchmarks:**

```
Load Testing:
- Create 10+ markets in parallel: all succeed ✅
- Place 100+ bets in parallel: all succeed ✅
- Throughput: >1.5 markets/second ✅
- No race conditions ✅

Stress Testing:
- Max market duration (365 days): works ✅
- Max bond amount (10 ETH): works ✅
- Large number of participants (1000+): works ✅

Cross-Network Consistency:
- Fork vs Sepolia: <1% gas difference ✅
- Event data: identical ✅
- State changes: identical ✅
```

---

### 4.5 Documentation Requirements

**Documentation Checklist:**

```
✅ Architecture Documentation:
   - System architecture diagram
   - Contract relationship diagram
   - State machine diagrams
   - Data flow diagrams

✅ Code Documentation:
   - NatSpec for all contracts
   - NatSpec for all public/external functions
   - Inline comments for complex logic
   - README for each major component

✅ Implementation Guides:
   - Phase 0-7 detailed guides (this document set)
   - Frontend integration guide
   - Parameter flexibility guide
   - Testing procedures guide
   - Deployment procedures guide
   - Security & governance guide

✅ API Documentation:
   - All contract interfaces
   - All events and their schemas
   - All errors and their meanings
   - Integration examples

✅ Operational Docs:
   - Deployment procedures
   - Upgrade procedures
   - Emergency procedures
   - Monitoring guide
   - Parameter adjustment guide
```

---

### 4.6 Final GO/NO-GO Criteria

**Before Mainnet Deployment (Day 65), ALL must be ✅:**

```
□ Technical Requirements (10 criteria):
   1. ✅ All 260+ tests passing
   2. ✅ 90%+ code coverage
   3. ✅ Security audit 95+ score
   4. ✅ Gas costs <15% increase
   5. ✅ All contracts <24KB bytecode
   6. ✅ Fork deployment successful
   7. ✅ Sepolia deployment successful
   8. ✅ Cross-validation <1% variance
   9. ✅ No CRITICAL or HIGH security issues
  10. ✅ All validation gates passed

□ Architecture Requirements (5 criteria):
   1. ✅ VersionedRegistry fully functional
   2. ✅ Unified factory <24KB with approval system
   3. ✅ Market lifecycle state machine working
   4. ✅ Dispute aggregation system working
   5. ✅ All parameters adjustable via ParameterStorage

□ Integration Requirements (5 criteria):
   1. ✅ Frontend can listen to all events
   2. ✅ Frontend can query all states
   3. ✅ Backend relayer working correctly
   4. ✅ Admin dashboard functional
   5. ✅ User flows complete (create → approve → trade → resolve)

□ Operational Requirements (5 criteria):
   1. ✅ Deployment procedures documented
   2. ✅ Upgrade procedures documented
   3. ✅ Emergency procedures documented
   4. ✅ Monitoring setup complete
   5. ✅ Multisig configured (if using)

□ Team Requirements (5 criteria):
   1. ✅ Code review completed
   2. ✅ Documentation reviewed
   3. ✅ Team approval received
   4. ✅ Confidence level 99%+
   5. ✅ No blocking concerns

Total: 30 criteria, ALL MUST BE ✅
```

**GO/NO-GO Decision Matrix:**

```
ALL 30 criteria met → GO ✅
- Proceed with mainnet deployment (Day 65)
- Begin canary deployment (small markets first)
- Monitor closely for 48 hours
- Gradual rollout to full capacity

ANY criteria not met → NO-GO ❌
- Document blocking issues
- Create action plan to address
- Re-test after fixes
- Re-evaluate GO/NO-GO
- Adjust timeline if needed
```

---

## PART 5: QUICK REFERENCE

### 5.1 Document Index

**Core Documents:**

1. [This Document] MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md
   - Main roadmap and architecture overview
   - Start here for high-level understanding

**Phase Implementation Guides:**

2. [PHASE_0_SIZE_VERIFICATION.md](./PHASE_0_SIZE_VERIFICATION.md)
   - Days 18-20, ⚠️ BLOCKER if fails

3. [PHASE_1_INTERNAL_LIBRARIES.md](./PHASE_1_INTERNAL_LIBRARIES.md)
   - Days 21-25, 🟢 LOW risk

4. [PHASE_2_ENHANCED_METADATA.md](./PHASE_2_ENHANCED_METADATA.md)
   - Days 26-28, 🟢 LOW risk

5. [PHASE_3_VERSIONED_REGISTRY.md](./PHASE_3_VERSIONED_REGISTRY.md)
   - Days 29-35, 🔴 CRITICAL (affects 7 contracts)

6. [PHASE_4_FACTORY_UNIFICATION.md](./PHASE_4_FACTORY_UNIFICATION.md)
   - Days 36-43, 🟡 MEDIUM-HIGH risk

7. [PHASE_5_MARKET_LIFECYCLE.md](./PHASE_5_MARKET_LIFECYCLE.md)
   - Days 44-50, 🟡 MEDIUM-HIGH risk

8. [PHASE_6_RESOLUTION_DISPUTES.md](./PHASE_6_RESOLUTION_DISPUTES.md)
   - Days 51-56, 🟡 MEDIUM-HIGH risk

9. [PHASE_7_FULL_INTEGRATION.md](./PHASE_7_FULL_INTEGRATION.md)
   - Days 57-66, 🔴 CRITICAL validation

**Supporting Guides:**

10. [FRONTEND_INTEGRATION_GUIDE.md](./FRONTEND_INTEGRATION_GUIDE.md)
    - Contract-UI integration patterns

11. [PARAMETER_FLEXIBILITY_GUIDE.md](./PARAMETER_FLEXIBILITY_GUIDE.md)
    - All adjustable parameters reference

12. [TESTING_PROCEDURES_GUIDE.md](./TESTING_PROCEDURES_GUIDE.md)
    - Complete testing methodology

13. [DEPLOYMENT_PROCEDURES_GUIDE.md](./DEPLOYMENT_PROCEDURES_GUIDE.md)
    - Production deployment procedures

14. [SECURITY_GOVERNANCE_GUIDE.md](./SECURITY_GOVERNANCE_GUIDE.md)
    - Security architecture and governance

**Reference Documents:**

15. [MIGRATION_TOPICS_MASTER_INVENTORY.md](../../MIGRATION_TOPICS_MASTER_INVENTORY.md)
    - All 151 topics that must be covered

16. [DOCUMENTATION_STRUCTURE.md](../../DOCUMENTATION_STRUCTURE.md)
    - Complete topic mapping

---

### 5.2 Topic Cross-Reference

**Architecture Topics (ARCH):**
- ARCH-01 to ARCH-15: All covered in this document (Part 2)

**Phase Topics:**
- P0-01 to P0-07: See PHASE_0_SIZE_VERIFICATION.md
- P1-01 to P1-08: See PHASE_1_INTERNAL_LIBRARIES.md
- P2-01 to P2-06: See PHASE_2_ENHANCED_METADATA.md
- P3-01 to P3-18: See PHASE_3_VERSIONED_REGISTRY.md
- P4-01 to P4-15: See PHASE_4_FACTORY_UNIFICATION.md
- P5-01 to P5-12: See PHASE_5_MARKET_LIFECYCLE.md
- P6-01 to P6-10: See PHASE_6_RESOLUTION_DISPUTES.md
- P7-01 to P7-12: See PHASE_7_FULL_INTEGRATION.md

**Supporting Topics:**
- FRONT-01 to FRONT-12: See FRONTEND_INTEGRATION_GUIDE.md
- PARAM-01 to PARAM-08: See PARAMETER_FLEXIBILITY_GUIDE.md
- TEST-01 to TEST-10: See TESTING_PROCEDURES_GUIDE.md
- DEPLOY-01 to DEPLOY-10: See DEPLOYMENT_PROCEDURES_GUIDE.md
- SEC-01 to SEC-08: See SECURITY_GOVERNANCE_GUIDE.md

---

### 5.3 Contract Reference

**Core Contracts (7):**

1. **VersionedRegistry** (NEW)
   - Replaces: MasterRegistry
   - Purpose: Contract address registry with version tracking
   - Key Features: Version storage, upgrade history, backward compatibility

2. **FlexibleMarketFactory** (UNIFIED)
   - Merges: Core + Extensions
   - Purpose: Market creation with approval system
   - Key Features: 3 creation paths, automatic + admin approval, <24KB

3. **PredictionMarket** (ENHANCED)
   - Purpose: Binary prediction market
   - Key Features: 6 lifecycle states, state transitions, lifecycle events

4. **ResolutionManager** (ENHANCED)
   - Purpose: Market outcome resolution with disputes
   - Key Features: Dispute window, automatic finalization, admin override

5. **ParameterStorage** (ENHANCED)
   - Purpose: System configuration storage
   - Key Features: All parameters, approval parameters, dispute parameters

6. **RewardDistributor** (UNCHANGED)
   - Purpose: Fee distribution
   - Key Features: Platform, LP, creator fees

7. **AccessControlManager** (UNCHANGED)
   - Purpose: Role-based access control
   - Key Features: Admin, backend, resolver roles

**Supporting Registries (2):**

8. **CurveRegistry** (ENHANCED)
   - Purpose: Bonding curve registry
   - Key Features: Curve registration, metadata

9. **MarketTemplateRegistry** (ENHANCED)
   - Purpose: Market template registry
   - Key Features: Template registration, metadata

---

### 5.4 Key Contacts & Resources

**Team Roles:**

- **Project Lead**: Overall coordination, GO/NO-GO decisions
- **Smart Contract Developers**: Implementation, testing, deployment
- **Security Auditor**: Security review, vulnerability assessment
- **Frontend Developers**: UI integration, event listening
- **DevOps**: Infrastructure, monitoring, deployment automation

**External Resources:**

- **OpenZeppelin**: Security libraries and best practices
  - https://docs.openzeppelin.com/
- **Hardhat**: Development environment
  - https://hardhat.org/
- **Foundry**: Testing and fuzzing
  - https://book.getfoundry.sh/
- **Slither**: Static analysis
  - https://github.com/crytic/slither

**Support Channels:**

- **Documentation**: This document set (14 files)
- **Code Comments**: NatSpec in all contracts
- **Issue Tracking**: GitHub Issues
- **Team Communication**: Discord/Slack

---

### 5.5 FAQ

**Q: Why 48 days instead of the original 24 days?**
A: We discovered several critical additions needed:
- Frontend integration requirements (approval + dispute systems)
- VersionedRegistry migration (affects 7 contracts)
- Complete testing and validation
- Better to take time and do it right than rush and have bugs

**Q: Can we skip any phases?**
A: No. Each phase builds on the previous one. Phase 3 depends on Phase 1+2, Phase 4 depends on Phase 3, etc.

**Q: What if Phase 0 size verification fails?**
A: We have a library extraction strategy ready. Extract more logic to libraries until <24KB. May add 2-3 days.

**Q: What if we find a critical bug during Phase 7?**
A: STOP immediately. Fix the bug, retest everything, then restart Phase 7. Quality > timeline.

**Q: Can we deploy to mainnet before Day 65?**
A: Only if ALL 30 GO/NO-GO criteria are met earlier. Don't rush.

**Q: What if Sepolia test fails but Fork test passes?**
A: Investigate the discrepancy. Could be network-specific issue. Must resolve before mainnet.

**Q: Do we need to re-audit after migration?**
A: Yes, at least an internal audit in Phase 7. Professional audit recommended if budget allows.

**Q: Can we add features during migration?**
A: No. Focus is on the planned "Minimal Modular" architecture only. New features go in V2.

**Q: What happens to old deployed contracts?**
A: If any are on testnet, they continue working. New deployment will use new architecture.

**Q: How do we handle emergency during migration?**
A: Stop work, document issue, create fix plan, get team approval, resume with fix.

---

## 🎯 END OF MASTER PLAN

**You have reached the end of the master plan overview.**

**Next Steps:**

1. ✅ Review this master plan completely
2. ✅ Understand the architecture transformation (Part 2)
3. ✅ Review the 7-phase roadmap (Part 3)
4. ✅ Read the detailed phase guides (PHASE_0.md through PHASE_7.md)
5. ✅ Begin Phase 0: Size Verification (Days 18-20)

**Remember:**
- CHECK this document before every decision
- FOLLOW the phases in order
- VALIDATE at every gate
- DOCUMENT everything
- TEST twice, deploy once

**Success Criteria:** All 30 GO/NO-GO criteria must be ✅ before mainnet

**Timeline:** Days 18-65 (48 days to production-ready mainnet)

**Confidence:** This plan is BULLETPROOF because it's:
- ✅ Complete (all 151 topics covered)
- ✅ Systematic (7 phases with clear gates)
- ✅ Validated (testing at every step)
- ✅ Documented (14 comprehensive guides)
- ✅ Safe (validation gates, rollback procedures)

---

**Good luck with the migration! 🚀**

**Let's build something bulletproof! 💪**
