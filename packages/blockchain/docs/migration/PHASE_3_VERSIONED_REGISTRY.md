# 🔄 PHASE 3: VERSIONED REGISTRY
**Days**: 29-35
**Duration**: 5-7 days
**Risk Level**: 🔴 CRITICAL
**Status**: Ready after Phase 2 Complete

---

## 🎯 CRITICAL PHASE - READ CAREFULLY

**This is the most complex phase of the migration.**

**What's Changing**: Replace MasterRegistry with VersionedRegistry
**Impact**: Affects 7 contracts + 40+ test files
**Why Critical**: All contracts depend on registry - breaking change
**Risk**: High (circular dependencies, interface changes, test updates)

**Success = All 7 contracts updated + all 260+ tests passing + Fork deployment successful**

---

## 📋 AFFECTED CONTRACTS (7)

1. ✅ FlexibleMarketFactory (unified from Phase 4)
2. ✅ PredictionMarket
3. ✅ MarketTemplateRegistry
4. ✅ ParameterStorage
5. ✅ ResolutionManager
6. ✅ RewardDistributor
7. ✅ VersionedRegistry (NEW - replaces MasterRegistry)

**Unchanged** (no registry dependency):
- AccessControlManager (standalone)
- CurveRegistry (uses AccessControl, not registry)

---

## SECTION 1: VERSIONED REGISTRY IMPLEMENTATION

### 1.1 Version Storage Design (P3-01, P3-02)

```solidity
// contracts/core/VersionedRegistry.sol

/**
 * @title VersionedRegistry
 * @notice Registry with version tracking for contract upgrades
 * @dev Replaces MasterRegistry with version history support
 */
contract VersionedRegistry is Ownable {
    struct Entry {
        address contractAddress;  // Current address
        uint256 version;          // Current version
        bool active;              // Can be deactivated
    }

    // Latest version for each module
    mapping(bytes32 => Entry) private entries;

    // Version history: moduleId => version => address
    mapping(bytes32 => mapping(uint256 => address)) private versionHistory;

    // Events
    event ContractRegistered(bytes32 indexed id, address indexed contractAddress, uint256 version);
    event ContractUpdated(bytes32 indexed id, address indexed oldAddress, address indexed newAddress, uint256 newVersion);
    event ContractDeactivated(bytes32 indexed id);

    function setContract(bytes32 id, address addr, uint256 version)
        external
        onlyOwner
    {
        require(addr != address(0), "Invalid address");
        require(version > 0, "Invalid version");

        address oldAddress = entries[id].contractAddress;

        entries[id] = Entry({
            contractAddress: addr,
            version: version,
            active: true
        });

        versionHistory[id][version] = addr;

        if (oldAddress == address(0)) {
            emit ContractRegistered(id, addr, version);
        } else {
            emit ContractUpdated(id, oldAddress, addr, version);
        }
    }

    function getContract(bytes32 id) external view returns (address) {
        require(entries[id].active, "Contract inactive");
        require(entries[id].contractAddress != address(0), "Contract not found");
        return entries[id].contractAddress;
    }

    function getContractVersion(bytes32 id, uint256 version)
        external
        view
        returns (address)
    {
        address addr = versionHistory[id][version];
        require(addr != address(0), "Version not found");
        return addr;
    }

    function getLatestVersion(bytes32 id) external view returns (uint256) {
        require(entries[id].contractAddress != address(0), "Contract not found");
        return entries[id].version;
    }

    function updateContract(bytes32 id, address newAddress, uint256 newVersion)
        external
        onlyOwner
    {
        require(entries[id].contractAddress != address(0), "Contract not found");
        require(newVersion > entries[id].version, "Version must increase");

        setContract(id, newAddress, newVersion);
    }

    function deactivateContract(bytes32 id) external onlyOwner {
        require(entries[id].contractAddress != address(0), "Contract not found");
        entries[id].active = false;
        emit ContractDeactivated(id);
    }

    function isActive(bytes32 id) external view returns (bool) {
        return entries[id].active;
    }
}
```

### 1.2 Interface (P3-04)

