# 🎨 FRONTEND INTEGRATION GUIDE

**Purpose**: Complete guide for integrating smart contracts with Next.js frontend
**Audience**: Frontend developers implementing the KEKTECH dApp
**Status**: Reference guide for all phases

---

## 🎯 OVERVIEW

This guide covers how the "Minimal Modular" smart contract architecture integrates with your Next.js frontend application.

**Key Integration Points**:
1. Event listening (market lifecycle, approvals, disputes)
2. State queries (market status, user balances, dispute windows)
3. Transaction submissions (create, approve, trade, dispute)
4. Off-chain aggregation (likes, dislikes, comments → on-chain triggers)
5. Admin dashboard (override functions)

---

## 📋 TOPICS COVERED

- **FRONT-01**: Event listening architecture
- **FRONT-02**: State query patterns
- **FRONT-03**: Transaction submission flows
- **FRONT-04**: Off-chain aggregation system
- **FRONT-05**: Market lifecycle UI states
- **FRONT-06**: Approval system integration
- **FRONT-07**: Dispute system integration
- **FRONT-08**: Admin dashboard
- **FRONT-09**: Error handling
- **FRONT-10**: Gas estimation
- **FRONT-11**: User feedback (loading states, confirmations)
- **FRONT-12**: Backend relayer coordination

---

## 🏗️ ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────────┐
│ NEXT.JS FRONTEND                                │
│                                                 │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ Market Feed  │  │ Market Detail│            │
│  │ Component    │  │ Component    │            │
│  └──────┬───────┘  └──────┬───────┘            │
│         │                  │                    │
│  ┌──────▼──────────────────▼────────┐           │
│  │ Contract Hooks (wagmi)            │           │
│  │ - useMarketState()                │           │
│  │ - useContractEvent()              │           │
│  │ - useContractWrite()              │           │
│  └──────────────┬────────────────────┘           │
└─────────────────┼────────────────────────────────┘
                  │
        ┌─────────▼─────────┐
        │ Smart Contracts   │
        │ - Events          │
        │ - State Queries   │
        │ - Transactions    │
        └───────────────────┘

┌─────────────────────────────────────────────────┐
│ BACKEND / SUPABASE                              │
│                                                 │
│  ┌─────────────────┐  ┌────────────────┐       │
│  │ Comment System  │  │ Like/Dislike   │       │
│  │ (Off-chain)     │  │ Aggregation    │       │
│  └────────┬────────┘  └────────┬───────┘       │
│           │                     │               │
│  ┌────────▼─────────────────────▼──────┐        │
│  │ Backend Relayer                     │        │
│  │ - Monitors aggregated signals       │        │
│  │ - Triggers on-chain approvals       │        │
│  │ - Submits dispute aggregations      │        │
│  └─────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘
```

---

## 📡 EVENT LISTENING

### Core Principle

**Event-Driven UI**: Frontend reactively updates based on contract events, not polling.

### Event Categories

**Market Lifecycle Events**:
```solidity
event MarketProposed(address indexed market, address indexed creator, string question);
event MarketApproved(address indexed market, address approver);
event MarketActivated(address indexed market, uint256 timestamp);
event MarketStateChanged(address indexed market, MarketState newState);
event MarketFinalized(address indexed market, bool outcome);
```

**Approval Events**:
```solidity
event MarketApprovalRequested(address indexed market, uint256 timestamp);
event MarketAutoApproved(address indexed market, uint256 likeCount, uint256 threshold);
event MarketManuallyApproved(address indexed market, address admin);
event MarketRejected(address indexed market, string reason);
```

**Dispute Events**:
```solidity
event ResolutionProposed(address indexed market, bool outcome, address resolver);
event DisputeWindowOpened(address indexed market, uint256 endTime);
event MarketDisputed(address indexed market, address disputer, string reason);
event DisputeSignalsSubmitted(address indexed market, uint256 agree, uint256 disagree);
event MarketAutoFinalized(address indexed market, bool outcome);
```

### Implementation (wagmi + viem)

```typescript
// hooks/useMarketEvents.ts
import { useContractEvent } from 'wagmi';
import { parseAbiItem } from 'viem';
import { PREDICTION_MARKET_ABI } from '@/lib/abis';

