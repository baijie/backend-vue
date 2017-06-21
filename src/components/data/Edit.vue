<template>
  <span>
    <el-button @click="dialogFormVisible = true">修改</el-button>

    <el-dialog title="修改" :visible.sync="dialogFormVisible">
      <c-form :form="form">
        <slot></slot>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </c-form>
    </el-dialog>
  </span>
</template>

<script>
import cForm from '@/components/form/Form';

export default {
  props: ['form'],
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  components: {
    cForm,
  },
  methods: {
    onSubmit() {
      console.log('Edit:', this.form);
    },
  },
};
</script>
