"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=s,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const o={title:"$messageID",description:"Returns the user's message ID"},a=void 0,i={unversionedId:"functions/usermessageid",id:"version-5.5.5/functions/usermessageid",title:"$messageID",description:"Returns the user's message ID",source:"@site/versioned_docs/version-5.5.5/functions/usermessageid.md",sourceDirName:"functions",slug:"/functions/usermessageid",permalink:"/docs/5.5.5/functions/usermessageid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687111125,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$messageID",description:"Returns the user's message ID"},sidebar:"docs",previous:{title:"$userLeaderboard",permalink:"/docs/5.5.5/functions/userleaderboard"},next:{title:"$username",permalink:"/docs/5.5.5/functions/username"}},c={},u=[],l={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This function returns the message ID of the message that triggered the command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "messageID",\ncode: `Your message ID: $messageID`\n//Message ID would be from !messageID\n})\n')))}m.isMDXComponent=!0}}]);