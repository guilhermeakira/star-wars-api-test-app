(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a.p+"static/media/luke-skywalker.738fc480.png"},50:function(e,t,a){e.exports=a.p+"static/media/darth-vader.3e06b3a8.png"},65:function(e,t,a){e.exports=a(80)},70:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n,r,c,o=a(0),i=a.n(o),l=a(21),u=a.n(l),s=(a(70),a(35)),m=a(6),b=a(103),p=a(18),f=a(23),E=a(24),h=a(96),d=a(105),v=a(99),j=a(97),O={welcomeText:"Welcome to ",appName:"test-app",frontendChallenge:"FRONTEND CHALLENGE",buttonLabel:"S t a r t"},g=a(36),x=a.n(g),F=a(48),w=a(29),y=a(49),C=a(50),k="Luke Skywalker",T="Darth Vader",H=(n={},Object(w.a)(n,k,"primary"),Object(w.a)(n,T,"secondary"),n),N=(r={},Object(w.a)(r,k,y),Object(w.a)(r,T,C),r);!function(e){e[e.FETCHING=0]="FETCHING",e[e.FETCHED=1]="FETCHED",e[e.IDLE=2]="IDLE"}(c||(c={}));var S=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(o.useState)(c.IDLE),n=Object(p.a)(a,2),r=n[0],i=n[1],l=Object(o.useState)(t),u=Object(p.a)(l,2),s=u[0],m=u[1];return Object(o.useEffect)((function(){e&&function(){var e=Object(F.a)(x.a.mark((function e(){var t,a,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(c.FETCHING),t=fetch("https://swapi.dev/api/people/1/",{method:"GET"}),a=fetch("https://swapi.dev/api/people/4/",{method:"GET"}),e.next=5,Promise.race([t,a]);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,m(r.name),i(c.FETCHED);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e]),{status:r,masterName:s}},D=i.a.createContext({master:"",setCurrentMaster:function(e){}});function M(){var e=Object(f.a)(["\n  padding: ",";\n  color: ",";\n  background-color: ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return M=function(){return e},e}var I=Object(E.a)(h.a)(M(),(function(e){return e.theme.spacing(2,7)}),(function(e){return e.theme.palette.common.white}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.palette.text.primary})),L=function(){var e=Object(j.a)(),t=Object(o.useState)(!1),a=Object(p.a)(t,2),n=a[0],r=a[1],l=Object(o.useContext)(D).setCurrentMaster,u=S(n),s=u.status,b=u.masterName,f=Object(m.f)();return Object(o.useEffect)((function(){b&&(l(b),f.push("/result"))}),[f,b,l]),i.a.createElement(d.a,{display:"flex",flexDirection:"column",alignItems:"center"},i.a.createElement(d.a,{mt:26,mb:1},i.a.createElement(v.a,{color:"textPrimary",variant:"h1"},O.welcomeText,i.a.createElement("b",null,O.appName))),i.a.createElement(v.a,{color:"textPrimary",variant:"subtitle2"},O.frontendChallenge),i.a.createElement(d.a,{mt:20},i.a.createElement(I,{disableElevation:!0,disabled:s===c.FETCHING,onClick:function(){return r(!0)},variant:"contained",theme:e},i.a.createElement(v.a,{variant:"button"},O.buttonLabel))))},G=a(56),B=a(108),W=a(107),A=a(101),P=a(102),z=a(98),J=a(54),R=a.n(J),V=a(100),Y={back:"back",buttonLabel:"choose your path again, Padawan",yourMaster:"Your master is "};function $(){var e=Object(f.a)(["\n  height: ",";\n  width: ",";\n"]);return $=function(){return e},e}function q(){var e=Object(f.a)(["\n  padding: ",";\n  text-transform: none;\n"]);return q=function(){return e},e}function K(){var e=Object(f.a)(["\n  ","\n"]);return K=function(){return e},e}var Q=Object(E.a)(B.a)(K(),z.a),U=Object(E.a)(h.a)(q(),(function(e){return e.theme.spacing(2,4)})),X=Object(E.a)((function(e){e.isMobile;var t=Object(G.a)(e,["isMobile"]);return i.a.createElement(W.a,t)}))($(),(function(e){return e.isMobile?"302px":"380px"}),(function(e){return e.isMobile?"302px":"380px"})),Z=function(){var e=Object(j.a)(),t=Object(o.useState)(!1),a=Object(p.a)(t,2),n=a[0],r=a[1],l=Object(o.useContext)(D).master,u=S(n,l),s=u.status,m=u.masterName,b=H[m],f=Object(V.a)("(max-width:800px)");Object(o.useEffect)((function(){s===c.FETCHED&&r(!1)}),[s]);var E=i.a.createElement(U,{onClick:function(){return r(!0)},disabled:s===c.FETCHING,variant:"contained",color:b,theme:e,disableElevation:!0},i.a.createElement(v.a,null,i.a.createElement("b",null,Y.buttonLabel)));return i.a.createElement(d.a,{height:"100%",minHeight:"100vh",bgcolor:"".concat(b,".contrastText")},i.a.createElement(Q,{elevation:0,color:"transparent"},i.a.createElement(A.a,null,i.a.createElement(P.a,{color:b,href:"/"},i.a.createElement(R.a,null)),i.a.createElement(v.a,{color:b},Y.back))),i.a.createElement(d.a,{display:"flex",flexDirection:"column",alignItems:"center"},f?null:i.a.createElement(d.a,{pt:22},E),i.a.createElement(d.a,{pt:f?26:9},i.a.createElement(X,{isMobile:f,alt:m,src:N[m]})),i.a.createElement(d.a,{p:f?4:5},i.a.createElement(v.a,{color:b,variant:"subtitle1"},Y.yourMaster,i.a.createElement("b",null,m))),f?i.a.createElement(d.a,{py:4},E):null))},_=a(55),ee=Object(_.a)({palette:{primary:{main:"#2A2A2A",contrastText:"#FBFE63"},secondary:{main:"#FFFFFF",contrastText:"#2B2B2B"},text:{primary:"#2C97D1"},common:{black:"#000000",white:"#FFFFFF"}},shape:{borderRadius:10},typography:{fontFamily:["Montserrat"].join(","),h1:{fontSize:"4.5rem",fontWeight:"normal","@media (max-width:900px)":{fontSize:"1.5rem"}},subtitle1:{textAlign:"center",fontSize:"2.25em",lineHeight:"1.25em"},subtitle2:{fontWeight:"normal",letterSpacing:"0.35em",lineHeight:"1.25em"},button:{fontSize:"1.125rem",lineHeight:"1.25em",fontWeight:"bold"}}}),te=function(){var e=i.a.useState(""),t=Object(p.a)(e,2),a=t[0],n=t[1];return{master:a,setCurrentMaster:i.a.useCallback((function(e){n(e)}),[])}};var ae=function(){var e=te();return i.a.createElement(b.a,{theme:ee},i.a.createElement(D.Provider,{value:e},i.a.createElement(s.a,{basename:"/star-wars-api-test-app"},i.a.createElement(m.c,null,i.a.createElement(m.a,{path:"/result"},i.a.createElement(Z,null)),i.a.createElement(m.a,{path:"/"},i.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.55ad4532.chunk.js.map