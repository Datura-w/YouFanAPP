<template>
     <!-- 使用路由返回上一级 -->
    <div class="login">
      <mt-header title="账号登录">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <div class="login_content">
         <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
          <el-form-item label="" prop="name">
          <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
            <el-input type="text" placeholder="手机号" v-model="ruleForm2.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="" prop="pass">
          <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
            <el-input type="password" placeholder="登录密码" v-model="ruleForm2.pass" @keyup.enter.native="submitForm('ruleForm2')"  auto-complete="off">
            </el-input>
           <!--  <p style="color:#2894FF; padding-left: 40px; font-size: 12px">测试账号：123/123123</p> -->
          </el-form-item>
          
          <div class="sub">
            <el-form-item>
              <mt-button type="primary" size="large" @click="submitForm('ruleForm2')">登录</mt-button>
            </el-form-item>
          </div>
               
        <div class="login_a">
          <div class="left"><p>快速注册</p></div>
          <div class="right"><p>忘记密码？</p></div>
        </div>
      </el-form> 
    </div>
    </div>
</template>

<script>

export default {
  name: '',
  data () {
    var validateName = (rule, value, callback) => {
          if (value !== '123') {
                callback(new Error('帐号不存在！'));
           }
          else {
            if (this.ruleForm2.pass !== '') {
              this.$refs.ruleForm2.validateField('pass');
            }
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value !== '123123') {
            callback(new Error('密码错误!'));
          } else {
            callback();
          }
        };
        const validatePass1 = (rule, value, callback) => {
            if (value.length < 6) {
              callback(new Error('密码不能小于6位'));
            } else {
              callback();
            }
          };
    return {
       ruleForm2: {
            name: '',
            pass: ''
          },
          rules2: {
            name: [
              { validator: validateName, trigger: 'blur' }
            ],
            pass: [
              { required: true, trigger: 'blur', validator: validatePass1 },
              { validator: validatePass, trigger: 'blur' }
            ]
          }
    }
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/seek');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login header{
  height: 46px;
  color: #333;
  background-color: #eef1f6;
}
.login_content .el-form{
  margin: 20px 16px;
}
.el-form-item__content{
  margin-left: 0 !important;
}
.el-form-item__label {
 /* width: 100%;
  text-align: center;
  font-size: 15px;*/
}
.el-input {
  width: 93% !important;
}
/*取消element自带文本框样式*/
.el-input__inner {
  border: 0;
  border-bottom: 1px solid #eef1f6;
  color:#A6ACAF;
  border-radius:0;
  margin-left: 7px;
}
.el-input__inner:focus,.el-input__inner:hover{
  border-color: #eef1f6;
}
.login_content .fa-mobile,.login_content .fa-lock{
  color: #ccc;
/*设置绝对定位，使小图标脱离文本，改变小图标位置*/
  position: absolute;
  display: inline-block;
  top: 5px;
  left: 0;
 }
 .login_content .fa-lock{
  font-size: 22px;
 }
.login_content .mint-button--primary{
 background: #F1C40F;
 font-size: 15px;
}
.login_content .placeholder{
  color:#A6ACAF; 
}
.login_a p{
  color:#A6ACAF;
  font-size: 13px;
  margin-top: 0;
}
.login_a .left{
  float: left;
}
.login_a .right{
  float: right;
}
</style>
