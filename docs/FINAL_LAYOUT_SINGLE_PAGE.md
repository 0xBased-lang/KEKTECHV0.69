# KEKTECH TRADING TERMINAL - FINAL SINGLE-PAGE LAYOUT

**Created**: 2025-11-14
**Confirmed with**: User requirements
**Design**: ONE page, filter-based, smart content mixing

---

## 🎯 USER REQUIREMENTS

✅ **ONE main page** (no tabs to different pages)
✅ **Filter system** to switch between Trading/Proposals/Resolutions
✅ **Smart mixing** in left sidebar (hot markets + nearly graduating proposals)
✅ **BIG center section** (main focus, larger than left/right)
✅ **Left sidebar**: Hot items (markets + proposals close to approval)
✅ **Right sidebar**: Social (comments, activity feed)

---

## 📐 FINAL LAYOUT (SINGLE PAGE)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ HEADER (h-16, sticky)                                                      │
│ 🎲 KEKTECH | 🔍 Search | [Filters ▼] | 👤 Wallet: 0x123... | 🌐 BasedAI   │
└────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ SMART FILTER BAR (h-14, bg-terminal-bg-secondary)                         │
│ [🔥 All] [💰 Trading] [📊 Proposals] [⚖️ Resolutions] |                   │
│ Category: [All ▼] | Sort: [Volume ▼] | Time: [24h ▼]                      │
└────────────────────────────────────────────────────────────────────────────┘

┌────────────┬───────────────────────────────────────────┬──────────────────┐
│ LEFT       │ CENTER (BIG MAIN AREA)                    │ RIGHT            │
│ 288px      │ flex-1 (grows, min 720px)                 │ 320px            │
│            │                                           │                  │
│ 🔥 HOT     │ ⚡ MAIN CONTENT                           │ 💬 SOCIAL        │
│            │                                           │                  │
│ ┌────────┐ │ ┌─────────────────────────────────────┐  │ ┌──────────────┐ │
│ │MARKET  │ │ │ FEATURED (Large Hero Card)          │  │ │💬 Top Comment│ │
│ │Bitcoin │ │ │                                     │  │ │"Great point" │ │
│ │>$100k? │ │ │ Will Bitcoin reach $100k by EOY?    │  │ │❤️ 234  5m    │ │
│ │        │ │ │                                     │  │ └──────────────┘ │
│ │65% 35% │ │ │ [━━━━━━━━━━━Mini Chart━━━━━━━━━━━] │  │                  │
│ │$120K   │ │ │                                     │  │ ┌──────────────┐ │
│ │🔥 Hot  │ │ │ YES 65%  ████████░░  NO 35%         │  │ │@alice bet    │ │
│ └────────┘ │ │                                     │  │ │$500 YES      │ │
│            │ │ Volume: $450K | Liquidity: $180K    │  │ │12m ago       │ │
│ ┌────────┐ │ │                                     │  │ └──────────────┘ │
│ │PROPOSAL│ │ │ [PLACE BET] [VIEW DETAILS]          │  │                  │
│ │Add ETH │ │ └─────────────────────────────────────┘  │ ┌──────────────┐ │
│ │Markets │ │                                           │ │🔔 New market │ │
│ │        │ │ ┌─────────────┬─────────────┬─────────┐  │ │created       │ │
│ │87% YES │ │ │ [CARD]      │ [CARD]      │ [CARD]  │  │ │"Trump 2024?" │ │
│ │Close to│ │ │ Market #2   │ Market #3   │ Market  │  │ │15m ago       │ │
│ │approval│ │ │             │             │         │  │ └──────────────┘ │
│ └────────┘ │ │ 42% 58%     │ 51% 49%     │ 33% 67% │  │                  │
│            │ │ $45K vol    │ $89K vol    │ $234K   │  │ 📊 STATS         │
│ ┌────────┐ │ └─────────────┴─────────────┴─────────┘  │ ────────────     │
│ │MARKET  │ │                                           │ 🔥 Volume        │
│ │ETH>$5k?│ │ ┌─────────────┬─────────────┬─────────┐  │ $1.2M (24h)      │
│ │        │ │ │ [CARD]      │ [CARD]      │ [CARD]  │  │                  │
│ │42% 58% │ │ │ Market #5   │ Market #6   │ Market  │  │ 📈 Markets       │
│ │$23K    │ │ │             │             │         │  │ 42 Active        │
│ └────────┘ │ │ ...         │ ...         │ ...     │  │                  │
│            │ └─────────────┴─────────────┴─────────┘  │ 👥 Traders       │
│ ┌────────┐ │                                           │ 1,234 (24h)      │
│ │PROPOSAL│ │ [Load More Markets...]                   │                  │
│ │Change  │ │                                           │ 🏆 TOP TRADER    │
│ │Rules   │ │                                           │ @whale           │
│ │        │ │                                           │ +$45K (30d)      │
│ │65% YES │ │                                           │                  │
│ │Pending │ │                                           │ [Leaderboard]    │
│ └────────┘ │                                           │                  │
│            │                                           │                  │
│ [10 more]  │                                           │                  │
└────────────┴───────────────────────────────────────────┴──────────────────┘

