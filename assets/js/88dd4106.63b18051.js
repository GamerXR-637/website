"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Random Country",description:"A code for get information about a random code.",authors:{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,s={permalink:"/wikis/posts/166181471369953280/p2o9s",source:"@site/forums/posts/166181471369953280/p2o9s.md",title:"Random Country",description:"A code for get information about a random code.",date:"2023-07-10T17:47:36.000Z",formattedDate:"July 10, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png"}],frontMatter:{title:"Random Country",description:"A code for get information about a random code.",authors:{name:"@jollyjolli",title:"Member - 166181471369953280",userid:"166181471369953280",url:"https://discord.com/users/166181471369953280",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/166181471369953280.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Country Information Custom Function",permalink:"/wikis/posts/166181471369953280/ny063"},nextItem:{title:"Google Search",permalink:"/wikis/posts/166181471369953280/sjmifn"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\nname: "Random Country",\naliases: ["rc"],\ncode: `\n$title[1;$getObjectProperty[countries[$random[0;250]].name_en]]\n$addField[1;TLD;$getObjectProperty[countries[$random[0;250]].tld];true]\n$addField[1;ISO Code (v2);$getObjectProperty[countries[$random[0;250]].code_3];true]\n$addField[1;ISO Code (v1);$getObjectProperty[countries[$random[0;250]].code_2];true]\n$addField[1;Capital;$getObjectProperty[countries[$random[0;250]].capital_es];true]\n$addField[1;Dial Code;$getObjectProperty[countries[$random[0;250]].dial_code];true]\n$addField[1;Continent;$getObjectProperty[countries[$random[0;250]].continent_en];true] \n$image[1;https://flagcdn.com/w2560/$tolowercase[$getObjectProperty[countries[$random[0;250]].code_2]].jpg]\n$footer[1;Code By $getObjectProperty[by]]\n$color[$getUserVar[PFcolor]]\n$createObject[$jsonRequest[https://www.jsonkeeper.com/b/L23E]]`\n}];\n')))}m.isMDXComponent=!0}}]);