# 🧪 TESTING PROCEDURES GUIDE

**Purpose**: Comprehensive testing strategy for "Minimal Modular" architecture
**Audience**: QA, developers, auditors
**Status**: Reference for all phases

---

## 🎯 TESTING PHILOSOPHY

**Test-Driven Development (TDD)**:
- Write tests before implementation
- Red → Green → Refactor cycle
- 90%+ coverage target

**Testing Pyramid**:
```
         /\
        /E2E\         10% - End-to-end (Playwright, full flows)
       /------\
      /Integr.\      30% - Integration (contract interactions)
     /----------\
    /   Unit     \   60% - Unit (individual functions)
   /--------------\
```

---

## 📋 TEST CATEGORIES

### 1. Unit Tests (60% of tests)

**What**: Individual function testing in isolation

**Tools**: Hardhat + Chai

**Example**:
```javascript
describe("FlexibleMarketFactory", function() {
    describe("createMarketBasic", function() {
        it("should create market with valid parameters", async function() {
            const tx = await factory.createMarketBasic(
                "Test question",
                futureTimestamp,
                ethers.utils.parseEther("1")
            );

            expect(tx).to.emit(factory, "MarketCreated");
        });

        it("should revert with empty question", async function() {
            await expect(
                factory.createMarketBasic("", futureTimestamp, parseEther("1"))
            ).to.be.revertedWith("Empty question");
        });

        it("should revert with past endTime", async function() {
            const pastTime = Math.floor(Date.now() / 1000) - 3600;
            await expect(
                factory.createMarketBasic("Q", pastTime, parseEther("1"))
            ).to.be.revertedWith("Invalid end time");
        });
    });
});
```

**Coverage**:
- Happy paths
- Error cases
- Edge cases
- Boundary values

---

### 2. Integration Tests (30% of tests)

**What**: Contract interaction testing

**Example**:
```javascript
describe("Factory + Market Integration", function() {
    it("should create and initialize market correctly", async function() {
        // Create via factory
        const tx = await factory.createMarketBasic(...);
        const receipt = await tx.wait();
        const marketAddress = receipt.events[0].args.market;

        // Verify market initialized
        const market = await ethers.getContractAt("PredictionMarket", marketAddress);
        expect(await market.question()).to.equal("Test question");
        expect(await market.factory()).to.equal(factory.address);
    });

    it("should complete full lifecycle", async function() {
        // Create → Approve → Activate → Trade → Resolve → Claim
        const market = await createMarket();
        await factory.connect(admin).adminApproveMarket(market);
        await factory.activateMarket(market);
        await market.buyShares(...);
        await fastForward(endTime);
        await market.proposeOutcome(true);
        await market.finalize(true);
        await market.claimWinnings();
    });
});
```

---

### 3. End-to-End Tests (10% of tests)

**What**: Complete user flow testing

**Tools**: Hardhat + Frontend (Playwright optional)

**Example**:
```javascript
describe("E2E: Market Creation Flow", function() {
    it("should complete full market creation and approval flow", async function() {
        // 1. User creates market
        const createTx = await factory.connect(user).createMarketBasic(...);
        const receipt = await createTx.wait();
        const market = receipt.events[0].args.market;

        // 2. Verify PROPOSED state
        const predictionMarket = await ethers.getContractAt("PredictionMarket", market);
        expect(await predictionMarket.getCurrentState()).to.equal(0); // PROPOSED

        // 3. Backend (simulated) approves after threshold
        await factory.connect(backend).approveMarket(market);

        // 4. Verify APPROVED state
        expect(await predictionMarket.getCurrentState()).to.equal(1); // APPROVED

        // 5. User activates
        await factory.activateMarket(market);

        // 6. Verify ACTIVE state
        expect(await predictionMarket.getCurrentState()).to.equal(2); // ACTIVE

        // 7. User trades
        await predictionMarket.connect(trader).buyShares(0, parseEther("10"));

        // 8. Time passes, market resolves
        await ethers.provider.send("evm_setNextBlockTimestamp", [endTime + 1]);
        await predictionMarket.proposeOutcome(true);

        // 9. Dispute window, community agrees
        await resolutionManager.submitDisputeSignals(market, 80, 20);

        // 10. Verify FINALIZED
        expect(await predictionMarket.getCurrentState()).to.equal(5); // FINALIZED
    });
});
```

