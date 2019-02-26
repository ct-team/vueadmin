<template>
  <div class="dt-search">
    <el-form :inline="true"
             :model="formData"
             :rules="rules"
             action="javascript:;"
             ref="search"
             class="demo-form-inline">
      <el-row>
        <el-col :span="20"
                :xs="24">

          <el-col :span="8"
                  :xs="24">
            <el-form-item label="审批人"
                          prop="user">
              <el-input v-model="formData.user"
                        placeholder="审批人"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="16"
                  class="p16"
                  :xs="24">
            <el-form-item label="时间">
              <dart-date-range v-model="formData.date"
                               type="date"
                               value-format='timestamp'
                               defaultTime="['00:00:00','23:59:59']"></dart-date-range>
            </el-form-item>
          </el-col>
          <el-col :span="8"
                  :xs="24">
            <el-form-item label="活动区域">
              <el-select v-model="formData.region"
                         placeholder="活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :span="4"
                :xs="24"
                class="dart-well-operation">
          <el-button type="primary"
                     :loading="searchLoading"
                     native-type="submit"
                     icon="el-icon-search"
                     @click="handleSubmit">搜索</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchLoading: false, //搜索按钮loading状态
            options1: [
                {
                    value: '选项1',
                    label: '黄金糕1'
                },
                {
                    value: '选项2',
                    label: '双皮奶1'
                },
                {
                    value: '选项3',
                    label: '蚵仔煎1'
                },
                {
                    value: '选项4',
                    label: '龙须面1'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭1'
                }
            ],
            options: [
                {
                    value: '选项1',
                    label: '黄金糕1'
                },
                {
                    value: '选项2',
                    label: '双皮奶1'
                }
            ],
            formData: {
                //搜索表单数据
                user: '',
                region: '',
                date: ''
            },
            rules: {
                //验证规则
                user: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
    /**
     * @function {设置搜索按钮loading状态}
     * @param  {boolean} type {loading状态}
     */
        setSearchLoading(type) {
            this.searchLoading = type;
        },
        handleSubmit() {
            this.$refs.search.validate(valid => {
                if (valid) {
                    this.setSearchLoading(true);
                    this.$emit('onSearch', this.formData);
                }
            });
        }
    }
};
</script>
