"use strict";var O=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var A=O(function(w,q){
function M(e){return e===0?1.87595182427177:1.87595182427177+e*(-1.8849797954337717+e*(1.6214297201053545+e*(-.758397934778766+e*.14599619288661245)))}q.exports=M
});var f=O(function(y,L){
var c=require('@stdlib/constants-float64-smallest-normal/dist'),l=require('@stdlib/constants-float64-high-word-sign-mask/dist'),S=require('@stdlib/constants-float64-high-word-abs-mask/dist'),n=require('@stdlib/number-float64-base-get-high-word/dist'),H=require('@stdlib/number-float64-base-set-high-word/dist'),R=require('@stdlib/math-base-assert-is-infinite/dist'),W=require('@stdlib/number-float64-base-from-words/dist'),T=require('@stdlib/number-float64-base-to-words/dist'),g=require('@stdlib/math-base-assert-is-nan/dist'),p=A(),d=4294967295,h=3221225472,D=0x40000000000000,u=2147483648,K=1,N=715094163,B=696219795,E=n(c),t=[0,0];function G(e){var a,i,s,v,_,r,o;return e===0||g(e)||R(e)?e:(i=n(e)>>>0,a=(i&l)>>>0,i&=S,i<E?(r=D*e,s=(n(r)&S)>>>0,s=(s/3>>>0)+B>>>0,r=W(a|s,0)):(r=0,s=(i/3>>>0)+N>>>0,r=H(r,a|s)),v=r*r*(r/e),r*=p(v),T.assign(r,t,1,0),t[1]&u?(t[0]+=K,t[1]&=~u):t[1]|=u,r=W(t[0]&d,t[1]&h),_=r*r,v=e/_,o=r+r,v=(v-r)/(o+v),r+=r*v,r)}L.exports=G
});var I=f();module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
