function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function asyncGeneratorStep(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){asyncGeneratorStep(a,r,i,o,s,"next",e)}function s(e){asyncGeneratorStep(a,r,i,o,s,"throw",e)}o(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{BHpw:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_menu",(function(){return l})),n.d(t,"ion_menu_button",(function(){return y})),n.d(t,"ion_menu_controller",(function(){return _})),n.d(t,"ion_menu_toggle",(function(){return R}));var r=n("S6Yj"),i=n("OoTa"),a=n("oM6z"),o=n("VUZZ"),s=n("pyhm"),u=n("9Xoc"),c=n("3QqI"),l=function(){function e(t){_classCallCheck(this,e),Object(r.m)(this,t),this.lastOnEnd=0,this.blocker=o.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(r.e)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(r.d)(this,"ionWillOpen",7),this.ionWillClose=Object(r.d)(this,"ionWillClose",7),this.ionDidOpen=Object(r.d)(this,"ionDidOpen",7),this.ionDidClose=Object(r.d)(this,"ionDidClose",7),this.ionMenuChange=Object(r.d)(this,"ionMenuChange",7),this.lazyMenuCtrl=Object(r.l)(this,"ion-menu-controller")}var t,a,s,l;return _createClass(e,[{key:"typeChanged",value:function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-".concat(t)),n.classList.add("menu-content-".concat(e)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(u.h)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"componentWillLoad",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,a,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===this.type&&(this.type=i.b.get("menuType","ios"===this.mode?"reveal":"overlay")),e.next=3,this.lazyMenuCtrl.componentOnReady().then((function(e){return e._getInstance()}));case 3:if(t=this.menuCtrl=e.sent,r=this.el.parentNode,!(a=void 0!==this.contentId?document.getElementById(this.contentId):r&&r.querySelector&&r.querySelector("[main]"))||!a.tagName){e.next=18;break}return this.contentEl=a,a.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),e.next=14,Promise.resolve().then(n.bind(null,"VUZZ"));case 14:this.gesture=e.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(e){return o.canStart(e)},onWillStart:function(){return o.onWillStart()},onStart:function(){return o.onStart()},onMove:function(e){return o.onMove(e)},onEnd:function(e){return o.onEnd(e)}}),this.updateState(),e.next=19;break;case 18:console.error('Menu: must have a "content" element to listen for drag events on.');case 19:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"componentDidLoad",value:function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"componentDidUnload",value:function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,e)}},{key:"close",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,e)}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,e)}},{key:"setOpen",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.menuCtrl._setOpen(this,e,t)}},{key:"_setOpen",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(r.length>1&&void 0!==r[1])||r[1],e.t0=!this._isActive()||this.isAnimating||t===this._isOpen,e.t0){e.next=10;break}return this.beforeAnimation(t),e.next=6,this.loadAnimation();case 6:return e.next=8,this.startAnimation(t,n);case 8:this.afterAnimation(t),e.t0=0;case 10:return e.abrupt("return",!e.t0);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"loadAnimation",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.menuInnerEl.offsetWidth,e.t0=t===this.width&&void 0!==this.animation,e.t0){e.next=9;break}return this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e.next=7,this.menuCtrl._createAnimation(this.type,this);case 7:this.animation=e.sent,this.animation.fill("both");case 9:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"startAnimation",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!t,i=this.animation.direction(r?"reverse":"normal").easing(r?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),!n){e.next=6;break}return e.next=4,i.playAsync();case 4:e.next=7;break;case 6:i.playSync();case 7:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(e){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&d(window,e.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(u.b)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(e){if(this.isAnimating&&this.animation){var t=h(e.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(t/this.width)}else Object(u.b)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(e){var t=this;if(this.isAnimating&&this.animation){var n=this._isOpen,r=this.isEndSide,i=h(e.deltaX,n,r),a=this.width,o=i/a,s=e.velocityX,l=a/2,d=s>=0&&(s>.2||e.deltaX>l),p=s<=0&&(s<-.2||e.deltaX<-l),m=n?r?d:p:r?p:d,f=!n&&m;n&&!m&&(f=!0),this.lastOnEnd=e.timeStamp;var b=m?.001:-.001,g=o<=0?.01:o;b+=Object(c.b)(new c.a(0,0),new c.a(.4,0),new c.a(.6,1),new c.a(1,1),g),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return t.afterAnimation(f)}),{oneTimeCallback:!0}).progressEnd(m,b,300)}else Object(u.b)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(e){Object(u.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(e){Object(u.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.contentEl&&this.contentEl.classList.add(f),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(f),this.backdropEl&&this.backdropEl.classList.remove(m),this.ionDidClose.emit())}},{key:"updateState",value:function(){var e=this._isActive();this.gesture&&this.gesture.setDisabled(!e||!this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),Object(u.b)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(u.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}},{key:"render",value:function(){var e,t=this,n=this.isEndSide,i=this.type,a=this.disabled,o=this.mode,s=this.isPaneVisible;return Object(r.i)(r.a,{role:"navigation",class:(e={},_defineProperty(e,o,!0),_defineProperty(e,"menu-type-".concat(i),!0),_defineProperty(e,"menu-enabled",!a),_defineProperty(e,"menu-side-end",n),_defineProperty(e,"menu-side-start",!n),_defineProperty(e,"menu-pane-visible",s),e)},Object(r.i)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(r.i)("slot",null)),Object(r.i)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},{key:"style",get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}}]),e}(),h=function(e,t,n){return Math.max(0,t!==n?-e:e)},d=function(e,t,n,r){return n?t>=e.innerWidth-r:t<=r},p="show-menu",m="show-backdrop",f="menu-content-open",b=function(e){var t=e.querySelector("ion-menu-controller");return t?t.componentOnReady():Promise.resolve(void 0)},g=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(document);case 2:if(n=e.sent,e.t0=n,!e.t0){e.next=8;break}return e.next=7,n.get(t);case 7:e.t0=e.sent;case 8:if(e.t1=e.t0,!e.t1){e.next=11;break}n.toggle(t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(document);case 2:if(!(n=e.sent)){e.next=14;break}return e.next=6,n.get(t);case 6:if(r=e.sent,e.t0=r,!e.t0){e.next=12;break}return e.next=11,r.isActive();case 11:e.t0=e.sent;case 12:if(!e.t0){e.next=14;break}return e.abrupt("return",!0);case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.m)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.setVisibility=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n.menu);case 2:n.visible=e.sent;case 3:case"end":return e.stop()}}),e)}))),this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n.menu);case 2:case"end":return e.stop()}}),e)})))}var t,n;return _createClass(e,[{key:"componentDidLoad",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setVisibility();case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"visibilityChanged",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setVisibility();case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.color,t=this.disabled,n=Object(r.e)(this),a=i.b.get("menuIcon","menu"),o=this.autoHide&&!this.visible,u={type:this.type};return Object(r.i)(r.a,{onClick:this.onClick,"aria-disabled":t?"true":null,"aria-hidden":o?"true":null,class:Object.assign(_defineProperty({},n,!0),Object(s.a)(e),{button:!0,"menu-button-hidden":o,"menu-button-disabled":t,"ion-activatable":!0,"ion-focusable":!0})},Object(r.i)("button",Object.assign({},u,{disabled:this.disabled,class:"button-native"}),Object(r.i)("slot",null,Object(r.i)("ion-icon",{icon:a,mode:n,lazy:!1})),"md"===n&&Object(r.i)("ion-ripple-effect",{type:"unbounded"})))}}],[{key:"style",get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"}}]),e}(),k=function(){return Object(a.a)().easing("cubic-bezier(0.0, 0.0, 0.2, 1)").duration(300)},x=function(e){var t,n,r=e.width+8,i=Object(a.a)(),o=Object(a.a)();return e.isEndSide?(t=r+"px",n="0px"):(t=-r+"px",n="0px"),i.addElement(e.menuInnerEl).fromTo("transform","translateX(".concat(t,")"),"translateX(".concat(n,")")),o.addElement(e.backdropEl).fromTo("opacity",.01,.32),k().addAnimation([i,o])},w=function(e){var t,n,r=e.width;e.isEndSide?(t=-r+"px",n=r+"px"):(t=r+"px",n=-r+"px");var i=Object(a.a)().addElement(e.menuInnerEl).fromTo("transform","translateX(".concat(n,")"),"translateX(0px)"),o=Object(a.a)().addElement(e.contentEl).fromTo("transform","translateX(0px)","translateX(".concat(t,")")),s=Object(a.a)().addElement(e.backdropEl).fromTo("opacity",.01,.32);return k().addAnimation([i,s,o])},O=function(e){var t=e.width*(e.isEndSide?-1:1)+"px",n=Object(a.a)().addElement(e.contentEl).fromTo("transform","translateX(0px)","translateX(".concat(t,")"));return k().addAnimation(n)},_=function(){function e(t){_classCallCheck(this,e),Object(r.m)(this,t),this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",O),this.registerAnimation("push",w),this.registerAnimation("overlay",x)}var t,n,a,o,s,u,c,l,h,d,p,m,f,b;return _createClass(e,[{key:"open",value:(b=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get(t);case 2:return n=e.sent,e.abrupt("return",!!n&&n.open());case 4:case"end":return e.stop()}}),e,this)}))),function(e){return b.apply(this,arguments)})},{key:"close",value:(f=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void 0!==t?this.get(t):this.getOpen();case 2:return n=e.sent,e.abrupt("return",void 0!==n&&n.close());case 4:case"end":return e.stop()}}),e,this)}))),function(e){return f.apply(this,arguments)})},{key:"toggle",value:(m=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get(t);case 2:return n=e.sent,e.abrupt("return",!!n&&n.toggle());case 4:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"enable",value:(p=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get(n);case 2:return r=e.sent,e.abrupt("return",(r&&(r.disabled=!t),r));case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return p.apply(this,arguments)})},{key:"swipeGesture",value:(d=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get(n);case 2:return r=e.sent,e.abrupt("return",(r&&(r.swipeGesture=t),r));case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return d.apply(this,arguments)})},{key:"isOpen",value:(h=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t){e.next=5;break}return e.next=3,this.get(t);case 3:return n=e.sent,e.abrupt("return",void 0!==n&&n.isOpen());case 5:return e.t0=void 0,e.next=8,this.getOpen();case 8:return e.t1=e.sent,e.abrupt("return",e.t0!==e.t1);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"isEnabled",value:(l=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get(t);case 2:return n=e.sent,e.abrupt("return",!!n&&!n.disabled);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"get",value:(c=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitUntilReady();case 2:return e.abrupt("return","start"===t||"end"===t?this.find((function(e){return e.side===t&&!e.disabled}))||this.find((function(e){return e.side===t})):null!=t?this.find((function(e){return e.menuId===t})):this.find((function(e){return!e.disabled}))||(this.menus.length>0?this.menus[0].el:void 0));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"getOpen",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitUntilReady();case 2:return e.abrupt("return",this.getOpenSync());case 3:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"getMenus",value:(s=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitUntilReady();case 2:return e.abrupt("return",this.getMenusSync());case 3:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"isAnimating",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.waitUntilReady();case 2:return e.abrupt("return",this.isAnimatingSync());case 3:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"registerAnimation",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.menuAnimations.set(t,n);case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)})},{key:"_getInstance",value:function(){return Promise.resolve(this)}},{key:"_register",value:function(e){var t=this.menus;t.indexOf(e)<0&&(e.disabled||this._setActiveMenu(e),t.push(e))}},{key:"_unregister",value:function(e){var t=this.menus.indexOf(e);t>-1&&this.menus.splice(t,1)}},{key:"_setActiveMenu",value:function(e){var t=e.side;this.menus.filter((function(n){return n.side===t&&n!==e})).forEach((function(e){return e.disabled=!0}))}},{key:"_setOpen",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isAnimatingSync()){e.next=2;break}return e.abrupt("return",!1);case 2:if(!n){e.next=10;break}return e.next=5,this.getOpen();case 5:if(i=e.sent,e.t0=i&&t.el!==i,!e.t0){e.next=10;break}return e.next=10,i.setOpen(!1,!1);case 10:return e.abrupt("return",t._setOpen(n,r));case 11:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return n.apply(this,arguments)})},{key:"_createAnimation",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.menuAnimations.get(t)){e.next=3;break}throw new Error("animation not registered");case 3:return a=r(n),e.abrupt("return",(i.b.getBoolean("animated",!0)||a.duration(0),a));case 5:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"getOpenSync",value:function(){return this.find((function(e){return e._isOpen}))}},{key:"getMenusSync",value:function(){return this.menus.map((function(e){return e.el}))}},{key:"isAnimatingSync",value:function(){return this.menus.some((function(e){return e.isAnimating}))}},{key:"find",value:function(e){var t=this.menus.find(e);if(void 0!==t)return t.el}},{key:"waitUntilReady",value:function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((function(e){return e.componentOnReady()})))}}],[{key:"style",get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}}]),e}(),R=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.m)(this,t),this.visible=!1,this.autoHide=!0,this.setVisibility=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n.menu);case 2:n.visible=e.sent;case 3:case"end":return e.stop()}}),e)}))),this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n.menu);case 2:case"end":return e.stop()}}),e)})))}var t,n;return _createClass(e,[{key:"componentDidLoad",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setVisibility();case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"visibilityChanged",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setVisibility();case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e,t=Object(r.e)(this),n=this.autoHide&&!this.visible;return Object(r.i)(r.a,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(e={},_defineProperty(e,t,!0),_defineProperty(e,"menu-toggle-hidden",n),e)},Object(r.i)("slot",null))}}],[{key:"style",get:function(){return":host(.menu-toggle-hidden){display:none}"}}]),e}()}}]);