"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46225],{35318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),h=o,m=f["".concat(p,".").concat(h)]||f[h]||s[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67335:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(25773),o=r(30808),a=(r(27378),r(35318)),i=["components"],c={title:"\u76f4\u64ad\u9884\u544a | \u4ece\u7f51\u5173\u5230\u6570\u636e\uff0c\u5206\u5e03\u5f0f\u5168\u94fe\u8def\u5728\u7ebf\u5e94\u7528\u5b9e\u8df5",keywords:["Apache APISIX","Apache ShardingSphere","Apache Skywalking","\u6570\u636e\u5e93","CyborgFlow"],description:"1 \u6708 15 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408 Apache Shardingshpere \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002",tags:["Events"]},p=void 0,u={permalink:"/zh/blog/2022/01/11/apisix-with-shardingsphere-meetup",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/11/apisix-with-shardingsphere-meetup.md",title:"\u76f4\u64ad\u9884\u544a | \u4ece\u7f51\u5173\u5230\u6570\u636e\uff0c\u5206\u5e03\u5f0f\u5168\u94fe\u8def\u5728\u7ebf\u5e94\u7528\u5b9e\u8df5",description:"1 \u6708 15 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408 Apache Shardingshpere \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002",date:"2022-01-11T00:00:00.000Z",formattedDate:"2022\u5e741\u670811\u65e5",tags:[{label:"Events",permalink:"/zh/blog/tags/events"}],readingTime:2.425,truncated:!0,authors:[],prevItem:{title:"\u4ece\u539f\u7406\u5230\u64cd\u4f5c\uff0c\u8ba9\u4f60\u5728 Apache APISIX \u4e2d\u4ee3\u7406 Dubbo \u670d\u52a1\u66f4\u4fbf\u6377",permalink:"/zh/blog/2022/01/13/how-to-proxy-dubbo-in-apache-apisix"},nextItem:{title:"\u5982\u4f55\u5728 ARM Ubuntu \u4e2d\u6784\u5efa Apache APISIX",permalink:"/zh/blog/2022/01/11/building-apisix-in-ubuntu-for-arm"}},l={authorsImageUrls:[]},s=[],f={toc:s};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"1 \u6708 15 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408 Apache Shardingshpere \u793e\u533a\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427\u3002")))}h.isMDXComponent=!0}}]);