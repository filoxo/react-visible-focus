!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e=e||self).ReactVisibleFocus=t(e.React)}(this,(function(e){"use strict";var t="default"in e?e.default:e;function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=["Tab","ArrowUp","ArrowDown","ArrowRight","ArrowLeft"];return function(i){var a=i.children,c=i.className,l=void 0===c?"focus-not-visible":c,f=i.elem,s=void 0===f?"div":f,y=n(i,["children","className","elem"]),d=o(e.useState(!1),2),b=d[0],p=d[1],v=e.useRef(!0),m=e.useCallback((function(e){v.current="INPUT"===e.target.nodeName}),[]),h=e.useCallback((function(){p(v.current)}),[]),w=e.useCallback((function(e){v.current=u.includes(e.key)}),[]);return t.createElement(s,r({},y,{onKeyDown:w,onFocus:h,onMouseDown:m,className:b?null:l}),a)}}));