"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42149],{35318:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95332:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(25773),o=t(30808),a=(t(27378),t(35318)),i=["components"],l={title:"Stand-alone mode"},u=void 0,s={unversionedId:"stand-alone",id:"stand-alone",isDocsHomePage:!1,title:"Stand-alone mode",description:"\x3c!--",source:"@site/docs/apisix/stand-alone.md",sourceDirName:".",slug:"/stand-alone",permalink:"/docs/apisix/next/stand-alone",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/stand-alone.md",tags:[],version:"current",frontMatter:{title:"Stand-alone mode"},sidebar:"docs",previous:{title:"Router radixtree",permalink:"/docs/apisix/next/router-radixtree"},next:{title:"Stream Proxy",permalink:"/docs/apisix/next/stream-proxy"}},c=[{value:"How to configure rules",id:"how-to-configure-rules",children:[]},{value:"How to configure Router",id:"how-to-configure-router",children:[]},{value:"How to configure Router + Service",id:"how-to-configure-router--service",children:[]},{value:"How to configure Router + Upstream",id:"how-to-configure-router--upstream",children:[]},{value:"How to configure Router + Service + Upstream",id:"how-to-configure-router--service--upstream",children:[]},{value:"How to configure Plugins",id:"how-to-configure-plugins",children:[]},{value:"How to enable SSL",id:"how-to-enable-ssl",children:[]},{value:"How to configure global rule",id:"how-to-configure-global-rule",children:[]},{value:"How to configure consumer",id:"how-to-configure-consumer",children:[]},{value:"How to configure plugin metadata",id:"how-to-configure-plugin-metadata",children:[]},{value:"How to configure stream route",id:"how-to-configure-stream-route",children:[]}],d={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Turning on the APISIX node in Stand-alone mode will no longer use the default etcd as the configuration center."),(0,a.kt)("p",null,"This method is more suitable for two types of users:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"kubernetes(k8s)\uff1aDeclarative API that dynamically updates the routing rules with a full yaml configuration."),(0,a.kt)("li",{parentName:"ol"},"Different configuration centers: There are many implementations of the configuration center, such as Consul, etc., using the full yaml file for intermediate conversion.")),(0,a.kt)("p",null,"The routing rules in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml")," file are loaded into memory immediately after the APISIX node service starts. And every time interval (default 1 second), will try to detect whether the file content is updated, if there is an update, reload the rule."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": When reloading and updating routing rules, they are all hot memory updates, and there will be no replacement of working processes, it is a hot update."),(0,a.kt)("p",null,"Since the current Admin API is based on the etcd configuration center solution, enable Admin API is not allowed when the Stand-alone mode is enabled."),(0,a.kt)("p",null,"To enable Stand-alone mode, we can set ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.config_center")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," and disable Admin API in file ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,a.kt)("p",null,"Refer to the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  enable_admin: false\n  config_center: yaml\n")),(0,a.kt)("h3",{id:"how-to-configure-rules"},"How to configure rules"),(0,a.kt)("p",null,"All of the rules are stored in one file which named ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml"),",\nthe APISIX will check if this file has any changed every second.\nIf the file changed and we found ",(0,a.kt)("inlineCode",{parentName:"p"},"#END")," at the end of the file,\nAPISIX will load the rules in this file and update to memory of APISIX."),(0,a.kt)("p",null,"Here is a mini example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"NOTE"),": APISIX will not load the rules into memory from file ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml")," if there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"#END")," at the end."),(0,a.kt)("h3",{id:"how-to-configure-router"},"How to configure Router"),(0,a.kt)("p",null,"Single Router\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("p",null,"Multiple Router\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n  -\n    uri: /hello2\n    upstream:\n        nodes:\n            "127.0.0.1:1981": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-router--service"},"How to configure Router + Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        service_id: 1\nservices:\n    -\n        id: 1\n        upstream:\n            nodes:\n                "127.0.0.1:1980": 1\n            type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-router--upstream"},"How to configure Router + Upstream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        upstream_id: 1\nupstreams:\n    -\n        id: 1\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-router--service--upstream"},"How to configure Router + Service + Upstream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        service_id: 1\nservices:\n    -\n        id: 1\n        upstream_id: 2\nupstreams:\n    -\n        id: 2\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-plugins"},"How to configure Plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# plugins listed here will be hot reloaded and override the boot configuration\nplugins:\n  - name: ip-restriction\n  - name: jwt-auth\n  - name: mqtt-proxy\n    stream: true # set 'stream' to true for stream plugins\n#END\n")),(0,a.kt)("h3",{id:"how-to-enable-ssl"},"How to enable SSL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'ssl:\n    -\n        cert: |\n            -----BEGIN CERTIFICATE-----\n            MIIDrzCCApegAwIBAgIJAI3Meu/gJVTLMA0GCSqGSIb3DQEBCwUAMG4xCzAJBgNV\n            BAYTAkNOMREwDwYDVQQIDAhaaGVqaWFuZzERMA8GA1UEBwwISGFuZ3pob3UxDTAL\n            BgNVBAoMBHRlc3QxDTALBgNVBAsMBHRlc3QxGzAZBgNVBAMMEmV0Y2QuY2x1c3Rl\n            ci5sb2NhbDAeFw0yMDEwMjgwMzMzMDJaFw0yMTEwMjgwMzMzMDJaMG4xCzAJBgNV\n            BAYTAkNOMREwDwYDVQQIDAhaaGVqaWFuZzERMA8GA1UEBwwISGFuZ3pob3UxDTAL\n            BgNVBAoMBHRlc3QxDTALBgNVBAsMBHRlc3QxGzAZBgNVBAMMEmV0Y2QuY2x1c3Rl\n            ci5sb2NhbDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ/qwxCR7g5S\n            s9+VleopkLi5pAszEkHYOBpwF/hDeRdxU0I0e1zZTdTlwwPy2vf8m3kwoq6fmNCt\n            tdUUXh5Wvgi/2OA8HBBzaQFQL1Av9qWwyES5cx6p0ZBwIrcXQIsl1XfNSUpQNTSS\n            D44TGduXUIdeshukPvMvLWLezynf2/WlgVh/haWtDG99r/Gj3uBdjl0m/xGvKvIv\n            NFy6EdgG9fkwcIalutjrUnGl9moGjwKYu4eXW2Zt5el0d1AHXUsqK4voe0p+U2Nz\n            quDmvxteXWdlsz8o5kQT6a4DUtWhpPIfNj9oZfPRs3LhBFQ74N70kVxMOCdec1lU\n            bnFzLIMGlz0CAwEAAaNQME4wHQYDVR0OBBYEFFHeljijrr+SPxlH5fjHRPcC7bv2\n            MB8GA1UdIwQYMBaAFFHeljijrr+SPxlH5fjHRPcC7bv2MAwGA1UdEwQFMAMBAf8w\n            DQYJKoZIhvcNAQELBQADggEBAG6NNTK7sl9nJxeewVuogCdMtkcdnx9onGtCOeiQ\n            qvh5Xwn9akZtoLMVEdceU0ihO4wILlcom3OqHs9WOd6VbgW5a19Thh2toxKidHz5\n            rAaBMyZsQbFb6+vFshZwoCtOLZI/eIZfUUMFqMXlEPrKru1nSddNdai2+zi5rEnM\n            HCot43+3XYuqkvWlOjoi9cP+C4epFYrxpykVbcrtbd7TK+wZNiK3xtDPnVzjdNWL\n            geAEl9xrrk0ss4nO/EreTQgS46gVU+tLC+b23m2dU7dcKZ7RDoiA9bdVc4a2IsaS\n            2MvLL4NZ2nUh8hAEHiLtGMAV3C6xNbEyM07hEpDW6vk6tqk=\n            -----END CERTIFICATE-----\n        key: |\n            -----BEGIN PRIVATE KEY-----\n            MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCf6sMQke4OUrPf\n            lZXqKZC4uaQLMxJB2DgacBf4Q3kXcVNCNHtc2U3U5cMD8tr3/Jt5MKKun5jQrbXV\n            FF4eVr4Iv9jgPBwQc2kBUC9QL/alsMhEuXMeqdGQcCK3F0CLJdV3zUlKUDU0kg+O\n            Exnbl1CHXrIbpD7zLy1i3s8p39v1pYFYf4WlrQxvfa/xo97gXY5dJv8RryryLzRc\n            uhHYBvX5MHCGpbrY61JxpfZqBo8CmLuHl1tmbeXpdHdQB11LKiuL6HtKflNjc6rg\n            5r8bXl1nZbM/KOZEE+muA1LVoaTyHzY/aGXz0bNy4QRUO+De9JFcTDgnXnNZVG5x\n            cyyDBpc9AgMBAAECggEAatcEtehZPJaCeClPPF/Cwbe9YoIfe4BCk186lHI3z7K1\n            5nB7zt+bwVY0AUpagv3wvXoB5lrYVOsJpa9y5iAb3GqYMc/XDCKfD/KLea5hwfcn\n            BctEn0LjsPVKLDrLs2t2gBDWG2EU+udunwQh7XTdp2Nb6V3FdOGbGAg2LgrSwP1g\n            0r4z14F70oWGYyTQ5N8UGuyryVrzQH525OYl38Yt7R6zJ/44FVi/2TvdfHM5ss39\n            SXWi00Q30fzaBEf4AdHVwVCRKctwSbrIOyM53kiScFDmBGRblCWOxXbiFV+d3bjX\n            gf2zxs7QYZrFOzOO7kLtHGua4itEB02497v+1oKDwQKBgQDOBvCVGRe2WpItOLnj\n            SF8iz7Sm+jJGQz0D9FhWyGPvrN7IXGrsXavA1kKRz22dsU8xdKk0yciOB13Wb5y6\n            yLsr/fPBjAhPb4h543VHFjpAQcxpsH51DE0b2oYOWMmz+rXGB5Jy8EkP7Q4njIsc\n            2wLod1dps8OT8zFx1jX3Us6iUQKBgQDGtKkfsvWi3HkwjFTR+/Y0oMz7bSruE5Z8\n            g0VOHPkSr4XiYgLpQxjbNjq8fwsa/jTt1B57+By4xLpZYD0BTFuf5po+igSZhH8s\n            QS5XnUnbM7d6Xr/da7ZkhSmUbEaMeHONSIVpYNgtRo4bB9Mh0l1HWdoevw/w5Ryt\n            L/OQiPhfLQKBgQCh1iG1fPh7bbnVe/HI71iL58xoPbCwMLEFIjMiOFcINirqCG6V\n            LR91Ytj34JCihl1G4/TmWnsH1hGIGDRtJLCiZeHL70u32kzCMkI1jOhFAWqoutMa\n            7obDkmwraONIVW/kFp6bWtSJhhTQTD4adI9cPCKWDXdcCHSWj0Xk+U8HgQKBgBng\n            t1HYhaLzIZlP/U/nh3XtJyTrX7bnuCZ5FhKJNWrYjxAfgY+NXHRYCKg5x2F5j70V\n            be7pLhxmCnrPTMKZhik56AaTBOxVVBaYWoewhUjV4GRAaK5Wc8d9jB+3RizPFwVk\n            V3OU2DJ1SNZ+W2HBOsKrEfwFF/dgby6i2w6MuAP1AoGBAIxvxUygeT/6P0fHN22P\n            zAHFI4v2925wYdb7H//D8DIADyBwv18N6YH8uH7L+USZN7e4p2k8MGGyvTXeC6aX\n            IeVtU6fH57Ddn59VPbF20m8RCSkmBvSdcbyBmqlZSBE+fKwCliKl6u/GH0BNAWKz\n            r8yiEiskqRmy7P7MY9hDmEbG\n            -----END PRIVATE KEY-----\n        snis:\n            - "yourdomain.com"\n#END\n')),(0,a.kt)("h3",{id:"how-to-configure-global-rule"},"How to configure global rule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'global_rules:\n    -\n        id: 1\n        plugins:\n            response-rewrite:\n                body: "hello\\n"\n')),(0,a.kt)("h3",{id:"how-to-configure-consumer"},"How to configure consumer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n  - username: jwt\n    plugins:\n        jwt-auth:\n            key: user-key\n            secret: my-secret-key\n")),(0,a.kt)("h3",{id:"how-to-configure-plugin-metadata"},"How to configure plugin metadata"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'upstreams:\n  - id: 1\n    nodes:\n      "127.0.0.1:1980": 1\n    type: roundrobin\nroutes:\n  -\n    uri: /hello\n    upstream_id: 1\n    plugins:\n        http-logger:\n            batch_max_size: 1\n            uri: http://127.0.0.1:1980/log\nplugin_metadata:\n  - id: http-logger # note the id is the plugin name\n    log_format:\n        host: "$host",\n        remote_addr: "$remote_addr"\n')),(0,a.kt)("h3",{id:"how-to-configure-stream-route"},"How to configure stream route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_routes:\n  - server_addr: 127.0.0.1\n    server_port: 1985\n    id: 1\n    upstream_id: 1\n    plugins:\n      mqtt-proxy:\n        protocol_name: "MQTT"\n        protocol_level: 4\n        upstream:\n          ip: "127.0.0.1"\n          port: 1995\nupstreams:\n  - nodes:\n      "127.0.0.1:1995": 1\n    type: roundrobin\n    id: 1\n')))}p.isMDXComponent=!0}}]);