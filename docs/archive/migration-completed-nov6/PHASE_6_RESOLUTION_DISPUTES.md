# ⚖️ PHASE 6: RESOLUTION & DISPUTE SYSTEM

**Days**: 51-56
**Duration**: 4-6 days
**Risk Level**: 🟡 MEDIUM-HIGH
**Status**: Ready after Phase 5 Complete

---

## 🎯 PHASE OBJECTIVE

**Primary Goal**: Implement dispute aggregation system in ResolutionManager with automatic finalization and admin override capabilities.

**What We're Building**:
1. Dispute window management (48-hour default)
2. Off-chain vote aggregation → on-chain submission
3. Automatic finalization (>75% agreement)
4. Dispute triggering (>40% disagreement)
5. Admin override functions

**Success Criteria**:
- ✅ Dispute windows working
- ✅ Agreement/disagreement aggregation functional
- ✅ Auto-finalization working
- ✅ Admin overrides implemented
- ✅ Tests passing (30+ tests)
- ✅ Frontend integration ready

---

## 📋 TOPICS COVERED

P6-01 through P6-10: Dispute system architecture, implementation, testing, validation

---

## 📐 DISPUTE FLOW

```
Market Ends → RESOLVING State
    │
    ▼
proposeOutcome(outcome) called
    │
    ▼
Dispute Window Opens (48 hours)
    │
    ├─→ Users vote off-chain (Supabase)
    │
    ├─→ Backend aggregates votes
    │
    ▼
submitDisputeSignals(agreeCount, disagreeCount)
    │
    ├─→ Agreement >75% → Auto-finalize
    │
    ├─→ Disagreement >40% → Mark DISPUTED
    │
    └─→ Mixed signals → Wait for window end
         │
         ▼
    Window expires → Admin resolution
```

---

## 🛠️ IMPLEMENTATION

### ResolutionManager Contract

```solidity
// contracts/core/ResolutionManager.sol
pragma solidity ^0.8.19;

contract ResolutionManager {

    struct DisputeWindow {
        uint256 startTime;
        uint256 endTime;
        uint256 agreeCount;
        uint256 disagreeCount;
        bool isActive;
        bool outcome;
    }

    mapping(address => DisputeWindow) public disputes;

    uint256 public disputeWindowDuration = 48 hours;
    uint256 public agreementThreshold = 75;  // 75% to auto-finalize
    uint256 public disagreementThreshold = 40;  // 40% to mark disputed

    event DisputeWindowOpened(address indexed market, bool outcome, uint256 endTime);
    event DisputeSignalsSubmitted(address indexed market, uint256 agree, uint256 disagree);
    event MarketAutoFinalized(address indexed market, bool outcome);
    event MarketMarkedDisputed(address indexed market);
    event AdminResolution(address indexed market, bool outcome, string reason);

    /**
     * @notice Propose market outcome and open dispute window
     * @param market Market address
     * @param outcome Proposed outcome
     */
    function proposeResolution(address market, bool outcome) external {
        IPredictionMarket(market).proposeOutcome(outcome);

        disputes[market] = DisputeWindow({
            startTime: block.timestamp,
            endTime: block.timestamp + disputeWindowDuration,
            agreeCount: 0,
            disagreeCount: 0,
            isActive: true,
            outcome: outcome
        });

        emit DisputeWindowOpened(market, outcome, block.timestamp + disputeWindowDuration);
    }

    /**
     * @notice Submit aggregated dispute signals from off-chain votes
     * @param market Market address
     * @param agreeCount Number of agreement votes
     * @param disagreeCount Number of disagreement votes
     */
    function submitDisputeSignals(
        address market,
        uint256 agreeCount,
        uint256 disagreeCount
    ) external onlyBackend {
        DisputeWindow storage window = disputes[market];
        require(window.isActive, "No active dispute");

        window.agreeCount = agreeCount;
        window.disagreeCount = disagreeCount;

        uint256 total = agreeCount + disagreeCount;
        if (total == 0) return;

        uint256 agreementPercent = (agreeCount * 100) / total;
        uint256 disagreementPercent = (disagreeCount * 100) / total;

        // Auto-finalize if strong agreement (>75%)
        if (agreementPercent >= agreementThreshold) {
            IPredictionMarket(market).finalize(window.outcome);
            window.isActive = false;
            emit MarketAutoFinalized(market, window.outcome);
        }
        // Mark disputed if strong disagreement (>40%)
        else if (disagreementPercent >= disagreementThreshold) {
            IPredictionMarket(market).dispute("Community disagreement");
            window.isActive = false;
            emit MarketMarkedDisputed(market);
        }

        emit DisputeSignalsSubmitted(market, agreeCount, disagreeCount);
    }

    /**
     * @notice Admin override - resolve disputed market
     * @param market Market address
     * @param outcome Final outcome
     * @param reason Resolution reason
     */
    function adminResolveMarket(
        address market,
        bool outcome,
        string calldata reason
    ) external onlyAdmin {
        IPredictionMarket(market).finalize(outcome);

        if (disputes[market].isActive) {
            disputes[market].isActive = false;
        }

        emit AdminResolution(market, outcome, reason);
    }

    /**
     * @notice Update dispute window duration
     * @param newDuration New duration in seconds
     */
    function setDisputeWindowDuration(uint256 newDuration) external onlyAdmin {
        disputeWindowDuration = newDuration;
    }

    /**
     * @notice Update thresholds
     */
    function setThresholds(uint256 _agreementThreshold, uint256 _disagreementThreshold)
        external
        onlyAdmin
    {
        agreementThreshold = _agreementThreshold;
        disagreementThreshold = _disagreementThreshold;
    }

    modifier onlyBackend() {
        require(accessControl.hasRole(BACKEND_ROLE, msg.sender), "Not backend");
        _;
    }

    modifier onlyAdmin() {
        require(accessControl.hasRole(ADMIN_ROLE, msg.sender), "Not admin");
        _;
    }
}
```

