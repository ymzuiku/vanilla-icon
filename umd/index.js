!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).vanillaIcon=t()}(this,function(){"use strict";var p=function(){return(p=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};return function(e,t){var n=t||{},i=n.size,o=void 0===i?"24px":i,r=n.type,s=void 0===r?"font":r,c=n.style,f=void 0===c?{}:c,l=n.iconfontClass,a=void 0===l?"iconfont":l,u=document.createElement("span");u.setAttribute("class",a+" icon-"+e);var d=p({display:"inline-block",textAlign:"center",fontSize:o,lineHeight:o},f);return Object.keys(d).forEach(function(e){u.style[e]=d[e]}),"svg"===s&&(u.innerHTML='<svg class="'+a+'" style="width:100%; height:100%" aria-hidden="true"><use xlink:href="#'+e+'"></use></svg>'),u}});
//# sourceMappingURL=index.js.map