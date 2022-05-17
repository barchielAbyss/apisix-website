"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21426],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,h=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66296:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],c={title:"Centralized Authentication with Apache APISIX and Advanced Tricks",author:"Xinxin Zhu",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["APISIX","Casbin","Authorization","Practical Case"],description:"This article introduces the authentication feature of Apache APISIX, in terms of importance and playful use, with detailed descriptions and details on its use.",tags:["Practical Case"]},u=void 0,s={permalink:"/blog/2021/09/07/how-to-use-apisix-auth",source:"@site/blog/2021/09/07/how-to-use-apisix-auth.md",title:"Centralized Authentication with Apache APISIX and Advanced Tricks",description:"This article introduces the authentication feature of Apache APISIX, in terms of importance and playful use, with detailed descriptions and details on its use.",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"Practical Case",permalink:"/blog/tags/practical-case"}],readingTime:7.94,truncated:!0,authors:[{name:"Xinxin Zhu",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"How can I contribute to an open source project without writing code?",permalink:"/blog/2021/09/09/how-to-contribute-to-an-openSource-without-coding"},nextItem:{title:"Based on Apache APISIX, iQIYI API Gateway Update and landing practice",permalink:"/blog/2021/09/07/iqiyi-usercase"}},p={authorsImageUrls:[void 0]},l=[],f={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes the authentication features of Apache APISIX, in terms of importance and usage.")))}d.isMDXComponent=!0}}]);