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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { setLoadingProblems  } = param;\n    _s();\n    const [youTubePlayer, setYouTubePlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        isOpen: false,\n        videoId: \"\"\n    });\n    const problems = useGetProblems(setLoadingProblems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"text-white\",\n                children: problems.map((problem, idx)=>{\n                    const difficultyColor = problem.difficulty === \"Easy\" ? \"text-green-500\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"\".concat(idx % 2 == 1 ? \"bg-dark-layer-1\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-2 py-4 font-medium whitespace-nowrap text-dark-green-s\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCheckCircle, {\n                                    fontSize: 18,\n                                    width: 18\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"hover:text-blue-600 cursor-pointer\",\n                                    href: \"/problems/\".concat(problem.id),\n                                    children: problem.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4 \".concat(difficultyColor),\n                                children: problem.difficulty\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: problem.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: problem.videoId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillYoutube, {\n                                    fontSize: \"28\",\n                                    className: \"cursor-pointer hover:text-red-500\",\n                                    onClick: ()=>setYouTubePlayer({\n                                            isOpen: true,\n                                            videoId: problem.videoId\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 38\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray\",\n                                    children: \"Coming Soon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 35\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, problem.id, true, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            youTubePlayer.isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tfoot\", {\n                className: \"fixed top-0 left-0 h-screen w-screen flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full z-50 h-full px-6 relative max-w-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full flex items-center justify-center relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__.IoClose, {\n                                        fontSize: \"35\",\n                                        className: \"cursor-pointer absolute -top-16 right-0\",\n                                        onClick: ()=>setYouTubePlayer({\n                                                isOpen: false,\n                                                videoId: \"\"\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        videoId: youTubePlayer.videoId,\n                                        loading: \"lazy\",\n                                        iframeClassName: \"w-full min-h-[500px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProblemsTable, \"MJyR0Kai2IS3YiTYSYgX7CG6hLM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            //data fetch from firestore\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n            //console.log(querySnapshot);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            //console.log(tmp);\n            setLoadingProblems(false);\n            setProblems(tmp);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"sBCjwnPE5eE1TvxpB/xLzABzV8A=\");\nfunction useGetSolvedProblems() {\n    _s2();\n    const [solvedProblems, setSolvedProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getSolvedProblems = async ()=>{\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"users\", user.uid);\n            const userSnap = userRef;\n        };\n        getSolvedProblems();\n    }, [\n        user\n    ]);\n}\n_s2(useGetSolvedProblems, \"083zkOIYdoqS/zqNahsCJwxjbVY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9ibGVtc1RhYmxlL1Byb2JsZW1zVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRztBQUNBO0FBQ2Y7QUFDYTtBQUNMO0FBQ1A7QUFDZ0Q7QUFDeEI7QUFFRztBQUt6RCxNQUFNZ0IsZ0JBQTZDO1FBQUMsRUFBQ0MsbUJBQWtCLEVBQUM7O0lBQ3BFLE1BQU0sQ0FBQ0MsZUFBY0MsaUJBQWlCLEdBQUVaLCtDQUFRQSxDQUFDO1FBQy9DYSxRQUFPO1FBQ1BDLFNBQVE7SUFDVjtJQUNBLE1BQU1DLFdBQVNDLGVBQWVOO0lBQzlCLHFCQUNJOzswQkFDRiw4REFBQ087Z0JBQU1DLFdBQVU7MEJBQ2ZILFNBQVNJLElBQUksQ0FBQ0MsU0FBUUM7b0JBRXRCLE1BQU1DLGtCQUFrQkYsUUFBUUcsZUFBYSxTQUFPLG1CQUFpQkgsUUFBUUcsZUFBYSxXQUFTLHFCQUFtQjtvQkFDdEgscUJBQ0ksOERBQUNDO3dCQUFHTixXQUFXLEdBQXFDLE9BQWxDRyxNQUFLLEtBQUksSUFBSSxvQkFBa0I7OzBDQUMvQyw4REFBQ0k7Z0NBQUdQLFdBQVU7MENBQ2IsNEVBQUN2Qix5REFBYUE7b0NBQUMrQixVQUFVO29DQUFJQyxPQUFPOzs7Ozs7Ozs7OzswQ0FFckMsOERBQUNDO2dDQUFHVixXQUFVOzBDQUNaLDRFQUFDckIsa0RBQUlBO29DQUFDcUIsV0FBVTtvQ0FBcUNXLE1BQU0sYUFBd0IsT0FBWFQsUUFBUVU7OENBQzNFVixRQUFRVzs7Ozs7Ozs7Ozs7MENBR2YsOERBQUNIO2dDQUFHVixXQUFXLGFBQTZCLE9BQWhCSTswQ0FDekJGLFFBQVFHOzs7Ozs7MENBRVgsOERBQUNLO2dDQUFHVixXQUFXOzBDQUNaRSxRQUFRWTs7Ozs7OzBDQUVYLDhEQUFDSjtnQ0FBR1YsV0FBVzswQ0FFVEUsUUFBUU4sd0JBQVMsOERBQUNsQix5REFBYUE7b0NBQUM4QixVQUFVO29DQUFNUixXQUFVO29DQUMxRGUsU0FBUyxJQUFJckIsaUJBQWlCOzRDQUFDQyxRQUFPOzRDQUFLQyxTQUFRTSxRQUFRTjt3Q0FBaUI7Ozs7OzhEQUM5RCw4REFBQ29CO29DQUFFaEIsV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7O3VCQW5CYUUsUUFBUVU7Ozs7O2dCQXdCekU7Ozs7OztZQUVBbkIsY0FBY0Usd0JBQ2YsOERBQUNzQjtnQkFBTWpCLFdBQVU7O2tDQUNmLDhEQUFDa0I7d0JBQUlsQixXQUFVOzs7Ozs7a0NBQ1gsOERBQUNrQjt3QkFBSWxCLFdBQVU7a0NBQ1gsNEVBQUNrQjs0QkFBSWxCLFdBQVU7c0NBQ1gsNEVBQUNrQjtnQ0FBSWxCLFdBQVU7O2tEQUNYLDhEQUFDcEIsb0RBQU9BO3dDQUFDNEIsVUFBVTt3Q0FBTVIsV0FBVTt3Q0FDbkNlLFNBQVMsSUFBSXJCLGlCQUFpQjtnREFBQ0MsUUFBTztnREFBTUMsU0FBUTs0Q0FBRTs7Ozs7O2tEQUN0RCw4REFBQ2YscURBQU9BO3dDQUFDZSxTQUFTSCxjQUFjRzt3Q0FBU3VCLFNBQVM7d0NBQU9DLGlCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpHO0dBdkRNN0I7O1FBS2FPOzs7S0FMYlA7QUF3RE4sK0RBQWVBLGFBQWFBLEVBQUM7QUFFN0IsU0FBU08sZUFBZU4sa0JBQWdFOztJQUN0RixNQUFNLENBQUNLLFVBQVN3QixZQUFZLEdBQUN2QywrQ0FBUUEsQ0FBYyxFQUFFO0lBQ3JETixnREFBU0EsQ0FBQztRQUNULE1BQU04QyxjQUFZO1lBQ2pCLDJCQUEyQjtZQUUzQixNQUFNQyxJQUFFcEMseURBQUtBLENBQUNKLDhEQUFVQSxDQUFDTSx5REFBU0EsRUFBQyxhQUFZSCwyREFBT0EsQ0FBQyxTQUFRO1lBQy9ELE1BQU1zQyxnQkFBYyxNQUFNdkMsMkRBQU9BLENBQUNzQztZQUNsQyw2QkFBNkI7WUFDN0IsTUFBTUUsTUFBZ0IsRUFBRTtZQUN4QkQsY0FBY0UsUUFBUSxDQUFDMUMsTUFDckJ5QyxJQUFJRSxLQUFLO29CQUFDZixJQUFHNUIsSUFBSTRCO29CQUFHLEdBQUc1QixJQUFJNEMsTUFBTTtnQkFBQTtZQUVuQyxtQkFBbUI7WUFDbkJwQyxtQkFBbUI7WUFDbkI2QixZQUFZSTtRQUNiO1FBRUFIO0lBQ0QsR0FBRTtRQUFDOUI7S0FBbUI7SUFDdEIsT0FBT0s7QUFDVDtJQXJCU0M7QUF1QlQsU0FBUytCOztJQUNQLE1BQU0sQ0FBQ0MsZ0JBQWVDLGtCQUFrQixHQUFDakQsK0NBQVFBLENBQVcsRUFBRTtJQUM5RCxNQUFNLENBQUNrRCxLQUFLLEdBQUMxQyx1RUFBWUEsQ0FBQ0Ysb0RBQUlBO0lBQzlCWixnREFBU0EsQ0FBQztRQUNULE1BQU15RCxvQkFBa0I7WUFDdkIsTUFBTUMsVUFBUWxELHVEQUFHQSxDQUFDSyx5REFBU0EsRUFBQyxTQUFRMkMsS0FBTUc7WUFDMUMsTUFBTUMsV0FBU0Y7UUFDaEI7UUFDQUQ7SUFDRCxHQUFFO1FBQUNEO0tBQUs7QUFDVjtJQVZTSDs7UUFFTXZDLG1FQUFZQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9ibGVtc1RhYmxlL1Byb2JsZW1zVGFibGUudHN4PzgwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCc0NoZWNrQ2lyY2xlfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHtBaUZpbGxZb3V0dWJlfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgSW9DbG9zZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XHJcbmltcG9ydCBZb3VUdWJlICBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jcywgb3JkZXJCeSwgcXVlcnkgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBhdXRoLCBmaXJlc3RvcmUgfSBmcm9tICdAL2ZpcmViYXNlL2ZpcmViYXNlJztcclxuaW1wb3J0IHsgREJQcm9ibGVtIH0gZnJvbSAnQC91dGlscy90eXBlcy9Qcm9ibGVtJztcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcbnR5cGUgUHJvYmxlbXNUYWJsZVByb3BzID0ge1xyXG4gIHNldExvYWRpbmdQcm9ibGVtczpSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47ICBcclxufTtcclxuXHJcbmNvbnN0IFByb2JsZW1zVGFibGU6UmVhY3QuRkM8UHJvYmxlbXNUYWJsZVByb3BzPiA9ICh7c2V0TG9hZGluZ1Byb2JsZW1zfSkgPT4ge1xyXG4gICAgY29uc3QgW3lvdVR1YmVQbGF5ZXIsc2V0WW91VHViZVBsYXllcl09IHVzZVN0YXRlKHtcclxuICAgICAgaXNPcGVuOmZhbHNlLFxyXG4gICAgICB2aWRlb0lkOlwiXCIsXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcHJvYmxlbXM9dXNlR2V0UHJvYmxlbXMoc2V0TG9hZGluZ1Byb2JsZW1zKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgPHRib2R5IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+XHJcbiAgICAgICB7cHJvYmxlbXMubWFwKChwcm9ibGVtLGlkeCk9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkaWZmaWN1bHR5Q29sb3IgPSBwcm9ibGVtLmRpZmZpY3VsdHk9PT0nRWFzeSc/J3RleHQtZ3JlZW4tNTAwJzpwcm9ibGVtLmRpZmZpY3VsdHk9PT0nTWVkaXVtJz8ndGV4dC1kYXJrLXllbGxvdyc6J3RleHQtZGFyay1waW5rJztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9e2Ake2lkeCAlMiA9PTEgPyAnYmctZGFyay1sYXllci0xJzonJ31gfSBrZXk9e3Byb2JsZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3B4LTIgcHktNCBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LWRhcmstZ3JlZW4tcyc+XHJcbiAgICAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlIGZvbnRTaXplPXsxOH0gd2lkdGg9ezE4fS8+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9J2hvdmVyOnRleHQtYmx1ZS02MDAgY3Vyc29yLXBvaW50ZXInIGhyZWY9e2AvcHJvYmxlbXMvJHtwcm9ibGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9ibGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17YHB4LTYgcHktNCAke2RpZmZpY3VsdHlDb2xvcn1gfT5cclxuICAgICAgICAgICAgICAgIHtwcm9ibGVtLmRpZmZpY3VsdHl9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXsncHgtNiBweS00J30+XHJcbiAgICAgICAgICAgICAgICB7cHJvYmxlbS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9eydweC02IHB5LTQnfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ibGVtLnZpZGVvSWQ/KDxBaUZpbGxZb3V0dWJlIGZvbnRTaXplPXsnMjgnfSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcmVkLTUwMCcgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldFlvdVR1YmVQbGF5ZXIoe2lzT3Blbjp0cnVlLHZpZGVvSWQ6cHJvYmxlbS52aWRlb0lkIGFzIHN0cmluZ30pfS8+KTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheVwiPkNvbWluZyBTb29uPC9wPiApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICAgICB9KX1cclxuICAgICAgPC90Ym9keT5cclxuICAgICAge3lvdVR1YmVQbGF5ZXIuaXNPcGVuICYmIChcclxuICAgICAgPHRmb290IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgei0xMCBvcGFjaXR5LTcwIHRvcC0wIGxlZnQtMCB3LXNjcmVlbiBoLXNjcmVlbiBhYnNvbHV0ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB6LTUwIGgtZnVsbCBweC02IHJlbGF0aXZlIG1heC13LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvQ2xvc2UgZm9udFNpemU9e1wiMzVcIn0gY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBhYnNvbHV0ZSAtdG9wLTE2IHJpZ2h0LTAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRZb3VUdWJlUGxheWVyKHtpc09wZW46ZmFsc2UsdmlkZW9JZDpcIlwifSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFlvdVR1YmUgdmlkZW9JZD17eW91VHViZVBsYXllci52aWRlb0lkfSBsb2FkaW5nID0nbGF6eScgaWZyYW1lQ2xhc3NOYW1lPSd3LWZ1bGwgbWluLWgtWzUwMHB4XScvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3Rmb290PlxyXG4gICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9ibGVtc1RhYmxlO1xyXG5cclxuZnVuY3Rpb24gdXNlR2V0UHJvYmxlbXMoc2V0TG9hZGluZ1Byb2JsZW1zOlJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+Pil7XHJcbiAgY29uc3QgW3Byb2JsZW1zLHNldFByb2JsZW1zXT11c2VTdGF0ZTxEQlByb2JsZW1bXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICBjb25zdCBnZXRQcm9ibGVtcz1hc3luYygpPT57XHJcbiAgICAvL2RhdGEgZmV0Y2ggZnJvbSBmaXJlc3RvcmVcclxuXHJcbiAgICBjb25zdCBxPXF1ZXJ5KGNvbGxlY3Rpb24oZmlyZXN0b3JlLFwicHJvYmxlbXNcIiksb3JkZXJCeShcIm9yZGVyXCIsXCJhc2NcIikpXHJcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90PWF3YWl0IGdldERvY3MocSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHF1ZXJ5U25hcHNob3QpO1xyXG4gICAgY29uc3QgdG1wOkRCUHJvYmxlbVtdPVtdO1xyXG4gICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpPT4oXHJcbiAgICAgIHRtcC5wdXNoKHtpZDpkb2MuaWQsLi4uZG9jLmRhdGEoKX0gYXMgREJQcm9ibGVtKVxyXG4gICAgKSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRtcCk7XHJcbiAgICBzZXRMb2FkaW5nUHJvYmxlbXMoZmFsc2UpO1xyXG4gICAgc2V0UHJvYmxlbXModG1wKTtcclxuICAgfVxyXG5cclxuICAgZ2V0UHJvYmxlbXMoKTtcclxuICB9LFtzZXRMb2FkaW5nUHJvYmxlbXNdKTtcclxuICByZXR1cm4gcHJvYmxlbXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUdldFNvbHZlZFByb2JsZW1zKCl7XHJcbiAgY29uc3QgW3NvbHZlZFByb2JsZW1zLHNldFNvbHZlZFByb2JsZW1zXT11c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFt1c2VyXT11c2VBdXRoU3RhdGUoYXV0aCk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgIGNvbnN0IGdldFNvbHZlZFByb2JsZW1zPWFzeW5jICgpPT57XHJcbiAgICBjb25zdCB1c2VyUmVmPWRvYyhmaXJlc3RvcmUsXCJ1c2Vyc1wiLHVzZXIhLnVpZCk7XHJcbiAgICBjb25zdCB1c2VyU25hcD11c2VyUmVmXHJcbiAgIH1cclxuICAgZ2V0U29sdmVkUHJvYmxlbXMoKTtcclxuICB9LFt1c2VyXSlcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkJzQ2hlY2tDaXJjbGUiLCJBaUZpbGxZb3V0dWJlIiwiTGluayIsIklvQ2xvc2UiLCJZb3VUdWJlIiwidXNlU3RhdGUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0RG9jcyIsIm9yZGVyQnkiLCJxdWVyeSIsImF1dGgiLCJmaXJlc3RvcmUiLCJ1c2VBdXRoU3RhdGUiLCJQcm9ibGVtc1RhYmxlIiwic2V0TG9hZGluZ1Byb2JsZW1zIiwieW91VHViZVBsYXllciIsInNldFlvdVR1YmVQbGF5ZXIiLCJpc09wZW4iLCJ2aWRlb0lkIiwicHJvYmxlbXMiLCJ1c2VHZXRQcm9ibGVtcyIsInRib2R5IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvYmxlbSIsImlkeCIsImRpZmZpY3VsdHlDb2xvciIsImRpZmZpY3VsdHkiLCJ0ciIsInRoIiwiZm9udFNpemUiLCJ3aWR0aCIsInRkIiwiaHJlZiIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsIm9uQ2xpY2siLCJwIiwidGZvb3QiLCJkaXYiLCJsb2FkaW5nIiwiaWZyYW1lQ2xhc3NOYW1lIiwic2V0UHJvYmxlbXMiLCJnZXRQcm9ibGVtcyIsInEiLCJxdWVyeVNuYXBzaG90IiwidG1wIiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwidXNlR2V0U29sdmVkUHJvYmxlbXMiLCJzb2x2ZWRQcm9ibGVtcyIsInNldFNvbHZlZFByb2JsZW1zIiwidXNlciIsImdldFNvbHZlZFByb2JsZW1zIiwidXNlclJlZiIsInVpZCIsInVzZXJTbmFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProblemsTable/ProblemsTable.tsx\n"));

/***/ })

});