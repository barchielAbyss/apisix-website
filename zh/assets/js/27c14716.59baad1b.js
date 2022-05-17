"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2806],{35318:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(27378);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(n),m=r,c=k["".concat(u,".").concat(m)]||k[m]||s[m]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7286:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],p={title:"api-breaker"},u=void 0,o={unversionedId:"plugins/api-breaker",id:"plugins/api-breaker",isDocsHomePage:!1,title:"api-breaker",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/api-breaker.md",sourceDirName:"plugins",slug:"/plugins/api-breaker",permalink:"/zh/docs/apisix/next/plugins/api-breaker",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/api-breaker.md",tags:[],version:"current",frontMatter:{title:"api-breaker"},sidebar:"docs",previous:{title:"proxy-mirror",permalink:"/zh/docs/apisix/next/plugins/proxy-mirror"},next:{title:"traffic-split",permalink:"/zh/docs/apisix/next/plugins/traffic-split"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u65b9\u5f0f",id:"\u542f\u7528\u65b9\u5f0f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:d};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u5b9e\u73b0 API \u7194\u65ad\u529f\u80fd\uff0c\u5e2e\u52a9\u6211\u4eec\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u7194\u65ad\u8d85\u65f6\u903b\u8f91")),(0,l.kt)("p",null,"\u7531\u4ee3\u7801\u903b\u8f91\u81ea\u52a8\u6309",(0,l.kt)("strong",{parentName:"p"},"\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001"),"\u7684\u6b21\u6570\u9012\u589e\u8fd0\u7b97\uff1a"),(0,l.kt)("p",null,"\u6bcf\u5f53\u4e0a\u6e38\u670d\u52a1\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," \u914d\u7f6e\u4e2d\u7684\u72b6\u6001\u7801\uff08\u6bd4\u5982\uff1a500\uff09\uff0c\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," \u6b21\u65f6 (\u6bd4\u5982\uff1a3 \u6b21)\uff0c\u8ba4\u4e3a\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u7194\u65ad 2 \u79d2"),"\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0c2 \u79d2\u8fc7\u540e\u91cd\u65b0\u5f00\u59cb\u8f6c\u53d1\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\uff0c\u5982\u679c\u7ee7\u7eed\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," \u72b6\u6001\u7801\uff0c\u8bb0\u6570\u518d\u6b21\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," \u6b21\u65f6\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u7194\u65ad 4 \u79d2"),"\uff08\u500d\u6570\u65b9\u5f0f\uff09\u3002"),(0,l.kt)("p",null,"\u4f9d\u6b21\u7c7b\u63a8\uff0c2, 4, 8, 16, 32, 64, ..., 256\uff0c\u6700\u5927\u5230 300\u3002 300 \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"max_breaker_sec")," \u7684\u6700\u5927\u503c\uff0c\u5141\u8bb8\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u5728\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\uff0c\u5f53\u8f6c\u53d1\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\u5e76\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy.http_statuses")," \u914d\u7f6e\u4e2d\u7684\u72b6\u6001\u7801\uff08\u6bd4\u5982\uff1a200\uff09\uff0c\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy.successes")," \u6b21\u65f6 (\u6bd4\u5982\uff1a3 \u6b21)\uff0c\u8ba4\u4e3a\u4e0a\u6e38\u670d\u52a1\u6062\u590d\u5065\u5eb7\u72b6\u6001\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ..., 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u8fd4\u56de\u9519\u8bef\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u8fd4\u56de\u62a5\u6587")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u8fd4\u56de\u62a5\u6587\u5934\uff0c\u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u3002\u8fd9\u4e2a\u503c\u80fd\u591f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"$var")," \u7684\u683c\u5f0f\u5305\u542b Nginx \u53d8\u91cf\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"$remote_addr $balancer_ip"),"\u3002\u8be5\u5b57\u6bb5\u4ec5\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"break_response_body")," \u88ab\u914d\u7f6e\u65f6\u751f\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_breaker_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},">=3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u7194\u65ad\u6301\u7eed\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"{500}"),(0,l.kt)("td",{parentName:"tr",align:null},"[500, ..., 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u65f6\u5019\u7684\u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy.failures"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">=1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001\u7684\u8fde\u7eed\u9519\u8bef\u8bf7\u6c42\u6b21\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"{200}"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ..., 499]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5065\u5eb7\u65f6\u5019\u7684\u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">=1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u5065\u5eb7\u72b6\u6001\u7684\u8fde\u7eed\u6b63\u5e38\u8bf7\u6c42\u6b21\u6570")))),(0,l.kt)("h2",{id:"\u542f\u7528\u65b9\u5f0f"},"\u542f\u7528\u65b9\u5f0f"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684\u8def\u7531\u4e0a\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u3002\n\u5e94\u7b54 500 \u6216 503 \u8fde\u7eed 3 \u6b21\uff0c\u89e6\u53d1\u7194\u65ad\u3002\u5e94\u7b54 200 \u8fde\u7eed 1 \u6b21\uff0c\u6062\u590d\u5065\u5eb7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "api-breaker": {\n            "break_response_code": 502,\n            "unhealthy": {\n                "http_statuses": [500, 503],\n                "failures": 3\n            },\n            "healthy": {\n                "http_statuses": [200],\n                "successes": 1\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f7f\u7528\u4e0a\u6e38\u7684\u914d\u7f6e\uff0c\u5982\u679c\u4f60\u7684\u4e0a\u6d41\u670d\u52a1\u8fd4\u56de 500\uff0c\u8fde\u7eed 3 \u6b21\u3002\u5ba2\u6237\u7aef\u5c06\u4f1a\u6536\u5230 502\uff08break_response_code\uff09\u5e94\u7b54\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i "http://127.0.0.1:9080/hello"\nHTTP/1.1 502 Bad Gateway\nContent-Type: application/octet-stream\nConnection: keep-alive\nServer: APISIX/1.5\n\n... ...\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u60f3\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u65f6\uff0c\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff0c\u5373\u53ef\u7acb\u5373\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u73b0\u5728\u5df2\u88ab\u7981\u7528\uff0c\u5b83\u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u63d2\u4ef6\u3002"))}k.isMDXComponent=!0}}]);