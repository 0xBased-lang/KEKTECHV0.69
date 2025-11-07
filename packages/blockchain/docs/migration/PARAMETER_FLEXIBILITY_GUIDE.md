# ⚙️ PARAMETER FLEXIBILITY GUIDE

**Purpose**: Complete reference for all adjustable system parameters
**Audience**: Admins, governance members, developers
**Status**: Reference guide for all phases

---

## 🎯 OVERVIEW

The "Minimal Modular" architecture provides complete flexibility through ParameterStorage contract. All economic, governance, and operational parameters can be adjusted post-deployment without contract upgrades.

**Key Benefits**:
- No contract upgrades needed for parameter changes
- Governance can adapt to market conditions
- A/B testing possible
- Emergency adjustments available

---

## 📋 PARAMETER CATEGORIES

### 1. Economic Parameters

**Platform Fees**:
```solidity
// ParameterStorage.sol
uint256 public platformFeePercentage = 2; // 2% (basis points: 200)
uint256 public liquidityProviderFeePercentage = 1; // 1%
uint256 public creatorFeePercentage = 1; // 1%
```

**Update**:
```javascript
await paramStorage.setPlatformFeePercentage(250); // 2.5%
```

**Constraints**: 0-10% (0-1000 basis points)

---

**Bond Requirements**:
```solidity
uint256 public minBondAmount = 0.1 ether;
uint256 public maxBondAmount = 100 ether;
uint256 public creatorBondPercentage = 10; // 10% of liquidity
```

**Update**:
```javascript
await paramStorage.setMinBondAmount(ethers.utils.parseEther("0.5"));
```

---

### 2. Market Creation Parameters

**Liquidity**:
```solidity
uint256 public minInitialLiquidity = 1 ether;
uint256 public maxInitialLiquidity = 1000 ether;
```

**Time Constraints**:
```solidity
uint256 public minResolutionTime = 1 hours;
uint256 public maxResolutionTime = 365 days;
```

---

### 3. Approval System Parameters (NEW)

```solidity
// Threshold for automatic approval
uint256 public approvalLikeThreshold = 70; // 70% likes

// Time window for gathering likes
uint256 public approvalTimeWindow = 7 days;

// Minimum votes required
uint256 public minApprovalsRequired = 10;
```

**Update**:
```javascript
await paramStorage.setApprovalLikeThreshold(75); // Raise to 75%
await paramStorage.setApprovalTimeWindow(5 days); // Shorten to 5 days
```

**Use Case**: Adjust based on spam levels

---

### 4. Dispute System Parameters (NEW)

```solidity
// Agreement threshold for auto-finalization
uint256 public disputeAgreementThreshold = 75; // 75%

// Disagreement threshold to mark disputed
uint256 public disputeDisagreementThreshold = 40; // 40%

// Dispute window duration
uint256 public disputeWindowDuration = 48 hours;

// Minimum votes for dispute resolution
uint256 public minDisputeVotes = 20;
```

**Update**:
```javascript
await paramStorage.setDisputeAgreementThreshold(80); // Require 80% agreement
await paramStorage.setDisputeWindowDuration(72 hours); // Extend to 72 hours
```

**Use Case**: Adjust based on community engagement

---

### 5. Governance Parameters (V2+)

```solidity
uint256 public proposalThreshold = 100000 ether; // Tokens needed to propose
uint256 public votingDelay = 1 days;
uint256 public votingPeriod = 7 days;
uint256 public quorumPercentage = 10; // 10% of supply
```

---

## 🛠️ PARAMETER UPDATE PROCEDURES

### Admin Update (Phase 1-6)

**Process**:
1. Admin proposes parameter change
2. Team reviews impact
3. Admin executes change via multisig
4. Change takes effect immediately
5. Event emitted for tracking

**Example**:
```javascript
// scripts/update-parameters.js
async function updateFees() {
    const paramStorage = await ethers.getContractAt("ParameterStorage", PARAM_ADDRESS);

    // Update platform fee
    const tx = await paramStorage.setPlatformFeePercentage(300); // 3%
    await tx.wait();

    console.log("✅ Platform fee updated to 3%");
}
```

---

### Governance Update (V2+)

**Process**:
1. Community member creates proposal
2. Voting period (7 days)
3. If passed, change queued
4. Timelock delay (2 days)
5. Change executed
6. Takes effect

---

## 📊 PARAMETER IMPACT ANALYSIS

### Fee Changes

**Increase Platform Fee 2% → 3%**:
- Impact: Higher revenue, may reduce trading volume
- Monitor: Trading volume for 2 weeks
- Rollback if: Volume drops >20%

**Decrease Creator Fee 1% → 0.5%**:
- Impact: More market creation
- Monitor: Market creation rate
- Success if: +30% markets created

---

### Approval Threshold Changes

**Increase Like Threshold 70% → 80%**:
- Impact: Fewer markets approved
- Monitor: Approval rate, spam reduction
- Success if: Spam down, quality up

**Decrease Min Approvals 10 → 5**:
- Impact: Faster approvals
- Monitor: Spam increase
- Rollback if: Spam increases significantly

---

### Dispute Parameter Changes

**Extend Dispute Window 48h → 72h**:
- Impact: More time for community input
- Monitor: Participation rates
- Success if: More votes per dispute

