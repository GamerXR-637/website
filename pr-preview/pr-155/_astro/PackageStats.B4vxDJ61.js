import{j as t}from"./jsx-runtime.Hk_NJhAP.js";import{r as o}from"./index.BBqxgoSh.js";const v=()=>{const[m,l]=o.useState(0),[c,d]=o.useState({stars:0,forks:0}),[g,u]=o.useState(null),i=({targetNumber:e})=>{const[s,n]=o.useState(0);let a=null;return o.useEffect(()=>{let r=0;return a=setInterval(()=>{r=Math.min(r+e/650,e),n(Math.round(r))},15),()=>{clearInterval(a)}},[e]),o.useEffect(()=>{s>=e&&clearInterval(a)},[s,e]),t.jsx("p",{style:{marginTop:"5px",fontSize:"25px",color:"var(--sl-color-text-accent)"},children:s.toLocaleString()})},h=async()=>{try{const n=(await(await fetch("https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/aoi.js")).json()).downloads.reduce((a,r)=>a+r.downloads,0);l(n),x("npm",n)}catch{return}},f=async()=>{try{const s=await(await fetch("https://api.github.com/repos/AkaruiDevelopment/aoi.js")).json(),n={stars:s.stargazers_count,forks:s.forks_count};d(n),x("git",n)}catch(e){console.error("Error fetching GitHub repo stats:",e)}},p=e=>{const s=localStorage.getItem(e);if(s){const{data:n,timestamp:a}=JSON.parse(s);if(a&&Date.now()-a<36e5)return u(new Date(a).toLocaleString()),{data:n,timestamp:a};console.log({data:n,timestamp:a})}return null},x=(e,s)=>{const n=Date.now(),a={data:s,timestamp:n};localStorage.setItem(e,JSON.stringify(a))};return o.useEffect(()=>{const e=p("npm"),s=p("git");e!==null&&s!==null?(l(e.data),d(s.data)):(h(),f())},[]),t.jsxs("div",{className:"not-content",style:{position:"relative",display:"flex",border:"1px solid var(--sl-color-gray-5)",borderRadius:"5px",justifyContent:"space-around",alignItems:"center",marginTop:"2rem",backgroundColor:"transparent",backdropFilter:"blur(16px)",flexDirection:"row",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[t.jsx("p",{style:{color:"var(--sl-color-text-accent)",fontSize:window.innerWidth<=768?"20px":"30px",padding:"15px 15px"},children:"Downloads"}),t.jsx(i,{targetNumber:m}),t.jsx("div",{style:{marginBottom:"1rem"}})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[t.jsx("p",{style:{color:"var(--sl-color-text-accent)",fontSize:window.innerWidth<=768?"20px":"30px",padding:"15px 15px"},children:"Stars"}),t.jsx(i,{targetNumber:c.stars}),t.jsx("div",{style:{marginBottom:"1rem"}})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[t.jsx("p",{style:{color:"var(--sl-color-text-accent)",fontSize:window.innerWidth<=768?"20px":"30px",padding:"15px 15px"},children:"Forks"}),t.jsx(i,{targetNumber:c.forks}),t.jsx("div",{style:{marginBottom:"1rem"}})]}),t.jsxs("div",{style:{marginTop:"auto",marginBottom:"15px",color:"var(--sl-color-text-accent)",fontSize:window.innerWidth<=768?"10px":"14px"},children:[t.jsx("div",{children:t.jsx("a",{href:"https://github.com/AkaruiDevelopment/aoi.js",children:t.jsx("img",{loading:"eager",decoding:"async",alt:"aoi.js banner image",style:{filter:"drop-shadow(0 0 3rem var(--overlay-blurple))"},src:"https://github.com/aoijs/website/raw/master/assets/images/aoijs-banner.png?raw=true",width:"350",height:"125"})})}),t.jsxs("p",{style:{textAlign:"center",color:"var(--sl-color-gray-4)"},children:["Last fetched:"," ",g??`${new Date(Date.now()).toLocaleString()} (now)`]})]})]})};export{v as default};
