import{a as Zt,b as xa}from"../chunks/Cvt7cj7F.js";import{H as wa,s as Da,g as La}from"../chunks/BZNkjHie.js";import{l as Ot,e as za,w as Sa,f as Se,c as et,a as C,t as F,s as I,b as Vt,r as Gt,g as Kt}from"../chunks/BAjJ8m4b.js";import{aG as Na,f as Ht,T as Jt,h as Qt,R as $t,D,g as t,B as Aa,o as he,p as o,q as l,t as K,v as ve,w as ue,s,ac as E,l as oe,ad as be,e as Pt,aH as Ca}from"../chunks/Blr-2Isq.js";import{c as Oa,a as M,p as ye,i as Ue,b as Ct,s as Pa,d as Ma}from"../chunks/CucghJ4t.js";import{s as Z,e as we,i as De,r as ee,g as Mt,h as Fa,j as qa,k as Ta,l as Ra,m as ea,P as it,n as Ua,o as vt,q as Re,t as Ia,u as Xa,w as Wa,x as Ya,y as zt,z as Za,A as Bt,f as Ze,B as St,C as ze,D as Va,F as Ka,G as Ba,H as Ea,I as Ga,J as Ha}from"../chunks/D2KV7BIS.js";import{b as ut}from"../chunks/V8bV8oyG.js";import{s as Ja}from"../chunks/BMPJZgCc.js";import{a as Qa,o as $a}from"../chunks/DIXxxZRN.js";import"../chunks/DEDZWvrU.js";import{i as es}from"../chunks/D_UffaW6.js";function pe(a,e,n){if(n){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function Ve(a,e,n=e){var r=Na();Ot(a,"input",u=>{var v=u?a.defaultValue:a.value;if(v=Nt(a)?At(v):v,n(v),r&&v!==(v=e())){var i=a.selectionStart,c=a.selectionEnd;a.value=v??"",c!==null&&(a.selectionStart=i,a.selectionEnd=Math.min(c,a.value.length))}}),(Qt&&a.defaultValue!==a.value||Ht(e)==null&&a.value)&&n(Nt(a)?At(a.value):a.value),Jt(()=>{var u=e();Nt(a)&&u===At(a.value)||a.type==="date"&&!u&&!a.value||u!==a.value&&(a.value=u??"")})}function ke(a,e,n=e){Ot(a,"change",r=>{var u=r?a.defaultChecked:a.checked;n(u)}),(Qt&&a.defaultChecked!==a.checked||Ht(e)==null)&&n(a.checked),Jt(()=>{var r=e();a.checked=!!r})}function Nt(a){var e=a.type;return e==="number"||e==="range"}function At(a){return a===""?null:+a}function ta(a,e,n){if(a.multiple)return as(a,e);for(var r of a.options){var u=$e(r);if(Oa(u,e)){r.selected=!0;return}}(!n||e!==void 0)&&(a.selectedIndex=-1)}function ts(a,e){$t(()=>{var n=new MutationObserver(()=>{var r=a.__value;ta(a,r)});return n.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{n.disconnect()}})}function dt(a,e,n=e){var r=!0;Ot(a,"change",u=>{var v=u?"[selected]":":checked",i;if(a.multiple)i=[].map.call(a.querySelectorAll(v),$e);else{var c=a.querySelector(v)??a.querySelector("option:not([disabled])");i=c&&$e(c)}n(i)}),$t(()=>{var u=e();if(ta(a,u,r),r&&u===void 0){var v=a.querySelector(":checked");v!==null&&(u=$e(v),n(u))}a.__value=u,r=!1}),ts(a)}function as(a,e){for(var n of a.options)n.selected=~e.indexOf($e(n))}function $e(a){return"__value"in a?a.__value:a.value}function ss(a,e){za(window,["resize"],()=>Sa(()=>e(window[a])))}function ns(a){var e=Aa(0);return function(){return arguments.length===1?(D(e,t(e)+1),arguments[0]):(t(e),a())}}function ls(a,e){throw new wa(a,e)}new TextEncoder;function os({params:a}){const e=a.design;if(Object.keys(Zt).includes(e))return{pageDef:Zt[e],allLink:xa};ls(404,"Design undefined!")}const In=Object.freeze(Object.defineProperty({__proto__:null,load:os},Symbol.toStringTag,{value:"Module"})),$=M({});function aa(a,e,n){if(Object.keys($).includes(a)){const u=$[a],v=Object.keys(u);for(const i of Object.keys(e))v.includes(i)?n&&(u[i]=e[i]):u[i]=e[i];$[a]=u}else $[a]=e}function rs(a){const e=a.pDef.partName,n={};for(const r of a.pDef.params)n[r.name]=r.init;aa(e,n,!1)}function cs(a,e){e(!1)}var is=F('<aside class="backdrop svelte-sjxf1e"><div class="dialog svelte-sjxf1e"><button class="svelte-sjxf1e"><img></button></div></aside>');function sa(a,e){let n=ye(e,"modalOpen",15);var r=et(),u=he(r);{var v=i=>{var c=is(),f=o(c),b=o(f);b.__click=[cs,n];var g=o(b);l(b),l(f),l(c),K(()=>{Z(g,"src",e.svgPath),Z(g,"alt",e.svgPath)}),C(i,c)};Ue(u,i=>{n()&&i(v)})}C(a,r)}Se(["click"]);var vs=(a,e,n)=>e(t(n)),us=F('<button class="svelte-fxmnfh"><img class="svelte-fxmnfh"></button>'),ds=F('<section class="svelte-fxmnfh"><!> <!></section>');function fs(a,e){ve(e,!0);function n(g){const L=[];for(const z of Object.values(g.paramSvg))L.includes(z)||L.push(z);return L}let r=E(!1),u=E(""),v=oe(()=>n(e.pDef).map(g=>`${ut}/pgdsvg/${g}`));function i(g){D(u,M(g)),D(r,!0)}var c=ds(),f=o(c);sa(f,{get svgPath(){return t(u)},get modalOpen(){return t(r)},set modalOpen(g){D(r,M(g))}});var b=s(f,2);we(b,17,()=>t(v),De,(g,L)=>{var z=us();z.__click=[vs,i,L];var _=o(z);l(z),K(()=>{Z(_,"src",t(L)),Z(_,"alt",t(L))}),C(g,z)}),l(c),C(a,c),ue()}Se(["click"]);function ms(a,e){e(!1)}function _s(a,e,n){e.okFunc(),n(!1)}var gs=F('<aside class="backdrop svelte-weruk7"><div class="dialog svelte-weruk7"><article class="question svelte-weruk7"><!></article> <footer class="svelte-weruk7"><button class="cancel svelte-weruk7">Cancel</button> <button class="ok svelte-weruk7"> </button></footer></div></aside>');function Qe(a,e){ve(e,!0);let n=ye(e,"okName",3,"Ok"),r=ye(e,"modalOpen",15),u=ye(e,"sizeLarge",3,!1);var v=et(),i=he(v);{var c=f=>{var b=gs(),g=o(b),L=o(g),z=o(L);Ja(z,()=>e.children),l(L);var _=s(L,2),d=o(_);d.__click=[ms,r];var q=s(d,2);q.__click=[_s,e,r];var T=o(q,!0);l(q),l(_),l(g),l(b),K(()=>{pe(g,"sizeLarge",u()),I(T,n())}),C(f,b)};Ue(i,f=>{r()&&f(c)})}C(a,v),ue()}Se(["click"]);function bs(a,e,n,r){for(const u of e())t(n)[u]=t(r)}var ks=(a,e)=>{D(e,!0)},ps=F('<p class="diagItem svelte-12dj9tj"> </p>'),hs=F('<p class="diagTitle svelte-12dj9tj">Do you really want to delete the following localStorage keys?</p> <!>',1),ys=(a,e,n)=>e(t(n)),js=F('<tr class="svelte-12dj9tj"><td><input type="checkbox"></td><td class="svelte-12dj9tj"><button class="svelte-12dj9tj"> </button></td><td> </td></tr>'),xs=F('<div class="deleteKeys svelte-12dj9tj"><button class="svelte-12dj9tj">Delete</button> <!> <table class="svelte-12dj9tj"><thead class="svelte-12dj9tj"><tr><td>Delete</td><td>Key name</td><td>Last modification</td></tr><tr><td><input type="checkbox"></td><td class="instruction">delete all</td><td></td></tr></thead><tbody class="svelte-12dj9tj"></tbody></table></div>');function na(a,e){ve(e,!0);let n=ye(e,"storeName",15),r=ye(e,"localKeys",15),u=E(M({})),v=E(!1),i=E(!1);function c(){let O=[];const k=new RegExp(`^${e.pageName}_`);return O=Object.keys(window.localStorage).filter(V=>k.test(V)).map(V=>V.replace(k,"")),O.sort(),O}r(c());function f(O){n(O)}function b(O){let k={};for(const W of O){let V="";const Q=`${e.pageName}_${W}`,J=window.localStorage.getItem(Q);J!==null&&(V=JSON.parse(J).lastModif),k[W]=V}return k}let g=oe(()=>b(r()));function L(O){let k={};for(const W of O)k[W]=!1;return k}D(u,M(L(r())));function z(){for(const O of r())if(t(u)[O]){const k=`${e.pageName}_${O}`;window.localStorage.removeItem(k)}D(v,!1),r(c())}var _=xs(),d=o(_);d.__click=[ks,i];var q=s(d,2);Qe(q,{okName:"Confirm",okFunc:z,get modalOpen(){return t(i)},set modalOpen(O){D(i,M(O))},children:(O,k)=>{var W=hs(),V=s(he(W),2);we(V,17,r,De,(Q,J)=>{var te=et(),de=he(te);{var re=B=>{var fe=ps(),ce=o(fe,!0);l(fe),K(()=>I(ce,t(J))),C(B,fe)};Ue(de,B=>{t(u)[t(J)]&&B(re)})}C(Q,te)}),C(O,W)},$$slots:{default:!0}});var T=s(q,2),G=o(T),X=s(o(G)),H=o(X),ne=o(H);ee(ne),ne.__change=[bs,r,u,v],l(H),be(2),l(X),l(G);var ae=s(G);we(ae,21,r,De,(O,k)=>{var W=js(),V=o(W),Q=o(V);ee(Q),l(V);var J=s(V),te=o(J);te.__click=[ys,f,k];var de=o(te,!0);l(te),l(J);var re=s(J),B=o(re,!0);l(re),l(W),K(()=>{I(de,t(k)),I(B,t(g)[t(k)])}),ke(Q,()=>t(u)[t(k)],fe=>t(u)[t(k)]=fe),C(O,W)}),l(ae),l(T),l(_),ke(ne,()=>t(v),O=>D(v,O)),C(a,_),ue()}Se(["click","change"]);var ws=F('<p class="warnMsg svelte-1rkdwo"> </p>'),Ds=F('<!> <div class="svelte-1rkdwo"><label for="storName" class="svelte-1rkdwo">Give a name to your parameter-set:</label> <input type="text" id="storName" required minlength="4" maxlength="30" size="32" class="svelte-1rkdwo"> <!></div>',1);function Ls(a,e){ve(e,!0);let n=ye(e,"storeName",15),r=E(M([]));function u(z){const _=/[-:]/g,d=/\..*$/,q=new Date().toISOString().replace(_,"").replace(d,"").replace("T","_");return`${z}_${q}`}n(u(e.pageName));let v=oe(()=>t(r).includes(n()));var i=Ds(),c=he(i);na(c,{get pageName(){return e.pageName},get storeName(){return n()},set storeName(z){n(z)},get localKeys(){return t(r)},set localKeys(z){D(r,M(z))}});var f=s(c,2),b=s(o(f),2);ee(b);var g=s(b,2);{var L=z=>{var _=ws(),d=o(_);l(_),K(()=>I(d,`Warning: name ${n()??""} already used`)),C(z,_)};Ue(g,z=>{t(v)&&z(L)})}l(f),Ve(b,n),C(a,i),ue()}var zs=F('<!> <div class="svelte-1ozd0ey"><label for="storName" class="svelte-1ozd0ey">Select a parameter-set:</label> <input type="text" id="storName" readonly="" minlength="4" maxlength="30" size="32" class="svelte-1ozd0ey"></div>',1);function Ss(a,e){ve(e,!0);let n=ye(e,"storeName",15),r=E(M([]));function u(b){let g=n();return!b.includes(g)&&(b.length>0?g=b[0]:g=""),g}Pt(()=>{n(u(t(r)))});var v=zs(),i=he(v);na(i,{get pageName(){return e.pageName},get storeName(){return n()},set storeName(b){n(b)},get localKeys(){return t(r)},set localKeys(b){D(r,M(b))}});var c=s(i,2),f=s(o(c),2);ee(f),l(c),K(()=>Mt(f,n())),C(a,v),ue()}const h=M({dLayers:Fa(),zAdjust:qa(),canvasZWidth:0});var Ns=F('<canvas class="mini svelte-z8e4tz"></canvas>');function Et(a,e){ve(e,!0);const n=200,r=.6;let u;function v(f,b,g,L){const z=Ta(L);z.ruler=!1;let _;if(u){const d=u.getContext("2d");d.clearRect(0,0,d.canvas.width,d.canvas.height);const q=d.canvas.width;try{e.full?_=f.getAdjustFull(d.canvas.width,d.canvas.height):_=Ra(g,q,b),f.draw(d,_,z)}catch(T){console.log(T)}}}Pt(()=>{v(e.pFig,h.zAdjust,h.canvasZWidth,h.dLayers)});function i(f){const b=f.offsetX,g=f.offsetY,L=u.getContext("2d"),z=L.canvas.width/2,_=L.canvas.height/2;if(f.button===0){let d=1;b>z&&(d+=1*r),g>_&&(d+=2*r),L.canvas.width=d*n,L.canvas.height=d*n,v(e.pFig,h.zAdjust,h.canvasZWidth,h.dLayers)}}var c=Ns();Z(c,"width",n),Z(c,"height",n),c.__click=i,Ct(c,f=>u=f,()=>u),C(a,c),ue()}Se(["click"]);function As(a,e){const n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",a),n.click(),n.remove()}function la(a,e,n){const r=/[-:]/g,u=/\..*$/,v=new Date().toISOString().replace(r,"").replace(u,"").replace("T","_"),i=`px_${a}_${v}.json`,c=ea(v,a,e,n);As(i,c)}function Cs(a,e,n){const r=new URL(a),u=2e3;let v=r.toString().length;for(const i of Object.keys(e)){const c=e[i].toString(),f=2+i.length+c.length;r.searchParams.append(encodeURIComponent(i),encodeURIComponent(c)),v+=f}return v>=u&&console.log(`warn547: generateUrl: strLength ${v} larger than strLengthLimit ${u}`),r.toString()}const Os=()=>{const a=Da;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},Ps={subscribe(a){return Os().page.subscribe(a)}};function Ms(a,e){if(a.target){const n=a.target.files;n&&e(n[0])}}function Fs(a,e,n,r){D(e,M(n())),D(r,!0)}function qs(a,e){D(e,!0)}function Ts(a,e){D(e,!0)}function Rs(a,e){D(e,!1)}var Us=(a,e)=>{D(e,!0)},Is=(a,e)=>{D(e,!0)},Xs=(a,e,n)=>e(t(n).name),Ws=F('<input type="number" class="input-number svelte-jonk14"> <input type="range" class="svelte-jonk14">',1),Ys=F("<option> </option>"),Zs=F("<select></select>"),Vs=F("<option> </option>"),Ks=F("<select></select>"),Bs=F('<tr class="svelte-jonk14"><td class="svelte-jonk14"></td><td class="svelte-jonk14"><button class="svelte-jonk14"> </button></td><td class="svelte-jonk14"><!></td><td class="svelte-jonk14"> </td><td class="svelte-jonk14"> </td><td class="svelte-jonk14"> </td><td class="svelte-jonk14"> </td><td class="svelte-jonk14"> </td></tr>'),Es=F('<tbody class="svelte-jonk14"><tr class="separator svelte-jonk14"><td class="svelte-jonk14"></td><td class="svelte-jonk14"> </td><td class="svelte-jonk14"><label class="svelte-jonk14"><input type="checkbox" class="svelte-jonk14"> <span class="svelte-jonk14"></span></label></td></tr></tbody> <tbody class="svelte-jonk14"></tbody>',1),Gs=(a,e)=>{D(e,!0)},Hs=F('<p>Copy this URL and send it to your friends!</p> <p class="cUrl svelte-jonk14"> </p>',1),Js=F('<section class="svelte-jonk14"><h2 class="svelte-jonk14">Parameters</h2> <main class="svelte-jonk14"><label for="loadFParams" class="fileUpload svelte-jonk14">Load Params from File</label> <input id="loadFParams" type="file" accept="text/plain, application/json" class="svelte-jonk14"> <button class="svelte-jonk14">Set Params Default</button> <button class="svelte-jonk14">Load Params from localStorage</button> <!> <!> <textarea rows="3" cols="80" readonly="" wrap="soft" class="svelte-jonk14"></textarea> <table class="svelte-jonk14"><thead class="svelte-jonk14"><tr class="svelte-jonk14"><td class="svelte-jonk14">&#35;</td><td class="svelte-jonk14">Parameter name</td><td class="svelte-jonk14">Value<span class="svelte-jonk14"><button class="svelte-jonk14">&minus;</button><button class="svelte-jonk14">+</button></span></td><td class="svelte-jonk14">Unit</td><td class="svelte-jonk14">Default</td><td class="svelte-jonk14">Min</td><td class="svelte-jonk14">Max</td><td class="svelte-jonk14">Step</td></tr></thead><!></table> <div class="comment svelte-jonk14"><label for="inComment">Comment:</label> <input type="text" id="inComment" maxlength="150"></div> <button class="svelte-jonk14">Save Parameters to File</button> <button class="svelte-jonk14">Save Parameters as URL</button> <button class="svelte-jonk14">Save Parameters to localStorage</button> <!> <!></main> <!> <button class="side-img svelte-jonk14"><img class="svelte-jonk14"></button> <div class="mini-canvas svelte-jonk14"><!></div> <div class="mini-canvas svelte-jonk14"><!></div></section>');function Qs(a,e){ve(e,!0);const[n,r]=Pa(),u=()=>Ma(Ps,"$page",n);let v=E(""),i=E(!1),c=E(""),f=E(!1),b=E(!1),g=E(!1),L=E(!1),z=E(!1),_=E(""),d=E(""),q=E(""),T=E(M(de(e.pDef.params[0].name))),G=E(!1),X=M(fe(B(e.pDef.params)));function H(j,x){let P="",le=!1;j!==e.pDef.partName&&(P+=`warn361: read partName: '${j}'  expected partName: '${e.pDef.partName}'
`,le=!0);let ie=0,Ae=0,Me=0;const Fe=[];for(const ge of e.pDef.params)Fe.push(ge.name),Object.hasOwn(x,ge.name)?(ie+=1,$[e.pDef.partName][ge.name]===x[ge.name]?Me+=1:$[e.pDef.partName][ge.name]=x[ge.name]):Ae+=1;let Xe=0;for(const ge of Object.keys(x))Fe.includes(ge)||(Xe+=1,P+=`warn363: parameter ${ge} not in the scope of the design (${Xe})
`);const Be=Xe>0,nt=new Date().toLocaleTimeString();return P+=`Params loaded at ${nt} :`,P+=` def-nb: ${Object.keys(e.pDef.params).length}`,P+=`, cover-nb: ${ie}, uncover-nb: ${Ae}
`,P+=` load-nb: ${Object.keys(x).length}`,P+=`, equal-nb: ${Me}, changed-nb: ${ie-Me}`,P+=`, out-of-scope: ${Xe}`,[P,le||Be]}function ne(){{const j=new URLSearchParams(u().url.search),x={};for(const[P,le]of j){const ie=Number(le);isNaN(ie)||(x[P]=ie)}Object.keys(x).length>0&&(P=>(D(c,M(P[0])),D(f,M(P[1]))))(H(e.pDef.partName,x))}}ne();function ae(j){try{const[x]=Ua(j);(P=>(D(c,M(P[0])),D(f,M(P[1]))))(H(x.partName,x.pVal)),D(v,M(x.comment))}catch(x){let P=`err723: error by parsing parameter file
`;P+=x,D(c,M(P)),D(f,!0)}}async function O(j){const x=await j.text();ae(x)}function k(){la(e.pDef.partName,$[e.pDef.partName],t(v))}function W(){const j={};for(const x of e.pDef.params)j[x.name]=x.init;(x=>(D(c,M(x[0])),D(f,M(x[1]))))(H(e.pDef.partName,j))}function V(){if(t(_)!==void 0&&t(_)!==""){const j=`${e.pDef.partName}_${t(_)}`;{const x=window.localStorage.getItem(j);x===null?(D(c,`Warn157: localStorage key ${j} is null`),D(f,!0)):ae(x)}}else D(c,"Warn239: No valid name for loading from localStorage!"),D(f,!0)}function Q(){if(t(d)!==void 0&&t(d)!==""){const j=`${e.pDef.partName}_${t(d)}`,x=/\..*$/,P=new Date().toISOString().replace(x,""),le=ea(P,e.pDef.partName,$[e.pDef.partName],t(v));window.localStorage.setItem(j,le)}else console.log("Warn639: No valid name for writing to localStorage!")}function J(){return Cs(u().url.href,$[e.pDef.partName]).toString()}function te(){}function de(j){let x=`${ut}/pgdsvg/default_param_blank.svg`;return Object.keys(e.pDef.paramSvg).includes(j)&&(x=`${ut}/pgdsvg/${e.pDef.paramSvg[j]}`),x}function re(j){D(T,M(de(j)))}function B(j){const x=[];let le={sectionName:"main",sectionID:"g0main",sectionVisible:!1,params:[]},ie=0;for(const Ae of j)Ae.pType===it.eSectionSeparator?(x.push(le),ie+=1,le={sectionName:Ae.name,sectionID:`g${ie}${Ae.name}`,sectionVisible:!0,params:[]}):le.params.push(Ae);return x.push(le),x}function fe(j){const x={};for(const P of j)x[P.sectionID]=P.sectionVisible;return x}let ce=oe(()=>B(e.pDef.params)),me=oe(()=>t(i)?2:4),je=oe(()=>t(i)?2:3),m=oe(()=>t(i)?50:70);var y=Js(),S=s(o(y),2),R=s(o(S),2);R.__change=[Ms,O];var _e=s(R,2);_e.__click=[Us,b];var Le=s(_e,2);Le.__click=[Is,g];var Ne=s(Le,2);Qe(Ne,{okName:"Overwrite Parameters",okFunc:W,get modalOpen(){return t(b)},set modalOpen(j){D(b,M(j))},children:(j,x)=>{be();var P=Vt("Load the default parameters ?");C(j,P)},$$slots:{default:!0}});var Ce=s(Ne,2);Qe(Ce,{okName:"Load Parameters",okFunc:V,get modalOpen(){return t(g)},set modalOpen(j){D(g,M(j))},children:(j,x)=>{Ss(j,{get pageName(){return e.pDef.partName},get storeName(){return t(_)},set storeName(P){D(_,M(P))}})},$$slots:{default:!0}});var p=s(Ce,2);Gt(p);var N=s(p,2),w=o(N),A=o(w),se=s(o(A),2),tt=s(o(se)),at=o(tt);at.__click=[Ts,i];var ft=s(at);ft.__click=[Rs,i],l(tt),l(se);var Ke=s(se),Ie=s(Ke),oa=s(Ie,3);l(A),l(w);var ra=s(w);we(ra,17,()=>t(ce),De,(j,x,P)=>{var le=Es(),ie=he(le),Ae=o(ie),Me=o(Ae);Me.textContent=P+1;var Fe=s(Me),Xe=o(Fe,!0);l(Fe);var Be=s(Fe),nt=o(Be),bt=o(nt);ee(bt),be(2),l(nt),l(Be),l(Ae),l(ie);var ge=s(ie,2);we(ge,21,()=>t(x).params,De,(kt,Y,ua)=>{var lt=Bs(),Wt=o(lt);Wt.textContent=`${P+1}.${ua+1}`;var pt=s(Wt),ht=o(pt);ht.__click=[Xs,re,Y];var da=o(ht,!0);l(ht),l(pt);var yt=s(pt),fa=o(yt);{var ma=We=>{var Ee=Ws(),Oe=he(Ee);ee(Oe);var qe=s(Oe,2);ee(qe),K(()=>{Z(Oe,"min",t(Y).min),Z(Oe,"max",t(Y).max),Z(Oe,"step",t(Y).step),Z(qe,"min",t(Y).min),Z(qe,"max",t(Y).max),Z(qe,"step",t(Y).step)}),Ve(Oe,()=>$[e.pDef.partName][t(Y).name],Ge=>$[e.pDef.partName][t(Y).name]=Ge),Ve(qe,()=>$[e.pDef.partName][t(Y).name],Ge=>$[e.pDef.partName][t(Y).name]=Ge),C(We,Ee)},_a=We=>{var Ee=et(),Oe=he(Ee);{var qe=Ye=>{var Te=Zs();we(Te,20,()=>["Off","On"],De,(He,Dt,ct)=>{var xe=Ys();xe.value=(xe.__value=ct)==null?"":ct;var Pe=o(xe,!0);l(xe),K(()=>I(Pe,Dt)),C(He,xe)}),l(Te),dt(Te,()=>$[e.pDef.partName][t(Y).name],He=>$[e.pDef.partName][t(Y).name]=He),C(Ye,Te)},Ge=Ye=>{var Te=et(),He=he(Te);{var Dt=xe=>{var Pe=Ks();we(Pe,21,()=>t(Y).dropdown,De,(Lt,ya,Yt)=>{var Je=Vs();Je.value=(Je.__value=Yt)==null?"":Yt;var ja=o(Je,!0);l(Je),K(()=>I(ja,t(ya))),C(Lt,Je)}),l(Pe),dt(Pe,()=>$[e.pDef.partName][t(Y).name],Lt=>$[e.pDef.partName][t(Y).name]=Lt),C(xe,Pe)},ct=xe=>{var Pe=Vt("unknown");C(xe,Pe)};Ue(He,xe=>{t(Y).pType===it.eDropdown?xe(Dt):xe(ct,!1)},!0)}C(Ye,Te)};Ue(Oe,Ye=>{t(Y).pType===it.eCheckbox?Ye(qe):Ye(Ge,!1)},!0)}C(We,Ee)};Ue(fa,We=>{t(Y).pType===it.eNumber?We(ma):We(_a,!1)})}l(yt);var ot=s(yt),ga=o(ot,!0);l(ot);var rt=s(ot),ba=o(rt,!0);l(rt);var jt=s(rt),ka=o(jt,!0);l(jt);var xt=s(jt),pa=o(xt,!0);l(xt);var wt=s(xt),ha=o(wt,!0);l(wt),l(lt),K(()=>{pe(lt,"changed",$[e.pDef.partName][t(Y).name]!==t(Y).init),I(da,t(Y).name),pe(ot,"hideColumn",t(i)),I(ga,t(Y).unit),pe(rt,"hideColumn",t(i)),I(ba,t(Y).init),I(ka,t(Y).min),I(pa,t(Y).max),pe(wt,"hideColumn",t(i)),I(ha,t(Y).step)}),C(kt,lt)}),l(ge),K(()=>{Z(Fe,"colspan",t(me)),I(Xe,t(x).sectionName),Z(Be,"colspan",t(je)),pe(ge,"collaps",X[t(x).sectionID])}),ke(bt,()=>X[t(x).sectionID],kt=>X[t(x).sectionID]=kt),C(j,le)}),l(N);var mt=s(N,2),_t=s(o(mt),2);ee(_t),l(mt);var Ft=s(mt,2);Ft.__click=k;var qt=s(Ft,2);qt.__click=[Fs,q,J,L];var Tt=s(qt,2);Tt.__click=[Gs,z];var Rt=s(Tt,2);Qe(Rt,{okName:"Done",okFunc:te,sizeLarge:!0,get modalOpen(){return t(L)},set modalOpen(j){D(L,M(j))},children:(j,x)=>{var P=Hs(),le=s(he(P),2),ie=o(le,!0);l(le),K(()=>I(ie,t(q))),C(j,P)},$$slots:{default:!0}});var ca=s(Rt,2);Qe(ca,{okName:"Save into localStorage",okFunc:Q,get modalOpen(){return t(z)},set modalOpen(j){D(z,M(j))},children:(j,x)=>{Ls(j,{get pageName(){return e.pDef.partName},get storeName(){return t(d)},set storeName(P){D(d,M(P))}})},$$slots:{default:!0}}),l(S);var Ut=s(S,2);sa(Ut,{get svgPath(){return t(T)},get modalOpen(){return t(G)},set modalOpen(j){D(G,M(j))}});var st=s(Ut,2);st.__click=[qs,G];var It=o(st);l(st);var gt=s(st,2),ia=o(gt);Et(ia,{get pFig(){return e.pFig},full:!0}),l(gt);var Xt=s(gt,2),va=o(Xt);Et(va,{get pFig(){return e.pFig},full:!1}),l(Xt),l(y),K(()=>{Mt(p,t(c)),pe(p,"colorWarn",t(f)),pe(Ke,"hideColumn",t(i)),pe(Ie,"hideColumn",t(i)),pe(oa,"hideColumn",t(i)),Z(_t,"size",t(m)),Z(It,"src",t(T)),Z(It,"alt",t(T))}),Ve(_t,()=>t(v),j=>D(v,j)),C(a,y),ue(),r()}Se(["change","click"]);var $s=F('<nav class="svelte-uw6ahn"><button class="svelte-uw6ahn">0</button> <button class="svelte-uw6ahn">&lt-</button> <button class="svelte-uw6ahn">|&lt</button> <button class="svelte-uw6ahn">||</button> <button class="svelte-uw6ahn">&gt|</button> <button class="svelte-uw6ahn">-&gt</button> <input type="range" min="0" class="svelte-uw6ahn"> <input type="number" min="0" class="svelte-uw6ahn"></nav>');function en(a,e){ve(e,!0);let n=ye(e,"tMax",3,10),r=ye(e,"tStep",3,.1),u=ye(e,"tUpdate",3,500),v=ye(e,"simTime",15,0),i=null,c=0,f;const b=4;function g(){i!==null&&(clearInterval(i),i=null)}function L(){f<0&&v()<=0?v(n()):f>0&&v()>=n()?v(0):v(v()+f)}function z(){const te=u()/2**(Math.abs(c)-1);f=c<0?-r():r(),i=setInterval(L,te)}function _(){g(),v(0),c=0}function d(){g(),c=0,f=-r(),L()}function q(){g(),c=0,f=r(),L()}function T(){g(),c=Math.max(c-1,-4),z()}function G(){g(),c=Math.min(c+1,b),z()}function X(){g(),c=0}Qa(()=>{g()});var H=$s(),ne=o(H);ne.__click=_;var ae=s(ne,2);ae.__click=T;var O=s(ae,2);O.__click=d;var k=s(O,2);k.__click=X;var W=s(k,2);W.__click=q;var V=s(W,2);V.__click=G;var Q=s(V,2);ee(Q);var J=s(Q,2);ee(J),l(H),K(()=>{Z(Q,"max",n()),Z(Q,"step",r()),Z(J,"max",n()),Z(J,"step",r())}),Ve(Q,v),Ve(J,v),C(a,H),ue()}Se(["click"]);var tn=(a,e)=>e.zoomClick("zoomInit"),an=(a,e)=>e.zoomClick("zoomIn"),sn=(a,e)=>e.zoomClick("zoomOut"),nn=(a,e)=>e.zoomClick("moveLeft"),ln=(a,e)=>e.zoomClick("moveRight"),on=(a,e)=>e.zoomClick("moveUp"),rn=(a,e)=>e.zoomClick("moveDown"),cn=F('<nav class="svelte-c549k7"><button aria-labelledby="zoomInit" class="svelte-c549k7"><div class="zero svelte-c549k7"></div></button><button aria-labelledby="zoomIn" class="svelte-c549k7"><div class="zoomin svelte-c549k7"></div></button><button aria-labelledby="zoomOut" class="svelte-c549k7"><div class="zoomout svelte-c549k7"></div></button><button aria-labelledby="moveLeft" class="svelte-c549k7"><div class="arrowleft svelte-c549k7"></div></button><button aria-labelledby="moveRight" class="svelte-c549k7"><div class="arrowright svelte-c549k7"></div></button><button aria-labelledby="moveUp" class="svelte-c549k7"><div class="arrowup svelte-c549k7"></div></button><button aria-labelledby="moveDown" class="svelte-c549k7"><div class="arrowdown svelte-c549k7"></div></button></nav>');function vn(a,e){ve(e,!0);var n=cn(),r=o(n);r.__click=[tn,e];var u=s(r);u.__click=[an,e];var v=s(u);v.__click=[sn,e];var i=s(v);i.__click=[nn,e];var c=s(i);c.__click=[ln,e];var f=s(c);f.__click=[on,e];var b=s(f);b.__click=[rn,e],l(n),C(a,n),ue()}Se(["click"]);var U=ns(()=>h),un=F('<div class="svelte-1rsbkj"><label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">main part</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">main skeleton</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">second parts</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">second skeletons</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">dynamics</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">ruler</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">frame of reference</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">points</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">lines</label> <label class="svelte-1rsbkj"><input type="checkbox" class="svelte-1rsbkj">vectors</label></div>');function dn(a,e){ve(e,!1),es();var n=un(),r=o(n),u=o(r);ee(u),be(),l(r);var v=s(r,2),i=o(v);ee(i),be(),l(v);var c=s(v,2),f=o(c);ee(f),be(),l(c);var b=s(c,2),g=o(b);ee(g),be(),l(b);var L=s(b,2),z=o(L);ee(z),be(),l(L);var _=s(L,2),d=o(_);ee(d),be(),l(_);var q=s(_,2),T=o(q);ee(T),be(),l(q);var G=s(q,2),X=o(G);ee(X),be(),l(G);var H=s(G,2),ne=o(H);ee(ne),be(),l(H);var ae=s(H,2),O=o(ae);ee(O),be(),l(ae),l(n),ke(u,()=>U().dLayers.main,k=>U(U().dLayers.main=k)),ke(i,()=>U().dLayers.mainB,k=>U(U().dLayers.mainB=k)),ke(f,()=>U().dLayers.second,k=>U(U().dLayers.second=k)),ke(g,()=>U().dLayers.secondB,k=>U(U().dLayers.secondB=k)),ke(z,()=>U().dLayers.dynamics,k=>U(U().dLayers.dynamics=k)),ke(d,()=>U().dLayers.ruler,k=>U(U().dLayers.ruler=k)),ke(T,()=>U().dLayers.refframe,k=>U(U().dLayers.refframe=k)),ke(X,()=>U().dLayers.points,k=>U(U().dLayers.points=k)),ke(ne,()=>U().dLayers.lines,k=>U(U().dLayers.lines=k)),ke(O,()=>U().dLayers.vectors,k=>U(U().dLayers.vectors=k)),C(a,n),ue()}var fn=F('<section class="svelte-1lstqwr"><!> <div class="rack svelte-1lstqwr"><canvas class="full svelte-1lstqwr"></canvas> <!></div> <div class="rack svelte-1lstqwr"><canvas class="zoom svelte-1lstqwr"></canvas> <!></div></section>');function mn(a,e){ve(e,!0);let n=ye(e,"simTime",15,0);const r=400,u=1200;let v=E(r),i,c,f;function b(m,y){if(i){const S=i.getContext("2d");S.clearRect(0,0,S.canvas.width,S.canvas.height);try{f=m.getAdjustFull(S.canvas.width,S.canvas.height),m.draw(S,f,y)}catch(R){console.log(R)}}}function g(m,y,S){if(c){const R=c.getContext("2d");R.clearRect(0,0,R.canvas.width,R.canvas.height);try{(y===void 0||y.init===0)&&(y=m.getAdjustZoom(R.canvas.width,R.canvas.height)),m.draw(R,y,S)}catch(_e){console.log(_e)}}}function L(){const m=i.getContext("2d"),y=c.getContext("2d"),S=Math.min(Math.max(.4*t(v),r),u);m.canvas.width=S,m.canvas.height=S,y.canvas.width=S,y.canvas.height=S,h.canvasZWidth=S,h.zAdjust.init===0&&(h.zAdjust=e.pFig.getAdjustZoom(y.canvas.width,y.canvas.height))}function z(){L(),b(e.pFig,h.dLayers),g(e.pFig,h.zAdjust,h.dLayers)}function _(m,y,S){b(m,S),g(m,y,S)}$a(()=>{L()}),Pt(()=>{_(e.pFig,h.zAdjust,h.dLayers)});function d(m){const y=c.getContext("2d");switch(m){case"zoomInit":h.zAdjust=e.pFig.getAdjustZoom(y.canvas.width,y.canvas.height);break;case"zoomIn":h.zAdjust=vt(.7,h.zAdjust);break;case"zoomOut":h.zAdjust=vt(1.3,h.zAdjust);break;case"moveLeft":h.zAdjust.xMin+=-.2*h.zAdjust.xyDiff;break;case"moveRight":h.zAdjust.xMin+=.2*h.zAdjust.xyDiff;break;case"moveUp":h.zAdjust.yMin+=.2*h.zAdjust.xyDiff;break;case"moveDown":h.zAdjust.yMin+=-.2*h.zAdjust.xyDiff;break;default:console.log(`ERR423: ${m} has no case!`)}g(e.pFig,h.zAdjust,h.dLayers)}const q=3e3,T=10,G=3;let X={timestamp:0,offsetX:0,offsetY:0};function H(m){m.button===0&&(X.timestamp=Date.now(),X.offsetX=m.offsetX,X.offsetY=m.offsetY)}function ne(m){if(m.button===0)if(Date.now()-X.timestamp<q){const y=Math.abs(X.offsetX-m.offsetX),S=Math.abs(X.offsetY-m.offsetY);if(y<T&&S<T){const[R,_e]=Re(m.offsetX,m.offsetY,f);h.zAdjust=Ia(R,_e,h.zAdjust),_(e.pFig,h.zAdjust,h.dLayers)}if(y>T&&S>T){const R=y/S,_e=1/R;if(R<G&&_e<G){const[Le,Ne]=Re(m.offsetX,m.offsetY,f),[Ce,p]=Re(X.offsetX,X.offsetY,f),w=c.getContext("2d").canvas.width;h.zAdjust=Xa(Le,Ne,Ce,p,w,w),_(e.pFig,h.zAdjust,h.dLayers)}}}else console.log(`Warn205: ignore ${m.offsetX} ${m.offsetY} because too slow`)}function ae(m){if(i){const y=i.getContext("2d");if(m.buttons===1){const S=m.offsetX-X.offsetX,R=m.offsetY-X.offsetY;b(e.pFig,h.dLayers),y.beginPath(),y.rect(X.offsetX,X.offsetY,S,R),y.strokeStyle=zt.mouse,y.stroke()}if(h.dLayers.ruler){const[S,R]=Re(m.offsetX,m.offsetY,f);y.clearRect(5,5,200,25),y.font="15px Arial",y.fillStyle=zt.ruler,y.fillText(`x: ${S.toFixed(4)} y: ${R.toFixed(4)}`,5,20)}}}let O,k,W;function V(m){if(m.button===0){const[y,S]=Re(m.offsetX,m.offsetY,h.zAdjust);O=y,k=S,W=Wa(h.zAdjust)}}function Q(m){if(m.buttons===1){const[y,S]=Re(m.offsetX,m.offsetY,W);h.zAdjust=Ya(O,k,y,S,W),g(e.pFig,h.zAdjust,h.dLayers)}else if(h.dLayers.ruler&&c){const y=c.getContext("2d"),[S,R]=Re(m.offsetX,m.offsetY,h.zAdjust);y.clearRect(5,5,200,25),y.font="15px Arial",y.fillStyle=zt.ruler,y.fillText(`x: ${S.toFixed(4)} y: ${R.toFixed(4)}`,5,20)}}function J(m){m.preventDefault(),m.deltaY>0?h.zAdjust=vt(.7,h.zAdjust):h.zAdjust=vt(1.3,h.zAdjust),g(e.pFig,h.zAdjust,h.dLayers)}var te=fn();Kt("resize",Ca,z);var de=o(te);dn(de,{});var re=s(de,2),B=o(re);Z(B,"width",r),Z(B,"height",r),B.__mousedown=H,B.__mouseup=ne,B.__mousemove=ae,Ct(B,m=>i=m,()=>i);var fe=s(B,2);en(fe,{get tMax(){return e.pDefSim.tMax},get tStep(){return e.pDefSim.tStep},get tUpdate(){return e.pDefSim.tUpdate},get simTime(){return n()},set simTime(m){n(m)}}),l(re);var ce=s(re,2),me=o(ce);Z(me,"width",r),Z(me,"height",r),me.__mousedown=V,me.__mousemove=Q,Ct(me,m=>c=m,()=>c);var je=s(me,2);vn(je,{zoomClick:d}),l(ce),l(te),ss("innerWidth",m=>D(v,M(m))),Kt("wheel",me,J),C(a,te),ue()}Se(["mousedown","mouseup","mousemove"]);var _n=(a,e,n)=>e(t(n)),gn=(a,e,n)=>e(t(n)),bn=F('<tr class="svelte-lzdpo0"><td></td><td> </td><td> </td><td><i> </i></td><td><i> </i></td></tr>'),kn=F('<li class="svelte-lzdpo0"><input type="checkbox" class="toggle svelte-lzdpo0"> <label class="label svelte-lzdpo0"><div class="arrow svelte-lzdpo0"></div> </label> <button class="svelte-lzdpo0"> </button> <button class="svelte-lzdpo0">Export parameters</button> <div class="nested svelte-lzdpo0"><article class="svelte-lzdpo0"> <strong> </strong> </article> <table class="svelte-lzdpo0"><thead class="svelte-lzdpo0"><tr><td>Num</td><td>Name</td><td>Value</td><td>Init</td><td>Set?</td></tr></thead><tbody class="svelte-lzdpo0"></tbody></table></div></li>'),pn=F('<section class="svelte-lzdpo0"><h2 class="svelte-lzdpo0">Sub-designs <span class="svelte-lzdpo0"> </span></h2> <ol class="svelte-lzdpo0"></ol></section>');function hn(a,e){ve(e,!0);const n=oe(()=>Object.keys(e.subD));async function r(_){const d=e.subD[_];aa(d.partName,Bt(d.dparam),!0);const q=`${ut}${e.pLink[d.partName]}`;La(q)}function u(_){const d=e.subD[_].partName,q=e.subD[_].dparam,T=`sub-design parameters of ${d} from ${e.origPartName}`;la(d,Bt(q),T)}function v(_){let d="[ ";return d+=`${Ze(St(_[0]))}, `,d+=`${Ze(St(_[1]))}, `,d+=`${Ze(St(_[2]))} ]`,d}function i(_){let d="[ ";return d+=`${Ze(_[0])}, `,d+=`${Ze(_[1])}, `,d+=`${Ze(_[2])} ]`,d}function c(_){return _?"Yes":""}var f=pn(),b=o(f),g=s(o(b)),L=o(g);l(g),l(b);var z=s(b,2);we(z,21,()=>t(n),De,(_,d)=>{var q=kn(),T=o(q);ee(T),Za(T,!1);var G=s(T,2),X=s(o(G));l(G);var H=s(G,2);H.__click=[_n,r,d];var ne=o(H);l(H);var ae=s(H,2);ae.__click=[gn,u,d];var O=s(ae,2),k=o(O),W=o(k);K(()=>I(W,`${Object.keys(e.subD[t(d)].dparam).length??""} parameters of `));var V=s(W),Q=o(V,!0);l(V);const J=oe(()=>v(e.subD[t(d)].orientation)??""),te=oe(()=>i(e.subD[t(d)].position)??"");var de=s(V);K(()=>I(de,` with orientation ${t(J)} (degree) at position
						${t(te)} (mm)`)),l(k);var re=s(k,2),B=s(o(re));we(B,21,()=>Object.keys(e.subD[t(d)].dparam),De,(fe,ce,me)=>{var je=bn(),m=o(je);m.textContent=me+1;var y=s(m),S=o(y,!0);l(y);var R=s(y),_e=o(R,!0);l(R);var Le=s(R),Ne=o(Le),Ce=o(Ne,!0);l(Ne),l(Le);var p=s(Le),N=o(p),w=o(N,!0);K(()=>I(w,c(e.subD[t(d)].dparam[t(ce)].chg))),l(N),l(p),l(je),K(()=>{pe(je,"changed",e.subD[t(d)].dparam[t(ce)].chg),I(S,t(ce)),I(_e,e.subD[t(d)].dparam[t(ce)].val),I(Ce,e.subD[t(d)].dparam[t(ce)].init)}),C(fe,je)}),l(B),l(re),l(O),l(q),K(()=>{Z(T,"id",`cb_${t(d)??""}`),Z(G,"for",`cb_${t(d)??""}`),I(X,` ${t(d)??""}`),I(ne,`Go to ${e.pLink[e.subD[t(d)].partName]??""}`),I(Q,e.subD[t(d)].partName)}),C(_,q)}),l(z),l(f),K(()=>I(L,`(Number of sub-instances: ${t(n).length??""})`)),C(a,f),ue()}Se(["click"]);async function yn(a,e,n){await e(t(n))}var jn=F("<option> </option>"),xn=F("<option> </option>"),wn=F("<option> </option>"),Dn=F('<!> <section class="svelte-1ez8qwq"><h2 class="svelte-1ez8qwq">Log</h2> <textarea rows="5" cols="94" readonly="" wrap="soft" class="svelte-1ez8qwq"></textarea></section> <section class="svelte-1ez8qwq"><h2 class="svelte-1ez8qwq">Drawing <select class="svelte-1ez8qwq"><!><option>All faces merged</option></select></h2></section> <!> <section class="svelte-1ez8qwq"><h2 class="svelte-1ez8qwq">Export</h2> <select class="svelte-1ez8qwq"><!><option>all faces merged as svg</option><!><option>all faces merged as dxf</option><option>compute.log as log-file</option><option>all faces as pax.json</option><option>all faces as openscad.scad</option><option>all faces as OpenJScad.js</option><option>all faces as Freecad.py</option><option>all faces and more as zip</option></select> <button class="svelte-1ez8qwq">Save to File</button> <!></section>',1);function Ln(a,e){ve(e,!0);const n="ParametrixAll";function r(p){let N=!0;const w=/warn/i;return p.search(w)<0&&(N=!1),N}function u(p,N){let w=N;if(p.length===0)console.log("warn404: Drawing has an empty face list");else{const A=p.slice();A.push(n),A.includes(w)||(w=p[0])}return w}function v(p,N){let w;const A=Object.keys(p),se=u(A,N);return A.includes(se)?w=p[se]:w=Ha(p),w}let i=E(0),c=E(M(u(Object.keys(e.fgeom(0,$[e.pDef.partName]).fig),""))),f=E("zip"),b=oe(()=>e.fgeom(t(i),$[e.pDef.partName])),g=oe(()=>{const p=new Date().toLocaleTimeString();let N=`Geometry ${e.pDef.partName} computed at ${p}
`;return N+=t(b).logstr,N}),L=oe(()=>Object.keys(t(b).fig)),z=oe(()=>t(b).calcErr),_=oe(()=>r(t(b).logstr)),d=oe(()=>v(t(b).fig,t(c))),q=oe(()=>t(b).sub);function T(p,N){const w=document.createElement("a"),A=URL.createObjectURL(N);w.setAttribute("href",A),w.setAttribute("download",p),w.click(),w.remove(),URL.revokeObjectURL(A)}function G(p,N,w){const A=document.createElement("a"),se="data:"+w+";utf-8,"+encodeURIComponent(N);A.setAttribute("href",se),A.setAttribute("download",p),A.click(),A.remove()}function X(){const p=/[-:]/g,N=/\..*$/;return new Date().toISOString().replace(p,"").replace(N,"").replace("T","_")}async function H(p){const N=/^svg_/,w=/^dxf_/;let A=ze.eSVG,se="all";p.match(N)?(A=ze.eSVG,se=p.replace(N,"")):p.match(w)?(A=ze.eDXF,se=p.replace(w,"")):p==="allsvg"?A=ze.eSVGALL:p==="alldxf"?A=ze.eDXFALL:p==="compute_log"?A=ze.eTXTLOG:p==="pax"?A=ze.ePAX:p==="oscad"?A=ze.eOPENSCAD:p==="ojscad"?A=ze.eJSCAD:p==="freecad"?A=ze.eFREECAD:p==="zip"?A=ze.eZIP:console.log(`err883: downloadExport iExportFace ${p} invalid`);const tt=Ba(A),at=Ga(A),ft=Ea(A),Ke=e.pDef.partName+"_"+se+"_"+X()+tt;if(ft){const Ie=await Va(e.fgeom,t(i),$[e.pDef.partName],e.pDef,A);T(Ke,Ie)}else{const Ie=Ka(e.fgeom,$[e.pDef.partName],e.pDef,se,A);G(Ke,Ie,at)}}var ne=Dn(),ae=he(ne);Qs(ae,{get pDef(){return e.pDef},get pFig(){return t(d)}});var O=s(ae,2),k=s(o(O),2);Gt(k),l(O);var W=s(O,2),V=o(W),Q=s(o(V)),J=o(Q);we(J,17,()=>t(L),De,(p,N)=>{var w=jn(),A={},se=o(w,!0);l(w),K(()=>{A!==(A=t(N))&&(w.value=(w.__value=t(N))==null?"":t(N)),I(se,t(N))}),C(p,w)});var te=s(J);te.value=(te.__value=n)==null?"":n,l(Q),l(V),l(W);var de=s(W,2);mn(de,{get pDefSim(){return e.pDef.sim},get pFig(){return t(d)},get simTime(){return t(i)},set simTime(p){D(i,M(p))}});var re=s(de,2),B=s(o(re),2),fe=o(B);we(fe,17,()=>t(L),De,(p,N)=>{var w=xn(),A={},se=o(w);l(w),K(()=>{A!==(A=`svg_${t(N)??""}`)&&(w.value=(w.__value=`svg_${t(N)??""}`)==null?"":`svg_${t(N)??""}`),I(se,`face ${t(N)??""} as svg`)}),C(p,w)});var ce=s(fe);ce.value=(ce.__value="allsvg")==null?"":"allsvg";var me=s(ce);we(me,17,()=>t(L),De,(p,N)=>{var w=wn(),A={},se=o(w);l(w),K(()=>{A!==(A=`dxf_${t(N)??""}`)&&(w.value=(w.__value=`dxf_${t(N)??""}`)==null?"":`dxf_${t(N)??""}`),I(se,`face ${t(N)??""} as dxf`)}),C(p,w)});var je=s(me);je.value=(je.__value="alldxf")==null?"":"alldxf";var m=s(je);m.value=(m.__value="compute_log")==null?"":"compute_log";var y=s(m);y.value=(y.__value="pax")==null?"":"pax";var S=s(y);S.value=(S.__value="oscad")==null?"":"oscad";var R=s(S);R.value=(R.__value="ojscad")==null?"":"ojscad";var _e=s(R);_e.value=(_e.__value="freecad")==null?"":"freecad";var Le=s(_e);Le.value=(Le.__value="zip")==null?"":"zip",l(B);var Ne=s(B,2);Ne.__click=[yn,H,f];var Ce=s(Ne,2);hn(Ce,{get subD(){return t(q)},get origPartName(){return e.pDef.partName},get pLink(){return e.pLink}}),l(re),K(()=>{Mt(k,t(g)),pe(k,"colorErr",t(z)),pe(k,"colorWarn",t(_))}),dt(Q,()=>t(c),p=>D(c,p)),dt(B,()=>t(f),p=>D(f,p)),C(a,ne),ue()}Se(["click"]);var zn=F('<h1 class="svelte-1aya6oa"> </h1> <article class="svelte-1aya6oa"> </article> <!> <!>',1);function Sn(a,e){ve(e,!0),rs(e.pageDef);var n=zn(),r=he(n),u=o(r,!0);l(r);var v=s(r,2),i=o(v);l(v);var c=s(v,2);fs(c,{get pDef(){return e.pageDef.pDef}});var f=s(c,2);Ln(f,{get pDef(){return e.pageDef.pDef},get fgeom(){return e.pageDef.pGeom},get pLink(){return e.pLink}}),K(()=>{I(u,e.pageDef.pTitle),I(i,`[${e.pageDef.pDef.partName??""}]: ${e.pageDef.pDescription??""}`)}),C(a,n),ue()}function Xn(a,e){ve(e,!0),Sn(a,{get pageDef(){return e.data.pageDef},get pLink(){return e.data.allLink}}),ue()}export{Xn as component,In as universal};