(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"5jIz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return J}));var r=n("9Jkg"),o=n.n(r),a=n("0iUn"),i=n("sLSF"),c=n("MI3g"),u=n("a7VT"),s=n("Tit0"),l=n("rt45"),h=n("q1tI"),f=n.n(h),d=n("vOnD"),p=n("KYPV"),v=(n("vBfy"),n("vcXL")),y=n.n(v),g=n("Z3vd"),m=n("8Kt/"),w=n.n(m),b=n("vgmO"),x=n.n(b),j=(n("VrOB"),n("YKRf"),n("jkUL")),L=n.n(j),k=(n("Bb0u"),n("s3JR")),E=n.n(k),O=f.a.createElement;function P(){var t=Object(l.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return P=function(){return t},t}function _(){var t=Object(l.a)(["\n  display: flex;\n  variant: contained;\n  width: 100%;\n"]);return _=function(){return t},t}function I(){var t=Object(l.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return I=function(){return t},t}function T(){var t=Object(l.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return T=function(){return t},t}function S(){var t=Object(l.a)(["\n  display: flex;\n  height: 100%;\n  padding: 15px;\n\n  background-color: #61a0f8;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return t},t}function A(){var t=Object(l.a)(["\n  display: flex;\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n"]);return A=function(){return t},t}function F(){var t=Object(l.a)(["\n  display: flex;  \n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n"]);return F=function(){return t},t}function C(){var t=Object(l.a)(["\n  flex: 1;\n  background-color: #f08bc3;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return t},t}function z(){var t=Object(l.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return z=function(){return t},t}n("5Buo");n("ubkq");E.a.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s"),E.a.setLanguage("zh-tw");var N=x.a.liff,R=(d.a.div(z()),d.a.div(C())),G=d.a.h1(F()),K=d.a.h5(A()),U=d.a.div(S()),D=(Object(d.a)(p.Form)(T()),Object(d.a)(p.Field)(I()),Object(d.a)(g.a)(_())),J=(d.a.button(P()),function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={userId:null,latitude:null,longitude:null},n}return Object(s.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.liffInit(),this.getLocation(),setInterval((function(){t.setState({curTime:(new Date).toLocaleTimeString("zh-TW")})}),1e3)}},{key:"liffInit",value:function(){var t=this;try{N.init((function(e){var n=e.context.userId,r=N.getAccessToken(),a={userId:n};y()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:o()(a)}).then((function(t){return t.text()})).then((function(e){e?(t.setState({userId:n}),t.lineAuth(n,r)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),x.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(e){next(e)}}},{key:"lineAuth",value:function(t,e){var n=this;try{var r={userId:t,accessToken:e};y()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:o()(r)}).then((function(t){return t.json()})).then((function(t){if(t){var e=t.staff.ubn,r=(t.staff.department,t.staff.email),o=t.token.idToken;n.setState({Authorization:o,ubn:e,email:r}),n.getPunch()}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(a){next(a)}}},{key:"getLocation",value:function(){try{var t=this;navigator.geolocation.getCurrentPosition((function(e){t.setState({latitude:e.coords.latitude,longitude:e.coords.longitude}),E.a.fromLatLng(e.coords.latitude,e.coords.longitude).then((function(e){var n=e.results[0].formatted_address;t.setState({address:n})}),(function(t){next(t)}))}),(function(t){return alert(t.message)}))}catch(e){alert(e),next(e)}}},{key:"getPunch",value:function(){var t=this;try{var e="https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/getToday?ubn=".concat(this.state.ubn,"&query=email&value=").concat(this.state.email);y()(e,{method:"get",headers:{Authorization:this.state.Authorization}}).then((function(t){return t.json()})).then((function(e){t.setState({punch:e}),0==e.length||(1==e.length|2==e.length?alert("\u4eca\u65e5\u5df2\u7c3d\u5230"):alert("error: too much punch data in a day"))})).catch((function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"createPunch",value:function(){try{this.setState({punched:!0});y()("https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create",{method:"post",headers:{Authorization:this.state.Authorization,ubn:this.state.ubn,"Content-Type":"application/json"},body:o()({latitude:this.state.latitude,longitude:this.state.longitude,address:this.state.address,type:"\u7c3d\u5230",email:this.state.email})}).then((function(t){return t.text()})).then((function(t){t?alert("\u7c3d\u5230\u6210\u529f"):alert("punch error")})).catch((function(t){alert(t.message)}))}catch(t){next(t)}}},{key:"render",value:function(){var t=this;return O("div",null,O(w.a,null,O("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),O("body",{style:{background:"#34495E",display:"flex",height:"100%",width:"100%"}},O(U,null,this.state.email&&this.state.punch&&this.state.address?O("div",null,O(R,null,O(G,null," ",this.state.curTime," ")),O(R,null,O(K,null,"\u73fe\u5728\u4f4d\u7f6e\uff1a ",this.state.address)),O(R,null,O(D,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:!(this.state.latitude&&this.state.longitude&&this.state.address&&0==this.state.punch.length&&!this.state.punched),onClick:function(){t.createPunch()}},"\u7c3d\u5230"))):O(R,null,O(L.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),e}(h.Component))},ls82:function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r=l;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return I()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",d="completed",p={};function v(){}function y(){}function g(){}var m={};m[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(_([])));b&&b!==n&&r.call(b,a)&&(m=b);var x=g.prototype=v.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(n,o){function a(){return new Promise((function(e,a){!function e(n,o,a,i){var c=s(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(n,o,e,a)}))}return e=e?e.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o){var a=new L(u(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},s3JR:function(t,e,n){"use strict";var r=n("ls82");function o(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function c(t){o(i,r,a,c,u,"next",t)}function u(t){o(i,r,a,c,u,"throw",t)}c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=!1,c=null,u="en",s=null,l="https://maps.google.com/maps/api/geocode/json";function h(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i&&(e?console.warn(t):console.log(t))}function f(t){return d.apply(this,arguments)}function d(){return(d=a(r.mark((function t(e){var n,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).catch((function(){return Promise.reject(new Error("Error fetching data"))}));case 2:return n=t.sent,t.next=5,n.json().catch((function(){return h("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))}));case 5:if("OK"!==(o=t.sent).status){t.next=9;break}return h(o),t.abrupt("return",o);case 9:return h("".concat(o.error_message,".\nServer returned status code ").concat(o.status),!0),t.abrupt("return",Promise.reject(new Error("".concat(o.error_message,".\nServer returned status code ").concat(o.status))));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var p={setApiKey:function(t){c=t},setLanguage:function(t){u=t},setRegion:function(t){s=t},enableDebug:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];i=t},fromLatLng:function(t,e,n,o,i){return a(r.mark((function a(){var d,p;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t&&e){r.next=3;break}return h("Provided coordinates are invalid",!0),r.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return d="".concat(t,",").concat(e),p="".concat(l,"?latlng=").concat(encodeURIComponent(d)),(n||c)&&(p+="&key=".concat(c=n||c)),(o||u)&&(p+="&language=".concat(u=o||u)),(i||s)&&(s=i||s,p+="&region=".concat(encodeURIComponent(s))),r.abrupt("return",f(p));case 9:case"end":return r.stop()}}),a)})))()},fromAddress:function(t,e,n,o){return a(r.mark((function a(){var i;return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return h("Provided address is invalid",!0),r.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return i="".concat(l,"?address=").concat(encodeURIComponent(t)),(e||c)&&(i+="&key=".concat(c=e||c)),(n||u)&&(i+="&language=".concat(u=n||u)),(o||s)&&(s=o||s,i+="&region=".concat(encodeURIComponent(s))),r.abrupt("return",f(i));case 8:case"end":return r.stop()}}),a)})))()}};e.default=p},tPI5:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return n("5jIz")}])}},[["tPI5",1,0]]]);