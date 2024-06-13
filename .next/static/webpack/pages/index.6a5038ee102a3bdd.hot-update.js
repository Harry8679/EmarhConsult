/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./layout/footer-2.js":
/*!****************************!*\
  !*** ./layout/footer-2.js ***!
  \****************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _element_aboutUs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element/aboutUs-2 */ \"./element/aboutUs-2.js\");\n/* harmony import */ var _element_blog_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element/blog-2 */ \"./element/blog-2.js\");\n/* harmony import */ var _element_clients_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/clients-2 */ \"./element/clients-2.js\");\n/* harmony import */ var _element_counter2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/counter2 */ \"./element/counter2.js\");\n/* harmony import */ var _element_our_services_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../element/our-services-2 */ \"./element/our-services-2.js\");\n/* harmony import */ var _element_pricing_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../element/pricing-2 */ \"./element/pricing-2.js\");\n/* harmony import */ var _element_Projects_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../element/Projects-2 */ \"./element/Projects-2.js\");\n/* harmony import */ var _element_service_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../element/service-2 */ \"./element/service-2.js\");\n/* harmony import */ var _element_slider_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../element/slider-2 */ \"./element/slider-2.js\");\n/* harmony import */ var _element_testimonial_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../element/testimonial-2 */ \"./element/testimonial-2.js\");\n/* harmony import */ var _layout_footer_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/footer-2 */ \"./layout/footer-2.js\");\n/* harmony import */ var _layout_footer_2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_layout_footer_2__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _layout_header_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../layout/header-2 */ \"./layout/header-2.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/Users/harrymaccode/Desktop/MyApplications/EBANG_MEZUI/ebang-mezui-consulting/pages/index.js\";\n\n\n\n\n\n\n\n\n\n\n\n\n // import \"../css/skin/skin-1.css\";\n\n\n\n\nfunction Index2() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_layout_header_2__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n      className: \"page-content bg-white\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_element_slider_2__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_element_service_2__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_element_aboutUs_2__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_element_our_services_2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)((_layout_footer_2__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_c = Index2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index2\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7Ozs7O0FBRUEsU0FBU2EsTUFBVCxHQUFrQjtBQUVoQixzQkFDRTtBQUFBLDRCQUNFLCtEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLHVCQUFmO0FBQUEsOEJBQ0UsK0RBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsK0RBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsK0RBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBS0UsK0RBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBY0UsK0RBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUEsa0JBREY7QUFrQkQ7O0tBcEJRQTtBQXNCVCwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXRVczIgZnJvbSBcIi4uL2VsZW1lbnQvYWJvdXRVcy0yXCI7XHJcbmltcG9ydCBCbG9nMiBmcm9tIFwiLi4vZWxlbWVudC9ibG9nLTJcIjtcclxuaW1wb3J0IENsaWVudHMyIGZyb20gXCIuLi9lbGVtZW50L2NsaWVudHMtMlwiO1xyXG5pbXBvcnQgQ291bnRlcjIgZnJvbSBcIi4uL2VsZW1lbnQvY291bnRlcjJcIjtcclxuaW1wb3J0IE91clNlcnZpY2VzMiBmcm9tIFwiLi4vZWxlbWVudC9vdXItc2VydmljZXMtMlwiO1xyXG5pbXBvcnQgUHJpY2luZzIgZnJvbSBcIi4uL2VsZW1lbnQvcHJpY2luZy0yXCI7XHJcbmltcG9ydCBQcm9qZWN0czIgZnJvbSBcIi4uL2VsZW1lbnQvUHJvamVjdHMtMlwiO1xyXG5pbXBvcnQgU2VydmljZTIgZnJvbSBcIi4uL2VsZW1lbnQvc2VydmljZS0yXCI7XHJcbmltcG9ydCBTbGlkZXIyIGZyb20gXCIuLi9lbGVtZW50L3NsaWRlci0yXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbDIgZnJvbSBcIi4uL2VsZW1lbnQvdGVzdGltb25pYWwtMlwiO1xyXG5pbXBvcnQgRm9vdGVyMiBmcm9tIFwiLi4vbGF5b3V0L2Zvb3Rlci0yXCI7XHJcbmltcG9ydCBIZWFkZXIyIGZyb20gXCIuLy4uL2xheW91dC9oZWFkZXItMlwiO1xyXG4vLyBpbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleDIoKSB7XHJcbiBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlcjIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYmctd2hpdGVcIj5cclxuICAgICAgICA8U2xpZGVyMiAvPlxyXG4gICAgICAgIDxTZXJ2aWNlMiAvPlxyXG4gICAgICAgIDxBYm91dFVzMiAvPlxyXG4gICAgICAgIHsvKiA8Q291bnRlcjIgLz4gKi99XHJcbiAgICAgICAgPE91clNlcnZpY2VzMiAvPlxyXG4gICAgICAgIHsvKiA8UHJvamVjdHMyIC8+ICovfVxyXG4gICAgICAgIHsvKiA8UHJpY2luZzIgLz4gKi99XHJcbiAgICAgICAgey8qIDxUZXN0aW1vbmlhbDIgLz4gKi99XHJcbiAgICAgICAgey8qIDxCbG9nMiAvPiAqL31cclxuICAgICAgICB7LyogPENsaWVudHMyIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlcjIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4MjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkFib3V0VXMyIiwiQmxvZzIiLCJDbGllbnRzMiIsIkNvdW50ZXIyIiwiT3VyU2VydmljZXMyIiwiUHJpY2luZzIiLCJQcm9qZWN0czIiLCJTZXJ2aWNlMiIsIlNsaWRlcjIiLCJUZXN0aW1vbmlhbDIiLCJGb290ZXIyIiwiSGVhZGVyMiIsIkluZGV4MiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});