<template>
    <div class="head">
	   <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
	    <el-submenu index="1">
	      <template slot="title"><i class="fa fa-bars" aria-hidden="true"></i><p>走进有品位的你</p></template>
	      <el-menu-item-group>
	        <el-menu-item index="1-1">男生 MEN</el-menu-item>
	        <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
	        <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
	      </el-menu-item-group>              
	    </el-submenu>
	    </el-menu>
	    <div class="swipe_a1">
	    <mt-swipe :show-indicators="false">
	      <mt-swipe-item><img src="./../../assets/lunbo1.jpg" width="100%" ></mt-swipe-item>
	      <mt-swipe-item><img src="./../../assets/lunbo2.jpg" width="100%" ></mt-swipe-item>
	      <mt-swipe-item><img src="./../../assets/lunbo3.jpg" width="100%" ></mt-swipe-item>
	    </mt-swipe> 
	    </div> 
	    <div class="head_a2">
	      <ul>
	        <li class="a"><i class="fa fa-gift fa-lg" aria-hidden="true"></i><br /><p>今日新品</p></li>
	        <li class="b"><i class="fa fa-female fa-lg" aria-hidden="true"></i><br /><p>人气单品</p></li>
	        <li class="c"><i class="fa fa-rebel fa-lg" aria-hidden="true"></i><br /><p>品质生活</p></li>
	        <li class="b"><i class="fa fa-university fa-lg" aria-hidden="true"></i><br /><p>都市MC</p></li>
	      </ul>
	    </div>
	    <div class="head_a3">
	<!-- 懒加载 -->
	       <ul class="lazy_list">
			  <li v-for="item in list">
			    <img v-lazy="item">
			  </li>
		   </ul>
	    </div>
	</div>
</template>

<script>
import img1 from './../../assets/lazy1.jpg'
import img2 from './../../assets/lazy2.jpg'
import img3 from './../../assets/lunbo2.jpg'
import img4 from './../../assets/lazy3.jpg'


export default {
  name: '',
  data () {
    return {
    	list:[img1,img2,img3,img4]
    }
  },
  methods: {
	handleOpen(key, keyPath) {
	},
	handleClose(key, keyPath) {
	}
  } 
}
</script>

<style>
.head{
  width: 100%;
}
.head .fa-bars{
  float: left;
  padding-top: 20px;
}
.head .el-submenu p{
  padding-left: 5px;
  margin-top: 0;
}
.head .el-menu-item-group__title{
  padding-top: 0;
}
.swipe_a1{
  width: 100%;
  height: 200px;
}
ul {
  list-style-type: none;
}
/*点击面包屑显示黑色字体*/
.head .el-menu-item.is-active {
    color: #333;
}
.head .el-menu-item,.head .el-submenu__title {
/*去掉element组件自带的规定所显示的指针（光标）的类型。*/
  cursor:auto;
}
.head_a2 ul>li{
  width: 50%;
  list-style: none;;
  float: left;
  line-height: 23px;
  margin: 20px 0;
}
.head_a2 ul{
  margin: 0;
  padding: 0;
}
.head_a2 p{
  font-size: 13px;
}
.head_a3 .lazy_list{
  padding: 0 11px;
}
.head_a3 .lazy_list img{
  width: 100%;
}

</style>
