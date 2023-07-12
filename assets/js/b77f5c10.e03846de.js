"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Reloading the Commands ",description:"Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands.",authors:{name:"@valentineu0",title:"Member - 693451182617657394",userid:"693451182617657394",url:"https://discord.com/users/693451182617657394",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/693451182617657394.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/693451182617657394/30bbab",source:"@site/forums/posts/693451182617657394/30bbab.md",title:"Reloading the Commands ",description:"Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands.",date:"2023-07-12T18:56:40.000Z",formattedDate:"July 12, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@valentineu0",title:"Member - 693451182617657394",userid:"693451182617657394",url:"https://discord.com/users/693451182617657394",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/693451182617657394.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/693451182617657394.png"}],frontMatter:{title:"Reloading the Commands ",description:"Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands.",authors:{name:"@valentineu0",title:"Member - 693451182617657394",userid:"693451182617657394",url:"https://discord.com/users/693451182617657394",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/693451182617657394.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/693451182617657394.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Clear command",permalink:"/wikis/posts/689364013297041409/psfe2c"},nextItem:{title:"Some thread functions",permalink:"/wikis/posts/713132410153205802/34unj"}},l={authorsImageUrls:[void 0]},u=[{value:"Requirements",id:"requirements",level:2},{value:"Warning",id:"warning",level:3},{value:"Images",id:"images",level:3}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reloads and executes all commands without restarting your bot (changes are also applied)."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loader (LoadCommands) - ",(0,r.kt)("a",{parentName:"li",href:"https://aoi.js.org/docs/guides/commandhandler#starting-off-with-modifying-your-main-file"},"https://aoi.js.org/docs/guides/commandhandler#starting-off-with-modifying-your-main-file"))),(0,r.kt)("h3",{id:"warning"},"Warning"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("strong",{parentName:"p"},"old version")," of the $if function was used here. For more information, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://aoi.js.org/docs/functions/misc-related/if"},"documentation")," of the $if function.")),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    name: "reload",\n    aliases: ["rr"],\n    $if: "old",\n    code: `\n    $if[$authorID==$clientOwnerIDs]\n        $updateCommands\n        $reply[$messageID;true]\n        :white_check_mark: Reload completed.\n    $endif\n    `\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"images"},"Images"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.valentineu.xyz/aoi.png",alt:"Discord"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://assets.valentineu.xyz/aoi2.png",alt:"Reload"})))}p.isMDXComponent=!0}}]);