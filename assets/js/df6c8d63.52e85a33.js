"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,g=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"$addEmoji",description:"$addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.",id:"addEmoji"},i=void 0,o={unversionedId:"functions/Calling/addEmoji",id:"functions/Calling/addEmoji",title:"$addEmoji",description:"$addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.",source:"@site/docs/functions/Calling/addEmoji.md",sourceDirName:"functions/Calling",slug:"/functions/Calling/addEmoji",permalink:"/docs/functions/Calling/addEmoji",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1676948276,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"$addEmoji",description:"$addEmoji will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs.",id:"addEmoji"},sidebar:"docs",previous:{title:"$addCmdReactions",permalink:"/docs/functions/Calling/addCmdReactions"},next:{title:"$addField",permalink:"/docs/functions/Calling/addField"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addEmoji")," will add an emoji to the given guild. If role IDs are given, the emoji will only be usable by users with one of the provided role IDs."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$addEmoji[guildID;url;name;returnEmoji?;reason?;...roles?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"valid image URL"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"emoji name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"returnEmoji?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"return the created emoji?"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reason?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"reason which will be displayed in the guild's audit logs"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"roles?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"useable by the given role only?"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will create an emoji:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'addEmoji',\n    code: `\n  $addEmoji[$guildID;https://cdn.discordapp.com/emojis/1010320053687832586.webp?size=96&quality=lossless;leref;false]\n  `\n});\n")))}s.isMDXComponent=!0}}]);