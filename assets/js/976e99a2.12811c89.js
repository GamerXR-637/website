"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,g=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"},tags:["v6","aoi.js"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,l={permalink:"/wikis/posts/632607624742961153/iiwq2",source:"@site/forums/posts/632607624742961153/iiwq2.md",title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",date:"2023-07-12T18:56:40.000Z",formattedDate:"July 12, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"}],frontMatter:{title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/632607624742961153.png"},tags:["v6","aoi.js"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"HowGamer command",permalink:"/wikis/posts/632607624742961153/ic9vu7"},nextItem:{title:"Author button",permalink:"/wikis/posts/632607624742961153/mnfe6"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  name: "serverinfo",\n  aliases: "server",\n  code: `$title[Server Info]\n  $addField[Verification Level;$get[verifylevel]]\n  $addField[Other;\nServer Created since: $creationDate[$guildID;date]\nContent Filter: $get[content]\nServer ID: $guildID\n]\n  $addField[General;\nRoles: $roleCount[$guildID;true]\nEmojis: $emojiCount[$guildID] \nServer Boosts: $guildBoostCount[$guildID]\n\n]\n  $addField[Channels;\nTotal: $channelCount[$guildID;all]\nText Channels: $channelCount[$guildID;Text]\nVoice Channels: $channelCount[$guildID;Voice]\nAnnouncement Channels: $channelCount[$guildID;Announcement]\nForum Channels: $channelCount[$guildID;Forum]\nCategories: $channelCount[$guildID;Category]\n]\n  $addField[Members information;\nTotal: $membersCount[$guildID;all;true]\nHumans: $membersCount[$guildID;all;false]\nBots: $guildBotCount[$guildID]\n]\n  $thumbnail[$get[serverimage]]\n  $cooldown[5s; Slow down! Don\'t spam the command!\nTime left: \\`%time%\\`]\n  \n  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High];0;None]]\n  $let[content;$replaceText[$replaceText[$replaceText[$guildContentFilter[$guildID];0;Disabled];1;Medium];2;High]]\n  $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]\n`\n}\n')),(0,a.kt)("h1",{id:"note"},"Note"),(0,a.kt)("p",null,"This command requires the intent ",(0,a.kt)("inlineCode",{parentName:"p"},"GuildPresences")," to be added into your bot's main file (aka index.js) for the total\nmembers shown to be correct. If this doesn't work then eval ",(0,a.kt)("inlineCode",{parentName:"p"},"$cacheMembers[$guildID]")," in the server where you used\nserverinfo command (while having the intent added as well) and then try again. Feel free to ask for help in support if\nneeded!"))}d.isMDXComponent=!0}}]);