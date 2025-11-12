(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConnectButton",
    ()=>ConnectButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ConnectButton() {
    _s();
    const { address, isConnected, isConnecting, isReconnecting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { connectors, connect, error: connectError, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastError, setLastError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if Web3 is properly initialized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectButton.useEffect": ()=>{
            const checkInit = {
                "ConnectButton.useEffect.checkInit": ()=>{
                    const hasProvider = !!window.ethereum || !!window.__SAFE_ETHEREUM_PROVIDER;
                    setIsInitialized(hasProvider);
                    if (!hasProvider) {
                        console.warn('No ethereum provider detected');
                    }
                }
            }["ConnectButton.useEffect.checkInit"];
            // Check immediately and after a delay
            checkInit();
            const timer = setTimeout(checkInit, 1000);
            return ({
                "ConnectButton.useEffect": ()=>clearTimeout(timer)
            })["ConnectButton.useEffect"];
        }
    }["ConnectButton.useEffect"], []);
    // Handle connection errors
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConnectButton.useEffect": ()=>{
            if (connectError) {
                let errorMessage = connectError.message;
                // Parse specific error types
                if (errorMessage.includes('not found on Allowlist')) {
                    errorMessage = 'Domain not configured. Please try MetaMask or wait for domain approval.';
                } else if (errorMessage.includes('User rejected')) {
                    errorMessage = 'Connection cancelled by user';
                } else if (errorMessage.includes('No provider')) {
                    errorMessage = 'No wallet detected. Please install MetaMask.';
                }
                setLastError(errorMessage);
                // Clear error after 5 seconds
                const timer = setTimeout({
                    "ConnectButton.useEffect.timer": ()=>setLastError(null)
                }["ConnectButton.useEffect.timer"], 5000);
                return ({
                    "ConnectButton.useEffect": ()=>clearTimeout(timer)
                })["ConnectButton.useEffect"];
            }
        }
    }["ConnectButton.useEffect"], [
        connectError
    ]);
    // Handle connect button click
    const handleConnect = async (connectorId)=>{
        try {
            setLastError(null);
            let connector = connectorId ? connectors.find((c)=>c.id === connectorId) : null;
            // Prioritize MetaMask if no specific connector selected
            if (!connector) {
                // Try to find MetaMask first
                connector = connectors.find((c)=>c.id === 'metaMask' || c.id === 'injected' || c.name && c.name.toLowerCase().includes('metamask'));
                // Fallback to any available connector
                if (!connector) {
                    connector = connectors.find((c)=>c.ready) || connectors[0];
                }
            }
            if (connector) {
                await connect({
                    connector
                });
                setShowDropdown(false);
            } else {
                setLastError('No wallet available. Please install MetaMask or another Web3 wallet.');
            }
        } catch (error) {
            console.error('Connection error:', error);
            setLastError(error instanceof Error ? error.message : 'Failed to connect');
        }
    };
    // If connected, show account info
    if (isConnected && address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setShowDropdown(!showDropdown),
                    className: "flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3fb8bd] to-[#2a8185] px-4 py-2 text-white hover:from-[#359ea2] hover:to-[#226669] transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-fredoka font-medium",
                        children: [
                            "✓ ",
                            address.slice(0, 6),
                            "...",
                            address.slice(-4)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-700 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            disconnect();
                            setShowDropdown(false);
                        },
                        className: "w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700 rounded-lg transition-colors",
                        children: "Disconnect"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this);
    }
    // Loading states
    if (isConnecting || isReconnecting || isPending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            disabled: true,
            className: "flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-gray-400 cursor-not-allowed",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block animate-spin",
                    children: "⟳"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-fredoka font-medium",
                    children: "Connecting..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this);
    }
    // Not connected - show connect options
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowDropdown(!showDropdown),
                className: "flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#3fb8bd] to-[#2a8185] px-4 py-2 text-white hover:from-[#359ea2] hover:to-[#226669] transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🔗"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-fredoka font-medium",
                        children: "Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            lastError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-full mt-2 right-0 w-72 p-3 bg-red-900/90 rounded-lg text-sm text-red-100 flex items-start gap-2 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-shrink-0 mt-0.5",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold",
                                children: "Connection Error"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs mt-1",
                                children: lastError
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-64 rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-700 z-50 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 px-2 py-1",
                                children: "Choose wallet"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleConnect('injected'),
                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-gray-700 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center",
                                        children: "🦊"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "MetaMask"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Recommended"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleConnect('walletConnect'),
                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-gray-700 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center",
                                        children: "🔗"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "WalletConnect"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Scan with wallet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleConnect('coinbaseWallet'),
                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-gray-700 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center",
                                        children: "🪙"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "Coinbase Wallet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Connect with Coinbase"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleConnect(),
                                className: "w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-gray-700 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center",
                                        children: "⚡"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "Auto-detect"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Use any available wallet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    !isInitialized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-700 p-3 bg-yellow-900/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-yellow-400",
                            children: "⚠️ No wallet detected. Please install MetaMask extension."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                            lineNumber: 229,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(ConnectButton, "3Ya3PpCO9WJ4V87zOEtjufq9FMw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisconnect"]
    ];
});
_c = ConnectButton;
var _c;
__turbopack_context__.k.register(_c, "ConnectButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetworkSwitcher",
    ()=>NetworkSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/chains.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NetworkSwitcher(param) {
    let { inline = false, showWhenDisconnected = false } = param;
    var _chains_find;
    _s();
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const currentChainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])();
    const { chains, switchChain, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isWrongNetwork = isConnected && currentChainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id;
    // Debug logging
    console.log('🌐 NetworkSwitcher Debug:', {
        isConnected,
        currentChainId,
        basedChainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id,
        isWrongNetwork,
        inline,
        showWhenDisconnected
    });
    // Auto-hide error after 5 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetworkSwitcher.useEffect": ()=>{
            if (error) {
                setShowError(true);
                const timer = setTimeout({
                    "NetworkSwitcher.useEffect.timer": ()=>setShowError(false)
                }["NetworkSwitcher.useEffect.timer"], 5000);
                return ({
                    "NetworkSwitcher.useEffect": ()=>clearTimeout(timer)
                })["NetworkSwitcher.useEffect"];
            }
        }
    }["NetworkSwitcher.useEffect"], [
        error
    ]);
    // Don't show if not connected (unless explicitly requested)
    if (!isConnected && !showWhenDisconnected) {
        return null;
    }
    // Don't show if on correct network
    if (!isWrongNetwork) {
        return null;
    }
    const handleSwitchNetwork = async ()=>{
        try {
            // Try to switch to BasedAI chain
            await switchChain({
                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
            });
        } catch (err) {
            var _error_message;
            const error = err;
            console.error('Failed to switch network:', error);
            // If network doesn't exist in wallet, try to add it
            if ((error === null || error === void 0 ? void 0 : error.code) === 4902 || (error === null || error === void 0 ? void 0 : (_error_message = error.message) === null || _error_message === void 0 ? void 0 : _error_message.includes('Unrecognized chain'))) {
                try {
                    await addBasedAINetwork();
                } catch (addError) {
                    console.error('Failed to add network:', addError);
                }
            }
        }
    };
    // Add BasedAI network to MetaMask
    const addBasedAINetwork = async ()=>{
        if ("object" === 'undefined' || !window.ethereum) {
            alert('Please install MetaMask to add BasedAI network');
            return;
        }
        try {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: "0x".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id.toString(16)),
                        chainName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].name,
                        nativeCurrency: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].nativeCurrency,
                        rpcUrls: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].rpcUrls.default.http[0]
                        ],
                        blockExplorerUrls: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].blockExplorers.default.url
                        ]
                    }
                ]
            });
        } catch (error) {
            const err = error;
            throw new Error("Failed to add network: ".concat(err.message || 'Unknown error'));
        }
    };
    const currentChainName = ((_chains_find = chains.find((c)=>c.id === currentChainId)) === null || _chains_find === void 0 ? void 0 : _chains_find.name) || 'Unknown Network';
    // Inline mode (for navbar)
    if (inline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleSwitchNetwork,
            disabled: isPending,
            className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3fb8bd]/10 to-[#3fb8bd]/5 border border-[#3fb8bd]/40 rounded-lg hover:from-[#3fb8bd]/20 hover:to-[#3fb8bd]/10 hover:border-[#3fb8bd]/60 hover:shadow-lg hover:shadow-[#3fb8bd]/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-fredoka",
            title: "Switch from ".concat(currentChainName, " to BasedAI Network"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                    className: "w-4 h-4 text-[#3fb8bd]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-[#3fb8bd]",
                    children: isPending ? 'Switching...' : 'Switch Network'
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    // Full banner mode (for main content)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/50 rounded-xl p-6 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-8 h-8 text-yellow-500 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-yellow-500 mb-2",
                                    children: "Wrong Network Detected"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300",
                                    children: [
                                        "You're currently connected to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-white",
                                            children: currentChainName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 140,
                                            columnNumber: 50
                                        }, this),
                                        ".",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        "Please switch to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-cyan-400",
                                            children: "BasedAI Network"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 142,
                                            columnNumber: 32
                                        }, this),
                                        " to mint NFTs."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSwitchNetwork,
                                    disabled: isPending,
                                    className: "flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        isPending ? 'Switching Network...' : 'Switch to BasedAI'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: addBasedAINetwork,
                                    className: "px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium rounded-lg transition-all",
                                    children: "Add BasedAI Network to MetaMask"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        showError && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-red-500/10 border border-red-500/50 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Error:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    error.message
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Network Details:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-1 text-xs text-gray-500 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• Chain ID: ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id,
                                                " (0x",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id.toString(16),
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• RPC: ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].rpcUrls.default.http[0]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• Symbol: ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].nativeCurrency.symbol
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(NetworkSwitcher, "G3BDFY0+sVziNaxg28mC6ZOpyH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"]
    ];
});
_c = NetworkSwitcher;
var _c;
__turbopack_context__.k.register(_c, "NetworkSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$ConnectButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/web3/ConnectButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$NetworkSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/web3/NetworkSwitcher.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMobileMenu = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const closeMobileMenu = ()=>{
        setMobileMenuOpen(false);
    };
    // Lock body scroll when mobile menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (mobileMenuOpen) {
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
            // Cleanup on unmount
            return ({
                "Header.useEffect": ()=>{
                    document.body.style.overflow = '';
                    document.body.style.position = '';
                    document.body.style.width = '';
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        mobileMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-[#3fb8bd]/20 bg-[#000000] backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center hover:opacity-80 transition py-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/kektech-cropped.gif?v=2",
                            alt: "𝕂Ǝ𝕂丅ᵉ匚🅷 Home",
                            width: 400,
                            height: 100,
                            className: "h-auto w-44 sm:w-52 md:w-60 lg:w-64 -mt-1",
                            style: {
                                objectFit: 'contain'
                            },
                            unoptimized: true,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center space-x-4 md:flex lg:space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/marketplace",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat(pathname === '/marketplace' ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/markets",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat((pathname === null || pathname === void 0 ? void 0 : pathname.startsWith('/markets')) ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "Markets 🎯"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat(pathname === '/dashboard' ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gallery",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat(pathname === '/gallery' ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rewards",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat(pathname === '/rewards' ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "Rewards"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#roadmap",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat(pathname === '/' && "object" !== 'undefined' && window.location.hash === '#roadmap' ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#about",
                                className: "font-fredoka text-sm font-medium transition-colors hover:text-[#3fb8bd] ".concat(pathname === '/' && "object" !== 'undefined' && window.location.hash === '#about' ? 'text-[#3fb8bd] font-bold' : 'text-gray-300'),
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$NetworkSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkSwitcher"], {
                                        inline: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$ConnectButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMobileMenu,
                                className: "md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-[#3fb8bd] transition-colors",
                                "aria-label": "Toggle mobile menu",
                                "aria-expanded": mobileMenuOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6 h-0.5 bg-[#3fb8bd] transition-all duration-300 ".concat(mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6 h-0.5 bg-[#3fb8bd] my-1 transition-all duration-300 ".concat(mobileMenuOpen ? 'opacity-0' : '')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6 h-0.5 bg-[#3fb8bd] transition-all duration-300 ".concat(mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '')
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] md:hidden",
                onClick: closeMobileMenu,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 right-0 h-full w-80 max-w-[85vw] border-l border-[#3fb8bd]/20 z-[110] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ".concat(mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'),
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.98)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-800",
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.98)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 mr-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$ConnectButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeMobileMenu,
                                type: "button",
                                className: "w-12 h-12 flex items-center justify-center rounded-lg bg-gray-900 border-2 border-gray-800 hover:border-[#3fb8bd] hover:bg-gray-800 active:scale-95 transition-all relative z-[120] touch-manipulation flex-shrink-0",
                                "aria-label": "Close menu",
                                style: {
                                    pointerEvents: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#3fb8bd] text-3xl font-bold leading-none select-none",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 flex flex-col px-5 py-5 space-y-4 overflow-y-auto overscroll-contain",
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.98)',
                            WebkitOverflowScrolling: 'touch',
                            minHeight: '400px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/marketplace",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat(pathname === '/marketplace' ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "Marketplace"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/markets",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat((pathname === null || pathname === void 0 ? void 0 : pathname.startsWith('/markets')) ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "Markets 🎯"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat(pathname === '/dashboard' ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gallery",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat(pathname === '/gallery' ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/rewards",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat(pathname === '/rewards' ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "Rewards"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#roadmap",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat(pathname === '/' && "object" !== 'undefined' && window.location.hash === '#roadmap' ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "Roadmap"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#about",
                                onClick: closeMobileMenu,
                                className: "font-fredoka text-lg font-medium py-4 px-5 rounded-lg transition-colors touch-manipulation ".concat(pathname === '/' && "object" !== 'undefined' && window.location.hash === '#about' ? 'bg-[#3fb8bd]/20 text-[#3fb8bd] font-bold' : 'text-gray-300 hover:bg-gray-900/60 hover:text-[#3fb8bd]'),
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 p-4 border-t border-gray-800",
                        style: {
                            backgroundColor: 'rgba(0, 0, 0, 0.98)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$NetworkSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkSwitcher"], {
                            inline: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Header, "KG1WZYaR1YySCmRjoQQdiJZaxb0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-6 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-[#06b6d4]",
                                children: "𝕂Ǝ𝕂TECH"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#06b6d4] transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/mint",
                                    className: "hover:text-[#06b6d4] transition-colors",
                                    children: "Mint"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/gallery",
                                    className: "hover:text-[#06b6d4] transition-colors",
                                    children: "Gallery"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/marketplace",
                                    className: "hover:text-[#06b6d4] transition-colors",
                                    children: "Marketplace"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://explorer.bf1337.org",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group",
                                    "aria-label": "BF Explorer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-[#3fb8bd] transition-all duration-300 group-hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/bf.png",
                                            alt: "Explorer",
                                            width: 40,
                                            height: 40,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://aftermint.xyz",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group",
                                    "aria-label": "Aftermint Marketplace",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-[#4ecca7] transition-all duration-300 group-hover:scale-110",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/aftermint-logo.avif",
                                            alt: "Aftermint",
                                            width: 40,
                                            height: 40,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://mainnet.basedaibridge.com/rpc/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group",
                                    "aria-label": "RPC Endpoint",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-[#06b6d4] transition-all duration-300 group-hover:scale-110 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold text-gray-400 group-hover:text-[#06b6d4] transition-colors",
                                            children: "RPC"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://x.com/KektechNFT",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border-2 border-gray-800 hover:border-[#3fb8bd] transition-all duration-300 hover:scale-110",
                                    "aria-label": "X (Twitter)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/x.webp",
                                        alt: "X",
                                        width: 24,
                                        height: 24,
                                        className: "opacity-70 group-hover:opacity-100 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://t.me/KEKTECH",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border-2 border-gray-800 hover:border-[#4ecca7] transition-all duration-300 hover:scale-110",
                                    "aria-label": "Telegram",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/telegram.webp",
                                        alt: "Telegram",
                                        width: 24,
                                        height: 24,
                                        className: "opacity-70 group-hover:opacity-100 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 pt-4 border-t border-gray-200 dark:border-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-xs text-gray-500 dark:text-gray-500",
                        children: [
                            "© ",
                            currentYear,
                            " 𝕂Ǝ𝕂TECH. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-main.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KEKTECH_MAIN",
    ()=>KEKTECH_MAIN,
    "KEKTECH_MAIN_ABI",
    ()=>KEKTECH_MAIN_ABI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/viem/_esm/utils/unit/parseEther.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-client] (ecmascript)");
;
;
const KEKTECH_MAIN_ABI = [
    // READ FUNCTIONS
    {
        name: 'saleIsActive',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        name: 'tokenPrice',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    {
        name: 'totalSupply',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    {
        name: 'MAX_SUPPLY',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    {
        name: 'MAX_MINT_PER_TX',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    // WRITE FUNCTION
    {
        name: 'mint',
        type: 'function',
        stateMutability: 'payable',
        inputs: [
            {
                name: 'quantity',
                type: 'uint256'
            }
        ],
        outputs: []
    }
];
const KEKTECH_MAIN = {
    // Identifiers
    id: 'kektech-main',
    name: 'KEKTECH',
    symbol: 'KEKTECH',
    description: 'The original KEKTECH NFT collection on BasedAI',
    // Contract Details
    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"],
    abi: KEKTECH_MAIN_ABI,
    // Supply Configuration (from constants, but can be verified on-chain)
    maxSupply: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_SUPPLY"],
    maxMintPerTx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_MINT_PER_TX"],
    // Mint Price (read from contract, this is just the known value for reference)
    // Actual price should always be read from tokenPrice() function
    referenceMintPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseEther"])('18369'),
    // API Endpoints
    metadataAPI: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["METADATA_API_URL"],
    rankingAPI: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANKING_API_URL"],
    imageAPI: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_API_URL"],
    // UI Configuration
    theme: {
        primary: '#00ff00',
        accent: '#ff00ff'
    },
    // Feature Flags
    features: {
        minting: true,
        gallery: true,
        trading: false
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/tech-token.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TECH Token Configuration (ERC-20)
 *
 * Main utility token for the KEKTECH ecosystem
 */ __turbopack_context__.s([
    "TECH_TOKEN",
    ()=>TECH_TOKEN,
    "TECH_TOKEN_ABI",
    ()=>TECH_TOKEN_ABI,
    "TECH_TOKEN_ADDRESS",
    ()=>TECH_TOKEN_ADDRESS
]);
const TECH_TOKEN_ADDRESS = '0x62E8D022CAf673906e62904f7BB5ae467082b546';
const TECH_TOKEN_ABI = [
    // READ FUNCTIONS
    {
        name: 'balanceOf',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    {
        name: 'totalSupply',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    {
        name: 'decimals',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'uint8'
            }
        ]
    },
    {
        name: 'symbol',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    },
    {
        name: 'name',
        type: 'function',
        stateMutability: 'view',
        inputs: [],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    },
    // WRITE FUNCTIONS (for future use)
    {
        name: 'transfer',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        name: 'approve',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
];
const TECH_TOKEN = {
    // Identifiers
    id: 'tech-token',
    name: 'TECH',
    symbol: 'TECH',
    description: 'Utility token for the KEKTECH ecosystem on BasedAI',
    // Contract Details
    address: TECH_TOKEN_ADDRESS,
    abi: TECH_TOKEN_ABI,
    // Token Parameters (verified from explorer)
    decimals: 18,
    totalSupply: '133742069',
    // Explorer Links
    explorerUrl: "https://explorer.bf1337.org/token/".concat(TECH_TOKEN_ADDRESS),
    // UI Configuration
    theme: {
        primary: '#3fb8bd',
        gradient: 'from-cyan-500 to-blue-500'
    },
    // Feature Flags
    features: {
        transfer: true,
        swap: false,
        stake: false
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * KEKTECH Vouchers Configuration (ERC-1155)
 *
 * Multi-token voucher system for KEKTECH ecosystem
 */ __turbopack_context__.s([
    "KEKTECH_VOUCHERS",
    ()=>KEKTECH_VOUCHERS,
    "KEKTECH_VOUCHERS_ABI",
    ()=>KEKTECH_VOUCHERS_ABI,
    "KEKTECH_VOUCHERS_ADDRESS",
    ()=>KEKTECH_VOUCHERS_ADDRESS,
    "VOUCHER_TYPES",
    ()=>VOUCHER_TYPES
]);
const KEKTECH_VOUCHERS_ADDRESS = '0x7FEF981beE047227f848891c6C9F9dad11767a48';
const KEKTECH_VOUCHERS_ABI = [
    // READ FUNCTIONS
    {
        name: 'balanceOf',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            },
            {
                name: 'id',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ]
    },
    {
        name: 'balanceOfBatch',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'accounts',
                type: 'address[]'
            },
            {
                name: 'ids',
                type: 'uint256[]'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'uint256[]'
            }
        ]
    },
    {
        name: 'uri',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'id',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'string'
            }
        ]
    },
    {
        name: 'isApprovedForAll',
        type: 'function',
        stateMutability: 'view',
        inputs: [
            {
                name: 'account',
                type: 'address'
            },
            {
                name: 'operator',
                type: 'address'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    // WRITE FUNCTIONS (for future use)
    {
        name: 'setApprovalForAll',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'operator',
                type: 'address'
            },
            {
                name: 'approved',
                type: 'bool'
            }
        ],
        outputs: []
    },
    {
        name: 'safeTransferFrom',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'from',
                type: 'address'
            },
            {
                name: 'to',
                type: 'address'
            },
            {
                name: 'id',
                type: 'uint256'
            },
            {
                name: 'amount',
                type: 'uint256'
            },
            {
                name: 'data',
                type: 'bytes'
            }
        ],
        outputs: []
    }
];
const VOUCHER_TYPES = [
    {
        id: 0,
        name: 'Genesis Voucher',
        description: 'Original KEKTECH voucher for early supporters',
        icon: '🎫',
        imageUrl: '',
        rarity: 'legendary'
    },
    {
        id: 1,
        name: 'Silver Voucher',
        description: 'Standard KEKTECH voucher with base benefits',
        icon: '🎟️',
        imageUrl: '',
        rarity: 'common'
    },
    {
        id: 2,
        name: 'Gold Voucher',
        description: 'Premium KEKTECH voucher with enhanced rewards',
        icon: '🏆',
        imageUrl: '',
        rarity: 'rare'
    },
    {
        id: 3,
        name: 'Platinum Voucher',
        description: 'Elite KEKTECH voucher with maximum benefits',
        icon: '💎',
        imageUrl: '',
        rarity: 'epic'
    }
];
const KEKTECH_VOUCHERS = {
    // Identifiers
    id: 'kektech-vouchers',
    name: 'KEKTECH Vouchers',
    symbol: 'KEKTV',
    description: 'Multi-token voucher system for exclusive KEKTECH benefits',
    // Contract Details
    address: KEKTECH_VOUCHERS_ADDRESS,
    abi: KEKTECH_VOUCHERS_ABI,
    // Voucher Types
    voucherTypes: VOUCHER_TYPES,
    knownTokenIds: [
        0,
        1,
        2,
        3
    ],
    // Explorer Links
    explorerUrl: "https://explorer.bf1337.org/token/".concat(KEKTECH_VOUCHERS_ADDRESS),
    // UI Configuration
    theme: {
        primary: '#9333ea',
        gradient: 'from-purple-500 to-pink-500'
    },
    // Rarity Colors
    rarityColors: {
        legendary: 'from-yellow-400 to-orange-500',
        epic: 'from-purple-500 to-pink-500',
        rare: 'from-blue-500 to-cyan-500',
        common: 'from-gray-500 to-gray-600'
    },
    // Feature Flags
    features: {
        viewing: true,
        transfer: true,
        redeem: false,
        marketplace: false
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Contract Configurations Export
 *
 * Single entry point for all contract configurations
 */ // NFT Collections
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-main.ts [app-client] (ecmascript)");
// ERC-20 Token
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/tech-token.ts [app-client] (ecmascript)");
// ERC-1155 Vouchers
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMint.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMint",
    ()=>useMint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-main.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/chains.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useMint() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"])();
    const { switchChainAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const [mintAmount, setMintAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Write contract hook
    const { writeContract, data: hash, isPending: isWritePending, error: writeError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    // Wait for transaction receipt
    const { isLoading: isConfirming, isSuccess: isConfirmed, error: confirmError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    /**
   * Execute mint transaction
   */ const mint = async ()=>{
        if (!isConnected || !address) {
            throw new Error('Please connect your wallet first');
        }
        if (mintAmount < 1 || mintAmount > __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_MAIN"].maxMintPerTx) {
            throw new Error("Mint amount must be between 1 and ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_MAIN"].maxMintPerTx));
        }
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                console.log("Switching from chain ".concat(chainId, " to BasedAI chain ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id));
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            // Calculate total cost (using reference price)
            const totalCost = BigInt(mintAmount) * __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_MAIN"].referenceMintPrice;
            // Execute mint transaction with explicit chain ID
            writeContract({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_MAIN"].address,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_MAIN"].abi,
                functionName: 'mint',
                args: [
                    BigInt(mintAmount)
                ],
                value: totalCost,
                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
            });
        } catch (error) {
            console.error('Mint error:', error);
            throw error;
        }
    };
    return {
        // State
        mintAmount,
        setMintAmount,
        isConnected,
        address,
        // Transaction status
        isWritePending,
        isConfirming,
        isConfirmed,
        hash,
        // Errors
        error: writeError || confirmError,
        // Actions
        mint,
        // Helpers
        maxMintPerTx: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$main$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_MAIN"].maxMintPerTx
    };
}
_s(useMint, "1WRiXByKxLXPttviSTUaz4SxCaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChainId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMintedNFTs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMintedNFTs",
    ()=>useMintedNFTs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useMintedNFTs(hash, isConfirmed) {
    _s();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [mintedNFTs, setMintedNFTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMintedNFTs.useEffect": ()=>{
            if (!hash || !isConfirmed || !publicClient) {
                return;
            }
            let isMounted = true;
            async function fetchMintedNFTs() {
                setIsLoading(true);
                setError(null);
                try {
                    // 1. Get transaction receipt
                    const receipt = await publicClient.getTransactionReceipt({
                        hash: hash
                    });
                    // 2. Parse logs for Transfer events
                    // Standard ERC721 Transfer event signature
                    const TRANSFER_EVENT_SIGNATURE = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
                    const transferLogs = receipt.logs.filter({
                        "useMintedNFTs.useEffect.fetchMintedNFTs.transferLogs": (log)=>log.topics[0] === TRANSFER_EVENT_SIGNATURE
                    }["useMintedNFTs.useEffect.fetchMintedNFTs.transferLogs"]);
                    // 3. Extract token IDs (from == 0x000... = minted)
                    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
                    const tokenIds = [];
                    for (const log of transferLogs){
                        try {
                            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                                abi: [
                                    {
                                        type: 'event',
                                        name: 'Transfer',
                                        inputs: [
                                            {
                                                name: 'from',
                                                type: 'address',
                                                indexed: true
                                            },
                                            {
                                                name: 'to',
                                                type: 'address',
                                                indexed: true
                                            },
                                            {
                                                name: 'tokenId',
                                                type: 'uint256',
                                                indexed: true
                                            }
                                        ]
                                    }
                                ],
                                data: log.data,
                                topics: log.topics
                            });
                            // Check if this is a mint (from zero address)
                            if (decoded.args.from.toLowerCase() === ZERO_ADDRESS.toLowerCase()) {
                                tokenIds.push(decoded.args.tokenId.toString());
                            }
                        } catch (err) {
                            console.warn('Failed to decode transfer log:', err);
                        }
                    }
                    if (tokenIds.length === 0) {
                        throw new Error('No minted tokens found in transaction');
                    }
                    // 4. Fetch NFT metadata from backend (limit to first 3)
                    const nftsToFetch = tokenIds.slice(0, 3);
                    const fetchedNFTs = [];
                    for (const tokenId of nftsToFetch){
                        try {
                            const response = await fetch("/api/nft/".concat(tokenId));
                            if (!response.ok) {
                                throw new Error("Failed to fetch NFT ".concat(tokenId));
                            }
                            const data = await response.json();
                            fetchedNFTs.push({
                                tokenId,
                                name: data.name || "KEKTECH #".concat(tokenId),
                                imageUrl: data.imageUrl || '',
                                rank: data.rank,
                                rarityScore: data.rarityScore
                            });
                        } catch (err) {
                            console.error("Failed to fetch NFT ".concat(tokenId, ":"), err);
                            // Add placeholder for failed fetches
                            fetchedNFTs.push({
                                tokenId,
                                name: "KEKTECH #".concat(tokenId),
                                imageUrl: ''
                            });
                        }
                    }
                    if (isMounted) {
                        setMintedNFTs(fetchedNFTs);
                    }
                } catch (err) {
                    console.error('Error fetching minted NFTs:', err);
                    if (isMounted) {
                        setError(err instanceof Error ? err.message : 'Failed to fetch NFTs');
                    }
                } finally{
                    if (isMounted) {
                        setIsLoading(false);
                    }
                }
            }
            fetchMintedNFTs();
            return ({
                "useMintedNFTs.useEffect": ()=>{
                    isMounted = false;
                }
            })["useMintedNFTs.useEffect"];
        }
    }["useMintedNFTs.useEffect"], [
        hash,
        isConfirmed,
        publicClient
    ]);
    return {
        mintedNFTs,
        isLoading,
        error
    };
}
_s(useMintedNFTs, "pnkNa+Rxpyhls0a8ekLR9hmUDW4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/blockchain/kektv.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * KEKTV Blockchain Service
 * Interacts with KEKTV NFT contract on BASED Chain
 */ // BASED Chain Configuration
__turbopack_context__.s([
    "BASED_CHAIN_CONFIG",
    ()=>BASED_CHAIN_CONFIG,
    "CONTRACTS",
    ()=>CONTRACTS,
    "getKEKTVListings",
    ()=>getKEKTVListings,
    "getKEKTVMarketplaceStats",
    ()=>getKEKTVMarketplaceStats,
    "getNFTBalance",
    ()=>getNFTBalance,
    "getTierDistribution",
    ()=>getTierDistribution,
    "getTotalSupply",
    ()=>getTotalSupply,
    "getUserNFTHoldings",
    ()=>getUserNFTHoldings
]);
const BASED_CHAIN_CONFIG = {
    chainId: 32323,
    chainIdHex: '0x7e43',
    name: 'BASED',
    rpcUrl: 'https://mainnet.basedaibridge.com/rpc',
    explorerUrl: 'https://explorer.bf1337.org',
    nativeCurrency: {
        name: 'BASED',
        symbol: 'BASED',
        decimals: 18
    }
};
const CONTRACTS = {
    KEKTECH: '0x40B6184b901334C0A88f528c1A0a1de7a77490f1',
    KEKTV: '0x7FEF981beE047227f848891c6C9F9dad11767a48'
};
async function getNFTBalance(walletAddress, contractAddress) {
    try {
        if ("object" === 'undefined' || !window.ethereum) {
            throw new Error('No ethereum provider found');
        }
        // Use eth_call to query balance
        const data = encodeFunctionData('balanceOf(address)', [
            walletAddress
        ]);
        const result = await window.ethereum.request({
            method: 'eth_call',
            params: [
                {
                    to: contractAddress,
                    data: data
                },
                'latest'
            ]
        });
        // Decode result (it's a uint256)
        return parseInt(result, 16);
    } catch (error) {
        console.error('Error fetching NFT balance:', error);
        return 0;
    }
}
async function getUserNFTHoldings(walletAddress) {
    try {
        const [kektechBalance, kektvBalance] = await Promise.all([
            getNFTBalance(walletAddress, CONTRACTS.KEKTECH),
            getNFTBalance(walletAddress, CONTRACTS.KEKTV)
        ]);
        return {
            kektech: kektechBalance,
            kektv: kektvBalance
        };
    } catch (error) {
        console.error('Error fetching user holdings:', error);
        return {
            kektech: 0,
            kektv: 0
        };
    }
}
async function getKEKTVListings() {
    try {
        // For now, return mock data with BASED pricing
        // TODO: Implement real marketplace contract integration
        return [
            {
                tokenId: 1,
                name: 'KEKTV #001',
                image: '/images/kektv-placeholder.gif',
                price: '10 BASED',
                priceInBased: 10,
                owner: '0x0000000000000000000000000000000000000000',
                listed: true
            },
            {
                tokenId: 2,
                name: 'KEKTV #002',
                image: '/images/kektv-placeholder.gif',
                price: '15 BASED',
                priceInBased: 15,
                owner: '0x0000000000000000000000000000000000000000',
                listed: true
            },
            {
                tokenId: 3,
                name: 'KEKTV #003',
                image: '/images/kektv-placeholder.gif',
                price: '20 BASED',
                priceInBased: 20,
                owner: '0x0000000000000000000000000000000000000000',
                listed: true
            }
        ];
    } catch (error) {
        console.error('Error fetching KEKTV listings:', error);
        return [];
    }
}
async function getKEKTVMarketplaceStats() {
    try {
        // TODO: Implement real stats from blockchain/marketplace contract
        return {
            totalListed: 9,
            floorPrice: 10,
            holders: 7,
            volume24h: 250
        };
    } catch (error) {
        console.error('Error fetching marketplace stats:', error);
        return {
            totalListed: 0,
            floorPrice: 0,
            holders: 0,
            volume24h: 0
        };
    }
}
/**
 * Helper function to encode function data for eth_call
 */ function encodeFunctionData(signature, params) {
    // Simple function signature hashing (first 4 bytes of keccak256)
    const functionSelector = keccak256(signature).slice(0, 10);
    // For balanceOf, we need to encode the address parameter
    if (signature === 'balanceOf(address)' && params.length === 1) {
        const address = params[0].toLowerCase().replace('0x', '');
        // Pad address to 32 bytes (64 hex chars)
        const paddedAddress = address.padStart(64, '0');
        return functionSelector + paddedAddress;
    }
    // For totalSupply(), just return the function selector (no params)
    if (signature === 'totalSupply()') {
        return functionSelector;
    }
    return functionSelector;
}
/**
 * Simple keccak256 hash (for function selectors)
 * In production, use a proper library like ethers.js
 */ function keccak256(text) {
    // For now, return pre-computed hash for balanceOf and totalSupply
    // In production, use: import { keccak256 as keccak } from 'ethers'
    const precomputed = {
        'balanceOf(address)': '0x70a08231',
        'totalSupply()': '0x18160ddd'
    };
    return precomputed[text] || '0x00000000';
}
async function getTierDistribution() {
    try {
        // TODO: In production, query blockchain or API for actual minted counts
        // For now, use simulated data that will be dynamically updated
        // Get total minted from contract (totalSupply)
        const totalMinted = await getTotalSupply(CONTRACTS.KEKTECH);
        // Distribute minted NFTs across tiers based on rarity weights
        // This is a simplified calculation - actual implementation would
        // query metadata or trait data from blockchain
        const distribution = [
            {
                tier: 'Mythic',
                minted: Math.floor(totalMinted * (13 / 4200)),
                total: 13,
                color: '#ff00ff'
            },
            {
                tier: 'Legendary',
                minted: Math.floor(totalMinted * (42 / 4200)),
                total: 42,
                color: '#ffd700'
            },
            {
                tier: 'Epic',
                minted: Math.floor(totalMinted * (195 / 4200)),
                total: 195,
                color: '#9d4edd'
            },
            {
                tier: 'Rare',
                minted: Math.floor(totalMinted * (670 / 4200)),
                total: 670,
                color: '#3fb8bd'
            },
            {
                tier: 'Common',
                minted: Math.floor(totalMinted * (3280 / 4200)),
                total: 3280,
                color: '#6c757d'
            }
        ];
        return distribution;
    } catch (error) {
        console.error('Error fetching tier distribution:', error);
        // Return empty tiers on error
        return [
            {
                tier: 'Mythic',
                minted: 0,
                total: 13,
                color: '#ff00ff'
            },
            {
                tier: 'Legendary',
                minted: 0,
                total: 42,
                color: '#ffd700'
            },
            {
                tier: 'Epic',
                minted: 0,
                total: 195,
                color: '#9d4edd'
            },
            {
                tier: 'Rare',
                minted: 0,
                total: 670,
                color: '#3fb8bd'
            },
            {
                tier: 'Common',
                minted: 0,
                total: 3280,
                color: '#6c757d'
            }
        ];
    }
}
async function getTotalSupply(contractAddress) {
    try {
        // Use eth_call to query totalSupply - works without wallet connection
        const data = encodeFunctionData('totalSupply()', []);
        // Create provider directly - no wallet needed for read operations
        const rpcUrl = BASED_CHAIN_CONFIG.rpcUrl;
        const response = await fetch(rpcUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_call',
                params: [
                    {
                        to: contractAddress,
                        data: data
                    },
                    'latest'
                ]
            })
        });
        const json = await response.json();
        if (json.result) {
            // Decode result (it's a uint256)
            return parseInt(json.result, 16);
        }
        // Fallback to 0 if no result
        return 0;
    } catch (error) {
        console.error('Error fetching total supply:', error);
        return 0 // Return 0 on error to show accurate data
        ;
    }
} // Type declaration for ethereum provider is handled globally
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnhancedMintForm",
    ()=>EnhancedMintForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMintedNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMintedNFTs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$blockchain$2f$kektv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/blockchain/kektv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function EnhancedMintForm() {
    _s();
    const { mintAmount, setMintAmount, isConnected, isWritePending, isConfirming, isConfirmed, hash, error, mint, maxMintPerTx } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMint"])();
    // Wallet connection
    const { connectors, connect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"])();
    // Fetch minted NFTs after successful mint
    const { mintedNFTs, isLoading: isLoadingNFTs, error: nftError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMintedNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMintedNFTs"])(hash, isConfirmed);
    const [localError, setLocalError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalMinted, setTotalMinted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Animate progress bar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedMintForm.useEffect": ()=>{
            if (isWritePending) setProgress(33);
            else if (isConfirming) setProgress(66);
            else if (isConfirmed) setProgress(100);
            else setProgress(0);
        }
    }["EnhancedMintForm.useEffect"], [
        isWritePending,
        isConfirming,
        isConfirmed
    ]);
    // Show confetti on success
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedMintForm.useEffect": ()=>{
            if (isConfirmed) {
                setShowConfetti(true);
                setTimeout({
                    "EnhancedMintForm.useEffect": ()=>setShowConfetti(false)
                }["EnhancedMintForm.useEffect"], 5000);
            }
        }
    }["EnhancedMintForm.useEffect"], [
        isConfirmed
    ]);
    // Fetch total minted from blockchain
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedMintForm.useEffect": ()=>{
            const fetchTotalMinted = {
                "EnhancedMintForm.useEffect.fetchTotalMinted": async ()=>{
                    try {
                        const total = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$blockchain$2f$kektv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalSupply"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$blockchain$2f$kektv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].KEKTECH);
                        setTotalMinted(total);
                    } catch (error) {
                        console.error('Error fetching total supply:', error);
                    }
                }
            }["EnhancedMintForm.useEffect.fetchTotalMinted"];
            fetchTotalMinted();
            // Refresh every 30 seconds
            const interval = setInterval(fetchTotalMinted, 30000);
            return ({
                "EnhancedMintForm.useEffect": ()=>clearInterval(interval)
            })["EnhancedMintForm.useEffect"];
        }
    }["EnhancedMintForm.useEffect"], []);
    const handleMint = async ()=>{
        setLocalError(null);
        try {
            await mint();
        } catch (err) {
            setLocalError(err instanceof Error ? err.message : 'Mint failed');
        }
    };
    const handleAmountChange = (value)=>{
        if (value >= 1 && value <= maxMintPerTx) {
            setMintAmount(value);
            setLocalError(null);
        }
    };
    // Handle wallet connection
    const handleConnectWallet = async ()=>{
        try {
            // Prioritize MetaMask/injected wallet
            const connector = connectors.find((c)=>c.id === 'injected' || c.id === 'metaMask' || c.name && c.name.toLowerCase().includes('metamask')) || connectors[0];
            if (connector) {
                await connect({
                    connector
                });
            }
        } catch (error) {
            console.error('Connection error:', error);
        }
    };
    // Don't block UI when wallet is not connected - show preview instead
    // Success state with confetti
    if (isConfirmed && hash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-2xl border-2 border-kek-green bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-center shadow-2xl shadow-kek-green/50",
            children: [
                showConfetti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 overflow-hidden",
                    children: [
                        ...Array(50)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute h-3 w-3 animate-float",
                            style: {
                                left: "".concat(Math.random() * 100, "%"),
                                top: "-10%",
                                backgroundColor: [
                                    '#00ff00',
                                    '#00ffff',
                                    '#ff00ff'
                                ][Math.floor(Math.random() * 3)],
                                transform: "rotate(".concat(Math.random() * 360, "deg)"),
                                animation: "float ".concat(2 + Math.random(), "s ease-out forwards"),
                                animationDelay: "".concat(Math.random() * 0.5, "s")
                            }
                        }, i, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-3 bg-gradient-to-r from-kek-green via-kek-cyan to-kek-purple bg-clip-text text-3xl font-black text-transparent",
                            children: "Mint Successful!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-6 text-xl text-gray-300",
                            children: [
                                "Successfully minted ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-kek-green",
                                    children: mintAmount
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 144,
                                    columnNumber: 33
                                }, this),
                                " KEKTECH NFT",
                                mintAmount > 1 ? 's' : '',
                                "!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        isLoadingNFTs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 text-sm text-gray-400",
                                    children: "Loading your NFTs..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 ".concat(mintAmount === 1 ? 'grid-cols-1 max-w-xs mx-auto' : mintAmount === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'),
                                    children: [
                                        ...Array(Math.min(mintAmount, 3))
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-pulse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aspect-square rounded-xl bg-gray-700/50 border-2 border-kek-cyan/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 h-4 rounded bg-gray-700/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this) : mintedNFTs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 text-sm font-semibold text-kek-cyan",
                                    children: "Your Minted NFTs:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 ".concat(mintedNFTs.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : mintedNFTs.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'),
                                    children: mintedNFTs.map((nft)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-square overflow-hidden rounded-xl border-2 border-kek-cyan/50 shadow-lg shadow-kek-cyan/20 transition-all hover:border-kek-green hover:shadow-kek-green/40 hover:scale-105",
                                                    children: nft.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: nft.imageUrl,
                                                        alt: nft.name,
                                                        width: 300,
                                                        height: 300,
                                                        className: "w-full h-full object-cover",
                                                        unoptimized: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full bg-gradient-to-br from-kek-green/20 to-kek-purple/20 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl",
                                                            children: "🎨"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 text-sm font-semibold text-white",
                                                    children: nft.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this),
                                                nft.rank && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-kek-cyan",
                                                    children: [
                                                        "Rank #",
                                                        nft.rank
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this),
                                                nft.rarityScore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        "Rarity: ",
                                                        nft.rarityScore.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, nft.tokenId, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                mintAmount > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-xs text-gray-400",
                                    children: [
                                        "+ ",
                                        mintAmount - 3,
                                        " more NFT",
                                        mintAmount - 3 > 1 ? 's' : '',
                                        " minted"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this) : nftError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-red-400",
                                    children: [
                                        "⚠️ ",
                                        nftError
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-gray-400",
                                    children: "Your NFTs were minted successfully. Check your wallet or the marketplace."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 rounded-xl border border-kek-green/20 bg-black/40 p-4 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-400",
                                    children: "Transaction Hash"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 truncate font-mono text-xs text-kek-cyan",
                                    children: hash
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row sm:justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPLORER_URL"], "/tx/").concat(hash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "rounded-lg bg-gradient-to-r from-kek-green to-kek-cyan px-6 py-3 font-semibold text-black shadow-lg shadow-kek-green/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-kek-green/70",
                                    children: "View Transaction ↗"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.reload(),
                                    className: "rounded-lg bg-purple-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-purple-600 hover:scale-105",
                                    children: "Mint More"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
            lineNumber: 118,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-2xl border-2 border-kek-green/30 bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    (isWritePending || isConfirming || isConfirmed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: progress >= 33 ? 'text-kek-green' : 'text-gray-500',
                                        children: "1. Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: progress >= 66 ? 'text-kek-cyan' : 'text-gray-500',
                                        children: "2. Confirming"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: progress >= 100 ? 'text-kek-purple' : 'text-gray-500',
                                        children: "3. Complete"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-3 overflow-hidden rounded-full bg-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-kek-green via-kek-cyan to-kek-purple transition-all duration-500 ease-out",
                                    style: {
                                        width: "".concat(progress, "%")
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full w-full animate-pulse bg-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full max-w-xs aspect-square rounded-xl overflow-hidden border-2 border-kek-green/50 shadow-lg shadow-kek-green/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/686.png",
                                        alt: "𝕂Ǝ𝕂丅ᵉ匚🅷 NFT",
                                        width: 400,
                                        height: 400,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mb-4 block text-sm font-semibold text-gray-300 text-center",
                                        children: [
                                            "Amount (Max ",
                                            maxMintPerTx,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleAmountChange(mintAmount - 1),
                                                disabled: mintAmount <= 1 || isWritePending || isConfirming,
                                                className: "flex h-14 w-14 items-center justify-center rounded-lg border-2 border-kek-green/30 bg-kek-green/10 text-3xl font-bold text-kek-green transition-all hover:border-kek-green hover:bg-kek-green/20 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30",
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-20 w-28 items-center justify-center rounded-lg border-2 border-kek-cyan/50 bg-black/40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl font-black text-kek-cyan",
                                                    children: mintAmount
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleAmountChange(mintAmount + 1),
                                                disabled: mintAmount >= maxMintPerTx || isWritePending || isConfirming,
                                                className: "flex h-14 w-14 items-center justify-center rounded-lg border-2 border-kek-green/30 bg-kek-green/10 text-3xl font-bold text-kek-green transition-all hover:border-kek-green hover:bg-kek-green/20 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 rounded-xl border border-kek-purple/30 bg-black/40 p-5 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Price per NFT:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-white",
                                        children: "18,369 $BASED"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-white",
                                        children: "Total Cost:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-black text-kek-green",
                                        children: [
                                            (18369 * mintAmount).toLocaleString(),
                                            " $BASED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    (error || localError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 animate-pulse rounded-xl border-2 border-red-500/50 bg-red-500/10 p-4 backdrop-blur-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-red-400",
                            children: [
                                "⚠️ ",
                                localError || (error === null || error === void 0 ? void 0 : error.message) || 'An error occurred'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, this),
                    !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: true,
                                className: "w-full overflow-hidden rounded-xl bg-gradient-to-r from-kek-green to-kek-cyan p-[2px] shadow-lg opacity-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[10px] bg-gray-900 px-8 py-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-black text-white",
                                        children: [
                                            "🚀 Mint ",
                                            mintAmount,
                                            " NFT",
                                            mintAmount > 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleConnectWallet,
                                className: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/95 to-pink-900/95 rounded-xl backdrop-blur-sm hover:from-purple-800/95 hover:to-pink-800/95 transition-all cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white font-bold text-xl",
                                    children: "Connect Wallet to Mint"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleMint,
                        disabled: isWritePending || isConfirming,
                        className: "group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-kek-green to-kek-cyan p-[2px] shadow-lg shadow-kek-green/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-kek-green/70 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-[10px] bg-gray-900 px-8 py-4 transition-all group-hover:bg-transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-black text-white group-hover:text-black",
                                children: isWritePending ? '⏳ Waiting for approval...' : isConfirming ? '⚡ Confirming transaction...' : "🚀 Mint ".concat(mintAmount, " NFT").concat(mintAmount > 1 ? 's' : '')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 360,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 359,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, this),
                    hash && !isConfirmed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-xl border border-kek-cyan/30 bg-kek-cyan/10 p-4 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-sm font-semibold text-kek-cyan",
                                children: "✅ Transaction submitted!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXPLORER_URL"], "/tx/").concat(hash),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm text-kek-cyan/80 hover:text-kek-cyan hover:underline",
                                children: "View on Explorer ↗"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-center text-xs text-gray-500",
                        children: [
                            "Your NFT will be minted on the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-kek-green",
                                children: "$BASED Chain (32323)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                                lineNumber: 390,
                                columnNumber: 42
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block px-6 py-3 rounded-xl border border-kek-cyan/30 bg-kek-cyan/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-400 mb-1",
                            children: "Total Supply"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl font-bold text-kek-cyan",
                            children: [
                                totalMinted.toLocaleString(),
                                " / 4,200"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_s(EnhancedMintForm, "dLhpqI4hlWxOcRfrUU4ko/Ar5Ao=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMint"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMintedNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMintedNFTs"]
    ];
});
_c = EnhancedMintForm;
var _c;
__turbopack_context__.k.register(_c, "EnhancedMintForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MintTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MintTab",
    ()=>MintTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$mint$2f$EnhancedMintForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/web3/mint/EnhancedMintForm.tsx [app-client] (ecmascript)");
;
;
function MintTab() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$web3$2f$mint$2f$EnhancedMintForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnhancedMintForm"], {}, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MintTab.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MintTab.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = MintTab;
var _c;
__turbopack_context__.k.register(_c, "MintTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-marketplace.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * KEKTV Marketplace Configuration (ERC-1155 Voucher Trading)
 *
 * ✅ V6 DEPLOYED: October 19, 2025
 * Contract: 0x2d79106D60f92F3a6b7B17E3cAd3Df0D4bdcE062
 * Network: BasedAI (Chain ID: 32323)
 * Status: PRODUCTION - V6 with reordered operations (CRITICAL FIX)
 *
 * V6 Changes from V2/V4:
 * - ✅ BREAKTHROUGH FIX: Pay seller BEFORE NFT transfer
 * - ✅ Fixes "Insufficient balance" error by avoiding msg.value context loss during ERC1155 callback
 * - ✅ Follows proper Checks-Effects-Interactions pattern
 * - ✅ BasedAI-specific fix for msg.value handling during safeTransferFrom callbacks
 *
 * Features:
 * - ✅ Real-time NFT balance validation before every transaction
 * - ✅ Auto-cancel invalid listings with clear error messages
 * - ✅ Try-catch NFT transfers with automatic rollback
 * - ✅ Comprehensive error handling (SellerInsufficientBalance, MarketplaceNotApproved, etc.)
 * - ✅ Listing validation tracking (createdAt, lastValidated timestamps)
 * - Buy/Sell ERC-1155 vouchers
 * - Listings with quantity support
 * - 2.5% platform fee (deducted from seller)
 * - Correct fee model (buyer pays listing price only)
 * - ERC1155 validation & security hardened
 * - Pausable & secure
 */ __turbopack_context__.s([
    "KEKTV_MARKETPLACE_ABI",
    ()=>KEKTV_MARKETPLACE_ABI,
    "KEKTV_MARKETPLACE_ADDRESS",
    ()=>KEKTV_MARKETPLACE_ADDRESS,
    "KEKTV_MARKETPLACE_CONFIG",
    ()=>KEKTV_MARKETPLACE_CONFIG,
    "KEKTV_VOUCHERS_ADDRESS",
    ()=>KEKTV_VOUCHERS_ADDRESS,
    "VOUCHER_TYPES",
    ()=>VOUCHER_TYPES,
    "calculateFee",
    ()=>calculateFee,
    "calculateTotalPrice",
    ()=>calculateTotalPrice
]);
const KEKTV_MARKETPLACE_ADDRESS = '0x2d79106D60f92F3a6b7B17E3cAd3Df0D4bdcE062';
const KEKTV_VOUCHERS_ADDRESS = '0x7FEF981beE047227f848891c6C9F9dad11767a48';
const KEKTV_MARKETPLACE_ABI = [
    // Constructor
    {
        inputs: [
            {
                internalType: 'address',
                name: '_voucherContract',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_feeRecipient',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    // View Functions
    {
        inputs: [],
        name: 'voucherContract',
        outputs: [
            {
                internalType: 'contract IERC1155',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'FEE_PERCENTAGE',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'listings',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'pricePerItem',
                type: 'uint256'
            },
            {
                internalType: 'bool',
                name: 'active',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'feeRecipient',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    // Write Functions
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'pricePerItem',
                type: 'uint256'
            }
        ],
        name: 'listVoucher',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'seller',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'buyVoucher',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'cancelListing',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_newFeeRecipient',
                type: 'address'
            }
        ],
        name: 'updateFeeRecipient',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'emergencyWithdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    // Events
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'seller',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'pricePerItem',
                type: 'uint256'
            }
        ],
        name: 'VoucherListed',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'seller',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'buyer',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'totalPrice',
                type: 'uint256'
            }
        ],
        name: 'VoucherSold',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'seller',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256'
            }
        ],
        name: 'ListingCancelled',
        type: 'event'
    }
];
const KEKTV_MARKETPLACE_CONFIG = {
    address: KEKTV_MARKETPLACE_ADDRESS,
    abi: KEKTV_MARKETPLACE_ABI,
    // Contract features
    platformFee: 250n,
    vouchersAddress: KEKTV_VOUCHERS_ADDRESS,
    // Feature flags (query from contract in production)
    enabled: true,
    listingsEnabled: true,
    offersEnabled: false,
    paused: false,
    // Network info
    chainId: 32323,
    network: 'BasedAI',
    blockExplorer: 'https://explorer.bf1337.org',
    // Deployment info
    deployedAt: 2439532,
    deployedDate: '2025-10-17',
    txHash: '0xd892c6297e2e6423eb171d63d3133d994bbdae9dfdc14a4a0b50c80006592e69'
};
const VOUCHER_TYPES = [
    {
        id: 0,
        name: 'Genesis',
        description: 'Genesis tier voucher'
    },
    {
        id: 1,
        name: 'Silver',
        description: 'Silver tier voucher'
    },
    {
        id: 2,
        name: 'Gold',
        description: 'Gold tier voucher'
    },
    {
        id: 3,
        name: 'Platinum',
        description: 'Platinum tier voucher'
    }
];
function calculateTotalPrice(pricePerItem, amount) {
    let platformFee = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 250n;
    const subtotal = pricePerItem * amount;
    const fee = subtotal * platformFee / 10000n;
    return subtotal + fee;
}
function calculateFee(price) {
    let platformFee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250n;
    return price * platformFee / 10000n;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvMarketplace.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKektvMarketplace",
    ()=>useKektvMarketplace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-marketplace.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/chains.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useKektvMarketplace() {
    _s();
    const { address, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { switchChainAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const { writeContractAsync, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    /**
   * List KEKTV vouchers for sale
   * @param tokenId - Voucher type ID (0-3: Genesis, Silver, Gold, Platinum)
   * @param amount - Number of vouchers to list
   * @param pricePerItemString - Price per voucher in BASED (e.g., "1000")
   */ const listVoucher = async (tokenId, amount, pricePerItemString)=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            // Convert price string to wei (1 BASED = 10^18 wei)
            const pricePerItem = BigInt(pricePerItemString) * BigInt(10 ** 18);
            // List the voucher
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ABI"],
                functionName: 'listVoucher',
                args: [
                    tokenId,
                    amount,
                    pricePerItem
                ],
                gas: 500000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    /**
   * Buy KEKTV vouchers from a listing
   * @param seller - Address of the seller
   * @param tokenId - Voucher type ID
   * @param amount - Number of vouchers to buy
   * @param totalPrice - Total price in wei (pricePerItem × amount, WITHOUT fee)
   */ const buyVoucher = async (seller, tokenId, amount, totalPrice)=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            // 🔧 IMPORTANT: Buyer pays ONLY the listing price!
            // Contract deducts 2.5% fee FROM THE SELLER's proceeds
            // Example: 1000 BASED listing
            //   - Buyer pays: 1000 BASED
            //   - Seller receives: 975 BASED (1000 - 2.5%)
            //   - Platform receives: 25 BASED (2.5% fee)
            const platformFee = totalPrice * 250n / 10000n // 2.5%
            ;
            const sellerReceives = totalPrice - platformFee;
            console.log('💰 Buy Calculation:', {
                buyerPays: (totalPrice / BigInt(10 ** 18)).toString() + ' BASED',
                sellerReceives: (sellerReceives / BigInt(10 ** 18)).toString() + ' BASED',
                platformFee: (platformFee / BigInt(10 ** 18)).toString() + ' BASED'
            });
            // Buy the voucher - buyer pays ONLY listing price
            // Fee is deducted from seller's proceeds by the contract
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ABI"],
                functionName: 'buyVoucher',
                args: [
                    seller,
                    tokenId,
                    amount
                ],
                value: totalPrice,
                gas: 500000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    /**
   * Cancel a voucher listing
   * @param tokenId - Voucher type ID to cancel
   */ const cancelListing = async (tokenId)=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            // Cancel the listing
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ABI"],
                functionName: 'cancelListing',
                args: [
                    tokenId
                ],
                gas: 200000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    return {
        listVoucher,
        buyVoucher,
        cancelListing,
        isPending,
        isConfirming,
        isSuccess,
        error,
        hash
    };
}
_s(useKektvMarketplace, "EWmNxQ2FwHS34cCxh5LJrW/3uUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMarketplaceListingsAPI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMarketplaceListingsAPI",
    ()=>useMarketplaceListingsAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useMarketplaceListingsAPI(sellerAddress) {
    _s();
    const [listings, setListings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMarketplaceListingsAPI.useEffect": ()=>{
            const fetchListings = {
                "useMarketplaceListingsAPI.useEffect.fetchListings": async ()=>{
                    try {
                        setIsLoading(true);
                        setError(null);
                        // Fetch from API
                        const response = await fetch('/api/marketplace/listings', {
                            // Revalidate every 30 seconds
                            next: {
                                revalidate: 30
                            }
                        });
                        if (!response.ok) {
                            throw new Error("Failed to fetch listings: ".concat(response.statusText));
                        }
                        const data = await response.json();
                        // Convert BigInt strings back to BigInt
                        const parsedListings = data.map({
                            "useMarketplaceListingsAPI.useEffect.fetchListings.parsedListings": (listing)=>({
                                    ...listing,
                                    amount: BigInt(listing.amount),
                                    pricePerItem: BigInt(listing.pricePerItem),
                                    totalPrice: BigInt(listing.totalPrice),
                                    blockNumber: BigInt(listing.blockNumber)
                                })
                        }["useMarketplaceListingsAPI.useEffect.fetchListings.parsedListings"]);
                        // Filter by seller if provided (for "Your Listings")
                        const filteredListings = sellerAddress ? parsedListings.filter({
                            "useMarketplaceListingsAPI.useEffect.fetchListings": (l)=>l.seller.toLowerCase() === sellerAddress.toLowerCase()
                        }["useMarketplaceListingsAPI.useEffect.fetchListings"]) : parsedListings;
                        setListings(filteredListings);
                        setIsLoading(false);
                    } catch (err) {
                        console.error('Failed to fetch marketplace listings:', err);
                        setError(err instanceof Error ? err.message : 'Unknown error');
                        setIsLoading(false);
                    }
                }
            }["useMarketplaceListingsAPI.useEffect.fetchListings"];
            fetchListings();
            // Refresh every 30 seconds
            const interval = setInterval(fetchListings, 30000);
            return ({
                "useMarketplaceListingsAPI.useEffect": ()=>clearInterval(interval)
            })["useMarketplaceListingsAPI.useEffect"];
        }
    }["useMarketplaceListingsAPI.useEffect"], [
        sellerAddress
    ]);
    return {
        listings,
        isLoading,
        error,
        refetch: ()=>{
            setIsLoading(true);
        }
    };
}
_s(useMarketplaceListingsAPI, "DxOyExz+qfEPTEc89cJbSUgT3F8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvListings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKektvListings",
    ()=>useKektvListings,
    "useUserVoucherBalances",
    ()=>useUserVoucherBalances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-marketplace.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
// Known sellers list (temporary solution - will be replaced with event indexing)
const KNOWN_SELLERS = [
    '0xD90e78886b165d0a5497409528042Fc22bB33d2E'
];
function useKektvListings(sellerAddress) {
    _s();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [listings, setListings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // If seller address provided, check only that seller (for "Your Listings")
    // If not provided, check ALL known sellers (for "Browse & Buy")
    const targetAddresses = sellerAddress ? [
        sellerAddress
    ] : KNOWN_SELLERS;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKektvListings.useEffect": ()=>{
            const fetchListings = {
                "useKektvListings.useEffect.fetchListings": async ()=>{
                    if (!publicClient || targetAddresses.length === 0) {
                        setListings([]);
                        setIsLoading(false);
                        return;
                    }
                    try {
                        setIsLoading(true);
                        setError(null);
                        const activeListings = [];
                        // Check all target addresses
                        for (const sellerAddr of targetAddresses){
                            // Check all known voucher types (0-3) for each seller
                            for (const voucher of __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_TYPES"]){
                                try {
                                    const listing = await publicClient.readContract({
                                        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
                                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ABI"],
                                        functionName: 'listings',
                                        args: [
                                            sellerAddr,
                                            BigInt(voucher.id)
                                        ]
                                    });
                                    if (listing && Array.isArray(listing)) {
                                        // listings returns a tuple: [amount, pricePerItem, active]
                                        const [amount, pricePerItem, active] = listing;
                                        if (active && amount > 0n && pricePerItem > 0n) {
                                            activeListings.push({
                                                seller: sellerAddr,
                                                tokenId: voucher.id,
                                                voucherName: voucher.name,
                                                voucherIcon: voucher.icon,
                                                rarity: voucher.rarity,
                                                amount,
                                                pricePerItem,
                                                totalPrice: amount * pricePerItem,
                                                active: true
                                            });
                                        }
                                    }
                                } catch (e) {
                                    continue;
                                }
                            }
                        }
                        setListings(activeListings);
                        setIsLoading(false);
                    } catch (e) {
                        setError('Failed to fetch marketplace listings');
                        setIsLoading(false);
                    }
                }
            }["useKektvListings.useEffect.fetchListings"];
            fetchListings();
        }
    }["useKektvListings.useEffect"], [
        publicClient,
        ...targetAddresses
    ]);
    return {
        listings,
        isLoading,
        error,
        refetch: ()=>{
            setIsLoading(true);
        }
    };
}
_s(useKektvListings, "Zat/dOUWZSvesA3xMD5e1MJzzrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]
    ];
});
function useUserVoucherBalances() {
    _s1();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    // Read balances for all voucher types
    const { data: balances, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
        functionName: 'balanceOfBatch',
        args: address ? [
            [
                address,
                address,
                address,
                address
            ],
            [
                0n,
                1n,
                2n,
                3n
            ]
        ] : undefined
    });
    const vouchersWithBalances = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_TYPES"].map((voucher, index)=>({
            ...voucher,
            balance: balances ? balances[index] : 0n
        }));
    return {
        vouchers: vouchersWithBalances,
        isLoading,
        error,
        hasVouchers: vouchersWithBalances.some((v)=>v.balance > 0n)
    };
}
_s1(useUserVoucherBalances, "rlESHfS05Ap1kdi0xH3akDPcK8o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvApproval.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKektvApproval",
    ()=>useKektvApproval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-marketplace.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useKektvApproval() {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { writeContractAsync, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    // Check if marketplace is already approved
    // 🐛 FIX: Disable cache to prevent flash bug
    const { data: isApproved, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
        functionName: 'isApprovedForAll',
        args: address ? [
            address,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"]
        ] : undefined,
        query: {
            enabled: !!address,
            staleTime: 0,
            gcTime: 0
        }
    });
    // 🐛 DEBUG: Log approval state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKektvApproval.useEffect": ()=>{
            if (address) {
                console.log('🔐 Approval Status Debug:', {
                    userAddress: address,
                    marketplaceAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
                    isApprovedRaw: isApproved,
                    isApprovedBoolean: Boolean(isApproved),
                    isLoading
                });
            }
        }
    }["useKektvApproval.useEffect"], [
        address,
        isApproved,
        isLoading
    ]);
    /**
   * Approve marketplace to transfer all voucher types
   */ const approveMarketplace = async ()=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
                functionName: 'setApprovalForAll',
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
                    true
                ]
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    return {
        isApproved: Boolean(isApproved),
        isLoading,
        approveMarketplace,
        isPending,
        isConfirming,
        isSuccess,
        error,
        hash,
        refetch
    };
}
_s(useKektvApproval, "/vBBXPdjfxXyShNBen5C28tiUf4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAllVoucherMetadata",
    ()=>useAllVoucherMetadata,
    "useVoucherMetadata",
    ()=>useVoucherMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function useVoucherMetadata(tokenId) {
    _s();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [metadata, setMetadata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoucherMetadata.useEffect": ()=>{
            let mounted = true;
            async function fetchMetadata() {
                if (!publicClient) {
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    setError(null);
                    // Call contract's uri() function to get metadata URI
                    const uri = await publicClient.readContract({
                        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
                        functionName: 'uri',
                        args: [
                            BigInt(tokenId)
                        ]
                    });
                    if (!uri || typeof uri !== 'string') {
                        throw new Error('No URI returned from contract');
                    }
                    // Convert IPFS URI to HTTP gateway URL if needed
                    const metadataUrl = convertIpfsUrl(uri);
                    // Fetch metadata JSON
                    const response = await fetch(metadataUrl);
                    if (!response.ok) {
                        throw new Error("Failed to fetch metadata: ".concat(response.statusText));
                    }
                    const data = await response.json();
                    // Process metadata
                    const processedMetadata = {
                        id: tokenId,
                        name: data.name || "Voucher #".concat(tokenId),
                        description: data.description || '',
                        image: data.image ? convertIpfsUrl(data.image) : undefined,
                        animation_url: data.animation_url ? convertIpfsUrl(data.animation_url) : undefined,
                        attributes: data.attributes || []
                    };
                    if (mounted) {
                        setMetadata(processedMetadata);
                        setLoading(false);
                    }
                } catch (err) {
                    console.error("Error fetching metadata for voucher #".concat(tokenId, ":"), err);
                    if (mounted) {
                        setError(err instanceof Error ? err.message : 'Failed to fetch metadata');
                        setLoading(false);
                    }
                }
            }
            fetchMetadata();
            return ({
                "useVoucherMetadata.useEffect": ()=>{
                    mounted = false;
                }
            })["useVoucherMetadata.useEffect"];
        }
    }["useVoucherMetadata.useEffect"], [
        tokenId,
        publicClient
    ]);
    return {
        metadata,
        loading,
        error
    };
}
_s(useVoucherMetadata, "EvW3spmgsbx6HWd6Da4aVgEvUoA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]
    ];
});
function useAllVoucherMetadata() {
    _s1();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [metadataMap, setMetadataMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAllVoucherMetadata.useEffect": ()=>{
            let mounted = true;
            async function fetchAllMetadata() {
                if (!publicClient) {
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    setError(null);
                    const results = {};
                    // Fetch metadata for all known token IDs in parallel
                    await Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].knownTokenIds.map({
                        "useAllVoucherMetadata.useEffect.fetchAllMetadata": async (tokenId)=>{
                            try {
                                // Call contract's uri() function
                                const uri = await publicClient.readContract({
                                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
                                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
                                    functionName: 'uri',
                                    args: [
                                        BigInt(tokenId)
                                    ]
                                });
                                if (!uri || typeof uri !== 'string') {
                                    console.warn("No URI for token ID ".concat(tokenId));
                                    return;
                                }
                                // Convert IPFS to HTTP if needed
                                const metadataUrl = convertIpfsUrl(uri);
                                // Fetch metadata JSON
                                const response = await fetch(metadataUrl);
                                if (!response.ok) {
                                    console.warn("Failed to fetch metadata for token ".concat(tokenId, ":"), response.statusText);
                                    return;
                                }
                                const data = await response.json();
                                results[tokenId] = {
                                    id: tokenId,
                                    name: data.name || "Voucher #".concat(tokenId),
                                    description: data.description || '',
                                    image: data.image ? convertIpfsUrl(data.image) : undefined,
                                    animation_url: data.animation_url ? convertIpfsUrl(data.animation_url) : undefined,
                                    attributes: data.attributes || []
                                };
                            } catch (err) {
                                console.error("Error fetching metadata for voucher #".concat(tokenId, ":"), err);
                            }
                        }
                    }["useAllVoucherMetadata.useEffect.fetchAllMetadata"]));
                    if (mounted) {
                        setMetadataMap(results);
                        setLoading(false);
                    }
                } catch (err) {
                    console.error('Error fetching voucher metadata:', err);
                    if (mounted) {
                        setError(err instanceof Error ? err.message : 'Failed to fetch metadata');
                        setLoading(false);
                    }
                }
            }
            fetchAllMetadata();
            return ({
                "useAllVoucherMetadata.useEffect": ()=>{
                    mounted = false;
                }
            })["useAllVoucherMetadata.useEffect"];
        }
    }["useAllVoucherMetadata.useEffect"], [
        publicClient
    ]);
    return {
        metadataMap,
        loading,
        error
    };
}
_s1(useAllVoucherMetadata, "ta7Aa5X8yaN0zNc4gk8eYXxdkP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePublicClient"]
    ];
});
/**
 * Convert IPFS URLs to HTTP gateway URLs
 */ function convertIpfsUrl(url) {
    if (!url) return url;
    // If it's already an HTTP URL, return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    // Handle ipfs:// protocol
    if (url.startsWith('ipfs://')) {
        const hash = url.replace('ipfs://', '');
        return "https://ipfs.io/ipfs/".concat(hash);
    }
    // Handle /ipfs/ path
    if (url.startsWith('/ipfs/')) {
        return "https://ipfs.io".concat(url);
    }
    // If it looks like an IPFS hash, add the gateway
    if (url.match(/^Qm[a-zA-Z0-9]{44}/) || url.match(/^ba[a-zA-Z0-9]{57}/)) {
        return "https://ipfs.io/ipfs/".concat(url);
    }
    // Otherwise return as-is
    return url;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers-v2-abi.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_vouchersContract\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_minOfferValue\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"EnforcedPause\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpectedPause\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"sent\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"required\",\"type\":\"uint256\"}],\"name\":\"InsufficientOfferValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientVoucherBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OfferNotActive\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OnlyOfferer\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OnlyVoucherOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"VoucherTransferFailed\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oldValue\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newValue\",\"type\":\"uint256\"}],\"name\":\"MinOfferValueUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"offerer\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"voucherOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"offerPrice\",\"type\":\"uint256\"}],\"name\":\"OfferAccepted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"offerer\",\"type\":\"address\"}],\"name\":\"OfferCancelled\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"offerer\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"voucherOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"offerPrice\",\"type\":\"uint256\"}],\"name\":\"OfferMade\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"voucherOwner\",\"type\":\"address\"}],\"name\":\"OfferRejected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"}],\"name\":\"acceptOffer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"}],\"name\":\"cancelOffer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"}],\"name\":\"getOffer\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"offerer\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"voucherOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"offerPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"createdAt\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"internalType\":\"struct KektvVouchersOffersV2.Offer\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getReceivedOffers\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getTokenOffers\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalOffers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getUserOffers\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"voucherAmount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"voucherOwner\",\"type\":\"address\"}],\"name\":\"makeOffer\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minOfferValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"offers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"offerer\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"voucherOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"offerPrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"createdAt\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"receivedOffers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"offerId\",\"type\":\"uint256\"}],\"name\":\"rejectOffer\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokenOffers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newMinValue\",\"type\":\"uint256\"}],\"name\":\"updateMinOfferValue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"userOffers\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"vouchersContract\",\"outputs\":[{\"internalType\":\"contract IERC1155\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}]"));}),
