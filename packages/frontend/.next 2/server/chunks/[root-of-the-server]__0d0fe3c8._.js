module.exports = [
"[project]/Desktop/kektechbmad100/packages/frontend/.next-internal/server/app/api/rankings/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * KEKTECH Smart Contract Configuration
 *
 * CRITICAL: These values are verified from production
 * DO NOT modify without consulting documentation
 */ // === Contract Addresses ===
// KEKTECH Main NFT Collection (ERC-721)
__turbopack_context__.s([
    "CHAIN_ID",
    ()=>CHAIN_ID,
    "EXPLORER_API_URL",
    ()=>EXPLORER_API_URL,
    "EXPLORER_URL",
    ()=>EXPLORER_URL,
    "IMAGE_API_URL",
    ()=>IMAGE_API_URL,
    "KEKTECH_CONTRACT_ADDRESS",
    ()=>KEKTECH_CONTRACT_ADDRESS,
    "KEKTECH_VOUCHERS_ADDRESS",
    ()=>KEKTECH_VOUCHERS_ADDRESS,
    "MAX_MINT_PER_TX",
    ()=>MAX_MINT_PER_TX,
    "MAX_SUPPLY",
    ()=>MAX_SUPPLY,
    "METADATA_API_URL",
    ()=>METADATA_API_URL,
    "RANKING_API_URL",
    ()=>RANKING_API_URL,
    "RPC_URL",
    ()=>RPC_URL,
    "TECH_TOKEN_ADDRESS",
    ()=>TECH_TOKEN_ADDRESS
]);
const KEKTECH_CONTRACT_ADDRESS = '0x40B6184b901334C0A88f528c1A0a1de7a77490f1';
const TECH_TOKEN_ADDRESS = '0x62E8D022CAf673906e62904f7BB5ae467082b546';
const KEKTECH_VOUCHERS_ADDRESS = '0x7FEF981beE047227f848891c6C9F9dad11767a48';
const CHAIN_ID = 32323// BasedAI Chain
;
const MAX_SUPPLY = 4200;
const MAX_MINT_PER_TX = 50;
const METADATA_API_URL = 'https://kektech.xyz/api/metadata';
const RANKING_API_URL = 'https://api.kektech.xyz';
const IMAGE_API_URL = 'https://kektech.xyz/api/image';
const EXPLORER_URL = 'https://explorer.bf1337.org';
const EXPLORER_API_URL = 'https://explorer.bf1337.org/api/v2';
const RPC_URL = 'https://mainnet.basedaibridge.com/rpc/';
}),
"[project]/Desktop/kektechbmad100/packages/frontend/app/api/rankings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "revalidate",
    ()=>revalidate,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-route] (ecmascript)");
;
;
async function GET() {
    const maxRetries = 3;
    const retryDelay = 1000;
    const timeout = 10000;
    let lastError = null;
    // Retry logic with exponential backoff
    for(let attempt = 1; attempt <= maxRetries; attempt++){
        try {
            // Create abort controller for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), timeout);
            // Fetch from external API (server-side, no CORS)
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RANKING_API_URL"]}/rankings`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                cache: 'no-cache',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            // Check response status
            if (!response.ok) {
                throw new Error(`External API returned ${response.status}: ${response.statusText}`);
            }
            // Parse and validate response
            const data = await response.json();
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid API response: expected object');
            }
            if (!Array.isArray(data.nfts)) {
                throw new Error('Invalid API response: expected nfts array');
            }
            // Success! Return data with proper headers
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
                status: 200,
                headers: {
                    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            lastError = error instanceof Error ? error : new Error(String(error));
            // Log warning (visible in Vercel logs)
            console.warn(`⚠️  Rankings API proxy attempt ${attempt}/${maxRetries} failed:`, lastError.message);
            // If not last attempt, wait before retry (exponential backoff)
            if (attempt < maxRetries) {
                const delay = retryDelay * Math.pow(2, attempt - 1);
                await new Promise((resolve)=>setTimeout(resolve, delay));
            }
        }
    }
    // All retries failed - return error response
    console.error('❌ Rankings API proxy failed after all retries:', lastError);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Failed to fetch rankings',
        message: lastError?.message || 'Unknown error',
        retries: maxRetries
    }, {
        status: 503,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
const runtime = 'nodejs';
const revalidate = 60;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d0fe3c8._.js.map