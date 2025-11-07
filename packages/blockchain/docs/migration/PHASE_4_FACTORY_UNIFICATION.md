# 🏭 PHASE 4: FACTORY UNIFICATION + APPROVAL SYSTEM

**Days**: 36-43
**Duration**: 6-8 days
**Risk Level**: 🟡 MEDIUM-HIGH
**Status**: Ready after Phase 3 Complete

---

## 🎯 PHASE OBJECTIVE

**Primary Goal**: Merge FlexibleMarketFactoryCore and FlexibleMarketFactoryExtensions into a single unified FlexibleMarketFactory contract with integrated approval system.

**Why This Matters**:
- Simplifies architecture (2 contracts → 1 unified contract)
- Reduces deployment complexity
- Integrates approval system for frontend (like/dislike → on-chain approval)
- Must stay under 24KB bytecode limit (use libraries from Phase 1)

**What We're Creating**:
1. Unified FlexibleMarketFactory.sol
2. Integrated approval system (automatic + admin override)
3. Market activation flow
4. Updated test suite (50+ tests)

**Success Criteria**:
- ✅ Unified factory compiles successfully
- ✅ Bytecode size <24KB (verified)
- ✅ All original functionality preserved
- ✅ Approval system working (automatic + override)
- ✅ All tests passing (50+ tests)
- ✅ Gas costs <15% increase vs baseline
- ✅ Integration with Phase 1 libraries working

---

## 📋 TOPICS COVERED

- **P4-01**: Factory unification rationale
- **P4-02**: Merging strategy (Core + Extensions)
- **P4-03**: Approval system architecture
- **P4-04**: State management consolidation
- **P4-05**: Event consolidation
- **P4-06**: Library integration (CurveMarketLogic, TemplateMarketLogic)
- **P4-07**: Bytecode size verification
- **P4-08**: Testing strategy for unified factory
- **P4-09**: Unified factory implementation
- **P4-10**: Approval function implementation
- **P4-11**: Admin override implementation
- **P4-12**: Market activation flow
- **P4-13**: Gas optimization techniques
- **P4-14**: Rollback procedures
- **P4-15**: Validation criteria

---

## 🔍 PREREQUISITES

**Must Be Complete**:
- ✅ Phase 3 complete (VersionedRegistry deployed and configured)
- ✅ Phase 1 complete (CurveMarketLogic and TemplateMarketLogic available)
- ✅ Phase 0 results (know target bytecode size)

**Required Knowledge**:
- Contract merging strategies
- Library linking
- Solidity bytecode optimization
- Approval system patterns

---

## 📐 ARCHITECTURE OVERVIEW

### Current State (Before Unification)

```solidity
// FlexibleMarketFactoryCore.sol (548 lines)
contract FlexibleMarketFactoryCore {
    IVersionedRegistry public registry;

    function createMarketBasic(...) external returns (address) { }
    function createMarketWithCurve(...) external returns (address) { }

    // Internal helpers
    function _deployMarket(...) internal { }
    function _validateParameters(...) internal { }
}

// FlexibleMarketFactoryExtensions.sol (357 lines)
contract FlexibleMarketFactoryExtensions is FlexibleMarketFactoryCore {
    function createMarketWithTemplate(...) external returns (address) { }

    // Template-specific logic
}

PROBLEM:
- 2 separate deployment files
- Complex inheritance
- No approval system
- Total ~905 lines (likely >24KB when unified)
```

### Target State (After Unification)

```solidity
// FlexibleMarketFactory.sol (unified, <600 lines, <24KB)
contract FlexibleMarketFactory {
    using CurveMarketLogic for *;
    using TemplateMarketLogic for *;

    IVersionedRegistry public registry;

    // Market creation (all 3 methods in one contract)
    function createMarketBasic(...) external returns (address) { }
    function createMarketWithCurve(...) external returns (address) { }
    function createMarketWithTemplate(...) external returns (address) { }

    // NEW: Approval system
    function approveMarket(address market) external onlyBackend { }
    function adminApproveMarket(address market) external onlyAdmin { }
    function adminRejectMarket(address market) external onlyAdmin { }

    // NEW: Market activation
    function activateMarket(address market) external { }

    // Internal helpers (using libraries for complex logic)
    function _deployMarket(...) internal { }
    function _validateParameters(...) internal { }
}

BENEFITS:
- Single contract (simpler deployment)
- Integrated approval system
- Uses libraries (keeps size <24KB)
- Clear approval → activation flow
```

