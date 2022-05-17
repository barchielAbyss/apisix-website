"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17510],{35318:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,b=s["".concat(p,".").concat(m)]||s[m]||f[m]||a;return n?r.createElement(b,i(i({ref:t},l),{},{components:n})):r.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),i=["components"],c={title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",slug:"2021/08/09/apache-apisix-in-china-mobile-cloud",author:"Apache APISIX \u793e\u533a",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","\u4e2d\u56fd\u79fb\u52a8"],description:"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002",tags:["Interview"]},p=void 0,u={permalink:"/zh/blog/2021/08/09/apache-apisix-in-china-mobile-cloud",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/08/09/Apache-APISIX-in-China-Mobile-Cloud.md",title:"Apache APISIX \u5728\u79fb\u52a8\u4e91\u7684\u5e94\u7528",description:"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002",date:"2021-08-09T00:00:00.000Z",formattedDate:"2021\u5e748\u67089\u65e5",tags:[{label:"Interview",permalink:"/zh/blog/tags/interview"}],readingTime:17.4,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"Apache APISIX \u67b6\u6784\u5206\u6790\uff1a\u5982\u4f55\u52a8\u6001\u7ba1\u7406 Nginx \u96c6\u7fa4\uff1f",permalink:"/zh/blog/2021/08/10/apisix-nginx"},nextItem:{title:"\u820d\u5f03 Kong \u548c Nginx\uff0cApache APISIX \u5728\u8da3\u94fe\u79d1\u6280 BaaS \u5e73\u53f0\u7684\u843d\u5730\u5b9e\u8df5",permalink:"/zh/blog/2021/08/09/apache-apisix-in-quliankeji"}},l={authorsImageUrls:[void 0]},f=[],s={toc:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u6709\u5e78\u91c7\u8bbf\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u7684\u9648\u7131\u5c71\uff0c\u5728\u91c7\u8bbf\u4e2d\u6211\u4eec\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u516c\u6709\u4e91\u5efa\u8bbe\u53d1\u5c55\u6f14\u8fdb\u5386\u7a0b\uff0c\u4e86\u89e3\u4e86\u4e2d\u56fd\u79fb\u52a8\u4e91\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u7f51\u5173\uff0c\u5e76\u4e14\u77e5\u6653\u79fb\u52a8\u4e91\u540e\u7eed\u7684\u53d1\u5c55\u89c4\u5212\u3002")))}m.isMDXComponent=!0}}]);