```solidity
// contracts/interfaces/IVersionedRegistry.sol

interface IVersionedRegistry {
    function setContract(bytes32 id, address contractAddress, uint256 version) external;
    function getContract(bytes32 id) external view returns (address);
    function getContractVersion(bytes32 id, uint256 version) external view returns (address);
    function getLatestVersion(bytes32 id) external view returns (uint256);
    function updateContract(bytes32 id, address newAddress, uint256 newVersion) external;
    function deactivateContract(bytes32 id) external;
    function isActive(bytes32 id) external view returns (bool);

    event ContractRegistered(bytes32 indexed id, address indexed contractAddress, uint256 version);
    event ContractUpdated(bytes32 indexed id, address indexed oldAddress, address indexed newAddress, uint256 newVersion);
    event ContractDeactivated(bytes32 indexed id);
}
```

---

## SECTION 2: CONTRACT UPDATES (P3-06 to P3-11)

### Template for Updating Each Contract:

```solidity
// OLD:
import "../interfaces/IMasterRegistry.sol";
IMasterRegistry public registry;

// NEW:
import "../interfaces/IVersionedRegistry.sol";
IVersionedRegistry public registry;

// Constructor change:
// OLD: constructor(address _registry) { registry = IMasterRegistry(_registry); }
// NEW: constructor(address _registry) { registry = IVersionedRegistry(_registry); }

// All getContract() calls stay the same ✅
address paramStorage = registry.getContract("ParameterStorage");
```

### 2.1 FlexibleMarketFactory Update

```bash
# Update imports
sed -i 's/IMasterRegistry/IVersionedRegistry/g' contracts/core/FlexibleMarketFactory.sol

# Update interface reference
# Change: IMasterRegistry public registry;
# To: IVersionedRegistry public registry;
```

Apply template above. Compile. Test.

### 2.2 PredictionMarket Update

Same pattern as above. Update imports, interface reference, compile, test.

### 2.3-2.6 Other Contracts

Apply same pattern to:
- MarketTemplateRegistry
- ParameterStorage
- ResolutionManager
- RewardDistributor

**Each contract**: Update import → Update interface type → Compile → Test

---

## SECTION 3: TEST UPDATES (P3-14)

### 3.1 Test File Pattern

**OLD Test Setup:**
```javascript
const MasterRegistry = await ethers.getContractFactory("MasterRegistry");
const registry = await MasterRegistry.deploy();
await registry.setContract(ethers.utils.id("ParameterStorage"), paramStorage.address);
```

**NEW Test Setup:**
```javascript
const VersionedRegistry = await ethers.getContractFactory("VersionedRegistry");
const registry = await VersionedRegistry.deploy();
await registry.setContract(
    ethers.utils.id("ParameterStorage"),
    paramStorage.address,
    1  // Version 1
);
```

**Key Change**: Add version parameter (1) to all `setContract()` calls

### 3.2 Update Script

```bash
# Find all test files using MasterRegistry
grep -r "MasterRegistry" test/ --files-with-matches

# For each file:
# 1. Replace "MasterRegistry" with "VersionedRegistry"
# 2. Add version parameter to setContract calls

# Example sed command:
find test/ -name "*.js" -exec sed -i 's/await registry.setContract(\([^,]*\), \([^)]*\))/await registry.setContract(\1, \2, 1)/g' {} +
```

Run all tests after updates:
```bash
npx hardhat test
# Must see: All 260+ tests passing ✅
```

---

## SECTION 4: DEPLOYMENT (P3-15)

### 4.1 New Deployment Sequence