---

## 🛠️ IMPLEMENTATION GUIDE

### Step 1: Create Unified Factory Contract (Days 36-37)

**File**: `contracts/core/FlexibleMarketFactory.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../libraries/CurveMarketLogic.sol";
import "../libraries/TemplateMarketLogic.sol";
import "../interfaces/IVersionedRegistry.sol";
import "../interfaces/IPredictionMarket.sol";
import "../interfaces/IAccessControlManager.sol";

/**
 * @title FlexibleMarketFactory
 * @notice Unified factory for creating prediction markets with approval system
 * @dev Merges Core + Extensions, uses libraries for size optimization
 */
contract FlexibleMarketFactory {

    using CurveMarketLogic for *;
    using TemplateMarketLogic for *;

    // ============ STATE VARIABLES ============

    IVersionedRegistry public registry;
    IAccessControlManager public accessControl;

    mapping(address => MarketMetadata) public markets;
    address[] public allMarkets;

    struct MarketMetadata {
        address creator;
        uint256 createdAt;
        MarketType marketType;
        bool isApproved;
        bool isActive;
    }

    enum MarketType {
        BASIC,
        CURVE,
        TEMPLATE
    }

    // ============ EVENTS ============

    event MarketCreated(
        address indexed market,
        address indexed creator,
        MarketType marketType,
        uint256 timestamp
    );
    event MarketProposed(address indexed market, string question);
    event MarketApproved(address indexed market, address approver);
    event MarketManuallyApproved(address indexed market, address admin);
    event MarketRejected(address indexed market, string reason);
    event MarketActivated(address indexed market, uint256 timestamp);

    // ============ ERRORS ============

    error MarketNotFound(address market);
    error MarketAlreadyApproved(address market);
    error MarketNotApproved(address market);
    error MarketAlreadyActive(address market);
    error InvalidParameters();
    error BytecodeSizeExceeded();

    // ============ CONSTRUCTOR ============

    constructor(address _registry, address _accessControl) {
        registry = IVersionedRegistry(_registry);
        accessControl = IAccessControlManager(_accessControl);
    }

    // ============ MARKET CREATION ============

    /**
     * @notice Create basic prediction market
     * @param question Market question
     * @param endTime Market end timestamp
     * @param initialLiquidity Initial liquidity amount
     * @return market Address of created market
     */
    function createMarketBasic(
        string memory question,
        uint256 endTime,
        uint256 initialLiquidity
    ) external returns (address market) {

        // Validate parameters
        _validateBasicParams(question, endTime, initialLiquidity);

        // Deploy market
        market = _deployMarket();

        // Initialize
        IPredictionMarket(market).initialize(
            question,
            endTime,
            initialLiquidity
        );

        // Store metadata
        markets[market] = MarketMetadata({
            creator: msg.sender,
            createdAt: block.timestamp,
            marketType: MarketType.BASIC,
            isApproved: false,
            isActive: false
        });

        allMarkets.push(market);

        emit MarketCreated(market, msg.sender, MarketType.BASIC, block.timestamp);
        emit MarketProposed(market, question);

        return market;
    }

    /**
     * @notice Create market with bonding curve
     * @param question Market question
     * @param endTime Market end timestamp
     * @param curveId ID of bonding curve from registry
     * @param initialLiquidity Initial liquidity
     * @return market Address of created market
     */
    function createMarketWithCurve(
        string memory question,
        uint256 endTime,
        bytes32 curveId,
        uint256 initialLiquidity
    ) external returns (address market) {

        // Get registry addresses
        address curveRegistry = registry.getModule("CurveRegistry");
        address paramStorage = registry.getModule("ParameterStorage");

        // Validate using library
        CurveMarketLogic.validateCurveParams(
            curveRegistry,
            paramStorage,
            curveId,
            initialLiquidity
        );

        // Deploy market
        market = _deployMarket();

        // Create with curve using library
        CurveMarketLogic.createCurveMarket(
            market,
            curveRegistry,
            curveId,
            question,
            endTime,
            initialLiquidity
        );

        // Store metadata
        markets[market] = MarketMetadata({
            creator: msg.sender,
            createdAt: block.timestamp,
            marketType: MarketType.CURVE,
            isApproved: false,
            isActive: false
        });

        allMarkets.push(market);

        emit MarketCreated(market, msg.sender, MarketType.CURVE, block.timestamp);
        emit MarketProposed(market, question);

        return market;
    }

    /**
     * @notice Create market from template
     * @param question Market question
     * @param endTime Market end timestamp
     * @param templateId Template ID from registry
     * @param customParams Template-specific parameters
     * @return market Address of created market
     */
    function createMarketWithTemplate(
        string memory question,
        uint256 endTime,
        bytes32 templateId,
        bytes memory customParams
    ) external returns (address market) {

        // Get template registry
        address templateRegistry = registry.getModule("MarketTemplateRegistry");

        // Validate using library
        TemplateMarketLogic.validateTemplateParams(
            templateRegistry,
            templateId
        );

        // Deploy market
        market = _deployMarket();

        // Create with template using library
        TemplateMarketLogic.createTemplateMarket(
            market,
            templateRegistry,
            templateId,
            question,
            endTime,
            customParams
        );

        // Store metadata
        markets[market] = MarketMetadata({
            creator: msg.sender,
            createdAt: block.timestamp,
            marketType: MarketType.TEMPLATE,
            isApproved: false,
            isActive: false
        });

        allMarkets.push(market);

        emit MarketCreated(market, msg.sender, MarketType.TEMPLATE, block.timestamp);
        emit MarketProposed(market, question);

        return market;
    }

    // ============ APPROVAL SYSTEM ============

    /**
     * @notice Approve market (automatic threshold-based)
     * @param market Market address
     * @dev Called by backend relayer when like/dislike threshold met
     */
    function approveMarket(address market) external onlyBackend {
        MarketMetadata storage metadata = markets[market];

        if (metadata.creator == address(0)) {
            revert MarketNotFound(market);
        }
        if (metadata.isApproved) {
            revert MarketAlreadyApproved(market);
        }

        metadata.isApproved = true;

        emit MarketApproved(market, msg.sender);
    }

    /**
     * @notice Manually approve market (admin override)
     * @param market Market address
     * @dev Admin can approve anytime, bypassing automatic threshold
     */
    function adminApproveMarket(address market) external onlyAdmin {
        MarketMetadata storage metadata = markets[market];

        if (metadata.creator == address(0)) {
            revert MarketNotFound(market);
        }
        if (metadata.isApproved) {
            revert MarketAlreadyApproved(market);
        }

        metadata.isApproved = true;

        emit MarketManuallyApproved(market, msg.sender);
    }

    /**
     * @notice Reject market (admin override)
     * @param market Market address
     * @param reason Rejection reason
     */
    function adminRejectMarket(
        address market,
        string calldata reason
    ) external onlyAdmin {
        MarketMetadata storage metadata = markets[market];

        if (metadata.creator == address(0)) {
            revert MarketNotFound(market);
        }

        // Mark as inactive/rejected
        IPredictionMarket(market).reject();

        emit MarketRejected(market, reason);
    }

    /**
     * @notice Activate approved market
     * @param market Market address
     * @dev Can be called by anyone once market is approved
     */
    function activateMarket(address market) external {
        MarketMetadata storage metadata = markets[market];

        if (!metadata.isApproved) {
            revert MarketNotApproved(market);
        }
        if (metadata.isActive) {
            revert MarketAlreadyActive(market);
        }

        metadata.isActive = true;

        // Activate in market contract
        IPredictionMarket(market).activate();

        emit MarketActivated(market, block.timestamp);
    }

    // ============ INTERNAL HELPERS ============

    function _deployMarket() internal returns (address market) {
        // Get market template from registry
        address marketTemplate = registry.getModule("PredictionMarketTemplate");

        // Clone using minimal proxy (EIP-1167)
        market = _clone(marketTemplate);
    }

    function _clone(address template) internal returns (address instance) {
        bytes20 targetBytes = bytes20(template);
        assembly {
            let clone := mload(0x40)
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(clone, 0x14), targetBytes)
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            instance := create(0, clone, 0x37)
        }
        require(instance != address(0), "Clone failed");
    }

    function _validateBasicParams(
        string memory question,
        uint256 endTime,
        uint256 initialLiquidity
    ) internal view {
        require(bytes(question).length > 0, "Empty question");
        require(endTime > block.timestamp, "Invalid end time");

        // Get parameter storage
        address paramStorage = registry.getModule("ParameterStorage");
        uint256 minLiquidity = IParameterStorage(paramStorage).minInitialLiquidity();

        require(initialLiquidity >= minLiquidity, "Insufficient liquidity");
    }

    // ============ VIEW FUNCTIONS ============

    function getMarketMetadata(address market)
        external
        view
        returns (MarketMetadata memory)
    {
        return markets[market];
    }

    function getAllMarkets() external view returns (address[] memory) {
        return allMarkets;
    }

    function getMarketCount() external view returns (uint256) {
        return allMarkets.length;
    }

    // ============ MODIFIERS ============

    modifier onlyBackend() {
        require(
            accessControl.hasRole(accessControl.BACKEND_ROLE(), msg.sender),
            "Not backend"
        );
        _;
    }

    modifier onlyAdmin() {
        require(
            accessControl.hasRole(accessControl.ADMIN_ROLE(), msg.sender),
            "Not admin"
        );
        _;
    }
}
```

