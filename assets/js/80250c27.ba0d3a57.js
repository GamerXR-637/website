"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,g=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},o=void 0,l={unversionedId:"functions/Misc/setTimeout",id:"functions/Misc/setTimeout",title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",source:"@site/docs/functions/Misc/setTimeout.md",sourceDirName:"functions/Misc",slug:"/functions/Misc/setTimeout",permalink:"/docs/functions/Misc/setTimeout",draft:!1,tags:[],version:"current",frontMatter:{title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},sidebar:"docs",previous:{title:"$setMessageVar",permalink:"/docs/functions/Misc/setMessageVar"},next:{title:"$setUserVar",permalink:"/docs/functions/Misc/setUserVar"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$setTimeout")," will set a timeout for a given action (which will even continue to run after bot restart)."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$setTimeout[name;duration;timeoutData;returnId?;pulse?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"awaited command name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"duration"),(0,a.kt)("td",{parentName:"tr",align:null},"string, number"),(0,a.kt)("td",{parentName:"tr",align:null},"after how much time it will execute / this cannot go over ",(0,a.kt)("strong",{parentName:"td"},"21 days")),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timeoutData"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"timeout data"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"returnId?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"return message ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pulse?"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"delay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("p",null,"You can retrieve timeout data using ",(0,a.kt)("inlineCode",{parentName:"p"},"$timeoutData[name]"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Note that the duration may not go over ",(0,a.kt)("strong",{parentName:"li"},"21 days"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,'This will send "Hello!" after 10 seconds in the command execution channel:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "setTimeout", \n    code: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\nbot.timeoutCommand({\n    name: "timeoutCommand",\n    code: `\n    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]\n    `\n});\n')))}c.isMDXComponent=!0}}]);