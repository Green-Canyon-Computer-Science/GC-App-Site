import{_ as $,r as h,a as y,o as u,l as I,w as t,u as o,d as n,z as D,A as N,B as M,C as x,g as s,D as H,E as O,G as E,c as g,F,k as J,j as P,m as j,K as q,t as b,I as A,i as C,H as G,J as L,q as z,s as K,b as r,L as U}from"./index-b713903c.js";/* empty css                                                                           */const v=c=>(z("data-v-cf0ef06c"),c=c(),K(),c),Y=v(()=>r("div",null,[r("h1",null,"Scheduler")],-1)),Q=v(()=>r("div",{class:"division"},null,-1)),R={key:0},W=["value"],X=v(()=>r("br",null,null,-1)),Z={__name:"ScheduleManager",setup(c){const i=h([]);h(0);const S=async l=>{(await U.create({message:l,duration:2e3,position:"top"})).present()},w=async()=>{const l="/scheduled";try{const e=await(await fetch(l,{method:"GET"})).json();return console.log(e),e}catch(e){console.error(e)}return[]};async function _(){i.value=await w(),console.log(i.value)}_();function T(l){const e=new Date(l),p=e.getFullYear(),d=("0"+(e.getMonth()+1)).slice(-2),a=("0"+e.getDate()).slice(-2),m=("0"+e.getHours()).slice(-2),V=("0"+e.getMinutes()).slice(-2);return"".concat(p,"-").concat(d,"-").concat(a,"T").concat(m,":").concat(V)}function k(l,e){fetch("/changeschedule",{method:"POST",body:JSON.stringify({uuid:l,time:e})}).then(()=>{S("Saved")}),_()}function B(l){fetch("/deleteschedule",{method:"POST",body:JSON.stringify({uuid:l})}).then(()=>{S("Deleted")}),_()}const f=h("tab2");return(l,e)=>{const p=y("ion-card-subtitle"),d=y("ion-button");return u(),I(o(L),null,{default:t(()=>[n(o(H),{translucent:!0},{default:t(()=>[n(o(D),null,{default:t(()=>[n(o(N),{slot:"start"},{default:t(()=>[n(o(M),{color:"primary"})]),_:1}),n(o(x),null,{default:t(()=>[s("Scheduler")]),_:1})]),_:1})]),_:1}),n(o(G),null,{default:t(()=>[Y,Q,n(o(O),{modelValue:f.value,"onUpdate:modelValue":e[0]||(e[0]=a=>f.value=a),value:"tab2"},{default:t(()=>[n(o(E),{value:"tab2"},{default:t(()=>[s(" View Scheduled Actions ")]),_:1})]),_:1},8,["modelValue"]),f.value==="tab2"?(u(),g("div",R,[(u(!0),g(F,null,J(i.value,a=>(u(),I(o(P),null,{default:t(()=>[n(o(j),null,{default:t(()=>[n(o(q),null,{default:t(()=>[s(b(a.body.title),1)]),_:2},1024),n(p,null,{default:t(()=>[s(b(a.url.split("/")[a.url.split("/").length-1]),1)]),_:2},1024)]),_:2},1024),n(o(A),null,{default:t(()=>[a?(u(),g("input",{key:0,type:"datetime-local",ref_for:!0,ref:a.uuid,step:"1",value:T(a.time*1)},null,8,W)):C("",!0),X,n(d,{onClick:m=>k(a.uuid,new Date(l.$refs[a.uuid][0].value).getTime())},{default:t(()=>[s("Save")]),_:2},1032,["onClick"]),n(d,{onClick:m=>B(a.uuid),color:"danger"},{default:t(()=>[s("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),256))])):C("",!0)]),_:1})]),_:1})}}},ne=$(Z,[["__scopeId","data-v-cf0ef06c"]]);export{ne as default};
