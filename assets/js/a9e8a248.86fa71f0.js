"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,g=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={title:"$guildCooldown",description:"$guildCooldown will set a cooldown for the guild after being used.",id:"guildCooldown"},a=void 0,i={unversionedId:"functions/Util/guildCooldown",id:"functions/Util/guildCooldown",title:"$guildCooldown",description:"$guildCooldown will set a cooldown for the guild after being used.",source:"@site/docs/functions/Util/guildCooldown.md",sourceDirName:"functions/Util",slug:"/functions/Util/guildCooldown",permalink:"/docs/functions/Util/guildCooldown",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1676948276,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"$guildCooldown",description:"$guildCooldown will set a cooldown for the guild after being used.",id:"guildCooldown"},sidebar:"docs",previous:{title:"$guildChannelExists",permalink:"/docs/functions/Util/guildChannelExists"},next:{title:"$guildEmojiExists",permalink:"/docs/functions/Util/guildEmojiExists"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$guildCooldown")," will set a guild-based cooldown."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$guildCooldown[time;errorMessage?]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,l.kt)("inlineCode",{parentName:"li"},"$guildCooldown")," function by using ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the following below.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"the duration of the cooldown"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorMessage?"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"error message when there's remaining time for the cooldown"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"This will set a cooldown for a command which applies to the guild only and returns the remaining cooldown:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildCooldown',\n    code: `\n  hello\n  $guildCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}s.isMDXComponent=!0}}]);