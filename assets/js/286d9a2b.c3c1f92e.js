"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"$interactionDefer",description:"Deferring an interaction message."},o=void 0,l={unversionedId:"functions/interactiondefer",id:"version-5.5.5/functions/interactiondefer",title:"$interactionDefer",description:"Deferring an interaction message.",source:"@site/versioned_docs/version-5.5.5/functions/interactiondefer.md",sourceDirName:"functions",slug:"/functions/interactiondefer",permalink:"/docs/5.5.5/functions/interactiondefer",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687111125,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{title:"$interactionDefer",description:"Deferring an interaction message."},sidebar:"docs",previous:{title:"$indexOf",permalink:"/docs/5.5.5/functions/indexof"},next:{title:"$interactionDeferUpdate",permalink:"/docs/5.5.5/functions/interactiondeferupdate"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Example",id:"example",level:2}],s={toc:p},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionDefer"),", defers the message for latest 15 minutes which can be used well for ",(0,a.kt)("inlineCode",{parentName:"p"},"$interactionFollowUp")," function. For more detailed information check ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/functions/interactionfollowup"},"$interactionFollowUp"),"."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$interactionDefer[ephemeral?]\n")),(0,a.kt)("h3",{id:"field"},"Field"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ephemeral"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Makes the interaction ephemeral"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will make out interaction message as ephemeral message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.interactionCommand({\n  name: \"hello\",\n  prototype: 'slash',\n  code: `\n  $interactionFollowUp[Hello, world!]\n  \n  $interactionDefer[yes]\n  `\n});\n")))}d.isMDXComponent=!0}}]);