┌────────────────────────────────────────────────────────────────────────────┐
│ BOTTOM SOCIAL BAR (h-10, optional)                                        │
│ 🐦 Twitter Tracker | 🔔 Notifications (3) | 📡 Live Updates               │
└────────────────────────────────────────────────────────────────────────────┘

COLUMN WIDTHS:
- Left: 288px (fixed)
- Center: flex-1 (grows, min 720px, typically ~800-1200px)
- Right: 320px (fixed)
- Total: ~1328px minimum (laptop friendly)
- Desktop: Expands to fill screen (center grows)
```

---

## 🎛️ SMART FILTER SYSTEM (Instead of Tabs)

### Filter Bar Actions
```tsx
// Filter buttons change WHAT content shows, not which page
<div className="flex gap-2">
  <FilterButton active={filter === 'all'}>
    🔥 All (234) {/* Shows everything */}
  </FilterButton>

  <FilterButton active={filter === 'trading'}>
    💰 Trading (156) {/* Only active markets */}
  </FilterButton>

  <FilterButton active={filter === 'proposals'}>
    📊 Proposals (42) {/* Only proposals */}
  </FilterButton>

  <FilterButton active={filter === 'resolutions'}>
    ⚖️ Resolutions (8) {/* Only resolving markets */}
  </FilterButton>
</div>
```

### Filter Effects on Layout

**Filter: 🔥 ALL (Default)**
- LEFT: Hot markets + nearly graduating proposals (mixed)
- CENTER: All active content (markets, proposals, resolutions)
- RIGHT: All social activity

**Filter: 💰 TRADING**
- LEFT: Hot markets only (top 10 by volume)
- CENTER: Active markets only (featured + grid)
- RIGHT: Recent bet activity, market comments

**Filter: 📊 PROPOSALS**
- LEFT: Nearly graduating proposals (close to approval threshold)
- CENTER: All proposals (voting interface)
- RIGHT: Proposal votes, discussion

**Filter: ⚖️ RESOLUTIONS**
- LEFT: Disputed markets (needs review)
- CENTER: Markets in resolution (evidence + voting)
- RIGHT: Resolution votes, admin actions

---

## 🔥 SMART MIXING IN LEFT SIDEBAR

### Algorithm for "Hot" Content
```tsx
// Combine markets + proposals intelligently
const hotItems = [
  ...markets
    .filter(m => m.volume24h > 50000) // High volume markets
    .map(m => ({ type: 'market', ...m, priority: m.volume24h })),

  ...proposals
    .filter(p => p.yesVotes / p.totalVotes > 0.85) // Nearly graduating (>85% YES)
    .map(p => ({ type: 'proposal', ...p, priority: p.yesVotes }))
]
  .sort((a, b) => b.priority - a.priority) // Sort by priority
  .slice(0, 10) // Top 10 items

