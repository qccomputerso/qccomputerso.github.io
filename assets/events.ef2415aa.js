import{d as S,a as v,w as p,_ as x,o as i,b as T,e,f as r,u as s,F as D,r as w,n as u,g as y,t as m,h as b,C as E,p as k,i as C,j as N,P as V,c as j}from"./App.vue_vue_type_script_setup_true_lang.a0be23cc.js";const _=[{date1:new Date(2022,8,1),title:"Start of School Year"},{date1:new Date(2022,9,11),title:"Orientation Day"},{date1:new Date(2023,8,1),date2:new Date(3023,8,1),title:"???"}],g=l=>(k("data-v-03cf5d90"),l=l(),C(),l),B=y(" Roadmap of Events "),I=g(()=>e("h4",null," NOTE: Most of the events here are still tentative, as the school year has only just started. Events may be added, removed, or changed in due course. Do not use this as an absolute guide to our year plan just yet. ",-1)),L={class:"c-svg-container"},O=["height"],F=["y2"],M=["y2"],P=["y"],R={key:0,class:"c-event-text__exclaim"},$=["cy"],z=g(()=>e("br",null,null,-1)),A=g(()=>e("br",null,null,-1)),H=g(()=>e("a",{href:"/"},[e("button",null," << Homepage ")],-1)),Y=S({__name:"Events",setup(l){const n=[],d=Date.now();let o=0;for(let a=0;a<_.length;a++){const c=_[a],t=a===0?0:Math.log2(c.date1.getTime()-_[a-1].date1.getTime())*10-205;d<=c.date1.getTime()&&!o&&(o=n[a-1].totalSpacing+t*(1-(c.date1.getTime()-d)/(c.date1.getTime()-_[a-1].date1.getTime()))),n.push({...c,lastSpacing:t,totalSpacing:a===0?25:n[a-1].totalSpacing+t})}const h=n[n.length-1].totalSpacing;return o||(o=h),(a,c)=>(i(),v(x,null,{default:p(()=>[T(E,null,{header:p(()=>[B]),default:p(()=>[I,e("div",L,[(i(),r("svg",{class:"c-svg-el",height:s(h)+50},[e("line",{x1:"20",x2:"20",y1:"25",y2:s(h),class:"c-central-line"},null,8,F),e("line",{x1:"20",x2:"20",y1:"25",y2:s(o),class:"c-central-line--time-spacing"},null,8,M),(i(),r(D,null,w(n,(t,f)=>e("g",{key:f},[(i(),r("foreignObject",{x:"0",y:t.totalSpacing-50,width:"100%",height:"100"},[e("div",{class:"c-event-text",style:u({color:s(o)>=t.totalSpacing?"#e8ecad":"var(--colour-accent)"})},[y(m(t.date1.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})+(t.date2?` - ${t.date2.toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"})}`:""))+": "+m(t.title)+" ",1),(t.date2||t.date1).getTime()-s(d)>0&&t.date1.getTime()-s(d)<84600*1e3*2?(i(),r("b",R," ! ")):b("",!0)],4)],8,P)),e("circle",{cx:"20",cy:t.totalSpacing,r:"8",class:"c-event-point",style:u({stroke:s(o)>=t.totalSpacing?"#e8ec0d":"var(--colour-accent)"})},null,12,$)])),64))],8,O))]),z,A,H]),_:1})]),_:1}))}});const q=N(Y,[["__scopeId","data-v-03cf5d90"]]);V.content.cards=[];j(q).mount("#app");