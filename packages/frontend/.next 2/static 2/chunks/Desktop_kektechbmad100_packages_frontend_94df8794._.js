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
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useTechBalance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTechBalance",
    ()=>useTechBalance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/tech-token.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useTechBalance() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    // Read token balance
    const { data: rawBalance, isLoading, isError, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].abi,
        functionName: 'balanceOf',
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: isConnected && !!address,
            refetchInterval: 10000
        }
    });
    // Format balance with proper decimals (18)
    const balance = rawBalance ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(rawBalance, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].decimals) : '0';
    // Parse to number for calculations
    const balanceNumber = parseFloat(balance);
    // Format for display (with commas)
    const balanceFormatted = balanceNumber.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 6
    });
    // Compact format (K, M, B notation)
    const balanceCompact = balanceNumber >= 1_000_000 ? "".concat((balanceNumber / 1_000_000).toFixed(2), "M") : balanceNumber >= 1_000 ? "".concat((balanceNumber / 1_000).toFixed(2), "K") : balanceFormatted;
    return {
        // Raw data
        rawBalance,
        balance,
        balanceNumber,
        // Formatted versions
        balanceFormatted,
        balanceCompact,
        // Token info
        symbol: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].symbol,
        decimals: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].decimals,
        address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].address,
        // State
        isLoading,
        isError,
        error: (error === null || error === void 0 ? void 0 : error.message) || null,
        isConnected,
        // Actions
        refetch
    };
}
_s(useTechBalance, "fbtFhQ30xO8AJiinT1t2UJ1xGBU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReadContract"]
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
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useWalletNFTs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWalletNFTs",
    ()=>useWalletNFTs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useWalletNFTs(address) {
    _s();
    const [nfts, setNfts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchNFTs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWalletNFTs.useCallback[fetchNFTs]": async function() {
            let isRetry = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            if (!address) {
                setNfts([]);
                setLoading(false);
                return;
            }
            setLoading(true);
            if (!isRetry) {
                setError(null);
            }
            const maxRetries = 3;
            let lastError = null;
            for(let attempt = 0; attempt <= maxRetries; attempt++){
                try {
                    // Add timeout to prevent hanging requests
                    const controller = new AbortController();
                    const timeoutId = setTimeout({
                        "useWalletNFTs.useCallback[fetchNFTs].timeoutId": ()=>controller.abort()
                    }["useWalletNFTs.useCallback[fetchNFTs].timeoutId"], 10000) // 10s timeout
                    ;
                    const response = await fetch("https://explorer.bf1337.org/api/v2/addresses/".concat(address, "/nft"), {
                        signal: controller.signal,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    clearTimeout(timeoutId);
                    if (!response.ok) {
                        throw new Error("API Error: ".concat(response.status, " ").concat(response.statusText));
                    }
                    const data = await response.json();
                    // Validate response structure
                    if (!data || typeof data !== 'object') {
                        throw new Error('Invalid API response format');
                    }
                    const items = data.items || [];
                    setNfts(items);
                    setError(null);
                    setLoading(false);
                    return; // Success - exit retry loop
                } catch (err) {
                    lastError = err instanceof Error ? err : new Error('Unknown error occurred');
                    console.error("NFT fetch attempt ".concat(attempt + 1, "/").concat(maxRetries + 1, " failed:"), lastError);
                    // If this isn't the last attempt, wait before retrying
                    if (attempt < maxRetries) {
                        const delay = Math.min(1000 * Math.pow(2, attempt), 5000) // Exponential backoff, max 5s
                        ;
                        await new Promise({
                            "useWalletNFTs.useCallback[fetchNFTs]": (resolve)=>setTimeout(resolve, delay)
                        }["useWalletNFTs.useCallback[fetchNFTs]"]);
                    }
                }
            }
            // All retries failed
            const errorMessage = (lastError === null || lastError === void 0 ? void 0 : lastError.name) === 'AbortError' ? 'Request timeout - Please check your connection and try again' : (lastError === null || lastError === void 0 ? void 0 : lastError.message) || 'Failed to fetch NFTs after multiple attempts';
            setError(errorMessage);
            setNfts([]);
            setLoading(false);
        }
    }["useWalletNFTs.useCallback[fetchNFTs]"], [
        address
    ]);
    // Manual retry function
    const retry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWalletNFTs.useCallback[retry]": ()=>{
            fetchNFTs(true);
        }
    }["useWalletNFTs.useCallback[retry]"], [
        fetchNFTs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWalletNFTs.useEffect": ()=>{
            fetchNFTs();
        }
    }["useWalletNFTs.useEffect"], [
        fetchNFTs
    ]);
    return {
        nfts,
        loading,
        error,
        retry
    };
}
_s(useWalletNFTs, "m9wR4gRTie0uMuPTTN5CxsC9ft0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/usePortfolioData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePortfolioData",
    ()=>usePortfolioData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useTechBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useTechBalance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherBalance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useWalletNFTs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function usePortfolioData() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    // Fetch all data sources
    const techBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useTechBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTechBalance"])();
    const voucherBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"])();
    const nftData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletNFTs"])(address);
    // Separate KEKTECH NFTs from other NFTs
    const { kektechNFTs, otherNFTs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePortfolioData.useMemo": ()=>{
            // Ensure nftData.nfts is an array and filter safely
            const nfts = nftData.nfts || [];
            const kektech = nfts.filter({
                "usePortfolioData.useMemo.kektech": (nft)=>{
                    var _nft_token;
                    // Safe property access with null checks
                    const nftAddress = nft === null || nft === void 0 ? void 0 : (_nft_token = nft.token) === null || _nft_token === void 0 ? void 0 : _nft_token.address // ← FIXED: Use "address" not "address_hash"
                    ;
                    if (!nftAddress || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"]) return false;
                    return nftAddress.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"].toLowerCase();
                }
            }["usePortfolioData.useMemo.kektech"]);
            const others = nfts.filter({
                "usePortfolioData.useMemo.others": (nft)=>{
                    var _nft_token;
                    // Safe property access with null checks
                    const nftAddress = nft === null || nft === void 0 ? void 0 : (_nft_token = nft.token) === null || _nft_token === void 0 ? void 0 : _nft_token.address // ← FIXED: Use "address" not "address_hash"
                    ;
                    if (!nftAddress || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"]) return !nftAddress // Include NFTs without address in 'others'
                    ;
                    return nftAddress.toLowerCase() !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"].toLowerCase();
                }
            }["usePortfolioData.useMemo.others"]);
            return {
                kektechNFTs: kektech,
                otherNFTs: others
            };
        }
    }["usePortfolioData.useMemo"], [
        nftData.nfts
    ]);
    // Calculate portfolio metrics
    const portfolioMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePortfolioData.useMemo[portfolioMetrics]": ()=>{
            // Safe access for NFT array
            const nftsArray = nftData.nfts || [];
            return {
                // Token metrics
                techBalance: techBalance.balanceNumber,
                techBalanceFormatted: techBalance.balanceFormatted,
                techBalanceCompact: techBalance.balanceCompact,
                // NFT metrics
                totalNFTs: nftsArray.length,
                kektechNFTCount: kektechNFTs.length,
                otherNFTCount: otherNFTs.length,
                // Voucher metrics
                totalVouchers: voucherBalance.totalVouchers,
                uniqueVoucherTypes: voucherBalance.uniqueVoucherTypes,
                // Total assets
                totalAssetTypes: [
                    techBalance.balanceNumber > 0 ? 1 : 0,
                    kektechNFTs.length > 0 ? 1 : 0,
                    voucherBalance.totalVouchers > 0 ? 1 : 0,
                    otherNFTs.length > 0 ? 1 : 0
                ].reduce({
                    "usePortfolioData.useMemo[portfolioMetrics]": (a, b)=>a + b
                }["usePortfolioData.useMemo[portfolioMetrics]"], 0)
            };
        }
    }["usePortfolioData.useMemo[portfolioMetrics]"], [
        techBalance,
        nftData.nfts,
        kektechNFTs.length,
        otherNFTs.length,
        voucherBalance.totalVouchers,
        voucherBalance.uniqueVoucherTypes
    ]);
    // Aggregate loading state
    const isLoading = techBalance.isLoading || voucherBalance.isLoading || nftData.loading;
    // Aggregate error state
    const hasError = techBalance.isError || voucherBalance.isError || !!nftData.error;
    const errors = [
        techBalance.error,
        voucherBalance.error,
        nftData.error
    ].filter(Boolean);
    // Refetch all data
    const refetchAll = ()=>{
        techBalance.refetch();
        voucherBalance.refetch();
        nftData.retry();
    };
    return {
        // Connection state
        address,
        isConnected,
        // Individual data sources
        techBalance,
        voucherBalance,
        nfts: {
            all: nftData.nfts || [],
            kektech: kektechNFTs,
            others: otherNFTs
        },
        // Portfolio metrics
        metrics: portfolioMetrics,
        // Aggregate states
        isLoading,
        hasError,
        errors,
        // Actions
        refetchAll
    };
}
_s(usePortfolioData, "CB2uJoh7+qztdHuXcy4eeTEbkKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useTechBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTechBalance"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherBalance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoucherBalance"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletNFTs"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioOverview",
    ()=>PortfolioOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PortfolioOverview(param) {
    let { techBalance, techBalanceCompact, totalNFTs, kektechNFTCount, totalVouchers, uniqueVoucherTypes, isLoading, activeSection, onSectionChange } = param;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex rounded-xl bg-gray-900/60 border border-gray-800 p-1",
                children: [
                    ...Array(4)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-3 rounded-lg animate-pulse flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 bg-gray-800 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-20 bg-gray-800 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 w-8 bg-gray-800 rounded"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex rounded-xl bg-gray-900/60 border border-gray-800 p-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSectionChange('nfts'),
                    className: "\n            px-6 py-3 rounded-lg font-fredoka font-bold transition-all duration-200 flex items-center gap-2\n            ".concat(activeSection === 'nfts' ? 'bg-[#4ecca7] text-black shadow-lg shadow-[#4ecca7]/20' : 'text-[#4ecca7] hover:text-white hover:bg-gray-800/50', "\n          "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "𝕂Ǝ𝕂TECH"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm opacity-75",
                            children: kektechNFTCount
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSectionChange('tech'),
                    className: "\n            px-6 py-3 rounded-lg font-fredoka font-bold transition-all duration-200 flex items-center gap-2\n            ".concat(activeSection === 'tech' ? 'bg-[#3fb8bd] text-black shadow-lg shadow-[#3fb8bd]/20' : 'text-[#3fb8bd] hover:text-white hover:bg-gray-800/50', "\n          "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "TECH"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm opacity-75",
                            children: techBalanceCompact
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSectionChange('vouchers'),
                    className: "\n            px-6 py-3 rounded-lg font-fredoka font-bold transition-all duration-200 flex items-center gap-2\n            ".concat(activeSection === 'vouchers' ? 'bg-[#daa520] text-black shadow-lg shadow-[#daa520]/20' : 'text-[#daa520] hover:text-white hover:bg-gray-800/50', "\n          "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "𝕂Ǝ𝕂TV"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm opacity-75",
                            children: [
                                totalVouchers,
                                uniqueVoucherTypes > 1 && " (".concat(uniqueVoucherTypes, ")")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onSectionChange('assets'),
                    className: "\n            px-6 py-3 rounded-lg font-fredoka font-bold transition-all duration-200 flex items-center gap-2\n            ".concat(activeSection === 'assets' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20' : 'text-purple-400 hover:text-white hover:bg-gray-800/50', "\n          "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Overview"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm opacity-75",
                            children: totalNFTs + (totalVouchers > 0 ? 1 : 0) + (parseFloat(techBalance) > 0 ? 1 : 0)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = PortfolioOverview;
var _c;
__turbopack_context__.k.register(_c, "PortfolioOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechTokenCard",
    ()=>TechTokenCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/tech-token.ts [app-client] (ecmascript)");
'use client';
;
;
;
function TechTokenCard(param) {
    let { balance, balanceFormatted, isLoading } = param;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl border border-cyan-500/20 p-8 mb-8 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-32 bg-gray-800 rounded mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-48 bg-gray-800 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-16 w-16 bg-gray-800 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [
                        ...Array(3)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-12 bg-gray-800/50 rounded-xl"
                        }, i, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    const hasBalance = parseFloat(balance) > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 p-8 mb-8 hover:border-cyan-500/50 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-cyan-400 font-fredoka",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].name,
                                            " Token"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold",
                                        children: "ERC-20"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl md:text-5xl font-bold text-white font-fredoka",
                                children: [
                                    balanceFormatted,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl text-gray-400",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].symbol
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            hasBalance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400 mt-1",
                                children: [
                                    "Exact: ",
                                    balance,
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].symbol
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-4xl",
                        children: "💎"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900/60 rounded-xl p-4 border border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mb-1",
                                children: "Token Symbol"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-bold text-white",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].symbol
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900/60 rounded-xl p-4 border border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-400 mb-1",
                                children: "Contract"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-mono text-white truncate",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].address.slice(0, 6),
                                    "...",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].address.slice(-4)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$tech$2d$token$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TECH_TOKEN"].explorerUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex-1 min-w-[200px] px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-300 font-bold hover:bg-cyan-500/30 transition text-center font-fredoka",
                    children: "🔍 View on Explorer"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            !hasBalance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-yellow-300",
                    children: "ℹ️ You don't have any TECH tokens yet"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = TechTokenCard;
var _c;
__turbopack_context__.k.register(_c, "TechTokenCard");
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
"[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoucherSection",
    ()=>VoucherSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/contracts/kektech-vouchers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useVoucherMetadata.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function VoucherSection(param) {
    let { vouchers, ownedVouchers, totalVouchers, isLoading, explorerUrl } = param;
    _s();
    // Fetch metadata for all vouchers (includes GIF URLs)
    const { metadataMap, loading: metadataLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"])();
    if (isLoading || metadataLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-48 bg-gray-800 rounded animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: [
                        ...Array(4)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/60 rounded-xl border border-gray-800 p-6 animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-12 w-12 bg-gray-800 rounded-lg mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-6 w-32 bg-gray-800 rounded mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-full bg-gray-800 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    // If no vouchers at all, show empty state
    if (totalVouchers === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-[#daa520] mb-6 font-fredoka flex items-center gap-2",
                    children: [
                        "Your 𝕂Ǝ𝕂TECH Vouchers",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-500 text-lg",
                            children: "(0)"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-900/60 rounded-xl border border-gray-800 p-12 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl mb-6",
                            children: "🎫"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-white mb-4 font-fredoka",
                            children: "No Vouchers Found"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mb-6",
                            children: "You don't have any 𝕂Ǝ𝕂TECH vouchers yet. Vouchers grant exclusive benefits and rewards!"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: explorerUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-block px-6 py-3 rounded-xl bg-[#daa520]/20 text-[#daa520] font-bold hover:bg-[#daa520]/30 transition font-fredoka",
                            children: "Learn More"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    // Get rarity color gradient
    const getRarityGradient = (rarity)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$contracts$2f$kektech$2d$vouchers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_VOUCHERS"].rarityColors[rarity] || 'from-gray-500 to-gray-600';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#daa520] font-fredoka flex items-center gap-2",
                        children: [
                            "Your 𝕂Ǝ𝕂TECH Vouchers",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#daa520]/70 text-lg",
                                children: [
                                    "(",
                                    totalVouchers,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: explorerUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "px-4 py-2 rounded-xl bg-[#daa520]/20 text-[#daa520] text-sm font-bold hover:bg-[#daa520]/30 transition",
                        children: "View Contract"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6",
                children: vouchers.filter((voucher)=>voucher.id !== 0) // Exclude token ID 0 (test token)
                .map((voucher)=>{
                    const owned = voucher.balanceNumber > 0;
                    const gradient = getRarityGradient(voucher.rarity);
                    const metadata = metadataMap[voucher.id];
                    // Prefer animation_url (GIF/video) over static image
                    const mediaUrl = (metadata === null || metadata === void 0 ? void 0 : metadata.animation_url) || (metadata === null || metadata === void 0 ? void 0 : metadata.image) || voucher.imageUrl;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border p-6 transition ".concat(owned ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/50' : 'bg-gray-900/30 border-gray-800/50 opacity-50'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 mb-4",
                            children: [
                                mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full sm:w-48 h-48 rounded-lg overflow-hidden bg-black/20 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: mediaUrl,
                                        alt: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || voucher.name,
                                        fill: true,
                                        className: "object-contain",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 136,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full sm:w-48 h-48 flex items-center justify-center bg-black/20 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl",
                                        children: voucher.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                        lineNumber: 148,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-[#daa520] text-xl mb-2 font-fredoka",
                                                            children: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || voucher.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 23
                                                        }, this),
                                                        owned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 py-1 rounded-lg bg-gradient-to-r ".concat(gradient, " text-white text-sm font-bold flex-shrink-0"),
                                                            children: [
                                                                "×",
                                                                voucher.balanceNumber
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-3 py-1 rounded-lg bg-gray-800 text-gray-500 text-sm font-bold flex-shrink-0",
                                                            children: "Not Owned"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-400 mb-4",
                                                    children: (metadata === null || metadata === void 0 ? void 0 : metadata.description) || voucher.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between pt-3 border-t border-gray-800/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-400",
                                                    children: "Token ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold text-[#daa520] font-mono",
                                                    children: [
                                                        "#",
                                                        voucher.id
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this)
                    }, voucher.id, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-[#daa520]/10 to-yellow-600/10 rounded-xl border border-[#daa520]/20 p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-[#daa520] mb-2 font-fredoka",
                                    children: "𝕂Ǝ𝕂TV Summary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300",
                                    children: [
                                        "You own ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white",
                                            children: totalVouchers
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                            lineNumber: 198,
                                            columnNumber: 23
                                        }, this),
                                        " voucher",
                                        totalVouchers !== 1 ? 's' : '',
                                        " across",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white",
                                            children: ownedVouchers.length
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, this),
                                        " type",
                                        ownedVouchers.length !== 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: "Vouchers grant exclusive benefits and rewards in the 𝕂Ǝ𝕂TECH ecosystem"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: true,
                            className: "px-6 py-3 rounded-xl bg-gray-800/50 text-gray-500 font-bold cursor-not-allowed font-fredoka whitespace-nowrap opacity-50",
                            title: "Coming soon",
                            children: "🎁 Redeem (Coming Soon)"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(VoucherSection, "QgOU54I2QWBhTn1Y8kAwi0XCetM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useVoucherMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAllVoucherMetadata"]
    ];
});
_c = VoucherSection;
var _c;
__turbopack_context__.k.register(_c, "VoucherSection");
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
"[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KektechNFTsOnly",
    ()=>KektechNFTsOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useWalletNFTs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useStaticMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useStaticMetadata.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function KektechNFTsOnly(param) {
    let { address } = param;
    _s();
    const { nfts, loading, error, retry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletNFTs"])(address);
    const { data: staticMetadata, isLoading: metadataLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useStaticMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStaticMetadata"])();
    // Filter to show ONLY KEKTECH NFTs and merge with static metadata for images
    const kektechNFTs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "KektechNFTsOnly.useMemo[kektechNFTs]": ()=>{
            const filteredNFTs = nfts.filter({
                "KektechNFTsOnly.useMemo[kektechNFTs].filteredNFTs": (nft)=>{
                    var _nft_token, _nft_metadata, _nft_token1;
                    const nftAddress = nft === null || nft === void 0 ? void 0 : (_nft_token = nft.token) === null || _nft_token === void 0 ? void 0 : _nft_token.address;
                    if (!nftAddress || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"]) return false;
                    const isKektech = nftAddress.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"].toLowerCase();
                    // Debug logging to diagnose categorization issue (ALWAYS ENABLED FOR DIAGNOSIS)
                    console.log('✅ KEKTECH NFT Check:', {
                        nftId: nft.id,
                        nftName: ((_nft_metadata = nft.metadata) === null || _nft_metadata === void 0 ? void 0 : _nft_metadata.name) || ((_nft_token1 = nft.token) === null || _nft_token1 === void 0 ? void 0 : _nft_token1.name),
                        nftAddress: nftAddress,
                        kektechAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"],
                        nftAddressLower: nftAddress.toLowerCase(),
                        kektechAddressLower: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"].toLowerCase(),
                        isKektech,
                        willShowInKektechSection: isKektech
                    });
                    return isKektech;
                }
            }["KektechNFTsOnly.useMemo[kektechNFTs].filteredNFTs"]);
            // Merge with static metadata to get images
            return filteredNFTs.map({
                "KektechNFTsOnly.useMemo[kektechNFTs]": (nft)=>{
                    var _nft_metadata, _nft_metadata1, _nft_metadata2;
                    const staticNFT = staticMetadata === null || staticMetadata === void 0 ? void 0 : staticMetadata.find({
                        "KektechNFTsOnly.useMemo[kektechNFTs]": (s)=>s.tokenId === nft.id
                    }["KektechNFTsOnly.useMemo[kektechNFTs]"]);
                    return {
                        ...nft,
                        // Use static metadata image if available (fallback to API image)
                        image_url: (staticNFT === null || staticNFT === void 0 ? void 0 : staticNFT.imageUrl) || nft.image_url,
                        metadata: {
                            ...nft.metadata,
                            name: (staticNFT === null || staticNFT === void 0 ? void 0 : staticNFT.name) || ((_nft_metadata = nft.metadata) === null || _nft_metadata === void 0 ? void 0 : _nft_metadata.name),
                            image_url: (staticNFT === null || staticNFT === void 0 ? void 0 : staticNFT.imageUrl) || ((_nft_metadata1 = nft.metadata) === null || _nft_metadata1 === void 0 ? void 0 : _nft_metadata1.image_url),
                            attributes: (staticNFT === null || staticNFT === void 0 ? void 0 : staticNFT.attributes) || ((_nft_metadata2 = nft.metadata) === null || _nft_metadata2 === void 0 ? void 0 : _nft_metadata2.attributes) || []
                        }
                    };
                }
            }["KektechNFTsOnly.useMemo[kektechNFTs]"]);
        }
    }["KektechNFTsOnly.useMemo[kektechNFTs]"], [
        nfts,
        staticMetadata
    ]);
    // Loading state (wait for both API and metadata)
    if (loading || metadataLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#3fb8bd]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-gray-400",
                    children: "Loading your 𝕂Ǝ𝕂TECH NFTs..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    // Error state
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-900/20 border border-red-900 rounded-xl p-8 text-center max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl mb-4",
                    children: "⚠️"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-red-100 mb-3",
                    children: "Failed to Load NFTs"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-300 mb-6",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: retry,
                    className: "px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition font-fredoka",
                    children: "🔄 Retry"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-400 mt-4",
                    children: [
                        "Address: ",
                        address === null || address === void 0 ? void 0 : address.slice(0, 6),
                        "...",
                        address === null || address === void 0 ? void 0 : address.slice(-4)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    // Empty state - No KEKTECH NFTs
    if (kektechNFTs.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900/60 rounded-xl border border-gray-800 p-12 text-center max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-6",
                    children: "🐸"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-white mb-4 font-fredoka",
                    children: "No 𝕂Ǝ𝕂TECH NFTs Found"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-6",
                    children: "You don't have any 𝕂Ǝ𝕂TECH NFTs in your wallet yet. Start by minting one!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/marketplace",
                    className: "inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[#3fb8bd] to-[#4ecca7] text-black font-bold hover:scale-105 transition font-fredoka",
                    children: "Mint 𝕂Ǝ𝕂TECH NFTs"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
                    children: kektechNFTs.map((nft)=>{
                        var _nft_metadata, _nft_metadata1, _nft_metadata2, _nft_metadata3, _nft_metadata4;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/nft?id=".concat(nft.id),
                            className: "bg-gray-900/60 rounded-xl border border-gray-800 hover:border-[#3fb8bd] transition overflow-hidden group cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square relative bg-gray-800",
                                    children: [
                                        nft.image_url || ((_nft_metadata = nft.metadata) === null || _nft_metadata === void 0 ? void 0 : _nft_metadata.image_url) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: nft.image_url || ((_nft_metadata1 = nft.metadata) === null || _nft_metadata1 === void 0 ? void 0 : _nft_metadata1.image_url) || '',
                                            alt: ((_nft_metadata2 = nft.metadata) === null || _nft_metadata2 === void 0 ? void 0 : _nft_metadata2.name) || "NFT #".concat(nft.id),
                                            fill: true,
                                            className: "object-cover group-hover:scale-105 transition",
                                            unoptimized: true,
                                            onError: (e)=>{
                                                // Fallback to placeholder on image error
                                                e.currentTarget.style.display = 'none';
                                                const placeholder = e.currentTarget.nextElementSibling;
                                                if (placeholder) placeholder.style.display = 'flex';
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center h-full text-4xl",
                                            style: {
                                                display: nft.image_url || ((_nft_metadata3 = nft.metadata) === null || _nft_metadata3 === void 0 ? void 0 : _nft_metadata3.image_url) ? 'none' : 'flex'
                                            },
                                            children: "🐸"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[#3fb8bd] text-sm truncate",
                                        children: ((_nft_metadata4 = nft.metadata) === null || _nft_metadata4 === void 0 ? void 0 : _nft_metadata4.name) || "#".concat(nft.id)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, nft.id, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-[#4ecca7]/10 to-transparent rounded-2xl border border-[#4ecca7]/20 p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#4ecca7] mb-4 font-fredoka",
                        children: "🎁 Your Rewards"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 mb-6",
                        children: [
                            "You own ",
                            kektechNFTs.length,
                            " 𝕂Ǝ𝕂TECH NFT",
                            kektechNFTs.length > 1 ? 's' : '',
                            "! Earn daily rewards and exclusive benefits."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/rewards",
                        className: "inline-block px-6 py-3 rounded-xl bg-[#4ecca7]/20 text-[#4ecca7] font-bold hover:bg-[#4ecca7]/30 transition font-fredoka",
                        children: "View Rewards Details"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(KektechNFTsOnly, "98uDazG6I5pH61Qsn046AiTPoSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletNFTs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useStaticMetadata$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStaticMetadata"]
    ];
});
_c = KektechNFTsOnly;
var _c;
__turbopack_context__.k.register(_c, "KektechNFTsOnly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailViewSection",
    ()=>DetailViewSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$TechTokenCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/TechTokenCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$VoucherSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/VoucherSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$wallet$2f$KektechNFTsOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/wallet/KektechNFTsOnly.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/useWalletNFTs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/config/constants.ts [app-client] (ecmascript)");
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
function DetailViewSection(param) {
    let { activeSection, onSectionChange, address, techBalance, techBalanceFormatted, techBalanceCompact, techLoading, vouchers, ownedVouchers, totalVouchers, vouchersLoading, explorerUrl, totalNFTs, kektechNFTCount } = param;
    _s();
    // Fetch all NFTs to show other NFTs in the portfolio overview
    const { nfts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletNFTs"])(address);
    // Filter to get only non-KEKTECH NFTs
    const otherNFTs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DetailViewSection.useMemo[otherNFTs]": ()=>{
            return nfts.filter({
                "DetailViewSection.useMemo[otherNFTs]": (nft)=>{
                    var _nft_token, _nft_metadata, _nft_token1;
                    const nftAddress = nft === null || nft === void 0 ? void 0 : (_nft_token = nft.token) === null || _nft_token === void 0 ? void 0 : _nft_token.address // ← FIXED: Use "address" not "address_hash"
                    ;
                    if (!nftAddress || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"]) return true;
                    const isKektech = nftAddress.toLowerCase() === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"].toLowerCase();
                    // Debug logging to diagnose categorization issue (ALWAYS ENABLED FOR DIAGNOSIS)
                    console.log('🔍 NFT Contract Check:', {
                        nftId: nft.id,
                        nftName: ((_nft_metadata = nft.metadata) === null || _nft_metadata === void 0 ? void 0 : _nft_metadata.name) || ((_nft_token1 = nft.token) === null || _nft_token1 === void 0 ? void 0 : _nft_token1.name),
                        nftAddress: nftAddress,
                        kektechAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"],
                        nftAddressLower: nftAddress.toLowerCase(),
                        kektechAddressLower: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEKTECH_CONTRACT_ADDRESS"].toLowerCase(),
                        isKektech,
                        willShowInOtherNFTs: !isKektech
                    });
                    return !isKektech;
                }
            }["DetailViewSection.useMemo[otherNFTs]"]);
        }
    }["DetailViewSection.useMemo[otherNFTs]"], [
        nfts
    ]);
    // NFT Section - ONLY KEKTECH NFTs
    if (activeSection === 'nfts') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 p-8 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-green-400 mb-2 font-fredoka",
                                        children: "🐸 Your 𝕂Ǝ𝕂TECH NFTs"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400",
                                        children: [
                                            "View and manage your ",
                                            kektechNFTCount,
                                            " 𝕂Ǝ𝕂TECH NFTs on BasedAI Network"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$wallet$2f$KektechNFTsOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KektechNFTsOnly"], {
                            address: address
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    }
    // TECH Token Section
    if (activeSection === 'tech') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$TechTokenCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechTokenCard"], {
                balance: techBalance,
                balanceFormatted: techBalanceFormatted,
                balanceCompact: techBalanceCompact,
                isLoading: techLoading
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    }
    // Vouchers Section - Changed to YELLOW
    if (activeSection === 'vouchers') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-2xl border border-yellow-500/20 p-8 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$VoucherSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoucherSection"], {
                        vouchers: vouchers,
                        ownedVouchers: ownedVouchers,
                        totalVouchers: totalVouchers,
                        isLoading: vouchersLoading,
                        explorerUrl: explorerUrl
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this);
    }
    // Total Assets Overview Section
    if (activeSection === 'assets') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-gradient-to-br from-gray-700/10 to-gray-800/10 rounded-2xl border border-gray-700/30 p-8 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-[#3fb8bd] mb-2 font-fredoka",
                                    children: "📊 Complete Portfolio Overview"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 153,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-lg",
                                    children: "Comprehensive view of all your assets on BasedAI Network"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 156,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 152,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSectionChange('nfts'),
                                    className: "bg-green-500/10 rounded-xl border border-green-500/20 p-6 hover:border-green-500/40 hover:bg-green-500/15 transition cursor-pointer text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-4",
                                            children: "🐸"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 168,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-green-400 mb-2 font-fredoka",
                                            children: "𝕂Ǝ𝕂TECH NFTs"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 169,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: kektechNFTCount
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 172,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                "𝕂Ǝ𝕂TECH NFTs",
                                                totalNFTs > kektechNFTCount && " (+".concat(totalNFTs - kektechNFTCount, " others)")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 175,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 164,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSectionChange('tech'),
                                    className: "bg-cyan-500/10 rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/40 hover:bg-cyan-500/15 transition cursor-pointer text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-4",
                                            children: "💰"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 186,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-cyan-400 mb-2 font-fredoka",
                                            children: "TECH Tokens"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 187,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: techBalanceCompact
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 190,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: parseFloat(techBalance) > 0 ? "".concat(techBalance, " TECH") : 'No tokens held'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 193,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 182,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSectionChange('vouchers'),
                                    className: "bg-yellow-500/10 rounded-xl border border-yellow-500/20 p-6 hover:border-yellow-500/40 hover:bg-yellow-500/15 transition cursor-pointer text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-4",
                                            children: "🎫"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 205,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-[#daa520] mb-2 font-fredoka",
                                            children: "𝕂Ǝ𝕂TECH Vouchers"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 206,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: totalVouchers
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 209,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                ownedVouchers.length,
                                                " type",
                                                ownedVouchers.length !== 1 ? 's' : '',
                                                " owned"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 212,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 201,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 162,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/60 rounded-xl border border-gray-800 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-[#3fb8bd] mb-4 font-fredoka",
                                    children: "Asset Breakdown"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 220,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSectionChange('nfts'),
                                            className: "w-full flex items-center justify-between pb-4 border-b border-gray-800 hover:bg-gray-800/50 -mx-3 px-3 py-2 rounded-lg transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl",
                                                            children: "🐸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold",
                                                                    children: "𝕂Ǝ𝕂TECH NFTs (ERC-721)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: [
                                                                        kektechNFTCount,
                                                                        " collectibles"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-green-400 font-bold",
                                                        children: [
                                                            kektechNFTCount,
                                                            " Owned"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 225,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSectionChange('tech'),
                                            className: "w-full flex items-center justify-between pb-4 border-b border-gray-800 hover:bg-gray-800/50 -mx-3 px-3 py-2 rounded-lg transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl",
                                                            children: "💰"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold",
                                                                    children: "TECH Token (ERC-20)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: [
                                                                        techBalanceCompact,
                                                                        " balance"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-cyan-400 font-bold",
                                                        children: parseFloat(techBalance) > 0 ? 'Active' : 'Empty'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 244,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onSectionChange('vouchers'),
                                            className: "w-full flex items-center justify-between pb-4 border-b border-gray-800 hover:bg-gray-800/50 -mx-3 px-3 py-2 rounded-lg transition cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl",
                                                            children: "🎫"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold",
                                                                    children: "𝕂Ǝ𝕂TECH Vouchers (ERC-1155)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: [
                                                                        ownedVouchers.length,
                                                                        " types"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#daa520] font-bold",
                                                        children: [
                                                            totalVouchers,
                                                            " Total"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 263,
                                            columnNumber: 13
                                        }, this),
                                        totalNFTs > kektechNFTCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl",
                                                            children: "🎨"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold",
                                                                    children: "Based NFTs (ERC-721)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: "Various collections"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white font-bold",
                                                        children: [
                                                            totalNFTs - kektechNFTCount,
                                                            " Owned"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 223,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 219,
                            columnNumber: 9
                        }, this),
                        otherNFTs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 bg-gray-900/60 rounded-xl border border-gray-800 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-[#3fb8bd] mb-4 font-fredoka",
                                    children: "🎨 Based NFTs"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mb-4",
                                    children: [
                                        "Your collection of ",
                                        otherNFTs.length,
                                        " NFT",
                                        otherNFTs.length !== 1 ? 's' : '',
                                        " from various Based collections"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3",
                                    children: otherNFTs.map((nft)=>{
                                        var _nft_metadata, _nft_metadata1, _nft_metadata2, _nft_metadata3, _nft_metadata4, _nft_metadata5;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition group",
                                            title: ((_nft_metadata = nft.metadata) === null || _nft_metadata === void 0 ? void 0 : _nft_metadata.name) || "NFT #".concat(nft.id),
                                            children: [
                                                nft.image_url || ((_nft_metadata1 = nft.metadata) === null || _nft_metadata1 === void 0 ? void 0 : _nft_metadata1.image_url) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: nft.image_url || ((_nft_metadata2 = nft.metadata) === null || _nft_metadata2 === void 0 ? void 0 : _nft_metadata2.image_url) || '',
                                                    alt: ((_nft_metadata3 = nft.metadata) === null || _nft_metadata3 === void 0 ? void 0 : _nft_metadata3.name) || "NFT #".concat(nft.id),
                                                    fill: true,
                                                    className: "object-cover group-hover:scale-110 transition",
                                                    unoptimized: true,
                                                    onError: (e)=>{
                                                        e.currentTarget.style.display = 'none';
                                                        const placeholder = e.currentTarget.nextElementSibling;
                                                        if (placeholder) placeholder.style.display = 'flex';
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 21
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center text-2xl bg-gray-800",
                                                    style: {
                                                        display: nft.image_url || ((_nft_metadata4 = nft.metadata) === null || _nft_metadata4 === void 0 ? void 0 : _nft_metadata4.image_url) ? 'none' : 'flex'
                                                    },
                                                    children: "🎨"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-xs text-center line-clamp-2 font-semibold",
                                                        children: ((_nft_metadata5 = nft.metadata) === null || _nft_metadata5 === void 0 ? void 0 : _nft_metadata5.name) || "#".concat(nft.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, nft.id, true, {
                                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        }),
                                    className: "flex-1 min-w-[200px] px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-bold transition font-fredoka",
                                    children: "🔝 Back to Top"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 351,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: true,
                                    className: "flex-1 min-w-[200px] px-6 py-3 rounded-xl bg-gray-800/50 text-gray-500 font-bold cursor-not-allowed font-fredoka opacity-50",
                                    title: "Coming soon",
                                    children: "📊 Export Portfolio (Coming Soon)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                                    lineNumber: 357,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                            lineNumber: 350,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(DetailViewSection, "26MVQFTAOkziQKCp9pWRCBDMo6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$useWalletNFTs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWalletNFTs"]
    ];
});
_c = DetailViewSection;
var _c;
__turbopack_context__.k.register(_c, "DetailViewSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComprehensiveDashboard",
    ()=>ComprehensiveDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$usePortfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/lib/hooks/usePortfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$PortfolioOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/PortfolioOverview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$DetailViewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/DetailViewSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ComprehensiveDashboard(param) {
    let { address } = param;
    var _portfolio_techBalance, _portfolio_techBalance1, _portfolio_metrics, _portfolio_metrics1, _portfolio_metrics2, _portfolio_metrics3, _portfolio_techBalance2, _portfolio_techBalance3, _portfolio_techBalance4, _portfolio_techBalance5, _portfolio_voucherBalance, _portfolio_voucherBalance1, _portfolio_voucherBalance2, _portfolio_voucherBalance3, _portfolio_voucherBalance4, _portfolio_metrics4, _portfolio_metrics5;
    _s();
    const portfolio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$usePortfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolioData"])();
    // State to track which section is active (default: Complete Portfolio Overview)
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('assets');
    // Global loading state
    if (portfolio.isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-[#3fb8bd] mb-4"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-400 font-fredoka",
                    children: "Loading your portfolio..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "Fetching data from blockchain"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    // Global error state
    if (portfolio.hasError && portfolio.errors.length > 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-900/20 border border-red-900 rounded-xl p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl mb-4",
                    children: "⚠️"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-red-100 mb-3 font-fredoka",
                    children: "Failed to Load Portfolio"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-300 mb-6 space-y-2",
                    children: portfolio.errors.map((error, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: error
                        }, i, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: portfolio.refetchAll,
                    className: "px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition font-fredoka",
                    children: "🔄 Retry All"
                }, void 0, false, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$PortfolioOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortfolioOverview"], {
                techBalance: ((_portfolio_techBalance = portfolio.techBalance) === null || _portfolio_techBalance === void 0 ? void 0 : _portfolio_techBalance.balance) || '0',
                techBalanceCompact: ((_portfolio_techBalance1 = portfolio.techBalance) === null || _portfolio_techBalance1 === void 0 ? void 0 : _portfolio_techBalance1.balanceCompact) || '0',
                totalNFTs: ((_portfolio_metrics = portfolio.metrics) === null || _portfolio_metrics === void 0 ? void 0 : _portfolio_metrics.totalNFTs) || 0,
                kektechNFTCount: ((_portfolio_metrics1 = portfolio.metrics) === null || _portfolio_metrics1 === void 0 ? void 0 : _portfolio_metrics1.kektechNFTCount) || 0,
                totalVouchers: ((_portfolio_metrics2 = portfolio.metrics) === null || _portfolio_metrics2 === void 0 ? void 0 : _portfolio_metrics2.totalVouchers) || 0,
                uniqueVoucherTypes: ((_portfolio_metrics3 = portfolio.metrics) === null || _portfolio_metrics3 === void 0 ? void 0 : _portfolio_metrics3.uniqueVoucherTypes) || 0,
                isLoading: portfolio.isLoading,
                activeSection: activeSection,
                onSectionChange: setActiveSection
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$DetailViewSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetailViewSection"], {
                activeSection: activeSection,
                onSectionChange: setActiveSection,
                address: address,
                techBalance: ((_portfolio_techBalance2 = portfolio.techBalance) === null || _portfolio_techBalance2 === void 0 ? void 0 : _portfolio_techBalance2.balance) || '0',
                techBalanceFormatted: ((_portfolio_techBalance3 = portfolio.techBalance) === null || _portfolio_techBalance3 === void 0 ? void 0 : _portfolio_techBalance3.balanceFormatted) || '0',
                techBalanceCompact: ((_portfolio_techBalance4 = portfolio.techBalance) === null || _portfolio_techBalance4 === void 0 ? void 0 : _portfolio_techBalance4.balanceCompact) || '0',
                techLoading: ((_portfolio_techBalance5 = portfolio.techBalance) === null || _portfolio_techBalance5 === void 0 ? void 0 : _portfolio_techBalance5.isLoading) || false,
                vouchers: ((_portfolio_voucherBalance = portfolio.voucherBalance) === null || _portfolio_voucherBalance === void 0 ? void 0 : _portfolio_voucherBalance.vouchers) || [],
                ownedVouchers: ((_portfolio_voucherBalance1 = portfolio.voucherBalance) === null || _portfolio_voucherBalance1 === void 0 ? void 0 : _portfolio_voucherBalance1.ownedVouchers) || [],
                totalVouchers: ((_portfolio_voucherBalance2 = portfolio.voucherBalance) === null || _portfolio_voucherBalance2 === void 0 ? void 0 : _portfolio_voucherBalance2.totalVouchers) || 0,
                vouchersLoading: ((_portfolio_voucherBalance3 = portfolio.voucherBalance) === null || _portfolio_voucherBalance3 === void 0 ? void 0 : _portfolio_voucherBalance3.isLoading) || false,
                explorerUrl: ((_portfolio_voucherBalance4 = portfolio.voucherBalance) === null || _portfolio_voucherBalance4 === void 0 ? void 0 : _portfolio_voucherBalance4.explorerUrl) || 'https://explorer.bf1337.org',
                totalNFTs: ((_portfolio_metrics4 = portfolio.metrics) === null || _portfolio_metrics4 === void 0 ? void 0 : _portfolio_metrics4.totalNFTs) || 0,
                kektechNFTCount: ((_portfolio_metrics5 = portfolio.metrics) === null || _portfolio_metrics5 === void 0 ? void 0 : _portfolio_metrics5.kektechNFTCount) || 0
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: portfolio.refetchAll,
                        className: "px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold transition font-fredoka inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🔄"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Refresh All Data"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500 mt-2",
                        children: "Data updates automatically every 10-15 seconds"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(ComprehensiveDashboard, "89iZGSCgwGufScMg/XTSUX3xowc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$lib$2f$hooks$2f$usePortfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePortfolioData"]
    ];
});
_c = ComprehensiveDashboard;
var _c;
__turbopack_context__.k.register(_c, "ComprehensiveDashboard");
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
"[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$ComprehensiveDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/dashboard/ComprehensiveDashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$ui$2f$BlurredTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/kektechbmad100/packages/frontend/components/ui/BlurredTitleSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const dynamic = 'force-dynamic';
function DashboardPage() {
    _s();
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 bg-gradient-to-b from-black to-gray-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-12 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$ui$2f$BlurredTitleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurredTitleSection"], {
                            title: "Your Dashboard",
                            subtitle: "Comprehensive view of your TECH tokens, NFTs, and vouchers"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        isConnected && address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$dashboard$2f$ComprehensiveDashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComprehensiveDashboard"], {
                            address: address
                        }, void 0, false, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/60 rounded-xl border border-gray-800 p-12 text-center max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl mb-6",
                                    children: "🔗"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-fredoka text-2xl font-bold text-white mb-4",
                                    children: "Connect Your Wallet"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mb-6 max-w-md mx-auto",
                                    children: "Connect your wallet to view your complete portfolio including TECH tokens, KEKTECH NFTs, vouchers, and rewards."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500",
                                    children: 'Click the "Connect Wallet" button in the header to get started'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/kektechbmad100/packages/frontend/app/dashboard/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "tMQ6u8u8z1LVeyI/NWedhlXoxok=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$kektechbmad100$2f$packages$2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_kektechbmad100_packages_frontend_94df8794._.js.map