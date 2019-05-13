# xan-upload-dialog 上传文件对话框
导入xls,xlsx文件,如果存在模板文件,提供下载。

## 基础用法

:::demo 配置项`title`和`url`

```html
<div class="clearfix">
  <el-button class="pull-left mr-10" v-waves size="small" icon="el-icon-upload2" @click="handleImport">导 入</el-button>
</div>
<xan-upload-dialog :option="upOption" ref="upDialog" @success="handleUploadSuccess"></xan-upload-dialog>
<script>
  export default {
    data() {
      return {
        upOption: { // 上传参数
          title: '导入承运商',
          url: process.env.BASE_API + `/carriers/import`
        }
      }
    },
    methods: {
      handleImport() {
        this.$refs.upDialog.show()
      },
      handleUploadSuccess() {

      }
    }
  };
</script>
```

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 对话框标题 | string | — | — |
| url | 上传地址 | string | — | — |
| data | 其他数据 | object | — | — |
| downloadUrl | 模板下载地址 | string | — | — |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| success | 上传成功 | {status: true, result: {}} |
| error | 上传失败 | {status: false, result: ''} |
