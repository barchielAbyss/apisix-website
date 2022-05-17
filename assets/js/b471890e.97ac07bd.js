"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9136],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=i,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41200:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(25773),i=n(30808),r=(n(27378),n(35318)),o=["components"],s={title:"API Gateway Enhances Security by CSRF Plugin",authors:[{name:"Yuan Bao",title:"Author",url:"https://github.com/Baoyuantop",image_url:"https://github.com/Baoyuantop.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["Apache APISIX","API Security","cross-site request forgery","CSRF","API Gateway"],description:"This article introduces `csrf`, the CSRF security plugin for API Gateway, and details how to secure your API information in Apache APISIX with the help of the `csrf` plugin.",tags:["Technology","Ecosystem"]},l=void 0,u={permalink:"/blog/2022/02/23/csrf-api-gateway",source:"@site/blog/2022/02/23/csrf-api-gateway.md",title:"API Gateway Enhances Security by CSRF Plugin",description:"This article introduces `csrf`, the CSRF security plugin for API Gateway, and details how to secure your API information in Apache APISIX with the help of the `csrf` plugin.",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.095,truncated:!0,authors:[{name:"Yuan Bao",title:"Author",url:"https://github.com/Baoyuantop",image_url:"https://github.com/Baoyuantop.png",imageURL:"https://github.com/Baoyuantop.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"How to Integrate API Gateway and Consul?",permalink:"/blog/2022/02/25/consul-api-gateway"},nextItem:{title:"The practice of Nacos service discovery on API Gateway",permalink:"/blog/2022/02/21/nacos-api-gateway"}},c={authorsImageUrls:[void 0,void 0]},p=[{value:"Plugin Introduction",id:"plugin-introduction",children:[]},{value:"How to Use the Plugin",id:"how-to-use-the-plugin",children:[{value:"Enable CSRF Plugin in a Route",id:"enable-csrf-plugin-in-a-route",children:[]},{value:"Send a Request",id:"send-a-request",children:[]},{value:"Disable the Plugin",id:"disable-the-plugin",children:[]}]},{value:"Summary",id:"summary",children:[]}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article introduces ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf"),", the CSRF security plugin for Apache APISIX, and details how to secure your API information in Apache APISIX with the help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin.")),(0,r.kt)("p",null,"The key point of launching a cross-site request forgery attack is to make the target server unable to distinguish whether the source of many requests is a real user or an attacker. The general flow of the attack is that first the attacker will lure the user to navigate to a web page provided by the attacker. This page contains a request that is automatically sent to the target server. The page then loads normally and the request is automatically sent to the server. It appears to the server that the request is exactly the same as the request normally sent by the user, unaware that it was initiated by the attacker without the user's knowledge. Since the request carries some of the user's credentials, the attacker can get access to the user's information by parsing these credentials, thus creating a security risk."),(0,r.kt)("p",null,"This article introduces ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf"),", the CSRF security plugin for Apache APISIX, and details how to secure your API information in Apache APISIX with the help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin."),(0,r.kt)("p",null,"Apache APISIX is a dynamic, real-time, high-performance API gateway."),(0,r.kt)("p",null,"APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more."),(0,r.kt)("h2",{id:"plugin-introduction"},"Plugin Introduction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin is implemented based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Double Submit Cookie")," scheme. As defined in ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7231.html#section-4.2.1"},"RFC 7231#section-4.2.1"),", we consider the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONS")," methods as ",(0,r.kt)("strong",{parentName:"p"},"secure methods"),". According to this convention, the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plug-in will let these three methods go directly, but will check the other methods and intercept any unsafe requests."),(0,r.kt)("p",null,"To defend against CSRF attacks, we need to create a token or identifier that cannot be forged and ensure that this is not sent with the attacker's request. The user needs to carry the token that the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin relies on in the request header, and the token is computed using a key for signing. This ensures that the token cannot be forged by others, thus securing the API."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1645605178661-7c0bc3bc-9792-43fd-b3f6-b01c0f6b24db.png",alt:"Plugin workflow"})),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin is enabled in a route, all request responses to that route will contain a Cookie carrying a ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf token"),"."),(0,r.kt)("p",null,"The user needs to carry this Cookie in an insecure request for this route and add an additional field in the request header to carry the content of the cookie. The field is the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," value in the plugin configuration so that the request passes the CSRF plugin's checks."),(0,r.kt)("p",null,"The user provides a random key in the plugin's configuration, which is used by the plugin to encrypt the token information with a sha256 hash and generate a CSRF token, thus ensuring that the token cannot be forged."),(0,r.kt)("h2",{id:"how-to-use-the-plugin"},"How to Use the Plugin"),(0,r.kt)("h3",{id:"enable-csrf-plugin-in-a-route"},"Enable CSRF Plugin in a Route"),(0,r.kt)("p",null,"Create a route in APISIX using the Admin API and enable the csrf plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "plugins": {\n    "csrf": {\n      "key": "edd1c9f034335f136f87ad84b625c8f1"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:9001": 1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"There are three configuration parameters for the plugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": Required field, the value of the random secret key. The user needs to provide a random key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expires"),": Optional, the expiration time of the random secret key, the default value is 7200 seconds. Since the CSRF token is sent to the client using a Cookie, this configuration is placed in the Cookie's configuration to control the Cookie's expiration time. In addition, the plugin will also calculate the time to determine whether the token expires."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": Optional, the name of the CSRF token, the default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-csrf-token"),".")),(0,r.kt)("h3",{id:"send-a-request"},"Send a Request"),(0,r.kt)("p",null,"The route is first accessed using a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X POST\n")),(0,r.kt)("p",null,"Apache APISIX will intercept the request and return a ",(0,r.kt)("inlineCode",{parentName:"p"},"401")," error. In the returned header you will find a Cookie set, which should be the default value ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-csrf-token=....")," inside the Cookie if the name field of the plugin is not configured . This is the CSRF token generated by the CSRF plugin. In the request, you need to make sure that the request carries this Cookie and that the token is written in the request header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\nSet-Cookie: apisix-csrf-token= ${apisix-csrf-token};path=/;Expires=Mon, 13-Dec-21 09:33:55 GMT\n{"error_msg":"no csrf token in headers"}\n')),(0,r.kt)("p",null,"Example of using JavaScript on the client side: reading Cookies using ",(0,r.kt)("inlineCode",{parentName:"p"},"js-cookie")," and sending requests using ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const token = Cookie.get('apisix-csrf-token');\n\nconst instance = axios.create({\n  headers: {'apisix-csrf-token': token}\n});\n")),(0,r.kt)("p",null,"If the token in the Cookie does not match the token in the request header, the request will be intercepted by the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin, as shown in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X POST -H 'apisix-csrf-token: ${apisix-csrf-token}' -b 'apisix-csrf-token= ${apisix-csrf-token}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\nSet-Cookie: apisix-csrf-token= ${apisix-csrf-token};path=/;Expires=Mon, 13-Dec-21 09:33:55 GMT\n{"error_msg":"csrf token mismatch"}\n')),(0,r.kt)("p",null,"Finally, use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to verify regular access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X POST -H 'apisix-csrf-token: ${apisix-csrf-token}' -b 'apisix-csrf-token= ${apisix-csrf-token}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,r.kt)("p",null,"Internally, the plugin needs to verify that the token in the Cookie matches the token carried in the request header and recalculate the signature to verify that the token is valid."),(0,r.kt)("h3",{id:"disable-the-plugin"},"Disable the Plugin"),(0,r.kt)("p",null,"Remove the relevant configuration information for the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin and then send a request to update the route to deactivate the plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:1980": 1\n    }\n  }\n}\'\n')),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article describes in detail how the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," plugin works and how to use it. We hope that this article can give you a clearer understanding of using the plugin to intercept CSRF attacks in Apache APISIX and facilitate its application in practical scenarios."),(0,r.kt)("p",null,"Apache APISIX is also currently working on additional plugins to support the integration of additional services, so if you are interested, feel free to start a discussion in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussion"),", or via the ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"mailing list")," to communicate."))}d.isMDXComponent=!0}}]);