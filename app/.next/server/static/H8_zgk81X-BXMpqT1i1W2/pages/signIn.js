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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WmES");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "VxNu":
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "WmES":
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
/* harmony import */ var _components_image_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("uQs+");
/* harmony import */ var _components_image_icon_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_image_icon_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("pcb2");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Render Prop










 //require('firebase/auth')

const liff = global__WEBPACK_IMPORTED_MODULE_10___default.a.liff;
const BOX = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  margin: 5.5em auto;
`;
const AppLogo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  width: 50%;
  display: block;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
`;
const TITLE = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2`
  color: #F8F9F9;
  font-family: Candara;
  text-align: center;
  margin-bottom:-2em;
`;
const CONTAINER = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
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
const MYFORM = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(formik__WEBPACK_IMPORTED_MODULE_3__["Form"])`
  text-align: center;
  padding-top: 2em;
  padding-bottom: 2em;
`;
const FIELD = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(formik__WEBPACK_IMPORTED_MODULE_3__["Field"])`
  width: 80%;
`;
const BUTTON = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a)`
  width: 80%;
  variant: contained;
`;
const TomatoButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button`
  color: tomato;
  border-color: tomato;
  width: 80%;
`;
var userId;
const config = {
  databaseUrl: 'https://teddybear-dev.firebaseio.com',
  authUrl: 'https://identitytoolkit.googleapis.com/v1',
  secureUrl: 'https://securetoken.googleapis.com/v1',
  apiKey: 'AIzaSyDhqqn1bFuw7mpHKQDdRPQZrc2HfmKb-l8'
};

function submitForm(data, userId) {
  data.userId = userId;
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/signIn', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
  }).then(res => {
    //res.status === 200 ? this.setState({ submitted: true }) : '';
    if (res.ok) {
      return res.json();
    }

    throw new Error('Sign in Error');
  }).then(result => {
    if (result.userId) {
      alert("登入成功");
    } else {
      alert("首次登入成功，請至信箱收取重設密碼信");
      firebase__WEBPACK_IMPORTED_MODULE_11___default.a.auth().sendPasswordResetEmail(result.email);
    }

    liff.closeWindow(); //document.write("Sign In Successfully");
    //alert("Sign In Successfully")
  }).catch(function (error) {
    alert(error.message);
  });
}

const liffInit = async () => {
  firebase__WEBPACK_IMPORTED_MODULE_11___default.a.initializeApp(config);
  liff.init(data => {
    // save userId
    //const userId = data.context.userId;
    userId = data.context.userId; //alert("success");
    //alert(userId);

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
      if (result) {
        document.write("Already connected"); //liff.closeWindow();
      }
    });
  }, err => {
    alert("error");
  });
};

liffInit();

function forgotPassword(email) {
  try {
    firebase__WEBPACK_IMPORTED_MODULE_11___default.a.auth().sendPasswordResetEmail(email).then(function () {
      alert('Please check your email...');
    });
  } catch (err) {
    alert(err);
    next(err);
  }
}

const Basic = () => __jsx(BOX, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, null, __jsx("script", {
  src: "https://d.line-scdn.net/liff/1.0/sdk.js"
}), __jsx("script", {
  src: "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"
}), __jsx("link", {
  type: "text/css",
  rel: "stylesheet",
  href: "https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
})), __jsx("body", {
  style: {
    background: '#34495E'
  }
}, __jsx(BOX, null, __jsx(AppLogo, {
  src: _components_image_icon_png__WEBPACK_IMPORTED_MODULE_8___default.a
}), __jsx(TITLE, null, "Welcome to Teddy Bear!"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
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
  }
}, ({
  isSubmitting
}) => __jsx(CONTAINER, null, __jsx(MYFORM, null, __jsx(FIELD, {
  type: "ubn",
  name: "ubn",
  label: "UBN",
  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"]
}), __jsx(FIELD, {
  type: "email",
  name: "email",
  label: "Email",
  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"]
}), __jsx(FIELD, {
  type: "password",
  name: "password",
  label: "Password",
  component: formik_material_ui__WEBPACK_IMPORTED_MODULE_4__["TextField"]
}), __jsx("br", null), __jsx("br", null), __jsx(BUTTON, {
  type: "submit",
  fontFamily: "Candara",
  variant: "contained",
  color: "secondary",
  disabled: isSubmitting
}, "Sign In"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
  fontFamily: "Candara",
  color: "secondary",
  onClick: () => {
    var email = prompt("請輸入Email", "");

    if (email != null && email != "") {
      forgotPassword(email);
    }
  }
}, "\u5FD8\u8A18\u5BC6\u78BC")))))));

/* harmony default export */ __webpack_exports__["default"] = (Basic);

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

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "pcb2":
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "uQs+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon-f3a38b0d2504da78300c714dcd5c1749.png";

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });