webpackJsonp([6],{RMYu:function(t,e,n){t.exports=n.p+"static/img/banner2.jpg"},Y3nl:function(t,e,n){t.exports=n.p+"static/img/banner5.jpg"},YTEZ:function(t,e,n){e=t.exports=n("bKW+")(!1),e.push([t.i,".icon-table[data-v-22e99f64]{width:100%;text-align:center;background:#fff;font-size:13px;border:none;border-collapse:collapse}.icon-table td[data-v-22e99f64]{height:64px;line-height:20px;vertical-align:middle;border:1px dashed #dfdfdf}.icon-table td i[data-v-22e99f64]{font-size:24px}",""])},"d+fs":function(t,e,n){t.exports=n.p+"static/img/banner1.jpg"},eBQN:function(t,e,n){t.exports=n.p+"static/img/banner3.jpg"},f7R7:function(t,e,n){var a=n("YTEZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("6imX")("1e01ffa3",a,!0)},fqvt:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lxt-page"},[n("mt-header",{attrs:{title:"首页"}},[n("mt-button",{staticClass:"fa fa-fw fa-bars",attrs:{slot:"left"},slot:"left"}),t._v(" "),n("mt-button",{staticClass:"fa fa-fw fa-lock",attrs:{slot:"right"},on:{click:function(e){t.go("/login")}},slot:"right"})],1),t._v(" "),n("div",[n("mt-swipe",{style:{height:.6*t.screenWidth+"px"},attrs:{auto:4e3}},t._l(t.banners,function(e,a){return n("mt-swipe-item",{key:a},[n("img",{style:{height:.6666*t.screenWidth+"px"},attrs:{src:e.src}})])})),t._v(" "),n("table",{staticClass:"icon-table"},t._l(t.menus,function(e,a){return a%4==0?n("tr",{key:a},t._l(t.menus,function(e,o){return o>=a&&o<a+4?n("td",{staticStyle:{width:"25%"}},[n("div",{on:{click:function(n){t.go(e.url)}}},[n("i",{staticClass:"fa fa-fw",class:"fa fa-"+e.icon,style:{color:e.color}}),n("br"),t._v(" "),n("span",[t._v(t._s(e.name))])])]):t._e()})):t._e()}))],1)],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},h6qm:function(t,e,n){"use strict";function a(t){n("f7R7")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("sgqc"),r=n("fqvt"),i=n("25r8"),c=a,s=i(o.a,r.a,c,"data-v-22e99f64",null);e.default=s.exports},iBFy:function(t,e,n){t.exports=n.p+"static/img/banner4.jpg"},sgqc:function(t,e,n){"use strict";n("PphD");e.a={name:"home",data:function(){return{drawer:!1,mini:!1,temporary:!0,right:null,leftMenus:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],banners:[{src:n("d+fs")},{src:n("RMYu")},{src:n("eBQN")},{src:n("iBFy")},{src:n("Y3nl")}],menus:[{name:"列表",icon:"list",color:"#ff7f50",url:"list"},{name:"图表",icon:"bar-chart",color:"#87cefa",url:"chart"},{name:"通讯录",icon:"book",color:"#da70d6",url:"contact"},{name:"表单",icon:"list-alt",color:"#32cd32",url:"form"},{name:"选项卡",icon:"folder",color:"#6495ed",url:"tab"},{name:"锁屏",icon:"hand-o-up",color:"#ff69b4",url:"lock"},{name:"加载",icon:"spinner",color:"#ffa500",url:"loading"},{name:"视频",icon:"video-camera",color:"#cd5c5c",url:"live"},{name:"日历",icon:"calendar",color:"#ba55d3",url:"calendar"},{name:"地图",icon:"map",color:"#40e0d0",url:"map"},{name:"弹窗",icon:"window-restore",color:"#1e90ff",url:"dialog"},{name:"聊天",icon:"qq",color:"#ff6347",url:"chat"}]}},methods:{}}}});