<<<<<<<< HEAD:gcappsite/dist/assets/keyboard-45222d26.js
import{a5 as t}from"./index-b21449cd.js";/*!
========
import{a5 as t}from"./index-b630ef90.js";/*!
>>>>>>>> d0a60aa96b8b6f4235714f42522fb57383b9683c:gcappsite/dist/assets/keyboard-038fec33.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const r=()=>{if(t!==void 0)return t.Capacitor};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var n;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(n||(n={}));var o;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(o||(o={}));const a={getEngine(){const e=r();if(e!=null&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return e!=null&&e.getResizeMode?e.getResizeMode().catch(i=>{if(i.code!==n.Unimplemented)throw i}):Promise.resolve(void 0)}};export{a as K,o as a};
