// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-sign-mask@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";var a=2147483648,l=n(s),h=[0,0];function j(s){var j,f,b,v,p;return 0===s||o(s)||r(s)?s:(j=((f=n(s)>>>0)&t)>>>0,(f&=e)<l?(b=(n(p=0x40000000000000*s)&e)>>>0,p=m(j|(b=696219795+(b/3>>>0)>>>0),0)):p=i(p=0,j|(b=715094163+(f/3>>>0)>>>0)),p*=function(s){return 0===s?1.87595182427177:1.87595182427177+s*(s*(1.6214297201053545+s*(.14599619288661245*s-.758397934778766))-1.8849797954337717)}(v=p*p*(p/s)),d.assign(p,h,1,0),h[1]&a?(h[0]+=1,h[1]&=~a):h[1]|=a,p=m(4294967295&h[0],3221225472&h[1]),p+=p*(v=((v=s/(p*p))-p)/(p+p+v)))}export{j as default};
//# sourceMappingURL=index.mjs.map