// Render mixed list
{hotItems.map(item =>
  item.type === 'market'
    ? <MarketCard compact {...item} badge="🔥 Hot" />
    : <ProposalCard compact {...item} badge="📊 Close to approval" />
)}
```

**Left Sidebar Content**:
```
┌──────────────────┐
│ 🔥 HOT & TRENDING│
├──────────────────┤
│ [MARKET]         │ ← Bitcoin >$100k (high volume)
│ 🔥 Hot           │
│ 65% YES          │
│ $120K volume     │
├──────────────────┤
│ [PROPOSAL]       │ ← Add ETH markets (87% YES)
│ 📊 Close to pass │
│ 87% YES          │
│ 234 votes        │
├──────────────────┤
│ [MARKET]         │ ← ETH >$5k (trending)
│ 🔥 Trending      │
│ 42% YES          │
│ $45K volume      │
├──────────────────┤
│ [PROPOSAL]       │ ← Change rules (91% YES)
│ 📊 About to pass │
│ 91% YES          │
│ 156 votes        │
└──────────────────┘
```

**Badge System**:
- 🔥 Hot (markets with high volume)
- 📈 Trending (markets with recent activity spike)
- 📊 Close to approval (proposals >85% YES)
- ⏰ Closing soon (markets ending in <24h)
- 🎯 Consensus (proposals >95% YES)
- ⚠️ Disputed (resolutions with low agreement)

---

## 📏 COLUMN SIZE RATIOS

### Desktop (≥1440px)
```
Left    Center    Right
288px : 1024px  : 320px  (18% : 64% : 20%)
```

### Large Desktop (≥1920px)
```
Left    Center    Right
320px : 1280px  : 320px  (17% : 68% : 17%)
```

### Laptop (1200-1439px)
```
Left    Center    Right
256px : 720px   : 280px  (20% : 58% : 22%)
```

**Center is always the dominant column!**

---

## 🎴 CARD SIZES

### Featured Card (Center, Top)
- **Width**: Full center column width
- **Height**: 320px
- **Has**: Large image, full chart, betting interface
- **Prominence**: Hero treatment

### Grid Cards (Center, Below Featured)
- **Layout**: 3-column grid (`grid-cols-3` on desktop)
- **Width**: ~33% of center column each
- **Height**: 240px
- **Has**: Medium image, mini chart, key metrics

### Sidebar Cards (Left/Right)
- **Width**: Full sidebar width (288px or 320px)
- **Height**: 160px
- **Has**: Small icon, compact metrics, badge
- **Compact**: No chart, essential info only

---

## 🎨 VISUAL HIERARCHY

### Emphasis Levels
1. **Featured Card** (Center top) - Largest, full attention
2. **Grid Cards** (Center) - Medium, scannable
3. **Sidebar Hot Items** (Left) - Compact, quick glance
4. **Social Feed** (Right) - Compact, context

### Typography Scale
```css
/* Featured Card */
Title: text-2xl font-bold
Metrics: text-lg font-semibold

/* Grid Cards */
Title: text-base font-semibold
Metrics: text-sm font-medium

/* Sidebar Cards */
Title: text-sm font-medium
Metrics: text-xs font-normal
```

---

## 🔄 REAL-TIME UPDATES (WebSocket)

### Update Behavior
```tsx
// Market odds update
ws.onmessage = (event) => {
  const { type, marketAddress, yesOdds, noOdds } = JSON.parse(event.data)

  if (type === 'ODDS_UPDATE') {
    // Update in all 3 places:
    // 1. Left sidebar (if in hot list)
    // 2. Center grid (if visible)
    // 3. Featured card (if selected)

    setMarkets(prev => prev.map(m =>
      m.address === marketAddress
        ? { ...m, yesOdds, noOdds }
        : m
    ))
  }

  if (type === 'NEW_PROPOSAL') {
    // Check if nearly graduating
    if (data.yesPercentage > 85) {
      // Add to left sidebar hot list
      setHotItems(prev => [...prev, { type: 'proposal', ...data }])
    }
  }
}
```

### Visual Feedback
```tsx
// Pulse animation on update
<Card className={wasJustUpdated ? 'animate-pulse-once' : ''}>

// Color flash on odds change
<span className={oddsIncreased ? 'text-green-500 animate-flash' : ''}>
  {yesOdds}%
</span>
```

---

## 📱 RESPONSIVE BEHAVIOR

### Desktop (≥1200px)
```
[288px Left] [━━━━━━ BIG Center ━━━━━━] [320px Right]
     ↓                ↓                      ↓
   Hot Mix      Featured + Grid          Social
