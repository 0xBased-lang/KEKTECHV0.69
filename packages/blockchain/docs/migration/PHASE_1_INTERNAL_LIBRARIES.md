# 📚 PHASE 1: INTERNAL LIBRARIES

**Days**: 21-25
**Duration**: 3-5 days
**Risk Level**: 🟢 LOW
**Status**: Ready after Phase 0 Complete

---

## 🎯 PHASE OBJECTIVE

**Primary Goal**: Extract market creation logic into internal libraries to reduce FlexibleMarketFactory bytecode size.

**Why This Matters**: Phase 0 will determine if factory unification is feasible. If the unified factory is too large (>24KB), we MUST use internal libraries to keep it under the limit.

**What We're Creating**:
1. `CurveMarketLogic.sol` - Library for curve-based market creation
2. `TemplateMarketLogic.sol` - Library for template-based market creation

**Success Criteria**:
- ✅ Both libraries compile successfully
- ✅ Libraries can be used by FlexibleMarketFactory
- ✅ All logic extracted correctly (no missing functionality)
- ✅ Unit tests passing (20+ tests)
- ✅ Gas costs measured and acceptable (<10% increase due to library calls)
- ✅ Documentation complete

---

## 📋 TOPICS COVERED

This phase document covers these topics from the master inventory:

- **P1-01**: Internal library creation rationale
- **P1-02**: CurveMarketLogic library implementation
- **P1-03**: TemplateMarketLogic library implementation
- **P1-04**: Library testing procedures
- **P1-05**: Gas benchmarking methodology
- **P1-06**: Integration with FlexibleMarketFactory
- **P1-07**: Validation criteria
- **P1-08**: Rollback procedures

---

## 🔍 PREREQUISITES

**Must Be Complete Before Starting**:
- ✅ Phase 0 complete (size verification done)
- ✅ Decision made: Use libraries if factory >20KB
- ✅ Prototype code from Phase 0 available for reference

**Required Knowledge**:
- Solidity library patterns
- Internal vs external functions
- Library linking and deployment
- Gas implications of library calls

**Required Tools**:
- Hardhat configured
- Foundry installed (for gas benchmarking)
- Slither (for security analysis)

---

## 📐 ARCHITECTURE OVERVIEW

### Current Problem

```solidity
// FlexibleMarketFactoryCore.sol (548 lines)
contract FlexibleMarketFactoryCore {
    function createMarketWithCurve(...) { /* complex logic */ }
    function _validateCurveParams(...) { /* validation logic */ }
    function _deployCurveMarket(...) { /* deployment logic */ }
}

// FlexibleMarketFactoryExtensions.sol (357 lines)
contract FlexibleMarketFactoryExtensions {
    function createMarketWithTemplate(...) { /* complex logic */ }
    function _validateTemplateParams(...) { /* validation logic */ }
    function _deployTemplateMarket(...) { /* deployment logic */ }
}

// PROBLEM: When unified → likely >24KB
```

### Solution: Internal Libraries

```solidity
// libraries/CurveMarketLogic.sol
library CurveMarketLogic {
    function validateCurveParams(...) internal pure returns (bool) { }
    function createCurveMarket(...) internal returns (address) { }
}

// libraries/TemplateMarketLogic.sol
library TemplateMarketLogic {
    function validateTemplateParams(...) internal pure returns (bool) { }
    function createTemplateMarket(...) internal returns (address) { }
}

// contracts/core/FlexibleMarketFactory.sol (unified, <24KB)
contract FlexibleMarketFactory {
    using CurveMarketLogic for *;
    using TemplateMarketLogic for *;

    function createMarketWithCurve(...) external {
        CurveMarketLogic.validateCurveParams(...);
        address market = CurveMarketLogic.createCurveMarket(...);
    }

    function createMarketWithTemplate(...) external {
        TemplateMarketLogic.validateTemplateParams(...);
        address market = TemplateMarketLogic.createTemplateMarket(...);
    }
}
```

**Benefits**:
- Reduces factory contract size
- Organizes code logically
- Reusable logic
- Easy to test independently

**Trade-offs**:
- Slight gas increase (library call overhead ~200-500 gas)
- More files to manage
- Deployment requires library linking

---

## 🛠️ IMPLEMENTATION GUIDE

