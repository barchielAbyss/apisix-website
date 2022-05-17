"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84603],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81391:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={title:"api-breaker",keywords:["APISIX","Plugin","API Breaker","api-breaker"],description:"This document contains information about the Apache APISIX api-breaker Plugin."},s=void 0,p={unversionedId:"plugins/api-breaker",id:"plugins/api-breaker",isDocsHomePage:!1,title:"api-breaker",description:"This document contains information about the Apache APISIX api-breaker Plugin.",source:"@site/docs/apisix/plugins/api-breaker.md",sourceDirName:"plugins",slug:"/plugins/api-breaker",permalink:"/docs/apisix/next/plugins/api-breaker",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/api-breaker.md",tags:[],version:"current",frontMatter:{title:"api-breaker",keywords:["APISIX","Plugin","API Breaker","api-breaker"],description:"This document contains information about the Apache APISIX api-breaker Plugin."},sidebar:"docs",previous:{title:"proxy-mirror",permalink:"/docs/apisix/next/plugins/proxy-mirror"},next:{title:"traffic-split",permalink:"/docs/apisix/next/plugins/traffic-split"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," Plugin implements circuit breaker functionality to protect Upstream services."),(0,l.kt)("p",null,"Whenever the Upstream service responds with a status code from the configured ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," list for the configured ",(0,l.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," number of times, the Upstream service will be considered unhealthy."),(0,l.kt)("p",null,"The request is then retried in 2, 4, 8, 16 ... seconds until the ",(0,l.kt)("inlineCode",{parentName:"p"},"max_breaker_sec"),"."),(0,l.kt)("p",null,"In an unhealthy state, if the Upstream service responds with a status code from the configured list ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy.http_statuses")," for ",(0,l.kt)("inlineCode",{parentName:"p"},"healthy.successes")," times, the service is considered healthy again."),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ..., 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP error code to return when Upstream is unhealthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Body of the response message to return when Upstream is unhealthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"break_response_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Headers of the response message to return when Upstream is unhealthy. Can only be configured when the ",(0,l.kt)("inlineCode",{parentName:"td"},"break_response_body")," attribute is configured. The values can contain Nginx variables. For example, ",(0,l.kt)("inlineCode",{parentName:"td"},"$remote_addr")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"$balancer_ip"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_breaker_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},">=3"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum time in seconds for circuit breaking.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"[500]"),(0,l.kt)("td",{parentName:"tr",align:null},"[500, ..., 599]"),(0,l.kt)("td",{parentName:"tr",align:null},"Status codes of Upstream to be considered unhealthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy.failures"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">=1"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive failures for the Upstream service to be considered unhealthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy.http_statuses"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"[200]"),(0,l.kt)("td",{parentName:"tr",align:null},"[200, ..., 499]"),(0,l.kt)("td",{parentName:"tr",align:null},"Status codes of Upstream to be considered healthy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy.successes"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},">=1"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive healthy requests for the Upstream service to be considered healthy.")))),(0,l.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,l.kt)("p",null,"The example below shows how you can configure the Plugin on a specific Route:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "api-breaker": {\n            "break_response_code": 502,\n            "unhealthy": {\n                "http_statuses": [500, 503],\n                "failures": 3\n            },\n            "healthy": {\n                "http_statuses": [200],\n                "successes": 1\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello",\n}\'\n')),(0,l.kt)("p",null,"In this configuration, a response code of 500 or 503 three times in a row triggers the unhealthy status of the Upstream service. A response code of 200 restores its healthy status."),(0,l.kt)("h2",{id:"example-usage"},"Example usage"),(0,l.kt)("p",null,"Once you have configured the Plugin as shown above, you can test it out by sending a request. If the Upstream service responds with an unhealthy response code, you will receive the configured response code (",(0,l.kt)("inlineCode",{parentName:"p"},"break_response_code"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X POST "http://127.0.0.1:9080/hello"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 502 Bad Gateway\nContent-Type: application/octet-stream\nConnection: keep-alive\nServer: APISIX/1.5\n\n... ...\n")),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"To disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"api-breaker")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);