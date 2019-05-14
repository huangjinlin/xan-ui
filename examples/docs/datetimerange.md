# xan-datetimerange 日期范围
进一步封装数据和配置

## 基础用法

:::demo 配置项`beginTime`和`endTime`

```html
<div class="clearfix">
  <xan-datetimerange :start-time.sync="searchObj.beginTime" :end-time.sync="searchObj.endTime" start-placeholder="创建起始时间" end-placeholder="创建结束时间"/>
</div>
<script>
  export default {
    data() {
      return {
        searchObj: {
          beginTime: '',
          endTime: ''
        }
      }
    },
    methods: {
    }
  };
</script>
```

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| startTime | 开始日期 | string | — | — |
| endTime | 结束日期 | string | — | — |
| startPlaceholder | 范围选择时开始日期的占位内容 | string | — | — |
| endPlaceholder | 范围选择时结束日期的占位内容 | string | — | — |
