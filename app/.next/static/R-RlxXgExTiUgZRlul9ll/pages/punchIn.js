(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2vqT":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCurrentPosition=function(n){var t=o((0,e.useState)(),2),r=t[0],i=t[1],u=o((0,e.useState)(),2),a=u[0],c=u[1];return(0,e.useEffect)((function(){var t=!1;return navigator.geolocation.getCurrentPosition((function(n){t||i(n)}),(function(n){t||c(n)}),n),function(){t=!0}}),[n]),[r,a]};var e=r("q1tI");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},"5Ljo":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useCurrentPosition",{enumerable:!0,get:function(){return e.useCurrentPosition}}),Object.defineProperty(t,"useWatchPosition",{enumerable:!0,get:function(){return o.useWatchPosition}});var e=r("2vqT"),o=r("7F5W")},"5jIz":function(n,t,r){"use strict";r.r(t);r("doui");var e=r("rt45"),o=r("q1tI"),i=r.n(o),u=r("vOnD"),a=r("KYPV"),c=(r("vBfy"),r("vcXL"),r("Z3vd")),f=(r("8Kt/"),r("vgmO")),l=r.n(f);r("VrOB"),r("YKRf"),r("jkUL"),r("Bb0u"),r("5Ljo"),i.a.createElement;function s(){var n=Object(e.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return s=function(){return n},n}function v(){var n=Object(e.a)(["\n  width: 80%;\n  variant: contained;\n"]);return v=function(){return n},n}function d(){var n=Object(e.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return d=function(){return n},n}function p(){var n=Object(e.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return p=function(){return n},n}function b(){var n=Object(e.a)(["\n  background: #F7F9FA;\n  height: 90vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return b=function(){return n},n}function y(){var n=Object(e.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return y=function(){return n},n}function h(){var n=Object(e.a)(["\n  margin: 5.5em auto;\n  width: 80vw;\n  height: 64vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return h=function(){return n},n}function g(){var n=Object(e.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return g=function(){return n},n}r("5Buo");r("ubkq"),l.a.liff,u.a.div(g()),u.a.div(h()),u.a.h2(y()),u.a.div(b()),Object(u.a)(a.Form)(p()),Object(u.a)(a.Field)(d()),Object(u.a)(c.a)(v()),u.a.button(s())},"7F5W":function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useWatchPosition=function(n){var t=o((0,e.useState)(null),2),r=t[0],i=t[1],u=o((0,e.useState)(null),2),a=u[0],c=u[1];return(0,e.useEffect)((function(){var t=navigator.geolocation.watchPosition(i,c,n);return function(){return navigator.geolocation.clearWatch(t)}}),[n]),[r,a]};var e=r("q1tI");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=[],e=!0,o=!1,i=void 0;try{for(var u,a=n[Symbol.iterator]();!(e=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return r}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},Rp86:function(n,t,r){r("bBy9"),r("FlQf"),n.exports=r("fXsU")},XXOK:function(n,t,r){n.exports=r("Rp86")},doui:function(n,t,r){"use strict";var e=r("p0XB"),o=r.n(e);var i=r("XXOK"),u=r.n(i),a=r("yLu3"),c=r.n(a);function f(n,t){return function(n){if(o()(n))return n}(n)||function(n,t){if(c()(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n)){var r=[],e=!0,o=!1,i=void 0;try{for(var a,f=u()(n);!(e=(a=f.next()).done)&&(r.push(a.value),!t||r.length!==t);e=!0);}catch(l){o=!0,i=l}finally{try{e||null==f.return||f.return()}finally{if(o)throw i}}return r}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"a",(function(){return f}))},fXsU:function(n,t,r){var e=r("5K7Z"),o=r("fNZA");n.exports=r("WEpk").getIterator=function(n){var t=o(n);if("function"!=typeof t)throw TypeError(n+" is not iterable!");return e(t.call(n))}},tPI5:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return r("5jIz")}])}},[["tPI5",1,0]]]);