webpackJsonp([15],{"+tBs":function(e,t,n){"use strict";t.a=[{name:"form",path:"form",meta:{login:!1,hasFooter:!1},component:function(e){n.e(12).then(function(){return e(n("BeRe"))}.bind(null,n)).catch(n.oe)}}]},"0dS3":function(e,t,n){"use strict";t.a=[{name:"map",path:"map",meta:{login:!1,hasFooter:!1},component:function(e){n.e(8).then(function(){return e(n("t1kT"))}.bind(null,n)).catch(n.oe)}}]},"0xDb":function(e,t,n){"use strict";var o=n("TuU3"),a=n("4/BI"),i=n("3pLw"),c=n("jg9f"),r=n("Thh0"),u={cache:o.a,format:a.a,http:i.a,ui:c.a,version:r.a};t.a=u},"3pLw":function(e,t,n){"use strict";var o=n("UIuv"),a=n.n(o),i=n("3SZ7"),c=n.n(i),r=n("xY2u"),u=n.n(r),s=n("TuU3"),l=u.a.create({method:"post",timeout:6e4,withCredentials:!0,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}},transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}]});l.interceptors.request.use(function(e){var t=s.a.get("user"),n={head:{url:e.url,debug:!0,userId:t?t.userId:null,token:s.a.get("token")},body:{data:e.data}};return e.url=window.Config.server+e.url,e.data={request:c()(n)},e},function(e){return console.log(e),a.a.reject(e)}),l.interceptors.response.use(function(e){var t=e.data.head.token;return s.a.set("token",t||s.a.get("token")),e},function(e){return console.log(e),a.a.reject(e)}),t.a=l},"4/BI":function(e,t,n){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var o={toDate:function(e,t){return t||(t="yyyy-MM-dd HH:mm:ss"),e.format(t)},parseDate:function(e){return new Date(e.replace("-","/"))}};t.a=o},"48zQ":function(e,t,n){"use strict";var o=n("fPAy"),a=n("dCUc"),i=n("25r8"),c=i(o.a,a.a,null,null,null);t.a=c.exports},"5dKJ":function(e,t,n){"use strict";t.a=[{name:"list",path:"list",meta:{login:!1,hasFooter:!1},component:function(e){n.e(10).then(function(){return e(n("X5+7"))}.bind(null,n)).catch(n.oe)}}]},"8RzN":function(e,t,n){"use strict";t.a=[{name:"chat",path:"chat",meta:{login:!1,hasFooter:!1},component:function(e){n.e(1).then(function(){return e(n("T5Y6"))}.bind(null,n)).catch(n.oe)}}]},B17L:function(e,t,n){"use strict";t.a=[{name:"contact",path:"contact",meta:{login:!1,hasFooter:!1},component:function(e){n.e(13).then(function(){return e(n("+/HG"))}.bind(null,n)).catch(n.oe)}}]},C9LJ:function(e,t,n){"use strict";var o,a=n("u6qr"),i=n.n(a),c=n("WxFH"),r=n.n(c),u=n("0xDb"),s=["LOGIN","LOGOUT","TOGGLE_HEADER","TOGGLE_FOOTER","TOGGLE_TABS","TOGGLE_LOADING","TOGGLE_POPUP","UPDATE_VERSION"],l={},m=!0,p=!1,d=void 0;try{for(var f,h=i()(s);!(m=(f=h.next()).done);m=!0){var g=f.value;l[g]=g}}catch(e){p=!0,d=e}finally{try{!m&&h.return&&h.return()}finally{if(p)throw d}}var _={app:{version:u.a.cache.get("version")||""},ui:{hasHeader:!1,hasFooter:!0,fixFooter:!0,hasTabs:!1,loading:!1,popupTop:!1,popupText:""},user:u.a.cache.get("user"),userSetting:u.a.cache.get("userSetting")},v={hasHeader:function(){return _.ui.hasHeader},hasFooter:function(){return _.ui.hasFooter},fixFooter:function(){return _.ui.fixFooter},hasTabs:function(){return _.ui.hasTabs},isLoading:function(){return _.ui.loading},getVersion:function(){return _.app.version}},b={},T=(o={},r()(o,l.UPDATE_VERSION,function(e,t){u.a.cache.set("version",t),e.app.version=t}),r()(o,l.LOGIN,function(e,t){u.a.cache.set("user",t.user),u.a.cache.set("userSetting",t.userSetting),e.user=t.user,e.userSetting=t.userSetting}),r()(o,l.LOGOUT,function(e){u.a.cache.clear(),e.user=null,e.userSetting=null}),r()(o,l.TOGGLE_HEADER,function(e,t){e.ui.hasHeader=t}),r()(o,l.TOGGLE_FOOTER,function(e,t){e.ui.hasFooter=t}),r()(o,l.TOGGLE_TABS,function(e,t){e.ui.hasTabs=t}),r()(o,l.TOGGLE_LOADING,function(e,t){e.ui.loading=t}),r()(o,l.TOGGLE_POPUP,function(e,t){e.ui.popupTop=t.visible,e.ui.popupText=t.text}),o);t.a={state:_,getters:v,actions:b,mutations:T}},IqcW:function(e,t,n){"use strict";t.a=[{name:"dialog",path:"dialog",meta:{login:!1,hasFooter:!1},component:function(e){n.e(2).then(function(){return e(n("A6/F"))}.bind(null,n)).catch(n.oe)}}]},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("34v0"),a=n.n(o),i=n("iDdd"),c=n.n(i),r=n("gt1m"),u=n("48zQ"),s=n("YaEn"),l=n("YtJ0"),m=n("lekb"),p=(n.n(m),n("WEav")),d=(n.n(p),n("0xDb")),f=n("PphD"),h=n("wFu8");n.n(h);window.Config={server:"http://localhost:8080/lxt-server",chcpUrl:"https://chenjia.github.io/vue-app/demo/chcp.json"},c.a.attach(document.body),r.default.component(h.Actionsheet.name,h.Actionsheet),r.default.component(h.Button.name,h.Button),r.default.component(h.Cell.name,h.Cell),r.default.component(h.CellSwipe.name,h.CellSwipe),r.default.component(h.Checklist.name,h.Checklist),r.default.component(h.Field.name,h.Field),r.default.component(h.Header.name,h.Header),r.default.component(h.IndexList.name,h.IndexList),r.default.component(h.IndexSection.name,h.IndexSection),r.default.component(h.Loadmore.name,h.Loadmore),r.default.component(h.Popup.name,h.Popup),r.default.component(h.Progress.name,h.Progress),r.default.component(h.Radio.name,h.Radio),r.default.component(h.Search.name,h.Search),r.default.component(h.Spinner.name,h.Spinner),r.default.component(h.Swipe.name,h.Swipe),r.default.component(h.SwipeItem.name,h.SwipeItem),r.default.component(h.Switch.name,h.Switch),r.default.component(h.Tabbar.name,h.Tabbar),r.default.component(h.TabContainer.name,h.TabContainer),r.default.component(h.TabContainerItem.name,h.TabContainerItem),r.default.component(h.TabItem.name,h.TabItem),r.default.config.productionTip=!1,window.utils=d.a,r.default.mixin({data:function(){return{screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:a()({go:function(e){this.$router.push(e)},back:function(){s.a.goBack()}},n.i(f.a)({toggleHeader:"TOGGLE_HEADER",toggleFooter:"TOGGLE_FOOTER",toggleLoading:"TOGGLE_LOADING"}))}),new r.default({el:"#app",router:s.a,store:l.a,template:"<App/>",components:{App:u.a}})},QNKx:function(e,t,n){"use strict";t.a=[{name:"login",path:"login",meta:{login:!1,hasFooter:!0},component:function(e){n.e(11).then(function(){e(n("NaOX"))}.bind(null,n)).catch(n.oe)}}]},RN31:function(e,t,n){"use strict";t.a=[{name:"chart",path:"chart",meta:{login:!1,hasFooter:!1},component:function(e){n.e(0).then(function(){return e(n("M+8D"))}.bind(null,n)).catch(n.oe)}}]},RTGF:function(e,t,n){"use strict";t.a=[{name:"lock",path:"lock",meta:{login:!1,hasFooter:!1},component:function(e){n.e(4).then(function(){return e(n("PMpZ"))}.bind(null,n)).catch(n.oe)}}]},Thh0:function(e,t,n){"use strict";var o=n("YtJ0"),a=(n("TuU3"),{ready:function(){var e=this;document.addEventListener("deviceready",function(){e.check(),e.bindEvent()},!1)},check:function(){o.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在检测&下载新版本"}),chcp.getVersionInfo(function(e,t){o.a.state.common.app.version!=t.currentWebVersion&&o.a.commit("UPDATE_VERSION",t.currentWebVersion);var n=t.currentWebVersion,a=window.NativeVersion;-1==n.indexOf(a+".")&&(alert("当前版本过低，请安装最新版本"),window.open("https://chenjia.github.io/vue-app/demo/index.html"))})},update:function(){chcp.fetchUpdate(function(){o.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在获取新版本"})},{"config-file":Config.chcpUrl})},bindEvent:function(){document.addEventListener("chcp_updateIsReadyToInstall",function(){o.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本"})},!1),document.addEventListener("chcp_updateLoadFailed",function(){o.a.commit("TOGGLE_POPUP",{visible:!0,text:"获取更新包失败"}),setTimeout(function(){o.a.commit("TOGGLE_POPUP",{visible:!1,text:""})},1e3)},!1),document.addEventListener("chcp_nothingToUpdate",function(){o.a.commit("TOGGLE_POPUP",{visible:!1,text:""})},!1)}});a.ready(),t.a=a},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("3SZ7"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),cache={set:function(e,t){"string"==typeof t?localStorage.setItem(e,t):localStorage.setItem(e,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t))},get:function get(key){var value=localStorage.getItem(key);if(value&&("{"==value.substr(0,1)||"["==value.substr(0,1)))try{value=eval("("+value+")")}catch(e){console.log("error in get cache key:"+key+", value:"+value)}return value},removeItem:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},WEav:function(e,t){},YaEn:function(e,t,n){"use strict";var o=n("Sxqw"),a=n.n(o),i=n("gt1m"),c=n("nYn5"),r=n("YtJ0"),u=n("QNKx"),s=n("roEk"),l=n("5dKJ"),m=n("RN31"),p=n("B17L"),d=n("+tBs"),f=n("lteJ"),h=n("RTGF"),g=n("u9Kv"),_=n("oz5U"),v=n("0dS3"),b=n("IqcW"),T=n("8RzN");i.default.use(c.a),c.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)};var E=new c.a({routes:[{path:"/",redirect:"/page/login"},{path:"/page",component:function(e){n.e(9).then(function(){return e(n("Xk10"))}.bind(null,n)).catch(n.oe)},children:[].concat(a()(u.a),a()(s.a),a()(l.a),a()(m.a),a()(p.a),a()(d.a),a()(f.a),a()(h.a),a()(g.a),a()(_.a),a()(v.a),a()(b.a),a()(T.a))}]});E.beforeEach(function(e,t,n){r.a.commit("TOGGLE_HEADER",0!=e.meta.hasHeader),r.a.commit("TOGGLE_FOOTER",0!=e.meta.hasFooter),r.a.commit("TOGGLE_TABS",1==e.meta.hasTabs),0==e.meta.login||r.a.state.common.user?n():(r.a.commit("TOGGLE_TOAST",{toast:!0,toastMsg:"请先登录！"}),n("/page/login"))}),t.a=E},YtJ0:function(e,t,n){"use strict";var o=n("gt1m"),a=n("PphD"),i=n("C9LJ");o.default.use(a.c),t.a=new a.c.Store({modules:{common:i.a}})},dCUc:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"slide-y",mode:"out-in"}},[n("mt-header",{directives:[{name:"show",rawName:"v-show",value:e.hasHeader,expression:"hasHeader"}],staticStyle:{position:"absolute",top:"0",width:"100%"}})],1),e._v(" "),n("router-view"),e._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{position:"top",modal:!0},model:{value:e.$store.state.common.ui.popupTop,callback:function(t){e.$store.state.common.ui.popupTop=t},expression:"$store.state.common.ui.popupTop"}},[e._v("\n    "+e._s(e.$store.state.common.ui.popupText)+"\n  ")])],1)},a=[],i={render:o,staticRenderFns:a};t.a=i},fPAy:function(e,t,n){"use strict";var o=n("34v0"),a=n.n(o),i=n("PphD");t.a={name:"app",data:function(){return{transitionName:"animate-in"}},computed:a()({},n.i(i.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"]))}},jg9f:function(e,t,n){"use strict";var o={modal:function(e){var t;return{afterOpen:function(){t=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-t+"px"},beforeClose:function(){document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=t}}}()};t.a=o},lekb:function(e,t){},lteJ:function(e,t,n){"use strict";t.a=[{name:"tab",path:"tab",meta:{login:!1,hasFooter:!1},component:function(e){n.e(7).then(function(){return e(n("sVk2"))}.bind(null,n)).catch(n.oe)}}]},oz5U:function(e,t,n){"use strict";t.a=[{name:"loading",path:"loading",meta:{login:!1,hasFooter:!1},component:function(e){n.e(5).then(function(){return e(n("hGVa"))}.bind(null,n)).catch(n.oe)}}]},roEk:function(e,t,n){"use strict";t.a=[{name:"home",path:"home",meta:{login:!1,hasFooter:!1,hasTabs:!0},component:function(e){n.e(6).then(function(){return e(n("h6qm"))}.bind(null,n)).catch(n.oe)}}]},u9Kv:function(e,t,n){"use strict";t.a=[{name:"calendar",path:"calendar",meta:{login:!1,hasFooter:!1},component:function(e){n.e(3).then(function(){return e(n("F3mG"))}.bind(null,n)).catch(n.oe)}}]}},["NHnr"]);