# 🛡️ SECURITY & GOVERNANCE GUIDE

**Purpose**: Security architecture and governance structure for "Minimal Modular" system
**Audience**: Security team, admins, governance members
**Status**: Reference for all phases and production

---

## 🎯 SECURITY PHILOSOPHY

**Defense in Depth**: Multiple layers of security controls

**Layers**:
1. **Contract Layer**: Access control, reentrancy guards, input validation
2. **Network Layer**: Backend relayer security, API authentication
3. **Governance Layer**: Multisig control, timelock delays
4. **Monitoring Layer**: Event monitoring, anomaly detection

---

## 🔐 ACCESS CONTROL ARCHITECTURE

### Role-Based Access Control (RBAC)

```solidity
// contracts/core/AccessControlManager.sol
contract AccessControlManager {

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant FACTORY_ROLE = keccak256("FACTORY_ROLE");
    bytes32 public constant BACKEND_ROLE = keccak256("BACKEND_ROLE");
    bytes32 public constant RESOLVER_ROLE = keccak256("RESOLVER_ROLE");

    mapping(bytes32 => mapping(address => bool)) public roles;

    event RoleGranted(bytes32 indexed role, address indexed account);
    event RoleRevoked(bytes32 indexed role, address indexed account);

    function grantRole(bytes32 role, address account) external onlyAdmin {
        roles[role][account] = true;
        emit RoleGranted(role, account);
    }

    function revokeRole(bytes32 role, address account) external onlyAdmin {
        roles[role][account] = false;
        emit RoleRevoked(role, account);
    }

    function hasRole(bytes32 role, address account) public view returns (bool) {
        return roles[role][account];
    }
}
```

### Role Definitions

**ADMIN_ROLE**:
- Permissions: Grant/revoke roles, update parameters, emergency pause
- Holders: Multisig only
- Count: 1 (multisig address)

**FACTORY_ROLE**:
- Permissions: Create markets, approve markets, activate markets
- Holders: FlexibleMarketFactory contract
- Count: 1 (factory contract)

**BACKEND_ROLE**:
- Permissions: Submit approval signals, submit dispute signals
- Holders: Backend relayer address
- Count: 1-2 (primary + backup)

**RESOLVER_ROLE**:
- Permissions: Propose market outcomes, finalize resolutions
- Holders: Designated resolvers, admins
- Count: 3-5 (rotating resolvers)

---

## 🔒 SMART CONTRACT SECURITY

### 1. Reentrancy Protection

```solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract PredictionMarket is ReentrancyGuard {
    function buyShares(uint8 outcomeToken, uint256 amount)
        external
        payable
        nonReentrant  // Prevents reentrancy
    {
        // Trading logic
    }
}
```

**Applied to**:
- All external state-changing functions
- All functions handling $BASED transfers
- All payout functions

---

### 2. Input Validation

```solidity
function createMarketBasic(
    string memory question,
    uint256 endTime,
    uint256 initialLiquidity
) external {
    require(bytes(question).length > 0, "Empty question");
    require(bytes(question).length <= 500, "Question too long");
    require(endTime > block.timestamp, "Invalid end time");
    require(endTime <= block.timestamp + 365 days, "Too far in future");

    uint256 minLiquidity = paramStorage.minInitialLiquidity();
    uint256 maxLiquidity = paramStorage.maxInitialLiquidity();
    require(initialLiquidity >= minLiquidity, "Insufficient liquidity");
    require(initialLiquidity <= maxLiquidity, "Excessive liquidity");

    // ...
}
```

---

### 3. Access Control on Critical Functions

```solidity
function approveMarket(address market) external onlyBackend {
    // Only backend can call
}

function adminResolveMarket(address market, bool outcome, string calldata reason)
    external
    onlyAdmin
{
    // Only admin can override
}

modifier onlyBackend() {
    require(accessControl.hasRole(BACKEND_ROLE, msg.sender), "Not backend");
    _;
}

modifier onlyAdmin() {
    require(accessControl.hasRole(ADMIN_ROLE, msg.sender), "Not admin");
    _;
}
```

---

### 4. Safe External Calls

```solidity
// Safe registry lookup
function getModule(bytes32 moduleId) internal view returns (address) {
    address module = registry.getModule(moduleId);
    require(module != address(0), "Module not found");
    return module;
}

// Safe contract interaction
function _callMarket(address market, bytes memory data) internal returns (bool) {
    (bool success, ) = market.call(data);
    require(success, "Market call failed");
    return success;
}
```

---

## 🏛️ GOVERNANCE STRUCTURE

### Phase 1-2: Admin Multisig (V1)

**Setup**: 3-of-5 Gnosis Safe multisig

**Signers**:
1. Team Lead
2. Technical Lead
3. Security Lead
4. Community Representative 1
5. Community Representative 2

**Threshold**: 3 signatures required

**Responsibilities**:
- Parameter updates
- Role management
- Emergency actions
- Contract upgrades (via registry)

---

### Phase 3: Community Governance (V2)

