(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{497:function(e,a,l){"use strict";l.d(a,"a",(function(){return t})),l.d(a,"b",(function(){return s}));var t={tag:"el-radio-group",children:{tag:"el-radio-button",options:[{label:"是",value:!0},{label:"否",value:!1}]}},s={size:{tag:"el-radio-group",label:"尺寸(size)",key:"size",children:{tag:"el-radio-button",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"},{label:"mini",value:"mini"}]}},tootipEffect:{tag:"el-radio-group",label:"主题(effect)",key:"effect",children:{tag:"el-radio-button",options:[{label:"dark",value:"dark"},{label:"light",value:"light"}]}}}},556:function(e,a,l){"use strict";l.r(a);l(44);var t=l(1),s=l(5),i=l(497),o=[Object(t.a)({},i.b.size),Object(t.a)(Object(t.a)({},i.a),{},{label:"显示查询按钮(showSubmit)",key:"showSubmit"}),Object(t.a)(Object(t.a)({},i.a),{},{label:"是否收起(collapse)",key:"collapse"}),Object(t.a)(Object(t.a)({},i.a),{},{label:"禁用(disabled)",key:"disabled"})],c={name:"DemoSearchBase",data:function(){var e=[{label:"选项一",value:"1"},{label:"选项二",value:"2"}];return{params:{size:"medium",showSubmit:!0,collapse:!0,disabled:!1},searchList:Object(s.a)(o),model:{checkbox:[]},formList:[{tag:"el-input",label:"输入框",key:"input"},{tag:"el-select",lable:"选择框",key:"select",children:{tag:"el-option",options:[].concat(e)}},{tag:"plh-date-picker",label:"时间选择",key:"time",props:{type:"daterange"}},{tag:"el-radio-group",label:"单选",key:"radio",children:{tag:"el-radio",options:[].concat(e)}},{tag:"el-checkbox-group",label:"多选",key:"checkbox",children:{tag:"el-checkbox",options:[].concat(e)}}]}},methods:{handleSearch:function(e){this.params=Object(t.a)({},e)},handleExampleSearch:function(e){this.model=Object(t.a)({},e)}}},r=l(2),n=Object(r.a)(c,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"demo demo-search"},[l("h3",[e._v("配置项")]),e._v(" "),l("plh-search",{attrs:{params:e.params,searchList:e.searchList,showSubmit:!1,collapse:!1},on:{submit:e.handleSearch}}),e._v(" "),l("div",{staticClass:"mt10"},[l("h3",[e._v("示例")]),e._v(" "),l("plh-search",{attrs:{params:e.model,searchList:e.formList,size:e.params.size,showSubmit:e.params.showSubmit,collapse:e.params.collapse},on:{submit:e.handleExampleSearch}}),e._v(" "),l("p",{staticClass:"code"},[e._v(e._s(e.model))])],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);