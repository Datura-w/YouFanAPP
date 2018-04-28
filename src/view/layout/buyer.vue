<template>
  <div class="customerInfo">
<!-- 客户管理 -->

<div id="a_s1">  
         <mt-header title="客户管理信息">  
            <router-link to="/mine" slot="left">  
               <mt-button icon="back" @click="handleClose">返回</mt-button>  
            </router-link>  
            <mt-button icon="more" slot="right" @click="more"></mt-button>  
         </mt-header>           
</div>

<div class="cum_search" style="margin-top: 3%;">
     <el-select v-model="value" placeholder="请选择客户类型">
       <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

  <div class="ads">
  <el-input v-model="input" placeholder="请输入编号" ></el-input>

  <span class="wrapper">
    <el-button type="button">查询</el-button>
  </span>
  </div>  
</div>

<!-- 新增按钮  -->
<div class="btn2">
    <div class="add_btn">
       <el-button type="primary" @click="handleCreate">新增</el-button>
         <el-dialog title="客户信息" :visible.sync="dialogFormVisible">             
              <el-form :model="form">
                <el-form-item label="类型" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择客户类型">
                  <el-option label="普通" value="主管"></el-option>
                  <el-option label="VIP" value="VIP"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="编号" :label-width="formLabelWidth">
                  <el-input v-model="form.id" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.title" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                  <el-input v-model="form.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="注册时间" :label-width="formLabelWidth">
                  <el-input v-model="form.time" auto-complete="off"></el-input>
                </el-form-item>               
              </el-form>
         <div slot="footer" class="dialog-footer">

        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateSubmit()">确 定</el-button> 
      </div>
    </el-dialog>
    <span class="wrapper">
      <el-button @click="handleDelete">删除</el-button>    
    </span>   
  </div>
  <div class="tab_btn">
      <el-button @click="toggleSelection()">取消全选</el-button>
      <el-button @click="toggleSelection([tableData3[0],tableData3[1],tableData3[2]])">全选</el-button>
    </div>
</div>
<!-- 客户信息表格 -->
 <div class="cum_table">
    <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="40">
    </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="50" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="title"
        label="姓名"
        width="70">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号码"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="注册时间"
        width="110">
      </el-table-column>
      
    </el-table>

    <div class="left_btn">
       <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled">
      </el-option>
  </el-select>
    </div>

    <div class="right_btn">
      <el-button>打印</el-button>
      <el-button>退出</el-button>
    </div> 
    </div>   


  </div>
</template>


<script>
  export default {
      data () {
          return {
           options: [{
          value: '选项1',
          label: '普通'
          }, {
          value: '选项2',
          label: 'VIP'
        }],
          value: '',
          input: '',
          checked: false,
           tableData3: [
           {
              type: 'VIP',
              id: '1',
              title: '李彩娇',
              phone: '13598742351',
              time: '2015-05-12'
                          
          },{
              type: '普通',
              id: '2',
              title: '苏绵婵',
              phone: '13598742351',
              time: '2015-05-12'         
          },{
              type: '普通',
              id: '3',
              title: '梨子',
              phone: '13598742351',
              time: '2015-05-12'             
          }],
          multipleSelection: [],
              options2: [{
              value: '选项1',
              label: '类型'
            }, {
              value: '选项2',
              label: '手机号码',
              disabled: true
            },{
              value: '选项3',
              label: '姓名'
            }],
            value2: '',
            dialogFormVisible: false,
            form: {             
              type: '',
              id: '',
              title: '',
              phone: '',
              time: '',
              delivery: false,            
            },
            formLabelWidth: '120px'          
          }
        },
         methods: {
             handleClose: function(){  
                console.log("返回") 
                // this.$router.push({ path: '/mine'}) 
            },  
            more: function(){  
                console.log("更多")  
            } ,
            toggleSelection(rows) {
              if (rows) {
                rows.forEach(row => {
                  this.$refs.multipleTable.toggleRowSelection(row);
                });
              } else {
                this.$refs.multipleTable.clearSelection();
              }
            },
            handleSelectionChange(val) {
              this.multipleSelection = val;
            },
            //重置新增表单
            initForm(){
              let vm = this;
              vm.form = {
                type: '',
                id: '',
                title: '',
                phone: '',
                time: '',
                delivery: false,        
              }
            },
            // 新增按钮
            handleCreate(){
            //每次新增时，重置新增表单数据，避免双向绑定影响
              this.initForm();
              this.dialogFormVisible = true;
            },
            // 新增功能
            handleCreateSubmit(){
              var vm = this ;
              console.log('新增的信息:',vm.form);
              vm.tableData3.push(vm.form);
              console.log('新增后的信息数据:',vm.tableData3);
              this.dialogFormVisible = false;
              // 提交后弹出成功提示语
              this.$message({
                showClose: true,
                message: '提交成功！',
                type: 'success'
              });
            },
            // 删除数据
            handleDelete(){
              var vm = this ;
              console.log("删除的row",vm.multipleSelection);
              // splice只能删除单条
              this.tableData3.splice(vm.multipleSelection,vm.multipleSelection.length);
              console.log("删除的条数",vm.multipleSelection.length);
              this.tableData3.splice(index,1);
              
            }
          }
       
   }
</script>

<style>
 * {
    padding: 0;
    margin: 0;
 }
 a {
    text-decoration: none;
 }
/*头部标题*/
.mint-header{
  width: 100%;
  height: 51px;
  background-color: #eaeaea;
  color: #000;
  font-size: 15px;
  margin-bottom: 2%;
}
  /*客户管理*/
.customerInfo{
  position: absolute;
  width: 100%;
}
.customerInfo .el-breadcrumb{
  height: 58px;
  line-height: 58px;
}
  /*查询*/
.cum_search{
  margin-top: 2%；
}
.customerInfo .wrapper button{
  background-color:#dfe6ec;
}
.customerInfo .ads
{
  display: inline;   
}
.customerInfo .ads .el-input{
  width: 22%; 
  margin-right: 26px 
}
/*打钩的正方形*/
.el-checkbox__inner {
  width: 15px;
  height: 15px;
}
/*表格里面的空间设置*/
.el-table .cell {
  padding:0;
}
/*表格标题栏*/
.el-table th>.cell {
  padding-left: 25%;
}
.customerInfo .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ccc; 
  border-color: #ccc;
}
.customerInfo .ads .el-button--success {
  background: #75bd5a;
  border: 1px solid #85ae74;
}
.customerInfo .el-select-dropdown__item.selected {
  background-color: #ccc;
}
.customerInfo .el-select-dropdown__list {
  padding:0; 
}
/*新增功能表单信息*/
.el-dialog--small {
    width: 100%;
}
.el-form-item__label {
  text-align: center;
}
.el-dialog__body {
  padding-top: 22px;
  padding-right: 18px;
  margin-bottom: -36px;
}
.dialog-footer .el-button--default{
  background:#dfe6ec;
}
 /*客户信息表格*/
.customerInfo .cum_table .el-button{
  background: #dfe6ec;
}
.btn2{
  width: 100%;
  overflow: hidden;
  margin-top: 6%;
}
.customerInfo .add_btn{
  margin-left: 2%;
  float: left;
  margin-bottom: 10px;
}
.customerInfo .tab_btn .el-button{
  background: #fff;
  float: right;
  margin-right: 1%;
}
.customerInfo .left_btn{
  float: left;
  margin-top: 10px;
  margin-left: 20px;
}
.customerInfo .right_btn{
  float: right;
  margin-top: 10px;
}
</style>