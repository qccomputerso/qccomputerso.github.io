import{d as w,a as b,w as m,_ as x,o as i,b as D,e as a,f as d,u as n,F as v,r as T,n as u,g as y,t as h,h as k,C,p as E,i as I,j as N,P as f,c as V}from"./App.vue_vue_type_script_setup_true_lang.4ee3d21a.js";const _=[{date1:new Date(2022,8,1),title:"Start of School Year"},{date1:new Date(2022,9,11),title:"Orientation Day"},{date1:new Date(2022,9,17),date2:new Date(2022,9,25),title:"Subcommittee Recruitment"},{date1:new Date(2022,9,26),date2:new Date(2022,9,31),title:"Subcommittee Interview"},{date1:new Date(2022,11,19),date2:new Date(2023,5,30),title:"Programming Course"},{date1:new Date(2023,8,1),date2:new Date(3023,8,1),title:"???"}],p=l=>(E("data-v-288760fb"),l=l(),I(),l),B=y(" Roadmap of Events "),L={class:"c-svg-container"},P=["height"],R=["y2"],j=["y2"],F=["y"],O={key:0,class:"c-event-text__exclaim"},$=["cy"],q=p(()=>a("br",null,null,-1)),z=p(()=>a("br",null,null,-1)),A=p(()=>a("a",{href:"/"},[a("button",null," << Homepage ")],-1)),H=w({__name:"Events",setup(l){const c=[],r=Date.now();let o=0;for(let e=0;e<_.length;e++){const s=_[e],t=e===0?0:Math.log2(s.date1.getTime()-_[e-1].date1.getTime())*10-205;r<=s.date1.getTime()&&!o&&(o=c[e-1].totalSpacing+t*(1-(s.date1.getTime()-r)/(s.date1.getTime()-_[e-1].date1.getTime()))),c.push({...s,lastSpacing:t,totalSpacing:e===0?25:c[e-1].totalSpacing+t})}const g=c[c.length-1].totalSpacing;return o||(o=g),(e,s)=>(i(),b(x,null,{default:m(()=>[D(C,null,{header:m(()=>[B]),default:m(()=>[a("div",L,[(i(),d("svg",{class:"c-svg-el",height:n(g)+50},[a("line",{x1:"20",x2:"20",y1:"25",y2:n(g),class:"c-central-line"},null,8,R),a("line",{x1:"20",x2:"20",y1:"25",y2:n(o),class:"c-central-line--time-spacing"},null,8,j),(i(),d(v,null,T(c,(t,S)=>a("g",{key:S},[(i(),d("foreignObject",{x:"0",y:t.totalSpacing-50,width:"100%",height:"100"},[a("div",{class:"c-event-text",style:u({color:n(o)>=t.totalSpacing?"#e8ecad":"var(--colour-accent)"})},[y(h(t.date1.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})+(t.date2?` - ${t.date2.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}`:""))+": "+h(t.title)+" ",1),(t.date2||t.date1).getTime()-n(r)>0&&t.date1.getTime()-n(r)<84600*1e3*2?(i(),d("b",O," ! ")):k("",!0)],4)],8,F)),a("circle",{cx:"20",cy:t.totalSpacing,r:"8",class:"c-event-point",style:u({stroke:n(o)>=t.totalSpacing?"#e8ec0d":"var(--colour-accent)"})},null,12,$)])),64))],8,P))]),q,z,A]),_:1})]),_:1}))}});const M=N(H,[["__scopeId","data-v-288760fb"]]);f.content.notification={title:"New school year",content:`
We are continuously improving and aiming to make the school a better place for computer-lovers.
<br>
Stay tuned, and remember to <a href="https://www.instagram.com/qc_socs/" target="_blank">
follow us on Instagram</a>!`};f.content.cards=[];V(M).mount("#app");
