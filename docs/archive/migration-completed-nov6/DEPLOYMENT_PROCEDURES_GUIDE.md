# 🚀 DEPLOYMENT PROCEDURES GUIDE

**Purpose**: Step-by-step deployment procedures for "Minimal Modular" architecture
**Audience**: DevOps, deployment team, admins
**Status**: Reference for Phase 7 and mainnet launch

---

## 🎯 DEPLOYMENT STRATEGY

**Multi-Stage Approach**:
1. Local testing (Hardhat network)
2. Fork testing (Mainnet simulation)
3. Sepolia testnet (Public validation)
4. BasedAI testnet (Chain-specific testing)
5. BasedAI mainnet (Production)

**Safety Principles**:
- Test on fork before any real network
- Verify all contracts on block explorers
- Use multisig for ownership
- Have rollback procedures ready

---

## 📋 DEPLOYMENT SEQUENCE

### 9 Contracts in Correct Order

```
1. AccessControlManager       (No dependencies)
2. VersionedRegistry          (No dependencies)
3. ParameterStorage           (Needs AccessControlManager)
4. CurveRegistry              (Needs AccessControlManager)
5. MarketTemplateRegistry     (Needs AccessControlManager)
6. CurveMarketLogic (Library) (No dependencies)
7. TemplateMarketLogic (Lib)  (No dependencies)
8. FlexibleMarketFactory      (Needs Registry + Libraries)
9. PredictionMarket (Template)(For cloning)
10. ResolutionManager         (Needs Registry)
11. RewardDistributor         (Needs Registry)
```

---

## 🛠️ DEPLOYMENT SCRIPT

### Complete Deployment Script