"[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * KEKTV Offers Contract Configuration V3
 * Deployed on BasedAI Mainnet
 *
 * Contract: KektvVouchersOffersV3
 * Address: 0xee8dc29237d46eff1518bb0503d7f782b651a04e
 * Network: BasedAI (32323)
 * Deployed: 2025-10-27
 *
 * V3 Changes (CRITICAL BUG FIX):
 * - 🔥 CRITICAL FIX: General offers now work correctly!
 * - ✅ Fixed balance checking for general offers (voucherOwner = 0x0)
 * - ✅ V3 checks msg.sender's balance for general offers
 * - ✅ V2 incorrectly checked balanceOf(0x0) which always failed
 * - ✅ Backward compatible with targeted offers
 * - ✅ All security features preserved
 * - ✅ Contract tested: 11/11 tests passed
 *
 * V2 Changes (Still included in V3):
 * - ✅ Uses BASED (native token) instead of TECH (ERC-20)
 * - ✅ No token approval needed
 * - ✅ Simpler UX for users
 * - ✅ Lower gas costs
 */ __turbopack_context__.s([
    "BASEDAI_NETWORK",
    ()=>BASEDAI_NETWORK,
    "KEKTV_OFFERS_ABI",
    ()=>KEKTV_OFFERS_ABI,
    "KEKTV_OFFERS_ADDRESS",
    ()=>KEKTV_OFFERS_ADDRESS,
    "KEKTV_OFFERS_CONFIG",
    ()=>KEKTV_OFFERS_CONFIG,
    "KEKTV_OFFERS_V2_ADDRESS",
    ()=>KEKTV_OFFERS_V2_ADDRESS,
    "KEKTV_OFFERS_V3_ADDRESS",
    ()=>KEKTV_OFFERS_V3_ADDRESS,
    "KEKTV_VOUCHERS_ADDRESS",
    ()=>KEKTV_VOUCHERS_ADDRESS,
    "MIN_OFFER_VALUE",
    ()=>MIN_OFFER_VALUE,
    "VOUCHER_IDS",
    ()=>VOUCHER_IDS,
    "VOUCHER_NAMES",
    ()=>VOUCHER_NAMES,
    "calculateTotalPrice",
    ()=>calculateTotalPrice,
    "formatOfferPrice",
    ()=>formatOfferPrice,
    "getVoucherName",
    ()=>getVoucherName,
    "meetsMinimumOffer",
    ()=>meetsMinimumOffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2d$v2$2d$abi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers-v2-abi.json (json)");
;
const KEKTV_OFFERS_V3_ADDRESS = '0xee8dc29237d46eff1518bb0503d7f782b651a04e';
const KEKTV_OFFERS_V2_ADDRESS = '0x4E8B375C717a136882071923F17Ea08E75DDBcb2';
const KEKTV_OFFERS_ADDRESS = KEKTV_OFFERS_V3_ADDRESS;
const KEKTV_VOUCHERS_ADDRESS = '0x7FEF981beE047227f848891c6C9F9dad11767a48';
const KEKTV_OFFERS_ABI = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2d$v2$2d$abi$2e$json__$28$json$29$__["default"];
const BASEDAI_NETWORK = {
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
                'https://mainnet.basedaibridge.com/rpc'
            ]
        },
        public: {
            http: [
                'https://mainnet.basedaibridge.com/rpc'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BasedAI Explorer',
            url: 'https://explorer.bf1337.org'
        }
    }
};
const MIN_OFFER_VALUE = '1000000000000000'// 0.001 BASED
;
const VOUCHER_IDS = {
    GENESIS: 0,
    SILVER: 1,
    GOLD: 2,
    PLATINUM: 3
};
const VOUCHER_NAMES = {
};
const KEKTV_OFFERS_CONFIG = {
    address: KEKTV_OFFERS_ADDRESS,
    abi: KEKTV_OFFERS_ABI,
    network: BASEDAI_NETWORK,
    constants: {
        minOfferValue: MIN_OFFER_VALUE,
        voucherIds: VOUCHER_IDS,
        voucherNames: VOUCHER_NAMES
    },
    relatedContracts: {
        vouchers: KEKTV_VOUCHERS_ADDRESS
    }
};
function getVoucherName(_tokenId) {
    return '' // No placeholders - use metadata instead
    ;
}
function meetsMinimumOffer(amount, pricePerToken) {
    const totalPrice = amount * pricePerToken;
    return totalPrice >= BigInt(MIN_OFFER_VALUE);
}
function formatOfferPrice(price) {
    return (Number(price) / 1e18).toFixed(4) + ' BASED';
}
function calculateTotalPrice(amount, pricePerToken) {
    return amount * pricePerToken;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKektvOffers",
    ()=>useKektvOffers,
    "useOfferDetails",
    ()=>useOfferDetails,
    "useReceivedOffers",
    ()=>useReceivedOffers,
    "useTokenOffers",
    ()=>useTokenOffers,
    "useUserOffers",
    ()=>useUserOffers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/chains.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
;
;
;
function useKektvOffers() {
    _s();
    const { address, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { switchChainAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const { writeContractAsync, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    /**
   * Make an offer on a KEKTV voucher (V2 - pays in BASED)
   * @param tokenId - Voucher type ID (0-3: Genesis, Silver, Gold, Platinum)
   * @param amount - Number of vouchers to offer on
   * @param totalBasedString - Total BASED to offer (e.g., "500" = 500 BASED total)
   * @param voucherOwner - Address that owns the vouchers (can be zero address for general offers)
   */ const makeOffer = async function(tokenId, amount, totalBasedString) {
        let voucherOwner = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '0x0000000000000000000000000000000000000000';
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            // Convert BASED string to wei (1 BASED = 10^18 wei)
            const totalBased = BigInt(totalBasedString) * BigInt(10 ** 18);
            console.log('💰 Make Offer (V2 - BASED):', {
                tokenId,
                amount: amount.toString(),
                totalBased: (totalBased / BigInt(10 ** 18)).toString() + ' BASED',
                voucherOwner
            });
            // Make the offer (send BASED as value, escrowed in contract)
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
                functionName: 'makeOffer',
                args: [
                    BigInt(tokenId),
                    amount,
                    voucherOwner
                ],
                value: totalBased,
                gas: 500000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    /**
   * Accept an offer on your vouchers
   * @param offerId - The offer ID to accept
   */ const acceptOffer = async (offerId)=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            console.log('✅ Accepting Offer:', offerId.toString());
            // Accept the offer (transfers vouchers to buyer, BASED to seller)
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
                functionName: 'acceptOffer',
                args: [
                    offerId
                ],
                gas: 500000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    /**
   * Cancel your own offer
   * @param offerId - The offer ID to cancel
   */ const cancelOffer = async (offerId)=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            console.log('❌ Canceling Offer:', offerId.toString());
            // Cancel the offer (refunds BASED to offerer)
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
                functionName: 'cancelOffer',
                args: [
                    offerId
                ],
                gas: 300000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    /**
   * Reject an offer on your vouchers
   * @param offerId - The offer ID to reject
   */ const rejectOffer = async (offerId)=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            // Auto-switch to BasedAI Chain if on wrong network
            if (chainId !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id) {
                await switchChainAsync({
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$chains$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["basedChain"].id
                });
            }
            console.log('🚫 Rejecting Offer:', offerId.toString());
            // Reject the offer (refunds BASED to offerer)
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
                functionName: 'rejectOffer',
                args: [
                    offerId
                ],
                gas: 300000n
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    return {
        // Write functions
        makeOffer,
        acceptOffer,
        cancelOffer,
        rejectOffer,
        // Transaction states
        isPending,
        isConfirming,
        isSuccess,
        error,
        hash
    };
}
_s(useKektvOffers, "EWmNxQ2FwHS34cCxh5LJrW/3uUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitchChain"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"]
    ];
});
function useTokenOffers(tokenId) {
    _s1();
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
        functionName: 'getTokenOffers',
        args: tokenId !== null ? [
            BigInt(tokenId)
        ] : undefined,
        query: {
            enabled: tokenId !== null,
            refetchInterval: 5000,
            staleTime: 0
        }
    });
    return {
        offerIds: data || [],
        isLoading,
        error,
        refetch
    };
}
_s1(useTokenOffers, "ccdeAjDWWSyMsoWcSVH8Z5VPreA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
function useUserOffers(userAddress) {
    _s2();
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
        functionName: 'getUserOffers',
        args: userAddress ? [
            userAddress
        ] : undefined,
        query: {
            enabled: !!userAddress,
            refetchInterval: 5000,
            staleTime: 0
        }
    });
    return {
        offerIds: data || [],
        isLoading,
        error,
        refetch
    };
}
_s2(useUserOffers, "ccdeAjDWWSyMsoWcSVH8Z5VPreA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
function useReceivedOffers(userAddress) {
    _s3();
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
        functionName: 'getReceivedOffers',
        args: userAddress ? [
            userAddress
        ] : undefined,
        query: {
            enabled: !!userAddress,
            refetchInterval: 5000,
            staleTime: 0
        }
    });
    return {
        offerIds: data || [],
        isLoading,
        error,
        refetch
    };
}
_s3(useReceivedOffers, "ccdeAjDWWSyMsoWcSVH8Z5VPreA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
function useOfferDetails(offerId) {
    _s4();
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
        functionName: 'getOffer',
        args: offerId !== null ? [
            offerId
        ] : undefined,
        query: {
            enabled: offerId !== null
        }
    });
    // Wagmi v2 returns struct data as an object with named properties, NOT as a tuple array!
    // Contract returns struct with named fields
    console.log('🔍 useOfferDetails raw data:', {
        offerId: offerId === null || offerId === void 0 ? void 0 : offerId.toString(),
        data,
        typeofData: typeof data
    });
    // Handle both object (Wagmi v2 struct) and array (old tuple) formats
    const rawData = data;
    const dataAsObject = rawData;
    const dataAsArray = rawData;
    const offer = data ? {
        // Try object properties first (Wagmi v2), fallback to array indices (old format)
        offerId: dataAsObject.offerId || dataAsArray[0],
        offerer: dataAsObject.offerer || dataAsArray[1],
        voucherOwner: dataAsObject.voucherOwner || dataAsArray[2],
        tokenId: dataAsObject.tokenId || dataAsArray[3],
        amount: dataAsObject.amount || dataAsArray[4],
        offerPrice: dataAsObject.offerPrice || dataAsArray[5],
        createdAt: dataAsObject.createdAt || dataAsArray[6],
        active: dataAsObject.active !== undefined ? dataAsObject.active : dataAsArray[7]
    } : undefined;
    console.log('🔍 useOfferDetails transformed offer:', offer);
    return {
        offer,
        isLoading,
        error,
        refetch
    };
}
_s4(useOfferDetails, "ccdeAjDWWSyMsoWcSVH8Z5VPreA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherHolders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoucherHolders",
    ()=>useVoucherHolders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useVoucherHolders(tokenId) {
    _s();
    const [holders, setHolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoucherHolders.useEffect": ()=>{
            if (tokenId === null) {
                setHolders([]);
                return;
            }
            const fetchHolders = {
                "useVoucherHolders.useEffect.fetchHolders": async ()=>{
                    setIsLoading(true);
                    setError(null);
                    try {
                        // Query BasedAI explorer API for token holders
                        const response = await fetch("https://explorer.bf1337.org/api/v2/tokens/".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS_ADDRESS"], "/instances/").concat(tokenId, "/holders?limit=100"));
                        if (!response.ok) {
                            throw new Error("API error: ".concat(response.status));
                        }
                        const data = await response.json();
                        // Transform API response to holder list
                        const holderList = (data.items || []).map({
                            "useVoucherHolders.useEffect.fetchHolders.holderList": (item)=>({
                                    address: item.address.hash,
                                    balance: BigInt(item.value)
                                })
                        }["useVoucherHolders.useEffect.fetchHolders.holderList"]);
                        // Sort by balance (highest first)
                        holderList.sort({
                            "useVoucherHolders.useEffect.fetchHolders": (a, b)=>Number(b.balance - a.balance)
                        }["useVoucherHolders.useEffect.fetchHolders"]);
                        setHolders(holderList);
                    } catch (err) {
                        console.error('Failed to fetch voucher holders:', err);
                        setError(err instanceof Error ? err.message : 'Unknown error');
                        setHolders([]);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["useVoucherHolders.useEffect.fetchHolders"];
            fetchHolders();
        }
    }["useVoucherHolders.useEffect"], [
        tokenId
    ]);
    // Calculate total supply across all holders
    const totalSupply = holders.reduce((sum, h)=>sum + h.balance, 0n);
    return {
        holders,
        totalSupply,
        holderCount: holders.length,
        isLoading,
        error,
        refetch: ()=>{
            setIsLoading(true);
        }
    };
}
_s(useVoucherHolders, "Sq0sZj2/dIsarEbubNMsWGoRu2A=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OfferCard",
    ()=>OfferCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function OfferCard(param) {
    let { offer, onSuccess, canAccept } = param;
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { acceptOffer, rejectOffer, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"])();
    const { metadataMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    const metadata = metadataMap[Number(offer.tokenId)];
    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
    const voucherName = (metadata === null || metadata === void 0 ? void 0 : metadata.name) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVoucherName"])(Number(offer.tokenId));
    const isYourOffer = offer.offerer.toLowerCase() === (address === null || address === void 0 ? void 0 : address.toLowerCase());
    const isYourVoucher = !offer.voucherOwner || offer.voucherOwner === '0x0000000000000000000000000000000000000000';
    const handleAccept = async ()=>{
        try {
            await acceptOffer(offer.offerId);
            alert('Offer accepted successfully! Vouchers transferred to buyer, BASED transferred to you.');
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        } catch (error) {
            alert("Accept failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    const handleReject = async ()=>{
        try {
            await rejectOffer(offer.offerId);
            alert('Offer rejected! BASED refunded to offerer.');
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
        } catch (error) {
            alert("Reject failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    // Calculate total offer price
    const totalPrice = offer.offerPrice * offer.amount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 hover:border-[#daa520]/40 transition-all relative",
        children: [
            canAccept && address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg shadow-green-500/30 flex items-center gap-1 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "✨"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "You can accept"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-4",
                children: [
                    mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: mediaUrl,
                            alt: voucherName,
                            fill: true,
                            className: "object-contain",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-2",
                            children: "🎫"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-[#daa520] font-fredoka",
                            children: voucherName
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Offerer:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-mono text-xs",
                                        children: [
                                            offer.offerer.slice(0, 6),
                                            "...",
                                            offer.offerer.slice(-4)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Quantity:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: offer.amount.toString()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Price/Each:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatOfferPrice"])(offer.offerPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400 border-t border-gray-800 pt-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Total:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#daa520] font-bold text-lg",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatOfferPrice"])(totalPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 text-center mt-1",
                                children: "💰 BASED escrowed • General offer (anyone can accept)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    isYourOffer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 py-3 rounded-lg bg-gray-700 text-gray-500 text-center font-fredoka font-bold",
                        children: "Your Offer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this) : isYourVoucher && address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAccept,
                                disabled: isPending || !canAccept,
                                className: "py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ".concat(canAccept ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 shadow-lg shadow-green-500/30' : 'bg-gray-700 text-gray-500'),
                                title: !canAccept ? 'Insufficient voucher balance' : '',
                                children: isPending ? 'Processing...' : canAccept ? '✅ Accept' : '❌ Insufficient Balance'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReject,
                                disabled: isPending,
                                className: "py-3 rounded-lg font-fredoka font-bold transition-all bg-red-500/20 text-red-400 hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: isPending ? 'Processing...' : '🚫 Reject'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 py-3 rounded-lg bg-gray-800 text-gray-500 text-center font-fredoka font-bold text-sm",
                        children: "Connect wallet to accept"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(OfferCard, "rYhOQJSzUGpyiEJ3s0XUEhj6Dts=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"]
    ];
});
_c = OfferCard;
var _c;
__turbopack_context__.k.register(_c, "OfferCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrowseOffers",
    ()=>BrowseOffers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherHolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherHolders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvListings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$OfferCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OfferCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// Only show voucher IDs 1, 2, and 3 (exclude 0)
const VOUCHER_OPTIONS = [
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_IDS"].SILVER,
        fallbackIcon: '🥈',
        color: 'gray'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_IDS"].GOLD,
        fallbackIcon: '🥇',
        color: 'gray'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_IDS"].PLATINUM,
        fallbackIcon: '💠',
        color: 'gray'
    }
];
function BrowseOffers() {
    _s();
    const [selectedToken, setSelectedToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { metadataMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    const { vouchers: userVouchers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserVoucherBalances"])();
    // If a token is selected, fetch its offers
    const { offerIds, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"])(selectedToken);
    // Fetch live holder data for selected token
    const { holders, totalSupply, holderCount, isLoading: holdersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherHolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherHolders"])(selectedToken);
    // Calculate actionable offers (offers user can accept based on holdings)
    // Memoized to avoid repeated find() operations on every render
    const userBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BrowseOffers.useMemo[userBalance]": ()=>{
            var _userVouchers_find;
            return selectedToken !== null ? ((_userVouchers_find = userVouchers.find({
                "BrowseOffers.useMemo[userBalance]": (v)=>v.id === selectedToken
            }["BrowseOffers.useMemo[userBalance]"])) === null || _userVouchers_find === void 0 ? void 0 : _userVouchers_find.balance) || 0n : 0n;
        }
    }["BrowseOffers.useMemo[userBalance]"], [
        selectedToken,
        userVouchers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#daa520] mb-4 font-fredoka text-center",
                        children: "Select Voucher Type"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto",
                        children: VOUCHER_OPTIONS.map((voucher)=>{
                            const metadata = metadataMap[voucher.id];
                            const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
                            const voucherName = (metadata === null || metadata === void 0 ? void 0 : metadata.name) || voucher.fallbackIcon;
                            const isSelected = selectedToken === voucher.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedToken(voucher.id),
                                className: "\n                  bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border overflow-hidden transition-all\n                  ".concat(isSelected ? 'border-[#daa520] ring-2 ring-[#daa520]/50 shadow-lg shadow-[#daa520]/20' : 'border-[#daa520]/20 hover:border-[#daa520]/40', "\n                "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: mediaUrl,
                                                alt: voucherName,
                                                fill: true,
                                                className: "object-contain",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                lineNumber: 72,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl mb-2",
                                                children: voucher.fallbackIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                lineNumber: 82,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                            lineNumber: 81,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-[#daa520] font-fredoka",
                                                children: voucherName
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            }, voucher.id, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            selectedToken !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/60 rounded-lg border border-[#daa520]/20 p-6 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-[#daa520] font-fredoka",
                                children: "Current Holders"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            !holdersLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: [
                                    holderCount,
                                    " holders • ",
                                    totalSupply.toString(),
                                    " total vouchers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    holdersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#daa520] mx-auto mb-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Loading holder data..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this) : holders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-gray-500 text-sm",
                        children: "No holders found for this voucher type"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 119,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mb-4",
                                children: "💡 General offers can be accepted by any holder listed below (first come, first served)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 max-h-64 overflow-y-auto",
                                children: holders.map((holder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500 font-mono",
                                                        children: [
                                                            "#",
                                                            index + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-mono text-sm text-gray-300",
                                                        children: [
                                                            holder.address.slice(0, 6),
                                                            "...",
                                                            holder.address.slice(-4)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-bold text-[#daa520]",
                                                children: [
                                                    holder.balance.toString(),
                                                    "× vouchers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, holder.address, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            selectedToken === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-8xl mb-6",
                        children: "👆"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: "Select a Voucher Type"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-md mx-auto",
                        children: "Choose a voucher type above to see all active offers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this) : isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#daa520] mb-6 font-fredoka text-center",
                        children: "Loading Offers..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            1,
                            2,
                            3
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfferCardSkeleton, {}, i, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this) : offerIds.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-8xl mb-6",
                        children: "💼"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: "No Active Offers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-md mx-auto",
                        children: "No one has made offers on this voucher type yet. Be the first!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OffersList, {
                offerIds: offerIds,
                onSuccess: refetch,
                userBalance: userBalance
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(BrowseOffers, "jgbPyFQiCTdB6Is89GZyWgkoVds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserVoucherBalances"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherHolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherHolders"]
    ];
});
_c = BrowseOffers;
/**
 * Display list of offers given their IDs
 */ function OffersList(param) {
    let { offerIds, onSuccess, userBalance } = param;
    _s1();
    const [activeOfferCount, setActiveOfferCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Reset counter when offer list changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OffersList.useEffect": ()=>{
            setActiveOfferCount(0);
        }
    }["OffersList.useEffect"], [
        offerIds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            activeOfferCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-[#daa520] mb-6 font-fredoka text-center",
                children: [
                    "Active Offers (",
                    activeOfferCount,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 ".concat(activeOfferCount === 1 ? 'grid-cols-1 max-w-md mx-auto' : activeOfferCount === 2 ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'),
                children: offerIds.map((offerId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OfferItem, {
                        offerId: offerId,
                        onSuccess: onSuccess,
                        userBalance: userBalance,
                        onActiveChange: (isActive)=>{
                            if (isActive) setActiveOfferCount((prev)=>prev + 1);
                        }
                    }, offerId.toString(), false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            offerIds.length > 0 && activeOfferCount === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-7xl mb-4",
                        children: "⏳"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-3 font-fredoka",
                        children: "All Offers Inactive"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 238,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-md mx-auto",
                        children: "All offers for this voucher have been accepted, cancelled, or expired. Check back later for new offers!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_s1(OffersList, "8hUarhHXzbEmmoXajByypiWS2s0=");
_c1 = OffersList;
/**
 * Individual offer item that fetches and displays offer details
 */ function OfferItem(param) {
    let { offerId, onSuccess, userBalance, onActiveChange } = param;
    _s2();
    const { offer, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferDetails"])(offerId);
    const hasNotified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Check if user can accept this offer
    const canAccept = offer && userBalance >= offer.amount;
    // Notify parent when we know if this offer is active (only once)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OfferItem.useEffect": ()=>{
            if (!isLoading && offer && offer.active && onActiveChange && !hasNotified.current) {
                onActiveChange(true);
                hasNotified.current = true;
            }
        }
    }["OfferItem.useEffect"], [
        isLoading,
        offer,
        onActiveChange
    ]);
    if (isLoading || !offer || !offer.active) {
        return null // Don't show inactive or loading offers
        ;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$OfferCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OfferCard"], {
        offer: offer,
        onSuccess: onSuccess,
        canAccept: canAccept
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
        lineNumber: 283,
        columnNumber: 10
    }, this);
}
_s2(OfferItem, "iVNqLOrmwynDWPt6uIjxabC/QpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferDetails"]
    ];
});
_c2 = OfferItem;
/**
 * Skeleton loader that matches OfferCard layout
 * Provides visual feedback during offer data fetching
 */ function OfferCardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 animate-pulse",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-48 rounded-lg bg-gray-800/50"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 bg-gray-800/50 rounded w-2/3 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-20"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-24"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-20"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-16"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-24"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-20"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-t border-gray-800 pt-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 bg-gray-800/50 rounded w-16"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-5 bg-gray-800/50 rounded w-24"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 h-12 bg-gray-800/50 rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
            lineNumber: 293,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx",
        lineNumber: 292,
        columnNumber: 5
    }, this);
}
_c3 = OfferCardSkeleton;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BrowseOffers");
__turbopack_context__.k.register(_c1, "OffersList");
__turbopack_context__.k.register(_c2, "OfferItem");
__turbopack_context__.k.register(_c3, "OfferCardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MakeOfferForm",
    ()=>MakeOfferForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherHolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherHolders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Only show voucher IDs 1, 2, and 3 (exclude 0)
// No placeholder names - will use metadata from NFT contract
const VOUCHER_OPTIONS = [
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_IDS"].SILVER,
        fallbackIcon: '🥈',
        color: 'gray'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_IDS"].GOLD,
        fallbackIcon: '🥇',
        color: 'gray'
    },
    {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_IDS"].PLATINUM,
        fallbackIcon: '💠',
        color: 'gray'
    }
];
function MakeOfferForm() {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { makeOffer, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"])();
    const { metadataMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    const [selectedVoucher, setSelectedVoucher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [totalBased, setTotalBased] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Fetch live holder data for selected voucher
    const { holders, totalSupply, holderCount, isLoading: holdersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherHolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherHolders"])(selectedVoucher);
    const handleMakeOffer = async ()=>{
        if (selectedVoucher === null || !amount || !totalBased) {
            alert('Please fill in all fields');
            return;
        }
        const amountBigInt = BigInt(amount);
        const totalBasedBigInt = BigInt(Math.floor(Number(totalBased) * 100)) / 100n // Round to 2 decimals
        ;
        // Check minimum offer value
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meetsMinimumOffer"])(amountBigInt, totalBasedBigInt * BigInt(10 ** 18))) {
            alert('Offer total must be at least 0.001 BASED');
            return;
        }
        try {
            await makeOffer(selectedVoucher, amountBigInt, totalBased);
            alert('Offer created successfully! BASED escrowed in contract.');
            // Reset form
            setSelectedVoucher(null);
            setAmount('');
            setTotalBased('');
        } catch (error) {
            alert("Make offer failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    if (!address) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-8xl mb-6",
                    children: "🔌"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                    children: "Connect Your Wallet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-md mx-auto",
                    children: "Connect your wallet to make offers on KEKTV vouchers"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900/60 rounded-lg border border-[#daa520]/20 p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-[#daa520] mb-6 font-fredoka",
                    children: "Make an Offer"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-400 mb-3 text-center",
                                    children: "Select Voucher Type"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                    children: VOUCHER_OPTIONS.map((voucher)=>{
                                        const metadata = metadataMap[voucher.id];
                                        const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
                                        const voucherName = (metadata === null || metadata === void 0 ? void 0 : metadata.name) || voucher.fallbackIcon // Use metadata name if available
                                        ;
                                        const isSelected = selectedVoucher === voucher.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedVoucher(voucher.id),
                                            className: "\n                      bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border overflow-hidden transition-all\n                      ".concat(isSelected ? 'border-[#daa520] ring-2 ring-[#daa520]/50 shadow-lg shadow-[#daa520]/20' : 'border-[#daa520]/20 hover:border-[#daa520]/40', "\n                    "),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: [
                                                    mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full h-32 rounded-lg overflow-hidden bg-black/20 mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: mediaUrl,
                                                            alt: voucherName,
                                                            fill: true,
                                                            className: "object-contain",
                                                            unoptimized: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-5xl mb-2",
                                                            children: voucher.fallbackIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-[#daa520] font-fredoka",
                                                                children: voucherName
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 25
                                                            }, this),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-[#daa520] mt-1",
                                                                children: "✓ Selected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this)
                                        }, voucher.id, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-400 mb-2",
                                    children: "Quantity"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "1",
                                    value: amount,
                                    onChange: (e)=>setAmount(e.target.value),
                                    placeholder: "Enter quantity (e.g., 3)",
                                    className: "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#daa520] focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-gray-400 mb-2",
                                    children: "Total BASED to Offer"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "0.001",
                                    step: "0.001",
                                    value: totalBased,
                                    onChange: (e)=>setTotalBased(e.target.value),
                                    placeholder: "Enter total BASED (e.g., 500)",
                                    className: "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#daa520] focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children: "Minimum total offer: 0.001 BASED"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        amount && totalBased && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Total BASED:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-[#daa520]",
                                                    children: [
                                                        Number(totalBased).toLocaleString(undefined, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        }),
                                                        " BASED"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400",
                                                    children: "Price Per Voucher:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300",
                                                    children: [
                                                        (Number(totalBased) / Number(amount)).toFixed(3),
                                                        " BASED"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 mt-2",
                                    children: "BASED will be escrowed in contract until offer is accepted or canceled"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        selectedVoucher !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-500/10 border border-blue-500/30 rounded-lg p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-blue-400 font-fredoka font-bold",
                                                children: "📊 Market Info"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        !holdersLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                holderCount,
                                                " holders • ",
                                                totalSupply.toString(),
                                                " total"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                holdersLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-400 mx-auto mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Loading holder data..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this) : holders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4 text-gray-500 text-sm",
                                    children: "No current holders"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400 mb-3",
                                            children: [
                                                "💡 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "General Offer:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 24
                                                }, this),
                                                " Any holder below can accept (first come, first served)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1 max-h-48 overflow-y-auto",
                                            children: [
                                                holders.slice(0, 5).map((holder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-2 bg-black/20 rounded text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-500",
                                                                        children: [
                                                                            "#",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-gray-300",
                                                                        children: [
                                                                            holder.address.slice(0, 6),
                                                                            "...",
                                                                            holder.address.slice(-4)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-400 font-bold",
                                                                children: [
                                                                    holder.balance.toString(),
                                                                    "×"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, holder.address, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, this)),
                                                holders.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center text-xs text-gray-500 mt-2",
                                                    children: [
                                                        "+",
                                                        holders.length - 5,
                                                        " more holders"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleMakeOffer,
                            disabled: isPending || !selectedVoucher || !amount || !totalBased,
                            className: "\n              w-full py-4 rounded-lg font-fredoka font-bold text-lg transition-all\n              ".concat(isPending || !selectedVoucher || !amount || !totalBased ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#daa520] to-yellow-600 text-black hover:scale-105 shadow-lg shadow-[#daa520]/20', "\n            "),
                            children: isPending ? '⏳ Creating Offer...' : '💰 Make Offer with BASED'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(MakeOfferForm, "LENYItz22/2lDGGab08Y7unEM6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherHolders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherHolders"]
    ];
});
_c = MakeOfferForm;
var _c;
__turbopack_context__.k.register(_c, "MakeOfferForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OffersView",
    ()=>OffersView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$BrowseOffers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/BrowseOffers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$MakeOfferForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MakeOfferForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function OffersView() {
    _s();
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('marketplace');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-gray-700/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-around py-4 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveView('marketplace'),
                            className: "flex items-center gap-3 px-6 py-2 rounded-lg transition-all cursor-pointer ".concat(activeView === 'marketplace' ? 'bg-[#daa520]/20 border border-[#daa520]/50' : 'border border-transparent hover:bg-gray-800/50'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl",
                                    children: "🏪"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-[#daa520]",
                                            children: "All Offers"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400 whitespace-nowrap",
                                            children: "Browse marketplace"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveView('create'),
                            className: "flex items-center gap-3 px-6 py-2 rounded-lg transition-all cursor-pointer ".concat(activeView === 'create' ? 'bg-[#daa520]/20 border border-[#daa520]/50' : 'border border-transparent hover:bg-gray-800/50'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl",
                                    children: "➕"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-[#daa520]",
                                            children: "Create Offer"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-400 whitespace-nowrap",
                                            children: "Make new offer"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    activeView === 'marketplace' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$BrowseOffers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowseOffers"], {}, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                        lineNumber: 61,
                        columnNumber: 42
                    }, this),
                    activeView === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$MakeOfferForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MakeOfferForm"], {}, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                        lineNumber: 62,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(OffersView, "WUd5EQ2caijqFUO3pmEPQjQJ2uw=");
_c = OffersView;
var _c;
__turbopack_context__.k.register(_c, "OffersView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/services/explorer-api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * BasedAI Explorer API Service
 *
 * Fetches historical event data from the BasedAI blockchain explorer.
 * Uses the Blockscout API to query contract events without running a backend.
 *
 * Events tracked:
 *
 * OFFER EVENTS (KektvOffers contract):
 * - OfferMade: When someone creates a new offer
 * - OfferAccepted: When a voucher owner accepts an offer
 * - OfferCancelled: When the offerer cancels their offer
 * - OfferRejected: When a voucher owner rejects an offer
 *
 * MARKETPLACE EVENTS (KektvMarketplace contract):
 * - VoucherSold: When someone buys from a listing
 * - VoucherListed: When someone lists a voucher for sale
 * - ListingCancelled: When a seller cancels their listing
 */ __turbopack_context__.s([
    "EVENT_SIGNATURES",
    ()=>EVENT_SIGNATURES,
    "ExplorerAPIService",
    ()=>ExplorerAPIService,
    "explorerAPI",
    ()=>explorerAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/ethers/lib.esm/abi/abi-coder.js [app-client] (ecmascript)");
;
;
// BasedAI Explorer API endpoint
const EXPLORER_API = 'https://explorer.bf1337.org/api';
// KEKTV Offers V3 Contract Address (Current - Bug Fix Deployed 2025-10-27)
// V3 Fix: General offers now work correctly (checks msg.sender balance instead of 0x0)
// Previous V2 address (DEPRECATED - had general offers bug): 0x4E8B375C717a136882071923F17Ea08E75DDBcb2
const KEKTV_OFFERS_ADDRESS = '0xee8dc29237d46eff1518bb0503d7f782b651a04e';
// KEKTV Marketplace V6 Contract Address
const KEKTV_MARKETPLACE_ADDRESS = '0x2d79106D60f92F3a6b7B17E3cAd3Df0D4bdcE062';
const EVENT_SIGNATURES = {
    // === OFFER EVENTS (from KektvOffers contract) ===
    // OfferMade(uint256 indexed offerId, address indexed offerer, address indexed voucherOwner, uint256 tokenId, uint256 amount, uint256 offerPrice)
    OfferMade: '0x1a8e4806e9c3198b224bf5fd328ba7488ee72334ba823076cf52dbfce562ffae',
    // OfferAccepted(uint256 indexed offerId, address indexed offerer, address indexed voucherOwner, uint256 tokenId, uint256 amount, uint256 offerPrice)
    OfferAccepted: '0x1f514add757f76c3e97bed00e66989c1e7bdf8b4d2d9c0cc2b122fe33f3d1c43',
    // OfferCancelled(uint256 indexed offerId, address indexed offerer)
    OfferCancelled: '0x1f51377b3e685a0e2419f9bb4ba7c07ec54936353ba3d0fb3c6538dab6766222',
    // OfferRejected(uint256 indexed offerId, address indexed voucherOwner)
    OfferRejected: '0x0a2e4bd6e1f84e8c8e24e5097f098f3e7c6a1c8a0e2f9b0e8c7d3a4b5c6e7f8a',
    // === MARKETPLACE EVENTS (from KektvMarketplace contract) ===
    // VoucherSold(address indexed seller, address indexed buyer, uint256 indexed tokenId, uint256 amount, uint256 totalPrice)
    VoucherSold: '0xecce07a667f396cfd44218046bbb9ae45de559f1c2e3eedbc8da5677ce81df04',
    // VoucherListed(address indexed seller, uint256 indexed tokenId, uint256 amount, uint256 pricePerItem)
    VoucherListed: '0x77a394adf8c68c51dcf5377d5007758bd11b472d589f7196bf41a45d53db8d5f',
    // ListingCancelled(address indexed seller, uint256 indexed tokenId)
    ListingCancelled: '0x2e1a7d4d13322e7b96f9a57413e1525c250fb7a9021cf91d1540d5b69f16a49f'
};
class ExplorerAPIService {
    /**
   * Get all trading events (both offers and marketplace)
   * @param fromBlock - Starting block number (default: 0)
   * @param toBlock - Ending block (default: 'latest')
   */ async getAllEvents() {
        let fromBlock = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, toBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'latest';
        // Fetch from both contracts in parallel
        const [offerEvents, marketplaceEvents] = await Promise.all([
            this.getOfferEvents(fromBlock, toBlock),
            this.getMarketplaceEvents(fromBlock, toBlock)
        ]);
        // Combine and sort by timestamp (newest first)
        const allEvents = [
            ...offerEvents,
            ...marketplaceEvents
        ];
        return allEvents.sort((a, b)=>b.timestamp - a.timestamp);
    }
    /**
   * Get events from KEKTV Offers contract only
   */ async getOfferEvents() {
        let fromBlock = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, toBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'latest';
        const url = new URL(EXPLORER_API);
        url.searchParams.set('module', 'logs');
        url.searchParams.set('action', 'getLogs');
        url.searchParams.set('fromBlock', fromBlock.toString());
        url.searchParams.set('toBlock', toBlock);
        url.searchParams.set('address', KEKTV_OFFERS_ADDRESS);
        const response = await fetch(url.toString());
        const data = await response.json();
        if (data.status === '1' && Array.isArray(data.result)) {
            return data.result.map((log)=>this.parseLog(log)).filter((e)=>e !== null && 'offerId' in e);
        }
        return [];
    }
    /**
   * Get events from KEKTV Marketplace contract only
   */ async getMarketplaceEvents() {
        let fromBlock = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, toBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'latest';
        const url = new URL(EXPLORER_API);
        url.searchParams.set('module', 'logs');
        url.searchParams.set('action', 'getLogs');
        url.searchParams.set('fromBlock', fromBlock.toString());
        url.searchParams.set('toBlock', toBlock);
        url.searchParams.set('address', KEKTV_MARKETPLACE_ADDRESS);
        const response = await fetch(url.toString());
        const data = await response.json();
        if (data.status === '1' && Array.isArray(data.result)) {
            return data.result.map((log)=>this.parseLog(log)).filter((e)=>e !== null && ('seller' in e || 'buyer' in e));
        }
        return [];
    }
    /**
   * Get events by specific type
   * @param eventType - Type of event to fetch
   * @param fromBlock - Starting block
   */ async getEventsByType(eventType) {
        let fromBlock = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        // Determine which contract address to use based on event type
        const isMarketplaceEvent = [
            'VoucherSold',
            'VoucherListed',
            'ListingCancelled'
        ].includes(eventType);
        const contractAddress = isMarketplaceEvent ? KEKTV_MARKETPLACE_ADDRESS : KEKTV_OFFERS_ADDRESS;
        const url = new URL(EXPLORER_API);
        url.searchParams.set('module', 'logs');
        url.searchParams.set('action', 'getLogs');
        url.searchParams.set('fromBlock', fromBlock.toString());
        url.searchParams.set('toBlock', 'latest');
        url.searchParams.set('address', contractAddress);
        url.searchParams.set('topic0', EVENT_SIGNATURES[eventType]);
        const response = await fetch(url.toString());
        const data = await response.json();
        if (data.status === '1' && Array.isArray(data.result)) {
            return data.result.map((log)=>this.parseLog(log)).filter((e)=>e !== null);
        }
        return [];
    }
    /**
   * Get events for a specific NFT (by tokenId)
   * Includes both offer events and marketplace events
   * @param tokenId - NFT token ID
   */ async getEventsForToken(tokenId) {
        const allEvents = await this.getAllEvents();
        return allEvents.filter((event)=>{
            if ('tokenId' in event) {
                return event.tokenId === tokenId;
            }
            return false;
        });
    }
    /**
   * Get events by user address (offerer, voucherOwner, seller, or buyer)
   * Includes both offer events and marketplace events
   * @param userAddress - User's wallet address
   */ async getEventsByUser(userAddress) {
        const allEvents = await this.getAllEvents();
        const normalizedAddress = userAddress.toLowerCase();
        return allEvents.filter((event)=>{
            // Offer events
            if ('offerer' in event && event.offerer.toLowerCase() === normalizedAddress) {
                return true;
            }
            if ('voucherOwner' in event && event.voucherOwner.toLowerCase() === normalizedAddress) {
                return true;
            }
            // Marketplace events
            if ('seller' in event && event.seller.toLowerCase() === normalizedAddress) {
                return true;
            }
            if ('buyer' in event && event.buyer.toLowerCase() === normalizedAddress) {
                return true;
            }
            return false;
        });
    }
    /**
   * Parse raw log into typed event
   */ parseLog(log) {
        const signature = log.topics[0];
        const blockNumber = parseInt(log.blockNumber, 16);
        const timestamp = parseInt(log.timeStamp, 16);
        const transactionHash = log.transactionHash;
        const baseEvent = {
            blockNumber,
            timestamp,
            transactionHash
        };
        try {
            switch(signature){
                // Offer events
                case EVENT_SIGNATURES.OfferMade:
                    return this.parseOfferMade(log, baseEvent);
                case EVENT_SIGNATURES.OfferAccepted:
                    return this.parseOfferAccepted(log, baseEvent);
                case EVENT_SIGNATURES.OfferCancelled:
                    return this.parseOfferCancelled(log, baseEvent);
                case EVENT_SIGNATURES.OfferRejected:
                    return this.parseOfferRejected(log, baseEvent);
                // Marketplace events
                case EVENT_SIGNATURES.VoucherSold:
                    return this.parseVoucherSold(log, baseEvent);
                case EVENT_SIGNATURES.VoucherListed:
                    return this.parseVoucherListed(log, baseEvent);
                case EVENT_SIGNATURES.ListingCancelled:
                    return this.parseListingCancelled(log, baseEvent);
                default:
                    console.warn('Unknown event signature:', signature);
                    return null;
            }
        } catch (error) {
            console.error('Error parsing log:', error, log);
            return null;
        }
    }
    /**
   * Parse OfferMade event
   * event OfferMade(uint256 indexed offerId, address indexed offerer, address indexed voucherOwner, uint256 tokenId, uint256 amount, uint256 offerPrice)
   */ parseOfferMade(log, baseEvent) {
        const offerId = BigInt(log.topics[1]).toString();
        const offerer = '0x' + log.topics[2].slice(26) // Remove padding
        ;
        const voucherOwner = '0x' + log.topics[3].slice(26);
        // Decode non-indexed parameters from data
        const decoded = this.abiCoder.decode([
            'uint256',
            'uint256',
            'uint256'
        ], log.data);
        return {
            ...baseEvent,
            eventType: 'OfferMade',
            offerId,
            offerer,
            voucherOwner,
            tokenId: Number(decoded[0]),
            amount: decoded[1].toString(),
            offerPrice: decoded[2].toString()
        };
    }
    /**
   * Parse OfferAccepted event
   * event OfferAccepted(uint256 indexed offerId, address indexed offerer, address indexed voucherOwner, uint256 tokenId, uint256 amount, uint256 offerPrice)
   */ parseOfferAccepted(log, baseEvent) {
        const offerId = BigInt(log.topics[1]).toString();
        const offerer = '0x' + log.topics[2].slice(26);
        const voucherOwner = '0x' + log.topics[3].slice(26);
        const decoded = this.abiCoder.decode([
            'uint256',
            'uint256',
            'uint256'
        ], log.data);
        return {
            ...baseEvent,
            eventType: 'OfferAccepted',
            offerId,
            offerer,
            voucherOwner,
            tokenId: Number(decoded[0]),
            amount: decoded[1].toString(),
            offerPrice: decoded[2].toString()
        };
    }
    /**
   * Parse OfferCancelled event
   * event OfferCancelled(uint256 indexed offerId, address indexed offerer)
   */ parseOfferCancelled(log, baseEvent) {
        const offerId = BigInt(log.topics[1]).toString();
        const offerer = '0x' + log.topics[2].slice(26);
        return {
            ...baseEvent,
            eventType: 'OfferCancelled',
            offerId,
            offerer
        };
    }
    /**
   * Parse OfferRejected event
   * event OfferRejected(uint256 indexed offerId, address indexed voucherOwner)
   */ parseOfferRejected(log, baseEvent) {
        const offerId = BigInt(log.topics[1]).toString();
        const voucherOwner = '0x' + log.topics[2].slice(26);
        return {
            ...baseEvent,
            eventType: 'OfferRejected',
            offerId,
            voucherOwner
        };
    }
    /**
   * Parse VoucherSold event
   * event VoucherSold(address indexed seller, address indexed buyer, uint256 indexed tokenId, uint256 amount, uint256 totalPrice)
   */ parseVoucherSold(log, baseEvent) {
        const seller = '0x' + log.topics[1].slice(26);
        const buyer = '0x' + log.topics[2].slice(26);
        const tokenId = Number(BigInt(log.topics[3]));
        // Decode non-indexed parameters from data
        const decoded = this.abiCoder.decode([
            'uint256',
            'uint256'
        ], log.data);
        return {
            ...baseEvent,
            eventType: 'VoucherSold',
            seller,
            buyer,
            tokenId,
            amount: decoded[0].toString(),
            totalPrice: decoded[1].toString()
        };
    }
    /**
   * Parse VoucherListed event
   * event VoucherListed(address indexed seller, uint256 indexed tokenId, uint256 amount, uint256 pricePerItem)
   */ parseVoucherListed(log, baseEvent) {
        const seller = '0x' + log.topics[1].slice(26);
        const tokenId = Number(BigInt(log.topics[2]));
        const decoded = this.abiCoder.decode([
            'uint256',
            'uint256'
        ], log.data);
        return {
            ...baseEvent,
            eventType: 'VoucherListed',
            seller,
            tokenId,
            amount: decoded[0].toString(),
            pricePerItem: decoded[1].toString()
        };
    }
    /**
   * Parse ListingCancelled event
   * event ListingCancelled(address indexed seller, uint256 indexed tokenId)
   */ parseListingCancelled(log, baseEvent) {
        const seller = '0x' + log.topics[1].slice(26);
        const tokenId = Number(BigInt(log.topics[2]));
        return {
            ...baseEvent,
            eventType: 'ListingCancelled',
            seller,
            tokenId
        };
    }
    /**
   * Get paginated results (handles >1000 logs limit)
   */ async getAllEventsWithPagination() {
        let allEvents = [];
        let fromBlock = 0;
        let hasMore = true;
        let iterations = 0;
        const MAX_ITERATIONS = 100 // Safety limit
        ;
        while(hasMore && iterations < MAX_ITERATIONS){
            const events = await this.getAllEvents(fromBlock);
            allEvents = [
                ...allEvents,
                ...events
            ];
            if (events.length < 1000) {
                hasMore = false;
            } else {
                // Get next page starting from last block + 1
                const maxBlock = Math.max(...events.map((e)=>e.blockNumber));
                fromBlock = maxBlock + 1;
            }
            iterations++;
        }
        // Remove duplicates (same transaction hash + event type)
        const uniqueEvents = allEvents.filter((event, index, self)=>index === self.findIndex((e)=>e.transactionHash === event.transactionHash && e.eventType === event.eventType));
        return uniqueEvents;
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "abiCoder", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$abi$2d$coder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbiCoder"].defaultAbiCoder());
    }
}
const explorerAPI = new ExplorerAPIService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useOfferHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * React hooks for fetching and managing offer history
 * Uses the BasedAI Explorer API to get historical event data
 */ __turbopack_context__.s([
    "useAllOfferEvents",
    ()=>useAllOfferEvents,
    "useEventsByType",
    ()=>useEventsByType,
    "useMyOfferHistory",
    ()=>useMyOfferHistory,
    "useMyStats",
    ()=>useMyStats,
    "useNFTHistory",
    ()=>useNFTHistory,
    "useNFTStats",
    ()=>useNFTStats,
    "useOfferTimeline",
    ()=>useOfferTimeline,
    "useUserHistory",
    ()=>useUserHistory,
    "useUserStats",
    ()=>useUserStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$services$2f$explorer$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/services/explorer-api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
;
;
;
;
function useNFTHistory(tokenId) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'nft-history',
            tokenId
        ],
        queryFn: {
            "useNFTHistory.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$services$2f$explorer$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explorerAPI"].getEventsForToken(tokenId)
        }["useNFTHistory.useQuery"],
        enabled: tokenId !== null,
        staleTime: 30000,
        refetchInterval: 60000
    });
}
_s(useNFTHistory, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUserHistory(userAddress) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'user-history',
            userAddress
        ],
        queryFn: {
            "useUserHistory.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$services$2f$explorer$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explorerAPI"].getEventsByUser(userAddress)
        }["useUserHistory.useQuery"],
        enabled: !!userAddress,
        staleTime: 30000,
        refetchInterval: 60000
    });
}
_s1(useUserHistory, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useEventsByType(eventType) {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'events-by-type',
            eventType
        ],
        queryFn: {
            "useEventsByType.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$services$2f$explorer$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explorerAPI"].getEventsByType(eventType)
        }["useEventsByType.useQuery"],
        staleTime: 30000,
        refetchInterval: 60000
    });
}
_s2(useEventsByType, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useAllOfferEvents() {
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'all-offer-events'
        ],
        queryFn: {
            "useAllOfferEvents.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$services$2f$explorer$2d$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["explorerAPI"].getAllEventsWithPagination()
        }["useAllOfferEvents.useQuery"],
        staleTime: 60000,
        refetchInterval: 120000
    });
}
_s3(useAllOfferEvents, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useOfferTimeline(tokenId) {
    _s4();
    const { data: events, isLoading, error } = useNFTHistory(tokenId);
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOfferTimeline.useMemo[timeline]": ()=>{
            if (!events || events.length === 0) return [];
            // Group events by offer ID (only process offer events, not marketplace events)
            const offerMap = new Map();
            events.forEach({
                "useOfferTimeline.useMemo[timeline]": (event)=>{
                    // Skip marketplace events - they don't have offerId
                    if (event.eventType === 'VoucherSold' || event.eventType === 'VoucherListed' || event.eventType === 'ListingCancelled') {
                        return;
                    }
                    let offerId;
                    let offer;
                    if (event.eventType === 'OfferMade') {
                        offerId = event.offerId;
                        // Create new offer timeline
                        offer = {
                            offerId: event.offerId,
                            tokenId: event.tokenId,
                            offerer: event.offerer,
                            voucherOwner: event.voucherOwner,
                            amount: event.amount,
                            offerPrice: event.offerPrice,
                            status: 'active',
                            createdAt: event.timestamp,
                            events: [
                                event
                            ]
                        };
                        offerMap.set(offerId, offer);
                    } else {
                        // For other offer events (Accepted, Cancelled, Rejected)
                        if (!('offerId' in event)) return; // Type guard
                        offerId = event.offerId;
                        offer = offerMap.get(offerId);
                        if (offer) {
                            // Add event to existing offer
                            offer.events.push(event);
                            // Update status based on event type
                            if (event.eventType === 'OfferAccepted') {
                                offer.status = 'accepted';
                                offer.resolvedAt = event.timestamp;
                            } else if (event.eventType === 'OfferCancelled') {
                                offer.status = 'cancelled';
                                offer.resolvedAt = event.timestamp;
                            } else if (event.eventType === 'OfferRejected') {
                                offer.status = 'rejected';
                                offer.resolvedAt = event.timestamp;
                            }
                        }
                    }
                }
            }["useOfferTimeline.useMemo[timeline]"]);
            // Sort by creation time (newest first)
            return Array.from(offerMap.values()).sort({
                "useOfferTimeline.useMemo[timeline]": (a, b)=>b.createdAt - a.createdAt
            }["useOfferTimeline.useMemo[timeline]"]);
        }
    }["useOfferTimeline.useMemo[timeline]"], [
        events
    ]);
    return {
        timeline,
        isLoading,
        error
    };
}
_s4(useOfferTimeline, "89nKKJgY06tSAld/GX1xkLIqOIQ=", false, function() {
    return [
        useNFTHistory
    ];
});
function useNFTStats(tokenId) {
    _s5();
    const { data: events, isLoading } = useNFTHistory(tokenId);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useNFTStats.useMemo[stats]": ()=>{
            if (!events || events.length === 0) return null;
            let totalOffers = 0;
            let acceptedOffers = 0;
            let cancelledOffers = 0;
            let rejectedOffers = 0;
            let totalVolume = BigInt(0);
            let lastSalePrice;
            let lastSaleDate;
            // Track offer statuses
            const offerStatuses = new Map();
            events.forEach({
                "useNFTStats.useMemo[stats]": (event)=>{
                    if (event.eventType === 'OfferMade') {
                        totalOffers++;
                        offerStatuses.set(event.offerId, 'active');
                    } else if (event.eventType === 'OfferAccepted') {
                        offerStatuses.set(event.offerId, 'accepted');
                        totalVolume += BigInt(event.offerPrice);
                        lastSalePrice = BigInt(event.offerPrice);
                        lastSaleDate = event.timestamp;
                    } else if (event.eventType === 'OfferCancelled') {
                        offerStatuses.set(event.offerId, 'cancelled');
                    } else if (event.eventType === 'OfferRejected') {
                        offerStatuses.set(event.offerId, 'rejected');
                    }
                }
            }["useNFTStats.useMemo[stats]"]);
            // Count final statuses
            offerStatuses.forEach({
                "useNFTStats.useMemo[stats]": (status)=>{
                    if (status === 'accepted') acceptedOffers++;
                    else if (status === 'cancelled') cancelledOffers++;
                    else if (status === 'rejected') rejectedOffers++;
                }
            }["useNFTStats.useMemo[stats]"]);
            const activeOffers = totalOffers - acceptedOffers - cancelledOffers - rejectedOffers;
            // Calculate average price (only from accepted offers)
            const averagePrice = acceptedOffers > 0 ? totalVolume / BigInt(acceptedOffers) : BigInt(0);
            return {
                totalOffers,
                acceptedOffers,
                cancelledOffers,
                rejectedOffers,
                activeOffers,
                totalVolume,
                averagePrice,
                lastSalePrice,
                lastSaleDate
            };
        }
    }["useNFTStats.useMemo[stats]"], [
        events
    ]);
    return {
        stats,
        isLoading
    };
}
_s5(useNFTStats, "mdBCecxtVNcIbRSi+PU2FyczzLQ=", false, function() {
    return [
        useNFTHistory
    ];
});
function useUserStats(userAddress) {
    _s6();
    const { data: events, isLoading } = useUserHistory(userAddress);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useUserStats.useMemo[stats]": ()=>{
            if (!events || events.length === 0) {
                return {
                    offersMade: 0,
                    offersReceived: 0,
                    offersAccepted: 0,
                    offersCancelled: 0,
                    offersRejected: 0,
                    vouchersSold: 0,
                    vouchersListed: 0,
                    listingsCancelled: 0,
                    totalSpent: BigInt(0),
                    totalEarned: BigInt(0)
                };
            }
            let offersMade = 0;
            let offersReceived = 0;
            let offersAccepted = 0;
            let offersCancelled = 0;
            let offersRejected = 0;
            let vouchersSold = 0;
            let vouchersListed = 0;
            let listingsCancelled = 0;
            let totalSpent = BigInt(0);
            let totalEarned = BigInt(0);
            const normalizedAddress = userAddress === null || userAddress === void 0 ? void 0 : userAddress.toLowerCase();
            events.forEach({
                "useUserStats.useMemo[stats]": (event)=>{
                    // Offer events
                    if (event.eventType === 'OfferMade') {
                        if ('offerer' in event && event.offerer.toLowerCase() === normalizedAddress) {
                            offersMade++;
                        }
                        if ('voucherOwner' in event && event.voucherOwner.toLowerCase() === normalizedAddress && event.voucherOwner !== '0x0000000000000000000000000000000000000000') {
                            offersReceived++;
                        }
                    } else if (event.eventType === 'OfferAccepted') {
                        offersAccepted++;
                        if ('offerer' in event && event.offerer.toLowerCase() === normalizedAddress) {
                            totalSpent += BigInt(event.offerPrice);
                        }
                        if ('voucherOwner' in event && event.voucherOwner.toLowerCase() === normalizedAddress) {
                            totalEarned += BigInt(event.offerPrice);
                        }
                    } else if (event.eventType === 'OfferCancelled') {
                        if ('offerer' in event && event.offerer.toLowerCase() === normalizedAddress) {
                            offersCancelled++;
                        }
                    } else if (event.eventType === 'OfferRejected') {
                        if ('voucherOwner' in event && event.voucherOwner.toLowerCase() === normalizedAddress) {
                            offersRejected++;
                        }
                    } else if (event.eventType === 'VoucherSold') {
                        if ('seller' in event && event.seller.toLowerCase() === normalizedAddress) {
                            vouchersSold++;
                            totalEarned += BigInt(event.totalPrice);
                        }
                        if ('buyer' in event && event.buyer.toLowerCase() === normalizedAddress) {
                            totalSpent += BigInt(event.totalPrice);
                        }
                    } else if (event.eventType === 'VoucherListed') {
                        if ('seller' in event && event.seller.toLowerCase() === normalizedAddress) {
                            vouchersListed++;
                        }
                    } else if (event.eventType === 'ListingCancelled') {
                        if ('seller' in event && event.seller.toLowerCase() === normalizedAddress) {
                            listingsCancelled++;
                        }
                    }
                }
            }["useUserStats.useMemo[stats]"]);
            return {
                offersMade,
                offersReceived,
                offersAccepted,
                offersCancelled,
                offersRejected,
                vouchersSold,
                vouchersListed,
                listingsCancelled,
                totalSpent,
                totalEarned
            };
        }
    }["useUserStats.useMemo[stats]"], [
        events,
        userAddress
    ]);
    return {
        stats,
        isLoading
    };
}
_s6(useUserStats, "4l89w+57WbE07PEDWBBgWMx5OTU=", false, function() {
    return [
        useUserHistory
    ];
});
function useMyOfferHistory() {
    _s7();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    return useUserHistory(address);
}
_s7(useMyOfferHistory, "PMhhU3W0PKr/ovE/9dbFZBNA33A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        useUserHistory
    ];
});
function useMyStats() {
    _s8();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    return useUserStats(address);
}
_s8(useMyStats, "crMvTNriiq3GO7CuckGk/lNDJUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        useUserStats
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherBalance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoucherBalance",
    ()=>useVoucherBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useVoucherBalance() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    // Prepare batch query args
    const accounts = address ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].knownTokenIds.map(()=>address) : undefined;
    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].knownTokenIds.map((id)=>BigInt(id));
    // Read all voucher balances in one call
    const { data: rawBalances, isLoading, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
        functionName: 'balanceOfBatch',
        args: accounts && ids.length > 0 ? [
            accounts,
            ids
        ] : undefined,
        query: {
            enabled: isConnected && !!address,
            refetchInterval: 15000
        }
    });
    // Process balances into structured format
    const vouchers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_TYPES"].map((voucherType, index)=>{
        var _rawBalances_index;
        const balance = (_rawBalances_index = rawBalances === null || rawBalances === void 0 ? void 0 : rawBalances[index]) !== null && _rawBalances_index !== void 0 ? _rawBalances_index : BigInt(0);
        return {
            id: voucherType.id,
            name: voucherType.name,
            description: voucherType.description,
            icon: voucherType.icon,
            imageUrl: voucherType.imageUrl,
            rarity: voucherType.rarity,
            balance,
            balanceNumber: Number(balance)
        };
    });
    // Filter to only vouchers with non-zero balance
    const ownedVouchers = vouchers.filter((v)=>v.balanceNumber > 0);
    // Total voucher count across all types
    const totalVouchers = vouchers.reduce((sum, v)=>sum + v.balanceNumber, 0);
    // Count of unique voucher types owned
    const uniqueVoucherTypes = ownedVouchers.length;
    return {
        // Voucher data
        vouchers,
        ownedVouchers,
        totalVouchers,
        uniqueVoucherTypes,
        // Contract info
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
        explorerUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].explorerUrl,
        // State
        isLoading,
        isError,
        error: (error === null || error === void 0 ? void 0 : error.message) || null,
        isConnected,
        // Actions
        refetch
    };
}
_s(useVoucherBalance, "57Bl6EpqFyrB4L2vAweTHewGfds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useAllReceivableOffers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useAllReceivableOffers Hook
 *
 * Comprehensive offer detection that includes:
 * 1. Targeted offers (voucherOwner = your address)
 * 2. General offers (voucherOwner = 0x0) for tokens you own
 *
 * This fixes the issue where general offers don't show up in "Offers You Can Accept"
 */ __turbopack_context__.s([
    "useAllReceivableOffers",
    ()=>useAllReceivableOffers,
    "useFilteredReceivableOffers",
    ()=>useFilteredReceivableOffers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherBalance.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
function useAllReceivableOffers() {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const [allOfferIds, setAllOfferIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeOfferIds, setActiveOfferIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Get targeted offers (voucherOwner = your address)
    const { offerIds: targetedOffers, isLoading: targetedLoading, refetch: refetchTargeted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReceivedOffers"])(address);
    // Get vouchers you own
    const { ownedVouchers, isLoading: balanceLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"])();
    // Get general offers for each token you own
    const tokenId0 = ownedVouchers.find((v)=>v.id === 0) ? 0 : null;
    const tokenId1 = ownedVouchers.find((v)=>v.id === 1) ? 1 : null;
    const tokenId2 = ownedVouchers.find((v)=>v.id === 2) ? 2 : null;
    const tokenId3 = ownedVouchers.find((v)=>v.id === 3) ? 3 : null;
    const { offerIds: token0Offers, isLoading: token0Loading, refetch: refetch0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"])(tokenId0);
    const { offerIds: token1Offers, isLoading: token1Loading, refetch: refetch1 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"])(tokenId1);
    const { offerIds: token2Offers, isLoading: token2Loading, refetch: refetch2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"])(tokenId2);
    const { offerIds: token3Offers, isLoading: token3Loading, refetch: refetch3 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"])(tokenId3);
    // Combine and deduplicate all offers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAllReceivableOffers.useEffect": ()=>{
            const combineOffers = {
                "useAllReceivableOffers.useEffect.combineOffers": async ()=>{
                    setIsLoading(true);
                    // Combine all offer IDs
                    const allIds = new Set();
                    // Add targeted offers
                    targetedOffers.forEach({
                        "useAllReceivableOffers.useEffect.combineOffers": (id)=>allIds.add(id.toString())
                    }["useAllReceivableOffers.useEffect.combineOffers"]);
                    // Add general offers for tokens you own
                    token0Offers.forEach({
                        "useAllReceivableOffers.useEffect.combineOffers": (id)=>allIds.add(id.toString())
                    }["useAllReceivableOffers.useEffect.combineOffers"]);
                    token1Offers.forEach({
                        "useAllReceivableOffers.useEffect.combineOffers": (id)=>allIds.add(id.toString())
                    }["useAllReceivableOffers.useEffect.combineOffers"]);
                    token2Offers.forEach({
                        "useAllReceivableOffers.useEffect.combineOffers": (id)=>allIds.add(id.toString())
                    }["useAllReceivableOffers.useEffect.combineOffers"]);
                    token3Offers.forEach({
                        "useAllReceivableOffers.useEffect.combineOffers": (id)=>allIds.add(id.toString())
                    }["useAllReceivableOffers.useEffect.combineOffers"]);
                    // Convert back to bigint array
                    const uniqueIds = Array.from(allIds).map({
                        "useAllReceivableOffers.useEffect.combineOffers.uniqueIds": (id)=>BigInt(id)
                    }["useAllReceivableOffers.useEffect.combineOffers.uniqueIds"]);
                    setAllOfferIds(uniqueIds);
                    setIsLoading(false);
                }
            }["useAllReceivableOffers.useEffect.combineOffers"];
            if (!targetedLoading && !balanceLoading && !token0Loading && !token1Loading && !token2Loading && !token3Loading) {
                combineOffers();
            }
        }
    }["useAllReceivableOffers.useEffect"], [
        targetedOffers,
        token0Offers,
        token1Offers,
        token2Offers,
        token3Offers,
        targetedLoading,
        balanceLoading,
        token0Loading,
        token1Loading,
        token2Loading,
        token3Loading
    ]);
    // Note: Active filtering is intentionally done at the component level
    // The cards already filter inactive offers for display
    // For counting purposes, UserActivityPage should count the displayed cards
    // not the raw offer IDs to avoid the "shows 2, displays 1" bug
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAllReceivableOffers.useEffect": ()=>{
            // For now, set activeOfferIds = allOfferIds
            // The component will filter them when rendering/counting
            setActiveOfferIds(allOfferIds);
        }
    }["useAllReceivableOffers.useEffect"], [
        allOfferIds
    ]);
    const refetch = async ()=>{
        await Promise.all([
            refetchTargeted(),
            refetch0(),
            refetch1(),
            refetch2(),
            refetch3()
        ]);
    };
    return {
        offerIds: allOfferIds,
        activeOfferIds,
        isLoading,
        refetch
    };
}
_s(useAllReceivableOffers, "ablcFGufoVn1lVpvKmGu32wUVDk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReceivedOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTokenOffers"]
    ];
});
function useFilteredReceivableOffers() {
    _s1();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { offerIds: allOfferIds, isLoading, refetch } = useAllReceivableOffers();
    const { ownedVouchers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"])();
    const [filteredOfferIds, setFilteredOfferIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilteredReceivableOffers.useEffect": ()=>{
            if (!address || isLoading) return;
            const filterOffers = {
                "useFilteredReceivableOffers.useEffect.filterOffers": async ()=>{
                    const filtered = [];
                    for (const offerId of allOfferIds){
                        // Note: We can't use hooks in loops, so we'll need to do the filtering
                        // on the component level or accept some offers that aren't valid
                        // For now, just return all offers and let the cards handle filtering
                        filtered.push(offerId);
                    }
                    setFilteredOfferIds(filtered);
                }
            }["useFilteredReceivableOffers.useEffect.filterOffers"];
            filterOffers();
        }
    }["useFilteredReceivableOffers.useEffect"], [
        allOfferIds,
        address,
        isLoading,
        ownedVouchers
    ]);
    return {
        offerIds: filteredOfferIds,
        isLoading,
        refetch
    };
}
_s1(useFilteredReceivableOffers, "DB3AQP7mpQSF+The/cJC7Mz6X3g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        useAllReceivableOffers,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffersApproval.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKektvOffersApproval",
    ()=>useKektvOffersApproval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useKektvOffersApproval() {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { writeContractAsync, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    // Check if offers contract is already approved
    const { data: isApproved, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
        functionName: 'isApprovedForAll',
        args: address ? [
            address,
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"]
        ] : undefined,
        query: {
            enabled: !!address,
            staleTime: 0,
            gcTime: 0
        }
    });
    // DEBUG: Log approval state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKektvOffersApproval.useEffect": ()=>{
            if (address) {
                console.log('🔐 Offers Contract Approval Status:', {
                    userAddress: address,
                    offersContractAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                    isApprovedRaw: isApproved,
                    isApprovedBoolean: Boolean(isApproved),
                    isLoading
                });
            }
        }
    }["useKektvOffersApproval.useEffect"], [
        address,
        isApproved,
        isLoading
    ]);
    /**
   * Approve offers contract to transfer all voucher types
   * Required before accepting offers!
   */ const approveOffersContract = async ()=>{
        if (!address) throw new Error('Wallet not connected');
        try {
            const hash = await writeContractAsync({
                address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].address,
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].abi,
                functionName: 'setApprovalForAll',
                args: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                    true
                ]
            });
            return hash;
        } catch (error) {
            throw error;
        }
    };
    return {
        isApproved: Boolean(isApproved),
        isLoading,
        approveOffersContract,
        isPending,
        isConfirming,
        isSuccess,
        error,
        hash,
        refetch
    };
}
_s(useKektvOffersApproval, "/vBBXPdjfxXyShNBen5C28tiUf4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWriteContract"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMarketplaceListing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMarketplaceListing",
    ()=>useMarketplaceListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-marketplace.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useMarketplaceListing(tokenId) {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { data: listing, isLoading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ADDRESS"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$marketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_MARKETPLACE_ABI"],
        functionName: 'listings',
        args: address && tokenId !== null ? [
            address,
            BigInt(tokenId)
        ] : undefined,
        query: {
            enabled: !!address && tokenId !== null,
            refetchInterval: 5000
        }
    });
    // Parse listing data from contract tuple
    const isListed = listing ? listing[2] === true && listing[0] > 0n : false;
    const listingAmount = listing ? listing[0] : 0n;
    const listingPrice = listing ? listing[1] : 0n;
    return {
        isListed,
        listing: {
            amount: listingAmount,
            pricePerItem: listingPrice,
            active: isListed
        },
        isLoading,
        refetch
    };
}
_s(useMarketplaceListing, "kY0vWItlxWw/ncl8QqLekIdRGNk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useActiveOfferCount.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useActiveOfferCount Hook
 *
 * Counts only ACTIVE offers from a list of offer IDs
 * Fixes the bug where counter shows "2 offers" but only 1 card displays
 * (because inactive offers are included in the count)
 */ __turbopack_context__.s([
    "useActiveOfferCount",
    ()=>useActiveOfferCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useActiveOfferCount(offerIds) {
    _s();
    const [activeCount, setActiveCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Batch-fetch all offer details efficiently using multicall
    const { data: offersData, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContracts"])({
        contracts: offerIds.map({
            "useActiveOfferCount.useReadContracts": (id)=>({
                    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ADDRESS"],
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTV_OFFERS_ABI"],
                    functionName: 'getOffer',
                    args: [
                        id
                    ]
                })
        }["useActiveOfferCount.useReadContracts"]),
        query: {
            enabled: offerIds.length > 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveOfferCount.useEffect": ()=>{
            if (!offersData || isLoading) {
                setActiveCount(0);
                return;
            }
            // Count how many offers are active
            let count = 0;
            for (const result of offersData){
                if (result.status === 'success' && result.result) {
                    // Parse offer struct (can be object or array depending on wagmi version)
                    const offer = result.result;
                    const offerAsObject = offer;
                    const offerAsArray = offer;
                    // Check if offer.active is true (handle both object and array formats)
                    const isActive = offerAsObject.active !== undefined ? offerAsObject.active : offerAsArray[7];
                    if (isActive) {
                        count++;
                    }
                }
            }
            setActiveCount(count);
        }
    }["useActiveOfferCount.useEffect"], [
        offersData,
        isLoading
    ]);
    return {
        activeCount,
        isLoading
    };
}
_s(useActiveOfferCount, "dc2eqEDAdYp9S5ixgdnhp2ljlgk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContracts"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * User Activity Page
 * Comprehensive trading hub with NFT card-based layout
 * Shows your listings, offers, and offers you can accept as visual cards
 */ __turbopack_context__.s([
    "UserActivityPage",
    ()=>UserActivityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useOfferHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useOfferHistory.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvListings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvMarketplace.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useAllReceivableOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useAllReceivableOffers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherBalance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffersApproval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvOffersApproval.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMarketplaceListing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useActiveOfferCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useActiveOfferCount.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/ethers/lib.esm/utils/units.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektv-offers.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Constants
const EXPLORER_BASE_URL = 'https://explorer.bf1337.org';
// Helper function to safely get voucher name
function getVoucherName(tokenId) {
    if (tokenId === undefined) return 'Unknown Voucher';
    const id = Number(tokenId);
    if (id in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_NAMES"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektv$2d$offers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VOUCHER_NAMES"][id];
    }
    return "Voucher #".concat(id);
}
// Helper function to safely calculate price per item
function calculatePricePerItem(offerPrice, amount) {
    const priceNum = Number(offerPrice);
    const amountNum = Number(amount);
    if (amountNum === 0 || !isFinite(amountNum) || amountNum < 0) return 0;
    return priceNum / amountNum / 1e18;
}
// Helper function to safely calculate total price
function calculateTotalPrice(offerPrice) {
    return Number(offerPrice) / 1e18;
}
function UserActivityPage() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { data: events, isLoading, refetch: refetchHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useOfferHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyOfferHistory"])();
    const { listings, refetch: refetchListings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvListings"])(address);
    const { offerIds: madeOfferIds, refetch: refetchMade } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserOffers"])(address);
    const { offerIds: receivedOfferIds, refetch: refetchReceived } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useAllReceivableOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllReceivableOffers"])() // NEW: Comprehensive offer detection
    ;
    const { metadataMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    const { ownedVouchers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"])() // For filtering offers
    ;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('accept');
    // FIX: Count only ACTIVE offers (fixes "shows 2, displays 1" bug)
    const { activeCount: activeReceivedCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useActiveOfferCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveOfferCount"])(receivedOfferIds);
    const { activeCount: activeMadeCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useActiveOfferCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveOfferCount"])(madeOfferIds);
    // DEBUG: Log offer IDs to diagnose display issues
    console.log('🎯 UserActivityPage - Offer IDs:', {
        address,
        madeOfferIds: madeOfferIds.map((id)=>id.toString()),
        receivedOfferIds: receivedOfferIds.map((id)=>id.toString()),
        madeCount: madeOfferIds.length,
        receivedCount: receivedOfferIds.length
    });
    const handleRefresh = async ()=>{
        await Promise.all([
            refetchHistory(),
            refetchListings(),
            refetchMade(),
            refetchReceived()
        ]);
    };
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "👤"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-[#daa520] mb-2 font-fredoka",
                    children: "Connect Your Wallet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Connect your wallet to view your trading activity"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#daa520] mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Loading your activity..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-[#daa520] font-fredoka",
                                children: "My Trading Activity"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRefresh,
                                disabled: isLoading,
                                className: "px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-[#daa520] transition disabled:opacity-50",
                                children: "🔄 Refresh"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Manage your offers, listings, and view trading history"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-gray-700/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-around py-4 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBarItem, {
                            icon: "✨",
                            label: "Offers to Accept",
                            value: activeReceivedCount,
                            highlight: activeReceivedCount > 0,
                            onClick: ()=>setActiveTab('accept'),
                            isActive: activeTab === 'accept'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBarItem, {
                            icon: "💼",
                            label: "Your Active Offers",
                            value: activeMadeCount,
                            highlight: activeMadeCount > 0,
                            onClick: ()=>setActiveTab('your-offers'),
                            isActive: activeTab === 'your-offers'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatBarItem, {
                            icon: "🏪",
                            label: "Active Listings",
                            value: listings.length,
                            highlight: listings.length > 0,
                            onClick: ()=>setActiveTab('listings'),
                            isActive: activeTab === 'listings'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    activeTab === 'accept' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OffersYouCanAcceptSection, {
                        offerIds: receivedOfferIds,
                        onRefresh: handleRefresh,
                        metadataMap: metadataMap,
                        ownedVouchers: ownedVouchers,
                        userAddress: address
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    activeTab === 'your-offers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YourOffersSection, {
                        offerIds: madeOfferIds,
                        onRefresh: handleRefresh,
                        metadataMap: metadataMap
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    activeTab === 'listings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YourMarketplaceListingsSection, {
                        listings: listings,
                        onRefresh: handleRefresh,
                        metadataMap: metadataMap
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6 space-y-4 pt-6 border-t border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#daa520] font-fredoka",
                        children: "📜 Activity History"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityHistory, {
                        events: events || [],
                        userAddress: address
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(UserActivityPage, "icI6g17UV/6JpKHUULbzUJv5bIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useOfferHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMyOfferHistory"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvListings"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useAllReceivableOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllReceivableOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useActiveOfferCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveOfferCount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useActiveOfferCount$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveOfferCount"]
    ];
});
_c = UserActivityPage;
/**
 * Stat Bar Item - Compact horizontal stat with click-to-navigate
 */ function StatBarItem(param) {
    let { icon, label, value, highlight, onClick, isActive } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center gap-3 px-6 py-2 rounded-lg transition-all cursor-pointer ".concat(isActive ? 'bg-[#daa520]/20 border border-[#daa520]/50' : 'border border-transparent hover:bg-gray-800/50'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-3xl",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold ".concat(highlight ? 'text-[#daa520]' : 'text-white'),
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400 whitespace-nowrap",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
_c1 = StatBarItem;
/**
 * Offers You Can Accept Section - NFT Card Grid
 */ function OffersYouCanAcceptSection(param) {
    let { offerIds, onRefresh, metadataMap, ownedVouchers, userAddress } = param;
    if (offerIds.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "💰"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-400",
                    children: "No offers to accept right now"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "Offers on your vouchers will appear here as NFT cards"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 242,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5",
        children: offerIds.map((offerId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AcceptableOfferNFTCard, {
                offerId: offerId,
                onRefresh: onRefresh,
                metadataMap: metadataMap,
                ownedVouchers: ownedVouchers,
                userAddress: userAddress
            }, offerId.toString(), false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_c2 = OffersYouCanAcceptSection;
/**
 * Acceptable Offer NFT Card - Full voucher card with image
 * NOW WITH SMART FILTERING:
 * - Filters out offers you made yourself
 * - Filters out inactive offers
 * - Filters out general offers for tokens you don't own
 */ function AcceptableOfferNFTCard(param) {
    let { offerId, onRefresh, metadataMap, ownedVouchers, userAddress } = param;
    _s1();
    const { offer, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferDetails"])(offerId);
    const { acceptOffer, rejectOffer, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"])();
    const { cancelListing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"])();
    const { isApproved, isLoading: isCheckingApproval, approveOffersContract, isPending: isApprovePending, isConfirming: isApproveConfirming, refetch: refetchApproval } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffersApproval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffersApproval"])();
    // Check if this token is listed on marketplace
    const { isListed, listing: _listing, refetch: refetchListing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListing"])(offer ? Number(offer.tokenId) : null);
    const [isAccepting, setIsAccepting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRejecting, setIsRejecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDelisting, setIsDelisting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcceptableOfferNFTCard.useEffect": ()=>{
            return ({
                "AcceptableOfferNFTCard.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["AcceptableOfferNFTCard.useEffect"];
        }
    }["AcceptableOfferNFTCard.useEffect"], []);
    const handleApprove = async ()=>{
        try {
            await approveOffersContract();
            // Approval successful - refetch approval status to update UI
            // Wait longer for blockchain confirmation (3 blocks ~36s)
            setTimeout(()=>{
                refetchApproval();
            }, 5000); // Wait 5s for blockchain confirmation
        } catch (error) {
            console.error('Failed to approve:', error);
        }
    };
    const handleAccept = async ()=>{
        if (!offer) return;
        try {
            // Step 1: Check if token is listed on marketplace
            if (isListed) {
                console.log('🏪 Token is listed on marketplace - auto-delisting first');
                setIsDelisting(true);
                try {
                    // Delist from marketplace first
                    await cancelListing(offer.tokenId);
                    console.log('✅ Successfully delisted from marketplace');
                    // Wait for blockchain confirmation
                    await new Promise((resolve)=>setTimeout(resolve, 3000));
                    // Refetch listing status to confirm
                    await refetchListing();
                } catch (delistError) {
                    console.error('❌ Failed to delist:', delistError);
                    throw new Error('Failed to delist from marketplace. Please try manually.');
                } finally{
                    setIsDelisting(false);
                }
            }
            // Step 2: Accept the offer
            setIsAccepting(true);
            console.log('✅ Accepting offer...');
            await acceptOffer(offerId);
            if (isMountedRef.current) {
                onRefresh();
            }
        } catch (error) {
            console.error('Failed to accept offer:', error);
        } finally{
            if (isMountedRef.current) {
                setIsAccepting(false);
                setIsDelisting(false);
            }
        }
    };
    const handleReject = async ()=>{
        try {
            setIsRejecting(true);
            await rejectOffer(offerId);
            if (isMountedRef.current) {
                onRefresh();
            }
        } catch (error) {
            console.error('Failed to reject offer:', error);
        } finally{
            if (isMountedRef.current) {
                setIsRejecting(false);
            }
        }
    };
    // IMPORTANT: Check loading state FIRST before accessing offer properties
    if (isLoading || !offer) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse text-center text-gray-400",
                children: "Loading offer..."
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 392,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 391,
            columnNumber: 7
        }, this);
    }
    // CRITICAL: Validate ALL required offer properties exist before using them
    // The contract might return partial data in edge cases
    if (!offer.offerer || !offer.voucherOwner || offer.tokenId === undefined || offer.amount === undefined || offer.offerPrice === undefined) {
        console.log('🚫 Offer filtered: Missing properties', {
            offerId: offerId.toString(),
            hasOfferer: !!offer.offerer,
            hasVoucherOwner: !!offer.voucherOwner,
            hasTokenId: offer.tokenId !== undefined,
            hasAmount: offer.amount !== undefined,
            hasOfferPrice: offer.offerPrice !== undefined
        });
        return null;
    }
    // DEBUG: Log offer details to diagnose filtering
    console.log('🔍 Checking offer:', {
        offerId: offerId.toString(),
        tokenId: offer.tokenId.toString(),
        offerer: offer.offerer,
        voucherOwner: offer.voucherOwner,
        amount: offer.amount.toString(),
        active: offer.active,
        userAddress: userAddress
    });
    // SIMPLIFIED filtering: Only filter out obviously wrong offers
    // Ownership validation will happen when user tries to accept
    if (userAddress) {
        // 1. Filter out offers you made yourself
        if (offer.offerer.toLowerCase() === userAddress.toLowerCase()) {
            console.log('🚫 Offer filtered: You made this offer yourself');
            return null;
        }
        // 2. Filter out inactive offers
        if (!offer.active) {
            console.log('🚫 Offer filtered: Offer is inactive');
            return null;
        }
        // 3. Distinguish GENERAL offers (voucherOwner = 0x0) vs TARGETED offers (voucherOwner = specific address)
        const isGeneralOffer = offer.voucherOwner === '0x0000000000000000000000000000000000000000';
        console.log('📊 Offer type check:', {
            offerId: offerId.toString(),
            tokenId: offer.tokenId.toString(),
            voucherOwner: offer.voucherOwner,
            isGeneralOffer,
            userAddress,
            ownedVouchers: ownedVouchers.map((v)=>({
                    id: v.id,
                    balance: v.balanceNumber
                }))
        });
        if (!isGeneralOffer) {
            // TARGETED OFFER - only show if it's targeted at YOU
            if (offer.voucherOwner.toLowerCase() !== userAddress.toLowerCase()) {
                console.log('🚫 Offer filtered: Targeted offer not for someone else');
                return null;
            }
        // Targeted offer for you - show it (user can accept or reject)
        } else {
            // GENERAL OFFER - only show if you own enough vouchers to accept
            // General offers CANNOT be rejected by users, so don't show if insufficient balance
            const userVoucher = ownedVouchers.find((v)=>v.id === Number(offer.tokenId));
            const hasEnoughVouchers = userVoucher && userVoucher.balanceNumber >= Number(offer.amount);
            if (!hasEnoughVouchers) {
                var _userVoucher_balanceNumber;
                console.log('🚫 Offer filtered: General offer but insufficient vouchers', {
                    needed: offer.amount.toString(),
                    owned: (_userVoucher_balanceNumber = userVoucher === null || userVoucher === void 0 ? void 0 : userVoucher.balanceNumber) !== null && _userVoucher_balanceNumber !== void 0 ? _userVoucher_balanceNumber : 0
                });
                return null // Don't show general offers if user can't accept them
                ;
            }
        // General offer and user has enough - show it (user can only accept, not reject)
        }
    }
    console.log('✅ Offer PASSED filters - rendering card!');
    const metadata = metadataMap[Number(offer.tokenId)];
    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
    const voucherName = (metadata === null || metadata === void 0 ? void 0 : metadata.name) || getVoucherName(offer.tokenId);
    const pricePerItem = calculatePricePerItem(offer.offerPrice, offer.amount);
    const totalPrice = calculateTotalPrice(offer.offerPrice);
    // Determine offer type for UI rendering
    const isGeneralOffer = offer.voucherOwner === '0x0000000000000000000000000000000000000000';
    // Check if user owns enough vouchers (defensive check, should already be filtered)
    const userVoucher = ownedVouchers.find((v)=>v.id === Number(offer.tokenId));
    const hasEnoughVouchers = userVoucher && userVoucher.balanceNumber >= Number(offer.amount);
    var _userVoucher_balanceNumber1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-lg border-2 border-green-500/30 hover:border-green-500/50 transition-all relative shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg z-10",
                children: "✨ Accept This"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-4",
                children: [
                    mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: mediaUrl,
                            alt: voucherName,
                            fill: true,
                            className: "object-contain",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 498,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 497,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-2",
                            children: "💰"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 508,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-[#daa520] font-fredoka",
                                children: voucherName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: [
                                    "#",
                                    offer.tokenId.toString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm bg-black/20 rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Offerer:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-mono text-xs",
                                        children: [
                                            offer.offerer.slice(0, 6),
                                            "...",
                                            offer.offerer.slice(-4)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Quantity:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: offer.amount.toString()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Price/Each:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold",
                                        children: [
                                            pricePerItem.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            }),
                                            " BASED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 534,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between border-t border-gray-800 pt-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-gray-300",
                                        children: "Total:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 541,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#daa520] font-bold text-lg",
                                        children: [
                                            totalPrice.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            }),
                                            " BASED"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500 text-center mt-2",
                                children: "💰 BASED escrowed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    !hasEnoughVouchers ? /* User doesn't own enough vouchers (defensive - should be filtered out) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center bg-red-500/10 border border-red-500/30 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-400 font-bold mb-1",
                                        children: "❌ Insufficient Vouchers"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "You need ",
                                            offer.amount.toString(),
                                            " ",
                                            voucherName,
                                            " but only have ",
                                            (_userVoucher_balanceNumber1 = userVoucher === null || userVoucher === void 0 ? void 0 : userVoucher.balanceNumber) !== null && _userVoucher_balanceNumber1 !== void 0 ? _userVoucher_balanceNumber1 : 0
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            !isGeneralOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReject,
                                disabled: isPending || isRejecting,
                                className: "w-full py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-red-500 to-rose-600 text-white hover:scale-105 shadow-lg shadow-red-500/30",
                                children: isRejecting ? 'Rejecting...' : '🚫 Reject Offer'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 563,
                                columnNumber: 15
                            }, this),
                            isGeneralOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-xs text-gray-500 p-2",
                                children: "ℹ️ General offers cannot be rejected. Only the offerer can cancel."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 573,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 554,
                        columnNumber: 11
                    }, this) : !isApproved && !isCheckingApproval ? /* Show approval button first if not approved */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleApprove,
                        disabled: isApprovePending || isApproveConfirming,
                        className: "w-full py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:scale-105 shadow-lg shadow-yellow-500/30",
                        children: isApprovePending || isApproveConfirming ? '🔄 Approving...' : '🔓 Approve First'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this) : /* Show accept/reject buttons once approved */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: isGeneralOffer ? "space-y-3" : "grid grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: isGeneralOffer ? 'w-full' : '',
                                children: [
                                    isListed && !isDelisting && !isAccepting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-2 text-xs text-yellow-400 text-center p-2 bg-yellow-500/10 border border-yellow-500/30 rounded",
                                        children: "⚠️ Listed on marketplace - will auto-delist first"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAccept,
                                        disabled: isPending || isAccepting || isDelisting || isRejecting || isCheckingApproval,
                                        className: "w-full py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 shadow-lg shadow-green-500/30",
                                        children: isDelisting ? '🏪 Delisting...' : isAccepting ? '✅ Accepting...' : isListed ? '🔄 Delist & Accept' : '✅ Accept'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this),
                            !isGeneralOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReject,
                                disabled: isPending || isAccepting || isRejecting || isCheckingApproval,
                                className: "py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30",
                                children: isRejecting ? 'Rejecting...' : '🚫 Reject'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 609,
                                columnNumber: 15
                            }, this),
                            isGeneralOffer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-xs text-gray-500 p-2",
                                children: "ℹ️ General offers cannot be rejected"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 620,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 589,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 488,
        columnNumber: 5
    }, this);
}
_s1(AcceptableOfferNFTCard, "H2+Wq0d/mIzY5qk4FaX1ib00+Tg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferDetails"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffersApproval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffersApproval"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListing"]
    ];
});
_c3 = AcceptableOfferNFTCard;
/**
 * Your Offers Section - NFT Card Grid
 */ function YourOffersSection(param) {
    let { offerIds, onRefresh, metadataMap } = param;
    if (offerIds.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "💼"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-400",
                    children: "You haven't created any offers yet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "Browse All Offers and make an offer to get started"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 648,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 645,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5",
        children: offerIds.map((offerId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YourOfferNFTCard, {
                offerId: offerId,
                onRefresh: onRefresh,
                metadataMap: metadataMap
            }, offerId.toString(), false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 656,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 654,
        columnNumber: 5
    }, this);
}
_c4 = YourOffersSection;
/**
 * Your Offer NFT Card - Full voucher card with image
 */ function YourOfferNFTCard(param) {
    let { offerId, onRefresh, metadataMap } = param;
    _s2();
    const { offer, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferDetails"])(offerId);
    const { cancelOffer, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"])();
    const [isCancelling, setIsCancelling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    console.log('💼 YourOfferNFTCard rendering:', {
        offerId: offerId.toString(),
        isLoading,
        hasOffer: !!offer
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "YourOfferNFTCard.useEffect": ()=>{
            return ({
                "YourOfferNFTCard.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["YourOfferNFTCard.useEffect"];
        }
    }["YourOfferNFTCard.useEffect"], []);
    const handleCancel = async ()=>{
        try {
            setIsCancelling(true);
            await cancelOffer(offerId);
            if (isMountedRef.current) {
                onRefresh();
            }
        } catch (error) {
            console.error('Failed to cancel offer:', error);
        } finally{
            if (isMountedRef.current) {
                setIsCancelling(false);
            }
        }
    };
    if (isLoading || !offer) {
        console.log('💼 YourOfferNFTCard: Still loading or no offer data');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse text-center text-gray-400",
                children: "Loading offer..."
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 716,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 715,
            columnNumber: 7
        }, this);
    }
    // CRITICAL: Validate ALL required offer properties exist
    if (!offer.offerer || !offer.voucherOwner || offer.tokenId === undefined || offer.amount === undefined || offer.offerPrice === undefined) {
        console.log('💼 YourOfferNFTCard: Missing properties - filtering out', {
            hasOfferer: !!offer.offerer,
            hasVoucherOwner: !!offer.voucherOwner,
            hasTokenId: offer.tokenId !== undefined,
            hasAmount: offer.amount !== undefined,
            hasOfferPrice: offer.offerPrice !== undefined
        });
        return null;
    }
    console.log('💼 YourOfferNFTCard: Rendering card for offer', {
        offerId: offerId.toString(),
        tokenId: offer.tokenId.toString(),
        amount: offer.amount.toString(),
        active: offer.active
    });
    // CRITICAL: Filter out inactive (cancelled/accepted/rejected) offers
    if (!offer.active) {
        console.log('💼 YourOfferNFTCard: Filtering out inactive offer', {
            offerId: offerId.toString(),
            active: offer.active
        });
        return null;
    }
    const metadata = metadataMap[Number(offer.tokenId)];
    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
    const voucherName = (metadata === null || metadata === void 0 ? void 0 : metadata.name) || getVoucherName(offer.tokenId);
    const pricePerItem = calculatePricePerItem(offer.offerPrice, offer.amount);
    const totalPrice = calculateTotalPrice(offer.offerPrice);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 hover:border-[#daa520]/40 transition-all shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-4",
            children: [
                mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: mediaUrl,
                        alt: voucherName,
                        fill: true,
                        className: "object-contain",
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 761,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 760,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-2",
                        children: "💼"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 771,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 770,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-[#daa520] font-fredoka",
                            children: voucherName
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 777,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: [
                                "#",
                                offer.tokenId.toString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 780,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 776,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-sm bg-black/20 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "To:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 788,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-mono text-xs",
                                    children: offer.voucherOwner === '0x0000000000000000000000000000000000000000' ? 'Anyone' : "".concat(offer.voucherOwner.slice(0, 6), "...").concat(offer.voucherOwner.slice(-4))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 789,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 787,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Quantity:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 797,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold",
                                    children: offer.amount.toString()
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 798,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 796,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Price/Each:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 801,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold",
                                    children: [
                                        pricePerItem.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }),
                                        " BASED"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 802,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 800,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-t border-gray-800 pt-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-gray-300",
                                    children: "Total:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 807,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#daa520] font-bold text-lg",
                                    children: [
                                        totalPrice.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }),
                                        " BASED"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 808,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 806,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 786,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCancel,
                    disabled: isPending || isCancelling,
                    className: "w-full py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30",
                    children: isPending || isCancelling ? 'Cancelling...' : '❌ Cancel Offer'
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 815,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 757,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 756,
        columnNumber: 5
    }, this);
}
_s2(YourOfferNFTCard, "v6nEnk23gGuEwT0HMT0hZuTvcsE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferDetails"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvOffers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvOffers"]
    ];
});
_c5 = YourOfferNFTCard;
/**
 * Your Marketplace Listings Section - NFT Card Grid
 */ function YourMarketplaceListingsSection(param) {
    let { listings, onRefresh, metadataMap } = param;
    if (listings.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "🏪"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 842,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-400",
                    children: "You don't have any active listings"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 843,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "List your vouchers for sale to get started"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 844,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 841,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5",
        children: listings.map((listing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketplaceListingNFTCard, {
                listing: listing,
                onRefresh: onRefresh,
                metadataMap: metadataMap
            }, "".concat(listing.seller, "-").concat(listing.tokenId), false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 852,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 850,
        columnNumber: 5
    }, this);
}
_c6 = YourMarketplaceListingsSection;
/**
 * Marketplace Listing NFT Card - Full voucher card with image
 */ function MarketplaceListingNFTCard(param) {
    let { listing, onRefresh, metadataMap } = param;
    _s3();
    const { cancelListing, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"])();
    const [isCancelling, setIsCancelling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketplaceListingNFTCard.useEffect": ()=>{
            return ({
                "MarketplaceListingNFTCard.useEffect": ()=>{
                    isMountedRef.current = false;
                }
            })["MarketplaceListingNFTCard.useEffect"];
        }
    }["MarketplaceListingNFTCard.useEffect"], []);
    const handleCancel = async ()=>{
        try {
            setIsCancelling(true);
            await cancelListing(BigInt(listing.tokenId));
            if (isMountedRef.current) {
                onRefresh();
            }
        } catch (error) {
            console.error('Failed to cancel listing:', error);
        } finally{
            if (isMountedRef.current) {
                setIsCancelling(false);
            }
        }
    };
    // CRITICAL: Validate ALL required listing properties exist
    if (listing.tokenId === undefined || listing.amount === undefined || listing.pricePerItem === undefined || listing.totalPrice === undefined) {
        return null;
    }
    const metadata = metadataMap[Number(listing.tokenId)];
    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
    const voucherName = (metadata === null || metadata === void 0 ? void 0 : metadata.name) || getVoucherName(listing.tokenId);
    const pricePerItem = Number(listing.pricePerItem) / 1e18;
    const totalPrice = Number(listing.totalPrice) / 1e18;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 hover:border-[#daa520]/40 transition-all shadow-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 space-y-4",
            children: [
                mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: mediaUrl,
                        alt: voucherName,
                        fill: true,
                        className: "object-contain",
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 918,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 917,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-2",
                        children: "🏪"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 928,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 927,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-[#daa520] font-fredoka",
                            children: voucherName
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 934,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: [
                                "#",
                                listing.tokenId.toString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 937,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 933,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 text-sm bg-black/20 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Quantity:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 945,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold",
                                    children: [
                                        listing.amount.toString(),
                                        " vouchers"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 946,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 944,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Price/Each:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 949,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-bold",
                                    children: [
                                        pricePerItem.toLocaleString(),
                                        " BASED"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 950,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 948,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-t border-gray-800 pt-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-gray-300",
                                    children: "Total Value:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 955,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#daa520] font-bold text-lg",
                                    children: [
                                        totalPrice.toLocaleString(),
                                        " BASED"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                    lineNumber: 956,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                            lineNumber: 954,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 943,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCancel,
                    disabled: isPending || isCancelling,
                    className: "w-full py-3 rounded-lg font-fredoka font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30",
                    children: isPending || isCancelling ? 'Cancelling...' : '❌ Cancel Listing'
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 963,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 914,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 913,
        columnNumber: 5
    }, this);
}
_s3(MarketplaceListingNFTCard, "qI3KCqsHquwuOX1rwU/3y0juAfI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"]
    ];
});
_c7 = MarketplaceListingNFTCard;
/**
 * Activity History Section
 */ function ActivityHistory(param) {
    let { events, userAddress } = param;
    if (events.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900/60 rounded-lg border border-gray-700/50 p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "📭"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 988,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl font-fredoka text-gray-400 mb-2",
                    children: "No activity yet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 989,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500",
                    children: "Your trading history will appear here"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                    lineNumber: 990,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
            lineNumber: 987,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: events.map((event, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityCard, {
                event: event,
                userAddress: userAddress
            }, "".concat(event.transactionHash, "-").concat(i), false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 998,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 996,
        columnNumber: 5
    }, this);
}
_c8 = ActivityHistory;
/**
 * Activity card (historical event)
 */ function ActivityCard(param) {
    let { event, userAddress } = param;
    const normalizedAddress = userAddress.toLowerCase();
    const isOfferer = 'offerer' in event && event.offerer.toLowerCase() === normalizedAddress;
    const isOwner = 'voucherOwner' in event && event.voucherOwner.toLowerCase() === normalizedAddress;
    const isSeller = 'seller' in event && event.seller.toLowerCase() === normalizedAddress;
    const isBuyer = 'buyer' in event && event.buyer.toLowerCase() === normalizedAddress;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/60 rounded-lg border border-gray-700/50 p-6 hover:border-gray-600/50 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-6 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: getEventIcon(event.eventType)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1029,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-[#daa520]",
                                        children: getEventLabel(event.eventType, isOfferer, isOwner, isSeller, isBuyer)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 1031,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: formatDate(event.timestamp)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1030,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1028,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "".concat(EXPLORER_BASE_URL, "/tx/").concat(event.transactionHash),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex-shrink-0 px-4 py-2 bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg text-sm text-[#daa520] hover:bg-[#daa520]/20 hover:border-[#daa520]/50 transition font-fredoka font-bold",
                        children: "View TX →"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1039,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 1027,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-6 flex-wrap",
                children: [
                    'tokenId' in event && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: "NFT:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1053,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-white",
                                children: [
                                    "𝕂Ǝ𝕂TV #",
                                    event.tokenId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1054,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1052,
                        columnNumber: 11
                    }, this),
                    'offerPrice' in event && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: "Price:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1060,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-bold text-[#daa520]",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(event.offerPrice, 18),
                                    " BASED"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1061,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1059,
                        columnNumber: 11
                    }, this),
                    'totalPrice' in event && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: "Total:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1069,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-bold text-[#daa520]",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$utils$2f$units$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(event.totalPrice, 18),
                                    " BASED"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1070,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1068,
                        columnNumber: 11
                    }, this),
                    'amount' in event && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: "Amount:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1078,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-white",
                                children: [
                                    event.amount,
                                    " vouchers"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                                lineNumber: 1079,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1077,
                        columnNumber: 11
                    }, this),
                    isOfferer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30",
                        children: "You offered"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1085,
                        columnNumber: 11
                    }, this),
                    isOwner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30",
                        children: "Your voucher"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1090,
                        columnNumber: 11
                    }, this),
                    isSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30",
                        children: "You sold"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1095,
                        columnNumber: 11
                    }, this),
                    isBuyer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30",
                        children: "You bought"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                        lineNumber: 1100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
                lineNumber: 1050,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx",
        lineNumber: 1025,
        columnNumber: 5
    }, this);
}
_c9 = ActivityCard;
/**
 * Helper functions
 */ function getEventIcon(eventType) {
    switch(eventType){
        case 'OfferMade':
            return '💰';
        case 'OfferAccepted':
            return '✅';
        case 'OfferCancelled':
            return '❌';
        case 'OfferRejected':
            return '🚫';
        case 'VoucherSold':
            return '💸';
        case 'VoucherListed':
            return '🏪';
        case 'ListingCancelled':
            return '🚫';
    }
}
function getEventLabel(eventType, isOfferer, isOwner, isSeller, isBuyer) {
    switch(eventType){
        case 'OfferMade':
            if (isOfferer) return 'You made an offer';
            if (isOwner) return 'Received an offer';
            return 'Offer made';
        case 'OfferAccepted':
            if (isOfferer) return 'Your offer was accepted!';
            if (isOwner) return 'You accepted an offer';
            return 'Offer accepted';
        case 'OfferCancelled':
            if (isOfferer) return 'You cancelled your offer';
            if (isOwner) return 'Offer was cancelled';
            return 'Offer cancelled';
        case 'OfferRejected':
            if (isOfferer) return 'Your offer was rejected';
            if (isOwner) return 'You rejected an offer';
            return 'Offer rejected';
        case 'VoucherSold':
            if (isSeller) return 'You sold vouchers';
            if (isBuyer) return 'You bought vouchers';
            return 'Voucher sold';
        case 'VoucherListed':
            if (isSeller) return 'You listed vouchers';
            return 'Voucher listed';
        case 'ListingCancelled':
            if (isSeller) return 'You cancelled your listing';
            return 'Listing cancelled';
    }
}
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return "".concat(diffMins, " minute").concat(diffMins === 1 ? '' : 's', " ago");
    if (diffHours < 24) return "".concat(diffHours, " hour").concat(diffHours === 1 ? '' : 's', " ago");
    if (diffDays < 7) return "".concat(diffDays, " day").concat(diffDays === 1 ? '' : 's', " ago");
    return date.toLocaleDateString();
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "UserActivityPage");
__turbopack_context__.k.register(_c1, "StatBarItem");
__turbopack_context__.k.register(_c2, "OffersYouCanAcceptSection");
__turbopack_context__.k.register(_c3, "AcceptableOfferNFTCard");
__turbopack_context__.k.register(_c4, "YourOffersSection");
__turbopack_context__.k.register(_c5, "YourOfferNFTCard");
__turbopack_context__.k.register(_c6, "YourMarketplaceListingsSection");
__turbopack_context__.k.register(_c7, "MarketplaceListingNFTCard");
__turbopack_context__.k.register(_c8, "ActivityHistory");
__turbopack_context__.k.register(_c9, "ActivityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TradeTab",
    ()=>TradeTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvMarketplace.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useMarketplaceListingsAPI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvListings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvApproval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useKektvApproval.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$OffersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/OffersView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$UserActivityPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/UserActivityPage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function TradeTab() {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('browse');
    const [selectedNFT, setSelectedNFT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    // Show NFT detail view if NFT selected
    if (selectedNFT !== null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NFTDetailView, {
            tokenId: selectedNFT,
            onBack: ()=>setSelectedNFT(null)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 30,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: "𝕂Ǝ𝕂TV Voucher Marketplace"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Trade your 𝕂Ǝ𝕂TECH Vouchers with the community"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setView('browse'),
                        className: "\n              px-6 py-2 rounded-lg font-fredoka font-bold transition-all\n              ".concat(view === 'browse' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'bg-gray-800 text-[#daa520] hover:text-white hover:bg-gray-700', "\n            "),
                        children: "Browse & Buy"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setView('list'),
                        className: "\n              px-6 py-2 rounded-lg font-fredoka font-bold transition-all\n              ".concat(view === 'list' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'bg-gray-800 text-[#daa520] hover:text-white hover:bg-gray-700', "\n            "),
                        children: "List for Sale"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setView('offers'),
                        className: "\n              px-6 py-2 rounded-lg font-fredoka font-bold transition-all\n              ".concat(view === 'offers' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'bg-gray-800 text-[#daa520] hover:text-white hover:bg-gray-700', "\n            "),
                        children: "Offers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setView('activity'),
                        className: "\n              px-6 py-2 rounded-lg font-fredoka font-bold transition-all\n              ".concat(view === 'activity' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'bg-gray-800 text-[#daa520] hover:text-white hover:bg-gray-700', "\n            "),
                        children: "My Trading Activity"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            view === 'browse' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowseListings, {
                onSelectNFT: setSelectedNFT
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this) : view === 'offers' ? !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-8xl mb-6",
                        children: "🔌"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: "Connect Your Wallet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-md mx-auto",
                        children: "Connect your wallet to view and make offers"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 104,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$OffersView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffersView"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this) : view === 'activity' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$UserActivityPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserActivityPage"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this) : !isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-8xl mb-6",
                        children: "🔌"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: "Connect Your Wallet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-md mx-auto",
                        children: "Connect your wallet to list your vouchers for sale"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListVouchers, {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(TradeTab, "ysruiApWc76PpvuLbWOyvJe8LMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"]
    ];
});
_c = TradeTab;
/**
 * Browse and buy voucher listings
 * Shows ALL listings as individual cards + unlisted NFTs
 */ function BrowseListings(param) {
    let { onSelectNFT } = param;
    _s1();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { listings, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListingsAPI"])();
    const marketplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"])();
    const { metadataMap, loading: metadataLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    // All voucher IDs to display (excluding 0 - test NFT)
    const allVoucherIds = [
        1,
        2,
        3
    ];
    // Sort listings by token ID first, then by price
    const sortedListings = [
        ...listings
    ].sort((a, b)=>{
        // First sort by tokenId
        if (a.tokenId !== b.tokenId) {
            return a.tokenId - b.tokenId;
        }
        // Then sort by price (cheapest first)
        const priceA = BigInt(a.pricePerItem);
        const priceB = BigInt(b.pricePerItem);
        return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
    });
    // Track which token IDs have listings
    const listedTokenIds = new Set(listings.map((l)=>l.tokenId));
    // Create array of unlisted NFTs
    const unlistedNFTs = allVoucherIds.filter((id)=>!listedTokenIds.has(id));
    const handleBuy = async (listing)=>{
        if (!address) return;
        try {
            // Convert string values from API to BigInt
            await marketplace.buyVoucher(listing.seller, BigInt(listing.tokenId), BigInt(listing.amount), BigInt(listing.totalPrice) // Convert string to BigInt (CRITICAL!)
            );
            alert('Purchase successful! Vouchers transferred to your wallet.');
        } catch (error) {
            alert("Purchase failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    if (isLoading || metadataLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#daa520] mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Loading marketplace..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            children: [
                sortedListings.map((listing, index)=>{
                    const metadata = metadataMap[listing.tokenId];
                    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
                    // Find if this is the cheapest listing for this token ID
                    const sameTokenListings = sortedListings.filter((l)=>l.tokenId === listing.tokenId);
                    const isCheapest = sameTokenListings[0].seller === listing.seller && sameTokenListings[0].pricePerItem === listing.pricePerItem;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 hover:border-[#daa520]/40 overflow-hidden transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelectNFT(listing.tokenId),
                                    className: "cursor-pointer hover:opacity-80 transition-opacity",
                                    children: [
                                        mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: mediaUrl,
                                                alt: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || "Voucher #".concat(listing.tokenId),
                                                fill: true,
                                                className: "object-contain",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 217,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 216,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl mb-2",
                                                children: listing.tokenId === 0 ? '🎫' : listing.tokenId === 1 ? '🎟️' : listing.tokenId === 2 ? '🏆' : '💎'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 226,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-[#daa520] font-fredoka",
                                                    children: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || "Voucher #".concat(listing.tokenId)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Click to view details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 p-2 bg-black/20 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 text-center",
                                        children: [
                                            "Seller: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-mono",
                                                children: [
                                                    listing.seller.slice(0, 6),
                                                    "...",
                                                    listing.seller.slice(-4)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 245,
                                                columnNumber: 29
                                            }, this),
                                            listing.seller === address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 text-[#daa520] font-bold",
                                                children: "(You)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 249,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 244,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this),
                                isCheapest && sameTokenListings.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 p-2 bg-green-900/30 border border-green-600/30 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-green-400 text-center font-bold",
                                        children: "✅ Best Price for this NFT!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 257,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 256,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Quantity:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold",
                                                    children: listing.amount.toString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Price/Each:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold",
                                                    children: [
                                                        (Number(listing.pricePerItem) / 1e18).toLocaleString(undefined, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        }),
                                                        " BASED"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-gray-400 border-t border-gray-800 pt-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: "You Pay:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#daa520] font-bold text-lg",
                                                    children: [
                                                        (Number(listing.totalPrice) / 1e18).toLocaleString(undefined, {
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        }),
                                                        " BASED"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500 text-center mt-1",
                                            children: "2.5% platform fee deducted from seller"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleBuy(listing),
                                    disabled: !isConnected || marketplace.isPending || listing.seller === address,
                                    className: "\n                    w-full mt-4 py-3 rounded-lg font-fredoka font-bold transition-all\n                    ".concat(!isConnected || listing.seller === address ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : isCheapest ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:scale-105 shadow-lg shadow-green-600/20' : 'bg-gradient-to-r from-[#daa520] to-yellow-600 text-black hover:scale-105 shadow-lg shadow-[#daa520]/20', "\n                  "),
                                    children: !isConnected ? '🔗 Connect Wallet to Buy' : listing.seller === address ? 'Your Listing' : marketplace.isPending ? 'Buying...' : '💰 Buy Now'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 208,
                            columnNumber: 15
                        }, this)
                    }, "listing-".concat(listing.seller, "-").concat(listing.tokenId, "-").concat(index), false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this);
                }),
                unlistedNFTs.map((tokenId)=>{
                    const metadata = metadataMap[tokenId];
                    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg border border-gray-700/50 hover:border-gray-600/50 overflow-hidden transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>onSelectNFT(tokenId),
                                    className: "cursor-pointer hover:opacity-80 transition-opacity",
                                    children: [
                                        mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full h-48 rounded-lg overflow-hidden bg-black/20 mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: mediaUrl,
                                                alt: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || "Voucher #".concat(tokenId),
                                                fill: true,
                                                className: "object-contain",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 329,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 328,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-6xl mb-2",
                                                children: tokenId === 0 ? '🎫' : tokenId === 1 ? '🎟️' : tokenId === 2 ? '🏆' : '💎'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 339,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-[#daa520] font-fredoka",
                                                    children: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || "Voucher #".concat(tokenId)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Click to view details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 322,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800/50 rounded-lg p-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl mb-2",
                                                children: "📭"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 357,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 font-fredoka font-bold mb-1",
                                                children: "Not Listed"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 358,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "No active listings for this voucher"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 359,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 356,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 355,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 320,
                            columnNumber: 15
                        }, this)
                    }, "unlisted-".concat(tokenId), false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 316,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 191,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s1(BrowseListings, "RQtz+b5/5g+SQibbaX6x9JNLaYg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListingsAPI"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"]
    ];
});
_c1 = BrowseListings;
/**
 * List your vouchers for sale
 */ function ListVouchers() {
    var _ownedVouchers_find;
    _s2();
    const { vouchers, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserVoucherBalances"])();
    const approval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvApproval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvApproval"])();
    const marketplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"])();
    const { metadataMap, loading: metadataLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    const [selectedVoucher, setSelectedVoucher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pricePerItem, setPricePerItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Watch for successful approval and refetch approval status
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListVouchers.useEffect": ()=>{
            if (approval.isSuccess) {
                // Wait a bit for blockchain to update, then refetch
                const timer = setTimeout({
                    "ListVouchers.useEffect.timer": async ()=>{
                        await approval.refetch();
                        alert('Marketplace approved! You can now list vouchers.');
                    }
                }["ListVouchers.useEffect.timer"], 2000);
                return ({
                    "ListVouchers.useEffect": ()=>clearTimeout(timer)
                })["ListVouchers.useEffect"];
            }
        }
    }["ListVouchers.useEffect"], [
        approval.isSuccess,
        approval.refetch
    ]);
    const handleApprove = async ()=>{
        try {
            await approval.approveMarketplace();
        // Success message now shown by useEffect after refetch
        } catch (error) {
            alert("Approval failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    const handleList = async ()=>{
        if (selectedVoucher === null || !amount || !pricePerItem) {
            alert('Please fill in all fields');
            return;
        }
        try {
            await marketplace.listVoucher(BigInt(selectedVoucher), BigInt(amount), pricePerItem);
            alert('Voucher listed successfully!');
            setSelectedVoucher(null);
            setAmount('');
            setPricePerItem('');
        } catch (error) {
            alert("Listing failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    if (isLoading || metadataLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#daa520] mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Loading your vouchers..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 429,
            columnNumber: 7
        }, this);
    }
    const ownedVouchers = vouchers.filter((v)=>v.balance > 0n);
    if (ownedVouchers.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-8xl mb-6",
                    children: "🎫"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                    children: "No Vouchers to List"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-md mx-auto",
                    children: "You don't own any KEKTV vouchers yet. Mint or buy some to start trading!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 440,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto space-y-6",
        children: [
            approval.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-500/10 border border-blue-500/30 rounded-lg p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-400",
                            children: "Checking marketplace approval status..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 457,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 455,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 454,
                columnNumber: 9
            }, this) : !approval.isApproved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-yellow-400 mb-2 font-fredoka",
                        children: "🔐 Marketplace Approval Required"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 462,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-4",
                        children: "You need to approve the marketplace to transfer your vouchers. This is a one-time approval."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleApprove,
                        disabled: approval.isPending,
                        className: "px-6 py-3 bg-yellow-500 text-black rounded-lg font-fredoka font-bold hover:bg-yellow-400 transition disabled:opacity-50",
                        children: approval.isPending ? 'Approving...' : 'Approve Marketplace'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 468,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 461,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/60 rounded-lg border border-[#daa520]/20 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-6 font-fredoka",
                        children: "List Vouchers for Sale"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4",
                                    children: ownedVouchers.map((voucher)=>{
                                        const metadata = metadataMap[voucher.id];
                                        const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
                                        const isSelected = selectedVoucher === voucher.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedVoucher(voucher.id),
                                            className: "\n                      rounded-xl border p-4 transition-all text-left\n                      ".concat(isSelected ? 'bg-gradient-to-br from-[#daa520]/20 to-yellow-600/20 border-[#daa520] ring-2 ring-[#daa520]/50' : 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 hover:border-[#daa520]/50', "\n                    "),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-black/20 flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: mediaUrl,
                                                            alt: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || voucher.name,
                                                            fill: true,
                                                            className: "object-contain",
                                                            unoptimized: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full sm:w-32 h-32 flex items-center justify-center bg-black/20 rounded-lg flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-6xl",
                                                            children: voucher.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex flex-col justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start justify-between mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-bold text-white text-lg font-fredoka",
                                                                                children: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || voucher.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                                lineNumber: 527,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "px-3 py-1 rounded-lg bg-gradient-to-r from-[#daa520] to-yellow-600 text-black text-sm font-bold flex-shrink-0",
                                                                                children: [
                                                                                    "×",
                                                                                    voucher.balance.toString()
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                                lineNumber: 530,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-400 mb-2",
                                                                        children: (metadata === null || metadata === void 0 ? void 0 : metadata.description) || "Token ID #".concat(voucher.id)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                        lineNumber: 534,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 25
                                                            }, this),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-[#daa520] font-bold mt-2",
                                                                children: "✓ Selected for listing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 505,
                                                columnNumber: 21
                                            }, this)
                                        }, voucher.id, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-gray-400 mb-2",
                                        children: "Quantity to List"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 554,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        max: selectedVoucher !== null ? Number((_ownedVouchers_find = ownedVouchers.find((v)=>v.id === selectedVoucher)) === null || _ownedVouchers_find === void 0 ? void 0 : _ownedVouchers_find.balance) : undefined,
                                        value: amount,
                                        onChange: (e)=>setAmount(e.target.value),
                                        placeholder: "Enter quantity",
                                        className: "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#daa520] focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-gray-400 mb-2",
                                        children: "Price Per Voucher (BASED)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "1",
                                        value: pricePerItem,
                                        onChange: (e)=>setPricePerItem(e.target.value),
                                        placeholder: "Enter price (e.g., 1000)",
                                        className: "w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#daa520] focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            amount && pricePerItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#daa520]/10 border border-[#daa520]/30 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "Total Sale Price:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 583,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-[#daa520]",
                                                children: [
                                                    (Number(amount) * Number(pricePerItem)).toLocaleString(undefined, {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    }),
                                                    " BASED"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 582,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 mt-2",
                                        children: "You'll receive 97.5% after 2.5% platform fee"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleList,
                                disabled: !approval.isApproved || marketplace.isPending || !selectedVoucher || !amount || !pricePerItem,
                                className: "\n              w-full py-4 rounded-lg font-fredoka font-bold text-lg transition-all\n              ".concat(!approval.isApproved || marketplace.isPending || !selectedVoucher || !amount || !pricePerItem ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#daa520] to-yellow-600 text-black hover:scale-105 shadow-lg shadow-[#daa520]/20', "\n            "),
                                children: !approval.isApproved ? '🔐 Approve Marketplace First' : marketplace.isPending ? '⏳ Listing...' : '💰 List for Sale'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YourListings, {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 614,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_s2(ListVouchers, "/t7RClTsStPXT8g7Od+jDpuuhYM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserVoucherBalances"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvApproval$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvApproval"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"]
    ];
});
_c2 = ListVouchers;
/**
 * Display user's active listings with cancel button
 */ function YourListings() {
    _s3();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { listings, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListingsAPI"])(address);
    const marketplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"])();
    const { metadataMap, loading: metadataLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    const handleCancel = async (tokenId)=>{
        try {
            await marketplace.cancelListing(BigInt(tokenId));
            alert('Listing cancelled successfully!');
        } catch (error) {
            alert("Cancellation failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    if (isLoading || metadataLoading || listings.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/60 rounded-lg border border-[#daa520]/20 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-[#daa520] mb-4 font-fredoka",
                children: "Your Active Listings"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 643,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: listings.map((listing)=>{
                    const metadata = metadataMap[listing.tokenId];
                    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-[#daa520]/30 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-4 hover:border-[#daa520]/50 transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
                            children: [
                                mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-20 h-20 rounded-lg overflow-hidden bg-black/20 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: mediaUrl,
                                        alt: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || listing.voucherName,
                                        fill: true,
                                        className: "object-contain",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 660,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 659,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 flex items-center justify-center bg-black/20 rounded-lg flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl",
                                        children: listing.voucherIcon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 670,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 669,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-bold text-white text-lg font-fredoka mb-1",
                                            children: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || listing.voucherName
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 676,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold",
                                                    children: listing.amount.toString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 21
                                                }, this),
                                                " × ",
                                                (Number(listing.pricePerItem) / 1e18).toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }),
                                                " BASED each"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-[#daa520] mt-1",
                                            children: [
                                                "Total: ",
                                                (Number(listing.totalPrice) / 1e18).toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }),
                                                " BASED"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                            lineNumber: 682,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 675,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleCancel(listing.tokenId),
                                    disabled: marketplace.isPending,
                                    className: "px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition disabled:opacity-50 font-fredoka font-bold whitespace-nowrap",
                                    children: marketplace.isPending ? 'Cancelling...' : 'Cancel Listing'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 688,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 656,
                            columnNumber: 15
                        }, this)
                    }, listing.tokenId, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 652,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
        lineNumber: 642,
        columnNumber: 5
    }, this);
}
_s3(YourListings, "yO8EZbn/01go7yWTzZhUpDZOOxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListingsAPI"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"]
    ];
});
_c3 = YourListings;
/**
 * NFT Detail View - Shows individual NFT with metadata and trading history
 */ function NFTDetailView(param) {
    let { tokenId, onBack } = param;
    _s4();
    const { metadata, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherMetadata"])(tokenId);
    const { listings: allListings, isLoading: listingsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListingsAPI"])();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const marketplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"])();
    // Filter listings for this specific tokenId and sort by price
    const tokenListings = allListings.filter((l)=>l.tokenId === tokenId).sort((a, b)=>{
        const priceA = BigInt(a.pricePerItem);
        const priceB = BigInt(b.pricePerItem);
        return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
    });
    const handleBuy = async (listing)=>{
        if (!address) return;
        try {
            await marketplace.buyVoucher(listing.seller, BigInt(listing.tokenId), BigInt(listing.amount), BigInt(listing.totalPrice));
            alert('Purchase successful! Vouchers transferred to your wallet.');
        } catch (error) {
            alert("Purchase failed: ".concat(error instanceof Error ? error.message : 'Unknown error'));
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#daa520] mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 741,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Loading NFT details..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 742,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 740,
            columnNumber: 7
        }, this);
    }
    if (error || !metadata) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-8xl mb-6",
                    children: "❌"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 750,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                    children: "Error Loading NFT"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 751,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-6",
                    children: error || 'Failed to load NFT metadata'
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 754,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "px-6 py-3 bg-[#daa520] text-black rounded-lg font-fredoka font-bold hover:bg-yellow-600 transition",
                    children: "← Back to Marketplace"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                    lineNumber: 755,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
            lineNumber: 749,
            columnNumber: 7
        }, this);
    }
    const mediaUrl = metadata.animation_url || metadata.image;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBack,
                className: "px-4 py-2 bg-gray-800 text-[#daa520] rounded-lg font-fredoka font-bold hover:bg-gray-700 transition",
                children: "← Back to Marketplace"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 770,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-[#daa520] mb-2 font-fredoka",
                        children: metadata.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 779,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Complete details and metadata for this NFT"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 782,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 p-6",
                        children: mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full aspect-square rounded-lg overflow-hidden bg-black/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: mediaUrl,
                                alt: metadata.name,
                                fill: true,
                                className: "object-contain",
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 791,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 790,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full aspect-square flex items-center justify-center bg-black/20 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-9xl",
                                children: "🎟️"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 801,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                            lineNumber: 800,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 788,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 p-6 space-y-4",
                        children: [
                            metadata.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#daa520] mb-2 font-fredoka",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: metadata.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 810,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#daa520] mb-2 font-fredoka",
                                        children: "Token ID"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 818,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: [
                                            "#",
                                            tokenId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 819,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, this),
                            metadata.attributes && metadata.attributes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-[#daa520] mb-2 font-fredoka",
                                        children: "Attributes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: metadata.attributes.map((attr, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center bg-black/20 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400",
                                                        children: attr.trait_type
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold",
                                                        children: attr.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 828,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 826,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 824,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 807,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 786,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: [
                            "💰 Available Listings ",
                            tokenListings.length > 0 && "(".concat(tokenListings.length, ")")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 844,
                        columnNumber: 9
                    }, this),
                    listingsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#daa520] mx-auto mb-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 850,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400",
                                children: "Loading listings..."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 851,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 849,
                        columnNumber: 11
                    }, this) : tokenListings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-center py-8",
                        children: "No active listings for this NFT. Check back later!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 854,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            tokenListings.map((listing, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-black/20 rounded-lg p-4 border border-gray-700 hover:border-[#daa520]/40 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 mb-1",
                                                        children: "Seller"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 867,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white font-mono",
                                                        children: [
                                                            listing.seller.slice(0, 6),
                                                            "...",
                                                            listing.seller.slice(-4),
                                                            listing.seller === address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-xs text-[#daa520] font-bold",
                                                                children: "(You)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                                lineNumber: 871,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 866,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400 mb-1",
                                                        children: "Price per NFT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-white font-bold",
                                                        children: [
                                                            (Number(listing.pricePerItem) / 1e18).toLocaleString(undefined, {
                                                                minimumFractionDigits: 2,
                                                                maximumFractionDigits: 2
                                                            }),
                                                            " BASED"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 879,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "Qty: ",
                                                            listing.amount.toString(),
                                                            " | Total: ",
                                                            (Number(listing.totalPrice) / 1e18).toFixed(2),
                                                            " BASED"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                        lineNumber: 882,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 877,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleBuy(listing),
                                                    disabled: !isConnected || marketplace.isPending || listing.seller === address,
                                                    className: "\n                        w-full py-2 px-4 rounded-lg font-fredoka font-bold text-sm transition-all\n                        ".concat(!isConnected || listing.seller === address ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : index === 0 ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:scale-105 shadow-lg shadow-green-600/20' : 'bg-gradient-to-r from-[#daa520] to-yellow-600 text-black hover:scale-105 shadow-lg shadow-[#daa520]/20', "\n                      "),
                                                    children: !isConnected ? '🔗 Connect' : listing.seller === address ? 'Your Listing' : marketplace.isPending ? 'Buying...' : index === 0 ? '✅ Best Price' : '💰 Buy Now'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                                lineNumber: 888,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                        lineNumber: 864,
                                        columnNumber: 17
                                    }, this)
                                }, "".concat(listing.seller, "-").concat(listing.tokenId, "-").concat(index), false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 860,
                                    columnNumber: 15
                                }, this)),
                            tokenListings.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 p-3 bg-green-900/20 border border-green-600/30 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-green-400 text-center",
                                    children: "💡 Tip: Listings are sorted by price. The top listing offers the best deal!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                    lineNumber: 915,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                                lineNumber: 914,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 858,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 843,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-lg border border-[#daa520]/20 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-4 font-fredoka",
                        children: "📊 Trading History"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 926,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-center py-8",
                        children: "Trading history feature coming soon! This will show all transactions, offers, and sales for this specific NFT."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                        lineNumber: 929,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
                lineNumber: 925,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx",
        lineNumber: 768,
        columnNumber: 5
    }, this);
}
_s4(NFTDetailView, "pM9wfCyOj5wPIyNvatwUV7GUl00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherMetadata"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useMarketplaceListingsAPI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMarketplaceListingsAPI"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useKektvMarketplace$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKektvMarketplace"]
    ];
});
_c4 = NFTDetailView;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "TradeTab");
__turbopack_context__.k.register(_c1, "BrowseListings");
__turbopack_context__.k.register(_c2, "ListVouchers");
__turbopack_context__.k.register(_c3, "YourListings");
__turbopack_context__.k.register(_c4, "NFTDetailView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Blurred Title Section Component
 *
 * Creates an elegant title section with a blurred background image
 * Features:
 * - Smooth optical blur effect on background image
 * - Layered design with text on top
 * - Responsive and elegant styling
 */ __turbopack_context__.s([
    "BlurredTitleSection",
    ()=>BlurredTitleSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BlurredTitleSection(param) {
    let { title, subtitle, imageSrc = '/images/kekorama.jpg' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mb-12 overflow-hidden rounded-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-full",
                        style: {
                            backgroundImage: "url(".concat(imageSrc, ")"),
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(8px) brightness(0.8)',
                            opacity: 0.5,
                            transform: 'scale(1.05)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-8 py-16 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-1/2 h-32 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3fb8bd]/20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-fredoka relative mb-4 text-3xl font-bold text-[#3fb8bd] sm:text-4xl lg:text-5xl drop-shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative inline-block",
                            children: [
                                title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 blur-md opacity-50",
                                    style: {
                                        color: '#3fb8bd',
                                        zIndex: -1
                                    },
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-fredoka relative text-lg text-gray-200 sm:text-xl drop-shadow-lg",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#3fb8bd] to-transparent opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-20 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = BlurredTitleSection;
var _c;
__turbopack_context__.k.register(_c, "BlurredTitleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketplacePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$MintTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/MintTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$TradeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/marketplace/TradeTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$ui$2f$BlurredTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MarketplacePage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('mint');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 bg-gradient-to-b from-black to-gray-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$ui$2f$BlurredTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurredTitleSection"], {
                            title: "𝕂Ǝ𝕂丅ᵉ匚🅷 Marketplace",
                            subtitle: "Mint new NFTs or trade KEKTV vouchers"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex gap-2 rounded-xl bg-gray-900/60 p-1 border border-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('mint'),
                                            className: "\n                    px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200\n                    ".concat(activeTab === 'mint' ? 'bg-[#3fb8bd] text-black shadow-lg shadow-[#3fb8bd]/20' : 'text-[#3fb8bd] hover:text-white hover:bg-gray-800/50', "\n                  "),
                                            children: "Mint"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('surprise'),
                                            className: "\n                    px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200 text-2xl\n                    ".concat(activeTab === 'surprise' ? 'bg-[#4ecca7] shadow-lg shadow-[#4ecca7]/20' : 'hover:bg-gray-800/50', "\n                  "),
                                            children: "👀"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('kektv'),
                                            className: "\n                    px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200\n                    ".concat(activeTab === 'kektv' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'text-[#daa520] hover:text-white hover:bg-gray-800/50', "\n                  "),
                                            children: "𝕂Ǝ𝕂TV"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('limited'),
                                            className: "\n                    px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200\n                    ".concat(activeTab === 'limited' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'text-purple-400 hover:text-white hover:bg-gray-800/50', "\n                  "),
                                            children: "Limited Edition"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8",
                            children: [
                                activeTab === 'mint' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$MintTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MintTab"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 38
                                }, this),
                                activeTab === 'surprise' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-8xl mb-6",
                                            children: "👀"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-[#4ecca7] mb-4 font-fredoka",
                                            children: "Surprise Mechanics"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 max-w-md mx-auto",
                                            children: "Exciting surprise features coming soon! Stay tuned"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'kektv' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$marketplace$2f$TradeTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeTab"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 39
                                }, this),
                                activeTab === 'limited' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-8xl mb-6",
                                            children: "⭐"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-purple-400 mb-4 font-fredoka",
                                            children: "Limited Edition"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 max-w-md mx-auto",
                                            children: "Exclusive limited edition NFTs. Check back soon for rare drops!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/marketplace/page.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(MarketplacePage, "XTy7RFMUbCqCWV7NoSCDbuw7JfA=");
_c = MarketplacePage;
var _c;
__turbopack_context__.k.register(_c, "MarketplacePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_kektechbmad100_packages_frontend_2a984282._.js.map