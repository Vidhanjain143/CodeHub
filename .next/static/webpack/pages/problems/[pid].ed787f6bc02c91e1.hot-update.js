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

/***/ "./src/utils/problems/jump-game.ts":
/*!*****************************************!*\
  !*** ./src/utils/problems/jump-game.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jumpGame\": function() { return /* binding */ jumpGame; },\n/* harmony export */   \"jumpGameHandler\": function() { return /* binding */ jumpGameHandler; }\n/* harmony export */ });\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ \"./node_modules/assert/build/assert.js\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);\n\nconst jumpGameHandler = (fn)=>{\n    try {\n        const tests = [\n            [\n                2,\n                3,\n                1,\n                1,\n                4\n            ],\n            [\n                3,\n                2,\n                1,\n                0,\n                4\n            ],\n            [\n                2,\n                0,\n                0\n            ],\n            [\n                2,\n                5,\n                0,\n                0\n            ]\n        ];\n        const answers = [\n            true,\n            false,\n            true,\n            true\n        ];\n        for(let i = 0; i < tests.length; i++){\n            const result = fn(tests[i]);\n            assert__WEBPACK_IMPORTED_MODULE_0___default().equal(result, answers[i]);\n        }\n        return true;\n    } catch (error) {\n        console.log(\"Error from jumpGameHandler: \", error);\n        throw new Error(error);\n    }\n};\nconst starterCodeJumpGameJS = \"function canJump(nums) {\\n  // Write your code here\\n};\";\nconst jumpGame = {\n    id: \"jump-game\",\n    title: \"3. Jump Game\",\n    problemStatement: \"<p class='mt-3'>\\n    You are given an integer array <code>nums</code>. You are initially positioned at the <strong>first index</strong>\\n    and each element in the array represents your maximum jump length at that position.\\n  </p>\\n    <p class='mt-3'>\\n    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.\\n    </p>\\n  \",\n    examples: [\n        {\n            id: 0,\n            inputText: \"nums = [2,3,1,1,4]\",\n            outputText: \"true\",\n            explanation: \"Jump 1 step from index 0 to 1, then 3 steps to the last index.\"\n        },\n        {\n            id: 1,\n            inputText: \"nums = [3,2,1,0,4]\",\n            outputText: \"false\",\n            explanation: \"You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\"\n        }\n    ],\n    constraints: \"<li class='mt-2'><code>1 <= nums.length <= 10^4</code></li>\\n    <li class='mt-2'><code>0 <= nums[i] <= 10^5</code></li>\",\n    starterCode: starterCodeJumpGameJS,\n    handlerFunction: jumpGameHandler,\n    starterFunctionName: \"function canJump(\",\n    order: 3\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcHJvYmxlbXMvanVtcC1nYW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFHckIsTUFBTUMsa0JBQWtCLENBQUNDO0lBQy9CLElBQUk7UUFDSCxNQUFNQyxRQUFRO1lBQ2I7Z0JBQUM7Z0JBQUc7Z0JBQUc7Z0JBQUc7Z0JBQUc7YUFBRTtZQUNmO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFHO2FBQUU7WUFDZjtnQkFBQztnQkFBRztnQkFBRzthQUFFO1lBQ1Q7Z0JBQUM7Z0JBQUc7Z0JBQUc7Z0JBQUc7YUFBRTtTQUNaO1FBQ0QsTUFBTUMsVUFBVTtZQUFDO1lBQU07WUFBTztZQUFNO1NBQUs7UUFDekMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLE1BQU1HLFFBQVFELElBQUs7WUFDdEMsTUFBTUUsU0FBU0wsR0FBR0MsS0FBSyxDQUFDRSxFQUFFO1lBQzFCTCxtREFBWVEsQ0FBQ0QsUUFBUUgsT0FBTyxDQUFDQyxFQUFFO1FBQ2hDO1FBQ0EsT0FBTztJQUNSLEVBQUUsT0FBT0ksT0FBWTtRQUNwQkMsUUFBUUMsSUFBSSxnQ0FBZ0NGO1FBQzVDLE1BQU0sSUFBSUcsTUFBTUg7SUFDakI7QUFDRCxFQUFFO0FBRUYsTUFBTUksd0JBQXlCO0FBSXhCLE1BQU1DLFdBQW9CO0lBQ2hDQyxJQUFJO0lBQ0pDLE9BQU87SUFDUEMsa0JBQW1CO0lBU25CQyxVQUFVO1FBQ1Q7WUFDQ0gsSUFBSTtZQUNKSSxXQUFZO1lBQ1pDLFlBQWE7WUFDYkMsYUFBYTtRQUNkO1FBQ0E7WUFDQ04sSUFBSTtZQUNKSSxXQUFZO1lBQ1pDLFlBQWE7WUFDYkMsYUFDQztRQUNGO0tBQ0E7SUFDREMsYUFBYztJQUVkQyxhQUFhVjtJQUNiVyxpQkFBaUJ2QjtJQUNqQndCLHFCQUFxQjtJQUNyQkMsT0FBTztBQUNSLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3Byb2JsZW1zL2p1bXAtZ2FtZS50cz9iMWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5pbXBvcnQgeyBQcm9ibGVtIH0gZnJvbSBcIi4uL3R5cGVzL1Byb2JsZW1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBqdW1wR2FtZUhhbmRsZXIgPSAoZm46IGFueSkgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB0ZXN0cyA9IFtcclxuXHRcdFx0WzIsIDMsIDEsIDEsIDRdLFxyXG5cdFx0XHRbMywgMiwgMSwgMCwgNF0sXHJcblx0XHRcdFsyLCAwLCAwXSxcclxuXHRcdFx0WzIsIDUsIDAsIDBdLFxyXG5cdFx0XTtcclxuXHRcdGNvbnN0IGFuc3dlcnMgPSBbdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBmbih0ZXN0c1tpXSk7XHJcblx0XHRcdGFzc2VydC5lcXVhbChyZXN1bHQsIGFuc3dlcnNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJFcnJvciBmcm9tIGp1bXBHYW1lSGFuZGxlcjogXCIsIGVycm9yKTtcclxuXHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcblx0fVxyXG59O1xyXG5cclxuY29uc3Qgc3RhcnRlckNvZGVKdW1wR2FtZUpTID0gYGZ1bmN0aW9uIGNhbkp1bXAobnVtcykge1xyXG4gIC8vIFdyaXRlIHlvdXIgY29kZSBoZXJlXHJcbn07YDtcclxuXHJcbmV4cG9ydCBjb25zdCBqdW1wR2FtZTogUHJvYmxlbSA9IHtcclxuXHRpZDogXCJqdW1wLWdhbWVcIixcclxuXHR0aXRsZTogXCIzLiBKdW1wIEdhbWVcIixcclxuXHRwcm9ibGVtU3RhdGVtZW50OiBgPHAgY2xhc3M9J210LTMnPlxyXG4gICAgWW91IGFyZSBnaXZlbiBhbiBpbnRlZ2VyIGFycmF5IDxjb2RlPm51bXM8L2NvZGU+LiBZb3UgYXJlIGluaXRpYWxseSBwb3NpdGlvbmVkIGF0IHRoZSA8c3Ryb25nPmZpcnN0IGluZGV4PC9zdHJvbmc+XHJcbiAgICBhbmQgZWFjaCBlbGVtZW50IGluIHRoZSBhcnJheSByZXByZXNlbnRzIHlvdXIgbWF4aW11bSBqdW1wIGxlbmd0aCBhdCB0aGF0IHBvc2l0aW9uLlxyXG4gIDwvcD5cclxuICAgIDxwIGNsYXNzPSdtdC0zJz5cclxuICAgIFJldHVybiA8Y29kZT50cnVlPC9jb2RlPiBpZiB5b3UgY2FuIHJlYWNoIHRoZSBsYXN0IGluZGV4LCBvciA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxyXG4gICAgPC9wPlxyXG4gIGAsXHJcblxyXG5cdGV4YW1wbGVzOiBbXHJcblx0XHR7XHJcblx0XHRcdGlkOiAwLFxyXG5cdFx0XHRpbnB1dFRleHQ6IGBudW1zID0gWzIsMywxLDEsNF1gLFxyXG5cdFx0XHRvdXRwdXRUZXh0OiBgdHJ1ZWAsXHJcblx0XHRcdGV4cGxhbmF0aW9uOiBcIkp1bXAgMSBzdGVwIGZyb20gaW5kZXggMCB0byAxLCB0aGVuIDMgc3RlcHMgdG8gdGhlIGxhc3QgaW5kZXguXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpZDogMSxcclxuXHRcdFx0aW5wdXRUZXh0OiBgbnVtcyA9IFszLDIsMSwwLDRdYCxcclxuXHRcdFx0b3V0cHV0VGV4dDogYGZhbHNlYCxcclxuXHRcdFx0ZXhwbGFuYXRpb246XHJcblx0XHRcdFx0XCJZb3Ugd2lsbCBhbHdheXMgYXJyaXZlIGF0IGluZGV4IDMgbm8gbWF0dGVyIHdoYXQuIEl0cyBtYXhpbXVtIGp1bXAgbGVuZ3RoIGlzIDAsIHdoaWNoIG1ha2VzIGl0IGltcG9zc2libGUgdG8gcmVhY2ggdGhlIGxhc3QgaW5kZXguXCIsXHJcblx0XHR9LFxyXG5cdF0sXHJcblx0Y29uc3RyYWludHM6IGA8bGkgY2xhc3M9J210LTInPjxjb2RlPjEgPD0gbnVtcy5sZW5ndGggPD0gMTBeNDwvY29kZT48L2xpPlxyXG4gICAgPGxpIGNsYXNzPSdtdC0yJz48Y29kZT4wIDw9IG51bXNbaV0gPD0gMTBeNTwvY29kZT48L2xpPmAsXHJcblx0c3RhcnRlckNvZGU6IHN0YXJ0ZXJDb2RlSnVtcEdhbWVKUyxcclxuXHRoYW5kbGVyRnVuY3Rpb246IGp1bXBHYW1lSGFuZGxlcixcclxuXHRzdGFydGVyRnVuY3Rpb25OYW1lOiBcImZ1bmN0aW9uIGNhbkp1bXAoXCIsXHJcblx0b3JkZXI6IDMsXHJcbn07Il0sIm5hbWVzIjpbImFzc2VydCIsImp1bXBHYW1lSGFuZGxlciIsImZuIiwidGVzdHMiLCJhbnN3ZXJzIiwiaSIsImxlbmd0aCIsInJlc3VsdCIsImVxdWFsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJzdGFydGVyQ29kZUp1bXBHYW1lSlMiLCJqdW1wR2FtZSIsImlkIiwidGl0bGUiLCJwcm9ibGVtU3RhdGVtZW50IiwiZXhhbXBsZXMiLCJpbnB1dFRleHQiLCJvdXRwdXRUZXh0IiwiZXhwbGFuYXRpb24iLCJjb25zdHJhaW50cyIsInN0YXJ0ZXJDb2RlIiwiaGFuZGxlckZ1bmN0aW9uIiwic3RhcnRlckZ1bmN0aW9uTmFtZSIsIm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/problems/jump-game.ts\n"));

/***/ })

});