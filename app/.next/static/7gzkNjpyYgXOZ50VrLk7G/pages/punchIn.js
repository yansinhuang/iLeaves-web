(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"5jIz":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return D}));var a=e("9Jkg"),i=e.n(a),o=e("0iUn"),r=e("sLSF"),u=e("MI3g"),c=e("a7VT"),s=e("Tit0"),l=e("rt45"),d=e("q1tI"),f=e.n(d),h=e("vOnD"),p=e("KYPV"),b=(e("vBfy"),e("vcXL")),v=e.n(b),g=e("Z3vd"),m=e("8Kt/"),y=e.n(m),j=e("vgmO"),w=e.n(j),k=(e("VrOB"),e("YKRf"),e("jkUL")),O=e.n(k),x=(e("Bb0u"),f.a.createElement);function I(){var t=Object(l.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return I=function(){return t},t}function T(){var t=Object(l.a)(["\n  width: 80%;\n  variant: contained;\n"]);return T=function(){return t},t}function C(){var t=Object(l.a)(["\n  width: 60vw;\n  margin: auto;\n"]);return C=function(){return t},t}function F(){var t=Object(l.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return F=function(){return t},t}function A(){var t=Object(l.a)(["\n  background: #F7F9FA;\n  height: 90vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return A=function(){return t},t}function z(){var t=Object(l.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return z=function(){return t},t}function L(){var t=Object(l.a)(["\n  margin: 5.5em auto;\n  width: 80vw;\n  height: 64vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return L=function(){return t},t}function P(){var t=Object(l.a)(["\n  display: table;\n  margin: 0 auto;\n"]);return P=function(){return t},t}e("5Buo");e("ubkq");var _=w.a.liff,E=h.a.div(P()),B=h.a.div(L()),S=(h.a.h2(z()),h.a.div(A()),Object(h.a)(p.Form)(F()),Object(h.a)(p.Field)(C()),Object(h.a)(g.a)(T())),D=(h.a.button(I()),function(t){function n(t){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(c.a)(n).call(this,t))).state={userId:null,latitude:null,longitude:null},e}return Object(s.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.liffInit(),this.getLocation()}},{key:"liffInit",value:function(){var t=this;try{_.init((function(n){var e=n.context.userId,a=_.getAccessToken(),o={userId:e};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:i()(o)}).then((function(t){return t.text()})).then((function(n){n?(t.setState({userId:e}),t.lineAuth(e,a)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),w.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"lineAuth",value:function(t,n){var e=this;try{var a={userId:t,accessToken:n};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:i()(a)}).then((function(t){return t.json()})).then((function(t){if(t){var n=t.staff.ubn,a=(t.staff.department,t.staff.email),i=t.token.idToken;e.setState({Authorization:i,ubn:n,email:a})}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(o){next(o)}}},{key:"getLocation",value:function(){try{alert("getLocation"),navigator.geolocation.getCurrentPosition((function(t){alert(t.coords.latitude),alert(t.coords.longitude),this.setState({letitude:t.coords.latitude,longitude:t.coords.longitude}),alert("end!!")}))}catch(t){alert(t),next(t)}}},{key:"punchIn",value:function(){try{v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/punch/create",{method:"post",headers:{Authorization:this.state.Authorization,ubn:this.state.ubn,"Content-Type":"application/json"},body:{latitude:this.state.latitude,longitude:this.state.longitude,type:"in",email:this.state.email}}).then((function(t){return t.text()})).then((function(t){t?alert("punch in success"):alert("punch error")})).catch((function(t){alert(t.message)}))}catch(t){next(t)}}},{key:"render",value:function(){var t=this;return x(B,null,x(y.a,null,x("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),x("body",{style:{background:"#34495E"}},x(B,null,this.state.email?x(S,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:!this.state.latitude|!this.state.longitude,onClick:function(){t.punchIn()}},"\u7c3d\u5230"):x(E,null,x(O.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),n}(d.Component))},tPI5:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/punchIn",function(){return e("5jIz")}])}},[["tPI5",1,0]]]);