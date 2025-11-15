/**
 * Debug the curve lookup process step by step
 */

const { ethers } = require("hardhat");

const VERSIONED_REGISTRY = "0x67F8F023f6cFAe44353d797D6e0B157F2579301A";
const MARKET_FACTORY = "0x3eaF643482Fe35d13DB812946E14F5345eb60d62";
const EXPECTED_CURVE_REGISTRY = "0x5AcC0f00c0675975a2c4A54aBcC7826Bd229Ca70";

async function main() {
  console.log("\n🔍 Debugging Curve Lookup Process\n");
  console.log("=".repeat(70));

  const [deployer] = await ethers.getSigners();

  // Step 1: Check VersionedRegistry
  console.log("\n1️⃣  Checking VersionedRegistry...");
  const versionedRegistry = await ethers.getContractAt("VersionedRegistry", VERSIONED_REGISTRY);
  const curveRegistryAddress = await versionedRegistry.getContract(ethers.id("CurveRegistry"));
  console.log("   CurveRegistry from VersionedRegistry:", curveRegistryAddress);
  console.log("   Expected:", EXPECTED_CURVE_REGISTRY);
  console.log("   Match?", curveRegistryAddress.toLowerCase() === EXPECTED_CURVE_REGISTRY.toLowerCase());

  if (curveRegistryAddress === ethers.ZeroAddress) {
    console.log("\n❌ PROBLEM: CurveRegistry not registered!");
    return;
  }

  // Step 2: Check CurveRegistry
  console.log("\n2️⃣  Checking CurveRegistry...");
  const curveRegistry = await ethers.getContractAt("CurveRegistry", curveRegistryAddress);

  try {
    const lmsrAddress = await curveRegistry.getCurveByName("LMSRCurve");
    console.log("   LMSRCurve address:", lmsrAddress);

    if (lmsrAddress === ethers.ZeroAddress) {
      console.log("\n❌ PROBLEM: LMSRCurve returns zero address!");
      return;
    }

    // Check if curve is active
    const [isRegistered, isActive] = await curveRegistry.isCurveActive(lmsrAddress);
    console.log("   Is registered?", isRegistered);
    console.log("   Is active?", isActive);

    if (!isActive) {
      console.log("\n❌ PROBLEM: LMSRCurve is registered but NOT ACTIVE!");
      console.log("   Need to activate it with: curveRegistry.setCurveStatus(address, true)");
      return;
    }

    // Check contract code
    const code = await ethers.provider.getCode(lmsrAddress);
    console.log("   Contract code size:", code.length, "bytes");
    console.log("   Has contract?", code !== "0x");

  } catch (error) {
    console.log("\n❌ ERROR querying CurveRegistry:", error.message);
    return;
  }

  // Step 3: Check MarketFactory's view of the curve
  console.log("\n3️⃣  Checking what MarketFactory sees...");
  const factory = await ethers.getContractAt("FlexibleMarketFactoryUnified", MARKET_FACTORY);

  // We need to call a view function that uses _getCurveAddressForType
  // Since it's internal, we can't call it directly, but we can see what happens during gas estimation

  const config = {
    question: "Test",
    description: "Test",
    resolutionTime: Math.floor(Date.now() / 1000) + 86400,
    creatorBond: ethers.parseEther("0.1"),
    category: ethers.id("Test"),
    outcome1: "Yes",
    outcome2: "No"
  };

  try {
    // This will fail but might give us insight
    await factory.createMarketWithCurve.staticCall(
      config,
      0, // LMSR
      7500,
      { value: ethers.parseEther("0.1") }
    );
    console.log("   ✅ Static call succeeded - curve lookup works!");
  } catch (error) {
    console.log("   ❌ Static call failed:", error.message);

    if (error.message.includes("InvalidCurveAddress")) {
      console.log("\n💡 The curve address validation is failing in CurveMarketLogic");
      console.log("   This could mean:");
      console.log("   1. The curve is not active in the registry");
      console.log("   2. The curve contract doesn't implement required interface");
      console.log("   3. There's a mismatch between registered address and deployed contract");
    }
  }

  console.log("\n" + "=".repeat(70));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
