// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,l){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=t,delete r[e],r[e]=l.value,r.__proto__=c):r[e]=l.value),_="get"in l,p="set"in l,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(r,e,l.get),p&&a&&a.call(r,e,l.set),r};function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function f(r,e,t,n,o,a,u,i){var l,c,f,_;if(r<=0)return n;for(l=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,_=0;_<r;_++)void 0!==(f=u.call(i,e[l],_,l,c,e,n))&&(n[c]=a(f)),l+=t,c+=o;return n}function _(r,e,t,n,o,a,u,i,l,c){var f,_,p,b;if(r<=0)return o;for(f=n,_=u,b=0;b<r;b++)void 0!==(p=l.call(c,e[f],b,f,_,e,o))&&(o[_]=i(p)),f+=t,_+=a;return o}c(f,"ndarray",_);var p=Number.POSITIVE_INFINITY,b=1.5707963267948966,d=Number.NEGATIVE_INFINITY;function v(r){return function(r){var e,t,n,o;return function(r){return r!=r}(r)||0===r?r:r===p?b:r===d?-b:(r<0&&(t=!0,r=-r),e=0,r>2.414213562373095?(n=b,e=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,e=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===e?o+=3061616997868383e-32:1===e&&(o+=6123233995736766e-32),n+=o,t?-n:n)}(1/r)}function y(r,e,t,n,o,a,u){return f(r,e,t,n,o,v,a,u)}function s(r,e,t,n,o,a,u,i,l){return _(r,e,t,n,o,a,u,v,i,l)}c(y,"ndarray",s);export{y as default,s as ndarray};
//# sourceMappingURL=mod.js.map
