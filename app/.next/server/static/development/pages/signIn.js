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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/image/icon.png":
/*!***********************************!*\
  !*** ./components/image/icon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon-f3a38b0d2504da78300c714dcd5c1749.png";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./pages/signIn.js":
/*!*************************!*\
  !*** ./pages/signIn.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik-material-ui */ "formik-material-ui");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_image_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/image/icon.png */ "./components/image/icon.png");
/* harmony import */ var _components_image_icon_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_image_icon_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! global */ "global");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/yan/ezbot-web/app/pages/signIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Render Prop

 //import { Button } from 'element-react';
//import 'element-theme-default';
//import 'element-theme-default/lib/button.css';









 //const path = require('path');

const liff = global__WEBPACK_IMPORTED_MODULE_11___default.a.liff;
const BOX = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  margin: 5.5em auto;
`;
const AppLogo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img`
  width: 50%;
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
`;
const TITLE = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2`
  color: #F8F9F9;
  font-family: Candara;
  text-align: center;
  margin-bottom:-2em;
`;
const CONTAINER = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  label {
    font-family: Candara;
    color: #1C2833;
    font-size: 1.2em;
    font-weight: 400;
  }
`;
const MYFORM = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(formik__WEBPACK_IMPORTED_MODULE_4__["Form"])`
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;
const FIELD = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(formik__WEBPACK_IMPORTED_MODULE_4__["Field"])`
  width: 80%;
`;
const BUTTON = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a)`
  width: 80%;
  variant: contained;
`;
const TomatoButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button`
  color: tomato;
  border-color: tomato;
  width: 80%;
`;
var userId;

function submitForm(data, userId) {
  data.userId = userId;
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/signIn', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
  }).then(res => {
    //res.status === 200 ? this.setState({ submitted: true }) : '';
    if (res.ok) {
      return res.text();
    }

    throw new Error('Sign in Error');
  }).then(result => {
    document.write("Sign In Successfully"); //alert("Sign In Successfully")
  }).catch(function (error) {
    alert(error.message);
  });
}

const liffInit = async () => {
  liff.init(data => {
    // save userId
    //const userId = data.context.userId;
    userId = data.context.userId; //alert("success");
    //alert(userId);

    const URL_CHECKEXIST = "https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist";
    const body = {
      userId: userId
    };
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(URL_CHECKEXIST, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
    }).then(res => {
      return res.text();
    }).then(result => {
      if (result) {
        document.write("Already connected"); //liff.closeWindow();
      }
    });
  }, err => {
    alert("error");
  });
};

liffInit();

const Basic = () => __jsx(BOX, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("script", {
  src: "https://d.line-scdn.net/liff/1.0/sdk.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
})), __jsx("body", {
  style: {
    background: '#34495E'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, __jsx(BOX, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, __jsx(AppLogo, {
  src: _components_image_icon_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}), __jsx(TITLE, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, "Welcome to Teddy Bear!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
  initialValues: {
    ubn: '',
    email: '',
    password: ''
  },
  validate: values => {
    const errors = {}; // check for ubn

    if (!values.ubn) {
      errors.ubn = 'Required';
    } // check for email


    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } // check for password


    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  },
  onSubmit: (values, {
    setSubmitting
  }) => {
    //submitForm(values, userId);
    setTimeout(() => {
      submitForm(values, userId);
      setSubmitting(false);
    }, 400); //console.log('submitting', values);
    //setSubmitting(false);
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, ({
  isSubmitting
}) => __jsx(CONTAINER, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, __jsx(MYFORM, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, __jsx(FIELD, {
  type: "ubn",
  name: "ubn",
  label: "UBN",
  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}), __jsx(FIELD, {
  type: "email",
  name: "email",
  label: "Email",
  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172
  },
  __self: undefined
}), __jsx(FIELD, {
  type: "password",
  name: "password",
  label: "Password",
  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_5__["TextField"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}), __jsx(BUTTON, {
  type: "submit",
  fontFamily: "Candara",
  variant: "contained",
  color: "secondary",
  disabled: isSubmitting,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, "Sign In")))))));

/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signIn.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yan/ezbot-web/app/pages/signIn.js */"./pages/signIn.js");


/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "formik-material-ui":
/*!*************************************!*\
  !*** external "formik-material-ui" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "global":
/*!*************************!*\
  !*** external "global" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signIn.js.map