### Step 1: Create CurveMarketLogic Library (Day 21)

**File**: `contracts/libraries/CurveMarketLogic.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../interfaces/ICurveRegistry.sol";
import "../interfaces/IPredictionMarket.sol";
import "../interfaces/IParameterStorage.sol";

/**
 * @title CurveMarketLogic
 * @notice Internal library for curve-based market creation logic
 * @dev Used by FlexibleMarketFactory to reduce bytecode size
 */
library CurveMarketLogic {

    // ============ ERRORS ============

    error InvalidCurveId(bytes32 curveId);
    error CurveNotActive(bytes32 curveId);
    error InvalidCurveParameters();
    error LiquidityTooLow(uint256 provided, uint256 minimum);

    // ============ EVENTS ============

    event CurveMarketValidated(bytes32 indexed curveId, uint256 initialLiquidity);
    event CurveMarketCreated(address indexed market, bytes32 indexed curveId);

    // ============ VALIDATION FUNCTIONS ============

    /**
     * @notice Validate curve market parameters
     * @param curveRegistry Address of curve registry
     * @param paramStorage Address of parameter storage
     * @param curveId ID of bonding curve to use
     * @param initialLiquidity Initial liquidity amount
     * @return isValid Whether parameters are valid
     */
    function validateCurveParams(
        address curveRegistry,
        address paramStorage,
        bytes32 curveId,
        uint256 initialLiquidity
    ) internal view returns (bool isValid) {

        // Get curve info from registry
        (
            address curveImplementation,
            bool isActive,
            ,
            ,
        ) = ICurveRegistry(curveRegistry).curves(curveId);

        // Check curve exists and is active
        if (curveImplementation == address(0)) {
            revert InvalidCurveId(curveId);
        }
        if (!isActive) {
            revert CurveNotActive(curveId);
        }

        // Get minimum liquidity requirement
        uint256 minLiquidity = IParameterStorage(paramStorage).minInitialLiquidity();

        // Validate liquidity amount
        if (initialLiquidity < minLiquidity) {
            revert LiquidityTooLow(initialLiquidity, minLiquidity);
        }

        emit CurveMarketValidated(curveId, initialLiquidity);

        return true;
    }

    /**
     * @notice Create market with bonding curve
     * @param marketTemplate Address of market template to clone
     * @param curveRegistry Address of curve registry
     * @param curveId ID of bonding curve
     * @param question Market question
     * @param endTime Market end time
     * @param initialLiquidity Initial liquidity
     * @return market Address of created market
     */
    function createCurveMarket(
        address marketTemplate,
        address curveRegistry,
        bytes32 curveId,
        string memory question,
        uint256 endTime,
        uint256 initialLiquidity
    ) internal returns (address market) {

        // Get curve implementation
        (address curveImpl, , , ,) = ICurveRegistry(curveRegistry).curves(curveId);

        // Clone market template
        market = _cloneMarket(marketTemplate);

        // Initialize market with curve
        IPredictionMarket(market).initializeWithCurve(
            question,
            endTime,
            curveImpl,
            initialLiquidity
        );

        emit CurveMarketCreated(market, curveId);

        return market;
    }

    // ============ INTERNAL HELPERS ============

    /**
     * @notice Clone market template using CREATE2 for deterministic addresses
     * @param template Address of template to clone
     * @return instance Address of cloned instance
     */
    function _cloneMarket(address template) private returns (address instance) {
        // Minimal proxy (EIP-1167) bytecode
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
}
```

**Testing** (`test/libraries/CurveMarketLogic.test.js`):

```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CurveMarketLogic", function() {

    let curveRegistry, paramStorage, marketTemplate;
    let testCurveId;

    beforeEach(async function() {
        // Deploy mocks
        const CurveRegistry = await ethers.getContractFactory("CurveRegistry");
        curveRegistry = await CurveRegistry.deploy();

        const ParameterStorage = await ethers.getContractFactory("ParameterStorage");
        paramStorage = await ParameterStorage.deploy();

        // Register test curve
        testCurveId = ethers.utils.id("LMSR");
        await curveRegistry.registerCurve(testCurveId, mockCurveImpl, metadata);
    });

    describe("validateCurveParams", function() {
        it("should validate correct curve parameters", async function() {
            // Test validation logic
        });

        it("should revert for invalid curve ID", async function() {
            // Test error handling
        });

        it("should revert for inactive curve", async function() {
            // Test inactive curve rejection
        });

        it("should revert for insufficient liquidity", async function() {
            // Test liquidity validation
        });
    });

    describe("createCurveMarket", function() {
        it("should create market with curve", async function() {
            // Test market creation
        });

        it("should emit CurveMarketCreated event", async function() {
            // Test event emission
        });

        it("should clone market template correctly", async function() {
            // Test cloning logic
        });
    });

    describe("Gas Benchmarking", function() {
        it("should measure gas costs", async function() {
            // Measure validation gas
            // Measure creation gas
            // Compare to baseline
        });
    });
});
```

