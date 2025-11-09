# 🔄 PHASE 5: MARKET LIFECYCLE STATES

**Days**: 44-50
**Duration**: 5-7 days
**Risk Level**: 🟡 MEDIUM-HIGH
**Status**: Ready after Phase 4 Complete

---

## 🎯 PHASE OBJECTIVE

**Primary Goal**: Implement complete 6-state lifecycle in PredictionMarket contract with state transitions, events, and validation.

**Why This Matters**:
- Frontend needs clear market states for UI
- Prevents invalid state transitions
- Enables proper workflow (approval → activation → resolution)
- Critical for frontend integration

**What We're Implementing**:
1. 6-state enum (PROPOSED, APPROVED, ACTIVE, RESOLVING, DISPUTED, FINALIZED)
2. State transition functions
3. State-gated operations
4. Comprehensive events
5. State queries for frontend

**Success Criteria**:
- ✅ All 6 states implemented
- ✅ State transitions validated
- ✅ Events emit correctly
- ✅ Frontend can query current state
- ✅ Invalid transitions prevented
- ✅ All tests passing (40+ tests)

---

## 📋 TOPICS COVERED

- **P5-01**: Market lifecycle rationale
- **P5-02**: 6-state design (PROPOSED → FINALIZED)
- **P5-03**: State transition rules
- **P5-04**: PredictionMarket state implementation
- **P5-05**: State-gated function modifiers
- **P5-06**: PredictionMarket lifecycle updates
- **P5-07**: Event emission strategy
- **P5-08**: Frontend state query functions
- **P5-09**: Testing strategy for state machine
- **P5-10**: Edge case handling
- **P5-11**: Rollback procedures
- **P5-12**: Validation criteria

---

## 🔍 PREREQUISITES

**Must Be Complete**:
- ✅ Phase 4 complete (unified factory with approval system)
- ✅ PredictionMarket contract exists

**Required Knowledge**:
- State machine design
- Solidity enums
- Event-driven architecture
- Function modifiers

---

## 📐 STATE MACHINE DIAGRAM

```
┌──────────┐
│ PROPOSED │  ← Market created, awaiting approval
└────┬─────┘
     │ approve()
     ▼
┌──────────┐
│ APPROVED │  ← Approved, ready to activate
└────┬─────┘
     │ activate()
     ▼
┌──────────┐
│  ACTIVE  │  ← Trading active, users can bet
└────┬─────┘
     │ endTime reached
     ▼
┌───────────┐
│ RESOLVING │  ← Trading ended, awaiting outcome
└────┬──────┘
     │
     ├─→ proposeOutcome() → openDisputeWindow()
     │
     ├─→ Community agrees (>75%) → finalize()
     │                              │
     │                              ▼
     │                         ┌───────────┐
     │                         │ FINALIZED │  ← Outcome final
     │                         └───────────┘
     │
     └─→ Community disagrees (>40%) → markDisputed()
                                       │
                                       ▼
                                  ┌──────────┐
                                  │ DISPUTED │  ← Admin resolution needed
                                  └────┬─────┘
                                       │ adminResolve()
                                       ▼
                                  ┌───────────┐
                                  │ FINALIZED │
                                  └───────────┘
```

---

## 🛠️ IMPLEMENTATION GUIDE

### Step 1: Add State Enum to PredictionMarket (Day 44)

