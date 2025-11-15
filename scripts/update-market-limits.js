#!/usr/bin/env node

/**
 * Update ParameterStorage min/max bet limits.
 *
 * Usage:
 *   ADMIN_PRIVATE_KEY=0x... node scripts/update-market-limits.js --max 500
 *   ADMIN_PRIVATE_KEY=0x... node scripts/update-market-limits.js --min 0.05 --max 250
 *
 * Notes:
 * - Requires the admin key that controls ParameterStorage on BasedAI.
 * - Values are interpreted in BASED (not wei) and converted to wei internally.
 */

const { ethers } = require('ethers');
const abi = require('../lib/contracts/abis/ParameterStorage.json').abi;
const { CONTRACT_ADDRESSES } = require('../lib/contracts/addresses');

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const value = args[i + 1];
    if (!value) break;
    if (key === '--min') result.min = value;
    if (key === '--max') result.max = value;
  }
  return result;
}

async function main() {
  const { min, max } = parseArgs();
  if (!min && !max) {
    console.error('Usage: node scripts/update-market-limits.js --min <BASED> --max <BASED>');
    process.exit(1);
  }

  const privateKey = process.env.ADMIN_PRIVATE_KEY;
  if (!privateKey) {
    console.error('ADMIN_PRIVATE_KEY env var is required');
    process.exit(1);
  }

  const rpcUrl =
    process.env.RPC_URL ||
    process.env.NEXT_PUBLIC_RPC_URL ||
    'https://mainnet.basedaibridge.com/rpc/';

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  const parameterStorageAddress = CONTRACT_ADDRESSES.ParameterStorage;
  const parameterStorage = new ethers.Contract(parameterStorageAddress, abi, wallet);

  console.log('Updating ParameterStorage at', parameterStorageAddress);
  if (min) {
    const parsedMin = ethers.parseEther(min);
    console.log(` → Setting minimumBet = ${min} BASED`);
    const tx = await parameterStorage.setParameter(ethers.id('minimumBet'), parsedMin);
    await tx.wait();
    console.log('   ✓ min bet updated (tx:', tx.hash, ')');
  }

  if (max) {
    const parsedMax = ethers.parseEther(max);
    console.log(` → Setting maximumBet = ${max} BASED`);
    const tx = await parameterStorage.setParameter(ethers.id('maximumBet'), parsedMax);
    await tx.wait();
    console.log('   ✓ max bet updated (tx:', tx.hash, ')');
  }
}

main().catch((error) => {
  console.error('Failed to update ParameterStorage:', error);
  process.exit(1);
});
