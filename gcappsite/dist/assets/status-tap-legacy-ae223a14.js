<<<<<<<< HEAD:gcappsite/dist/assets/status-tap-legacy-1dd5d8c8.js
System.register(["./index-legacy-8324cbf8.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.Z,r=e.$,s=e.a0,o=e.a1,i=e.a2}],execute:function(){
========
System.register(["./index-legacy-ab96502f.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.Z,r=e.$,s=e.a0,o=e.a1,i=e.a2}],execute:function(){
>>>>>>>> d0a60aa96b8b6f4235714f42522fb57383b9683c:gcappsite/dist/assets/status-tap-legacy-ae223a14.js
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=r(a);c&&new Promise((e=>s(c,e))).then((()=>{o((async()=>{c.style.setProperty("--overflow","hidden"),await i(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
