import{_ as I,r as S,o as r,c as f,a as l,b as e,w as o,u as t,I as J,d as k,e as C,f as _,g as L,F as A,h as O,i as N,j as Z,t as $,k as Q,l as w,m as T,p as R,n as E,q,s as V,v as G,x as ee,y as te,z as le,A as oe,B as ne,C as se,D as F,E as ae,G as ce}from"./index-7f83ffca.js";const i=c=>(R("data-v-d6bcf486"),c=c(),E(),c),ie={id:"page"},ue={class:"questionContainer"},de=i(()=>l("h2",null," Create Poll ",-1)),_e=["src"],re=i(()=>l("br",null,null,-1)),pe=i(()=>l("br",null,null,-1)),fe=i(()=>l("h1",null,"Send with notification",-1)),he=["onClick"],ve=["onClick"],me=["onClick"],be=i(()=>l("br",null,null,-1)),ye=i(()=>l("br",null,null,-1)),we=i(()=>l("br",null,null,-1)),ge=i(()=>l("br",null,null,-1)),ke=i(()=>l("br",null,null,-1)),Ce=i(()=>l("br",null,null,-1)),Se=i(()=>l("br",null,null,-1)),Ie=i(()=>l("br",null,null,-1)),xe=i(()=>l("div",{style:{"background-color":"white",width:"80%",height:"3px"}},null,-1)),Pe=i(()=>l("br",null,null,-1)),$e=i(()=>l("br",null,null,-1)),qe={style:{display:"flex","flex-direction":"row"}},Ae=["onClick"],Ve=["onClick"],Te=i(()=>l("br",null,null,-1)),Oe=i(()=>l("br",null,null,-1)),Ne=i(()=>l("br",null,null,-1)),Re=i(()=>l("br",null,null,-1)),Ee={__name:"PollCreator",setup(c){const d=S(""),a=S([]);function b(){a.value.push({title:"",options:[]})}function y(n){const s=a.value.indexOf(n);a.value.splice(s,1)}function m(n){n.options.push({title:""})}function g(n,s){n.options.splice(n.options.indexOf(s),1)}function x(){const n=document.querySelectorAll("#title")[0].value,s=document.querySelectorAll("#desc")[0].value,u=document.querySelectorAll("#button")[0].value;if(!confirm("Are you sure you want to create poll "+n+"?"))return;const p=document.querySelectorAll(".question"),P=[];p.forEach(v=>{const U=v.querySelectorAll("ion-input")[0].value,X=v.querySelectorAll("ion-radio-group")[0].value,K=v.querySelectorAll(".required")[0].checked,W=[].slice.call(v.querySelectorAll("ion-input")).splice(1),M=[];W.forEach(Y=>{M.push(Y.value)}),P.push({title:U,type:X,choices:M,required:K})}),console.log("Creating "+n+" with description "+s+" and button "+u),console.log(JSON.stringify(P)),fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls",{method:"POST",body:JSON.stringify({timestamp:new Date().getTime()/1e3,title:n,desc:s,button:u,disabled:!1,polldata:JSON.stringify({poll:P}),image:d.value,key:"w0lfpAck!@#"}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload(),alert("Poll created!")});const j=document.querySelectorAll("#allnotif")[0].checked,z=document.querySelectorAll("#gamesnotif")[0].checked,B=document.querySelectorAll("#eventsnotif")[0].checked,D=document.querySelectorAll("#schedulenotif")[0].checked;if(j||z||B||D){let v="";j&&(v="all"),z&&(v="game"),B&&(v="event"),D&&(v="schedule"),console.log("Sending notification to "+v),fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:v,title:"New poll!",body:"New poll '"+n+"'",key:"w0lfpAck!@#"})})}}function h(n,s,u){if(s>=0&&s<n.length){if(u==="up"&&s>0){const p=n[s];n[s]=n[s-1],n[s-1]=p}else if(u==="down"&&s<n.length-1){const p=n[s];n[s]=n[s+1],n[s+1]=p}}}return(n,s)=>(r(),f("div",ie,[l("div",ue,[de,e(t(L),null,{default:o(()=>[e(t(J),null,{default:o(()=>[e(t(k),{placeholder:"Poll Title",label:"",id:"title"}),e(t(k),{placeholder:"Poll Description",label:"",id:"desc"}),e(t(k),{placeholder:"Image Link",label:"",id:"imglink",modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=u=>d.value=u)},null,8,["modelValue"]),l("img",{src:d.value,alt:"",style:{border:"1px solid white","max-height":"165px"}},null,8,_e),re,e(t(k),{placeholder:"Button Text",label:"",id:"button"}),pe,fe,e(t(C),{"label-placement":"fixed",class:"check",id:"allnotif"},{default:o(()=>[_("All")]),_:1}),e(t(C),{"label-placement":"fixed",class:"check",id:"eventsnotif"},{default:o(()=>[_("Events")]),_:1}),e(t(C),{"label-placement":"fixed",class:"check",id:"gamesnotif"},{default:o(()=>[_("Games")]),_:1}),e(t(C),{"label-placement":"fixed",class:"check",id:"schedulenotif"},{default:o(()=>[_("Schedule")]),_:1})]),_:1})]),_:1}),(r(!0),f(A,null,O(a.value,u=>(r(),N(t(L),{key:u,class:"question"},{default:o(()=>[e(t(Z),null,{default:o(()=>[l("button",{onClick:p=>y(u)}," X ",8,he)]),_:2},1024),e(t(J),{ref_for:!0,ref:"poll"},{default:o(()=>[l("div",null,[l("button",{onClick:p=>h(a.value,a.value.indexOf(u),"up")},"↑",8,ve),l("button",{onClick:p=>h(a.value,a.value.indexOf(u),"down")},"↓",8,me)]),be,ye,we,l("h1",null," Question "+$(a.value.indexOf(u)+1),1),ge,e(t(k),{placeholder:"Question Title",value:u.title},null,8,["value"]),e(t(C),{class:"required"},{default:o(()=>[_("Requires Response")]),_:1}),ke,Ce,e(t(Q),{value:u.type,justify:"space-between"},{default:o(()=>[e(t(w),null,{default:o(()=>[e(t(T),{value:"text",justify:"space-between"},{default:o(()=>[_("Text")]),_:1})]),_:1}),e(t(w),null,{default:o(()=>[e(t(T),{value:"radio",justify:"space-between"},{default:o(()=>[_("Radio")]),_:1})]),_:1}),e(t(w),null,{default:o(()=>[e(t(T),{value:"checkbox",justify:"space-between"},{default:o(()=>[_("Checkbox")]),_:1})]),_:1})]),_:2},1032,["value"]),Se,Ie,xe,Pe,$e,(r(!0),f(A,null,O(u.options,p=>(r(),f("div",{key:p},[l("span",qe,[e(t(k),{placeholder:"Option",value:p.title},null,8,["value"]),l("button",{onClick:P=>g(u,p),style:{width:"25",height:"25px","font-size":"20px"}}," X ",8,Ae)])]))),128)),l("button",{style:{width:"20%","font-size":"20px"},onClick:p=>m(u)}," New Choice ",8,Ve)]),_:2},1536)]),_:2},1024))),128)),l("button",{onClick:b}," + "),Te,Oe,Ne,Re,l("button",{style:{width:"20%","font-size":"30px","margin-bottom":"15px"},onClick:x}," Create Poll ")])]))}},je=I(Ee,[["__scopeId","data-v-d6bcf486"]]);const ze={class:"full"},Be={style:{color:"gray"}},De={class:"buttons full"},Me={__name:"PollView",props:["poll"],emits:["responses"],setup(c,{emit:d}){const a=c,b=d;function y(){b("responses")}function m(h,n){confirm("Are you sure you want to delete poll "+h+"?")&&x(n)}function g(h){console.log(h.disabled),fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/pollsdisable",{method:"POST",body:JSON.stringify({key:"w0lfpAck!@#",id:h.id,disabled:h.disabled!="true"}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload()})}function x(h){fetch("http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls",{method:"DELETE",body:JSON.stringify({key:"w0lfpAck!@#",id:h}),headers:{"Content-Type":"application/json"}}).then(()=>{location.reload()})}return(h,n)=>(r(),f("div",ze,[l("h2",null,$(a.poll.title),1),l("h6",Be,$(a.poll.desc),1),l("div",De,[e(t(w),null,{default:o(()=>[e(t(q),{onClick:y},{default:o(()=>[_("Responses")]),_:1})]),_:1}),e(t(w),null,{default:o(()=>[e(t(q),{onClick:n[0]||(n[0]=s=>g(a.poll))},{default:o(()=>[_($(a.poll.disabled=="false"?"Disable":"Enable"),1)]),_:1})]),_:1}),e(t(w),null,{default:o(()=>[e(t(q),{color:"danger",onClick:n[1]||(n[1]=s=>m(a.poll.title,a.poll.id))},{default:o(()=>[_("Delete")]),_:1})]),_:1})])]))}},Je=I(Me,[["__scopeId","data-v-92bd679b"]]);const Le=c=>(R("data-v-4d5f3bfe"),c=c(),E(),c),Ge=Le(()=>l("h1",null," Responses ",-1)),Fe={key:0},He={__name:"ResponseView",props:["pollid"],setup(c){return(d,a)=>(r(),f(A,null,[Ge,c.pollid!=-1?(r(),f("div",Fe)):V("",!0),e(t(w),{class:"centercontent"},{default:o(()=>[e(t(q),{href:"http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/pollsresponsescsv?pollid="+c.pollid,download:"poll_"+c.pollid+".csv"},{default:o(()=>[_("Download CSV")]),_:1},8,["href","download"])]),_:1})],64))}},Ue=I(He,[["__scopeId","data-v-4d5f3bfe"]]);const Xe={class:"div"},Ke={key:0,style:{width:"100%"}},We={__name:"PollViewer",setup(c){const d=S([]),a=S(-1),b=async()=>{const y="http://ec2-54-193-22-54.us-west-1.compute.amazonaws.com/api/polls?max=100&offset=0&sortbytime=1";try{const m=(await(await fetch(y,{method:"GET"})).json()).data;return console.log(m),m}catch(m){console.error(m)}return[]};return(async()=>(d.value=await b(),console.log(d.value)))(),(y,m)=>(r(),f("div",Xe,[e(t(G),{lines:"inset",class:"left"},{default:o(()=>[(r(!0),f(A,null,O(d.value,g=>(r(),N(t(w),{key:g},{default:o(()=>[e(Je,{onResponses:x=>a.value=g.id,poll:g},null,8,["onResponses","poll"])]),_:2},1024))),128))]),_:1}),a.value!=-1?(r(),f("div",Ke,[e(t(G),{lines:"none",class:"left centercontent"},{default:o(()=>[e(Ue,{pollid:a.value},null,8,["pollid"])]),_:1})])):V("",!0)]))}},Ye=I(We,[["__scopeId","data-v-e06e5a59"]]);const H=c=>(R("data-v-b00479e2"),c=c(),E(),c),Ze=H(()=>l("div",null,[l("h1",null,"Poll Manager")],-1)),Qe=H(()=>l("div",{class:"division"},null,-1)),et={key:0},tt={key:1},lt={__name:"PollManager",setup(c){const d=S("tab2");return(a,b)=>(r(),N(t(ce),null,{default:o(()=>[e(t(ne),{translucent:!0},{default:o(()=>[e(t(ee),null,{default:o(()=>[e(t(te),{slot:"start"},{default:o(()=>[e(t(le),{color:"primary"})]),_:1}),e(t(oe),null,{default:o(()=>[_("Poll Manager")]),_:1})]),_:1})]),_:1}),e(t(ae),null,{default:o(()=>[Ze,Qe,e(t(se),{modelValue:d.value,"onUpdate:modelValue":b[0]||(b[0]=y=>d.value=y),value:"tab2"},{default:o(()=>[e(t(F),{value:"tab2"},{default:o(()=>[_(" View Polls ")]),_:1}),e(t(F),{value:"tab1"},{default:o(()=>[_(" Create Poll ")]),_:1})]),_:1},8,["modelValue"]),d.value==="tab1"?(r(),f("div",et,[e(je)])):V("",!0),d.value==="tab2"?(r(),f("div",tt,[e(Ye)])):V("",!0)]),_:1})]),_:1}))}},st=I(lt,[["__scopeId","data-v-b00479e2"]]);export{st as default};