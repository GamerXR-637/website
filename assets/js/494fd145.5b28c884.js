"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57849:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"$guildEmojis",description:"$guildEmojis will return the emojis of a specific guild.",id:"guildEmojis"},l=void 0,o={unversionedId:"functions/guild-related/guildEmojis",id:"version-6.2.6/functions/guild-related/guildEmojis",title:"$guildEmojis",description:"$guildEmojis will return the emojis of a specific guild.",source:"@site/versioned_docs/version-6.2.6/functions/guild-related/guildEmojis.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildEmojis",permalink:"/docs/functions/guild-related/guildEmojis",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687111125,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$guildEmojis",description:"$guildEmojis will return the emojis of a specific guild.",id:"guildEmojis"},sidebar:"docs",previous:{title:"$guildEmojiExists",permalink:"/docs/functions/guild-related/guildEmojiExists"},next:{title:"$guildExists",permalink:"/docs/functions/guild-related/guildExists"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:s},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$guildEmojis")," will return the emojis of a specific guild."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$guildEmojis[sep?;guildID?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sep?"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The separator to separate the returned emojis."),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the guild."),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will return the emojis of your guild:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildEmojis',\n    code: `\n  $guildEmojis[, ;$guildID]\n  `\n});\n")))}c.isMDXComponent=!0}}]);