**Token-Weighted Voting**:
```solidity
contract GovernanceV2 {
    struct Proposal {
        uint256 id;
        address proposer;
        string description;
        bytes calldata; // Function to execute
        uint256 startBlock;
        uint256 endBlock;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
    }

    mapping(uint256 => Proposal) public proposals;

    function propose(string memory description, bytes memory calldata)
        external
        returns (uint256)
    {
        require(
            governanceToken.balanceOf(msg.sender) >= proposalThreshold,
            "Insufficient tokens to propose"
        );
        // Create proposal
    }

    function vote(uint256 proposalId, bool support) external {
        uint256 votes = governanceToken.balanceOf(msg.sender);
        // Cast votes
    }

    function execute(uint256 proposalId) external {
        // Execute if passed
    }
}
```

---

## 🚨 EMERGENCY PROCEDURES

### Emergency Pause

```solidity
// contracts/core/EmergencyPause.sol
contract EmergencyPause {
    bool public paused;

    event Paused(address indexed admin, string reason);
    event Unpaused(address indexed admin);

    modifier whenNotPaused() {
        require(!paused, "System paused");
        _;
    }

    function pause(string calldata reason) external onlyAdmin {
        paused = true;
        emit Paused(msg.sender, reason);
    }

    function unpause() external onlyAdmin {
        paused = false;
        emit Unpaused(msg.sender);
    }
}
```

**Pausable Operations**:
- Market creation
- Trading
- Approvals
- Resolutions

**NOT Pausable**:
- Claiming winnings (users must always access funds)
- Emergency withdrawals

---

### Circuit Breakers

**Automatic Triggers**:
```solidity
// Pause if suspicious activity detected
if (marketsCreatedLastHour > 100) {
    emit SuspiciousActivity("High creation rate");
    pause("Circuit breaker: High creation rate");
}

if (totalValueLocked < previousTVL * 0.5) {
    emit SuspiciousActivity("Rapid TVL drop");
    pause("Circuit breaker: TVL drop");
}
```

---

## 🔍 SECURITY MONITORING

### Event Monitoring

**Critical Events to Monitor**:
```javascript
// Backend monitoring service
const events = [
    "MarketCreated",
    "MarketApproved",
    "MarketActivated",
    "MarketFinalized",
    "RoleGranted",
    "RoleRevoked",
    "Paused",
    "AdminOverride"
];

for (const eventName of events) {
    contract.on(eventName, (...args) => {
        logEvent(eventName, args);
        checkAnomalies(eventName, args);
        alertIfSuspicious(eventName, args);
    });
}
```

**Anomaly Detection**:
- Unusual transaction patterns
- High-value market resolutions
- Rapid role changes
- Multiple admin overrides

---

## 📊 SECURITY AUDIT CHECKLIST

### Pre-Deployment Audit

- [ ] All contracts use ReentrancyGuard
- [ ] All external functions have access control
- [ ] All user inputs validated
- [ ] No use of tx.origin
- [ ] No unchecked external calls
- [ ] No uninitialized storage variables
- [ ] No integer overflow/underflow risks
- [ ] Proper event emissions
- [ ] No selfdestruct or delegatecall vulnerabilities
- [ ] Library linking secure
- [ ] Upgrade mechanisms secure

### Continuous Monitoring

- [ ] Event monitoring active
- [ ] Anomaly detection configured
- [ ] Alert system functional
- [ ] Incident response plan ready
- [ ] Regular security reviews scheduled

---

## 🔐 BACKEND RELAYER SECURITY

### API Security

```javascript
// Backend relayer authentication
const validateRelayer = async (req, res, next) => {
    const signature = req.headers['x-signature'];
    const message = req.body;

    const signer = ethers.utils.verifyMessage(
        JSON.stringify(message),
        signature
    );

    if (signer !== AUTHORIZED_RELAYER_ADDRESS) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    next();
};

app.post('/api/submit-approval', validateRelayer, async (req, res) => {
    // Process approval
});
```

### Private Key Management

**Best Practices**:
- Use HSM (Hardware Security Module) for production
- Rotate keys periodically
- Use separate keys for different environments
- Never commit keys to version control
- Use environment variables + secrets manager

---

## 🎯 SECURITY BEST PRACTICES

### Development

- Always use latest stable Solidity version
- Use OpenZeppelin contracts where possible
- Follow Checks-Effects-Interactions pattern
- Write comprehensive tests
- Run security tools (Slither, Mythril)

### Deployment

- Use multisig for all admin functions
- Verify contracts on block explorer
- Test on testnet first
- Have rollback plan
- Monitor deployment closely

### Operations

- Monitor events continuously
- Respond to alerts immediately
- Regular security audits (quarterly)
- Incident response drills
- Keep emergency contacts updated

---

## 🔗 RELATED DOCUMENTS

- **Deployment**: [DEPLOYMENT_PROCEDURES_GUIDE.md](./DEPLOYMENT_PROCEDURES_GUIDE.md)
- **Parameters**: [PARAMETER_FLEXIBILITY_GUIDE.md](./PARAMETER_FLEXIBILITY_GUIDE.md)
- **Testing**: [TESTING_PROCEDURES_GUIDE.md](./TESTING_PROCEDURES_GUIDE.md)

---

**Last Updated**: November 7, 2025
