"use strict";var O=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var A=O(function(w,q){
function M(e){return e===0?1.87595182427177:1.87595182427177+e*(-1.8849797954337717+e*(1.6214297201053545+e*(-.758397934778766+e*.14599619288661245)))}q.exports=M
});var f=O(function(y,L){
var c=require('@stdlib/constants-float64-smallest-normal/dist'),l=require('@stdlib/constants-float64-high-word-sign-mask/dist'),S=require('@stdlib/constants-float64-high-word-abs-mask/dist'),n=require('@stdlib/number-float64-base-get-high-word/dist'),H=require('@stdlib/number-float64-base-set-high-word/dist'),R=require('@stdlib/math-base-assert-is-infinite/dist'),W=require('@stdlib/number-float64-base-from-words/dist'),T=require('@stdlib/number-float64-base-to-words/dist'),g=require('@stdlib/math-base-assert-is-nan/dist'),p=A(),d=4294967295,h=3221225472,D=0x40000000000000,u=2147483648,K=1,N=715094163,B=696219795,E=n(c),v=[0,0];function G(e){var a,s,t,i,_,r,o;return e===0||g(e)||R(e)?e:(s=n(e)>>>0,a=(s&l)>>>0,s&=S,s<E?(r=D*e,t=(n(r)&S)>>>0,t=(t/3>>>0)+B>>>0,r=W(a|t,0)):(r=0,t=(s/3>>>0)+N>>>0,r=H(r,a|t)),i=r*r*(r/e),r*=p(i),T.assign(r,v,1,0),v[1]&u?(v[0]+=K,v[1]&=~u):v[1]|=u,r=W(v[0]&d,v[1]&h),_=r*r,i=e/_,o=r+r,i=(i-r)/(o+i),r+=r*i,r)}L.exports=G
});var I=f();module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
