"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21707],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=l,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69768:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(25773),l=n(30808),a=(n(27378),n(35318)),i=["components"],o={title:"file-logger"},p=void 0,u={unversionedId:"plugins/file-logger",id:"plugins/file-logger",isDocsHomePage:!1,title:"file-logger",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/file-logger.md",sourceDirName:"plugins",slug:"/plugins/file-logger",permalink:"/zh/docs/apisix/next/plugins/file-logger",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/file-logger.md",tags:[],version:"current",frontMatter:{title:"file-logger"},sidebar:"docs",previous:{title:"splunk-hec-logging",permalink:"/zh/docs/apisix/next/plugins/splunk-hec-logging"},next:{title:"loggly",permalink:"/zh/docs/apisix/next/plugins/loggly"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u5f00\u542f",id:"\u5982\u4f55\u5f00\u542f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[{value:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"file-logger")," \u662f\u4e00\u4e2a\u63d2\u4ef6\uff0c\u53ef\u5c06 Log \u6570\u636e\u6d41\u63a8\u9001\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8f93\u51fa\u8def\u5f84\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"logs/file.log"),"\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u8f93\u51fa\u6587\u4ef6\u8def\u5f84")))),(0,a.kt)("h2",{id:"\u5982\u4f55\u5f00\u542f"},"\u5982\u4f55\u5f00\u542f"),(0,a.kt)("p",null,"\u8fd9\u662f\u6709\u5173\u5982\u4f55\u4e3a\u7279\u5b9a\u8def\u7531\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"file-logger")," \u63d2\u4ef6\u7684\u793a\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "plugins": {\n    "file-logger": {\n      "path": "logs/file.log"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:9001": 1\n    }\n  },\n  "uri": "/hello"\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6210\u529f\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"logs")," \u76ee\u5f55\u4e0b\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"file.log")," \u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"log_format"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,a.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,a.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u5185\u7f6e\u53d8\u91cf"),"\u3002\u8bf7\u6ce8\u610f\uff0c",(0,a.kt)("strong",{parentName:"td"},"\u8be5\u8bbe\u7f6e\u662f\u5168\u5c40\u751f\u6548\u7684"),"\uff0c\u56e0\u6b64\u5728\u6307\u5b9a log_format \u540e\uff0c\u5c06\u5bf9\u6240\u6709\u7ed1\u5b9a file-logger \u7684 Route \u6216 Service \u751f\u6548\u3002")))),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/file-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,a.kt)("p",null,"\u5728\u65e5\u5fd7\u6536\u96c6\u5904\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\u4ee5\u7981\u7528 file-logger\u3002APISIX \u63d2\u4ef6\u662f\u70ed\u91cd\u8f7d\u7684\uff0c\u56e0\u6b64\u65e0\u9700\u91cd\u65b0\u542f\u52a8 APISIX\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);