System.register(["./index-legacy-c216acec.js"],(function(e,l){"use strict";var t,o,a,n,i,d,c,u,s,r,p,f,h,v,y,m,g,b,k,x,w,_,S,C,T,O,q,A,P,N,V,I,R,E,J,j,D;return{setters:[e=>{t=e._,o=e.r,a=e.a,n=e.o,i=e.c,d=e.b,c=e.d,u=e.w,s=e.u,r=e.I,p=e.e,f=e.f,h=e.g,v=e.h,y=e.v,m=e.i,g=e.t,b=e.j,k=e.F,x=e.k,w=e.l,_=e.m,S=e.n,C=e.p,T=e.q,O=e.s,q=e.x,A=e.y,P=e.z,N=e.A,V=e.B,I=e.C,R=e.D,E=e.E,J=e.G,j=e.H,D=e.J}],execute:function(){var l=document.createElement("style");l.textContent="h1[data-v-e2e28217],h2[data-v-e2e28217]{text-align:center}.questionContainer[data-v-e2e28217],ion-card-content[data-v-e2e28217]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}button[data-v-e2e28217]{width:50px;height:50px;font-size:50px;border-radius:50px}.division[data-v-e2e28217]{position:relative;width:80%;height:3px;background-color:#fff;left:50%;transform:translate(-50%);margin:20px}ion-input[data-v-e2e28217]{background-color:#3e3e3e;margin-bottom:6px;font-size:20px}ion-card[data-v-e2e28217]{width:80%;padding:1px;margin:5px}#id[data-v-e2e28217]{overflow:scroll}ion-item ion-radio[data-v-e2e28217]{font-size:17px}ion-item[data-v-e2e28217]{width:400px}.buttons[data-v-a219af73]{position:relative;display:flex;flex-direction:row;width:100%;padding:0!important}.buttons button[data-v-a219af73]{margin:0}button[data-v-a219af73]{width:90px;height:30px}.full[data-v-a219af73]{width:100%}div[data-v-bcec6473]{background:var(--background)}h1[data-v-bcec6473]{text-align:center;width:100%}ion-list[data-v-458cd71a]{margin:20px}h1[data-v-458cd71a]{text-align:center;width:100%}.left[data-v-458cd71a]{position:relative;width:100%}.div[data-v-458cd71a]{display:flex;flex-direction:row;width:100%;padding-right:50px;padding-left:50px}.centercontent[data-v-458cd71a]{display:flex;flex-direction:column;align-items:center;justify-content:center}.division[data-v-b00479e2]{position:relative;width:80%;height:3px;background-color:#fff;left:50%;transform:translate(-50%)}h1[data-v-b00479e2],h2[data-v-b00479e2]{text-align:center}\n",document.head.appendChild(l);const U=e=>(T("data-v-e2e28217"),e=e(),O(),e),z={id:"page"},L={class:"questionContainer"},Q=U((()=>d("h2",null," Create Poll ",-1))),B=["src"],G=U((()=>d("br",null,null,-1))),M=U((()=>d("h2",null,"Button Text",-1))),X=U((()=>d("br",null,null,-1))),$=U((()=>d("br",null,null,-1))),F=U((()=>d("h1",null,"Send with notification",-1))),H=["onClick"],K=["onClick"],W=["onClick"],Y=U((()=>d("br",null,null,-1))),Z=U((()=>d("br",null,null,-1))),ee=U((()=>d("br",null,null,-1))),le=["onUpdate:modelValue"],te=[U((()=>d("option",{value:"text"},"Text",-1))),U((()=>d("option",{value:"radio"},"Radio",-1))),U((()=>d("option",{value:"checkbox"},"Checkbox",-1))),U((()=>d("option",{value:"short"},"Short Response",-1))),U((()=>d("option",{value:"long"},"Long Response",-1)))],oe={key:1,style:{"background-color":"white",width:"80%",height:"3px"}},ae={style:{display:"flex","flex-direction":"row"}},ne=["onClick"],ie=["onClick"],de=U((()=>d("br",null,null,-1))),ce=U((()=>d("br",null,null,-1))),ue=U((()=>d("br",null,null,-1))),se=U((()=>d("br",null,null,-1))),re=t({__name:"PollCreator",setup(e){const l=o("");o({});const t=o([]),T=o(!1),O=o(0);function q(){t.value.push({title:"",options:[]})}function A(){const e=document.querySelectorAll("#title")[0].value,t=document.querySelectorAll("#desc")[0].value,o=document.querySelectorAll("#button")[0].value;if(!confirm("Are you sure you want to create poll "+e+"?"))return;const a=document.querySelectorAll(".question"),n=[];a.forEach((e=>{const l=e.querySelectorAll("ion-input")[0].value,t=e.querySelectorAll("select")[0].value;let o;o=e.querySelectorAll(".required").length>0&&e.querySelectorAll(".required")[0].checked;const a=[].slice.call(e.querySelectorAll("ion-input")).splice(1),i=[];a.forEach((e=>{i.push(e.value)})),n.push({title:l,type:t,choices:i,required:o})})),console.log("Creating "+e+" with description "+t+" and button "+o),console.log(JSON.stringify(n)),T.value?fetch("/scheduleaction",{method:"POST",body:JSON.stringify({endpoint:"polls",body:JSON.stringify({timestamp:(new Date).getTime()/1e3,title:e,desc:t,button:o,disabled:!1,polldata:JSON.stringify({poll:n}),image:l.value,key:localStorage.getItem("key")}),time:new Date(O.value).getTime()})}):fetch("https://greencanyonapp.com/api/polls",{method:"POST",body:JSON.stringify({timestamp:(new Date).getTime()/1e3,title:e,desc:t,button:o,disabled:!1,polldata:JSON.stringify({poll:n}),image:l.value,key:localStorage.getItem("key")}),headers:{"Content-Type":"application/json"}}).then((e=>{e.ok?(location.reload(),alert("Poll created!")):alert("There was an error creating poll. Are you sure you have a key saved?")})).catch((e=>{alert("An unknown error occurred.")}));const i=document.querySelectorAll("#allnotif")[0].checked,d=document.querySelectorAll("#gamesnotif")[0].checked,c=document.querySelectorAll("#eventsnotif")[0].checked,u=document.querySelectorAll("#schedulenotif")[0].checked;if(i||d||c||u){let l="";i&&(l="all"),d&&(l="game"),c&&(l="event"),u&&(l="schedule"),console.log("Sending notification to "+l),T.value?fetch("/scheduleaction",{method:"POST",body:JSON.stringify({endpoint:"notification",body:JSON.stringify({topic:l,title:"New poll!",body:"New poll '"+e+"'",key:localStorage.getItem("key")}),time:new Date(O.value).getTime()})}):fetch("https://greencanyonapp.com/api/notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:l,title:"New poll!",body:"New poll '"+e+"'",key:localStorage.getItem("key")})})}}function P(e,l,t){if(l>=0&&l<e.length)if("up"===t&&l>0){const t=e[l];e[l]=e[l-1],e[l-1]=t}else if("down"===t&&l<e.length-1){const t=e[l];e[l]=e[l+1],e[l+1]=t}}return(e,o)=>{const N=a("ion-label");return n(),i("div",z,[d("div",L,[Q,c(s(b),null,{default:u((()=>[c(s(r),null,{default:u((()=>[c(s(p),{placeholder:"Poll Title",label:"",id:"title"}),c(s(p),{placeholder:"Poll Description",label:"",id:"desc"}),c(s(p),{placeholder:"Image Link",label:"",id:"imglink",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e)},null,8,["modelValue"]),d("img",{src:l.value,alt:"",style:{border:"1px solid white","max-height":"165px"}},null,8,B),G,M,c(s(p),{placeholder:"Button Text",label:"",id:"button",value:"Take Poll"}),X,c(s(f),{"label-placement":"fixed",class:"check",id:"schedule",modelValue:T.value,"onUpdate:modelValue":o[1]||(o[1]=e=>T.value=e)},{default:u((()=>[h("Schedule")])),_:1},8,["modelValue"]),T.value?v((n(),i("input",{key:0,type:"datetime-local",step:"1","onUpdate:modelValue":o[2]||(o[2]=e=>O.value=e)},null,512)),[[y,O.value]]):m("",!0),d("p",null,g(new Date(O.value).getTime()),1),$,F,c(s(f),{"label-placement":"fixed",class:"check",id:"allnotif"},{default:u((()=>[h("All")])),_:1}),c(s(f),{"label-placement":"fixed",class:"check",id:"eventsnotif"},{default:u((()=>[h("Events")])),_:1}),c(s(f),{"label-placement":"fixed",class:"check",id:"gamesnotif"},{default:u((()=>[h("Games")])),_:1}),c(s(f),{"label-placement":"fixed",class:"check",id:"schedulenotif"},{default:u((()=>[h("Schedule")])),_:1})])),_:1})])),_:1}),(n(!0),i(k,null,x(t.value,(e=>(n(),w(s(b),{key:e,class:"question"},{default:u((()=>[c(s(_),null,{default:u((()=>[d("button",{onClick:l=>function(e){const l=t.value.indexOf(e);t.value.splice(l,1)}(e)}," X ",8,H)])),_:2},1024),c(s(r),{ref_for:!0,ref:"poll"},{default:u((()=>[d("div",null,[d("button",{onClick:l=>P(t.value,t.value.indexOf(e),"up")},"↑",8,K),d("button",{onClick:l=>P(t.value,t.value.indexOf(e),"down")},"↓",8,W)]),Y,Z,d("h1",null," Question "+g(t.value.indexOf(e)+1),1),c(s(p),{placeholder:"Question Title",value:e.title},null,8,["value"]),"text"!=e.type?(n(),w(s(f),{key:0,class:"required"},{default:u((()=>[h("Requires Response")])),_:1})):m("",!0),ee,c(s(S),null,{default:u((()=>[c(N,null,{default:u((()=>[h("Question Type")])),_:1}),v(d("select",{"onUpdate:modelValue":l=>e.type=l,placeholder:"Question Type"},te,8,le),[[C,e.type]])])),_:2},1024),"radio"==e.type||"checkbox"==e.type?(n(),i("div",oe)):m("",!0),(n(!0),i(k,null,x(e.options,(l=>(n(),i("div",{key:l},[d("span",ae,[c(s(p),{placeholder:"Option",value:l.title},null,8,["value"]),d("button",{onClick:t=>function(e,l){e.options.splice(e.options.indexOf(l),1)}(e,l),style:{width:"25",height:"25px","font-size":"20px"}}," X ",8,ne)])])))),128)),"radio"==e.type||"checkbox"==e.type?(n(),i("button",{key:2,style:{width:"20%","font-size":"20px"},onClick:l=>function(e){e.options.push({title:""})}(e)}," New Choice ",8,ie)):m("",!0)])),_:2},1536)])),_:2},1024)))),128)),d("button",{onClick:q}," + "),de,ce,ue,se,d("button",{style:{width:"20%","font-size":"30px","margin-bottom":"15px"},onClick:A}," Create Poll ")])])}}},[["__scopeId","data-v-e2e28217"]]),pe={class:"full"},fe={style:{color:"gray"}},he={class:"buttons full"},ve=t({__name:"PollView",props:["poll"],emits:["responses"],setup(e,{emit:l}){const t=e,o=l;function a(){o("responses")}function r(e,l){confirm("Are you sure you want to delete poll "+e+"?")&&function(e){fetch("https://greencanyonapp.com/api/polls",{method:"DELETE",body:JSON.stringify({key:localStorage.getItem("key"),id:e}),headers:{"Content-Type":"application/json"}}).then((()=>{location.reload()}))}(l)}return(e,l)=>(n(),i("div",pe,[d("h2",null,g(t.poll.title),1),d("h6",fe,g(t.poll.desc),1),d("div",he,[c(s(S),null,{default:u((()=>[c(s(q),{onClick:a},{default:u((()=>[h("Responses")])),_:1})])),_:1}),c(s(S),null,{default:u((()=>[c(s(q),{color:"false"==t.poll.disabled||0==t.poll.disabled?"danger":"success",onClick:l[0]||(l[0]=e=>{return l=t.poll,console.log(l.disabled),void fetch("https://greencanyonapp.com/api/pollsdisable",{method:"POST",body:JSON.stringify({key:localStorage.getItem("key"),id:l.id,disabled:!("true"==l.disabled)}),headers:{"Content-Type":"application/json"}}).then((()=>{location.reload()}));var l})},{default:u((()=>[h(g("false"==t.poll.disabled||0==t.poll.disabled?"Disable":"Enable"),1)])),_:1},8,["color"])])),_:1}),c(s(S),null,{default:u((()=>[c(s(q),{color:"danger",onClick:l[1]||(l[1]=e=>r(t.poll.title,t.poll.id))},{default:u((()=>[h("Delete")])),_:1})])),_:1})])]))}},[["__scopeId","data-v-a219af73"]]),ye=(e=>(T("data-v-bcec6473"),e=e(),O(),e))((()=>d("h1",null," Responses ",-1))),me={key:0},ge=t({__name:"ResponseView",props:["pollid"],setup:e=>(l,t)=>(n(),i(k,null,[ye,-1!=e.pollid?(n(),i("div",me)):m("",!0),c(s(S),{class:"centercontent"},{default:u((()=>[c(s(q),{onClick:t[0]||(t[0]=l=>async function(e){try{const l=`https://greencanyonapp.com/api/pollsresponsescsv?pollid=${e}`,t=await fetch(l,{headers:{key:localStorage.getItem("key")}});if(!t.ok)throw new Error("Network response was not ok.");const o=await t.blob(),a=window.URL.createObjectURL(o),n=document.createElement("a");n.href=a,n.setAttribute("download",`poll_${e}.csv`),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(a)}catch(l){console.error("Error downloading the file:",l)}}(e.pollid))},{default:u((()=>[h("Download CSV")])),_:1})])),_:1})],64))},[["__scopeId","data-v-bcec6473"]]),be={class:"div"},ke={key:0,style:{width:"100%"}},xe=t({__name:"PollViewer",setup(e){const l=o([]),t=o(-1);return(async()=>{l.value=await(async()=>{try{const e=(await(await fetch("https://greencanyonapp.com/api/polls?max=100&offset=0&sortbytime=1",{method:"GET"})).json()).data;return console.log(e),e}catch(e){console.error(e)}return[]})(),console.log(l.value)})(),(e,o)=>(n(),i("div",be,[c(s(A),{lines:"inset",class:"left"},{default:u((()=>[(n(!0),i(k,null,x(l.value,(e=>(n(),w(s(S),{key:e},{default:u((()=>[c(ve,{onResponses:l=>t.value=e.id,poll:e},null,8,["onResponses","poll"])])),_:2},1024)))),128))])),_:1}),-1!=t.value?(n(),i("div",ke,[c(s(A),{lines:"none",class:"left centercontent"},{default:u((()=>[c(ge,{pollid:t.value},null,8,["pollid"])])),_:1})])):m("",!0)]))}},[["__scopeId","data-v-458cd71a"]]),we=e=>(T("data-v-b00479e2"),e=e(),O(),e),_e=we((()=>d("div",null,[d("h1",null,"Poll Manager")],-1))),Se=we((()=>d("div",{class:"division"},null,-1))),Ce={key:0},Te={key:1};e("default",t({__name:"PollManager",setup(e){const l=o("tab2");return(e,t)=>(n(),w(s(D),null,{default:u((()=>[c(s(R),{translucent:!0},{default:u((()=>[c(s(P),null,{default:u((()=>[c(s(N),{slot:"start"},{default:u((()=>[c(s(V),{color:"primary"})])),_:1}),c(s(I),null,{default:u((()=>[h("Poll Manager")])),_:1})])),_:1})])),_:1}),c(s(j),null,{default:u((()=>[_e,Se,c(s(E),{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),value:"tab2"},{default:u((()=>[c(s(J),{value:"tab2"},{default:u((()=>[h(" View Polls ")])),_:1}),c(s(J),{value:"tab1"},{default:u((()=>[h(" Create Poll ")])),_:1})])),_:1},8,["modelValue"]),"tab1"===l.value?(n(),i("div",Ce,[c(re)])):m("",!0),"tab2"===l.value?(n(),i("div",Te,[c(xe)])):m("",!0)])),_:1})])),_:1}))}},[["__scopeId","data-v-b00479e2"]]))}}}));