---

### Step 2: Bytecode Size Verification (Day 38)

**Script**: `scripts/verify-factory-size.js`

```javascript
const { ethers } = require("hardhat");

async function verifySize() {
    console.log("📏 Verifying Unified Factory Bytecode Size\n");

    // Deploy libraries first
    const CurveMarketLogic = await ethers.getContractFactory("CurveMarketLogic");
    const curveLib = await CurveMarketLogic.deploy();

    const TemplateMarketLogic = await ethers.getContractFactory("TemplateMarketLogic");
    const templateLib = await TemplateMarketLogic.deploy();

    // Deploy factory with libraries
    const Factory = await ethers.getContractFactory("FlexibleMarketFactory", {
        libraries: {
            CurveMarketLogic: curveLib.address,
            TemplateMarketLogic: templateLib.address
        }
    });

    const factory = await Factory.deploy(registryAddress, accessControlAddress);

    // Get bytecode
    const bytecode = Factory.bytecode;
    const bytecodeSize = bytecode.length / 2; // Convert hex to bytes

    console.log(`Bytecode Size: ${bytecodeSize} bytes`);
    console.log(`Limit: 24576 bytes`);
    console.log(`Remaining: ${24576 - bytecodeSize} bytes`);
    console.log(`Percentage: ${((bytecodeSize / 24576) * 100).toFixed(2)}%`);

    if (bytecodeSize >= 24576) {
        console.log("\n❌ FAILED: Bytecode exceeds 24KB limit!");
        console.log("ACTION REQUIRED: Extract more logic to libraries");
        process.exit(1);
    } else {
        console.log("\n✅ PASSED: Bytecode within 24KB limit");
    }
}

verifySize().catch(console.error);
```

