function k(b,a,d,c){b.i.ia(b.N,a,d,c)}function p(b,a,d,c){b.i.o?k(b,a,d,c):b.i.mb()._OnMessageFromDOM({type:"event",component:b.N,handler:a,dispatchOpts:c||null,data:d,responseId:null})}function q(b,a,d){b.i.h(b.N,a,d)}function r(b,a){for(const [d,c]of a)q(b,d,c)}window.ga=class{constructor(b,a){this.i=b;this.N=a}Da(){}};window.Sb=class{constructor(){}};"use strict";function aa(b,a){q(b,"get-element",d=>{const c=t(b,d.elementId);return a(c,d)})}
function t(b,a){b=b.$.get(a);if(!b)throw Error(`no element with id ${a}`);return b.Na}
window.Rb=class extends self.ga{constructor(b,a){super(b,a);this.$=new Map;this.qa=!0;r(this,[["create",()=>{throw Error("required override");}],["destroy",d=>{d=d.elementId;const c=t(this,d);this.qa&&c.parentElement.removeChild(c);this.$.delete(d)}],["set-visible",d=>{if(this.qa){var c=this.$.get(d.elementId),e=c.Na;c.Ra?e.style.display=d.isVisible?"":"none":c.zb=!!d.isVisible}}],["update-position",d=>{if(this.qa){var c=this.$.get(d.elementId),e=c.Na;e.style.left=d.left+"px";e.style.top=d.top+"px";
e.style.width=d.width+"px";e.style.height=d.height+"px";d=d.fontSize;null!==d&&(e.style.fontSize=d+"em");c.Ra||(c.Ra=!0,c.zb&&(e.style.display=""))}}],["update-state",d=>{t(this,d.elementId);throw Error("required override");}],["focus",d=>this.ma(d)],["set-css-style",d=>{const c=t(this,d.elementId),e=d.prop;d=d.val;e.startsWith("--")?c.style.setProperty(e,d):c.style[e]=d}],["set-attribute",d=>{t(this,d.elementId).setAttribute(d.name,d.val)}],["remove-attribute",d=>{t(this,d.elementId).removeAttribute(d.name)}]]);
aa(this,d=>d)}ma(b){var a=t(this,b.elementId);b.focus?a.focus():a.blur()}};"use strict";const u=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),v=/android/i.test(navigator.userAgent),ba=/safari/i.test(navigator.userAgent)&&!/(chrome|chromium|edg\/|OPR\/|nwjs)/i.test(navigator.userAgent);let w=0;
function x(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Hb?new Promise(d=>{const c="c3_resolve_"+w;++w;self[c]=d;a.textContent=b.Lb+`\n\nself["${c}"]();`;document.head.appendChild(a)}):new Promise((d,c)=>{a.onload=d;a.onerror=c;a.src=b;document.head.appendChild(a)})}let y=!1,z=!1;function ca(){if(!y){try{new Worker("blob://",{get type(){z=!0}})}catch(b){}y=!0}return z}let A=new Audio;
const da={"audio/webm; codecs=opus":!!A.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!A.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!A.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!A.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!A.canPlayType("audio/mp4"),"audio/mpeg":!!A.canPlayType("audio/mpeg")};A=null;async function ea(b){b=await B(b);return(new TextDecoder("utf-8")).decode(b)}
function B(b){return new Promise((a,d)=>{const c=new FileReader;c.onload=e=>a(e.target.result);c.onerror=e=>d(e);c.readAsArrayBuffer(b)})}const C=[];let D=0;window.RealFile=window.File;const E=[],F=new Map,G=new Map;let fa=0;const I=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");I.push(b)};const ha=new Set(["cordova","playable-ad","instant-games"]);let ia=!1;
window.L=class b{constructor(a){this.o=a.Nb;this.R=null;this.m="";this.G=a.Kb;this.V={};this.wa=this.I=null;this.Z=[];this.j=this.T=null;this.Sa=!1;this.O=null;this.F=-1;this.Cb=()=>this.tb();this.za=[];this.g=a.Va;this.ua="file"===location.protocol.substr(0,4);!this.o||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ca()||(this.o=!1);this.o&&ba&&(this.o=!1);if("playable-ad"===this.g||"instant-games"===this.g)this.o=!1;if("cordova"===this.g&&this.o)if(v){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);
d&&90<=parseInt(d[1],10)||(this.o=!1)}else this.o=!1;this.aa=this.A=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("runtime","cordova-fetch-local-file",d=>this.pb(d));this.h("runtime","create-job-worker",()=>this.qb());"cordova"===this.g?document.addEventListener("deviceready",()=>this.Ia(a)):this.Ia(a)}$a(){return u&&
"cordova"===this.g}ha(){const a=navigator.userAgent;return u&&ha.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}Ya(){return v}Fa(){return v&&ha.has(this.g)}async Ia(a){"macos-wkwebview"===this.g&&this.pa({type:"ready"});if("playable-ad"===this.g){this.A=self.c3_base64files;this.aa={};await this.ib();for(let c=0,e=a.J.length;c<e;++c){var d=a.J[c];this.aa.hasOwnProperty(d)?a.J[c]={Hb:!0,Lb:this.aa[d]}:this.A.hasOwnProperty(d)&&(a.J[c]=URL.createObjectURL(this.A[d]))}a.da=[]}if("nwjs"===
this.g&&self.nw&&self.nw.App.manifest["c3-steam-mode"]){let c=0;this.eb(()=>{c++;document.body.style.opacity=0===c%2?"1":"0.999"})}a.Jb?this.m=a.Jb:(d=location.origin,this.m=("null"===d?"file:///":d)+location.pathname,d=this.m.lastIndexOf("/"),-1!==d&&(this.m=this.m.substr(0,d+1)));a.Pb&&(this.V=a.Pb);d=new MessageChannel;this.R=d.port1;this.R.onmessage=c=>this._OnMessageFromRuntime(c.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(c=>this.sb(c));this.O=new self.ab(this);await ja(this.O);
"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((c,e)=>{window.AndroidFullScreen.immersiveMode(c,e)})}catch(c){console.error("Failed to enter Android immersive mode: ",c)}this.o?await this.ob(a,d.port2):await this.nb(a,d.port2)}ka(a){a=this.V.hasOwnProperty(a)?this.V[a]:a.endsWith("/workermain.js")&&this.V.hasOwnProperty("workermain.js")?this.V["workermain.js"]:"playable-ad"===this.g&&this.A.hasOwnProperty(a)?this.A[a]:
a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async fa(a,d,c){if(a.startsWith("blob:"))return new Worker(a,c);if("cordova"===this.g&&this.ua)return a=await this.ea(c.Gb?a:this.G+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),c);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),c)}return new Worker(a,c)}v(){return Math.max(window.innerWidth,
1)}u(){return Math.max(window.innerHeight,1)}Ha(a){var d=this.m,c=location.href,e=this.v(),f=this.u(),g=window.devicePixelRatio,h=b.K(),l=a.Xb,m=window.cr_previewImageBlobs||this.A,n=window.cr_previewProjectFileBlobs,ua=window.cr_previewProjectFiles,va=window.Vb||"";a=a.Va;var wa=(new URLSearchParams(self.location.search)).has("debug"),H=this.O;return{runtimeBaseUrl:d,previewUrl:c,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:l,previewImageBlobs:m,previewProjectFileBlobs:n,
previewProjectFileSWUrls:ua,swClientId:va,exportType:a,isDebug:wa,ife:!!self.Wb,jobScheduler:{inputPort:H.ta,outputPort:H.ya,maxNumWorkers:H.Ab},supportedAudioFormats:da,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.G+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.G+"opus.wasm.wasm",isFileProtocol:this.ua,isiOSCordova:this.$a(),isiOSWebView:this.ha(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async ob(a,d){const c=this.ka(a.Ob);"preview"===this.g?(this.I=new Worker("previewworker.js",
{type:"module",name:"Runtime"}),await new Promise((h,l)=>{const m=n=>{this.I.removeEventListener("message",m);n.data&&"ok"===n.data.type?h():l()};this.I.addEventListener("message",m);this.I.postMessage({type:"construct-worker-init","import":(new URL(c,this.m)).toString()})})):this.I=await this.fa(c,this.m,{type:"module",name:"Runtime",Gb:!0});this.j=document.createElement("canvas");this.j.style.display="none";const e=this.j.transferControlToOffscreen();document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let f=a.da||[],g=a.J;f=await Promise.all(f.map(h=>this.D(h)));g=await Promise.all(g.map(h=>this.D(h)));if("cordova"===this.g)for(let h=0,l=a.ca.length;h<l;++h){const m=a.ca[h],n=m[0];if(n===a.Ba||"scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))m[1]=await this.D(n)}this.I.postMessage(Object.assign(this.Ha(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:e,workerDependencyScripts:f,engineScripts:g,projectScripts:a.ca,
mainProjectScript:a.Ba,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,e,...ka(this.O)]);this.Z=E.map(h=>new h(this));this.Ga();la(this.T);self.c3_callFunction=(h,l)=>{var m=this.T;return m.i.bb(m.N,{name:h,params:l})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.ia("runtime","go-to-last-error-script"))}async nb(a,d){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();
this.Z=E.map(g=>new g(this));this.Ga();var c=a.J.map(g=>"string"===typeof g?(new URL(g,this.m)).toString():g);if(Array.isArray(a.da)){var e=[...a.da].map(g=>g instanceof Blob?URL.createObjectURL(g):g);c.unshift(...e)}c=await Promise.all(c.map(g=>this.D(g)));await Promise.all(c.map(g=>x(g)));c=self.C3_ProjectScriptsStatus;e=a.Ba;const f=a.ca;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.D(h),await x(h),"preview"!==this.g||c[g]||this.Ka(g,"main script did not run to completion")}catch(l){this.Ka(g,
l)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.D(h),await x(h);"preview"===this.g&&"object"!==typeof self.Qb.Tb?(this.X(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ha(a),{isInWorker:!1,messagePort:d,canvas:this.j,runOnStartupFunctions:I}),la(this.T),this.Ja(),
this.wa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.wa,a))}Ka(a,d){this.X();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ja(){this.X()}X(){const a=window.Eb;a&&(a.parentElement.removeChild(a),window.Eb=null)}async qb(){const a=await ma(this.O);return{outputPort:a,transferables:[a]}}mb(){if(this.o)throw Error("not available in worker mode");
return this.wa}ia(a,d,c,e){this.R.postMessage({type:"event",component:a,handler:d,dispatchOpts:e||null,data:c,responseId:null},void 0)}bb(a,d){const c=fa++,e=new Promise((f,g)=>{G.set(c,{resolve:f,reject:g})});this.R.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:c},void 0);return e}_OnMessageFromRuntime(a){const d=a.type;if("event"===d)return this.rb(a);if("result"===d)this.ub(a);else if("runtime-ready"===d)this.vb();else if("alert-error"===
d)this.X(),alert(a.message);else if("creating-runtime"===d)this.Ja();else throw Error(`unknown message '${d}'`);}rb(a){const d=a.component,c=a.handler,e=a.data,f=a.responseId;if(a=F.get(d))if(a=a.get(c)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${d}' handler '${c}':`,h);null!==f&&this.W(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.W(f,!0,h)).catch(h=>{console.error(`Rejection from '${d}' handler '${c}':`,h);this.W(f,!1,""+h)}):this.W(f,!0,g)}else console.warn(`[DOM] No handler '${c}' for component '${d}'`);
else console.warn(`[DOM] No event handlers for component '${d}'`)}W(a,d,c){let e;c&&c.transferables&&(e=c.transferables);this.R.postMessage({type:"result",responseId:a,isOk:d,result:c},e)}ub(a){const d=a.responseId,c=a.isOk;a=a.result;const e=G.get(d);c?e.resolve(a):e.reject(a);G.delete(d)}h(a,d,c){let e=F.get(a);e||(e=new Map,F.set(a,e));if(e.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);e.set(d,c)}static Ca(a){if(E.includes(a))throw Error("DOM handler already added");E.push(a)}Ga(){for(const a of this.Z)if("runtime"===
a.N){this.T=a;return}throw Error("cannot find runtime DOM handler");}sb(a){this.ia("debugger","message",a)}vb(){for(const a of this.Z)a.Da()}static K(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||ia)}static Y(a){ia=!!a}eb(a){this.za.push(a);this.oa()}oa(){-1===this.F&&this.za.length&&(this.F=requestAnimationFrame(this.Cb))}gb(){-1!==this.F&&(cancelAnimationFrame(this.F),this.F=-1)}tb(){this.F=-1;for(const a of this.za)a();this.oa()}na(){this.T.na()}cb(){this.Sa=
!0}Xa(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}Za(a){return!this.Xa(a)}async D(a){return"cordova"===this.g&&(a.startsWith("file:")||this.ua&&this.Za(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),a=await this.ea(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async pb(a){const d=a.filename;switch(a.as){case "text":return await this.Wa(d);case "buffer":return await this.ea(d);default:throw Error("unsupported type");}}Ea(a){const d=
window.cordova.file.applicationDirectory+"www/"+a;return new Promise((c,e)=>{window.resolveLocalFileSystemURL(d,f=>{f.file(c,e)},e)})}async Wa(a){a=await this.Ea(a);return await ea(a)}ja(){if(C.length&&!(8<=D)){D++;var a=C.shift();this.jb(a.filename,a.Mb,a.Fb)}}ea(a){return new Promise((d,c)=>{C.push({filename:a,Mb:e=>{D--;this.ja();d(e)},Fb:e=>{D--;this.ja();c(e)}});this.ja()})}async jb(a,d,c){try{const e=await this.Ea(a),f=await B(e);d(f)}catch(e){c(e)}}pa(a){if("windows-webview2"===this.g)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.g)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async ib(){const a=[];for(const [d,c]of Object.entries(this.A))a.push(this.hb(d,c));await Promise.all(a)}async hb(a,d){if("object"===typeof d)this.A[a]=new Blob([d.str],{type:d.type}),this.aa[a]=d.str;else{let c=await this.lb(d);c||(c=this.kb(d));this.A[a]=c}}async lb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}kb(a){a=this.wb(a);return this.fb(a.data,a.Ib)}wb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var c=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const e=d[2];c="base64"===d[1]||"base64"===e?atob(c):decodeURIComponent(c);return{Ib:a,data:c}}fb(a,d){var c=a.length;let e=c>>2,f=new Uint8Array(c),g=new Uint32Array(f.buffer,0,e),h,l;for(l=h=0;h<e;++h)g[h]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;for(c&=
3;c--;)f[l]=a.charCodeAt(l),++l;return new Blob([f],{type:d})}};"use strict";const J=self.L;function na(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const oa=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),K={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},pa={dispatchUserScriptEvent:!0},M={dispatchRuntimeEvent:!0};
function qa(b){return new Promise((a,d)=>{const c=document.createElement("link");c.onload=()=>a(c);c.onerror=e=>d(e);c.rel="stylesheet";c.href=b;document.head.appendChild(c)})}function ra(b){return new Promise((a,d)=>{const c=new Image;c.onload=()=>a(c);c.onerror=e=>d(e);c.src=b})}async function N(b){b=URL.createObjectURL(b);try{return await ra(b)}finally{URL.revokeObjectURL(b)}}
function sa(b){return new Promise((a,d)=>{let c=new FileReader;c.onload=e=>a(e.target.result);c.onerror=e=>d(e);c.readAsText(b)})}
async function ta(b,a,d){if(!/firefox/i.test(navigator.userAgent))return await N(b);var c=await sa(b);c=(new DOMParser).parseFromString(c,"image/svg+xml");const e=c.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await N(b)}e.setAttribute("width",a+"px");e.setAttribute("height",d+"px");c=(new XMLSerializer).serializeToString(c);b=new Blob([c],{type:"image/svg+xml"});return await N(b)}
function O(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const xa=new Set(["input","textarea","datalist","select"]),ya=new Set(["canvas","body","html"]);function P(b){b.target.tagName&&ya.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function za(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await N(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,d,c,e){b=await ta(b,a,d);const f=document.createElement("canvas");f.width=c;f.height=e;f.getContext("2d").drawImage(b,0,0,a,d);return f};
let Q=!1;document.addEventListener("pause",()=>Q=!0);document.addEventListener("resume",()=>Q=!1);function la(b){b.Pa=!0;b.va=b.i.v();b.P=b.i.u()}async function Aa(b){await Promise.all(b.webfonts.map(async a=>{a=new FontFace(a.name,`url('${a.url}')`);document.fonts.add(a);await a.load()}))}
async function Ba(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function Ca(b){return await self.C3_GetSvgImageSize(b.blob)}function Da(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}
function Ea(b){self.setTimeout(()=>{b.Oa=!0},1E3);"cordova"===b.i.g?(document.addEventListener("pause",()=>R(b,!0)),document.addEventListener("resume",()=>R(b,!1))):document.addEventListener("visibilitychange",()=>R(b,document.hidden));return{isSuspended:!(!document.hidden&&!Q)}}
function Fa(b){b.Ma||(b.Ma=!0,window.addEventListener("deviceorientation",a=>{b.l||k(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},K)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||k(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},K)}))}
function Ga(b){b.La||(b.La=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var d=null,c=a.acceleration;c&&(d={x:c.x||0,y:c.y||0,z:c.z||0});c=null;var e=a.accelerationIncludingGravity;e&&(c={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});k(b,"devicemotion",{acceleration:d,accelerationIncludingGravity:c,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},K)}}))}async function Ha(b){await qa(b.url)}
function Ia(b,a){b.Qa=a.message;-1===b.sa&&(b.sa=setTimeout(()=>{b.sa=-1;const d=document.getElementById("exportToVideoMessage");d&&(d.textContent=b.Qa)},250))}function S(b){if(!b.l){var a=J.K();a&&"any"!==b.Aa&&Ja(b);k(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.v(),innerHeight:b.u()})}}function T(b,a){console.warn("[Construct] Fullscreen request failed: ",a);k(b,"fullscreenerror",{isFullscreen:J.K(),innerWidth:b.v(),innerHeight:b.u()})}
function R(b,a){a?b.i.gb():b.i.oa();k(b,"visibilitychange",{hidden:a})}function Ka(b,a,d){"Backspace"===d.key&&P(d);if(!b.l){var c=oa.get(d.code)||d.code;p(b,a,{code:c,key:d.key,which:d.which,repeat:d.repeat,altKey:d.altKey,ctrlKey:d.ctrlKey,metaKey:d.metaKey,shiftKey:d.shiftKey,timeStamp:d.timeStamp},K)}}
function U(b,a,d,c){b.l||na(d)||p(b,a,{button:d.button,buttons:d.buttons,clientX:d.clientX,clientY:d.clientY+b.s,pageX:d.pageX,pageY:d.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,timeStamp:d.timeStamp},c)}function V(b){window!==window.top&&window.focus();La(b.target)&&document.activeElement&&!La(document.activeElement)&&document.activeElement.blur()}
function W(b,a,d){if(!b.l){var c=0;"mouse"===d.pointerType&&(c=b.S);p(b,a,{pointerId:d.pointerId,pointerType:d.pointerType,button:d.button,buttons:d.buttons,lastButtons:c,clientX:d.clientX,clientY:d.clientY+b.s,pageX:d.pageX,pageY:d.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,width:d.width||0,height:d.height||0,pressure:d.pressure||0,tangentialPressure:d.tangentialPressure||0,tiltX:d.tiltX||0,tiltY:d.tiltY||0,twist:d.twist||0,timeStamp:d.timeStamp},K);"mouse"===d.pointerType&&(c="mousemove",
"pointerdown"===a?c="mousedown":"pointerup"===a&&(c="mouseup"),U(b,c,d,pa),b.S=d.buttons)}}
function X(b,a,d){if(!b.l&&!na(d)){var c=b.S;"pointerdown"===a&&0!==c?a="pointermove":"pointerup"===a&&0!==d.buttons&&(a="pointermove");p(b,a,{pointerId:1,pointerType:"mouse",button:d.button,buttons:d.buttons,lastButtons:c,clientX:d.clientX,clientY:d.clientY+b.s,pageX:d.pageX,pageY:d.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:d.timeStamp},K);b.S=d.buttons;U(b,d.type,d,pa)}}
function Y(b,a,d){if(!b.l)for(let c=0,e=d.changedTouches.length;c<e;++c){const f=d.changedTouches[c];p(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.s,pageX:f.pageX,pageY:f.pageY+b.s,movementX:d.movementX||0,movementY:d.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:d.timeStamp},
K)}}function Z(b,a,d){document.body.style.transform="";b.s=0;if(0<d){var c=document.activeElement;c&&(c=c.getBoundingClientRect(),a=(c.top+c.bottom)/2-(a-d)/2,a>d&&(a=d),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.s=a))}}function Ma(b,a,d,c){const e=b.v(),f=b.u();b.H=-1;e!=a||f!=d?k(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.K()}):10>c&&Na(b,e,f,c+1)}
function Na(b,a,d,c){-1!==b.H&&clearTimeout(b.H);b.H=setTimeout(()=>Ma(b,a,d,c),48)}
function Ja(b){b=b.Aa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function La(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
J.Ca(class extends self.ga{constructor(b){super(b,"runtime");this.Ta=!0;this.Pa=!1;this.H=-1;this.Aa="any";this.La=this.Ma=!1;this.ba=document.createElement("div");this.ba.className="c3-screen-reader-text";this.ba.setAttribute("aria-live","polite");document.body.appendChild(this.ba);this.C=null;this.l=!1;this.Qa="";this.sa=-1;this.Oa=!1;this.va=b.v();this.P=b.u();this.s=this.U=0;b.h("canvas","update-size",c=>{var e=this.i;e.Sa||(e=e.j,e.style.width=c.styleWidth+"px",e.style.height=c.styleHeight+"px",
e.style.marginLeft=c.marginLeft+"px",e.style.marginTop=c.marginTop+"px",document.documentElement.style.setProperty("--construct-scale",c.displayScale),this.Ta&&(e.style.display="",this.Ta=!1))});b.h("runtime","invoke-download",c=>{const e=c.url;c=c.filename;const f=document.createElement("a"),g=document.body;f.textContent=c;f.href=e;f.download=c;g.appendChild(f);f.click();g.removeChild(f)});b.h("runtime","load-webfonts",c=>Aa(c));b.h("runtime","raster-svg-image",c=>Ba(c));b.h("runtime","get-svg-image-size",
c=>Ca(c));b.h("runtime","set-target-orientation",c=>{this.Aa=c.targetOrientation});b.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.h("runtime","post-to-debugger",c=>Da(c));b.h("runtime","go-to-script",c=>Da(c));b.h("runtime","before-start-ticking",()=>Ea(this));b.h("runtime","debug-highlight",c=>{if(c.show){this.C||(this.C=document.createElement("div"),this.C.id="inspectOutline",document.body.appendChild(this.C));var e=this.C;e.style.display="";e.style.left=c.left-
1+"px";e.style.top=c.top-1+"px";e.style.width=c.width+2+"px";e.style.height=c.height+2+"px";e.textContent=c.name}else this.C&&(this.C.style.display="none")});b.h("runtime","enable-device-orientation",()=>Fa(this));b.h("runtime","enable-device-motion",()=>Ga(this));b.h("runtime","add-stylesheet",c=>Ha(c));b.h("runtime","script-create-worker",c=>{const e=c.port2;(new Worker(c.url,c.opts)).postMessage({type:"construct-worker-init",port2:e},[e])});b.h("runtime","alert",c=>this.la(c));b.h("runtime","screen-reader-text",
c=>{var e=c.type;"create"===e?(e=document.createElement("p"),e.id="c3-sr-"+c.id,e.textContent=c.text,this.ba.appendChild(e)):"update"===e?(e=document.getElementById("c3-sr-"+c.id))?e.textContent=c.text:console.warn(`[Construct] Missing screen reader text with id ${c.id}`):"release"===e?(e=document.getElementById("c3-sr-"+c.id))?e.remove():console.warn(`[Construct] Missing screen reader text with id ${c.id}`):console.warn(`[Construct] Unknown screen reader text update '${e}'`)});b.h("runtime","hide-cordova-splash",
()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.h("runtime","set-exporting-to-video",c=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=c.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.cb()});b.h("runtime","export-to-video-progress",c=>Ia(this,c));b.h("runtime","exported-to-video",c=>{window.Db({type:"exported-video",arrayBuffer:c.arrayBuffer,contentType:c.contentType,
time:c.time})});b.h("runtime","exported-to-image-sequence",c=>{window.Db({type:"exported-image-sequence",blobArr:c.blobArr,time:c.time,gif:c.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",c=>{const e=c.target;a.has(e.tagName.toLowerCase())||O(e)||c.preventDefault()});const d=b.j;window.addEventListener("selectstart",P);window.addEventListener("gesturehold",P);d.addEventListener("selectstart",P);d.addEventListener("gesturehold",P);window.addEventListener("touchstart",
P,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",P,{passive:!1}),d.addEventListener("pointerdown",P)):d.addEventListener("touchstart",P);this.S=0;window.addEventListener("mousedown",c=>{1===c.button&&c.preventDefault()});window.addEventListener("mousewheel",za,{passive:!1});window.addEventListener("wheel",za,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l&&this.Pa){var c=this.v();var e=this.u();if(this.i.Fa()){if(this.Oa){if(this.va===c&&e<
this.P){this.U=this.P-e;Z(this,this.P,this.U);c=void 0;break a}0<this.U&&(this.U=0,Z(this,e,this.U))}this.va=c;this.P=e}k(this,"window-resize",{innerWidth:c,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.K()});this.i.ha()&&(-1!==this.H&&clearTimeout(this.H),Ma(this,c,e,0))}c=void 0}return c});window.addEventListener("fullscreenchange",()=>S(this));window.addEventListener("webkitfullscreenchange",()=>S(this));window.addEventListener("mozfullscreenchange",()=>S(this));window.addEventListener("fullscreenerror",
c=>T(this,c));window.addEventListener("webkitfullscreenerror",c=>T(this,c));window.addEventListener("mozfullscreenerror",c=>T(this,c));if(b.ha())if(window.visualViewport){let c=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>c&&(document.scrollingElement.scrollTop=0);c=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var c=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));
c="textarea"===c?!0:"input"===c?e.has(f.type.toLowerCase()||"text"):O(f)}else c=!1}c||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=c=>{"entered-fullscreen"===c?(J.Y(!0),S(this)):"exited-fullscreen"===c?(J.Y(!1),S(this)):console.warn("Unknown wrapper message: ",c)};this.xa=new Set;this.Bb=new WeakSet;this.yb=!1}Da(){window.addEventListener("focus",()=>{k(this,"window-focus",null,M)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(d){a=
!1}k(this,"window-blur",{parentHasFocus:a},M);this.S=0});window.addEventListener("focusin",a=>{a=a.target;(xa.has(a.tagName.toLowerCase())||O(a))&&k(this,"keyboard-blur",null,M)});window.addEventListener("keydown",a=>Ka(this,"keydown",a));window.addEventListener("keyup",a=>Ka(this,"keyup",a));window.addEventListener("dblclick",a=>U(this,"dblclick",a,K));window.addEventListener("wheel",a=>{this.l||k(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.s,pageX:a.pageX,pageY:a.pageY+this.s,deltaX:a.deltaX,
deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},K)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{V(a);W(this,"pointerdown",a)}),this.i.o&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?window.addEventListener("pointerrawupdate",a=>{W(this,"pointermove",a)}):window.addEventListener("pointermove",a=>W(this,"pointermove",a)),window.addEventListener("pointerup",a=>W(this,"pointerup",a)),window.addEventListener("pointercancel",
a=>W(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{V(a);X(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>X(this,"pointermove",a)),window.addEventListener("mouseup",a=>X(this,"pointerup",a)),window.addEventListener("touchstart",a=>{V(a);Y(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>Y(this,"pointermove",a)),window.addEventListener("touchend",a=>Y(this,"pointerup",a)),window.addEventListener("touchcancel",a=>Y(this,"pointercancel",a)));const b=
()=>this.na();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.Ya()&&!this.i.Fa()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this,this.u(),navigator.virtualKeyboard.boundingRect.height)}))}v(){return this.i.v()}u(){return this.i.u()}na(){var b=
[...this.xa];this.xa.clear();if(!this.yb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Bb.has(a)||this.xa.add(a)})}la(b){alert(b.message)}});"use strict";async function ja(b){if(b.xb)throw Error("already initialised");b.xb=!0;var a=b.B.ka(("playable-ad"===b.B.g?b.B.G:"")+"dispatchworker.js");b.ra=await b.B.fa(a,b.M,{name:"DispatchWorker"});a=new MessageChannel;b.ta=a.port1;b.ra.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.ya=await ma(b)}function ka(b){return[b.ta,b.ya]}
async function ma(b){const a=b.Ua.length;var d=b.B.ka(("playable-ad"===b.B.g?b.B.G:"")+"jobworker.js");d=await b.B.fa(d,b.M,{name:"JobWorker"+a});const c=new MessageChannel,e=new MessageChannel;b.ra.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]);d.postMessage({type:"init",number:a,"dispatch-port":c.port2,"output-port":e.port2},[c.port2,e.port2]);b.Ua.push(d);return e.port1}
self.ab=class{constructor(b){this.B=b;this.M=b.m;this.M="preview"===b.g?this.M+"workers/":this.M+b.G;this.Ab=Math.min(navigator.hardwareConcurrency||2,16);this.ra=null;this.Ua=[];this.ya=this.ta=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.L({Nb:!0,Ob:"workermain.js",J:["scripts/c3runtime.js"],ca:[],Ba:"",Kb:"scripts/",da:[],Va:"html5"}));"use strict";function Oa(){}
function Pa(b){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(a=>k(b,"sw-message",a.data))}
function Qa(b){b=b.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}
self.L.Ca(class extends self.ga{constructor(b){super(b,"browser");this.g="";r(this,[["get-initial-state",a=>{this.g=a.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>
Pa(this)],["alert",a=>this.la(a)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",a=>this.ma(a)],["vibrate",a=>{navigator.vibrate&&navigator.vibrate(a.pattern)}],["lock-orientation",a=>Qa(a)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?
screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(a){}}],["navigate",a=>{var d=a.type;if("back"===d)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===d)window.history.forward();else if("reload"===d)location.reload();else if("url"===d){d=a.url;const c=a.target;a=a.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(d,
"_system"):"preview"===a||"windows-webview2"===a?window.open(d,"_blank"):this.Ub||(2===c?window.top.location=d:1===c?window.parent.location=d:window.location=d)}else"new-window"===d&&(d=a.url,a=a.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(d,"_system"):window.open(d,a))}],["request-fullscreen",a=>{if("windows-webview2"===this.g||"macos-wkwebview"===this.g)self.L.Y(!0),this.i.pa({type:"set-fullscreen",fullscreen:!0});else{const d={navigationUI:"auto"};a=a.navUI;1===a?
d.navigationUI="hide":2===a&&(d.navigationUI="show");a=document.documentElement;let c;a.requestFullscreen?c=a.requestFullscreen(d):a.mozRequestFullScreen?c=a.mozRequestFullScreen(d):a.msRequestFullscreen?c=a.msRequestFullscreen(d):a.webkitRequestFullScreen&&(c="undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen());c instanceof Promise&&c.catch(Oa)}}],["exit-fullscreen",()=>{if("windows-webview2"===this.g||"macos-wkwebview"===
this.g)self.L.Y(!1),this.i.pa({type:"set-fullscreen",fullscreen:!1});else{let a;document.exitFullscreen?a=document.exitFullscreen():document.mozCancelFullScreen?a=document.mozCancelFullScreen():document.msExitFullscreen?a=document.msExitFullscreen():document.webkitCancelFullScreen&&(a=document.webkitCancelFullScreen());a instanceof Promise&&a.catch(Oa)}}],["set-hash",a=>{location.hash=a.hash}],["set-document-css-style",a=>{const d=a.prop,c=a.value;var e=a.selector;a=a["is-all"];try{if(e)if(a)var f=
Array.from(document.querySelectorAll(e));else{var g=document.querySelector(e);f=g?[g]:[]}else f=[document.documentElement];e=f;for(const h of e)d.startsWith("--")?h.style.setProperty(d,c):h.style[d]=c}catch(h){console.warn("[Browser] Failed to set style: ",h)}}],["get-document-css-style",a=>{{const c=a.prop;a=a.selector;try{const e=document.querySelector(a);var d=e?{isOk:!0,result:window.getComputedStyle(e).getPropertyValue(c)}:{isOk:!1}}catch(e){console.warn("[Browser] Failed to get style: ",e),
d={isOk:!1}}}return d}]]);window.addEventListener("online",()=>{k(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{k(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{k(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{k(this,"backbutton")})}la(b){alert(b.message)}ma(b){b=b.isFocus;if("nwjs"===this.g){const a="nwjs"===this.g?nw.Window.get():null;b?a.focus():a.blur()}else b?window.focus():window.blur()}});
