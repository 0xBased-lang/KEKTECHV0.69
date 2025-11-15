# Market Creation Stabilization Plan

To keep the new admin creation flow production-ready, use this checklist before/after each release.

## 1. Wallet + Network
1. Connect admin wallet on BasedAI (ChainId 32323). Confirm `/admin` rejects non-admins.
2. Switch networks while the form is open – UI should block submission when wallet is off-chain.

## 2. Field Validation
1. Question/Description lengths (min/max) trigger inline errors.
2. Category buttons persist selection, enforce required state.
3. Outcomes must be unique, 2–50 chars.
4. End time: cannot be past/ <1hr future; editing toggles the “user-set” flag.
5. Creator bond cannot exceed balance; decimals limited.
6. Curve param only accepts positive ints; different curve selection loads defaults.

## 3. Submission Flow
1. Submit valid data → wallet prompt shows `createMarketWithCurve` (or `createMarket` when default).
2. After confirmation:
   - Hash banner appears in form + admin panel alert.
   - Market address backfills within 1 block (watch logs).
   - Copy buttons work & reset state after 2s.
3. Reject scenarios: insufficient bond, contract revert (e.g., paused creation) surface `TransactionError`.

## 4. Post-Deploy Checks
1. Inspect market list page – new market should appear in “Proposals/Active” depending on approvals.
2. Use `scripts/check-market-parameters.js <address>` (optional) to double-check resolution time and limits.
3. Trigger admin approval/resolution paths to ensure new markets integrate with rest of console.

## 5. Regression Watchlist
- Confirm state resets if user cancels midway.
- Browser refresh should restart wizard state.
- Multiple sequential creations update “Latest deployment” alert with newest hash/address.

Document any failures in the release checklist and prioritize fixes before going back to feature work.