**File**: `contracts/core/PredictionMarket.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PredictionMarket {

    // ============ STATE ENUM ============

    enum MarketState {
        PROPOSED,      // 0 - Created, awaiting approval
        APPROVED,      // 1 - Approved by community/admin
        ACTIVE,        // 2 - Trading active
        RESOLVING,     // 3 - Trading ended, awaiting resolution
        DISPUTED,      // 4 - Outcome disputed
        FINALIZED      // 5 - Outcome final, payouts available
    }

    // ============ STATE VARIABLES ============

    MarketState public state;

    string public question;
    uint256 public endTime;
    bool public outcome;  // true = YES, false = NO
    bool public outcomeProposed;

    address public factory;
    address public creator;
    address public resolver;

    uint256 public createdAt;
    uint256 public activatedAt;
    uint256 public finalizedAt;

    // ============ EVENTS ============

    event MarketStateChanged(
        MarketState indexed newState,
        uint256 timestamp
    );
    event MarketProposed(
        address indexed creator,
        string question,
        uint256 endTime
    );
    event MarketApproved(uint256 timestamp);
    event MarketActivated(uint256 timestamp);
    event MarketRejected(string reason);
    event ResolutionProposed(bool outcome, address indexed proposer);
    event MarketDisputed(address indexed disputer, string reason);
    event MarketFinalized(bool outcome, uint256 timestamp);

    // ============ ERRORS ============

    error InvalidStateTransition(MarketState current, MarketState requested);
    error MarketNotActive();
    error MarketNotEnded();
    error MarketAlreadyResolved();
    error OnlyFactory();
    error OnlyResolver();

    // ============ CONSTRUCTOR/INITIALIZER ============

    /**
     * @notice Initialize market (called by factory)
     * @param _question Market question
     * @param _endTime Market end timestamp
     * @param _initialLiquidity Initial liquidity amount
     */
    function initialize(
        string memory _question,
        uint256 _endTime,
        uint256 _initialLiquidity
    ) external {
        require(factory == address(0), "Already initialized");

        factory = msg.sender;
        creator = tx.origin;  // Original caller (user)
        question = _question;
        endTime = _endTime;
        createdAt = block.timestamp;

        state = MarketState.PROPOSED;  // Start in PROPOSED state

        emit MarketProposed(creator, _question, _endTime);
        emit MarketStateChanged(MarketState.PROPOSED, block.timestamp);
    }

    // ============ STATE TRANSITIONS ============

    /**
     * @notice Approve market (factory only)
     * @dev Transitions PROPOSED → APPROVED
     */
    function approve() external onlyFactory {
        if (state != MarketState.PROPOSED) {
            revert InvalidStateTransition(state, MarketState.APPROVED);
        }

        state = MarketState.APPROVED;

        emit MarketApproved(block.timestamp);
        emit MarketStateChanged(MarketState.APPROVED, block.timestamp);
    }

    /**
     * @notice Activate market (factory only)
     * @dev Transitions APPROVED → ACTIVE
     */
    function activate() external onlyFactory {
        if (state != MarketState.APPROVED) {
            revert InvalidStateTransition(state, MarketState.ACTIVE);
        }

        state = MarketState.ACTIVE;
        activatedAt = block.timestamp;

        emit MarketActivated(block.timestamp);
        emit MarketStateChanged(MarketState.ACTIVE, block.timestamp);
    }

    /**
     * @notice Reject market (factory admin only)
     * @dev Can be called from PROPOSED or APPROVED state
     */
    function reject() external onlyFactory {
        require(
            state == MarketState.PROPOSED || state == MarketState.APPROVED,
            "Cannot reject from this state"
        );

        state = MarketState.FINALIZED;  // Mark as ended/rejected

        emit MarketRejected("Rejected by admin");
        emit MarketStateChanged(MarketState.FINALIZED, block.timestamp);
    }

    /**
     * @notice Propose market outcome
     * @param _outcome Proposed outcome (true = YES, false = NO)
     * @dev Transitions ACTIVE → RESOLVING
     */
    function proposeOutcome(bool _outcome) external {
        // Must be ACTIVE and past end time
        if (state != MarketState.ACTIVE) {
            revert MarketNotActive();
        }
        if (block.timestamp < endTime) {
            revert MarketNotEnded();
        }

        state = MarketState.RESOLVING;
        outcome = _outcome;
        outcomeProposed = true;
        resolver = msg.sender;

        emit ResolutionProposed(_outcome, msg.sender);
        emit MarketStateChanged(MarketState.RESOLVING, block.timestamp);
    }

    /**
     * @notice Mark market as disputed
     * @param reason Dispute reason
     * @dev Transitions RESOLVING → DISPUTED
     */
    function dispute(string calldata reason) external {
        if (state != MarketState.RESOLVING) {
            revert InvalidStateTransition(state, MarketState.DISPUTED);
        }

        state = MarketState.DISPUTED;

        emit MarketDisputed(msg.sender, reason);
        emit MarketStateChanged(MarketState.DISPUTED, block.timestamp);
    }

    /**
     * @notice Finalize market outcome
     * @param _outcome Final outcome
     * @dev Transitions RESOLVING or DISPUTED → FINALIZED
     */
    function finalize(bool _outcome) external {
        require(
            state == MarketState.RESOLVING || state == MarketState.DISPUTED,
            "Cannot finalize from this state"
        );

        state = MarketState.FINALIZED;
        outcome = _outcome;
        finalizedAt = block.timestamp;

        emit MarketFinalized(_outcome, block.timestamp);
        emit MarketStateChanged(MarketState.FINALIZED, block.timestamp);
    }

    // ============ STATE-GATED OPERATIONS ============

    /**
     * @notice Buy shares (only when ACTIVE)
     * @param outcomeToken Token to buy (0 = YES, 1 = NO)
     * @param amount Amount to invest
     */
    function buyShares(uint8 outcomeToken, uint256 amount)
        external
        payable
        onlyWhenActive
    {
        // Trading logic here
        // ...
    }

    /**
     * @notice Sell shares (only when ACTIVE)
     * @param outcomeToken Token to sell
     * @param shareAmount Amount of shares
     */
    function sellShares(uint8 outcomeToken, uint256 shareAmount)
        external
        onlyWhenActive
    {
        // Trading logic here
        // ...
    }

    /**
     * @notice Claim winnings (only when FINALIZED)
     */
    function claimWinnings() external onlyWhenFinalized {
        // Payout logic here
        // ...
    }

    // ============ VIEW FUNCTIONS ============

    /**
     * @notice Get current market state
     * @return Current state enum value
     */
    function getCurrentState() external view returns (MarketState) {
        return state;
    }

    /**
     * @notice Check if market is tradeable
     * @return Whether trading is active
     */
    function isTradeable() external view returns (bool) {
        return state == MarketState.ACTIVE && block.timestamp < endTime;
    }

    /**
     * @notice Check if market can be resolved
     * @return Whether resolution can start
     */
    function canBeResolved() external view returns (bool) {
        return state == MarketState.ACTIVE && block.timestamp >= endTime;
    }

    /**
     * @notice Get market lifecycle info
     * @return Current state, timestamps, outcome
     */
    function getLifecycleInfo() external view returns (
        MarketState currentState,
        uint256 created,
        uint256 activated,
        uint256 finalized,
        bool isOutcomeSet,
        bool finalOutcome
    ) {
        return (
            state,
            createdAt,
            activatedAt,
            finalizedAt,
            outcomeProposed,
            outcome
        );
    }

    // ============ MODIFIERS ============

    modifier onlyFactory() {
        if (msg.sender != factory) {
            revert OnlyFactory();
        }
        _;
    }

    modifier onlyWhenActive() {
        if (state != MarketState.ACTIVE) {
            revert MarketNotActive();
        }
        _;
    }

    modifier onlyWhenFinalized() {
        require(state == MarketState.FINALIZED, "Market not finalized");
        _;
    }
}
```

