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

/***/ "./src/utils/problems/valid-parentheses.ts":
/*!*************************************************!*\
  !*** ./src/utils/problems/valid-parentheses.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validParentheses\": function() { return /* binding */ validParentheses; },\n/* harmony export */   \"validParenthesesHandler\": function() { return /* binding */ validParenthesesHandler; }\n/* harmony export */ });\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"./node_modules/assert/build/assert.js\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\n\nconst validParenthesesHandler = (fn)=>{\n    try {\n        const tests = [\n            \"()\",\n            \"()[]{}\",\n            \"(]\",\n            \"([)]\",\n            \"{[]}\"\n        ];\n        const answers = [\n            true,\n            true,\n            false,\n            false,\n            true\n        ];\n        for(let i = 0; i < tests.length; i++){\n            const result = fn(tests[i]);\n            assert__WEBPACK_IMPORTED_MODULE_0___default().deepEqual(result, answers[i]);\n        }\n        return true;\n    } catch (error) {\n        console.error(\"Error from validParenthesesHandler: \", error);\n        throw new Error(error);\n    }\n};\nconst starterCodeValidParenthesesJS = \"function validParentheses(s) {\\n  // Write your code here\\n};\";\nconst validParentheses = {\n    id: \"valid-parentheses\",\n    title: \"4. Valid Parentheses\",\n    problemStatement: \"<p class='mt-3'>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p> <p class='mt-3'>An input string is valid if:</p> <ul> <li class='mt-2'>Open brackets must be closed by the same type of brackets.</li> <li class='mt-3'>Open brackets must be closed in the correct order.</li>\\n\t<li class=\\\"mt-3\\\">Every close bracket has a corresponding open bracket of the same type. </li>\\n\t</ul>\",\n    examples: [\n        {\n            id: 0,\n            inputText: 's = \"()\"',\n            outputText: \"true\"\n        },\n        {\n            id: 1,\n            inputText: 's = \"()[]{}\"',\n            outputText: \"true\"\n        },\n        {\n            id: 2,\n            inputText: 's = \"(]\"',\n            outputText: \"false\"\n        },\n        {\n            id: 3,\n            inputText: 's = \"([)]\"',\n            outputText: \"false\"\n        }\n    ],\n    constraints: \"<li class='mt-2'><code>1 <= s.length <= 10<sup>4</sup></code></li>\\n<li class='mt-2 '><code>s</code> consists of parentheses only <code class=\\\"text-md\\\">'()[]{}'</code>.</li>\",\n    handlerFunction: validParenthesesHandler,\n    starterCode: starterCodeValidParenthesesJS,\n    starterFunctionName: \"function validParentheses(\",\n    order: 4\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcHJvYmxlbXMvdmFsaWQtcGFyZW50aGVzZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUdyQixNQUFNQywwQkFBMEIsQ0FBQ0M7SUFDdkMsSUFBSTtRQUNILE1BQU1DLFFBQVE7WUFBQztZQUFNO1lBQVU7WUFBTTtZQUFRO1NBQU87UUFDcEQsTUFBTUMsVUFBVTtZQUFDO1lBQU07WUFBTTtZQUFPO1lBQU87U0FBSztRQUNoRCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsTUFBTUcsUUFBUUQsSUFBSztZQUN0QyxNQUFNRSxTQUFTTCxHQUFHQyxLQUFLLENBQUNFLEVBQUU7WUFDMUJMLHVEQUFnQlEsQ0FBQ0QsUUFBUUgsT0FBTyxDQUFDQyxFQUFFO1FBQ3BDO1FBQ0EsT0FBTztJQUNSLEVBQUUsT0FBT0ksT0FBWTtRQUNwQkMsUUFBUUQsTUFBTSx3Q0FBd0NBO1FBQ3RELE1BQU0sSUFBSUUsTUFBTUY7SUFDakI7QUFDRCxFQUFFO0FBRUYsTUFBTUcsZ0NBQWlDO0FBSWhDLE1BQU1DLG1CQUE0QjtJQUN4Q0MsSUFBSTtJQUNKQyxPQUFPO0lBQ1BDLGtCQUFtQjtJQUduQkMsVUFBVTtRQUNUO1lBQ0NILElBQUk7WUFDSkksV0FBVztZQUNYQyxZQUFZO1FBQ2I7UUFDQTtZQUNDTCxJQUFJO1lBQ0pJLFdBQVc7WUFDWEMsWUFBWTtRQUNiO1FBQ0E7WUFDQ0wsSUFBSTtZQUNKSSxXQUFXO1lBQ1hDLFlBQVk7UUFDYjtRQUNBO1lBQ0NMLElBQUk7WUFDSkksV0FBVztZQUNYQyxZQUFZO1FBQ2I7S0FDQTtJQUNEQyxhQUFjO0lBRWRDLGlCQUFpQnBCO0lBQ2pCcUIsYUFBYVY7SUFDYlcscUJBQXFCO0lBQ3JCQyxPQUFPO0FBQ1IsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvcHJvYmxlbXMvdmFsaWQtcGFyZW50aGVzZXMudHM/NmZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuaW1wb3J0IHsgUHJvYmxlbSB9IGZyb20gXCIuLi90eXBlcy9wcm9ibGVtXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRQYXJlbnRoZXNlc0hhbmRsZXIgPSAoZm46IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB0ZXN0cyA9IFtcIigpXCIsIFwiKClbXXt9XCIsIFwiKF1cIiwgXCIoWyldXCIsIFwie1tdfVwiXTtcclxuXHRcdGNvbnN0IGFuc3dlcnMgPSBbdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCB0cnVlXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZm4odGVzdHNbaV0pO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKHJlc3VsdCwgYW5zd2Vyc1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcblx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgZnJvbSB2YWxpZFBhcmVudGhlc2VzSGFuZGxlcjogXCIsIGVycm9yKTtcclxuXHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRlckNvZGVWYWxpZFBhcmVudGhlc2VzSlMgPSBgZnVuY3Rpb24gdmFsaWRQYXJlbnRoZXNlcyhzKSB7XHJcbiAgLy8gV3JpdGUgeW91ciBjb2RlIGhlcmVcclxufTtgO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkUGFyZW50aGVzZXM6IFByb2JsZW0gPSB7XHJcblx0aWQ6IFwidmFsaWQtcGFyZW50aGVzZXNcIixcclxuXHR0aXRsZTogXCI0LiBWYWxpZCBQYXJlbnRoZXNlc1wiLFxyXG5cdHByb2JsZW1TdGF0ZW1lbnQ6IGA8cCBjbGFzcz0nbXQtMyc+R2l2ZW4gYSBzdHJpbmcgPGNvZGU+czwvY29kZT4gY29udGFpbmluZyBqdXN0IHRoZSBjaGFyYWN0ZXJzIDxjb2RlPicoJzwvY29kZT4sIDxjb2RlPicpJzwvY29kZT4sIDxjb2RlPid7JzwvY29kZT4sIDxjb2RlPid9JzwvY29kZT4sIDxjb2RlPidbJzwvY29kZT4gYW5kIDxjb2RlPiddJzwvY29kZT4sIGRldGVybWluZSBpZiB0aGUgaW5wdXQgc3RyaW5nIGlzIHZhbGlkLjwvcD4gPHAgY2xhc3M9J210LTMnPkFuIGlucHV0IHN0cmluZyBpcyB2YWxpZCBpZjo8L3A+IDx1bD4gPGxpIGNsYXNzPSdtdC0yJz5PcGVuIGJyYWNrZXRzIG11c3QgYmUgY2xvc2VkIGJ5IHRoZSBzYW1lIHR5cGUgb2YgYnJhY2tldHMuPC9saT4gPGxpIGNsYXNzPSdtdC0zJz5PcGVuIGJyYWNrZXRzIG11c3QgYmUgY2xvc2VkIGluIHRoZSBjb3JyZWN0IG9yZGVyLjwvbGk+XHJcblx0PGxpIGNsYXNzPVwibXQtM1wiPkV2ZXJ5IGNsb3NlIGJyYWNrZXQgaGFzIGEgY29ycmVzcG9uZGluZyBvcGVuIGJyYWNrZXQgb2YgdGhlIHNhbWUgdHlwZS4gPC9saT5cclxuXHQ8L3VsPmAsXHJcblx0ZXhhbXBsZXM6IFtcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDAsXHJcblx0XHRcdGlucHV0VGV4dDogJ3MgPSBcIigpXCInLFxyXG5cdFx0XHRvdXRwdXRUZXh0OiBcInRydWVcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRpbnB1dFRleHQ6ICdzID0gXCIoKVtde31cIicsXHJcblx0XHRcdG91dHB1dFRleHQ6IFwidHJ1ZVwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aWQ6IDIsXHJcblx0XHRcdGlucHV0VGV4dDogJ3MgPSBcIihdXCInLFxyXG5cdFx0XHRvdXRwdXRUZXh0OiBcImZhbHNlXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpZDogMyxcclxuXHRcdFx0aW5wdXRUZXh0OiAncyA9IFwiKFspXVwiJyxcclxuXHRcdFx0b3V0cHV0VGV4dDogXCJmYWxzZVwiLFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdGNvbnN0cmFpbnRzOiBgPGxpIGNsYXNzPSdtdC0yJz48Y29kZT4xIDw9IHMubGVuZ3RoIDw9IDEwPHN1cD40PC9zdXA+PC9jb2RlPjwvbGk+XHJcbjxsaSBjbGFzcz0nbXQtMiAnPjxjb2RlPnM8L2NvZGU+IGNvbnNpc3RzIG9mIHBhcmVudGhlc2VzIG9ubHkgPGNvZGUgY2xhc3M9XCJ0ZXh0LW1kXCI+JygpW117fSc8L2NvZGU+LjwvbGk+YCxcclxuXHRoYW5kbGVyRnVuY3Rpb246IHZhbGlkUGFyZW50aGVzZXNIYW5kbGVyLFxyXG5cdHN0YXJ0ZXJDb2RlOiBzdGFydGVyQ29kZVZhbGlkUGFyZW50aGVzZXNKUyxcclxuXHRzdGFydGVyRnVuY3Rpb25OYW1lOiBcImZ1bmN0aW9uIHZhbGlkUGFyZW50aGVzZXMoXCIsXHJcblx0b3JkZXI6IDQsXHJcbn07Il0sIm5hbWVzIjpbImFzc2VydCIsInZhbGlkUGFyZW50aGVzZXNIYW5kbGVyIiwiZm4iLCJ0ZXN0cyIsImFuc3dlcnMiLCJpIiwibGVuZ3RoIiwicmVzdWx0IiwiZGVlcEVxdWFsIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJzdGFydGVyQ29kZVZhbGlkUGFyZW50aGVzZXNKUyIsInZhbGlkUGFyZW50aGVzZXMiLCJpZCIsInRpdGxlIiwicHJvYmxlbVN0YXRlbWVudCIsImV4YW1wbGVzIiwiaW5wdXRUZXh0Iiwib3V0cHV0VGV4dCIsImNvbnN0cmFpbnRzIiwiaGFuZGxlckZ1bmN0aW9uIiwic3RhcnRlckNvZGUiLCJzdGFydGVyRnVuY3Rpb25OYW1lIiwib3JkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/problems/valid-parentheses.ts\n"));

/***/ })

});