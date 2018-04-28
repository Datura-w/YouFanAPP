<template>
  <div class="lo_mine">
    <div id="a_s1">  
         <mt-header fixed>  
            <router-link to="/myself1" slot="left">  
               <mt-button icon="back" @click="handleClose">返回</mt-button>  
            </router-link>  
            <mt-button icon="more" slot="right" @click="more"></mt-button>  
         </mt-header>           
    </div>

    <div class="change-btn">
      <mt-button size="normal" @click="goLo">登录</mt-button><br />
      <mt-button size="normal" @click="goRe">注册</mt-button>

    </div>
  <!-- 灰色分割线 -->
  <hr height="10px" width="20%" color=#eef1f6 SIZE=2>
    <p>其他方式登录</p>
    <div class="other">
      <ul>
        <li><img src="./../../assets/qq.jpg"><p>QQ登录</p></li>
        <li><img src="./../../assets/phone.jpg"><p>免密登录</p></li>
        <li><img src="./../../assets/hao.jpg"><p>账号登录</p></li>
      </ul>
    </div>

  </div>
</template>

<script>
//全局引入Toast
import { Toast } from 'mint-ui';

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods:{
    goLo:function(){
      this.$router.push({ path: '/login'})
    },
    goRe:function(){
      this.$router.push({ path: '/seek'})
    },
    handleClose: function(){  
        console.log("返回")  
    },  
    more: function(){  
        console.log("更多")  
    }
  }
 
}
</script>
<style scoped>
.mint-header{
  width: 100%;
  background-color: #eaeaea;
  color: #000;
  font-size: 15px;
  height: 50px;
}
.lo_mine p{
  margin: 0px;
  padding-top: 6px;
}
.change-btn{
  padding-top: 50%;
  padding-bottom: 13%;
}
.change-btn .mint-button--normal{
  margin-bottom: 60px;
  width: 50%;
}
.lo_mine p{  
  font-size: 14px;
}
.other{
  height: 140px;
  overflow: hidden;
  margin-top: 7%;
}
.other ul{
  list-style: none;
}
.other ul>li{
  width: 30%;
  float: left;
}
.other ul>li img{
  width: 50%;
}

</style>
