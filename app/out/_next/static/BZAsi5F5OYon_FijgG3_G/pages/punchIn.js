(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5jIz":function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return X}));var n=r("9Jkg"),o=r.n(n),a=r("0iUn"),i=r("sLSF"),c=r("MI3g"),u=r("a7VT"),s=r("Tit0"),p=r("rt45"),f=r("q1tI"),l=r.n(f),h=r("vOnD"),d=r("KYPV"),m=(r("vBfy"),r("vcXL")),y=r.n(m),v=r("Z3vd"),g=r("hlFM"),b=r("8Kt/"),w=r.n(b),x=r("vgmO"),j=r.n(x),O=(r("VrOB"),r("YKRf"),r("jkUL")),k=r.n(O),P=(r("Bb0u"),r("s3JR")),L=r.n(P),E=l.a.createElement;function T(){var t=Object(p.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return T=function(){return t},t}function I(){var t=Object(p.a)(["\n  width: 80%;\n  variant: contained;\n"]);return I=function(){return t},t}function A(){var t=Object(p.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return A=function(){return t},t}function S(){var t=Object(p.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return S=function(){return t},t}function _(){var t=Object(p.a)(["\n  background: #F7F9FA;\n  height: 90vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return _=function(){return t},t}function F(){var t=Object(p.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return F=function(){return t},t}function K(){var t=Object(p.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return K=function(){return t},t}function C(){var t=Object(p.a)(["\n  margin: 5.5em auto;\n  width: 80vw;\n  height: 64vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return C=function(){return t},t}function N(){var t=Object(p.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return N=function(){return t},t}r("5Buo");r("ubkq");L.a.setApiKey("AIzaSyC7jUeuFb_ujONIHAG-HKhyXggyd6hvz8s"),L.a.setLanguage("zh-tw");var R=j.a.liff,z=h.a.div(N()),B=h.a.div(C()),G=(h.a.h2(K()),h.a.h5(F())),U=(h.a.div(_()),Object(h.a)(d.Form)(S()),Object(h.a)(d.Field)(A()),Object(h.a)(v.a)(I())),X=(h.a.button(T()),function(t){function e(t){var r;return Object(a.a)(this,e),(r=Object(c.a)(this,Object(u.a)(e).call(this,t))).state={userId:null,latitude:null,longitude:null},r}return Object(s.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.liffInit(),this.getLocation(),setInterval((function(){t.setState({curTime:(new Date).toLocaleTimeString("zh-TW")})}),1e3)}},{key:"liffInit",value:function(){var t=this;try{R.init((function(e){var r=e.context.userId,n=R.getAccessToken(),a={userId:r};y()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:o()(a)}).then((function(t){return t.text()})).then((function(e){e?(t.setState({userId:r}),t.lineAuth(r,n)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),j.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(e){next(e)}}},{key:"lineAuth",value:function(t,e){var r=this;try{var n={userId:t,accessToken:e};y()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:o()(n)}).then((function(t){return t.json()})).then((function(t){if(t){var e=t.staff.ubn,n=(t.staff.department,t.staff.email),o=t.token.idToken;r.setState({Authorization:o,ubn:e,email:n}),r.getPunch()}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(a){next(a)}}},{key:"getLocation",value:function(){try{var t=this;navigator.geolocation.getCurrentPosition((function(e){t.setState({latitude:e.coords.latitude,longitude:e.coords.longitude}),L.a.fromLatLng(e.coords.latitude,e.coords.longitude).then((function(e){var r=e.results[0].formatted_address;t.setState({address:r})}),(function(t){next(t)}))}),(function(t){return alert(t.message)}))}catch(e){alert(e),next(e)}}},{key:"getPunch",value:function(){var t=this;try{var e="https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/getToday?ubn=".concat(this.state.ubn,"&query=email&value=").concat(this.state.email);y()(e,{method:"get",headers:{Authorization:this.state.Authorization}}).then((function(t){return t.json()})).then((function(e){t.setState({punch:e}),0==e.length||(1==e.length|2==e.length?alert("\u4eca\u65e5\u5df2\u7c3d\u5230"):alert("error: too much punch data in a day"))})).catch((function(t){alert(t.message)}))}catch(r){next(r)}}},{key:"createPunch",value:function(){try{this.setState({punched:!0});y()("https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create",{method:"post",headers:{Authorization:this.state.Authorization,ubn:this.state.ubn,"Content-Type":"application/json"},body:o()({latitude:this.state.latitude,longitude:this.state.longitude,address:this.state.address,type:"\u7c3d\u5230",email:this.state.email})}).then((function(t){return t.text()})).then((function(t){t?alert("\u7c3d\u5230\u6210\u529f"):alert("punch error")})).catch((function(t){alert(t.message)}))}catch(t){next(t)}}},{key:"render",value:function(){var t=this;return E(B,null,E(w.a,null,E("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),E("body",{style:{background:"#34495E"}},E(B,null,this.state.email&&this.state.punch&&this.state.address?E(g.a,null,E(g.a,null,E(G,null,"\u73fe\u5728\u6642\u9593\uff1a ",this.state.curTime),E(G,null,"\u73fe\u5728\u4f4d\u7f6e\uff1a ",this.state.address)),E("br",null),E(g.a,null,E(U,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:!(this.state.latitude&&this.state.longitude&&this.state.address&&0==this.state.punch.length&&!this.state.punched),onClick:function(){t.createPunch()}},"\u7c3d\u5230"))):E(z,null,E(k.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),e}(f.Component))},ODXe:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(e,"a",(function(){return n}))},hlFM:function(t,e,r){"use strict";var n=r("KQm4"),o=r("wx14"),a=(r("17x9"),r("2+6g"));var i=function(t,e){return e?Object(a.a)(t,e,{clone:!1}):t};var c=function(t){var e=function(e){var r=t(e);return e.css?Object(o.a)({},i(r,t(Object(o.a)({theme:e.theme},e.css))),{},function(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}(e.css,[t.filterProps])):r};return e.propTypes={},e.filterProps=["css"].concat(Object(n.a)(t.filterProps)),e};var u=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(t){return e.reduce((function(e,r){var n=r(t);return n?i(e,n):e}),{})};return n.propTypes={},n.filterProps=e.reduce((function(t,e){return t.concat(e.filterProps)}),[]),n},s=r("rePB"),p=r("U8pU"),f={xs:0,sm:600,md:960,lg:1280,xl:1920},l={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(f[t],"px)")}};function h(t,e,r){if(Array.isArray(e)){var n=t.theme.breakpoints||l;return e.reduce((function(t,o,a){return t[n.up(n.keys[a])]=r(e[a]),t}),{})}if("object"===Object(p.a)(e)){var o=t.theme.breakpoints||l;return Object.keys(e).reduce((function(t,n){return t[o.up(n)]=r(e[n]),t}),{})}return r(e)}function d(t,e){return e&&"string"===typeof e?e.split(".").reduce((function(t,e){return t&&t[e]?t[e]:null}),t):null}var m=function(t){var e=t.prop,r=t.cssProperty,n=void 0===r?t.prop:r,o=t.themeKey,a=t.transform,i=function(t){if(null==t[e])return null;var r=t[e],i=d(t.theme,o)||{};return h(t,r,(function(t){var e;return"function"===typeof i?e=i(t):Array.isArray(i)?e=i[t]||t:(e=d(i,t)||t,a&&(e=a(e))),!1===n?e:Object(s.a)({},n,e)}))};return i.propTypes={},i.filterProps=[e],i};function y(t){return"number"!==typeof t?t:"".concat(t,"px solid")}var v=u(m({prop:"border",themeKey:"borders",transform:y}),m({prop:"borderTop",themeKey:"borders",transform:y}),m({prop:"borderRight",themeKey:"borders",transform:y}),m({prop:"borderBottom",themeKey:"borders",transform:y}),m({prop:"borderLeft",themeKey:"borders",transform:y}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"})),g=u(m({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"})),b=u(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"})),w=u(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"})),x=u(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),j=m({prop:"boxShadow",themeKey:"shadows"});function O(t){return t<=1?"".concat(100*t,"%"):t}var k=m({prop:"width",transform:O}),P=m({prop:"maxWidth",transform:O}),L=m({prop:"minWidth",transform:O}),E=m({prop:"height",transform:O}),T=m({prop:"maxHeight",transform:O}),I=m({prop:"minHeight",transform:O}),A=(m({prop:"size",cssProperty:"width",transform:O}),m({prop:"size",cssProperty:"height",transform:O}),u(k,P,L,E,T,I)),S=r("ODXe");var _={m:"margin",p:"padding"},F={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},K={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},C=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}((function(t){if(t.length>2){if(!K[t])return[t];t=K[t]}var e=t.split(""),r=Object(S.a)(e,2),n=r[0],o=r[1],a=_[n],i=F[o]||"";return Array.isArray(i)?i.map((function(t){return a+t})):[a+i]})),N=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function R(t,e){return function(r){return t.reduce((function(t,n){return t[n]=function(t,e){if("string"===typeof e)return e;var r=t(Math.abs(e));return e>=0?r:"number"===typeof r?-r:"-".concat(r)}(e,r),t}),{})}}function z(t){var e=function(t){var e=t.spacing||8;return"number"===typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"===typeof e?e:function(){}}(t.theme);return Object.keys(t).map((function(r){if(-1===N.indexOf(r))return null;var n=R(C(r),e),o=t[r];return h(t,o,n)})).reduce(i,{})}z.propTypes={},z.filterProps=N;var B=z,G=u(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"})),U=r("Ff2n"),X=r("q1tI"),D=r.n(X),Y=r("iuhU"),M=r("2mql"),q=r.n(M),H=r("RD7I");function J(t,e){var r={};return Object.keys(t).forEach((function(n){-1===e.indexOf(n)&&(r[n]=t[n])})),r}var W=function(t){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.name,a=Object(U.a)(r,["name"]);var i,c=n,u="function"===typeof e?function(t){return{root:function(r){return e(Object(o.a)({theme:t},r))}}}:{root:e},s=Object(H.a)(u,Object(o.a)({Component:t,name:n||t.displayName,classNamePrefix:c},a));e.filterProps&&(i=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var p=D.a.forwardRef((function(e,r){var n=e.children,a=e.className,c=e.clone,u=e.component,p=Object(U.a)(e,["children","className","clone","component"]),f=s(e),l=Object(Y.a)(f.root,a),h=p;if(i&&(h=J(h,i)),c)return D.a.cloneElement(n,Object(o.a)({className:Object(Y.a)(n.props.className,l)},h));if("function"===typeof n)return n(Object(o.a)({className:l},h));var d=u||t;return D.a.createElement(d,Object(o.a)({ref:r,className:l},h),n)}));return q()(p,t),p}},V=r("cNwE"),Q=function(t){var e=W(t);return function(t,r){return e(t,Object(o.a)({defaultTheme:V.a},r))}},Z=c(u(v,g,b,w,x,j,A,B,G)),$=Q("div")(Z,{name:"MuiBox"});e.a=$},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n=p;return function(o,a){if(n===l)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?h:f,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",l="executing",h="completed",d={};function m(){}function y(){}function v(){}var g={};g[a]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==r&&n.call(w,a)&&(g=w);var x=v.prototype=m.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"===typeof p&&n.call(p,"__await")?Promise.resolve(p.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(p).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o){var a=new O(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},s3JR:function(t,e,r){"use strict";var n=r("ls82");function o(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,u,"next",t)}function u(t){o(i,n,a,c,u,"throw",t)}c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=!1,c=null,u="en",s=null,p="https://maps.google.com/maps/api/geocode/json";function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i&&(e?console.warn(t):console.log(t))}function l(t){return h.apply(this,arguments)}function h(){return(h=a(n.mark((function t(e){var r,o;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).catch((function(){return Promise.reject(new Error("Error fetching data"))}));case 2:return r=t.sent,t.next=5,r.json().catch((function(){return f("Error parsing server response"),Promise.reject(new Error("Error parsing server response"))}));case 5:if("OK"!==(o=t.sent).status){t.next=9;break}return f(o),t.abrupt("return",o);case 9:return f("".concat(o.error_message,".\nServer returned status code ").concat(o.status),!0),t.abrupt("return",Promise.reject(new Error("".concat(o.error_message,".\nServer returned status code ").concat(o.status))));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d={setApiKey:function(t){c=t},setLanguage:function(t){u=t},setRegion:function(t){s=t},enableDebug:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];i=t},fromLatLng:function(t,e,r,o,i){return a(n.mark((function a(){var h,d;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t&&e){n.next=3;break}return f("Provided coordinates are invalid",!0),n.abrupt("return",Promise.reject(new Error("Provided coordinates are invalid")));case 3:return h="".concat(t,",").concat(e),d="".concat(p,"?latlng=").concat(encodeURIComponent(h)),(r||c)&&(d+="&key=".concat(c=r||c)),(o||u)&&(d+="&language=".concat(u=o||u)),(i||s)&&(s=i||s,d+="&region=".concat(encodeURIComponent(s))),n.abrupt("return",l(d));case 9:case"end":return n.stop()}}),a)})))()},fromAddress:function(t,e,r,o){return a(n.mark((function a(){var i;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=3;break}return f("Provided address is invalid",!0),n.abrupt("return",Promise.reject(new Error("Provided address is invalid")));case 3:return i="".concat(p,"?address=").concat(encodeURIComponent(t)),(e||c)&&(i+="&key=".concat(c=e||c)),(r||u)&&(i+="&language=".concat(u=r||u)),(o||s)&&(s=o||s,i+="&region=".concat(encodeURIComponent(s))),n.abrupt("return",l(i));case 8:case"end":return n.stop()}}),a)})))()}};e.default=d},tPI5:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return r("5jIz")}])}},[["tPI5",1,0]]]);