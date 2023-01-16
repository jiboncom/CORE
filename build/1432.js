"use strict";(globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT=globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1432],{86839:(t,e,n)=>{n.d(e,{a:()=>o});var s,i=n(23203),r=n(4947);class o{constructor(t={}){this._array=[],this._isDisposed=!1,this._changed=new r.Signal(this),void 0!==t.values&&(0,i.each)(t.values,(t=>{this._array.push(t)})),this._itemCmp=t.itemCmp||s.itemCmp}get type(){return"List"}get changed(){return this._changed}get length(){return this._array.length}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,r.Signal.clearData(this),this.clear())}iter(){return new i.ArrayIterator(this._array)}get(t){return this._array[t]}set(t,e){const n=this._array[t];if(void 0===e)throw new Error("Cannot set an undefined item");(0,this._itemCmp)(n,e)||(this._array[t]=e,this._changed.emit({type:"set",oldIndex:t,newIndex:t,oldValues:[n],newValues:[e]}))}push(t){const e=this._array.push(t);return this._changed.emit({type:"add",oldIndex:-1,newIndex:this.length-1,oldValues:[],newValues:[t]}),e}insert(t,e){t===this._array.length?this._array.push(e):i.ArrayExt.insert(this._array,t,e),this._changed.emit({type:"add",oldIndex:-2,newIndex:t,oldValues:[],newValues:[e]})}removeValue(t){const e=this._itemCmp,n=i.ArrayExt.findFirstIndex(this._array,(n=>e(n,t)));return this.remove(n),n}remove(t){const e=i.ArrayExt.removeAt(this._array,t);if(void 0!==e)return this._changed.emit({type:"remove",oldIndex:t,newIndex:-1,newValues:[],oldValues:[e]}),e}clear(){const t=this._array.slice();this._array.length=0,this._changed.emit({type:"remove",oldIndex:0,newIndex:0,newValues:[],oldValues:t})}move(t,e){if(this.length<=1||t===e)return;const n=[this._array[t]];i.ArrayExt.move(this._array,t,e),this._changed.emit({type:"move",oldIndex:t,newIndex:e,oldValues:n,newValues:n})}pushAll(t){const e=this.length;return(0,i.each)(t,(t=>{this._array.push(t)})),this._changed.emit({type:"add",oldIndex:-1,newIndex:e,oldValues:[],newValues:(0,i.toArray)(t)}),this.length}insertAll(t,e){const n=t;(0,i.each)(e,(e=>{i.ArrayExt.insert(this._array,t++,e)})),this._changed.emit({type:"add",oldIndex:-2,newIndex:n,oldValues:[],newValues:(0,i.toArray)(e)})}removeRange(t,e){const n=this._array.slice(t,e);for(let n=t;n<e;n++)i.ArrayExt.removeAt(this._array,t);return this._changed.emit({type:"remove",oldIndex:t,newIndex:-1,oldValues:n,newValues:[]}),this.length}}!function(t){t.itemCmp=function(t,e){return t===e}}(s||(s={}))},31432:(t,e,n)=>{n.r(e),n.d(e,{OutputArea:()=>W,OutputAreaModel:()=>d,OutputPrompt:()=>F,SimplifiedOutputArea:()=>H,Stdin:()=>J});var s,i=n(49939),r=n(86839),o=n(12299),a=n(23203),u=n(92233),h=n(4947);class d{constructor(t={}){this.clearNext=!1,this._trusted=!1,this._isDisposed=!1,this._stateChanged=new h.Signal(this),this._changed=new h.Signal(this),this._trusted=!!t.trusted,this.contentFactory=t.contentFactory||d.defaultContentFactory,this.list=new r.a,t.values&&(0,a.each)(t.values,(t=>{this._add(t)})),this.list.changed.connect(this._onListChanged,this)}get stateChanged(){return this._stateChanged}get changed(){return this._changed}get length(){return this.list?this.list.length:0}get trusted(){return this._trusted}set trusted(t){if(t===this._trusted)return;const e=this._trusted=t;for(let t=0;t<this.list.length;t++){let n=this.list.get(t);const s=n.toJSON();n.dispose(),n=this._createItem({value:s,trusted:e}),this.list.set(t,n)}}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this.list.dispose(),h.Signal.clearData(this))}get(t){return this.list.get(t)}set(t,e){e=u.JSONExt.deepCopy(e),s.normalize(e);const n=this._createItem({value:e,trusted:this._trusted});this.list.set(t,n)}add(t){return this.clearNext&&(this.clear(),this.clearNext=!1),this._add(t)}clear(t=!1){this._lastStream="",t?this.clearNext=!0:((0,a.each)(this.list,(t=>{t.dispose()})),this.list.clear())}fromJSON(t){this.clear(),(0,a.each)(t,(t=>{this._add(t)}))}toJSON(){return(0,a.toArray)((0,a.map)(this.list,(t=>t.toJSON())))}_add(t){const e=this._trusted;if(t=u.JSONExt.deepCopy(t),s.normalize(t),i.isStream(t)&&this._lastStream&&t.name===this._lastName&&this.shouldCombine({value:t,lastModel:this.list.get(this.length-1)})){this._lastStream+=t.text,this._lastStream=s.removeOverwrittenChars(this._lastStream),t.text=this._lastStream;const n=this._createItem({value:t,trusted:e}),i=this.length-1;return this.list.get(i).dispose(),this.list.set(i,n),i}i.isStream(t)&&(t.text=s.removeOverwrittenChars(t.text));const n=this._createItem({value:t,trusted:e});return i.isStream(t)?(this._lastStream=t.text,this._lastName=t.name):this._lastStream="",this.list.push(n)}shouldCombine(t){return!0}_createItem(t){const e=this.contentFactory.createOutputModel(t);return e.changed.connect(this._onGenericChange,this),e}_onListChanged(t,e){this._changed.emit(e)}_onGenericChange(){this._stateChanged.emit(void 0)}}!function(t){class e{createOutputModel(t){return new o.OutputModel(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(d||(d={})),function(t){t.normalize=function(t){i.isStream(t)&&Array.isArray(t.text)&&(t.text=t.text.join("\n"))},t.removeOverwrittenChars=function(t){return function(t){for(t=t.replace(/\r+\n/gm,"\n");t.search(/\r[^$]/g)>-1;){const e=t.match(/^(.*)\r+/m)[1];let n=t.match(/\r+(.*)$/m)[1];n+=e.slice(n.length,e.length),t=t.replace(/\r+.*$/m,"\r").replace(/^.*\r/m,n)}return t}(function(t){let e=t;do{e=(t=e).replace(/[^\n]\x08/gm,"")}while(e.length<t.length);return t}(t))}}(s||(s={}));var c=n(37782),l=n(70988),p=n(24629),m=n(42051),_=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,s){return t[0]===e&&(n=s,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),s=this.__entries__[n];return s&&s[1]},e.prototype.set=function(e,n){var s=t(this.__entries__,e);~s?this.__entries__[s][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,s=t(n,e);~s&&n.splice(s,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,s=this.__entries__;n<s.length;n++){var i=s[n];t.call(e,i[1],i[0])}},e}()}(),f="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,g=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),v="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(g):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},y=["top","right","bottom","left","width","height","size","weight"],w="undefined"!=typeof MutationObserver,b=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,s=!1,i=0;function r(){n&&(n=!1,t()),s&&a()}function o(){v(r)}function a(){var t=Date.now();if(n){if(t-i<2)return;s=!0}else n=!0,s=!1,setTimeout(o,20);i=t}return a}(this.refresh.bind(this))}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){f&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),w?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){f&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;y.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),O=function(t,e){for(var n=0,s=Object.keys(e);n<s.length;n++){var i=s[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},x=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||g},C=T(0,0,0,0);function E(t){return parseFloat(t)||0}function A(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+E(t["border-"+n+"-width"])}),0)}var M="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof x(t).SVGGraphicsElement}:function(t){return t instanceof x(t).SVGElement&&"function"==typeof t.getBBox};function I(t){return f?M(t)?function(t){var e=t.getBBox();return T(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return C;var s=x(t).getComputedStyle(t),i=function(t){for(var e={},n=0,s=["top","right","bottom","left"];n<s.length;n++){var i=s[n],r=t["padding-"+i];e[i]=E(r)}return e}(s),r=i.left+i.right,o=i.top+i.bottom,a=E(s.width),u=E(s.height);if("border-box"===s.boxSizing&&(Math.round(a+r)!==e&&(a-=A(s,"left","right")+r),Math.round(u+o)!==n&&(u-=A(s,"top","bottom")+o)),!function(t){return t===x(t).document.documentElement}(t)){var h=Math.round(a+r)-e,d=Math.round(u+o)-n;1!==Math.abs(h)&&(a-=h),1!==Math.abs(d)&&(u-=d)}return T(i.left,i.top,a,u)}(t):C}function T(t,e,n,s){return{x:t,y:e,width:n,height:s}}var S=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=T(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=I(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),N=function(t,e){var n,s,i,r,o,a,u,h=(s=(n=e).x,i=n.y,r=n.width,o=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(a.prototype),O(u,{x:s,y:i,width:r,height:o,top:i,right:s+r,bottom:o+i,left:s}),u);O(this,{target:t,contentRect:h})},k=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new _,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof x(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new S(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof x(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new N(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),D="undefined"!=typeof WeakMap?new WeakMap:new _,R=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=b.getInstance(),s=new k(e,n,this);D.set(this,s)};["observe","unobserve","disconnect"].forEach((function(t){R.prototype[t]=function(){var e;return(e=D.get(this))[t].apply(e,arguments)}}));const j=void 0!==g.ResizeObserver?g.ResizeObserver:R,L="jp-OutputArea-child",V="jp-OutputArea-output",P="jp-OutputArea-prompt";class W extends m.Widget{constructor(t){var e;super(),this.outputLengthChanged=new h.Signal(this),this._onIOPub=t=>{const e=this.model,n=t.header.msg_type;let s;const i=(t.content.transient||{}).display_id;let r;switch(n){case"execute_result":case"display_data":case"stream":case"error":s=Object.assign(Object.assign({},t.content),{output_type:n}),e.add(s);break;case"clear_output":{const n=t.content.wait;e.clear(n);break}case"update_display_data":if(s=Object.assign(Object.assign({},t.content),{output_type:"display_data"}),r=this._displayIdMap.get(i),r)for(const t of r)e.set(t,s)}i&&"display_data"===n&&(r=this._displayIdMap.get(i)||[],r.push(e.length-1),this._displayIdMap.set(i,r))},this._onExecuteReply=t=>{const e=this.model,n=t.content;if("ok"!==n.status)return;const s=n&&n.payload;if(!s||!s.length)return;const i=s.filter((t=>"page"===t.source));if(!i.length)return;const r={output_type:"display_data",data:JSON.parse(JSON.stringify(i[0])).data,metadata:{}};e.add(r)},this._minHeightTimeout=null,this._displayIdMap=new Map,this._outputTracker=new c.WidgetTracker({namespace:u.UUID.uuid4()}),this.addClass("jp-OutputArea"),this.contentFactory=t.contentFactory||W.defaultContentFactory,this.layout=new m.PanelLayout,this.rendermime=t.rendermime,this._maxNumberOutputs=null!==(e=t.maxNumberOutputs)&&void 0!==e?e:1/0;const n=this.model=t.model;for(let t=0;t<Math.min(n.length,this._maxNumberOutputs+1);t++){const e=n.get(t);this._insertOutput(t,e)}n.changed.connect(this.onModelChanged,this),n.stateChanged.connect(this.onStateChanged,this)}get widgets(){return this.layout.widgets}get future(){return this._future}set future(t){if(this.model.isDisposed)throw Error("Model is disposed");this._future!==t&&(this._future&&this._future.dispose(),this._future=t,this.model.clear(),this.widgets.length&&(this._clear(),this.outputLengthChanged.emit(this.model.length)),t.onIOPub=this._onIOPub,t.onReply=this._onExecuteReply,t.onStdin=e=>{l.KernelMessage.isInputRequestMsg(e)&&this.onInputRequest(e,t)})}get maxNumberOutputs(){return this._maxNumberOutputs}set maxNumberOutputs(t){if(t<=0)return void console.warn("OutputArea.maxNumberOutputs must be strictly positive.");const e=this._maxNumberOutputs;this._maxNumberOutputs=t,e<t&&this._showTrimmedOutputs(e)}dispose(){this._future&&(this._future.dispose(),this._future=null),this._displayIdMap.clear(),this._outputTracker.dispose(),super.dispose()}onModelChanged(t,e){switch(e.type){case"add":this._insertOutput(e.newIndex,e.newValues[0]);break;case"remove":if(this.widgets.length)if(0===this.model.length)this._clear();else{const t=e.oldIndex;for(let n=0;n<e.oldValues.length&&t<this.widgets.length;++n){const e=this.widgets[t];e.parent=null,e.dispose()}this._moveDisplayIdIndices(t,e.oldValues.length),this._preventHeightChangeJitter()}break;case"set":this._setOutput(e.newIndex,e.newValues[0])}this.outputLengthChanged.emit(Math.min(this.model.length,this._maxNumberOutputs))}_moveDisplayIdIndices(t,e){this._displayIdMap.forEach((n=>{const s=t+e;for(let i=n.length-1;i>=0;--i){const r=n[i];r>=t&&r<s?n.splice(i,1):r>=s&&(n[i]-=e)}}))}onStateChanged(t){const e=Math.min(this.model.length,this._maxNumberOutputs);for(let t=0;t<e;t++)this._setOutput(t,this.model.get(t));this.outputLengthChanged.emit(e)}_clear(){if(!this.widgets.length)return;const t=this.widgets.length;for(let e=0;e<t;e++){const t=this.widgets[0];t.parent=null,t.dispose()}this._displayIdMap.clear(),this._preventHeightChangeJitter()}_preventHeightChangeJitter(){const t=this.node.getBoundingClientRect();this.node.style.minHeight=`${t.height}px`,this._minHeightTimeout&&window.clearTimeout(this._minHeightTimeout),this._minHeightTimeout=window.setTimeout((()=>{this.isDisposed||(this.node.style.minHeight="")}),50)}onInputRequest(t,e){const n=this.contentFactory,s=t.content.prompt,i=t.content.password,r=new m.Panel;r.addClass(L),r.addClass("jp-OutputArea-stdin-item");const o=n.createOutputPrompt();o.addClass(P),r.addWidget(o);const a=n.createStdin({parent_header:t.header,prompt:s,password:i,future:e});a.addClass(V),r.addWidget(a),this.model.length>=this.maxNumberOutputs&&(this.maxNumberOutputs=this.model.length),this.layout.addWidget(r),a.value.then((t=>{this.model.length>=this.maxNumberOutputs&&(this.maxNumberOutputs=this.model.length+1),this.model.add({output_type:"stream",name:"stdin",text:t+"\n"}),r.dispose()}))}_setOutput(t,e){if(t>=this._maxNumberOutputs)return;const n=this.layout.widgets[t],s=n.widgets?n.widgets[1]:n,i=this.rendermime.preferredMimeType(e.data,e.trusted?"any":"ensure");s.renderModel&&B.currentPreferredMimetype.get(s)===i&&W.isIsolated(i,e.metadata)===s instanceof B.IsolatedRenderer?s.renderModel(e):(this.layout.widgets[t].dispose(),this._insertOutput(t,e))}_insertOutput(t,e){if(t>this._maxNumberOutputs)return;const n=this.layout;if(t===this._maxNumberOutputs){const e=new B.TrimmedOutputs(this._maxNumberOutputs,(()=>{const t=this._maxNumberOutputs;this._maxNumberOutputs=1/0,this._showTrimmedOutputs(t)}));n.insertWidget(t,this._wrappedOutput(e))}else{let s=this.createOutputItem(e);s?s.toggleClass("jp-OutputArea-executeResult",null!==e.executionCount):s=new m.Widget,this._outputTracker.has(s)||this._outputTracker.add(s),n.insertWidget(t,s)}}get outputTracker(){return this._outputTracker}_showTrimmedOutputs(t){this.widgets[t].dispose();for(let e=t;e<this.model.length;e++)this._insertOutput(e,this.model.get(e));this.outputLengthChanged.emit(Math.min(this.model.length,this._maxNumberOutputs))}createOutputItem(t){const e=this.createRenderedMimetype(t);return e?this._wrappedOutput(e,t.executionCount):null}createRenderedMimetype(t){const e=this.rendermime.preferredMimeType(t.data,t.trusted?"any":"ensure");if(!e)return null;let n=this.rendermime.createRenderer(e);return!0===W.isIsolated(e,t.metadata)&&(n=new B.IsolatedRenderer(n)),B.currentPreferredMimetype.set(n,e),n.renderModel(t).catch((t=>{const e=document.createElement("pre");e.textContent=`Javascript Error: ${t.message}`,n.node.appendChild(e),n.node.className="lm-Widget jp-RenderedText",n.node.setAttribute("data-mime-type","application/vnd.jupyter.stderr")})),n}_wrappedOutput(t,e=null){const n=new B.OutputPanel;n.addClass(L);const s=this.contentFactory.createOutputPrompt();return s.executionCount=e,s.addClass(P),n.addWidget(s),t.addClass(V),n.addWidget(t),n}}class H extends W{onInputRequest(t,e){}createOutputItem(t){const e=this.createRenderedMimetype(t);return e&&e.addClass(V),e}}!function(t){t.execute=async function(t,e,n,s){var i;let r=!0;s&&Array.isArray(s.tags)&&-1!==s.tags.indexOf("raises-exception")&&(r=!1);const o={code:t,stop_on_error:r},a=null===(i=n.session)||void 0===i?void 0:i.kernel;if(!a)throw new Error("Session has no kernel.");const u=a.requestExecute(o,!1,s);return e.future=u,u.done},t.isIsolated=function(t,e){const n=e[t];return n&&void 0!==n.isolated?!!n.isolated:!!e.isolated};class e{createOutputPrompt(){return new F}createStdin(t){return new J(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(W||(W={}));class F extends m.Widget{constructor(){super(),this._executionCount=null,this.addClass("jp-OutputPrompt")}get executionCount(){return this._executionCount}set executionCount(t){this._executionCount=t,this.node.textContent=null===t?"":`[${t}]:`}}class J extends m.Widget{constructor(t){super({node:B.createInputWidgetNode(t.prompt,t.password)}),this._promise=new u.PromiseDelegate,this.addClass("jp-Stdin"),this._input=this.node.getElementsByTagName("input")[0],this._input.focus(),this._future=t.future,this._parentHeader=t.parent_header,this._value=t.prompt+" ",this._password=t.password}get value(){return this._promise.promise.then((()=>this._value))}handleEvent(t){const e=this._input;"keydown"===t.type&&13===t.keyCode&&(this._future.sendInputReply({status:"ok",value:e.value},this._parentHeader),this._password?this._value+="········":this._value+=e.value,this._promise.resolve(void 0))}onAfterAttach(t){this._input.addEventListener("keydown",this),this.update()}onUpdateRequest(t){this._input.focus()}onBeforeDetach(t){this._input.removeEventListener("keydown",this)}}var B;!function(t){t.createInputWidgetNode=function(t,e){const n=document.createElement("div"),s=document.createElement("pre");s.className="jp-Stdin-prompt",s.textContent=t;const i=document.createElement("input");return i.className="jp-Stdin-input",e&&(i.type="password"),n.appendChild(s),s.appendChild(i),n};class e extends m.Widget{constructor(t){super({node:document.createElement("iframe")}),this.addClass("jp-mod-isolated"),this._wrapped=t;const e=this.node;e.frameBorder="0",e.scrolling="auto",e.addEventListener("load",(()=>{e.contentDocument.open(),e.contentDocument.write(this._wrapped.node.innerHTML),e.contentDocument.close();const t=e.contentDocument.body;e.style.height=`${t.scrollHeight}px`,e.heightChangeObserver=new j((()=>{e.style.height=`${t.scrollHeight}px`})),e.heightChangeObserver.observe(t)}))}renderModel(t){return this._wrapped.renderModel(t)}}t.IsolatedRenderer=e,t.currentPreferredMimetype=new p.AttachedProperty({name:"preferredMimetype",create:t=>""});class n extends m.Panel{constructor(t){super(t)}_onContext(t){this.node.focus()}onAfterAttach(t){super.onAfterAttach(t),this.node.addEventListener("contextmenu",this._onContext.bind(this))}onBeforeDetach(t){super.onAfterDetach(t),this.node.removeEventListener("contextmenu",this._onContext.bind(this))}}t.OutputPanel=n;class s extends m.Widget{constructor(t,e){const n=document.createElement("div");n.insertAdjacentHTML("afterbegin",`<a>\n          <pre>Output of this cell has been trimmed on the initial display.</pre>\n          <pre>Displaying the first ${t} top outputs.</pre>\n          <pre>Click on this message to get the complete output.</pre>\n        </a>`),super({node:n}),this._onClick=e,this.addClass("jp-TrimmedOutputs"),this.addClass("jp-RenderedHTMLCommon")}handleEvent(t){"click"===t.type&&this._onClick(t)}onAfterAttach(t){super.onAfterAttach(t),this.node.addEventListener("click",this)}onBeforeDetach(t){super.onBeforeDetach(t),this.node.removeEventListener("click",this)}}t.TrimmedOutputs=s}(B||(B={}))}}]);