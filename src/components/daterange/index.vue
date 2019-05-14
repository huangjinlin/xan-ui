<template lang="html">
  <div>
    <el-date-picker
       v-model="currentValue"
       type="daterange"
       align="left"
       unlink-panels
       range-separator="至"
       :start-placeholder="startPlaceholder"
       :end-placeholder="endPlaceholder"
       :value-format="valueFormat"
       :picker-options="pickerOptions">
     </el-date-picker>
  </div>
</template>
<script>
// import _ from 'underscore'
import Vue from 'vue'
import moment from 'moment'

export default {
  name: 'XanDaterange',
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
      default: 'YYYY-MM-DD'
    }
  },
  data: function () {
    let _this = this
    return {
      valueFormat: 'yyyy-MM-dd',
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
          console.log('minDate', minDate)
          console.log('maxDate', maxDate)
          if (minDate) {
            minDate = moment(minDate).format(_this.format)
            if (minDate !== this.startTime) {
              _this.$emit('update:startTime', minDate)
            }
          }
          if (maxDate) {
            maxDate = moment(maxDate).format(_this.format)
            if (maxDate !== this.endTime) {
              _this.$emit('update:endTime', maxDate)
            }
          }
          // console.log('onPick', true)
          // console.log('maxDate', maxDate)
          // console.log('minDate', minDate)
          let value = [minDate, maxDate]
          // console.log('value', value)
          _this.$emit('input', value)
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

  }
}
</script>
