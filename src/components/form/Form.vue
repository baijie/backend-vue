<template>
  <el-form ref="form" :model="form" label-width="80px">
    <slot></slot>
    <el-button @click="resetForm">重置</el-button>
  </el-form>
</template>

<script>

export default {
  props: ['form'],
  data() {
    return {};
  },
  methods: {
    resetForm() {
      console.log(this.form);
      this.$refs.form.resetFields();
    },
  },
};
</script>