---

### Step 2: Update Factory to Use State Transitions (Day 45)

**Update FlexibleMarketFactory** to call state transition functions:

```solidity
// In FlexibleMarketFactory.sol

function approveMarket(address market) external onlyBackend {
    // ... existing validation ...

    // Call market's approve function
    IPredictionMarket(market).approve();

    metadata.isApproved = true;
    emit MarketApproved(market, msg.sender);
}

function activateMarket(address market) external {
    // ... existing validation ...

    // Call market's activate function
    IPredictionMarket(market).activate();

    metadata.isActive = true;
    emit MarketActivated(market, block.timestamp);
}
```

---

### Step 3: Testing State Machine (Days 46-48)

**File**: `test/core/PredictionMarket.lifecycle.test.js`

```javascript
describe("PredictionMarket - Lifecycle", function() {

    describe("State Transitions", function() {
        it("should start in PROPOSED state", async function() {
            const state = await market.getCurrentState();
            expect(state).to.equal(0); // PROPOSED
        });

        it("should transition PROPOSED → APPROVED", async function() {
            await market.approve();
            expect(await market.getCurrentState()).to.equal(1); // APPROVED
        });

        it("should transition APPROVED → ACTIVE", async function() {
            await market.approve();
            await market.activate();
            expect(await market.getCurrentState()).to.equal(2); // ACTIVE
        });

        it("should transition ACTIVE → RESOLVING after endTime", async function() {
            await market.approve();
            await market.activate();

            // Fast-forward past end time
            await ethers.provider.send("evm_setNextBlockTimestamp", [endTime + 1]);
            await ethers.provider.send("evm_mine");

            await market.proposeOutcome(true);
            expect(await market.getCurrentState()).to.equal(3); // RESOLVING
        });

        it("should transition RESOLVING → FINALIZED", async function() {
            // Setup: get to RESOLVING state
            await setupResolving();

            await market.finalize(true);
            expect(await market.getCurrentState()).to.equal(5); // FINALIZED
        });

        it("should transition RESOLVING → DISPUTED → FINALIZED", async function() {
            await setupResolving();

            // Dispute
            await market.dispute("Incorrect outcome");
            expect(await market.getCurrentState()).to.equal(4); // DISPUTED

            // Admin resolves
            await market.finalize(false);
            expect(await market.getCurrentState()).to.equal(5); // FINALIZED
        });
    });

    describe("Invalid State Transitions", function() {
        it("should prevent PROPOSED → ACTIVE (skip APPROVED)", async function() {
            await expect(
                market.activate()
            ).to.be.revertedWith("InvalidStateTransition");
        });

        it("should prevent ACTIVE → RESOLVING before endTime", async function() {
            await market.approve();
            await market.activate();

            await expect(
                market.proposeOutcome(true)
            ).to.be.revertedWith("MarketNotEnded");
        });

        it("should prevent FINALIZED → any other state", async function() {
            await setupFinalized();

            await expect(market.approve()).to.be.reverted;
            await expect(market.activate()).to.be.reverted;
        });
    });

    describe("State-Gated Operations", function() {
        it("should allow trading only in ACTIVE state", async function() {
            // PROPOSED - should fail
            await expect(
                market.buyShares(0, ethers.utils.parseEther("1"))
            ).to.be.revertedWith("MarketNotActive");

            // APPROVED - should fail
            await market.approve();
            await expect(
                market.buyShares(0, ethers.utils.parseEther("1"))
            ).to.be.revertedWith("MarketNotActive");

            // ACTIVE - should work
            await market.activate();
            await market.buyShares(0, ethers.utils.parseEther("1"));
            // Success!

            // After endTime - should fail
            await ethers.provider.send("evm_setNextBlockTimestamp", [endTime + 1]);
            await expect(
                market.buyShares(0, ethers.utils.parseEther("1"))
            ).to.be.reverted;
        });

        it("should allow claiming only in FINALIZED state", async function() {
            await expect(
                market.claimWinnings()
            ).to.be.revertedWith("Market not finalized");

            // Setup finalized state
            await setupFinalized();

            // Now should work
            await market.claimWinnings();
        });
    });

    describe("Event Emissions", function() {
        it("should emit MarketStateChanged on each transition", async function() {
            await expect(market.approve())
                .to.emit(market, "MarketStateChanged")
                .withArgs(1, anyValue); // APPROVED

            await expect(market.activate())
                .to.emit(market, "MarketStateChanged")
                .withArgs(2, anyValue); // ACTIVE
        });

        it("should emit lifecycle-specific events", async function() {
            await expect(market.approve())
                .to.emit(market, "MarketApproved");

            await expect(market.activate())
                .to.emit(market, "MarketActivated");

            await setupActive();
            await ethers.provider.send("evm_setNextBlockTimestamp", [endTime + 1]);

            await expect(market.proposeOutcome(true))
                .to.emit(market, "ResolutionProposed")
                .withArgs(true, anyValue);

            await expect(market.finalize(true))
                .to.emit(market, "MarketFinalized")
                .withArgs(true, anyValue);
        });
    });

    describe("View Functions", function() {
        it("should return correct lifecycle info", async function() {
            const info = await market.getLifecycleInfo();
            expect(info.currentState).to.equal(0); // PROPOSED
            expect(info.isOutcomeSet).to.be.false;
        });

        it("should correctly report tradeability", async function() {
            expect(await market.isTradeable()).to.be.false; // PROPOSED

            await market.approve();
            expect(await market.isTradeable()).to.be.false; // APPROVED

            await market.activate();
            expect(await market.isTradeable()).to.be.true; // ACTIVE

            await ethers.provider.send("evm_setNextBlockTimestamp", [endTime + 1]);
            expect(await market.isTradeable()).to.be.false; // Past endTime
        });

        it("should correctly report resolution eligibility", async function() {
            expect(await market.canBeResolved()).to.be.false; // PROPOSED

            await setupActive();
            expect(await market.canBeResolved()).to.be.false; // Before endTime

            await ethers.provider.send("evm_setNextBlockTimestamp", [endTime + 1]);
            expect(await market.canBeResolved()).to.be.true; // After endTime
        });
    });
});
```

