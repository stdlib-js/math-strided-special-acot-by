// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).acotBy=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(e,r,t){var c,f,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,d="set"in t,f&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),d&&u&&u.call(e,r,t.set),e},_=r()?c:f;var d=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(e,r,t,n,o,a,u,i){var l,c,f,_;if(e<=0)return n;for(l=t<0?(1-e)*t:0,c=o<0?(1-e)*o:0,_=0;_<e;_++)void 0!==(f=u.call(i,r[l],_,l,c,r,n))&&(n[c]=a(f)),l+=t,c+=o;return n};d(p,"ndarray",(function(e,r,t,n,o,a,u,i,l,c){var f,_,d,p;if(e<=0)return o;for(f=n,_=u,p=0;p<e;p++)void 0!==(d=l.call(c,r[f],p,f,_,r,o))&&(o[_]=i(d)),f+=t,_+=a;return o}));var v=p;var y=function(e){return e!=e},b=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;var m=y,j=b,g=1.5707963267948966,I=s,h=function(e){return 0===e?-64.85021904942025:e*(e*(e*(-.8750608600031904*e-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025},w=function(e){return 0===e?194.5506571482614:194.5506571482614+e*(485.3903996359137+e*(432.88106049129027+e*(165.02700983169885+e*(24.858464901423062+1*e))))},T=6123233995736766e-32;var N=function(e){var r,t,n,o;return m(e)||0===e?e:e===j?g:e===I?-g:(e<0&&(t=!0,e=-e),r=0,e>2.414213562373095?(n=g,r=1,e=-1/e):e<=.66?n=0:(n=.7853981633974483,r=2,e=(e-1)/(e+1)),o=e*(o=(o=e*e)*h(o)/w(o))+e,2===r?o+=.5*T:1===r&&(o+=T),n+=o,t?-n:n)};var E=function(e){return N(1/e)},O=v,P=E;var S=v.ndarray,V=E;var x=function(e,r,t,n,o,a,u){return O(e,r,t,n,o,P,a,u)};return d(x,"ndarray",(function(e,r,t,n,o,a,u,i,l){return S(e,r,t,n,o,a,u,V,i,l)})),x}));
//# sourceMappingURL=bundle.js.map
