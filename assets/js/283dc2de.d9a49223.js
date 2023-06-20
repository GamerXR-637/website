"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||u;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const u={title:"$queue",description:"Returns queue of songs"},a=void 0,i={unversionedId:"functions/queue",id:"version-5.5.5/functions/queue",title:"$queue",description:"Returns queue of songs",source:"@site/versioned_docs/version-5.5.5/functions/queue.md",sourceDirName:"functions",slug:"/functions/queue",permalink:"/docs/5.5.5/functions/queue",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687235232,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$queue",description:"Returns queue of songs"},sidebar:"docs",previous:{title:"$pruneStatus",permalink:"/docs/5.5.5/functions/prunestatus"},next:{title:"$queueLength",permalink:"/docs/5.5.5/functions/queuelength"}},s={},c=[],l={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the queue of songs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$queue or $queue[page;amount;{number} - {title} by <@{userID}>]\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Available Options: {title} - Title of song, {url} - URL of song, {number} - Position in queue, {userID} - User who added song")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "queue",\ncode: `$queue[1;10;{number} - {title} by <@{userID}>]`\n})\n')))}f.isMDXComponent=!0}}]);