---

### Step 4: Frontend Integration Update (Day 49)

**TypeScript State Enum**:

```typescript
// types/market.ts
export enum MarketState {
    PROPOSED = 0,
    APPROVED = 1,
    ACTIVE = 2,
    RESOLVING = 3,
    DISPUTED = 4,
    FINALIZED = 5
}

export interface MarketLifecycle {
    currentState: MarketState;
    createdAt: number;
    activatedAt: number;
    finalizedAt: number;
    isOutcomeSet: boolean;
    finalOutcome: boolean;
}
```

**React Hook**:

```typescript
// hooks/useMarketLifecycle.ts
export function useMarketLifecycle(marketAddress: string) {
    const { data: lifecycleInfo } = useContractRead({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'getLifecycleInfo',
        watch: true
    });

    if (!lifecycleInfo) return null;

    const [currentState, created, activated, finalized, isOutcomeSet, finalOutcome] = lifecycleInfo;

    return {
        state: currentState as MarketState,
        createdAt: Number(created),
        activatedAt: Number(activated),
        finalizedAt: Number(finalized),
        isOutcomeSet,
        finalOutcome,

        // Helper flags
        isProposed: currentState === MarketState.PROPOSED,
        isApproved: currentState === MarketState.APPROVED,
        isActive: currentState === MarketState.ACTIVE,
        isResolving: currentState === MarketState.RESOLVING,
        isDisputed: currentState === MarketState.DISPUTED,
        isFinalized: currentState === MarketState.FINALIZED
    };
}
```

