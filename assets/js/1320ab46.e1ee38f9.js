"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78270],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51706:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(25773),a=n(30808),l=(n(27378),n(35318)),o=["components"],i={title:"sls-logger"},s=void 0,u={unversionedId:"plugins/sls-logger",id:"version-2.13/plugins/sls-logger",isDocsHomePage:!1,title:"sls-logger",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/sls-logger.md",sourceDirName:"plugins",slug:"/plugins/sls-logger",permalink:"/docs/apisix/plugins/sls-logger",editUrl:null,tags:[],version:"2.13",frontMatter:{title:"sls-logger"},sidebar:"version-2.13/docs",previous:{title:"error-log-logger",permalink:"/docs/apisix/plugins/error-log-logger"},next:{title:"google-cloud-logging",permalink:"/docs/apisix/plugins/google-cloud-logging"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sls-logger")," is a plugin which push Log data requests to ali cloud ",(0,l.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/112903.html?spm=a2c4g.11186623.6.763.21321b47wcwt1u"},"Log Server")," with  ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"RF5424"),"."),(0,l.kt)("p",null,"This plugin provides the ability to push Log data as a batch to ali cloud log service. In case if you did not receive the log data don't worry give it some time it will automatically send the logs after the timer function expires in our Batch Processor."),(0,l.kt)("p",null,"For more info on Batch-Processor in Apache APISIX please refer\n",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"Batch-Processor")),(0,l.kt)("h2",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address or the Hostname of the TCP server, please reference ali cloud log ",(0,l.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/29008.html?spm=a2c4g.11186623.2.14.49301b4793uX0z#reference-wgx-pwq-zdb"},"Serve List"),", use IP address instead of domain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Target upstream port, default 10009.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout for the upstream to send data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"project"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Ali cloud log service project name\uff0cplease create in sls before us this plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logstore"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Ali cloud log service  logstore name\uff0cplease create in sls before us this plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key_id"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Ali cloud AccessKey ID, reference ",(0,l.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/47664.html?spm=a2c4g.11186623.2.15.49301b47lfvxXP#task-xsk-ttc-ry"},"Authorization"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key_secret"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Ali cloud AccessKey Secret, reference ",(0,l.kt)("a",{parentName:"td",href:"https://help.aliyun.com/document_detail/47664.html?spm=a2c4g.11186623.2.15.49301b47lfvxXP#task-xsk-ttc-ry"},"Authorization"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique identifier to identity the batch processor.")))),(0,l.kt)("p",null,"The plugin supports the use of batch processors to aggregate and process entries(logs/data) in a batch. This avoids frequent data submissions by the plugin, which by default the batch processor submits data every ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"1000"),". For information or custom batch processor parameter settings, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch-Processor")," configuration section."),(0,l.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,l.kt)("p",null,"The following is an example on how to enable the sls-logger for a specific route."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/5 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "sls-logger": {\n            "host": "100.100.99.135",\n            "port": 10009,\n            "project": "your_project",\n            "logstore": "your_logstore",\n            "access_key_id": "your_access_key_id",\n            "access_key_secret": "your_access_key_secret",\n            "timeout": 30000\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n\n')),(0,l.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"success:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"check log in ali cloud log service")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.13/docs/assets/images/plugin/sls-logger-1.png",alt:"sls logger view",title:"sls logger view"})),(0,l.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,l.kt)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable the ",(0,l.kt)("inlineCode",{parentName:"p"},"sls-logger"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);