```javascript
// scripts/deploy/deploy-complete-system.js
const { ethers } = require("hardhat");

async function main() {
    console.log("🚀 Deploying Minimal Modular System\n");

    const [deployer] = await ethers.getSigners();
    console.log("Deployer:", deployer.address);

    // 1. Deploy AccessControlManager
    console.log("\n1️⃣  Deploying AccessControlManager...");
    const AccessControl = await ethers.getContractFactory("AccessControlManager");
    const accessControl = await AccessControl.deploy();
    await accessControl.deployed();
    console.log("✅ AccessControlManager:", accessControl.address);

    // 2. Deploy VersionedRegistry
    console.log("\n2️⃣  Deploying VersionedRegistry...");
    const Registry = await ethers.getContractFactory("VersionedRegistry");
    const registry = await Registry.deploy();
    await registry.deployed();
    console.log("✅ VersionedRegistry:", registry.address);

    // 3. Deploy ParameterStorage
    console.log("\n3️⃣  Deploying ParameterStorage...");
    const ParamStorage = await ethers.getContractFactory("ParameterStorage");
    const paramStorage = await ParamStorage.deploy(accessControl.address);
    await paramStorage.deployed();
    console.log("✅ ParameterStorage:", paramStorage.address);

    // 4. Deploy CurveRegistry
    console.log("\n4️⃣  Deploying CurveRegistry...");
    const CurveReg = await ethers.getContractFactory("CurveRegistry");
    const curveRegistry = await CurveReg.deploy(accessControl.address);
    await curveRegistry.deployed();
    console.log("✅ CurveRegistry:", curveRegistry.address);

    // 5. Deploy MarketTemplateRegistry
    console.log("\n5️⃣  Deploying MarketTemplateRegistry...");
    const TemplateReg = await ethers.getContractFactory("MarketTemplateRegistry");
    const templateRegistry = await TemplateReg.deploy(accessControl.address);
    await templateRegistry.deployed();
    console.log("✅ MarketTemplateRegistry:", templateRegistry.address);

    // 6. Deploy Libraries
    console.log("\n6️⃣  Deploying Libraries...");
    const CurveLogic = await ethers.getContractFactory("CurveMarketLogic");
    const curveLogic = await CurveLogic.deploy();
    await curveLogic.deployed();
    console.log("✅ CurveMarketLogic:", curveLogic.address);

    const TemplateLogic = await ethers.getContractFactory("TemplateMarketLogic");
    const templateLogic = await TemplateLogic.deploy();
    await templateLogic.deployed();
    console.log("✅ TemplateMarketLogic:", templateLogic.address);

    // 7. Deploy FlexibleMarketFactory (with libraries)
    console.log("\n7️⃣  Deploying FlexibleMarketFactory...");
    const Factory = await ethers.getContractFactory("FlexibleMarketFactory", {
        libraries: {
            CurveMarketLogic: curveLogic.address,
            TemplateMarketLogic: templateLogic.address
        }
    });
    const factory = await Factory.deploy(registry.address, accessControl.address);
    await factory.deployed();
    console.log("✅ FlexibleMarketFactory:", factory.address);

    // 8. Deploy PredictionMarket Template
    console.log("\n8️⃣  Deploying PredictionMarket Template...");
    const Market = await ethers.getContractFactory("PredictionMarket");
    const marketTemplate = await Market.deploy();
    await marketTemplate.deployed();
    console.log("✅ PredictionMarket Template:", marketTemplate.address);

    // 9. Deploy ResolutionManager
    console.log("\n9️⃣  Deploying ResolutionManager...");
    const Resolution = await ethers.getContractFactory("ResolutionManager");
    const resolutionManager = await Resolution.deploy(
        registry.address,
        accessControl.address
    );
    await resolutionManager.deployed();
    console.log("✅ ResolutionManager:", resolutionManager.address);

    // 10. Deploy RewardDistributor
    console.log("\n🔟 Deploying RewardDistributor...");
    const Rewards = await ethers.getContractFactory("RewardDistributor");
    const rewardDistributor = await Rewards.deploy(
        registry.address,
        accessControl.address
    );
    await rewardDistributor.deployed();
    console.log("✅ RewardDistributor:", rewardDistributor.address);

    // Register all modules in VersionedRegistry
    console.log("\n📝 Registering modules in VersionedRegistry...");

    await registry.registerModule(
        ethers.utils.id("AccessControlManager"),
        accessControl.address,
        1 // version
    );

    await registry.registerModule(
        ethers.utils.id("ParameterStorage"),
        paramStorage.address,
        1
    );

    await registry.registerModule(
        ethers.utils.id("CurveRegistry"),
        curveRegistry.address,
        1
    );

    await registry.registerModule(
        ethers.utils.id("MarketTemplateRegistry"),
        templateRegistry.address,
        1
    );

    await registry.registerModule(
        ethers.utils.id("FlexibleMarketFactory"),
        factory.address,
        1
    );

    await registry.registerModule(
        ethers.utils.id("PredictionMarketTemplate"),
        marketTemplate.address,
        1
    );

    await registry.registerModule(
        ethers.utils.id("ResolutionManager"),
        resolutionManager.address,
        1
    );

    await registry.registerModule(
        ethers.utils.id("RewardDistributor"),
        rewardDistributor.address,
        1
    );

    console.log("\n✅ All modules registered!");

    // Initialize ParameterStorage
    console.log("\n⚙️  Initializing ParameterStorage...");
    await paramStorage.setMinInitialLiquidity(ethers.utils.parseEther("1"));
    await paramStorage.setPlatformFeePercentage(200); // 2%
    await paramStorage.setApprovalLikeThreshold(70);
    await paramStorage.setDisputeAgreementThreshold(75);
    console.log("✅ ParameterStorage initialized!");

    // Setup access control roles
    console.log("\n🔐 Setting up access control...");
    const FACTORY_ROLE = ethers.utils.id("FACTORY_ROLE");
    const BACKEND_ROLE = ethers.utils.id("BACKEND_ROLE");

    await accessControl.grantRole(FACTORY_ROLE, factory.address);
    console.log("✅ Factory role granted");

    // Save deployment addresses
    const deployment = {
        network: network.name,
        timestamp: new Date().toISOString(),
        deployer: deployer.address,
        contracts: {
            AccessControlManager: accessControl.address,
            VersionedRegistry: registry.address,
            ParameterStorage: paramStorage.address,
            CurveRegistry: curveRegistry.address,
            MarketTemplateRegistry: templateRegistry.address,
            CurveMarketLogic: curveLogic.address,
            TemplateMarketLogic: templateLogic.address,
            FlexibleMarketFactory: factory.address,
            PredictionMarketTemplate: marketTemplate.address,
            ResolutionManager: resolutionManager.address,
            RewardDistributor: rewardDistributor.address
        }
    };

    const fs = require("fs");
    const filename = `deployments/deployment-${network.name}-${Date.now()}.json`;
    fs.writeFileSync(filename, JSON.stringify(deployment, null, 2));
    console.log(`\n💾 Deployment saved to ${filename}`);

    console.log("\n🎉 DEPLOYMENT COMPLETE!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
```

---

## 🔍 VERIFICATION SCRIPT

