# GAS BENCHMARK REPORT

**Generated**: 2025-11-06T21:35:23.804Z
**Network**: BasedAI Mainnet (Chain ID: 32323)
**Gas Price Settings**:
- Standard: 9 gwei
- Fast: 12 gwei
- Instant: 15 gwei

## Summary Table

| Operation | Gas Used | Cost @ 9 gwei | Cost (USD) | Recommended Gas Limit |
|-----------|----------|---------------|------------|-----------------------|
| Create Market | 685839 | 0.006172551 BASED | $0.00000062 | 823007 |
| Get Odds (View) | 0 | 0.0 BASED | $0.00000000 | 0 |
| Calculate Payout (View) | 0 | 0.0 BASED | $0.00000000 | 0 |

## Detailed Measurements

### Create Market

- **Gas Used**: 685839
- **Transaction**: 0xc6c509d6f94cd75c0ab30dd65124cb91c9235265a0601b98291200b68237e1fe
- **Costs**:
  - Standard (9 gwei): 0.006172551 BASED ($0.00000062)
  - Fast (12 gwei): 0.008230068 BASED ($0.00000082)
  - Instant (15 gwei): 0.010287585 BASED ($0.00000103)
- **Expected**: 731426 gas
- **Variance**: -6.2% ✅

### Get Odds (View)

- **Gas Used**: 0
- **Costs**:
  - Standard (9 gwei): 0.0 BASED ($0.00000000)
  - Fast (12 gwei): 0.0 BASED ($0.00000000)
  - Instant (15 gwei): 0.0 BASED ($0.00000000)

### Calculate Payout (View)

- **Gas Used**: 0
- **Costs**:
  - Standard (9 gwei): 0.0 BASED ($0.00000000)
  - Fast (12 gwei): 0.0 BASED ($0.00000000)
  - Instant (15 gwei): 0.0 BASED ($0.00000000)

## Frontend Integration Recommendations

```javascript
const GAS_LIMITS = {
  CreateMarket: 823007, // Create Market
  GetOdds(View): 0, // Get Odds (View)
  CalculatePayout(View): 0, // Calculate Payout (View)
};
```
