self["webpackHotUpdate_N_E"]("pages/about/about",{

/***/ "./utils/about/photogrid.tsx":
/*!***********************************!*\
  !*** ./utils/about/photogrid.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPhotoGrid": function() { return /* binding */ VPhotoGrid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./utils/index.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photogrid.module.scss */ "./utils/about/photogrid.module.scss");
/* harmony import */ var _photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\yichu\\Desktop\\nekomura-competiton\\Portfolio-Page\\utils\\about\\photogrid.tsx",
    _s = $RefreshSig$();






function VPhotoGrid() {
  _s();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoGrid),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().murren),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Winter Neko', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Murren",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.mainpic,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
} //TO-DO refactoring of VPhotoGrid

_s(VPhotoGrid, "Gu8xMR1D8kgnO2RuNLLP6s9uQy8=", false, function () {
  return [___WEBPACK_IMPORTED_MODULE_3__.useTypedText, ___WEBPACK_IMPORTED_MODULE_3__.useTypedText];
});

_c = VPhotoGrid;

var _c;

$RefreshReg$(_c, "VPhotoGrid");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYWJvdXQvcGhvdG9ncmlkLnRzeCJdLCJuYW1lcyI6WyJWUGhvdG9HcmlkIiwic3R5bGVzIiwidXNlVHlwZWRUZXh0IiwibWFpbnBpYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXlCQTtBQUVPLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDM0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlFQUFoQjtBQUFBLDJCQUNNO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSw4QkFDRjtBQUFJLGlCQUFTLEVBQUVBLHlFQUFmO0FBQUEsbUJBQ0dDLCtDQUFZLENBQUMsb0JBQUQsRUFBdUIsRUFBdkIsQ0FEZixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHR0EsK0NBQVksQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREUsZUFNRiw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBQyxpQkFBWDtBQUE2QixXQUFHLEVBQUVDLDRDQUFsQztBQUEyQyxjQUFNLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlELEMsQ0FFRDs7R0FmZ0JILFU7VUFLTEUsMkMsRUFFQUEsMkM7OztLQVBLRixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0L2Fib3V0LjllODQ2ZTNiNGEyMzdiYmY3Y2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUeXBlZFRleHQgfSBmcm9tICcuLidcclxuaW1wb3J0IHtcclxuICBiYXJjZWxvbmFTYWdyYWRhUGhvdG8sXHJcbiAgYm93bGluZ1Bob3RvLFxyXG4gIGNsaW1iaW5nVG9wUGhvdG8sXHJcbiAgZnJhbmNlTGFTYWx0dGVQaG90byxcclxuICBnaWV3b250UGhvdG8sXHJcbiAgaWNlbGFuZFdhdGVyZmFsbFBob3RvLFxyXG4gIGxvbmRvbkFyc2VuYWxQaG90byxcclxuICBsb25kb25DYW5hcnlQaG90byxcclxuICBsb25kb25DaGVsc2VhLFxyXG4gIGxvbmRvblRvd2VyQnJpZGdlUGhvdG8sXHJcbiAgbG9uZG9uVmljdG9yeVBob3RvLFxyXG4gIG1haW5waWMsXHJcbiAgbWFuY2hlc3RlclVuaXRlZFBob3RvLFxyXG4gIG1henVyeURhd25QaG90byxcclxuICBtY2xhcmVuUGhvdG8sXHJcbiAgbm90cmVEYW1lUGhvdG8sXHJcbiAgcGFyaXNFaWZmZWxQaG90byxcclxuICBwbGF5aW5nSUVNUGhvdG8sXHJcbiAgcnlzaWFua2FQaG90byxcclxuICBza2lTd2lzc1Bob3RvLFxyXG4gIHN1c2hpUGhvdG8sXHJcbiAgc3dpc3NNdXJyZW5QaG90byxcclxuICB3YWxlc1Bob3RvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGhvdG9ncmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZQaG90b0dyaWQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9HcmlkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVycmVufT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBXaW50ZXIgTmVrbycsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMi4yMDIxJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIE11cnJlblwiIHNyYz17bWFpbnBpY30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vVE8tRE8gcmVmYWN0b3Jpbmcgb2YgVlBob3RvR3JpZCJdLCJzb3VyY2VSb290IjoiIn0=