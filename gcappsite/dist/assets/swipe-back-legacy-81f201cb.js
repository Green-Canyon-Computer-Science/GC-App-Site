<<<<<<<< HEAD:gcappsite/dist/assets/swipe-back-legacy-81f201cb.js
System.register(["./index-legacy-8324cbf8.js","./index3-legacy-cb29f241.js"],(function(e,t){"use strict";var n,r,s;return{setters:[e=>{n=e.R,r=e.S},e=>{s=e.createGesture}],execute:function(){
========
System.register(["./index-legacy-ab96502f.js","./index3-legacy-ae794d32.js"],(function(e,t){"use strict";var n,r,s;return{setters:[e=>{n=e.R,r=e.S},e=>{s=e.createGesture}],execute:function(){
>>>>>>>> d0a60aa96b8b6f4235714f42522fb57383b9683c:gcappsite/dist/assets/swipe-back-legacy-a9af148d.js
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
e("createSwipeBackGesture",((e,t,i,c,o)=>{const a=e.ownerDocument.defaultView;let u=n(e);const l=e=>u?-e.deltaX:e.deltaX;return s({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(u=n(e),(e=>{const{startX:t}=e;return u?t>=a.innerWidth-50:t<=50})(r)&&t()),onStart:i,onMove:e=>{const t=l(e)/a.innerWidth;c(t)},onEnd:e=>{const t=l(e),n=a.innerWidth,s=t/n,i=(e=>u?-e.velocityX:e.velocityX)(e),c=i>=0&&(i>.2||t>n/2),d=(c?1-s:s)*n;let h=0;if(d>5){const e=d/Math.abs(i);h=Math.min(e,540)}o(c,s<=0?.01:r(0,s,.9999),h)}})}))}}}));
