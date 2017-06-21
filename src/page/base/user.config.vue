<template>
  <el-row>
    <el-col :span="24">
      <c-add :form="form" @resetData="resetData">
        <uForm :form="form"/>
      </c-add>
      <c-edit :form="form2">
        <uForm :form="form2"/>
      </c-edit>
      <c-table />
    </el-col>
  </el-row>
</template>

<script>
import cAdd from '@/components/data/Add';
import cEdit from '@/components/data/Edit';
import cTable from '@/components/data/Table';

import uForm from './user.config.form';

export default {
  name: 'userConfig',
  data() {
    return {
      addForm: {
        title: '新增',
      },
      form: {
        name: '',
      },
      form2: {
        name: '33',
      },
      numberValidateForm: {
        age: '',
      },
    };
  },
  methods: {
    resetData(data) {
      Object.assign(this.form, data);
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
  components: {
    cTable,
    cAdd,
    cEdit,
    uForm,
  },
};
</script>
