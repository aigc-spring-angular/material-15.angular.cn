"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[6844],{6844:(I,b,d)=>{d.r(b),d.d(b,{SortExamplesModule:()=>C,SortHarnessExample:()=>r,SortOverviewExample:()=>A});var i=d(6895),t=d(4650),p=d(6308);function M(s,c){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&s){const a=c.$implicit;t.xp6(2),t.Oqu(a.name),t.xp6(2),t.Oqu(a.calories),t.xp6(2),t.Oqu(a.fat),t.xp6(2),t.Oqu(a.carbs),t.xp6(2),t.Oqu(a.protein)}}function g(s,c){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&s){const a=c.$implicit;t.xp6(2),t.Oqu(a.name),t.xp6(2),t.Oqu(a.calories),t.xp6(2),t.Oqu(a.fat),t.xp6(2),t.Oqu(a.carbs),t.xp6(2),t.Oqu(a.protein)}}let A=(()=>{class s{constructor(){this.desserts=[{name:"Frozen yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:4,carbs:67,protein:4},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:4}],this.sortedData=this.desserts.slice()}sortData(a){const l=this.desserts.slice();this.sortedData=a.active&&""!==a.direction?l.sort((u,_)=>{const f="asc"===a.direction;switch(a.active){case"name":return v(u.name,_.name,f);case"calories":return v(u.calories,_.calories,f);case"fat":return v(u.fat,_.fat,f);case"carbs":return v(u.carbs,_.carbs,f);case"protein":return v(u.protein,_.protein,f);default:return 0}}):l}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["sort-overview-example"]],decls:13,vars:1,consts:[["matSort","",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","calories"],["mat-sort-header","fat"],["mat-sort-header","carbs"],["mat-sort-header","protein"],[4,"ngFor","ngForOf"]],template:function(a,l){1&a&&(t.TgZ(0,"table",0),t.NdJ("matSortChange",function(_){return l.sortData(_)}),t.TgZ(1,"tr")(2,"th",1),t._uU(3,"Dessert (100g)"),t.qZA(),t.TgZ(4,"th",2),t._uU(5,"Calories"),t.qZA(),t.TgZ(6,"th",3),t._uU(7,"Fat (g)"),t.qZA(),t.TgZ(8,"th",4),t._uU(9,"Carbs (g)"),t.qZA(),t.TgZ(10,"th",5),t._uU(11,"Protein (g)"),t.qZA()(),t.YNc(12,M,11,5,"tr",6),t.qZA()),2&a&&(t.xp6(12),t.Q6J("ngForOf",l.sortedData))},dependencies:[i.sg,p.YE,p.nU],styles:[".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"]}),s})();function v(s,c,a){return(s<c?-1:1)*(a?1:-1)}let r=(()=>{class s{constructor(){this.disableThirdHeader=!1,this.desserts=[{name:"Frozen yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:4,carbs:67,protein:4},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:4}],this.sortedData=this.desserts.slice()}sortData(a){const l=this.desserts.slice();this.sortedData=a.active&&""!==a.direction?l.sort((u,_)=>(u[a.active]<_[a.active]?-1:1)*("asc"===a.direction?1:-1)):l}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["sort-harness-example"]],decls:13,vars:2,consts:[["matSort","",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","calories"],["mat-sort-header","fat",3,"disabled"],["mat-sort-header","carbs"],["mat-sort-header","protein"],[4,"ngFor","ngForOf"]],template:function(a,l){1&a&&(t.TgZ(0,"table",0),t.NdJ("matSortChange",function(_){return l.sortData(_)}),t.TgZ(1,"tr")(2,"th",1),t._uU(3,"Dessert"),t.qZA(),t.TgZ(4,"th",2),t._uU(5,"Calories"),t.qZA(),t.TgZ(6,"th",3),t._uU(7,"Fat"),t.qZA(),t.TgZ(8,"th",4),t._uU(9,"Carbs"),t.qZA(),t.TgZ(10,"th",5),t._uU(11,"Protein"),t.qZA()(),t.YNc(12,g,11,5,"tr",6),t.qZA()),2&a&&(t.xp6(6),t.Q6J("disabled",l.disableThirdHeader),t.xp6(6),t.Q6J("ngForOf",l.sortedData))},dependencies:[i.sg,p.YE,p.nU],encapsulation:2}),s})(),C=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[i.ez,p.JX]}),s})()},6308:(I,b,d)=>{d.d(b,{JX:()=>U,YE:()=>x,nU:()=>R});var i=d(4650),t=d(2687),p=d(1281),M=d(9521),g=d(3238),A=d(8929),v=d(6787),r=d(7340),O=d(6895);const C=["mat-sort-header",""];function s(o,m){if(1&o){const e=i.EpF();i.TgZ(0,"div",3),i.NdJ("@arrowPosition.start",function(){i.CHM(e);const h=i.oxw();return i.KtG(h._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){i.CHM(e);const h=i.oxw();return i.KtG(h._disableViewStateAnimation=!1)}),i._UZ(1,"div",4),i.TgZ(2,"div",5),i._UZ(3,"div",6)(4,"div",7)(5,"div",8),i.qZA()()}if(2&o){const e=i.oxw();i.Q6J("@arrowOpacity",e._getArrowViewState())("@arrowPosition",e._getArrowViewState())("@allowChildren",e._getArrowDirectionState()),i.xp6(2),i.Q6J("@indicator",e._getArrowDirectionState()),i.xp6(1),i.Q6J("@leftPointer",e._getArrowDirectionState()),i.xp6(1),i.Q6J("@rightPointer",e._getArrowDirectionState())}}const c=["*"],f=new i.OlP("MAT_SORT_DEFAULT_OPTIONS"),T=(0,g.dB)((0,g.Id)(class{}));let x=(()=>{class o extends T{constructor(e){super(),this._defaultOptions=e,this.sortables=new Map,this._stateChanges=new A.xQ,this.start="asc",this._direction="",this.sortChange=new i.vpe}get direction(){return this._direction}set direction(e){this._direction=e}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,p.Ig)(e)}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let h=function y(o,m){let e=["asc","desc"];return"desc"==o&&e.reverse(),m||e.push(""),e}(e.start||this.start,e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear),D=h.indexOf(this.direction)+1;return D>=h.length&&(D=0),h[D]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return o.\u0275fac=function(e){return new(e||o)(i.Y36(f,8))},o.\u0275dir=i.lG2({type:o,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],active:["matSortActive","active"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[i.qOj,i.TTD]}),o})();const S=g.mZ.ENTERING+" "+g.yN.STANDARD_CURVE,w={indicator:(0,r.X$)("indicator",[(0,r.SB)("active-asc, asc",(0,r.oB)({transform:"translateY(0px)"})),(0,r.SB)("active-desc, desc",(0,r.oB)({transform:"translateY(10px)"})),(0,r.eR)("active-asc <=> active-desc",(0,r.jt)(S))]),leftPointer:(0,r.X$)("leftPointer",[(0,r.SB)("active-asc, asc",(0,r.oB)({transform:"rotate(-45deg)"})),(0,r.SB)("active-desc, desc",(0,r.oB)({transform:"rotate(45deg)"})),(0,r.eR)("active-asc <=> active-desc",(0,r.jt)(S))]),rightPointer:(0,r.X$)("rightPointer",[(0,r.SB)("active-asc, asc",(0,r.oB)({transform:"rotate(45deg)"})),(0,r.SB)("active-desc, desc",(0,r.oB)({transform:"rotate(-45deg)"})),(0,r.eR)("active-asc <=> active-desc",(0,r.jt)(S))]),arrowOpacity:(0,r.X$)("arrowOpacity",[(0,r.SB)("desc-to-active, asc-to-active, active",(0,r.oB)({opacity:1})),(0,r.SB)("desc-to-hint, asc-to-hint, hint",(0,r.oB)({opacity:.54})),(0,r.SB)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",(0,r.oB)({opacity:0})),(0,r.eR)("* => asc, * => desc, * => active, * => hint, * => void",(0,r.jt)("0ms")),(0,r.eR)("* <=> *",(0,r.jt)(S))]),arrowPosition:(0,r.X$)("arrowPosition",[(0,r.eR)("* => desc-to-hint, * => desc-to-active",(0,r.jt)(S,(0,r.F4)([(0,r.oB)({transform:"translateY(-25%)"}),(0,r.oB)({transform:"translateY(0)"})]))),(0,r.eR)("* => hint-to-desc, * => active-to-desc",(0,r.jt)(S,(0,r.F4)([(0,r.oB)({transform:"translateY(0)"}),(0,r.oB)({transform:"translateY(25%)"})]))),(0,r.eR)("* => asc-to-hint, * => asc-to-active",(0,r.jt)(S,(0,r.F4)([(0,r.oB)({transform:"translateY(25%)"}),(0,r.oB)({transform:"translateY(0)"})]))),(0,r.eR)("* => hint-to-asc, * => active-to-asc",(0,r.jt)(S,(0,r.F4)([(0,r.oB)({transform:"translateY(0)"}),(0,r.oB)({transform:"translateY(-25%)"})]))),(0,r.SB)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",(0,r.oB)({transform:"translateY(0)"})),(0,r.SB)("hint-to-desc, active-to-desc, desc",(0,r.oB)({transform:"translateY(-25%)"})),(0,r.SB)("hint-to-asc, active-to-asc, asc",(0,r.oB)({transform:"translateY(25%)"}))]),allowChildren:(0,r.X$)("allowChildren",[(0,r.eR)("* <=> *",[(0,r.IO)("@*",(0,r.pV)(),{optional:!0})])])};let E=(()=>{class o{constructor(){this.changes=new A.xQ}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=i.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const P={provide:E,deps:[[new i.FiY,new i.tp0,E]],useFactory:function H(o){return o||new E}},Z=(0,g.Id)(class{});let R=(()=>{class o extends Z{constructor(e,n,h,D,F,Y,k,B){super(),this._intl=e,this._changeDetectorRef=n,this._sort=h,this._columnDef=D,this._focusMonitor=F,this._elementRef=Y,this._ariaDescriber=k,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._sortActionDescription="Sort",B?.arrowPosition&&(this.arrowPosition=B?.arrowPosition),this._handleStateChanges()}get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,p.Ig)(e)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{const n=!!e;n!==this._showIndicatorHint&&(this._setIndicatorHintVisible(n),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(e){this._isDisabled()&&e||(this._showIndicatorHint=e,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(e){this._viewState=e||{},this._disableViewStateAnimation&&(this._viewState={toState:e.toState})}_toggleOnInteraction(){this._sort.sort(this),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(e){!this._isDisabled()&&(e.keyCode===M.L_||e.keyCode===M.K5)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const e=this._viewState.fromState;return(e?`${e}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}_handleStateChanges(){this._rerenderSubscription=(0,v.T)(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),("hint"===this._viewState.toState||"active"===this._viewState.toState)&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&"active"===this._viewState.toState&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}}return o.\u0275fac=function(e){return new(e||o)(i.Y36(E),i.Y36(i.sBO),i.Y36(x,8),i.Y36("MAT_SORT_HEADER_COLUMN_DEF",8),i.Y36(t.tE),i.Y36(i.SBq),i.Y36(t.$s,8),i.Y36(f,8))},o.\u0275cmp=i.Xpm({type:o,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(e,n){1&e&&i.NdJ("click",function(){return n._handleClick()})("keydown",function(D){return n._handleKeydown(D)})("mouseenter",function(){return n._setIndicatorHintVisible(!0)})("mouseleave",function(){return n._setIndicatorHintVisible(!1)}),2&e&&(i.uIk("aria-sort",n._getAriaSortAttribute()),i.ekj("mat-sort-header-disabled",n._isDisabled()))},inputs:{disabled:"disabled",id:["mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",sortActionDescription:"sortActionDescription",disableClear:"disableClear"},exportAs:["matSortHeader"],features:[i.qOj],attrs:C,ngContentSelectors:c,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(e,n){1&e&&(i.F$t(),i.TgZ(0,"div",0)(1,"div",1),i.Hsn(2),i.qZA(),i.YNc(3,s,6,6,"div",2),i.qZA()),2&e&&(i.ekj("mat-sort-header-sorted",n._isSorted())("mat-sort-header-position-before","before"===n.arrowPosition),i.uIk("tabindex",n._isDisabled()?null:0)("role",n._isDisabled()?null:"button"),i.xp6(3),i.Q6J("ngIf",n._renderArrow()))},dependencies:[O.O5],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[w.indicator,w.leftPointer,w.rightPointer,w.arrowOpacity,w.arrowPosition,w.allowChildren]},changeDetection:0}),o})(),U=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({providers:[P],imports:[O.ez,g.BQ]}),o})()}}]);