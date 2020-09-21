module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VI6m");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "GNgB":
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "LHi4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Loader extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", null, this.props.loading ? __jsx("div", {
      className: "-loading -active"
    }, __jsx("div", {
      className: "-loading-inner"
    }, "Loading")) : __jsx("div", null));
  }

}

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VI6m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYYK");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a/h4");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qBGJ");
/* harmony import */ var react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_table_react_table_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("pcb2");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("GNgB");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_month_picker_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YF5/");
/* harmony import */ var react_month_picker_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_month_picker_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("LHi4");


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








 //import 'react-month-picker-input/dist/react-month-picker-input.css';
//var MonthPickerInput = require('react-month-picker-input');

__webpack_require__("hjAs");

const liff = global__WEBPACK_IMPORTED_MODULE_7___default.a.liff;
const BOX = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  margin: 5.5em auto;
`;
var leaves;
react_geocode__WEBPACK_IMPORTED_MODULE_8___default.a.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s");
react_geocode__WEBPACK_IMPORTED_MODULE_8___default.a.setLanguage("zh-tw");
class App extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "handleChange", event => {
      try {
        this.setState({
          searchInput: event,
          loading: true
        }, () => {
          this.globalSearch();
        });
      } catch (err) {
        next(err);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "globalSearch", () => {
      try {
        let {
          searchInput
        } = this.state;
        var date_array = searchInput.split("/");
        var date_select = new Date(date_array[1], date_array[0]);
        var year_select = date_select.getFullYear();
        var month_select = date_select.getMonth();
        let filteredData = this.state.data_origin.filter(value => {
          var date = new Date(value.createTime * 1000);
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          return year === year_select && month === month_select;
        });
        this.setState({
          data: filteredData,
          loading: false
        });
      } catch (err) {
        next(err);
      }
    });

    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    this.liffInit();
  }

  liffInit() {
    try {
      liff.init(data => {
        const userId = data.context.userId;
        const accessToken = liff.getAccessToken();
        const URL_CHECKEXIST = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist";
        const body = {
          userId: userId
        };
        fetch(URL_CHECKEXIST, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
        }).then(res => {
          return res.text();
        }).then(result => {
          if (result) {
            this.lineAuth(userId, accessToken);
          } else {
            alert("請登入以查看假單");
            global__WEBPACK_IMPORTED_MODULE_7___default.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn");
          }
        });
      }, err => {
        alert("error");
      });
    } catch (err) {
      next(err);
    }
  }

  lineAuth(userId, accessToken) {
    try {
      const url = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth";
      const body = {
        userId: userId,
        accessToken: accessToken
      };
      fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
      }).then(res => {
        return res.json();
      }).then(result => {
        if (result) {
          const ubn = result.staff.ubn;
          const email = result.staff.email;
          const idToken = result.token.idToken;
          this.getPunches(ubn, email, idToken);
        } else {
          alert("lineAuth no result");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  getPunches(ubn, email, idToken) {
    try {
      const url_pre = "https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/get";
      const url = url_pre + `?ubn=${ubn}&query=email&value=${email}`;
      const header = {
        Authorization: idToken
      };
      fetch(url, {
        method: 'get',
        headers: header
      }).then(res => {
        return res.json();
      }).then(result => {
        if (result) {
          this.convertData(result.list);
        } else {
          alert("getPunches no result");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  convertData(list) {
    try {
      var newList = [];

      for (var i = 0; i < list.length; i++) {
        var date = new Date(list[i].createTime * 1000).toLocaleString('zh-TW', {
          timeZone: 'Asia/Taipei'
        });
        const data = {
          "createTime": list[i].createTime,
          "date": date,
          "address": list[i].address,
          "type": list[i].type
        };
        newList.push(data);
        this.setState({
          data: newList,
          data_origin: newList,
          loading: false
        });
      }
    } catch (err) {
      next(err);
    }
  }

  render() {
    const MyLoader = () => __jsx(_loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      loading: this.state.loading
    });

    let months = ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let makeText = m => {
      if (m && m.year && m.month) return months[m.month - 1] + '. ' + m.year;
      return '?';
    };

    let mvalue = {
      year: 2015,
      month: 11
    };
    const columns = [{
      Header: '日期',
      accessor: 'date',
      minWidth: 170
    }, {
      Header: '地址',
      accessor: 'address',
      minWidth: 300
    }, {
      Header: '類型',
      accessor: 'type',
      maxWidth: 60
    }];
    return __jsx("div", null, __jsx("meta", {
      name: "viewport",
      content: "width=device-width, user-scalable=no"
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("script", {
      src: "https://d.line-scdn.net/liff/1.0/sdk.js"
    })), __jsx("p", null, "\u5E74/\u6708"), __jsx(react_month_picker_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
      onChange: this.handleChange
    }), __jsx("br", null), __jsx("div", null, this.state.data ? __jsx(react_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      LoadingComponent: MyLoader,
      data: this.state.data,
      columns: columns,
      defaultPageSize: 10,
      pageSizeOptions: [10, 15]
    }) : __jsx(react_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      LoadingComponent: MyLoader,
      data: leaves,
      columns: columns,
      defaultPageSize: 10,
      pageSizeOptions: [10, 15]
    })));
  }

}

/***/ }),

/***/ "YF5/":
/***/ (function(module, exports) {

module.exports = require("react-month-picker-input");

/***/ }),

/***/ "a/h4":
/***/ (function(module, exports) {

module.exports = require("react-table");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hjAs":
/***/ (function(module, exports) {



/***/ }),

/***/ "pcb2":
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "qBGJ":
/***/ (function(module, exports) {



/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });