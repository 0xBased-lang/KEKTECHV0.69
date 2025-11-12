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
"[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "ButtonIcon",
    ()=>ButtonIcon,
    "LinkButton",
    ()=>LinkButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
// Refined button system - exclusive, clean, professional
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])(// Base styles - minimal and elegant
'inline-flex items-center justify-center gap-2 font-fredoka font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#3fb8bd]/30 focus:ring-offset-2 focus:ring-offset-gray-950', {
    variants: {
        variant: {
            // Primary: Clean gradient fill - professional and exclusive
            primary: 'bg-gradient-to-r from-[#3fb8bd] to-[#4ecca7] text-black shadow-md hover:shadow-lg hover:shadow-[#3fb8bd]/20 hover:opacity-90',
            // Secondary: Elegant outline - refined alternative
            secondary: 'border-2 border-[#3fb8bd]/60 bg-transparent text-[#3fb8bd] hover:border-[#3fb8bd] hover:bg-[#3fb8bd]/5 hover:shadow-md hover:shadow-[#3fb8bd]/10',
            // Ghost: Minimal and subtle
            ghost: 'bg-transparent text-gray-300 hover:bg-gray-800/30 hover:text-[#3fb8bd]'
        },
        size: {
            sm: 'px-5 py-2.5 text-sm rounded-lg',
            md: 'px-8 py-3 text-base rounded-lg',
            lg: 'px-10 py-3.5 text-base rounded-lg'
        },
        fullWidth: {
            true: 'w-full',
            false: 'w-auto'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
        fullWidth: false
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = (param, ref)=>{
    let { className, variant, size, fullWidth, isLoading, leftIcon, rightIcon, children, disabled, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        disabled: disabled || isLoading,
        className: buttonVariants({
            variant,
            size,
            fullWidth,
            className
        }),
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "animate-spin h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
                    lineNumber: 86,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
                    lineNumber: 87,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
            lineNumber: 85,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                leftIcon,
                children,
                rightIcon
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
        lineNumber: 78,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
const LinkButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = (param, ref)=>{
    let { className, variant, size, fullWidth, href, leftIcon, rightIcon, external, children, ...props } = param;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            leftIcon,
            children,
            rightIcon
        ]
    }, void 0, true);
    if (external) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            ref: ref,
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: buttonVariants({
                variant,
                size,
                fullWidth,
                className
            }),
            ...props,
            children: content
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
            lineNumber: 130,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        href: href,
        className: buttonVariants({
            variant,
            size,
            fullWidth,
            className
        }),
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
        lineNumber: 144,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = LinkButton;
LinkButton.displayName = 'LinkButton';
const ButtonIcon = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center justify-center",
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx",
        lineNumber: 160,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = ButtonIcon;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "LinkButton$forwardRef");
__turbopack_context__.k.register(_c3, "LinkButton");
__turbopack_context__.k.register(_c4, "ButtonIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/api/kektech-rankings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * KEKTECH Rankings API Client
 *
 * This client interfaces with the rankings API via our Next.js proxy route.
 * Architecture: Browser → /api/rankings → https://api.kektech.xyz/rankings
 *
 * CORS Solution: Instead of calling api.kektech.xyz directly (which causes CORS errors),
 * we use a Next.js API route that proxies the request server-side.
 *
 * VERIFIED API RESPONSE STRUCTURE (2025-10-10):
 * - Total NFTs: 2470 (live count)
 * - Response format matches TypeScript types below exactly
 * - All data triple-verified from live API
 */ /**
 * Single NFT Ranking Entry
 *
 * IMPORTANT: Types match EXACT API response structure
 * - tokenId is STRING (not number) from API
 * - All fields are required (no optional fields)
 */ __turbopack_context__.s([
    "fetchRankings",
    ()=>fetchRankings,
    "fetchRankingsWithFallback",
    ()=>fetchRankingsWithFallback,
    "getMockRankings",
    ()=>getMockRankings
]);
/**
 * Fetch Rankings API Configuration
 *
 * CORS Solution: We use our Next.js API proxy route at /api/rankings
 * instead of calling the external API directly from the browser.
 * This avoids CORS issues while maintaining the same functionality.
 */ const RANKINGS_CONFIG = {
    /**
   * Base URL for rankings API
   * Uses Next.js API route proxy to avoid CORS issues
   * Route: /app/api/rankings/route.ts
   */ url: '/api/rankings',
    /** Request timeout in milliseconds */ timeout: 10000,
    /** Number of retry attempts on failure */ retries: 3,
    /** Delay between retries (exponential backoff) */ retryDelay: 1000
};
async function fetchRankings() {
    let lastError = null;
    // Retry logic with exponential backoff
    for(let attempt = 1; attempt <= RANKINGS_CONFIG.retries; attempt++){
        try {
            // Create abort controller for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), RANKINGS_CONFIG.timeout);
            // Fetch from API
            const response = await fetch(RANKINGS_CONFIG.url, {
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
                throw new Error("API returned ".concat(response.status, ": ").concat(response.statusText));
            }
            // Parse JSON response
            const data = await response.json();
            // Validate response structure
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid API response: expected object');
            }
            if (!Array.isArray(data.nfts)) {
                throw new Error('Invalid API response: expected nfts array');
            }
            // Validate NFT entries
            if (data.nfts.length > 0) {
                const firstNFT = data.nfts[0];
                if (!firstNFT.rank || !firstNFT.tokenId || !firstNFT.name || !firstNFT.rarityScore || !firstNFT.imageUrl) {
                    throw new Error('Invalid NFT structure in API response');
                }
            }
            // Success! Return data (production-safe logging removed)
            return data;
        } catch (error) {
            lastError = error instanceof Error ? error : new Error(String(error));
            // Log attempt
            console.warn("⚠️  Rankings API attempt ".concat(attempt, "/").concat(RANKINGS_CONFIG.retries, " failed:"), lastError.message);
            // If not last attempt, wait before retry (exponential backoff)
            if (attempt < RANKINGS_CONFIG.retries) {
                const delay = RANKINGS_CONFIG.retryDelay * Math.pow(2, attempt - 1);
                // Retrying with exponential backoff (logging removed for production)
                await new Promise((resolve)=>setTimeout(resolve, delay));
            }
        }
    }
    // All retries failed
    throw new Error("Failed to fetch rankings after ".concat(RANKINGS_CONFIG.retries, " attempts: ").concat((lastError === null || lastError === void 0 ? void 0 : lastError.message) || 'Unknown error'));
}
function getMockRankings() {
    let count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 12;
    const rarityTiers = [
        {
            name: 'Mythic',
            scoreRange: [
                90,
                100
            ],
            chance: 0.05
        },
        {
            name: 'Legendary',
            scoreRange: [
                80,
                90
            ],
            chance: 0.10
        },
        {
            name: 'Epic',
            scoreRange: [
                70,
                80
            ],
            chance: 0.15
        },
        {
            name: 'Rare',
            scoreRange: [
                50,
                70
            ],
            chance: 0.30
        },
        {
            name: 'Common',
            scoreRange: [
                20,
                50
            ],
            chance: 0.40
        }
    ];
    const traits = [
        [
            'Robot',
            'Alien',
            'Human',
            'Cyborg',
            'AI'
        ],
        [
            'Laser Eyes',
            'Normal Eyes',
            'Glowing Eyes',
            '3D Glasses',
            'VR Headset'
        ],
        [
            'Blue Background',
            'Green Background',
            'Purple Background',
            'Red Background',
            'Gradient'
        ],
        [
            'Gold Chain',
            'Silver Chain',
            'Diamond Ring',
            'Crown',
            'None'
        ]
    ];
    return {
        nfts: Array.from({
            length: count
        }, (_, i)=>{
            // Select rarity tier
            const rand = Math.random();
            let cumulative = 0;
            let tier = rarityTiers[rarityTiers.length - 1];
            for (const t of rarityTiers){
                cumulative += t.chance;
                if (rand <= cumulative) {
                    tier = t;
                    break;
                }
            }
            // Generate rarity score
            const [min, max] = tier.scoreRange;
            const rarityScore = Number((min + Math.random() * (max - min)).toFixed(2));
            // Generate random traits
            const selectedTraits = traits.map((traitList)=>traitList[Math.floor(Math.random() * traitList.length)]);
            return {
                rank: i + 1,
                tokenId: String(i + 1),
                name: "𝕂Ǝ𝕂TECH#".concat(i + 1, " ").concat(tier.name, " ").concat(selectedTraits[0]),
                rarityScore,
                imageUrl: "https://api.kektech.xyz/api/image/".concat(i + 1)
            };
        })
    };
}
async function fetchRankingsWithFallback() {
    let count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 12;
    try {
        // Try to fetch real data
        return await fetchRankings();
    } catch (error) {
        // Log error and fall back to mock data
        console.error('❌ Rankings API failed, using mock data:', error);
        console.warn("📦 Generating ".concat(count, " mock NFTs for development"));
        return getMockRankings(count);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedNFTs",
    ()=>FeaturedNFTs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$api$2f$kektech$2d$rankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/api/kektech-rankings.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Fallback NFTs in case API fails
const FALLBACK_NFTS = [
    {
        tokenId: '65',
        name: 'KEKTECH #65',
        imageUrl: '/images/65.png',
        rarityScore: 85
    },
    {
        tokenId: '171',
        name: 'KEKTECH #171',
        imageUrl: '/images/171.png',
        rarityScore: 72
    },
    {
        tokenId: '180',
        name: 'KEKTECH #180',
        imageUrl: '/images/180.png',
        rarityScore: 95
    },
    {
        tokenId: '69',
        name: 'KEKTECH #69',
        imageUrl: '/images/69.png',
        rarityScore: 88
    },
    {
        tokenId: '686',
        name: 'KEKTECH #686',
        imageUrl: '/images/686.png',
        rarityScore: 45
    },
    {
        tokenId: '782',
        name: 'KEKTECH #782',
        imageUrl: '/images/782.png',
        rarityScore: 68
    }
];
// Get random NFTs from the collection
function getRandomNFTs(nfts, count) {
    const shuffled = [
        ...nfts
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, count);
}
function FeaturedNFTs() {
    _s();
    const [allNFTs, setAllNFTs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Fetch all minted NFTs from API with automatic fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedNFTs.useEffect": ()=>{
            async function fetchNFTs() {
                try {
                    // Use the same robust API client as the gallery
                    // Includes: retry logic, exponential backoff, automatic fallback to mock data
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$api$2f$kektech$2d$rankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRankingsWithFallback"])(2471);
                    // Transform rankings data to our format
                    const nfts = data.nfts.map({
                        "FeaturedNFTs.useEffect.fetchNFTs.nfts": (nft)=>({
                                tokenId: nft.tokenId,
                                name: nft.name,
                                imageUrl: nft.imageUrl,
                                rarityScore: nft.rarityScore
                            })
                    }["FeaturedNFTs.useEffect.fetchNFTs.nfts"]);
                    // Shuffle and set random selection for carousel
                    const shuffled = getRandomNFTs(nfts, 50) // Get 50 random NFTs for smooth infinite scroll
                    ;
                    setAllNFTs(shuffled);
                } catch (error) {
                    // This should rarely happen since fetchRankingsWithFallback has built-in fallback
                    console.error('Error fetching NFTs:', error);
                    setAllNFTs(FALLBACK_NFTS);
                } finally{
                    setIsLoading(false);
                }
            }
            fetchNFTs();
        }
    }["FeaturedNFTs.useEffect"], []);
    // Duplicate NFTs array for infinite scroll effect
    const scrollNFTs = [
        ...allNFTs,
        ...allNFTs
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-ebd0e4c9e0544f99" + " " + "bg-gradient-to-b from-gray-900 to-gray-950 py-16 sm:py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ebd0e4c9e0544f99" + " " + "container mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ebd0e4c9e0544f99" + " " + "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-ebd0e4c9e0544f99" + " " + "text-3xl font-bold text-[#3fb8bd] sm:text-4xl mb-4 font-fredoka",
                                children: "Featured NFTs"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-ebd0e4c9e0544f99" + " " + "text-lg text-gray-300 max-w-2xl mx-auto font-fredoka",
                                children: "Discover some of our most unique and sought-after pieces from the KEKTECH collection"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    isLoading ? // Loading skeleton
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ebd0e4c9e0544f99" + " " + "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6",
                        children: [
                            ...Array(6)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ebd0e4c9e0544f99" + " " + "bg-gray-800 rounded-lg overflow-hidden border border-gray-700 animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ebd0e4c9e0544f99" + " " + "aspect-square bg-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ebd0e4c9e0544f99" + " " + "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ebd0e4c9e0544f99" + " " + "h-4 bg-gray-700 rounded mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ebd0e4c9e0544f99" + " " + "h-3 bg-gray-700 rounded w-16"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this) : // Horizontal Scrolling Carousel
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ebd0e4c9e0544f99" + " " + "relative mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ebd0e4c9e0544f99" + " " + "flex overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-ebd0e4c9e0544f99" + " " + "flex gap-4 lg:gap-6 animate-scroll-horizontal",
                                children: scrollNFTs.map((nft, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/gallery",
                                        className: "group block flex-shrink-0 w-48 sm:w-56",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-ebd0e4c9e0544f99" + " " + "bg-gray-800 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 hover:border-[#3fb8bd] hover:shadow-lg hover:shadow-[#3fb8bd]/20 hover:scale-105",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-ebd0e4c9e0544f99" + " " + "aspect-square relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: nft.imageUrl,
                                                            alt: nft.name,
                                                            fill: true,
                                                            className: "object-cover transition-transform duration-300 group-hover:scale-110",
                                                            sizes: "224px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-ebd0e4c9e0544f99" + " " + "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-ebd0e4c9e0544f99" + " " + "p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-ebd0e4c9e0544f99" + " " + "font-semibold text-[#3fb8bd] text-sm truncate font-fredoka",
                                                        children: nft.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                            lineNumber: 108,
                                            columnNumber: 23
                                        }, this)
                                    }, "".concat(nft.tokenId, "-").concat(index), false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                        lineNumber: 103,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ebd0e4c9e0544f99" + " " + "text-center mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkButton"], {
                            href: "/gallery",
                            variant: "primary",
                            size: "lg",
                            children: "View Full Collection"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ebd0e4c9e0544f99",
                children: "@keyframes scroll-horizontal{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-scroll-horizontal.jsx-ebd0e4c9e0544f99{animation:180s linear infinite scroll-horizontal}.animate-scroll-horizontal.jsx-ebd0e4c9e0544f99:hover{animation-play-state:paused}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/sections/FeaturedNFTs.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(FeaturedNFTs, "nzOoLIxh0gxz59WN62E/aPXB2lA=");
_c = FeaturedNFTs;
var _c;
__turbopack_context__.k.register(_c, "FeaturedNFTs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_kektechbmad100_packages_frontend_65ed4532._.js.map