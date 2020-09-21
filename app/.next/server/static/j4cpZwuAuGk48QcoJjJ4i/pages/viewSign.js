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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Vp1d");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

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

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Vp1d":
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
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LHi4");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zOcm");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("x54t");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("hbHv");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("lWoh");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("OdWO");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










__webpack_require__("hjAs");








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["makeStyles"])(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    fullWidth: true
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const BUTTON = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a)`
  width: 20%;
  variant: contained;
`;
const liff = global__WEBPACK_IMPORTED_MODULE_7___default.a.liff;
const BOX = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  margin: 5.5em auto;
`;
var leaves;
class App extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "handleRoleChange", event => {
      try {
        this.setState({
          role: event.target.value
        }, () => {
          if (event.target.value == "substitute") {
            this.getLeavesSub(this.state.ubn, this.state.name, this.state.email, this.state.idToken);
          } else if (event.target.value == "supervisor") {
            this.getLeavesSuper(this.state.ubn, this.state.email, this.state.idToken);
          }
        });
      } catch (err) {
        throw err;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "handleStatusChange", event => {
      try {
        this.setState({
          status: event.target.value
        }, () => {
          //console.log(event.target.value);
          this.globalSearch();
        });
      } catch (err) {
        throw err;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "globalSearch", () => {
      try {
        this.setState({
          loading: true
        });
        let role_select = this.state.role;
        let status_select = this.state.status;
        let filteredData = this.state.data_origin.filter(value => {
          if (role_select == "substitute") {
            switch (status_select) {
              case "signed":
                return value.status != "等待簽核";

              case "not signed":
                return value.status == "等待簽核";

              default:
                throw 'Option not supported';
            }
          } else if (role_select == "supervisor") {
            switch (status_select) {
              case "signed":
                return value.status == "同意 (主管)" || value.status == "拒絕 (主管)";

              case "not signed":
                return value.status == "同意 (代理人)";

              default:
                throw 'Option not supported';
            }
          }
        });
        this.setState({
          data: filteredData,
          loading: false
        });
      } catch (err) {
        throw err;
      }
    });

    this.state = {
      data: null,
      data_origin: null,
      role: "substitute",
      status: "not signed",
      loading: true,
      userId: null,
      ubn: null,
      idToken: null,
      loading_button: new Object(),
      finish_button: new Object(),
      status_button: new Object()
    };
  }

  componentDidMount() {
    this.liffInit();
  }

  liffInit() {
    try {
      liff.init(data => {
        const userId = data.context.userId;
        this.setState({
          userId: userId
        });
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
      throw err;
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
          const name = result.staff.name;
          const idToken = result.token.idToken;
          this.setState({
            ubn: ubn,
            name: name,
            email: email,
            idToken: idToken
          });

          if (this.state.role == "substitute") {
            this.getLeavesSub(this.state.ubn, this.state.name, this.state.email, this.state.idToken);
          } else if (this.state.role == "supervisor") {
            this.getLeavesSuper(this.state.ubn, this.state.email, this.state.idToken);
          }
        } else {
          alert("lineAuth no result");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      throw err;
    }
  }

  getLeavesSub(ubn, name, email, idToken) {
    try {
      this.setState({
        loading: true
      });
      const URL_GETLEAVES = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/get";
      const url = URL_GETLEAVES + `?ubn=${ubn}&query=substitute&value={"name":"${name}","email":"${email}"}`;
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
          alert("getLeavesSub no result");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      throw err;
    }
  }

  getLeavesSuper(ubn, email, idToken) {
    try {
      this.setState({
        loading: true
      });
      const URL_GETLEAVES = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/get";
      const url = URL_GETLEAVES + `?ubn=${ubn}&query=supervisor&value=${email}`;
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
          alert("getLeavesSuper no result");
        }
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      throw err;
    }
  }

  convertData(list) {
    try {
      var newList = [];

      for (var i = 0; i < list.length; i++) {
        const data = {
          "id": list[i].id,
          "name": list[i].name,
          "startDate": list[i].startDate,
          "endDate": list[i].endDate,
          "leaveType": list[i].leaveType,
          "substitute": JSON.parse(list[i].substitute).name,
          "status": list[i].status,
          "leaveReason": list[i].leaveReason,
          "rejectReason": list[i].rejectReason
        };
        newList.push(data);
      }

      this.setState({
        data_origin: newList
      });
      this.globalSearch();
    } catch (err) {
      throw err;
    }
  }

  /*
  getStaff (Authorization, ubn, email) {
    try {
      const URL_GETSTAFF = `https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/target?email=${email}&ubn=${ubn}`;
      fetch(URL_GETSTAFF, {
          method: 'get',
          headers: {
              "Authorization": Authorization
          }
      }).then((res) => {
          if(res.ok) {
              return res.json();  
          }
          throw new Error('getStaff response was not ok.');
      }).then(result => {
          this.getDepartment(Authorization, ubn, result.department);
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
          next(err);
    }
  }
   getStaff_super (Authorization, ubn, email) {
    try {
      const URL_GETSTAFF = `https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/target?email=${email}&ubn=${ubn}`;
      fetch(URL_GETSTAFF, {
          method: 'get',
          headers: {
              "Authorization": Authorization
          }
      }).then((res) => {
          if(res.ok) {
              return res.json();  
          }
          throw new Error('getStaff response was not ok.');
      }).then(result => {
        const message_super = {
          "type": "flex",
          "altText": "[主管] 是否批准假單？",
          "contents": {
            "type": "bubble",
            "styles": {},
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "主管",
                  "weight": "bold",
                  "color": "#1DB446",
                  "size": "sm"
                },
                {
                  "type": "text",
                  "text": "是否批准假單？",
                  "weight": "bold",
                  "size": "xxl",
                  "margin": "md"
                },
                {
                  "type": "separator",
                  "margin": "xxl"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "xxl",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "請假者",
                          "size": "sm",
                          "color": "#555555"
                        },
                        {
                          "type": "text",
                          "text": selfStaff.name,
                          "size": "sm",
                          "color": "#111111",
                          "align": "end"
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xxl"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "margin": "xxl",
                      "contents": [
                        {
                          "type": "text",
                          "text": "開始日期",
                          "size": "sm",
                          "color": "#555555"
                        },
                        {
                          "type": "text",
                          "text": this.state.leave.startDate,
                          "size": "sm",
                          "color": "#111111",
                          "align": "end"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "結束日期",
                          "size": "sm",
                          "color": "#555555",
                          "flex": 0
                        },
                        {
                          "type": "text",
                          "text": this.state.leave.endDate,
                          "size": "sm",
                          "color": "#111111",
                          "align": "end"
                        }
                      ]
                    },
                    {
                      "type": "separator",
                      "margin": "xxl"
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "margin": "xxl",
                      "contents": [
                        {
                          "type": "text",
                          "text": "假別",
                          "size": "sm",
                          "color": "#555555"
                        },
                        {
                          "type": "text",
                          "text": this.state.leave.leaveType,
                          "size": "sm",
                          "color": "#111111",
                          "align": "end"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "請假原因",
                          "size": "sm",
                          "color": "#555555"
                        },
                        {
                          "type": "text",
                          "text": this.state.leave.leaveReason,
                          "size": "sm",
                          "color": "#111111",
                          "align": "end"
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": [
                        {
                          "type": "text",
                          "text": "代理人",
                          "size": "sm",
                          "color": "#555555"
                        },
                        {
                          "type": "text",
                          "text": substituteInfo.name,
                          "size": "sm",
                          "color": "#111111",
                          "align": "end"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "separator",
                  "margin": "xxl"
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "margin": "md",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "margin": "md",
                      "contents": [
                        {
                          "type": "button",
                          "style": "secondary",
                          "height": "sm",
                          "action": {
                            "type": "uri",
                            "label": "拒絕",
                            "uri": `line://app/1596565799-A57K2l04?ubn=${ubn}&leaveId=${this.state.leave.id}`
                          }
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "margin": "md",
                      "contents": [
                        {
                          "type": "button",
                          "style": "secondary",
                          "height": "sm",
                          "action": {
                            "type": "postback",
                            "label": "批准",
                            "data": `action=同意&role=主管&ubn=${ubn}&leaveId=${this.state.leave.id}`,
                            "text": "批准"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
    };
          this.pushMessage()
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
          next(err);
    }
  }
   getDepartment (Authorization, ubn, departmentId) {
    try {
      const URL_GETDEPARTMENT = `https://us-central1-teddybear-dev.cloudfunctions.net/api/department/target?departmentId=${departmentId}&ubn=${ubn}`;
      fetch(URL_GETDEPARTMENT, {
          method: 'get',
          headers: {
              "Authorization": Authorization
          }
      }).then((res) => {
          if(res.ok) {
              return res.json();  
          }
          throw new Error('getDepartment response was not ok.');
      }).then(result => {
          this.getStaff_super(ubn, result.supervisor)
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
          next(err);
    }
  }
  
  updateLeave (ubn, leaveId, updateData, action, role) {
    try {
      const URL_UPDATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/update";
      fetch(URL_UPDATELEAVE, {
          method: 'post',
          headers: {
              "Authorization": this.state.Authorization,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(updateData)
      }).then((res) => {
          if(res.ok) {
              return res.json();  
          }
          throw new Error('updateLeave response was not ok.');
      }).then(result => {
          this.setState({
            leave: result
          })
          const substituteInfo = JSON.parse(result.substitute);
          if (action == "approve") {
            if (role == "substitute") {
              const message_self = {
                "type": "flex",
                "altText": "代理人已批准假單",
                "contents": {
                    "type": "bubble",
                    "styles": {
                    "footer": {
                        "separator": true
                    }
                    },
                    "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                        "type": "text",
                        "text": "代理人",
                        "weight": "bold",
                        "color": "#1DB446",
                        "size": "sm"
                        },
                        {
                        "type": "text",
                        "text": "已批准假單",
                        "weight": "bold",
                        "size": "xxl",
                        "margin": "md"
                        },
                        {
                        "type": "separator",
                        "margin": "xxl"
                        },
                        {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "xxl",
                        "spacing": "sm",
                        "contents": [
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "開始日期",
                                "size": "sm",
                                "color": "#555555",
                                "flex": 0
                                },
                                {
                                "type": "text",
                                "text": result.startDate,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "結束日期",
                                "size": "sm",
                                "color": "#555555",
                                "flex": 0
                                },
                                {
                                "type": "text",
                                "text": result.endDate,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "separator",
                            "margin": "xxl"
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "margin": "xxl",
                            "contents": [
                                {
                                "type": "text",
                                "text": "假別",
                                "size": "sm",
                                "color": "#555555"
                                },
                                {
                                "type": "text",
                                "text": result.leaveType,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "請假原因",
                                "size": "sm",
                                "color": "#555555"
                                },
                                {
                                "type": "text",
                                "text": result.leaveReason,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "代理人",
                                "size": "sm",
                                "color": "#555555"
                                },
                                {
                                "type": "text",
                                "text": substituteInfo.name,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            }
                        ]
                        },
                        {
                        "type": "separator",
                        "margin": "xxl"
                        },
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "md",
                        "contents": [
                            {
                            "type": "text",
                            "text": "簽核狀態",
                            "size": "xs",
                            "color": "#555555",
                            "flex": 0
                            },
                            {
                            "type": "text",
                            "text": "同意(代理人)",
                            "color": "#1DB446",
                            "size": "xs",
                            "align": "end"
                            }
                        ]
                        }
                    ]
                    }
                }
              };
              // send message to supervisor
             } else if (role == "supervisor") {
              const message_self = {
                "type": "flex",
                "altText": "主管已批准假單",
                "contents": {
                    "type": "bubble",
                    "styles": {
                    "footer": {
                        "separator": true
                    }
                    },
                    "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                        "type": "text",
                        "text": "主管",
                        "weight": "bold",
                        "color": "#1DB446",
                        "size": "sm"
                        },
                        {
                        "type": "text",
                        "text": "已批准假單",
                        "weight": "bold",
                        "size": "xxl",
                        "margin": "md"
                        },
                        {
                        "type": "separator",
                        "margin": "xxl"
                        },
                        {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "xxl",
                        "spacing": "sm",
                        "contents": [
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "開始日期",
                                "size": "sm",
                                "color": "#555555",
                                "flex": 0
                                },
                                {
                                "type": "text",
                                "text": result.startDate,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "結束日期",
                                "size": "sm",
                                "color": "#555555",
                                "flex": 0
                                },
                                {
                                "type": "text",
                                "text": result.endDate,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "separator",
                            "margin": "xxl"
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "margin": "xxl",
                            "contents": [
                                {
                                "type": "text",
                                "text": "假別",
                                "size": "sm",
                                "color": "#555555"
                                },
                                {
                                "type": "text",
                                "text": result.leaveType,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "請假原因",
                                "size": "sm",
                                "color": "#555555"
                                },
                                {
                                "type": "text",
                                "text": result.leaveReason,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            },
                            {
                            "type": "box",
                            "layout": "horizontal",
                            "contents": [
                                {
                                "type": "text",
                                "text": "代理人",
                                "size": "sm",
                                "color": "#555555"
                                },
                                {
                                "type": "text",
                                "text": substituteInfo.name,
                                "size": "sm",
                                "color": "#111111",
                                "align": "end"
                                }
                            ]
                            }
                        ]
                        },
                        {
                        "type": "separator",
                        "margin": "xxl"
                        },
                        {
                        "type": "box",
                        "layout": "horizontal",
                        "margin": "md",
                        "contents": [
                            {
                            "type": "text",
                            "text": "簽核狀態",
                            "size": "xs",
                            "color": "#555555",
                            "flex": 0
                            },
                            {
                            "type": "text",
                            "text": "同意(主管)",
                            "color": "#1DB446",
                            "size": "xs",
                            "align": "end"
                            }
                        ]
                        }
                    ]
                    }
                }
              };
            }
          } else if (action == "reject") {
           }
           this.pushMessage(this.state.userId, [messages_self]);
      }).catch(function (error) {
          alert(error.message);
      })
    } catch (err) {
          next(err);
    }
  }
   approveLeave (ubn, leaveId, role) {
    try {
      if (role == "substitute") {
        var updateData = {
          "status": "同意 (代理人)"
        }
      } else if (role == "supervisor") {
        var updateData = {
          "status": "同意 (主管)"
        }
      }
      const result = await updateLeave(ubn, leaveId, updateData, "approve", role);
       const URL_CREATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/create";
      fetch(URL_CREATELEAVE, {
        method: 'post',
        headers: {
          "Authorization": this.state.Authorization,
          "ubn": this.state.ubn,
          "userId": this.state.userId,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      }).then((res) => {
        return res.text();
      }).then(result => {
        if (result) {
         } else {
            alert("approveLeave error");
        }
      }).catch(function (error) {
        alert(error.message);
      })
    } catch (err) {
      next(err);
    }
  }
  */
  approveLeave(Authorization, ubn, leaveId, role) {
    try {
      if (role == "substitute") {
        const URL_APPROVELEAVESUB = "https://us-central1-teddybear-dev.cloudfunctions.net/api/message/approveLeaveSub";
        const body = {
          ubn: ubn,
          leaveId: leaveId
        };
        fetch(URL_APPROVELEAVESUB, {
          method: 'post',
          headers: {
            "Authorization": Authorization,
            "Content-Type": "application/json"
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
        }).then(res => {
          if (res.ok) {
            let loading = this.state.loading_button;
            let finish = this.state.finish_button;
            loading[leaveId] = false;
            finish[leaveId] = true;
            this.setState({
              loading_button: loading,
              finish_button: finish
            });
          }

          return res.json();
        }).then(result => {
          if (result) {} else {
            alert("approveLeave error");
          }
        });
      } else if (role == "supervisor") {
        const URL_APPROVELEAVESUPER = "https://us-central1-teddybear-dev.cloudfunctions.net/api/message/approveLeaveSuper";
        const body = {
          ubn: ubn,
          leaveId: leaveId
        };
        fetch(URL_APPROVELEAVESUPER, {
          method: 'post',
          headers: {
            "Authorization": Authorization,
            "Content-Type": "application/json"
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(body)
        }).then(res => {
          if (res.ok) {
            let loading = this.state.loading_button;
            let finish = this.state.finish_button;
            loading[leaveId] = false;
            finish[leaveId] = true;
            this.setState({
              loading_button: loading,
              finish_button: finish
            });
          }

          return res.json();
        }).then(result => {
          if (result) {} else {
            alert("approveLeave error");
          }
        });
      }
    } catch (err) {
      next(err);
    }
  }

  updateLeave(Authorization, ubn, leaveId, role, rejectReason) {
    try {
      const URL_UPDATELEAVE = "https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/update";
      var values = {
        ubn: ubn,
        leaveId: leaveId,
        rejectReason: rejectReason
      };

      if (role == "substitute") {
        values.status = "拒絕 (代理人)";
      } else if (role == "supervisor") {
        values.status = "拒絕 (主管)";
      }

      fetch(URL_UPDATELEAVE, {
        method: 'post',
        headers: {
          "Authorization": Authorization,
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values)
      }).then(res => {
        if (res.ok) {
          let loading = this.state.loading_button;
          let finish = this.state.finish_button;
          loading[leaveId] = false;
          finish[leaveId] = true;
          this.setState({
            loading_button: loading,
            finish_button: finish
          });
          return res.json();
        }

        throw new Error('updateLeave response was not ok.');
      }).then(result => {
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
        this.getStaff(Authorization, ubn, result.email, messages_self); //this.pushMessage(this.state.userId_self, [messages_self]);
      }).catch(function (error) {
        alert(error.message);
      });
    } catch (err) {
      next(err);
    }
  }

  getStaff(Authorization, ubn, email, messages) {
    try {
      const URL_GETSTAFF = `https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/target?email=${email}&ubn=${ubn}`;
      fetch(URL_GETSTAFF, {
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
        this.pushMessage(result.userId, [messages]);
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
      fetch(URL_PUSHMESSAGE, {
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
      });
    } catch (err) {
      next(err);
    }
  }

  render() {
    const MyLoader = () => __jsx(_loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      loading: this.state.loading
    });

    const columns = [{
      Header: 'id',
      accessor: 'id',
      show: false
    }, {
      Header: '請假者',
      accessor: 'name',
      width: 90
    }, {
      Header: '開始日期',
      accessor: 'startDate',
      width: 90
    }, {
      Header: '結束日期',
      accessor: 'endDate',
      width: 90
    }, {
      Header: '假勤類別',
      accessor: 'leaveType',
      show: false
    }, {
      Header: '代理人',
      accessor: 'substitute',
      show: false
    }, {
      Header: '簽核狀態',
      accessor: 'status',
      width: 90
    }, {
      Header: '請假原因',
      accessor: 'leaveReason',
      show: false
    }, {
      Header: '拒絕原因',
      accessor: 'rejectReason',
      show: false
    }];
    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("script", {
      src: "https://d.line-scdn.net/liff/1.0/sdk.js"
    })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default.a, {
      container: true,
      spacing: 1
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default.a, {
      item: true,
      xs: 12
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default.a, {
      container: true,
      justify: "center",
      spacing: 3
    }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default.a, {
      key: 1,
      item: true
    }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15___default.a, {
      margin: "normal",
      style: {
        minWidth: 150
      }
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
      id: "role-label"
    }, "\u7C3D\u6838\u8EAB\u4EFD"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default.a, {
      labelId: "role-label",
      id: "role",
      value: this.state.role,
      onChange: this.handleRoleChange
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
      value: "substitute"
    }, "\u4EE3\u7406\u4EBA"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
      value: "supervisor"
    }, "\u4E3B\u7BA1")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default.a, {
      key: 2,
      item: true
    }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15___default.a, {
      margin: "normal",
      style: {
        minWidth: 150
      }
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
      id: "status-label"
    }, "\u7C3D\u6838\u72C0\u614B"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default.a, {
      labelId: "status-label",
      id: "status",
      value: this.state.status,
      onChange: this.handleStatusChange
    }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
      value: "not signed"
    }, "\u672A\u7C3D\u6838"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_13___default.a, {
      value: "signed"
    }, "\u5DF2\u7C3D\u6838")))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_17___default.a, {
      key: 3,
      item: true
    }, __jsx("div", null, this.state.data ? __jsx(react_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      LoadingComponent: MyLoader,
      data: this.state.data,
      columns: columns,
      className: "-striped -highlight",
      SubComponent: row => {
        //row.loading = false;
        //this.state.loading_button[row.original.id] = false;
        //alert(row.original.status);
        return __jsx("div", {
          style: {
            "padding-left": "30px",
            "padding-right": "30px",
            "padding-top": "10px",
            "padding-bottom": "10px",
            display: "flex",
            "align-items": "center"
          }
        }, __jsx("div", {
          style: {
            display: "inline-block",
            "margin-right": "2vw"
          }
        }, row.original.rejectReason ? __jsx("div", {
          style: {
            display: "table-cell",
            "vertical-align": "middle"
          }
        }, __jsx("div", null, "\u5047\u52E4\u985E\u5225\uFF1A", row.original.leaveType), __jsx("div", null, "\u8ACB\u5047\u539F\u56E0\uFF1A", row.original.leaveReason), __jsx("div", null, "\u4EE3\u7406\u4EBA\uFF1A", row.original.substitute), __jsx("div", null, "\u62D2\u7D55\u539F\u56E0\uFF1A", row.original.rejectReason)) : __jsx("div", {
          style: {
            display: "table-cell",
            "vertical-align": "middle"
          }
        }, __jsx("div", null, "\u5047\u52E4\u985E\u5225\uFF1A", row.original.leaveType), __jsx("div", null, "\u8ACB\u5047\u539F\u56E0\uFF1A", row.original.leaveReason), __jsx("div", null, "\u4EE3\u7406\u4EBA\uFF1A", row.original.substitute))), __jsx("div", {
          style: {
            display: "inline-block",
            float: "right"
          }
        }, this.state.status == "not signed" && !this.state.finish_button[row.original.id] ? __jsx("div", null, __jsx("div", {
          style: {
            display: "inline",
            "margin-right": "2vw"
          }
        }, __jsx(BUTTON, {
          fontFamily: "Candara",
          variant: "contained",
          color: "secondary",
          disabled: this.state.loading_button[row.original.id],
          onClick: () => {
            if (this.state.role == "substitute") {
              row.original.status = "同意 (代理人)";
            } else if (this.state.role == "supervisor") {
              row.original.status = "同意 (主管)";
            }

            let loading = this.state.loading_button;
            loading[row.original.id] = true;
            this.setState({
              loading_button: loading
            });
            this.approveLeave(this.state.idToken, this.state.ubn, row.original.id, this.state.role);
          }
        }, this.state.loading_button[row.original.id] && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default.a, {
          size: 16
        }), !this.state.loading_button[row.original.id] && '批准')), __jsx("div", {
          style: {
            display: "inline"
          }
        }, __jsx(BUTTON, {
          fontFamily: "Candara",
          variant: "contained",
          color: "secondary",
          disabled: this.state.loading_button[row.original.id],
          onClick: () => {
            var rejectReason = prompt("請輸入拒絕原因", "");

            if (rejectReason != null && rejectReason != "") {
              let loading = this.state.loading_button;
              loading[row.original.id] = true;
              this.setState({
                loading_button: loading
              });
              this.updateLeave(this.state.idToken, this.state.ubn, row.original.id, this.state.role, rejectReason);
              row.original.rejectReason = rejectReason;

              if (this.state.role == "substitute") {
                row.original.status = "拒絕 (代理人)";
              } else if (this.state.role == "supervisor") {
                row.original.status = "拒絕 (主管)";
              }
            }
          }
        }, this.state.loading_button[row.original.id] && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10___default.a, {
          size: 16
        }), !this.state.loading_button[row.original.id] && '拒絕'))) : __jsx("div", null)));
      },
      defaultPageSize: 10,
      pageSizeOptions: [10, 15]
    }) : __jsx(react_table__WEBPACK_IMPORTED_MODULE_4___default.a, {
      LoadingComponent: MyLoader,
      data: leaves,
      columns: columns,
      defaultPageSize: 10,
      pageSizeOptions: [10, 15]
    })))))));
  }

}

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

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

/***/ "hbHv":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormHelperText");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hjAs":
/***/ (function(module, exports) {



/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

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

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });