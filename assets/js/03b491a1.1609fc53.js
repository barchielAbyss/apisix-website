"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62916],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91650:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(25773),o=n(30808),r=(n(27378),n(35318)),i=["components"],l={id:"blog",title:"Contribute a blog post",keywords:["API gateway","APISIX","Apache APISIX","blog","how to write a blog"],description:"This article contains guidelines for contributors who want to write/update blogs posts on the Apache APISIX website."},s=void 0,u={unversionedId:"blog",id:"blog",isDocsHomePage:!1,title:"Contribute a blog post",description:"This article contains guidelines for contributors who want to write/update blogs posts on the Apache APISIX website.",source:"@site/docs/general/blog-contributing-guide.md",sourceDirName:".",slug:"/blog",permalink:"/docs/general/blog",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/blog-contributing-guide.md",tags:[],version:"current",lastUpdatedBy:"Yuedong Wu",lastUpdatedAt:1652662497,formattedLastUpdatedAt:"5/16/2022",frontMatter:{id:"blog",title:"Contribute a blog post",keywords:["API gateway","APISIX","Apache APISIX","blog","how to write a blog"],description:"This article contains guidelines for contributors who want to write/update blogs posts on the Apache APISIX website."},sidebar:"docs",previous:{title:"Contributing flow",permalink:"/docs/general/contributor-guide"},next:{title:"Report a security vulnerability",permalink:"/docs/general/security"}},p=[{value:"Areas to contribute",id:"areas-to-contribute",children:[{value:"Writing a new blog",id:"writing-a-new-blog",children:[]},{value:"Fixing typos, formatting and keeping up-to-date",id:"fixing-typos-formatting-and-keeping-up-to-date",children:[]}]}],c={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please follow this guide while writing/updating ",(0,r.kt)("a",{parentName:"p",href:"/blog/"},"blog posts")," on the Apache APISIX website."),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/submit-issue"},"submit an issue")," if you find any issues in the published blog posts. Also feel free to ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/#open-a-pull-request"},"open a pull request")," to fix the issue yourself."),(0,r.kt)("p",null,"The blogs are written in both ",(0,r.kt)("a",{parentName:"p",href:"/blog/"},"English")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh/blog/"},"Chinese"),". Contributors are encouraged to write blogs in their preferred language. Translations can be handled later and you can review the pull request."),(0,r.kt)("p",null,"English blogs are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"website/blog")," directory, in which they are categorized by year, month and date."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"website/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes.md")," means that a blog named ",(0,r.kt)("inlineCode",{parentName:"p"},"develop-apisix-ingress-with-nocalhost-in-kubernetes.md")," was published on November 22nd, 2021, and it is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"website/blog/2021/11/22")," directory. Once it is reviewed and megered, the URL should be: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes"),"."),(0,r.kt)("p",null,"Similarly, Chinese blogs are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"website/i18n/zh/docusaurus-plugin-content-blog")," directory and follow the same patterns described above."),(0,r.kt)("h2",{id:"areas-to-contribute"},"Areas to contribute"),(0,r.kt)("p",null,"You are encouraged to write blogs posts about how you use Apache APISIX or how you are contributing to Apache APISIX."),(0,r.kt)("p",null,"You can also update the existing blogs by updating the content or fixing issues like broken links and typos."),(0,r.kt)("h3",{id:"writing-a-new-blog"},"Writing a new blog"),(0,r.kt)("p",null,"Writing a new blog post is one of the best ways to contribute to Apache APISIX. Users and contributors of the project will be able to learn from your experience through your content."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To create a post, first find the right place to store it."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you are submitting a blog written in ",(0,r.kt)("strong",{parentName:"li"},"English"),", create a markdown file under the ",(0,r.kt)("inlineCode",{parentName:"li"},"website/blog")," directory."),(0,r.kt)("li",{parentName:"ol"},"If you are submitting a blog written in ",(0,r.kt)("strong",{parentName:"li"},"Chinese"),", create a markdown file under the ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/zh/docusaurus-plugin-content-blog")," directory."),(0,r.kt)("li",{parentName:"ol"},"If you don't find a directory that matches the year, month or date, you can create one yourself to store your post."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you find a place to store your post, you can create a markdown file in the directory. Note that the file name should be in English with no capitalized letters. Reviewers might suggest changing the file name to improve SEO (some of the file names contain capital letters and this is being fixed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/issues/713"},"#713"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can add text, images, diagrams and charts to your post by adding them to the markdown file. You can learn more about formatting in markdown from ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/"},"The Markdown Guide"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To add images to your post, first upload the images to this ",(0,r.kt)("a",{parentName:"li",href:"https://markdown.apiseven.com"},"public image CDN service")," and copy the links to the markdown file."),(0,r.kt)("li",{parentName:"ul"},"Charts and diagrams are always cool and we are happy to see them! From experience, charts with 4 columns or less fit perfectly to any screen."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/general/contributor-guide/#open-a-pull-request"},"Open a pull request")," with your new blog post."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": You can inspect your changes locally by building the website. This can ensure that there aren't any typos or issues left behind before you make a PR. We run CI checks to catch these errors but it is a recommended practice to test it locally."),(0,r.kt)("p",null,"To build the website locally, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd website\nyarn start\n")),(0,r.kt)("h4",{id:"configuring-blog-headers"},"Configuring blog headers"),(0,r.kt)("p",null,"Each of the blog posts have a YAML front matter or a header before the content. These are enclosed within the two ",(0,r.kt)("inlineCode",{parentName:"p"},"---")," in the markdown file."),(0,r.kt)("p",null,"The header section contains fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authors"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"tags"),". A description of these fields and templates to copy are described below."),(0,r.kt)("h5",{id:"single-author-template"},"Single author template"),(0,r.kt)("p",null,"You can use template if your post only has a single author."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "Blog\'s Title"\nauthors:\n  - name: "Author\'s Name"\n    title: "Author"\n    url: "Author\'s GitHub"\n    image_url: "Author\'s Image URL"\nkeywords:\n- keywords 1\n- keywords 2\n- keywords 3\n- keywords 4\n- keywords 5\ndescription: Description of the post\ntags: [tag1,tag2,...,tagn]\n')),(0,r.kt)("h5",{id:"co-author-template"},"Co-author template"),(0,r.kt)("p",null,"Translating and editing articles consume time and effort and deserves credit. For this, you can use the co-author template to add multiple authors to the blog post."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "Blog\'s Title"\nauthors:\n  - name: "Author\'s Name"\n    title: "Author\'s title"\n    url: "Author\'s GitHub"\n    image_url: "Author\'s Image URL"\n  - name: "Translator/Technical Writer\'s name"\n    url: "Translator/Technical Writer\'s GitHub"\n    image_url: "Translator/Technical Writer\'s Image URL"\nkeywords:\n- keywords 1\n- keywords 2\n- keywords 3\n- keywords 4\n- keywords 5\ndescription: Description of the post\ntags: [tag1,tag2,...,tagn]\n')),(0,r.kt)("p",null,"Each of these fields are described in detail below."),(0,r.kt)("h5",{id:"authors"},"authors"),(0,r.kt)("p",null,"This is a required field to be used when the blog is co-authored by two or more people to give credit to both the authors. ",(0,r.kt)("inlineCode",{parentName:"p"},"authors")," field is composed of the following fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authors.name"),": authors' names in plain text, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},'name: "John Doe"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authors.title"),": author's title in plain text, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},'title: "Technical Writer"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authors.url"),": authors' GitHub page, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},'url: "https://github.com/yzeng25"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authors.image_url"),": author's GitHub avatar, for example: ",(0,r.kt)("inlineCode",{parentName:"li"},'authors.image_url: "https://avatars.githubusercontent.com/u/36651058?v=4"'),".")),(0,r.kt)("h5",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"This is a required field used to enhance SEO performance."),(0,r.kt)("p",null,'Usually the first three keywords are "APISIX", "Apache APISIX" and "API Gateway", and the last two are specific to the blog post.'),(0,r.kt)("h5",{id:"description"},"description"),(0,r.kt)("p",null,"This is also a required field used to enhance SEO performance."),(0,r.kt)("p",null,"A brief summary of the blog post would be a good description. A good rule of thumb is to keep the number of characters in the description between 150 and 170."),(0,r.kt)("h5",{id:"tags"},"tags"),(0,r.kt)("p",null,"This is a required filed used to categorize the blog post."),(0,r.kt)("p",null,"Each post can have multiple tags. The tags used currently are given below and each post usually fits into one or more of these tags."),(0,r.kt)("p",null,"Each post can have more than one tag. The available tags and explanations are as follows. If none of the tags below fits, please leave a comment in your pull request, and we will handle it together. Please note that these tags and rules of applying tags could change over time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Community"),': Everything related to community, for example, "How to contribute to an open source project without writing code?".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Events"),": Related to events, for example, live streams, event previews, meetups and project meetings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interview"),": For example, Dr. Yang Li interview, Summer of Programming interview."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Practical Case"),": Includes best practices to follow. This is easily confused with ",(0,r.kt)("strong",{parentName:"li"},"Technology"),'. The content of the article determines which tag the post belongs to. For example, "Running Apache APISIX on the xxx platform" would belong to the Practical Case tag and "Apache APISIX vs Envoy" would belong to the Technology tag.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Release"),": Tag for release notes. Note that the release notes in blog posts are polished whereas inline release notes are written by developers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security"),": Security vulnerability notifications and methods to bypass security vulnerabilities. Currently there are ",(0,r.kt)("a",{parentName:"li",href:"/blog/tags/security/"},"five articles"),", and they generally have CVE-xxxxxxx in its title."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Technology"),": Technical articles. Should not be confused with ",(0,r.kt)("strong",{parentName:"li"},"Practical Case")," (see above)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Case"),": Posts about using Apache APISIX. Tell us how you are using Apache APISIX!")),(0,r.kt)("p",null,"Reviewers will help you find the right tags while reviewing your PR."),(0,r.kt)("h5",{id:"obtaining-authorsimage_url"},"Obtaining authors.image_url"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your browser."),(0,r.kt)("li",{parentName:"ol"},"Enter the url to author's GitHub page followed by a .png (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/author-username.png"},"https://github.com/author-username.png"),")."),(0,r.kt)("li",{parentName:"ol"},"This will open the author's avatar image and you can copy the url to the image."),(0,r.kt)("li",{parentName:"ol"},"Paste this image url to the ",(0,r.kt)("inlineCode",{parentName:"li"},"authors.image_url")," field.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/49474499/155665803-198d1be0-2878-4c46-9ce1-7e39697eebe8.gif",alt:"How to get the authors.image_url"})),(0,r.kt)("h4",{id:"truncate-and-summary"},"Truncate and summary"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "Blog\'s Title"\n---\nThis is the summary.\n\nAnd this is also part of the summary.\n\n\x3c!--truncate--\x3e\n\nBut this is not part of the summary.\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," marker in your posts to decide what will be shown as the post summary in the list of posts page."),(0,r.kt)("p",null,"Anything above ",(0,r.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," will be part of this summary."),(0,r.kt)("p",null,"You can learn more from the ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog#blog-list"},"Docusaurus docs"),"."),(0,r.kt)("h5",{id:"difference-between-description-and-summary"},"Difference between Description and Summary"),(0,r.kt)("p",null,"Summary and description could essentially be the same. Then why do we repeat them on two fields?"),(0,r.kt)("p",null,"Well, the description's primary purpose is for SEO enhancement and is mainly read by computers where as the summary gives human readers an idea about the content of the blog post."),(0,r.kt)("h3",{id:"fixing-typos-formatting-and-keeping-up-to-date"},"Fixing typos, formatting and keeping up-to-date"),(0,r.kt)("p",null,"You can also make impactful contributions by fixing/updating the existing blog posts."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To start, locate the file for the blog post. Note that English blogs are located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"website/blog")," directory and the Chinese blogs are located in ",(0,r.kt)("inlineCode",{parentName:"li"},"website/i18n/zh/docusaurus-plugin-content-blog")," directory."),(0,r.kt)("li",{parentName:"ol"},"Once you locate the file, make the necessary changes."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/general/contributor-guide/#open-a-pull-request"},"Open a pull request")," with the updated blog post.")))}h.isMDXComponent=!0}}]);