(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1OJ9":function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return e});const e=()=>{const l=window.TapticEngine;l&&l.selection()},u=()=>{const l=window.TapticEngine;l&&l.gestureSelectionStart()},i=()=>{const l=window.TapticEngine;l&&l.gestureSelectionChanged()},o=()=>{const l=window.TapticEngine;l&&l.gestureSelectionEnd()}},"3QqI":function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return u});class e{constructor(l,n){this.x=l,this.y=n}}const u=(l,n,t,e,u)=>{const a=o(l.y,n.y,t.y,e.y,u);return i(l.x,n.x,t.x,e.x,a[0])},i=(l,n,t,e,u)=>u*(3*n*Math.pow(u-1,2)+u*(-3*t*u+3*t+e*u))-l*Math.pow(u-1,3),o=(l,n,t,e,u)=>a((e-=u)-3*(t-=u)+3*(n-=u)-(l-=u),3*t-6*n+3*l,3*n-3*l,l).filter(l=>l>=0&&l<=1),a=(l,n,t,e)=>{if(0===l)return((l,n,t)=>{const u=n*n-4*l*e;return u<0?[]:[(-n+Math.sqrt(u))/(2*l),(-n-Math.sqrt(u))/(2*l)]})(n,t);const u=(3*(t/=l)-(n/=l)*n)/3,i=(2*n*n*n-9*n*t+27*(e/=l))/27;if(0===u)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-u),-Math.sqrt(-u)];const o=Math.pow(i/2,2)+Math.pow(u/3,3);if(0===o)return[Math.pow(i/2,.5)-n/3];if(o>0)return[Math.pow(-i/2+Math.sqrt(o),1/3)-Math.pow(i/2+Math.sqrt(o),1/3)-n/3];const a=Math.sqrt(Math.pow(-u/3,3)),r=Math.acos(-i/(2*Math.sqrt(Math.pow(-u/3,3)))),s=2*Math.pow(a,1/3);return[s*Math.cos(r/3)-n/3,s*Math.cos((r+2*Math.PI)/3)-n/3,s*Math.cos((r+4*Math.PI)/3)-n/3]}},"9Xoc":function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return r}),t.d(n,"c",function(){return a}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return h}),t.d(n,"f",function(){return i}),t.d(n,"g",function(){return u}),t.d(n,"h",function(){return b}),t.d(n,"i",function(){return s}),t.d(n,"j",function(){return c}),t.d(n,"k",function(){return o});const e=l=>{"requestIdleCallback"in window?window.requestIdleCallback(l):setTimeout(l,32)},u=l=>!!l.shadowRoot&&!!l.attachShadow,i=l=>{const n=l.closest("ion-item");return n?n.querySelector("ion-label"):null},o=(l,n,t,e,i)=>{if(l||u(n)){let l=n.querySelector("input.aux-input");l||((l=n.ownerDocument.createElement("input")).type="hidden",l.classList.add("aux-input"),n.appendChild(l)),l.disabled=i,l.name=t,l.value=e||""}},a=(l,n,t)=>Math.max(l,Math.min(n,t)),r=(l,n)=>{if(!l){const l="ASSERT: "+n;throw console.error(l),new Error(l)}},s=l=>l.timeStamp||Date.now(),c=l=>{if(l){const n=l.changedTouches;if(n&&n.length>0){const l=n[0];return{x:l.clientX,y:l.clientY}}if(void 0!==l.pageX)return{x:l.pageX,y:l.pageY}}return{x:0,y:0}},b=l=>{const n="rtl"===document.dir;switch(l){case"start":return n;case"end":return!n;default:throw new Error(`"${l}" is not a valid value for [side]. Use "start" or "end" instead.`)}},d=(l,n)=>{const t=l._original||l;return{_original:l,emit:h(t.emit.bind(t),n)}},h=(l,n=0)=>{let t;return(...e)=>{clearTimeout(t),t=setTimeout(l,n,...e)}}},GZS0:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),i=t("dKRk"),o=t("ZZ/e");class a{constructor(l,n,t,e){this.apiJai=l,this.modalController=n,this.alertController=t,this.loadingController=e}ngOnInit(){}presentLoading(){return u.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Carregando..."}),yield this.loading.present()})}dismiss(){this.modalController.dismiss()}doCheck(l){this.presentLoading();const n=new Date;this.apiJai.getCheck().then(t=>{const e=t.filter(l=>l[0]===this.id);"in"===l&&e.length>0?(this.presentAlert("Check-in j\xe1 realizado",l),this.loading&&this.loading.dismiss()):"out"===l&&e.findIndex(l=>"out"===l[4])>-1?(this.presentAlert("Check-out j\xe1 realizado",l),this.loading&&this.loading.dismiss()):"out"===l&&e.findIndex(l=>"in"===l[4])<0?(this.presentAlert("Check-in ainda n\xe3o realizado",l),this.loading&&this.loading.dismiss()):this.apiJai.setCheck(this.id,this.nome,n.toLocaleDateString(),n.toLocaleTimeString(),l).then(n=>{this.loading&&this.loading.dismiss(),this.presentSetAlert(l)})})}presentSetAlert(l){return u.b(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Check-"+l,message:"Check-"+l+" realizado",buttons:["OK"]});yield n.present()})}presentAlert(l,n){return u.b(this,void 0,void 0,function*(){const t=yield this.alertController.create({header:"Check-"+n,message:l,buttons:["OK"]});yield t.present()})}}class r{constructor(l,n,t){this.apiJai=l,this.modalController=n,this.loadingController=t,this.trabalhos=[],this.avaliadores=[],this.avaliadoresFiltered=[],this.avaliacoes=[],this.checks=[]}ngOnInit(){this.presentLoading(),this.updateLists()}presentLoading(){return u.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Carregando..."}),yield this.loading.present()})}updateLists(){this.apiJai.getTrabalhos().then(l=>{this.apiJai.getAvaliacoes().then(n=>{this.apiJai.getCheck().then(t=>{this.trabalhos=l,this.avaliacoes=n,this.checks=t,l.map(l=>{-1===this.avaliadores.findIndex(n=>n.id===l[1])&&this.avaliadores.push({id:l[1],nome:l[0]})}),this.avaliadoresFiltered=this.avaliadores,this.loading&&this.loading.dismiss()})})})}getItems(l){const n=l.target.value.toLowerCase();this.avaliadoresFiltered=this.avaliadores.filter(l=>l.nome.toLowerCase().includes(n))}presentAvaliador(l){return u.b(this,void 0,void 0,function*(){const n=this.trabalhos.filter(n=>n[1]===l.id);for(const e of n)this.avaliacoes.findIndex(l=>l[0]===e[2])>-1?e.push("3"):this.checks.findIndex(n=>n[0]===l.id&&n[2]===e[7])>-1?e.push("2"):e.push("1");const t=yield this.modalController.create({component:a,componentProps:{id:l.id,nome:l.nome,trabalhos:n}});return yield t.present()})}}class s{}var c=t("pMnS"),b=t("oBZk"),d=t("s7LF"),h=t("SVse"),p=e.ob({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.presentAvaliador(l.context.$implicit)&&e),e},b.F,b.k)),e.pb(1,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,2,"ion-label",[],null,null,null,b.G,b.l)),e.pb(3,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(4,0,[" "," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.nome)})}function f(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,6,"ion-header",[],null,null,null,b.D,b.i)),e.pb(1,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,b.P,b.u)),e.pb(3,49152,null,0,o.zb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,b.O,b.t)),e.pb(5,49152,null,0,o.xb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Avaliadores"])),(l()(),e.qb(7,0,null,null,9,"ion-content",[["class","ion-padding"]],null,null,null,b.C,b.h)),e.pb(8,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Cb(l,12)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Cb(l,12)._handleInputEvent(t.target)&&u),"ionInput"===n&&(u=!1!==i.getItems(t)&&u),u},b.I,b.n)),e.Db(5120,null,d.b,function(l){return[l]},[o.Jb]),e.pb(11,49152,null,0,o.hb,[e.h,e.k,e.x],null,null),e.pb(12,16384,null,0,o.Jb,[e.k],null,null),(l()(),e.qb(13,0,null,0,3,"ion-list",[],null,null,null,b.H,b.m)),e.pb(14,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,g)),e.pb(16,278528,null,0,h.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,16,0,t.avaliadoresFiltered)},null)}function m(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"app-avaliador",[],null,null,null,f,p)),e.pb(1,114688,null,0,r,[i.a,o.Eb,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var v=e.mb("app-avaliador",r,m,{},{},[]),C=e.ob({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"p",[["style","color: #32CD32;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Avaliado"]))],null,null)}function x(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"p",[["style","color: #FF0000;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["N\xe3o Avaliado"]))],null,null)}function y(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"p",[["style","color: #FFA500;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Em Andamento"]))],null,null)}function q(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,17,"ion-item",[],null,null,null,b.F,b.k)),e.pb(1,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,15,"ion-label",[],null,null,null,b.G,b.l)),e.pb(3,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Gb(5,null,["",""])),(l()(),e.qb(6,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(7,null,["",""])),(l()(),e.qb(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(9,null,["Data: "," - ",""])),(l()(),e.qb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(11,null,["Local: "," ",""])),(l()(),e.fb(16777216,null,0,1,null,k)),e.pb(13,16384,null,0,h.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,x)),e.pb(15,16384,null,0,h.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,y)),e.pb(17,16384,null,0,h.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,13,0,"3"===n.context.$implicit[14]),l(n,15,0,"1"===n.context.$implicit[14]),l(n,17,0,"2"===n.context.$implicit[14])},function(l,n){l(n,5,0,n.context.$implicit[3]),l(n,7,0,n.context.$implicit[4]),l(n,9,0,n.context.$implicit[7],n.context.$implicit[8]),l(n,11,0,n.context.$implicit[9],n.context.$implicit[10])})}function w(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,12,"ion-header",[],null,null,null,b.D,b.i)),e.pb(1,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,b.P,b.u)),e.pb(3,49152,null,0,o.zb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,b.O,b.t)),e.pb(5,49152,null,0,o.xb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(6,0,["",""])),(l()(),e.qb(7,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,b.x,b.c)),e.pb(8,49152,null,0,o.j,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.dismiss()&&e),e},b.w,b.b)),e.pb(10,49152,null,0,o.i,[e.h,e.k,e.x],null,null),(l()(),e.qb(11,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,b.E,b.j)),e.pb(12,49152,null,0,o.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(13,0,null,null,14,"ion-content",[["class","ion-padding"]],null,null,null,b.C,b.h)),e.pb(14,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(15,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.doCheck("in")&&e),e},b.w,b.b)),e.pb(17,49152,null,0,o.i,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Check-in"])),(l()(),e.qb(19,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.doCheck("out")&&e),e},b.w,b.b)),e.pb(20,49152,null,0,o.i,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Check-out"])),(l()(),e.qb(22,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Trabalhos:"])),(l()(),e.qb(24,0,null,0,3,"ion-list",[],null,null,null,b.H,b.m)),e.pb(25,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,q)),e.pb(27,278528,null,0,h.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,12,0,"close"),l(n,27,0,t.trabalhos)},function(l,n){l(n,6,0,n.component.nome)})}function A(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"app-avaliador-modal",[],null,null,null,w,C)),e.pb(1,114688,null,0,a,[i.a,o.Eb,o.a,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var M=e.mb("app-avaliador-modal",a,A,{id:"id",nome:"nome",trabalhos:"trabalhos"},{},[]),E=t("iInd");t.d(n,"AvaliadorPageModuleNgFactory",function(){return I});var I=e.nb(s,[],function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[c.a,v,M]],[3,e.j],e.v]),e.Ab(4608,h.k,h.j,[e.s,[2,h.q]]),e.Ab(4608,d.g,d.g,[]),e.Ab(4608,o.b,o.b,[e.x,e.g]),e.Ab(4608,o.Eb,o.Eb,[o.b,e.j,e.p]),e.Ab(4608,o.Hb,o.Hb,[o.b,e.j,e.p]),e.Ab(1073742336,h.b,h.b,[]),e.Ab(1073742336,d.f,d.f,[]),e.Ab(1073742336,d.a,d.a,[]),e.Ab(1073742336,o.Bb,o.Bb,[]),e.Ab(1073742336,E.n,E.n,[[2,E.s],[2,E.m]]),e.Ab(1073742336,s,s,[]),e.Ab(1024,E.k,function(){return[[{path:"",component:r}]]},[])])})},YWFk:function(l,n,t){"use strict";t.d(n,"a",function(){return e});const e=l=>{try{if("string"!=typeof l||""===l)return l;const t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=l,a.forEach(l=>{const n=t.querySelectorAll(l);for(let e=n.length-1;e>=0;e--){const l=n[e];l.parentNode?l.parentNode.removeChild(l):t.removeChild(l);const o=i(l);for(let n=0;n<o.length;n++)u(o[n])}});const o=i(t);for(let l=0;l<o.length;l++)u(o[l]);const r=document.createElement("div");r.appendChild(t);const s=r.querySelector("div");return null!==s?s.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},u=l=>{if(l.nodeType&&1!==l.nodeType)return;for(let t=l.attributes.length-1;t>=0;t--){const n=l.attributes[t],e=n.name;if(!o.includes(e.toLowerCase())){l.removeAttribute(e);continue}const u=n.value;null!=u&&u.toLowerCase().includes("javascript:")&&l.removeAttribute(e)}const n=i(l);for(let t=0;t<n.length;t++)u(n[t])},i=l=>null!=l.children?l.children:l.childNodes,o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},ckTY:function(l,n,t){"use strict";t.d(n,"a",function(){return C}),t.d(n,"b",function(){return m}),t.d(n,"c",function(){return k}),t.d(n,"d",function(){return i});var e=t("S6Yj"),u=t("igpV");const i=l=>new Promise((n,t)=>{Object(e.n)(()=>{o(l),a(l).then(t=>{t.animation&&t.animation.destroy(),r(l),n(t)},n=>{r(l),t(n)})})}),o=l=>{const n=l.enteringEl,t=l.leavingEl;x(n,t,l.direction),l.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),k(n,!1),t&&k(t,!1)},a=async l=>{const n=await s(l);return n?c(n,l):b(l)},r=l=>{const n=l.leavingEl;l.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=async l=>{if(l.leavingEl&&l.animated&&0!==l.duration)return l.animationBuilder?l.animationBuilder:"ios"===l.mode?(await(()=>t.e(96).then(t.bind(null,"Nsvw")))()).iosTransitionAnimation:(await(()=>t.e(97).then(t.bind(null,"nPxl")))()).mdTransitionAnimation},c=async(l,n)=>{let e;await d(n,!0);try{const u=await t.e(6).then(t.bind(null,"vK52"));e=await u.create(l,n.baseEl,n)}catch(i){e=l(n.baseEl,n)}g(n.enteringEl,n.leavingEl);const u=await p(e,n);return e.hasCompleted=u,n.progressCallback&&n.progressCallback(void 0),e.hasCompleted&&f(n.enteringEl,n.leavingEl),{hasCompleted:e.hasCompleted,animation:e}},b=async l=>{const n=l.enteringEl,t=l.leavingEl;return await d(l,!1),g(n,t),f(n,t),{hasCompleted:!0}},d=async(l,n)=>{const t=(void 0!==l.deepWait?l.deepWait:n)?[C(l.enteringEl),C(l.leavingEl)]:[v(l.enteringEl),v(l.leavingEl)];await Promise.all(t),await h(l.viewIsReady,l.enteringEl)},h=async(l,n)=>{l&&await l(n)},p=(l,n)=>{const t=n.progressCallback,e=new Promise(n=>l.onFinish(n));return t?(l.progressStart(!0),t(l)):l.play(),e},g=(l,n)=>{m(n,u.c),m(l,u.a)},f=(l,n)=>{m(l,u.b),m(n,u.d)},m=(l,n)=>{if(l){const t=new CustomEvent(n,{bubbles:!1,cancelable:!1});l.dispatchEvent(t)}},v=l=>l&&l.componentOnReady?l.componentOnReady():Promise.resolve(),C=async l=>{const n=l;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(C))}},k=(l,n)=>{n?(l.setAttribute("aria-hidden","true"),l.classList.add("ion-page-hidden")):(l.hidden=!1,l.removeAttribute("aria-hidden"),l.classList.remove("ion-page-hidden"))},x=(l,n,t)=>{void 0!==l&&(l.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")}},pyhm:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return e}),t.d(n,"d",function(){return a});const e=(l,n)=>null!==n.closest(l),u=l=>"string"==typeof l&&l.length>0?{"ion-color":!0,[`ion-color-${l}`]:!0}:void 0,i=l=>{const n={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(l).forEach(l=>n[l]=!0),n},o=/^[a-z][a-z0-9+\-.]*:/,a=async(l,n,t)=>{if(null!=l&&"#"!==l[0]&&!o.test(l)){const e=document.querySelector("ion-router");if(e)return null!=n&&n.preventDefault(),e.push(l,t)}return!1}},tkfp:function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return u});const e=async(l,n,t,e,u)=>{if(l)return l.attachViewToDom(n,t,u,e);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t;return e&&e.forEach(l=>i.classList.add(l)),u&&Object.assign(i,u),n.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},u=(l,n)=>{if(n){if(l)return l.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},wmzg:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),i=t("dKRk"),o=t("ZZ/e");class a{constructor(l,n){this.apiJai=l,this.loadingController=n,this.avaliadores=[],this.dates=[],this.locations=[],this.trabalhos=[],this.trabalhosFiltered=[]}ngOnInit(){this.presentLoading(),this.updateDays()}presentLoading(){return u.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Carregando..."}),yield this.loading.present()})}updateDays(){this.apiJai.getDays().then(l=>{console.log(l),l&&(this.dates=l,this.dateModel=this.dates[0],this.updateTrabalhos())},l=>{console.log(l)})}updateTrabalhos(){this.apiJai.getValuesByDay(this.dateModel).then(l=>{this.locations=l.map(l=>l[9]).filter((l,n,t)=>t.indexOf(l)===n).sort(),this.trabalhos=l,this.filterTrabalhos()})}filterTrabalhos(){this.trabalhosFiltered=[...this.trabalhos],this.locationModel&&(this.trabalhosFiltered=this.trabalhosFiltered.filter(l=>l[9]===this.locationModel)),this.updateAvaliadores()}clearFilter(){this.locationModel=null,this.trabalhosFiltered=[...this.trabalhos]}updateAvaliadores(){this.apiJai.getCheck().then(l=>{l=l.filter(l=>l[2]===this.dateModel);const n=this.trabalhosFiltered.filter(n=>-1===l.findIndex(l=>l[0]===n[1])).map(l=>l[0]).filter((l,n,t)=>t.indexOf(l)===n);this.avaliadores=this.shuffleArray(n),this.loading&&this.loading.dismiss()})}shuffleArray(l){for(let n=l.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[l[n],l[t]]=[l[t],l[n]]}return l}}class r{}var s=t("pMnS"),c=t("oBZk"),b=t("s7LF"),d=t("SVse"),h=e.ob({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,c.J,c.p)),e.pb(1,49152,null,0,o.lb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(2,0,["",""]))],function(l,n){l(n,1,0,e.ub(1,"",n.context.$implicit,""))},function(l,n){l(n,2,0,n.context.$implicit)})}function g(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,c.J,c.p)),e.pb(1,49152,null,0,o.lb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(2,0,["",""]))],function(l,n){l(n,1,0,e.ub(1,"",n.context.$implicit,""))},function(l,n){l(n,2,0,n.context.$implicit)})}function f(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,2,"ion-item",[],null,null,null,c.F,c.k)),e.pb(1,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.Gb(2,0,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function m(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,6,"ion-header",[],null,null,null,c.D,c.i)),e.pb(1,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,c.P,c.u)),e.pb(3,49152,null,0,o.zb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,c.O,c.t)),e.pb(5,49152,null,0,o.xb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Avaliadores Ausentes"])),(l()(),e.qb(7,0,null,null,40,"ion-content",[],null,null,null,c.C,c.h)),e.pb(8,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,33,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,29,"ion-list",[],null,null,null,c.H,c.m)),e.pb(11,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.qb(12,0,null,0,13,"ion-item",[],null,null,null,c.F,c.k)),e.pb(13,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,2,"ion-label",[],null,null,null,c.G,c.l)),e.pb(15,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Data"])),(l()(),e.qb(17,0,null,0,8,"ion-select",[["placeholder","Selecione uma data"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Cb(l,18)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Cb(l,18)._handleChangeEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(i.dateModel=t)&&u),"ionChange"===n&&(u=!1!==i.updateTrabalhos()&&u),u},c.K,c.o)),e.pb(18,16384,null,0,o.Ib,[e.k],null,null),e.Db(1024,null,b.b,function(l){return[l]},[o.Ib]),e.pb(20,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,b.c,null,[b.e]),e.pb(22,16384,null,0,b.d,[[4,b.c]],null,null),e.pb(23,49152,null,0,o.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(l()(),e.fb(16777216,null,0,1,null,p)),e.pb(25,278528,null,0,d.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(26,0,null,0,13,"ion-item",[],null,null,null,c.F,c.k)),e.pb(27,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(28,0,null,0,2,"ion-label",[],null,null,null,c.G,c.l)),e.pb(29,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Local"])),(l()(),e.qb(31,0,null,0,8,"ion-select",[["placeholder","Selecione um local"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Cb(l,32)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Cb(l,32)._handleChangeEvent(t.target)&&u),"ngModelChange"===n&&(u=!1!==(i.locationModel=t)&&u),"ionChange"===n&&(u=!1!==i.filterTrabalhos()&&u),u},c.K,c.o)),e.pb(32,16384,null,0,o.Ib,[e.k],null,null),e.Db(1024,null,b.b,function(l){return[l]},[o.Ib]),e.pb(34,671744,null,0,b.e,[[8,null],[8,null],[8,null],[6,b.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,b.c,null,[b.e]),e.pb(36,16384,null,0,b.d,[[4,b.c]],null,null),e.pb(37,49152,null,0,o.kb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(l()(),e.fb(16777216,null,0,1,null,g)),e.pb(39,278528,null,0,d.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(40,0,null,null,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.clearFilter()&&e),e},c.w,c.b)),e.pb(41,49152,null,0,o.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Gb(-1,0,["Limpar filtro"])),(l()(),e.qb(43,0,null,0,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.qb(44,0,null,null,3,"ion-list",[],null,null,null,c.H,c.m)),e.pb(45,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,f)),e.pb(47,278528,null,0,d.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,20,0,t.dateModel),l(n,23,0,"Selecione uma data"),l(n,25,0,t.dates),l(n,34,0,t.locationModel),l(n,37,0,"Selecione um local"),l(n,39,0,t.locations),l(n,41,0,"primary","block"),l(n,47,0,t.avaliadores)},function(l,n){l(n,17,0,e.Cb(n,22).ngClassUntouched,e.Cb(n,22).ngClassTouched,e.Cb(n,22).ngClassPristine,e.Cb(n,22).ngClassDirty,e.Cb(n,22).ngClassValid,e.Cb(n,22).ngClassInvalid,e.Cb(n,22).ngClassPending),l(n,31,0,e.Cb(n,36).ngClassUntouched,e.Cb(n,36).ngClassTouched,e.Cb(n,36).ngClassPristine,e.Cb(n,36).ngClassDirty,e.Cb(n,36).ngClassValid,e.Cb(n,36).ngClassInvalid,e.Cb(n,36).ngClassPending)})}function v(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"app-avaliadores-ausentes",[],null,null,null,m,h)),e.pb(1,114688,null,0,a,[i.a,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var C=e.mb("app-avaliadores-ausentes",a,v,{},{},[]),k=t("iInd");t.d(n,"AvaliadoresAusentesPageModuleNgFactory",function(){return x});var x=e.nb(r,[],function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[s.a,C]],[3,e.j],e.v]),e.Ab(4608,d.k,d.j,[e.s,[2,d.q]]),e.Ab(4608,b.g,b.g,[]),e.Ab(4608,o.b,o.b,[e.x,e.g]),e.Ab(4608,o.Eb,o.Eb,[o.b,e.j,e.p]),e.Ab(4608,o.Hb,o.Hb,[o.b,e.j,e.p]),e.Ab(1073742336,d.b,d.b,[]),e.Ab(1073742336,b.f,b.f,[]),e.Ab(1073742336,b.a,b.a,[]),e.Ab(1073742336,o.Bb,o.Bb,[]),e.Ab(1073742336,k.n,k.n,[[2,k.s],[2,k.m]]),e.Ab(1073742336,r,r,[]),e.Ab(1024,k.k,function(){return[[{path:"",component:a}]]},[])])})},xtjw:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),i=t("dKRk"),o=t("ZZ/e");class a{constructor(l,n){this.apiJai=l,this.loadingController=n}ngOnInit(){this.presentLoading(),this.updateTrabalhos()}presentLoading(){return u.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Carregando..."}),yield this.loading.present()})}updateTrabalhos(){this.apiJai.getTrabalhos().then(l=>{this.trabalhos=l,this.trabalhosFiltered=l,this.loading&&this.loading.dismiss()})}getItems(l){const n=l.target.value.toLowerCase();this.trabalhosFiltered=this.trabalhos.filter(l=>{const t=String(l[2]),e=l[4];return t.includes(n)||e.toLowerCase().includes(n)})}}class r{}var s=t("pMnS"),c=t("oBZk"),b=t("s7LF"),d=t("SVse"),h=e.ob({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,13,"ion-item",[],null,null,null,c.F,c.k)),e.pb(1,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,11,"ion-label",[],null,null,null,c.G,c.l)),e.pb(3,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Gb(5,null,["",""])),(l()(),e.qb(6,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Gb(7,null,["",""])),(l()(),e.qb(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(9,null,["Avaliador: ",""])),(l()(),e.qb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(11,null,["Data: "," - ",""])),(l()(),e.qb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(13,null,["Local: "," ",""]))],null,function(l,n){l(n,5,0,n.context.$implicit[3]),l(n,7,0,n.context.$implicit[4]),l(n,9,0,n.context.$implicit[0]),l(n,11,0,n.context.$implicit[7],n.context.$implicit[8]),l(n,13,0,n.context.$implicit[9],n.context.$implicit[10])})}function g(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,6,"ion-header",[],null,null,null,c.D,c.i)),e.pb(1,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,c.P,c.u)),e.pb(3,49152,null,0,o.zb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,2,"ion-title",[],null,null,null,c.O,c.t)),e.pb(5,49152,null,0,o.xb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Trabalhos"])),(l()(),e.qb(7,0,null,null,9,"ion-content",[["class","ion-padding"]],null,null,null,c.C,c.h)),e.pb(8,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(9,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==e.Cb(l,12)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Cb(l,12)._handleInputEvent(t.target)&&u),"ionInput"===n&&(u=!1!==i.getItems(t)&&u),u},c.I,c.n)),e.Db(5120,null,b.b,function(l){return[l]},[o.Jb]),e.pb(11,49152,null,0,o.hb,[e.h,e.k,e.x],null,null),e.pb(12,16384,null,0,o.Jb,[e.k],null,null),(l()(),e.qb(13,0,null,0,3,"ion-list",[],null,null,null,c.H,c.m)),e.pb(14,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,p)),e.pb(16,278528,null,0,d.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,16,0,t.trabalhosFiltered)},null)}function f(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"app-trabalho",[],null,null,null,g,h)),e.pb(1,114688,null,0,a,[i.a,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var m=e.mb("app-trabalho",a,f,{},{},[]),v=t("iInd");t.d(n,"TrabalhoPageModuleNgFactory",function(){return C});var C=e.nb(r,[],function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[s.a,m]],[3,e.j],e.v]),e.Ab(4608,d.k,d.j,[e.s,[2,d.q]]),e.Ab(4608,b.g,b.g,[]),e.Ab(4608,o.b,o.b,[e.x,e.g]),e.Ab(4608,o.Eb,o.Eb,[o.b,e.j,e.p]),e.Ab(4608,o.Hb,o.Hb,[o.b,e.j,e.p]),e.Ab(1073742336,d.b,d.b,[]),e.Ab(1073742336,b.f,b.f,[]),e.Ab(1073742336,b.a,b.a,[]),e.Ab(1073742336,o.Bb,o.Bb,[]),e.Ab(1073742336,v.n,v.n,[[2,v.s],[2,v.m]]),e.Ab(1073742336,r,r,[]),e.Ab(1024,v.k,function(){return[[{path:"",component:a}]]},[])])})}}]);