# 📝 PHASE 2: ENHANCED METADATA

**Days**: 26-28
**Duration**: 2-3 days
**Risk Level**: 🟢 LOW
**Status**: Ready after Phase 1 Complete

---

## 🎯 PHASE OBJECTIVE

**Primary Goal**: Add enhanced metadata fields to CurveRegistry and MarketTemplateRegistry to support frontend integration and better market discovery.

**Why This Matters**: The registries currently store only basic info. Enhanced metadata enables:
- Better frontend display (descriptions, categories, icons)
- Market filtering and search
- Admin/creator information
- Versioning and compatibility tracking

**What We're Adding**:
1. Enhanced metadata struct in CurveRegistry
2. Enhanced metadata struct in MarketTemplateRegistry
3. Backward compatibility (existing curves/templates still work)

**Success Criteria**:
- ✅ New metadata fields added
- ✅ Existing functionality unchanged (backward compatible)
- ✅ Registry tests updated
- ✅ Frontend can query enhanced metadata
- ✅ Gas costs acceptable (<5% increase)

---

## 📋 TOPICS COVERED

This phase covers:

- **P2-01**: Metadata enhancement rationale
- **P2-02**: CurveRegistry metadata struct design
- **P2-03**: MarketTemplateRegistry metadata struct design
- **P2-04**: Backward compatibility strategy
- **P2-05**: Testing procedures for enhanced registries
- **P2-06**: Validation criteria

---

## 🔍 PREREQUISITES

**Must Be Complete**:
- ✅ Phase 1 complete (libraries created and tested)
- ✅ Current CurveRegistry and MarketTemplateRegistry contracts deployed

**Required Knowledge**:
- Struct design in Solidity
- Registry pattern
- Backward compatibility techniques
- Frontend data requirements

---

## 📐 ARCHITECTURE OVERVIEW

### Current Registry Structures

**CurveRegistry (Current)**:
```solidity
struct Curve {
    address implementation;  // Curve contract address
    bool isActive;           // Whether curve is active
    string name;             // e.g., "LMSR"
    string description;      // Short description
}

mapping(bytes32 => Curve) public curves;
```

**MarketTemplateRegistry (Current)**:
```solidity
struct Template {
    address implementation;  // Template contract address
    bool isActive;           // Whether template is active
    string name;             // Template name
}

mapping(bytes32 => Template) public templates;
```

### Enhanced Structures (Target)

**CurveRegistry (Enhanced)**:
```solidity
struct CurveMetadata {
    // Core info (unchanged)
    address implementation;
    bool isActive;
    string name;
    string description;

    // NEW: Enhanced metadata
    string category;         // "Logarithmic", "Linear", "Polynomial"
    string iconUrl;          // IPFS link to icon
    address creator;         // Who registered this curve
    uint256 version;         // Version number (1, 2, 3...)
    uint256 createdAt;       // Timestamp
    uint256 updatedAt;       // Last update timestamp
    uint256 marketCount;     // How many markets use this curve
    string[] tags;           // ["DeFi", "Prediction", "LMSR"]
}
```

**MarketTemplateRegistry (Enhanced)**:
```solidity
struct TemplateMetadata {
    // Core info (unchanged)
    address implementation;
    bool isActive;
    string name;

    // NEW: Enhanced metadata
    string category;         // "Binary", "Multi-Outcome", "Scalar"
    string iconUrl;          // IPFS link
    address creator;         // Template creator
    uint256 version;         // Version number
    uint256 createdAt;       // Creation timestamp
    uint256 updatedAt;       // Update timestamp
    uint256 marketCount;     // Markets using this template
    bytes customConfig;      // Template-specific config schema
    string[] features;       // ["Pausable", "Upgradeable"]
}
```

---

## 🛠️ IMPLEMENTATION GUIDE

### Step 1: Update CurveRegistry (Day 26)

**File**: `contracts/core/CurveRegistry.sol`

**Changes**:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../interfaces/IAccessControlManager.sol";

