#!/usr/bin/env node

/**
 * Quick utility to inspect a market's parameters (state, min/max bet, resolution time).
 *
 * Usage: node scripts/check-market-parameters.js <marketAddress>
 */

const { ethers } = require('ethers');
const PredictionMarketArtifact = require('../lib/contracts/abis/PredictionMarket.json');
const ParameterStorageArtifact = require('../lib/contracts/abis/ParameterStorage.json');

async function main() {
  const marketAddress = process.argv[2];
  if (!marketAddress) {
    console.error('Usage: node scripts/check-market-parameters.js <marketAddress>');
    process.exit(1);
  }

  const rpcUrl =
    process.env.NEXT_PUBLIC_RPC_URL ||
    process.env.RPC_URL ||
    'https://mainnet.basedaibridge.com/rpc/';

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const market = new ethers.Contract(
    marketAddress,
    PredictionMarketArtifact.abi,
    provider
  );

  const registryAddress = await market.registry();
  const registry = new ethers.Contract(
    registryAddress,
    ['function getContract(bytes32 id) view returns (address)'],
    provider
  );

  const parameterStorageAddress = await registry.getContract(ethers.id('ParameterStorage'));
  const parameterStorage = new ethers.Contract(
    parameterStorageAddress,
    ParameterStorageArtifact.abi,
    provider
  );

  const [state, resolutionTime, minBet, maxBet] = await Promise.all([
    market.getMarketState(),
    market.resolutionTime(),
    parameterStorage.getParameter(ethers.id('minimumBet')).catch(() => null),
    parameterStorage.getParameter(ethers.id('maximumBet')).catch(() => null),
  ]);

  console.log('📊 Market Parameters');
  console.log('---------------------');
  console.log(`Market:            ${marketAddress}`);
  console.log(`Registry:          ${registryAddress}`);
  console.log(`ParameterStorage:  ${parameterStorageAddress}`);
  console.log(`State:             ${state.toString()}`);
  console.log(`Resolution Time:   ${new Date(Number(resolutionTime) * 1000).toISOString()}`);
  console.log(
    `Minimum Bet:       ${
      minBet && minBet > 0n ? `${ethers.formatEther(minBet)} BASED` : 'not set'
    }`
  );
  console.log(
    `Maximum Bet:       ${
      maxBet && maxBet > 0n ? `${ethers.formatEther(maxBet)} BASED` : 'not set / unlimited'
    }`
  );
}

main().catch((error) => {
  console.error('Failed to load market parameters:', error);
  process.exit(1);
});
