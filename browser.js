// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,r=n,o=function(t){return r.call(t)},e=Object.prototype.hasOwnProperty,f=function(t,n){return null!=t&&e.call(t,n)},i="function"==typeof Symbol?Symbol.toStringTag:"",u=f,a=i,y=n,l=function(t){var n,r,o;if(null==t)return y.call(t);r=t[a],n=u(t,a);try{t[a]=void 0}catch(n){return y.call(t)}return o=y.call(t),n?t[a]=r:delete t[a],o},c=o,p=l,b=t&&"symbol"==typeof Symbol.toStringTag?p:c,d=b,m="function"==typeof Float32Array,s=function(t){return m&&t instanceof Float32Array||"[object Float32Array]"===d(t)},A=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null,v=s,h=A,S=w,F="function"==typeof Float32Array?Float32Array:void 0,g=function(){throw new Error("not implemented")},U=function(){var t,n;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,5e40]),t=v(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===h}catch(n){t=!1}return t}()?F:g,I=b,T="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,O=function(t){return T&&t instanceof Uint32Array||"[object Uint32Array]"===I(t)},E=j,N="function"==typeof Uint32Array?Uint32Array:void 0,x=function(){throw new Error("not implemented")},P=function(){var t,n;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),t=O(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?N:x,V=P,Y=new U(1);new V(Y.buffer)[0]=2139095040;var _=Y[0],k=P,q=new U(1);new k(q.buffer)[0]=4286578688;var z=q[0];return function(t){return t===_||t===z}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isInfinitef=n();
//# sourceMappingURL=browser.js.map
