 <template>
  <div>
    <el-table v-loading="loading"
              :data="tableData"
              :empty-text="message"
              border
              style="width: 100%">
      <el-table-column prop="date"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
      <el-table-column label="操作"
                       width="280px">
        <template slot-scope="scope">
          <el-button icon="el-icon-edit"
                     type="primary"
                     v-if="$dart.permission.is('edit')"
                     @click="handleGoEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button icon="el-icon-document"
                     type="success"
                     @click="handleGoView(scope.$index, scope.row)">查看</el-button>
          <ct-table-del-button style="margin-left:10px"
                      v-if="$dart.permission.is('del')"
                      :loading="scope.row.loading"
                      @onOk="handleDelete(scope.$index, scope.row)"></ct-table-del-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="dt-page"
         v-show="pageData.currentPage >= 1">
      <el-pagination @current-change="handleCurrentChange"
                     :current-page="pageData.currentPage"
                     :page-size="pageData.pageSize"
                     background
                     layout="total, prev, pager, next, jumper"
                     :total="pageData.total">
      </el-pagination>
    </div>

  </div>

</template>

<script>
import apiDel from '@/api/del';
import ctTableDelButton from './table-del-button';
export default {
    data() {
        return {
            tableData: this.data
        };
    },
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        loading: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: '没有查询到符合条件的记录'
        },
        pageData: {
            type: Object,
            default() {
                return {
                    currentPage: 0,
                    total: 0,
                    pageSize: 0
                };
            }
        }
    },
    components: {
        ctTableDelButton
    },
    methods: {
        /**
         * @function {分页点击处理事件}
         * @param  {int} index {页码}
         */
        handleCurrentChange(index) {
            this.$bus.$emit('refreshTable', index);
        },
        handleGoEdit(index, row) {
            this.$router.push({
                path: 'edit',
                query: {
                    id: index
                }
            });
        },
        handleGoView(index, row) {
            this.$router.push({
                path: 'view',
                query: {
                    id: index
                }
            });
        },
        /**
         * @function {设置列表删除按钮loading状态}
         * @param  {int} index {列表数据下标}
         * @param  {boolean} value {loading状态}
         */
        setTableDelLoading(index, value) {
            this.$set(this.tableData[index], 'loading', value);
        },
        /**
         * @function {列表删除}
         * @param  {int} index {列表数据下标}
         */
        handleDelete(index) {
            this.setTableDelLoading(index, true);
            apiDel({
                data: { id: index },
                success: res => {
                    if (res.Code === 0) {
                        this.$bus.$emit('refreshTable');
                    }
                },
                complete: () => {
                    this.setTableDelLoading(index, false);
                }
            });
        }
    },
    watch: {
        data: {
            immediate: true,
            handler(v) {
                this.tableData = v;
            }
        }
    }
};
</script>
