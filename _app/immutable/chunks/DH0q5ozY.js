var Ln=Array.isArray,Qt=Array.prototype.indexOf,Mn=Array.from,Yn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Hn=Object.prototype,jn=Array.prototype,nn=Object.getPrototypeOf;const Bn=()=>{};function Un(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,j=8,it=16,D=32,B=64,K=128,m=256,$=512,h=1024,R=2048,L=4096,P=8192,nt=16384,rn=32768,At=65536,Vn=1<<17,en=1<<19,kt=1<<20,dt=Symbol("$state"),Gn=Symbol("legacy props"),Kn=Symbol("");function Dt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!sn(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function un(t){throw new Error("https://svelte.dev/e/effect_orphan")}function on(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $n(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let rt=!1;function Xn(){rt=!0}const Jn=1,Qn=2,tr=4,nr=8,rr=16,er=1,sr=2,lr=4,ar=8,ur=16,or=1,fr=2,cn="[",vn="[!",pn="]",Rt={},ir=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function Et(t){i=t}function _r(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},rt&&!n&&(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function cr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),X(l.reaction),Ft(l.fn)}}finally{J(r),X(e)}}i=n.p,n.m=!0}return{}}function et(){return!rt||i!==null&&i.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function vr(t){return hn(_t(t))}function pr(t,n=!1){var e;const r=_t(t);return n||(r.equals=It),rt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function hn(t){return u!==null&&!k&&u.f&y&&(T===null?Sn([t]):T.push(t)),t}function hr(t,n){return u!==null&&!k&&et()&&u.f&(y|it)&&(T===null||!T.includes(t))&&_n(),dn(t,n)}function dn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),Ot(t,R),et()&&f!==null&&f.f&h&&!(f.f&(D|B))&&(A===null?On([t]):A.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=et(),s=r.length,l=0;l<s;l++){var a=r[l],_=a.f;_&R||!e&&a===f||(g(a,n),_&(h|m)&&(_&y?Ot(a,L):lt(a)))}}let O=!1;function dr(t){O=t}let c;function F(t){if(t===null)throw St(),Rt;return c=t}function Er(){return F(C(c))}function wr(t){if(O){if(C(c)!==null)throw St(),Rt;c=t}}function yr(t=1){if(O){for(var n=t,r=c;n--;)r=C(r);c=r}}function Tr(){for(var t=0,n=c;;){if(n.nodeType===8){var r=n.data;if(r===pn){if(t===0)return n;t-=1}else(r===cn||r===vn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var wt,xt,Ct;function mr(){if(wt===void 0){wt=window;var t=Element.prototype,n=Node.prototype;xt=ht(n,"firstChild").get,Ct=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Z(t=""){return document.createTextNode(t)}function at(t){return xt.call(t)}function C(t){return Ct.call(t)}function gr(t,n){if(!O)return at(t);var r=at(c);if(r===null)r=c.appendChild(Z());else if(n&&r.nodeType!==3){var e=Z();return r==null||r.before(e),F(e),e}return F(r),r}function Ar(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?C(r):r}if(n&&(c==null?void 0:c.nodeType)!==3){var e=Z();return c==null||c.before(e),F(e),e}return c}function kr(t,n=1,r=!1){let e=O?c:t;for(var s;n--;)s=e,e=C(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=Z();return e===null?s==null||s.after(a):e.before(a),F(a),a}return F(e),e}function Dr(t){t.textContent=""}function Nt(t){var n=y|R,r=u!==null&&u.f&y?u:null;return f===null||r!==null&&r.f&m?n|=m:f.f|=kt,{ctx:i,deps:null,effects:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Ir(t){const n=Nt(t);return n.equals=It,n}function bt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)x(n[r])}}function En(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function wn(t){var n,r=f;J(En(t));try{bt(t),n=Zt(t)}finally{J(r)}return n}function qt(t){var n=wn(t),r=(I||t.f&m)&&t.deps!==null?L:h;g(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function Pt(t){f===null&&u===null&&un(),u!==null&&u.f&m&&f===null&&an(),ct&&ln()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var s=(t&B)!==0,l=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=b;try{yt(!0),vt(a),a.f|=rn}catch(N){throw x(a),N}finally{yt(_)}}else n!==null&&lt(a);var w=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|K))===0;if(!w&&!s&&e&&(l!==null&&yn(a,l),u!==null&&u.f&y)){var v=u;(v.effects??(v.effects=[])).push(a)}return a}function Rr(t){const n=M(j,null,!1);return g(n,h),n.teardown=t,n}function Sr(t){Pt();var n=f!==null&&(f.f&D)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ft(t);return e}}function Or(t){return Pt(),Tn(t)}function xr(t){const n=M(B,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{x(n),e(void 0)}):(x(n),e(void 0))})}function Ft(t){return M(gt,t,!1)}function Tn(t){return M(j,t,!0)}function Cr(t,n=[],r=Nt){const e=n.map(r);return mn(()=>t(...e.map(Pn)))}function mn(t,n=0){return M(j|it|n,t,!0)}function Nr(t,n=!0){return M(j|D,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;Tt(!0),X(null);try{n.call(null)}finally{Tt(r),X(e)}}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;x(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||x(n),n=r}}function x(t,n=!0){var r=!1;if((n||t.f&en)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:C(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),tt(t,0),g(t,nt);var a=t.transitions;if(a!==null)for(const w of a)w.stop();Lt(t);var _=t.parent;_!==null&&_.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];Ht(t,r,!0),kn(r,()=>{x(t),n&&n()})}function kn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ht(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&D)!==0;Ht(e,n,l?r:!1),e=s}}}function br(t){jt(t,!0)}function jt(t,n){if(t.f&P){t.f^=P,t.f&h||(t.f^=h),U(t)&&(g(t,R),lt(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&D)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let z=!1,W=!1,ut=[],ot=[];function Bt(){z=!1;const t=ut.slice();ut=[],mt(t)}function Ut(){W=!1;const t=ot.slice();ot=[],mt(t)}function qr(t){z||(z=!0,queueMicrotask(Bt)),ut.push(t)}function Pr(t){W||(W=!0,Dn(Ut)),ot.push(t)}function In(){z&&Bt(),W&&Ut()}const Vt=0,Rn=1;let V=!1,G=Vt,Y=!1,H=null,b=!1,ct=!1;function yt(t){b=t}function Tt(t){ct=t}let S=[],q=0;let u=null,k=!1;function X(t){u=t}let f=null;function J(t){f=t}let T=null;function Sn(t){T=t}let p=null,E=0,A=null;function On(t){A=t}let Gt=1,Q=0,I=!1;function Kt(){return++Gt}function U(t){var v;var n=t.f;if(n&R)return!0;if(n&L){var r=t.deps,e=(n&m)!==0;if(r!==null){var s,l,a=(n&$)!==0,_=e&&f!==null&&!I,w=r.length;if(a||_){for(s=0;s<w;s++)l=r[s],(a||!((v=l==null?void 0:l.reactions)!=null&&v.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=$)}for(s=0;s<w;s++)if(l=r[s],U(l)&&qt(l),l.wv>t.wv)return!0}(!e||f!==null&&!I)&&g(t,h)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&K)try{r.fn(t);return}catch{r.f^=K}r=r.parent}throw V=!1,t}function Cn(t){return(t.f&nt)===0&&(t.parent===null||(t.parent.f&K)===0)}function st(t,n,r,e){if(V){if(r===null&&(V=!1),Cn(n))throw t;return}r!==null&&(V=!0);{xn(t,n);return}}function $t(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&y?$t(l,n,r+1):n===l&&(r===0?g(l,R):l.f&h&&g(l,L),lt(l))}}function Zt(t){var pt;var n=p,r=E,e=A,s=u,l=I,a=T,_=i,w=k,v=t.f;p=null,E=0,A=null,u=v&(D|B)?null:t,I=(v&m)!==0&&(!b||s===null||w),T=null,Et(t.ctx),k=!1,Q++;try{var N=(0,t.fn)(),d=t.deps;if(p!==null){var o;if(tt(t,E),d!==null&&E>0)for(d.length=E+p.length,o=0;o<p.length;o++)d[E+o]=p[o];else t.deps=d=p;if(!I)for(o=E;o<d.length;o++)((pt=d[o]).reactions??(pt.reactions=[])).push(t)}else d!==null&&E<d.length&&(tt(t,E),d.length=E);if(et()&&A!==null&&!(t.f&(y|L|R)))for(o=0;o<A.length;o++)$t(A[o],t);return s!==null&&Q++,N}finally{p=n,E=r,A=e,u=s,I=l,T=a,Et(_),k=w}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=Qt.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(p===null||!p.includes(n))&&(g(n,L),n.f&(m|$)||(n.f^=$),bt(n),tt(n,0))}function tt(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function vt(t){var n=t.f;if(!(n&nt)){g(t,h);var r=f,e=i;f=t;try{n&it?gn(t):Mt(t),Lt(t);var s=Zt(t);t.teardown=typeof s=="function"?s:null,t.wv=Gt;var l=t.deps,a}catch(_){st(_,t,r,e||t.ctx)}finally{f=r}}}function zt(){if(q>1e3){q=0;try{on()}catch(t){if(H!==null)st(t,H,null);else throw t}}q++}function Wt(t){var n=t.length;if(n!==0){zt();var r=b;b=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Xt(s,l),bn(l)}}finally{b=r}}}function bn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(nt|P)))try{U(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(s){st(s,e,null,e.ctx)}}}function qn(){if(Y=!1,q>1001)return;const t=S;S=[],Wt(t),Y||(q=0,H=null)}function lt(t){G===Vt&&(Y||(Y=!0,queueMicrotask(qn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|D)){if(!(r&h))return;n.f^=h}}S.push(n)}function Xt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&D)!==0,a=l&&(s&h)!==0,_=r.next;if(!a&&!(s&P))if(s&j){if(l)r.f^=h;else{var w=u;try{u=r,U(r)&&vt(r)}catch(o){st(o,r,null,r.ctx)}finally{u=w}}var v=r.first;if(v!==null){r=v;continue}}else s&gt&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var N=o.next;if(N!==null){r=N;continue t}o=o.parent}}r=_}for(var d=0;d<e.length;d++)v=e[d],n.push(v),Xt(v,n)}function Jt(t){var n=G,r=S;try{zt();const s=[];G=Rn,S=s,Y=!1,Wt(r);var e=t==null?void 0:t();return In(),(S.length>0||s.length>0)&&Jt(),q=0,H=null,e}finally{G=n,S=r}}async function Fr(){await Promise.resolve(),Jt()}function Pn(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!k){T!==null&&T.includes(t)&&fn();var e=u.deps;t.rv<Q&&(t.rv=Q,p===null&&e!==null&&e[E]===t?E++:p===null?p=[t]:(!I||!p.includes(t))&&p.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,l=s.parent;l!==null&&!(l.f&m)&&(s.f^=m)}return r&&(s=t,U(s)&&qt(s)),t.v}function Lr(t){var n=k;try{return k=!0,t()}finally{k=n}}const Fn=-7169;function g(t,n){t.f=t.f&Fn|n}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Gn as $,_t as A,Wn as B,hr as C,ht as D,At as E,f as F,zn as G,nn as H,Ln as I,Er as J,vn as K,Tr as L,F as M,dr as N,br as O,An as P,Ft as Q,Tn as R,dt as S,qr as T,ir as U,Zn as V,Vn as W,lr as X,It as Y,pr as Z,ar as _,cr as a,sr as a0,D as a1,B as a2,J as a3,er as a4,ur as a5,Ir as a6,Jt as a7,Yn as a8,vr as a9,kn as aA,rr as aB,Kn as aC,tn as aD,Pr as aE,et as aF,wt as aG,sn as aH,Fr as aa,yr as ab,at as ac,Dr as ad,Rr as ae,X as af,u as ag,Z as ah,or as ai,fr as aj,mr as ak,cn as al,C as am,Rt as an,pn as ao,St as ap,$n as aq,Mn as ar,xr as as,tr as at,P as au,Jn as av,dn as aw,Qn as ax,nr as ay,Ht as az,mn as b,gr as c,Nr as d,x as e,Ar as f,c as g,O as h,Xn as i,Pn as j,i as k,rt as l,Lr as m,Bn as n,Or as o,_r as p,mt as q,wr as r,kr as s,Cr as t,Sr as u,Un as v,Mr as w,Nt as x,Hn as y,jn as z};
