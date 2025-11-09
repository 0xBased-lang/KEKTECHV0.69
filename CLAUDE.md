# KEKTECH 3.0 - AI Assistant Instructions

**Last Updated**: 2025-11-09
**Purpose**: Accurate guidance for Claude Code AI assistant

---

## 🎯 PROJECT STATUS (Ground Truth)

**Current Reality**:
- ✅ Smart Contracts: DEPLOYED to BasedAI mainnet (Nov 6, 2025)
- ✅ Frontend: LIVE on Vercel
- ✅ Backend: 9 API routes IMPLEMENTED
- ✅ Database: Prisma configured with dev.db
- ✅ Tests: 319/347 passing (91.9%) - 1 trivial fix needed
- ⚠️ APIs: Minor timeout issues (easy fix)
- 🔄 Integration: Backend → Frontend UI connection in progress

---

## 📁 DOCUMENTATION STRUCTURE

**ONLY USE THESE FILES**:

1. **CURRENT_STATUS.md** - System state snapshot
   - Updated: Manual now, auto-generated after git hook setup
   - Purpose: Quick overview of what's working

2. **NEXT_STEPS.md** - Simple prioritized checklist
   - Updated: Manually after completing tasks
   - Purpose: Clear action items with timestamps

3. **CLAUDE.md** (this file) - AI instructions
   - Updated: When project structure/status changes
   - Purpose: Keep AI context accurate

4. **README.md** - Project overview
   - Updated: Rarely (major milestones only)
   - Purpose: Public-facing project description

**TECHNICAL REFERENCE** (in /docs/reference/):
- CONTRACTS.md - Smart contract documentation
- API.md - Backend API reference
- ARCHITECTURE.md - System architecture

---

## 🚫 FILES TO IGNORE

**DO NOT reference these** (exported to official archive):
- ❌ MASTER_STATUS.md (outdated - archived)
- ❌ TODO_TRACKER.md (outdated - archived)
- ❌ TEST_REALITY.md (wrong data - archived)
- ❌ DEPLOYMENT_REALITY.md (archived)
- ❌ Any files in docs/archive/ (archived)
- ❌ CHECKPOINT.md (never existed)

**Official Archive**: `/Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/`
(Permanent archive, safe to reference if needed)

---

## 🏗️ PROJECT STRUCTURE (After Cleanup)

```
kektechV0.69/
├── packages/
│   ├── blockchain/              # Smart contracts
│   │   ├── contracts/          # Solidity contracts
│   │   ├── test/               # 347 tests (319 passing)
│   │   └── deployments/        # Deployment records
│   └── frontend/                # Next.js 15 app
│       ├── app/                # App router
│       ├── components/         # React components
│       ├── lib/                # Utilities
│       └── prisma/             # Database schema
├── docs/
│   ├── README.md               # Docs overview
│   └── reference/              # Technical reference
├── CURRENT_STATUS.md           # System snapshot
├── NEXT_STEPS.md               # Task checklist
├── CLAUDE.md                   # This file
└── README.md                   # Project overview

OFFICIAL ARCHIVE: /Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/
└── [292 archived files for reference]
```

---

## 🔧 DEVELOPMENT WORKFLOW

### 1. Check Current State
```bash
cat CURRENT_STATUS.md
```

### 2. Check What's Next
```bash
cat NEXT_STEPS.md
```

### 3. After Completing Tasks
```bash
# Edit NEXT_STEPS.md:
# - Mark task [x] complete
# - Add completion timestamp
# - Update "Last Updated" date
```

### 4. Reference Official Archive (if needed)
```bash
# Search archive for historical info
cd /Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/
grep -r "search term" .
```

### 5. Run Tests
```bash
# Smart contracts
cd packages/blockchain && npm test
# Expected: 347 tests, 319 passing

# Frontend E2E
cd packages/frontend && npx playwright test
```

---

## 📊 DEPLOYED CONTRACTS

**Network**: BasedAI (Chain ID: 32323)
**Deployed**: November 6, 2025

| Contract | Address |
|----------|---------|
| VersionedRegistry | `0x67F8F023f6cFAe44353d797D6e0B157F2579301A` |
| ParameterStorage | `0x0FdcaCE9dEE78c70C92B243346cDf763A06fEdF8` |
| AccessControlManager | `0x4d1afBb8E50e17F24dCbB4Fc3197537be646315A` |
| ResolutionManager | `0x10daF33E321ED8977e369a36FcC6Beb3d3d106a0` |
| RewardDistributor | `0x3D274362423847B53E43a27b9E835d668754C96B` |
| MarketFactory | `0x3eaF643482Fe35d13DB812946E14F5345eb60d62` |
| PredictionMarketTemplate | `0x1064f1FCeE5aA859468559eB9dC9564F0ef20111` |
| CurveRegistry | `0x5AcC0f00c0675975a2c4A54aBcC7826Bd229Ca70` |
| MarketTemplateRegistry | `0x420687494Dad8da9d058e9399cD401Deca17f6bd` |

---

## 🚨 CRITICAL RULES

1. **ALWAYS check CURRENT_STATUS.md** for actual system state
2. **ALWAYS update NEXT_STEPS.md** after completing tasks (with timestamp)
3. **NEVER create new root .md files** without approval
4. **RUN TESTS** before marking tasks complete
5. **REFERENCE OFFICIAL ARCHIVE** at /Users/seman/KEKTECH_OFFICIALS/ if needed

---

## 🔗 USEFUL LINKS

- **Frontend**: https://kektech-frontend.vercel.app
- **Explorer**: https://explorer.bf1337.org
- **GitHub**: https://github.com/0xBased-lang/kektechV0.69
- **Official Archive**: /Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/

---

**If CURRENT_STATUS.md conflicts with this file, CURRENT_STATUS.md wins (it's closer to reality).**
