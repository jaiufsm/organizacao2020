(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{GZS0:function(l,n,u){"use strict";u.r(n);var i=u("8Y7J"),t=u("mrSG"),e=u("dKRk"),o=u("ZZ/e");class a{constructor(l,n,u,i){this.apiJai=l,this.modalController=n,this.alertController=u,this.loadingController=i}ngOnInit(){}presentLoading(){return t.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Carregando..."}),yield this.loading.present()})}dismiss(){this.modalController.dismiss()}doCheck(l){this.presentLoading();const n=new Date;this.apiJai.getCheck().then(u=>{const i=u.filter(l=>l[0]===this.id);"in"===l&&i.length>0?(this.presentAlert("Check-in j\xe1 realizado",l),this.loading&&this.loading.dismiss()):"out"===l&&i.findIndex(l=>"out"===l[4])>-1?(this.presentAlert("Check-out j\xe1 realizado",l),this.loading&&this.loading.dismiss()):"out"===l&&i.findIndex(l=>"in"===l[4])<0?(this.presentAlert("Check-in ainda n\xe3o realizado",l),this.loading&&this.loading.dismiss()):this.apiJai.setCheck(this.id,this.nome,n.toLocaleDateString(),n.toLocaleTimeString(),l).then(n=>{this.loading&&this.loading.dismiss(),this.presentSetAlert(l)})})}presentSetAlert(l){return t.b(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Check-"+l,message:"Check-"+l+" realizado",buttons:["OK"]});yield n.present()})}presentAlert(l,n){return t.b(this,void 0,void 0,function*(){const u=yield this.alertController.create({header:"Check-"+n,message:l,buttons:["OK"]});yield u.present()})}}class r{constructor(l,n,u){this.apiJai=l,this.modalController=n,this.loadingController=u,this.trabalhos=[],this.trabalhosFiltered=[],this.avaliadores=[],this.avaliadoresFiltered=[],this.avaliacoes=[],this.checks=[],this.dates=["22/10/2018","23/10/2018","24/10/2018","25/10/2018","26/10/2018"],this.locations=[],this.dateModel="22/10/2018"}ngOnInit(){this.presentLoading(),this.updateLists()}presentLoading(){return t.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({message:"Carregando..."}),yield this.loading.present()})}filterAvaliadores(){this.trabalhosFiltered=[...this.trabalhos],this.locationModel&&(this.trabalhosFiltered=this.trabalhosFiltered.filter(l=>l[9]===this.locationModel)),this.avaliadores=[],this.trabalhosFiltered.map(l=>{-1===this.avaliadores.findIndex(n=>n.id===l[1])&&this.avaliadores.push({id:l[1],nome:l[0]})}),this.avaliadoresFiltered=[...this.avaliadores]}clearFilter(){this.locationModel=null,this.trabalhosFiltered=[...this.trabalhos],this.filterAvaliadores()}updateLists(){this.apiJai.getValuesByDay(this.dateModel).then(l=>{this.apiJai.getAvaliacoes().then(n=>{this.apiJai.getCheck().then(u=>{this.locations=l.map(l=>l[9]).filter((l,n,u)=>u.indexOf(l)===n).sort(),this.trabalhos=l,this.avaliacoes=n,this.checks=u,this.filterAvaliadores(),this.loading&&this.loading.dismiss()})})})}getItems(l){const n=l.target.value.toLowerCase();this.avaliadoresFiltered=this.avaliadores.filter(l=>l.nome.toLowerCase().includes(n))}presentAvaliador(l){return t.b(this,void 0,void 0,function*(){const n=this.trabalhos.filter(n=>n[1]===l.id);for(const i of n)this.avaliacoes.findIndex(l=>l[0]===i[2])>-1?i.push("3"):this.checks.findIndex(n=>n[0]===l.id&&n[2]===i[7])>-1?i.push("2"):i.push("1");const u=yield this.modalController.create({component:a,componentProps:{id:l.id,nome:l.nome,trabalhos:n}});return yield u.present()})}}class s{}var b=u("pMnS"),c=u("oBZk"),d=u("s7LF"),h=u("SVse"),p=i.ob({encapsulation:0,styles:[[""]],data:{}});function g(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,c.L,c.q)),i.pb(1,49152,null,0,o.lb,[i.h,i.k,i.x],{value:[0,"value"]},null),(l()(),i.Gb(2,0,["",""]))],function(l,n){l(n,1,0,i.ub(1,"",n.context.$implicit,""))},function(l,n){l(n,2,0,n.context.$implicit)})}function m(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,c.L,c.q)),i.pb(1,49152,null,0,o.lb,[i.h,i.k,i.x],{value:[0,"value"]},null),(l()(),i.Gb(2,0,["",""]))],function(l,n){l(n,1,0,i.ub(1,"",n.context.$implicit,""))},function(l,n){l(n,2,0,n.context.$implicit)})}function f(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.presentAvaliador(l.context.$implicit)&&i),i},c.H,c.l)),i.pb(1,49152,null,0,o.F,[i.h,i.k,i.x],null,null),(l()(),i.qb(2,0,null,0,2,"ion-label",[],null,null,null,c.I,c.m)),i.pb(3,49152,null,0,o.L,[i.h,i.k,i.x],null,null),(l()(),i.Gb(4,0,[" "," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.nome)})}function C(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,6,"ion-header",[],null,null,null,c.E,c.i)),i.pb(1,49152,null,0,o.z,[i.h,i.k,i.x],null,null),(l()(),i.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,c.R,c.v)),i.pb(3,49152,null,0,o.zb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.qb(4,0,null,0,2,"ion-title",[],null,null,null,c.Q,c.u)),i.pb(5,49152,null,0,o.xb,[i.h,i.k,i.x],null,null),(l()(),i.Gb(-1,0,["Avaliadores"])),(l()(),i.qb(7,0,null,null,43,"ion-content",[["class","ion-padding"]],null,null,null,c.D,c.h)),i.pb(8,49152,null,0,o.s,[i.h,i.k,i.x],null,null),(l()(),i.qb(9,0,null,0,33,"div",[],null,null,null,null,null)),(l()(),i.qb(10,0,null,null,29,"ion-list",[],null,null,null,c.J,c.n)),i.pb(11,49152,null,0,o.M,[i.h,i.k,i.x],null,null),(l()(),i.qb(12,0,null,0,13,"ion-item",[],null,null,null,c.H,c.l)),i.pb(13,49152,null,0,o.F,[i.h,i.k,i.x],null,null),(l()(),i.qb(14,0,null,0,2,"ion-label",[],null,null,null,c.I,c.m)),i.pb(15,49152,null,0,o.L,[i.h,i.k,i.x],null,null),(l()(),i.Gb(-1,0,["Data"])),(l()(),i.qb(17,0,null,0,8,"ion-select",[["placeholder","Selecione uma data"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Cb(l,18)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Cb(l,18)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.dateModel=u)&&t),"ionChange"===n&&(t=!1!==e.updateLists()&&t),t},c.M,c.p)),i.pb(18,16384,null,0,o.Ib,[i.k],null,null),i.Db(1024,null,d.b,function(l){return[l]},[o.Ib]),i.pb(20,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),i.Db(2048,null,d.c,null,[d.e]),i.pb(22,16384,null,0,d.d,[[4,d.c]],null,null),i.pb(23,49152,null,0,o.kb,[i.h,i.k,i.x],{placeholder:[0,"placeholder"]},null),(l()(),i.fb(16777216,null,0,1,null,g)),i.pb(25,278528,null,0,h.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.qb(26,0,null,0,13,"ion-item",[],null,null,null,c.H,c.l)),i.pb(27,49152,null,0,o.F,[i.h,i.k,i.x],null,null),(l()(),i.qb(28,0,null,0,2,"ion-label",[],null,null,null,c.I,c.m)),i.pb(29,49152,null,0,o.L,[i.h,i.k,i.x],null,null),(l()(),i.Gb(-1,0,["Local"])),(l()(),i.qb(31,0,null,0,8,"ion-select",[["placeholder","Selecione um local"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Cb(l,32)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Cb(l,32)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.locationModel=u)&&t),"ionChange"===n&&(t=!1!==e.filterAvaliadores()&&t),t},c.M,c.p)),i.pb(32,16384,null,0,o.Ib,[i.k],null,null),i.Db(1024,null,d.b,function(l){return[l]},[o.Ib]),i.pb(34,671744,null,0,d.e,[[8,null],[8,null],[8,null],[6,d.b]],{model:[0,"model"]},{update:"ngModelChange"}),i.Db(2048,null,d.c,null,[d.e]),i.pb(36,16384,null,0,d.d,[[4,d.c]],null,null),i.pb(37,49152,null,0,o.kb,[i.h,i.k,i.x],{placeholder:[0,"placeholder"]},null),(l()(),i.fb(16777216,null,0,1,null,m)),i.pb(39,278528,null,0,h.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null),(l()(),i.qb(40,0,null,null,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.clearFilter()&&i),i},c.x,c.b)),i.pb(41,49152,null,0,o.i,[i.h,i.k,i.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),i.Gb(-1,0,["Limpar filtro"])),(l()(),i.qb(43,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==i.Cb(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==i.Cb(l,46)._handleInputEvent(u.target)&&t),"ionInput"===n&&(t=!1!==e.getItems(u)&&t),t},c.K,c.o)),i.Db(5120,null,d.b,function(l){return[l]},[o.Jb]),i.pb(45,49152,null,0,o.hb,[i.h,i.k,i.x],null,null),i.pb(46,16384,null,0,o.Jb,[i.k],null,null),(l()(),i.qb(47,0,null,0,3,"ion-list",[],null,null,null,c.J,c.n)),i.pb(48,49152,null,0,o.M,[i.h,i.k,i.x],null,null),(l()(),i.fb(16777216,null,0,1,null,f)),i.pb(50,278528,null,0,h.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,20,0,u.dateModel),l(n,23,0,"Selecione uma data"),l(n,25,0,u.dates),l(n,34,0,u.locationModel),l(n,37,0,"Selecione um local"),l(n,39,0,u.locations),l(n,41,0,"primary","block"),l(n,50,0,u.avaliadoresFiltered)},function(l,n){l(n,17,0,i.Cb(n,22).ngClassUntouched,i.Cb(n,22).ngClassTouched,i.Cb(n,22).ngClassPristine,i.Cb(n,22).ngClassDirty,i.Cb(n,22).ngClassValid,i.Cb(n,22).ngClassInvalid,i.Cb(n,22).ngClassPending),l(n,31,0,i.Cb(n,36).ngClassUntouched,i.Cb(n,36).ngClassTouched,i.Cb(n,36).ngClassPristine,i.Cb(n,36).ngClassDirty,i.Cb(n,36).ngClassValid,i.Cb(n,36).ngClassInvalid,i.Cb(n,36).ngClassPending)})}function v(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,1,"app-avaliador",[],null,null,null,C,p)),i.pb(1,114688,null,0,r,[e.a,o.Eb,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var k=i.mb("app-avaliador",r,v,{},{},[]),x=i.ob({encapsulation:0,styles:[[""]],data:{}});function q(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,1,"p",[["style","color: #32CD32;"]],null,null,null,null,null)),(l()(),i.Gb(-1,null,["Avaliado"]))],null,null)}function I(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,1,"p",[["style","color: #FF0000;"]],null,null,null,null,null)),(l()(),i.Gb(-1,null,["N\xe3o Avaliado"]))],null,null)}function A(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,1,"p",[["style","color: #FFA500;"]],null,null,null,null,null)),(l()(),i.Gb(-1,null,["Em Andamento"]))],null,null)}function y(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,17,"ion-item",[],null,null,null,c.H,c.l)),i.pb(1,49152,null,0,o.F,[i.h,i.k,i.x],null,null),(l()(),i.qb(2,0,null,0,15,"ion-label",[],null,null,null,c.I,c.m)),i.pb(3,49152,null,0,o.L,[i.h,i.k,i.x],null,null),(l()(),i.qb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),i.Gb(5,null,["",""])),(l()(),i.qb(6,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),i.Gb(7,null,["",""])),(l()(),i.qb(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),i.Gb(9,null,["Data: "," - ",""])),(l()(),i.qb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),i.Gb(11,null,["Local: "," ",""])),(l()(),i.fb(16777216,null,0,1,null,q)),i.pb(13,16384,null,0,h.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(l()(),i.fb(16777216,null,0,1,null,I)),i.pb(15,16384,null,0,h.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null),(l()(),i.fb(16777216,null,0,1,null,A)),i.pb(17,16384,null,0,h.i,[i.L,i.I],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,13,0,"3"===n.context.$implicit[14]),l(n,15,0,"1"===n.context.$implicit[14]),l(n,17,0,"2"===n.context.$implicit[14])},function(l,n){l(n,5,0,n.context.$implicit[3]),l(n,7,0,n.context.$implicit[4]),l(n,9,0,n.context.$implicit[7],n.context.$implicit[8]),l(n,11,0,n.context.$implicit[9],n.context.$implicit[10])})}function F(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,12,"ion-header",[],null,null,null,c.E,c.i)),i.pb(1,49152,null,0,o.z,[i.h,i.k,i.x],null,null),(l()(),i.qb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,c.R,c.v)),i.pb(3,49152,null,0,o.zb,[i.h,i.k,i.x],{color:[0,"color"]},null),(l()(),i.qb(4,0,null,0,2,"ion-title",[],null,null,null,c.Q,c.u)),i.pb(5,49152,null,0,o.xb,[i.h,i.k,i.x],null,null),(l()(),i.Gb(6,0,["",""])),(l()(),i.qb(7,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,c.y,c.c)),i.pb(8,49152,null,0,o.j,[i.h,i.k,i.x],null,null),(l()(),i.qb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.dismiss()&&i),i},c.x,c.b)),i.pb(10,49152,null,0,o.i,[i.h,i.k,i.x],null,null),(l()(),i.qb(11,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,c.F,c.j)),i.pb(12,49152,null,0,o.A,[i.h,i.k,i.x],{name:[0,"name"]},null),(l()(),i.qb(13,0,null,null,14,"ion-content",[["class","ion-padding"]],null,null,null,c.D,c.h)),i.pb(14,49152,null,0,o.s,[i.h,i.k,i.x],null,null),(l()(),i.qb(15,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),i.qb(16,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.doCheck("in")&&i),i},c.x,c.b)),i.pb(17,49152,null,0,o.i,[i.h,i.k,i.x],null,null),(l()(),i.Gb(-1,0,["Check-in"])),(l()(),i.qb(19,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==l.component.doCheck("out")&&i),i},c.x,c.b)),i.pb(20,49152,null,0,o.i,[i.h,i.k,i.x],null,null),(l()(),i.Gb(-1,0,["Check-out"])),(l()(),i.qb(22,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),i.Gb(-1,null,["Trabalhos:"])),(l()(),i.qb(24,0,null,0,3,"ion-list",[],null,null,null,c.J,c.n)),i.pb(25,49152,null,0,o.M,[i.h,i.k,i.x],null,null),(l()(),i.fb(16777216,null,0,1,null,y)),i.pb(27,278528,null,0,h.h,[i.L,i.I,i.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,"close"),l(n,27,0,u.trabalhos)},function(l,n){l(n,6,0,n.component.nome)})}function L(l){return i.Hb(0,[(l()(),i.qb(0,0,null,null,1,"app-avaliador-modal",[],null,null,null,F,x)),i.pb(1,114688,null,0,a,[e.a,o.Eb,o.a,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var M=i.mb("app-avaliador-modal",a,L,{id:"id",nome:"nome",trabalhos:"trabalhos"},{},[]),G=u("iInd");u.d(n,"AvaliadorPageModuleNgFactory",function(){return D});var D=i.nb(s,[],function(l){return i.zb([i.Ab(512,i.j,i.Y,[[8,[b.a,k,M]],[3,i.j],i.v]),i.Ab(4608,h.k,h.j,[i.s,[2,h.q]]),i.Ab(4608,d.g,d.g,[]),i.Ab(4608,o.b,o.b,[i.x,i.g]),i.Ab(4608,o.Eb,o.Eb,[o.b,i.j,i.p]),i.Ab(4608,o.Hb,o.Hb,[o.b,i.j,i.p]),i.Ab(1073742336,h.b,h.b,[]),i.Ab(1073742336,d.f,d.f,[]),i.Ab(1073742336,d.a,d.a,[]),i.Ab(1073742336,o.Bb,o.Bb,[]),i.Ab(1073742336,G.n,G.n,[[2,G.s],[2,G.m]]),i.Ab(1073742336,s,s,[]),i.Ab(1024,G.k,function(){return[[{path:"",component:r}]]},[])])})}}]);