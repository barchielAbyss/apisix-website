"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59639],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(27378);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=s,b=m["".concat(u,".").concat(h)]||m[h]||l[h]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86416:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(25773),s=n(30808),i=(n(27378),n(35318)),a=["components"],o={title:"PubSub",keywords:["APISIX","PubSub"],description:"This document contains information about the Apache APISIX pubsub framework."},u=void 0,c={unversionedId:"pubsub",id:"pubsub",isDocsHomePage:!1,title:"PubSub",description:"This document contains information about the Apache APISIX pubsub framework.",source:"@site/docs/apisix/pubsub.md",sourceDirName:".",slug:"/pubsub",permalink:"/zh/docs/apisix/next/pubsub",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/pubsub.md",tags:[],version:"current",frontMatter:{title:"PubSub",keywords:["APISIX","PubSub"],description:"This document contains information about the Apache APISIX pubsub framework."},sidebar:"docs",previous:{title:"Kubernetes",permalink:"/zh/docs/apisix/next/discovery/kubernetes"},next:{title:"Apache Kafka",permalink:"/zh/docs/apisix/next/pubsub/kafka"}},p=[{value:"What is PubSub",id:"what-is-pubsub",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Supported messaging systems",id:"supported-messaging-systems",children:[]},{value:"How to support other messaging systems",id:"how-to-support-other-messaging-systems",children:[{value:"Basic Steps",id:"basic-steps",children:[]},{value:"Example",id:"example",children:[]}]}],l={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-pubsub"},"What is PubSub"),(0,i.kt)("p",null,"Publish-subscribe is a messaging paradigm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Producers send messages to specific brokers rather than directly to consumers."),(0,i.kt)("li",{parentName:"ul"},"Brokers cache messages sent by producers and then actively push them to subscribed consumers or pull them.")),(0,i.kt)("p",null,"The system architectures use this pattern to decouple or handle high traffic scenarios."),(0,i.kt)("p",null,"In Apache APISIX, the most common scenario is handling north-south traffic from the server to the client. Combining it with a publish-subscribe system, we can achieve more robust features, such as real-time collaboration on online documents, online games, etc."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/pubsub-architecture.svg",alt:"pubsub architecture"})),(0,i.kt)("p",null,"Currently, Apache APISIX supports WebSocket communication with the client, which can be any application that supports WebSocket, with Protocol Buffer as the serialization mechanism, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/include/apisix/model/pubsub.proto"},"protocol definition"),"."),(0,i.kt)("h2",{id:"supported-messaging-systems"},"Supported messaging systems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/apisix/next/pubsub/kafka"},"Aapche Kafka"))),(0,i.kt)("h2",{id:"how-to-support-other-messaging-systems"},"How to support other messaging systems"),(0,i.kt)("p",null,"Apache APISIX implement an extensible pubsub module, which is responsible for starting the WebSocket server, coding and decoding communication protocols, handling client commands, and adding support for the new messaging system."),(0,i.kt)("h3",{id:"basic-steps"},"Basic Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add new commands and response body definitions to ",(0,i.kt)("inlineCode",{parentName:"li"},"pubsub.proto")),(0,i.kt)("li",{parentName:"ul"},"Add a new option to the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," configuration item in upstream"),(0,i.kt)("li",{parentName:"ul"},"Add a new ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," judgment branch to ",(0,i.kt)("inlineCode",{parentName:"li"},"http_access_phase")),(0,i.kt)("li",{parentName:"ul"},"Implement the required message system instruction processing functions"),(0,i.kt)("li",{parentName:"ul"},"Optional: Create plugins to support advanced configurations of this messaging system")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"TODO, an example will be added later to point out how to support other messaging systems."))}m.isMDXComponent=!0}}]);