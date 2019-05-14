webpackJsonp([2],{MsuA:function(s,t,a){s.exports=a("x9SC")},x9SC:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("xan-upload-dialog 上传文件对话框")]),s._v(" "),a("p",[s._v("导入xls,xlsx文件,如果存在模板文件,提供下载。")]),s._v(" "),a("h2",[s._v("基础用法")]),s._v(" "),a("demo-block",[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("div",{staticClass:"clearfix"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"pull-left mr-10",attrs:{size:"small",icon:"el-icon-upload2"},on:{click:s.handleImport}},[s._v("导 入")])],1),s._v(" "),a("xan-upload-dialog",{ref:"upDialog",attrs:{option:s.upOption},on:{success:s.handleUploadSuccess}})],1),s._v(" "),a("p",[s._v("配置项"),a("code",[s._v("title")]),s._v("和"),a("code",[s._v("url")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clearfix"')]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pull-left mr-10"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-waves")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"el-icon-upload2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleImport"')]),s._v(">")]),s._v("导 入"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el-button")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("xan-upload-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":option")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"upOption"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"upDialog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@success")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"handleUploadSuccess"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("xan-upload-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("upOption")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 上传参数")]),s._v("\n          title: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'导入承运商'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": process.env.BASE_API + "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`/carriers/import`")]),s._v("\n        }\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      handleImport() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.upDialog.show()\n      },\n      handleUploadSuccess() {\n\n      }\n    }\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),a("h3",[s._v("Attributes")]),s._v(" "),s._m(0),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),s._m(1)],1)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("对话框标题")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("url")]),s._v(" "),a("td",[s._v("上传地址")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("其他数据")]),s._v(" "),a("td",[s._v("object")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])]),s._v(" "),a("tr",[a("td",[s._v("downloadUrl")]),s._v(" "),a("td",[s._v("模板下载地址")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("—")]),s._v(" "),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("success")]),s._v(" "),a("td",[s._v("上传成功")]),s._v(" "),a("td",[s._v("{status: true, result: {}}")])]),s._v(" "),a("tr",[a("td",[s._v("error")]),s._v(" "),a("td",[s._v("上传失败")]),s._v(" "),a("td",[s._v("{status: false, result: ''}")])])])])}]},v=a("C7Lr")({data:function(){return{upOption:{title:"导入承运商",url:"/carriers/import"}}},methods:{handleImport:function(){this.$refs.upDialog.show()},handleUploadSuccess:function(){}}},r,!1,null,null,null);t.default=v.exports}});
//# sourceMappingURL=2.4839986512399e336b15.js.map