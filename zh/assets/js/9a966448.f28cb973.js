"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59436],{35318:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||p;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<p;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50578:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var n=a(25773),r=a(30808),p=(a(27378),a(35318)),i=["components"],l={title:"\u5982\u4f55\u4e0e Dapr \u96c6\u6210\u6253\u9020 Apache APISIX \u7f51\u5173\u63a7\u5236\u5668",author:"\u5f20\u5584\u53cb",authorURL:"https://github.com/geffzhang",authorImageURL:"https://avatars.githubusercontent.com/u/439390?v=4",keywords:["Apache APISIX","Dapr","Kubernetes","\u7f51\u5173","Sidecar"],description:"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u96c6\u6210 Dapr \u521b\u5efa\u4e00\u4e2a Apache APISIX \u63a7\u5236\u5668\u3002\u5305\u62ec\u9879\u76ee\u6982\u5ff5\u4ee5\u53ca\u5177\u4f53\u64cd\u4f5c\u6b65\u9aa4\u3002",tags:["Technology"]},s=void 0,o={permalink:"/zh/blog/2021/11/17/dapr-with-apisix",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021/11/17/dapr-with-apisix.md",title:"\u5982\u4f55\u4e0e Dapr \u96c6\u6210\u6253\u9020 Apache APISIX \u7f51\u5173\u63a7\u5236\u5668",description:"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u96c6\u6210 Dapr \u521b\u5efa\u4e00\u4e2a Apache APISIX \u63a7\u5236\u5668\u3002\u5305\u62ec\u9879\u76ee\u6982\u5ff5\u4ee5\u53ca\u5177\u4f53\u64cd\u4f5c\u6b65\u9aa4\u3002",date:"2021-11-17T00:00:00.000Z",formattedDate:"2021\u5e7411\u670817\u65e5",tags:[{label:"Technology",permalink:"/zh/blog/tags/technology"}],readingTime:7.9,truncated:!0,authors:[{name:"\u5f20\u5584\u53cb",url:"https://github.com/geffzhang",imageURL:"https://avatars.githubusercontent.com/u/439390?v=4"}],prevItem:{title:"\u91cd\u78c5\u529f\u80fd\uff01Apache APISIX \u62e5\u62b1 WASM \u751f\u6001",permalink:"/zh/blog/2021/11/19/apisix-supports-wasm"},nextItem:{title:"\u793e\u533a\u5468\u62a5\uff5c11.1-11.14 \u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d",permalink:"/zh/blog/2021/11/16/weekly-report-1114"}},c={authorsImageUrls:[void 0]},u=[{value:"\u57fa\u672c\u9879\u76ee\u6982\u89c8",id:"\u57fa\u672c\u9879\u76ee\u6982\u89c8",children:[{value:"Apache APISIX Ingress",id:"apache-apisix-ingress",children:[]},{value:"Dapr",id:"dapr",children:[]}]},{value:"\u5b9e\u8df5\u5f00\u59cb",id:"\u5b9e\u8df5\u5f00\u59cb",children:[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u6b65\u9aa4\u4e00\uff1aApache APISIX Helm \u914d\u7f6e",id:"\u6b65\u9aa4\u4e00apache-apisix-helm-\u914d\u7f6e",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa Apache APISIX Ingerss \u547d\u540d\u7a7a\u95f4",id:"\u6b65\u9aa4\u4e8c\u521b\u5efa-apache-apisix-ingerss-\u547d\u540d\u7a7a\u95f4",children:[]},{value:"\u6b65\u9aa4\u4e09\uff1a\u5b89\u88c5\u652f\u6301 Dapr \u7684 APISIX \u63a7\u5236\u5668",id:"\u6b65\u9aa4\u4e09\u5b89\u88c5\u652f\u6301-dapr-\u7684-apisix-\u63a7\u5236\u5668",children:[]},{value:"\u6b65\u9aa4\u56db\uff1a\u521b\u5efa Apache APISIX \u7684 Dapr Sidecar \u8d44\u6e90",id:"\u6b65\u9aa4\u56db\u521b\u5efa-apache-apisix-\u7684-dapr-sidecar-\u8d44\u6e90",children:[]},{value:"\u6b65\u9aa4\u4e94\uff1a\u90e8\u7f72\u6d4b\u8bd5\u793a\u4f8b\u9879\u76ee",id:"\u6b65\u9aa4\u4e94\u90e8\u7f72\u6d4b\u8bd5\u793a\u4f8b\u9879\u76ee",children:[]}]},{value:"\u989d\u5916\u8865\u5145\u8bf4\u660e",id:"\u989d\u5916\u8865\u5145\u8bf4\u660e",children:[{value:"\u5220\u9664 Apache APISIX \u63a7\u5236\u5668",id:"\u5220\u9664-apache-apisix-\u63a7\u5236\u5668",children:[]}]}],d={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4e3a\u5927\u5bb6\u5c55\u793a\u5982\u4f55\u901a\u8fc7\u96c6\u6210 Dapr \u521b\u5efa\u4e00\u4e2a Apache APISIX \u63a7\u5236\u5668\u3002\u5305\u62ec\u9879\u76ee\u6982\u5ff5\u4ee5\u53ca\u5177\u4f53\u64cd\u4f5c\u6b65\u9aa4\u3002")),(0,p.kt)("p",null,"\u672c\u8d28\u4e0a\uff0cApache APISIX \u63a7\u5236\u5668\u5c06\u914d\u7f6e\u76f8\u540c\u6807\u51c6 Dapr annotations \u4ee5\u6ce8\u5165 daprd sidecar\u3002\u901a\u8fc7\u516c\u5f00\u8fd9\u4e2a sidecar\uff0c\u5c06\u5141\u8bb8\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\u4e0e\u96c6\u7fa4\u4e2d\u542f\u7528 Dapr \u7684\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u901a\u4fe1\u3002"),(0,p.kt)("p",null,"\u4e0b\u56fe\u4e3a\u5b9e\u9645\u9879\u76ee\u4e2d\u7684\u67b6\u6784\u6d41\u7a0b\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221118-75dab9f1-4092-4684-ad23-34932d8a7eac.png",alt:"\u603b\u4f53\u67b6\u6784\u6d41\u7a0b"})),(0,p.kt)("h2",{id:"\u57fa\u672c\u9879\u76ee\u6982\u89c8"},"\u57fa\u672c\u9879\u76ee\u6982\u89c8"),(0,p.kt)("h3",{id:"apache-apisix-ingress"},"Apache APISIX Ingress"),(0,p.kt)("p",null,"\u5728 K8s \u751f\u6001\u4e2d\uff0cIngress \u4f5c\u4e3a\u8868\u793a K8s \u6d41\u91cf\u5165\u53e3\u7684\u4e00\u79cd\u8d44\u6e90\uff0c\u60f3\u8981\u8ba9\u5176\u751f\u6548\uff0c\u5c31\u9700\u8981\u6709\u4e00\u4e2a Ingress Controller \u53bb\u76d1\u542c K8s \u4e2d\u7684 Ingress \u8d44\u6e90\uff0c\u5e76\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u8fdb\u884c\u76f8\u5e94\u89c4\u5219\u7684\u89e3\u6790\u548c\u5b9e\u9645\u627f\u8f7d\u6d41\u91cf\u3002\u5728\u5f53\u4e0b\u8d8b\u52bf\u4e2d\uff0c\u50cf Kubernetes Ingress Nginx \u5c31\u662f\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684 Ingress Controller \u5b9e\u73b0\u3002"),(0,p.kt)("p",null,"\u800c APISIX Ingress \u5219\u662f\u53e6\u4e00\u79cd Ingress Controller \u7684\u5b9e\u73b0\u3002\u8ddf Kubernetes Ingress Nginx \u7684\u533a\u522b\u4e3b\u8981\u5728\u4e8e APISIX Ingress \u662f\u4ee5 Apache APISIX \u4f5c\u4e3a\u5b9e\u9645\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u7684\u6570\u636e\u9762\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u5230\u5177\u4f53\u7684\u67d0\u4e00\u4e2a\u670d\u52a1/API/\u7f51\u9875\u65f6\uff0c\u901a\u8fc7\u5916\u90e8\u4ee3\u7406\u5c06\u6574\u4e2a\u4e1a\u52a1\u6d41\u91cf/\u7528\u6237\u8bf7\u6c42\u4f20\u8f93\u5230 K8s \u96c6\u7fa4\uff0c\u7136\u540e\u7ecf\u8fc7 APISIX Ingress \u8fdb\u884c\u540e\u7eed\u5904\u7406\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221119-71bbe219-dd19-46be-90fb-20cd667d9805.png",alt:"APISIX Ingress"})),(0,p.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\uff0cAPISIX Ingress \u5206\u6210\u4e86\u4e24\u90e8\u5206\u3002\u4e00\u90e8\u5206\u662f APISIX Ingress Controller\uff0c\u4f5c\u4e3a\u63a7\u5236\u9762\u5b83\u5c06\u5b8c\u6210\u914d\u7f6e\u7ba1\u7406\u4e0e\u5206\u53d1\u3002\u53e6\u4e00\u90e8\u5206 APISIX Proxy Pod \u8d1f\u8d23\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\uff0c\u5b83\u662f\u901a\u8fc7 CRD(Custom Resource Definitions) \u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\u3002Apache APISIX Ingress \u9664\u4e86\u652f\u6301\u81ea\u5b9a\u4e49\u8d44\u6e90\u5916\uff0c\u8fd8\u652f\u6301\u539f\u751f\u7684 K8s Ingress \u8d44\u6e90\u3002"),(0,p.kt)("p",null,"\u70b9\u51fb\u67e5\u770b",(0,p.kt)("a",{parentName:"p",href:"https://www.apiseven.com/zh/blog/apisix-ingress-details"},"\u66f4\u591a\u8be6\u60c5"),"\u3002"),(0,p.kt)("h3",{id:"dapr"},"Dapr"),(0,p.kt)("p",null,"Dapr \u662f\u4e00\u4e2a\u53ef\u79fb\u690d\u3001\u4e8b\u4ef6\u9a71\u52a8\u7684\u8fd0\u884c\u65f6\u3002\u5b83\u4f7f\u5f00\u53d1\u4eba\u5458\u7b80\u5355\u5730\u53bb\u6784\u5efa\u8fd0\u884c\u5728\u4e91\u548c edge \u4e0a\u5f39\u6027\u3001\u65e0\u72b6\u6001\u548c\u6709\u72b6\u6001\u7684\u5e94\u7528\uff0c\u5e76\u4e14\u5305\u542b\u591a\u79cd\u8bed\u8a00\u548c\u5f00\u53d1\u4eba\u5458\u6846\u67b6\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221120-15a5be20-17a2-4c18-a82e-91e1ff3709f0.png",alt:"Dapr \u751f\u6001\u56fe"})),(0,p.kt)("p",null,"\u4eca\u5929\uff0c\u6211\u4eec\u6b63\u7ecf\u5386\u4e00\u6ce2\u4e91\u5e94\u7528\u6d6a\u6f6e\u3002\u5f00\u53d1\u4eba\u5458\u719f\u6089 web+ \u6570\u636e\u5e93\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784(\u4f8b\u5982\u7ecf\u5178\u76843\u5c42\u8bbe\u8ba1)\uff0c\u4f46\u4e0d\u719f\u6089\u672c\u8d28\u4e0a\u662f\u5206\u5e03\u5f0f\u7684\u5fae\u670d\u52a1\u5e94\u7528\u7a0b\u5e8f\u67b6\u6784\u3002\u5f00\u53d1\u4eba\u5458\u5e0c\u671b\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u903b\u8f91\uff0c\u540c\u65f6\u4f9d\u9760\u5e73\u53f0\u4e3a\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u6ce8\u5165\u4f38\u7f29\u6027\u3001\u5f39\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u3001\u5f39\u6027\u548c\u5176\u4ed6\u672c\u5730\u4e91\u67b6\u6784\u7684\u5c5e\u6027\u3002"),(0,p.kt)("p",null,"\u8fd9\u5c31\u662f Dapr \u7684\u7528\u6b66\u4e4b\u5730\u3002"),(0,p.kt)("p",null,"Dapr \u53ef\u4ee5\u5c06\u6784\u5efa\u5fae\u670d\u52a1\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u4f73\u5b9e\u8df5\u7f16\u5165\u5f00\u653e\u3001\u72ec\u7acb\u7684\u6784\u5efa\u5757\u4e2d\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u4f7f\u7528\u81ea\u5df1\u9009\u62e9\u7684\u8bed\u8a00\u548c\u6846\u67b6\u6784\u5efa\u53ef\u79fb\u690d\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u6bcf\u4e2a\u6784\u5efa\u5757\u90fd\u662f\u5b8c\u5168\u72ec\u7acb\uff0c\u5e76\u53ef\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5176\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u3002"),(0,p.kt)("p",null,"\u6b64\u5916\uff0cDapr \u4e0e\u5e73\u53f0\u65e0\u5173\uff0c\u8fd9\u610f\u5473\u7740\u7528\u6237\u53ef\u4ee5\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u548c\u5176\u4ed6\u4e0e Dapr \u96c6\u6210\u7684\u6258\u7ba1\u73af\u5883\u672c\u5730\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,p.kt)("p",null,"\u70b9\u51fb\u67e5\u770b",(0,p.kt)("a",{parentName:"p",href:"https://docs.dapr.io/zh-hans/concepts/overview/"},"\u66f4\u591a\u8be6\u60c5"),"\u3002"),(0,p.kt)("h2",{id:"\u5b9e\u8df5\u5f00\u59cb"},"\u5b9e\u8df5\u5f00\u59cb"),(0,p.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Kubernetes 1.19+ \u96c6\u7fa4\uff0c\u96c6\u7fa4\u4e0a\u5df2\u7ecf\u914d\u7f6e\u4e86 Dapr"),(0,p.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u4e86 Helm CLI 3x"),(0,p.kt)("li",{parentName:"ul"},"Kubectl CLI \u5df2\u5b89\u88c5\u5e76\u914d\u7f6e\u4e3a\u8bbf\u95ee\u96c6\u7fa4"),(0,p.kt)("li",{parentName:"ul"},"\u53ef\u9009\uff1a\u7528\u4e8e\u521b\u5efa\u81ea\u7b7e\u540d\u8bc1\u4e66\u7684 OpenSSL"),(0,p.kt)("li",{parentName:"ul"},"Apache APISIX \u7684 Helm Chart \u7248\u672c\u4e3a 0.7.2+")),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e00apache-apisix-helm-\u914d\u7f6e"},"\u6b65\u9aa4\u4e00\uff1aApache APISIX Helm \u914d\u7f6e"),(0,p.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4e3a Apache APISIX \u63a7\u5236\u5668\u6dfb\u52a0\u6700\u65b0\u7684 helm chart repo\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo update\n")),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\u521b\u5efa-apache-apisix-ingerss-\u547d\u540d\u7a7a\u95f4"},"\u6b65\u9aa4\u4e8c\uff1a\u521b\u5efa Apache APISIX Ingerss \u547d\u540d\u7a7a\u95f4"),(0,p.kt)("p",null,"\u786e\u4fdd\u5f53\u524d kubectl \u4e0a\u4e0b\u6587\u6307\u5411\u6b63\u786e\u7684 Kubernetes \u96c6\u7fa4\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace ingress-apisix\n")),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e09\u5b89\u88c5\u652f\u6301-dapr-\u7684-apisix-\u63a7\u5236\u5668"},"\u6b65\u9aa4\u4e09\uff1a\u5b89\u88c5\u652f\u6301 Dapr \u7684 APISIX \u63a7\u5236\u5668"),(0,p.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u5185\u5bb9\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a dapr-annotations.yaml \u7684\u6587\u4ef6\uff0c\u4ee5\u5728 Apache APISIX Proxy Pod \u4e0a\u8bbe\u7f6e\u6ce8\u91ca\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  podAnnotations:\n    dapr.io/enabled: "true"\n    dapr.io/app-id: " apisix-gateway"\ndapr.io/app-port: "9080"\ndapr.io/enable-metrics: "true"\ndapr.io/metrics-port: "9099"\ndapr.io/sidecar-listen-addresses: 0.0.0.0\ndapr.io/config: ingress-apisix-config\n')),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e0a\u9762\u7684 app-port \u662f\u544a\u8bc9 daprd sidecar Proxy \u5728\u76d1\u542c\u54ea\u4e2a\u7aef\u53e3\u3002\u6709\u5173\u53d7\u652f\u6301\u7684\u6ce8\u91ca\u5b8c\u6574\u5217\u8868\uff0c\u53ef\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.dapr.io/operations/hosting/kubernetes/kubernetes-annotations/"},"Dapr Kubernetes pod \u6ce8\u91ca\u89c4\u8303"),"\u3002")),(0,p.kt)("p",null,"\u4e0b\u9762\u4ee5\u6211\u4e2a\u4eba\u5728 AKS \u4e0a\u5b89\u88c5\u7684\u793a\u4f8b dapr-annotations.yaml \u8fdb\u884c\u5c55\u793a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"}," apisix:\n  podAnnotations:\n    dapr.io/app-id: apisix-gateway\n    dapr.io/app-port: '9080'\n    dapr.io/enable-metrics: 'true'\n    dapr.io/enabled: 'true'\n    dapr.io/metrics-port: '9099'\ndapr.io/sidecar-listen-addresses: 0.0.0.0\ndapr.io/config: ingress-apisix-config\n\ngateway:\n  type: LoadBalancer\n\ningress-controller:\n  enabled: true\n\ndashboard:\n  enabled: true\n")),(0,p.kt)("p",null,"\u63a5\u4e0b\u6765\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff08\u5f15\u7528\u4e0a\u8ff0\u6587\u4ef6\uff09\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"helm install apisix apisix/apisix -f dapr-annotations.yaml -n ingress-apisix\n")),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u56db\u521b\u5efa-apache-apisix-\u7684-dapr-sidecar-\u8d44\u6e90"},"\u6b65\u9aa4\u56db\uff1a\u521b\u5efa Apache APISIX \u7684 Dapr Sidecar \u8d44\u6e90"),(0,p.kt)("p",null,"\u9996\u5148\uff0c\u914d\u7f6e Apache APISIX upstream-apisix-dapr\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221106-e57ae8b8-38ed-46ea-b219-401619fadbe3.png",alt:"\u914d\u7f6e\u4e0a\u6e38\u4e1a\u52a1"})),(0,p.kt)("p",null,"\u5728\u8fd9\u91cc\u4e3b\u673a\u540d\u586b\u5199\uff1aapisix-gateway-dapr\uff0c\u7aef\u53e3\u53f7\u586b\u5199 3500\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodes": [\n    {\n      "host": "apisix-gateway-dapr",\n      "port": 3500,\n      "weight": 1\n    }\n  ],\n  "retries": 1,\n  "timeout": {\n    "connect": 6,\n    "read": 6,\n    "send": 6\n  },\n  "type": "roundrobin",\n  "scheme": "http",\n  "pass_host": "pass",\n  "name": "apisix-dapr"\n}\n')),(0,p.kt)("p",null,"\u7136\u540e\u914d\u7f6e Apache APISIX \u670d\u52a1 apisix-gateway-dapr\uff0c\u4e0a\u6e38\u670d\u52a1\u9009\u62e9 apisix-dapr\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221115-ae7c847a-99a3-4ee6-b36f-4269fd067198.png",alt:"\u914d\u7f6e\u670d\u52a1"})),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "apisix-gateway-dapr",\n  "upstream_id": "376187148778341098"\n}\n')),(0,p.kt)("h3",{id:"\u6b65\u9aa4\u4e94\u90e8\u7f72\u6d4b\u8bd5\u793a\u4f8b\u9879\u76ee"},"\u6b65\u9aa4\u4e94\uff1a\u90e8\u7f72\u6d4b\u8bd5\u793a\u4f8b\u9879\u76ee"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://httpbin.org/"},"HTTPBin")," \u662f\u4ee5 Python+Flask \u5199\u7684\u4e00\u6b3e\u5de5\u5177\uff0c\u8fd9\u6b3e\u5de5\u5177\u6db5\u76d6\u4e86\u5404\u7c7b HTTP \u573a\u666f\uff0c\u4e14\u6bcf\u4e2a\u63a5\u53e3\u90fd\u6709\u8fd4\u56de\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4f7f\u7528 kennethreitz/httpbin \u4f5c\u4e3a\u793a\u4f8b\u9879\u76ee\u8fdb\u884c\u6f14\u793a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f 01.namespace.yaml\nkubectl apply -f 02.deployment.yaml\nkubectl apply -f 03.svc.yaml\n")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221110-9b901451-6ca6-4d15-b591-69f7c5d57ce1.png",alt:"\u9879\u76ee\u914d\u7f6e"})),(0,p.kt)("p",null,"\u4e0a\u56fe\u4e3a\u5047\u8bbe\u6709\u4e00\u4e2a\u4f7f\u7528 Dapr app-id kennethreitz-httpbin \u8fd0\u884c\u7684\u5fae\u670d\u52a1\u3002"),(0,p.kt)("h4",{id:"\u8def\u5f84\u5339\u914d\u6539\u5199"},"\u8def\u5f84\u5339\u914d\u6539\u5199"),(0,p.kt)("p",null,"\u8fd9\u91cc\u8865\u5145\u4e00\u4e0b\u5173\u4e8e\u8def\u5f84\u5339\u914d\u7684\u76f8\u5173\u8bbe\u7f6e\u3002\u6bd4\u5982\u8bf7\u6c42\u7f51\u5173\u662f /httpbin/",(0,p.kt)("em",{parentName:"p"},"\uff0c\u540e\u7aef\u63a5\u6536\u8def\u5f84\u5e94\u8be5\u662f /"),"\uff0c\u4e2d\u95f4\u7684 httpbin \u53ea\u5145\u5f53\u670d\u52a1\u540d\u7684\u6807\u8bc6\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221114-90c1ef58-6743-419c-be87-9cdc8503aa30.png",alt:"\u586b\u5199\u91ca\u4e49"})),(0,p.kt)("p",null,"\u5728\u652f\u6301\u547d\u540d\u7a7a\u95f4\u7684\u6258\u7ba1\u5e73\u53f0\u4e0a\uff0cDapr \u5e94\u7528 ID \u662f\u7b26\u5408\u6709\u6548\u7684 FQDN \u683c\u5f0f\uff0c\u5176\u4e2d\u5305\u62ec\u76ee\u6807\u540d\u79f0\u7a7a\u95f4\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u5b57\u7b26\u4e32\u5305\u542b\u5e94\u7528 ID\uff08svc-kennethreitz-httpbin\uff09\u4ee5\u53ca\u5e94\u7528\u8fd0\u884c\u5728\u547d\u540d\u7a7a\u95f4\uff08kind-test\uff09\u3002"),(0,p.kt)("p",null,"\u6700\u540e\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\uff1a",(0,p.kt)("a",{parentName:"p",href:"http://20.195.90.43/httpbin/get"},"http://20.195.90.43/httpbin/get")," \u6765\u67e5\u770b\u4ee3\u7406\u662f\u5426\u6210\u529f\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637119221100-13997340-dfb6-45fb-abba-4215e0318238.png",alt:"\u68c0\u67e5\u662f\u5426\u4ee3\u7406\u6210\u529f"})),(0,p.kt)("h2",{id:"\u989d\u5916\u8865\u5145\u8bf4\u660e"},"\u989d\u5916\u8865\u5145\u8bf4\u660e"),(0,p.kt)("p",null,"\u5f53\u7136\uff0c\u5728\u8fdb\u884c\u90e8\u7f72\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5728 Kubernetes \u4e2d\u4f7f\u7528 Apache APISIX \u5b98\u65b9 Helm \u4ed3\u5e93\u76f4\u63a5\u90e8\u7f72 Apache APISIX \u548c APISIX Ingress Controller\u3002\u8fd9\u6837\u53ef\u4ee5\u76f4\u63a5\u5c06 Apache APISIX \u4f5c\u4e3a\u7f51\u5173\uff0c\u8fdb\u884c APISIX Ingress Controller \u7684\u6570\u636e\u9762\u6765\u627f\u8f7d\u4e1a\u52a1\u6d41\u91cf\u3002"),(0,p.kt)("p",null,"\u6700\u540e\u5c06 Dapr \u901a\u8fc7 Sidecar annotations \u6ce8\u5165\u5230 Apache APISIX Proxy Pod\uff0c\u901a\u8fc7\u670d\u52a1\u8c03\u7528\u6a21\u5757\u6765\u8c03\u7528\u96c6\u7fa4\u4e2d\u7684\u5fae\u670d\u52a1\uff0c\u5b9e\u73b0\u5b8c\u6574\u6d41\u7a0b\u90e8\u7f72\u3002"),(0,p.kt)("h3",{id:"\u5220\u9664-apache-apisix-\u63a7\u5236\u5668"},"\u5220\u9664 Apache APISIX \u63a7\u5236\u5668"),(0,p.kt)("p",null,"\u5982\u9879\u76ee\u7ed3\u675f\uff0c\u60f3\u8981\u5220\u9664 Apache APISIX \u63a7\u5236\u5668\uff0c\u53ef\u6309\u4e0b\u65b9\u547d\u4ee4\u64cd\u4f5c\uff08\u8bb0\u5f97\u4e0d\u8981\u5fd8\u8bb0\u5220\u9664\u4e4b\u524d\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4 ingress-apisix\uff09\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"helm delete apisix -n ingress-apisix\n")))}h.isMDXComponent=!0}}]);