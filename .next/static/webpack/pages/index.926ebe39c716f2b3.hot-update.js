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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Index = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"S3 cors test\"\n            }, void 0, false, {\n                fileName: \"/home/ec2-user/work/nextjs-cors-s3-test/pages/index.js\",\n                lineNumber: 3,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                id: \"svgImage\",\n                src: \"\",\n                alt: \"test.svg\"\n            }, void 0, false, {\n                fileName: \"/home/ec2-user/work/nextjs-cors-s3-test/pages/index.js\",\n                lineNumber: 4,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ec2-user/work/nextjs-cors-s3-test/pages/index.js\",\n        lineNumber: 2,\n        columnNumber: 5\n    }, undefined);\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\nconst AWS = __webpack_require__(/*! aws-sdk */ \"./node_modules/aws-sdk/lib/browser.js\");\nconst s3 = new AWS.S3();\n// AWS SDK 구성\nAWS.config.update({\n    region: \"ap-northeast-2\",\n    accessKeyId: \"여러분의_액세스_키_ID\",\n    secretAccessKey: \"여러분의_시크릿_액세스_키\"\n});\n// S3 객체에 대한 Pre-signed URL 생성\nconst bucketName = \"bsd-study\";\nconst objectKey = \"test.svg\";\nconst params = {\n    Bucket: bucketName,\n    Key: objectKey,\n    Expires: 3600\n}; // 1시간(3600초) 동안 유효한 URL 생성\n// 생성된 Pre-signed URL을 사용하여 이미지 다운로드\ns3.getSignedUrl(\"getObject\", params, function(err, signedUrl) {\n    if (err) {\n        console.error(\"Error generating presigned URL:\", err);\n    } else {\n        // 다운로드한 이미지를 화면에 표시\n        axios.get(signedUrl, {\n            responseType: \"blob\"\n        }).then((response)=>{\n            const imageUrl = URL.createObjectURL(response.data);\n            document.getElementById(\"svgImage\").src = imageUrl;\n        }).catch((error)=>{\n            console.error(\"Error downloading SVG:\", error);\n        });\n    }\n});\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxrQkFDViw4REFBQ0M7OzBCQUNHLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQztnQkFBSUMsSUFBRztnQkFBV0MsS0FBSTtnQkFBR0MsS0FBSTs7Ozs7Ozs7Ozs7O0tBSGhDTjtBQU1OLCtEQUFlQSxLQUFLQSxFQUFBO0FBRXBCLE1BQU1PLFFBQVFDLG1CQUFPQSxDQUFDO0FBQ3RCLE1BQU1DLE1BQU1ELG1CQUFPQSxDQUFDO0FBQ3BCLE1BQU1FLEtBQUssSUFBSUQsSUFBSUUsRUFBRTtBQUVyQixhQUFhO0FBQ2JGLElBQUlHLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO0lBQ2RDLFFBQVE7SUFDUkMsYUFBYTtJQUNiQyxpQkFBaUI7QUFDckI7QUFFQSw4QkFBOEI7QUFDOUIsTUFBTUMsYUFBYTtBQUNuQixNQUFNQyxZQUFZO0FBQ2xCLE1BQU1DLFNBQVM7SUFBRUMsUUFBUUg7SUFBWUksS0FBS0g7SUFBV0ksU0FBUztBQUFLLEdBQUcsMkJBQTJCO0FBRWpHLG9DQUFvQztBQUNwQ1osR0FBR2EsWUFBWSxDQUFDLGFBQWFKLFFBQVEsU0FBVUssR0FBRyxFQUFFQyxTQUFTO0lBQ3pELElBQUlELEtBQUs7UUFDTEUsUUFBUUMsS0FBSyxDQUFDLG1DQUFtQ0g7SUFDckQsT0FBTztRQUNILG9CQUFvQjtRQUNwQmpCLE1BQU1xQixHQUFHLENBQUNILFdBQVc7WUFBRUksY0FBYztRQUFPLEdBQ3ZDQyxJQUFJLENBQUNDLENBQUFBO1lBQ0YsTUFBTUMsV0FBV0MsSUFBSUMsZUFBZSxDQUFDSCxTQUFTSSxJQUFJO1lBQ2xEQyxTQUFTQyxjQUFjLENBQUMsWUFBWWhDLEdBQUcsR0FBRzJCO1FBQzlDLEdBQ0NNLEtBQUssQ0FBQ1gsQ0FBQUE7WUFDSEQsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkE7UUFDNUM7SUFDUjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPHA+UzMgY29ycyB0ZXN0PC9wPlxuICAgICAgICA8aW1nIGlkPVwic3ZnSW1hZ2VcIiBzcmM9XCJcIiBhbHQ9XCJ0ZXN0LnN2Z1wiPjwvaW1nPlxuICAgIDwvZGl2PlxuKVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuY29uc3QgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuY29uc3QgczMgPSBuZXcgQVdTLlMzKCk7XG5cbi8vIEFXUyBTREsg6rWs7ISxXG5BV1MuY29uZmlnLnVwZGF0ZSh7XG4gICAgcmVnaW9uOiAnYXAtbm9ydGhlYXN0LTInLCAvLyDsl6zrn6zrtoTsnbQg7IKs7Jqp7ZWY64qUIFMzIOuyhO2Ct+ydmCDrpqzsoIRcbiAgICBhY2Nlc3NLZXlJZDogJ+yXrOufrOu2hOydmF/slaHshLjsiqRf7YKkX0lEJyxcbiAgICBzZWNyZXRBY2Nlc3NLZXk6ICfsl6zrn6zrtoTsnZhf7Iuc7YGs66a/X+yVoeyEuOyKpF/tgqQnXG59KTtcblxuLy8gUzMg6rCd7LK07JeQIOuMgO2VnCBQcmUtc2lnbmVkIFVSTCDsg53shLFcbmNvbnN0IGJ1Y2tldE5hbWUgPSAnYnNkLXN0dWR5JztcbmNvbnN0IG9iamVjdEtleSA9ICd0ZXN0LnN2Zyc7XG5jb25zdCBwYXJhbXMgPSB7IEJ1Y2tldDogYnVja2V0TmFtZSwgS2V5OiBvYmplY3RLZXksIEV4cGlyZXM6IDM2MDAgfTsgLy8gMeyLnOqwhCgzNjAw7LSIKSDrj5nslYgg7Jyg7Zqo7ZWcIFVSTCDsg53shLFcblxuLy8g7IOd7ISx65CcIFByZS1zaWduZWQgVVJM7J2EIOyCrOyaqe2VmOyXrCDsnbTrr7jsp4Ag64uk7Jq066Gc65OcXG5zMy5nZXRTaWduZWRVcmwoJ2dldE9iamVjdCcsIHBhcmFtcywgZnVuY3Rpb24gKGVyciwgc2lnbmVkVXJsKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHByZXNpZ25lZCBVUkw6JywgZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyDri6TsmrTroZzrk5ztlZwg7J2066+47KeA66W8IO2ZlOuptOyXkCDtkZzsi5xcbiAgICAgICAgYXhpb3MuZ2V0KHNpZ25lZFVybCwgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnSW1hZ2UnKS5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRvd25sb2FkaW5nIFNWRzonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59KTsiXSwibmFtZXMiOlsiSW5kZXgiLCJkaXYiLCJwIiwiaW1nIiwiaWQiLCJzcmMiLCJhbHQiLCJheGlvcyIsInJlcXVpcmUiLCJBV1MiLCJzMyIsIlMzIiwiY29uZmlnIiwidXBkYXRlIiwicmVnaW9uIiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJidWNrZXROYW1lIiwib2JqZWN0S2V5IiwicGFyYW1zIiwiQnVja2V0IiwiS2V5IiwiRXhwaXJlcyIsImdldFNpZ25lZFVybCIsImVyciIsInNpZ25lZFVybCIsImNvbnNvbGUiLCJlcnJvciIsImdldCIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJyZXNwb25zZSIsImltYWdlVXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});