"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n/* harmony import */ var _deploymentInfo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deploymentInfo.json */ \"./deploymentInfo.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = _deploymentInfo_json__WEBPACK_IMPORTED_MODULE_4__.address;\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const accounts = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(accounts);\n        }\n    };\n    const handleAccount = (accounts)=>{\n        if (accounts.length > 0) {\n            console.log(\"Account connected: \", accounts[0]);\n            setAccount(accounts[0]);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // Once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const deposit = async ()=>{\n        if (atm) {\n            let tx = await atm.deposit(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.withdraw(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"btn-txt\",\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                className: \"btn-txt\",\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 14\n            }, this);\n        }\n        if (balance === undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-5d0ab50ba77ad95f\",\n            children: [\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"5d0ab50ba77ad95f\",\n                    children: \".btn-txt.jsx-5d0ab50ba77ad95f{width:20%;height:60px;margin-left:20px;padding:10px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.message.jsx-5d0ab50ba77ad95f{color:purple}\"\n                }, void 0, false, void 0, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"message\",\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"message\",\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"btn-txt\",\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"btn-txt\",\n                    children: \"Withdraw 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-ce49c22f332b2dce\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-ce49c22f332b2dce\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    id: \"welcome-text\",\n                    className: \"jsx-ce49c22f332b2dce\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 129,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ce49c22f332b2dce\",\n                children: \".container.jsx-ce49c22f332b2dce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;background-color:orange;text-align:center;padding-block:20px;height:100vh}#welcome-text.jsx-ce49c22f332b2dce{font-style:italic;color:blue}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"WwKlsMi6vo/KQejEZtqMu1JSI9g=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhCQUFVOzs7Ozs7OEJBQzlDLDhEQUFDTztvQkFBT0MsU0FBU0w7OERBQW9COzhCQUFVOzs7Ozs7Ozs7Ozs7SUFHckQ7SUFFQTNDLGdEQUFTQSxDQUFDLElBQU07UUFDZGtCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNnQztrREFBZTs7MEJBQ2QsOERBQUNDOzswQkFBTyw0RUFBQ0M7b0JBQUdDLElBQUc7OzhCQUFlOzs7Ozs7Ozs7OztZQUM3QlQ7Ozs7Ozs7Ozs7O0FBcUJQLENBQUM7R0FoSnVCeEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF0bV9hYmkgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvQXNzZXNzbWVudC5zb2wvQXNzZXNzbWVudC5qc29uXCI7XHJcbmltcG9ydCBjb250cmFjdEluZm8gZnJvbSBcIi4uL2RlcGxveW1lbnRJbmZvLmpzb25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBbZXRoV2FsbGV0LCBzZXRFdGhXYWxsZXRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFthdG0sIHNldEFUTV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IGNvbnRyYWN0SW5mby5hZGRyZXNzO1xyXG4gIGNvbnN0IGF0bUFCSSA9IGF0bV9hYmkuYWJpO1xyXG5cclxuICBjb25zdCBnZXRXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHNldEV0aFdhbGxldCh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldGhXYWxsZXQpIHtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfYWNjb3VudHNcIiB9KTtcclxuICAgICAgaGFuZGxlQWNjb3VudChhY2NvdW50cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWNjb3VudCA9IChhY2NvdW50cykgPT4ge1xyXG4gICAgaWYgKGFjY291bnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGNvbm5lY3RlZDogXCIsIGFjY291bnRzWzBdKTtcclxuICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5vIGFjY291bnQgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29ubmVjdEFjY291bnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWV0aFdhbGxldCkge1xyXG4gICAgICBhbGVydChcIk1ldGFNYXNrIHdhbGxldCBpcyByZXF1aXJlZCB0byBjb25uZWN0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBldGhXYWxsZXQucmVxdWVzdCh7IG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIgfSk7XHJcbiAgICBoYW5kbGVBY2NvdW50KGFjY291bnRzKTtcclxuXHJcbiAgICAvLyBPbmNlIHdhbGxldCBpcyBzZXQgd2UgY2FuIGdldCBhIHJlZmVyZW5jZSB0byBvdXIgZGVwbG95ZWQgY29udHJhY3RcclxuICAgIGdldEFUTUNvbnRyYWN0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QVRNQ29udHJhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhXYWxsZXQpO1xyXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICBjb25zdCBhdG1Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhdG1BQkksIHNpZ25lcik7XHJcblxyXG4gICAgc2V0QVRNKGF0bUNvbnRyYWN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBzZXRCYWxhbmNlKChhd2FpdCBhdG0uZ2V0QmFsYW5jZSgpKS50b051bWJlcigpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkZXBvc2l0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0uZGVwb3NpdCgxKTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2l0aGRyYXcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtKSB7XHJcbiAgICAgIGxldCB0eCA9IGF3YWl0IGF0bS53aXRoZHJhdygxKTtcclxuICAgICAgYXdhaXQgdHgud2FpdCgpO1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdFVzZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdXNlciBoYXMgTWV0YW1hc2tcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJidG4tdHh0XCI+UGxlYXNlIGluc3RhbGwgTWV0YW1hc2sgaW4gb3JkZXIgdG8gdXNlIHRoaXMgQVRNLjwvcD47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHVzZXIgaXMgY29ubmVjdGVkLiBJZiBub3QsIGNvbm5lY3QgdG8gdGhlaXIgYWNjb3VudFxyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2Nvbm5lY3RBY2NvdW50fSBjbGFzc05hbWU9XCJidG4tdHh0XCI+XHJcbiAgICAgICAgUGxlYXNlIGNvbm5lY3QgeW91ciBNZXRhbWFzayB3YWxsZXRcclxuICAgICAgICA8L2J1dHRvbj47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJhbGFuY2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBnZXRCYWxhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAuYnRuLXR4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+WW91ciBBY2NvdW50OiB7YWNjb3VudH08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPllvdXIgQmFsYW5jZToge2JhbGFuY2V9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0gY2xhc3NOYW1lPVwiYnRuLXR4dFwiPkRlcG9zaXQgMSBFVEg8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dpdGhkcmF3fSBjbGFzc05hbWU9XCJidG4tdHh0XCI+V2l0aGRyYXcgMSBFVEg8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRXYWxsZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGhlYWRlcj48aDEgaWQ9XCJ3ZWxjb21lLXRleHRcIj5XZWxjb21lIHRvIHRoZSBNZXRhY3JhZnRlcnMgQVRNITwvaDE+PC9oZWFkZXI+XHJcbiAgICAgIHtpbml0VXNlcigpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAjd2VsY29tZS10ZXh0IHtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF0bV9hYmkiLCJjb250cmFjdEluZm8iLCJIb21lUGFnZSIsImV0aFdhbGxldCIsInNldEV0aFdhbGxldCIsInVuZGVmaW5lZCIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYXRtIiwic2V0QVRNIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJjb250cmFjdEFkZHJlc3MiLCJhZGRyZXNzIiwiYXRtQUJJIiwiYWJpIiwiZ2V0V2FsbGV0Iiwid2luZG93IiwiZXRoZXJldW0iLCJhY2NvdW50cyIsInJlcXVlc3QiLCJtZXRob2QiLCJoYW5kbGVBY2NvdW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RBY2NvdW50IiwiYWxlcnQiLCJnZXRBVE1Db250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2lnbmVyIiwiZ2V0U2lnbmVyIiwiYXRtQ29udHJhY3QiLCJDb250cmFjdCIsImdldEJhbGFuY2UiLCJ0b051bWJlciIsImRlcG9zaXQiLCJ0eCIsIndhaXQiLCJ3aXRoZHJhdyIsImluaXRVc2VyIiwicCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJtYWluIiwiaGVhZGVyIiwiaDEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});