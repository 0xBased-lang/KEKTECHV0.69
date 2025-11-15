# Admin Market Operations

This guide explains how to create, verify, and maintain prediction markets using the new admin tooling that ships with KEKTECH 3.0.

## 1. Deployment Flow (UI)

1. Connect an admin wallet and open `/admin`.
2. Switch to the **Creation** tab to load the `MarketCreationPanel`.
3. Complete the multi-step form:
   - Clear yes/no style question + description
   - Category selection (stored as `bytes32`)
   - Outcomes, end time, and creator bond (defaults to 0.1 BASED)
   - Bonding curve and parameter (LMSR @ 7500 works for most markets)
4. Review all fields and submit. The transaction hash is stored at the top of the panel and links directly to the BasedAI explorer so you can grab the newly created market address from the receipt.

## 2. Post-Deployment Verification

After the tx confirms:

1. Run `node scripts/check-market-parameters.js <marketAddress>` to dump the state, resolution time, and current min/max bet limits.
2. Place a 0.01 BASED test bet to ensure odds reporting works.
3. Ping the API health checks with `scripts/test-api-endpoints.sh`.

These steps are listed inside the panel so operators always have the CLI commands handy.

## 3. Updating Market Limits

The new `scripts/update-market-limits.js` helper programmatically updates the `ParameterStorage` contract:

```bash
ADMIN_PRIVATE_KEY=0xabc... node scripts/update-market-limits.js --min 0.05 --max 250
```

Values are interpreted in BASED (converted to wei internally). You can update just one side by omitting the other flag.

## 4. Parameter Controls

Use the **Config** tab on `/admin` for regular tuning:

- Creator bond minimum, protocol fees, and other curve defaults are surfaced via live reads from `ParameterStorage`.
- Boolean toggles (market creation on/off, emergency pause) are also wired to the latest on-chain values.
- Any bulk scripted updates should still be double-checked from this UI to confirm the contracts accepted the change.

Keep this document close whenever deploying new markets—between the UI and scripts we now have an end-to-end workflow that enforces clean data going into the factory and verifiable values right after launch.