**Run**:
```bash
npx hardhat run scripts/verify-factory-size.js
```

---

### Step 3: Update Tests (Days 39-40)

**Merge existing tests and add approval system tests**:

**File**: `test/core/FlexibleMarketFactory.test.js`

```javascript
describe("FlexibleMarketFactory - Unified", function() {

    describe("Market Creation", function() {
        it("should create basic market", async function() {
            const tx = await factory.createMarketBasic(
                "Test question",
                futureTimestamp,
                ethers.utils.parseEther("1")
            );

            const receipt = await tx.wait();
            const event = receipt.events.find(e => e.event === "MarketCreated");

            expect(event.args.marketType).to.equal(0); // BASIC
        });

        it("should create curve market using library", async function() {
            const tx = await factory.createMarketWithCurve(
                "Curve market",
                futureTimestamp,
                lmsrCurveId,
                ethers.utils.parseEther("10")
            );

            expect(tx).to.emit(factory, "MarketCreated");
        });

        it("should create template market using library", async function() {
            const tx = await factory.createMarketWithTemplate(
                "Template market",
                futureTimestamp,
                binaryTemplateId,
                "0x"
            );

            expect(tx).to.emit(factory, "MarketCreated");
        });
    });

    describe("Approval System", function() {
        let market;

        beforeEach(async function() {
            const tx = await factory.createMarketBasic(...);
            const receipt = await tx.wait();
            market = receipt.events[0].args.market;
        });

        it("should allow backend to approve market", async function() {
            // Grant backend role
            await accessControl.grantRole(BACKEND_ROLE, backend.address);

            // Approve
            await factory.connect(backend).approveMarket(market);

            const metadata = await factory.getMarketMetadata(market);
            expect(metadata.isApproved).to.be.true;
        });

        it("should allow admin to manually approve", async function() {
            await factory.connect(admin).adminApproveMarket(market);

            expect(await factory.getMarketMetadata(market).isApproved).to.be.true;
        });

        it("should allow admin to reject market", async function() {
            await factory.connect(admin).adminRejectMarket(market, "Spam");

            expect(await factory.connect(admin).adminRejectMarket).to.emit(
                factory,
                "MarketRejected"
            );
        });

        it("should prevent non-backend from approving", async function() {
            await expect(
                factory.connect(user).approveMarket(market)
            ).to.be.revertedWith("Not backend");
        });

        it("should prevent double approval", async function() {
            await factory.connect(admin).adminApproveMarket(market);

            await expect(
                factory.connect(admin).adminApproveMarket(market)
            ).to.be.revertedWith("MarketAlreadyApproved");
        });
    });

    describe("Market Activation", function() {
        let market;

        beforeEach(async function() {
            const tx = await factory.createMarketBasic(...);
            const receipt = await tx.wait();
            market = receipt.events[0].args.market;
        });

        it("should activate approved market", async function() {
            // Approve first
            await factory.connect(admin).adminApproveMarket(market);

            // Activate
            await factory.activateMarket(market);

            const metadata = await factory.getMarketMetadata(market);
            expect(metadata.isActive).to.be.true;
        });

        it("should prevent activation of unapproved market", async function() {
            await expect(
                factory.activateMarket(market)
            ).to.be.revertedWith("MarketNotApproved");
        });

        it("should prevent double activation", async function() {
            await factory.connect(admin).adminApproveMarket(market);
            await factory.activateMarket(market);

            await expect(
                factory.activateMarket(market)
            ).to.be.revertedWith("MarketAlreadyActive");
        });
    });

    describe("Gas Benchmarking", function() {
        it("should measure gas for basic market creation", async function() {
            const tx = await factory.createMarketBasic(...);
            const receipt = await tx.wait();
            console.log(`Gas used: ${receipt.gasUsed.toString()}`);
        });

        it("should measure gas for approval", async function() {
            const market = await createMarket();
            const tx = await factory.connect(admin).adminApproveMarket(market);
            const receipt = await tx.wait();
            console.log(`Approval gas: ${receipt.gasUsed.toString()}`);
        });
    });
});
```

