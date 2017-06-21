<template>
  <el-row>
    <!-- 头部 -->
    <el-row>
      <el-col :span="24">
        <NavMenu />
      </el-col>
    </el-row>
    <!-- 主区域 -->
    <el-row>
      <!-- 左侧菜单 -->
      <el-col :span="4">
        <SideMenu />
      </el-col>
      <!-- 中间区域 -->
      <el-col :span="20">
        <!-- 导航 -->
        <el-col :span="24">
          <Breadcrumb />
        </el-col>
        <!-- 主要显示区域 -->
        <el-col :span="24">
          <router-view></router-view>
        </el-col>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import NavMenu from '@/components/navigation/NavMenu';
import SideMenu from '@/components/navigation/SideMenu';
import Breadcrumb from '@/components/navigation/Breadcrumb';

export default {
  data() {
    return {};
  },
  components: {
    NavMenu,
    SideMenu,
    Breadcrumb,
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
</style>

<style scoped>
.bg{
  background-color: pink;
}
.bg-black{
  background-color: yellow;
}
.layout-header{
  background-color: #3498db;
  min-height: 36px;
  border-radius: 4px;
}
.fhight{
  height: 100%;
}

.nav-header{
  background-color: #3498db;
}
</style>