```

### Tablet (768-1199px)
```
[Drawer Left] [━━━━━━ BIG Center ━━━━━━]
                   ↓
              Featured + Grid
              [Social Below ▼]
```
- Left becomes hamburger menu drawer
- Right moves below center as collapsible section

### Mobile (<768px)
```
[━━━━━━━━━ Single Column ━━━━━━━━━]
           ↓
      Featured Card
      [Grid Cards ▼]
      [Hot Items ▼]
      [Social ▼]

Bottom Nav: [Markets] [Hot] [Social]
```
- Everything stacks vertically
- Bottom navigation for quick access

---

## 🧩 COMPONENT STRUCTURE

```tsx
<TerminalLayout>
  <TerminalHeader />

  <SmartFilterBar
    active={filter}
    onChange={setFilter}
    counts={{ all: 234, trading: 156, proposals: 42, resolutions: 8 }}
  />

  <ThreeColumnLayout>
    {/* LEFT: Hot & Trending */}
    <LeftSidebar width="288px">
      <SectionHeader title="🔥 Hot & Trending" count={hotItems.length} />
      {hotItems.map(item =>
        item.type === 'market'
          ? <MarketCard key={item.address} compact {...item} />
          : <ProposalCard key={item.id} compact {...item} />
      )}
      <ShowMoreButton />
    </LeftSidebar>

    {/* CENTER: Main Content (BIG) */}
    <CenterColumn flex="1" minWidth="720px">
      {/* Featured Hero Card */}
      <FeaturedCard market={featuredMarket} />

      {/* Grid of Markets/Proposals */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {filteredContent.map(item => (
          <MarketCard key={item.address} medium {...item} />
        ))}
      </div>

      <LoadMoreButton />
    </CenterColumn>

    {/* RIGHT: Social & Activity */}
    <RightSidebar width="320px">
      <SectionHeader title="💬 Social Feed" />
      <CommentCard[] />
      <ActivityCard[] />

      <SectionHeader title="📊 Stats" className="mt-6" />
      <StatsWidget />

      <SectionHeader title="🏆 Leaderboard" className="mt-6" />
      <LeaderboardWidget />
    </RightSidebar>
  </ThreeColumnLayout>

  <BottomBar />
</TerminalLayout>
```

---

## 🎯 IMPLEMENTATION STEPS

### Step 1: Layout Structure (2 days)
```bash
components/terminal/
├── TerminalLayout.tsx          # Main 3-column layout
├── TerminalHeader.tsx          # Logo, search, wallet
├── SmartFilterBar.tsx          # Filter buttons (All/Trading/Proposals/Resolutions)
├── LeftSidebar.tsx            # Hot & trending mixed content
├── CenterColumn.tsx           # Featured + grid (BIG)
└── RightSidebar.tsx           # Social feed
```

### Step 2: Smart Mixing Logic (1 day)
```tsx
// lib/utils/hotContentMixer.ts
export function mixHotContent(markets, proposals, resolutions) {
  // Combine and prioritize
  // Return top 10 items
}
```

### Step 3: Cards (3 days)
```bash
components/cards/
├── FeaturedCard.tsx           # Large hero card
├── MarketCard.tsx             # 3 sizes (compact/medium/large)
├── ProposalCard.tsx           # Compact + medium
└── ResolutionCard.tsx         # Compact + medium
```

### Step 4: Filter Logic (1 day)
```tsx
// Hook to filter content based on active filter
const { filteredContent } = useFilteredContent(filter)
```

### Step 5: Real-Time (2 days)
```tsx
// WebSocket integration
useTerminalWebSocket(onUpdate)
```

---

## ✅ SUCCESS CRITERIA

- [ ] ONE page, NO tabs to different pages
- [ ] Filter bar changes content dynamically
- [ ] Left sidebar mixes markets + proposals intelligently
- [ ] Center column is BIGGER than left/right (60%+ width)
- [ ] Featured card at top (hero treatment)
- [ ] Grid below featured card (3 columns on desktop)
- [ ] Right sidebar shows social feed
- [ ] Real-time WebSocket updates work
- [ ] Responsive on mobile (single column)
- [ ] Load time < 2s

---

**This is your FINAL single-page layout with smart filtering and mixing!** 🚀

Ready to implement?
