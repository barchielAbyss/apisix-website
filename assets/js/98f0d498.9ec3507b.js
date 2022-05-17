"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3523],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,g=f["".concat(u,".").concat(m)]||f[m]||l[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(25773),o=n(30808),i=(n(27378),n(35318)),a=["components"],c={title:"Apache APISIX Extensions Guide",slug:"2021/10/29/extension-guide",author:"Zexuan Luo",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","Plugin","HTTP","Apache"],description:"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.",tags:["Technology"]},u=void 0,s={permalink:"/blog/2021/10/29/extension-guide",source:"@site/blog/2021/10/29/Extension-guide.md",title:"Apache APISIX Extensions Guide",description:"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.",date:"2021-10-29T00:00:00.000Z",formattedDate:"October 29, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:7.69,truncated:!0,authors:[{name:"Zexuan Luo",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"Weekly Report\uff5c10.15-10.31 Feature Highlights Update in Progress",permalink:"/blog/2021/11/02/weekly-report-1031"},nextItem:{title:"From 0 to 1, How APISIX Ingress Has Grown and Gained Since Joining The Community",permalink:"/blog/2021/10/26/apisix-ingress"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article provides an extension guide for Apache APISIX, aiming to provide users with some ideas for extending Apache APISIX.")))}m.isMDXComponent=!0}}]);