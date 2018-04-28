<template>
  <div class="youfan">
    <p>HMABC新品特惠</p>
    <div class="change-btn">
      <mt-button size="normal">男生 MEN</mt-button><br />
      <mt-button size="normal" @click="gohome">女生 WOMEN<!-- <router-link to="./login"></router-link> --></mt-button>

    </div>
    <span>满400减100元</span>
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
    gohome:function(){
      this.$router.push({ path: '/home'})
    }
  }
 
}
</script>
<style scoped>
.youfan{
  background: url("./../../assets/home.jpg") no-repeat;
  background-size: 100% 100%;
  height: 739px;
}
.youfan p{
  margin: 0px;
  padding-top: 6px;
}
.change-btn{
  padding-top: 50%;
  padding-bottom: 34%;
}
.change-btn .mint-button--normal{
  margin-bottom: 60px;
}
.youfan span{  
  font-size: 28px;
}
</style>
