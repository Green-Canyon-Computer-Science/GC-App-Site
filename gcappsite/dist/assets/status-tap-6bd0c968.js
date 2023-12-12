<<<<<<<< HEAD:gcappsite/dist/assets/status-tap-12e91873.js
import{Z as r,$ as i,a0 as c,a1 as d,a2 as l}from"./index-b21449cd.js";/*!
========
import{Z as r,$ as i,a0 as c,a1 as d,a2 as l}from"./index-b630ef90.js";/*!
>>>>>>>> d0a60aa96b8b6f4235714f42522fb57383b9683c:gcappsite/dist/assets/status-tap-6bd0c968.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",()=>{r(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(a=>c(t,a)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{m as startStatusTap};
