// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e=2147483647,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";r=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,c,f;if(null==r)return n.call(r);t=r[o],f=o,e=null!=(c=r)&&i.call(c,f);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=t:delete r[o],a}:function(r){return n.call(r)};var c,f=r,u="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;c=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=c,d="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,t;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),t=e,r=(d&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var w,b=p,v="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,e,t;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),t=e,r=(v&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=w,U="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,t;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),t=e,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var x,k={uint16:_,uint8:E};(x=new k.uint16(1))[0]=4660;var F=52===new k.uint8(x.buffer)[0],j=!0===F?1:0,T=new b(1),O=new y(T.buffer);function V(r){return T[0]=r,O[j]}var N,$,G=!0===F?1:0,H=new b(1),W=new y(H.buffer),C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;!0===F?(N=1,$=0):(N=0,$=1);var P={HIGH:N,LOW:$},R=new b(1),Z=new y(R.buffer),X=P.HIGH,Y=P.LOW;function z(r,e){return Z[X]=r,Z[Y]=e,R[0]}var M="function"==typeof Object.defineProperty?Object.defineProperty:null,q=Object.defineProperty;function B(r){return"number"==typeof r}function D(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function J(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+D(i):D(i)+r,n&&(r="-"+r)),r}var K=String.prototype.toLowerCase,Q=String.prototype.toUpperCase;function rr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!B(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=J(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=J(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Q.call(r.specifier)?Q.call(t):K.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function er(r){return"string"==typeof r}var tr=Math.abs,nr=String.prototype.toLowerCase,ir=String.prototype.toUpperCase,ar=String.prototype.replace,or=/e\+(\d)$/,cr=/e-(\d)$/,fr=/^(\d+)$/,ur=/^(\d+)e/,sr=/\.0$/,lr=/\.0*e/,pr=/(\..*[^0])0*e/;function yr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!B(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":tr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ar.call(t,pr,"$1e"),t=ar.call(t,lr,"e"),t=ar.call(t,sr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ar.call(t,or,"e+0$1"),t=ar.call(t,cr,"e-0$1"),r.alternate&&(t=ar.call(t,fr,"$1."),t=ar.call(t,ur,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ir.call(r.specifier)?ir.call(t):nr.call(t)}function dr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function gr(r,e,t){var n=e-r.length;return n<0?r:r=t?r+dr(n):dr(n)+r}var hr=String.fromCharCode,wr=isNaN,br=Array.isArray;function vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function mr(r){var e,t,n,i,a,o,c,f,u;if(!br(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(er(n=r[f]))o+=n;else{if(e=void 0!==n.precision,!(n=vr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,wr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,wr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=rr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!wr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=wr(a)?String(n.arg):hr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=yr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=J(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=gr(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _r(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Er(r){var e,t,n,i;for(t=[],i=0,n=Ar.exec(r);n;)(e=r.slice(i,Ar.lastIndex-n[0].length)).length&&t.push(e),t.push(_r(n)),i=Ar.lastIndex,n=Ar.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Ur(r){return"string"==typeof r}function Ir(r){var e,t;if(!Ur(r))throw new TypeError(Ir("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Er(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return mr.apply(null,e)}var Sr,xr=Object.prototype,kr=xr.toString,Fr=xr.__defineGetter__,jr=xr.__defineSetter__,Tr=xr.__lookupGetter__,Or=xr.__lookupSetter__;Sr=function(){try{return M({},"x",{}),!0}catch(r){return!1}}()?q:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===kr.call(r))throw new TypeError(Ir("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===kr.call(t))throw new TypeError(Ir("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Tr.call(r,e)||Or.call(r,e)?(n=r.__proto__,r.__proto__=xr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Fr&&Fr.call(r,e,t.get),o&&jr&&jr.call(r,e,t.set),r};var Vr,Nr,$r=Sr;!0===F?(Vr=1,Nr=0):(Vr=0,Nr=1);var Gr={HIGH:Vr,LOW:Nr},Hr=new b(1),Wr=new y(Hr.buffer),Cr=Gr.HIGH,Lr=Gr.LOW;function Pr(r,e,t,n){return Hr[0]=r,e[n]=Wr[Cr],e[n+t]=Wr[Lr],e}function Rr(r){return Pr(r,[0,0],1,0)}$r(Rr,"assign",{configurable:!1,enumerable:!1,writable:!1,value:Pr});var Zr=2147483648,Xr=V(22250738585072014e-324),Yr=[0,0];return function(r){var t,n,i,a;return 0===r||function(r){return r!=r}(r)||function(r){return r===C||r===L}(r)?r:(t=(2147483648&(n=V(r)>>>0))>>>0,a=(n&=e)<Xr?z(t|696219795+(((V(a=0x40000000000000*r)&e)>>>0)/3>>>0)>>>0,0):function(r,e){return H[0]=r,W[G]=e>>>0,H[0]}(a=0,t|715094163+(n/3>>>0)>>>0),a*=function(r){return 0===r?1.87595182427177:1.87595182427177+r*(r*(1.6214297201053545+r*(.14599619288661245*r-.758397934778766))-1.8849797954337717)}(i=a*a*(a/r)),Rr.assign(a,Yr,1,0),Yr[1]&Zr?(Yr[0]+=1,Yr[1]&=~Zr):Yr[1]|=Zr,a=z(4294967295&Yr[0],3221225472&Yr[1]),a+=a*(i=((i=r/(a*a))-a)/(a+a+i)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cbrt=e();
//# sourceMappingURL=browser.js.map
