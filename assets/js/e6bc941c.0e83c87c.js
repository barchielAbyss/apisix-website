"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53281],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||l[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},47682:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var n=r(25773),a=r(30808),i=(r(27378),r(35318)),o=["components"],p={title:"Biweekly Report\uff5cExplore the weeks of Apr 15th - Apr 30th",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",tags:["Events"]},s=void 0,c={permalink:"/blog/2022/05/10/weekly-report-0510",source:"@site/blog/2022/05/10/weekly-report-0510.md",title:"Biweekly Report\uff5cExplore the weeks of Apr 15th - Apr 30th",description:"The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.",date:"2022-05-10T00:00:00.000Z",formattedDate:"May 10, 2022",tags:[{label:"Events",permalink:"/blog/tags/events"}],readingTime:1.945,truncated:!0,authors:[],nextItem:{title:"Best Practices for TiDB-based Apache APISIX High Availability Configuration",permalink:"/blog/2022/04/22/apisix-with-tidb-practice"}},u={authorsImageUrls:[]},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Contributor Statistics",id:"contributor-statistics",children:[]},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #6923",id:"issue-6923",children:[]}]},{value:"Highlights of Recent Features",id:"highlights-of-recent-features",children:[]},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[]}],h={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From April 15th to April 30th, 28 contributors submitted 88 commits for Apache APISIX. Thank you all for your contributions to Apache APISIX. It is your selfless contribution to make the Apache APISIX project better!")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Apache APISIX has grown as a community from the first day of open source and has quickly become the most active open source API gateway project in the world. These achievements cannot be achieved without the joint efforts of our community partners."),(0,i.kt)("p",null,'"If you want to go fast, go alone.If you want to go far, go together." The Apache APISIX Community Weekly Report hopes to help community members better understand the weekly progress of the Apache APISIX community and and facilitate everyone to participate in the Apache APISIX community.'),(0,i.kt)("p",null,"We have also compiled some issues suitable for newcomers to the community to participate in! If you are interested, don't miss it!"),(0,i.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1652147147760-64ccf980-1c1e-473b-b04f-ee28e52cf33d.png",alt:"Contributors List"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1652147147758-9dcadcd2-7190-4846-9a5b-b0c4a1098e66.png",alt:"New Contributors"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-6923"},"Issue #6923"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link"),": ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/6923"},"https://github.com/apache/apisix/issues/6923")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue description"),":"),(0,i.kt)("p",null,"As a user, I want to let ",(0,i.kt)("inlineCode",{parentName:"p"},"api-breaker")," plugin return the default response body. Refer to the document ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/api-breaker/"},"api-breaker"),", when upstream is in the unhealthy state, the ",(0,i.kt)("inlineCode",{parentName:"p"},"api-breaker")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," only, without a response body."),(0,i.kt)("p",null,"In order to be more compatible to the client, return a default response body is useful."),(0,i.kt)("h2",{id:"highlights-of-recent-features"},"Highlights of Recent Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6869"},"Inject kubernetes discovery environment variable"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zhixiongdu027"},"zhixiongdu027"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6873"},"xRPC added simple redis support"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6885"},"xRPC added basic stream support"),"\uff08Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6901"},"Feat(xRPC): support dynamic upstream"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6919"},"Feat(xRPC): support dynamic upstream with upstream_id"),"(Contributor: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),")"))),(0,i.kt)("p",null,"The Apache APISIX project website and the Github issue have accumulated a wealth of documentation and experience, so if you encounter problems, you can read the documentation, search the issue with keywords, or participate in the discussion on the issue to put forward your own ideas and practical experience."),(0,i.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apisix.apache.org/blog/2022/04/22/apisix-with-tidb-practice"},"Best Practices for TiDB-based Apache APISIX High Availability Configuration"))),(0,i.kt)("p",null,"In the TiDB Hackathon 2021, the APISIX team (team leader: Chao Zhang, team members: Zeping Bai, Zhengsong Tu, Jinghan Chen) presented the ability of TiDB to interface with Apache APISIX to implement a universal configuration center. In this article, we will bring you some stories behind the project and the future outlook, if you are interested in the project, please feel free to participate in the project."))}m.isMDXComponent=!0}}]);