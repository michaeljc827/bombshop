webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./components/ProductsTable.js":
/*!*************************************!*\
  !*** ./components/ProductsTable.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/michaelchavez/Desktop/ReactProjects/BombShop/components/ProductsTable.js";


var ProductsTable = function ProductsTable(props) {
  var test;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.products.map(function (product, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: product.id,
      onClick: function onClick() {
        props.removeProductFunc(product.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, product.name));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsTable);

/***/ })

})
//# sourceMappingURL=shop.js.2bc85b3cf4993616e956.hot-update.js.map