contract CurveRegistry {

    // ============ ENHANCED STRUCT ============

    struct CurveMetadata {
        // Core (existing fields - DO NOT REMOVE OR REORDER)
        address implementation;
        bool isActive;
        string name;
        string description;

        // Enhanced metadata (NEW - safe to add at end)
        string category;
        string iconUrl;
        address creator;
        uint256 version;
        uint256 createdAt;
        uint256 updatedAt;
        uint256 marketCount;
        string[] tags;
    }

    // ============ STORAGE ============

    mapping(bytes32 => CurveMetadata) public curves;
    IAccessControlManager public accessControl;

    // ============ EVENTS ============

    event CurveRegistered(bytes32 indexed curveId, address implementation, address creator);
    event CurveMetadataUpdated(bytes32 indexed curveId, uint256 version);
    event CurveMarketCountIncremented(bytes32 indexed curveId, uint256 newCount);

    // ============ REGISTRATION ============

    /**
     * @notice Register new curve with enhanced metadata
     * @param curveId Unique identifier for curve
     * @param implementation Curve contract address
     * @param metadata Enhanced metadata struct
     */
    function registerCurve(
        bytes32 curveId,
        address implementation,
        CurveMetadata memory metadata
    ) external onlyAdmin {
        require(implementation != address(0), "Invalid implementation");
        require(curves[curveId].implementation == address(0), "Curve already exists");

        // Set core fields
        curves[curveId].implementation = implementation;
        curves[curveId].isActive = true;
        curves[curveId].name = metadata.name;
        curves[curveId].description = metadata.description;

        // Set enhanced fields
        curves[curveId].category = metadata.category;
        curves[curveId].iconUrl = metadata.iconUrl;
        curves[curveId].creator = msg.sender;
        curves[curveId].version = 1;
        curves[curveId].createdAt = block.timestamp;
        curves[curveId].updatedAt = block.timestamp;
        curves[curveId].marketCount = 0;
        curves[curveId].tags = metadata.tags;

        emit CurveRegistered(curveId, implementation, msg.sender);
    }

    /**
     * @notice Update curve metadata
     * @param curveId Curve to update
     * @param metadata New metadata
     */
    function updateCurveMetadata(
        bytes32 curveId,
        CurveMetadata memory metadata
    ) external onlyAdmin {
        require(curves[curveId].implementation != address(0), "Curve not found");

        // Update fields (keep implementation and core state)
        curves[curveId].description = metadata.description;
        curves[curveId].category = metadata.category;
        curves[curveId].iconUrl = metadata.iconUrl;
        curves[curveId].version++;
        curves[curveId].updatedAt = block.timestamp;
        curves[curveId].tags = metadata.tags;

        emit CurveMetadataUpdated(curveId, curves[curveId].version);
    }

    /**
     * @notice Increment market count when curve is used
     * @param curveId Curve ID
     * @dev Called by FlexibleMarketFactory
     */
    function incrementMarketCount(bytes32 curveId) external onlyFactory {
        require(curves[curveId].implementation != address(0), "Curve not found");
        curves[curveId].marketCount++;
        emit CurveMarketCountIncremented(curveId, curves[curveId].marketCount);
    }

    // ============ QUERY FUNCTIONS ============

    /**
     * @notice Get complete curve metadata
     * @param curveId Curve ID
     * @return metadata Complete metadata struct
     */
    function getCurveMetadata(bytes32 curveId)
        external
        view
        returns (CurveMetadata memory metadata)
    {
        return curves[curveId];
    }

    /**
     * @notice Get curves by category
     * @param category Category to filter by
     * @return curveIds Array of matching curve IDs
     */
    function getCurvesByCategory(string memory category)
        external
        view
        returns (bytes32[] memory curveIds)
    {
        // Implementation: iterate and filter
        // (Note: gas-intensive, better done off-chain with events)
    }

    // ============ MODIFIERS ============

    modifier onlyAdmin() {
        require(
            accessControl.hasRole(accessControl.ADMIN_ROLE(), msg.sender),
            "Not admin"
        );
        _;
    }

    modifier onlyFactory() {
        require(
            accessControl.hasRole(accessControl.FACTORY_ROLE(), msg.sender),
            "Not factory"
        );
        _;
    }
}
```

---

### Step 2: Update MarketTemplateRegistry (Day 27)

**File**: `contracts/core/MarketTemplateRegistry.sol`

**Changes** (similar pattern to CurveRegistry):

```solidity
struct TemplateMetadata {
    address implementation;
    bool isActive;
    string name;
    // NEW enhanced fields
    string category;
    string iconUrl;
    address creator;
    uint256 version;
    uint256 createdAt;
    uint256 updatedAt;
    uint256 marketCount;
    bytes customConfig;  // Template-specific configuration
    string[] features;   // Feature flags
}

