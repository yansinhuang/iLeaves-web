(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3hpq":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signOut",function(){return e("Gwsz")}])},Gwsz:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return J}));var a=e("9Jkg"),i=e.n(a),r=e("0iUn"),o=e("sLSF"),s=e("MI3g"),u=e("a7VT"),c=e("Tit0"),d=e("rt45"),f=e("q1tI"),l=e.n(f),h=e("vOnD"),p=e("KYPV"),b=(e("vBfy"),e("vcXL")),v=e.n(b),g=e("Z3vd"),m=e("8Kt/"),y=e.n(m),w=e("vgmO"),j=e.n(w),O=(e("VrOB"),e("YKRf"),e("jkUL")),x=e.n(O),k=(e("Bb0u"),l.a.createElement);function I(){var t=Object(d.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return I=function(){return t},t}function F(){var t=Object(d.a)(["\n  width: 70vw;\n  variant: contained;\n"]);return F=function(){return t},t}function C(){var t=Object(d.a)(["\n  width: 70vw;\n  margin: auto;\n"]);return C=function(){return t},t}function E(){var t=Object(d.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return E=function(){return t},t}function S(){var t=Object(d.a)(["\n  background: #F7F9FA;\n  height: 70vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return S=function(){return t},t}function T(){var t=Object(d.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return T=function(){return t},t}function M(){var t=Object(d.a)(["\n  display: table;\n  margin: 0 auto;\n\n"]);return M=function(){return t},t}function _(){var t=Object(d.a)(["\n  margin: 5.5em auto;\n  width:100%;\n  height:40vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return _=function(){return t},t}e("5Buo");e("ubkq");var q=j.a.liff,B=h.a.div(_()),z=h.a.div(M()),D=(h.a.h2(T()),h.a.div(S()),Object(h.a)(p.Form)(E()),Object(h.a)(p.Field)(C()),Object(h.a)(g.a)(F())),J=(h.a.button(I()),function(t){function n(t){var e;return Object(r.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this,t))).state={userId:null,isSubmitting:!1,isExist:!1},e}return Object(c.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.liffInit()}},{key:"liffInit",value:function(){var t=this;try{q.init((function(n){var e=n.context.userId,a={userId:e};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:i()(a)}).then((function(t){return t.text()})).then((function(n){t.setState({userId:e}),n&&t.setState({isExist:!0})}))}),(function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"signOut",value:function(t){var n=this;try{this.setState({isSubmitting:!0});var e={userId:t};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/signOut",{method:"post",headers:{"Content-Type":"application/json"},body:i()(e)}).then((function(t){n.setState({isSubmitting:!1});return q.sendMessages([{type:"text",text:"\u767b\u51fa\u6210\u529f"}]),q.closeWindow(),t.json()})).catch((function(t){alert(t.message)}))}catch(a){next(a)}}},{key:"pushMessage",value:function(t,n){try{var e={userId:t,messages:n};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/message/pushMessage",{method:"post",headers:{"Content-Type":"application/json"},body:i()(e)}).then((function(t){if(t.ok)return t.json();throw new Error("pushMessage response was not ok.")})).then((function(t){})).catch((function(t){alert(t.message)}))}catch(a){next(a)}}},{key:"render",value:function(){var t=this;return k(B,null,k(y.a,null,k("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),k("body",{style:{background:"#34495E"}},k(B,null,this.state.userId?this.state.isExist?k(D,{fontFamily:"Candara",variant:"contained",color:"secondary",disabled:this.state.isSubmitting,onClick:function(){t.signOut(t.state.userId)}},"\u767b\u51fa"):k("label",null,"\u5df2\u767b\u51fa"):k(z,null,k(x.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))))}}]),n}(f.Component))}},[["3hpq",1,0]]]);