**Increase Agreement Threshold 75% → 85%**:
- Impact: Fewer auto-finalizations
- Monitor: Admin intervention rate
- Success if: Better resolution quality

---

## 🔧 SETTER FUNCTIONS REFERENCE

```solidity
// contracts/core/ParameterStorage.sol

contract ParameterStorage {

    // ============ ECONOMIC ============

    function setPlatformFeePercentage(uint256 _fee) external onlyAdmin {
        require(_fee <= 1000, "Max 10%"); // 1000 basis points
        platformFeePercentage = _fee;
        emit PlatformFeeUpdated(_fee);
    }

    function setLiquidityProviderFeePercentage(uint256 _fee) external onlyAdmin {
        require(_fee <= 500, "Max 5%");
        liquidityProviderFeePercentage = _fee;
        emit LPFeeUpdated(_fee);
    }

    function setCreatorFeePercentage(uint256 _fee) external onlyAdmin {
        require(_fee <= 500, "Max 5%");
        creatorFeePercentage = _fee;
        emit CreatorFeeUpdated(_fee);
    }

    // ============ MARKET CREATION ============

    function setMinInitialLiquidity(uint256 _amount) external onlyAdmin {
        minInitialLiquidity = _amount;
        emit MinLiquidityUpdated(_amount);
    }

    function setMaxInitialLiquidity(uint256 _amount) external onlyAdmin {
        maxInitialLiquidity = _amount;
        emit MaxLiquidityUpdated(_amount);
    }

    function setMinResolutionTime(uint256 _time) external onlyAdmin {
        minResolutionTime = _time;
        emit MinResolutionTimeUpdated(_time);
    }

    // ============ APPROVAL SYSTEM ============

    function setApprovalLikeThreshold(uint256 _threshold) external onlyAdmin {
        require(_threshold >= 50 && _threshold <= 95, "Must be 50-95%");
        approvalLikeThreshold = _threshold;
        emit ApprovalThresholdUpdated(_threshold);
    }

    function setApprovalTimeWindow(uint256 _duration) external onlyAdmin {
        require(_duration >= 1 days && _duration <= 30 days);
        approvalTimeWindow = _duration;
        emit ApprovalWindowUpdated(_duration);
    }

    function setMinApprovalsRequired(uint256 _min) external onlyAdmin {
        require(_min >= 1 && _min <= 100);
        minApprovalsRequired = _min;
        emit MinApprovalsUpdated(_min);
    }

    // ============ DISPUTE SYSTEM ============

    function setDisputeAgreementThreshold(uint256 _threshold) external onlyAdmin {
        require(_threshold >= 50 && _threshold <= 95, "Must be 50-95%");
        disputeAgreementThreshold = _threshold;
        emit DisputeAgreementThresholdUpdated(_threshold);
    }

    function setDisputeDisagreementThreshold(uint256 _threshold) external onlyAdmin {
        require(_threshold >= 20 && _threshold <= 50, "Must be 20-50%");
        disputeDisagreementThreshold = _threshold;
        emit DisputeDisagreementThresholdUpdated(_threshold);
    }

    function setDisputeWindowDuration(uint256 _duration) external onlyAdmin {
        require(_duration >= 12 hours && _duration <= 7 days);
        disputeWindowDuration = _duration;
        emit DisputeWindowUpdated(_duration);
    }

    function setMinDisputeVotes(uint256 _min) external onlyAdmin {
        require(_min >= 5 && _min <= 100);
        minDisputeVotes = _min;
        emit MinDisputeVotesUpdated(_min);
    }

    // ============ BATCH UPDATES ============

    function batchUpdateParameters(
        uint256[] calldata values,
        uint256[] calldata categories
    ) external onlyAdmin {
        // Update multiple parameters in one transaction
    }
}
```

---

## 📋 INITIAL PARAMETER VALUES

### At Deployment (Day 65)

```javascript
// scripts/initialize-parameters.js

const INITIAL_PARAMS = {
    // Economic
    platformFee: 200,              // 2%
    lpFee: 100,                    // 1%
    creatorFee: 100,               // 1%

    // Market Creation
    minLiquidity: parseEther("1"),     // 1 $BASED
    maxLiquidity: parseEther("1000"),  // 1000 $BASED
    minResolutionTime: 3600,           // 1 hour
    maxResolutionTime: 31536000,       // 365 days

    // Approval
    approvalLikeThreshold: 70,         // 70%
    approvalTimeWindow: 604800,        // 7 days
    minApprovalsRequired: 10,          // 10 votes

    // Dispute
    disputeAgreementThreshold: 75,     // 75%
    disputeDisagreementThreshold: 40,  // 40%
    disputeWindowDuration: 172800,     // 48 hours
    minDisputeVotes: 20                // 20 votes
};
```

---

## 🔗 RELATED DOCUMENTS

- **Master Plan**: [MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md](./MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md)
- **Deployment**: [DEPLOYMENT_PROCEDURES_GUIDE.md](./DEPLOYMENT_PROCEDURES_GUIDE.md)
- **Governance**: [SECURITY_GOVERNANCE_GUIDE.md](./SECURITY_GOVERNANCE_GUIDE.md)

---

**Last Updated**: November 7, 2025
