(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"5jIz":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return B}));var r=e("9Jkg"),o=e.n(r),a=e("0iUn"),i=e("sLSF"),c=e("MI3g"),u=e("a7VT"),s=e("Tit0"),l=e("rt45"),f=e("q1tI"),h=e.n(f),d=e("vOnD"),p=e("KYPV"),v=(e("vBfy"),e("vcXL")),g=e.n(v),y=e("Z3vd"),m=e("8Kt/"),b=e.n(m),w=e("vgmO"),x=e.n(w),j=(e("VrOB"),e("YKRf"),e("jkUL")),L=e.n(j),k=(e("Bb0u"),e("s3JR")),E=e.n(k),O=h.a.createElement;function P(){var t=Object(l.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return P=function(){return t},t}function _(){var t=Object(l.a)(["\n  display: flex;\n  variant: contained;\n  width: 100%;\n"]);return _=function(){return t},t}function I(){var t=Object(l.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return I=function(){return t},t}function T(){var t=Object(l.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return T=function(){return t},t}function S(){var t=Object(l.a)(["\n  display: flex;\n  height: 100%;\n  padding: 15px;\n  background:'#34495E';\n  flex-flow: column nowrap;\n  justify-content: center;\n"]);return S=function(){return t},t}function A(){var t=Object(l.a)(["\n  display: flex;\n  height: 100%;\n  padding: 15px;\n  margin: 3px;\n  background-color: #61a0f8;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return t},t}function F(){var t=Object(l.a)(["\n  display: flex;\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n"]);return F=function(){return t},t}function C(){var t=Object(l.a)(["\n  display: flex;  \n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n"]);return C=function(){return t},t}function z(){var t=Object(l.a)(["\n  flex: 1;\n  background-color: #f08bc3;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return z=function(){return t},t}function N(){var t=Object(l.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return N=function(){return t},t}e("5Buo");e("ubkq");E.a.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s"),E.a.setLanguage("zh-tw");var R=x.a.liff,G=(d.a.div(N()),d.a.div(z())),K=d.a.h1(C()),U=d.a.h5(F()),D=d.a.div(A()),J=(d.a.body(S()),Object(d.a)(p.Form)(T()),Object(d.a)(p.Field)(I()),Object(d.a)(y.a)(_())),B=(d.a.button(P()),function(t){function n(t){var e;return Object(a.a)(this,n),(e=Object(c.a)(this,Object(u.a)(n).call(this,t))).state={userId:null,latitude:null,longitude:null},e}return Object(s.a)(n,t),Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.liffInit(),this.getLocation(),setInterval((function(){t.setState({curTime:(new Date).toLocaleTimeString("zh-TW")})}),1e3)}},{key:"liffInit",value:function(){var t=this;try{R.init((function(n){var e=n.context.userId,r=R.getAccessToken(),a={userId:e};g()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:o()(a)}).then((function(t){return t.text()})).then((function(n){n?(t.setState({userId:e}),t.lineAuth(e,r)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),x.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"lineAuth",value:function(t,n){var e=this;try{var r={userId:t,accessToken:n};g()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:o()(r)}).then((function(t){return t.json()})).then((function(t){if(t){var n=t.staff.ubn,r=(t.staff.department,t.staff.email),o=t.token.idToken;e.setState({Authorization:o,ubn:n,email:r}),e.getPunch()}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(a){next(a)}}},{key:"getLocation",value:function(){try{var t=this;navigator.geolocation.getCurrentPosition((function(n){t.setState({latitude:n.coords.latitude,longitude:n.coords.longitude}),E.a.fromLatLng(n.coords.latitude,n.coords.longitude).then((function(n){var e=n.results[0].formatted_address;t.setState({address:e})}),(function(t){next(t)}))}),(function(t){return alert(t.message)}))}catch(n){alert(n),next(n)}}},{key:"getPunch",value:function(){var t=this;try{var n="https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/getToday?ubn=".concat(this.state.ubn,"&query=email&value=").concat(this.state.email);g()(n,{method:"get",headers:{Authorization:this.state.Authorization}}).then((function(t){return t.json()})).then((function(n){t.setState({punch:n}),0==n.length||(1==n.length|2==n.length?alert("\u4eca\u65e5\u5df2\u7c3d\u5230"):alert("error: too much punch data in a day"))})).catch((function(t){alert(t.message)}))}catch(e){next(e)}}},{key:"createPunch",value:function(){try{this.setState({punched:!0});g()("https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create",{method:"post",headers:{Authorization:this.state.Authorization,ubn:this.state.ubn,"Content-Type":"application/json"},body:o()({latitude:this.state.latitude,longitude:this.state.longitude,address:this.state.address,type:"\u7c3d\u5230",email:this.state.email})}).then((function(t){return t.text()})).then((function(t){t?alert("\u7c3d\u5230\u6210\u529f"):alert("punch error")})).catch((function(t){alert(t.message)}))}catch(t){next(t)}}},{key:"render",value:function(){var t=this;return O("div",null,O(b.a,null,O("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),O("body",{style:{background:"#34495E",display:"flex",height:"100%",width:"100%"}},O(D,null,this.state.email&&this.state.punch&&this.state.address?O("div",null,O(G,null,O(K,null," ",this.state.curTime," ")),O(G,null,O(U,null,"\u73fe\u5728\u4f4d\u7f6e\uff1a ",this.state.address)),O(G,null,O(J,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:!(this.state.latitude&&this.state.longitude&&this.state.address&&0==this.state.punch.length&&!this.state.punched),onClick:function(){t.createPunch()}},"\u7c3d\u5230"))):O(G,null,O(L.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),n}(f.Component))},ls82:function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e,r){var o=n&&n.prototype instanceof v?n:v,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,n,e){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return I()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=k(i,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?d:f,u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=d,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function v(){}function g(){}function y(){}var m={};m[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==e&&r.call(w,a)&&(m=w);var x=y.prototype=v.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function L(t){var n;this._invoke=function(e,o){function a(){return new Promise((function(n,a){!function n(e,o,a,i){var c=s(t[e],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):Promise.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,i)}))}i(c.arg)}(e,o,n,a)}))}return n=n?n.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:I}}function I(){return{value:n,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(n,e,r,o){var a=new L(u(n,e,r,o));return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},s3JR:function(t,n,e){"use strict";var r=e("ls82");function o(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var i=t.apply(n,e);function c(t){o(i,r,a,c,u,"next",t)}function u(t){o(i,r,a,c,u,"throw",t)}c(void 0)}))}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=!1,c=null,u="en",s=null,l="https://maps.google.com/maps/api/geocode/json";function f(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i&&(n?console.warn(t):console.log(t))}function h(t){return d.apply(this,arguments)}function d(){return(d=a(r.mark((function t(n){var e,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n).catch((function(){return Promise.reject(new Error("Error fetching data"))}));case 2:return e=t.sent,t.next=5,e.json().catch((function(){return f("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))}));case 5:if("OK"!==(o=t.sent).status){t.next=9;break}return f(o),t.abrupt("return",o);case 9:return f("".concat(o.error_message,".\nServer returned status code ").concat(o.status),!0),t.abrupt("return",Promise.reject(new Error("".concat(o.error_message,".\nServer returned status code ").concat(o.status))));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var p={setApiKey:function(t){c=t},setLanguage:function(t){u=t},setRegion:function(t){s=t},enableDebug:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];i=t},fromLatLng:function(t,n,e,o,i){return a(r.mark((function a(){var d,p;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t&&n){r.next=3;break}return f("Provided coordinates are invalid",!0),r.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return d="".concat(t,",").concat(n),p="".concat(l,"?latlng=").concat(encodeURIComponent(d)),(e||c)&&(p+="&key=".concat(c=e||c)),(o||u)&&(p+="&language=".concat(u=o||u)),(i||s)&&(s=i||s,p+="&region=".concat(encodeURIComponent(s))),r.abrupt("return",h(p));case 9:case"end":return r.stop()}}),a)})))()},fromAddress:function(t,n,e,o){return a(r.mark((function a(){var i;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return f("Provided address is invalid",!0),r.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return i="".concat(l,"?address=").concat(encodeURIComponent(t)),(n||c)&&(i+="&key=".concat(c=n||c)),(e||u)&&(i+="&language=".concat(u=e||u)),(o||s)&&(s=o||s,i+="&region=".concat(encodeURIComponent(s))),r.abrupt("return",h(i));case 8:case"end":return r.stop()}}),a)})))()}};n.default=p},tPI5:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return e("5jIz")}])}},[["tPI5",1,0]]]);