---

### Step 4: Integration Testing (Day 41-42)

**End-to-end flow test**:

```javascript
describe("Factory Integration - Complete Flow", function() {
    it("should complete full market lifecycle", async function() {
        // 1. Create market
        const tx = await factory.createMarketBasic(...);
        const receipt = await tx.wait();
        const market = receipt.events[0].args.market;

        // Verify PROPOSED state
        let metadata = await factory.getMarketMetadata(market);
        expect(metadata.isApproved).to.be.false;
        expect(metadata.isActive).to.be.false;

        // 2. Backend approves (simulating threshold met)
        await accessControl.grantRole(BACKEND_ROLE, backend.address);
        await factory.connect(backend).approveMarket(market);

        // Verify APPROVED state
        metadata = await factory.getMarketMetadata(market);
        expect(metadata.isApproved).to.be.true;

        // 3. Activate market
        await factory.activateMarket(market);

        // Verify ACTIVE state
        metadata = await factory.getMarketMetadata(market);
        expect(metadata.isActive).to.be.true;
    });
});
```

---

### Step 5: Gas Optimization (Day 43)

**Techniques**:
1. Use `calldata` instead of `memory` for function parameters
2. Pack structs efficiently (bool + address + uint256)
3. Use unchecked blocks for safe arithmetic
4. Cache storage reads in memory
5. Use custom errors instead of require strings

