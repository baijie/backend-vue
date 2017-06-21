<template>
  <span>
    <el-button @click="dialogFormVisible = true">新增</el-button>

    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <c-form :form="form">
        <slot></slot>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
  computed: {
    resform() {
      return Object.assign({}, this.form);
    },
  },
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
      console.log('Add:', this.form, this.resform);
    },
  },
};
</script>
