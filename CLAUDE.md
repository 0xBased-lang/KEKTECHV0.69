# KEKTECH 3.0 - AI Assistant Instructions

**Last Updated**: 2025-11-09 19:25 CET
**Purpose**: Accurate guidance for Claude Code AI assistant
**Status**: Documentation complete, ready for implementation

---

## 🎯 PROJECT STATUS (Evidence-Based Truth)

**Current Completion**: 43% (Infrastructure ready, user features missing)

### What's COMPLETE ✅
- **Smart Contracts**: Deployed to BasedAI mainnet, 320/347 tests passing (92.2%)
- **Backend APIs**: 9 routes fully implemented with Prisma integration
- **Database Schema**: 6 tables designed with proper relationships
- **React Hooks**: 8 hooks implemented for API calls (391 lines)
- **Frontend Build**: Compiles successfully, 36 static pages
- **Contract Addresses**: Corrected in .env.local (2025-11-09)

### What's MISSING ❌
- **Database**: Not initialized (dev.db file doesn't exist)
- **User UI**: Zero user-facing components (only 2 admin panels)
- **Authentication**: No wallet signature verification (security risk)
- **Testing**: Zero test coverage (no E2E, no API tests)
- **Market Pages**: Don't exist (no detail page, no list page)
- **Comments UI**: Don't exist (no form, no list, no voting)
- **Voting UI**: Don't exist (no proposal/resolution voting for users)

**Reality Check**: Backend infrastructure is solid, but users can't interact with anything yet.

---

## 📁 DOCUMENTATION STRUCTURE

### Primary Documents (Source of Truth)

**1. CURRENT_STATUS.md** ⭐ START HERE
- **Purpose**: Evidence-based system state snapshot
- **Updated**: After each phase completion
- **Contains**: What works vs what doesn't, completion metrics, critical blockers
- **Rule**: If conflicts exist between files, this file wins

**2. NEXT_STEPS.md** ⭐ IMPLEMENTATION ROADMAP
- **Purpose**: Phased implementation plan with time tracking
- **Updated**: After completing each task (with timestamps)
- **Contains**: 6 phases, detailed tasks, success criteria, dependencies
- **Format**:
  ```
  - [x] Task name (2025-11-09 HH:MM) - X minutes
  ```

**3. CLAUDE.md** (this file)
- **Purpose**: AI assistant guidance and project context
- **Updated**: When project structure or status changes significantly
- **Contains**: Development workflow, file structure, critical rules

**4. README.md**
- **Purpose**: Public-facing project overview
- **Updated**: Major milestones only
- **Audience**: External developers, users

### Technical Reference (in /docs/reference/)
- **CONTRACTS.md** - Smart contract architecture
- **API.md** - Backend API reference
- **ARCHITECTURE.md** - System design

---

## 🚫 FILES TO IGNORE

**Exported to Official Archive** (2025-11-09 18:48):
- ❌ MASTER_STATUS.md (outdated, conflicting data)
- ❌ TODO_TRACKER.md (outdated task list)
- ❌ TEST_REALITY.md (incorrect test numbers)
- ❌ DEPLOYMENT_REALITY.md (archived)
- ❌ DOCUMENTATION_STATUS.md (archived)
- ❌ Any files in docs/archive/ (all archived)
- ❌ CHECKPOINT.md (never existed)

**Archive Location**: `/Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/`
- 292 files safely archived
- Permanent reference, safe to search if needed
- Current docs take precedence

---

## 🏗️ PROJECT STRUCTURE

```
kektechV0.69/
├── packages/
│   ├── blockchain/                    # Smart Contracts
│   │   ├── contracts/core/           # 9 deployed contracts
│   │   ├── test/hardhat/             # 347 tests (320 passing, 27 pending)
│   │   ├── deployments/
│   │   │   └── basedai-mainnet/      # Nov 6, 2025 deployment
│   │   │       ├── deployment.json   # Contract addresses
│   │   │       └── ...
│   │   └── scripts/                  # Deployment scripts
│   │
│   └── frontend/                      # Next.js 15 App
│       ├── app/                       # App Router
│       │   ├── api/                  # 9 API routes (✅ implemented)
│       │   ├── market/[address]/     # ❌ Missing (to be created)
│       │   └── markets/              # ❌ Missing (to be created)
│       │
│       ├── components/
│       │   ├── admin/                # ✅ 2 panels (existing)
│       │   ├── engagement/           # ❌ Missing (to be created)
│       │   │   ├── CommentForm.tsx
│       │   │   ├── CommentList.tsx
│       │   │   ├── CommentItem.tsx
│       │   │   ├── CommentVoteButtons.tsx
│       │   │   ├── CommentSection.tsx
│       │   │   ├── ProposalVoteButtons.tsx
│       │   │   ├── ResolutionVoteForm.tsx
│       │   │   └── ResolutionVoteDisplay.tsx
│       │   └── ui/                   # Shadcn components
│       │
│       ├── lib/
│       │   ├── api/
│       │   │   └── engagement.ts     # ✅ 8 hooks (391 lines)
│       │   ├── auth/                 # ❌ Missing (to be created)
│       │   │   └── wallet-auth.ts
│       │   ├── hooks/                # ❌ Partial
│       │   │   └── useWalletAuth.ts  # To be created
│       │   ├── contracts/
│       │   │   ├── addresses.ts      # ✅ Correct addresses
│       │   │   └── abis/             # ✅ All ABIs present
│       │   └── db/
│       │       └── prisma.ts         # ✅ Prisma client setup
│       │
│       ├── prisma/
│       │   ├── schema.prisma         # ✅ Complete (6 tables)
│       │   └── migrations/
│       │       └── 20251109045413_init/
│       │           └── migration.sql # ✅ Ready (not applied)
│       │
│       ├── tests/                    # ❌ Empty (to be created)
│       │   ├── api/                  # API integration tests
│       │   └── e2e/                  # Playwright E2E tests
│       │
│       ├── .env.local                # ✅ Contract addresses corrected
│       ├── dev.db                    # ❌ Doesn't exist (to be created)
│       └── package.json
│
├── deployments/
│   └── basedai-mainnet/
│       └── deployment.json           # Source of truth for addresses
│
├── docs/
│   ├── README.md
│   └── reference/
│       ├── CONTRACTS.md
│       ├── API.md
│       └── ARCHITECTURE.md
│
├── CURRENT_STATUS.md                 # ⭐ System state
├── NEXT_STEPS.md                     # ⭐ Implementation roadmap
├── CLAUDE.md                         # ⭐ This file
└── README.md

OFFICIAL ARCHIVE:
/Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/
├── root-docs/                        # 9 archived root .md files
├── docs-directory/                   # Historical documentation
├── test-reports/                     # Old test outputs
└── metadata/                         # Export info + git history
```

---

## 🔧 DEVELOPMENT WORKFLOW

### Daily Workflow

#### 1. Start of Session
```bash
# Check current system state
cat CURRENT_STATUS.md

# Check what phase you're on
cat NEXT_STEPS.md | head -30

# Review current phase tasks
# Focus on tasks marked "⏳" (in progress) or next "[ ]" (pending)
```

#### 2. During Development
```bash
# Run smart contract tests
cd packages/blockchain
npm test                    # 347 tests, expect 320 passing

# Run frontend in dev mode
cd packages/frontend
npm run dev                 # Runs on http://localhost:3000

# Check database (after Phase 1.1)
sqlite3 dev.db ".tables"    # Should show 6 tables

# Test API endpoints (after Phase 1.1)
curl http://localhost:3000/api/comments/0x123
```

#### 3. After Completing Tasks
```bash
# 1. Update NEXT_STEPS.md
# - Mark task [x] complete
# - Add timestamp: (2025-11-09 HH:MM)
# - Log time: - X minutes

# 2. Update Progress Tracker in NEXT_STEPS.md
# - Update phase percentage
# - Log hours in "Hours Actual" column

# 3. If phase complete, update CURRENT_STATUS.md
# - Update completion percentage
# - Mark phase as complete
# - Update "Current Focus" section
```

#### 4. Reference Archive (If Needed)
```bash
# Search for historical information
cd /Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/
grep -r "search term" .

# View specific archived file
cat root-docs/MASTER_STATUS.md
```

---

## 📋 IMPLEMENTATION PHASES

**Current Phase**: Phase 0 - Documentation Update (In Progress)

### Phase Overview

| Phase | Goal | Time | Status |
|-------|------|------|--------|
| **Phase 0** | Update documentation | 1-2h | 🔄 66% |
| **Phase 1** | Initialize database, install deps | 0.5h | ⏳ Next |
| **Phase 2** | Build authentication | 2-3h | ⏳ Pending |
| **Phase 3** | Build user UI (15 components) | 5-7h | ⏳ Pending |
| **Phase 4** | Add error handling, polish | 2-3h | ⏳ Pending |
| **Phase 5** | Create test suite | 4-6h | ⏳ Pending |
| **Phase 6** | Production hardening | 1-2h | ⏳ Pending |

**Total Estimated**: 16-24 hours over 3-4 days

See NEXT_STEPS.md for detailed task breakdowns, dependencies, and success criteria.

---

## 🧪 TESTING (After Phase 5)

### Smart Contract Tests
```bash
cd packages/blockchain
npm test                    # All Hardhat tests
npm run test:gas           # Gas usage report
npm run coverage           # Coverage report
```

**Current**: 320/347 passing (92.2%)
- 27 tests pending (not failing, just marked as pending)
- 0 actual failures

### API Integration Tests (To Be Created)
```bash
cd packages/frontend
npm run test               # Vitest API tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

**Target**: All 9 API routes tested + authentication flow

### E2E Tests (To Be Created)
```bash
cd packages/frontend
npx playwright test                    # All E2E tests
npx playwright test --headed          # With browser visible
npx playwright test --ui              # Interactive UI mode
npx playwright test comment-posting   # Specific test file
```

**Target**: 7 critical user flows covered
- Wallet connection
- Market browsing
- Comment posting
- Comment voting
- Proposal voting
- Resolution voting
- End-to-end: Create → Bet → Comment → Vote

---

## 📊 DEPLOYED CONTRACTS

**Network**: BasedAI Mainnet
**Chain ID**: 32323
**Deployed**: November 6, 2025
**Status**: All verified on explorer

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

**Test Market**: `0x31d2BC49A6FD4a066F5f8AC61Acd0E6c9105DD84`

**Source**: `/deployments/basedai-mainnet/deployment.json`

---

## 🚨 CRITICAL RULES

### Documentation Rules
1. **ALWAYS read CURRENT_STATUS.md first** - It's the source of truth
2. **ALWAYS update NEXT_STEPS.md** after tasks with timestamp AND time spent
3. **NEVER create new root .md files** without explicit approval
4. **UPDATE Progress Tracker** in NEXT_STEPS.md after each phase
5. **COMMIT frequently** with descriptive messages

### Development Rules
1. **RUN TESTS** before marking any task complete
2. **VERIFY with evidence** - Don't claim something works without testing
3. **USE proper git workflow**:
   ```bash
   git add -A
   git commit -m "feat: Complete Phase X - [Description]

   COMPLETED:
   - Task 1
   - Task 2

   TIME: Xh Ymin

   🤖 Generated with Claude Code
   Co-Authored-By: Claude <noreply@anthropic.com>"
   git push origin main
   ```

### Code Quality Rules
1. **NO authentication bypass** - Must verify wallet signatures
2. **VALIDATE all user input** - Comments, votes, etc.
3. **HANDLE errors gracefully** - Error boundaries, try/catch
4. **USE TypeScript types** - No any types
5. **FOLLOW existing patterns** - Match codebase conventions

### Workflow Rules
1. **ONE PHASE AT A TIME** - Complete phase before starting next
2. **CHECK dependencies** - Some tasks block others (see NEXT_STEPS.md)
3. **MANUAL TESTING** - Test each feature after building
4. **DOCUMENT ISSUES** - If something doesn't work, note it
5. **ASK IF UNCERTAIN** - Better to clarify than assume

---

## 🔗 USEFUL LINKS

### Live System
- **Frontend**: [Pending deployment after UI implementation]
- **Explorer**: https://explorer.bf1337.org
- **Test Market**: https://explorer.bf1337.org/address/0x31d2BC49A6FD4a066F5f8AC61Acd0E6c9105DD84

### Development
- **GitHub**: https://github.com/0xBased-lang/kektechV0.69
- **Official Archive**: /Users/seman/KEKTECH_OFFICIALS/KEKTECH_ARCHIVE_20251109_184834/

### Documentation
- **BasedAI RPC**: https://rpc.basedai.com
- **Chain ID**: 32323
- **Currency**: BASED

---

## 🎯 NEXT IMMEDIATE STEPS

**After Phase 0 documentation complete**:

### Phase 1: Foundation (30 minutes)
```bash
# 1.1 Initialize database (10 min)
cd packages/frontend
npx prisma generate
npx prisma migrate deploy
sqlite3 dev.db ".tables"

# 1.2 Install testing dependencies (5 min)
npm install -D vitest @vitest/ui @playwright/test
npm install date-fns sonner
npx playwright install
```

### Phase 2: Authentication (2-3 hours)
1. Create `lib/auth/wallet-auth.ts` (45 min)
2. Create `lib/hooks/useWalletAuth.ts` (30 min)
3. Create `middleware.ts` and update 5 API routes (1-1.5 hours)

### Phase 3: UI Components (5-7 hours)
1. Comments System: 5 components (2-3 hours)
2. Voting UIs: 3 components (1.5 hours)
3. Market Pages: 2 pages (2-3 hours)

**See NEXT_STEPS.md for complete detailed breakdown**

---

## 💡 TIPS & BEST PRACTICES

### For New Contributors
1. Start by reading CURRENT_STATUS.md to understand what exists
2. Check NEXT_STEPS.md to see what phase we're on
3. Don't assume something works - verify with tests
4. Ask questions if documentation is unclear

### For AI Assistants (Claude)
1. Always check CURRENT_STATUS.md before making claims
2. Update NEXT_STEPS.md with timestamps after each task
3. Don't skip phases - they have dependencies
4. Provide evidence when claiming something is complete
5. If files conflict, CURRENT_STATUS.md wins

### For Testing
1. Test locally before claiming complete
2. Write tests as you build (TDD approach)
3. Manual testing is required even with automated tests
4. Document any issues found during testing

---

## 📈 PROGRESS TRACKING

**Check Progress**:
```bash
# Current completion percentage
cat CURRENT_STATUS.md | grep "Overall.*%"

# Current phase
cat NEXT_STEPS.md | grep "CURRENT PHASE" -A 5

# Hours logged
cat NEXT_STEPS.md | grep "Progress Tracker" -A 10
```

**Update Progress**:
1. Mark tasks complete in NEXT_STEPS.md with timestamps
2. Log actual hours in Progress Tracker table
3. Update phase percentage when phase complete
4. Update CURRENT_STATUS.md completion percentage
5. Commit changes with progress update

---

## 🔍 TROUBLESHOOTING

### Database Issues
```bash
# Database doesn't exist
cd packages/frontend
npx prisma migrate deploy

# Database exists but schema is wrong
npx prisma migrate reset  # WARNING: Deletes data

# Prisma Client not generated
npx prisma generate
```

### Build Issues
```bash
# Clear Next.js cache
rm -rf packages/frontend/.next

# Reinstall dependencies
cd packages/frontend
rm -rf node_modules
npm install
```

### Test Issues
```bash
# Playwright browsers not installed
npx playwright install

# Tests failing due to database
DATABASE_URL="file:./test.db" npm test
```

---

## 📝 COMMIT MESSAGE FORMAT

**Standard Format**:
```
<type>: <subject>

<body>

<footer>
```

**Example**:
```
feat: Complete Phase 2 - Authentication

COMPLETED:
- Created wallet-auth.ts with signature verification
- Implemented useWalletAuth hook
- Updated 5 API routes with auth protection
- All unauthorized requests now return 401

RESULTS:
- Authentication working with MetaMask
- Signature verification via viem working
- API routes secured

TIME: 2.5 hours
NEXT: Phase 3 - Build UI Components

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## ⚖️ CONFLICT RESOLUTION

**If documentation files conflict**:

1. **CURRENT_STATUS.md** > CLAUDE.md > NEXT_STEPS.md > README.md
2. Evidence-based claims > assumptions
3. Latest timestamp wins if both evidence-based
4. Ask user if genuinely unclear

**If code vs docs conflicts**:

1. Run actual tests to verify reality
2. Update docs to match verified reality
3. Note the discrepancy for investigation

---

**Last Verified**: 2025-11-09 19:25 CET
**Next Update**: After Phase 1 complete
**Verification Method**: Comprehensive codebase analysis, file inspection, test execution

---

*This file contains accurate, evidence-based guidance. All claims verified through direct inspection of code, test results, and file structure. If something seems wrong, verify with CURRENT_STATUS.md.*
- always use supabase cli instead human interaction, whenever is possible and helpful