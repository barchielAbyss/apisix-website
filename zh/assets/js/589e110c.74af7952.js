"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7667],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,b=f["".concat(p,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],c={title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",slug:"2021/08/09/apache-apisix-in-quliankeji",author:"\u76db\u5a01\u950b",keywords:["APISIX","Kong","Nginx","API \u7f51\u5173","BaaS"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002",tags:["User Case"]},p=void 0,u={permalink:"/zh/blog/2021/08/09/apache-apisix-in-quliankeji",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/08/09/Apache-APISIX-in-Quliankeji.md",title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002",date:"2021-08-09T00:00:00.000Z",formattedDate:"2021\u5e748\u67089\u65e5",tags:[{label:"User Case",permalink:"/zh/blog/tags/user-case"}],readingTime:15.535,truncated:!0,authors:[{name:"\u76db\u5a01\u950b"}],prevItem:{title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",permalink:"/zh/blog/2021/08/09/apache-apisix-in-china-mobile-cloud"},nextItem:{title:"\u5982\u4f55\u5229\u7528 Apache APISX \u63d0\u5347 Nginx \u7684\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx"}},l={authorsImageUrls:[void 0]},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u4e2d\u7684\u843d\u5730\u5b9e\u8df5\u60c5\u51b5\uff0c\u4ee5\u53ca\u8da3\u94fe\u79d1\u6280\u5728\u4f17\u591a\u7f51\u5173\u5e94\u7528\u4e2d\u9009\u62e9 Apache APISIX \u7684\u539f\u56e0\u3002")))}m.isMDXComponent=!0}}]);