**Optimized example**:
```solidity
// Before
function approveMarket(address market) external {
    require(markets[market].creator != address(0), "Market not found");
    require(!markets[market].isApproved, "Already approved");
    markets[market].isApproved = true;
}

// After (optimized)
function approveMarket(address market) external {
    MarketMetadata storage metadata = markets[market]; // Cache storage read

    if (metadata.creator == address(0)) {
        revert MarketNotFound(market); // Custom error
    }
    if (metadata.isApproved) {
        revert MarketAlreadyApproved(market); // Custom error
    }

    metadata.isApproved = true; // Single storage write
}
```

---

## ✅ VALIDATION CRITERIA

**Code Quality**:
- ✅ Unified factory compiles successfully
- ✅ Bytecode size <24KB (verified with script)
- ✅ All functions properly documented
- ✅ No security warnings from Slither
- ✅ Libraries integrated correctly

**Testing**:
- ✅ All 50+ tests passing
- ✅ Market creation tests (basic, curve, template)
- ✅ Approval system tests (automatic + override)
- ✅ Activation tests
- ✅ Error case tests
- ✅ Gas benchmarks acceptable

**Performance**:
- ✅ Gas costs <15% increase vs baseline
- ✅ No unexpected gas spikes
- ✅ Library call overhead acceptable

**Integration**:
- ✅ Works with VersionedRegistry
- ✅ Works with AccessControlManager
- ✅ Works with Phase 1 libraries
- ✅ Events emit correctly
- ✅ Frontend can listen to all events

---

## 🚨 ROLLBACK PROCEDURE

If unified factory fails validation:

1. Keep FlexibleMarketFactoryCore and FlexibleMarketFactoryExtensions
2. Add approval system to Core contract
3. Use inheritance pattern (not ideal but functional)
4. Document why unification failed (likely bytecode size)

**Commands**:
```bash
git checkout contracts/core/FlexibleMarketFactoryCore.sol
git checkout contracts/core/FlexibleMarketFactoryExtensions.sol
git branch -D feature/phase-4-unification
```

---

## 📊 SUCCESS METRICS

**Definition of Done**:
- Unified factory deployed and verified ✅
- Bytecode <24KB ✅
- All validation criteria met ✅
- Tests passing ✅
- Gas costs acceptable ✅
- Integration working ✅
- Documentation updated ✅

**Next Phase**: Phase 5 - Market Lifecycle (Days 44-50)

---

## 🔗 RELATED DOCUMENTS

- **Previous**: [PHASE_3_VERSIONED_REGISTRY.md](./PHASE_3_VERSIONED_REGISTRY.md)
- **Next**: [PHASE_5_MARKET_LIFECYCLE.md](./PHASE_5_MARKET_LIFECYCLE.md)
- **Libraries**: [PHASE_1_INTERNAL_LIBRARIES.md](./PHASE_1_INTERNAL_LIBRARIES.md)
- **Master Plan**: [MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md](./MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md)
- **Frontend**: [FRONTEND_INTEGRATION_GUIDE.md](./FRONTEND_INTEGRATION_GUIDE.md)

---

**Status**: ✅ Ready to execute after Phase 3 complete
**Last Updated**: November 7, 2025
