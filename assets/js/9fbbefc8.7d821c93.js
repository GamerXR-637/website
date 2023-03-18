"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(d,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Command Handler",description:"This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.",id:"commandhandler"},i=void 0,l={unversionedId:"guides/commandhandler",id:"guides/commandhandler",title:"Command Handler",description:"This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.",source:"@site/docs/guides/3commandhandler.md",sourceDirName:"guides",slug:"/guides/commandhandler",permalink:"/docs/guides/commandhandler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1676948276,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{title:"Command Handler",description:"This guide will be covering how to start using command handlers, creating multiple commands in one file and updating commands without restarting your Discord Bot.",id:"commandhandler"},sidebar:"docs",previous:{title:"Client Events",permalink:"/docs/guides/events"},next:{title:"Client Status",permalink:"/docs/guides/status"}},d={},s=[{value:"Why should you use Command Handler?",id:"why-should-you-use-command-handler",level:2},{value:"Table of Content",id:"table-of-content",level:3},{value:"Starting off with modifying your main file",id:"starting-off-with-modifying-your-main-file",level:3},{value:"Setting everything up with folders and files",id:"setting-everything-up-with-folders-and-files",level:3},{value:"Creating sub directories",id:"creating-sub-directories",level:4},{value:"Creating files inside of the directory",id:"creating-files-inside-of-the-directory",level:4},{value:"Final Steps",id:"final-steps",level:2},{value:"Change of creating commands",id:"change-of-creating-commands",level:3},{value:"Multiple commands in one file",id:"multiple-commands-in-one-file",level:3},{value:"Command Handler Types &amp; Prototypes",id:"command-handler-types--prototypes",level:2},{value:"Updating your commands without restart!",id:"updating-your-commands-without-restart",level:3}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-should-you-use-command-handler"},"Why should you use Command Handler?"),(0,r.kt)("p",null,"Storing your commands in your main file may seem fine, but after a certain amount of commands it can get hard to find and update commands. Therefore you should use the Command Handler to keep your main file neat and save yourself from the clutter."),(0,r.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#starting-off-with-modifying-your-main-file"},"Modifying your main file"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#final-steps"},"Creating folders and files"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#multiple-commands-in-one-file"},"Using multiple commands in one file")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#updating-your-commands-without-restart"},"Updating commands without restarting your Discord Bot")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"starting-off-with-modifying-your-main-file"},"Starting off with modifying your main file"),(0,r.kt)("p",null,"In this step we'll take a look at your main file also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),". We add ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadCommands")," in order for\nthe bot to understand where our files are."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { AoiClient, LoadCommands } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["Guilds", "GuildMessages", "MessageContent"],\n    events: ["onMessage", "onInteractionCreate"]\n});\n\nconst loader = new LoadCommands(bot);\nloader.load(bot.cmd, "./commands/") //you can change this to any directory you want\n')),(0,r.kt)("h3",{id:"setting-everything-up-with-folders-and-files"},"Setting everything up with folders and files"),(0,r.kt)("p",null,"Once you're done with your main file, we'll move on onto files, in order for this to work we need to do two things."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create directories and sub-directories where your commands go.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083390579402088458/HwYiJqoeF9SAAAAAElFTkSuQmCC.png",alt:"p2"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"And create a file to test out if everything worked well.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083390890405543976/Awoopj94LkCqAAAAAElFTkSuQmCC.png",alt:"p2"})),(0,r.kt)("h4",{id:"creating-sub-directories"},"Creating sub directories"),(0,r.kt)("p",null,"If you want to have your commands and files more organised then use sub directories, simply click on the ",(0,r.kt)("strong",{parentName:"p"},"commands"),"\ndirectory you created earlier and create as many sub directories as you want inside of it, for example, music commands."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083391154227261540/e0P4fAZqcEmh2npQAAAAASUVORK5CYII.png",alt:"p3"})),(0,r.kt)("h4",{id:"creating-files-inside-of-the-directory"},"Creating files inside of the directory"),(0,r.kt)("p",null,"You can create as many files as you want in your directories as long as they have ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," file extension at the end of their file name\nit'll work without issues. For now, create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"help.js"),"."),(0,r.kt)("h2",{id:"final-steps"},"Final Steps"),(0,r.kt)("h3",{id:"change-of-creating-commands"},"Change of creating commands"),(0,r.kt)("p",null,"From now on you have to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = [{...}]\nmodule.exports = ({...})\n")),(0,r.kt)("p",null,"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"help.js")," and copy & paste the following code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = [{\n    name: "help",\n    aliases: ["helpcmd", "helpme"],\n    code: `\n$title[Help Command!]\n$thumbnail[$userAvatar[$authorID]] \n$description[Any text you like can go here!]\n$footer[Even footers!]`\n}];\n')),(0,r.kt)("p",null,"Now restart your bot, and let the magic happen! Simply use ",(0,r.kt)("inlineCode",{parentName:"p"},"[prefix]help")," or any of the aliases to make the message\nappear."),(0,r.kt)("h3",{id:"multiple-commands-in-one-file"},"Multiple commands in one file"),(0,r.kt)("p",null,"From now on, you can have multiple commands in one file, this is useful for ",(0,r.kt)("inlineCode",{parentName:"p"},"awaited")," commands or any similar. Let's\ncreate a little nice welcome command and combine the command from above with it!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = [{\n    name: "help",\n    aliases: ["helpcmd", "helpme"],\n    code: `\n$title[Help Command!]\n$thumbnail[$userAvatar[$authorID]] \n$description[Any text you like can go here!]\n$footer[Even footers!]`\n}, {\n    type: "join",\n    channel: "any channel ID",\n    code: `\n$title[Someone joined!]\n$description[Welcome to this server <@$authorID>!]`\n}]\n')),(0,r.kt)("p",null,"Make sure you have the required intents and ",(0,r.kt)("inlineCode",{parentName:"p"},"onJoin")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"events")," property in your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," or else this won't\nwork!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Required intents: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GuildMembers")))),(0,r.kt)("h2",{id:"command-handler-types--prototypes"},"Command Handler Types & Prototypes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"EVENT"),(0,r.kt)("th",{parentName:"tr",align:null},"HANDLER TYPE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND_GROUP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"Any Integer between -2^53 and 2^53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USER"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHANNEL"),(0,r.kt)("td",{parentName:"tr",align:null},"Includes all channel types + categories")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROLE"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MENTIONABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"Includes users and roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"Any double between -2^53 and 2^53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ATTACHMENT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discord.com/developers/docs/resources/channel#attachment-object"},"attachment")," object")))),(0,r.kt)("h3",{id:"updating-your-commands-without-restart"},"Updating your commands without restart!"),(0,r.kt)("p",null,"You are able to use ",(0,r.kt)("inlineCode",{parentName:"p"},"$updateCommands")," when updating commands in your directory. Please note that this does ",(0,r.kt)("strong",{parentName:"p"},"not")," apply\nto any files outside of the directory."))}p.isMDXComponent=!0}}]);