(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2vqT":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useCurrentPosition=function(t){var n=i((0,r.useState)(),2),e=n[0],o=n[1],a=i((0,r.useState)(),2),u=a[0],c=a[1];return(0,r.useEffect)((function(){var n=!1;return navigator.geolocation.getCurrentPosition((function(t){n||o(t)}),(function(t){n||c(t)}),t),function(){n=!0}}),[t]),[e,u]};var r=e("q1tI");function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},"5Ljo":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useCurrentPosition",{enumerable:!0,get:function(){return r.useCurrentPosition}}),Object.defineProperty(n,"useWatchPosition",{enumerable:!0,get:function(){return i.useWatchPosition}});var r=e("2vqT"),i=e("7F5W")},"5jIz":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return B}));var r=e("doui"),i=e("9Jkg"),o=e.n(i),a=e("0iUn"),u=e("sLSF"),c=e("MI3g"),s=e("a7VT"),l=e("Tit0"),f=e("rt45"),d=e("q1tI"),h=e.n(d),v=e("vOnD"),p=e("KYPV"),y=(e("vBfy"),e("vcXL")),b=e.n(y),g=e("Z3vd"),m=e("8Kt/"),j=e.n(m),w=e("vgmO"),O=e.n(w),x=(e("VrOB"),e("YKRf"),e("jkUL")),I=e.n(x),k=(e("Bb0u"),e("5Ljo")),P=h.a.createElement;function T(){var t=Object(f.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return T=function(){return t},t}function A(){var t=Object(f.a)(["\n  width: 80%;\n  variant: contained;\n"]);return A=function(){return t},t}function C(){var t=Object(f.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return C=function(){return t},t}function F(){var t=Object(f.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return F=function(){return t},t}function E(){var t=Object(f.a)(["\n  background: #F7F9FA;\n  height: 90vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return E=function(){return t},t}function _(){var t=Object(f.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return _=function(){return t},t}function S(){var t=Object(f.a)(["\n  margin: 5.5em auto;\n  width: 80vw;\n  height: 64vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return S=function(){return t},t}function X(){var t=Object(f.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return X=function(){return t},t}e("5Buo");e("ubkq");var L=O.a.liff,W=v.a.div(X()),q=v.a.div(S()),z=(v.a.h2(_()),v.a.div(E()),Object(v.a)(p.Form)(F()),Object(v.a)(p.Field)(C()),Object(v.a)(g.a)(A())),B=(v.a.button(T()),function(t){function n(t){var e;return Object(a.a)(this,n),(e=Object(c.a)(this,Object(s.a)(n).call(this,t))).state={substitutes:[],userId:null},e}return Object(l.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.liffInit(),this.getLocation}},{key:"liffInit",value:function(){var t=this;try{L.init((function(n){var e=n.context.userId,r=L.getAccessToken(),i={userId:e};b()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:o()(i)}).then((function(t){return t.text()})).then((function(n){n?(t.setState({userId:e}),t.lineAuth(e,r)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),O.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"lineAuth",value:function(t,n){var e=this;try{var r={userId:t,accessToken:n};b()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:o()(r)}).then((function(t){return t.json()})).then((function(t){if(t){var n=t.staff.ubn,r=(t.staff.department,t.staff.email),i=t.token.idToken;e.setState({Authorization:i,ubn:n,email:r})}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(i){next(i)}}},{key:"getLocation",value:function(){try{var t=Object(k.useCurrentPosition)(),n=Object(r.a)(t,2),e=n[0],i=n[1];if(!e&&!i)return"Waiting";if(i)return i.message;this.setState({latitude:e.coords.latitude,longitude:e.coords.longitude})}catch(o){next(o)}}},{key:"punchIn",value:function(){try{b()("https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create",{method:"post",headers:{Authorization:this.state.Authorization,ubn:this.state.ubn,"Content-Type":"application/json"},body:{latitude:this.state.latitude,longitude:this.state.longitude,type:"in",email:this.state.email}}).then((function(t){return t.text()})).then((function(t){t?alert("punch in success"):alert("punch error")})).catch((function(t){alert(t.message)}))}catch(t){next(t)}}},{key:"render",value:function(){var t=this;return P(q,null,P(j.a,null,P("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),P("body",{style:{background:"#34495E"}},P(q,null,this.state.email?P(z,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:!this.state.latitude|!this.state.longitude,onClick:function(){t.punchIn()}},"\u7c3d\u5230"):P(W,null,P(I.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),n}(d.Component))},"7F5W":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useWatchPosition=function(t){var n=i((0,r.useState)(null),2),e=n[0],o=n[1],a=i((0,r.useState)(null),2),u=a[0],c=a[1];return(0,r.useEffect)((function(){var n=navigator.geolocation.watchPosition(o,c,t);return function(){return navigator.geolocation.clearWatch(n)}}),[t]),[e,u]};var r=e("q1tI");function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},Rp86:function(t,n,e){e("bBy9"),e("FlQf"),t.exports=e("fXsU")},XXOK:function(t,n,e){t.exports=e("Rp86")},doui:function(t,n,e){"use strict";var r=e("p0XB"),i=e.n(r);var o=e("XXOK"),a=e.n(o),u=e("yLu3"),c=e.n(u);function s(t,n){return function(t){if(i()(t))return t}(t)||function(t,n){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var u,s=a()(t);!(r=(u=s.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return e}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"a",(function(){return s}))},fXsU:function(t,n,e){var r=e("5K7Z"),i=e("fNZA");t.exports=e("WEpk").getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},tPI5:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return e("5jIz")}])}},[["tPI5",1,0]]]);