---

### Step 2: Create TemplateMarketLogic Library (Day 22)

**File**: `contracts/libraries/TemplateMarketLogic.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../interfaces/IMarketTemplateRegistry.sol";
import "../interfaces/IPredictionMarket.sol";
import "../interfaces/IParameterStorage.sol";

/**
 * @title TemplateMarketLogic
 * @notice Internal library for template-based market creation logic
 * @dev Used by FlexibleMarketFactory to reduce bytecode size
 */
library TemplateMarketLogic {

    // ============ ERRORS ============

    error InvalidTemplateId(bytes32 templateId);
    error TemplateNotActive(bytes32 templateId);
    error InvalidTemplateParameters();

    // ============ EVENTS ============

    event TemplateMarketValidated(bytes32 indexed templateId);
    event TemplateMarketCreated(address indexed market, bytes32 indexed templateId);

    // ============ VALIDATION FUNCTIONS ============

    /**
     * @notice Validate template market parameters
     * @param templateRegistry Address of template registry
     * @param templateId ID of template to use
     * @return isValid Whether parameters are valid
     */
    function validateTemplateParams(
        address templateRegistry,
        bytes32 templateId
    ) internal view returns (bool isValid) {

        // Get template info
        (
            address templateImpl,
            bool isActive,
            ,
        ) = IMarketTemplateRegistry(templateRegistry).templates(templateId);

        // Validate template
        if (templateImpl == address(0)) {
            revert InvalidTemplateId(templateId);
        }
        if (!isActive) {
            revert TemplateNotActive(templateId);
        }

        emit TemplateMarketValidated(templateId);

        return true;
    }

    /**
     * @notice Create market from template
     * @param templateRegistry Address of template registry
     * @param templateId Template ID
     * @param question Market question
     * @param endTime Market end time
     * @param customParams Custom template parameters
     * @return market Address of created market
     */
    function createTemplateMarket(
        address templateRegistry,
        bytes32 templateId,
        string memory question,
        uint256 endTime,
        bytes memory customParams
    ) internal returns (address market) {

        // Get template implementation
        (address templateImpl, , ,) = IMarketTemplateRegistry(templateRegistry).templates(templateId);

        // Clone template
        market = _cloneTemplate(templateImpl);

        // Initialize with custom parameters
        IPredictionMarket(market).initializeWithTemplate(
            question,
            endTime,
            customParams
        );

        emit TemplateMarketCreated(market, templateId);

        return market;
    }

    // ============ INTERNAL HELPERS ============

    function _cloneTemplate(address template) private returns (address instance) {
        // Same minimal proxy logic as CurveMarketLogic
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
}
```

---

### Step 3: Gas Benchmarking (Day 23)

**Objective**: Measure gas costs and compare to direct implementation.

**Script**: `scripts/benchmark-libraries.js`

