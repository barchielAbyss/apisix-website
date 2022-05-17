"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65222],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(u,".").concat(d)]||h[d]||s[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={title:"\u65b0\u63d2\u4ef6 forward-auth \u5df2\u4e0a\u7ebf\uff0c\u8ba4\u8bc1\u529f\u80fd\u53c8\u591a\u4e00\u9879\u9009\u62e9",authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","\u8ba4\u8bc1","\u63d2\u4ef6","\u751f\u6001"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd Apache APISIX \u4e2d\u65b0\u589e\u63d2\u4ef6 `forward-auth` \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3a\u5927\u5bb6\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u8fd9\u6b3e\u8bbe\u8ba1\u7b80\u6d01\u7684\u8ba4\u8bc1\u6a21\u578b\u3002",tags:["Technology","Ecosystem","Authentication"]},u=void 0,p={permalink:"/zh/blog/2022/01/26/apisix-integrate-forward-auth-plugin",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022/01/26/apisix-integrate-forward-auth-plugin.md",title:"\u65b0\u63d2\u4ef6 forward-auth \u5df2\u4e0a\u7ebf\uff0c\u8ba4\u8bc1\u529f\u80fd\u53c8\u591a\u4e00\u9879\u9009\u62e9",description:"\u672c\u6587\u5c06\u4ecb\u7ecd Apache APISIX \u4e2d\u65b0\u589e\u63d2\u4ef6 `forward-auth` \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3a\u5927\u5bb6\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u8fd9\u6b3e\u8bbe\u8ba1\u7b80\u6d01\u7684\u8ba4\u8bc1\u6a21\u578b\u3002",date:"2022-01-26T00:00:00.000Z",formattedDate:"2022\u5e741\u670826\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"},{label:"Authentication",permalink:"/zh/blog/tags/authentication"}],readingTime:4.715,truncated:!0,authors:[{name:"\u767d\u6cfd\u5e73",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u751f\u6001\u6269\u5927\u8fdb\u884c\u4e2d\uff01\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u96c6\u6210 Splunk HTTP Event Collector",permalink:"/zh/blog/2022/02/10/splunk-apisix-integration"},nextItem:{title:"Apache APISIX \u65b0\u6280\u80fd\uff0c\u4ee3\u7406 gRPC-Web \u8bf7\u6c42",permalink:"/zh/blog/2022/01/25/apisix-grpc-web-integration"}},c={authorsImageUrls:[void 0,void 0]},s=[{value:"\u539f\u7406",id:"\u539f\u7406",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u6b65\u9aa4\u4e00\uff1a\u8bbe\u7f6e\u8ba4\u8bc1\u670d\u52a1",id:"\u6b65\u9aa4\u4e00\u8bbe\u7f6e\u8ba4\u8bc1\u670d\u52a1",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f <code>forward-auth</code> \u63d2\u4ef6",id:"\u6b65\u9aa4\u4e8c\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f-forward-auth-\u63d2\u4ef6",children:[]},{value:"\u6b65\u9aa4\u4e09\uff1a\u6d4b\u8bd5\u8bf7\u6c42",id:"\u6b65\u9aa4\u4e09\u6d4b\u8bd5\u8bf7\u6c42",children:[]},{value:"\u8865\u5145\uff1a\u5173\u95ed\u63d2\u4ef6",id:"\u8865\u5145\u5173\u95ed\u63d2\u4ef6",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],h={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4ecb\u7ecd Apache APISIX \u4e2d\u65b0\u589e\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3a\u5927\u5bb6\u8be6\u7ec6\u8bf4\u660e\u5982\u4f55\u4f7f\u7528\u8fd9\u6b3e\u8bbe\u8ba1\u7b80\u6d01\u7684\u8ba4\u8bc1\u6a21\u578b\u3002")),(0,i.kt)("p",null,"Forward Auth \u80fd\u5de7\u5999\u5730\u5c06\u8ba4\u8bc1\u4e0e\u6388\u6743\u903b\u8f91\u8f6c\u79fb\u81f3\u4e13\u95e8\u7684\u5916\u90e8\u670d\u52a1\u4e2d\uff0c\u7f51\u5173\u4f1a\u5c06\u7528\u6237\u7684\u8bf7\u6c42\u8f6c\u53d1\u81f3\u8ba4\u8bc1\u670d\u52a1\u4e2d\uff0c\u5e76\u5728\u8ba4\u8bc1\u670d\u52a1\u54cd\u5e94\u975e 20x \u72b6\u6001\u65f6\uff0c\u963b\u6b62\u539f\u6709\u8bf7\u6c42\u5e76\u66ff\u6362\u7ed3\u679c\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\uff0c\u5c31\u53ef\u4ee5\u5b9e\u73b0\u8ba4\u8bc1\u672a\u901a\u8fc7\u65f6\uff0c\u8fd4\u56de\u81ea\u5b9a\u4e49\u62a5\u9519\u6216\u7528\u6237\u91cd\u5b9a\u5411\u81f3\u8ba4\u8bc1\u9875\u9762\u3002\u63a5\u4e0b\u6765\u5c06\u4e3a\u5927\u5bb6\u4ecb\u7ecd Apache APISIX \u4e2d\u65b0\u589e\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u7684\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1643096414141-ccbc33c0-7899-445a-a2f8-b6d5341c44df.jpg",alt:"\u63d2\u4ef6\u539f\u7406\u56fe"})),(0,i.kt)("p",null,"\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\u5728 Apache APISIX \u4e2d\u7684\u8fd0\u884c\u539f\u7406\u4e0e\u6d41\u7a0b\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5177\u4f53\u603b\u7ed3\u4e3a\u4ee5\u4e0b\u51e0\u6b65\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\uff1a\u7531\u5ba2\u6237\u7aef\u5411 APISIX \u53d1\u8d77\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b65\uff1a\u7531 APISIX \u5411\u7528\u6237\u914d\u7f6e\u7684\u8ba4\u8bc1\u670d\u52a1\u53d1\u8d77\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b65\uff1a\u8ba4\u8bc1\u670d\u52a1\u54cd\u5e94\uff082xx \u6216\u5f02\u5e38\u72b6\u6001\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u56db\u6b65\uff1aAPISIX \u4f1a\u6839\u636e\u8ba4\u8bc1\u670d\u52a1\u54cd\u5e94\uff0c\u51b3\u5b9a\u5411\u4e0a\u6e38\u8f6c\u53d1\u8bf7\u6c42\u6216\u76f4\u63a5\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u62d2\u7edd\u54cd\u5e94")),(0,i.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u4e00\u8bbe\u7f6e\u8ba4\u8bc1\u670d\u52a1"},"\u6b65\u9aa4\u4e00\uff1a\u8bbe\u7f6e\u8ba4\u8bc1\u670d\u52a1"),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u8fd9\u6837\u4e00\u9879\u8ba4\u8bc1\u670d\u52a1\uff0c\u7528\u6237\u5411\u5176\u53d1\u9001\u5e26\u6709 Authorization \u8bf7\u6c42\u5934\u7684\u8bf7\u6c42\u3002\u5982\u679c\u8fd9\u4e2a\u6570\u636e\u901a\u8fc7\u9a8c\u8bc1\u5219\u8fd4\u56de 200 \u72b6\u6001\u7801\u548c\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"X-User-ID")," \u7684\u54cd\u5e94\u5934\uff1b\u5982\u679c\u6ca1\u6709\u901a\u8fc7\u9a8c\u8bc1\u5219\u8ba4\u4e3a\u8ba4\u8bc1\u72b6\u6001\u8fc7\u671f\uff0c\u8fd4\u56de 302 \u72b6\u6001\u7801\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Location")," \u54cd\u5e94\u5934\u5c06\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u81f3\u767b\u5f55\u9875\u9762\u3002"),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f-forward-auth-\u63d2\u4ef6"},"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa\u8def\u7531\u5e76\u5f00\u542f ",(0,i.kt)("inlineCode",{parentName:"h3"},"forward-auth")," \u63d2\u4ef6"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a\u8def\u7531\u5e76\u5f00\u542f ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\uff0c\u5c06\u4e0a\u8ff0\u7684\u8ba4\u8bc1\u670d\u52a1\u548c\u4e0a\u6e38\u5e94\u7528\u5bf9\u63a5\u8d77\u6765\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "forward-auth": {\n            "address": "http://127.0.0.1:9080/auth",\n            "request_headers": ["Authorization"],\n            "upstream_headers": ["X-User-ID"],\n            "client_headers": ["Location"]\n        }\n    },\n    "uri": "/user"\n}\'\n')),(0,i.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u7ec6\u8282\u91ca\u4e49\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u6709\u8bf7\u6c42\u5339\u914d\u5230\u5f53\u524d\u8def\u7531\u65f6\uff0c\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u81f3 ",(0,i.kt)("inlineCode",{parentName:"li"},"address")," \u4e2d\u7684\u5730\u5740\uff0c\u5176\u4e2d\u5c06\u9644\u5e26",(0,i.kt)("inlineCode",{parentName:"li"},"request_headers")," \u4e2d\u5b9a\u4e49\u7684\u8bf7\u6c42\u5934 ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization"),"\uff08\u5373\u914d\u7f6e\u9700\u8981\u7531\u5ba2\u6237\u7aef\u8f6c\u53d1\u81f3\u8ba4\u8bc1\u670d\u52a1\u7684\u8bf7\u6c42\u5934\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u8f6c\u53d1\u4efb\u4f55\u8bf7\u6c42\u5934\uff09\uff0c\u8ba4\u8bc1\u670d\u52a1\u53ef\u4ee5\u636e\u6b64\u8fdb\u884c\u7528\u6237\u8eab\u4efd\u786e\u8ba4\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8ba4\u8bc1\u901a\u8fc7\uff0c\u72b6\u6001\u7801\u4e3a 200 \u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"upstream_headers")," \u4e2d\u5b9a\u4e49\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"X-User-ID"),"\uff08\u5373\u8ba4\u8bc1\u901a\u8fc7\u65f6\u7531\u8ba4\u8bc1\u670d\u52a1\u8f6c\u53d1\u81f3\u4e0a\u6e38\u7684\u8bf7\u6c42\u5934\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u8f6c\u53d1\u4efb\u4f55\u8bf7\u6c42\u5934\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8ba4\u8bc1\u5931\u8d25\uff0c\u72b6\u6001\u7801\u4e3a 302 \u5e76\u8fd4\u56de\u4e00\u4e2a\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"client_headers")," \u4e2d\u5b9a\u4e49\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"\uff08\u5373\u8ba4\u8bc1\u5931\u8d25\u65f6\u7531\u8ba4\u8bc1\u670d\u52a1\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u54cd\u5e94\u5934\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u5219\u4e0d\u8f6c\u53d1\u4efb\u4f55\u54cd\u5e94\u5934\uff09\u3002")),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u4e09\u6d4b\u8bd5\u8bf7\u6c42"},"\u6b65\u9aa4\u4e09\uff1a\u6d4b\u8bd5\u8bf7\u6c42"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4f7f\u7528 POST \u8bf7\u6c42\u5e76\u53d1\u9001\u6570\u636e\ncurl http://127.0.0.1:9080/user \\\n    --header 'Authorization: true'\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 28\nServer: APISIX/2.11.0\n\n{\"user_id\":\"i-am-real-user\"}\n\n# \u4f7f\u7528 GET \u8bf7\u6c42\ncurl -i http://127.0.0.1:9080/user \\\n    --header 'Authorization: false'\n\nHTTP/1.1 302 FOUND\nServer: APISIX/2.11.0\nLocation: https://example.com/auth\n")),(0,i.kt)("h3",{id:"\u8865\u5145\u5173\u95ed\u63d2\u4ef6"},"\u8865\u5145\uff1a\u5173\u95ed\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5982\u5df2\u4f7f\u7528\u5b8c\u6bd5\uff0c\u53ea\u9700\u79fb\u9664\u8def\u7531\u914d\u7f6e\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\u76f8\u5173\u914d\u7f6e\u5e76\u4fdd\u5b58\uff0c\u5373\u53ef\u5173\u95ed\u8def\u7531\u4e0a\u7684 Forward Auth \u63d2\u4ef6\u3002\u5f97\u76ca\u4e8e Apache APISIX \u7684\u52a8\u6001\u5316\u7279\u6027\uff0c\u5f00\u542f\u5173\u95ed\u63d2\u4ef6\u7684\u8fc7\u7a0b\u90fd\u4e0d\u9700\u8981\u91cd\u542f Apache APISIX\u3002"),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u60f3\u8981\u83b7\u53d6\u66f4\u591a\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"forward-auth")," \u63d2\u4ef6\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u5217\u8868\uff0c\u53ef\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/forward-auth"},"\u5b98\u65b9\u6587\u6863"),"\u3002\u540c\u65f6\uff0c\u5982\u679c\u60a8\u6709\u66f4\u52a0\u590d\u6742\u7684\u8ba4\u8bc1\u6216\u6388\u6743\u5e94\u7528\u573a\u666f\uff0c\u4e5f\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u5141\u8bb8\u4ee5\u53ef\u7f16\u7a0b\u7684\u65b9\u5f0f\u63d0\u4f9b\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u76ee\u524d\uff0cApache APISIX \u4e5f\u5728\u5f00\u53d1\u5176\u4ed6\u63d2\u4ef6\u4ee5\u652f\u6301\u96c6\u6210\u66f4\u591a\u670d\u52a1\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u611f\u5174\u8da3\uff0c\u6b22\u8fce\u968f\u65f6\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussion")," \u4e2d\u53d1\u8d77\u8ba8\u8bba\uff0c\u4e5f\u53ef\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41\u3002"))}d.isMDXComponent=!0}}]);