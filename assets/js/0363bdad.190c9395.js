"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"$findRoles",description:"Used to find roles in the current guild with advanced searching."},l=void 0,o={unversionedId:"functions/findroles",id:"version-5.5.5/functions/findroles",title:"$findRoles",description:"Used to find roles in the current guild with advanced searching.",source:"@site/versioned_docs/version-5.5.5/functions/findroles.md",sourceDirName:"functions",slug:"/functions/findroles",permalink:"/docs/5.5.5/functions/findroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687235232,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$findRoles",description:"Used to find roles in the current guild with advanced searching."},sidebar:"docs",previous:{title:"$findRole",permalink:"/docs/5.5.5/functions/findrole"},next:{title:"$findServerChannel",permalink:"/docs/5.5.5/functions/findserverchannel"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types of Search",id:"types-of-search",level:4},{value:"Placeholders of custom response",id:"placeholders-of-custom-response",level:4},{value:"Examples",id:"examples",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function is used to find roles in the current guild with advanced searching."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$findRoles[query;limit?;type?;res?]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"query"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name/query of the role you're searching for"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The limit of the query"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The type of search you want to do"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"res"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The custom response to be returned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,a.kt)("h4",{id:"types-of-search"},"Types of Search"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"startsWith - To check if the role starts with query"),(0,a.kt)("li",{parentName:"ul"},"endsWith - To check if the role ends with the query"),(0,a.kt)("li",{parentName:"ul"},"includes - To check if the role includes the query")),(0,a.kt)("h4",{id:"placeholders-of-custom-response"},"Placeholders of custom response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{position} - Returns the position of the role"),(0,a.kt)("li",{parentName:"ul"},"{mention} - Returns the mention of the role"),(0,a.kt)("li",{parentName:"ul"},"{id} - Returns the id of the role"),(0,a.kt)("li",{parentName:"ul"},"{name} - Returns the name of the role"),(0,a.kt)("li",{parentName:"ul"},"{color} - Returns the color of the role"),(0,a.kt)("li",{parentName:"ul"},"{hoisted} - Checks if the role is hoisted"),(0,a.kt)("li",{parentName:"ul"},"{mentionable} - Checks if the role is mentionable")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "find",\n  code: `\n  $findRoles[Dev;10;startsWith;The position of {mention} is {position}.]\n  ` \n});\n')))}u.isMDXComponent=!0}}]);