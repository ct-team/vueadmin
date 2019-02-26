<template>
  <div>
    <ct-breadcrumb></ct-breadcrumb>
    <ct-search ref="search"
               @onSearch="handleSearch"></ct-search>
    <ct-tool></ct-tool>
    <ct-table :data="tableData"
              :pageData="tablePageData"
              :loading="tableLoading"
              :message="tableMessage"></ct-table>
    <router-view></router-view>
  </div>
</template>

<script>
import ctBreadcrumb from './breadcrumb';
import ctSearch from './search';
import ctTable from './table';
import ctTool from './tool';
import apiSearch from '@/api/search';
export default {
    data() {
        return {
            searchData: {}, //当前保存的搜索数据
            tableData: [], //列表数据
            tableLoading: false, //列表loading状态
            tableMessage: undefined, //列表为空时显示内容
            tablePageData: {}//列表分页数据
        };
    },
    methods: {
    /**
     * @function {设置搜索数据分页码}
     * @param  {int,undefined} index {页码}
     */
        setPageIndex(index) {
            //页码为空不赋值
            if (index > 0) {
                this.searchData.pageIndex = index;
            }
        },
        /**
         * @function {清除列表数据}
         */
        clearTableData() {
            this.tableData = [];
            this.tablePageData = {};
        },
        /**
         * @function {设置列表为空时内容}
         * @param  {type} msg {description}
         */
        setTableMessage(msg) {
            this.tableMessage = msg || undefined;
        },
        /**
         * @function {设置列表loading状态}
         * @param  {boolean} type {loading状态}
         */
        setTbaleloading(type) {
            this.tableLoading = type;
        },
        /**
         * @function {搜索按钮触发}
         * @param  {object} data {搜索内容}
         */
        handleSearch(data) {
            this.searchData = data;
            this.refreshTable(1);
        },
        /**
         * @function {列表内容刷新}
         * @param  {int,undefined} index {页码}
         */
        refreshTable(index) {
            this.setPageIndex(index);
            this.setTbaleloading(true);
            this.setTableMessage();

            apiSearch({
                data: this.searchData,
                success: res => {
                    if (res.Code === 0) {
                        this.tableData = res.Data;
                        this.tablePageData = {
                            currentPage: res.PageIndex,
                            total: res.RecordCount,
                            pageSize: res.PageSize
                        };
                    } else {
                        this.clearTableData();
                        this.setTableMessage(res.Message);
                    }
                },
                complete: () => {
                    this.setTbaleloading(false);
                    //清除search搜索loading状态
                    this.$refs.search.setSearchLoading(false);
                },
                error: e => {
                    this.clearTableData();
                    this.setTableMessage('网络错误，请重试');
                }
            });
        },
        /**
         * @function {公共事件BUS绑定}
         */
        bindHandle() {
            //列表刷新绑定
            this.$bus.$on('refreshTable', index => {
                this.refreshTable(index);
            });
        },
        init() {
            this.bindHandle();
        }
    },
    components: {
        ctSearch,
        ctTable,
        ctBreadcrumb,
        ctTool
    },
    created() {
        this.init();
    }
};
</script>
<style lang="scss">
@import "../../assets/css/dt.scss";
</style>
