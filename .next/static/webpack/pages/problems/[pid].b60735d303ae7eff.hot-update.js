"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/problems/[pid]",{

/***/ "./src/components/Workspace/Playground/Playground.tsx":
/*!************************************************************!*\
  !*** ./src/components/Workspace/Playground/Playground.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PreferenceNav_PreferenceNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreferenceNav/PreferenceNav */ \"./src/components/Workspace/Playground/PreferenceNav/PreferenceNav.tsx\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-split */ \"./node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/react-codemirror */ \"./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/codemirror-theme-vscode */ \"./node_modules/@uiw/codemirror-theme-vscode/esm/index.js\");\n/* harmony import */ var _EditorFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditorFooter */ \"./src/components/Workspace/Playground/EditorFooter.tsx\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _utils_problems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/problems */ \"./src/utils/problems/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @codemirror/lang-javascript */ \"./node_modules/@codemirror/lang-javascript/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Playground = (param)=>{\n    let { problem , setSuccess  } = param;\n    _s();\n    const [activeTestCaseId, setActiveCaseId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userCode, setUserCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(problem.starterCode);\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_8__.auth);\n    const { query: { pid  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    const handleSubmit = async ()=>{\n        if (!user) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(\"Please login to submit\", {\n                position: \"top-center\",\n                theme: \"dark\",\n                autoClose: 3000\n            });\n            return;\n        }\n        try {\n            const cb = new Function(\"return \".concat(userCode))();\n            const success = _utils_problems__WEBPACK_IMPORTED_MODULE_10__.problems[pid].handlerFunction(cb);\n            if (success) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success(\"Congrats! All test Cases passed!\", {\n                    position: \"top-center\",\n                    autoClose: 3000,\n                    theme: \"dark\"\n                });\n                setSuccess(true);\n                setTimeout(()=>{\n                    setSuccess(false);\n                }, 4000);\n            }\n        } catch (error) {\n            if (error.message.startsWith(\"AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:\")) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(\"Oops! One or more test cases failed\", {\n                    position: \"top-center\",\n                    autoClose: 3000,\n                    theme: \"dark\"\n                });\n            } else {\n                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error.message, {\n                    position: \"top-center\",\n                    autoClose: 3000,\n                    theme: \"dark\"\n                });\n            }\n        }\n    };\n    const onChange = (value)=>{\n        console.log(value);\n        setUserCode(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-dark-layer-1 relative overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreferenceNav_PreferenceNav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"h-[calc(100vh-94px)]\",\n                direction: \"vertical\",\n                sizes: [\n                    60,\n                    40\n                ],\n                minSize: 60,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full overflow-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            value: problem.starterCode,\n                            theme: _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_5__.vscodeDark,\n                            onChange: onChange,\n                            extensions: [\n                                (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_12__.javascript)()\n                            ],\n                            style: {\n                                fontSize: 16\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full px-5 overflow-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex h-10 items-center space-x-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex h-full flex-col justify-center cursor-pointer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm font-medium leading-5 text-white\",\n                                            children: \"TestCases\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"absolute bottom-0 h-0.5 w-[19.5cm] rounded-full border-none bg-white\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 18\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: problem.examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mr-2 items-start mt-2 text-gray-500\",\n                                        onClick: ()=>setActiveCaseId(index),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-wrap items-center gap-y-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-meduim items-center transition-all focus:outline-none inline-flex bg-dark-fill-3\\n                         hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap\\n                         \".concat(activeTestCaseId == index ? \"text-white\" : \"\"),\n                                                children: [\n                                                    \"Case \",\n                                                    index + 1\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 26\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 22\n                                        }, undefined)\n                                    }, example.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 22\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \" Input:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg px-4 border py-[10px] bg-dark-fill-3 border-transparent text-white\",\n                                        children: problem.examples[activeTestCaseId].inputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \" Output:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg px-4 border py-[10px] bg-dark-fill-3 border-transparent text-white\",\n                                        children: problem.examples[activeTestCaseId].outputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorFooter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                handleSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Playground, \"c/K3FJman4Cb/jzmuNO8/bVeAJQ=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState,\n        next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter\n    ];\n});\n_c = Playground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playground);\nvar _c;\n$RefreshReg$(_c, \"Playground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrc3BhY2UvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2tCO0FBQzNCO0FBQ2dCO0FBQ1c7QUFFaEI7QUFFZTtBQUNkO0FBQ0o7QUFDSztBQUNKO0FBQ2lCO0FBTXpELE1BQU1hLGFBQXVDO1FBQUMsRUFBQ0MsUUFBTyxFQUFHQyxXQUFVLEVBQUM7O0lBQy9ELE1BQU0sQ0FBQ0Msa0JBQWlCQyxnQkFBZ0IsR0FBQ2hCLCtDQUFRQSxDQUFTO0lBQzFELE1BQU0sQ0FBQ2lCLFVBQVNDLFlBQVksR0FBQ2xCLCtDQUFRQSxDQUFTYSxRQUFRTTtJQUN0RCxNQUFNLENBQUNDLEtBQUssR0FBQ2QsdUVBQVlBLENBQUNDLG9EQUFJQTtJQUM5QixNQUFNLEVBQUVjLE9BQVEsRUFBQ0MsSUFBRyxFQUFDLEdBQUMsR0FBQ1osdURBQVNBO0lBQ2hDLE1BQU1hLGVBQWM7UUFDaEIsSUFBRyxDQUFDSCxNQUFLO1lBQ05aLHVEQUFXZ0IsQ0FBQywwQkFBeUI7Z0JBQUNDLFVBQVM7Z0JBQWFDLE9BQU07Z0JBQU9DLFdBQVU7WUFBSTtZQUN2RjtRQUNIO1FBQ0EsSUFBRztZQUNBLE1BQU1DLEtBQUcsSUFBSUMsU0FBUyxVQUFtQixPQUFUWjtZQUNoQyxNQUFNYSxVQUFRckIsc0RBQVEsQ0FBQ2EsSUFBYyxDQUFDUyxnQkFBZ0JIO1lBQ3RELElBQUdFLFNBQVE7Z0JBQ1B0Qix5REFBYXNCLENBQUMsb0NBQW1DO29CQUFDTCxVQUFTO29CQUFhRSxXQUFVO29CQUFLRCxPQUFNO2dCQUFNO2dCQUNuR1osV0FBVztnQkFDWGtCLFdBQVc7b0JBQ1hsQixXQUFXO2dCQUNYLEdBQUU7WUFDTjtRQUNILEVBQUMsT0FBTVUsT0FBVTtZQUNkLElBQ1JBLE1BQU1TLFFBQVFDLFdBQVcsK0VBQ3hCO2dCQUNEMUIsdURBQVdnQixDQUFDLHVDQUF1QztvQkFDbERDLFVBQVU7b0JBQ1ZFLFdBQVc7b0JBQ1hELE9BQU87Z0JBQ1I7WUFDRCxPQUFPO2dCQUNObEIsdURBQVdnQixDQUFDQSxNQUFNUyxTQUFTO29CQUMxQlIsVUFBVTtvQkFDVkUsV0FBVztvQkFDWEQsT0FBTztnQkFDUjtZQUNEO1FBQ007SUFDSjtJQUNBLE1BQU1TLFdBQVcsQ0FBQ0M7UUFDZkMsUUFBUUMsSUFBSUY7UUFDWmxCLFlBQVlrQjtJQUNmO0lBQ0QscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDdkMsb0VBQWFBOzs7OzswQkFDZCw4REFBQ0MsbURBQUtBO2dCQUFDc0MsV0FBVTtnQkFBdUJDLFdBQVU7Z0JBQVdDLE9BQU87b0JBQUM7b0JBQUc7aUJBQUc7Z0JBQUVDLFNBQVM7O2tDQUNsRiw4REFBQ0o7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNyQyw2REFBVUE7NEJBQ1hpQyxPQUFPdkIsUUFBUU07NEJBQ2ZPLE9BQU90QixvRUFBVUE7NEJBQ2pCK0IsVUFBVUE7NEJBQ1ZTLFlBQVk7Z0NBQUNqQyx3RUFBVUE7NkJBQUc7NEJBQzFCa0MsT0FBTztnQ0FBQ0MsVUFBUzs0QkFBRTs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDUDt3QkFBSUMsV0FBVTs7MENBRVgsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNkLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1osOERBQUNEOzRDQUFJQyxXQUFVO3NEQUEyQzs7Ozs7O3NEQUMxRCw4REFBQ087NENBQUdQLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlsQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBRVozQixRQUFRbUMsU0FBU0MsSUFBSSxDQUFDQyxTQUFRQyxzQkFDNUIsOERBQUNaO3dDQUFJQyxXQUFVO3dDQUF1RFksU0FBUyxJQUFJcEMsZ0JBQWdCbUM7a0RBQ25HLDRFQUFDWjs0Q0FBSUMsV0FBVTtzREFDWCw0RUFBQ0Q7Z0RBQUlDLFdBQVcsaU9BRTRCLE9BQTFDekIsb0JBQWtCb0MsUUFBUSxlQUFhOztvREFBTTtvREFDckNBLFFBQU07Ozs7Ozs7Ozs7Ozt1Q0FMc0NELFFBQVFHOzs7Ozs7Ozs7OzBDQVd2RSw4REFBQ2Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDYzt3Q0FBRWQsV0FBVTtrREFBc0M7Ozs7OztrREFDbkQsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNWM0IsUUFBUW1DLFFBQVEsQ0FBQ2pDLGlCQUFpQixDQUFDd0M7Ozs7OztrREFFeEMsOERBQUNEO3dDQUFFZCxXQUFVO2tEQUFzQzs7Ozs7O2tEQUNuRCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2QzQixRQUFRbUMsUUFBUSxDQUFDakMsaUJBQWlCLENBQUN5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoRCw4REFBQ25ELHFEQUFZQTtnQkFBQ2tCLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHcEM7R0E1Rk1YOztRQUdZTixtRUFBWUE7UUFDRkksbURBQVNBOzs7S0FKL0JFO0FBNkZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmtzcGFjZS9QbGF5Z3JvdW5kL1BsYXlncm91bmQudHN4PzQ1ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJlZmVyZW5jZU5hdiBmcm9tICcuL1ByZWZlcmVuY2VOYXYvUHJlZmVyZW5jZU5hdic7XHJcbmltcG9ydCBTcGxpdCBmcm9tICdyZWFjdC1zcGxpdCdcclxuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSAnQHVpdy9yZWFjdC1jb2RlbWlycm9yJztcclxuaW1wb3J0IHsgdnNjb2RlRGFyayB9IGZyb20gJ0B1aXcvY29kZW1pcnJvci10aGVtZS12c2NvZGUnO1xyXG5pbXBvcnQgeyBjcHAgfSBmcm9tICdAY29kZW1pcnJvci9sYW5nLWNwcCc7XHJcbmltcG9ydCBFZGl0b3JGb290ZXIgZnJvbSAnLi9FZGl0b3JGb290ZXInO1xyXG5pbXBvcnQgeyBQcm9ibGVtIH0gZnJvbSAnQC91dGlscy90eXBlcy9Qcm9ibGVtJztcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICdAL2ZpcmViYXNlL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHByb2JsZW1zIH0gZnJvbSAnQC91dGlscy9wcm9ibGVtcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgamF2YXNjcmlwdCB9IGZyb20gJ0Bjb2RlbWlycm9yL2xhbmctamF2YXNjcmlwdCc7XHJcbnR5cGUgUGxheWdyb3VuZFByb3BzID0ge1xyXG4gICAgcHJvYmxlbTpQcm9ibGVtO1xyXG4gICAgc2V0U3VjY2VzczpSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbn07XHJcblxyXG5jb25zdCBQbGF5Z3JvdW5kOlJlYWN0LkZDPFBsYXlncm91bmRQcm9wcz4gPSAoe3Byb2JsZW0gLCBzZXRTdWNjZXNzfSkgPT4ge1xyXG4gICAgIGNvbnN0IFthY3RpdmVUZXN0Q2FzZUlkLHNldEFjdGl2ZUNhc2VJZF09dXNlU3RhdGU8bnVtYmVyPigwKTtcclxuICAgICBjb25zdCBbdXNlckNvZGUsc2V0VXNlckNvZGVdPXVzZVN0YXRlPHN0cmluZz4ocHJvYmxlbS5zdGFydGVyQ29kZSk7XHJcbiAgICAgY29uc3QgW3VzZXJdPXVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICAgICBjb25zdCB7IHF1ZXJ5IDoge3BpZH19PXVzZVJvdXRlcigpO1xyXG4gICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD0gYXN5bmMoKT0+e1xyXG4gICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiUGxlYXNlIGxvZ2luIHRvIHN1Ym1pdFwiLHtwb3NpdGlvbjondG9wLWNlbnRlcicsdGhlbWU6XCJkYXJrXCIsYXV0b0Nsb3NlOjMwMDB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgY29uc3QgY2I9bmV3IEZ1bmN0aW9uKGByZXR1cm4gJHt1c2VyQ29kZX1gKSgpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzPXByb2JsZW1zW3BpZCBhcyBzdHJpbmddLmhhbmRsZXJGdW5jdGlvbihjYik7XHJcbiAgICAgICAgICAgIGlmKHN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkNvbmdyYXRzISBBbGwgdGVzdCBDYXNlcyBwYXNzZWQhXCIse3Bvc2l0aW9uOlwidG9wLWNlbnRlclwiLGF1dG9DbG9zZTozMDAwLHRoZW1lOlwiZGFya1wifSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0sNDAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9Y2F0Y2goZXJyb3I6YW55KXtcclxuICAgICAgICAgICAgaWYgKFxyXG5cdFx0XHRcdGVycm9yLm1lc3NhZ2Uuc3RhcnRzV2l0aChcIkFzc2VydGlvbkVycm9yIFtFUlJfQVNTRVJUSU9OXTogRXhwZWN0ZWQgdmFsdWVzIHRvIGJlIHN0cmljdGx5IGRlZXAtZXF1YWw6XCIpXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRvYXN0LmVycm9yKFwiT29wcyEgT25lIG9yIG1vcmUgdGVzdCBjYXNlcyBmYWlsZWRcIiwge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlOiAzMDAwLFxyXG5cdFx0XHRcdFx0dGhlbWU6IFwiZGFya1wiLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcclxuXHRcdFx0XHRcdGF1dG9DbG9zZTogMzAwMCxcclxuXHRcdFx0XHRcdHRoZW1lOiBcImRhcmtcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlOnN0cmluZyk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgc2V0VXNlckNvZGUodmFsdWUpO1xyXG4gICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgYmctZGFyay1sYXllci0xIHJlbGF0aXZlIG92ZXJmbG93LXgtaGlkZGVuJz5cclxuICAgICAgICA8UHJlZmVyZW5jZU5hdi8+XHJcbiAgICAgICAgPFNwbGl0IGNsYXNzTmFtZT0naC1bY2FsYygxMDB2aC05NHB4KV0nIGRpcmVjdGlvbj0ndmVydGljYWwnIHNpemVzPXtbNjAsNDBdfSBtaW5TaXplPXs2MH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgb3ZlcmZsb3ctYXV0byc+XHJcbiAgICAgICAgICAgICAgICA8Q29kZU1pcnJvclxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2JsZW0uc3RhcnRlckNvZGV9XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17dnNjb2RlRGFya31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnM9e1tqYXZhc2NyaXB0KCldfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZToxNn19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBweC01IG92ZXJmbG93LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgey8qIFRlc3RDYXNlcyBIZWFkaW5nICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTAgaXRlbXMtY2VudGVyIHNwYWNlLXgtNlwiPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTUgdGV4dC13aGl0ZSc+VGVzdENhc2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgaC0wLjUgdy1bMTkuNWNtXSByb3VuZGVkLWZ1bGwgYm9yZGVyLW5vbmUgYmctd2hpdGUnLz5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFRlc3RDYXNlcyBCb2R5ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENhc2UxICovfVxyXG4gICAgICAgICAgICAgICAgIHsgcHJvYmxlbS5leGFtcGxlcy5tYXAoKGV4YW1wbGUsaW5kZXgpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMiBpdGVtcy1zdGFydCBtdC0yIHRleHQtZ3JheS01MDBcIiBrZXk9e2V4YW1wbGUuaWR9IG9uQ2xpY2s9eygpPT5zZXRBY3RpdmVDYXNlSWQoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb250LW1lZHVpbSBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZm9jdXM6b3V0bGluZS1ub25lIGlubGluZS1mbGV4IGJnLWRhcmstZmlsbC0zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1kYXJrLWZpbGwtMiByZWxhdGl2ZSByb3VuZGVkLWxnIHB4LTQgcHktMSBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJHthY3RpdmVUZXN0Q2FzZUlkPT1pbmRleCA/IFwidGV4dC13aGl0ZVwiOlwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FzZSB7aW5kZXgrMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1tZWRpdW0gbXQtNCB0ZXh0LXdoaXRlJz4gSW5wdXQ6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgY3Vyc29yLXRleHQgcm91bmRlZC1sZyBweC00IGJvcmRlciBweS1bMTBweF0gYmctZGFyay1maWxsLTMgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvYmxlbS5leGFtcGxlc1thY3RpdmVUZXN0Q2FzZUlkXS5pbnB1dFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIG10LTQgdGV4dC13aGl0ZSc+IE91dHB1dDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBjdXJzb3ItdGV4dCByb3VuZGVkLWxnIHB4LTQgYm9yZGVyIHB5LVsxMHB4XSBiZy1kYXJrLWZpbGwtMyBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2JsZW0uZXhhbXBsZXNbYWN0aXZlVGVzdENhc2VJZF0ub3V0cHV0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NwbGl0PlxyXG4gICAgICAgIDxFZGl0b3JGb290ZXIgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQbGF5Z3JvdW5kOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJlZmVyZW5jZU5hdiIsIlNwbGl0IiwiQ29kZU1pcnJvciIsInZzY29kZURhcmsiLCJFZGl0b3JGb290ZXIiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidG9hc3QiLCJwcm9ibGVtcyIsInVzZVJvdXRlciIsImphdmFzY3JpcHQiLCJQbGF5Z3JvdW5kIiwicHJvYmxlbSIsInNldFN1Y2Nlc3MiLCJhY3RpdmVUZXN0Q2FzZUlkIiwic2V0QWN0aXZlQ2FzZUlkIiwidXNlckNvZGUiLCJzZXRVc2VyQ29kZSIsInN0YXJ0ZXJDb2RlIiwidXNlciIsInF1ZXJ5IiwicGlkIiwiaGFuZGxlU3VibWl0IiwiZXJyb3IiLCJwb3NpdGlvbiIsInRoZW1lIiwiYXV0b0Nsb3NlIiwiY2IiLCJGdW5jdGlvbiIsInN1Y2Nlc3MiLCJoYW5kbGVyRnVuY3Rpb24iLCJzZXRUaW1lb3V0IiwibWVzc2FnZSIsInN0YXJ0c1dpdGgiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImRpcmVjdGlvbiIsInNpemVzIiwibWluU2l6ZSIsImV4dGVuc2lvbnMiLCJzdHlsZSIsImZvbnRTaXplIiwiaHIiLCJleGFtcGxlcyIsIm1hcCIsImV4YW1wbGUiLCJpbmRleCIsIm9uQ2xpY2siLCJpZCIsInAiLCJpbnB1dFRleHQiLCJvdXRwdXRUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Workspace/Playground/Playground.tsx\n"));

/***/ })

});