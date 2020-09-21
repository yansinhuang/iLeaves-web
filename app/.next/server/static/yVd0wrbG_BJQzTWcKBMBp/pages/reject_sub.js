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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oKZk");


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

/***/ "oKZk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VxNu");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pcb2");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Bb0u");
/* harmony import */ var react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner_dist_loader_css_react_spinner_loader_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("bW9D");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// Render Prop









const liff = global__WEBPACK_IMPORTED_MODULE_6___default.a.liff;
class App extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      Authorization: null,
      ubn: null,
      leaveId: null,
      leave: null,
      status: null
    };
  }

  componentDidMount() {
    this.getQuery();
    this.liffInit();
  }

  getQuery() {
    let urlParams = new URLSearchParams(global__WEBPACK_IMPORTED_MODULE_6___default.a.location.search);
    urlParams = urlParams.toString().split("&");
    const ubn = urlParams[0].split("=")[1];
    const leaveId = urlParams[1].split("=")[1];
    this.setState({
      leaveId: leaveId
    });
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
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(URL_CHECKEXIST, {
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
            alert("請登入以查看假單");
            global__WEBPACK_IMPORTED_MODULE_6___default.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn");
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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
      }).then(res => {
        return res.json();
      }).then(result => {
        if (result) {
          const ubn = result.staff.ubn; //const department = result.staff.department;
          //const email = result.staff.email;

          const idToken = result.token.idToken;
          this.setState({
            Authorization: idToken,
            ubn: ubn
          });
          this.checkStatus(idToken, ubn, this.state.leaveId);
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

  checkStatus(Authorization, ubn, id) {
    try {
      const URL_GETLEAVE = `https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/target?ubn=${ubn}&id=${id}`;
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(URL_GETLEAVE, {
        method: 'get',
        headers: {
          Authorization: Authorization
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('checkStatus response was not ok.');
      }).then(result => {
        if (result.status != "等待簽核") {
          //alert("此張假單已簽核");
          this.setState({
            status: "signed"
          }); //window.location.replace("https://teddybear-dev.firebaseapp.com/alreadyApproved/");
        } else {
          this.getStaff(Authorization, ubn, result.email);
          this.setState({
            status: "not signed"
          });
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  getStaff(Authorization, ubn, email) {
    try {
      const URL_GETSTAFF = `https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/target?email=${email}&ubn=${ubn}`;
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(URL_GETSTAFF, {
        method: 'get',
        headers: {
          "Authorization": Authorization
        }
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('getStaff response was not ok.');
      }).then(result => {
        this.setState({
          userId_self: result.userId
        });
      });
    } catch (err) {
      next(err);
    }
  }

  updateLeave(values) {
    try {
      const URL_UPDATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/update";
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(URL_UPDATELEAVE, {
        method: 'post',
        headers: {
          "Authorization": this.state.Authorization,
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('updateLeave response was not ok.');
      }).then(result => {
        this.setState({
          leave: result
        });
        const messages = [{
          type: "text",
          text: "拒絕成功"
        }];
        this.pushMessage(this.state.userId, messages);
        const substituteInfo = JSON.parse(result.substitute);
        const messages_self = {
          "type": "flex",
          "altText": "代理人已拒絕假單",
          "contents": {
            "type": "bubble",
            "styles": {},
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [{
                "type": "text",
                "text": "代理人",
                "weight": "bold",
                "color": "#1DB446",
                "size": "sm"
              }, {
                "type": "text",
                "text": "已拒絕假單",
                "weight": "bold",
                "size": "xxl",
                "margin": "md"
              }, {
                "type": "separator",
                "margin": "xxl"
              }, {
                "type": "box",
                "layout": "vertical",
                "margin": "xxl",
                "spacing": "sm",
                "contents": [{
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [{
                    "type": "text",
                    "text": "開始日期",
                    "size": "sm",
                    "color": "#555555"
                  }, {
                    "type": "text",
                    "text": result.startDate,
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }]
                }, {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [{
                    "type": "text",
                    "text": "結束日期",
                    "size": "sm",
                    "color": "#555555"
                  }, {
                    "type": "text",
                    "text": result.endDate,
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }]
                }, {
                  "type": "separator",
                  "margin": "xxl"
                }, {
                  "type": "box",
                  "layout": "horizontal",
                  "margin": "xxl",
                  "contents": [{
                    "type": "text",
                    "text": "假別",
                    "size": "sm",
                    "color": "#555555"
                  }, {
                    "type": "text",
                    "text": result.leaveType,
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }]
                }, {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [{
                    "type": "text",
                    "text": "請假原因",
                    "size": "sm",
                    "color": "#555555"
                  }, {
                    "type": "text",
                    "text": result.leaveReason,
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }]
                }, {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [{
                    "type": "text",
                    "text": "代理人",
                    "size": "sm",
                    "color": "#555555"
                  }, {
                    "type": "text",
                    "text": substituteInfo.name,
                    "size": "sm",
                    "color": "#111111",
                    "align": "end"
                  }]
                }]
              }, {
                "type": "separator",
                "margin": "xxl"
              }, {
                "type": "box",
                "layout": "horizontal",
                "margin": "md",
                "contents": [{
                  "type": "text",
                  "text": "簽核狀態",
                  "size": "xs",
                  "color": "#555555"
                }, {
                  "type": "text",
                  "text": "拒絕(代理人)",
                  "color": "#ff0000",
                  "size": "xs",
                  "align": "end"
                }]
              }, {
                "type": "box",
                "layout": "horizontal",
                "margin": "md",
                "contents": [{
                  "type": "text",
                  "text": "拒絕原因",
                  "size": "xs",
                  "color": "#555555"
                }, {
                  "type": "text",
                  "text": result.rejectReason,
                  "color": "#111111",
                  "size": "xs",
                  "align": "end"
                }]
              }]
            }
          }
        };
        ;
        this.pushMessage(this.state.userId_self, [messages_self]);
        liff.closeWindow();
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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(URL_PUSHMESSAGE, {
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
    return __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["BOX"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("script", {
      src: "https://d.line-scdn.net/liff/1.0/sdk.js"
    })), __jsx("body", {
      style: {
        background: '#191414',
        overflow: 'hidden'
      }
    }, __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["BOX"], null, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        rejectReason: ''
      },
      validate: values => {
        const errors = {}; // check for rejectReason

        if (!values.rejectReason) {
          errors.rejectReason = 'Required';
        }

        return errors;
      },
      onSubmit: (values, {
        setSubmitting
      }) => {
        values.status = "拒絕 (代理人)";
        values.leaveId = this.state.leaveId;
        values.ubn = this.state.ubn;
        this.updateLeave(values);
        setSubmitting(false); //console.log('submitting', values);
      }
    }, ({
      isSubmitting,
      values,
      setFieldValue
    }) => __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["CONTAINER"], null, this.state.userId && this.state.Authorization && this.state.ubn && this.state.leaveId && this.state.status == "not signed" ? __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["MYFORM"], null, __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["FIELD"], {
      type: "rejectReason",
      name: "rejectReason",
      label: "\u62D2\u7D55\u539F\u56E0",
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"]
    }), __jsx("br", null), __jsx("br", null), __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["BUTTON"], {
      type: "submit",
      fontFamily: "Candara",
      variant: "contained",
      color: "secondary",
      disabled: isSubmitting
    }, "\u9001\u51FA")) : this.state.userId && this.state.Authorization && this.state.ubn && this.state.leaveId && this.state.status == "signed" ? __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["MYFORM"], null, __jsx("label", null, "\u6B64\u5F35\u5047\u55AE\u5DF2\u7C3D\u6838")) : __jsx(_component__WEBPACK_IMPORTED_MODULE_9__["BOX"], null, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {
      type: "ThreeDots",
      color: "#f50057",
      height: 80,
      width: 80
    })))))));
  }

}

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