mapping(bytes32 => TemplateMetadata) public templates;

function registerTemplate(
    bytes32 templateId,
    address implementation,
    TemplateMetadata memory metadata
) external onlyAdmin {
    // Similar to CurveRegistry
}

function getTemplateMetadata(bytes32 templateId)
    external
    view
    returns (TemplateMetadata memory)
{
    return templates[templateId];
}
```

---

### Step 3: Update Tests (Day 27-28)

**Test File**: `test/core/CurveRegistry.test.js`

**Add New Test Cases**:

```javascript
describe("CurveRegistry - Enhanced Metadata", function() {

    describe("registerCurve with metadata", function() {
        it("should store all enhanced metadata fields", async function() {
            const metadata = {
                name: "LMSR",
                description: "Logarithmic Market Scoring Rule",
                category: "Logarithmic",
                iconUrl: "ipfs://Qm...",
                tags: ["DeFi", "Prediction"]
            };

            await curveRegistry.registerCurve(curveId, impl, metadata);

            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.name).to.equal("LMSR");
            expect(stored.category).to.equal("Logarithmic");
            expect(stored.iconUrl).to.equal("ipfs://Qm...");
            expect(stored.tags).to.deep.equal(["DeFi", "Prediction"]);
        });

        it("should set creator to msg.sender", async function() {
            await curveRegistry.registerCurve(curveId, impl, metadata);
            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.creator).to.equal(admin.address);
        });

        it("should initialize version to 1", async function() {
            await curveRegistry.registerCurve(curveId, impl, metadata);
            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.version).to.equal(1);
        });

        it("should set createdAt timestamp", async function() {
            const tx = await curveRegistry.registerCurve(curveId, impl, metadata);
            const block = await ethers.provider.getBlock(tx.blockNumber);
            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.createdAt).to.equal(block.timestamp);
        });

        it("should initialize marketCount to 0", async function() {
            await curveRegistry.registerCurve(curveId, impl, metadata);
            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.marketCount).to.equal(0);
        });
    });

    describe("updateCurveMetadata", function() {
        it("should update metadata and increment version", async function() {
            // Register
            await curveRegistry.registerCurve(curveId, impl, initialMetadata);

            // Update
            const updated = { ...initialMetadata, description: "Updated" };
            await curveRegistry.updateCurveMetadata(curveId, updated);

            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.description).to.equal("Updated");
            expect(stored.version).to.equal(2);
        });

        it("should update updatedAt timestamp", async function() {
            await curveRegistry.registerCurve(curveId, impl, initialMetadata);
            const initial = await curveRegistry.getCurveMetadata(curveId);

            // Wait 1 block
            await ethers.provider.send("evm_mine");

            await curveRegistry.updateCurveMetadata(curveId, updatedMetadata);
            const updated = await curveRegistry.getCurveMetadata(curveId);

            expect(updated.updatedAt).to.be.greaterThan(initial.updatedAt);
        });
    });

    describe("incrementMarketCount", function() {
        it("should increment when called by factory", async function() {
            await curveRegistry.registerCurve(curveId, impl, metadata);

            // Grant factory role
            await accessControl.grantRole(FACTORY_ROLE, factory.address);

            // Increment
            await curveRegistry.connect(factory).incrementMarketCount(curveId);

            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.marketCount).to.equal(1);
        });

        it("should revert if not called by factory", async function() {
            await expect(
                curveRegistry.connect(user).incrementMarketCount(curveId)
            ).to.be.revertedWith("Not factory");
        });
    });

    describe("Backward Compatibility", function() {
        it("should work with old registration method", async function() {
            // Simulate old-style registration (minimal metadata)
            const minimalMetadata = {
                name: "Old Curve",
                description: "Legacy",
                category: "",  // Empty enhanced fields
                iconUrl: "",
                tags: []
            };

            await curveRegistry.registerCurve(curveId, impl, minimalMetadata);

            const stored = await curveRegistry.getCurveMetadata(curveId);
            expect(stored.implementation).to.equal(impl);
            expect(stored.isActive).to.be.true;
        });
    });
});
```

**Same pattern for MarketTemplateRegistry tests**.

---

### Step 4: Frontend Integration Example (Day 28)

**Example**: Querying enhanced metadata from frontend

```typescript
// frontend/lib/registry.ts

interface CurveMetadata {
    implementation: string;
    isActive: boolean;
    name: string;
    description: string;
    category: string;
    iconUrl: string;
    creator: string;
    version: number;
    createdAt: number;
    updatedAt: number;
    marketCount: number;
    tags: string[];
}

export async function getCurveMetadata(
    curveId: string,
    curveRegistry: Contract
): Promise<CurveMetadata> {
    const metadata = await curveRegistry.getCurveMetadata(curveId);

    return {
        implementation: metadata.implementation,
        isActive: metadata.isActive,
        name: metadata.name,
        description: metadata.description,
        category: metadata.category,
        iconUrl: metadata.iconUrl,
        creator: metadata.creator,
        version: metadata.version.toNumber(),
        createdAt: metadata.createdAt.toNumber(),
        updatedAt: metadata.updatedAt.toNumber(),
        marketCount: metadata.marketCount.toNumber(),
        tags: metadata.tags
    };
}

// Usage in component
const curveData = await getCurveMetadata(curveId, registry);

// Display
<div className="curve-card">
    <img src={curveData.iconUrl} />
    <h3>{curveData.name}</h3>
    <p>{curveData.description}</p>
    <span className="category">{curveData.category}</span>
    <div className="tags">
        {curveData.tags.map(tag => <span key={tag}>{tag}</span>)}
    </div>
    <small>Used in {curveData.marketCount} markets</small>
</div>
```

---

## ✅ VALIDATION CRITERIA

**Code Quality**:
- ✅ Enhanced structs compile without errors
- ✅ All new fields properly documented
- ✅ No breaking changes to existing functions
- ✅ Gas costs <5% increase

**Testing**:
- ✅ All registry tests updated
- ✅ New metadata tests passing (20+ new tests)
- ✅ Backward compatibility verified
- ✅ Frontend integration tested

**Functionality**:
- ✅ Can register curves/templates with enhanced metadata
- ✅ Can update metadata without breaking existing markets
- ✅ Can query complete metadata from frontend
- ✅ Market count increments correctly

**Documentation**:
- ✅ Struct definitions documented
- ✅ Frontend integration examples added
- ✅ Migration notes for existing registries

---

## 🚨 ROLLBACK PROCEDURE

If Phase 2 fails:

1. Revert registry contracts to previous version
2. Remove enhanced metadata fields
3. Restore original struct definitions
4. Re-run tests to verify baseline state

**Rollback is LOW RISK** because:
- No existing functionality changed
- Only added fields (appended to structs)
- Can remove new fields without affecting existing data

---

## 📊 SUCCESS METRICS

**Definition of Done**:
- Both registries enhanced with metadata ✅
- All validation criteria met ✅
- Tests passing (including new metadata tests) ✅
- Frontend can query enhanced data ✅
- Documentation updated ✅

**Next Phase**: Phase 3 - VersionedRegistry (Days 29-35) 🔴 CRITICAL

---

## 🔗 RELATED DOCUMENTS

- **Previous**: [PHASE_1_INTERNAL_LIBRARIES.md](./PHASE_1_INTERNAL_LIBRARIES.md)
- **Next**: [PHASE_3_VERSIONED_REGISTRY.md](./PHASE_3_VERSIONED_REGISTRY.md)
- **Master Plan**: [MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md](./MINIMAL_MODULAR_MIGRATION_MASTER_PLAN.md)
- **Frontend Guide**: [FRONTEND_INTEGRATION_GUIDE.md](./FRONTEND_INTEGRATION_GUIDE.md) (to be created)

---

**Status**: ✅ Ready to execute after Phase 1 complete
**Last Updated**: November 7, 2025
