<template>
  <div>
    <el-drawer
      size="40%"
      v-model="drawer"
      :direction="direction"
      append-to-body
      destroy-on-close
      @close="cancelClick"
    >
      <template #title>
        <h4>请选择图标</h4>
      </template>
      <template #default>
        <div>
          <el-radio-group v-model="radio" class="box-card" @change="onRadioChange">
            <el-card class="card" v-for="(item ,index) in list" :key="index">
              <div class="item">
                <el-radio :label="item.ID" />
                <div class="title">{{item.iconName||"-"}}</div>
                <div class="imgbox">
                  <img class="icon" :src="item.appIcon" />
                </div>
              </div>
            </el-card>
          </el-radio-group>
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">退出</el-button>
          <el-button type="primary" @click="confirmClick">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { watch, defineEmits, defineProps, ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import {
  getOpMdmIconsList
} from '@/api/opMdmIcons'

import {
  createMdmIconPackage,
  findOpMdmIconPackage
} from '@/api/opMdmIconPackage'

const drawer = ref(false)
const ID = ref(null)
const IconBase = ref()
const direction = ref('rtl')

const props = defineProps({
  drawerShow: {
    type: Boolean,
    default: false
  },
  PackageId: {
    type: Number,
  }
})
const radio = ref(null)
const emit = defineEmits(['onClose'])
const list = ref([])
watch(() => props.drawerShow, () => {
  drawer.value = props.drawerShow
  if (drawer.value) {
    getTableData()
  }

})

watch(() => props.PackageId, () => {
  getOpMdmIconPackage()
})

const getDrawer = computed(() => props.drawer)

const getPackageId = computed(() => props.PackageId)

const getRadio = computed(() => radio.value)


const getIconBase = (row) => {
  console.log("row=", row);
  list.value.forEach(element => {
    if (element.ID == row) {
      IconBase.value = element.appIcon;
      console.log("IconBase.value=", IconBase.value);
    }
  });
}

const onRadioChange = (row) => {
  console.log("reeee=", row)
  console.log("list=", list.value)
  getIconBase(row);
}

// console.log("PackageId==", getPackageId)

// onMounted(() => {
// //   console.log("12121", props)
//   drawer.value = props.drawerShow
//   ID.value = props.packageId
//   getTableData()
//   getOpMdmIconPackage()
// })

const cancelClick = () => {
  drawer.value = false
  ID.value = null
  list.value = null
  emit("onClose", false)
}

const confirmClick = () => {
  if (radio.value) {
    enterDialog()
  } else {
    ElMessage({
      type: 'error',
      message: '请选择图标'
    })
  }
}

const getTableData = async () => {
  const table = await getOpMdmIconsList({})
  if (table.code === 0) {
    list.value = table.data.list
  }
}

const getOpMdmIconPackage = async () => {
  getIconBase(getPackageId.value)
  console.log("ID.value==", getPackageId.value)
  const res = await findOpMdmIconPackage({ PackageId: getPackageId.value })
  if (res.code === 0) {
    radio.value = res.data.IconId
    // console.log("radio==", res)

  }
}

const enterDialog = async () => {
  let res = await createMdmIconPackage({ IconId: getRadio.value, PackageId: getPackageId.value, IconBase: IconBase.value })
  if (res.code === 0) {
    ElMessage({
      type: 'success',
      message: '创建/更改成功'
    })
    ID.value = null
    list.value = null
    drawer.value = false
    emit("onClose", false)
  }
}


</script>

<style  lang="scss" scoped>
.card {
  margin: 10px;
  width: 100%;
}
.item {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  .title {
    height: 100px;
    line-height: 100px;
    font-size: 15px;
    justify-content: center;
    text-align: center;
    min-width: 160px;
    width: 30%;
  }
  .imgbox {
    flex: 1;
    width: 100%;
    display: flex;
    width: 50%;
    .icon {
      padding: 10px;
      max-height: 100px;
      width: 100%;
    }
  }
}

.box-card {
  width: 100%;
  margin: 10px;
}
</style>