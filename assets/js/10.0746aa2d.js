(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{519:function(t,s,e){},549:function(t,s,e){"use strict";var c=e(519);e.n(c).a},564:function(t,s,e){"use strict";e.r(s);var c={name:"demo-scroll-list",data:function(){return{count:4}},computed:{list:function(){for(var t=[],s=1;s<10;s++)t.push({title:"第".concat(s,"个标题"),desc:"这是第".concat(s,"个描述呀呀呀呀呀")});return t}},mounted:function(){this.$refs.scroll.reset()},methods:{handleClick:function(t){console.log(t),this.$message.success("你点击了滚动条目")}}},l=(e(549),e(2)),n=Object(l.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"demo demo-scroll-list"},[e("plh-scroll-list",{ref:"scroll",attrs:{data:t.list,count:t.count,itemHeight:60,scrollCount:1,speed:300,delay:2e3},on:{click:t.handleClick},scopedSlots:t._u([{key:"default",fn:function(s){var c=s.item;return[e("div",{staticClass:"alert-item"},[e("div",{staticClass:"title"},[t._v(t._s(c.title))]),t._v(" "),e("div",{staticClass:"desc"},[t._v(t._s(c.desc))])])]}}])})],1)}),[],!1,null,null,null);s.default=n.exports}}]);