export function useMarketLifecycleEvents(marketAddress: string) {
    // Listen to state changes
    useContractEvent({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        eventName: 'MarketStateChanged',
        listener: (logs) => {
            const event = logs[0];
            const newState = event.args.newState;
            const timestamp = event.args.timestamp;

            // Update local state
            updateMarketState(marketAddress, newState);

            // Show notification
            toast.success(`Market ${getStateLabel(newState)}`);
        }
    });

    // Listen to approvals
    useContractEvent({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        eventName: 'MarketApproved',
        listener: (logs) => {
            // Refetch market data
            queryClient.invalidateQueries(['market', marketAddress]);
        }
    });

    // Listen to finalization
    useContractEvent({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        eventName: 'MarketFinalized',
        listener: (logs) => {
            const outcome = logs[0].args.outcome;
            // Show final outcome
            showOutcomeNotification(outcome);
        }
    });
}

// Helper
function getStateLabel(state: number): string {
    const labels = ["Proposed", "Approved", "Active", "Resolving", "Disputed", "Finalized"];
    return labels[state] || "Unknown";
}
```

### Event Indexing (for historical data)

```typescript
// lib/indexer.ts
import { createPublicClient } from 'viem';
import { basedai } from '@/lib/chains';

export async function getMarketHistory(marketAddress: string) {
    const client = createPublicClient({
        chain: basedai,
        transport: http()
    });

    // Get all state change events
    const stateChanges = await client.getLogs({
        address: marketAddress,
        event: parseAbiItem('event MarketStateChanged(MarketState indexed newState, uint256 timestamp)'),
        fromBlock: 0n,
        toBlock: 'latest'
    });

    return stateChanges.map(log => ({
        state: log.args.newState,
        timestamp: log.args.timestamp,
        blockNumber: log.blockNumber
    }));
}
```

---

## 🔍 STATE QUERIES

### Query Patterns

**Direct Contract Calls** (for current state):
```typescript
// hooks/useMarketState.ts
import { useContractRead } from 'wagmi';

export function useMarketState(marketAddress: string) {
    const { data: state } = useContractRead({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'state',
        watch: true  // Re-fetch on new blocks
    });

    const { data: question } = useContractRead({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'question'
    });

    const { data: endTime } = useContractRead({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'endTime'
    });

    return {
        state: state as MarketState,
        question: question as string,
        endTime: endTime as bigint,
        isActive: state === 2,  // MarketState.ACTIVE
        isResolving: state === 3,  // MarketState.RESOLVING
        isFinalized: state === 5   // MarketState.FINALIZED
    };
}
```

**Dispute Window Query**:
```typescript
// hooks/useDisputeWindow.ts
export function useDisputeWindow(marketAddress: string) {
    const { data: disputeData } = useContractRead({
        address: RESOLUTION_MANAGER_ADDRESS,
        abi: RESOLUTION_MANAGER_ABI,
        functionName: 'disputes',
        args: [marketAddress]
    });

    if (!disputeData) return null;

    const [startTime, endTime, agreeCount, disagreeCount, isActive] = disputeData;

    return {
        startTime: Number(startTime),
        endTime: Number(endTime),
        agreeCount: Number(agreeCount),
        disagreeCount: Number(disagreeCount),
        isActive,
        timeRemaining: Math.max(0, Number(endTime) - Date.now() / 1000),
        agreementPercent: agreeCount + disagreeCount > 0
            ? (agreeCount / (agreeCount + disagreeCount)) * 100
            : 0
    };
}
```

**User Balance Query**:
```typescript
// hooks/useUserPosition.ts
export function useUserPosition(marketAddress: string, userAddress: string) {
    const { data: yesShares } = useContractRead({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'balanceOf',
        args: [userAddress, 0n]  // 0 = YES token
    });

    const { data: noShares } = useContractRead({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'balanceOf',
        args: [userAddress, 1n]  // 1 = NO token
    });

    return {
        yesShares: yesShares || 0n,
        noShares: noShares || 0n,
        hasPosition: (yesShares || 0n) > 0n || (noShares || 0n) > 0n
    };
}
```

---

## 📝 TRANSACTION SUBMISSION

### Create Market (Proposal)

```typescript
// components/CreateMarketForm.tsx
import { useContractWrite, usePrepareContractWrite } from 'wagmi';

