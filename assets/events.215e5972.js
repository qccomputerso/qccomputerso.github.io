import{d as b,a as w,w as m,_ as x,o as s,b as D,e as a,f as d,u as n,F as v,r as T,n as u,g as y,t as h,h as E,C as k,p as C,i as I,j as R,P as f,c as V}from"./App.vue_vue_type_script_setup_true_lang.a0be23cc.js";const _=[{date1:new Date(2022,8,1),title:"Start of School Year"},{date1:new Date(2022,9,11),title:"Orientation Day"},{date1:new Date(2022,9,17),date2:new Date(2022,9,25),title:"Subcommittee Recruitment"},{date1:new Date(2022,9,26),date2:new Date(2022,9,31),title:"Subcommittee Interview"},{date1:new Date(2023,8,1),date2:new Date(3023,8,1),title:"???"}],p=l=>(C("data-v-288760fb"),l=l(),I(),l),j=y(" Roadmap of Events "),B={class:"c-svg-container"},F=["height"],L=["y2"],N=["y2"],H=["y"],O={key:0,class:"c-event-text__exclaim"},P=["cy"],$=p(()=>a("br",null,null,-1)),q=p(()=>a("br",null,null,-1)),z=p(()=>a("a",{href:"/"},[a("button",null," << Homepage ")],-1)),A=b({__name:"Events",setup(l){const c=[],r=Date.now();let o=0;for(let e=0;e<_.length;e++){const i=_[e],t=e===0?0:Math.log2(i.date1.getTime()-_[e-1].date1.getTime())*10-205;r<=i.date1.getTime()&&!o&&(o=c[e-1].totalSpacing+t*(1-(i.date1.getTime()-r)/(i.date1.getTime()-_[e-1].date1.getTime()))),c.push({...i,lastSpacing:t,totalSpacing:e===0?25:c[e-1].totalSpacing+t})}const g=c[c.length-1].totalSpacing;return o||(o=g),(e,i)=>(s(),w(x,null,{default:m(()=>[D(k,null,{header:m(()=>[j]),default:m(()=>[a("div",B,[(s(),d("svg",{class:"c-svg-el",height:n(g)+50},[a("line",{x1:"20",x2:"20",y1:"25",y2:n(g),class:"c-central-line"},null,8,L),a("line",{x1:"20",x2:"20",y1:"25",y2:n(o),class:"c-central-line--time-spacing"},null,8,N),(s(),d(v,null,T(c,(t,S)=>a("g",{key:S},[(s(),d("foreignObject",{x:"0",y:t.totalSpacing-50,width:"100%",height:"100"},[a("div",{class:"c-event-text",style:u({color:n(o)>=t.totalSpacing?"#e8ecad":"var(--colour-accent)"})},[y(h(t.date1.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})+(t.date2?` - ${t.date2.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}`:""))+": "+h(t.title)+" ",1),(t.date2||t.date1).getTime()-n(r)>0&&t.date1.getTime()-n(r)<84600*1e3*2?(s(),d("b",O," ! ")):E("",!0)],4)],8,H)),a("circle",{cx:"20",cy:t.totalSpacing,r:"8",class:"c-event-point",style:u({stroke:n(o)>=t.totalSpacing?"#e8ec0d":"var(--colour-accent)"})},null,12,P)])),64))],8,F))]),$,q,z]),_:1})]),_:1}))}});const J=R(A,[["__scopeId","data-v-288760fb"]]);f.content.notification={title:"Subcom Recruitment!",content:`
We are currently recruiting subcommittee members for the new school year! Fill in the google form now
<a href="https://forms.gle/vjk1T9JETDSqgmj48" target="_blank">HERE</a>. For any more information you may
contact us- Details are at the bottom of the page.`};f.content.cards=[];V(J).mount("#app");
