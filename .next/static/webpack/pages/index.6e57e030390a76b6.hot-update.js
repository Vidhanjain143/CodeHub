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

/***/ "./src/components/ProblemsTable/ProblemsTable.tsx":
/*!********************************************************!*\
  !*** ./src/components/ProblemsTable/ProblemsTable.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { setLoadingProblems  } = param;\n    _s();\n    const [youTubePlayer, setYouTubePlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        isOpen: false,\n        videoId: \"\"\n    });\n    const problems = useGetProblems(setLoadingProblems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"text-white\",\n                children: problems.map((problem, idx)=>{\n                    const difficultyColor = problem.difficulty === \"Easy\" ? \"text-green-500\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"\".concat(idx % 2 == 1 ? \"bg-dark-layer-1\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-2 py-4 font-medium whitespace-nowrap text-dark-green-s\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCheckCircle, {\n                                    fontSize: 18,\n                                    width: 18\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"hover:text-blue-600 cursor-pointer\",\n                                    href: \"/problems/\".concat(problem.id),\n                                    children: problem.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4 \".concat(difficultyColor),\n                                children: problem.difficulty\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: problem.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: problem.videoId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillYoutube, {\n                                    fontSize: \"28\",\n                                    className: \"cursor-pointer hover:text-red-500\",\n                                    onClick: ()=>setYouTubePlayer({\n                                            isOpen: true,\n                                            videoId: problem.videoId\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 38\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray\",\n                                    children: \"Coming Soon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 35\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, problem.id, true, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            youTubePlayer.isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tfoot\", {\n                className: \"fixed top-0 left-0 h-screen w-screen flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full z-50 h-full px-6 relative max-w-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full flex items-center justify-center relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__.IoClose, {\n                                        fontSize: \"35\",\n                                        className: \"cursor-pointer absolute -top-16 right-0\",\n                                        onClick: ()=>setYouTubePlayer({\n                                                isOpen: false,\n                                                videoId: \"\"\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        videoId: youTubePlayer.videoId,\n                                        loading: \"lazy\",\n                                        iframeClassName: \"w-full min-h-[500px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProblemsTable, \"MJyR0Kai2IS3YiTYSYgX7CG6hLM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            //data fetch from firestore\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n            //console.log(querySnapshot);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            //console.log(tmp);\n            setLoadingProblems(false);\n            setProblems(tmp);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"sBCjwnPE5eE1TvxpB/xLzABzV8A=\");\nfunction useGetSolvedProblems() {\n    _s2();\n    const [solvedProblems, setSolvedProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n}\n_s2(useGetSolvedProblems, \"083zkOIYdoqS/zqNahsCJwxjbVY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9ibGVtc1RhYmxlL1Byb2JsZW1zVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRztBQUNBO0FBQ2Y7QUFDYTtBQUNMO0FBQ1A7QUFDMkM7QUFDbkI7QUFFRztBQUt6RCxNQUFNZSxnQkFBNkM7UUFBQyxFQUFDQyxtQkFBa0IsRUFBQzs7SUFDcEUsTUFBTSxDQUFDQyxlQUFjQyxpQkFBaUIsR0FBRVgsK0NBQVFBLENBQUM7UUFDL0NZLFFBQU87UUFDUEMsU0FBUTtJQUNWO0lBQ0EsTUFBTUMsV0FBU0MsZUFBZU47SUFDOUIscUJBQ0k7OzBCQUNGLDhEQUFDTztnQkFBTUMsV0FBVTswQkFDZkgsU0FBU0ksSUFBSSxDQUFDQyxTQUFRQztvQkFFdEIsTUFBTUMsa0JBQWtCRixRQUFRRyxlQUFhLFNBQU8sbUJBQWlCSCxRQUFRRyxlQUFhLFdBQVMscUJBQW1CO29CQUN0SCxxQkFDSSw4REFBQ0M7d0JBQUdOLFdBQVcsR0FBcUMsT0FBbENHLE1BQUssS0FBSSxJQUFJLG9CQUFrQjs7MENBQy9DLDhEQUFDSTtnQ0FBR1AsV0FBVTswQ0FDYiw0RUFBQ3RCLHlEQUFhQTtvQ0FBQzhCLFVBQVU7b0NBQUlDLE9BQU87Ozs7Ozs7Ozs7OzBDQUVyQyw4REFBQ0M7Z0NBQUdWLFdBQVU7MENBQ1osNEVBQUNwQixrREFBSUE7b0NBQUNvQixXQUFVO29DQUFxQ1csTUFBTSxhQUF3QixPQUFYVCxRQUFRVTs4Q0FDM0VWLFFBQVFXOzs7Ozs7Ozs7OzswQ0FHZiw4REFBQ0g7Z0NBQUdWLFdBQVcsYUFBNkIsT0FBaEJJOzBDQUN6QkYsUUFBUUc7Ozs7OzswQ0FFWCw4REFBQ0s7Z0NBQUdWLFdBQVc7MENBQ1pFLFFBQVFZOzs7Ozs7MENBRVgsOERBQUNKO2dDQUFHVixXQUFXOzBDQUVURSxRQUFRTix3QkFBUyw4REFBQ2pCLHlEQUFhQTtvQ0FBQzZCLFVBQVU7b0NBQU1SLFdBQVU7b0NBQzFEZSxTQUFTLElBQUlyQixpQkFBaUI7NENBQUNDLFFBQU87NENBQUtDLFNBQVFNLFFBQVFOO3dDQUFpQjs7Ozs7OERBQzlELDhEQUFDb0I7b0NBQUVoQixXQUFVOzhDQUFZOzs7Ozs7Ozs7Ozs7dUJBbkJhRSxRQUFRVTs7Ozs7Z0JBd0J6RTs7Ozs7O1lBRUFuQixjQUFjRSx3QkFDZiw4REFBQ3NCO2dCQUFNakIsV0FBVTs7a0NBQ2YsOERBQUNrQjt3QkFBSWxCLFdBQVU7Ozs7OztrQ0FDWCw4REFBQ2tCO3dCQUFJbEIsV0FBVTtrQ0FDWCw0RUFBQ2tCOzRCQUFJbEIsV0FBVTtzQ0FDWCw0RUFBQ2tCO2dDQUFJbEIsV0FBVTs7a0RBQ1gsOERBQUNuQixvREFBT0E7d0NBQUMyQixVQUFVO3dDQUFNUixXQUFVO3dDQUNuQ2UsU0FBUyxJQUFJckIsaUJBQWlCO2dEQUFDQyxRQUFPO2dEQUFNQyxTQUFROzRDQUFFOzs7Ozs7a0RBQ3RELDhEQUFDZCxxREFBT0E7d0NBQUNjLFNBQVNILGNBQWNHO3dDQUFTdUIsU0FBUzt3Q0FBT0MsaUJBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakc7R0F2RE03Qjs7UUFLYU87OztLQUxiUDtBQXdETiwrREFBZUEsYUFBYUEsRUFBQztBQUU3QixTQUFTTyxlQUFlTixrQkFBZ0U7O0lBQ3RGLE1BQU0sQ0FBQ0ssVUFBU3dCLFlBQVksR0FBQ3RDLCtDQUFRQSxDQUFjLEVBQUU7SUFDckROLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTTZDLGNBQVk7WUFDakIsMkJBQTJCO1lBRTNCLE1BQU1DLElBQUVwQyx5REFBS0EsQ0FBQ0gsOERBQVVBLENBQUNLLHlEQUFTQSxFQUFDLGFBQVlILDJEQUFPQSxDQUFDLFNBQVE7WUFDL0QsTUFBTXNDLGdCQUFjLE1BQU12QywyREFBT0EsQ0FBQ3NDO1lBQ2xDLDZCQUE2QjtZQUM3QixNQUFNRSxNQUFnQixFQUFFO1lBQ3hCRCxjQUFjRSxRQUFRLENBQUNDLE1BQ3JCRixJQUFJRyxLQUFLO29CQUFDaEIsSUFBR2UsSUFBSWY7b0JBQUcsR0FBR2UsSUFBSUUsTUFBTTtnQkFBQTtZQUVuQyxtQkFBbUI7WUFDbkJyQyxtQkFBbUI7WUFDbkI2QixZQUFZSTtRQUNiO1FBRUFIO0lBQ0QsR0FBRTtRQUFDOUI7S0FBbUI7SUFDdEIsT0FBT0s7QUFDVDtJQXJCU0M7QUF1QlQsU0FBU2dDOztJQUNQLE1BQU0sQ0FBQ0MsZ0JBQWVDLGtCQUFrQixHQUFDakQsK0NBQVFBLENBQVcsRUFBRTtJQUM5RCxNQUFNLENBQUNrRCxLQUFLLEdBQUMzQyx1RUFBWUEsQ0FBQ0Ysb0RBQUlBO0lBQzlCWCxnREFBU0EsQ0FBQyxLQUVWLEdBQUUsRUFBRTtBQUNOO0lBTlNxRDs7UUFFTXhDLG1FQUFZQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9ibGVtc1RhYmxlL1Byb2JsZW1zVGFibGUudHN4PzgwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCc0NoZWNrQ2lyY2xlfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHtBaUZpbGxZb3V0dWJlfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XHJcbmltcG9ydCBZb3VUdWJlICBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIG9yZGVyQnksIHF1ZXJ5IH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgYXV0aCwgZmlyZXN0b3JlIH0gZnJvbSAnQC9maXJlYmFzZS9maXJlYmFzZSc7XHJcbmltcG9ydCB7IERCUHJvYmxlbSB9IGZyb20gJ0AvdXRpbHMvdHlwZXMvUHJvYmxlbSc7XHJcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gJ3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgnO1xyXG50eXBlIFByb2JsZW1zVGFibGVQcm9wcyA9IHtcclxuICBzZXRMb2FkaW5nUHJvYmxlbXM6UmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+OyAgXHJcbn07XHJcblxyXG5jb25zdCBQcm9ibGVtc1RhYmxlOlJlYWN0LkZDPFByb2JsZW1zVGFibGVQcm9wcz4gPSAoe3NldExvYWRpbmdQcm9ibGVtc30pID0+IHtcclxuICAgIGNvbnN0IFt5b3VUdWJlUGxheWVyLHNldFlvdVR1YmVQbGF5ZXJdPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGlzT3BlbjpmYWxzZSxcclxuICAgICAgdmlkZW9JZDpcIlwiLFxyXG4gICAgfSlcclxuICAgIGNvbnN0IHByb2JsZW1zPXVzZUdldFByb2JsZW1zKHNldExvYWRpbmdQcm9ibGVtcyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgIDx0Ym9keSBjbGFzc05hbWU9J3RleHQtd2hpdGUnPlxyXG4gICAgICAge3Byb2JsZW1zLm1hcCgocHJvYmxlbSxpZHgpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eUNvbG9yID0gcHJvYmxlbS5kaWZmaWN1bHR5PT09J0Vhc3knPyd0ZXh0LWdyZWVuLTUwMCc6cHJvYmxlbS5kaWZmaWN1bHR5PT09J01lZGl1bSc/J3RleHQtZGFyay15ZWxsb3cnOid0ZXh0LWRhcmstcGluayc7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtgJHtpZHggJTIgPT0xID8gJ2JnLWRhcmstbGF5ZXItMSc6Jyd9YH0ga2V5PXtwcm9ibGVtLmlkfT5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdweC0yIHB5LTQgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1kYXJrLWdyZWVuLXMnPlxyXG4gICAgICAgICAgICAgICA8QnNDaGVja0NpcmNsZSBmb250U2l6ZT17MTh9IHdpZHRoPXsxOH0vPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdob3Zlcjp0ZXh0LWJsdWUtNjAwIGN1cnNvci1wb2ludGVyJyBocmVmPXtgL3Byb2JsZW1zLyR7cHJvYmxlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvYmxlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2BweC02IHB5LTQgJHtkaWZmaWN1bHR5Q29sb3J9YH0+XHJcbiAgICAgICAgICAgICAgICB7cHJvYmxlbS5kaWZmaWN1bHR5fVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J3B4LTYgcHktNCd9PlxyXG4gICAgICAgICAgICAgICAge3Byb2JsZW0uY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXsncHgtNiBweS00J30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvYmxlbS52aWRlb0lkPyg8QWlGaWxsWW91dHViZSBmb250U2l6ZT17JzI4J30gY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXJlZC01MDAnIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRZb3VUdWJlUGxheWVyKHtpc09wZW46dHJ1ZSx2aWRlb0lkOnByb2JsZW0udmlkZW9JZCBhcyBzdHJpbmd9KX0vPik6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXlcIj5Db21pbmcgU29vbjwvcD4gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgICAgfSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICAgIHt5b3VUdWJlUGxheWVyLmlzT3BlbiAmJiAoXHJcbiAgICAgIDx0Zm9vdCBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgaC1zY3JlZW4gdy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHotMTAgb3BhY2l0eS03MCB0b3AtMCBsZWZ0LTAgdy1zY3JlZW4gaC1zY3JlZW4gYWJzb2x1dGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgei01MCBoLWZ1bGwgcHgtNiByZWxhdGl2ZSBtYXgtdy00eGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb0Nsb3NlIGZvbnRTaXplPXtcIjM1XCJ9IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgLXRvcC0xNiByaWdodC0wJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0WW91VHViZVBsYXllcih7aXNPcGVuOmZhbHNlLHZpZGVvSWQ6XCJcIn0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxZb3VUdWJlIHZpZGVvSWQ9e3lvdVR1YmVQbGF5ZXIudmlkZW9JZH0gbG9hZGluZyA9J2xhenknIGlmcmFtZUNsYXNzTmFtZT0ndy1mdWxsIG1pbi1oLVs1MDBweF0nLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90Zm9vdD5cclxuICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvYmxlbXNUYWJsZTtcclxuXHJcbmZ1bmN0aW9uIHVzZUdldFByb2JsZW1zKHNldExvYWRpbmdQcm9ibGVtczpSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj4pe1xyXG4gIGNvbnN0IFtwcm9ibGVtcyxzZXRQcm9ibGVtc109dXNlU3RhdGU8REJQcm9ibGVtW10+KFtdKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgY29uc3QgZ2V0UHJvYmxlbXM9YXN5bmMoKT0+e1xyXG4gICAgLy9kYXRhIGZldGNoIGZyb20gZmlyZXN0b3JlXHJcblxyXG4gICAgY29uc3QgcT1xdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSxcInByb2JsZW1zXCIpLG9yZGVyQnkoXCJvcmRlclwiLFwiYXNjXCIpKVxyXG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdD1hd2FpdCBnZXREb2NzKHEpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhxdWVyeVNuYXBzaG90KTtcclxuICAgIGNvbnN0IHRtcDpEQlByb2JsZW1bXT1bXTtcclxuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKT0+KFxyXG4gICAgICB0bXAucHVzaCh7aWQ6ZG9jLmlkLC4uLmRvYy5kYXRhKCl9IGFzIERCUHJvYmxlbSlcclxuICAgICkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0bXApO1xyXG4gICAgc2V0TG9hZGluZ1Byb2JsZW1zKGZhbHNlKTtcclxuICAgIHNldFByb2JsZW1zKHRtcCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFByb2JsZW1zKCk7XHJcbiAgfSxbc2V0TG9hZGluZ1Byb2JsZW1zXSk7XHJcbiAgcmV0dXJuIHByb2JsZW1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VHZXRTb2x2ZWRQcm9ibGVtcygpe1xyXG4gIGNvbnN0IFtzb2x2ZWRQcm9ibGVtcyxzZXRTb2x2ZWRQcm9ibGVtc109dXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbdXNlcl09dXNlQXV0aFN0YXRlKGF1dGgpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICB9LFtdKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQnNDaGVja0NpcmNsZSIsIkFpRmlsbFlvdXR1YmUiLCJMaW5rIiwiSW9DbG9zZSIsIllvdVR1YmUiLCJ1c2VTdGF0ZSIsImNvbGxlY3Rpb24iLCJnZXREb2NzIiwib3JkZXJCeSIsInF1ZXJ5IiwiYXV0aCIsImZpcmVzdG9yZSIsInVzZUF1dGhTdGF0ZSIsIlByb2JsZW1zVGFibGUiLCJzZXRMb2FkaW5nUHJvYmxlbXMiLCJ5b3VUdWJlUGxheWVyIiwic2V0WW91VHViZVBsYXllciIsImlzT3BlbiIsInZpZGVvSWQiLCJwcm9ibGVtcyIsInVzZUdldFByb2JsZW1zIiwidGJvZHkiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9ibGVtIiwiaWR4IiwiZGlmZmljdWx0eUNvbG9yIiwiZGlmZmljdWx0eSIsInRyIiwidGgiLCJmb250U2l6ZSIsIndpZHRoIiwidGQiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5Iiwib25DbGljayIsInAiLCJ0Zm9vdCIsImRpdiIsImxvYWRpbmciLCJpZnJhbWVDbGFzc05hbWUiLCJzZXRQcm9ibGVtcyIsImdldFByb2JsZW1zIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ0bXAiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJ1c2VHZXRTb2x2ZWRQcm9ibGVtcyIsInNvbHZlZFByb2JsZW1zIiwic2V0U29sdmVkUHJvYmxlbXMiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProblemsTable/ProblemsTable.tsx\n"));

/***/ })

});