<template>
  <el-dialog :title="option.title"  :visible.sync="visible" width="500" center :show-close="false" :before-close="()=>{}">
    <div class="text-center">
      <el-upload
        drag
        :action="option.url"
        :data="option.data"
        :limit="1"
        :auto-upload="false"
        :accept="fileType.map(t => `.${t}`).toString()"
        :on-error="handleError"
        :on-success="handleSuccess"
        :before-upload="handleBeforUpload"
        name="file"
        ref="upload"
        :headers="headers"
        :multiple="false">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处或点击选择文件</div>
        <div class="el-upload__tip" slot="tip">只能上传{{fileType.toString('/')}}文件，且不超过{{maxSize}}MB</div>
        <div class="">
          <span class="el-upload__tip cursor-pointer el-button--text" v-if="option && option.downloadUrl" @click.stop="handleDownload">下载模板</span>
        </div>
      </el-upload>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose">关 闭</el-button>
      <el-button type="primary" @click="handleUpload" :loading="loading">上传</el-button>
    </div>
  </el-dialog>
</template>

<script>
import _ from 'underscore'
import { endsWith } from 'underscore.string'
import Vue from 'vue'
export default {
  name: 'XanUploadDialog',
  props: {
    option: {
      type: Object,
      default: function(){
        return {
          data: {},
          title: '上传文件',
          downloadUrl: '',
          url: ''
        }
      },
      required: true
    }
  },
  data () {
    let headers = {}
    headers[Vue.prototype.$XAN.tokenName] = _.isFunction(Vue.prototype.$XAN.tokenValue) ? Vue.prototype.$XAN.tokenValue() : Vue.prototype.$XAN.tokenValue
    return {
      visible: false,
      loading: false,
      fileType: ['xls', 'xlsx'],
      maxSize: 10,
      headers: headers
    }
  },
  watch: {
    option: function(newVal,oldVal){
      this.$refs.upload && this.$refs.upload.clearFiles()
    }
  },
  computed: {
  },
  methods: {
    handleDownload() {
      window.location.href = this.option.downloadUrl
    },
    handleClose() {
      this.visible = false
      this.loading = false
      this.$refs.upload.clearFiles()
    },
    handleUpload(){
      console.log('handleUpload', true)
      this.$refs.upload.submit()
    },
    show() {
      this.visible = true
    },
    handleBeforUpload (file) {
      return new Promise((resolve, reject)=>{
        let msg = ''
        let f = _.some(this.fileType, (t) => {
          return endsWith(file.name, '.'+t)
        })
        if (!f) {
          msg = `上传文件只能是${this.fileType}格式!`
        }
        if (file.size < 0) {
          msg = '请选择要上传的文件!'
        }
        if(file.size > 0 && (file.size / 1024 / 1024) > this.maxSize){
          msg = `上传文件大小不能超过${this.maxSize}MB!`
        }
        if(msg !== ''){
          this.$message.warning(msg);
          reject()
        }else{
          resolve()
        }
      })
    },
    handleSuccess (response, file, fileList) {
      console.log('成功回调：', response, file, fileList)
      if(response.status==0){
        this.$message.success('导入成功,可继续上传!')
        this.$emit('success',{status: true, result: response.result})
        this.$refs.upload.clearFiles()
      }else{
        this.$message.error(response.message)
        this.loading = false
        this.$emit('error',{status: false, result: response.message})
      }
    },
    // 上传错误
    handleError (err, file, fileList) {
      console.log('失败回调：', err)
      this.$message.error("文件导入失败：" + err.message)
      this.$emit('error',{status: false, result: err.message})
      this.loading = false
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