```javascript
// scripts/deploy/deploy-with-versioned-registry.js

async function main() {
    console.log("🚀 Deploying with VersionedRegistry...\n");

    // Step 1: Deploy VersionedRegistry
    const VersionedRegistry = await ethers.getContractFactory("VersionedRegistry");
    const registry = await VersionedRegistry.deploy();
    await registry.deployed();
    console.log("✅ VersionedRegistry:", registry.address);

    // Step 2: Deploy all other contracts
    const AccessControlManager = await ethers.getContractFactory("AccessControlManager");
    const accessControl = await AccessControlManager.deploy();
    await accessControl.deployed();
    console.log("✅ AccessControlManager:", accessControl.address);

    const ParameterStorage = await ethers.getContractFactory("ParameterStorage");
    const paramStorage = await ParameterStorage.deploy(registry.address);
    await paramStorage.deployed();
    console.log("✅ ParameterStorage:", paramStorage.address);

    // ... deploy other contracts ...

    // Step 3: Register all contracts in VersionedRegistry
    console.log("\n📝 Registering contracts...\n");

    await registry.setContract(
        ethers.utils.id("AccessControlManager"),
        accessControl.address,
        1
    );
    console.log("✅ Registered AccessControlManager (v1)");

    await registry.setContract(
        ethers.utils.id("ParameterStorage"),
        paramStorage.address,
        1
    );
    console.log("✅ Registered ParameterStorage (v1)");

    // ... register other contracts ...

    console.log("\n✅ Deployment complete!");
}
```

---

## SECTION 5: VALIDATION (P3-17, P3-18)

### 5.1 Integration Testing

```javascript
// test/integration/VersionedRegistry.test.js

describe("VersionedRegistry Integration", function () {
    it("Complete system works with VersionedRegistry", async function () {
        // Deploy complete system
        const { registry, factory, market } = await deployCompleteSystem();

        // Test market creation
        const tx = await factory.createMarket("Test?", 1, futureTime, data);
        const receipt = await tx.wait();
        const marketAddress = receipt.events[0].args.market;

        expect(await factory.isMarket(marketAddress)).to.be.true;

        // Test version queries
        const factoryVersion = await registry.getLatestVersion(ethers.utils.id("FlexibleMarketFactory"));
        expect(factoryVersion).to.equal(1);

        // Test upgrade simulation
        await registry.setContract(
            ethers.utils.id("FlexibleMarketFactory"),
            factory.address,  // Same address for test
            2  // New version
        );

        const newVersion = await registry.getLatestVersion(ethers.utils.id("FlexibleMarketFactory"));
        expect(newVersion).to.equal(2);
    });
});
```

Run:
```bash
npx hardhat test test/integration/VersionedRegistry.test.js
```

### 5.2 Fork Deployment Test

```bash
# Start fork
npx hardhat node --fork https://mainnet-rpc.basedai.io

# In another terminal:
npx hardhat run scripts/deploy/deploy-with-versioned-registry.js --network localhost

# Verify:
# - All contracts deployed
# - All contracts registered
# - Test market creation works
```

---

## SECTION 6: COMPLETION CHECKLIST

### Phase 3 Complete When:

**Implementation:**
- [ ] VersionedRegistry.sol created and compiles
- [ ] IVersionedRegistry.sol interface created
- [ ] All 7 contracts updated (imports + interface)
- [ ] All 7 contracts compile successfully

**Testing:**
- [ ] All 40+ test files updated (version parameter added)
- [ ] All 260+ tests passing
- [ ] Integration tests created and passing
- [ ] No test failures or regressions

**Deployment:**
- [ ] New deployment script created
- [ ] Fork deployment successful
- [ ] All contracts registered with version 1
- [ ] Test market creation works on fork

**Validation:**
- [ ] Code review completed
- [ ] No security vulnerabilities
- [ ] Gas costs acceptable (<10% increase)
- [ ] Documentation updated

**Next Steps:**
- [ ] Phase 4 dependencies met
- [ ] Team approval to proceed
- [ ] Git commit and push

---

## 🎯 SUCCESS CRITERIA

**All must be ✅:**
1. VersionedRegistry fully functional
2. All 7 contracts use new registry
3. All 260+ tests passing
4. Fork deployment successful
5. Version queries working
6. No security issues

**Then proceed to**: [Phase 4: Factory Unification](./PHASE_4_FACTORY_UNIFICATION.md)

---

## ⚠️ CRITICAL NOTES

1. **Test Everything**: This phase touches many files. Test after EVERY change.
2. **Commit Often**: Commit after each contract update. Easy rollback if needed.
3. **No Shortcuts**: Don't skip any contracts. All 7 must be updated.
4. **Version Starts at 1**: All initial contracts registered as version 1.
5. **Backward Compatible**: getContract() works same as before.

**Timeline**: 5-7 days is realistic. Don't rush. Quality > speed.

Good luck with Phase 3! 🚀
