webpackJsonp([5],{"+Bg0":function(t,e,a){var s=a("UjAd");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("5edd1dde",s,!0,{})},"09HW":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,'.popup-details{width:100%;height:100%}.chat-container{overflow-y:auto}.chat-box{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.chat-send{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.chat-head{width:36px;height:36px;border:1px solid #ccc;border-radius:50%}.chat-msg{position:relative;background:#eee;border:1px solid #ccc;border-radius:4px;margin:0 0 0 20px;padding:10px;max-width:60%;word-wrap:break-word}.chat-send .chat-msg{border:1px solid #26a2ff;background:#e3f2fd;margin:0 20px 0 0}.chat-send .chat-msg:before{border-left:1px solid #26a2ff;border-bottom:1px solid #26a2ff;background:#e3f2fd;right:-6px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.chat-receive .chat-msg:before,.chat-send .chat-msg:before{width:10px;height:10px;z-index:1;display:inline-block;content:" ";position:absolute;top:10px}.chat-receive .chat-msg:before{border-left:1px solid #ccc;border-bottom:1px solid #ccc;background:#eee;left:-6px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.chat-editor{position:fixed;z-index:9;-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;background:#eee;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;width:100%;height:50px;line-height:50px}.chat-editor-btn{display:inline-block;margin-left:10px;width:30px;height:30px;line-height:30px;text-align:center;color:#666;border:1px solid #ccc;border-radius:50%}.chat-editor-input{padding:0 5px;background:none;border:none;height:30px;line-height:30px;border-bottom:1px solid #ccc;border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 100px;flex:1 1 100px}.rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.loadmore-arrow{-webkit-transition:all .3s ease-out;transition:all .3s ease-out;font-size:24px;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;color:#26a2ff}.loadmore-arrow,div[class^=mint-spinner-]{display:inline-block}',""])},"1gSM":function(t,e,a){t.exports=a.p+"static/img/head_bg.jpg"},AH0k:function(t,e,a){t.exports=a.p+"static/img/head.jpg"},"F0Q+":function(t,e,a){var s=a("ioos");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("08bb8900",s,!0,{})},LFDM:function(t,e,a){"use strict";e.a={name:"chatDetails",props:{open:{type:Boolean,default:!0},target:{type:Object}},data:function(){return{now:(new Date).getTime(),show:this.open,currentPage:1,topStatus:"",msg:"",user:utils.cache.get("user")||{userId:"admin"},heads:{admin:a("AH0k"),chenjia:a("AH0k"),xiaoting:a("1gSM")},targets:{},records:{}}},methods:{change:function(t){this.show=t,this.$emit("update:open",t)},queryRecords:function(t){var e=this;utils.http.post("/chat/record",{sendId:this.user.userId,receiveId:this.target.friendId,beforeDate:this.now,currentPage:this.currentPage,count:10}).then(function(a){setTimeout(function(){if(e.currentPage++,e.records[e.target.friendId]){var s=e.records[e.target.friendId][0].recordId;e.$set(e.records,e.target.friendId,a.data.body.data.reverse().concat(e.records[e.target.friendId])),setTimeout(function(){document.querySelector(".chat-container").scrollTop=document.getElementById(s).offsetTop-50,t()})}else e.$set(e.records,e.target.friendId,a.data.body.data.reverse()),setTimeout(function(){document.querySelector(".chat-container").scrollTop=99999})},500)}).catch(function(){e.records={admin:[{recordId:"xxxxx",receiveId:"admin",sendId:"chenjia",content:"Hello World"}],chenjia:[],xiaoting:[]}})},loadTop:function(){var t=this;this.queryRecords(function(){t.$refs.loadmore.onTopLoaded()})},handleTopChange:function(t){this.topStatus=t},send:function(){var t={msgType:0,sendId:this.user.userId,sendUser:this.user.realname,receiveId:this.target.friendId,receiveUser:this.target.memo,content:this.msg};document.getElementById("chatFrame").contentWindow.postMessage(t,"*"),this.records[this.target.friendId].push(t),this.msg="",setTimeout(function(){document.querySelector(".chat-container").scrollTop=99999})},receiveMessage:function(t){this.records[t.sendId]&&(this.records[t.sendId].push(t),setTimeout(function(){document.querySelector(".chat-container").scrollTop=99999}))}},watch:{open:function(t){this.change(t)},target:function(t){this.queryRecords()}},mounted:function(){var t=this;window.addEventListener("message",function(e){t.receiveMessage(e.data)})}}},QI3B:function(t,e,a){"use strict";function s(t){a("F0Q+")}var i=a("bgNu"),o=a("twNw"),n=a("C7Lr"),r=s,c=n(i.a,o.a,!1,r,null,null);e.a=c.exports},T5Y6:function(t,e,a){"use strict";function s(t){a("+Bg0")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("eBGj"),o=a("V1Ii"),n=a("C7Lr"),r=s,c=n(i.a,o.a,!1,r,"data-v-f0c4c706",null);e.default=c.exports},UjAd:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,'.popup-menu[data-v-f0c4c706]:before{width:0;height:0;display:inline-block;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #fff;content:" ";position:absolute;top:-10px;right:8px}.popup-menu[data-v-f0c4c706]{top:195px;width:150px;border-radius:10px}.popup-config[data-v-f0c4c706]{width:80%;height:100%}.chat-head[data-v-f0c4c706]{width:36px;border-radius:50%}',""])},V1Ii:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mt-header",{attrs:{title:"即时聊天"}},[s("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[s("span",[t._v("返回")])]),t._v(" "),s("mt-button",{attrs:{slot:"right"},on:{click:function(e){t.popupMenu=!0}},slot:"right"},[s("i",{staticClass:"fa fa-fw fa-plus"})])],1),t._v(" "),s("div",{staticClass:"chat-cell"},[t._l(t.contacts,function(e,i){return s("accordion",{key:i,attrs:{open:!1}},[s("div",{attrs:{slot:"title"},slot:"title"},[s("div",[s("i",{staticClass:"fa fa-fw fa-user"}),t._v(" "+t._s(e.name))])]),t._v(" "),s("div",{attrs:{slot:"content"},slot:"content"},t._l(e.friends,function(e,i){return s("mt-cell",{key:i,attrs:{title:e.memo,label:"暂无最新消息"},nativeOn:{click:function(a){t.toDetails(e)}}},[s("img",{staticClass:"chat-head",attrs:{src:a("AH0k")}})])}))])}),t._v(" "),s("p",{staticClass:"pd-md",staticStyle:{color:"gray"}},[t._v("PS：可用admin/admin，chenjia/chenjia 两个用户模拟聊天场景，后台采用dwr的http长连接实现")])],2),t._v(" "),s("mt-popup",{staticClass:"popup-config",attrs:{position:"left"},model:{value:t.popupConfig,callback:function(e){t.popupConfig=e},expression:"popupConfig"}},[s("mt-cell",{attrs:{title:"创建群聊"}},[s("i",{staticClass:"fa fa-fw fa-commenting-o",attrs:{slot:"icon"},slot:"icon"})])],1),t._v(" "),s("mt-popup",{staticClass:"popup-menu",style:{left:t.screenWidth-80+"px"},model:{value:t.popupMenu,callback:function(e){t.popupMenu=e},expression:"popupMenu"}},[s("mt-cell",{attrs:{title:"创建群聊"}},[s("i",{staticClass:"fa fa-fw fa-commenting-o",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("mt-cell",{attrs:{title:"加好友/群"}},[s("i",{staticClass:"fa fa-fw fa-user-o",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("mt-cell",{attrs:{title:"扫一扫"}},[s("i",{staticClass:"fa fa-fw fa-qrcode",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("mt-cell",{attrs:{title:"面对面快传"}},[s("i",{staticClass:"fa fa-fw fa-retweet",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("mt-cell",{attrs:{title:"付款"}},[s("i",{staticClass:"fa fa-fw fa-barcode",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),s("mt-cell",{attrs:{title:"拍摄"}},[s("i",{staticClass:"fa fa-fw fa-camera",attrs:{slot:"icon"},slot:"icon"})])],1),t._v(" "),s("chatDetails",{attrs:{open:t.popupDetails,target:t.target},on:{"update:open":function(e){t.popupDetails=e}}}),t._v(" "),s("iframe",{staticStyle:{display:"none"},attrs:{id:"chatFrame",src:t.server+"/chat/chatFrame.html?userId="+t.user.userId}})],1)},i=[],o={render:s,staticRenderFns:i};e.a=o},X1VW:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mt-popup",{staticClass:"popup-details",attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("mt-header",{attrs:{title:t.target.name}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(e){t.change(!1)}},slot:"left"},[t._v("返回")])],1),t._v(" "),a("div",{staticClass:"chat-container pd-md",style:{height:t.screenHeight-100+"px"}},[a("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop},on:{"top-status-change":t.handleTopChange}},[a("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],staticClass:"loadmore-arrow",class:{rotate:"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[a("mt-spinner",{attrs:{type:"fading-circle",color:"#26a2ff",size:20}}),t._v(" "),a("span",{staticStyle:{position:"relative",top:"-4px",left:"4px",color:"#26a2ff"}},[t._v("加载中...")])],1)]),t._v(" "),t._l(t.records[t.target.friendId],function(e,s){return a("div",{staticClass:"chat-box",class:{"chat-receive":t.user.userId==e.receiveId,"chat-send":t.user.userId==e.sendId},attrs:{id:e.recordId}},[a("img",{staticClass:"chat-head",attrs:{src:t.heads[e.sendId]}}),t._v(" "),a("div",{staticClass:"chat-msg",domProps:{innerHTML:t._s(e.content)}})])})],2)],1),t._v(" "),a("div",{staticClass:"chat-editor"},[a("div",{staticClass:"chat-editor-btn",staticStyle:{transform:"rotate(90deg)"}},[a("i",{staticClass:"fa fa-fw fa-wifi"})]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"chat-editor-input",style:{width:t.screenWidth-100+"px"},attrs:{type:"text"},domProps:{value:t.msg},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.send(e):null},input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),a("div",{staticClass:"chat-editor-btn"},[a("i",{staticClass:"fa fa-fw fa-smile-o"})]),t._v(" "),a("mt-button",{directives:[{name:"show",rawName:"v-show",value:null!=t.msg&&""!=t.msg,expression:"msg != null && msg != ''"}],staticStyle:{margin:"0 10px"},attrs:{type:"primary",size:"small"},on:{click:t.send}},[t._v("发送")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:null==t.msg||""==t.msg,expression:"msg == null || msg == ''"}],staticClass:"chat-editor-btn",staticStyle:{"margin-right":"10px"}},[a("i",{staticClass:"fa fa-fw fa-plus"})])],1)],1)},i=[],o={render:s,staticRenderFns:i};e.a=o},bgNu:function(t,e,a){"use strict";e.a={name:"accordion",props:{open:{type:Boolean,default:!1}},data:function(){return{ready:!1,cascade:!1,animation:!1,expand:this.open}},mounted:function(){var t=this;this.ready=!0;var e=this.$el.previousElementSibling;e&&"accordion"==e.className&&(this.cascade=!0),setTimeout(function(){t.animation=!0})}}},eBGj:function(t,e,a){"use strict";var s=a("QI3B"),i=a("jMze");e.a={name:"chat",components:{accordion:s.a,chatDetails:i.a},data:function(){return{server:Config.server,user:utils.cache.get("user")||{userId:"admin"},popupMenu:!1,popupConfig:!1,popupDetails:!1,contacts:[],target:{userId:"chenjia",name:"陈佳",head:"../../../static/img/head.jpg"}}},methods:{getFriends:function(){this.contacts=[{name:"最近联系人",friends:[{name:"admin",memo:"admin",friendId:"admin"},{name:"chenjia",memo:"chenjia",friendId:"chenjia"},{name:"xiaoting",memo:"xiaoting",friendId:"xiaoting"}]}]},toDetails:function(t){this.popupDetails=!0,this.target=t}},mounted:function(){this.getFriends()}}},ioos:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".content{padding:1px 0}.content .mint-cell:first-child .mint-cell-wrapper,.content .mint-cell:last-child{background:none}",""])},jMze:function(t,e,a){"use strict";function s(t){a("oE07")}var i=a("LFDM"),o=a("X1VW"),n=a("C7Lr"),r=s,c=n(i.a,o.a,!1,r,null,null);e.a=c.exports},oE07:function(t,e,a){var s=a("09HW");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("312cb950",s,!0,{})},twNw:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion",style:{"margin-top":t.cascade?"-1px":""}},[a("mt-cell",{staticStyle:{background:"#fefefe"}},[a("div",{staticStyle:{color:"#26a2ff"},attrs:{slot:"title"},on:{click:function(e){t.expand=!t.expand}},slot:"title"},[t._t("title"),t._v(" "),a("i",{staticClass:"fa fa-fw fa-angle-down",staticStyle:{"-webkit-transition":"all .2s ease-out",position:"absolute",right:"10px",top:"14px","font-size":"20px"},style:{"-webkit-transform":t.expand?"rotate(180deg)":""}})],2)]),t._v(" "),t.$slots.content[0].children.length>0?a("mt-cell",{style:{height:t.ready&&t.expand?t.$refs.content.clientHeight+"px":"1px","min-height":t.ready&&t.expand?t.$refs.content.clientHeight+"px":"1px","-webkit-transition":t.animation?"all .2s ease-out":""}},[a("div",{ref:"content",staticClass:"content",attrs:{slot:"title"},slot:"title"},[t._t("content")],2)]):t._e()],1)},i=[],o={render:s,staticRenderFns:i};e.a=o}});