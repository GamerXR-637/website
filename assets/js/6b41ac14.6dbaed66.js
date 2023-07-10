"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,g=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"$guildRoleIconURL",description:"$guildRoleIconURL will retrieve the image URL of the role icon.",id:"guildRoleIconURL"},o=void 0,i={unversionedId:"functions/util-related/guildRoleIconURL",id:"version-6.3.0/functions/util-related/guildRoleIconURL",title:"$guildRoleIconURL",description:"$guildRoleIconURL will retrieve the image URL of the role icon.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/guildRoleIconURL.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/guildRoleIconURL",permalink:"/docs/functions/util-related/guildRoleIconURL",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011256,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$guildRoleIconURL",description:"$guildRoleIconURL will retrieve the image URL of the role icon.",id:"guildRoleIconURL"},sidebar:"docs",previous:{title:"$getTextSplitLength",permalink:"/docs/functions/util-related/getTextSplitLength"},next:{title:"$hasAnyPerm",permalink:"/docs/functions/util-related/hasAnyPerm"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$guildRoleIconURL")," will retrieve the image URL of the role icon."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$guildRoleIconURL[guildId?;roleId]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guildId?"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the guild where the role exists."),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"roleId"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"ID of the role you want to check if it exists."),(0,l.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,"This will return the image URL of the role icon:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildRoleIconURL',\n    code: `\n  $guildRoleIconURL[$guildID;900004369355931729]\n  `\n});\n")))}s.isMDXComponent=!0}}]);