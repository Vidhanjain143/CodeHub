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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-youtube */ \"./node_modules/react-youtube/dist/YouTube.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/firebase/firebase */ \"./src/firebase/firebase.ts\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { setLoadingProblems  } = param;\n    _s();\n    const [youTubePlayer, setYouTubePlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        isOpen: false,\n        videoId: \"\"\n    });\n    const problems = useGetProblems(setLoadingProblems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"text-white\",\n                children: problems.map((problem, idx)=>{\n                    const difficultyColor = problem.difficulty === \"Easy\" ? \"text-green-500\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        className: \"\".concat(idx % 2 == 1 ? \"bg-dark-layer-1\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"px-2 py-4 font-medium whitespace-nowrap text-dark-green-s\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsCheckCircle, {\n                                    fontSize: 18,\n                                    width: 18\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 16\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"hover:text-blue-600 cursor-pointer\",\n                                    href: \"/problems/\".concat(problem.id),\n                                    children: problem.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4 \".concat(difficultyColor),\n                                children: problem.difficulty\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: problem.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4\",\n                                children: problem.videoId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillYoutube, {\n                                    fontSize: \"28\",\n                                    className: \"cursor-pointer hover:text-red-500\",\n                                    onClick: ()=>setYouTubePlayer({\n                                            isOpen: true,\n                                            videoId: problem.videoId\n                                        })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 38\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray\",\n                                    children: \"Coming Soon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 35\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, problem.id, true, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            youTubePlayer.isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tfoot\", {\n                className: \"fixed top-0 left-0 h-screen w-screen flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full z-50 h-full px-6 relative max-w-4xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full flex items-center justify-center relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__.IoClose, {\n                                        fontSize: \"35\",\n                                        className: \"cursor-pointer absolute -top-16 right-0\",\n                                        onClick: ()=>setYouTubePlayer({\n                                                isOpen: false,\n                                                videoId: \"\"\n                                            })\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_youtube__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        videoId: youTubePlayer.videoId,\n                                        loading: \"lazy\",\n                                        iframeClassName: \"w-full min-h-[500px]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\ProblemsTable\\\\ProblemsTable.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProblemsTable, \"MJyR0Kai2IS3YiTYSYgX7CG6hLM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            //data fetch from firestore\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(q);\n            //console.log(querySnapshot);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            //console.log(tmp);\n            setLoadingProblems(false);\n            setProblems(tmp);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"sBCjwnPE5eE1TvxpB/xLzABzV8A=\");\nfunction useGetSolvedProblems() {\n    _s2();\n    const [solvedProblems, setSolvedProblems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getSolvedProblems = async ()=>{\n            const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_firebase__WEBPACK_IMPORTED_MODULE_4__.firestore, \"users\", user === null || user === void 0 ? void 0 : user.uid);\n        };\n        getSolvedProblems();\n    }, []);\n}\n_s2(useGetSolvedProblems, \"083zkOIYdoqS/zqNahsCJwxjbVY=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuthState\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9ibGVtc1RhYmxlL1Byb2JsZW1zVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRztBQUNBO0FBQ2Y7QUFDYTtBQUNMO0FBQ1A7QUFDZ0Q7QUFDeEI7QUFFRztBQUt6RCxNQUFNZ0IsZ0JBQTZDO1FBQUMsRUFBQ0MsbUJBQWtCLEVBQUM7O0lBQ3BFLE1BQU0sQ0FBQ0MsZUFBY0MsaUJBQWlCLEdBQUVaLCtDQUFRQSxDQUFDO1FBQy9DYSxRQUFPO1FBQ1BDLFNBQVE7SUFDVjtJQUNBLE1BQU1DLFdBQVNDLGVBQWVOO0lBQzlCLHFCQUNJOzswQkFDRiw4REFBQ087Z0JBQU1DLFdBQVU7MEJBQ2ZILFNBQVNJLElBQUksQ0FBQ0MsU0FBUUM7b0JBRXRCLE1BQU1DLGtCQUFrQkYsUUFBUUcsZUFBYSxTQUFPLG1CQUFpQkgsUUFBUUcsZUFBYSxXQUFTLHFCQUFtQjtvQkFDdEgscUJBQ0ksOERBQUNDO3dCQUFHTixXQUFXLEdBQXFDLE9BQWxDRyxNQUFLLEtBQUksSUFBSSxvQkFBa0I7OzBDQUMvQyw4REFBQ0k7Z0NBQUdQLFdBQVU7MENBQ2IsNEVBQUN2Qix5REFBYUE7b0NBQUMrQixVQUFVO29DQUFJQyxPQUFPOzs7Ozs7Ozs7OzswQ0FFckMsOERBQUNDO2dDQUFHVixXQUFVOzBDQUNaLDRFQUFDckIsa0RBQUlBO29DQUFDcUIsV0FBVTtvQ0FBcUNXLE1BQU0sYUFBd0IsT0FBWFQsUUFBUVU7OENBQzNFVixRQUFRVzs7Ozs7Ozs7Ozs7MENBR2YsOERBQUNIO2dDQUFHVixXQUFXLGFBQTZCLE9BQWhCSTswQ0FDekJGLFFBQVFHOzs7Ozs7MENBRVgsOERBQUNLO2dDQUFHVixXQUFXOzBDQUNaRSxRQUFRWTs7Ozs7OzBDQUVYLDhEQUFDSjtnQ0FBR1YsV0FBVzswQ0FFVEUsUUFBUU4sd0JBQVMsOERBQUNsQix5REFBYUE7b0NBQUM4QixVQUFVO29DQUFNUixXQUFVO29DQUMxRGUsU0FBUyxJQUFJckIsaUJBQWlCOzRDQUFDQyxRQUFPOzRDQUFLQyxTQUFRTSxRQUFRTjt3Q0FBaUI7Ozs7OzhEQUM5RCw4REFBQ29CO29DQUFFaEIsV0FBVTs4Q0FBWTs7Ozs7Ozs7Ozs7O3VCQW5CYUUsUUFBUVU7Ozs7O2dCQXdCekU7Ozs7OztZQUVBbkIsY0FBY0Usd0JBQ2YsOERBQUNzQjtnQkFBTWpCLFdBQVU7O2tDQUNmLDhEQUFDa0I7d0JBQUlsQixXQUFVOzs7Ozs7a0NBQ1gsOERBQUNrQjt3QkFBSWxCLFdBQVU7a0NBQ1gsNEVBQUNrQjs0QkFBSWxCLFdBQVU7c0NBQ1gsNEVBQUNrQjtnQ0FBSWxCLFdBQVU7O2tEQUNYLDhEQUFDcEIsb0RBQU9BO3dDQUFDNEIsVUFBVTt3Q0FBTVIsV0FBVTt3Q0FDbkNlLFNBQVMsSUFBSXJCLGlCQUFpQjtnREFBQ0MsUUFBTztnREFBTUMsU0FBUTs0Q0FBRTs7Ozs7O2tEQUN0RCw4REFBQ2YscURBQU9BO3dDQUFDZSxTQUFTSCxjQUFjRzt3Q0FBU3VCLFNBQVM7d0NBQU9DLGlCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpHO0dBdkRNN0I7O1FBS2FPOzs7S0FMYlA7QUF3RE4sK0RBQWVBLGFBQWFBLEVBQUM7QUFFN0IsU0FBU08sZUFBZU4sa0JBQWdFOztJQUN0RixNQUFNLENBQUNLLFVBQVN3QixZQUFZLEdBQUN2QywrQ0FBUUEsQ0FBYyxFQUFFO0lBQ3JETixnREFBU0EsQ0FBQztRQUNULE1BQU04QyxjQUFZO1lBQ2pCLDJCQUEyQjtZQUUzQixNQUFNQyxJQUFFcEMseURBQUtBLENBQUNKLDhEQUFVQSxDQUFDTSx5REFBU0EsRUFBQyxhQUFZSCwyREFBT0EsQ0FBQyxTQUFRO1lBQy9ELE1BQU1zQyxnQkFBYyxNQUFNdkMsMkRBQU9BLENBQUNzQztZQUNsQyw2QkFBNkI7WUFDN0IsTUFBTUUsTUFBZ0IsRUFBRTtZQUN4QkQsY0FBY0UsUUFBUSxDQUFDMUMsTUFDckJ5QyxJQUFJRSxLQUFLO29CQUFDZixJQUFHNUIsSUFBSTRCO29CQUFHLEdBQUc1QixJQUFJNEMsTUFBTTtnQkFBQTtZQUVuQyxtQkFBbUI7WUFDbkJwQyxtQkFBbUI7WUFDbkI2QixZQUFZSTtRQUNiO1FBRUFIO0lBQ0QsR0FBRTtRQUFDOUI7S0FBbUI7SUFDdEIsT0FBT0s7QUFDVDtJQXJCU0M7QUF1QlQsU0FBUytCOztJQUNQLE1BQU0sQ0FBQ0MsZ0JBQWVDLGtCQUFrQixHQUFDakQsK0NBQVFBLENBQVcsRUFBRTtJQUM5RCxNQUFNLENBQUNrRCxLQUFLLEdBQUMxQyx1RUFBWUEsQ0FBQ0Ysb0RBQUlBO0lBQzlCWixnREFBU0EsQ0FBQztRQUNULE1BQU15RCxvQkFBa0I7WUFDdkIsTUFBTUMsVUFBU2xELHVEQUFHQSxDQUFDSyx5REFBU0EsRUFBQyxTQUFRMkMsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRztRQUM1QztRQUNBRjtJQUNELEdBQUUsRUFBRTtBQUNOO0lBVFNKOztRQUVNdkMsbUVBQVlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2JsZW1zVGFibGUvUHJvYmxlbXNUYWJsZS50c3g/ODBmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0JzQ2hlY2tDaXJjbGV9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQge0FpRmlsbFlvdXR1YmV9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBJb0Nsb3NlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcclxuaW1wb3J0IFlvdVR1YmUgIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBnZXREb2NzLCBvcmRlckJ5LCBxdWVyeSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IGF1dGgsIGZpcmVzdG9yZSB9IGZyb20gJ0AvZmlyZWJhc2UvZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBEQlByb2JsZW0gfSBmcm9tICdAL3V0aWxzL3R5cGVzL1Byb2JsZW0nO1xyXG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJztcclxudHlwZSBQcm9ibGVtc1RhYmxlUHJvcHMgPSB7XHJcbiAgc2V0TG9hZGluZ1Byb2JsZW1zOlJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PjsgIFxyXG59O1xyXG5cclxuY29uc3QgUHJvYmxlbXNUYWJsZTpSZWFjdC5GQzxQcm9ibGVtc1RhYmxlUHJvcHM+ID0gKHtzZXRMb2FkaW5nUHJvYmxlbXN9KSA9PiB7XHJcbiAgICBjb25zdCBbeW91VHViZVBsYXllcixzZXRZb3VUdWJlUGxheWVyXT0gdXNlU3RhdGUoe1xyXG4gICAgICBpc09wZW46ZmFsc2UsXHJcbiAgICAgIHZpZGVvSWQ6XCJcIixcclxuICAgIH0pXHJcbiAgICBjb25zdCBwcm9ibGVtcz11c2VHZXRQcm9ibGVtcyhzZXRMb2FkaW5nUHJvYmxlbXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICA8dGJvZHkgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5cclxuICAgICAgIHtwcm9ibGVtcy5tYXAoKHByb2JsZW0saWR4KT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdHlDb2xvciA9IHByb2JsZW0uZGlmZmljdWx0eT09PSdFYXN5Jz8ndGV4dC1ncmVlbi01MDAnOnByb2JsZW0uZGlmZmljdWx0eT09PSdNZWRpdW0nPyd0ZXh0LWRhcmsteWVsbG93JzondGV4dC1kYXJrLXBpbmsnO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17YCR7aWR4ICUyID09MSA/ICdiZy1kYXJrLWxheWVyLTEnOicnfWB9IGtleT17cHJvYmxlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncHgtMiBweS00IGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtZGFyay1ncmVlbi1zJz5cclxuICAgICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGUgZm9udFNpemU9ezE4fSB3aWR0aD17MTh9Lz5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT0naG92ZXI6dGV4dC1ibHVlLTYwMCBjdXJzb3ItcG9pbnRlcicgaHJlZj17YC9wcm9ibGVtcy8ke3Byb2JsZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2JsZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtgcHgtNiBweS00ICR7ZGlmZmljdWx0eUNvbG9yfWB9PlxyXG4gICAgICAgICAgICAgICAge3Byb2JsZW0uZGlmZmljdWx0eX1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9eydweC02IHB5LTQnfT5cclxuICAgICAgICAgICAgICAgIHtwcm9ibGVtLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17J3B4LTYgcHktNCd9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2JsZW0udmlkZW9JZD8oPEFpRmlsbFlvdXR1YmUgZm9udFNpemU9eycyOCd9IGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1yZWQtNTAwJyBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0WW91VHViZVBsYXllcih7aXNPcGVuOnRydWUsdmlkZW9JZDpwcm9ibGVtLnZpZGVvSWQgYXMgc3RyaW5nfSl9Lz4pOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5XCI+Q29taW5nIFNvb248L3A+IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgICAgIH0pfVxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgICB7eW91VHViZVBsYXllci5pc09wZW4gJiYgKFxyXG4gICAgICA8dGZvb3QgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB6LTEwIG9wYWNpdHktNzAgdG9wLTAgbGVmdC0wIHctc2NyZWVuIGgtc2NyZWVuIGFic29sdXRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHotNTAgaC1mdWxsIHB4LTYgcmVsYXRpdmUgbWF4LXctNHhsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9DbG9zZSBmb250U2l6ZT17XCIzNVwifSBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGFic29sdXRlIC10b3AtMTYgcmlnaHQtMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnNldFlvdVR1YmVQbGF5ZXIoe2lzT3BlbjpmYWxzZSx2aWRlb0lkOlwiXCJ9KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8WW91VHViZSB2aWRlb0lkPXt5b3VUdWJlUGxheWVyLnZpZGVvSWR9IGxvYWRpbmcgPSdsYXp5JyBpZnJhbWVDbGFzc05hbWU9J3ctZnVsbCBtaW4taC1bNTAwcHhdJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2JsZW1zVGFibGU7XHJcblxyXG5mdW5jdGlvbiB1c2VHZXRQcm9ibGVtcyhzZXRMb2FkaW5nUHJvYmxlbXM6UmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+KXtcclxuICBjb25zdCBbcHJvYmxlbXMsc2V0UHJvYmxlbXNdPXVzZVN0YXRlPERCUHJvYmxlbVtdPihbXSk7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgIGNvbnN0IGdldFByb2JsZW1zPWFzeW5jKCk9PntcclxuICAgIC8vZGF0YSBmZXRjaCBmcm9tIGZpcmVzdG9yZVxyXG5cclxuICAgIGNvbnN0IHE9cXVlcnkoY29sbGVjdGlvbihmaXJlc3RvcmUsXCJwcm9ibGVtc1wiKSxvcmRlckJ5KFwib3JkZXJcIixcImFzY1wiKSlcclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3Q9YXdhaXQgZ2V0RG9jcyhxKTtcclxuICAgIC8vY29uc29sZS5sb2cocXVlcnlTbmFwc2hvdCk7XHJcbiAgICBjb25zdCB0bXA6REJQcm9ibGVtW109W107XHJcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYyk9PihcclxuICAgICAgdG1wLnB1c2goe2lkOmRvYy5pZCwuLi5kb2MuZGF0YSgpfSBhcyBEQlByb2JsZW0pXHJcbiAgICApKTtcclxuICAgIC8vY29uc29sZS5sb2codG1wKTtcclxuICAgIHNldExvYWRpbmdQcm9ibGVtcyhmYWxzZSk7XHJcbiAgICBzZXRQcm9ibGVtcyh0bXApO1xyXG4gICB9XHJcblxyXG4gICBnZXRQcm9ibGVtcygpO1xyXG4gIH0sW3NldExvYWRpbmdQcm9ibGVtc10pO1xyXG4gIHJldHVybiBwcm9ibGVtcztcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlR2V0U29sdmVkUHJvYmxlbXMoKXtcclxuICBjb25zdCBbc29sdmVkUHJvYmxlbXMsc2V0U29sdmVkUHJvYmxlbXNdPXVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW3VzZXJdPXVzZUF1dGhTdGF0ZShhdXRoKTtcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgY29uc3QgZ2V0U29sdmVkUHJvYmxlbXM9YXN5bmMgKCk9PntcclxuICAgIGNvbnN0IHVzZXJSZWY9IGRvYyhmaXJlc3RvcmUsXCJ1c2Vyc1wiLHVzZXI/LnVpZClcclxuICAgfVxyXG4gICBnZXRTb2x2ZWRQcm9ibGVtcygpO1xyXG4gIH0sW10pXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJCc0NoZWNrQ2lyY2xlIiwiQWlGaWxsWW91dHViZSIsIkxpbmsiLCJJb0Nsb3NlIiwiWW91VHViZSIsInVzZVN0YXRlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldERvY3MiLCJvcmRlckJ5IiwicXVlcnkiLCJhdXRoIiwiZmlyZXN0b3JlIiwidXNlQXV0aFN0YXRlIiwiUHJvYmxlbXNUYWJsZSIsInNldExvYWRpbmdQcm9ibGVtcyIsInlvdVR1YmVQbGF5ZXIiLCJzZXRZb3VUdWJlUGxheWVyIiwiaXNPcGVuIiwidmlkZW9JZCIsInByb2JsZW1zIiwidXNlR2V0UHJvYmxlbXMiLCJ0Ym9keSIsImNsYXNzTmFtZSIsIm1hcCIsInByb2JsZW0iLCJpZHgiLCJkaWZmaWN1bHR5Q29sb3IiLCJkaWZmaWN1bHR5IiwidHIiLCJ0aCIsImZvbnRTaXplIiwid2lkdGgiLCJ0ZCIsImhyZWYiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJvbkNsaWNrIiwicCIsInRmb290IiwiZGl2IiwibG9hZGluZyIsImlmcmFtZUNsYXNzTmFtZSIsInNldFByb2JsZW1zIiwiZ2V0UHJvYmxlbXMiLCJxIiwicXVlcnlTbmFwc2hvdCIsInRtcCIsImZvckVhY2giLCJwdXNoIiwiZGF0YSIsInVzZUdldFNvbHZlZFByb2JsZW1zIiwic29sdmVkUHJvYmxlbXMiLCJzZXRTb2x2ZWRQcm9ibGVtcyIsInVzZXIiLCJnZXRTb2x2ZWRQcm9ibGVtcyIsInVzZXJSZWYiLCJ1aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProblemsTable/ProblemsTable.tsx\n"));

/***/ })

});