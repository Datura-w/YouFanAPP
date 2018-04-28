<template>
    <div class="a_head">
       <div id="a_s1">  
         <mt-header title="填写信息">  
            <router-link to="/lo_mine" slot="left">  
               <mt-button icon="back" @click="handleClose">返回</mt-button>  
            </router-link>   
         </mt-header>           
       </div>
    <div class="a_new">
      <mt-field label="用户名" placeholder="填写姓名" v-model="username"></mt-field>    
      <mt-field label="密码" placeholder="填写密码" type="password" v-modal="password"></mt-field>
       <mt-field label="邮箱" placeholder="填写邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="手机号码" placeholder="填写手机号码" type="tel" v-model="phone"></mt-field>
      <mt-field label="性别" placeholder="填写男/女" type="sex" v-model="sex"></mt-field>
      <mt-field label="所在地" placeholder="填写所在地" type="city" v-model="city"></mt-field>
      <mt-field label="生日" placeholder="填写年-月-日" type="date" v-model="birthday"></mt-field>
      <mt-field label="个性签名" placeholder="填写个性签名内容" type="textarea" rows="4" v-model="introduction"></mt-field>

      <mt-field label="验证码" placeholder="填写验证码" v-model="captcha">
       <img src="./../../assets/yanzhengma1.jpg" height="45px" width="100px">
      </mt-field>
    </div> 
    <div class="btn_re">
      <el-button :plain="true" @click="open">确定</el-button>
    </div>
</div>

</template>


<script>
export default {
  name: 'a_s1',
  data () {
    return {
    	
    }
  },
  methods: {
    handleClose: function(){  
        console.log("返回")  
    },  
    more: function(){  
        console.log("更多")  
    },
    open() {
       this.$message({
       message: '填写信息成功！',
       type: 'success'
        });
    }
  }
}
</script>  

<style>
.a_head .mint-header{
  width: 100%;
  background-color: #eaeaea;
  color: #000;
  font-size: 15px;
  height: 51px;
}
/*设置按钮*/
.btn_re .el-button{
  background-color:#eaeaea;
  color: #333;
  margin-top: 3%;
  width: 86%;
}
.el-button--primary.is-active, .el-button--primary:active{
  background-color:#eaeaea;
  color: #333;
  border-color: #fff;
}
.el-button.is-plain:focus{
    background-color:#eaeaea;
    color: #333;
    border-color: #fff
}
.el-button.is-plain:hover {
    background-color:#eaeaea;
    color: #333;
    border-color: #fff
}
</style>