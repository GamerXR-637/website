"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82946],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,o(o({ref:e},p),{},{components:a})):n.createElement(f,o({ref:e},p))}));function f(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50642:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={title:"$activity",description:"$activity allows you to get the activity of a user.",id:"activity"},o=void 0,l={unversionedId:"functions/activity",id:"version-5.5.5/functions/activity",title:"$activity",description:"$activity allows you to get the activity of a user.",source:"@site/versioned_docs/version-5.5.5/functions/activity.md",sourceDirName:"functions",slug:"/functions/activity",permalink:"/docs/5.5.5/functions/activity",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689011256,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"$activity",description:"$activity allows you to get the activity of a user.",id:"activity"},sidebar:"docs",previous:{title:"$abbreviate",permalink:"/docs/5.5.5/functions/abbreviate"},next:{title:"$addButton",permalink:"/docs/5.5.5/functions/addbutton"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Activity Types",id:"activity-types",level:2},{value:"Examples",id:"examples",level:2},{value:"Without optional fields:",id:"without-optional-fields",level:3},{value:"With optional fields:",id:"with-optional-fields",level:3}],p={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function shows the current activity of the indicated user ","(","Only if it detects any activity",")",", if the indicated user does not have an activity such as a 'custom status' it will show 'none'."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$activity[guildID;userID?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"guildID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"To see, user's activity for specific guild"),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"userID"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID of the user to see activity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,i.kt)("h2",{id:"activity-types"},"Activity Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom Status"),(0,i.kt)("li",{parentName:"ul"},"Spotify ",(0,i.kt)("em",{parentName:"li"},"(","Listening to Spotify",")")),(0,i.kt)("li",{parentName:"ul"},"Game Name ",(0,i.kt)("em",{parentName:"li"},"(","Playing ...",")")),(0,i.kt)("li",{parentName:"ul"},"Streaming")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"without-optional-fields"},"Without optional fields:"),(0,i.kt)("p",null,"This returns the activity of the user who executed the command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "activity",\n  code: `\n  $activity[$guildID]\n  `\n});\n')),(0,i.kt)("h3",{id:"with-optional-fields"},"With optional fields:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"$userID")," parameter is optional, if it is not provided, the activity of the user who executed the command will be shown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "activity",\n  code: `\n  $activity[$guildID;$userID]\n  `\n});\n')))}d.isMDXComponent=!0}}]);