<template>
  <el-row class="dt-tool">
    <el-button type="primary"
               icon="el-icon-plus"
               v-if="$dart.permission.is('add')"
               @click="handleGoAdd">新增</el-button>
    <el-button type="success"
               icon="el-icon-upload">导出</el-button>
  </el-row>
</template>

<script>
export default {
    methods: {
        handleGoAdd() {
            this.$router.push({ path: 'add' });
        }
    }
};
</script>
