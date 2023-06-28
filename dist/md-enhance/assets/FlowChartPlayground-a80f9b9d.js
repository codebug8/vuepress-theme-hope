import{h as w,Z as f,s as h,k as i,m as g,_ as y,q as d,t as m,x as b,y as _,p as t}from"./app-1f522f6c.js";const s="flowchart-playground",P=`st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
`,F={"/":{config:"Flowchart Config",preset:"Flowchart Preset",result:"Render Result"},"/zh/":{config:"流程图配置",preset:"流程图预设",result:"渲染结果"}},E=w({name:"FlowChartPlayground",setup(){const u=f(F);let l=null;const p=h(),r=i(P),a=i("vue"),n=i(1),c=e=>e<419?.8:e>1280?1:.9;return g(()=>{let e=null;Promise.all([y(()=>import("./flowchart-d65a1d8e.js"),[]),new Promise(o=>setTimeout(o,800))]).then(([{parse:o}])=>{e=o;try{l=o(r.value),n.value=c(window.innerWidth),l.draw(s,{...d[a.value],scale:n.value})}catch(v){console.log(v)}}),m([r,a],()=>{if(e)try{l=e(r.value),n.value=c(window.innerWidth),p.value.innerHTML="",l.draw(s,{...d[a.value],scale:n.value})}catch(o){console.log(o)}}),b("resize",_(()=>{if(l){const o=c(window.innerWidth);n.value!==o&&(n.value=o,l.draw(s,{...d[a.value],scale:o}))}},100))}),()=>t("div",{class:"flowchart-playground"},[t("label",{for:"flowchart-playground-config"},`${u.value.config}:`),t("textarea",{id:"flowchart-playground-config",value:r.value,onInput:({target:e})=>{r.value=e.value}}),t("div",[t("label",{for:"flowchart-playground-preset"},`${u.value.preset}:`),t("select",{id:"flowchart-playground-preset",value:a.value,onChange:({target:e})=>{a.value=e.value}},["ant","pie","vue"].map(e=>t("option",{value:e},e)))]),t("label",{for:s},`${u.value.result}:`),t("div",{ref:p,class:["flowchart-wrapper",a.value],id:s})])}});export{E as default};