---

## 🔥 FOUNDRY FUZZ TESTING

**Purpose**: Discover edge cases through random input testing

**Setup**:
```solidity
// test/foundry/MarketFactory.t.sol
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../../contracts/core/FlexibleMarketFactory.sol";

contract MarketFactoryTest is Test {
    FlexibleMarketFactory factory;

    function setUp() public {
        factory = new FlexibleMarketFactory(...);
    }

    function testFuzz_createMarketBasic(
        string memory question,
        uint256 endTime,
        uint256 initialLiquidity
    ) public {
        vm.assume(bytes(question).length > 0);
        vm.assume(endTime > block.timestamp);
        vm.assume(initialLiquidity >= 1 ether && initialLiquidity <= 1000 ether);

        factory.createMarketBasic(question, endTime, initialLiquidity);
        // If doesn't revert, parameters were valid
    }
}
```

**Run**:
```bash
forge test --fuzz-runs 10000
```

---

## ⛽ GAS BENCHMARKING

**Purpose**: Track gas costs, prevent regressions

**Setup**:
```bash
REPORT_GAS=true npx hardhat test
```

**Baseline** (save in `gas-report-baseline.txt`):
```
·----------------------------------------|---------------------------|-------------|-----------------------------·
|  Solc version: 0.8.19                  ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 30000000 gas  │
·················································|···························|·············|······························
|  Methods                                                                                                           │
·························|·······················|·············|·············|·············|···············|··············
|  Contract              ·  Method               ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·························|·······················|·············|·············|·············|···············|··············
|  FlexibleMarketFactory ·  createMarketBasic    ·     180000  ·     200000  ·     190000  ·           10  ·          -  │
·························|·······················|·············|·············|·············|···············|··············
|  PredictionMarket      ·  buyShares            ·      80000  ·     100000  ·      90000  ·           50  ·          -  │
·························|·······················|·············|·············|·············|···············|··············
```

**Compare** after changes - increase should be <15%

---

## 🔒 SECURITY TESTING

### Slither (Static Analysis)

```bash
slither . --print human-summary
```

**Check for**:
- Reentrancy vulnerabilities
- Uninitialized storage
- Dangerous delegatecall
- Unprotected selfdestruct

---

### Invariant Testing (Foundry)

```solidity
contract MarketInvariantTest is Test {
    function invariant_totalSharesEqualTotalSupply() public {
        uint256 yesShares = market.totalSupply(0);
        uint256 noShares = market.totalSupply(1);
        assertEq(yesShares + noShares, market.totalLiquidity());
    }

    function invariant_balancesNeverExceedSupply() public {
        for (uint i = 0; i < users.length; i++) {
            assertLe(market.balanceOf(users[i], 0), market.totalSupply(0));
        }
    }
}
```

---

## 📊 COVERAGE REQUIREMENTS

**Target**: 90%+ coverage

**Generate Report**:
```bash
npx hardhat coverage
```

**Critical Contracts** (must have ≥95% coverage):
- FlexibleMarketFactory
- PredictionMarket
- ResolutionManager
- VersionedRegistry

---

## ✅ TEST CHECKLIST

### Before Each Phase

- [ ] All unit tests passing
- [ ] Integration tests for new features
- [ ] Gas benchmarks within acceptable range
- [ ] Coverage ≥90%
- [ ] Slither shows no Critical/High issues

### Before Mainnet

- [ ] All 260+ tests passing
- [ ] E2E flows tested
- [ ] Fuzz testing passed (10k+ runs)
- [ ] Invariant tests passing
- [ ] Load testing completed
- [ ] Security audit ≥95 score

---

## 🔗 RELATED DOCUMENTS

- **Phase 7**: [PHASE_7_FULL_INTEGRATION.md](./PHASE_7_FULL_INTEGRATION.md)
- **Security**: [SECURITY_GOVERNANCE_GUIDE.md](./SECURITY_GOVERNANCE_GUIDE.md)

---

**Last Updated**: November 7, 2025
