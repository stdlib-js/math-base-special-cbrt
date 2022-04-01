// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).cbrt=r()}(this,(function(){"use strict";var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return n&&"symbol"==typeof Symbol.toStringTag},t=Object.prototype.toString,o=t;var e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty;var u=function(n,r){return null!=n&&i.call(n,r)},f="function"==typeof Symbol?Symbol.toStringTag:"",a=u,c=f,y=t;var l=e,v=function(n){var r,t,o;if(null==n)return y.call(n);t=n[c],r=a(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return o=y.call(n),r?n[c]=t:delete n[c],o},p=r()?v:l,A=p,b="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null,U=function(n){return b&&n instanceof Uint32Array||"[object Uint32Array]"===A(n)},d=w;var m=function(){var n,r;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=U(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var s="function"==typeof Uint32Array?Uint32Array:void 0,h=function(){throw new Error("not implemented")},I=m()?s:h,F=p,N="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null,g=function(n){return N&&n instanceof Float64Array||"[object Float64Array]"===F(n)},H=S;var O=function(){var n,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),n=g(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=p,L="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,x=function(n){return L&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},P=W;var V=function(){var n,r;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=x(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,q=p,z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null,C=function(n){return z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n)},D=B;var J=function(){var n,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,65536,65537]),n=C(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var K,M="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:J()?M:Q,uint8:k};(K=new R.uint16(1))[0]=4660;var X=52===new R.uint8(K.buffer)[0],Z=I,$=!0===X?1:0,nn=new E(1),rn=new Z(nn.buffer);var tn=function(n){return nn[0]=n,rn[$]},on=I,en=!0===X?1:0,un=new E(1),fn=new on(un.buffer);var an=function(n,r){return un[0]=n,fn[en]=r>>>0,un[0]},cn=an,yn=Number.POSITIVE_INFINITY,ln=Number.NEGATIVE_INFINITY,vn=yn,pn=ln;var An,bn,wn=function(n){return n===vn||n===pn};!0===X?(An=1,bn=0):(An=0,bn=1);var Un=I,dn={HIGH:An,LOW:bn},mn=new E(1),sn=new Un(mn.buffer),hn=dn.HIGH,In=dn.LOW;var Fn,Nn,Sn=function(n,r){return sn[hn]=n,sn[In]=r,mn[0]},gn=Sn;!0===X?(Fn=1,Nn=0):(Fn=0,Nn=1);var Hn=I,On={HIGH:Fn,LOW:Nn},Tn=new E(1),jn=new Hn(Tn.buffer),En=On.HIGH,Gn=On.LOW;var Ln=function(n,r){return Tn[0]=r,n[0]=jn[En],n[1]=jn[Gn],n};var Wn=function(n,r){return 1===arguments.length?Ln([0,0],n):Ln(n,r)};var xn=tn,Pn=cn,Vn=wn,Yn=gn,_n=Wn,kn=function(n){return n!=n},qn=function(n){return 0===n?1.87595182427177:1.87595182427177+n*(n*(1.6214297201053545+n*(.14599619288661245*n-.758397934778766))-1.8849797954337717)},zn=2147483647,Bn=2147483648,Cn=xn(22250738585072014e-324),Dn=[0,0];return function(n){var r,t,o,e,i;return 0===n||kn(n)||Vn(n)?n:(r=(2147483648&(t=xn(n)>>>0))>>>0,(t&=zn)<Cn?(o=(xn(i=0x40000000000000*n)&zn)>>>0,i=Yn(r|(o=696219795+(o/3>>>0)>>>0),0)):i=Pn(i=0,r|(o=715094163+(t/3>>>0)>>>0)),i*=qn(e=i*i*(i/n)),_n(Dn,i),Dn[1]&Bn?(Dn[0]+=1,Dn[1]&=~Bn):Dn[1]|=Bn,i=Yn(4294967295&Dn[0],3221225472&Dn[1]),i+=i*(e=((e=n/(i*i))-i)/(i+i+e)))}}));
//# sourceMappingURL=bundle.js.map
