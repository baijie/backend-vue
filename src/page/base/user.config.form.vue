<template>
  <el-form-item
    label="活动名称"
    prop="name"
  >
    <el-input v-model="form.name"></el-input>
  </el-form-item>
</template>

<script>
export default {
  props: ['form'],
};
</script>
