import{$t as ce,A as Fn$1,An as mt$1,At as Vs,Cn as kh,Ct as U,Dn as lC,Dt as Vf,E as FI,Et as VI,F as Ht$1,Ft as Y,G as L,Gn as rb,H as Jh,Hn as qh,I as IB,In as oD,J as Le,Jt as bh,K as LI,Kn as re,Kt as bD,Lt as Yn,Mn as nC,Mt as XI,N as HI,Nt as Xn,O as Fd,Q as Nh,Qn as ts,Qt as cb,R as Iu,Rt as Z$1,S as EI,Sn as jm,St as Tu,Tt as Us,U as K,Un as qo$1,Ut as aI,Vt as _h,W as Kn,Wn as rC,Wt as an,Xn as sg,Xt as bu,Yn as se,Yt as bm,Zt as bw,_ as Ch,an as fd,ar as we$1,at as PP,b as E,bn as jc,bt as Th,d as BP,dn as hE,dt as Rl,en as dd,et as OI,fr as y,gn as it,gt as Su,hr as zr,ht as Sm,in as fE,ir as wI,jn as mu,k as Fm,kn as lw,lr as x,lt as Rh,m as Bs,mt as Sd,n as $i$1,nr as vi,o as A,on as fe,ot as Ph,pr as yh,pt as Rt$1,q as LP,qn as rn,qt as bI,rn as es,s as AI,sn as g,st as Pm,tn as dp,tt as Oh,u as BI,ur as xh,v as Cu,vn as jI,vt as TI,wn as km,wt as Uh,xn as jg,xt as Tm,y as Dh,yn as jP,yt as Td,z as Iw,zn as pB}from"./chunk-CFgkMQ_h.js";import{A as oo$1,C as _e,D as g$1,E as f,O as gt,S as Wa,T as de,_ as Me,a as Nt$1,b as S,c as I,d as _e$1,f as bt$1,g as Fo$1,h as Do$1,i as u,j as z,k as ht$1,l as Lt$1,m as wt$1,n as _t$1,o as Rt$2,p as ve,r as m,s as bt$2,t as W,u as St,v as Ne,w as _t,x as Ta,y as Nn$1}from"./main-4X4PG2AH.js";import{t as P}from"./chunk-njiBgBVS.js";function Ei(i,t){let n=!t?.manualCleanup?t?.injector?.get(ce)??g(ce):null,r=$r(t?.equal),o;t?.requireSync?o=Fn$1({kind:0},{equal:r}):o=Fn$1({kind:1,value:t?.initialValue},{equal:r});let a,m=i.subscribe({next:h=>o.set({kind:1,value:h}),error:h=>{o.set({kind:2,error:h}),a?.()},complete:()=>{a?.()}});if(t?.requireSync&&o().kind===0)throw new y(601,!1);return a=n?.onDestroy(m.unsubscribe.bind(m)),bw(()=>{let h=o();switch(h.kind){case 1:return h.value;case 2:throw h.error;case 0:throw new y(601,!1)}},{equal:t?.equal})}function $r(i=Object.is){return(t,e)=>t.kind===1&&e.kind===1&&i(t.value,e.value)}var Vi=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(n){return new(n||i)(Yn(zr),Yn(an))};static ɵdir=ts({type:i})}return i})();var Kr=(()=>{class i extends Vi{static ɵfac=(()=>{let e;return function(r){return(e||(e=Vf(i)))(r||i)}})();static ɵdir=ts({type:i,features:[yh]})}return i})();var Ye=new E(``);var Qr={provide:Ye,useExisting:qo$1(()=>Tt),multi:!0};function Yr(){let i=it()?it().getUserAgent():``;return/android (\d+)/.test(i.toLowerCase())}var Xr=new E(``);var Tt=(()=>{class i extends Vi{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode??=!Yr()}writeValue(e){let n=e??``;this.setProperty(`value`,n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(n){return new(n||i)(Yn(zr),Yn(an),Yn(Xr,8))};static ɵdir=ts({type:i,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(n,r){n&1&&Nh(`input`,function(a){return r._handleInput(a.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[qh([Qr]),yh]})}return i})();function pn(i){return i==null||bn(i)===0}function bn(i){return i==null?null:Array.isArray(i)||typeof i==`string`?i.length:i instanceof Set?i.size:null}var Oe=new E(``);var gn=new E(``);var Zr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var X=class{static min(t){return Jr(t)}static max(t){return eo(t)}static required(t){return Pi(t)}static requiredTrue(t){return to(t)}static email(t){return no(t)}static minLength(t){return io(t)}static maxLength(t){return Li(t)}static pattern(t){return ro(t)}static nullValidator(t){return wt()}static compose(t){return Hi(t)}static composeAsync(t){return Ui(t)}};function Jr(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function eo(i){return t=>{if(t.value==null||i==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function Pi(i){return pn(i.value)?{required:!0}:null}function to(i){return i.value===!0?null:{required:!0}}function no(i){return pn(i.value)||Zr.test(i.value)?null:{email:!0}}function io(i){return t=>{let e=t.value?.length??bn(t.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function Li(i){return t=>{let e=t.value?.length??bn(t.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function ro(i){if(!i)return wt;let t,e;return typeof i==`string`?(e=``,i.charAt(0)!==`^`&&(e+=`^`),e+=i,i.charAt(i.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(pn(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function wt(i){return null}function zi(i){return i!=null}function ji(i){return es(i)?Le(i):i}function Bi(i){let t={};return i.forEach(e=>{t=e!=null?L(L({},t),e):t}),Object.keys(t).length===0?null:t}function Gi(i,t){return t.map(e=>e(i))}function oo(i){return!i.validate}function qi(i){return i.map(t=>oo(t)?t:e=>t.validate(e))}function Hi(i){if(!i)return null;let t=i.filter(zi);return t.length==0?null:function(e){return Bi(Gi(e,t))}}function _n(i){return i!=null?Hi(qi(i)):null}function Ui(i){if(!i)return null;let t=i.filter(zi);return t.length==0?null:function(e){let n=Gi(e,t).map(ji);return Tm(n).pipe(fe(Bi))}}function vn(i){return i!=null?Ui(qi(i)):null}function Di(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Wi(i){return i._rawValidators}function $i(i){return i._rawAsyncValidators}function mn(i){return i?Array.isArray(i)?i:[i]:[]}function Et(i,t){return Array.isArray(i)?i.includes(t):i===t}function Ii(i,t){let e=mn(t);return mn(i).forEach(r=>{Et(e,r)||e.push(r)}),e}function Ai(i,t){return mn(t).filter(e=>!Et(i,e))}var Dt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=_n(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=vn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var we=class extends Dt{name;get formDirective(){return null}get path(){return null}};var ot=`VALID`;var Mt=`INVALID`;var We=`PENDING`;var at=`DISABLED`;var Ee=class{};var It=class extends Ee{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var st=class extends Ee{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var dt=class extends Ee{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var $e=class extends Ee{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var At=class extends Ee{source;constructor(t){super(),this.source=t}};var Fe=class extends Ee{source;constructor(t){super(),this.source=t}};function yn(i){return(Vt(i)?i.validators:i)||null}function ao(i){return Array.isArray(i)?_n(i):i||null}function xn(i,t){return(Vt(t)?t.asyncValidators:i)||null}function lo(i){return Array.isArray(i)?vn(i):i||null}function Vt(i){return i!=null&&!Array.isArray(i)&&typeof i==`object`}function Ki(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new y(1e3,``);if(!Yi(n,e))throw new y(1001,``)}function Qi(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new y(-1002,``)})}var Ke=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Fn$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Xn(this.statusReactive)}set status(t){Xn(()=>this.statusReactive.set(t))}_status=bw(()=>this.statusReactive());statusReactive=Fn$1(void 0);get valid(){return this.status===ot}get invalid(){return this.status===Mt}get pending(){return this.status===We}get disabled(){return this.status===at}get enabled(){return this.status!==at}errors;get pristine(){return Xn(this.pristineReactive)}set pristine(t){Xn(()=>this.pristineReactive.set(t))}_pristine=bw(()=>this.pristineReactive());pristineReactive=Fn$1(!0);get dirty(){return!this.pristine}get touched(){return Xn(this.touchedReactive)}set touched(t){Xn(()=>this.touchedReactive.set(t))}_touched=bw(()=>this.touchedReactive());touchedReactive=Fn$1(!1);get untouched(){return!this.touched}_events=new Z$1;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ii(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ii(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ai(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ai(t,this._rawAsyncValidators))}hasValidator(t){return Et(this._rawValidators,t)}hasAsyncValidator(t){return Et(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(U(L({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new dt(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new dt(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(U(L({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new st(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new st(!0,n))}markAsPending(t={}){this.status=We;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new $e(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(U(L({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=at,this.errors=null,this._forEachChild(r=>{r.disable(U(L({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new It(this.value,n)),this._events.next(new $e(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(L({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=ot,this._forEachChild(n=>{n.enable(U(L({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(U(L({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ot||this.status===We)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new It(this.value,e)),this._events.next(new $e(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(U(L({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?at:ot}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=We,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=ji(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new $e(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new we$1,this.statusChanges=new we$1}_calculateStatus(){return this._allControlsDisabled()?at:this.errors?Mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(We)?We:this._anyControlsHaveStatus(Mt)?Mt:ot}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new st(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new dt(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Vt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ao(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=lo(this._rawAsyncValidators)}_updateHasRequiredValidator(){Xn(()=>this._hasRequired.set(this.hasValidator(X.required)))}};function Yi(i,t){return Object.hasOwn(i,t)}function so(i){return i.tagName===`INPUT`||i.tagName===`SELECT`||i.tagName===`TEXTAREA`}function co(i,t,e,n){switch(e){case`name`:i.setAttribute(t,e,n);break;case`disabled`:case`readonly`:case`required`:n?i.setAttribute(t,e,``):i.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:n!==void 0?i.setAttribute(t,e,n.toString()):i.removeAttribute(t,e)}}var un=class{kind;context;control;message;constructor({kind:t,context:e,control:n}){this.kind=t,this.context=e,this.control=n}};function mo(i){return typeof i==`number`?i:parseInt(i,10)}var Xi=(()=>{class i{_validator=wt;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):wt,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,features:[jc]})}return i})();var uo={provide:Oe,useExisting:qo$1(()=>Pt),multi:!0};var Pt=(()=>{class i extends Xi{required;inputName=`required`;normalizeInput=nC;createValidator=e=>Pi;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=Vf(i)))(r||i)}})();static ɵdir=ts({type:i,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(n,r){n&2&&Iu(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[qh([uo]),yh]})}return i})();var fo={provide:Oe,useExisting:qo$1(()=>kn),multi:!0};var kn=(()=>{class i extends Xi{maxlength;inputName=`maxlength`;normalizeInput=e=>mo(e);createValidator=e=>Li(e);static ɵfac=(()=>{let e;return function(r){return(e||(e=Vf(i)))(r||i)}})();static ɵdir=ts({type:i,selectors:[[``,`maxlength`,``,`formControlName`,``],[``,`maxlength`,``,`formControl`,``],[``,`maxlength`,``,`ngModel`,``]],hostVars:1,hostBindings:function(n,r){n&2&&Iu(`maxlength`,r._enabled?r.maxlength:null)},inputs:{maxlength:`maxlength`},standalone:!1,features:[qh([fo]),yh]})}return i})();var ho=new E(``);var Cn=new E(``,{factory:()=>Sn});var Sn=`always`;function po(i,t){return[...t.path,i]}function bo(i,t,e=Sn){Mn(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(i.disabled),_o(i,t),yo(i,t),vo(i,t),go(i,t)}function Fi(i,t,e=!0){let n=()=>{};t?.valueAccessor?.registerOnChange(n),t?.valueAccessor?.registerOnTouched(n),Ot(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Ft(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function go(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Mn(i,t){let e=Wi(i);t.validator!==null?i.setValidators(Di(e,t.validator)):typeof e==`function`&&i.setValidators([e]);let n=$i(i);t.asyncValidator!==null?i.setAsyncValidators(Di(n,t.asyncValidator)):typeof n==`function`&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ft(t._rawValidators,r),Ft(t._rawAsyncValidators,r)}function Ot(i,t){let e=!1;if(i!==null){if(t.validator!==null){let r=Wi(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,i.setValidators(o))}}if(t.asyncValidator!==null){let r=$i(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o))}}}let n=()=>{};return Ft(t._rawValidators,n),Ft(t._rawAsyncValidators,n),e}function _o(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn===`change`&&Zi(i,t)})}function vo(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn===`blur`&&i._pendingChange&&Zi(i,t),i.updateOn!==`submit`&&i.markAsTouched()})}function Zi(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function yo(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Ji(i,t){Mn(i,t)}function xo(i,t){return Ot(i,t)}function ko(i,t){if(!Object.hasOwn(i,`model`))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Co(i){return Object.getPrototypeOf(i.constructor)===Kr}function er(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn===`submit`&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function So(i,t){if(!t)return null;let e,n,r;return t.forEach(o=>{o.constructor===Tt?e=o:Co(o)?n=o:r=o}),r||n||e||null}function Mo(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var No={provide:ho,useFactory:()=>{let i=g(ge,{self:!0});return{setParseErrors:t=>{i.setParseErrorSource(t)},set onReset(t){i.onReset=t}}}};var ge=class extends Dt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Fe&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=So(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,n){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=n,this.injector?.get(ce)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(sg);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new K,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(n=>{n instanceof Fe&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{this.control?.markAsDirty(),this.control?.setValue(r,{emitModelToViewChange:!1}),this.viewToModelUpdate(r)}),t.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=so(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Pt))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let n=this.control,r=this.customControlBindings;Object.is(r.value,n.value)||(r.value=n.value,t.setCustomControlModelInput(n.value)),this.bindControlProperty(t,r,`touched`,n.touched),this.bindControlProperty(t,r,`dirty`,n.dirty),this.bindControlProperty(t,r,`valid`,n.valid),this.bindControlProperty(t,r,`invalid`,n.invalid),this.bindControlProperty(t,r,`pending`,n.pending),this.bindControlProperty(t,r,`disabled`,n.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,`required`,this.isRequired);let o=n.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);t.setInputOnDirectives(`errors`,a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,n,r){if(e[n]===r)return;e[n]=r;let o=t.setInputOnDirectives(n,r);this.isNativeFormElement&&!o&&(n===`disabled`||n===`required`)&&this.renderer&&co(this.renderer,t.nativeElement,n,r)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([n,r])=>new un({context:r,kind:n,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,n=bw(()=>{let r=t();return r.length===0?null:r.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Fd(()=>{e=n(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var Rt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var tr=(()=>{class i extends Rt{constructor(e){super(e)}static ɵfac=function(n){return new(n||i)(Yn(ge,2))};static ɵdir=ts({type:i,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(n,r){n&2&&Ph(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[yh]})}return i})();var nr=(()=>{class i extends Rt{constructor(e){super(e)}static ɵfac=function(n){return new(n||i)(Yn(we,10))};static ɵdir=ts({type:i,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(n,r){n&2&&Ph(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[yh]})}return i})();var Qe=class extends Ke{constructor(t,e,n){super(yn(e),xn(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let n=this._find(t);n&&n._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){Xn(()=>{Qi(this,!0,t),Object.keys(t).forEach(n=>{Ki(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this._find(n);r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,U(L({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fe(this))}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return Yi(this.controls,t)?this.controls[t]:null}};var fn=class extends Qe{};var wo={provide:we,useExisting:qo$1(()=>ct)};var lt=Promise.resolve();var ct=(()=>{class i extends we{callSetDisabledState;get submitted(){return Xn(this.submittedReactive)}_submitted=bw(()=>this.submittedReactive());submittedReactive=Fn$1(!1);_directives=new Set;form;ngSubmit=new we$1;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Qe({},_n(e),vn(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){lt.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){lt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){lt.then(()=>{let n=this._findContainer(e.path),r=new Qe({});Ji(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){lt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){lt.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),er(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new At(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(n){return new(n||i)(Yn(Oe,10),Yn(gn,10),Yn(Cn,8))};static ɵdir=ts({type:i,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(n,r){n&1&&Nh(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[qh([wo]),yh]})}return i})();function Oi(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Ri(i){return typeof i==`object`&&i!==null&&Object.keys(i).length===2&&`value`in i&&`disabled`in i}var Nt=class extends Ke{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(yn(e),xn(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Vt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ri(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){Xn(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Fe(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Oi(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Oi(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ri(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Eo=i=>i instanceof Nt;var Do=(()=>{class i extends we{callSetDisabledState;get submitted(){return Xn(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=bw(()=>this._submittedReactive());_submittedReactive=Fn$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new y(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ot(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return e._setupWithForm(n,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Fi(e.control||null,e,!1),Mo(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,er(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new At(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Fi(n||null,e),Eo(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Ji(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&xo(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Mn(this.form,this),this._oldForm&&Ot(this._oldForm,this)}static ɵfac=function(n){return new(n||i)(Yn(Oe,10),Yn(gn,10),Yn(Cn,8))};static ɵdir=ts({type:i,features:[yh,jc]})}return i})();var Io={provide:we,useExisting:qo$1(()=>Re)};var Re=(()=>{class i extends Do{form=null;ngSubmit=new we$1;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=Vf(i)))(r||i)}})();static ɵdir=ts({type:i,selectors:[[``,`formGroup`,``]],hostBindings:function(n,r){n&1&&Nh(`submit`,function(a){return r.onSubmit(a)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[qh([Io]),yh]})}return i})();var ir=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return i})();var hn=class extends Ke{constructor(t,e,n){super(yn(e),xn(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Xn(()=>{Qi(this,!1,t),t.forEach((n,r)=>{Ki(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(t.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],U(L({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Fe(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var rr=new E(``);var Ao={provide:ge,useExisting:qo$1(()=>Nn)};var Nn=(()=>{class i extends ge{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new we$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a,m,h){super(h,m,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_setupWithForm(e,n){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,bo(e,this,n))}ngOnChanges(e){this._added||this._setUpControl(),ko(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return po(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(n){return new(n||i)(Yn(we,13),Yn(Oe,10),Yn(gn,10),Yn(Ye,10),Yn(rr,8),Yn(zr,8),Yn(Y,8))};static ɵdir=ts({type:i,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[qh([Ao,No]),yh,jc,aI(null)]})}return i})();var Fo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({})}return i})();function Ti(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var or=(()=>{class i{useNonNullable=!1;get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return Ti(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new Qe(r,o)}record(e,n=null){return new fn(this._reduceControls(e),n)}control(e,n,r){let o={};return this.useNonNullable?(Ti(n)?o=n:(o.validators=n,o.asyncValidators=r),new Nt(e,U(L({},o),{nonNullable:!0}))):new Nt(e,n,r)}array(e,n,r){return new hn(e.map(a=>this._createControl(a)),n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Nt)return e;if(e instanceof Ke)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=se({token:i,factory:i.ɵfac})}return i})();var ar=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:rr,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:Cn,useValue:e.callSetDisabledState??Sn}]}}static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[Fo]})}return i})();var Lt=(()=>{class i{labelPosition=`after`;static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){return mu({type:i,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(r,o){r&2&&Ph(`mdc-form-field--align-end`,o.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(r,o){r&1&&(FI(),LI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return i})();var wn={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Ro=new E(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>wn});var Z=(function(i){return i[i.Init=0]=`Init`,i[i.Checked=1]=`Checked`,i[i.Unchecked=2]=`Unchecked`,i[i.Indeterminate=3]=`Indeterminate`,i})(Z||{});var En=class{source;checked};var Dn=(()=>{class i{_elementRef=g(an);_changeDetectorRef=g(sg);_ngZone=g(re);_animationsDisabled=z();_options=g(Ro,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new En;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new we$1;indeterminateChange=new we$1;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=Z.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){g(rb).load(_e);let e=g(new Jh(`tabindex`),{optional:!0});this._options=this._options||wn,this.color=this._options.color||wn.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=g(_t).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(Z.Indeterminate):this._transitionCheckState(this.checked?Z.Checked:Z.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Fn$1(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,r=this._getAnimationTargetElement();if(!(n===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Z.Checked:Z.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return``;switch(e){case Z.Init:if(n===Z.Checked)return this._animationClasses.uncheckedToChecked;if(n==Z.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Z.Unchecked:return n===Z.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Z.Checked:return n===Z.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Z.Indeterminate:return n===Z.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`input`];return mu({type:i,selectors:[[`mat-checkbox`]],viewQuery:function(o,a){if(o&1&&Rh(e,5),o&2){let m;jI(m=VI())&&(a._inputElement=m.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(o,a){o&2&&(_h(`id`,a.id),Iu(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),XI(a.color?`mat-`+a.color:`mat-accent`),Ph(`_mat-animation-noopable`,a._animationsDisabled)(`mdc-checkbox--disabled`,a.disabled)(`mat-mdc-checkbox-disabled`,a.disabled)(`mat-mdc-checkbox-checked`,a.checked)(`mat-mdc-checkbox-disabled-interactive`,a.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,nC],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,nC],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,nC],tabIndex:[2,`tabIndex`,`tabIndex`,r=>r==null?void 0:rC(r)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,nC],checked:[2,`checked`,`checked`,nC],disabled:[2,`disabled`,`disabled`,nC],indeterminate:[2,`indeterminate`,`indeterminate`,nC]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[qh([{provide:Ye,useExisting:qo$1(()=>i),multi:!0},{provide:Oe,useExisting:i,multi:!0}]),jc],ngContentSelectors:[`*`],decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(o,a){if(o&1&&(FI(),$i$1(0,`label`,3),Nh(`click`,function(h){return a._preventBubblingFromLabel(h)}),$i$1(1,`span`,4,0),bh(3,`span`,5),$i$1(4,`input`,6,1),Nh(`blur`,function(){return a._onBlur()})(`click`,function(){return a._onInputClick()})(`change`,function(h){return a._onInteractionEvent(h)}),Cu(),bh(6,`span`,7),$i$1(7,`span`,8),Td(),$i$1(8,`svg`,9),bh(9,`path`,10),Cu(),Sd(),bh(10,`span`,11),Cu(),bh(11,`span`,12),Cu(),$i$1(12,`span`,13,2),LI(14),Cu()()),o&2){let m=HI(2);Ch(`labelPosition`,a.labelPosition)(`for`,a.inputId),bD(4),Ph(`mdc-checkbox--selected`,a.checked),Ch(`checked`,a.checked)(`indeterminate`,a.indeterminate)(`disabled`,a.disabled&&!a.disabledInteractive)(`id`,a.inputId)(`required`,a.required)(`tabIndex`,a.disabled&&!a.disabledInteractive?-1:a.tabIndex),Iu(`aria-label`,a.ariaLabel||null)(`aria-labelledby`,a.ariaLabelledby)(`aria-describedby`,a.ariaDescribedby)(`aria-checked`,a.indeterminate?`mixed`:null)(`aria-controls`,a.ariaControls)(`aria-disabled`,a.disabled&&a.disabledInteractive?!0:null)(`aria-expanded`,a.ariaExpanded)(`aria-owns`,a.ariaOwns)(`name`,a.name)(`value`,a.value),bD(7),Ch(`matRippleTrigger`,m)(`matRippleDisabled`,a.disableRipple||a.disabled)(`matRippleCentered`,!0)}},dependencies:[oo$1,Lt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();var lr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[Dn,IB]})}return i})();var dr=Symbol(`FIELD_TREE`);function mt(i){return typeof i==`function`&&i[dr]===!0}var zt=new E(``);var In=class{_box;_destroyed=new Z$1;_resizeSubject=new Z$1;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new A(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(mt$1(e=>e.some(n=>n.target===t)),Fm({bufferSize:1,refCount:!0}),jm(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var mr=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=g(re);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new In(r)),this._observers.get(r).observe(e)}static ɵfac=function(n){return new(n||i)};static ɵprov=se({token:i,factory:i.ɵfac})}return i})();var ut=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`mat-label`]]})}return i})();var _r=new E(`MatError`);var An=(()=>{class i{id=g(_t).getId(`mat-mdc-error-`);static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(n,r){n&2&&_h(`id`,r.id)},inputs:{id:`id`},features:[qh([{provide:_r,useExisting:i}])]})}return i})();var ft=(()=>{class i{align=`start`;id=g(_t).getId(`mat-mdc-hint-`);static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(n,r){n&2&&(_h(`id`,r.id),Iu(`align`,null),Ph(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return i})();var Vo=new E(`MatPrefix`);var Po=new E(`MatSuffix`);var vr=new E(`FloatingLabelParent`);var ur=(()=>{class i{_elementRef=g(an);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=g(mr);_ngZone=g(re);_parent=g(vr);_resizeSubscription=new K;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Lo(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(n,r){n&2&&Ph(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return i})();function Lo(i){let t=i;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var fr=`mdc-line-ripple--active`;var jt=`mdc-line-ripple--deactivating`;var hr=(()=>{class i{_elementRef=g(an);_cleanupTransitionEnd;constructor(){let e=g(re),n=g(zr);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(jt),e.add(fr)}deactivate(){this._elementRef.nativeElement.classList.add(jt)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(jt);e.propertyName===`opacity`&&r&&n.remove(fr,jt)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return i})();var pr=(()=>{class i{_elementRef=g(an);_ngZone=g(re);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(`.mdc-floating-label`);n?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(n.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width=``:n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`notch`];return mu({type:i,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(o,a){if(o&1&&Rh(e,5),o&2){let m;jI(m=VI())&&(a._notch=m.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(o,a){o&2&&Ph(`mdc-notched-outline--notched`,a.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(o,a){o&1&&(FI(),Th(0,`div`,1),bu(1,`div`,2,0),LI(3),Tu(),Th(4,`div`,3))},encapsulation:2})})()}return i})();var ht=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i})}return i})();var pt=new E(`MatFormField`);var zo=new E(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var br=`fill`;var jo=`auto`;var gr=`fixed`;var Bo=`translateY(-50%)`;var Bt=(()=>{class i{_elementRef=g(an);_changeDetectorRef=g(sg);_platform=g(g$1);_idGenerator=g(_t);_ngZone=g(re);_defaults=g(zo,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return vi(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=PP(`iconPrefixContainer`);_textPrefixContainerSignal=PP(`textPrefixContainer`);_iconSuffixContainerSignal=PP(`iconSuffixContainer`);_textSuffixContainerSignal=PP(`textSuffixContainer`);_prefixSuffixContainers=bw(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=jP(ut);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Wa(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||jo}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||br;this._appearanceSignal.set(n)}_appearanceSignal=Fn$1(br);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||gr}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||gr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Z$1;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=z();constructor(){let e=this._defaults,n=g(cb);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Fd(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=mt(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!mt(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=bw(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let n=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges?.pipe(Pm([void 0,void 0]),fe(()=>[this._unwrapMaybeSignal(n.errorState),n.userAriaDescribedBy]),km(),mt$1(([[o,a],[m,h]])=>o!==m||a!==h)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&!mt(n.ngField)&&(this._valueChanges=n.ngControl.valueChanges.pipe(jm(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Sm(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){BP({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=bw(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let n=this._control?.ngField||this._control?.ngControl;if(!n)return!1;if(mt(n)){let r=n();return e===`valid`?r.valid():e===`dirty`?r.dirty():e===`touched`?r.touched():e===`pending`?r.pending():e===`untouched`?!r.touched():e===`pristine`?!r.dirty():e===`invalid`?!r.valid():!1}else{let r=n;return e===`valid`?r.valid:e===`dirty`?r.dirty:e===`touched`?r.touched:e===`pending`?r.pending:e===`untouched`?r.untouched:e===`pristine`?r.pristine:e===`invalid`?r.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(m=>m.align===`start`):null,a=this._hintChildren?this._hintChildren.find(m=>m.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,m=n?.getBoundingClientRect().width??0,h=r?.getBoundingClientRect().width??0,I=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Bo} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${a+m}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,a+m+h+I]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],n=[`textPrefixContainer`],r=[`iconSuffixContainer`],o=[`textSuffixContainer`],a=[`textField`],m=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],h=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function I(b,N){b&1&&bh(0,`span`,21)}function v(b,N){if(b&1&&($i$1(0,`label`,20),LI(1,1),EI(2,I,1,0,`span`,21),Cu()),b&2){let d=OI(2);Ch(`floating`,d._shouldLabelFloat())(`monitorResize`,d._hasOutline())(`id`,d._labelId),Iu(`for`,d._control.disableAutomaticLabeling?null:d._control.id),bD(2),wI(!d.hideRequiredMarker&&d._unwrapMaybeSignal(d._control.required)?2:-1)}}function M(b,N){if(b&1&&EI(0,v,3,5,`label`,20),b&2){let d=OI();wI(d._hasFloatingLabel()?0:-1)}}function P(b,N){b&1&&bh(0,`div`,7)}function f(b,N){}function A(b,N){if(b&1&&Dh(0,f,0,0,`ng-template`,13),b&2){OI(2);let d=HI(1);Ch(`ngTemplateOutlet`,d)}}function Y(b,N){if(b&1&&($i$1(0,`div`,9),EI(1,A,1,1,null,13),Cu()),b&2){let d=OI();Ch(`matFormFieldNotchedOutlineOpen`,d._shouldLabelFloat()),bD(),wI(d._forceDisplayInfixLabel()?-1:1)}}function Qt(b,N){b&1&&($i$1(0,`div`,10,2),LI(2,2),Cu())}function Vr(b,N){b&1&&($i$1(0,`div`,11,3),LI(2,3),Cu())}function Pr(b,N){}function Lr(b,N){if(b&1&&Dh(0,Pr,0,0,`ng-template`,13),b&2){OI();let d=HI(1);Ch(`ngTemplateOutlet`,d)}}function zr(b,N){b&1&&($i$1(0,`div`,14,4),LI(2,4),Cu())}function jr(b,N){b&1&&($i$1(0,`div`,15,5),LI(2,5),Cu())}function Br(b,N){b&1&&bh(0,`div`,16)}function Gr(b,N){b&1&&($i$1(0,`div`,18),LI(1,6),Cu())}function qr(b,N){if(b&1&&($i$1(0,`mat-hint`,22),lw(1),Cu()),b&2){let d=OI(2);Ch(`id`,d._hintLabelId),bD(),Uh(d.hintLabel)}}function Hr(b,N){if(b&1&&($i$1(0,`div`,19),EI(1,qr,2,2,`mat-hint`,22),LI(2,7),bh(3,`div`,23),LI(4,8),Cu()),b&2){let d=OI();bD(),wI(d.hintLabel?1:-1)}}return mu({type:i,selectors:[[`mat-form-field`]],contentQueries:function(N,d,w){if(N&1&&(Oh(w,d._labelChild,ut,5),xh(w,ht,5)(w,Vo,5)(w,Po,5)(w,_r,5)(w,ft,5)),N&2){BI();let J;jI(J=VI())&&(d._formFieldControl=J.first),jI(J=VI())&&(d._prefixChildren=J),jI(J=VI())&&(d._suffixChildren=J),jI(J=VI())&&(d._errorChildren=J),jI(J=VI())&&(d._hintChildren=J)}},viewQuery:function(N,d){if(N&1&&(kh(d._iconPrefixContainerSignal,e,5)(d._textPrefixContainerSignal,n,5)(d._iconSuffixContainerSignal,r,5)(d._textSuffixContainerSignal,o,5),Rh(a,5)(e,5)(n,5)(r,5)(o,5)(ur,5)(pr,5)(hr,5)),N&2){BI(4);let w;jI(w=VI())&&(d._textField=w.first),jI(w=VI())&&(d._iconPrefixContainer=w.first),jI(w=VI())&&(d._textPrefixContainer=w.first),jI(w=VI())&&(d._iconSuffixContainer=w.first),jI(w=VI())&&(d._textSuffixContainer=w.first),jI(w=VI())&&(d._floatingLabel=w.first),jI(w=VI())&&(d._notchedOutline=w.first),jI(w=VI())&&(d._lineRipple=w.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(N,d){N&2&&Ph(`mat-mdc-form-field-label-always-float`,d._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,d._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,d._hasIconSuffix)(`mat-form-field-invalid`,d._unwrapMaybeSignal(d._control.errorState))(`mat-form-field-disabled`,d._unwrapMaybeSignal(d._control.disabled))(`mat-form-field-autofilled`,d._unwrapMaybeSignal(d._control.autofilled))(`mat-form-field-appearance-fill`,d.appearance==`fill`)(`mat-form-field-appearance-outline`,d.appearance==`outline`)(`mat-form-field-hide-placeholder`,d._hasFloatingLabel()&&!d._shouldLabelFloat())(`mat-primary`,d.color!==`accent`&&d.color!==`warn`)(`mat-accent`,d.color===`accent`)(`mat-warn`,d.color===`warn`)(`ng-untouched`,d._shouldForward(`untouched`))(`ng-touched`,d._shouldForward(`touched`))(`ng-pristine`,d._shouldForward(`pristine`))(`ng-dirty`,d._shouldForward(`dirty`))(`ng-valid`,d._shouldForward(`valid`))(`ng-invalid`,d._shouldForward(`invalid`))(`ng-pending`,d._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[qh([{provide:pt,useExisting:i},{provide:vr,useExisting:i}])],ngContentSelectors:h,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(N,d){if(N&1&&(FI(m),Dh(0,M,1,1,`ng-template`,null,0,Iw),$i$1(2,`div`,6,1),Nh(`click`,function(J){return d._control.onContainerClick(J)}),EI(4,P,1,0,`div`,7),$i$1(5,`div`,8),EI(6,Y,2,2,`div`,9),EI(7,Qt,3,0,`div`,10),EI(8,Vr,3,0,`div`,11),$i$1(9,`div`,12),EI(10,Lr,1,1,null,13),LI(11),Cu(),EI(12,zr,3,0,`div`,14),EI(13,jr,3,0,`div`,15),Cu(),EI(14,Br,1,0,`div`,16),Cu(),$i$1(15,`div`,17),EI(16,Gr,2,0,`div`,18)(17,Hr,5,1,`div`,19),Cu()),N&2){let w,J=d._unwrapMaybeSignal(d._control.disabled);bD(2),Ph(`mdc-text-field--filled`,!d._hasOutline())(`mdc-text-field--outlined`,d._hasOutline())(`mdc-text-field--no-label`,!d._hasFloatingLabel())(`mdc-text-field--disabled`,J)(`mdc-text-field--invalid`,d._unwrapMaybeSignal(d._control.errorState)),bD(2),wI(!d._hasOutline()&&!J?4:-1),bD(2),wI(d._hasOutline()?6:-1),bD(),wI(d._hasIconPrefix?7:-1),bD(),wI(d._hasTextPrefix?8:-1),bD(2),wI(!d._hasOutline()||d._forceDisplayInfixLabel()?10:-1),bD(2),wI(d._hasTextSuffix?12:-1),bD(),wI(d._hasIconSuffix?13:-1),bD(),wI(d._hasOutline()?-1:14),bD(),Ph(`mat-mdc-form-field-subscript-dynamic-size`,d.subscriptSizing===`dynamic`);let Ur=d._getSubscriptMessageType();bD(),wI((w=Ur)===`error`?16:w===`hint`?17:-1)}},dependencies:[ur,pr,lC,hr,ft],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var Te=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[Nn$1,Bt,IB]})}return i})();var qo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=mu({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})();var Ho={passive:!0};var yr=(()=>{class i{_platform=g(g$1);_ngZone=g(re);_renderer=g(rn).createRenderer(null,null);_styleLoader=g(rb);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Rt$1;this._styleLoader.load(qo);let n=S(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new Z$1,a=`cdk-text-field-autofilled`,m=I=>{I.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:I.target,isAutofilled:!0}))):I.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:I.target,isAutofilled:!1})))},h=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,m,Ho)));return this._monitoredElements.set(n,{subject:o,unlisten:h}),o}stopMonitoring(e){let n=S(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=se({token:i,factory:i.ɵfac})}return i})();var xr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({})}return i})();var kr=new E(`MAT_INPUT_VALUE_ACCESSOR`);var Gt=(()=>{class i{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}isSignalErrorState(e){if(!e)return!1;let n=e().invalid(),r=e().touched();return n&&r}static ɵfac=function(n){return new(n||i)};static ɵprov=se({token:i,factory:i.ɵfac})}return i})();var Xe=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(t,e,n,r,o){this._defaultMatcher=t,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o,e?vi(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let t=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==t&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&t?.isSignalErrorState)return t.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,n=this.ngControl?this.ngControl.control:null;return t?.isErrorState(n,e)??!1}};var Uo=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Wo=new E(`MAT_INPUT_CONFIG`);var Cr=(()=>{class i{_elementRef=g(an);_platform=g(g$1);ngControl=g(ge,{optional:!0,self:!0});_autofillMonitor=g(yr);_ngZone=g(re);_formField=g(pt,{optional:!0});_renderer=g(zr);_uid=g(_t).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=g(Wo,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Z$1;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Wa(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(X.required)??!1}set required(e){this._required=Wa(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Ta().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Wa(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Ta().has(e));constructor(){let e=g(ct,{optional:!0}),n=g(Re,{optional:!0}),r=g(Gt),o=g(kr,{optional:!0,self:!0}),a=g(zt,{optional:!0,self:!0}),m=this._elementRef.nativeElement,h=m.nodeName.toLowerCase();o?vi(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=m,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(m,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Xe(r,a||this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=h===`select`,this._isTextarea=h===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=m.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Fd(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type===`number`?(n.type=`text`,n.setSelectionRange(0,0),n.type=`number`):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute(`placeholder`,e):n.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Uo.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(n,r){n&1&&Nh(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),n&2&&(_h(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Iu(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),Ph(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,nC]},exportAs:[`matInput`],features:[qh([{provide:ht,useExisting:i}]),jc]})}return i})();var Sr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[Te,Te,xr,IB]})}return i})();var bt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z$1;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,n=!0,r){this._multiple=t,this._emitChanges=n,this.compareWith=r,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var Fn=(()=>{class i{_listeners=[];notify(e,n){for(let r of this._listeners)r(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||i)};static ɵprov=se({token:i,factory:i.ɵfac})}return i})();var qt=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Ko={provide:Ye,useExisting:qo$1(()=>On),multi:!0};var Mr=new E(`MatRadioGroup`);var Qo=new E(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var On=(()=>{class i{_changeDetector=g(sg);_value=null;_name=g(_t).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new we$1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new qt(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||i)};static ɵdir=ts({type:i,selectors:[[`mat-radio-group`]],contentQueries:function(n,r,o){if(n&1&&xh(o,Ht,5),n&2){let a;jI(a=VI())&&(r._radios=a)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,nC],required:[2,`required`,`required`,nC],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,nC]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[qh([Ko,{provide:Mr,useExisting:i}])]})}return i})();var Ht=(()=>{class i{_elementRef=g(an);_changeDetector=g(sg);_focusMonitor=g(ht$1);_radioDispatcher=g(Fn);_defaultOptions=g(Qo,{optional:!0});_ngZone=g(re);_renderer=g(zr);_uniqueId=g(_t).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new we$1;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=z();_injector=g(Y);constructor(){g(rb).load(_e);let e=g(Mr,{optional:!0}),n=g(new Jh(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=rC(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new qt(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let r=this._inputElement?.nativeElement;r&&(r.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,oD(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===r&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===r&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`input`],n=[`formField`];return mu({type:i,selectors:[[`mat-radio-button`]],viewQuery:function(a,m){if(a&1&&Rh(e,5)(n,7,an),a&2){let h;jI(h=VI())&&(m._inputElement=h.first),jI(h=VI())&&(m._rippleTrigger=h.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(a,m){a&1&&Nh(`focus`,function(){return m._inputElement.nativeElement.focus()}),a&2&&(Iu(`id`,m.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),Ph(`mat-primary`,m.color===`primary`)(`mat-accent`,m.color===`accent`)(`mat-warn`,m.color===`warn`)(`mat-mdc-radio-checked`,m.checked)(`mat-mdc-radio-disabled`,m.disabled)(`mat-mdc-radio-disabled-interactive`,m.disabledInteractive)(`_mat-animation-noopable`,m._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,nC],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:rC(o)],checked:[2,`checked`,`checked`,nC],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,nC],required:[2,`required`,`required`,nC],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,nC]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(a,m){a&1&&(FI(),$i$1(0,`label`,2,0)(2,`span`,3),bh(3,`span`,4),$i$1(4,`input`,5,1),Nh(`change`,function(I){return m._onInputInteraction(I)}),Cu(),$i$1(6,`span`,6),bh(7,`span`,7)(8,`span`,8),Cu(),$i$1(9,`span`,9),bh(10,`span`,10),Cu()(),$i$1(11,`span`,11),LI(12),Cu()()),a&2&&(Ch(`labelPosition`,m.labelPosition)(`for`,m.inputId),bD(2),Ph(`mdc-radio--disabled`,m.disabled),bD(2),Ch(`id`,m.inputId)(`checked`,m.checked)(`disabled`,m.disabled&&!m.disabledInteractive)(`required`,m.required),Iu(`name`,m.name)(`value`,m.value)(`aria-label`,m.ariaLabel)(`aria-labelledby`,m.ariaLabelledby)(`aria-describedby`,m.ariaDescribedby)(`aria-disabled`,m.disabled&&m.disabledInteractive?`true`:null),bD(5),Ch(`matRippleTrigger`,m._rippleTrigger.nativeElement)(`matRippleDisabled`,m._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[oo$1,Lt],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return i})();var Nr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[Ne,Ht,IB]})}return i})();var wr=(()=>{class i{_animationsDisabled=z();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||i)};static ɵcmp=mu({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,r){n&2&&Ph(`mat-pseudo-checkbox-indeterminate`,r.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,r.state===`checked`)(`mat-pseudo-checkbox-disabled`,r.disabled)(`mat-pseudo-checkbox-minimal`,r.appearance===`minimal`)(`mat-pseudo-checkbox-full`,r.appearance===`full`)(`_mat-animation-noopable`,r._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var Tn=new E(`MAT_OPTION_PARENT_COMPONENT`);var Vn=new E(`MatOptgroup`);var Rn=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}};var Ze=(()=>{class i{_element=g(an);_changeDetectorRef=g(sg);_parent=g(Tn,{optional:!0});group=g(Vn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=g(_t).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Fn$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new we$1;_text;_stateChanges=new Z$1;constructor(){let e=g(rb);e.load(_e),e.load(pB),this._signalDisableRipple=!!this._parent&&vi(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus==`function`&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!de(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Rn(this,e))}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`text`],n=[[[`mat-icon`]],`*`],r=[`mat-icon`,`*`];function o(h,I){if(h&1&&bh(0,`mat-pseudo-checkbox`,1),h&2){let v=OI();Ch(`disabled`,v.disabled)(`state`,v.selected?`checked`:`unchecked`)}}function a(h,I){if(h&1&&bh(0,`mat-pseudo-checkbox`,3),h&2){let v=OI();Ch(`disabled`,v.disabled)}}function m(h,I){if(h&1&&($i$1(0,`span`,4),lw(1),Cu()),h&2){let v=OI();bD(),Su(`(`,v.group.label,`)`)}}return mu({type:i,selectors:[[`mat-option`]],viewQuery:function(I,v){if(I&1&&Rh(e,7),I&2){let M;jI(M=VI())&&(v._text=M.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(I,v){I&1&&Nh(`click`,function(){return v._selectViaInteraction()})(`keydown`,function(P){return v._handleKeydown(P)}),I&2&&(_h(`id`,v.id),Iu(`aria-selected`,v.selected)(`aria-disabled`,v.disabled.toString()),Ph(`mdc-list-item--selected`,v.selected)(`mat-mdc-option-multiple`,v.multiple)(`mat-mdc-option-active`,v.active)(`mdc-list-item--disabled`,v.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,nC]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:r,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(I,v){I&1&&(FI(n),EI(0,o,1,2,`mat-pseudo-checkbox`,1),LI(1),$i$1(2,`span`,2,0),LI(4,1),Cu(),EI(5,a,1,1,`mat-pseudo-checkbox`,3),EI(6,m,2,1,`span`,4),bh(7,`div`,5)),I&2&&(wI(v.multiple?0:-1),bD(5),wI(!v.multiple&&v.selected&&!v.hideSingleSelectionIndicator?5:-1),bD(),wI(v.group&&v.group._inert?6:-1),bD(),Ch(`matRippleTrigger`,v._getHostElement())(`matRippleDisabled`,v.disabled||v.disableRipple))},dependencies:[wr,oo$1],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function Er(i,t,e){if(e.length){let n=t.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function Dr(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var Ir=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[IB]})}return i})();var Pn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[Ne,Ir,Ze,IB]})}return i})();var ta=new E(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=g(Y);return()=>bt$1(i)}});var na=new E(`MAT_SELECT_CONFIG`);var ia=new E(`MatSelectTrigger`);var Ln=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Or=(()=>{class i{_viewportRuler=g(I);_changeDetectorRef=g(sg);_elementRef=g(an);_dir=g(cb,{optional:!0});_idGenerator=g(_t);_renderer=g(zr);_parentFormField=g(pt,{optional:!0});ngControl=g(ge,{self:!0,optional:!0});_liveAnnouncer=g(Me);_defaultOptions=g(na,{optional:!0});_animationsDisabled=z();_popoverLocation;_initialized=new Z$1;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let r=this.panel.nativeElement,o=Er(e,this.options,this.optionGroups),a=n._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Dr(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ln(this,e)}_scrollStrategyFactory=g(ta);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Z$1;_errorStateTracker;stateChanges=new Z$1;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Fn$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(X.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=bm(()=>{let e=this.options;return e?e.changes.pipe(Pm(e),Rl(()=>Sm(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Rl(()=>this.optionSelectionChanges))});openedChange=new we$1;_openedStream=this.openedChange.pipe(mt$1(e=>e),fe(()=>{}));_closedStream=this.openedChange.pipe(mt$1(e=>!e),fe(()=>{}));selectionChange=new we$1;valueChange=new we$1;constructor(){let e=g(Gt),n=g(ct,{optional:!0}),r=g(Re,{optional:!0}),o=g(new Jh(`tabindex`),{optional:!0}),a=g(St,{optional:!0}),m=g(zt,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Xe(e,m||this.ngControl,r,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new bt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(jm(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(jm(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(Pm(null),jm(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute(`aria-labelledby`,e):r.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Us(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,r=n===40||n===38||n===37||n===39,o=n===13||n===32,a=this._keyManager;if(!a.isTyping()&&o&&!de(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;a.onKeydown(e);let h=this.selected;h&&m!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,r=e.keyCode,o=r===40||r===38,a=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&n.activeItem&&!de(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(m?h.select():h.deselect())})}else{let m=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==m&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!de(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof wt$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new gt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Sm(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(jm(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Sm(...this.options.map(n=>n._stateChanges)).pipe(jm(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,r)=>this.sortComparator?this.sortComparator(n,r,e):e.indexOf(n)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(r=>r.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=f(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`trigger`],n=[`panel`],r=[[[`mat-select-trigger`]],`*`],o=[`mat-select-trigger`,`*`];function a(M,P){if(M&1&&($i$1(0,`span`,4),lw(1),Cu()),M&2){let f=OI();bD(),Uh(f.placeholder)}}function m(M,P){M&1&&LI(0)}function h(M,P){if(M&1&&($i$1(0,`span`,11),lw(1),Cu()),M&2){let f=OI(2);bD(),Uh(f.triggerValue)}}function I(M,P){if(M&1&&($i$1(0,`span`,5),EI(1,m,1,0)(2,h,2,1,`span`,11),Cu()),M&2){let f=OI();bD(),wI(f.customTrigger?1:2)}}function v(M,P){if(M&1){let f=AI();$i$1(0,`div`,12,1),Nh(`keydown`,function(Y){dd(f);let Qt=OI();return fd(Qt._handleKeydown(Y))}),LI(2,1),Cu()}if(M&2){let f=OI();XI(f.panelClass),Ph(`mat-select-panel-animations-enabled`,!f._animationsDisabled)(`mat-primary`,f._parentFormField?.color===`primary`)(`mat-accent`,f._parentFormField?.color===`accent`)(`mat-warn`,f._parentFormField?.color===`warn`)(`mat-undefined`,!f._parentFormField?.color),Iu(`id`,f.id+`-panel`)(`aria-multiselectable`,f.multiple)(`aria-label`,f.ariaLabel||null)(`aria-labelledby`,f._getPanelAriaLabelledby())}}return mu({type:i,selectors:[[`mat-select`]],contentQueries:function(P,f,A){if(P&1&&xh(A,ia,5)(A,Ze,5)(A,Vn,5),P&2){let Y;jI(Y=VI())&&(f.customTrigger=Y.first),jI(Y=VI())&&(f.options=Y),jI(Y=VI())&&(f.optionGroups=Y)}},viewQuery:function(P,f){if(P&1&&Rh(e,5)(n,5)(_e$1,5),P&2){let A;jI(A=VI())&&(f.trigger=A.first),jI(A=VI())&&(f.panel=A.first),jI(A=VI())&&(f._overlayDir=A.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(P,f){P&1&&Nh(`keydown`,function(Y){return f._handleKeydown(Y)})(`focus`,function(){return f._onFocus()})(`blur`,function(){return f._onBlur()}),P&2&&(Iu(`id`,f.id)(`tabindex`,f.disabled?-1:f.tabIndex)(`aria-controls`,f.panelOpen?f.id+`-panel`:null)(`aria-expanded`,f.panelOpen)(`aria-label`,f.ariaLabel||null)(`aria-required`,f.required.toString())(`aria-disabled`,f.disabled.toString())(`aria-invalid`,f.errorState)(`aria-activedescendant`,f._getAriaActiveDescendant()),Ph(`mat-mdc-select-disabled`,f.disabled)(`mat-mdc-select-invalid`,f.errorState)(`mat-mdc-select-required`,f.required)(`mat-mdc-select-empty`,f.empty)(`mat-mdc-select-multiple`,f.multiple)(`mat-select-open`,f.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,nC],disableRipple:[2,`disableRipple`,`disableRipple`,nC],tabIndex:[2,`tabIndex`,`tabIndex`,M=>M==null?0:rC(M)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,nC],placeholder:`placeholder`,required:[2,`required`,`required`,nC],multiple:[2,`multiple`,`multiple`,nC],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,nC],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,rC],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,nC]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[qh([{provide:ht,useExisting:i},{provide:Tn,useExisting:i}]),jc],ngContentSelectors:o,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(P,f){if(P&1&&(FI(r),$i$1(0,`div`,2,0),Nh(`click`,function(){return f.open()}),$i$1(3,`div`,3),EI(4,a,2,1,`span`,4)(5,I,3,1,`span`,5),Cu(),$i$1(6,`div`,6)(7,`div`,7),Td(),$i$1(8,`svg`,8),bh(9,`path`,9),Cu()()()(),Dh(10,v,3,16,`ng-template`,10),Nh(`detach`,function(){return f.close()})(`backdropClick`,function(){return f.close()})(`overlayKeydown`,function(Y){return f._handleOverlayKeydown(Y)})),P&2){let A=HI(1);bD(3),Iu(`id`,f._valueId),bD(),wI(f.empty?4:5),bD(6),Ch(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,f._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,f._scrollStrategy)(`cdkConnectedOverlayOrigin`,f._preferredOverlayOrigin||A)(`cdkConnectedOverlayPositions`,f._positions)(`cdkConnectedOverlayWidth`,f._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,f._popoverLocation)}},dependencies:[wt$1,_e$1],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var Rr=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Kn({type:i});static ɵinj=Ht$1({imports:[ve,Pn,IB,Lt$1,Te,Pn]})}return i})();var $t=class i{http=g(jg);config=g(Rt$2);get isConfigured(){return!!this.config.contact.formEndpoint}submit(t){let e=this.config.contact.formEndpoint;return e?this.http.post(e,t,{headers:{Accept:`application/json`}}).pipe(fe(()=>`sent`),Bs(()=>Vs(`failed`))):Vs(`unavailable`)}static ɵfac=function(e){return new(e||i)};static ɵprov=x({token:i,factory:i.ɵfac,providedIn:`root`})};var aa=(i,t)=>t.value;function la(i,t){i&1&&($i$1(0,`div`,0)(1,`mat-icon`),lw(2,`check_circle`),Cu(),$i$1(3,`p`),lw(4,`Votre demande a bien été envoyée. Nous vous recontactons dès que possible.`),Cu()())}function sa(i,t){i&1&&($i$1(0,`p`,3),lw(1,`Le formulaire ne transmet pas encore les demandes.`),Cu())}function da(i,t){i&1&&($i$1(0,`mat-error`),lw(1,`Indiquez votre nom.`),Cu())}function ca(i,t){i&1&&($i$1(0,`mat-error`),lw(1,`Le nom doit comporter au moins 2 caractères.`),Cu())}function ma(i,t){i&1&&($i$1(0,`mat-error`),lw(1,`Indiquez un numéro de téléphone.`),Cu())}function ua(i,t){i&1&&($i$1(0,`mat-error`),lw(1,`Ce numéro n’est pas valide. Utilisez un numéro français à 10 chiffres.`),Cu())}function fa(i,t){if(i&1&&($i$1(0,`mat-option`,11),lw(1),Cu()),i&2){let e=t.$implicit;Ch(`value`,e.value),bD(),Uh(e.label)}}function ha(i,t){i&1&&($i$1(0,`p`,19)(1,`mat-icon`),lw(2,`error`),Cu(),lw(3,` Cochez cette case pour envoyer votre demande. `),Cu())}function pa(i,t){i&1&&($i$1(0,`div`,20)(1,`mat-icon`),lw(2,`error`),Cu(),$i$1(3,`p`),lw(4,` L’envoi a échoué et votre demande n’a pas été transmise. Réessayez ou contactez-nous directement. `),Cu()())}function ba(i,t){i&1&&($i$1(0,`p`,19)(1,`mat-icon`),lw(2,`error`),Cu(),lw(3,` Corrigez les champs signalés avant d’envoyer. `),Cu())}function ga(i,t){i&1&&($i$1(0,`li`)(1,`a`,24),lw(2,`Envoyer ce message sur WhatsApp `),$i$1(3,`span`,25),lw(4,`(nouvel onglet)`),Cu()()()),i&2&&(bD(),Ch(`href`,t,dp))}function _a(i,t){i&1&&($i$1(0,`li`)(1,`a`,26),lw(2,`Appeler le numéro fixe`),Cu()()),i&2&&(bD(),Ch(`href`,t,dp))}function va(i,t){i&1&&($i$1(0,`li`)(1,`a`,26),lw(2,`Appeler le portable`),Cu()()),i&2&&(bD(),Ch(`href`,t,dp))}function ya(i,t){i&1&&($i$1(0,`li`)(1,`a`,26),lw(2,`Écrire par e-mail`),Cu()()),i&2&&(bD(),Ch(`href`,t,dp))}function xa(i,t){i&1&&($i$1(0,`p`),lw(1,`Les coordonnées de contact seront publiées prochainement.`),Cu())}function ka(i,t){if(i&1&&($i$1(0,`section`,22)(1,`mat-icon`),lw(2,`info`),Cu(),$i$1(3,`div`)(4,`h3`,23),lw(5,`L’envoi en ligne n’est pas disponible pour le moment.`),Cu(),$i$1(6,`p`),lw(7,`Votre demande n’a pas été envoyée. Utilisez l’un de ces moyens :`),Cu(),$i$1(8,`ul`),EI(9,ga,5,1,`li`),EI(10,_a,3,1,`li`),EI(11,va,3,1,`li`),EI(12,ya,3,1,`li`),Cu(),EI(13,xa,2,0,`p`),Cu()()),i&2){let e,n,r,o,a=OI(2);bD(9),wI((e=a.whatsappFallback())?9:-1,e),bD(),wI((n=a.telFallback())?10:-1,n),bD(),wI((r=a.mobileTelFallback())?11:-1,r),bD(),wI((o=a.mailFallback())?12:-1,o),bD(),wI(!a.whatsappFallback()&&!a.telFallback()&&!a.mobileTelFallback()&&!a.mailFallback()?13:-1)}}function Ca(i,t){if(i&1){let e=AI();$i$1(0,`form`,1),Nh(`ngSubmit`,function(){dd(e);let r=OI();return fd(r.submit())}),$i$1(1,`h2`,2),lw(2,`Préparer votre demande`),Cu(),EI(3,sa,2,0,`p`,3),$i$1(4,`mat-form-field`,4)(5,`mat-label`),lw(6,`Nom`),Cu(),$i$1(7,`input`,5),fE(),Cu(),EI(8,da,2,0,`mat-error`)(9,ca,2,0,`mat-error`),Cu(),$i$1(10,`mat-form-field`,4)(11,`mat-label`),lw(12,`Téléphone`),Cu(),$i$1(13,`input`,6),fE(),Cu(),$i$1(14,`mat-hint`),lw(15,`Exemple : 06 12 34 56 78`),Cu(),EI(16,ma,2,0,`mat-error`)(17,ua,2,0,`mat-error`),Cu(),$i$1(18,`fieldset`)(19,`legend`),lw(20,`Comment souhaitez-vous être contacté(e) ?`),Cu(),$i$1(21,`mat-radio-group`,7),fE(),$i$1(22,`mat-radio-button`,8),lw(23,`Appel téléphonique`),Cu(),$i$1(24,`mat-radio-button`,9),lw(25,`WhatsApp`),Cu()()(),$i$1(26,`mat-form-field`,4)(27,`mat-label`),lw(28,`Service concerné`),Cu(),$i$1(29,`mat-select`,10),fE(),bI(30,fa,2,2,`mat-option`,11,aa),Cu()(),$i$1(32,`mat-form-field`,4)(33,`mat-label`),lw(34,`Message (facultatif)`),Cu(),$i$1(35,`textarea`,12),fE(),Cu(),$i$1(36,`mat-hint`,13),lw(37),Cu()(),$i$1(38,`div`,14)(39,`label`),lw(40,`Ne pas remplir `),$i$1(41,`input`,15),fE(),Cu()()(),$i$1(42,`div`,16)(43,`mat-checkbox`,17),fE(),lw(44,` J’accepte que ces informations soient utilisées pour répondre à ma demande. `),$i$1(45,`a`,18),lw(46,`En savoir plus`),Cu()(),EI(47,ha,4,0,`p`,19),Cu(),EI(48,pa,5,0,`div`,20),$i$1(49,`button`,21),lw(50),Cu(),EI(51,ba,4,0,`p`,19),Cu(),EI(52,ka,14,5,`section`,22)}if(i&2){let e=OI();Ch(`formGroup`,e.form),bD(3),wI(e.deliveryConfigured?-1:3),bD(4),hE(),bD(),wI(e.form.controls.name.hasError(`required`)?8:e.form.controls.name.hasError(`minlength`)?9:-1),bD(5),hE(),bD(3),wI(e.form.controls.phone.hasError(`required`)?16:e.form.controls.phone.hasError(`frenchPhone`)?17:-1),bD(5),hE(),bD(8),hE(),bD(),TI(e.serviceOptions),bD(5),hE(),bD(2),Su(``,e.form.controls.message.value.length,` / 500`),bD(4),hE(),bD(2),hE(),bD(4),wI(e.submitted()&&e.form.controls.consent.hasError(`required`)?47:-1),bD(),wI(e.state()===`failed`?48:-1),bD(),Ch(`disabled`,e.state()===`sending`),bD(),Su(` `,e.state()===`sending`?`Envoi en cours…`:e.deliveryConfigured?`Envoyer la demande`:`Voir les options`,` `),bD(),wI(e.submitted()&&e.form.invalid?51:-1),bD(),wI(e.state()===`unavailable`?52:-1)}}function Sa(i){let t=i.value??``;return t===``||m(t)?null:{frenchPhone:!0}}var zn={location:`Location de véhicule à double commande`,lecons:`Leçons de conduite`,autre:`Autre demande`};var Kt=class i{fb=g(or);delivery=g($t);links=g(u);initialService=LP(`autre`);initialMessage=LP(``);initialContactMethod=LP(`appel`);serviceOptions=Object.keys(zn).map(t=>({value:t,label:zn[t]}));state=Fn$1(`idle`);deliveryConfigured=this.delivery.isConfigured;form=this.fb.nonNullable.group({name:[``,[X.required,X.minLength(2),X.maxLength(80)]],phone:[``,[X.required,Sa]],contactMethod:this.fb.nonNullable.control(this.initialContactMethod(),X.required),service:this.fb.nonNullable.control(this.initialService(),X.required),message:[this.initialMessage().slice(0,500),X.maxLength(500)],consent:[!1,X.requiredTrue],website:[``]});submitted=Fn$1(!1);constructor(){Fd(()=>{this.form.patchValue({service:this.initialService(),contactMethod:this.initialContactMethod(),message:this.initialMessage().slice(0,500)},{emitEvent:!1})})}summary=bw(()=>{let t=this.form.getRawValue();return[`Bonjour, je souhaite être contacté(e).`,`Nom : ${t.name}`,`T\xE9l\xE9phone : ${t.phone}`,`Sujet : ${zn[t.service]}`,t.message?`Message : ${t.message}`:``].filter(Boolean).join(`
`)});whatsappFallback(){return this.links.whatsappHref(this.summary())}mailFallback(){return this.links.mailtoHref(`Demande de contact`,this.summary())}telFallback(){return this.links.telHref()}mobileTelFallback(){return this.links.mobileTelHref()}submit(){if(this.submitted.set(!0),this.form.invalid){this.form.markAllAsTouched();return}let t=this.form.getRawValue();if(t.website){this.state.set(`sent`);return}this.state.set(`sending`),this.delivery.submit({name:t.name.trim(),phone:t.phone.trim(),contactMethod:t.contactMethod,service:t.service,message:t.message.trim()}).subscribe(e=>{this.state.set(e),e===`sent`&&(this.form.reset({contactMethod:this.initialContactMethod(),service:this.initialService(),message:this.initialMessage().slice(0,500),consent:!1}),this.submitted.set(!1))})}static ɵfac=function(e){return new(e||i)};static ɵcmp=mu({type:i,selectors:[[`app-contact-form`]],inputs:{initialService:[1,`initialService`],initialMessage:[1,`initialMessage`],initialContactMethod:[1,`initialContactMethod`]},decls:2,vars:1,consts:[[`role`,`status`,1,`status`,`success`],[`novalidate`,``,`aria-labelledby`,`form-title`,3,`ngSubmit`,`formGroup`],[`id`,`form-title`],[1,`form-note`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`name`,`autocomplete`,`name`,`required`,``],[`matInput`,``,`type`,`tel`,`formControlName`,`phone`,`autocomplete`,`tel`,`inputmode`,`tel`,`required`,``],[`formControlName`,`contactMethod`,`aria-label`,`Moyen de contact préféré`],[`value`,`appel`],[`value`,`whatsapp`],[`formControlName`,`service`,`required`,``],[3,`value`],[`matInput`,``,`formControlName`,`message`,`rows`,`4`,`maxlength`,`500`],[`align`,`end`],[`aria-hidden`,`true`,1,`hp`],[`type`,`text`,`formControlName`,`website`,`tabindex`,`-1`,`autocomplete`,`off`],[1,`consent`],[`formControlName`,`consent`],[`routerLink`,`/confidentialite`,`target`,`_blank`],[`role`,`alert`,1,`field-error`],[`role`,`alert`,1,`status`,`error`],[`mat-flat-button`,``,`type`,`submit`,3,`disabled`],[`role`,`status`,`aria-labelledby`,`fallback-title`,1,`status`,`fallback`],[`id`,`fallback-title`],[`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[1,`visually-hidden`],[3,`href`]],template:function(e,n){e&1&&EI(0,la,5,0,`div`,0)(1,Ca,53,11),e&2&&wI(n.state()===`sent`?0:1)},dependencies:[ar,ir,Tt,tr,nr,Pt,kn,Re,Nn,Fo$1,Do$1,lr,Dn,Te,Bt,ut,ft,An,Nt$1,bt$2,Sr,Cr,Nr,On,Ht,Rr,Or,Ze,_t$1],styles:[`form[_ngcontent-%COMP%]{display:grid;gap:.5rem;max-width:34rem}h2[_ngcontent-%COMP%]{margin:0 0 .5rem}.form-note[_ngcontent-%COMP%]{margin:0 0 .75rem;padding:.75rem 1rem;border-inline-start:4px solid var(--%NS%pyb-blue-500);background:var(--%NS%pyb-blue-100);color:var(--%NS%pyb-blue-900)}fieldset[_ngcontent-%COMP%]{border:0;padding:0;margin:0 0 1rem}legend[_ngcontent-%COMP%]{font-weight:600;margin-bottom:.25rem}mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:0 1.5rem}.hp[_ngcontent-%COMP%]{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}.consent[_ngcontent-%COMP%]{margin-bottom:1rem}.field-error[_ngcontent-%COMP%]{display:flex;gap:.375rem;align-items:center;margin:.25rem 0 0;color:var(--%NS%pyb-danger);font-weight:600}.field-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none}.status[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:flex-start;padding:1rem;border-left:4px solid;margin:1rem 0;max-width:34rem}.status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .status[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem}.status[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:1.25rem}.status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{flex:none}.success[_ngcontent-%COMP%]{border-color:var(--%NS%pyb-green-700);background:var(--%NS%pyb-green-100)}.success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%pyb-green-700)}.error[_ngcontent-%COMP%]{border-color:var(--%NS%pyb-danger);background:#fdecea}.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%pyb-danger)}.fallback[_ngcontent-%COMP%]{border-color:var(--%NS%pyb-blue-500);background:var(--%NS%pyb-blue-100)}.fallback[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%pyb-blue-700)}`]})};var Tr=class i{route=g(W);queryParams=Ei(this.route.queryParamMap,{initialValue:this.route.snapshot.queryParamMap});initialService=bw(()=>{let t=this.queryParams().get(`service`);return t===`location`||t===`lecons`||t===`autre`?t:`autre`});initialContactMethod=bw(()=>this.queryParams().get(`contactMethod`)===`whatsapp`?`whatsapp`:`appel`);initialMessage=bw(()=>(this.queryParams().get(`message`)??``).slice(0,500));static ɵfac=function(e){return new(e||i)};static ɵcmp=mu({type:i,selectors:[[`app-contact`]],decls:10,vars:4,consts:[[1,`container`,`page`,`contact-page`],[1,`eyebrow`],[1,`lead`],[`service`,`autre`,3,`showRequest`],[`id`,`rappel`,1,`form-section`],[3,`initialService`,`initialContactMethod`,`initialMessage`]],template:function(e,n){e&1&&($i$1(0,`div`,0)(1,`p`,1),lw(2,`À votre écoute`),Cu(),$i$1(3,`h1`),lw(4,`Contactez-nous`),Cu(),$i$1(5,`p`,2),lw(6,`Choisissez votre moyen de contact.`),Cu(),bh(7,`app-contact-actions`,3),$i$1(8,`section`,4),bh(9,`app-contact-form`,5),Cu()()),e&2&&(bD(7),Ch(`showRequest`,!1),bD(2),Ch(`initialService`,n.initialService())(`initialContactMethod`,n.initialContactMethod())(`initialMessage`,n.initialMessage()))},dependencies:[P,Kt],styles:[`.contact-page[_ngcontent-%COMP%] > app-contact-actions[_ngcontent-%COMP%]{display:block;margin-block:1.5rem 2rem}.form-section[_ngcontent-%COMP%]{scroll-margin-top:6rem;max-width:44rem;padding:1.25rem;border:1px solid var(--%NS%pyb-line);border-radius:var(--%NS%pyb-radius);background:var(--%NS%pyb-bg)}@media(min-width:48rem){.form-section[_ngcontent-%COMP%]{padding:2rem}}`]})};export{Tr as Contact};