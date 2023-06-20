"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53330],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(g,s(s({ref:e},p),{},{components:n})):a.createElement(g,s({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[c]="string"==typeof t?t:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4420:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"$setStatus",description:"$setStatus will change the client's status.",id:"setStatus"},s=void 0,i={unversionedId:"functions/interaction-related/setStatus",id:"version-6.2.6/functions/interaction-related/setStatus",title:"$setStatus",description:"$setStatus will change the client's status.",source:"@site/versioned_docs/version-6.2.6/functions/interaction-related/setStatus.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/setStatus",permalink:"/docs/functions/interaction-related/setStatus",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687235232,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$setStatus",description:"$setStatus will change the client's status.",id:"setStatus"},sidebar:"docs",previous:{title:"$setRoles",permalink:"/docs/functions/interaction-related/setRoles"},next:{title:"$slowmode",permalink:"/docs/functions/interaction-related/slowmode"}},o={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:u},c="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setStatus")," will change the client's status."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setStatus[name;type;status;URL;afk?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the status."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string, integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1. ",(0,r.kt)("strong",{parentName:"td"},"PLAYING")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"WATCHING")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"STREAMING")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"LISTENING")," ",(0,r.kt)("br",null)," 5. ",(0,r.kt)("strong",{parentName:"td"},"COMPETING")),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"1. ",(0,r.kt)("strong",{parentName:"td"},"online")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"idle")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"dnd")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"invisible")),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URL (streaming status)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"afk?"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (default)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will change the client's status to ",(0,r.kt)("strong",{parentName:"p"},"PLAYING")," and ",(0,r.kt)("strong",{parentName:"p"},"online"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'setStatus',\n    code: `\n   $setStatus[Hello!;PLAYING;online]`\n});\n")))}d.isMDXComponent=!0}}]);