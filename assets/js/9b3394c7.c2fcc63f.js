"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18445],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),b=r,f=u["".concat(p,".").concat(b)]||u[b]||d[b]||a;return o?n.createElement(f,l(l({ref:t},s),{},{components:o})):n.createElement(f,l({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},1462:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"$deleteWebhook",description:"Deletes a webhook"},l=void 0,i={unversionedId:"functions/deletewebhook",id:"version-5.5.5/functions/deletewebhook",title:"$deleteWebhook",description:"Deletes a webhook",source:"@site/versioned_docs/version-5.5.5/functions/deletewebhook.md",sourceDirName:"functions",slug:"/functions/deletewebhook",permalink:"/docs/5.5.5/functions/deletewebhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011256,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$deleteWebhook",description:"Deletes a webhook"},sidebar:"docs",previous:{title:"$deleteUserVar",permalink:"/docs/5.5.5/functions/deleteuservar"},next:{title:"$description",permalink:"/docs/5.5.5/functions/description"}},p={},c=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4},{value:"Webhook Info",id:"webhook-info",level:4}],s={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to delete a webhook"),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 2 fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Webhook ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Webhook Token ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$deleteWebhook[webhookID;webhookToken]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Webhook ID - The ID of the webhook we're deleting"),(0,r.kt)("li",{parentName:"ul"},"Webhook Token - The Token of the webhook we're deleting")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteWebhook",\ncode: `$deleteWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA]\n`\n})\n')),(0,r.kt)("h4",{id:"webhook-info"},"Webhook Info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"URL - ",(0,r.kt)("a",{parentName:"p",href:"https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA"},"https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ID - 793312378162642975")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Token - paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA"))))}d.isMDXComponent=!0}}]);