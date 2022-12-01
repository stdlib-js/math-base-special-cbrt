// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r=2147483647,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"";t=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,a,u,f;if(null==t)return e.call(t);n=t[i],f=i,r=null!=(u=t)&&o.call(u,f);try{t[i]=void 0}catch(r){return e.call(t)}return a=e.call(t),r?t[i]=n:delete t[i],a}:function(t){return e.call(t)};var a,u=t,f="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var t,r,n;if("function"!=typeof c)return!1;try{r=new c(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?l:function(){throw new Error("not implemented")};var y,p=a,b="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;y=function(){var t,r,n;if("function"!=typeof v)return!1;try{r=new v([1,3.14,-3.14,NaN]),n=r,t=(b&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?d:function(){throw new Error("not implemented")};var w,A=y,s="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var t,r,n;if("function"!=typeof _)return!1;try{r=new _(r=[1,3.14,-3.14,256,257]),n=r,t=(s&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?m:function(){throw new Error("not implemented")};var U,h=w,g="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var t,r,n;if("function"!=typeof j)return!1;try{r=new j(r=[1,3.14,-3.14,65536,65537]),n=r,t=(g&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,S={uint16:U,uint8:h};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,T=new A(1),N=new p(T.buffer);function H(t){return T[0]=t,N[F]}var G,P,x=!0===E?1:0,L=new A(1),V=new p(L.buffer),W=Number.POSITIVE_INFINITY,k=Number.NEGATIVE_INFINITY;!0===E?(G=1,P=0):(G=0,P=1);var Y={HIGH:G,LOW:P},C=new A(1),q=new p(C.buffer),z=Y.HIGH,B=Y.LOW;function D(t,r){return q[z]=t,q[B]=r,C[0]}var J,K="function"==typeof Object.defineProperty?Object.defineProperty:null,M=Object.defineProperty,Q=Object.prototype,R=Q.toString,X=Q.__defineGetter__,Z=Q.__defineSetter__,$=Q.__lookupGetter__,tt=Q.__lookupSetter__;J=function(){try{return K({},"x",{}),!0}catch(t){return!1}}()?M:function(t,r,n){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===R.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&($.call(t,r)||tt.call(t,r)?(e=t.__proto__,t.__proto__=Q,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&X&&X.call(t,r,n.get),a&&Z&&Z.call(t,r,n.set),t};var rt,nt,et=J;!0===E?(rt=1,nt=0):(rt=0,nt=1);var ot={HIGH:rt,LOW:nt},it=new A(1),at=new p(it.buffer),ut=ot.HIGH,ft=ot.LOW;function ct(t,r,n,e){return it[0]=t,r[e]=at[ut],r[e+n]=at[ft],r}function lt(t){return ct(t,[0,0],1,0)}et(lt,"assign",{configurable:!1,enumerable:!1,writable:!1,value:ct});var yt=2147483648,pt=H(22250738585072014e-324),bt=[0,0];return function(t){var n,e,o,i;return 0===t||function(t){return t!=t}(t)||function(t){return t===W||t===k}(t)?t:(n=(2147483648&(e=H(t)>>>0))>>>0,i=(e&=r)<pt?D(n|696219795+(((H(i=0x40000000000000*t)&r)>>>0)/3>>>0)>>>0,0):function(t,r){return L[0]=t,V[x]=r>>>0,L[0]}(i=0,n|715094163+(e/3>>>0)>>>0),i*=function(t){return 0===t?1.87595182427177:1.87595182427177+t*(t*(1.6214297201053545+t*(.14599619288661245*t-.758397934778766))-1.8849797954337717)}(o=i*i*(i/t)),lt.assign(i,bt,1,0),bt[1]&yt?(bt[0]+=1,bt[1]&=~yt):bt[1]|=yt,i=D(4294967295&bt[0],3221225472&bt[1]),i+=i*(o=((o=t/(i*i))-i)/(i+i+o)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).cbrt=r();
//# sourceMappingURL=index.js.map
