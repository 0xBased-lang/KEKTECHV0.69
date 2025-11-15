# Admin Console Enhancement Backlog

Built on top of the new Creation tab, these are the prioritized follow-ups.

## P0 – Operational polish
1. **Status telemetry**: badge on Creation tab showing last tx success/failure; expose friendly errors from `useCreateMarket`.
2. **Market table filters**: Active/Resolution panels should support search by address + category.
3. **Parameter audit trail**: log who changed protocol fees/min bet (date + wallet) and show history in Config tab.

## P1 – Advanced workflows
1. **Editable drafts**: allow admins to pre-fill the Create form from a template or duplicate existing markets.
2. **Bulk approvals**: multi-select in Proposals to approve/activate batches.
3. **Resolution metrics**: chart of time-to-resolution, dispute counts, outstanding bonds.

## P2 – Nice-to-have
1. **Notifications**: toast/webhook when market creation/resolution succeeds.
2. **Role-specific views**: hide tabs based on AccessControl role (operator vs resolver).
3. **Embedded scripts**: optional panel that runs `check-market-parameters` server-side so operators never leave UI.

Treat this as a living backlog; review after the stabilization QA passes and adjust priorities with the ops team.
