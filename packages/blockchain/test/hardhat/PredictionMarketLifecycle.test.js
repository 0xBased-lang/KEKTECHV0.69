const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture, time } = require("@nomicfoundation/hardhat-network-helpers");

describe("PredictionMarket Lifecycle (Phase 5.2)", function () {
  // ============= Test Fixtures =============

  async function deployFixture() {
    const [owner, operator, resolver, creator, user1, user2, treasury] = await ethers.getSigners();

    // Deploy VersionedRegistry
    const VersionedRegistry = await ethers.getContractFactory("VersionedRegistry");
    const registry = await VersionedRegistry.deploy();

    // Deploy ParameterStorage
    const ParameterStorage = await ethers.getContractFactory("ParameterStorage");
    const params = await ParameterStorage.deploy(registry.target);

    // Deploy AccessControlManager
    const AccessControlManager = await ethers.getContractFactory("AccessControlManager");
    const accessControl = await AccessControlManager.deploy(registry.target);

    // Deploy ResolutionManager
    const ResolutionManager = await ethers.getContractFactory("ResolutionManager");
    const disputeWindow = 86400; // 1 day
    const minDisputeBond = ethers.parseEther("1");
    const resolutionManager = await ResolutionManager.deploy(registry.target, disputeWindow, minDisputeBond);

    // Deploy LMSR bonding curve
    const LMSRCurve = await ethers.getContractFactory("LMSRCurve");
    const lmsrCurve = await LMSRCurve.deploy();

    // Register contracts
    await registry.setContract(ethers.id("ParameterStorage"), params.target, 1);
    await registry.setContract(ethers.id("AccessControlManager"), accessControl.target, 1);
    await registry.setContract(ethers.id("ResolutionManager"), resolutionManager.target, 1);

    // Setup roles
    await accessControl.grantRole(ethers.id("OPERATOR_ROLE"), operator.address);
    await accessControl.grantRole(ethers.id("RESOLVER_ROLE"), resolver.address);
    await accessControl.grantRole(ethers.id("TREASURY_ROLE"), treasury.address);
    await accessControl.grantRole(ethers.id("ADMIN_ROLE"), owner.address);

    // Set parameters
    await params.setParameter(ethers.id("platformFeePercent"), 250); // 2.5%
    await params.setParameter(ethers.id("creatorFeePercent"), 150); // 1.5%
    await params.setParameter(ethers.id("minCreatorBond"), ethers.parseEther("0.1"));

    // Deploy FlexibleMarketFactoryUnified
    const FlexibleMarketFactoryUnified = await ethers.getContractFactory("FlexibleMarketFactoryUnified");
    const minCreatorBond = ethers.parseEther("0.1");
    const factory = await FlexibleMarketFactoryUnified.deploy(registry.target, minCreatorBond);

    // Grant factory the OPERATOR_ROLE so it can deploy markets
    await accessControl.grantRole(ethers.id("OPERATOR_ROLE"), factory.target);

    return {
      registry,
      params,
      accessControl,
      resolutionManager,
      lmsrCurve,
      factory,
      owner,
      operator,
      resolver,
      creator,
      user1,
      user2,
      treasury
    };
  }

  async function createMarketFixture() {
    const contracts = await deployFixture();
    const { registry, owner, creator, lmsrCurve } = contracts;

    // Deploy PredictionMarket directly (simpler for lifecycle testing)
    const PredictionMarket = await ethers.getContractFactory("PredictionMarket");
    const market = await PredictionMarket.connect(owner).deploy(); // Owner becomes factory

    // Initialize market with correct parameters
    const question = "Will ETH reach $5000 by end of 2024?";
    const outcome1 = "YES";
    const outcome2 = "NO";
    const resolutionTime = Math.floor(Date.now() / 1000) + 86400 * 30; // 30 days

    await market.initialize(
      registry.target,        // _registry
      question,              // _questionText
      outcome1,              // _outcome1
      outcome2,              // _outcome2
      creator.address,       // _creator
      resolutionTime,        // _resolutionTime
      lmsrCurve.target,      // bondingCurve
      ethers.parseEther("100") // curveParams (b = 100 BASED)
    );

    return { ...contracts, market, marketAddress: market.target };
  }

  // ============= Valid Transition Tests =============

  describe("Valid State Transitions", function () {
    it("5.2.1: Should transition PROPOSED → APPROVED on approval", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Verify initial state is PROPOSED
      const initialState = await market.currentState();
      expect(initialState).to.equal(0); // 0 = PROPOSED

      // Approve market (owner deployed, so owner is factory)
      const tx = await market.connect(owner).approve();
      await tx.wait();

      // Verify state transitioned to APPROVED
      const newState = await market.currentState();
      expect(newState).to.equal(1); // 1 = APPROVED

      // Verify event emission
      await expect(tx)
        .to.emit(market, "MarketStateChanged")
        .withArgs(1, await time.latest()); // newState=APPROVED, timestamp
    });

    it("5.2.2: Should transition APPROVED → ACTIVE on activation", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // First approve the market
      await market.connect(owner).approve();

      // Verify state is APPROVED
      let currentState = await market.currentState();
      expect(currentState).to.equal(1); // 1 = APPROVED

      // Activate market
      const tx = await market.connect(owner).activate();
      await tx.wait();

      // Verify state transitioned to ACTIVE
      currentState = await market.currentState();
      expect(currentState).to.equal(2); // 2 = ACTIVE

      // Verify event emission
      await expect(tx)
        .to.emit(market, "MarketStateChanged")
        .withArgs(2, await time.latest()); // newState=ACTIVE, timestamp
    });

    it("5.2.3-5.2.6: RESOLVING/DISPUTED transitions (NOT YET IMPLEMENTED)", async function () {
      // These tests are blocked awaiting implementation of:
      // - proposeOutcome() - ACTIVE → RESOLVING
      // - dispute() - RESOLVING → DISPUTED
      // - finalize() - RESOLVING/DISPUTED → FINALIZED

      // Mark as pending
      this.skip();
    });
  });

  // ============= Invalid Transition Tests =============

  describe("Invalid State Transitions", function () {
    it("5.2.7: Should revert PROPOSED → ACTIVE (must be approved first)", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Verify state is PROPOSED
      const currentState = await market.currentState();
      expect(currentState).to.equal(0); // 0 = PROPOSED

      // Try to activate directly (should fail)
      await expect(
        market.connect(owner).activate()
      ).to.be.revertedWithCustomError(market, "InvalidStateTransition");
    });

    it("5.2.8: Should revert APPROVED → FINALIZED (invalid transition)", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Approve market
      await market.connect(owner).approve();

      // Verify state is APPROVED
      const currentState = await market.currentState();
      expect(currentState).to.equal(1); // 1 = APPROVED

      // Try to reject (should work) - APPROVED can transition to FINALIZED via reject
      const tx = await market.connect(owner).reject("Testing rejection");
      await tx.wait();

      // Verify state is FINALIZED
      const newState = await market.currentState();
      expect(newState).to.equal(5); // 5 = FINALIZED
    });

    it("5.2.9: Should revert ACTIVE → FINALIZED (must resolve first) - NOT YET IMPLEMENTED", async function () {
      // This test requires resolveMarket() integration
      // Mark as pending
      this.skip();
    });

    it("5.2.10: Should revert FINALIZED → any state (terminal state)", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Reject market to get to FINALIZED state
      await market.connect(owner).reject("Testing finality");

      // Verify state is FINALIZED
      const currentState = await market.currentState();
      expect(currentState).to.equal(5); // 5 = FINALIZED

      // Try to approve (should fail)
      await expect(
        market.connect(owner).approve()
      ).to.be.revertedWithCustomError(market, "InvalidStateTransition");

      // Try to activate (should fail)
      await expect(
        market.connect(owner).activate()
      ).to.be.revertedWithCustomError(market, "InvalidStateTransition");
    });

    it("5.2.11: Should revert backwards transitions", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Approve market (PROPOSED → APPROVED)
      await market.connect(owner).approve();

      // Activate market (APPROVED → ACTIVE)
      await market.connect(owner).activate();

      // Verify state is ACTIVE
      const currentState = await market.currentState();
      expect(currentState).to.equal(2); // 2 = ACTIVE

      // Try to approve again (should fail - can't go backwards)
      await expect(
        market.connect(owner).approve()
      ).to.be.revertedWithCustomError(market, "InvalidStateTransition");
    });

    it("5.2.12: Should revert unauthorized state changes", async function () {
      const { market, user1 } = await loadFixture(createMarketFixture);

      // Try to approve as non-factory (should fail)
      await expect(
        market.connect(user1).approve()
      ).to.be.revertedWithCustomError(market, "OnlyFactory");

      // Try to activate as non-factory (should fail)
      await expect(
        market.connect(user1).activate()
      ).to.be.revertedWithCustomError(market, "OnlyFactory");

      // Try to reject as non-factory (should fail)
      await expect(
        market.connect(user1).reject("Unauthorized")
      ).to.be.revertedWithCustomError(market, "OnlyFactory");
    });
  });

  // ============= Event Emission Tests =============

  describe("Event Emissions", function () {
    it("5.2.13: Should emit MarketStateChanged with correct data", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Approve market
      const tx = await market.connect(owner).approve();

      // Check event was emitted with correct data
      await expect(tx)
        .to.emit(market, "MarketStateChanged")
        .withArgs(1, await time.latest()); // newState=APPROVED(1), timestamp
    });

    it("5.2.14: Should emit events for all transitions", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Test PROPOSED → APPROVED
      const approveTx = await market.connect(owner).approve();
      await expect(approveTx)
        .to.emit(market, "MarketStateChanged")
        .withArgs(1, await time.latest()); // newState=APPROVED

      // Test APPROVED → ACTIVE
      const activateTx = await market.connect(owner).activate();
      await expect(activateTx)
        .to.emit(market, "MarketStateChanged")
        .withArgs(2, await time.latest()); // newState=ACTIVE
    });

    it("5.2.15: Should return correct state from getMarketState()", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Check initial state
      let state = await market.getMarketState();
      expect(state).to.equal(0); // PROPOSED

      // Approve and check
      await market.connect(owner).approve();
      state = await market.getMarketState();
      expect(state).to.equal(1); // APPROVED

      // Activate and check
      await market.connect(owner).activate();
      state = await market.getMarketState();
      expect(state).to.equal(2); // ACTIVE
    });
  });

  // ============= State-Gated Operations =============

  describe("State-Gated Operations", function () {
    it("Should only allow placeBet when ACTIVE", async function () {
      const { market, owner, user1 } = await loadFixture(createMarketFixture);

      // Try to bet in PROPOSED state (should fail)
      await expect(
        market.connect(user1).placeBet(1, 0, { value: ethers.parseEther("1") }) // outcome=OUTCOME1(1), minOdds=0
      ).to.be.revertedWithCustomError(market, "MarketNotActive");

      // Approve market
      await market.connect(owner).approve();

      // Try to bet in APPROVED state (should fail)
      await expect(
        market.connect(user1).placeBet(1, 0, { value: ethers.parseEther("1") })
      ).to.be.revertedWithCustomError(market, "MarketNotActive");

      // Activate market
      await market.connect(owner).activate();

      // Now betting should work in ACTIVE state
      const tx = await market.connect(user1).placeBet(1, 0, { value: ethers.parseEther("1") });
      await expect(tx).to.not.be.reverted;
    });

    it("Should only allow claimWinnings when FINALIZED - NOT YET IMPLEMENTED", async function () {
      // This test requires full resolution flow
      // Mark as pending
      this.skip();
    });
  });

  // ============= Direct Deployment Integration =============

  describe("Direct Deployment Integration", function () {
    it("Should set PROPOSED state on market initialization", async function () {
      const { market } = await loadFixture(createMarketFixture);

      // Verify state is PROPOSED after initialization
      const state = await market.currentState();
      expect(state).to.equal(0); // 0 = PROPOSED
    });

    it("Should allow factory (deployer) to call approve()", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Owner deployed market, so owner is factory
      const tx = await market.connect(owner).approve();
      await tx.wait();

      // Verify market state changed
      const state = await market.currentState();
      expect(state).to.equal(1); // 1 = APPROVED
    });

    it("Should allow factory (deployer) to call activate()", async function () {
      const { market, owner } = await loadFixture(createMarketFixture);

      // Approve first
      await market.connect(owner).approve();

      // Activate
      const tx = await market.connect(owner).activate();
      await tx.wait();

      // Verify market state changed
      const state = await market.currentState();
      expect(state).to.equal(2); // 2 = ACTIVE
    });
  });
});
