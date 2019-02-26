<template>
  <div>
    <dart-slide :visible="slideVisible"
                :title="slideTitle"
                width="90%"
                :loading="slideLoading"
                :afterClose="handleClose">
      <template v-if="formData">
        <el-form :model="formData"
                 :rules="rules"
                 ref="editForm"
                 label-width="200px"
                 class="ruleForm">
          <el-form-item label="姓名"
                        prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="日期"
                        prop="date">
            <el-date-picker v-model="formData.date"
                            type="date">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="地址"
                        prop="address">
            <el-input type="textarea"
                      v-model="formData.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="handleSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </template>
      <div class="dart-slide-errorbox"
           v-show="slideErrorShow">
        网络错误 <el-button type="primary"
                   @click="handleTry">请重试</el-button>
      </div>
    </dart-slide>

  </div>
</template>
<script>
import apiView from '@/api/view';
import apiEdit from '@/api/edit';
export default {
    data() {
        return {
            slideVisible: true, //侧边栏显示状态
            slideLoading: true, //侧边栏loading状态
            slideTitle: '编辑', //侧边栏标题
            formData: null, //表单数据
            slideErrorShow: false, //侧边栏错误显示状态
            rules: {
                //验证规则
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                date: [{ required: true, message: '请输入活动时间', trigger: 'blur' }],
                address: [
                    { required: true, message: '请选择活动区域', trigger: 'blur' }
                ],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleSubmit() {
            this.$refs.editForm.validate(valid => {
                if (valid) {
                    this.saveData();
                } else {
                    this.$message({
                        message: '验证失败，请检查输入项',
                        type: 'error'
                    });
                    return false;
                }
            });
        },
        /**
     * @function {设置侧边栏loading状态}
     * @param  {Boolean} type {状态}
     */
        setSlideLoading(type) {
            this.slideLoading = type;
        },
        saveData() {
            this.setSlideLoading(true);
            apiEdit({
                data: this.ruleFrom,
                complete: () => {
                    this.setSlideLoading(false);
                },
                success: res => {
                    if (res.Code === 0) {
                        this.$bus.$emit('refreshTable');
                        this.handleClose();
                    }
                }
            });
        },
        handleClose() {
            this.$router.push({ path: '/' });
        },
        showSlideError() {
            this.slideErrorShow = true;
            this.formData = null;
        },
        closeSlideError() {
            this.slideErrorShow = false;
        },
        init() {
            var id = this.$route.query.id;

            this.setSlideLoading(true);
            this.closeSlideError();
            apiView({
                data: { id: id },
                complete: () => {
                    this.setSlideLoading(false);
                },
                success: res => {
                    if (res.Code === 0) {
                        this.formData = res.Data;
                    } else {
                        this.showSlideError();
                    }
                },
                error: () => {
                    this.showSlideError();
                }
            });
        },
        handleTry() {
            this.init();
        }
    },
    created() {
        this.init();
    }
};
</script>
<style scoped>
.ruleForm {
  padding-right: 100px;
}
.line {
  text-align: center;
}
.dart-slide-errorbox {
  text-align: center;
  margin-top: 10%;
}
</style>
