<template>
  <div class="my">
    <mt-header fixed title="我的">
   <!--  <router-link to="/" slot="left">
      <mt-button icon="back">back</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button> -->
  </mt-header>
  <div class="my_a"><img src="./../../assets/my_a.jpg"></div>
  
   <div class="my_b">
    <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple"><i class="fa fa-heart-o" aria-hidden="true"></i><p>我的关注</p></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light"><i class="fa fa-star-o" aria-hidden="true"></i><p>我的收藏</p></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"><i class="fa fa-map-marker" aria-hidden="true"></i><p>我的足迹</p></div>
    </el-col>
  </el-row>
  </div>
  <div class="my_c">
  <el-row :gutter="24">
    <el-col :span="12"><div class="grid-content bg-purple"><div class="my_l">我的订单</div></div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple"><div class="my_r"><p>查看更多订单</p></div></div></el-col>
  </el-row>
  </div>
  <div class="my_d">
    <ul>
      <li><i class="fa fa-credit-card" aria-hidden="true"></i><br />待付款</li>
      <li><i class="fa fa-calendar-o" aria-hidden="true"></i><br />待发货</li>
      <li><i class="fa fa-truck" aria-hidden="true"></i><br />待收货</li>
      <li><i class="fa fa-pencil-square-o" aria-hidden="true"></i><br />待评价</li>
      <li><i class="fa fa-jpy" aria-hidden="true"></i><br />售后</li>
    </ul> 
  </div>
<!-- 灰色分割线 -->
  <hr height="10px" color=#eef1f6 SIZE=3>
  <div class="my_man">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1" style="margin-left:-40px;background-color: #fff;">
              <template slot="title"><p>后台管理</p></template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" style="width: 100%;margin-top: -16px;" 
                    @click="gobuyer" >客户管理</el-menu-item>
                  <el-menu-item index="1-2">员工管理</el-menu-item>
                  <el-menu-item index="1-3">订单管理</el-menu-item>
                </el-menu-item-group>              
              </el-submenu>
              </el-menu>
  </div>

  <div class="my_e">
    <ul>
      <li><i class="fa fa-building-o" aria-hidden="true"></i>地址管理
          <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
      <li><i class="fa fa-rebel" aria-hidden="true"></i>我的会员
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
      <li><i class="fa fa-money" aria-hidden="true"></i>我的钱包
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
      <li><i class="fa fa-newspaper-o" aria-hidden="true"></i>我的范票
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>       
      <li><i class="fa fa-share-alt" aria-hidden="true"></i>邀请好友赢范票
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
      <li><i class="fa fa-indent" aria-hidden="true"></i>兑换范票
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
      <li><i class="fa fa-ticket" aria-hidden="true"></i>优惠券
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>     
    <hr height="10px" color=#eef1f6 SIZE=10>
      <li><i class="fa fa-binoculars" aria-hidden="true"></i>在线服务
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
      <li><i class="fa fa-commenting" aria-hidden="true"></i>意见反馈
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
    <hr height="10px" color=#eef1f6 SIZE=10>
      <li><i class="fa fa-life-ring" aria-hidden="true"></i>生活助手
         <div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
      </li>
    <hr height="10px" color=#eef1f6 SIZE=10>
    </ul>
  </div>

 
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
    }
  },
    methods:{
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      gobuyer:function(){
      this.$router.push({ path: '/buyer'})
    }
   }
}
</script>

<style scoped>
.my header{
  height: 51px;
  color: #333;
  background-color: #eef1f6;
}
.my_a{
  width: 100%;
  height: 115px;
  padding-top: 20%;
}
.my_a img{
  width: 60px;
  border-radius: 30px;
  margin: 27px 0;
}
.my_b{
  border-bottom:12px solid #eef1f6;
}
.my_b .el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.my_b .grid-content {
  min-height: 50px;
}
.my_ b .row-bg {
  padding: 10px 0;
}
.my_b p,.my_c p{
  font-size:13px;
  color: #909497;
  margin: 0;
}
.my_b .fa-heart-o,.my_b .fa-star-o,.my_b .fa-map-marker{
  color: #909497;
}
.my_c.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.my_c .grid-content {
  min-height: 30px;
}
.my_c{
  border-bottom:1px solid #eef1f6;
}
.my_c div{
  padding-top: 2px;
}
.my_c .my_l{
  text-align: left;
  padding-left: 15px;
  color: #333;
  font-size: 15px;
}
.my_c .my_r{
  text-align: right;
  padding-right: 15px;
}
.my_d ul{
  width: 100%;
  padding:0;
  list-style: none;
}
.my_d ul>li{
  width: 20%;
  float: left;
  font-size: 13px;
  color: #909497;
  margin-bottom: 12px;
}
.my_d ul>li i{
  font-size: 21px;
}
/*后台管理部分*/
.my_man{
  margin-top: -10px;
}
.my_man p{
  margin: 0;
  text-align: left;
  padding-left: 37px;
}
.my_e{
  margin-bottom: 55px;
}
.my_e ul{
  width: 100%;
  padding:0;
  margin-top: 0px;
}
.my_e ul>li{
  width: 100%;
  display: inline-block;
  font-size: 13px;
  height: 48px;
  line-height: 48px;
  text-align: left;
  padding-left: 15px;
}
.my_e ul>li i{
  font-size: 15px;
  margin-right: 11px;
  color:#909497;
}
.my_e ul>li .i-right{
  float: right;
  width: 35px;
}
.el-submenu__title{
  margin-left: -33px;
}
</style>
