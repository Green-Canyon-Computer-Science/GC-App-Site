System.register(["./index-legacy-1828e598.js"],(function(e,t){"use strict";var n,a,l,o,i,d,c,r,u,s,m,f,p,v,h,g,b,y,x,w,_,k,A,S,C,V,q,T,j,I,E,z,D;return{setters:[e=>{n=e._,a=e.r,l=e.a,o=e.o,i=e.c,d=e.d,c=e.w,r=e.u,u=e.I,s=e.e,m=e.b,f=e.f,p=e.g,v=e.h,h=e.p,g=e.q,b=e.t,y=e.s,x=e.m,w=e.F,_=e.i,k=e.j,A=e.x,S=e.y,C=e.z,V=e.A,q=e.B,T=e.C,j=e.D,I=e.E,E=e.l,z=e.G,D=e.H}],execute:function(){var t=document.createElement("style");t.textContent="textarea{background-color:#fff!important}#markdowneditor[data-v-247b14f6]{width:80%;margin:10px!important}h1[data-v-247b14f6],h2[data-v-247b14f6]{text-align:center}.questionContainer[data-v-247b14f6],ion-card-content[data-v-247b14f6]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}button[data-v-247b14f6]{width:50px;height:50px;font-size:50px;border-radius:50px}.division[data-v-247b14f6]{position:relative;width:80%;height:3px;background-color:#fff;left:50%;transform:translate(-50%);margin:20px}ion-input[data-v-247b14f6]{background-color:#3e3e3e;margin-bottom:6px;font-size:20px}ion-card[data-v-247b14f6]{width:80%;padding:1px;margin:5px}#id[data-v-247b14f6]{overflow:scroll}ion-item ion-radio[data-v-247b14f6]{font-size:17px}ion-item[data-v-247b14f6]{width:400px}.buttons[data-v-47660b60]{position:relative;display:flex;flex-direction:row;width:100%;padding:0!important}.buttons button[data-v-47660b60]{margin:0}button[data-v-47660b60]{width:90px;height:30px}.full[data-v-47660b60]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}ion-list[data-v-9b98820d]{margin:20px}h1[data-v-9b98820d]{text-align:center;width:100%}.left[data-v-9b98820d]{position:relative;width:100%}.div[data-v-9b98820d]{display:flex;flex-direction:row;width:100%;padding-right:50px;padding-left:50px}.centercontent[data-v-9b98820d]{display:flex;flex-direction:column;align-items:center;justify-content:center}.division[data-v-73c6766e]{position:relative;width:80%;height:3px;background-color:#fff;left:50%;transform:translate(-50%)}h1[data-v-73c6766e],h2[data-v-73c6766e]{text-align:center}\n",document.head.appendChild(t);const O=e=>(h("data-v-247b14f6"),e=e(),g(),e),N={class:"questionContainer"},G=["src"],J=O((()=>m("br",null,null,-1))),M=O((()=>m("h1",null,"Send with notification",-1))),P={id:"markdowneditor"},U=n({__name:"AnnouncementCreator",setup(e){const t=a(""),n=a("");function h(){const e=document.querySelectorAll("#title")[0].value,n=document.querySelectorAll("#desc")[0].value,a=document.querySelectorAll("#imglink")[0].value;console.log("Creating "+e+" with description "+n),fetch("https://greencanyonapp.com/api/announcements",{method:"POST",body:JSON.stringify({timestamp:(new Date).getTime()/1e3,title:e,descr:n,imglink:a,article:t.value,key:localStorage.getItem("key")}),headers:{"Content-Type":"application/json"}}).then((e=>{e.ok?(location.reload(),alert("Poll created!")):alert("There was an error creating poll. Are you sure you have a key saved?")})).catch((e=>{alert("An unknown error occurred.")}));const l=document.querySelectorAll("#allnotif")[0].checked,o=document.querySelectorAll("#gamesnotif")[0].checked,i=document.querySelectorAll("#eventsnotif")[0].checked,d=document.querySelectorAll("#schedulenotif")[0].checked;if(l||o||i||d){let t="";l&&(t="all"),o&&(t="game"),i&&(t="event"),d&&(t="schedule"),console.log("Sending notification to "+t),fetch("https://greencanyonapp.com/api/notification",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:t,title:"New announcement!",body:e,key:localStorage.getItem("key")})})}}return(e,a)=>{const g=l("v-md-editor");return o(),i("div",N,[d(r(v),null,{default:c((()=>[d(r(u),null,{default:c((()=>[d(r(s),{placeholder:"Announcement Title",label:"",id:"title"}),d(r(s),{placeholder:"Announcement Description",label:"",id:"desc"}),d(r(s),{placeholder:"Image Link",label:"",id:"imglink",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e)},null,8,["modelValue"]),m("img",{src:n.value,alt:"",style:{border:"1px solid white","max-height":"165px"}},null,8,G),J,M,d(r(f),{"label-placement":"fixed",class:"check",id:"allnotif"},{default:c((()=>[p("All")])),_:1}),d(r(f),{"label-placement":"fixed",class:"check",id:"eventsnotif"},{default:c((()=>[p("Events")])),_:1}),d(r(f),{"label-placement":"fixed",class:"check",id:"gamesnotif"},{default:c((()=>[p("Games")])),_:1}),d(r(f),{"label-placement":"fixed",class:"check",id:"schedulenotif"},{default:c((()=>[p("Schedule")])),_:1})])),_:1})])),_:1}),m("div",P,[d(g,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),height:"400px"},null,8,["modelValue"])]),m("button",{style:{width:"50%","font-size":"30px","margin-bottom":"15px"},onClick:h}," Create Announcement ")])}}},[["__scopeId","data-v-247b14f6"]]),L={class:"full"},R={style:{color:"gray"}},B={class:"buttons full"},F=["src"],H=n({__name:"AnnouncementView",props:["announcement"],emits:["responses"],setup(e,{emit:t}){const n=e;function a(e,t){confirm("Are you sure you want to delete announcement "+e+"?")&&function(e){fetch("https://greencanyonapp.com/api/announcements",{method:"DELETE",body:JSON.stringify({key:localStorage.getItem("key"),id:e}),headers:{"Content-Type":"application/json"}}).then((()=>{location.reload()}))}(t)}return(e,t)=>(o(),i("div",L,[m("div",null,[m("h2",null,b(n.announcement.title),1),m("h6",R,b(n.announcement.descr),1),m("div",B,[d(r(x),null,{default:c((()=>[d(r(y),{color:"danger",onClick:t[0]||(t[0]=e=>a(n.announcement.title,n.announcement.id))},{default:c((()=>[p("Delete")])),_:1})])),_:1})])]),m("div",null,[m("img",{src:n.announcement.imglink,alt:"",style:{"max-width":"150px","border-radius":"2px"}},null,8,F)])]))}},[["__scopeId","data-v-47660b60"]]),K={class:"div"},Q=n({__name:"AnnouncementViewer",setup(e){const t=a([]),n=a(-1);return(async()=>{t.value=await(async()=>{try{const e=(await(await fetch("https://greencanyonapp.com/api/announcements?max=100&offset=0&sortbytime=1",{method:"GET"})).json()).data;return console.log(e),e}catch(e){console.error(e)}return[]})(),console.log(t.value)})(),(e,a)=>(o(),i("div",K,[d(r(A),{lines:"inset",class:"left"},{default:c((()=>[(o(!0),i(w,null,_(t.value,(e=>(o(),k(r(x),{key:e},{default:c((()=>[d(H,{onResponses:t=>n.value=e.id,announcement:e},null,8,["onResponses","announcement"])])),_:2},1024)))),128))])),_:1})]))}},[["__scopeId","data-v-9b98820d"]]),W=e=>(h("data-v-73c6766e"),e=e(),g(),e),X=W((()=>m("div",null,[m("h1",null,"Announcement Manager")],-1))),Y=W((()=>m("div",{class:"division"},null,-1))),Z={key:0},$={key:1};e("default",n({__name:"AnnouncementManager",setup(e){const t=a("tab2");return(e,n)=>(o(),k(r(D),null,{default:c((()=>[d(r(T),{translucent:!0},{default:c((()=>[d(r(S),null,{default:c((()=>[d(r(C),{slot:"start"},{default:c((()=>[d(r(V),{color:"primary"})])),_:1}),d(r(q),null,{default:c((()=>[p("Announcement Manager")])),_:1})])),_:1})])),_:1}),d(r(z),null,{default:c((()=>[X,Y,d(r(j),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),value:"tab2"},{default:c((()=>[d(r(I),{value:"tab2"},{default:c((()=>[p(" View Announcements ")])),_:1}),d(r(I),{value:"tab1"},{default:c((()=>[p(" Create Announcement ")])),_:1})])),_:1},8,["modelValue"]),"tab1"===t.value?(o(),i("div",Z,[d(U)])):E("",!0),"tab2"===t.value?(o(),i("div",$,[d(Q)])):E("",!0)])),_:1})])),_:1}))}},[["__scopeId","data-v-73c6766e"]]))}}}));
