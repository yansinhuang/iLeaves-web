(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BSEc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var a=n("9Jkg"),o=n.n(a),s=n("0iUn"),r=n("sLSF"),i=n("MI3g"),u=n("a7VT"),c=n("Tit0"),l=n("rt45"),d=n("q1tI"),h=n.n(d),p=n("vOnD"),f=n("KYPV"),y=n("vBfy"),b=n("vcXL"),v=n.n(b),x=n("Z3vd"),m=n("8Kt/"),g=n.n(m),w=n("vgmO"),j=n.n(w),k=(n("VrOB"),n("YKRf"),n("jkUL")),z=n.n(k),I=(n("Bb0u"),h.a.createElement);function S(){var t=Object(l.a)(["\n  color: tomato;\n  border-color: tomato;\n  width: 80%;\n"]);return S=function(){return t},t}function O(){var t=Object(l.a)(["\n  width: 70vw;\n  variant: contained;\n"]);return O=function(){return t},t}function A(){var t=Object(l.a)(["\n  width: 70vw;\n  margin: auto;\n"]);return A=function(){return t},t}function F(){var t=Object(l.a)(["\n  text-align: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n"]);return F=function(){return t},t}function T(){var t=Object(l.a)(["\n  background: #F7F9FA;\n  height: 70vh;\n  width: 80vw;\n  margin: 5em auto;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);\n\n  label {\n    font-family: Candara;\n    color: #1C2833;\n    font-size: 1.2em;\n    font-weight: 400;\n  }\n"]);return T=function(){return t},t}function R(){var t=Object(l.a)(["\n  color: #F8F9F9;\n  font-family: Candara;\n  text-align: center;\n  margin-bottom:-2em;\n"]);return R=function(){return t},t}function E(){var t=Object(l.a)(["\n  display: table;\n  margin: 0 auto;\n\n"]);return E=function(){return t},t}function C(){var t=Object(l.a)(["\n  margin: 5.5em auto;\n  width:100%;\n  height:40vh;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n"]);return C=function(){return t},t}n("5Buo");n("ubkq");var _=j.a.liff,D=p.a.div(C()),B=p.a.div(E()),L=(p.a.h2(R()),p.a.div(T())),M=Object(p.a)(f.Form)(F()),V=Object(p.a)(f.Field)(A()),J=Object(p.a)(x.a)(O()),P=(p.a.button(S()),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(u.a)(e).call(this,t))).state={userId:null,Authorization:null,ubn:null,leaveId:null,leave:null,status:null},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.getQuery(),this.liffInit()}},{key:"getQuery",value:function(){var t=new URLSearchParams(j.a.location.search),e=((t=t.toString().split("&"))[0].split("=")[1],t[1].split("=")[1]);this.setState({leaveId:e})}},{key:"liffInit",value:function(){var t=this;try{_.init((function(e){var n=e.context.userId,a=_.getAccessToken(),s={userId:n};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/checkExist",{method:"post",headers:{"Content-Type":"application/json"},body:o()(s)}).then((function(t){return t.text()})).then((function(e){e?(t.setState({userId:n}),t.lineAuth(n,a)):(alert("\u8acb\u767b\u5165\u4ee5\u67e5\u770b\u5047\u55ae"),j.a.location.replace("https://teddybear-dev.firebaseapp.com/signIn"))}))}),(function(t){alert(t.message)}))}catch(e){next(e)}}},{key:"lineAuth",value:function(t,e){var n=this;try{var a={userId:t,accessToken:e};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/lineAuth",{method:"post",headers:{"Content-Type":"application/json"},body:o()(a)}).then((function(t){return t.json()})).then((function(t){if(t){var e=t.staff.ubn,a=t.token.idToken;n.setState({Authorization:a,ubn:e}),n.checkStatus(a,e,n.state.leaveId)}else alert("lineAuth no result")})).catch((function(t){alert(t.message)}))}catch(s){next(s)}}},{key:"checkStatus",value:function(t,e,n){var a=this;try{var o="https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/target?ubn=".concat(e,"&id=").concat(n);v()(o,{method:"get",headers:{Authorization:t}}).then((function(t){if(t.ok)return t.json();throw new Error("checkStatus response was not ok.")})).then((function(n){"\u540c\u610f (\u4ee3\u7406\u4eba)"!=n.status?a.setState({status:"signed"}):(a.getStaff(t,e,n.email),a.setState({status:"not signed"}))})).catch((function(t){alert(t.message)}))}catch(s){next(s)}}},{key:"getStaff",value:function(t,e,n){var a=this;try{var o="https://us-central1-teddybear-dev.cloudfunctions.net/api/staff/target?email=".concat(n,"&ubn=").concat(e);v()(o,{method:"get",headers:{Authorization:t}}).then((function(t){if(t.ok)return t.json();throw new Error("getStaff response was not ok.")})).then((function(t){a.setState({userId_self:t.userId})}))}catch(s){next(s)}}},{key:"updateLeave",value:function(t){var e=this;try{v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/leave/update",{method:"post",headers:{Authorization:this.state.Authorization,"Content-Type":"application/json"},body:o()(t)}).then((function(t){if(t.ok)return t.json();throw new Error("updateLeave response was not ok.")})).then((function(t){e.setState({leave:t});e.pushMessage(e.state.userId,[{type:"text",text:"\u62d2\u7d55\u6210\u529f"}]);var n=JSON.parse(t.substitute),a={type:"flex",altText:"\u4e3b\u7ba1\u5df2\u62d2\u7d55\u5047\u55ae",contents:{type:"bubble",styles:{},body:{type:"box",layout:"vertical",contents:[{type:"text",text:"\u4e3b\u7ba1",weight:"bold",color:"#1DB446",size:"sm"},{type:"text",text:"\u5df2\u62d2\u7d55\u5047\u55ae",weight:"bold",size:"xxl",margin:"md"},{type:"separator",margin:"xxl"},{type:"box",layout:"vertical",margin:"xxl",spacing:"sm",contents:[{type:"box",layout:"horizontal",contents:[{type:"text",text:"\u958b\u59cb\u65e5\u671f",size:"sm",color:"#555555"},{type:"text",text:t.startDate,size:"sm",color:"#111111",align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"\u7d50\u675f\u65e5\u671f",size:"sm",color:"#555555"},{type:"text",text:t.endDate,size:"sm",color:"#111111",align:"end"}]},{type:"separator",margin:"xxl"},{type:"box",layout:"horizontal",margin:"xxl",contents:[{type:"text",text:"\u5047\u5225",size:"sm",color:"#555555"},{type:"text",text:t.leaveType,size:"sm",color:"#111111",align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"\u8acb\u5047\u539f\u56e0",size:"sm",color:"#555555"},{type:"text",text:t.leaveReason,size:"sm",color:"#111111",align:"end"}]},{type:"box",layout:"horizontal",contents:[{type:"text",text:"\u4ee3\u7406\u4eba",size:"sm",color:"#555555"},{type:"text",text:n.name,size:"sm",color:"#111111",align:"end"}]}]},{type:"separator",margin:"xxl"},{type:"box",layout:"horizontal",margin:"md",contents:[{type:"text",text:"\u7c3d\u6838\u72c0\u614b",size:"xs",color:"#555555"},{type:"text",text:"\u62d2\u7d55(\u4e3b\u7ba1)",color:"#ff0000",size:"xs",align:"end"}]},{type:"box",layout:"horizontal",margin:"md",contents:[{type:"text",text:"\u62d2\u7d55\u539f\u56e0",size:"xs",color:"#555555"},{type:"text",text:t.rejectReason,color:"#111111",size:"xs",align:"end"}]}]}}};e.pushMessage(e.state.userId_self,[a]),_.closeWindow()})).catch((function(t){alert(t.message)}))}catch(n){next(n)}}},{key:"pushMessage",value:function(t,e){try{var n={userId:t,messages:e};v()("https://us-central1-teddybear-dev.cloudfunctions.net/api/message/pushMessage",{method:"post",headers:{"Content-Type":"application/json"},body:o()(n)}).then((function(t){if(t.ok)return t.json();throw new Error("pushMessage response was not ok.")})).then((function(t){})).catch((function(t){alert(t.message)}))}catch(a){next(a)}}},{key:"render",value:function(){var t=this;return I(D,null,I(g.a,null,I("script",{src:"https://d.line-scdn.net/liff/1.0/sdk.js"})),I("body",{style:{background:"#34495E"}},I(D,null,I(f.Formik,{initialValues:{rejectReason:""},validate:function(t){var e={};return t.rejectReason||(e.rejectReason="Required"),e},onSubmit:function(e,n){var a=n.setSubmitting;e.status="\u62d2\u7d55 (\u4e3b\u7ba1)",e.leaveId=t.state.leaveId,e.ubn=t.state.ubn,t.updateLeave(e),a(!1)}},(function(e){var n=e.isSubmitting;e.values,e.setFieldValue;return I(L,null,t.state.userId&&t.state.Authorization&&t.state.ubn&&t.state.leaveId&&"not signed"==t.state.status?I(M,null,I(V,{type:"rejectReason",name:"rejectReason",label:"\u62d2\u7d55\u539f\u56e0",component:y.a}),I("br",null),I("br",null),I(J,{type:"submit",fontFamily:"Candara",variant:"contained",color:"secondary",disabled:n},"\u9001\u51fa")):t.state.userId&&t.state.Authorization&&t.state.ubn&&t.state.leaveId&&"signed"==t.state.status?I(M,null,I("label",null,"\u6b64\u5f35\u5047\u55ae\u5df2\u7c3d\u6838")):I(B,null,I(z.a,{type:"ThreeDots",color:"#f50057",height:80,width:80})))})))))}}]),e}(d.Component))},DFbR:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reject_super",function(){return n("BSEc")}])}},[["DFbR",1,0]]]);