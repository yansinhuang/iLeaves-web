(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"5jIz":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return q}));var a=e("9Jkg"),i=e.n(a),o=e("0iUn"),r=e("sLSF"),u=e("MI3g"),c=e("a7VT"),s=e("Tit0"),l=e("rt45"),h=e("q1tI"),d=e.n(h),f=e("vOnD"),p=e("KYPV"),v=(e("vBfy"),e("vcXL")),b=e.n(v),g=e("Z3vd"),m=e("8Kt/"),y=e.n(m),j=e("vgmO"),k=e.n(j),w=(e("VrOB"),e("YKRf"),e("jkUL")),O=e.n(w),x=(e("Bb0u"),d.a.createElement);function I(){var t=Object(l.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return I=function(){return t},t}function A(){var t=Object(l.a)(["\n  width: 80%;\n  variant: contained;\n"]);return A=function(){return t},t}function T(){var t=Object(l.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return T=function(){return t},t}function C(){var t=Object(l.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return C=function(){return t},t}function F(){var t=Object(l.a)(["\n  background: #F7F9FA;\n  height: 90vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return F=function(){return t},t}function P(){var t=Object(l.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return P=function(){return t},t}function z(){var t=Object(l.a)(["\n  margin: 5.5em auto;\n  width: 80vw;\n  height: 64vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return z=function(){return t},t}function _(){var t=Object(l.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return _=function(){return t},t}e("5Buo");e("ubkq");var E=k.a.liff,L=f.a.div(_()),S=f.a.div(z()),B=(f.a.h2(P()),f.a.div(F()),Object(f.a)(p.Form)(C()),Object(f.a)(p.Field)(T()),Object(f.a)(g.a)(A())),q=(f.a.button(I()),function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(c.a)(n).call(this,t))).state={userId:null,latitude:null,longitude:null},e}return Object(s.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.liffInit(),this.getLocation()}},{key:"liffInit",value:function(){var t=this;try{E.init((function(n){var e=n.context.userId,a=E.getAccessToken(),o={userId:e};b()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:i()(o)}).then((function(t){return t.text()})).then((function(n){n?(t.setState({userId:e}),t.lineAuth(e,a)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),k.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"lineAuth",value:function(t,n){var e=this;try{var a={userId:t,accessToken:n};b()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:i()(a)}).then((function(t){return t.json()})).then((function(t){if(t){var n=t.staff.ubn,a=(t.staff.department,t.staff.email),i=t.token.idToken;e.setState({Authorization:i,ubn:n,email:a}),e.getPunch()}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(o){next(o)}}},{key:"getLocation",value:function(){try{var t=this;navigator.geolocation.getCurrentPosition((function(n){t.setState({latitude:n.coords.latitude,longitude:n.coords.longitude})}),(function(t){return alert(t.message)}))}catch(n){alert(n),next(n)}}},{key:"getPunch",value:function(){var t=this;try{var n="https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/get?ubn=".concat(this.state.ubn,"&query=email&value=").concat(this.state.email);b()(n,{method:"get",headers:{Authorization:this.state.Authorization}}).then((function(t){return t.json()})).then((function(n){t.setState({punch:n}),0==n.length||(1==n.length?alert("\u4eca\u65e5\u5df2\u7c3d\u5230"):alert("error: too much punch data in a day"))})).catch((function(t){alert(t.message)}))}catch(e){next(e)}}},{key:"createPunch",value:function(){try{b()("https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create",{method:"post",headers:{Authorization:this.state.Authorization,ubn:this.state.ubn,"Content-Type":"application/json"},body:i()({latitude:this.state.latitude,longitude:this.state.longitude,type:"in",email:this.state.email})}).then((function(t){return t.text()})).then((function(t){t?alert("\u7c3d\u5230\u6210\u529f"):alert("punch error")})).catch((function(t){alert(t.message)}))}catch(t){next(t)}}},{key:"render",value:function(){var t=this;return x(S,null,x(y.a,null,x("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),x("body",{style:{background:"#34495E"}},x(S,null,this.state.email&&this.state.punch?x(B,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:!(this.state.latitude&&this.state.longitude&&0==this.state.punch.length),onClick:function(){t.createPunch()}},"\u7c3d\u5230"):x(L,null,x(O.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),n}(h.Component))},tPI5:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return e("5jIz")}])}},[["tPI5",1,0]]]);