---

## 🧪 TESTING

```javascript
describe("ResolutionManager - Disputes", function() {

    describe("Dispute Window", function() {
        it("should open dispute window when resolution proposed", async function() {
            await resolutionManager.proposeResolution(market.address, true);

            const window = await resolutionManager.disputes(market.address);
            expect(window.isActive).to.be.true;
            expect(window.outcome).to.be.true;
        });

        it("should set correct end time (48 hours default)", async function() {
            const tx = await resolutionManager.proposeResolution(market.address, true);
            const block = await ethers.provider.getBlock(tx.blockNumber);

            const window = await resolutionManager.disputes(market.address);
            expect(window.endTime).to.equal(block.timestamp + 48 * 3600);
        });
    });

    describe("Signal Aggregation", function() {
        beforeEach(async function() {
            await resolutionManager.proposeResolution(market.address, true);
        });

        it("should auto-finalize with >75% agreement", async function() {
            await resolutionManager.submitDisputeSignals(market.address, 80, 20);

            const state = await market.getCurrentState();
            expect(state).to.equal(5); // FINALIZED
        });

        it("should mark disputed with >40% disagreement", async function() {
            await resolutionManager.submitDisputeSignals(market.address, 40, 60);

            const state = await market.getCurrentState();
            expect(state).to.equal(4); // DISPUTED
        });

        it("should wait if signals are mixed", async function() {
            await resolutionManager.submitDisputeSignals(market.address, 60, 40);

            const window = await resolutionManager.disputes(market.address);
            expect(window.isActive).to.be.true; // Still active
        });
    });

    describe("Admin Override", function() {
        it("should allow admin to resolve disputed market", async function() {
            // Setup disputed market
            await setupDisputed();

            await resolutionManager.adminResolveMarket(market.address, false, "Admin decision");

            const state = await market.getCurrentState();
            expect(state).to.equal(5); // FINALIZED
        });

        it("should emit AdminResolution event", async function() {
            await setupDisputed();

            await expect(
                resolutionManager.adminResolveMarket(market.address, true, "Verified")
            ).to.emit(resolutionManager, "AdminResolution");
        });
    });
});
```

---

## ✅ VALIDATION CRITERIA

- ✅ Dispute windows functional
- ✅ Aggregation logic correct
- ✅ Auto-finalization working
- ✅ Admin overrides functional
- ✅ All tests passing
- ✅ Frontend integration ready

---

## 🔗 RELATED DOCUMENTS

- **Previous**: [PHASE_5_MARKET_LIFECYCLE.md](./PHASE_5_MARKET_LIFECYCLE.md)
- **Next**: [PHASE_7_FULL_INTEGRATION.md](./PHASE_7_FULL_INTEGRATION.md)
- **Frontend**: [FRONTEND_INTEGRATION_GUIDE.md](./FRONTEND_INTEGRATION_GUIDE.md)

---

**Status**: ✅ Ready to execute after Phase 5 complete
**Last Updated**: November 7, 2025
