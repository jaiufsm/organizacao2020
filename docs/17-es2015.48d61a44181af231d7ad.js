(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"f+ep":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=u("mrSG"),i=u("dKRk"),e=u("ZZ/e");class a{constructor(l,n,u,o){this.apiJai=l,this.alertController=n,this.loadingController=u,this.router=o}ngOnInit(){}doLogin(){this.presentLoading(),this.apiJai.doLogin(this.login,this.password).then(l=>{this.loading&&this.loading.dismiss(),l.success?(console.log("success"),this.router.navigate(["/tabs"])):this.presentAlert(l.message)}).catch(l=>{console.log(l),this.loading&&this.loading.dismiss()})}presentAlert(l){return t.b(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Erro ao entrar",message:l,buttons:["OK"]});yield n.present()})}presentLoading(){return t.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Entrando..."}),yield this.loading.present()})}}class s{}var r=u("pMnS"),b=u("oBZk"),g=u("s7LF"),d=u("iInd"),p=o.ob({encapsulation:0,styles:[[""]],data:{}});function c(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,6,"ion-header",[],null,null,null,b.E,b.i)),o.pb(1,49152,null,0,e.z,[o.h,o.k,o.x],null,null),(l()(),o.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,b.R,b.v)),o.pb(3,49152,null,0,e.zb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.qb(4,0,null,0,2,"ion-title",[],null,null,null,b.Q,b.u)),o.pb(5,49152,null,0,e.xb,[o.h,o.k,o.x],null,null),(l()(),o.Gb(-1,0,["Entrar"])),(l()(),o.qb(7,0,null,null,29,"ion-content",[["class","ion-padding"]],null,null,null,b.D,b.h)),o.pb(8,49152,null,0,e.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(9,0,null,0,11,"ion-item",[],null,null,null,b.H,b.l)),o.pb(10,49152,null,0,e.F,[o.h,o.k,o.x],null,null),(l()(),o.qb(11,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.I,b.m)),o.pb(12,49152,null,0,e.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Gb(-1,0,["Usu\xe1rio"])),(l()(),o.qb(14,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==o.Cb(l,15)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Cb(l,15)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.login=u)&&t),t},b.G,b.k)),o.pb(15,16384,null,0,e.Jb,[o.k],null,null),o.Db(1024,null,g.b,function(l){return[l]},[e.Jb]),o.pb(17,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,g.c,null,[g.e]),o.pb(19,16384,null,0,g.d,[[4,g.c]],null,null),o.pb(20,49152,null,0,e.E,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.qb(21,0,null,0,11,"ion-item",[],null,null,null,b.H,b.l)),o.pb(22,49152,null,0,e.F,[o.h,o.k,o.x],null,null),(l()(),o.qb(23,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.I,b.m)),o.pb(24,49152,null,0,e.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Gb(-1,0,["Senha"])),(l()(),o.qb(26,0,null,0,6,"ion-input",[["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==o.Cb(l,27)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Cb(l,27)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.password=u)&&t),t},b.G,b.k)),o.pb(27,16384,null,0,e.Jb,[o.k],null,null),o.Db(1024,null,g.b,function(l){return[l]},[e.Jb]),o.pb(29,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),o.Db(2048,null,g.c,null,[g.e]),o.pb(31,16384,null,0,g.d,[[4,g.c]],null,null),o.pb(32,49152,null,0,e.E,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.qb(33,0,null,0,3,"div",[["text-center",""]],null,null,null,null,null)),(l()(),o.qb(34,0,null,null,2,"ion-button",[["color","primary"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.doLogin()&&o),o},b.x,b.b)),o.pb(35,49152,null,0,e.i,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.Gb(-1,0,["Entrar"]))],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,"floating"),l(n,17,0,u.login),l(n,20,0,"text"),l(n,24,0,"floating"),l(n,29,0,u.password),l(n,32,0,"password"),l(n,35,0,"primary")},function(l,n){l(n,14,0,o.Cb(n,19).ngClassUntouched,o.Cb(n,19).ngClassTouched,o.Cb(n,19).ngClassPristine,o.Cb(n,19).ngClassDirty,o.Cb(n,19).ngClassValid,o.Cb(n,19).ngClassInvalid,o.Cb(n,19).ngClassPending),l(n,26,0,o.Cb(n,31).ngClassUntouched,o.Cb(n,31).ngClassTouched,o.Cb(n,31).ngClassPristine,o.Cb(n,31).ngClassDirty,o.Cb(n,31).ngClassValid,o.Cb(n,31).ngClassInvalid,o.Cb(n,31).ngClassPending)})}function h(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"app-login",[],null,null,null,c,p)),o.pb(1,114688,null,0,a,[i.a,e.a,e.Db,d.m],null,null)],function(l,n){l(n,1,0)},null)}var C=o.mb("app-login",a,h,{},{},[]),m=u("SVse"),v=u("IheW");u.d(n,"LoginPageModuleNgFactory",function(){return f});var f=o.nb(s,[],function(l){return o.zb([o.Ab(512,o.j,o.Y,[[8,[r.a,C]],[3,o.j],o.v]),o.Ab(4608,m.k,m.j,[o.s,[2,m.r]]),o.Ab(4608,g.g,g.g,[]),o.Ab(4608,e.b,e.b,[o.x,o.g]),o.Ab(4608,e.Eb,e.Eb,[e.b,o.j,o.p]),o.Ab(4608,e.Hb,e.Hb,[e.b,o.j,o.p]),o.Ab(4608,i.a,i.a,[v.c]),o.Ab(1073742336,m.b,m.b,[]),o.Ab(1073742336,g.f,g.f,[]),o.Ab(1073742336,g.a,g.a,[]),o.Ab(1073742336,e.Bb,e.Bb,[]),o.Ab(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),o.Ab(1073742336,s,s,[]),o.Ab(1024,d.k,function(){return[[{path:"login",component:a},{path:"",redirectTo:"/login",pathMatch:"full"}]]},[])])})}}]);