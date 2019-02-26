<template>
  <div>
    <dart-slide :visible="slideVisible"
                :title="slideTitle"
                width="90%"
                :loading="slideLoading"
                :afterClose="handleClose">
      <template v-if="formData">
        <el-form :model="formData"
                 label-width="200px"
                 class="ruleForm">
          <el-form-item label="姓名">
            {{formData.name}}
          </el-form-item>
          <el-form-item label="地址">
            {{formData.address}}
          </el-form-item>
          <el-form-item label="日期">
            {{formData.date}}
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
export default {
    data() {
        return {
            slideVisible: true, //侧边栏显示状态
            slideLoading: true, //侧边栏loading状态
            slideTitle: '编辑', //侧边栏标题
            formData: null, //表单数据
            slideErrorShow: false //侧边栏错误显示状态
        };
    },
    methods: {
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
        /**
     * @function {设置侧边栏loading状态}
     * @param  {Boolean} type {状态}
     */
        setSlideLoading(type) {
            this.slideLoading = type;
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
