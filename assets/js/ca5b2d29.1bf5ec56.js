"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54986],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),g=l,f=d["".concat(o,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={title:"$guildRulesChannelID",description:"$guildRulesChannelID will return a guild's set rules channel ID.",id:"guildRulesChannelID"},i=void 0,u={unversionedId:"functions/Info/guildRulesChannelID",id:"functions/Info/guildRulesChannelID",title:"$guildRulesChannelID",description:"$guildRulesChannelID will return a guild's set rules channel ID.",source:"@site/docs/functions/Info/guildRulesChannelID.md",sourceDirName:"functions/Info",slug:"/functions/Info/guildRulesChannelID",permalink:"/docs/functions/Info/guildRulesChannelID",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1676948276,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"$guildRulesChannelID",description:"$guildRulesChannelID will return a guild's set rules channel ID.",id:"guildRulesChannelID"},sidebar:"docs",previous:{title:"$guildRoles",permalink:"/docs/functions/Info/guildRoles"},next:{title:"$guildSplash",permalink:"/docs/functions/Info/guildSplash"}},o={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$guildRulesChannelID")," will return a guild's set rules channel ID."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$guildRulesChannelID[guildID?]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"This will return the ID of the guild's rules channel (community guilds only):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildRulesChannelID',\n    code: `\n  $guildRulesChannelID[$guildID]\n  `\n});\n")))}p.isMDXComponent=!0}}]);