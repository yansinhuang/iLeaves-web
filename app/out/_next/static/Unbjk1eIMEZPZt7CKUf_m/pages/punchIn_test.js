(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2vqT":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCurrentPosition=function(n){var t=o((0,e.useState)(),2),r=t[0],u=t[1],i=o((0,e.useState)(),2),a=i[0],c=i[1];return(0,e.useEffect)((function(){var t=!1;return navigator.geolocation.getCurrentPosition((function(n){t||u(n)}),(function(n){t||c(n)}),n),function(){t=!0}}),[n]),[r,a]};var e=r("q1tI");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(e=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(c){o=!0,u=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw u}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},"5Ljo":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useCurrentPosition",{enumerable:!0,get:function(){return e.useCurrentPosition}}),Object.defineProperty(t,"useWatchPosition",{enumerable:!0,get:function(){return o.useWatchPosition}});var e=r("2vqT"),o=r("7F5W")},"7F5W":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useWatchPosition=function(n){var t=o((0,e.useState)(null),2),r=t[0],u=t[1],i=o((0,e.useState)(null),2),a=i[0],c=i[1];return(0,e.useEffect)((function(){var t=navigator.geolocation.watchPosition(u,c,n);return function(){return navigator.geolocation.clearWatch(t)}}),[n]),[r,a]};var e=r("q1tI");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(e=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(c){o=!0,u=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw u}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},L2E3:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn_test",function(){return r("cZRi")}])},Rp86:function(n,t,r){r("bBy9"),r("FlQf"),n.exports=r("fXsU")},XXOK:function(n,t,r){n.exports=r("Rp86")},cZRi:function(n,t,r){"use strict";r.r(t);var e=r("doui"),o=(r("9Jkg"),r("rt45")),u=r("q1tI"),i=r.n(u),a=r("vOnD"),c=r("KYPV"),f=(r("vBfy"),r("vcXL"),r("Z3vd")),l=r("8Kt/"),s=r.n(l),d=r("vgmO"),v=r.n(d),p=(r("VrOB"),r("YKRf"),r("jkUL"),r("Bb0u"),r("5Ljo")),b=i.a.createElement;function y(){var n=Object(o.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return y=function(){return n},n}function h(){var n=Object(o.a)(["\n  width: 70vw;\n  variant: contained;\n"]);return h=function(){return n},n}function g(){var n=Object(o.a)(["\n  width: 70vw;\n  margin: auto;\n"]);return g=function(){return n},n}function m(){var n=Object(o.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return m=function(){return n},n}function w(){var n=Object(o.a)(["\n  background: #F7F9FA;\n  height: 70vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(o.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return j=function(){return n},n}function O(){var n=Object(o.a)(["\n  display: table;\n  margin: 0 auto;\n\n"]);return O=function(){return n},n}function P(){var n=Object(o.a)(["\n  margin: 5.5em auto;\n  width:100%;\n  height:40vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return P=function(){return n},n}r("5Buo");r("ubkq"),v.a.liff;var x=a.a.div(P());a.a.div(O()),a.a.h2(j()),a.a.div(w()),Object(a.a)(c.Form)(m()),Object(a.a)(c.Field)(g()),Object(a.a)(f.a)(h()),a.a.button(y());t.default=function(){var n=Object(p.useCurrentPosition)(),t=Object(e.a)(n,2),r=t[0],o=t[1];return r||o?o?b("p",null,o.message):b(x,null,b(s.a,null,b("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),b("body",{style:{background:"#34495E"}},b(x,null,b("p",null,"Latitude: ",r.coords.latitude),b("p",null,"Longitude: ",r.coords.longitude)))):b("p",null,"Waiting...")}},doui:function(n,t,r){"use strict";var e=r("p0XB"),o=r.n(e);var u=r("XXOK"),i=r.n(u),a=r("yLu3"),c=r.n(a);function f(n,t){return function(n){if(o()(n))return n}(n)||function(n,t){if(c()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n)){var r=[],e=!0,o=!1,u=void 0;try{for(var a,f=i()(n);!(e=(a=f.next()).done)&&(r.push(a.value),!t||r.length!==t);e=!0);}catch(l){o=!0,u=l}finally{try{e||null==f.return||f.return()}finally{if(o)throw u}}return r}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"a",(function(){return f}))},fXsU:function(n,t,r){var e=r("5K7Z"),o=r("fNZA");n.exports=r("WEpk").getIterator=function(n){var t=o(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return e(t.call(n))}}},[["L2E3",1,0]]]);