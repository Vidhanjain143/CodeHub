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

/***/ "./src/components/Workspace/Workspace.tsx":
/*!************************************************!*\
  !*** ./src/components/Workspace/Workspace.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-split */ \"./node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var _ProblemDescription_ProblemDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProblemDescription/ProblemDescription */ \"./src/components/Workspace/ProblemDescription/ProblemDescription.tsx\");\n/* harmony import */ var _Playground_Playground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Playground/Playground */ \"./src/components/Workspace/Playground/Playground.tsx\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-confetti */ \"./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Workspace = (param)=>{\n    let { problem  } = param;\n    _s();\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [solved, setSolved] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"split\",\n        minSize: 0,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProblemDescription_ProblemDescription__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    problem: problem\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Workspace.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 14\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Workspace.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Playground_Playground__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        problem: problem,\n                        setSuccess: setSuccess\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Workspace.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined),\n                    success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        gravity: 0.3,\n                        tweenDuration: 4000\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Workspace.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Workspace.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vidhan Jain\\\\Desktop\\\\New folder\\\\web\\\\Real\\\\codehub\\\\src\\\\components\\\\Workspace\\\\Workspace.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Workspace, \"rmLsenh0w4c7sGFPjbxQGRg8TSg=\");\n_c = Workspace;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Workspace);\nvar _c;\n$RefreshReg$(_c, \"Workspace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3Jrc3BhY2UvV29ya3NwYWNlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSTtBQUNDO0FBQzBDO0FBQ3hCO0FBRU47QUFNM0MsTUFBTU0sWUFBcUM7UUFBQyxFQUFDQyxRQUFPLEVBQUM7O0lBQ2pELE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFDUiwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNLENBQUNTLFFBQU9DLFVBQVUsR0FBQ1YsK0NBQVFBLENBQUM7SUFDbEMscUJBQ0EsOERBQUNDLG1EQUFLQTtRQUFDVSxXQUFVO1FBQVFDLFNBQVM7OzBCQUM5Qiw4REFBQ0M7MEJBQUksNEVBQUNYLDhFQUFrQkE7b0JBQUNJLFNBQVNBOzs7Ozs7Ozs7OzswQkFDbEMsOERBQUNPOztrQ0FDRyw4REFBQ1YsOERBQVVBO3dCQUFDRyxTQUFTQTt3QkFBU0UsWUFBWUE7Ozs7OztvQkFDekNELHlCQUFXLDhEQUFDSCx1REFBYUE7d0JBQUNVLFNBQVM7d0JBQUtDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlwRTtHQVpNVjtLQUFBQTtBQWFOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1dvcmtzcGFjZS9Xb3Jrc3BhY2UudHN4P2ExNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTcGxpdCBmcm9tICdyZWFjdC1zcGxpdCdcclxuaW1wb3J0IFByb2JsZW1EZXNjcmlwdGlvbiBmcm9tICcuL1Byb2JsZW1EZXNjcmlwdGlvbi9Qcm9ibGVtRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUGxheWdyb3VuZCBmcm9tICcuL1BsYXlncm91bmQvUGxheWdyb3VuZCc7XHJcbmltcG9ydCB7IFByb2JsZW0gfSBmcm9tICdAL3V0aWxzL3R5cGVzL1Byb2JsZW0nO1xyXG5pbXBvcnQgUmVhY3RDb25mZXR0aSBmcm9tICdyZWFjdC1jb25mZXR0aSc7XHJcblxyXG50eXBlIFdvcmtzcGFjZVByb3BzID0ge1xyXG4gICAgcHJvYmxlbTpQcm9ibGVtXHJcbn07XHJcblxyXG5jb25zdCBXb3Jrc3BhY2U6UmVhY3QuRkM8V29ya3NwYWNlUHJvcHM+ID0gKHtwcm9ibGVtfSkgPT4ge1xyXG4gICAgY29uc3QgW3N1Y2Nlc3Msc2V0U3VjY2Vzc109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3NvbHZlZCxzZXRTb2x2ZWRdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8U3BsaXQgY2xhc3NOYW1lPVwic3BsaXRcIiBtaW5TaXplPXswfT5cclxuICAgICAgICA8ZGl2PjxQcm9ibGVtRGVzY3JpcHRpb24gcHJvYmxlbT17cHJvYmxlbX0gLz48L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UGxheWdyb3VuZCBwcm9ibGVtPXtwcm9ibGVtfSBzZXRTdWNjZXNzPXtzZXRTdWNjZXNzfS8+XHJcbiAgICAgICAgICAgIHtzdWNjZXNzICYmIDxSZWFjdENvbmZldHRpIGdyYXZpdHk9ezAuM30gdHdlZW5EdXJhdGlvbj17NDAwMH0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1NwbGl0PlxyXG4gKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzcGFjZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNwbGl0IiwiUHJvYmxlbURlc2NyaXB0aW9uIiwiUGxheWdyb3VuZCIsIlJlYWN0Q29uZmV0dGkiLCJXb3Jrc3BhY2UiLCJwcm9ibGVtIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJzb2x2ZWQiLCJzZXRTb2x2ZWQiLCJjbGFzc05hbWUiLCJtaW5TaXplIiwiZGl2IiwiZ3Jhdml0eSIsInR3ZWVuRHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Workspace/Workspace.tsx\n"));

/***/ })

});