webpackJsonp([18],{"1nUw":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mt-header",{attrs:{title:"视频"}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[a("span",[t._v("返回")])])],1),t._v(" "),a("link",{attrs:{href:"static/lib/videojs/video-js.css",rel:"stylesheet"}}),t._v(" "),a("div",{ref:"box"},[a("video",{staticClass:"video-js",style:{width:t.screenWidth+"px"},attrs:{id:"my-player",controls:""}})]),t._v(" "),a("mt-field",{attrs:{label:"拉流地址",placeholder:"请输入拉流地址"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),a("div",{staticClass:"pd-md"},[a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.init}},[t._v("播　放")])],1),t._v(" "),a("RemoteScript",{attrs:{src:"static/lib/videojs/video.js"}})],1)},n=[],r={render:s,staticRenderFns:n};e.a=r},L8Lp:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("RaaZ"),n=a("1nUw"),r=a("VU/8"),i=r(s.a,n.a,!1,null,null,null);e.default=i.exports},RaaZ:function(t,e,a){"use strict";var s=a("u36N");e.a={name:"Observer",components:{RemoteScript:s.a},data:function(){return{player:null,url:"http://localhost/hls/chenjia.m3u8"}},methods:{init:function(){var t=this;null==this.player&&(this.player=videojs("my-player",{width:this.screenWidth})),this.player.src({src:this.url,type:"application/x-mpegURL"}),this.player.ready(function(){t.player.play()})}},watch:{},mounted:function(){}}},hcfz:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{staticStyle:{display:"none"}})},n=[],r={render:s,staticRenderFns:n};e.a=r},oZZV:function(t,e,a){"use strict";e.a={name:"RemoteScript",props:["src","callback"],mounted:function(){var t=this,e=document.createElement("script");e.type="text/javascript",e.src=this.src,e.onload=e.readystatechange=function(){e.readyState&&!/loaded|complete/.test(e.readyState)||(t.$emit("callback"),e.onload=e.readystatechange=null)},document.body.appendChild(e)}}},u36N:function(t,e,a){"use strict";var s=a("oZZV"),n=a("hcfz"),r=a("VU/8"),i=r(s.a,n.a,!1,null,null,null);e.a=i.exports}});