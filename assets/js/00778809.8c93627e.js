"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Custom Functions",description:"Custom functions are used to create special functions with custom code that can only be used by the specific client."},i=void 0,s={unversionedId:"advanced-guides/custom-functions",id:"version-5.5.5/advanced-guides/custom-functions",title:"Custom Functions",description:"Custom functions are used to create special functions with custom code that can only be used by the specific client.",source:"@site/versioned_docs/version-5.5.5/advanced-guides/custom-functions.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/custom-functions",permalink:"/docs/5.5.5/advanced-guides/custom-functions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687235232,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Custom Functions",description:"Custom functions are used to create special functions with custom code that can only be used by the specific client."},sidebar:"docs",previous:{title:"Command Handler",permalink:"/docs/5.5.5/guides/command-handler"},next:{title:"Interaction Commands",permalink:"/docs/5.5.5/advanced-guides/interaction-commands"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2},{value:"Example with aoi.js function",id:"example-with-aoijs-function",level:3},{value:"Example with discord.js function",id:"example-with-discordjs-function",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.functionManager.createCustomFunction({\nname : '$name', //FUNCTION NAME \nparams : ['params',...],//THE TYPE OF PARAMS. Use {param} to get the values of the parameters.\ntype : 'aoi.js/djs', //TYPE METHOD\ncode : `The code to be returned` //THE ACTUAL CODE IT WILL BE RETURN\n})\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the custom function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string with $ sign"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"params"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters of the function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of function to be used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"aoi.js or djs"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The code to be returned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("p",null," To get the values of the parameters provided in the function, use {} around the parameter name i.e. {param}   "),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-with-aoijs-function"},"Example with aoi.js function"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating the custom function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.functionManager.createCustomFunction({\nname : '$say', //FUNCTION NAME \nparams : ['authorid','message'],//THE TYPE OF PARAMS\ntype : 'aoi.js', //TYPE METHOD\ncode : ` \n**$userTag[{authorid}]** says: **{message}**\n` //THE ACTUAL CODE IT WILL BE RETURN\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the custom function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"say",\ncode:`\n$say[$authorID;$message]\n`})\n')),(0,r.kt)("h3",{id:"example-with-discordjs-function"},"Example with discord.js function"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating the custom function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'client.functionManager.createCustomFunction({\n      name: "$sendDMtoUser",//FUNCTION NAME\n      type: "djs",//TYPE OF THE FUNCTION\n      code: async d => {//FETCHING DATA AS D\n        \n        const data = d.util.openFunc(d);\n        const [userid,message] = data.inside.splits;//GETTING THE PARAMETERS\n        \n        const user = await d.util.getUser(d, userid);// THIS IS THE CODE INSIDE\n        user.send(message);//YOU CAN CHANGE THIS AS PER YOUR REQUIREMENTS\n        \n        return {\n          code: d.util.setCode(data);\n        }}\n    });\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the custom function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"dm",\ncode:`\n$sendDMtoUser[$authorID;$message]\n`})\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can create a function without parameters by omitting the params field as it is optional.\nOnly Experienced Developers with proper understanding of aoi.js should use this!\nBy using custom function we aren't obliged of what happens to your client!")))}p.isMDXComponent=!0}}]);