```javascript
// scripts/verify-deployment.js
async function verifyDeployment(deployment) {
    console.log("🔍 Verifying Deployment\n");

    const { contracts } = deployment;

    // 1. Check all contracts deployed
    for (const [name, address] of Object.entries(contracts)) {
        const code = await ethers.provider.getCode(address);
        if (code === "0x") {
            throw new Error(`${name} not deployed at ${address}`);
        }
        console.log(`✅ ${name} deployed`);
    }

    // 2. Verify registry has all modules
    const registry = await ethers.getContractAt(
        "VersionedRegistry",
        contracts.VersionedRegistry
    );

    const modules = [
        "AccessControlManager",
        "ParameterStorage",
        "CurveRegistry",
        "MarketTemplateRegistry",
        "FlexibleMarketFactory",
        "PredictionMarketTemplate",
        "ResolutionManager",
        "RewardDistributor"
    ];

    for (const moduleName of modules) {
        const moduleId = ethers.utils.id(moduleName);
        const address = await registry.getModule(moduleId);
        if (address === ethers.constants.AddressZero) {
            throw new Error(`Module ${moduleName} not registered`);
        }
        console.log(`✅ ${moduleName} registered`);
    }

    // 3. Verify parameter storage initialized
    const paramStorage = await ethers.getContractAt(
        "ParameterStorage",
        contracts.ParameterStorage
    );

    const minLiquidity = await paramStorage.minInitialLiquidity();
    if (minLiquidity.eq(0)) {
        throw new Error("ParameterStorage not initialized");
    }
    console.log(`✅ ParameterStorage initialized`);

    // 4. Verify access control configured
    const accessControl = await ethers.getContractAt(
        "AccessControlManager",
        contracts.AccessControlManager
    );

    const FACTORY_ROLE = ethers.utils.id("FACTORY_ROLE");
    const hasRole = await accessControl.hasRole(
        FACTORY_ROLE,
        contracts.FlexibleMarketFactory
    );
    if (!hasRole) {
        throw new Error("Factory role not granted");
    }
    console.log(`✅ Access control configured`);

    console.log("\n🎉 VERIFICATION COMPLETE - All checks passed!");
}
```

---

## 🔐 OWNERSHIP TRANSFER

### Transfer to Multisig (Critical!)

```javascript
// scripts/transfer-ownership.js
async function transferToMultisig(deployment, multisigAddress) {
    console.log("🔐 Transferring Ownership to Multisig\n");
    console.log("Multisig Address:", multisigAddress);

    const { contracts } = deployment;

    // Transfer AccessControlManager admin role
    const accessControl = await ethers.getContractAt(
        "AccessControlManager",
        contracts.AccessControlManager
    );

    const ADMIN_ROLE = await accessControl.ADMIN_ROLE();
    await accessControl.grantRole(ADMIN_ROLE, multisigAddress);
    console.log("✅ Multisig granted admin role");

    // Renounce deployer admin role
    await accessControl.renounceRole(ADMIN_ROLE, deployer.address);
    console.log("✅ Deployer renounced admin role");

    // Transfer VersionedRegistry ownership
    const registry = await ethers.getContractAt(
        "VersionedRegistry",
        contracts.VersionedRegistry
    );

    await registry.transferOwnership(multisigAddress);
    console.log("✅ Registry ownership transferred");

    console.log("\n⚠️  CRITICAL: Verify multisig can execute admin functions!");
}
```

---

## 📊 POST-DEPLOYMENT CHECKLIST

- [ ] All 11 contracts deployed
- [ ] All modules registered in VersionedRegistry
- [ ] ParameterStorage initialized with correct values
- [ ] Access control roles assigned
- [ ] Factory role granted to FlexibleMarketFactory
- [ ] Backend role ready for assignment
- [ ] Ownership transferred to multisig
- [ ] All contracts verified on block explorer
- [ ] Deployment addresses saved
- [ ] Verification script passed
- [ ] Test market created successfully
- [ ] Test approval flow working
- [ ] Monitoring systems active

---

## 🔗 RELATED DOCUMENTS

- **Phase 7**: [PHASE_7_FULL_INTEGRATION.md](./PHASE_7_FULL_INTEGRATION.md)
- **Parameters**: [PARAMETER_FLEXIBILITY_GUIDE.md](./PARAMETER_FLEXIBILITY_GUIDE.md)
- **Security**: [SECURITY_GOVERNANCE_GUIDE.md](./SECURITY_GOVERNANCE_GUIDE.md)

---

**Last Updated**: November 7, 2025
