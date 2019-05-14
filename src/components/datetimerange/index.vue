<template lang="html">
  <div>
    <el-date-picker
       v-model="currentValue"
       type="datetimerange"
       align="left"
       unlink-panels
       range-separator="至"
       :start-placeholder="startPlaceholder"
       :end-placeholder="endPlaceholder"
       :value-format="valueFormat"
       :picker-options="pickerOptions"
       @change="handleChange"
       >
     </el-date-picker>
  </div>
</template>
<script>
// import _ from 'underscore'
import Vue from 'vue'
import moment from 'moment'

export default {
  name: 'XanDatetimerange',
  props: {
    startTime: {
      default: undefined
    },
    endTime: {
      default: undefined
    },
    startPlaceholder: {
      default: '开始日期'
    },
    endPlaceholder: {
      default: '结束日期'
    },
    value: {
      default: () => ([])
    },
    format: {
      default: 'YYYY-MM-DD HH:mm:ss'
    }
  },
  data: function () {
    let _this = this
    return {
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            const end = new Date(new Date().setHours(0, 0, 0, 0))
            const start = new Date(new Date().setHours(0, 0, 0, 0))
            end.setTime(start.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', [start, end])
            _this.$emit('update:startTime', moment(start).format(_this.format))
            _this.$emit('update:endTime', moment(end).format(_this.format))
          }
        },{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
            _this.$emit('update:startTime', moment(start).format(_this.format))
            _this.$emit('update:endTime', moment(end).format(_this.format))
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
            _this.$emit('update:startTime', moment(start).format(_this.format))
            _this.$emit('update:endTime', moment(end).format(_this.format))
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
            _this.$emit('update:startTime', moment(start).format(_this.format))
            _this.$emit('update:endTime', moment(end).format(_this.format))
          }
        }],
        onPick ({maxDate, minDate}) {
          // console.log('minDate', minDate)
          // console.log('maxDate', maxDate)
        }
      },
      currentValue: this.value
    }
  },
  watch: {
    startTime: {
      handler (val) {
        // console.log('val', val)
        let _this = this
        let s
        if (this.currentValue[0]) {
          s = moment(this.currentValue[0]).format(_this.format)
        }
        // console.log('s', s)
        // console.log('currentValue', this.currentValue)
        if (val && val !== s) {
          Vue.set(this.currentValue, 0,  moment(val).toDate())
        }
      },
      immediate: true
    },
    endTime: {
      handler (val) {
        let _this = this
        // console.log('endTime', val)
        let s
        if (this.currentValue[1]) {
          s = moment(this.currentValue[1]).format(_this.format)
        }
        if (val && val !== s) {
          Vue.set(this.currentValue, 1,  moment(val).toDate())
        }
      },
      immediate: true
    },
    value: {
      handler (val) {
        // console.log('val', val)
        // if (val) {
        //   this.currentValue = val
        // }
      }
    }
  },
  mounted () {

  },
  methods: {
    handleChange (o) {
      if (o && o[0]) {
        this.$emit('update:startTime', o[0])
      }
      if (o && o[1]) {
        this.$emit('update:endTime', o[1])
      }
    },
  }
}
</script>
