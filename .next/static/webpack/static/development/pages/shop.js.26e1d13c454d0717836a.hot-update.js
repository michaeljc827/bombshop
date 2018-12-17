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
var _this = undefined,
    _jsxFileName = "/Users/michaelchavez/Desktop/ReactProjects/BombShop/components/ProductsTable.js";



var ProductsTable = function ProductsTable(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.products.map(function (product, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: product.id,
      onClick: function onClick() {
        _this.removeProduct(product.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, product.name));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsTable);

/***/ })

})
//# sourceMappingURL=shop.js.26e1d13c454d0717836a.hot-update.js.map