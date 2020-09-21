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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+BM3":
/***/ (function(module, exports) {

module.exports = require("@date-io/luxon");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gwsz");


/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bb0u":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Gwsz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("VxNu");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("pcb2");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Stfe");
/* harmony import */ var material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_formik_components_Select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("KNS6");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _date_io_luxon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("+BM3");
/* harmony import */ var _date_io_luxon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_date_io_luxon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Bb0u");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("bW9D");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Render Prop















__webpack_require__("5Buo");

var dateFormat = __webpack_require__("JIqo");


class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      isSubmitting: false,
      isExist: false
    };
  }

  componentDidMount() {
    this.liffInit();
  }

  liffInit() {
    try {
      liff.init(data => {
        const userId = data.context.userId; //const accessToken = liff.getAccessToken();

        const URL_CHECKEXIST = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist";
        const body = {
          userId: userId
        };
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(URL_CHECKEXIST, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
        }).then(res => {
          return res.text();
        }).then(result => {
          this.setState({
            userId: userId
          });

          if (result) {
            this.setState({
              isExist: true
            });
          }
        });
      }, err => {
        alert(err.message);
      });
    } catch (err) {
      next(err);
    }
  }

  signOut(userId) {
    try {
      this.setState({
        isSubmitting: true
      });
      const url = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/signOut";
      const body = {
        userId: userId
      };
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
      }).then(res => {
        this.setState({
          isSubmitting: false
        });
        const messages = [{
          type: "text",
          text: "登出成功"
        }];
        liff.sendMessages(messages);
        liff.closeWindow();
        return res.json();
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  pushMessage(userId, messages) {
    try {
      const URL_PUSHMESSAGE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/message/pushMessage";
      const body = {
        userId: userId,
        messages: messages
      };
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(URL_PUSHMESSAGE, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('pushMessage response was not ok.');
      }).then(result => {//liff.closeWindow();
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  render() {
    return __jsx(_component__WEBPACK_IMPORTED_MODULE_15__["BOX"], null, __jsx(_component__WEBPACK_IMPORTED_MODULE_15__["GlobalStyle"], null), __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("script", {
      src: "https://d.line-scdn.net/liff/1.0/sdk.js"
    })), __jsx("body", null, __jsx(_component__WEBPACK_IMPORTED_MODULE_15__["BOX"], null, this.state.userId ? this.state.isExist ? __jsx(_component__WEBPACK_IMPORTED_MODULE_15__["BUTTON"], {
      fontFamily: "Candara",
      variant: "contained",
      color: "secondary",
      disabled: this.state.isSubmitting,
      onClick: () => {
        this.signOut(this.state.userId);
      }
    }, "\u767B\u51FA") : __jsx("label", null, "\u5DF2\u767B\u51FA") : __jsx(LOADERBOX, null, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_13___default.a, {
      type: "ThreeDots",
      color: "#f50057",
      height: 80,
      width: 80
    })))));
  }

}

/***/ }),

/***/ "JIqo":
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "KNS6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/pickers");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "Stfe":
/***/ (function(module, exports) {

module.exports = require("material-ui-formik-components/Select");

/***/ }),

/***/ "VxNu":
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "bW9D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOX", function() { return BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT", function() { return TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER", function() { return CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON", function() { return BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MYFORM", function() { return MYFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIELD", function() { return FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);



const BOX = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`

  padding: 0px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TITLE = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  display: flex;  
  color: #191414;
  font-family: Candara;
  text-align: center;
`;
const TEXT = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4`
  display: flex;
  color: #191414;
  font-family: Candara;
  text-align: center;
`;
const CONTAINER = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  height: 65vh;
  width: 75vw;
  padding: 30px;
  margin: 4px;
  background-color: #FFFFFF;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const BUTTON = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a)`
&& {
  display: flex;
  variant: contained;
  width: 100%;
  background-color: #1DB954;
}
`;
const MYFORM = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(formik__WEBPACK_IMPORTED_MODULE_2__["Form"])`
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;
const FIELD = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(formik__WEBPACK_IMPORTED_MODULE_2__["Field"])`
  width: 70vw;
  margin: auto;
`;
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
    background: #191414;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (BOX);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "pcb2":
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });