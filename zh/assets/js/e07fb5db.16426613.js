"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30846],{35318:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(t),m=a,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||i;return t?r.createElement(d,l(l({ref:n},s),{},{components:t})):r.createElement(d,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},24238:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(25773),a=t(30808),i=(t(27378),t(35318)),l=["components"],o={title:"csrf"},p=void 0,u={unversionedId:"plugins/csrf",id:"version-2.13/plugins/csrf",isDocsHomePage:!1,title:"csrf",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/csrf.md",sourceDirName:"plugins",slug:"/plugins/csrf",permalink:"/zh/docs/apisix/plugins/csrf",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"csrf"},sidebar:"version-2.13/docs",previous:{title:"consumer-restriction",permalink:"/zh/docs/apisix/plugins/consumer-restriction"},next:{title:"public-api",permalink:"/zh/docs/apisix/plugins/public-api"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:s};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CSRF")," \u63d2\u4ef6\u57fa\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Double_Submit_Cookie"},(0,i.kt)("inlineCode",{parentName:"a"},"Double Submit Cookie"))," \u7684\u65b9\u5f0f\uff0c\u4fdd\u62a4\u60a8\u7684 API \u514d\u4e8e CSRF \u653b\u51fb\u3002\u672c\u63d2\u4ef6\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIONS")," \u65b9\u6cd5\u662f\u5b89\u5168\u64cd\u4f5c\u3002\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIONS")," \u65b9\u6cd5\u7684\u8c03\u7528\u4e0d\u4f1a\u88ab\u68c0\u67e5\u62e6\u622a\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HEAD")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIONS")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"safe-methods"),"\uff0c\u5176\u4ed6\u7684\u8bf7\u6c42\u65b9\u6cd5\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-methods"),"\u3002"),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"apisix-csrf-token")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u751f\u6210\u7684 Cookie \u4e2d\u7684 token \u7684\u540d\u5b57\uff0c\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a\u540d\u5b57\u5728\u8bf7\u6c42\u5934\u643a\u5e26 Cookie \u4e2d\u7684\u5185\u5bb9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expires"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"7200")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"CSRF Cookie \u7684\u8fc7\u671f\u65f6\u95f4(\u79d2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"key"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"\u52a0\u5bc6 token \u7684\u79d8\u94a5")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u5f53 expires \u8bbe\u7f6e\u4e3a 0 \u65f6\u63d2\u4ef6\u5c06\u5ffd\u7565\u68c0\u67e5 Token \u662f\u5426\u8fc7\u671f")),(0,i.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u6761\u8def\u7531\u5e76\u542f\u7528\u8be5\u63d2\u4ef6\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "plugins": {\n    "csrf": {\n      "key": "edd1c9f034335f136f87ad84b625c8f1"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:9001": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"\u8fd9\u6761\u8def\u7531\u5df2\u7ecf\u5f00\u542f\u4fdd\u62a4\uff0c\u5f53\u4f60\u4f7f\u7528 GET \u4e4b\u5916\u7684\u65b9\u6cd5\u8bbf\u95ee\uff0c\u8bf7\u6c42\u4f1a\u88ab\u62e6\u622a\u5e76\u8fd4\u56de 401 \u72b6\u6001\u7801\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," \u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"li"},"/hello"),"\uff0c\u5728\u54cd\u5e94\u4e2d\u4f1a\u6709\u4e00\u4e2a\u643a\u5e26\u4e86\u52a0\u5bc6 ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Cookie"),"\u3002Token \u5b57\u6bb5\u7684\u540d\u5b57\u4e3a\u63d2\u4ef6\u914d\u7f6e\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," \u503c\uff0c\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u8be5\u503c\uff0c\u90a3\u4e48\u9ed8\u8ba4\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-csrf-token"),"\u3002")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Cookie\u3002"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u5728\u540e\u7eed\u7684\u5bf9\u8be5\u8def\u7531\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"unsafe-methods")," \u8bf7\u6c42\u4e2d\uff0c\u9700\u8981\u4ece Cookie \u4e2d\u8bfb\u53d6\u52a0\u5bc6\u7684 token\uff0c\u4fdd\u8bc1\u643a\u5e26 Cookie \u5e76\u5728\u8bf7\u6c42\u5934\u90e8\u4e2d\u643a\u5e26\u8be5 token\uff0c\u8bf7\u6c42\u5934\u5b57\u6bb5\u7684\u540d\u79f0\u4e3a\u63d2\u4ef6\u914d\u7f6e\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),"\u3002")),(0,i.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,i.kt)("p",null,"\u76f4\u63a5\u5bf9\u8be5\u8def\u7531\u53d1\u8d77 ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\u4f1a\u8fd4\u56de\u9519\u8bef\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/hello -X POST\n\nHTTP/1.1 401 Unauthorized\n...\n{"error_msg":"no csrf token in headers"}\n')),(0,i.kt)("p",null,"\u5f53\u4f7f\u7528 GET \u8bf7\u6c42\uff0c\u8fd4\u56de\u4e2d\u4f1a\u6709\u643a\u5e26 token \u7684 Cookie\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n\nHTTP/1.1 200 OK\nSet-Cookie: apisix-csrf-token=eyJyYW5kb20iOjAuNjg4OTcyMzA4ODM1NDMsImV4cGlyZXMiOjcyMDAsInNpZ24iOiJcL09uZEF4WUZDZGYwSnBiNDlKREtnbzVoYkJjbzhkS0JRZXVDQm44MG9ldz0ifQ==;path=/;Expires=Mon, 13-Dec-21 09:33:55 GMT\n")),(0,i.kt)("p",null,"\u5728\u8bf7\u6c42\u4e4b\u524d\uff0c\u9700\u8981\u4ece Cookie \u4e2d\u8bfb\u53d6 token\uff0c\u5e76\u5728\u968f\u540e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafe-methods")," \u8bf7\u6c42\u4e2d\u7684\u8bf7\u6c42\u5934\u4e2d\u643a\u5e26\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u5ba2\u6237\u7aef\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-cookie/js-cookie"},"js-cookie")," \u8bfb\u53d6 Cookie\uff0c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," \u53d1\u9001\u8bf7\u6c42\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const token = Cookie.get('apisix-csrf-token');\n\nconst instance = axios.create({\n  headers: {'apisix-csrf-token': token}\n});\n")),(0,i.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u786e\u4fdd\u4f60\u7684\u8bf7\u6c42\u643a\u5e26\u4e86Cookie\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 curl \u53d1\u9001\u8bf7\u6c42\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X POST -H 'apisix-csrf-token: eyJyYW5kb20iOjAuNjg4OTcyMzA4ODM1NDMsImV4cGlyZXMiOjcyMDAsInNpZ24iOiJcL09uZEF4WUZDZGYwSnBiNDlKREtnbzVoYkJjbzhkS0JRZXVDQm44MG9ldz0ifQ==' -b 'apisix-csrf-token=eyJyYW5kb20iOjAuNjg4OTcyMzA4ODM1NDMsImV4cGlyZXMiOjcyMDAsInNpZ24iOiJcL09uZEF4WUZDZGYwSnBiNDlKREtnbzVoYkJjbzhkS0JRZXVDQm44MG9ldz0ifQ=='\n\nHTTP/1.1 200 OK\n")),(0,i.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u66f4\u65b0\u8def\u7531\u7684\u8bf7\u6c42\uff0c\u4ee5\u505c\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:1980": 1\n    }\n  }\n}\'\n')),(0,i.kt)("p",null,"CSRF \u63d2\u4ef6\u5df2\u7ecf\u88ab\u505c\u7528\u3002"))}k.isMDXComponent=!0}}]);