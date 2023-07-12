"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"bot.onBanAdd",description:"An event that gets executed, if a user was banned on a server. To let the bot listen to the event, add one bot.onBanAdd() callback inside your main file."},l=void 0,s={unversionedId:"events/bot.onbanadd",id:"version-5.5.5/events/bot.onbanadd",title:"bot.onBanAdd",description:"An event that gets executed, if a user was banned on a server. To let the bot listen to the event, add one bot.onBanAdd() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onbanadd.md",sourceDirName:"events",slug:"/events/bot.onbanadd",permalink:"/docs/5.5.5/events/bot.onbanadd",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689188200,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"bot.onBanAdd",description:"An event that gets executed, if a user was banned on a server. To let the bot listen to the event, add one bot.onBanAdd() callback inside your main file."},sidebar:"docs",previous:{title:"bot.loopCommand",permalink:"/docs/5.5.5/events/bot.loopcommand"},next:{title:"bot.onBanRemove",permalink:"/docs/5.5.5/events/bot.onbanremove"}},i={},d=[{value:"Usage:",id:"usage",level:4},{value:"Example Commands:",id:"example-commands",level:4}],c={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This callback allows the bot to log every time someone gets banned from a server."),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banAddCommand({ //command\nchannel: "channel id", //channel where it\'ll be logged\ncode: `your code` // your code\n})\n')),(0,r.kt)("h4",{id:"example-commands"},"Example Commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banAddCommand({ \nchannel: "772414449839636490",\ncode: `$username was banned in $serverName`\n})\n')),(0,r.kt)("p",null,"If you have a server variable for logs, you can add this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.banAddCommand({ \nchannel: "$getServerVar[variable]", //Add getServerVar to get the servers log channel (if they set it ofcourse)\ncode: `\n$username was banned in $serverName\n`\n})\n')),(0,r.kt)("p",null,"You can use amongst other functions these functions inside your banAddCommand to return data of the user that got banned and the server that banned the user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/username"},"$username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/authorid"},"$authorID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/usertag"},"$userTag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/servername"},"$serverName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/5.5.5/functions/guildid"},"$guildID"))))}m.isMDXComponent=!0}}]);