export function CreateMarketForm() {
    const [question, setQuestion] = useState("");
    const [endDate, setEndDate] = useState<Date>();

    // Prepare transaction
    const { config } = usePrepareContractWrite({
        address: FACTORY_ADDRESS,
        abi: FACTORY_ABI,
        functionName: 'createMarketBasic',
        args: [
            question,
            Math.floor((endDate?.getTime() || 0) / 1000),
            ethers.utils.parseEther("0.1")  // Initial liquidity
        ],
        enabled: Boolean(question && endDate)
    });

    // Execute transaction
    const { write, isLoading, isSuccess } = useContractWrite(config);

    return (
        <form onSubmit={(e) => { e.preventDefault(); write?.(); }}>
            <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Market question..."
            />
            <DatePicker selected={endDate} onChange={setEndDate} />
            <button disabled={!write || isLoading}>
                {isLoading ? "Creating..." : "Create Market"}
            </button>
        </form>
    );
}
```

### Place Bet

```typescript
// components/TradingPanel.tsx
export function TradingPanel({ marketAddress }: Props) {
    const [amount, setAmount] = useState("");
    const [outcome, setOutcome] = useState<0 | 1>(0);  // 0=YES, 1=NO

    const { config } = usePrepareContractWrite({
        address: marketAddress,
        abi: PREDICTION_MARKET_ABI,
        functionName: 'buyShares',
        args: [outcome, ethers.utils.parseEther(amount || "0")],
        enabled: Boolean(amount)
    });

    const { write, isLoading } = useContractWrite(config);

    return (
        <div className="trading-panel">
            <div className="outcome-selector">
                <button onClick={() => setOutcome(0)}>YES</button>
                <button onClick={() => setOutcome(1)}>NO</button>
            </div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount in $BASED"
            />
            <button onClick={() => write?.()} disabled={!write || isLoading}>
                {isLoading ? "Buying..." : `Buy ${outcome === 0 ? "YES" : "NO"}`}
            </button>
        </div>
    );
}
```

---

## 🔄 OFF-CHAIN AGGREGATION → ON-CHAIN TRIGGERS

### Approval Flow

**Frontend Component** (Like/Dislike):
```typescript
// components/MarketProposal.tsx
export function MarketProposal({ marketAddress }: Props) {
    const { user } = useAuth();
    const { data: likes } = useQuery(['likes', marketAddress], () =>
        supabase.from('market_likes').select('*').eq('market', marketAddress)
    );

    async function handleLike() {
        // Store like off-chain
        await supabase.from('market_likes').insert({
            market: marketAddress,
            user: user.address,
            vote: 'like',
            timestamp: new Date()
        });

        // Trigger recount (backend will check threshold)
        await fetch('/api/check-approval-threshold', {
            method: 'POST',
            body: JSON.stringify({ marketAddress })
        });
    }

    const likeCount = likes?.filter(l => l.vote === 'like').length || 0;
    const dislikeCount = likes?.filter(l => l.vote === 'dislike').length || 0;
    const approvalPercent = (likeCount / (likeCount + dislikeCount)) * 100;

    return (
        <div className="proposal">
            <h3>{marketData.question}</h3>
            <div className="approval-meter">
                <div className="bar" style={{ width: `${approvalPercent}%` }}></div>
                <span>{approvalPercent.toFixed(0)}% approval</span>
            </div>
            <div className="voting">
                <button onClick={handleLike}>👍 {likeCount}</button>
                <button onClick={handleDislike}>👎 {dislikeCount}</button>
            </div>
        </div>
    );
}
```

**Backend Relayer** (Threshold Check):
```typescript
// pages/api/check-approval-threshold.ts
export default async function handler(req, res) {
    const { marketAddress } = req.body;

    // Get aggregated votes
    const { data: votes } = await supabase
        .from('market_likes')
        .select('*')
        .eq('market', marketAddress);

    const likes = votes.filter(v => v.vote === 'like').length;
    const dislikes = votes.filter(v => v.vote === 'dislike').length;
    const total = likes + dislikes;

    // Check threshold (e.g., 70% likes, minimum 10 votes)
    const approvalPercent = (likes / total) * 100;

    if (total >= 10 && approvalPercent >= 70) {
        // Trigger on-chain approval
        const wallet = new ethers.Wallet(process.env.RELAYER_PRIVATE_KEY, provider);
        const factory = new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, wallet);

        const tx = await factory.approveMarket(marketAddress);
        await tx.wait();

        res.json({ approved: true, txHash: tx.hash });
    } else {
        res.json({ approved: false, approvalPercent, total });
    }
}
```

### Dispute Flow (Similar Pattern)

**Frontend** (Agree/Disagree):
```typescript
export function DisputePanel({ marketAddress }: Props) {
    async function handleAgree() {
        await supabase.from('dispute_votes').insert({
            market: marketAddress,
            user: user.address,
            vote: 'agree'
        });

        await fetch('/api/submit-dispute-signals', {
            method: 'POST',
            body: JSON.stringify({ marketAddress })
        });
    }

    return (
        <div className="dispute-panel">
            <h4>Do you agree with the proposed outcome?</h4>
            <button onClick={handleAgree}>✅ Agree</button>
            <button onClick={handleDisagree}>❌ Disagree</button>
        </div>
    );
}
```

**Backend** (Submit Aggregated Signals):
```typescript
// pages/api/submit-dispute-signals.ts
export default async function handler(req, res) {
    const { marketAddress } = req.body;

    // Get votes
    const { data: votes } = await supabase
        .from('dispute_votes')
        .select('*')
        .eq('market', marketAddress);

    const agreeCount = votes.filter(v => v.vote === 'agree').length;
    const disagreeCount = votes.filter(v => v.vote === 'disagree').length;

    // Submit to contract
    const wallet = new ethers.Wallet(process.env.RELAYER_PRIVATE_KEY, provider);
    const resolutionManager = new ethers.Contract(RESOLUTION_MANAGER_ADDRESS, ABI, wallet);

    const tx = await resolutionManager.submitDisputeSignals(
        marketAddress,
        agreeCount,
        disagreeCount
    );

    await tx.wait();

    res.json({ success: true, agreeCount, disagreeCount, txHash: tx.hash });
}
```

---

## 👑 ADMIN DASHBOARD

**Admin Override Functions**:

```typescript
// components/AdminPanel.tsx (only visible to admin)
export function AdminPanel({ marketAddress }: Props) {
    const { address } = useAccount();
    const { data: isAdmin } = useContractRead({
        address: ACCESS_CONTROL_ADDRESS,
        abi: ACCESS_CONTROL_ABI,
        functionName: 'hasRole',
        args: [ADMIN_ROLE, address]
    });

    const { write: approveMarket } = useContractWrite({
        address: FACTORY_ADDRESS,
        abi: FACTORY_ABI,
        functionName: 'adminApproveMarket',
        args: [marketAddress]
    });

    const { write: rejectMarket } = useContractWrite({
        address: FACTORY_ADDRESS,
        abi: FACTORY_ABI,
        functionName: 'adminRejectMarket',
        args: [marketAddress]
    });

    const { write: resolveDispute } = useContractWrite({
        address: RESOLUTION_MANAGER_ADDRESS,
        abi: RESOLUTION_MANAGER_ABI,
        functionName: 'adminResolveMarket',
        args: [marketAddress, true, "Admin resolution"]
    });

    if (!isAdmin) return null;

    return (
        <div className="admin-panel">
            <h3>🛡️ Admin Controls</h3>
            <button onClick={() => approveMarket()}>
                ✅ Force Approve
            </button>
            <button onClick={() => rejectMarket()}>
                ❌ Reject Market
            </button>
            <button onClick={() => resolveDispute()}>
                ⚖️ Resolve Dispute
            </button>
        </div>
    );
}
```

---

## 🎯 MARKET LIFECYCLE UI

**State Machine Visualization**:

```typescript
// components/MarketStatus.tsx
export function MarketStatus({ state }: { state: MarketState }) {
    const stateConfig = {
        0: { label: "Proposed", color: "yellow", icon: "📝" },
        1: { label: "Approved", color: "blue", icon: "✅" },
        2: { label: "Active", color: "green", icon: "🟢" },
        3: { label: "Resolving", color: "orange", icon: "⏳" },
        4: { label: "Disputed", color: "red", icon: "⚠️" },
        5: { label: "Finalized", color: "gray", icon: "🏁" }
    };

    const config = stateConfig[state];

    return (
        <div className={`status status-${config.color}`}>
            <span className="icon">{config.icon}</span>
            <span className="label">{config.label}</span>
        </div>
    );
}
```

---

## ⚠️ ERROR HANDLING

```typescript
// hooks/useTransaction.ts
export function useTransaction() {
    const { writeAsync } = useContractWrite(config);

    async function executeTransaction() {
        try {
            const tx = await writeAsync();
            toast.loading("Transaction submitted...", { id: tx.hash });

            const receipt = await tx.wait();

            if (receipt.status === 1) {
                toast.success("Transaction confirmed!", { id: tx.hash });
            } else {
                toast.error("Transaction failed", { id: tx.hash });
            }

            return receipt;

        } catch (error: any) {
            // User rejected
            if (error.code === 4001) {
                toast.error("Transaction rejected by user");
            }
            // Insufficient funds
            else if (error.code === -32000) {
                toast.error("Insufficient funds");
            }
            // Gas estimation failed
            else if (error.message.includes("gas")) {
                toast.error("Transaction would fail. Check parameters.");
            }
            // Generic error
            else {
                toast.error(`Error: ${error.message}`);
            }

            throw error;
        }
    }

    return { executeTransaction };
}
```

---

## 📊 GAS ESTIMATION

```typescript
// lib/gas.ts
export async function estimateGasForMarketCreation(params) {
    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    const factory = new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, provider);

    try {
        const gasEstimate = await factory.estimateGas.createMarketBasic(
            params.question,
            params.endTime,
            params.initialLiquidity
        );

        // Add 20% buffer
        const gasWithBuffer = gasEstimate.mul(120).div(100);

        // Get current gas price
        const gasPrice = await provider.getGasPrice();

        // Calculate cost in $BASED
        const gasCost = gasWithBuffer.mul(gasPrice);

        return {
            gasLimit: gasWithBuffer,
            gasPrice,
            estimatedCost: ethers.utils.formatEther(gasCost)
        };
    } catch (error) {
        console.error("Gas estimation failed:", error);
        return null;
    }
}
```

---

## 🔗 SUMMARY

**Key Takeaways**:
1. **Event-driven UI** - Listen to contract events, don't poll
2. **Off-chain aggregation** - Store likes/votes in Supabase, trigger on-chain when threshold met
3. **Backend relayer** - Automates threshold checks and on-chain triggers
4. **Admin overrides** - Manual control always available
5. **Error handling** - Graceful UX for all transaction states
6. **Gas estimation** - Show users cost before transaction

**Tools Used**:
- wagmi (React hooks for Ethereum)
- viem (TypeScript-first Ethereum library)
- Supabase (off-chain data storage)
- Next.js API routes (backend relayer)

---

**Related Documents**:
- [PHASE_5_MARKET_LIFECYCLE.md](./PHASE_5_MARKET_LIFECYCLE.md) - Contract implementation
- [PHASE_6_RESOLUTION_DISPUTES.md](./PHASE_6_RESOLUTION_DISPUTES.md) - Dispute system
- [MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md](./MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md)

---

**Last Updated**: November 7, 2025
