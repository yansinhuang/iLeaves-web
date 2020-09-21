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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNVR");


/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

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

/***/ "GNgB":
/***/ (function(module, exports) {

module.exports = require("react-geocode");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RNVR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pcb2");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Bb0u");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("GNgB");
/* harmony import */ var react_geocode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_geocode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bW9D");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Render Prop







react_geocode__WEBPACK_IMPORTED_MODULE_7___default.a.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s");
react_geocode__WEBPACK_IMPORTED_MODULE_7___default.a.setLanguage("zh-tw");
const liff = global__WEBPACK_IMPORTED_MODULE_4___default.a.liff;

class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      latitude: null,
      longitude: null
    };
  }

  componentDidMount() {
    this.liffInit();
    this.getLocation();
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString('zh-TW')
      });
    }, 1000);
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
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(URL_CHECKEXIST, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
        }).then(res => {
          return res.text();
        }).then(result => {
          if (result) {
            this.setState({
              userId: userId
            });
            this.lineAuth(userId, accessToken);
          } else {
            alert("請登入以使用");
            global__WEBPACK_IMPORTED_MODULE_4___default.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn");
          }
        });
      }, err => {
        alert(err.message);
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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, {
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
          const department = result.staff.department;
          const email = result.staff.email;
          const idToken = result.token.idToken;
          this.setState({
            Authorization: idToken,
            ubn: ubn,
            email: email
          });
          this.getPunch();
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

  getLocation() {
    try {
      //alert("getLocation");
      let self = this;
      navigator.geolocation.getCurrentPosition(function (position) {
        //alert(position.coords.latitude);
        //alert(position.coords.longitude);
        self.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }); //alert("end!!")

        react_geocode__WEBPACK_IMPORTED_MODULE_7___default.a.fromLatLng(position.coords.latitude, position.coords.longitude).then(response => {
          var address = response.results[0].formatted_address;
          self.setState({
            address: address
          });
        }, error => {
          alert("無法取得位置資訊");
          next(error);
        });
      }, error => alert(error.message));
    } catch (err) {
      alert(err);
      next(err);
    }
  }

  getPunch() {
    try {
      const URL_GETPUNCH = `https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/getToday?ubn=${this.state.ubn}&query=email&value=${this.state.email}`;
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(URL_GETPUNCH, {
        method: 'get',
        headers: {
          "Authorization": this.state.Authorization
        }
      }).then(res => {
        return res.json();
      }).then(result => {
        let self = this;
        self.setState({
          punch: result
        });

        if (result.length == 0) {
          alert("請先簽到");
        } else if (result.length == 1) {// able to punch out
        } else if (result.length == 2) {
          alert("今日已簽退");
        } else {
          alert("error: too much punch data in a day");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  createPunch() {
    try {
      let self = this;
      self.setState({
        punched: true
      });
      const URL_CREATEPUNCH = "https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create";
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(URL_CREATEPUNCH, {
        method: 'post',
        headers: {
          "Authorization": this.state.Authorization,
          "ubn": this.state.ubn,
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          "latitude": this.state.latitude,
          "longitude": this.state.longitude,
          "address": this.state.address,
          "type": "簽退",
          "email": this.state.email
        })
      }).then(res => {
        return res.text();
      }).then(result => {
        if (result) {
          //liff.closeWindow();
          alert("簽退成功");
        } else {
          alert("punch error");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  render() {
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("script", {
      src: "https://d.line-scdn.net/liff/1.0/sdk.js"
    })), __jsx("body", {
      style: {
        background: '#191414',
        display: 'flex',
        "justify-content": "center",
        "align-items": "center"
      }
    }, __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["CONTAINER"], null, this.state.email && this.state.punch && this.state.address ? __jsx("div", null, __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["BOX"], null, __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["TITLE"], null, " ", this.state.curTime, " ")), __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["BOX"], null, __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["TEXT"], null, "\u73FE\u5728\u4F4D\u7F6E\uFF1A ", this.state.address)), __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["BOX"], null, __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["BUTTON"], {
      fontFamily: "Candara",
      variant: "contained",
      color: "secondary",
      disabled: !(this.state.latitude && this.state.longitude && this.state.address && this.state.punch.length == 1 && !this.state.punched),
      onClick: () => {
        this.createPunch();
      }
    }, "\u7C3D\u5230"))) : __jsx(_component__WEBPACK_IMPORTED_MODULE_8__["BOX"], null, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "ThreeDots",
      color: "#1DB954",
      height: 80,
      width: 80
    })))));
  }

}

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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