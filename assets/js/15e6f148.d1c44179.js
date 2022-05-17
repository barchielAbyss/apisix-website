"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93328],{35318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),g=o,m=h["".concat(u,".").concat(g)]||h[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2394:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],c={title:"Using the Apache APISIX proxy gRPC service",authors:[{name:"Bozhong Yu",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","gRPC","Google","proto","plugin"],description:"This article shows you how to proxy client HTTP traffic to the back-end gRPC service via the `grpc-transcode` plugin in Apache APISIX.",tags:["Technology"]},u=void 0,l={permalink:"/blog/2021/12/30/apisix-proxy-grpc-service",source:"@site/blog/2021/12/30/apisix-proxy-grpc-service.md",title:"Using the Apache APISIX proxy gRPC service",description:"This article shows you how to proxy client HTTP traffic to the back-end gRPC service via the `grpc-transcode` plugin in Apache APISIX.",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:4.02,truncated:!0,authors:[{name:"Bozhong Yu",title:"Author",url:"https://github.com/zaunist",image_url:"https://avatars.githubusercontent.com/u/38528079?v=4",imageURL:"https://avatars.githubusercontent.com/u/38528079?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Using Apache APISIX and Authing to implement Centralized Authentication Management",permalink:"/blog/2022/01/04/authing"},nextItem:{title:"Apache APISIX Dashboard Unauthorized Access Vulnerability Announcement (CVE-2021-45232)",permalink:"/blog/2021/12/28/dashboard-cve-2021-45232"}},p={authorsImageUrls:[void 0,void 0]},s=[],h={toc:s};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article shows you how to proxy client HTTP traffic to the back-end gRPC service via the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc-transcode")," plugin in Apache APISIX.")))}g.isMDXComponent=!0}}]);