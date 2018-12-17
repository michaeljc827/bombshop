webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ProductsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductsTable */ "./components/ProductsTable.js");
/* harmony import */ var _static_mock_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/mock-data.json */ "./static/mock-data.json");
var _static_mock_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/mock-data.json */ "./static/mock-data.json", 1);
var _jsxFileName = "/Users/michaelchavez/Desktop/ReactProjects/BombShop/pages/shop.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Shop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Shop, _React$Component);

  function Shop() {
    _classCallCheck(this, Shop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shop).apply(this, arguments));
  }

  _createClass(Shop, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        "products": _static_mock_data_json__WEBPACK_IMPORTED_MODULE_4__,
        "count": _static_mock_data_json__WEBPACK_IMPORTED_MODULE_4__.length,
        "inputValue": ""
      });
    }
  }, {
    key: "addProduct",
    value: function addProduct() {
      var data = this.state.products;
      data.push({
        "id": this.state.products.length + 1,
        "name": this.state.inputValue,
        "price": 300
      });
      this.setState({
        "products": data,
        "count": this.state.products.length + 1
      });
    }
  }, {
    key: "updateInput",
    value: function updateInput(evt) {
      var data = this.state.products;
      this.setState({
        "products": data,
        "inputValue": evt.target.value
      });
    }
  }, {
    key: "removeProduct",
    value: function removeProduct() {
      alert();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log("Rendering shop with", this.state.products);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Products in Stock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: "10px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Item Name",
        onChange: function onChange(evt) {
          _this.updateInput(evt);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          _this.addProduct();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Add Item")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductsTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        products: this.state.products,
        removeProductFunc: this.removeProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })));
    }
  }]);

  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


"";
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/shop")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=shop.js.68cc2c9cac3ee0b31c9f.hot-update.js.map