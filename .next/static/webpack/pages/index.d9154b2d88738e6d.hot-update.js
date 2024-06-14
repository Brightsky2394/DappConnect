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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../artifacts/contracts/Assessment.sol/Assessment.json */ \"./artifacts/contracts/Assessment.sol/Assessment.json\");\n/* harmony import */ var _deploymentInfo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../deploymentInfo.json */ \"./deploymentInfo.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [ethWallet, setEthWallet] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [atm, setATM] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const contractAddress = _deploymentInfo_json__WEBPACK_IMPORTED_MODULE_4__.address;\n    const atmABI = _artifacts_contracts_Assessment_sol_Assessment_json__WEBPACK_IMPORTED_MODULE_3__.abi;\n    const getWallet = async ()=>{\n        if (window.ethereum) {\n            setEthWallet(window.ethereum);\n        }\n        if (ethWallet) {\n            const accounts = await ethWallet.request({\n                method: \"eth_accounts\"\n            });\n            handleAccount(accounts);\n        }\n    };\n    const handleAccount = (accounts)=>{\n        if (accounts.length > 0) {\n            console.log(\"Account connected: \", accounts[0]);\n            setAccount(accounts[0]);\n        } else {\n            console.log(\"No account found\");\n        }\n    };\n    const connectAccount = async ()=>{\n        if (!ethWallet) {\n            alert(\"MetaMask wallet is required to connect\");\n            return;\n        }\n        const accounts = await ethWallet.request({\n            method: \"eth_requestAccounts\"\n        });\n        handleAccount(accounts);\n        // Once wallet is set we can get a reference to our deployed contract\n        getATMContract();\n    };\n    const getATMContract = ()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(ethWallet);\n        const signer = provider.getSigner();\n        const atmContract = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(contractAddress, atmABI, signer);\n        setATM(atmContract);\n    };\n    const getBalance = async ()=>{\n        if (atm) {\n            setBalance((await atm.getBalance()).toNumber());\n        }\n    };\n    const deposit = async ()=>{\n        if (atm) {\n            let tx = await atm.deposit(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const withdraw = async ()=>{\n        if (atm) {\n            let tx = await atm.withdraw(1);\n            await tx.wait();\n            getBalance();\n        }\n    };\n    const initUser = ()=>{\n        // Check to see if user has Metamask\n        if (!ethWallet) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"btn-txt\",\n                children: \"Please install Metamask in order to use this ATM.\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 14\n            }, this);\n        }\n        // Check to see if user is connected. If not, connect to their account\n        if (!account) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: connectAccount,\n                style: {\n                    marginLeft: 300,\n                    width: 150,\n                    height: 60,\n                    textAlign: \"center\"\n                },\n                children: \"Please connect your Metamask wallet\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 14\n            }, this);\n        }\n        if (balance === undefined) {\n            getBalance();\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-5d0ab50ba77ad95f\",\n            children: [\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"5d0ab50ba77ad95f\",\n                    children: \".btn-txt.jsx-5d0ab50ba77ad95f{width:20%;height:60px;margin-left:20px;padding:10px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.message.jsx-5d0ab50ba77ad95f{color:purple}\"\n                }, void 0, false, void 0, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"message\",\n                    children: [\n                        \"Your Account: \",\n                        account\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"message\",\n                    children: [\n                        \"Your Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"btn-txt\",\n                    children: \"Deposit 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    className: \"jsx-5d0ab50ba77ad95f\" + \" \" + \"btn-txt\",\n                    children: \"Withdraw 1 ETH\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getWallet();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-ce49c22f332b2dce\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"jsx-ce49c22f332b2dce\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    id: \"welcome-text\",\n                    className: \"jsx-ce49c22f332b2dce\",\n                    children: \"Welcome to the Metacrafters ATM!\"\n                }, void 0, false, {\n                    fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                    lineNumber: 129,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            initUser(),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ce49c22f332b2dce\",\n                children: \".container.jsx-ce49c22f332b2dce{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:sans-serif;background-color:orange;text-align:center;padding-block:20px;height:100vh}#welcome-text.jsx-ce49c22f332b2dce{font-style:italic;color:blue}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/Users/HP/Documents/DappConnect/pages/index.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"WwKlsMi6vo/KQejEZtqMu1JSI9g=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFVO3dCQUFlakM7Ozs7Ozs7OEJBQ3RDLDhEQUFDbUM7b0JBQU9DLFNBQVNSOzhEQUFtQjs4QkFBVTs7Ozs7OzhCQUM5Qyw4REFBQ087b0JBQU9DLFNBQVNMOzhEQUFvQjs4QkFBVTs7Ozs7Ozs7Ozs7O0lBR3JEO0lBRUEzQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RrQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDcUM7a0RBQWU7OzBCQUNkLDhEQUFDQzs7MEJBQU8sNEVBQUNDO29CQUFHQyxJQUFHOzs4QkFBZTs7Ozs7Ozs7Ozs7WUFDN0JkOzs7Ozs7Ozs7OztBQXFCUCxDQUFDO0dBaEp1QnhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBhdG1fYWJpIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL0Fzc2Vzc21lbnQuc29sL0Fzc2Vzc21lbnQuanNvblwiO1xyXG5pbXBvcnQgY29udHJhY3RJbmZvIGZyb20gXCIuLi9kZXBsb3ltZW50SW5mby5qc29uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgW2V0aFdhbGxldCwgc2V0RXRoV2FsbGV0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYXRtLCBzZXRBVE1dID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xyXG5cclxuICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBjb250cmFjdEluZm8uYWRkcmVzcztcclxuICBjb25zdCBhdG1BQkkgPSBhdG1fYWJpLmFiaTtcclxuXHJcbiAgY29uc3QgZ2V0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICBzZXRFdGhXYWxsZXQod2luZG93LmV0aGVyZXVtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXRoV2FsbGV0KSB7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX2FjY291bnRzXCIgfSk7XHJcbiAgICAgIGhhbmRsZUFjY291bnQoYWNjb3VudHMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnQgPSAoYWNjb3VudHMpID0+IHtcclxuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBjb25uZWN0ZWQ6IFwiLCBhY2NvdW50c1swXSk7XHJcbiAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJObyBhY2NvdW50IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbm5lY3RBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFldGhXYWxsZXQpIHtcclxuICAgICAgYWxlcnQoXCJNZXRhTWFzayB3YWxsZXQgaXMgcmVxdWlyZWQgdG8gY29ubmVjdFwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgZXRoV2FsbGV0LnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gICAgaGFuZGxlQWNjb3VudChhY2NvdW50cyk7XHJcblxyXG4gICAgLy8gT25jZSB3YWxsZXQgaXMgc2V0IHdlIGNhbiBnZXQgYSByZWZlcmVuY2UgdG8gb3VyIGRlcGxveWVkIGNvbnRyYWN0XHJcbiAgICBnZXRBVE1Db250cmFjdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEFUTUNvbnRyYWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoV2FsbGV0KTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgYXRtQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYXRtQUJJLCBzaWduZXIpO1xyXG5cclxuICAgIHNldEFUTShhdG1Db250cmFjdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgc2V0QmFsYW5jZSgoYXdhaXQgYXRtLmdldEJhbGFuY2UoKSkudG9OdW1iZXIoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVwb3NpdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhdG0pIHtcclxuICAgICAgbGV0IHR4ID0gYXdhaXQgYXRtLmRlcG9zaXQoMSk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdpdGhkcmF3ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGF0bSkge1xyXG4gICAgICBsZXQgdHggPSBhd2FpdCBhdG0ud2l0aGRyYXcoMSk7XHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKTtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRVc2VyID0gKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHVzZXIgaGFzIE1ldGFtYXNrXHJcbiAgICBpZiAoIWV0aFdhbGxldCkge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiYnRuLXR4dFwiPlBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIGluIG9yZGVyIHRvIHVzZSB0aGlzIEFUTS48L3A+O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB1c2VyIGlzIGNvbm5lY3RlZC4gSWYgbm90LCBjb25uZWN0IHRvIHRoZWlyIGFjY291bnRcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtjb25uZWN0QWNjb3VudH0gc3R5bGU9e3ttYXJnaW5MZWZ0OiAzMDAsIHdpZHRoOiAxNTAsIGhlaWdodDogNjAsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgIFBsZWFzZSBjb25uZWN0IHlvdXIgTWV0YW1hc2sgd2FsbGV0XHJcbiAgICAgICAgPC9idXR0b24+O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiYWxhbmNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2V0QmFsYW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgLmJ0bi10eHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgY29sb3I6IHB1cnBsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPllvdXIgQWNjb3VudDoge2FjY291bnR9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5Zb3VyIEJhbGFuY2U6IHtiYWxhbmNlfTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlcG9zaXR9IGNsYXNzTmFtZT1cImJ0bi10eHRcIj5EZXBvc2l0IDEgRVRIPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3aXRoZHJhd30gY2xhc3NOYW1lPVwiYnRuLXR4dFwiPldpdGhkcmF3IDEgRVRIPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0V2FsbGV0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoZWFkZXI+PGgxIGlkPVwid2VsY29tZS10ZXh0XCI+V2VsY29tZSB0byB0aGUgTWV0YWNyYWZ0ZXJzIEFUTSE8L2gxPjwvaGVhZGVyPlxyXG4gICAgICB7aW5pdFVzZXIoKX1cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZy1ibG9jazogMjBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgI3dlbGNvbWUtdGV4dCB7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJldGhlcnMiLCJhdG1fYWJpIiwiY29udHJhY3RJbmZvIiwiSG9tZVBhZ2UiLCJldGhXYWxsZXQiLCJzZXRFdGhXYWxsZXQiLCJ1bmRlZmluZWQiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImF0bSIsInNldEFUTSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiY29udHJhY3RBZGRyZXNzIiwiYWRkcmVzcyIsImF0bUFCSSIsImFiaSIsImdldFdhbGxldCIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGFuZGxlQWNjb3VudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0QWNjb3VudCIsImFsZXJ0IiwiZ2V0QVRNQ29udHJhY3QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImF0bUNvbnRyYWN0IiwiQ29udHJhY3QiLCJnZXRCYWxhbmNlIiwidG9OdW1iZXIiLCJkZXBvc2l0IiwidHgiLCJ3YWl0Iiwid2l0aGRyYXciLCJpbml0VXNlciIsInAiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXYiLCJtYWluIiwiaGVhZGVyIiwiaDEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});