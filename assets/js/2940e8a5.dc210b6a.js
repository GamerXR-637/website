"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95913],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=u(t),m=a,f=y["".concat(l,".").concat(m)]||y[m]||p[m]||i;return t?n.createElement(f,o(o({ref:r},s),{},{components:t})):n.createElement(f,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},24372:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const i={title:"$year",description:"$year will return the current year in CST.",id:"year"},o=void 0,c={unversionedId:"functions/Misc/year",id:"functions/Misc/year",title:"$year",description:"$year will return the current year in CST.",source:"@site/docs/functions/Misc/year.md",sourceDirName:"functions/Misc",slug:"/functions/Misc/year",permalink:"/docs/functions/Misc/year",draft:!1,tags:[],version:"current",frontMatter:{title:"$year",description:"$year will return the current year in CST.",id:"year"},sidebar:"docs",previous:{title:"$writeFile",permalink:"/docs/functions/Misc/writeFile"},next:{title:"$abbreviate",permalink:"/docs/functions/Util/abbreviate"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$year")," will return the current year in CST."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$year\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This will returns the current year:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "year",\n    code: `\n    $year\n    `\n});\n')),(0,a.kt)("p",null,"You can change the timezone using ",(0,a.kt)("inlineCode",{parentName:"p"},"$timezone"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "year",\n    code: `\n    $year \n    $timezone[America/New_York]\n    ` // returns current year in New York\n});\n')))}p.isMDXComponent=!0}}]);