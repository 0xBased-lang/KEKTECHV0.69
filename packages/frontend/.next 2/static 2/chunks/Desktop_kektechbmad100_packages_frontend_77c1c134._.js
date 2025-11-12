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
"[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnhancedNFTCard",
    ()=>EnhancedNFTCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
function EnhancedNFTCard(param) {
    let { nft, showRank = true } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/nft?id=".concat(nft.tokenId),
        className: "group block overflow-hidden rounded-xl border-2 border-[#3fb8bd]/30 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-lg transition-all duration-300 hover:border-[#3fb8bd] hover:shadow-2xl hover:shadow-[#3fb8bd]/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: nft.imageUrl,
                        alt: nft.name,
                        fill: true,
                        className: "object-contain transition-transform duration-500 group-hover:scale-110",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    showRank && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-3 top-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-gradient-to-r from-[#3fb8bd] to-[#4ecca7] px-4 py-1.5 text-sm font-bold text-black shadow-lg",
                            children: [
                                "#",
                                nft.rank
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-fredoka truncate text-lg font-bold text-[#3fb8bd]",
                        children: nft.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "Token ID"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-semibold text-[#4ecca7]",
                                children: [
                                    "#",
                                    nft.tokenId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "Rarity"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-[#a855f7]",
                                children: nft.rarityScore.toFixed(2)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = EnhancedNFTCard;
var _c;
__turbopack_context__.k.register(_c, "EnhancedNFTCard");
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
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useRankings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRankings",
    ()=>useRankings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$api$2f$kektech$2d$rankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/api/kektech-rankings.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useRankings() {
    let pollInterval = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 30000;
    _s();
    const [rankings, setRankings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRankings.useCallback[fetchData]": async ()=>{
            try {
                var _data_nfts;
                setError(null);
                // Fetch from rankings API with automatic fallback to mock data
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$api$2f$kektech$2d$rankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRankingsWithFallback"])();
                setRankings(data.nfts || []);
                setTotal(((_data_nfts = data.nfts) === null || _data_nfts === void 0 ? void 0 : _data_nfts.length) || 0);
                setLastUpdated(new Date());
                // Log successful update (only in development)
                if ("TURBOPACK compile-time truthy", 1) {
                    var _data_nfts1;
                    // eslint-disable-next-line no-console
                    console.log("✅ Rankings updated: ".concat(((_data_nfts1 = data.nfts) === null || _data_nfts1 === void 0 ? void 0 : _data_nfts1.length) || 0, " NFTs at ").concat(new Date().toLocaleTimeString()));
                }
            } catch (err) {
                // This should rarely happen since fetchRankingsWithFallback has built-in fallback
                console.error('❌ Rankings: Failed to fetch data:', err);
                setError(err instanceof Error ? err.message : 'Failed to load rankings');
            } finally{
                setLoading(false);
            }
        }
    }["useRankings.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRankings.useEffect": ()=>{
            // Initial fetch
            fetchData();
            // Set up polling interval
            const interval = setInterval(fetchData, pollInterval);
            // Cleanup on unmount
            return ({
                "useRankings.useEffect": ()=>{
                    clearInterval(interval);
                }
            })["useRankings.useEffect"];
        }
    }["useRankings.useEffect"], [
        fetchData,
        pollInterval
    ]);
    // Manual refresh function
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRankings.useCallback[refresh]": async ()=>{
            setLoading(true);
            await fetchData();
        }
    }["useRankings.useCallback[refresh]"], [
        fetchData
    ]);
    return {
        rankings,
        total,
        loading,
        error,
        lastUpdated,
        refresh
    };
}
_s(useRankings, "YWN7yKTFUzst6USDR7D24J4jyv8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryTabs",
    ()=>GalleryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function GalleryTabs(param) {
    let { children } = param;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ranking');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex gap-2 rounded-xl bg-gray-900/60 border border-gray-800 p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('ranking'),
                            className: "\n              px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200\n              ".concat(activeTab === 'ranking' ? 'bg-[#3fb8bd] text-black shadow-lg shadow-[#3fb8bd]/20' : 'text-[#3fb8bd] hover:text-white hover:bg-gray-800/50', "\n            "),
                            children: "Ranking"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('filter'),
                            className: "\n              px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200\n              ".concat(activeTab === 'filter' ? 'bg-[#4ecca7] text-black shadow-lg shadow-[#4ecca7]/20' : 'text-[#4ecca7] hover:text-white hover:bg-gray-800/50', "\n            "),
                            children: "Filter"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('traits'),
                            className: "\n              px-8 py-3 rounded-lg font-fredoka font-bold transition-all duration-200\n              ".concat(activeTab === 'traits' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'text-[#daa520] hover:text-white hover:bg-gray-800/50', "\n            "),
                            children: "Traits"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[600px]",
                children: children(activeTab)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(GalleryTabs, "9sXzfyZGyeY1UJ9/P9MiVSLeLSQ=");
_c = GalleryTabs;
var _c;
__turbopack_context__.k.register(_c, "GalleryTabs");
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
"[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactStatsWidget",
    ()=>CompactStatsWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$blockchain$2f$kektv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/blockchain/kektv.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CompactStatsWidget() {
    _s();
    const [totalMinted, setTotalMinted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompactStatsWidget.useEffect": ()=>{
            const fetchData = {
                "CompactStatsWidget.useEffect.fetchData": async ()=>{
                    try {
                        const total = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$blockchain$2f$kektv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalSupply"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$blockchain$2f$kektv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTRACTS"].KEKTECH);
                        setTotalMinted(total);
                    } catch (error) {
                        console.error('Error fetching total supply:', error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["CompactStatsWidget.useEffect.fetchData"];
            fetchData();
            const interval = setInterval(fetchData, 30000);
            return ({
                "CompactStatsWidget.useEffect": ()=>clearInterval(interval)
            })["CompactStatsWidget.useEffect"];
        }
    }["CompactStatsWidget.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 w-6 animate-spin rounded-full border-4 border-[#3fb8bd] border-t-transparent"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    const totalSupply = 4200;
    const remaining = totalSupply - totalMinted;
    const progress = (totalMinted / totalSupply * 100).toFixed(1);
    // Tier distribution based on total minted - colors match trait rarity badges
    const tiers = [
        {
            name: 'Mythic',
            minted: Math.floor(totalMinted * (13 / 4200)),
            total: 13,
            color: '#a855f7',
            bgColor: 'bg-purple-500/10'
        },
        {
            name: 'Legendary',
            minted: Math.floor(totalMinted * (42 / 4200)),
            total: 42,
            color: '#eab308',
            bgColor: 'bg-yellow-500/10'
        },
        {
            name: 'Epic',
            minted: Math.floor(totalMinted * (195 / 4200)),
            total: 195,
            color: '#22c55e',
            bgColor: 'bg-green-500/10'
        },
        {
            name: 'Rare',
            minted: Math.floor(totalMinted * (670 / 4200)),
            total: 670,
            color: '#3b82f6',
            bgColor: 'bg-blue-500/10'
        },
        {
            name: 'Common',
            minted: Math.floor(totalMinted * (3280 / 4200)),
            total: 3280,
            color: '#06b6d4',
            bgColor: 'bg-cyan-500/10'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90 rounded-2xl border-2 border-[#3fb8bd]/30 px-8 py-6 backdrop-blur-md shadow-lg shadow-[#3fb8bd]/10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-8 mb-6 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400 mb-2 font-medium",
                                        children: "Minted"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 60,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-[#3fb8bd]",
                                        children: totalMinted.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 61,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                lineNumber: 59,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-px bg-gray-700"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                lineNumber: 63,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400 mb-2 font-medium",
                                        children: "Remaining"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 65,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-[#4ecca7]",
                                        children: remaining.toLocaleString()
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 66,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                lineNumber: 64,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 w-px bg-gray-700"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400 mb-2 font-medium",
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 70,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-[#daa520]",
                                        children: [
                                            progress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 71,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                lineNumber: 69,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                        lineNumber: 58,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400 font-medium mr-2",
                                children: "Tier Distribution:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                lineNumber: 77,
                                columnNumber: 9
                            }, this),
                            tiers.map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat(tier.bgColor, " rounded-lg px-4 py-2 border border-gray-700/50"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                style: {
                                                    color: tier.color
                                                },
                                                children: tier.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-white",
                                                children: [
                                                    tier.minted,
                                                    "/",
                                                    tier.total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                }, tier.name, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                                    lineNumber: 79,
                                    columnNumber: 11
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                        lineNumber: 76,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(CompactStatsWidget, "6KfD3o16QF6Q8xVgsGEyDKy6HMY=");
_c = CompactStatsWidget;
var _c;
__turbopack_context__.k.register(_c, "CompactStatsWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useStaticMetadata.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStaticMetadata",
    ()=>useStaticMetadata,
    "useStaticNFT",
    ()=>useStaticNFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
function useStaticMetadata() {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [traitStats, setTraitStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        withTraits: 0,
        generated: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStaticMetadata.useEffect": ()=>{
            let isCancelled = false;
            const loadMetadata = {
                "useStaticMetadata.useEffect.loadMetadata": async ()=>{
                    try {
                        setIsLoading(true);
                        setError(null);
                        // Check session storage for cached data (persist across page reloads)
                        const cacheKey = 'kektech-static-metadata';
                        const cacheTimeKey = 'kektech-static-metadata-time';
                        const cachedData = sessionStorage.getItem(cacheKey);
                        const cachedTime = sessionStorage.getItem(cacheTimeKey);
                        // Cache is valid for entire session
                        if (cachedData && cachedTime) {
                            try {
                                const parsed = JSON.parse(cachedData);
                                if (!isCancelled) {
                                    setData(parsed.nfts);
                                    setTraitStats(parsed.traitStats);
                                    setStats({
                                        total: parsed.nfts.length,
                                        withTraits: parsed.nfts.filter({
                                            "useStaticMetadata.useEffect.loadMetadata": (n)=>n.attributes.length > 0
                                        }["useStaticMetadata.useEffect.loadMetadata"]).length,
                                        generated: parsed.generated
                                    });
                                    setIsLoading(false);
                                    return;
                                }
                            } catch (e) {
                                // Cache corrupted, fetch fresh data
                                console.warn('Cache corrupted, fetching fresh data');
                                sessionStorage.removeItem(cacheKey);
                                sessionStorage.removeItem(cacheTimeKey);
                            }
                        }
                        // Fetch from static JSON file (included in build)
                        const response = await fetch('/data/minted-metadata.json', {
                            cache: 'force-cache' // Browser caches this file
                        });
                        if (!response.ok) {
                            throw new Error("Failed to load metadata: ".concat(response.statusText));
                        }
                        const metadata = await response.json();
                        if (!isCancelled) {
                            // Store in session storage
                            sessionStorage.setItem(cacheKey, JSON.stringify(metadata));
                            sessionStorage.setItem(cacheTimeKey, String(Date.now()));
                            setData(metadata.nfts);
                            setTraitStats(metadata.traitStats);
                            setStats({
                                total: metadata.nfts.length,
                                withTraits: metadata.nfts.filter({
                                    "useStaticMetadata.useEffect.loadMetadata": (n)=>n.attributes.length > 0
                                }["useStaticMetadata.useEffect.loadMetadata"]).length,
                                generated: metadata.generated
                            });
                        }
                    } catch (err) {
                        if (!isCancelled) {
                            console.error('Failed to load static metadata:', err);
                            setError(err instanceof Error ? err : new Error('Failed to load metadata'));
                        }
                    } finally{
                        if (!isCancelled) {
                            setIsLoading(false);
                        }
                    }
                }
            }["useStaticMetadata.useEffect.loadMetadata"];
            loadMetadata();
            return ({
                "useStaticMetadata.useEffect": ()=>{
                    isCancelled = true;
                }
            })["useStaticMetadata.useEffect"];
        }
    }["useStaticMetadata.useEffect"], []);
    return {
        data,
        traitStats,
        isLoading,
        error,
        stats
    };
}
_s(useStaticMetadata, "vex4Cjm07ELqUFK5YdCqEunqOXo=");
function useStaticNFT(tokenId) {
    _s1();
    const { data, traitStats, isLoading: staticLoading, error: staticError } = useStaticMetadata();
    const [dynamicNft, setDynamicNft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dynamicLoading, setDynamicLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dynamicError, setDynamicError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Try static file first
    const staticNft = (data === null || data === void 0 ? void 0 : data.find((n)=>n.tokenId === tokenId)) || null;
    // If not found in static file AND static file finished loading, try live API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStaticNFT.useEffect": ()=>{
            if (staticLoading || staticNft || !tokenId || !data) {
                return; // Still loading static, or already found, or no data
            }
            // NFT not found in static file - fetch from live API
            const fetchDynamic = {
                "useStaticNFT.useEffect.fetchDynamic": async ()=>{
                    setDynamicLoading(true);
                    setDynamicError(null);
                    try {
                        const response = await fetch("/api/nft/".concat(tokenId));
                        if (!response.ok) {
                            if (response.status === 404) {
                                throw new Error("NFT #".concat(tokenId, " not found or not yet minted"));
                            }
                            throw new Error("Failed to fetch NFT: ".concat(response.statusText));
                        }
                        const nftData = await response.json();
                        setDynamicNft(nftData);
                    } catch (err) {
                        console.error("Failed to fetch dynamic NFT ".concat(tokenId, ":"), err);
                        setDynamicError(err instanceof Error ? err : new Error('Failed to fetch NFT'));
                    } finally{
                        setDynamicLoading(false);
                    }
                }
            }["useStaticNFT.useEffect.fetchDynamic"];
            fetchDynamic();
        }
    }["useStaticNFT.useEffect"], [
        tokenId,
        staticLoading,
        staticNft,
        data
    ]);
    // Return static NFT if found, otherwise dynamic NFT
    const nft = staticNft || dynamicNft;
    const isLoading = staticLoading || dynamicLoading;
    const error = staticError || dynamicError;
    return {
        nft,
        isLoading,
        error,
        traitStats
    };
}
_s1(useStaticNFT, "Q5K98GPZU+oemkieJ/GNbfSnbH8=", false, function() {
    return [
        useStaticMetadata
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useCompleteNFTs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * DEPRECATED: Use useStaticMetadata instead
 *
 * This hook now uses static metadata for 500x faster performance.
 * Kept for backwards compatibility.
 */ __turbopack_context__.s([
    "useCompleteNFTs",
    ()=>useCompleteNFTs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useStaticMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useStaticMetadata.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useCompleteNFTs() {
    _s();
    const { data, isLoading, error, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useStaticMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStaticMetadata"])();
    return {
        data,
        isLoading,
        error,
        stats: {
            total: stats.total,
            withTraits: stats.withTraits
        }
    };
}
_s(useCompleteNFTs, "DJSrFFn6l+2P0BZh3HsqUGKAw+8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useStaticMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStaticMetadata"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraitFilterSidebar",
    ()=>TraitFilterSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// Trait categories and their display names
const TRAIT_CATEGORIES = {
    Background: 'Background',
    Body: 'Body',
    Tattoo: 'Tattoo',
    Style: 'Style',
    Clothes: 'Clothes',
    Tools: 'Tools',
    Eyes: 'Eyes',
    Glasses: 'Glasses',
    Hat: 'Hat',
    Special: 'Special',
    'Easter Eggs': 'Easter Eggs'
};
function TraitFilterSidebar(param) {
    let { nfts, onFilterChange } = param;
    _s();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set() // All categories start closed
    );
    // Build trait options from actual NFT data
    const traitOptions = buildTraitOptions(nfts);
    const toggleCategory = (category)=>{
        const newExpanded = new Set(expandedCategories);
        if (newExpanded.has(category)) {
            newExpanded.delete(category);
        } else {
            newExpanded.add(category);
        }
        setExpandedCategories(newExpanded);
    };
    const toggleFilter = (category, value)=>{
        const newFilters = {
            ...filters
        };
        if (!newFilters[category]) {
            newFilters[category] = [];
        }
        const index = newFilters[category].indexOf(value);
        if (index > -1) {
            newFilters[category].splice(index, 1);
            if (newFilters[category].length === 0) {
                delete newFilters[category];
            }
        } else {
            newFilters[category].push(value);
        }
        setFilters(newFilters);
        onFilterChange(newFilters);
    };
    const clearAll = ()=>{
        setFilters({});
        onFilterChange({});
    };
    const clearCategory = (category)=>{
        const newFilters = {
            ...filters
        };
        delete newFilters[category];
        setFilters(newFilters);
        onFilterChange(newFilters);
    };
    const activeFilterCount = Object.values(filters).reduce((sum, values)=>sum + values.length, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-80 bg-gray-900/80 border border-[#3fb8bd]/30 rounded-xl p-6 space-y-6 shadow-lg shadow-[#3fb8bd]/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-[#3fb8bd] font-fredoka",
                        children: "Filter by Traits"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearAll,
                        className: "text-sm text-[#4ecca7] hover:text-[#3fb8bd] transition font-fredoka",
                        children: [
                            "Clear All (",
                            activeFilterCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto pr-2 scrollbar-thin",
                children: Object.entries(TRAIT_CATEGORIES).map((param)=>{
                    let [key, label] = param;
                    const categoryFilters = filters[key] || [];
                    const options = traitOptions[key] || [];
                    const isExpanded = expandedCategories.has(key);
                    if (options.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-[#3fb8bd]/20 rounded-lg overflow-hidden bg-black/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleCategory(key),
                                className: "w-full px-4 py-3 bg-[#3fb8bd]/10 hover:bg-[#3fb8bd]/20 transition flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[#4ecca7] font-fredoka flex items-center gap-2",
                                        children: [
                                            label,
                                            categoryFilters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 bg-[#3fb8bd] text-black text-xs rounded-full font-bold",
                                                children: categoryFilters.length
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-[#3fb8bd] transition-transform ".concat(isExpanded ? 'rotate-180' : ''),
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-2 bg-black/20",
                                children: [
                                    categoryFilters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>clearCategory(key),
                                        className: "text-xs text-[#3fb8bd] hover:text-[#4ecca7] mb-2 font-fredoka transition",
                                        children: [
                                            "Clear ",
                                            label
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this),
                                    options.map((param)=>{
                                        let { value, count, percentage } = param;
                                        const isChecked = categoryFilters.includes(value);
                                        const displayName = formatTraitName(value);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center justify-between cursor-pointer hover:bg-[#3fb8bd]/10 p-2 rounded transition group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: isChecked,
                                                            onChange: ()=>toggleFilter(key, value),
                                                            className: "w-4 h-4 rounded border-2 border-[#3fb8bd]/50 bg-gray-900 checked:bg-[#3fb8bd] checked:border-[#3fb8bd] focus:ring-2 focus:ring-[#3fb8bd] focus:ring-offset-0 cursor-pointer transition-all",
                                                            style: {
                                                                colorScheme: 'dark'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-300 group-hover:text-white transition font-fredoka",
                                                            children: displayName
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs font-fredoka",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500",
                                                            children: count
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "".concat(getRarityColor(percentage), " font-bold"),
                                                            children: [
                                                                percentage.toFixed(1),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, value, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 23
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-4 border-t border-[#3fb8bd]/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#4ecca7] font-fredoka font-bold",
                        children: [
                            activeFilterCount,
                            " filter",
                            activeFilterCount !== 1 ? 's' : '',
                            " active"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-1 font-fredoka",
                        children: "Showing NFTs matching ALL selected traits"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(TraitFilterSidebar, "TUaWJHN6TBiSskfeM4th34eI5+o=");
_c = TraitFilterSidebar;
// Build trait options from actual NFT data
function buildTraitOptions(nfts) {
    const traitMap = {};
    // Count traits from minted NFTs
    nfts.forEach((nft)=>{
        var _nft_attributes;
        (_nft_attributes = nft.attributes) === null || _nft_attributes === void 0 ? void 0 : _nft_attributes.forEach((attr)=>{
            if (!traitMap[attr.trait_type]) {
                traitMap[attr.trait_type] = {};
            }
            if (!traitMap[attr.trait_type][attr.value]) {
                traitMap[attr.trait_type][attr.value] = 0;
            }
            traitMap[attr.trait_type][attr.value]++;
        });
    });
    // Convert to sorted options
    const options = {};
    Object.entries(traitMap).forEach((param)=>{
        let [category, values] = param;
        options[category] = Object.entries(values).map((param)=>{
            let [value, count] = param;
            return {
                value,
                count,
                percentage: count / nfts.length * 100
            };
        }).sort((a, b)=>b.count - a.count); // Sort by count descending
    });
    return options;
}
function formatTraitName(name) {
    return name.replace(/_/g, ' ').split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function getRarityColor(percentage) {
    if (percentage < 1) return 'text-[#ff00ff]' // Magenta for ultra rare (<1%)
    ;
    if (percentage < 5) return 'text-[#4ecca7]' // Mint green for very rare (<5%)
    ;
    if (percentage < 15) return 'text-[#3fb8bd]' // Cyan for rare (<15%)
    ;
    if (percentage < 30) return 'text-[#3fb8bd]/70' // Muted cyan for uncommon (<30%)
    ;
    return 'text-gray-400' // Gray for common (>30%)
    ;
}
var _c;
__turbopack_context__.k.register(_c, "TraitFilterSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterTabContent",
    ()=>FilterTabContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useCompleteNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useCompleteNFTs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$TraitFilterSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitFilterSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$nft$2f$EnhancedNFTCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FilterTabContent() {
    _s();
    const { data: nfts, isLoading, error, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useCompleteNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompleteNFTs"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Filter NFTs based on selected traits
    const filteredNFTs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FilterTabContent.useMemo[filteredNFTs]": ()=>{
            const baseNFTs = nfts || [];
            // Sort by Token ID (ascending) for filter view
            const sortedNFTs = [
                ...baseNFTs
            ].sort({
                "FilterTabContent.useMemo[filteredNFTs].sortedNFTs": (a, b)=>parseInt(a.tokenId) - parseInt(b.tokenId)
            }["FilterTabContent.useMemo[filteredNFTs].sortedNFTs"]);
            // If no filters, return all sorted by Token ID
            if (Object.keys(filters).length === 0) return sortedNFTs;
            // Filter NFTs that match ALL selected traits
            return sortedNFTs.filter({
                "FilterTabContent.useMemo[filteredNFTs]": (nft)=>{
                    // NFT must match ALL selected categories (AND logic)
                    return Object.entries(filters).every({
                        "FilterTabContent.useMemo[filteredNFTs]": (param)=>{
                            let [category, selectedValues] = param;
                            var _nft_attributes;
                            if (selectedValues.length === 0) return true;
                            // Find if NFT has any of the selected values for this category
                            return (_nft_attributes = nft.attributes) === null || _nft_attributes === void 0 ? void 0 : _nft_attributes.some({
                                "FilterTabContent.useMemo[filteredNFTs]": (attr)=>attr.trait_type === category && selectedValues.includes(attr.value)
                            }["FilterTabContent.useMemo[filteredNFTs]"]);
                        }
                    }["FilterTabContent.useMemo[filteredNFTs]"]);
                }
            }["FilterTabContent.useMemo[filteredNFTs]"]);
        }
    }["FilterTabContent.useMemo[filteredNFTs]"], [
        nfts,
        filters
    ]);
    // Loading State
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[600px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#4ecca7] mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Loading NFT trait data..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-2",
                        children: "This may take up to 30 seconds on first load"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    // Error State
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[600px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-white mb-2",
                        children: "Failed to Load Trait Data"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mb-4",
                        children: error.message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        className: "px-6 py-2 bg-[#4ecca7] text-black font-bold rounded-lg hover:bg-[#4ecca7]/90 transition",
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-8 text-sm text-gray-400 font-fredoka",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Total Minted: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#3fb8bd] font-bold",
                                children: stats.total
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                                lineNumber: 86,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Filtered: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#4ecca7] font-bold",
                                children: filteredNFTs.length
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                                lineNumber: 90,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$TraitFilterSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraitFilterSidebar"], {
                            nfts: nfts || [],
                            onFilterChange: setFilters
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: filteredNFTs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl mb-4",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-white mb-2",
                                    children: "No NFTs Found"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: Object.keys(filters).length === 0 ? 'Select traits to filter the collection' : 'No NFTs match the selected trait combination'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                            children: filteredNFTs.map((nft)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$nft$2f$EnhancedNFTCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnhancedNFTCard"], {
                                    nft: nft,
                                    showRank: false
                                }, nft.tokenId, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                                    lineNumber: 120,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(FilterTabContent, "ALvxUSKWlg185sWYWvueEn0Mw8s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useCompleteNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompleteNFTs"]
    ];
});
_c = FilterTabContent;
var _c;
__turbopack_context__.k.register(_c, "FilterTabContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraitDistribution",
    ()=>TraitDistribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * Trait distribution data for KEKTECH NFT Collection
 * Source: Official collection data with 4200 total supply
 */ const traitDistributions = {
    background: {
        psychedelic: {
            count: 61,
            percentage: '1.45%'
        },
        crypto_wallstreet: {
            count: 145,
            percentage: '3.45%'
        },
        creature_cloud: {
            count: 152,
            percentage: '3.62%'
        },
        circus: {
            count: 160,
            percentage: '3.81%'
        },
        darkside: {
            count: 172,
            percentage: '4.10%'
        },
        touch_grass: {
            count: 175,
            percentage: '4.17%'
        },
        void: {
            count: 627,
            percentage: '14.93%'
        },
        harmony: {
            count: 651,
            percentage: '15.50%'
        },
        astral: {
            count: 652,
            percentage: '15.52%'
        },
        UV: {
            count: 698,
            percentage: '16.62%'
        },
        shining: {
            count: 707,
            percentage: '16.83%'
        }
    },
    body: {
        rare_diablo: {
            count: 9,
            percentage: '0.21%'
        },
        RIP: {
            count: 56,
            percentage: '1.33%'
        },
        'x-ray': {
            count: 129,
            percentage: '3.07%'
        },
        diablo: {
            count: 428,
            percentage: '10.19%'
        },
        basedAI: {
            count: 433,
            percentage: '10.31%'
        },
        ghastly: {
            count: 1243,
            percentage: '29.60%'
        },
        normie: {
            count: 1902,
            percentage: '45.29%'
        }
    },
    tattoo: {
        kekity_kek: {
            count: 157,
            percentage: '3.74%'
        },
        iron_mike: {
            count: 212,
            percentage: '5.05%'
        },
        '1337': {
            count: 415,
            percentage: '9.88%'
        },
        '420': {
            count: 415,
            percentage: '9.88%'
        },
        kekistan: {
            count: 421,
            percentage: '10.02%'
        },
        none: {
            count: 2580,
            percentage: '61.43%'
        }
    },
    style: {
        rare_demonic: {
            count: 294,
            percentage: '7.00%'
        },
        demonic: {
            count: 294,
            percentage: '7.00%'
        },
        rare_goth: {
            count: 697,
            percentage: '16.60%'
        },
        goth: {
            count: 697,
            percentage: '16.60%'
        },
        rare_pierced: {
            count: 715,
            percentage: '17.02%'
        },
        pierced: {
            count: 715,
            percentage: '17.02%'
        },
        none: {
            count: 2494,
            percentage: '59.38%'
        }
    },
    clothes: {
        kekius: {
            count: 30,
            percentage: '0.71%'
        },
        wizard: {
            count: 67,
            percentage: '1.60%'
        },
        kexico: {
            count: 160,
            percentage: '3.81%'
        },
        kexico_short: {
            count: 163,
            percentage: '3.88%'
        },
        mac_kek: {
            count: 183,
            percentage: '4.36%'
        },
        OG_Pepecoin: {
            count: 186,
            percentage: '4.43%'
        },
        brain_owner: {
            count: 304,
            percentage: '7.24%'
        },
        green: {
            count: 307,
            percentage: '7.31%'
        },
        trippy_hippie: {
            count: 307,
            percentage: '7.31%'
        },
        game_over: {
            count: 308,
            percentage: '7.33%'
        },
        nutmeg: {
            count: 308,
            percentage: '7.33%'
        },
        chad: {
            count: 310,
            percentage: '7.38%'
        },
        dark: {
            count: 311,
            percentage: '7.40%'
        },
        worker: {
            count: 312,
            percentage: '7.43%'
        },
        hodler: {
            count: 314,
            percentage: '7.48%'
        },
        hot_nacho: {
            count: 315,
            percentage: '7.50%'
        },
        jeet: {
            count: 315,
            percentage: '7.50%'
        }
    },
    tools: {
        rare_golden_tickets: {
            count: 43,
            percentage: '1.02%'
        },
        golden_tickets: {
            count: 43,
            percentage: '1.02%'
        },
        rare_coal: {
            count: 130,
            percentage: '3.10%'
        },
        coal: {
            count: 130,
            percentage: '3.10%'
        },
        rare_sorcerer: {
            count: 145,
            percentage: '3.45%'
        },
        sorcerer: {
            count: 145,
            percentage: '3.45%'
        },
        rare_OG_reverse: {
            count: 265,
            percentage: '6.31%'
        },
        OG_reverse: {
            count: 265,
            percentage: '6.31%'
        },
        rare_pepepaint: {
            count: 265,
            percentage: '6.31%'
        },
        pepepaint: {
            count: 265,
            percentage: '6.31%'
        },
        rare_pokemon: {
            count: 538,
            percentage: '12.81%'
        },
        pokemon: {
            count: 538,
            percentage: '12.81%'
        },
        rare_scythe: {
            count: 547,
            percentage: '13.02%'
        },
        scythe: {
            count: 547,
            percentage: '13.02%'
        },
        rare_blunt: {
            count: 548,
            percentage: '13.05%'
        },
        blunt: {
            count: 548,
            percentage: '13.05%'
        },
        rare_bamboo: {
            count: 549,
            percentage: '13.07%'
        },
        bamboo: {
            count: 549,
            percentage: '13.07%'
        },
        rare_reward: {
            count: 552,
            percentage: '13.14%'
        },
        reward: {
            count: 552,
            percentage: '13.14%'
        },
        rare_flipper: {
            count: 553,
            percentage: '13.17%'
        },
        flipper: {
            count: 553,
            percentage: '13.17%'
        }
    },
    eyes: {
        diabolic: {
            count: 79,
            percentage: '1.88%'
        },
        based: {
            count: 323,
            percentage: '7.69%'
        },
        wrecked: {
            count: 479,
            percentage: '11.40%'
        },
        baked: {
            count: 494,
            percentage: '11.76%'
        },
        blue: {
            count: 658,
            percentage: '15.67%'
        },
        cyan: {
            count: 677,
            percentage: '16.12%'
        },
        confused: {
            count: 679,
            percentage: '16.17%'
        },
        straight: {
            count: 682,
            percentage: '16.24%'
        },
        none: {
            count: 129,
            percentage: '3.07%'
        }
    },
    glasses: {
        rare_patched: {
            count: 24,
            percentage: '0.57%'
        },
        patched: {
            count: 24,
            percentage: '0.57%'
        },
        rare_AIagent: {
            count: 293,
            percentage: '6.98%'
        },
        AIagent: {
            count: 293,
            percentage: '6.98%'
        },
        rare_radioactive: {
            count: 505,
            percentage: '12.02%'
        },
        radioactive: {
            count: 505,
            percentage: '12.02%'
        },
        rare_pixel: {
            count: 550,
            percentage: '13.10%'
        },
        pixel: {
            count: 550,
            percentage: '13.10%'
        },
        none: {
            count: 2828,
            percentage: '67.33%'
        }
    },
    hat: {
        maximus: {
            count: 22,
            percentage: '0.52%'
        },
        basedgod: {
            count: 59,
            percentage: '1.40%'
        },
        magic: {
            count: 76,
            percentage: '1.81%'
        },
        mad_scientist: {
            count: 142,
            percentage: '3.38%'
        },
        punk: {
            count: 144,
            percentage: '3.43%'
        },
        orange: {
            count: 148,
            percentage: '3.52%'
        },
        holy: {
            count: 176,
            percentage: '4.19%'
        },
        haunted: {
            count: 187,
            percentage: '4.45%'
        },
        fast_food: {
            count: 191,
            percentage: '4.55%'
        },
        pirate: {
            count: 221,
            percentage: '5.26%'
        },
        gigabrain: {
            count: 267,
            percentage: '6.36%'
        },
        headband: {
            count: 278,
            percentage: '6.62%'
        },
        curly: {
            count: 349,
            percentage: '8.31%'
        },
        chonk: {
            count: 410,
            percentage: '9.76%'
        },
        none: {
            count: 1530,
            percentage: '36.43%'
        }
    },
    special: {
        spyware: {
            count: 187,
            percentage: '4.45%'
        },
        rare_whitebeard: {
            count: 201,
            percentage: '4.79%'
        },
        whitebeard: {
            count: 201,
            percentage: '4.79%'
        },
        rare_hairy: {
            count: 766,
            percentage: '18.24%'
        },
        hairy: {
            count: 766,
            percentage: '18.24%'
        },
        honk: {
            count: 886,
            percentage: '21.10%'
        },
        none: {
            count: 2160,
            percentage: '51.43%'
        }
    },
    'easter-eggs': {
        'personalized trait': {
            count: 3,
            percentage: '0.07%'
        },
        'free tattoo lifetime pass': {
            count: 9,
            percentage: '0.21%'
        },
        'golden ticket boost': {
            count: 43,
            percentage: '1.02%'
        },
        'early bird': {
            count: 103,
            percentage: '2.45%'
        },
        'limited edition free mint': {
            count: 420,
            percentage: '10.00%'
        },
        none: {
            count: 3622,
            percentage: '86.24%'
        }
    }
};
/**
 * Get rarity level based on percentage
 * Colors match the old kektech.xyz website
 */ function getRarity(percentage) {
    const value = parseFloat(percentage);
    if (value < 1) return {
        label: 'Mythic',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500'
    };
    if (value < 5) return {
        label: 'Legendary',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500'
    };
    if (value < 15) return {
        label: 'Epic',
        color: 'text-green-400',
        bgColor: 'bg-green-500'
    };
    if (value < 30) return {
        label: 'Rare',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500'
    };
    return {
        label: 'Common',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500'
    };
}
/**
 * Format trait name for display
 */ function formatTraitName(name) {
    return name.replace(/_/g, ' ').replace(/\b\w/g, (char)=>char.toUpperCase());
}
function TraitDistribution() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('background');
    const categories = [
        {
            key: 'background',
            label: 'Background'
        },
        {
            key: 'body',
            label: 'Body'
        },
        {
            key: 'tattoo',
            label: 'Tattoo'
        },
        {
            key: 'style',
            label: 'Style'
        },
        {
            key: 'clothes',
            label: 'Clothes'
        },
        {
            key: 'tools',
            label: 'Tools'
        },
        {
            key: 'eyes',
            label: 'Eyes'
        },
        {
            key: 'glasses',
            label: 'Glasses'
        },
        {
            key: 'hat',
            label: 'Hat'
        },
        {
            key: 'special',
            label: 'Special'
        },
        {
            key: 'easter-eggs',
            label: 'Easter Eggs'
        }
    ];
    // Get traits and sort by percentage (ascending - rarest first)
    const traits = Object.entries(traitDistributions[activeCategory]).sort((a, b)=>{
        const percentA = parseFloat(a[1].percentage);
        const percentB = parseFloat(b[1].percentage);
        return percentA - percentB;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-7xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-wrap justify-center gap-2",
                children: categories.map((param)=>{
                    let { key, label } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(key),
                        className: "rounded-lg px-4 py-2 text-sm font-medium transition-all ".concat(activeCategory === key ? 'bg-gradient-to-r from-[#3fb8bd] to-[#4ecca7] text-black shadow-md shadow-[#3fb8bd]/30' : 'border border-[#3fb8bd]/20 bg-gray-900 text-gray-400 hover:border-[#3fb8bd]/50 hover:text-white'),
                        children: label
                    }, key, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-lg border border-[#3fb8bd]/20 bg-gray-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-800",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider text-[#3fb8bd]",
                                                children: "Trait"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#3fb8bd]",
                                                children: "Count"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#3fb8bd]",
                                                children: "%"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-right text-sm font-semibold uppercase tracking-wider text-[#3fb8bd]",
                                                children: "Rarity"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: traits.map((param)=>{
                                        let [name, data] = param;
                                        const rarity = getRarity(data.percentage);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "transition-colors hover:bg-[#3fb8bd]/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-sm font-medium text-white",
                                                    children: formatTraitName(name)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-center text-sm text-gray-300",
                                                    children: data.count
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-center text-sm font-semibold text-[#3fb8bd]",
                                                    children: data.percentage
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block rounded-md px-3 py-1 text-xs font-bold ".concat(rarity.bgColor, " text-black"),
                                                        children: rarity.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, name, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 text-center text-sm text-gray-500",
                children: [
                    "Showing ",
                    traits.length,
                    " traits in ",
                    formatTraitName(activeCategory),
                    " category"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(TraitDistribution, "ToVIfwg0GS0UDqg410heDwCwtqA=");
_c = TraitDistribution;
var _c;
__turbopack_context__.k.register(_c, "TraitDistribution");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraitsOverviewContent",
    ()=>TraitsOverviewContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$traits$2f$TraitDistribution$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/traits/TraitDistribution.tsx [app-client] (ecmascript)");
'use client';
;
;
function TraitsOverviewContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-[#daa520] mb-3 font-fredoka",
                        children: "Trait Rarities"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Explore the rarity distribution of traits across the 𝕂Ǝ𝕂TECH collection. Switch to Filter tab to find NFTs with specific traits."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$traits$2f$TraitDistribution$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraitDistribution"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = TraitsOverviewContent;
var _c;
__turbopack_context__.k.register(_c, "TraitsOverviewContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NFTGallery",
    ()=>NFTGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$nft$2f$EnhancedNFTCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/nft/EnhancedNFTCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useRankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useRankings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$GalleryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/GalleryTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$CompactStatsWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/CompactStatsWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$FilterTabContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/FilterTabContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$TraitsOverviewContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/gallery/TraitsOverviewContent.tsx [app-client] (ecmascript)");
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
function NFTGallery() {
    _s();
    const { rankings: nfts, loading: isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useRankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRankings"])(30000);
    const [searchId, setSearchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Filter NFTs by ID
    const filteredNfts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NFTGallery.useMemo[filteredNfts]": ()=>{
            if (!searchId.trim()) return nfts;
            const searchTerm = searchId.trim().toLowerCase();
            return nfts.filter({
                "NFTGallery.useMemo[filteredNfts]": (nft)=>nft.tokenId.toString().includes(searchTerm)
            }["NFTGallery.useMemo[filteredNfts]"]);
        }
    }["NFTGallery.useMemo[filteredNfts]"], [
        nfts,
        searchId
    ]);
    // Loading State
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            children: Array.from({
                length: 12
            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-square bg-gray-200 dark:bg-gray-800"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-800"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3 flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-800"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-800"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-800"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-full rounded-lg bg-gray-200 dark:bg-gray-800"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this);
    }
    // Error State
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-900/20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-4xl",
                    children: "⚠️"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-lg font-semibold text-red-900 dark:text-red-100",
                    children: "Failed to Load NFTs"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-4 text-red-700 dark:text-red-300",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this);
    }
    // Empty State
    if (nfts.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-800 dark:bg-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-6xl",
                    children: "🎨"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-2 text-xl font-semibold text-gray-900 dark:text-white",
                    children: "No NFTs Yet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-6 text-gray-600 dark:text-gray-400",
                    children: "Be the first to mint a KEKTECH NFT!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/mint",
                    className: "inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700",
                    children: "Start Minting"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this);
    }
    // Ranking Tab Content
    const renderRankingTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$CompactStatsWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompactStatsWidget"], {}, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 97,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5 text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: searchId,
                                onChange: (e)=>setSearchId(e.target.value),
                                placeholder: "Search by NFT ID (e.g., 1, 42, 1337)...",
                                className: "w-full pl-11 pr-4 py-3 bg-gray-900/60 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3fb8bd] focus:border-transparent transition font-fredoka"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            searchId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchId(''),
                                className: "absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-white transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, this),
                searchId && filteredNfts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-5xl mb-4",
                            children: "🔍"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white mb-2 font-fredoka",
                            children: "No NFTs Found"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mb-4",
                            children: [
                                'No NFTs match ID "',
                                searchId,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSearchId(''),
                            className: "px-6 py-2 bg-[#3fb8bd] text-black font-bold rounded-lg hover:bg-[#3fb8bd]/90 transition font-fredoka",
                            children: "Clear Search"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                filteredNfts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: filteredNfts.map((nft)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$nft$2f$EnhancedNFTCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnhancedNFTCard"], {
                            nft: nft
                        }, nft.tokenId, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                filteredNfts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-400 border-t border-gray-800 pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Showing ",
                            filteredNfts.length,
                            " ",
                            searchId ? 'of ' + nfts.length : '',
                            " NFTs • Updates automatically every 30 seconds"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
            lineNumber: 95,
            columnNumber: 5
        }, this);
    // Filter Tab Content
    const renderFilterTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$FilterTabContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterTabContent"], {}, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
            lineNumber: 183,
            columnNumber: 33
        }, this);
    // Traits Tab Content
    const renderTraitsTab = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$TraitsOverviewContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraitsOverviewContent"], {}, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
            lineNumber: 186,
            columnNumber: 33
        }, this);
    // Three-Tab Layout
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$gallery$2f$GalleryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GalleryTabs"], {
        children: (activeTab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    activeTab === 'ranking' && renderRankingTab(),
                    activeTab === 'filter' && renderFilterTab(),
                    activeTab === 'traits' && renderTraitsTab()
                ]
            }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/nft/NFTGallery.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_s(NFTGallery, "GtC3OP2/ABP9LYiP//N+7sUkChs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useRankings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRankings"]
    ];
});
_c = NFTGallery;
var _c;
__turbopack_context__.k.register(_c, "NFTGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_kektechbmad100_packages_frontend_77c1c134._.js.map