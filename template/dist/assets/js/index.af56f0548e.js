webpackJsonp([1],{"2PMc":function(e,t){},"32ug":function(e,t){},"7LCn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lRwf"),s=a.n(r),i=a("pRNm"),n=a.n(i),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dt-brdcrumbs"},[t("el-breadcrumb",{attrs:{separator:"/"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[this._v("首页")]),this._v(" "),t("el-breadcrumb-item",[t("a",{attrs:{href:"/"}},[this._v("活动管理")])]),this._v(" "),t("el-breadcrumb-item",[this._v("活动列表")]),this._v(" "),t("el-breadcrumb-item",[this._v("活动详情")])],1)],1)},staticRenderFns:[]},l=a("VU/8")(null,o,!1,null,null,null).exports,c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dt-search"},[a("el-form",{ref:"search",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formData,rules:e.rules,action:"javascript:;"}},[a("el-row",[a("el-col",{attrs:{span:20,xs:24}},[a("el-col",{attrs:{span:8,xs:24}},[a("el-form-item",{attrs:{label:"审批人",prop:"user"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formData.user,callback:function(t){e.$set(e.formData,"user",t)},expression:"formData.user"}})],1)],1),e._v(" "),a("el-col",{staticClass:"p16",attrs:{span:16,xs:24}},[a("el-form-item",{attrs:{label:"时间"}},[a("dart-date-range",{attrs:{type:"date","value-format":"timestamp",defaultTime:"['00:00:00','23:59:59']"},model:{value:e.formData.date,callback:function(t){e.$set(e.formData,"date",t)},expression:"formData.date"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8,xs:24}},[a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:e.formData.region,callback:function(t){e.$set(e.formData,"region",t)},expression:"formData.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1)],1),e._v(" "),a("el-col",{staticClass:"dart-well-operation",attrs:{span:4,xs:24}},[a("el-button",{attrs:{type:"primary",loading:e.searchLoading,"native-type":"submit",icon:"el-icon-search"},on:{click:e.handleSubmit}},[e._v("搜索")])],1)],1)],1)],1)},staticRenderFns:[]},d=a("VU/8")({data:function(){return{searchLoading:!1,options1:[{value:"选项1",label:"黄金糕1"},{value:"选项2",label:"双皮奶1"},{value:"选项3",label:"蚵仔煎1"},{value:"选项4",label:"龙须面1"},{value:"选项5",label:"北京烤鸭1"}],options:[{value:"选项1",label:"黄金糕1"},{value:"选项2",label:"双皮奶1"}],formData:{user:"",region:"",date:""},rules:{user:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]}}},methods:{setSearchLoading:function(e){this.searchLoading=e},handleSubmit:function(){var e=this;this.$refs.search.validate(function(t){t&&(e.setSearchLoading(!0),e.$emit("onSearch",e.formData))})}}},c,!1,null,null,null).exports,u=a("woOf"),m=a.n(u);function h(e){0===e.res.Code?s.a.prototype.$message({message:e.successMsg,type:"success"}):s.a.prototype.$message({message:e.isErrorSYS?e.res.Message:e.errorMsg,type:"error"})}var f="http://yapi.tcy365.org:3000/mock/350/api/add",p="http://yapi.tcy365.org:3000/mock/350/api/del",g="http://yapi.tcy365.org:3000/mock/350/api/edit",b="http://yapi.tcy365.org:3000/mock/350/api/search",v="http://yapi.tcy365.org:3000/mock/350/api/view",D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("p",[e._v("确定删除吗？")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{type:"text"},on:{click:e.handelCancle}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handelOk}},[e._v("确定")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-close",loading:e.currLoading},slot:"reference"},[e._v("删除")])],1)},staticRenderFns:[]},_=a("VU/8")({name:"",data:function(){return{visible:!1,currLoading:!1}},props:{loading:{}},methods:{handelCancle:function(){this.visible=!1},handelOk:function(){this.$emit("onOk"),this.setVisble(!1)},setVisble:function(e){this.visible=e}},watch:{loading:{immediate:!0,handler:function(e){this.currLoading=void 0!==e&&e}}}},D,!1,null,null,null).exports,y={data:function(){return{tableData:this.data}},props:{data:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},message:{type:String,default:"没有查询到符合条件的记录"},pageData:{type:Object,default:function(){return{currentPage:0,total:0,pageSize:0}}}},components:{ctTableDelButton:_},methods:{handleCurrentChange:function(e){this.$bus.$emit("refreshTable",e)},handleGoEdit:function(e,t){this.$router.push({path:"edit",query:{id:e}})},handleGoView:function(e,t){this.$router.push({path:"view",query:{id:e}})},setTableDelLoading:function(e,t){this.$set(this.tableData[e],"loading",t)},handleDelete:function(e){var t,a,r,i=this;this.setTableDelLoading(e,!0),t={data:{id:e},success:function(e){0===e.Code&&i.$bus.$emit("refreshTable")},complete:function(){i.setTableDelLoading(e,!1)}},a={url:p,success:function(){},error:function(e){}},r=m()({},a,t),s.a.$dart.http.ajax(r).then(function(e){h({res:e,successMsg:"删除成功",errorMsg:"删除失败",isErrorSYS:!1}),r.success(e)}).catch(function(e){r.error(e)})}},watch:{data:{immediate:!0,handler:function(e){this.tableData=e}}}},$={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":e.message,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"280px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.$dart.permission.is("edit")?a("el-button",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:function(a){return e.handleGoEdit(t.$index,t.row)}}},[e._v("编辑")]):e._e(),e._v(" "),a("el-button",{attrs:{icon:"el-icon-document",type:"success"},on:{click:function(a){return e.handleGoView(t.$index,t.row)}}},[e._v("查看")]),e._v(" "),e.$dart.permission.is("del")?a("ct-table-del-button",{staticStyle:{"margin-left":"10px"},attrs:{loading:t.row.loading},on:{onOk:function(a){return e.handleDelete(t.$index,t.row)}}}):e._e()]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.pageData.currentPage>=1,expression:"pageData.currentPage >= 1"}],staticClass:"dt-page"},[a("el-pagination",{attrs:{"current-page":e.pageData.currentPage,"page-size":e.pageData.pageSize,background:"",layout:"total, prev, pager, next, jumper",total:e.pageData.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-row",{staticClass:"dt-tool"},[this.$dart.permission.is("add")?t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:this.handleGoAdd}},[this._v("新增")]):this._e(),this._v(" "),t("el-button",{attrs:{type:"success",icon:"el-icon-upload"}},[this._v("导出")])],1)},staticRenderFns:[]},S={data:function(){return{searchData:{},tableData:[],tableLoading:!1,tableMessage:void 0,tablePageData:{}}},methods:{setPageIndex:function(e){e>0&&(this.searchData.pageIndex=e)},clearTableData:function(){this.tableData=[],this.tablePageData={}},setTableMessage:function(e){this.tableMessage=e||void 0},setTbaleloading:function(e){this.tableLoading=e},handleSearch:function(e){this.searchData=e,this.refreshTable(1)},refreshTable:function(e){var t,a,r,i=this;this.setPageIndex(e),this.setTbaleloading(!0),this.setTableMessage(),t={data:this.searchData,success:function(e){0===e.Code?(i.tableData=e.Data,i.tablePageData={currentPage:e.PageIndex,total:e.RecordCount,pageSize:e.PageSize}):(i.clearTableData(),i.setTableMessage(e.Message))},complete:function(){i.setTbaleloading(!1),i.$refs.search.setSearchLoading(!1)},error:function(e){i.clearTableData(),i.setTableMessage("网络错误，请重试")}},a={url:b,success:function(){},error:function(e){}},r=m()({},a,t),s.a.$dart.http.ajax(r).then(function(e){r.success(e)}).catch(function(e){r.error(e)})},bindHandle:function(){var e=this;this.$bus.$on("refreshTable",function(t){e.refreshTable(t)})},init:function(){this.bindHandle()}},components:{ctSearch:d,ctTable:a("VU/8")(y,$,!1,null,null,null).exports,ctBreadcrumb:l,ctTool:a("VU/8")({methods:{handleGoAdd:function(){this.$router.push({path:"add"})}}},x,!1,null,null,null).exports},created:function(){this.init()}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ct-breadcrumb"),e._v(" "),a("ct-search",{ref:"search",on:{onSearch:e.handleSearch}}),e._v(" "),a("ct-tool"),e._v(" "),a("ct-table",{attrs:{data:e.tableData,pageData:e.tablePageData,loading:e.tableLoading,message:e.tableMessage}}),e._v(" "),a("router-view")],1)},staticRenderFns:[]};var C=a("VU/8")(S,w,!1,function(e){a("K7zf")},null,null).exports,E=function(e){var t={url:v,success:function(){},error:function(e){}},a=m()({},t,e);return s.a.$dart.http.ajax(a).then(function(e){a.success(e)}).catch(function(e){a.error(e)})},L={data:function(){return{slideVisible:!0,slideLoading:!0,slideTitle:"编辑",formData:null,slideErrorShow:!1,rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],date:[{required:!0,message:"请输入活动时间",trigger:"blur"}],address:[{required:!0,message:"请选择活动区域",trigger:"blur"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){if(!t)return e.$message({message:"验证失败，请检查输入项",type:"error"}),!1;e.saveData()})},setSlideLoading:function(e){this.slideLoading=e},saveData:function(){var e,t,a,r=this;this.setSlideLoading(!0),e={data:this.ruleFrom,complete:function(){r.setSlideLoading(!1)},success:function(e){0===e.Code&&(r.$bus.$emit("refreshTable"),r.handleClose())}},t={url:g,success:function(){},error:function(e){}},a=m()({},t,e),s.a.$dart.http.ajax(a).then(function(e){h({res:e,successMsg:"保存成功",errorMsg:"保存失败",isErrorSYS:!1}),a.success(e)}).catch(function(e){a.error(e)})},handleClose:function(){this.$router.push({path:"/"})},showSlideError:function(){this.slideErrorShow=!0,this.formData=null},closeSlideError:function(){this.slideErrorShow=!1},init:function(){var e=this,t=this.$route.query.id;this.setSlideLoading(!0),this.closeSlideError(),E({data:{id:t},complete:function(){e.setSlideLoading(!1)},success:function(t){0===t.Code?e.formData=t.Data:e.showSlideError()},error:function(){e.showSlideError()}})},handleTry:function(){this.init()}},created:function(){this.init()}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("dart-slide",{attrs:{visible:e.slideVisible,title:e.slideTitle,width:"90%",loading:e.slideLoading,afterClose:e.handleClose}},[e.formData?[a("el-form",{ref:"editForm",staticClass:"ruleForm",attrs:{model:e.formData,rules:e.rules,"label-width":"200px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"日期",prop:"date"}},[a("el-date-picker",{attrs:{type:"date"},model:{value:e.formData.date,callback:function(t){e.$set(e.formData,"date",t)},expression:"formData.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)]:e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.slideErrorShow,expression:"slideErrorShow"}],staticClass:"dart-slide-errorbox"},[e._v("\n      网络错误 "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleTry}},[e._v("请重试")])],1)],2)],1)},staticRenderFns:[]};var k=a("VU/8")(L,T,!1,function(e){a("32ug")},"data-v-3f91e92a",null).exports,M={data:function(){return{slideVisible:!0,slideLoading:!0,slideTitle:"编辑",formData:null,slideErrorShow:!1}},methods:{handleClose:function(){this.$router.push({path:"/"})},showSlideError:function(){this.slideErrorShow=!0,this.formData=null},closeSlideError:function(){this.slideErrorShow=!1},setSlideLoading:function(e){this.slideLoading=e},init:function(){var e=this,t=this.$route.query.id;this.setSlideLoading(!0),this.closeSlideError(),E({data:{id:t},complete:function(){e.setSlideLoading(!1)},success:function(t){0===t.Code?e.formData=t.Data:e.showSlideError()},error:function(){e.showSlideError()}})},handleTry:function(){this.init()}},created:function(){this.init()}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("dart-slide",{attrs:{visible:e.slideVisible,title:e.slideTitle,width:"90%",loading:e.slideLoading,afterClose:e.handleClose}},[e.formData?[a("el-form",{staticClass:"ruleForm",attrs:{model:e.formData,"label-width":"200px"}},[a("el-form-item",{attrs:{label:"姓名"}},[e._v("\n          "+e._s(e.formData.name)+"\n        ")]),e._v(" "),a("el-form-item",{attrs:{label:"地址"}},[e._v("\n          "+e._s(e.formData.address)+"\n        ")]),e._v(" "),a("el-form-item",{attrs:{label:"日期"}},[e._v("\n          "+e._s(e.formData.date)+"\n        ")])],1)]:e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.slideErrorShow,expression:"slideErrorShow"}],staticClass:"dart-slide-errorbox"},[e._v("\n      网络错误 "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleTry}},[e._v("请重试")])],1)],2)],1)},staticRenderFns:[]};var P=a("VU/8")(M,V,!1,function(e){a("WjYu")},"data-v-53fbb30e",null).exports,F={data:function(){return{slideVisible:!0,slideLoading:!1,slideTitle:"新增",formData:{name:"",date:"",address:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],date:[{required:!0,message:"请输入活动时间",trigger:"blur"}],address:[{required:!0,message:"请选择活动区域",trigger:"blur"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{handleSubmit:function(){var e=this;this.$refs.editForm.validate(function(t){if(!t)return e.$message({message:"验证失败，请检查输入项",type:"error"}),!1;e.saveData()})},setSlideLoading:function(e){this.slideLoading=e},saveData:function(){var e,t,a,r=this;this.setSlideLoading(!0),e={data:this.formData,complete:function(){r.setSlideLoading(!1)},success:function(e){0===e.Code&&(r.$bus.$emit("refreshTable",1),r.handleClose())}},t={url:f,success:function(){},error:function(e){}},a=m()({},t,e),s.a.$dart.http.ajax(a).then(function(e){h({res:e,successMsg:"新增成功",errorMsg:"新增失败",isErrorSYS:!1}),a.success(e)}).catch(function(e){a.error(e)})},handleClose:function(){this.$router.push({path:"/"})}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("dart-slide",{attrs:{visible:e.slideVisible,title:e.slideTitle,width:"90%",loading:e.slideLoading,afterClose:e.handleClose}},[a("el-form",{ref:"editForm",staticClass:"ruleForm",attrs:{model:e.formData,rules:e.rules,"label-width":"200px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"日期",prop:"date"}},[a("el-date-picker",{attrs:{type:"date"},model:{value:e.formData.date,callback:function(t){e.$set(e.formData,"date",t)},expression:"formData.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]};var q=a("VU/8")(F,R,!1,function(e){a("2PMc")},"data-v-4d0988b0",null).exports;s.a.use(n.a);var j=[{path:"/",component:C,children:[{path:"edit",component:k},{path:"add",component:q},{path:"view",component:P}]}],N=new n.a({routes:j}),U=a("l6IN"),z=a.n(U),O={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view")],1)},staticRenderFns:[]},I=a("VU/8")(null,O,!1,null,null,null).exports,G=a("iahg"),Y=document.querySelector('meta[name="AppPublic"]');a.p=Y?Y.getAttribute("content"):"/";var A=new s.a;s.a.prototype.$bus=A,s.a.use(z.a,{size:"mini",zIndex:3e3}),s.a.use(G.DateRange),s.a.use(G.Slide),s.a.use(G.Http),s.a.use(G.Permission),G.Http.setDefaults({interceptError:function(e){return s.a.prototype.$message({message:"网络错误，请重试",type:"error"}),!0}}),G.Permission.setDefaults({alias:{add:1,del:2,edit:3},router:N});s.a.$dart.http.axios.get("http://yapi.tcy365.org:3000/mock/350/api/permission").then(function(e){0===e.data.Code?s.a.$dart.permission.success(e.data.Data):s.a.$dart.permission.fail()}).catch(function(e){s.a.$dart.permission.error()}).finally(function(){new s.a({el:"#app",router:N,render:function(e){return e(I)}})})},K7zf:function(e,t){},OMN4:function(e,t){e.exports=axios},WjYu:function(e,t){},l6IN:function(e,t){e.exports=ELEMENT},lRwf:function(e,t){e.exports=Vue},pRNm:function(e,t){e.exports=VueRouter}},["7LCn"]);