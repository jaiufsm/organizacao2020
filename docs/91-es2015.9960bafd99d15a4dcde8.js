(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{TpdJ:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_tab",(function(){return n})),i.d(e,"ion_tabs",(function(){return o}));var s=i("S6Yj"),a=(i("OoTa"),i("tkfp"));const n=class{constructor(t){Object(s.m)(this,t),this.loaded=!1,this.active=!1}componentWillLoad(){}async setActive(){await this.prepareLazyLoaded(),this.active=!0}async prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(a.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}}render(){const{tab:t,active:e,component:i}=this;return Object(s.i)(s.a,{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===i,"tab-hidden":!e}},Object(s.i)("slot",null))}get el(){return Object(s.f)(this)}static get style(){return":host(.tab-hidden){display:none!important}"}},o=class{constructor(t){Object(s.m)(this,t),this.transitioning=!1,this.tabs=[],this.useRouter=!1,this.onTabClicked=t=>{const{href:e,tab:i}=t.detail,s=this.tabs.find(t=>t.tab===i);if(this.useRouter&&void 0!==e){const t=document.querySelector("ion-router");t&&t.push(e)}else s&&this.select(s)},this.ionNavWillLoad=Object(s.d)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(s.d)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(s.d)(this,"ionTabsDidChange",3)}componentWillLoad(){this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),this.initSelect().then(()=>{this.ionNavWillLoad.emit(),this.componentWillUpdate()})}componentDidUnload(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0}componentWillUpdate(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}async select(t){const e=await this.getTab(t);return!!this.shouldSwitch(e)&&(await this.setActive(e),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(t){const e="string"==typeof t?this.tabs.find(e=>e.tab===t):t;return e||console.error(`tab with id: "${e}" does not exist`),e}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(t){const e=await this.getTab(t);return this.shouldSwitch(e)?(await this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){const t=this.selectedTab&&this.selectedTab.tab;return void 0!==t?{id:t,element:this.selectedTab}:void 0}async initSelect(){this.useRouter||(await Promise.all(this.tabs.map(t=>t.componentOnReady())),await this.select(this.tabs[0]))}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.setActive())}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}render(){return Object(s.i)(s.a,{onIonTabButtonClick:this.onTabClicked},Object(s.i)("slot",{name:"top"}),Object(s.i)("div",{class:"tabs-inner"},Object(s.i)("slot",null)),Object(s.i)("slot",{name:"bottom"}))}get el(){return Object(s.f)(this)}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"}}}}]);