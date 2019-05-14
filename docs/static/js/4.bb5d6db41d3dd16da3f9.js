webpackJsonp([4],{"1FGs":function(s,t,a){s.exports=a("qn3F")},qn3F:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("xan-daterange 日期范围")]),s._v(" "),a("p",[s._v("进一步封装数据和配置")]),s._v(" "),a("h2",[s._v("基础用法")]),s._v(" "),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{staticClass:"clearfix"},[a("xan-daterange",{attrs:{"start-time":s.searchObj.beginTime,"end-time":s.searchObj.endTime,"start-placeholder":"创建起始时间","end-placeholder":"创建结束时间"},on:{"update:startTime":function(t){return s.$set(s.searchObj,"beginTime",t)},"update:start-time":function(t){return s.$set(s.searchObj,"beginTime",t)},"update:endTime":function(t){return s.$set(s.searchObj,"endTime",t)},"update:end-time":function(t){return s.$set(s.searchObj,"endTime",t)}}})],1)]),s._v(" "),a("p",[s._v("配置项"),a("code",[s._v("beginTime")]),s._v("和"),a("code",[s._v("endTime")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clearfix"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("xan-daterange")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":start-time.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"searchObj.beginTime"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":end-time.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"searchObj.endTime"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("start-placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"创建起始时间"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("end-placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"创建结束时间"')]),s._v("/>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("searchObj")]),s._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("beginTime")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endTime")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n        }\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    }\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Attributes")]),s._v(" "),s._m(0)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("startTime")]),s._v(" "),a("td",[s._v("开始日期")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("endTime")]),s._v(" "),a("td",[s._v("结束日期")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("startPlaceholder")]),s._v(" "),a("td",[s._v("范围选择时开始日期的占位内容")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("endPlaceholder")]),s._v(" "),a("td",[s._v("范围选择时结束日期的占位内容")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])])])])}]},r=a("C7Lr")({data:function(){return{searchObj:{beginTime:"",endTime:""}}},methods:{}},e,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=4.bb5d6db41d3dd16da3f9.js.map