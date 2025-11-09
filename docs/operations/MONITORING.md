# Live System Monitoring Guide

## 🟢 System Status - LIVE ON MAINNET

**Network**: BasedAI (Chain ID: 32323)
**Deployment Date**: November 6, 2025
**Current Status**: Operational

---

## Key Metrics to Monitor

### 1. System Health Metrics

| Metric | Target | Alert Threshold | Check Command |
|--------|--------|-----------------|---------------|
| Active Markets | >0 | 0 for >1 hour | `node scripts/live/check-active-markets.js` |
| Total Volume (24h) | >0 | 0 for >24 hours | `node scripts/live/check-volume.js` |
| Gas Price | <1000 gwei | >5000 gwei | `node scripts/live/check-gas.js` |
| Contract Balance | >0.1 ETH | <0.01 ETH | `node scripts/live/check-balances.js` |
| Resolution Queue | <10 | >50 | `node scripts/live/check-resolutions.js` |

### 2. Market Lifecycle Metrics

```javascript
// Market state distribution
{
  PROPOSED: [], // New markets awaiting approval
  ACTIVE: [],   // Open for betting
  CLOSED: [],   // Betting closed, awaiting resolution
  RESOLVING: [], // Resolution proposed
  RESOLVED: [],  // Outcome determined
  FINALIZED: [], // Complete
  DISPUTED: [],  // Under dispute
  CANCELLED: []  // Cancelled markets
}
```

### 3. Performance Metrics

- **Average Gas per Bet**: Should be ~100k gas
- **Market Creation Time**: Should be <2 seconds
- **Resolution Time**: Should match configured parameters
- **Claim Processing**: Should be <1 second

---

## Monitoring Scripts

### Real-Time Monitor
```bash
# Start continuous monitoring
node scripts/live/monitor.js

# Options
--interval 60     # Check every 60 seconds (default)
--verbose        # Detailed output
--alerts         # Enable alerts for anomalies
```

### Health Check
```bash
# One-time health check
node scripts/live/health-check.js

# Output includes:
# - Contract status (all should be accessible)
# - Role assignments (admin roles should be set)
# - Parameter values (should match expected)
# - Recent events (last 24h)
```

### Market Status
```bash
# Check specific market
node scripts/live/check-market.js [marketAddress]

# List all markets
node scripts/live/list-markets.js --state ACTIVE

# Check markets needing resolution
node scripts/live/pending-resolutions.js
```

---

## Event Monitoring

### Critical Events to Track

```solidity
// Market Creation
event MarketCreated(address indexed market, address indexed creator);

// Betting Activity
event BetPlaced(address indexed user, uint256 outcome, uint256 amount);

// Resolution Events
event OutcomeProposed(address indexed market, uint256 outcome);
event ResolutionFinalized(address indexed market, uint256 outcome);
event DisputeRaised(address indexed market, address challenger);

// System Events
event ParameterUpdated(bytes32 param, uint256 value);
event RoleGranted(bytes32 role, address account);
```

### Event Listener Setup
```javascript
// Listen for critical events
const provider = new ethers.JsonRpcProvider("https://rpc.basedai.com");
const factory = new ethers.Contract(factoryAddress, factoryABI, provider);

factory.on("MarketCreated", (market, creator) => {
  console.log(`New market: ${market} by ${creator}`);
  // Send alert, update dashboard, etc.
});
```

---

## Alert Conditions

### 🔴 Critical (Immediate Action)
- Contract not responding
- Admin role compromised
- Unexpected contract balance changes
- Multiple dispute escalations

### 🟡 Warning (Investigation Needed)
- No new markets in 24 hours
- Gas prices >10x normal
- Resolution delays >2x expected
- Unusual betting patterns

### 🔵 Info (Monitor)
- New market created
- Large bet placed (>10 ETH)
- Market resolved
- Parameter updated

---

## Monitoring Dashboard Setup

