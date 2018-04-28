<template>
  <div class="customerOrder">
  <div class="cum_header">
    <div id="a_s1">  
         <mt-header title="员工管理信息">  
            <router-link to="/home1" slot="left">  
               <mt-button icon="back" @click="handleClose">返回</mt-button>  
            </router-link>  
            <mt-button icon="more" slot="right" @click="more"></mt-button>  
         </mt-header>           
    </div>
   <div class="cum_search" style="margin-top: 3%;">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.cum" placeholder="请输入要查询的编号" style="width:314px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </el-form-item>
      </el-form>
  </div>
  </div>
<!-- 订单表格 -->
  <el-table ref="multipleTable":data="tableData3" border tooltip-effect="dark" 
   style="width: 100%;margin-bottom: 19px;" @selection-change="">
    <el-table-column type="selection" width="20"></el-table-column>
    <el-table-column prop="id" label="编号" width="40"></el-table-column>
    <el-table-column prop="name" label="姓名"width="60"></el-table-column>
    <el-table-column prop="phone" label="电话" width="100"></el-table-column>   
    <el-table-column prop="date"  label="入职时间"  width="90">
  <!-- 添加这句让时间显示 -->
      <template scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column label="操作">
    <template scope="scope">
        <el-button size="small"@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="small" style="background:#dfe6ec;"
          @click.native.prevent="handdeleteRow(scope.$index, tableData3)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <div class="de_btn">
  <div class="cre_btn">
  <el-button style="background:#dfe6ec;" @click="handleCreate">添加</el-button>
<!-- 添加员工信息功能 -->
    <el-dialog title="填写员工信息" :visible.sync="dialogeditFormVisible"> 
              <el-form :model="form">
                <el-form-item label="编号" :label-width="formLabelWidth">
                  <el-input v-model="form.id" auto-complete="off"></el-input>
                </el-form-item>           
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                  <el-input v-model="form.phone" auto-complete="off"></el-input>
                </el-form-item>               
                <el-form-item label="入职时间" :label-width="formLabelWidth">
                <el-date-picker v-model="form.date" type="date" placeholder="选择日期"  @change="dateChange" :picker-options="pickerOptions0">
                  </el-date-picker>
                </el-form-item>
              </el-form>
        <div slot="footer" class="dialog-footer">
           <el-button @click="dialogFormVisible = false">取 消</el-button>
           <el-button type="primary" @click="handleCreateOrder">确 定</el-button> 
      </div>
  </el-dialog>
  </div>
  <div class="tab_btn">
      <span class="wrapper">
      <el-button @click="toggleSelection([tableData3[0],tableData3[1],tableData3[2],tableData3[3],tableData3[4]])">全选</el-button>
       <el-button @click="toggleSelection()">取消全选</el-button>
      <el-button @click="handleDelete">批量删除</el-button>    
      </span>    
  </div>
  </div>

<!-- 编辑功能 -->
  <el-dialog title="填写员工信息" :visible.sync="dialogFormVisible"> 
              <el-form :model="form">
                <el-form-item label="编号" :label-width="formLabelWidth">
                  <el-input v-model="editForm.id" auto-complete="off"></el-input>
                </el-form-item>           
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                  <el-input v-model="editForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="创建日期" :label-width="formLabelWidth">
                  <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期"  @change="dateChange" :picker-options="pickerOptions0">
                  <template scope="scope">{{ scope.row.date }}</template>
                  </el-date-picker>
                </el-form-item>
              </el-form>
        <div slot="footer" class="dialog-footer">
           <el-button @click="dialogFormVisible = false">取 消</el-button>
           <el-button type="primary" @click="handledoneEdit">确 定</el-button> 
      </div>
  </el-dialog>
  </div>
</template>

