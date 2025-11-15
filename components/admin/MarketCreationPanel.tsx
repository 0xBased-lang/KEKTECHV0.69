/**
 * Admin Market Creation Panel
 * Wraps the CreateMarketForm with guidance + verification checklist.
 */
'use client';

import { useState } from 'react';
import { CreateMarketForm } from '@/components/kektech/create-market/CreateMarketForm';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, FilePlus2, TerminalSquare } from 'lucide-react';
import Link from 'next/link';
import { DEPLOYMENT_INFO } from '@/lib/contracts/addresses';

export function MarketCreationPanel() {
  const [latestTx, setLatestTx] = useState<{ txHash: string; marketAddress?: string } | null>(null);
  const explorerBaseUrl = DEPLOYMENT_INFO.explorerUrl || 'https://explorer.bf1337.org';

  const checklist = [
    'Write a clear binary question (YES/NO).',
    'Select an appropriate category and resolution time.',
    'Pick a bonding curve + parameter (LMSR works for most markets).',
    'Set the creator bond (you’ll get it back when the market resolves).',
  ];

  const verificationSteps = [
    'Run scripts/check-market-parameters.js <address>',
    'Confirm curve + limits via getCurveInfo()',
    'Place a 0.01 BASED smoke-test bet',
    'Use scripts/test-api-endpoints.sh to ensure APIs respond',
  ];

  return (
    <div className="space-y-6">
      <Alert>
        <AlertDescription>
          Use this panel to deploy new prediction markets with a proper bonding curve. All values
          are sent directly to the FlexibleMarketFactory contract—double-check everything before you
          confirm the transaction.
        </AlertDescription>
      </Alert>

      {latestTx && (
        <Alert className="bg-gray-900 border-green-500/40 text-green-200">
          <AlertDescription className="flex flex-col gap-2 text-sm">
            <span className="flex flex-col">
              <span className="text-gray-300">Latest deployment transaction:</span>
              <Link
                href={`${explorerBaseUrl}/tx/${latestTx.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {latestTx.txHash.slice(0, 8)}...{latestTx.txHash.slice(-6)}
              </Link>
            </span>
            {latestTx.marketAddress && (
              <span className="flex flex-col">
                <span className="text-gray-300">Market contract:</span>
                <Link
                  href={`${explorerBaseUrl}/address/${latestTx.marketAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {latestTx.marketAddress.slice(0, 8)}...{latestTx.marketAddress.slice(-6)}
                </Link>
              </span>
            )}
            <span className="text-xs text-green-300">
              Inspect the receipt for the full deployment details.
            </span>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <FilePlus2 className="h-6 w-6 text-[#3fb8bd]" />
            <h2 className="text-2xl font-semibold">Deploy a New Market</h2>
          </div>
          <CreateMarketForm onSuccess={(result) => setLatestTx(result)} />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-[#3fb8bd]" />
              <h3 className="text-xl font-semibold">Pre-flight Checklist</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <TerminalSquare className="h-6 w-6 text-[#3fb8bd]" />
              <h3 className="text-xl font-semibold">Verify After Deployment</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              {verificationSteps.map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              Need the commands? Check <code>scripts/check-market-parameters.js</code> and{' '}
              <code>scripts/test-api-endpoints.sh</code> in the repo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