### Option 1: Command Line Dashboard
```bash
# Install dashboard
npm install -g kektech-monitor

# Run dashboard
kektech-monitor --network basedai --refresh 30
```

### Option 2: Web Dashboard
Access at: https://kektech.vercel.app/admin/dashboard
(Requires admin wallet connection)

### Option 3: Custom Monitoring
```javascript
// monitoring-config.json
{
  "network": "basedai",
  "contracts": "./deployments/basedai-mainnet/contracts.json",
  "alerts": {
    "email": "alerts@example.com",
    "webhook": "https://hooks.slack.com/...",
    "threshold": "warning"
  },
  "metrics": {
    "interval": 60,
    "history": 24,
    "export": "./metrics/"
  }
}
```

---

## Common Issues & Solutions

### Issue: Market Stuck in PROPOSED State
**Check**: Admin approval status
```bash
node scripts/live/check-market.js [market] --verbose
```
**Solution**: Admin needs to call `adminApproveMarket()`

### Issue: Resolution Not Finalizing
**Check**: Dispute period status
```bash
node scripts/live/check-resolution.js [market]
```
**Solution**: Wait for dispute period or handle dispute

### Issue: High Gas Costs
**Check**: Network congestion
```bash
node scripts/live/check-gas.js --history 24h
```
**Solution**: Adjust gas parameters or wait

### Issue: Users Can't Claim Winnings
**Check**: Market state (must be FINALIZED)
```bash
node scripts/live/check-market-state.js [market]
```
**Solution**: Ensure resolution is finalized

---

## Performance Monitoring

### Database Queries
```sql
-- Active markets count
SELECT COUNT(*) FROM markets WHERE state = 'ACTIVE';

-- Volume last 24h
SELECT SUM(amount) FROM bets WHERE timestamp > NOW() - INTERVAL '24 hours';

-- Resolution efficiency
SELECT AVG(finalized_at - resolved_at) as avg_resolution_time FROM markets;
```

### Gas Usage Analysis
```bash
# Analyze gas usage patterns
node scripts/live/analyze-gas.js --days 7

# Output:
# - Average gas per operation type
# - Peak usage times
# - Optimization opportunities
```

---

## Backup & Recovery

### State Backup
```bash
# Backup current state
node scripts/live/backup-state.js --output ./backups/

# Includes:
# - All market states
# - User positions
# - Resolution history
# - Parameter snapshots
```

### Emergency Procedures
1. **Pause New Markets**: Update ParameterStorage
2. **Snapshot State**: Run backup script
3. **Investigate Issue**: Check logs and events
4. **Deploy Fix**: If needed, deploy new template version
5. **Resume Operations**: Re-enable market creation

---

## Logs & Debugging

### Log Locations
- **Application Logs**: `./logs/app/`
- **Transaction Logs**: `./logs/tx/`
- **Error Logs**: `./logs/errors/`
- **Monitoring Logs**: `./logs/monitoring/`

### Debug Commands
```bash
# Verbose transaction details
node scripts/live/debug-tx.js [txHash]

# Market history
node scripts/live/market-history.js [marketAddress]

# User activity
node scripts/live/user-activity.js [userAddress]
```

---

## Integration with External Services

### Grafana Dashboard
```yaml
# docker-compose.yml
services:
  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_DATASOURCE_URL=https://rpc.basedai.com
```

### Prometheus Metrics
```javascript
// prometheus-exporter.js
const prometheus = require('prom-client');
const activeMarkets = new prometheus.Gauge({
  name: 'kektech_active_markets',
  help: 'Number of active prediction markets'
});
```

---

## Maintenance Windows

### Scheduled Maintenance
- **Weekly**: Log rotation (Sundays 2 AM UTC)
- **Monthly**: State backup (First Sunday)
- **Quarterly**: Performance review

### Unscheduled Maintenance
Announced via:
- Twitter: @kektech
- Discord: #announcements
- On-chain event: `SystemMaintenance`

---

**Last Updated**: November 8, 2025
**Monitoring Status**: Active
**System Uptime**: 99.9%