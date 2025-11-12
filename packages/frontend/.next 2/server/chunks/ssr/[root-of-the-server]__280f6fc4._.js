module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/chains.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "basedChain",
    ()=>basedChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/viem/_esm/utils/chain/defineChain.js [app-ssr] (ecmascript)");
;
const basedChain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 32323,
    name: 'BasedAI',
    nativeCurrency: {
        name: 'BASED',
        symbol: 'BASED',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                ("TURBOPACK compile-time value", "https://rpc.basedai.network") || 'https://rpc.basedai.network',
                'https://mainnet.basedaibridge.com/rpc/'
            ]
        },
        public: {
            http: [
                ("TURBOPACK compile-time value", "https://rpc.basedai.network") || 'https://rpc.basedai.network',
                'https://mainnet.basedaibridge.com/rpc/'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BasedAI Explorer',
            url: 'https://explorer.bf1337.org'
        }
    },
    testnet: false
});
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/wagmi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkWagmiConfig",
    ()=>checkWagmiConfig,
    "config",
    ()=>config
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@wagmi/core/dist/esm/utils/cookie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@wagmi/core/dist/esm/createConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@wagmi/core/dist/esm/createStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/viem/_esm/chains/definitions/mainnet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/chains.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$esm$2f$walletConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@wagmi/connectors/dist/esm/walletConnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$esm$2f$coinbaseWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@wagmi/connectors/dist/esm/coinbaseWallet.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Fixed Wagmi Configuration
 *
 * Resolves all wallet connection issues:
 * - Uses correct Reown Project ID
 * - Handles domain allowlist dynamically
 * - Prevents provider conflicts
 * - Adds robust error handling
 */ // NEW PROJECT ID with correct domains configured
const REOWN_PROJECT_ID = 'dc5e6470d109f31f1d271b149fed3d98';
// Get project ID with fallback and validation
const projectId = (process.env.NEXT_PUBLIC_REOWN_PROJECT_ID?.trim() || REOWN_PROJECT_ID).trim();
// Validate Project ID format
if (!projectId || projectId.length !== 32) {
    console.error('Invalid Reown Project ID format. Using hardcoded fallback.');
}
// Dynamic URL detection for proper domain handling
const getAppUrl = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Try environment variable first
    if (process.env.NEXT_PUBLIC_APP_URL) {
        return process.env.NEXT_PUBLIC_APP_URL;
    }
    // Check Vercel URL
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }
    // Fallback to main domain
    return 'https://kektech-nextjs.vercel.app';
};
const appUrl = getAppUrl();
// Enhanced metadata with multiple URL formats
const metadata = {
    name: 'KEKTECH NFT Collection',
    description: 'Mint KEKTECH NFTs on BasedAI Network',
    url: appUrl,
    icons: [
        `${appUrl}/images/logo.png`,
        'https://kektech-nextjs.vercel.app/images/logo.png'
    ]
};
// Safe connector initialization with error handling
const createConnectors = ()=>{
    const connectors = [];
    try {
        // Injected wallets (MetaMask, etc.) with enhanced config
        connectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["injected"])({
            shimDisconnect: true,
            target: {
                id: 'metaMask',
                name: 'MetaMask',
                provider: (window)=>window?.ethereum?.isMetaMask ? window.ethereum : undefined
            }
        }));
    } catch (error) {
        console.warn('Could not initialize injected connector:', error);
    }
    try {
        // WalletConnect with proper configuration
        connectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$esm$2f$walletConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["walletConnect"])({
            projectId: REOWN_PROJECT_ID,
            metadata,
            showQrModal: true,
            qrModalOptions: {
                themeMode: 'dark'
            }
        }));
    } catch (error) {
        console.warn('Could not initialize WalletConnect:', error);
    }
    try {
        // Coinbase Wallet
        connectors.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$2f$dist$2f$esm$2f$coinbaseWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["coinbaseWallet"])({
            appName: metadata.name,
            appLogoUrl: metadata.icons[0],
            darkMode: true
        }));
    } catch (error) {
        console.warn('Could not initialize Coinbase Wallet:', error);
    }
    return connectors;
};
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfig"])({
    chains: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["basedChain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainnet"]
    ],
    connectors: createConnectors(),
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStorage"])({
        storage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cookieStorage"]
    }),
    ssr: true,
    syncConnectedChain: true,
    transports: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["basedChain"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(),
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainnet"].id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])()
    }
});
const checkWagmiConfig = ()=>{
    console.log('Wagmi Config Check:', {
        projectId: REOWN_PROJECT_ID,
        appUrl: getAppUrl(),
        chains: config.chains,
        connectors: config.connectors.map((c)=>({
                id: c.id,
                name: c.name,
                type: c.type
            }))
    });
};
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/web3-provider-fix.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web3 Provider Fix
 *
 * Resolves conflicts between multiple wallet extensions trying to inject
 * the ethereum provider into window.ethereum
 */ __turbopack_context__.s([
    "initializeEthereumProvider",
    ()=>initializeEthereumProvider,
    "waitForProvider",
    ()=>waitForProvider
]);
function initializeEthereumProvider() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function waitForProvider(timeout = 3000) {
    const start = Date.now();
    while(Date.now() - start < timeout){
        if (window.ethereum || window.__SAFE_ETHEREUM_PROVIDER) {
            return true;
        }
        await new Promise((resolve)=>setTimeout(resolve, 100));
    }
    return false;
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/wagmi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$web3$2d$provider$2d$fix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/web3-provider-fix.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Providers({ children, initialState }) {
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initialize ethereum provider safely
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initialize = async ()=>{
            try {
                // Initialize provider without conflicts
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$web3$2d$provider$2d$fix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeEthereumProvider"])();
                // Wait for provider to be available
                const hasProvider = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$web3$2d$provider$2d$fix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitForProvider"])(5000);
                if (!hasProvider) {
                    console.warn('No ethereum provider detected after 5 seconds');
                }
                // Debug logging in development
                if ("TURBOPACK compile-time truthy", 1) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkWagmiConfig"])();
                }
                setIsReady(true);
            } catch (err) {
                console.error('Failed to initialize Web3 providers:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                // Still set ready to allow app to function without Web3
                setIsReady(true);
            }
        };
        // Only run on client side
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            setIsReady(true); // SSR is ready immediately
        }
    }, []);
    // Create query client
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: 60 * 1000,
                    gcTime: 5 * 60 * 1000,
                    retry: 3,
                    retryDelay: (attemptIndex)=>Math.min(1000 * 2 ** attemptIndex, 30000)
                }
            }
        }));
    // Show loading state while initializing
    if (!isReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3fb8bd] mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Initializing Web3..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    // Show error state if critical error occurred
    if (error && ("TURBOPACK compile-time value", "development") === 'development') {
        console.error('Web3 Initialization Error:', error);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"],
        initialState: initialState,
        reconnectOnMount: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: [
                error && ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-0 left-0 right-0 bg-red-900/20 border-b border-red-500 p-2 text-center text-xs text-red-300",
                    children: [
                        "Web3 initialization warning: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/providers.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__280f6fc4._.js.map