<template>
  <div class="uploadImg">
    <span class="el-icon-plus"></span>
    <input
      type="file"
      class="upload_ipu"
      ref="fileLoad"
      :accept="accept"
      @change="uploadImg"
      />
      <img :src="imgSrc" v-if="imgShow">
  </div>
</template>

<script>
export default {
  props: {
    accept: {
      type: String,
      default: 'image/jpg,image/jpeg,image/png,image/gif'
    }
  },
  data () {
    return {
      imgShow: false,
      imgSrc: ''
    }
  },
  methods: {
    // 创建上传图片的url，用于预览
    createUrl (file) {
      if (window.URL) {
        return window.URL.createObjectURL(file)
      } else if (window.webkitURL) {
        return window.webkitURL.createObjectURL(file)
      } else {
        return null
      }
    },
    uploadImg () {
      let file = this.$refs.fileLoad.files[0]
      let size = file.size / 1024 / 1024
      if (!this.accept.includes(file.type.toLowerCase())) {
        this.$message.error('图片格式不正确！')
        return false
      }
      if (size > 2) {
        this.$message.error('图片大小不能超过2MB！')
        return false
      }
      this.imgSrc = this.createUrl(file)
      this.imgShow = true
      this.$message.success('上传成功！')
    }
  }
}
</script>
<style lang="scss" scoped>
.uploadImg {
  position: relative;
  width: 180px;
  height: 180px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-color: #409eff;
  }
  span {
    width: 178px;
    height: 178px;
    line-height: 178;
    text-align: center;
    color: #8c939d;
    font-size: 28px;
  }
  .upload_ipu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 178px;
    height: 178px;
    border-radius: 6px;
    z-index: 1;
  }
}
</style>
