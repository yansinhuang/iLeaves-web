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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5jIz");


/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "5jIz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Render Prop















__webpack_require__("5Buo");

var dateFormat = __webpack_require__("JIqo");

const liff = global__WEBPACK_IMPORTED_MODULE_9___default.a.liff;
const BOX = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  margin: 5.5em auto;
  width:100%;
  height:40vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const LOADERBOX = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: table;
  margin: 0 auto;

`;
const TITLE = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2`
  color: #F8F9F9;
  font-family: Candara;
  text-align: center;
  margin-bottom:-2em;
`;
const CONTAINER = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  background: #F7F9FA;
  height: 70vh;
  width: 80vw;
  margin: 5em auto;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  label {
    font-family: Candara;
    color: #1C2833;
    font-size: 1.2em;
    font-weight: 400;
  }
`;
const MYFORM = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(formik__WEBPACK_IMPORTED_MODULE_3__["Form"])`
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;
const FIELD = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(formik__WEBPACK_IMPORTED_MODULE_3__["Field"])`
  width: 70vw;
  margin: auto;
`;
const BUTTON = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a)`
  width: 70vw;
  variant: contained;
`;
const TomatoButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  color: tomato;
  border-color: tomato;
  width: 80%;
`;

const liffInit = () => {
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
      }).then(result => {});
    }, err => {
      alert(err.message);
    });
  } catch (err) {
    next(err);
  }
};

const useCurrentLocation = (options = {}) => {
  // ...
  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = position => {
    const {
      latitude,
      longitude
    } = position.coords;
    setLocation({
      latitude,
      longitude
    });
  }; // Error handler for geolocation's `getCurrentPosition` method


  const handleError = error => {
    setError(error.message);
  };

  useEffect(() => {
    // ...
    // Call the Geolocation API with options
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options); // ...
    // Add options parameter to the dependency list
  }, [options]); // ...
};

const geolocationOptions = {
  // Using this option you can define when should the location request timeout and
  // call the error callback with timeout message.
  timeout: 1000 * 60 * 1 // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)

};

function App() {
  liffInit();
  const {
    location,
    error
  } = useCurrentLocation(geolocationOptions);
  return __jsx(BOX, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("script", {
    src: "https://d.line-scdn.net/liff/1.0/sdk.js"
  })), __jsx("body", {
    style: {
      background: '#34495E'
    }
  }, __jsx(BOX, null, __jsx("h1", null, "HTML Geolocation API with React Hooks example"), ";", location ? __jsx("code", null, "Latitude: ", location.latitude, ", Longitude: ", location.longitude) : __jsx("p", null, "Loading..."), error && __jsx("p", null, "Location Error: ", error))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

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