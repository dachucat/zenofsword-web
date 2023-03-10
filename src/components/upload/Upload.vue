<template>
  <el-upload
    class="avatar-uploader"
    action
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :http-request="upload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps, onMounted, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps } from 'element-plus'

const emit = defineEmits(['onSuccess'])
const imageUrl = ref('')

const props = defineProps({
  url: {
    type: String,
    default: null
  },
})


watch(
  () => props.url,
  (news, old) => {
    // console.log(news)
    imageUrl.value = news
  }
)

onMounted(() => {
  imageUrl.value = props.url
  // console.log(props)
})


const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  console.log(response, uploadFile)
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
const upload = (params) => {
  console.log(params)
  if (window.FileReader) {
    let reader = new FileReader()
    reader.readAsDataURL(params.file)
    reader.onload = (e) => {
      let baser64 = e.target.result
      // console.log(baser64)
      imageUrl.value = String(baser64)

      emit("onSuccess", baser64)
    }

  }
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  const isJPG = rawFile.type === 'image/png' || 'image/webp';
  const isLt2M = rawFile.size / 1024 / 1024 < 2;
  if (!isJPG) {
    ElMessage.error('上传头像图片只能是 PNG/WEBP 格式!')
    return false
  }
  if (!isLt2M) {
    ElMessage.error('上传头像图片大小不能超过 2MB!')
    return false
  }
  return true
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
/* .avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
} */

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>