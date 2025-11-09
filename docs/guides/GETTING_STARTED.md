# Getting Started with KEKTECH

## 🚨 IMPORTANT: System is ALREADY LIVE!

**The KEKTECH prediction market platform was deployed to BasedAI mainnet on November 6, 2025.**

You don't need to deploy anything - it's already running!

---

## Quick Start Options

### Option 1: Use the Live System
- **Frontend**: https://kektech.vercel.app
- **Network**: BasedAI (Chain ID: 32323)
- **Contracts**: See [deployments/basedai-mainnet/contracts.json](/deployments/basedai-mainnet/contracts.json)

### Option 2: Local Development Setup

If you want to contribute or test locally:

## 1. Prerequisites

- Node.js v18+ and npm
- Git
- A code editor (VSCode recommended)
- MetaMask or similar Web3 wallet

## 2. Clone the Repository

```bash
git clone https://github.com/0xBased-lang/kektechV0.69.git
cd kektechV0.69
```

## 3. Install Dependencies

```bash
# Install all workspace dependencies
npm install

# Navigate to blockchain package
cd packages/blockchain
npm install

# Navigate to frontend package (separate terminal)
cd packages/frontend
npm install
```

## 4. Environment Setup

### For Blockchain Development

Create `.env` file in `packages/blockchain/`:
```env
# BasedAI RPC (for mainnet fork testing)
BASEDAI_RPC=https://rpc.basedai.com

# Sepolia RPC (for testnet)
SEPOLIA_RPC=https://sepolia.infura.io/v3/YOUR_KEY

# Private keys (DO NOT COMMIT!)
PRIVATE_KEY=your_private_key_here
```

### For Frontend Development

Create `.env.local` file in `packages/frontend/`:
```env
NEXT_PUBLIC_CHAIN_ID=32323
NEXT_PUBLIC_RPC_URL=https://rpc.basedai.com
```

## 5. Run Tests (Verify Everything Works)

```bash
cd packages/blockchain
npm test
```

**Expected**: 320/320 tests passing (100% coverage) ✅

If tests pass, your environment is set up correctly!

## 6. Common Development Tasks

### Run a Specific Test
```bash
npm test -- test/hardhat/PredictionMarket.test.js
```

### Check Gas Usage
```bash
npm run test:gas
```

### Start Local Fork (for Testing)
```bash
npm run node:fork
```

### Run Security Analysis
```bash
npm run security:slither
```

## 7. Interacting with Live Contracts

### Using Scripts
```bash
# Check market status
node scripts/live/check-market.js [marketAddress]

# Monitor system
node scripts/live/monitor.js
```

### Using Frontend
1. Go to https://kektech.vercel.app
2. Connect your wallet (BasedAI network)
3. Interact with markets

## 8. Creating Test Markets

### For Rapid Testing
Use SHORT durations:
```javascript
{
  marketDuration: 1 hour,
  resolutionTime: 30 minutes,
  disputeWindow: 15 minutes
}
```

### For Production
Use NORMAL durations:
```javascript
{
  marketDuration: 7-30 days,
  resolutionTime: 24-48 hours,
  disputeWindow: 12-24 hours
}
```

## 9. Project Structure

```
kektechV0.69/
├── packages/
│   ├── blockchain/         # Smart contracts
│   │   ├── contracts/     # Solidity contracts
│   │   ├── test/          # Test suite (100% passing)
│   │   └── scripts/       # Utility scripts
│   └── frontend/          # Next.js frontend
│       ├── app/           # App router
│       └── components/    # React components
├── deployments/           # Deployment artifacts
│   └── basedai-mainnet/   # LIVE contracts
└── docs/                  # Documentation
```

## 10. Troubleshooting

### Tests Failing?
- Ensure you're in `packages/blockchain` directory
- Check Node.js version (v18+ required)
- Run `npm install` again

### Can't Connect to BasedAI?
- Chain ID: 32323
- RPC: https://rpc.basedai.com
- Explorer: https://explorer.basedai.com

### Need Contract ABIs?
Find them in: `packages/frontend/lib/contracts/abis/`

## Next Steps

1. **Read Architecture**: [docs/architecture/SYSTEM_ARCHITECTURE.md](/docs/architecture/SYSTEM_ARCHITECTURE.md)
2. **Check Status**: [MASTER_STATUS.md](/MASTER_STATUS.md)
3. **Review Contracts**: [docs/reference/CONTRACTS.md](/docs/reference/CONTRACTS.md)
4. **Start Contributing**: Create an issue or PR on GitHub

## Support

- **GitHub Issues**: https://github.com/0xBased-lang/kektechV0.69/issues
- **Documentation**: [CLAUDE.md](/CLAUDE.md)
- **Test Status**: [TEST_REALITY.md](/TEST_REALITY.md)

---

**Remember**: The system is LIVE on mainnet. Be careful with any operations that interact with the deployed contracts!