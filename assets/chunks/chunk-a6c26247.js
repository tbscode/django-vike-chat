var q=Object.defineProperty;var C=(o,t,e)=>t in o?q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>(C(o,typeof t!="symbol"?t+"":t,e),e);import{u as S}from"./chunk-d462aa8e.js";import{a as T}from"./chunk-edb2da2a.js";class ${constructor(t={}){a(this,"baseUrl","");a(this,"securityData",null);a(this,"securityWorker");a(this,"abortControllers",new Map);a(this,"customFetch",(...t)=>fetch(...t));a(this,"baseApiParams",{credentials:"same-origin",headers:{},redirect:"follow",referrerPolicy:"no-referrer"});a(this,"setSecurityData",t=>{this.securityData=t});a(this,"contentFormatters",{"application/json":t=>t!==null&&(typeof t=="object"||typeof t=="string")?JSON.stringify(t):t,"text/plain":t=>t!==null&&typeof t!="string"?JSON.stringify(t):t,"multipart/form-data":t=>Object.keys(t||{}).reduce((e,r)=>{const s=t[r];return e.append(r,s instanceof Blob?s:typeof s=="object"&&s!==null?JSON.stringify(s):`${s}`),e},new FormData),"application/x-www-form-urlencoded":t=>this.toQueryString(t)});a(this,"createAbortSignal",t=>{if(this.abortControllers.has(t)){const r=this.abortControllers.get(t);return r?r.signal:void 0}const e=new AbortController;return this.abortControllers.set(t,e),e.signal});a(this,"abortRequest",t=>{const e=this.abortControllers.get(t);e&&(e.abort(),this.abortControllers.delete(t))});a(this,"request",async({body:t,secure:e,path:r,type:s,query:c,format:y,baseUrl:g,cancelToken:n,...b})=>{const j=(typeof e=="boolean"?e:this.baseApiParams.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},u=this.mergeRequestParams(b,j),l=c&&this.toQueryString(c),P=this.contentFormatters[s||"application/json"],d=y||u.format;return this.customFetch(`${g||this.baseUrl||""}${r}${l?`?${l}`:""}`,{...u,headers:{...u.headers||{},...s&&s!=="multipart/form-data"?{"Content-Type":s}:{}},signal:(n?this.createAbortSignal(n):u.signal)||null,body:typeof t>"u"||t===null?null:P(t)}).then(async h=>{const i=h;i.data=null,i.error=null;const m=d?await h[d]().then(p=>(i.ok?i.data=p:i.error=p,i)).catch(p=>(i.error=p,i)):i;if(n&&this.abortControllers.delete(n),!h.ok)throw m;return m.data})});Object.assign(this,t)}encodeQueryParam(t,e){return`${encodeURIComponent(t)}=${encodeURIComponent(typeof e=="number"?e:`${e}`)}`}addQueryParam(t,e){return this.encodeQueryParam(e,t[e])}addArrayQueryParam(t,e){return t[e].map(s=>this.encodeQueryParam(e,s)).join("&")}toQueryString(t){const e=t||{};return Object.keys(e).filter(s=>typeof e[s]<"u").map(s=>Array.isArray(e[s])?this.addArrayQueryParam(e,s):this.addQueryParam(e,s)).join("&")}addQueryParams(t){const e=this.toQueryString(t);return e?`?${e}`:""}mergeRequestParams(t,e){return{...this.baseApiParams,...t,...e||{},headers:{...this.baseApiParams.headers||{},...t.headers||{},...e&&e.headers||{}}}}}class A extends ${constructor(){super(...arguments);a(this,"api",{chatsList:(e,r={})=>this.request({path:"/api/chats/",method:"GET",query:e,secure:!0,format:"json",...r}),chatsRetrieve:(e,r={})=>this.request({path:`/api/chats/${e}/`,method:"GET",secure:!0,format:"json",...r}),loginCreate:(e,r={})=>this.request({path:"/api/login",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...r}),logoutRetrieve:(e={})=>this.request({path:"/api/logout",method:"GET",secure:!0,...e}),messagesAllReadCreate:(e,r={})=>this.request({path:`/api/messages/${e}/all_read/`,method:"POST",secure:!0,format:"json",...r}),messagesList:(e,r={})=>this.request({path:"/api/messages/",method:"GET",query:e,secure:!0,format:"json",...r}),messagesList2:({chatUuid:e,...r},s={})=>this.request({path:`/api/messages/${e}/`,method:"GET",query:r,secure:!0,format:"json",...s}),messagesPartialUpdate:(e,r,s={})=>this.request({path:`/api/messages/${e}/`,method:"PATCH",body:r,secure:!0,type:"application/json",format:"json",...s}),messagesReadCreate:(e,r,s={})=>this.request({path:`/api/messages/${e}/read/`,method:"POST",body:r,secure:!0,type:"application/json",format:"json",...s}),messagesRetrieve:(e,r={})=>this.request({path:`/api/messages/${e}/`,method:"GET",secure:!0,format:"json",...r}),messagesSendCreate:(e,r,s={})=>this.request({path:`/api/messages/${e}/send/`,method:"POST",body:r,secure:!0,type:"application/json",format:"json",...s}),messagesUpdate:(e,r,s={})=>this.request({path:`/api/messages/${e}/`,method:"PUT",body:r,secure:!0,type:"application/json",format:"json",...s}),profilePartialUpdate:(e,r={})=>this.request({path:"/api/profile",method:"PATCH",body:e,secure:!0,type:"application/json",format:"json",...r}),profileRetrieve:(e={})=>this.request({path:"/api/profile",method:"GET",secure:!0,format:"json",...e}),profilesList:(e,r={})=>this.request({path:"/api/profiles/",method:"GET",query:e,secure:!0,format:"json",...r}),profilesPartialUpdate:(e,r,s={})=>this.request({path:`/api/profiles/${e}/`,method:"PATCH",body:r,secure:!0,type:"application/json",format:"json",...s}),profilesRetrieve:(e,r={})=>this.request({path:`/api/profiles/${e}/`,method:"GET",secure:!0,format:"json",...r}),profilesUpdate:(e,r,s={})=>this.request({path:`/api/profiles/${e}/`,method:"PUT",body:r,secure:!0,type:"application/json",format:"json",...s}),profileUpdate:(e,r={})=>this.request({path:"/api/profile",method:"PUT",body:e,secure:!0,type:"application/json",format:"json",...r}),registerCreate:(e,r={})=>this.request({path:"/api/register",method:"POST",body:e,secure:!0,type:"application/json",format:"json",...r}),userRetrieve:(e={})=>this.request({path:"/api/user",method:"GET",secure:!0,format:"json",...e})})}}function f(o){const t=typeof window>"u";let e={"X-CSRFToken":o.xcsrfToken};return o.cookie&&(e={...e,cookie:o.cookie}),new A({baseUrl:t?"http://backend:8000":"",baseApiParams:{headers:e}}).api}function Q(){const o=S(e=>e.frontend);return f(typeof window>"u"?{cookie:o.cookie,xcsrfToken:o.xcsrfToken}:{xcsrfToken:T.get("csrftoken")||"",cookie:null})}export{f as g,Q as u};