```javascript
const { ethers } = require("hardhat");

async function benchmark() {

    console.log("📊 Gas Benchmarking: Internal Libraries\n");

    // Deploy libraries and factory
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
    const factory = await Factory.deploy();

    // Benchmark curve market creation
    console.log("🔵 Curve Market Creation:");
    const curveTx = await factory.createMarketWithCurve(curveParams);
    const curveReceipt = await curveTx.wait();
    console.log(`   Gas Used: ${curveReceipt.gasUsed.toString()}`);

    // Benchmark template market creation
    console.log("\n🟢 Template Market Creation:");
    const templateTx = await factory.createMarketWithTemplate(templateParams);
    const templateReceipt = await templateTx.wait();
    console.log(`   Gas Used: ${templateReceipt.gasUsed.toString()}`);

    // Compare to baseline (from Week 2 data)
    console.log("\n📈 Comparison to Baseline:");
    console.log(`   Curve Market: ${calculatePercentChange(baseline.curve, curveReceipt.gasUsed)}%`);
    console.log(`   Template Market: ${calculatePercentChange(baseline.template, templateReceipt.gasUsed)}%`);

    // Check acceptable threshold (<10% increase)
    const curveIncrease = calculatePercentChange(baseline.curve, curveReceipt.gasUsed);
    const templateIncrease = calculatePercentChange(baseline.template, templateReceipt.gasUsed);

    if (curveIncrease > 10 || templateIncrease > 10) {
        console.log("\n⚠️  WARNING: Gas increase >10% threshold!");
        console.log("   Consider optimizing library calls or inline critical functions");
    } else {
        console.log("\n✅ Gas costs acceptable (<10% increase)");
    }
}

benchmark().catch(console.error);
```

**Run**:
```bash
npx hardhat run scripts/benchmark-libraries.js
```

---

### Step 4: Integration Testing (Day 24)

**Test Suite**: `test/integration/library-integration.test.js`

```javascript
describe("Library Integration", function() {

    it("should create curve markets using library", async function() {
        // End-to-end test of curve market creation
    });

    it("should create template markets using library", async function() {
        // End-to-end test of template market creation
    });

    it("should handle library errors correctly", async function() {
        // Test error propagation from libraries
    });

    it("should maintain factory state correctly", async function() {
        // Ensure libraries don't affect factory state management
    });
});
```

---

### Step 5: Documentation Updates (Day 25)

**Update These Files**:

1. **Architecture Diagram**: Add library layer
2. **Gas Report**: Include benchmark results
3. **Deployment Guide**: Add library deployment steps

---

## ✅ VALIDATION CRITERIA

Before proceeding to Phase 2, verify:

**Code Quality**:
- ✅ Both libraries compile without errors
- ✅ All functions properly documented (NatSpec)
- ✅ No security warnings from Slither
- ✅ Code follows Solidity style guide

**Testing**:
- ✅ All unit tests passing (20+ tests total)
- ✅ Integration tests passing
- ✅ Edge cases covered (invalid params, zero values, etc.)
- ✅ Error cases tested

**Performance**:
- ✅ Gas costs measured and documented
- ✅ Gas increase <10% vs baseline
- ✅ Library call overhead acceptable
- ✅ No unexpected gas spikes

**Integration**:
- ✅ Libraries work with factory contract
- ✅ No state management issues
- ✅ Events emit correctly
- ✅ Error propagation works

**Documentation**:
- ✅ Architecture updated
- ✅ Gas benchmarks documented
- ✅ Deployment guide updated
- ✅ Code comments complete

---

## 🚨 ROLLBACK PROCEDURE

If Phase 1 fails validation:

1. **Identify Issue**: Determine what failed (gas, tests, integration)
2. **Fix Attempt**: Try to resolve within Phase 1 scope
3. **If Unfixable**: Revert to Phase 0 state
4. **Alternative**: Consider different library structure or inline more code

**Rollback Commands**:
```bash
git checkout main
git branch -D feature/phase-1-libraries
git checkout -b feature/phase-1-libraries-v2
```

---

## 📊 SUCCESS METRICS

**Definition of Done**:
- All validation criteria checked ✅
- Gas benchmarks within acceptable range
- Team review approved
- Commit to `feature/minimal-modular-refactor` branch
- Documentation updated

**Next Phase**: Phase 2 - Enhanced Metadata (Days 26-28)

---

## 🔗 RELATED DOCUMENTS

- **Previous**: [PHASE_0_SIZE_VERIFICATION.md](./PHASE_0_SIZE_VERIFICATION.md)
- **Next**: [PHASE_2_ENHANCED_METADATA.md](./PHASE_2_ENHANCED_METADATA.md) (create this next)
- **Master Plan**: [MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md](./MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md)
- **Testing Guide**: [TESTING_PROCEDURES_GUIDE.md](./TESTING_PROCEDURES_GUIDE.md) (to be created)

---

**Status**: ✅ Ready to execute after Phase 0 complete
**Last Updated**: November 7, 2025
