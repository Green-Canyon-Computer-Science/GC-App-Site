import{_ as P,r as S,a as Z,o as d,c as r,b as o,d as e,w as n,u as t,I as J,e as C,f as I,g as f,h as L,F as A,i as N,j as T,k as Q,t as $,l as g,m as x,n as ee,v as te,p as R,q as E,s as V,x as U,y as oe,z as le,A as ne,B as se,C as ae,D as ce,E as G,G as ie,H as de}from"./index-56f1404e.js";const _=i=>(R("data-v-68df9063"),i=i(),E(),i),ue={id:"page"},_e={class:"questionContainer"},re=_(()=>o("h2",null," Create Poll ",-1)),pe=["src"],fe=_(()=>o("br",null,null,-1)),he=_(()=>o("br",null,null,-1)),ve=_(()=>o("h1",null,"Send with notification",-1)),me=["onClick"],ye=["onClick"],be=["onClick"],we=_(()=>o("br",null,null,-1)),ke=_(()=>o("br",null,null,-1)),ge=_(()=>o("br",null,null,-1)),Ce=["onUpdate:modelValue"],Se=_(()=>o("option",{value:"text"},"Text",-1)),xe=_(()=>o("option",{value:"radio"},"Radio",-1)),Ie=_(()=>o("option",{value:"checkbox"},"Checkbox",-1)),Pe=_(()=>o("option",{value:"short"},"Short Response",-1)),qe=_(()=>o("option",{value:"long"},"Long Response",-1)),$e=[Se,xe,Ie,Pe,qe],Ve={key:1,style:{"background-color":"white",width:"80%",height:"3px"}},Ae={style:{display:"flex","flex-direction":"row"}},Te=["onClick"],Oe=["onClick"],Ne=_(()=>o("br",null,null,-1)),Re=_(()=>o("br",null,null,-1)),Ee=_(()=>o("br",null,null,-1)),ze=_(()=>o("br",null,null,-1)),Be={__name:"PollCreator",setup(i){const u=S("");S({});const c=S([]);function y(){c.value.push({title:"",options:[]})}function b(l){const s=c.value.indexOf(l);c.value.splice(s,1)}function m(l){l.options.push({title:""})}function w(l,s){l.options.splice(l.options.indexOf(s),1)}function q(){const l=document.querySelectorAll("#title")[0].value,s=document.querySelectorAll("#desc")[0].value,k=document.querySelectorAll("#button")[0].value;if(!confirm("Are you sure you want to create poll "+l+"?"))return;const a=document.querySelectorAll(".question"),p=[];a.forEach(h=>{const X=h.querySelectorAll("ion-input")[0].value,K=h.querySelectorAll("select")[0].value;let O;h.querySelectorAll(".required").length>0?O=h.querySelectorAll(".required")[0].checked:O=!1;const W=[].slice.call(h.querySelectorAll("ion-input")).splice(1),j=[];W.forEach(Y=>{j.push(Y.value)}),p.push({title:X,type:K,choices:j,required:O})}),console.log("Creating "+l+" with description "+s+" and button "+k),console.log(JSON.stringify(p)),fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls",{method:"POST",body:JSON.stringify({timestamp:new Date().getTime()/1e3,title:l,desc:s,button:k,disabled:!1,polldata:JSON.stringify({poll:p}),image:u.value,key:"w0lfpAck!@#"}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload(),alert("Poll created!")});const z=document.querySelectorAll("#allnotif")[0].checked,B=document.querySelectorAll("#gamesnotif")[0].checked,D=document.querySelectorAll("#eventsnotif")[0].checked,M=document.querySelectorAll("#schedulenotif")[0].checked;if(z||B||D||M){let h="";z&&(h="all"),B&&(h="game"),D&&(h="event"),M&&(h="schedule"),console.log("Sending notification to "+h),fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:h,title:"New poll!",body:"New poll '"+l+"'",key:"w0lfpAck!@#"})})}}function v(l,s,k){if(s>=0&&s<l.length){if(k==="up"&&s>0){const a=l[s];l[s]=l[s-1],l[s-1]=a}else if(k==="down"&&s<l.length-1){const a=l[s];l[s]=l[s+1],l[s+1]=a}}}return(l,s)=>{const k=Z("ion-label");return d(),r("div",ue,[o("div",_e,[re,e(t(L),null,{default:n(()=>[e(t(J),null,{default:n(()=>[e(t(C),{placeholder:"Poll Title",label:"",id:"title"}),e(t(C),{placeholder:"Poll Description",label:"",id:"desc"}),e(t(C),{placeholder:"Image Link",label:"",id:"imglink",modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=a=>u.value=a)},null,8,["modelValue"]),o("img",{src:u.value,alt:"",style:{border:"1px solid white","max-height":"165px"}},null,8,pe),fe,e(t(C),{placeholder:"Button Text",label:"",id:"button"}),he,ve,e(t(I),{"label-placement":"fixed",class:"check",id:"allnotif"},{default:n(()=>[f("All")]),_:1}),e(t(I),{"label-placement":"fixed",class:"check",id:"eventsnotif"},{default:n(()=>[f("Events")]),_:1}),e(t(I),{"label-placement":"fixed",class:"check",id:"gamesnotif"},{default:n(()=>[f("Games")]),_:1}),e(t(I),{"label-placement":"fixed",class:"check",id:"schedulenotif"},{default:n(()=>[f("Schedule")]),_:1})]),_:1})]),_:1}),(d(!0),r(A,null,N(c.value,a=>(d(),T(t(L),{key:a,class:"question"},{default:n(()=>[e(t(Q),null,{default:n(()=>[o("button",{onClick:p=>b(a)}," X ",8,me)]),_:2},1024),e(t(J),{ref_for:!0,ref:"poll"},{default:n(()=>[o("div",null,[o("button",{onClick:p=>v(c.value,c.value.indexOf(a),"up")},"↑",8,ye),o("button",{onClick:p=>v(c.value,c.value.indexOf(a),"down")},"↓",8,be)]),we,ke,o("h1",null," Question "+$(c.value.indexOf(a)+1),1),e(t(C),{placeholder:"Question Title",value:a.title},null,8,["value"]),a.type!="text"?(d(),T(t(I),{key:0,class:"required"},{default:n(()=>[f("Requires Response")]),_:1})):g("",!0),ge,e(t(x),null,{default:n(()=>[e(k,null,{default:n(()=>[f("Question Type")]),_:1}),ee(o("select",{"onUpdate:modelValue":p=>a.type=p,placeholder:"Question Type"},$e,8,Ce),[[te,a.type]])]),_:2},1024),a.type=="radio"||a.type=="checkbox"?(d(),r("div",Ve)):g("",!0),(d(!0),r(A,null,N(a.options,p=>(d(),r("div",{key:p},[o("span",Ae,[e(t(C),{placeholder:"Option",value:p.title},null,8,["value"]),o("button",{onClick:F=>w(a,p),style:{width:"25",height:"25px","font-size":"20px"}}," X ",8,Te)])]))),128)),a.type=="radio"||a.type=="checkbox"?(d(),r("button",{key:2,style:{width:"20%","font-size":"20px"},onClick:p=>m(a)}," New Choice ",8,Oe)):g("",!0)]),_:2},1536)]),_:2},1024))),128)),o("button",{onClick:y}," + "),Ne,Re,Ee,ze,o("button",{style:{width:"20%","font-size":"30px","margin-bottom":"15px"},onClick:q}," Create Poll ")])])}}},De=P(Be,[["__scopeId","data-v-68df9063"]]);const Me={class:"full"},je={style:{color:"gray"}},Je={class:"buttons full"},Le={__name:"PollView",props:["poll"],emits:["responses"],setup(i,{emit:u}){const c=i,y=u;function b(){y("responses")}function m(v,l){confirm("Are you sure you want to delete poll "+v+"?")&&q(l)}function w(v){console.log(v.disabled),fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/pollsdisable",{method:"POST",body:JSON.stringify({key:"w0lfpAck!@#",id:v.id,disabled:v.disabled!="true"}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload()})}function q(v){fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls",{method:"DELETE",body:JSON.stringify({key:"w0lfpAck!@#",id:v}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload()})}return(v,l)=>(d(),r("div",Me,[o("h2",null,$(c.poll.title),1),o("h6",je,$(c.poll.desc),1),o("div",Je,[e(t(x),null,{default:n(()=>[e(t(V),{onClick:b},{default:n(()=>[f("Responses")]),_:1})]),_:1}),e(t(x),null,{default:n(()=>[e(t(V),{onClick:l[0]||(l[0]=s=>w(c.poll))},{default:n(()=>[f($(c.poll.disabled=="false"?"Disable":"Enable"),1)]),_:1})]),_:1}),e(t(x),null,{default:n(()=>[e(t(V),{color:"danger",onClick:l[1]||(l[1]=s=>m(c.poll.title,c.poll.id))},{default:n(()=>[f("Delete")]),_:1})]),_:1})])]))}},Ue=P(Le,[["__scopeId","data-v-92bd679b"]]);const Ge=i=>(R("data-v-4d5f3bfe"),i=i(),E(),i),He=Ge(()=>o("h1",null," Responses ",-1)),Fe={key:0},Xe={__name:"ResponseView",props:["pollid"],setup(i){return(u,c)=>(d(),r(A,null,[He,i.pollid!=-1?(d(),r("div",Fe)):g("",!0),e(t(x),{class:"centercontent"},{default:n(()=>[e(t(V),{href:"http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/pollsresponsescsv?pollid="+i.pollid,download:"poll_"+i.pollid+".csv"},{default:n(()=>[f("Download CSV")]),_:1},8,["href","download"])]),_:1})],64))}},Ke=P(Xe,[["__scopeId","data-v-4d5f3bfe"]]);const We={class:"div"},Ye={key:0,style:{width:"100%"}},Ze={__name:"PollViewer",setup(i){const u=S([]),c=S(-1),y=async()=>{const b="http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls?max=100&offset=0&sortbytime=1";try{const m=(await(await fetch(b,{method:"GET"})).json()).data;return console.log(m),m}catch(m){console.error(m)}return[]};return(async()=>(u.value=await y(),console.log(u.value)))(),(b,m)=>(d(),r("div",We,[e(t(U),{lines:"inset",class:"left"},{default:n(()=>[(d(!0),r(A,null,N(u.value,w=>(d(),T(t(x),{key:w},{default:n(()=>[e(Ue,{onResponses:q=>c.value=w.id,poll:w},null,8,["onResponses","poll"])]),_:2},1024))),128))]),_:1}),c.value!=-1?(d(),r("div",Ye,[e(t(U),{lines:"none",class:"left centercontent"},{default:n(()=>[e(Ke,{pollid:c.value},null,8,["pollid"])]),_:1})])):g("",!0)]))}},Qe=P(Ze,[["__scopeId","data-v-e06e5a59"]]);const H=i=>(R("data-v-b00479e2"),i=i(),E(),i),et=H(()=>o("div",null,[o("h1",null,"Poll Manager")],-1)),tt=H(()=>o("div",{class:"division"},null,-1)),ot={key:0},lt={key:1},nt={__name:"PollManager",setup(i){const u=S("tab2");return(c,y)=>(d(),T(t(de),null,{default:n(()=>[e(t(ae),{translucent:!0},{default:n(()=>[e(t(oe),null,{default:n(()=>[e(t(le),{slot:"start"},{default:n(()=>[e(t(ne),{color:"primary"})]),_:1}),e(t(se),null,{default:n(()=>[f("Poll Manager")]),_:1})]),_:1})]),_:1}),e(t(ie),null,{default:n(()=>[et,tt,e(t(ce),{modelValue:u.value,"onUpdate:modelValue":y[0]||(y[0]=b=>u.value=b),value:"tab2"},{default:n(()=>[e(t(G),{value:"tab2"},{default:n(()=>[f(" View Polls ")]),_:1}),e(t(G),{value:"tab1"},{default:n(()=>[f(" Create Poll ")]),_:1})]),_:1},8,["modelValue"]),u.value==="tab1"?(d(),r("div",ot,[e(De)])):g("",!0),u.value==="tab2"?(d(),r("div",lt,[e(Qe)])):g("",!0)]),_:1})]),_:1}))}},at=P(nt,[["__scopeId","data-v-b00479e2"]]);export{at as default};
