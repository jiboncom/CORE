"use strict";(globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT=globalThis.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[847],{41461:(e,t,s)=>{s.d(t,{IO:()=>n,Lt:()=>a,ot:()=>c});const a=16895,n=33206,i=new TextEncoder,r=new TextDecoder("utf-8"),o={0:!1,1:!0,2:!0,64:!0,65:!0,66:!0,129:!0,193:!0,514:!0,577:!0,578:!0,705:!0,706:!0,1024:!0,1025:!0,1026:!0,1089:!0,1090:!0,1153:!0,1154:!0,1217:!0,1218:!0,4096:!0,4098:!0};class l{constructor(e){this.fs=e}open(e){const t=this.fs.realPath(e.node);this.fs.FS.isFile(e.node.mode)&&(e.file=this.fs.API.get(t))}close(e){if(!this.fs.FS.isFile(e.node.mode)||!e.file)return;const t=this.fs.realPath(e.node),s=e.flags;let a="string"==typeof s?parseInt(s,10):s;a&=8191;let n=!0;a in o&&(n=o[a]),n&&(this.fs.API.put(t,e.file),e.file=void 0)}read(e,t,s,a,n){var i;if(a<=0||void 0===e.file)return 0;const r=Math.min((null!==(i=e.file.data.length)&&void 0!==i?i:0)-n,a);try{t.set(e.file.data.subarray(n,n+r),s)}catch(e){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}return r}write(e,t,s,a,n){var i,r;if(a<=0||void 0===e.file)return 0;e.node.timestamp=Date.now();try{if(n+a>(null!==(r=null===(i=e.file)||void 0===i?void 0:i.data.length)&&void 0!==r?r:0)){const t=e.file.data?e.file.data:new Uint8Array;e.file.data=new Uint8Array(n+a),e.file.data.set(t)}return e.file.data.set(t.subarray(s,s+a),n),a}catch(e){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}llseek(e,t,s){let a=t;if(1===s)a+=e.position;else if(2===s&&this.fs.FS.isFile(e.node.mode)){if(void 0===e.file)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);a+=e.file.data.length}if(a<0)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EINVAL);return a}}class h{constructor(e){this.fs=e}getattr(e){return{...this.fs.API.getattr(this.fs.realPath(e)),mode:e.mode,ino:e.id}}setattr(e,t){}lookup(e,t){const s=this.fs.PATH.join2(this.fs.realPath(e),t),a=this.fs.API.lookup(s);if(!a.ok)throw this.fs.FS.genericErrors[this.fs.ERRNO_CODES.ENOENT];return this.fs.createNode(e,t,a.mode)}mknod(e,t,s,a){const n=this.fs.PATH.join2(this.fs.realPath(e),t);return this.fs.API.mknod(n,s),this.fs.createNode(e,t,s,a)}rename(e,t,s){this.fs.API.rename(e.parent?this.fs.PATH.join2(this.fs.realPath(e.parent),e.name):e.name,this.fs.PATH.join2(this.fs.realPath(t),s)),e.name=s,e.parent=t}unlink(e,t){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(e),t))}rmdir(e,t){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(e),t))}readdir(e){return this.fs.API.readdir(this.fs.realPath(e))}symlink(e,t,s){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}readlink(e){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}class p{constructor(e,t,s,a,n){this._baseUrl=e,this._driveName=t,this._mountpoint=s,this.FS=a,this.ERRNO_CODES=n}request(e){const t=new XMLHttpRequest;t.open("POST",encodeURI(this.endpoint),!1);try{t.send(JSON.stringify(e))}catch(e){console.error(e)}if(t.status>=400)throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);return JSON.parse(t.responseText)}lookup(e){return this.request({method:"lookup",path:this.normalizePath(e)})}getmode(e){return Number.parseInt(this.request({method:"getmode",path:this.normalizePath(e)}))}mknod(e,t){return this.request({method:"mknod",path:this.normalizePath(e),data:{mode:t}})}rename(e,t){return this.request({method:"rename",path:this.normalizePath(e),data:{newPath:this.normalizePath(t)}})}readdir(e){const t=this.request({method:"readdir",path:this.normalizePath(e)});return t.push("."),t.push(".."),t}rmdir(e){return this.request({method:"rmdir",path:this.normalizePath(e)})}get(e){const t=this.request({method:"get",path:this.normalizePath(e)}),s=t.content,a=t.format;switch(a){case"json":case"text":return{data:i.encode(s),format:a};case"base64":{const e=atob(s),t=e.length,n=new Uint8Array(t);for(let s=0;s<t;s++)n[s]=e.charCodeAt(s);return{data:n,format:a}}default:throw new this.FS.ErrnoError(this.ERRNO_CODES.ENOENT)}}put(e,t){switch(t.format){case"json":case"text":return this.request({method:"put",path:this.normalizePath(e),data:{format:t.format,data:r.decode(t.data)}});case"base64":{let s="";for(let e=0;e<t.data.byteLength;e++)s+=String.fromCharCode(t.data[e]);return this.request({method:"put",path:this.normalizePath(e),data:{format:t.format,data:btoa(s)}})}}}getattr(e){const t=this.request({method:"getattr",path:this.normalizePath(e)});return t.atime=new Date(t.atime),t.mtime=new Date(t.mtime),t.ctime=new Date(t.ctime),t.size=t.size||0,t}normalizePath(e){return e.startsWith(this._mountpoint)&&(e=e.slice(this._mountpoint.length)),this._driveName&&(e=`${this._driveName}:${e}`),e}get endpoint(){return`${this._baseUrl}api/drive`}}class c{constructor(e){this.FS=e.FS,this.PATH=e.PATH,this.ERRNO_CODES=e.ERRNO_CODES,this.API=new p(e.baseUrl,e.driveName,e.mountpoint,this.FS,this.ERRNO_CODES),this.driveName=e.driveName,this.node_ops=new h(this),this.stream_ops=new l(this)}mount(e){return this.createNode(null,e.mountpoint,511|a,0)}createNode(e,t,s,a){const n=this.FS;if(!n.isDir(s)&&!n.isFile(s))throw new n.ErrnoError(this.ERRNO_CODES.EINVAL);const i=n.createNode(e,t,s,a);return i.node_ops=this.node_ops,i.stream_ops=this.stream_ops,i}getMode(e){return this.API.getmode(e)}realPath(e){const t=[];let s=e;for(t.push(s.name);s.parent!==s;)s=s.parent,t.push(s.name);return t.reverse(),this.PATH.join.apply(null,t)}}},50847:(e,t,s)=>{s.r(t),s.d(t,{PIPLITE_WHEEL:()=>_,PyoliteKernel:()=>U,PyoliteRemoteKernel:()=>K,allJSONUrl:()=>a,ipykernelWheelUrl:()=>n,pipliteWheelUrl:()=>i,pyoliteWheelUrl:()=>r,widgetsnbextensionWheelUrl:()=>o,widgetsnbextensionWheelUrl1:()=>l});var a={};s.r(a),s.d(a,{default:()=>h});var n={};s.r(n),s.d(n,{default:()=>p});var i={};s.r(i),s.d(i,{default:()=>c});var r={};s.r(r),s.d(r,{default:()=>d});var o={};s.r(o),s.d(o,{default:()=>u});var l={};s.r(l),s.d(l,{default:()=>m});const h=s.p+"pypi/all.json",p=s.p+"pypi/ipykernel-6.9.2-py3-none-any.whl",c=s.p+"pypi/piplite-0.1.0b14-py3-none-any.whl",d=s.p+"pypi/pyolite-0.1.0b14-py3-none-any.whl",u=s.p+"pypi/widgetsnbextension-3.6.0-py3-none-any.whl",m=s.p+"pypi/widgetsnbextension-4.0.2-py3-none-any.whl",_="piplite-0.1.0b14-py3-none-any.whl";var E=s(92233),y=s(59110),g=s(34013),f=s(4947);class R{constructor(e){this._history=[],this._executionCount=0,this._isDisposed=!1,this._disposed=new f.Signal(this),this._parentHeader=void 0,this._parent=void 0;const{id:t,name:s,location:a,sendMessage:n}=e;this._id=t,this._name=s,this._location=a,this._sendMessage=n}get ready(){return Promise.resolve()}get isDisposed(){return this._isDisposed}get disposed(){return this._disposed}get id(){return this._id}get name(){return this._name}get location(){return this._location}get executionCount(){return this._executionCount}get parentHeader(){return this._parentHeader}get parent(){return this._parent}dispose(){this.isDisposed||(this._isDisposed=!0,this._disposed.emit(void 0))}async handleMessage(e){switch(this._busy(e),this._parent=e,e.header.msg_type){case"kernel_info_request":await this._kernelInfo(e);break;case"execute_request":await this._execute(e);break;case"input_reply":this.inputReply(e.content);break;case"inspect_request":await this._inspect(e);break;case"is_complete_request":await this._isCompleteRequest(e);break;case"complete_request":await this._complete(e);break;case"history_request":await this._historyRequest(e);break;case"comm_open":await this.commOpen(e);break;case"comm_msg":await this.commMsg(e);break;case"comm_close":await this.commClose(e)}this._idle(e)}stream(e,t){var s;const a=void 0!==t?t:this._parentHeader,n=g.KernelMessage.createMessage({channel:"iopub",msgType:"stream",session:null!==(s=null==a?void 0:a.session)&&void 0!==s?s:"",parentHeader:a,content:e});this._sendMessage(n)}displayData(e,t){var s,a;const n=void 0!==t?t:this._parentHeader;e.metadata=null!==(s=e.metadata)&&void 0!==s?s:{};const i=g.KernelMessage.createMessage({channel:"iopub",msgType:"display_data",session:null!==(a=null==n?void 0:n.session)&&void 0!==a?a:"",parentHeader:n,content:e});this._sendMessage(i)}inputRequest(e,t){var s;const a=void 0!==t?t:this._parentHeader,n=g.KernelMessage.createMessage({channel:"stdin",msgType:"input_request",session:null!==(s=null==a?void 0:a.session)&&void 0!==s?s:"",parentHeader:a,content:e});this._sendMessage(n)}publishExecuteResult(e,t){var s;const a=void 0!==t?t:this._parentHeader,n=g.KernelMessage.createMessage({channel:"iopub",msgType:"execute_result",session:null!==(s=null==a?void 0:a.session)&&void 0!==s?s:"",parentHeader:a,content:e});this._sendMessage(n)}publishExecuteError(e,t){var s;const a=void 0!==t?t:this._parentHeader,n=g.KernelMessage.createMessage({channel:"iopub",msgType:"error",session:null!==(s=null==a?void 0:a.session)&&void 0!==s?s:"",parentHeader:a,content:e});this._sendMessage(n)}updateDisplayData(e,t){var s;const a=void 0!==t?t:this._parentHeader,n=g.KernelMessage.createMessage({channel:"iopub",msgType:"update_display_data",session:null!==(s=null==a?void 0:a.session)&&void 0!==s?s:"",parentHeader:a,content:e});this._sendMessage(n)}clearOutput(e,t){var s;const a=void 0!==t?t:this._parentHeader,n=g.KernelMessage.createMessage({channel:"iopub",msgType:"clear_output",session:null!==(s=null==a?void 0:a.session)&&void 0!==s?s:"",parentHeader:a,content:e});this._sendMessage(n)}handleComm(e,t,s,a,n){var i;const r=void 0!==n?n:this._parentHeader,o=g.KernelMessage.createMessage({channel:"iopub",msgType:e,session:null!==(i=null==r?void 0:r.session)&&void 0!==i?i:"",parentHeader:r,content:t,metadata:s,buffers:a});this._sendMessage(o)}_idle(e){const t=g.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"idle"}});this._sendMessage(t)}_busy(e){const t=g.KernelMessage.createMessage({msgType:"status",session:e.header.session,parentHeader:e.header,channel:"iopub",content:{execution_state:"busy"}});this._sendMessage(t)}async _kernelInfo(e){const t=await this.kernelInfoRequest(),s=g.KernelMessage.createMessage({msgType:"kernel_info_reply",channel:"shell",session:e.header.session,parentHeader:e.header,content:t});this._sendMessage(s)}async _historyRequest(e){const t=e,s=g.KernelMessage.createMessage({msgType:"history_reply",channel:"shell",parentHeader:t.header,session:e.header.session,content:{status:"ok",history:this._history}});this._sendMessage(s)}_executeInput(e){const t=e,s=t.content.code,a=g.KernelMessage.createMessage({msgType:"execute_input",parentHeader:t.header,channel:"iopub",session:e.header.session,content:{code:s,execution_count:this._executionCount}});this._sendMessage(a)}async _execute(e){const t=e,s=t.content;s.store_history&&this._executionCount++,this._parentHeader=t.header,this._executeInput(t),s.store_history&&this._history.push([0,0,s.code]);const a=await this.executeRequest(t.content),n=g.KernelMessage.createMessage({msgType:"execute_reply",channel:"shell",parentHeader:t.header,session:e.header.session,content:a});this._sendMessage(n)}async _complete(e){const t=e,s=await this.completeRequest(t.content),a=g.KernelMessage.createMessage({msgType:"complete_reply",parentHeader:t.header,channel:"shell",session:e.header.session,content:s});this._sendMessage(a)}async _inspect(e){const t=e,s=await this.inspectRequest(t.content),a=g.KernelMessage.createMessage({msgType:"inspect_reply",parentHeader:t.header,channel:"shell",session:e.header.session,content:s});this._sendMessage(a)}async _isCompleteRequest(e){const t=e,s=await this.isCompleteRequest(t.content),a=g.KernelMessage.createMessage({msgType:"is_complete_reply",parentHeader:t.header,channel:"shell",session:e.header.session,content:s});this._sendMessage(a)}}const O=Symbol("Comlink.proxy"),P=Symbol("Comlink.endpoint"),w=Symbol("Comlink.releaseProxy"),b=Symbol("Comlink.thrown"),N=e=>"object"==typeof e&&null!==e||"function"==typeof e,v=new Map([["proxy",{canHandle:e=>N(e)&&e[O],serialize(e){const{port1:t,port2:s}=new MessageChannel;return T(e,t),[s,[s]]},deserialize:e=>(e.start(),S(e))}],["throw",{canHandle:e=>N(e)&&b in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function T(e,t=self){t.addEventListener("message",(function s(a){if(!a||!a.data)return;const{id:n,type:i,path:r}=Object.assign({path:[]},a.data),o=(a.data.argumentList||[]).map(H);let l;try{const t=r.slice(0,-1).reduce(((e,t)=>e[t]),e),s=r.reduce(((e,t)=>e[t]),e);switch(i){case"GET":l=s;break;case"SET":t[r.slice(-1)[0]]=H(a.data.value),l=!0;break;case"APPLY":l=s.apply(t,o);break;case"CONSTRUCT":l=function(e){return Object.assign(e,{[O]:!0})}(new s(...o));break;case"ENDPOINT":{const{port1:t,port2:s}=new MessageChannel;T(e,s),l=function(e,t){return C.set(e,t),e}(t,[t])}break;case"RELEASE":l=void 0;break;default:return}}catch(e){l={value:e,[b]:0}}Promise.resolve(l).catch((e=>({value:e,[b]:0}))).then((e=>{const[a,r]=I(e);t.postMessage(Object.assign(Object.assign({},a),{id:n}),r),"RELEASE"===i&&(t.removeEventListener("message",s),M(t))}))})),t.start&&t.start()}function M(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function S(e,t){return A(e,[],t)}function k(e){if(e)throw new Error("Proxy has been released and is not useable")}function A(e,t=[],s=function(){}){let a=!1;const n=new Proxy(s,{get(s,i){if(k(a),i===w)return()=>L(e,{type:"RELEASE",path:t.map((e=>e.toString()))}).then((()=>{M(e),a=!0}));if("then"===i){if(0===t.length)return{then:()=>n};const s=L(e,{type:"GET",path:t.map((e=>e.toString()))}).then(H);return s.then.bind(s)}return A(e,[...t,i])},set(s,n,i){k(a);const[r,o]=I(i);return L(e,{type:"SET",path:[...t,n].map((e=>e.toString())),value:r},o).then(H)},apply(s,n,i){k(a);const r=t[t.length-1];if(r===P)return L(e,{type:"ENDPOINT"}).then(H);if("bind"===r)return A(e,t.slice(0,-1));const[o,l]=D(i);return L(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:o},l).then(H)},construct(s,n){k(a);const[i,r]=D(n);return L(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:i},r).then(H)}});return n}function D(e){const t=e.map(I);return[t.map((e=>e[0])),(s=t.map((e=>e[1])),Array.prototype.concat.apply([],s))];var s}const C=new WeakMap;function I(e){for(const[t,s]of v)if(s.canHandle(e)){const[a,n]=s.serialize(e);return[{type:"HANDLER",name:t,value:a},n]}return[{type:"RAW",value:e},C.get(e)||[]]}function H(e){switch(e.type){case"HANDLER":return v.get(e.name).deserialize(e.value);case"RAW":return e.value}}function L(e,t,s){return new Promise((a=>{const n=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(s){s.data&&s.data.id&&s.data.id===n&&(e.removeEventListener("message",t),a(s.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),s)}))}class U extends R{constructor(e){super(e),this._ready=new E.PromiseDelegate,this._worker=this.initWorker(e),this._worker.onmessage=e=>this._processWorkerMessage(e.data),this._remoteKernel=this.initRemote(e),this._ready.resolve()}initWorker(e){return new Worker(new URL(s.p+s.u(2655),s.b),{type:void 0})}initRemote(e){const t=S(this._worker),s=this.initRemoteOptions(e);return t.initialize(s),t}initRemoteOptions(e){const{pyodideUrl:t}=e,s=t.slice(0,t.lastIndexOf("/")+1),a=y.PageConfig.getBaseUrl(),n=y.URLExt.join(a,"build/pypi"),i=[...e.pipliteUrls||[],y.URLExt.join(n,"all.json")];return{baseUrl:a,pyodideUrl:t,indexUrl:s,pipliteWheelUrl:y.URLExt.join(n,_),pipliteUrls:i,disablePyPIFallback:!!e.disablePyPIFallback,location:this.location,mountDrive:e.mountDrive}}dispose(){this.isDisposed||(this._worker.terminate(),this._worker=null,super.dispose())}get ready(){return this._ready.promise}_processWorkerMessage(e){var t,s,a,n,i,r,o;if(e.type)switch(e.type){case"stream":{const s=null!==(t=e.bundle)&&void 0!==t?t:{name:"stdout",text:""};this.stream(s,e.parentHeader);break}case"input_request":{const t=null!==(s=e.content)&&void 0!==s?s:{prompt:"",password:!1};this.inputRequest(t,e.parentHeader);break}case"display_data":{const t=null!==(a=e.bundle)&&void 0!==a?a:{data:{},metadata:{},transient:{}};this.displayData(t,e.parentHeader);break}case"update_display_data":{const t=null!==(n=e.bundle)&&void 0!==n?n:{data:{},metadata:{},transient:{}};this.updateDisplayData(t,e.parentHeader);break}case"clear_output":{const t=null!==(i=e.bundle)&&void 0!==i?i:{wait:!1};this.clearOutput(t,e.parentHeader);break}case"execute_result":{const t=null!==(r=e.bundle)&&void 0!==r?r:{execution_count:0,data:{},metadata:{}};this.publishExecuteResult(t,e.parentHeader);break}case"execute_error":{const t=null!==(o=e.bundle)&&void 0!==o?o:{ename:"",evalue:"",traceback:[]};this.publishExecuteError(t,e.parentHeader);break}case"comm_msg":case"comm_open":case"comm_close":this.handleComm(e.type,e.content,e.metadata,e.buffers,e.parentHeader)}}async kernelInfoRequest(){return{implementation:"pyodide",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"python",version:3},file_extension:".py",mimetype:"text/x-python",name:"python",nbconvert_exporter:"python",pygments_lexer:"ipython3",version:"3.8"},protocol_version:"5.3",status:"ok",banner:"Pyolite: A WebAssembly-powered Python kernel backed by Pyodide",help_links:[{text:"Python (WASM) Kernel",url:"https://pyodide.org"}]}}async executeRequest(e){const t=await this._remoteKernel.execute(e,this.parent);return t.execution_count=this.executionCount,t}async completeRequest(e){return await this._remoteKernel.complete(e,this.parent)}async inspectRequest(e){return await this._remoteKernel.inspect(e,this.parent)}async isCompleteRequest(e){return await this._remoteKernel.isComplete(e,this.parent)}async commInfoRequest(e){return await this._remoteKernel.commInfo(e,this.parent)}async commOpen(e){return await this._remoteKernel.commOpen(e,this.parent)}async commMsg(e){return await this._remoteKernel.commMsg(e,this.parent)}async commClose(e){return await this._remoteKernel.commClose(e,this.parent)}async inputReply(e){return await this._remoteKernel.inputReply(e,this.parent)}}var x=s(41461);const F={E2BIG:1,EACCES:2,EADDRINUSE:3,EADDRNOTAVAIL:4,EADV:122,EAFNOSUPPORT:5,EAGAIN:6,EALREADY:7,EBADE:113,EBADF:8,EBADFD:127,EBADMSG:9,EBADR:114,EBADRQC:103,EBADSLT:102,EBFONT:101,EBUSY:10,ECANCELED:11,ECHILD:12,ECHRNG:106,ECOMM:124,ECONNABORTED:13,ECONNREFUSED:14,ECONNRESET:15,EDEADLK:16,EDEADLOCK:16,EDESTADDRREQ:17,EDOM:18,EDOTDOT:125,EDQUOT:19,EEXIST:20,EFAULT:21,EFBIG:22,EHOSTDOWN:142,EHOSTUNREACH:23,EIDRM:24,EILSEQ:25,EINPROGRESS:26,EINTR:27,EINVAL:28,EIO:29,EISCONN:30,EISDIR:31,EL2HLT:112,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELIBACC:129,ELIBBAD:130,ELIBEXEC:133,ELIBMAX:132,ELIBSCN:131,ELNRNG:109,ELOOP:32,EMFILE:33,EMLINK:34,EMSGSIZE:35,EMULTIHOP:36,ENAMETOOLONG:37,ENETDOWN:38,ENETRESET:39,ENETUNREACH:40,ENFILE:41,ENOANO:104,ENOBUFS:42,ENOCSI:111,ENODATA:116,ENODEV:43,ENOENT:44,ENOEXEC:45,ENOLCK:46,ENOLINK:47,ENOMEDIUM:148,ENOMEM:48,ENOMSG:49,ENONET:119,ENOPKG:120,ENOPROTOOPT:50,ENOSPC:51,ENOSR:118,ENOSTR:100,ENOSYS:52,ENOTBLK:105,ENOTCONN:53,ENOTDIR:54,ENOTEMPTY:55,ENOTRECOVERABLE:56,ENOTSOCK:57,ENOTSUP:138,ENOTTY:59,ENOTUNIQ:126,ENXIO:60,EOPNOTSUPP:138,EOVERFLOW:61,EOWNERDEAD:62,EPERM:63,EPFNOSUPPORT:139,EPIPE:64,EPROTO:65,EPROTONOSUPPORT:66,EPROTOTYPE:67,ERANGE:68,EREMCHG:128,EREMOTE:121,EROFS:69,ESHUTDOWN:140,ESOCKTNOSUPPORT:137,ESPIPE:70,ESRCH:71,ESRMNT:123,ESTALE:72,ESTRPIPE:135,ETIME:117,ETIMEDOUT:73,ETOOMANYREFS:141,ETXTBSY:74,EUNATCH:110,EUSERS:136,EWOULDBLOCK:6,EXDEV:75,EXFULL:115};class K{constructor(){this._options=null,this._initializer=null,this._localPath="",this._driveName="",this._driveFS=null,this._initialized=new Promise(((e,t)=>{this._initializer={resolve:e,reject:t}}))}async initialize(e){var t;if(this._options=e,e.location.includes(":")){const t=e.location.split(":");this._driveName=t[0],this._localPath=t[1]}else this._driveName="",this._localPath=e.location;await this.initRuntime(e),await this.initFilesystem(e),await this.initPackageManager(e),await this.initKernel(e),await this.initGlobals(e),null===(t=this._initializer)||void 0===t||t.resolve()}async initRuntime(e){const{pyodideUrl:t,indexUrl:s}=e;if(t.endsWith(".mjs")){const e=await import(t);this._pyodide=await e.loadPyodide({indexURL:s})}else importScripts(t),this._pyodide=await self.loadPyodide({indexURL:s})}async initPackageManager(e){if(!this._options)throw new Error("Uninitialized");const{pipliteWheelUrl:t,disablePyPIFallback:s,pipliteUrls:a}=this._options;await this._pyodide.loadPackage(["micropip"]),await this._pyodide.runPythonAsync(`\n      import micropip\n      await micropip.install('${t}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${s?"True":"False"}\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(a)}\n    `)}async initKernel(e){await this._pyodide.runPythonAsync("\n      await piplite.install(['matplotlib', 'ipykernel'], keep_going=True);\n      await piplite.install(['pyolite'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyolite\n    "),e.mountDrive&&this._localPath&&await this._pyodide.runPythonAsync(`\n        import os;\n        os.chdir("${this._localPath}");\n      `)}async initGlobals(e){const{globals:t}=this._pyodide;this._kernel=t.get("pyolite").kernel_instance.copy(),this._stdout_stream=t.get("pyolite").stdout_stream.copy(),this._stderr_stream=t.get("pyolite").stderr_stream.copy(),this._interpreter=this._kernel.interpreter.copy(),this._interpreter.send_comm=this.sendComm.bind(this)}async initFilesystem(e){if(e.mountDrive){const t="/drive",{FS:s}=this._pyodide,{baseUrl:a}=e,n=new x.ot({FS:s,PATH:this._pyodide._module.PATH,ERRNO_CODES:F,baseUrl:a,driveName:this._driveName,mountpoint:t});s.mkdir(t),s.mount(n,{},t),s.chdir(t),this._driveFS=n}}mapToObject(e){const t=e instanceof Array?[]:{};return e.forEach(((e,s)=>{t[s]=e instanceof Map||e instanceof Array?this.mapToObject(e):e})),t}formatResult(e){if(!this._pyodide.isPyProxy(e))return e;const t=e.toJs();return this.mapToObject(t)}async setup(e){await this._initialized,this._kernel._parent_header=this._pyodide.toPy(e)}async execute(e,t){await this.setup(t);const s=(e,t)=>{const s={name:this.formatResult(e),text:this.formatResult(t)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:s,type:"stream"})};this._stdout_stream.publish_stream_callback=s,this._stderr_stream.publish_stream_callback=s,this._interpreter.display_pub.clear_output_callback=e=>{const t={wait:this.formatResult(e)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:t,type:"clear_output"})},this._interpreter.display_pub.display_data_callback=(e,t,s)=>{const a={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"display_data"})},this._interpreter.display_pub.update_display_data_callback=(e,t,s)=>{const a={data:this.formatResult(e),metadata:this.formatResult(t),transient:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"update_display_data"})},this._interpreter.displayhook.publish_execution_result=(e,t,s)=>{const a={execution_count:e,data:this.formatResult(t),metadata:this.formatResult(s)};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"execute_result"})},this._interpreter.input=this.input.bind(this),this._interpreter.getpass=this.getpass.bind(this);const a=await this._kernel.run(e.code),n=this.formatResult(a);return"error"===n.status&&((e,t,s)=>{const a={ename:e,evalue:t,traceback:s};postMessage({parentHeader:this.formatResult(this._kernel._parent_header).header,bundle:a,type:"execute_error"})})(n.ename,n.evalue,n.traceback),n}async complete(e,t){await this.setup(t);const s=this._kernel.complete(e.code,e.cursor_pos);return this.formatResult(s)}async inspect(e,t){await this.setup(t);const s=this._kernel.inspect(e.code,e.cursor_pos,e.detail_level);return this.formatResult(s)}async isComplete(e,t){await this.setup(t);const s=this._kernel.is_complete(e.code);return this.formatResult(s)}async commInfo(e,t){await this.setup(t);const s=this._kernel.comm_info(e.target_name);return{comms:this.formatResult(s),status:"ok"}}async commOpen(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_open(this._pyodide.toPy(e));return this.formatResult(s)}async commMsg(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_msg(this._pyodide.toPy(e));return this.formatResult(s)}async commClose(e,t){await this.setup(t);const s=this._kernel.comm_manager.comm_close(this._pyodide.toPy(e));return this.formatResult(s)}async inputReply(e,t){await this.setup(t),this._resolveInputReply(e)}async sendInputRequest(e,t){const s={prompt:e,password:t};postMessage({type:"input_request",parentHeader:this.formatResult(this._kernel._parent_header).header,content:s})}async getpass(e){e=void 0===e?"":e,await this.sendInputRequest(e,!0);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async input(e){e=void 0===e?"":e,await this.sendInputRequest(e,!1);const t=new Promise((e=>{this._resolveInputReply=e}));return(await t).value}async sendComm(e,t,s,a,n){postMessage({type:e,content:this.formatResult(t),metadata:this.formatResult(s),ident:this.formatResult(a),buffers:this.formatResult(n),parentHeader:this.formatResult(this._kernel._parent_header).header})}}}}]);