<script>
  import {api} from '@/global/api'
  export default {
      data () {
          return {
            input: '',
            tableData3: [],
            multipleSelection: [],
            formInline:{
              cum: ''
            },
     
       dialogFormVisible: false,
       dialogeditFormVisible: false,
       form: {  
              id:'',           
              name: '',
              phone:'',
              date: '',
              operate:'' ,
              delivery: false,           
            },
        editForm: {  
              id:'',           
              name: '',
              phone:'',
              date: '',
              operate:'' ,
              delivery: false,           
            },
            formLabelWidth: '140px' ,
            pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
              }
            }
          }        
    }, 
        mounted(){
          var vm = this ;
          vm.getList();
        },
        methods: {
          handleClose: function(){  
                console.log("返回")  
            },  
                more: function(){  
             console.log("更多")  
            } ,
          //通过json导入数据
          getList:function(){
            var vm = this ;
            this.$http.get(api.customerOrder).then(function(response){
              console.log(response)
              vm.tableData3 = response.data.tableData3;
              console.log(vm.tableData3)
            })
          },
          
          //通过编号查询
          handleSearch(){
            var vm = this ;
            for(var i = 0;i < vm.tableData3.length+1;i++){//二次筛选
               for(var item of vm.tableData3){//一次筛选
                  if(vm.formInline.cum != item.id){
                    var index = vm.tableData3.indexOf(item);
                    console.log(index)
                    vm.tableData3.splice(index,1);//把index和id不相等的记录删除，删位置index
                  }
                }
            }
          },
           // 删除单条
          handdeleteRow(index, rows) {
            rows.splice(index, 1);
          },
          //重置添加（新增员工信息）表单
          initForm(){
            let vm = this;
            vm.form = {
              id:'',           
              name: '',
              phone:'',             
              date: '',
              operate:'' ,
              delivery: false,        
            }
          },
          // 添加（新增员工信息）按钮
          handleCreate(){
          //每次新增时，重置新增表单数据，避免双向绑定影响
            this.initForm();
            this.dialogeditFormVisible = true;
          },
          //添加（新增员工信息）功能
          handleCreateOrder(){
            var vm = this ;
            console.log('新增的信息:',vm.form);
            vm.tableData3.push(vm.form);
            console.log('新增后的信息数据:',vm.tableData3);
            this.dialogeditFormVisible = false;
            // 提交后弹出成功提示语
          },
          // 编辑功能
          handleEdit(index, row) {
            this.dialogFormVisible = true;
            this.editForm = row;  //表示赋值、引用（浅拷贝）指向同一内存地址
            this.editIndex = index;
          },
          //编辑中的提交
          handledoneEdit(){
             console.log(this.editIndex);
             console.log(this.editForm);
             var vm = this ;
             vm.tableData3[this.editIndex] = this.editForm;
             this.dialogFormVisible = false ;//设置false为不可见
             // 提交后弹出成功提示语
            this.$message({
              showClose: true,
              message: '提交成功！',
              type: 'success'
            });
          },

          // 全选删除数据
            handleDelete(){
          // 未实现批量删除
            },
          // 全选功能
           toggleSelection(rows) {
              if (rows) {
                rows.forEach(row => {
                  this.$refs.multipleTable.toggleRowSelection(row);
                });
              } else {
                this.$refs.multipleTable.clearSelection();
              }
            },
          //转换时间格式方法
          dateChange(val) {
            // 在编辑页面里面，一点击就要转换时间格式（因为转换方法写在编辑页面）
            this.editForm.date=val;
            // 这个是添加页面里面的
            this.form.date=val;
          }
        }
  }
</script>

<style>
/*头部标题*/
.mint-header{
  width: 100%;
  background-color: #eaeaea;
  color: #000;
  font-size: 15px;
  margin-bottom: 2%;
}
 /*查询*/
.cum_search{
  margin-top: 2%；
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
/*删除按钮*/
.customerOrder .wrapper button{
  background-color:#dfe6ec;
}
.de_btn{
  width: 100%;
  overflow: hidden;
}
.cre_btn{
  float: left;
  padding-left: 2%;
}
.tab_btn{
  float: right;
}
/*添加表单信息*/
.el-dialog--small {
    width: 100%;
}
.el-form-item__label{
  text-align: center;
}
.el-form-item{
  margin-bottom: 13px;
}
.el-dialog__body {
  padding-top: 22px;
  padding-right: 18px;
  margin-bottom: -36px;
}
.customerOrder .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ccc; 
  border-color: #ccc;
}
.customerOrder{
  position: absolute;
  width: 100%;
}
.customerOrder .Csearch{
  display: inline-block;
  margin-left: 674px;
}
.customerOrder .Csearch.el-input,.customerOrder .Csearch .el-input__inner {
  width: 258px;
}
.customerOrder .el-date-editor.el-input {
  width: 233px;
}
</style>