import{_ as $,r as I,a as Z,o as d,c as h,b as o,d as e,w as n,u as t,I as j,e as S,f as P,g as v,h as J,F as T,i as N,j as A,k as Q,t as q,l as C,m as x,n as ee,v as te,p as R,q as E,s as V,x as z,y as oe,z as le,A as ne,B as se,C as ae,D as ce,E as G,G as ie,H as de}from"./index-b630ef90.js";const r=i=>(R("data-v-4e7ae3a1"),i=i(),E(),i),ue={id:"page"},re={class:"questionContainer"},_e=r(()=>o("h2",null," Create Poll ",-1)),pe=["src"],he=r(()=>o("br",null,null,-1)),fe=r(()=>o("br",null,null,-1)),ve=r(()=>o("h1",null,"Send with notification",-1)),ye=["onClick"],me=["onClick"],be=["onClick"],ge=r(()=>o("br",null,null,-1)),ke=r(()=>o("br",null,null,-1)),we=r(()=>o("br",null,null,-1)),Ce=["onUpdate:modelValue"],Se=r(()=>o("option",{value:"text"},"Text",-1)),Ie=r(()=>o("option",{value:"radio"},"Radio",-1)),xe=r(()=>o("option",{value:"checkbox"},"Checkbox",-1)),Pe=r(()=>o("option",{value:"short"},"Short Response",-1)),$e=r(()=>o("option",{value:"long"},"Long Response",-1)),qe=[Se,Ie,xe,Pe,$e],Ve={key:1,style:{"background-color":"white",width:"80%",height:"3px"}},Te={style:{display:"flex","flex-direction":"row"}},Ae=["onClick"],Oe=["onClick"],Ne=r(()=>o("br",null,null,-1)),Re=r(()=>o("br",null,null,-1)),Ee=r(()=>o("br",null,null,-1)),Be=r(()=>o("br",null,null,-1)),De={__name:"PollCreator",setup(i){const u=I("");I({});const s=I([]);function _(){s.value.push({title:"",options:[]})}function y(l){const a=s.value.indexOf(l);s.value.splice(a,1)}function m(l){l.options.push({title:""})}function g(l,a){l.options.splice(l.options.indexOf(a),1)}function k(){const l=document.querySelectorAll("#title")[0].value,a=document.querySelectorAll("#desc")[0].value,w=document.querySelectorAll("#button")[0].value;if(!confirm("Are you sure you want to create poll "+l+"?"))return;const c=document.querySelectorAll(".question"),f=[];c.forEach(p=>{const X=p.querySelectorAll("ion-input")[0].value,K=p.querySelectorAll("select")[0].value;let O;p.querySelectorAll(".required").length>0?O=p.querySelectorAll(".required")[0].checked:O=!1;const W=[].slice.call(p.querySelectorAll("ion-input")).splice(1),U=[];W.forEach(Y=>{U.push(Y.value)}),f.push({title:X,type:K,choices:U,required:O})}),console.log("Creating "+l+" with description "+a+" and button "+w),console.log(JSON.stringify(f)),fetch("https://greencanyonapp.com/api/polls",{method:"POST",body:JSON.stringify({timestamp:new Date().getTime()/1e3,title:l,desc:a,button:w,disabled:!1,polldata:JSON.stringify({poll:f}),image:u.value,key:localStorage.getItem("key")}),headers:{"Content-Type":"application/json"}}).then(p=>{if(!p.ok){alert("There was an error creating poll. Are you sure you have a key saved?");return}location.reload(),alert("Poll created!")}).catch(p=>{alert("An unknown error occurred.")});const B=document.querySelectorAll("#allnotif")[0].checked,D=document.querySelectorAll("#gamesnotif")[0].checked,L=document.querySelectorAll("#eventsnotif")[0].checked,M=document.querySelectorAll("#schedulenotif")[0].checked;if(B||D||L||M){let p="";B&&(p="all"),D&&(p="game"),L&&(p="event"),M&&(p="schedule"),console.log("Sending notification to "+p),fetch("https://greencanyonapp.com/api/notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:p,title:"New poll!",body:"New poll '"+l+"'",key:localStorage.getItem("key")})})}}function b(l,a,w){if(a>=0&&a<l.length){if(w==="up"&&a>0){const c=l[a];l[a]=l[a-1],l[a-1]=c}else if(w==="down"&&a<l.length-1){const c=l[a];l[a]=l[a+1],l[a+1]=c}}}return(l,a)=>{const w=Z("ion-label");return d(),h("div",ue,[o("div",re,[_e,e(t(J),null,{default:n(()=>[e(t(j),null,{default:n(()=>[e(t(S),{placeholder:"Poll Title",label:"",id:"title"}),e(t(S),{placeholder:"Poll Description",label:"",id:"desc"}),e(t(S),{placeholder:"Image Link",label:"",id:"imglink",modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=c=>u.value=c)},null,8,["modelValue"]),o("img",{src:u.value,alt:"",style:{border:"1px solid white","max-height":"165px"}},null,8,pe),he,e(t(S),{placeholder:"Button Text",label:"",id:"button"}),fe,ve,e(t(P),{"label-placement":"fixed",class:"check",id:"allnotif"},{default:n(()=>[v("All")]),_:1}),e(t(P),{"label-placement":"fixed",class:"check",id:"eventsnotif"},{default:n(()=>[v("Events")]),_:1}),e(t(P),{"label-placement":"fixed",class:"check",id:"gamesnotif"},{default:n(()=>[v("Games")]),_:1}),e(t(P),{"label-placement":"fixed",class:"check",id:"schedulenotif"},{default:n(()=>[v("Schedule")]),_:1})]),_:1})]),_:1}),(d(!0),h(T,null,N(s.value,c=>(d(),A(t(J),{key:c,class:"question"},{default:n(()=>[e(t(Q),null,{default:n(()=>[o("button",{onClick:f=>y(c)}," X ",8,ye)]),_:2},1024),e(t(j),{ref_for:!0,ref:"poll"},{default:n(()=>[o("div",null,[o("button",{onClick:f=>b(s.value,s.value.indexOf(c),"up")},"↑",8,me),o("button",{onClick:f=>b(s.value,s.value.indexOf(c),"down")},"↓",8,be)]),ge,ke,o("h1",null," Question "+q(s.value.indexOf(c)+1),1),e(t(S),{placeholder:"Question Title",value:c.title},null,8,["value"]),c.type!="text"?(d(),A(t(P),{key:0,class:"required"},{default:n(()=>[v("Requires Response")]),_:1})):C("",!0),we,e(t(x),null,{default:n(()=>[e(w,null,{default:n(()=>[v("Question Type")]),_:1}),ee(o("select",{"onUpdate:modelValue":f=>c.type=f,placeholder:"Question Type"},qe,8,Ce),[[te,c.type]])]),_:2},1024),c.type=="radio"||c.type=="checkbox"?(d(),h("div",Ve)):C("",!0),(d(!0),h(T,null,N(c.options,f=>(d(),h("div",{key:f},[o("span",Te,[e(t(S),{placeholder:"Option",value:f.title},null,8,["value"]),o("button",{onClick:F=>g(c,f),style:{width:"25",height:"25px","font-size":"20px"}}," X ",8,Ae)])]))),128)),c.type=="radio"||c.type=="checkbox"?(d(),h("button",{key:2,style:{width:"20%","font-size":"20px"},onClick:f=>m(c)}," New Choice ",8,Oe)):C("",!0)]),_:2},1536)]),_:2},1024))),128)),o("button",{onClick:_}," + "),Ne,Re,Ee,Be,o("button",{style:{width:"20%","font-size":"30px","margin-bottom":"15px"},onClick:k}," Create Poll ")])])}}},Le=$(De,[["__scopeId","data-v-4e7ae3a1"]]);const Me={class:"full"},Ue={style:{color:"gray"}},je={class:"buttons full"},Je={__name:"PollView",props:["poll"],emits:["responses"],setup(i,{emit:u}){const s=i,_=u;function y(){_("responses")}function m(b,l){confirm("Are you sure you want to delete poll "+b+"?")&&k(l)}function g(b){console.log(b.disabled),fetch("https://greencanyonapp.com/api/pollsdisable",{method:"POST",body:JSON.stringify({key:localStorage.getItem("key"),id:b.id,disabled:b.disabled!="true"}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload()})}function k(b){fetch("https://greencanyonapp.com/api/polls",{method:"DELETE",body:JSON.stringify({key:localStorage.getItem("key"),id:b}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload()})}return(b,l)=>(d(),h("div",Me,[o("h2",null,q(s.poll.title),1),o("h6",Ue,q(s.poll.desc),1),o("div",je,[e(t(x),null,{default:n(()=>[e(t(V),{onClick:y},{default:n(()=>[v("Responses")]),_:1})]),_:1}),e(t(x),null,{default:n(()=>[e(t(V),{onClick:l[0]||(l[0]=a=>g(s.poll))},{default:n(()=>[v(q(s.poll.disabled=="false"||s.poll.disabled==0?"Disable":"Enable"),1)]),_:1})]),_:1}),e(t(x),null,{default:n(()=>[e(t(V),{color:"danger",onClick:l[1]||(l[1]=a=>m(s.poll.title,s.poll.id))},{default:n(()=>[v("Delete")]),_:1})]),_:1})])]))}},ze=$(Je,[["__scopeId","data-v-5b7d6310"]]);const Ge=i=>(R("data-v-bcec6473"),i=i(),E(),i),He=Ge(()=>o("h1",null," Responses ",-1)),Fe={key:0},Xe={__name:"ResponseView",props:["pollid"],setup(i){async function u(s){try{const _="https://greencanyonapp.com/api/pollsresponsescsv?pollid=".concat(s),y=await fetch(_,{headers:{key:localStorage.getItem("key")}});if(!y.ok)throw new Error("Network response was not ok.");const m=await y.blob(),g=window.URL.createObjectURL(m),k=document.createElement("a");k.href=g,k.setAttribute("download","poll_".concat(s,".csv")),document.body.appendChild(k),k.click(),k.remove(),window.URL.revokeObjectURL(g)}catch(_){console.error("Error downloading the file:",_)}}return(s,_)=>(d(),h(T,null,[He,i.pollid!=-1?(d(),h("div",Fe)):C("",!0),e(t(x),{class:"centercontent"},{default:n(()=>[e(t(V),{onClick:_[0]||(_[0]=y=>u(i.pollid))},{default:n(()=>[v("Download CSV")]),_:1})]),_:1})],64))}},Ke=$(Xe,[["__scopeId","data-v-bcec6473"]]);const We={class:"div"},Ye={key:0,style:{width:"100%"}},Ze={__name:"PollViewer",setup(i){const u=I([]),s=I(-1),_=async()=>{const y="https://greencanyonapp.com/api/polls?max=100&offset=0&sortbytime=1";try{const m=(await(await fetch(y,{method:"GET"})).json()).data;return console.log(m),m}catch(m){console.error(m)}return[]};return(async()=>(u.value=await _(),console.log(u.value)))(),(y,m)=>(d(),h("div",We,[e(t(z),{lines:"inset",class:"left"},{default:n(()=>[(d(!0),h(T,null,N(u.value,g=>(d(),A(t(x),{key:g},{default:n(()=>[e(ze,{onResponses:k=>s.value=g.id,poll:g},null,8,["onResponses","poll"])]),_:2},1024))),128))]),_:1}),s.value!=-1?(d(),h("div",Ye,[e(t(z),{lines:"none",class:"left centercontent"},{default:n(()=>[e(Ke,{pollid:s.value},null,8,["pollid"])]),_:1})])):C("",!0)]))}},Qe=$(Ze,[["__scopeId","data-v-458cd71a"]]);const H=i=>(R("data-v-b00479e2"),i=i(),E(),i),et=H(()=>o("div",null,[o("h1",null,"Poll Manager")],-1)),tt=H(()=>o("div",{class:"division"},null,-1)),ot={key:0},lt={key:1},nt={__name:"PollManager",setup(i){const u=I("tab2");return(s,_)=>(d(),A(t(de),null,{default:n(()=>[e(t(ae),{translucent:!0},{default:n(()=>[e(t(oe),null,{default:n(()=>[e(t(le),{slot:"start"},{default:n(()=>[e(t(ne),{color:"primary"})]),_:1}),e(t(se),null,{default:n(()=>[v("Poll Manager")]),_:1})]),_:1})]),_:1}),e(t(ie),null,{default:n(()=>[et,tt,e(t(ce),{modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=y=>u.value=y),value:"tab2"},{default:n(()=>[e(t(G),{value:"tab2"},{default:n(()=>[v(" View Polls ")]),_:1}),e(t(G),{value:"tab1"},{default:n(()=>[v(" Create Poll ")]),_:1})]),_:1},8,["modelValue"]),u.value==="tab1"?(d(),h("div",ot,[e(Le)])):C("",!0),u.value==="tab2"?(d(),h("div",lt,[e(Qe)])):C("",!0)]),_:1})]),_:1}))}},at=$(nt,[["__scopeId","data-v-b00479e2"]]);export{at as default};
