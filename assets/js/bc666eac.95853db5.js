"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"$ban",description:"Bans an user from the guild using their ID."},l=void 0,i={unversionedId:"functions/ban",id:"version-5.5.5/functions/ban",title:"$ban",description:"Bans an user from the guild using their ID.",source:"@site/versioned_docs/version-5.5.5/functions/ban.md",sourceDirName:"functions",slug:"/functions/ban",permalink:"/docs/5.5.5/functions/ban",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689188200,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"$ban",description:"Bans an user from the guild using their ID."},sidebar:"docs",previous:{title:"$awaitMessageReactions",permalink:"/docs/5.5.5/functions/awaitmessagereactions"},next:{title:"$banCount",permalink:"/docs/5.5.5/functions/bancount"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Examples",id:"examples",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ban")," allows you to ban someone from the server using their user ID. "),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$ban[guildID;userID;days?;reason]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"guild id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The server ID where the user will get ban"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"user id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The user the bot is banning"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"days"),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many of the messages over x days to delete of the banned user"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reason"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The reason in the audit logs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h6",{id:"footnote"},"Footnote"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Do not forget to use ",(0,r.kt)("inlineCode",{parentName:"em"},"$onlyBotPerms")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"$onlyPerms")," to detect user has permission for this action, either bot!"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "ban",\n  code: `\n  $username[$mentioned] has been banned from the guild.\n  \n  $ban[$guildID;$mentioned;7;$noMentionMessage]\n  `\n// Deleted 7 days of messages the user\n// \ud83d\udca1 That\'s also called as "soft-ban"\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without deleting user's messages on the guild:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "ban",\n  code: `\n  $username[$message] has been banned from the guild.\n  \n  $ban[$guildID;$message;0;$noMentionMessage]\n  `\n// Didn\'t delete any messages of the user, but banned\n});\n')))}m.isMDXComponent=!0}}]);