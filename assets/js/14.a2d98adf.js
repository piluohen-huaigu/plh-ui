(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{497:function(e,a,l){"use strict";l.d(a,"a",(function(){return t})),l.d(a,"b",(function(){return i}));var t={tag:"el-radio-group",children:{tag:"el-radio-button",options:[{label:"是",value:!0},{label:"否",value:!1}]}},i={size:{tag:"el-radio-group",label:"尺寸(size)",key:"size",children:{tag:"el-radio-button",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"},{label:"mini",value:"mini"}]}},tootipEffect:{tag:"el-radio-group",label:"主题(effect)",key:"effect",children:{tag:"el-radio-button",options:[{label:"dark",value:"dark"},{label:"light",value:"light"}]}}}},552:function(e,a,l){"use strict";l.r(a);l(34);var t=l(1),i=l(5),o=[{label:"名称",tag:"el-input",key:"name",required:!0,rules:[{required:!0,message:"请输入名称",trigger:"change"}],attrs:{placeholder:"请输入名称",maxlength:10},on:{change:function(e){console.log("change",e)}}},{label:"开关",tag:"el-switch",key:"switch",on:{change:function(e){console.log(e)}}},{label:"选择类型",tag:"el-select",key:"type",props:{clearable:!0,filterable:!0},children:{tag:"el-option",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3",disabled:!0}]},on:{change:function(e){console.log(e)},"visible-change":function(e){console.log(e)}}},{label:"单选组",tag:"el-radio-group",key:"radio",children:{tag:"el-radio",options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3",disabled:!0}]},on:{change:function(e){console.log(e)}}},{label:"多选组",tag:"el-checkbox-group",key:"checkbox",children:{tag:"el-checkbox",props:{border:!0,size:"medium"},options:[{label:"选项一",value:"1"},{label:"选项二",value:"2"},{label:"选项三",value:"3",disabled:!0}]},on:{change:function(e){console.log(e)}}},{label:"数字输入",tag:"el-input-number",key:"number"},{label:"多层选择",tag:"el-cascader",key:"cascader",props:{options:[{value:"zhinan",label:"指南",disabled:!0,children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]},{value:"daohang",label:"导航",children:[{value:"cexiangdaohang",label:"侧向导航"},{value:"dingbudaohang",label:"顶部导航"}]}]},{value:"zujian",label:"组件",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"}]}]}]}},{label:"滑块",tag:"el-slider",key:"slider"},{label:"时间选择",tag:"plh-date-picker",key:"time",props:{}},{label:"评分",tag:"el-rate",key:"rate"},{label:"颜色选择",tag:"el-color-picker",key:"color"},{label:"描述",tag:"el-input",key:"desc",props:{type:"textarea"},attrs:{maxlength:10,rows:4}}],s=l(497),r=[Object(t.a)({},s.b.size),Object(t.a)(Object(t.a)({},s.a),{},{label:"行内显示(inline)",key:"inline"}),{tag:"el-radio-group",label:"分列(col)",key:"col",children:{tag:"el-radio-button",options:[6,8,12,24].map((function(e){return{label:e,value:e}}))}},{tag:"el-radio-group",label:"标签位置(label-position)",key:"label-position",children:{tag:"el-radio-button",options:["left","right","top"].map((function(e){return{label:e,value:e}}))}},{tag:"el-input",label:"标签宽度(label-width)",key:"label-width"},{tag:"el-input",label:"标签后缀(label-suffix)",key:"label-suffix"},Object(t.a)(Object(t.a)({},s.a),{},{label:"显示*号(hide-required-asterisk)",key:"hide-required-asterisk"}),Object(t.a)(Object(t.a)({},s.a),{},{label:"显示校验错误信息(show-message)",key:"show-message"}),Object(t.a)(Object(t.a)({},s.a),{},{label:"是否显示反馈图标(status-icon)",key:"status-icon"}),Object(t.a)(Object(t.a)({},s.a),{},{label:"禁用(disabled)",key:"disabled"})],n={name:"DemoFormBase",data:function(){return{params:{size:"medium",inline:!1,disabled:!1,col:24,"label-position":"right","label-width":"100px","label-suffix":"","hide-required-asterisk":!1,"show-message":!0,"status-icon":!1},searchList:Object(i.a)(r),model:{checkbox:[]}}},computed:{formItems:function(){var e=this;return o.map((function(a){return a.col=e.params.col,a}))}},methods:{handleSearch:function(e){this.params=Object(t.a)({},e)}}},c=l(2),b=Object(c.a)(n,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"demo demo-form"},[l("h3",[e._v("配置项")]),e._v(" "),l("plh-search",{attrs:{params:e.params,searchList:e.searchList,showSubmit:!1,collapse:!1},on:{submit:e.handleSearch}}),e._v(" "),l("div",{staticClass:"mt20"},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("plh-form",{ref:"form",attrs:{items:e.formItems,size:e.params.size,inline:e.params.inline,disabled:e.params.disabled,"label-position":e.params["label-position"],"label-width":e.params["label-width"],"label-suffix":e.params["label-suffix"],"hide-required-asterisk":e.params["hide-required-asterisk"],"show-message":e.params["show-message"],"status-icon":e.params["status-icon"]},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}})],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("p",{staticClass:"code"},[e._v("\n          "+e._s(e.model)+"\n        ")])])],1)],1)],1)}),[],!1,null,null,null);a.default=b.exports}}]);