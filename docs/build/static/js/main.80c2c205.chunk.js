(this.webpackJsonpmy_reversi=this.webpackJsonpmy_reversi||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/1.39e885cb.svg"},12:function(e,t,n){e.exports=n.p+"static/media/2.c6fdaaeb.svg"},13:function(e,t,n){e.exports=n(47)},18:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(10),o=n.n(a),c=(n(18),n(2)),s=n(3),l=n(1),b=function(e){var t=e.size,n=e.borderSize,r=Object(l.css)({backgroundColor:"black",borderStyle:"solid",borderWidth:n,borderColor:"black",display:"inline-block",width:t,height:t,position:"relative"});return i.a.createElement("div",r,e.children)},u=n(11),d=n.n(u),f=n(12),v=n.n(f),y=function(e){var t=e.size,n=0===e.stone?d.a:v.a;return-1===e.stone?null:i.a.createElement("img",{style:{display:"inline-block"},src:n,alt:"stone",width:t,height:t})},m=[{x:0,y:-1},{x:1,y:-1},{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:-1,y:0},{x:-1,y:-1}],p=function(e,t,n){var r=e.findIndex((function(e){return e.x===t.x&&e.y===t.y})),i=JSON.parse(JSON.stringify(e));return i[r].stone=n,i},g=function(e,t,n,r){var i,a=e?0:1,o=[],c=Object(s.a)(t);try{for(c.s();!(i=c.n()).done;){var l=i.value,b=S(l,r,n),u=x(l,r,n);if(e?b.match(/^BE+P/):b.match(/^BP+E/)){var d=u.findIndex((function(e){return e.stone===a}));o=o.concat(u.slice(0,d))}}}catch(g){c.e(g)}finally{c.f()}var f,v=JSON.parse(JSON.stringify(n)),y=Object(s.a)(o);try{for(y.s();!(f=y.n()).done;){var m=f.value;v=p(v,m,a)}}catch(g){y.e(g)}finally{y.f()}return v},h=function(e){var t=e.displayMap,n=e.data,r=e.myturn,a=e.size,o=e.borderSize,c=Object(l.css)({backgroundColor:n.next?"red":"green",borderStyle:"solid",borderWidth:o,borderColor:"black",display:"inline-block",width:a,height:a,verticalAlign:"bottom",fontSize:0});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",Object.assign({},c,{onClick:function(){if(console.log("click"),n.next){var i=g(r,m,t,n);e.setDisplayMap(i),e.setMyturn(!r)}}}),i.a.createElement(y,{size:a,stone:e.data.stone})))},E=function(){console.log("render SkipMessage");var e=l.css.keyframes({"0%":{transform:"scale(0.1)",opacity:0,visibility:"visible"},"20%":{transform:"scale(1.2)",opacity:1,visibility:"visible"},"40%":{transform:"scale(1)",opacity:1,visibility:"visible"},"90%":{transform:"scale(1)",opacity:1,visibility:"visible"},"100%":{transform:"scale(0.1)",opacity:0,visibility:"visible"}}),t=Object(l.css)({animation:"".concat(e," 2s"),height:"20%",width:"60%",backgroundColor:"rgb(128,128,128,0.9)",position:"absolute",zIndex:10,top:"40%",left:"20%",textAlign:"center",borderRadius:"5% / 15%",visibility:"hidden"}),n=Object(l.css)({fontSize:"10vh",opacity:1,display:"block"});return i.a.createElement("div",t,i.a.createElement("span",n,"SKIP"))},O=function(e){console.log("render EndMessage");var t,n=e.count,r=l.css.keyframes({"0%":{transform:"scale(0.1)",opacity:0,visibility:"visible"},"20%":{transform:"scale(1.2)",opacity:1,visibility:"visible"},"40%":{transform:"scale(1)",opacity:1,visibility:"visible"},"100%":{transform:"scale(1)",opacity:1,visibility:"visible"}}),a=Object(l.css)({animation:"".concat(r," 2s"),height:"20%",width:"60%",backgroundColor:"rgb(128,128,128,0.9)",position:"absolute",zIndex:10,top:"40%",left:"20%",textAlign:"center",borderRadius:"5% / 15%"}),o=Object(l.css)({fontSize:"10vh",opacity:1,display:"block"});return n.P===n.E?t="DRAW":n.P>n.E?t="WIN":n.P<n.E&&(t="LOSE"),i.a.createElement("div",a,i.a.createElement("span",o,t))},j=function(e){var t=e.side,n=e.count,r=2*e.borderSize,a=Object(l.css)({backgroundColor:"P"===t?"rgb(32,178,170,0.8)":"rgb(255,165,0,0.8)",fontSize:"5vh",padding:"5%",margin:"5%",width:"20%",display:"inline-block",borderRadius:10,color:"white",position:"relative",borderStyle:"solid",borderColor:"black",borderWidth:r,verticalAlign:"bottom"}),o=Object(l.css)({position:"absolute",top:"-30%",left:"-15%",padding:"5%",borderRadius:10,backgroundColor:"black",fontSize:"3vh",borderStyle:"solid",borderColor:"black",borderWidth:r}),c="P"===t?"YOU":"COVID-19";return i.a.createElement("div",a,i.a.createElement("div",o,c),i.a.createElement("span",null,n))},k=function(e){var t=e.func,n=e.val,r=2*e.borderSize,a=Object(l.css)({display:"inline-block",backgroundColor:"rgb(255,215,0)",padding:"5%",margin:"5%",fontSize:"5vh",borderRadius:10,borderStyle:"solid",borderWidth:r});return i.a.createElement("div",Object.assign({},a,{onClick:function(){console.log("button click!"),t(n+1)}}),"RESTART")},S=function(e,t,n){for(var r=t.x,i=t.y,a="";;){var o=r+8*i,c=void 0;if(-1===n[o].stone&&(c="B"),0===n[o].stone&&(c="P"),1===n[o].stone&&(c="E"),a+=c,r+=e.x,i+=e.y,r<0||r>7||i<0||i>7)break}return a},x=function(e,t,n){for(var r=t.x,i=t.y,a=[];;){var o=r+8*i;if(a.push(n[o]),r+=e.x,i+=e.y,r<0||r>7||i<0||i>7)break}return a},z=function(e){console.log("render-Reversi");var t=Object(r.useRef)(),n=e.size/8/100*5,a=e.size-2*n,o=a/8-2*n,u=function(e){for(var t=Math.pow(e,2),n=[],r=0;r<t;r++){var i=r%e,a=Math.floor(r/e),o={x:i,y:a,stone:-1,next:!1};3===i&&3===a||4===i&&4===a?(o.stone=0,o.touch=!0):(4===i&&3===a||3===i&&4===a)&&(o.stone=1,o.touch=!0),n.push(o)}return n}(8),d=Object(r.useState)(u),f=Object(c.a)(d,2),v=f[0],y=f[1],p=Object(r.useState)(!0),x=Object(c.a)(p,2),z=x[0],P=x[1],w=Object(r.useState)(""),C=Object(c.a)(w,2),M=C[0],R=C[1],I=Object(r.useState)({P:2,E:2}),W=Object(c.a)(I,2),J=W[0],A=W[1],B=Object(r.useState)(!1),N=Object(c.a)(B,2),D=N[0],F=N[1],_=Object(r.useState)(0),T=Object(c.a)(_,2),K=T[0],L=T[1];Object(r.useEffect)((function(){console.log("initRef")}),[t]),Object(r.useEffect)((function(){console.log("useEfect myturn");var e=function(e,t){var n,r=JSON.parse(JSON.stringify(e)),i=[],a=Object(s.a)(r);try{for(a.s();!(n=a.n()).done;){var o,c=n.value,l=!1,b=Object(s.a)(m);try{for(b.s();!(o=b.n()).done;){var u=o.value,d=S(u,c,e);(t?d.match(/^BE+P/):d.match(/^BP+E/))&&(l=!0,i.push(l))}}catch(f){b.e(f)}finally{b.f()}c.next=l}}catch(f){a.e(f)}finally{a.f()}return r}(v,z);y(e);var t=function(e){return{P:e.filter((function(e){return 0===e.stone})).length,E:e.filter((function(e){return 1===e.stone})).length}}(e);A(t);var n=-1===e.findIndex((function(e){return!0===e.next}));if(n&&R(M+(z?"P":"E")),!z&&!n){var r=e.filter((function(e){return!0===e.next}))[0],i=g(z,m,e,r);y(i),P(!0)}}),[z,K]),Object(r.useEffect)((function(){console.log("useEffect skip"),""!==M&&(0!==J.P&&0!==J.E&&J.P+J.E!==Math.pow(8,2)?P(!z):F(!0))}),[M]),Object(r.useEffect)((function(){D&&console.log("game set!!")}),[D]),Object(r.useEffect)((function(){0!==K&&(console.log("useEffect restart"),y(u),P(!0),R(""),A({P:2,E:2}),F(!1),L(0))}),[K]);var U,V=[],Y=Object(s.a)(v.entries());try{for(Y.s();!(U=Y.n()).done;){var $=Object(c.a)(U.value,2),q=$[0],G=$[1],H=i.a.createElement(h,{key:"cell_".concat(q),size:o,borderSize:n,data:G,myturn:z,setMyturn:P,displayMap:v,setDisplayMap:y});V.push(H)}}catch(Z){Y.e(Z)}finally{Y.f()}var Q=Object(l.css)({display:"inline-block"}),X=Object(l.css)({textAlign:"center"});return i.a.createElement("div",Q,i.a.createElement("div",X,i.a.createElement(j,{side:"P",count:J.P,borderSize:n}),i.a.createElement(j,{side:"E",count:J.E,borderSize:n})),i.a.createElement(b,{size:a,borderSize:n},M&&!D&&i.a.createElement(E,{skipFlag:M}),D&&i.a.createElement(O,{count:J}),V),i.a.createElement("div",X,i.a.createElement(k,{borderSize:n,func:L,val:K})))};var P=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(z,{size:500}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.80c2c205.chunk.js.map