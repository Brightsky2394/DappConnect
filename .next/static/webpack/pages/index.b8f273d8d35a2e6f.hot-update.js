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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n/* harmony import */ var _deploymentInfo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deploymentInfo.json */ \"./deploymentInfo.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = _deploymentInfo_json__WEBPACK_IMPORTED_MODULE_4__.address;\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const accounts = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(accounts);\n        }\n    };\n    const handleAccount = (accounts)=>{\n        if (accounts.length > 0) {\n            console.log(\"Account connected: \", accounts[0]);\n            setAccount(accounts[0]);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // Once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const deposit = async ()=>{\n        if (atm) {\n            let tx = await atm.deposit(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.withdraw(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"btn-txt\",\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                className: \"btn-txt\",\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 14\n            }, this);\n        }\n        if (balance === undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-77bcdbde1d0f21b1\",\n            children: [\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"77bcdbde1d0f21b1\",\n                    children: \".btn-txt.jsx-77bcdbde1d0f21b1{width:20%;height:20%}.message.jsx-77bcdbde1d0f21b1{color:purple}\"\n                }, void 0, false, void 0, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-77bcdbde1d0f21b1\" + \" \" + \"message\",\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-77bcdbde1d0f21b1\" + \" \" + \"message\",\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    className: \"jsx-77bcdbde1d0f21b1\" + \" \" + \"btn-txt\",\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    className: \"jsx-77bcdbde1d0f21b1\" + \" \" + \"btn-txt\",\n                    children: \"Withdraw 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-8120fd15cb42cbcb\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-8120fd15cb42cbcb\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    id: \"welcome-text\",\n                    className: \"jsx-8120fd15cb42cbcb\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 123,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"8120fd15cb42cbcb\",\n                children: \".container.jsx-8120fd15cb42cbcb{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;background-color:orange;text-align:center;padding-block:20px;height:100vh}#welcome-text.jsx-8120fd15cb42cbcb{font-style:italic;color:blue}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"WwKlsMi6vo/KQejEZtqMu1JSI9g=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEJBQVU7Ozs7Ozs4QkFDOUMsOERBQUNPO29CQUFPQyxTQUFTTDs4REFBb0I7OEJBQVU7Ozs7Ozs7Ozs7OztJQUdyRDtJQUVBM0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNka0I7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2dDO2tEQUFlOzswQkFDZCw4REFBQ0M7OzBCQUFPLDRFQUFDQztvQkFBR0MsSUFBRzs7OEJBQWU7Ozs7Ozs7Ozs7O1lBQzdCVDs7Ozs7Ozs7Ozs7QUFvQlAsQ0FBQztHQXpJdUJ4QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgYXRtX2FiaSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Bc3Nlc3NtZW50LnNvbC9Bc3Nlc3NtZW50Lmpzb25cIjtcclxuaW1wb3J0IGNvbnRyYWN0SW5mbyBmcm9tIFwiLi4vZGVwbG95bWVudEluZm8uanNvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtldGhXYWxsZXQsIHNldEV0aFdhbGxldF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2F0bSwgc2V0QVRNXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gY29udHJhY3RJbmZvLmFkZHJlc3M7XHJcbiAgY29uc3QgYXRtQUJJID0gYXRtX2FiaS5hYmk7XHJcblxyXG4gIGNvbnN0IGdldFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgc2V0RXRoV2FsbGV0KHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV0aFdhbGxldCkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9hY2NvdW50c1wiIH0pO1xyXG4gICAgICBoYW5kbGVBY2NvdW50KGFjY291bnRzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBY2NvdW50ID0gKGFjY291bnRzKSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgY29ubmVjdGVkOiBcIiwgYWNjb3VudHNbMF0pO1xyXG4gICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gYWNjb3VudCBmb3VuZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25uZWN0QWNjb3VudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghZXRoV2FsbGV0KSB7XHJcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgd2FsbGV0IGlzIHJlcXVpcmVkIHRvIGNvbm5lY3RcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IGV0aFdhbGxldC5yZXF1ZXN0KHsgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiB9KTtcclxuICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xyXG5cclxuICAgIC8vIE9uY2Ugd2FsbGV0IGlzIHNldCB3ZSBjYW4gZ2V0IGEgcmVmZXJlbmNlIHRvIG91ciBkZXBsb3llZCBjb250cmFjdFxyXG4gICAgZ2V0QVRNQ29udHJhY3QoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBVE1Db250cmFjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aFdhbGxldCk7XHJcbiAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIGNvbnN0IGF0bUNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGF0bUFCSSwgc2lnbmVyKTtcclxuXHJcbiAgICBzZXRBVE0oYXRtQ29udHJhY3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtKSB7XHJcbiAgICAgIHNldEJhbGFuY2UoKGF3YWl0IGF0bS5nZXRCYWxhbmNlKCkpLnRvTnVtYmVyKCkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoYXRtKSB7XHJcbiAgICAgIGxldCB0eCA9IGF3YWl0IGF0bS5kZXBvc2l0KDEpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB3aXRoZHJhdyA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLndpdGhkcmF3KDEpO1xyXG4gICAgICBhd2FpdCB0eC53YWl0KCk7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0VXNlciA9ICgpID0+IHtcclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGhhcyBNZXRhbWFza1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImJ0bi10eHRcIj5QbGVhc2UgaW5zdGFsbCBNZXRhbWFzayBpbiBvcmRlciB0byB1c2UgdGhpcyBBVE0uPC9wPjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdXNlciBpcyBjb25uZWN0ZWQuIElmIG5vdCwgY29ubmVjdCB0byB0aGVpciBhY2NvdW50XHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17Y29ubmVjdEFjY291bnR9IGNsYXNzTmFtZT1cImJ0bi10eHRcIj5QbGVhc2UgY29ubmVjdCB5b3VyIE1ldGFtYXNrIHdhbGxldDwvYnV0dG9uPjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmFsYW5jZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdldEJhbGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgIC5idG4tdHh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+WW91ciBBY2NvdW50OiB7YWNjb3VudH08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPllvdXIgQmFsYW5jZToge2JhbGFuY2V9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0gY2xhc3NOYW1lPVwiYnRuLXR4dFwiPkRlcG9zaXQgMSBFVEg8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dpdGhkcmF3fSBjbGFzc05hbWU9XCJidG4tdHh0XCI+V2l0aGRyYXcgMSBFVEg8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRXYWxsZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGhlYWRlcj48aDEgaWQ9XCJ3ZWxjb21lLXRleHRcIj5XZWxjb21lIHRvIHRoZSBNZXRhY3JhZnRlcnMgQVRNITwvaDE+PC9oZWFkZXI+XHJcbiAgICAgIHtpbml0VXNlcigpfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3dlbGNvbWUtdGV4dCB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJhdG1fYWJpIiwiY29udHJhY3RJbmZvIiwiSG9tZVBhZ2UiLCJldGhXYWxsZXQiLCJzZXRFdGhXYWxsZXQiLCJ1bmRlZmluZWQiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImF0bSIsInNldEFUTSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiY29udHJhY3RBZGRyZXNzIiwiYWRkcmVzcyIsImF0bUFCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwiZ2V0QVRNQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImF0bUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRCYWxhbmNlIiwidG9OdW1iZXIiLCJkZXBvc2l0IiwidHgiLCJ3YWl0Iiwid2l0aGRyYXciLCJpbml0VXNlciIsInAiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2IiwibWFpbiIsImhlYWRlciIsImgxIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});