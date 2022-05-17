"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42202],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58463:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(25773),i=n(30808),a=(n(27378),n(35318)),o=["components"],s={title:"zookeeper"},l=void 0,p={unversionedId:"discovery/zookeeper",id:"discovery/zookeeper",isDocsHomePage:!1,title:"zookeeper",description:"\x3c!--",source:"@site/docs/apisix/discovery/zookeeper.md",sourceDirName:"discovery",slug:"/discovery/zookeeper",permalink:"/zh/docs/apisix/next/discovery/zookeeper",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/discovery/zookeeper.md",tags:[],version:"current",frontMatter:{title:"zookeeper"},sidebar:"docs",previous:{title:"eureka",permalink:"/zh/docs/apisix/next/discovery/eureka"},next:{title:"Kubernetes",permalink:"/zh/docs/apisix/next/discovery/kubernetes"}},c=[{value:"Service Discovery Via Zookeeper",id:"service-discovery-via-zookeeper",children:[{value:"How <code>apisix-seed</code> Works",id:"how-apisix-seed-works",children:[]},{value:"Setting <code>apisix-seed</code> and Zookeeper",id:"setting-apisix-seed-and-zookeeper",children:[]},{value:"Setting <code>APISIX</code> Route and Upstream",id:"setting-apisix-route-and-upstream",children:[]},{value:"Register Service and verify Request",id:"register-service-and-verify-request",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"service-discovery-via-zookeeper"},"Service Discovery Via Zookeeper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Zookeeper")," service discovery needs to rely on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-seed"},"apisix-seed")," project."),(0,a.kt)("h3",{id:"how-apisix-seed-works"},"How ",(0,a.kt)("inlineCode",{parentName:"h3"},"apisix-seed")," Works"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/apisix-seed.svg",alt:"APISIX-SEED"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"apisix-seed")," completes data exchange by watching the changes of ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zookeeper")," at the same time."),(0,a.kt)("p",null,"The process is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"APISIX")," registers an upstream and specifies the service discovery type as ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," watches the resource changes of ",(0,a.kt)("inlineCode",{parentName:"li"},"APISIX")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," and filters the discovery type and obtains the service name."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," binds the service to the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," resource and starts watching the service in zookeeper."),(0,a.kt)("li",{parentName:"ol"},"The client registers the service with ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," gets the service changes in ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," queries the bound ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," resource information through the service name, and writes the updated service node to ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"APISIX")," worker watches ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," changes and refreshes the service node information to the memory.")),(0,a.kt)("h3",{id:"setting-apisix-seed-and-zookeeper"},"Setting ",(0,a.kt)("inlineCode",{parentName:"h3"},"apisix-seed")," and Zookeeper"),(0,a.kt)("p",null,"The configuration steps are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start the Zookeeper service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd --rm --name=dev-zookeeper -p 2181:2181 zookeeper:3.7.0\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Download and compile the ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," project.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/api7/apisix-seed.git\ncd apisix-seed\ngo build\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," configuration file, config path ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/conf.yaml"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'etcd:                            # APISIX ETCD Configure\n  host:\n    - "http://127.0.0.1:2379"\n  prefix: /apisix\n  timeout: 30\n\ndiscovery:\n  zookeeper:                     # Zookeeper Service Discovery\n    hosts:\n      - "127.0.0.1:2181"         # Zookeeper service address\n    prefix: /zookeeper\n    weight: 100                  # default weight for node\n    timeout: 10                  # default 10s\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-seed")," to monitor service changes")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./apisix-seed\n")),(0,a.kt)("h3",{id:"setting-apisix-route-and-upstream"},"Setting ",(0,a.kt)("inlineCode",{parentName:"h3"},"APISIX")," Route and Upstream"),(0,a.kt)("p",null,"Set a route, the request path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/zk/*"),", the upstream uses zookeeper as service discovery, and the service name\nis ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX-ZK"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/zk/*",\n    "upstream": {\n        "service_name": "APISIX-ZK",\n        "type": "roundrobin",\n        "discovery_type": "zookeeper"\n    }\n}\'\n')),(0,a.kt)("h3",{id:"register-service-and-verify-request"},"Register Service and verify Request"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Service registration using Zookeeper CLI")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Register Service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Login Container\ndocker exec -it ${CONTAINERID} /bin/bash\n# Login Zookeeper Client\noot@ae2f093337c1:/apache-zookeeper-3.7.0-bin# ./bin/zkCli.sh\n# Register Service\n[zk: localhost:2181(CONNECTED) 0] create /zookeeper/APISIX-ZK \'{"host":"127.0.0.1:1980","weight":100}\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Successful Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Created /zookeeper/APISIX-ZK\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Verify Request")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i http://127.0.0.1:9080/zk/hello\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Response")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HTTP/1.1 200 OK\nConnection: keep-alive\nContent-Type: text/html; charset=utf-8\nDate: Tue, 29 Mar 2022 08:51:28 GMT\nServer: APISIX/2.12.0\nTransfer-Encoding: chunked\n\nhello\n")))}u.isMDXComponent=!0}}]);