**UI Component**:

```tsx
// components/MarketStatusBadge.tsx
export function MarketStatusBadge({ state }: { state: MarketState }) {
    const config = {
        [MarketState.PROPOSED]: { label: "Proposed", color: "yellow", icon: "📝" },
        [MarketState.APPROVED]: { label: "Approved", color: "blue", icon: "✅" },
        [MarketState.ACTIVE]: { label: "Active", color: "green", icon: "🟢" },
        [MarketState.RESOLVING]: { label: "Resolving", color: "orange", icon: "⏳" },
        [MarketState.DISPUTED]: { label: "Disputed", color: "red", icon: "⚠️" },
        [MarketState.FINALIZED]: { label: "Finalized", color: "gray", icon: "🏁" }
    }[state];

    return (
        <div className={`badge badge-${config.color}`}>
            <span>{config.icon}</span>
            <span>{config.label}</span>
        </div>
    );
}
```

---

### Step 5: Documentation Updates (Day 50)

**Update**:
1. Architecture diagram with state machine
2. Event reference with all lifecycle events
3. Frontend integration examples
4. State transition table

---

## ✅ VALIDATION CRITERIA

**Code Quality**:
- ✅ All 6 states implemented
- ✅ State transitions validated
- ✅ Events properly documented
- ✅ No security warnings

**Testing**:
- ✅ All state transitions tested
- ✅ Invalid transitions prevented
- ✅ State-gated operations work
- ✅ Event emissions verified
- ✅ 40+ lifecycle tests passing

**Integration**:
- ✅ Factory calls state functions
- ✅ Frontend can query states
- ✅ Events propagate correctly
- ✅ View functions accurate

---

## 🚨 ROLLBACK PROCEDURE

If lifecycle implementation fails:

1. Keep simple boolean flags (isApproved, isActive, isFinalized)
2. Remove state enum
3. Use individual functions instead of state machine
4. Document why state machine failed

---

## 📊 SUCCESS METRICS

**Definition of Done**:
- 6-state lifecycle implemented ✅
- All transitions validated ✅
- Tests passing ✅
- Frontend integration working ✅
- Documentation updated ✅

**Next Phase**: Phase 6 - Resolution & Disputes (Days 51-56)

---

## 🔗 RELATED DOCUMENTS

- **Previous**: [PHASE_4_FACTORY_UNIFICATION.md](./PHASE_4_FACTORY_UNIFICATION.md)
- **Next**: [PHASE_6_RESOLUTION_DISPUTES.md](./PHASE_6_RESOLUTION_DISPUTES.md)
- **Frontend**: [FRONTEND_INTEGRATION_GUIDE.md](./FRONTEND_INTEGRATION_GUIDE.md)
- **Master Plan**: [MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md](./MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md)

---

**Status**: ✅ Ready to execute after Phase 4 complete
**Last Updated**: November 7, 2025
