// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isInfinitef=n()}(this,(function(){"use strict";var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(t){return o.call(t)},f=Object.prototype.hasOwnProperty;var i=function(t,n){return null!=t&&f.call(t,n)},u="function"==typeof Symbol?Symbol.toStringTag:"",a=i,c=u,y=r;var l=function(t){var n,r,o;if(null==t)return y.call(t);r=t[c],n=a(t,c);try{t[c]=void 0}catch(n){return y.call(t)}return o=y.call(t),n?t[c]=r:delete t[c],o},p=e,b=l,v=n()?b:p,d=v,m="function"==typeof Float32Array;var s=function(t){return m&&t instanceof Float32Array||"[object Float32Array]"===d(t)},A=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null,h=s,S=A,F=w;var g="function"==typeof Float32Array?Float32Array:void 0,U=function(){throw new Error("not implemented")},I=function(){var t,n;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,5e40]),t=h(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===S}catch(n){t=!1}return t}()?g:U,T=v,j="function"==typeof Uint32Array;var O="function"==typeof Uint32Array?Uint32Array:null,E=function(t){return j&&t instanceof Uint32Array||"[object Uint32Array]"===T(t)},N=O;var x="function"==typeof Uint32Array?Uint32Array:void 0,P=function(){throw new Error("not implemented")},V=function(){var t,n;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),t=E(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?x:P,Y=V,_=new I(1);new Y(_.buffer)[0]=2139095040;var k,q=_[0],z=V,B=new I(1);new z(B.buffer)[0]=4286578688,k=B[0];var C=q,D=k;return function(t){return t===C||t===D}}));
//# sourceMappingURL=bundle.js.map
