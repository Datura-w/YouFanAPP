<template>
   <!-- 分类部分内容         -->
      <div class="sort_a">
        <mt-navbar fixed class="page-part" v-model="selected_1" style="height: 51px;">  
          <mt-tab-item id="1">品类</mt-tab-item>  
          <mt-tab-item id="2">品牌</mt-tab-item>  
          <mt-tab-item id="3">动态</mt-tab-item>  
        </mt-navbar>                       
<!-- 品类 -->  
        <mt-tab-container v-model="selected_1">
        <div class="pinlei">  
          <mt-tab-container-item id="1"> 
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
              <template slot="title"><img src="./../../assets/sort_a1.jpg" width="100%" ><h3>女上装</h3></template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="goA">女生 WOMEN</el-menu-item>
                  <el-menu-item index="1-2" >男生 MEN</el-menu-item>
                  <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                </el-menu-item-group>              
              </el-submenu>
              </el-menu> 

              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
              <template slot="title"><img src="./../../assets/sort_a2.jpg" width="100%" ><span><h3>女下装</h3></span></template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">男生 MEN</el-menu-item>
                  <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                  <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                </el-menu-item-group>              
              </el-submenu>
              </el-menu> 

              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
              <template slot="title"><img src="./../../assets/sort_a3.jpg" width="100%" ><h3>鞋子</h3></template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">男生 MEN</el-menu-item>
                  <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                  <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                </el-menu-item-group>              
              </el-submenu>
              </el-menu> 

              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
              <template slot="title"><img src="./../../assets/sort_a4.jpg" width="100%" ><h3>包包</h3></template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">男生 MEN</el-menu-item>
                  <el-menu-item index="1-2">女生 WOMEN</el-menu-item>
                  <el-menu-item index="1-3">生活LIFESTYLE</el-menu-item>
                </el-menu-item-group>              
              </el-submenu>
              </el-menu> 
          


<!-- 新增详细部分 -->
      <div class="con">
      <!-- 灰色分割线 -->
      <hr height="20px" color=#eef1f6 SIZE=10>
        <!-- 资讯 -->
      <div class="news">
        <p>猜你喜欢</p>
        <div class="msg-tab">
          <mt-navbar v-model="msgSelected">
            <mt-tab-item id="recommend" style="color: #333">推荐</mt-tab-item>
            <mt-tab-item id="health">套装</mt-tab-item>
            <mt-tab-item id="diet">美妆</mt-tab-item>
            <mt-tab-item id="doctor">护肤品</mt-tab-item>
            <mt-tab-item id="old">配饰</mt-tab-item>
          </mt-navbar>

          <!-- tab-container -->
          <mt-tab-container v-model="msgSelected">
          <!-- 推荐 -->
            <mt-tab-container-item id="recommend">
              <!-- <mt-cell v-for="n in 10" :title="'content ' + n" /> -->
              <ul class="recommendList">
                <li v-for="item in recommendList">
                  <hgroup>
                    <p>{{ item.title }}</p>
                    <span>{{ item.conut }}赞</span>
                  </hgroup>
                  <section>
                    <img :src="item.image_url">
                  </section>
                  
                </li>
              </ul>
            </mt-tab-container-item>

          </mt-tab-container>
        </div>
      </div>
    </div>
    </mt-tab-container-item>
    </div>

<!-- 品牌   -->
          <mt-tab-container-item id="2">
            <div class="sort_brand"> 
            <mt-search
                autofocus   
                v-model="value"   
                :result="filterResult">  
            </mt-search>  
              <ul class="ul_brand">
                <li><img src="./../../assets/brand1.jpg" width="100%" ></li>
                <li><img src="./../../assets/brand2.jpg" width="100%" ></li>
                <li><img src="./../../assets/brand3.jpg" width="100%" ></li>
                <li><img src="./../../assets/brand4.jpg" width="100%" ></li>
                <li><img src="./../../assets/brand5.jpg" width="100%" ></li>
                <li><img src="./../../assets/brand6.jpg" width="100%" ></li>
              </ul>
                <mt-index-list>
                  <mt-index-section index="A">
                    <mt-cell title="adidas"></mt-cell>
                  </mt-index-section>
                  <mt-index-section index="C">
                    <mt-cell title="comback"></mt-cell>
                    <mt-cell title="converse 匡威"></mt-cell>
                  </mt-index-section>
                   <mt-index-section index="M">
                    <mt-cell title="MANGO 芒果"></mt-cell>
                    <mt-cell title="Meejoan"></mt-cell>
                  </mt-index-section>
                  <mt-index-section index="W">
                    <mt-cell title="WILDFOX 野狐"></mt-cell>
                  </mt-index-section>
                </mt-index-list>
                </div> 
              </mt-tab-container-item>
       
<!-- 动态 -->            
            <mt-tab-container-item id="3">
              <div class="sort_dynamic">
              <div class="word">卖家动态</div>
              <ul class="ul_dynamic">
                 <li v-for="dynamic in dynamicList">
                   <el-row :gutter="20">
                      <el-col :span="4"><div class="grid-content bg-purple"><img :src="dynamic.seller_img1"></div></el-col>
                      <el-col :span="20">
                      <div class="grid-content bg-purple">
                        <div class="seller_name">{{dynamic.seller_name}}</div>
                        <div class="seller_focus"><p>关注&nbsp&nbsp<i class="fa fa-heart-o" aria-hidden="true"></i></p></div>
                      </div>
                      </el-col>
                   </el-row>
                   <el-row :gutter="20">
                      <el-col :span="20" :offset="4">
                      <div class="grid-content bg-purple">
                        <div class="seller_title">{{dynamic.seller_title}}</div><br />
                        <div class="content_img1">
                          <img :src="dynamic.content_img1">
                          <img :src="dynamic.content_img2">
                          <img :src="dynamic.content_img3">
                        </div>
                      </div>
                      </el-col>                                        
                    </el-row>
                 </li>
              </ul> 
              </div>
              </mt-tab-container-item>   
           
          </mt-tab-container>

        </div>  
</template>

<script>

// 推荐列表
import recomImg1 from './../../assets/con1.jpg'
import recomImg2 from './../../assets/con4.jpg'
import recomImg3 from './../../assets/con3.jpg'
import recomImg4 from './../../assets/con2.jpg'


const arrayImg = ["dietImg2","dietImg3","dietImg4"];
export default {
  name: '',
  data () {
    return {
      selected_1: '1',
      value: '',  
      // 默认数据  
      defaultResult: [  
        'addida',  
        'comback',  
        'converse',  
        'MANGO',  
        'Meejoan'
      ] ,
      //动态列表
      dynamicList:[{
          seller_img1: "",
          seller_name: "",
          focus_img1: "",
          seller_title:"",
          content_img1: "",
          content_img2: "",
          content_img3: ""
        }],
        msgSelected: "recommend",
        // 推荐列表
        recommendList: [
          {
            title:"夏天快到啦！ins风印花T恤来袭哦！",
            conut:360,
            image_url:recomImg1
          },
          {
            title:"个子矮怎样搭配出女神范呢？来一条仙气满满的雪纺连衣裙吧！",
            conut:376,
            image_url:recomImg2
          },
          {
            title:"衬衫PK雪纺衫，百搭不挑人！",
            conut:541,
            image_url:recomImg3
          },
          {
            title:"口红怎么涂都不好看？怎样画桃花妆眼影？",
            conut:412,
            image_url:recomImg4
          }
        ]

      }
  },
  mounted:function(){  
      var vm = this;
      //获取动态列表json数据
      vm.getData();
  },
  computed: {  
	filterResult() {  
	  return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));  
	}  
  },
  methods: {
      goA:function(){
      this.$router.push({ path: '/a_sort'})
    },
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      getData(){
        //获取动态列表json数据
        this.$http.get('../../static/dataJSON/dynamic.json').then(function(response){ 
          this.dynamicList = response.data.dynamicData;
        },function(response){
          alert('请求失败了')
        })
      }
  }
}
</script>

<style>
/*点击面包屑显示黑色字体*/
.sort_a .el-menu-item.is-active {
    color: #333;
}
.sort_a .el-menu-item,.sort_a .el-submenu__title {
/*去掉element组件自带的规定所显示的指针（光标）的类型。*/
  cursor:auto;
}
.sort_a .el-submenu__icon-arrow {
/*去掉element中NavMenu导航菜单的<小标签（static默认值，没有定位）*/
  position:static;
}
.sort_a .mint-navbar{
  z-index: 3;
}
.sort_a .el-menu-item,.sort_a .el-submenu__title {
  padding-left: 0 !important;
  padding: 0 0;
  height: 128px;
}
.sort_a .mint-tab-item-label{
  font-size: 14px;
}
.sort_a .el-menu-item-group .el-menu-item{
  height: 56px;
}
.sort_a .el-menu-item-group__title{
  padding-top: 0;
}
.sort_a .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #333;
    color: #333;
    background: #eaeaea;
    margin-bottom: -3px;
}
.sort_a h3{
  position: absolute;
  z-index: 2;
  top: 23px;
  left: 31px;
  text-align: left;
  font-size: 13px;
}
.sort_a span h3{
  top: 23px;
  right: 62px;
  text-align: right;
}
.sort_brand{
  width: 100%;
}
.sort_brand .mint-indexsection-index{
  padding: 10px 13px;
  text-align: left;
}
.sort_brand .mint-cell-title {
  text-align: left;
}
.ul_brand{
  margin: 17px 10px;
  padding-left: 0;
}
.ul_brand li{
   width: 30%;
   display: inline-block;
}
.sort_brand .mint-tab-container-item {
  border-top: solid 1px #ddd;
}
.pinlei .mint-tab-container-item{
  padding-top: 54px;
}
.sort_brand .mint-search {
  height:50px;
  padding-top: 12%;
  width: 100%;
}
.sort_brand .mint-searchbar-cancel {
    color: #333;
}
.sort_dynamic .ul_dynamic li{
    width: 100%;
    display:block;
}
.sort_dynamic .ul_dynamic{
  padding-left: 0;
}
/*动态中element栅格布局*/
/*.ul_dynamic .bg-purple {
  background:pink;
}*/ 
.sort_dynamic{
  margin-bottom: 66px;
}
.ul_dynamic .grid-content {
  min-height: 45px;
  font-size: 15px;
}
.ul_dynamic li{
  margin-bottom: 35px;
}
.ul_dynamic .el-row{
  margin-left: 3px !important;
}
.ul_dynamic .el-col-4 .grid-content img{
  width: 43px;
  height: 45px;
  border-radius: 20px !important;
}
.ul_dynamic .el-col-offset-4{
  margin-bottom: 20px;
}
.ul_dynamic .seller_name{
  float: left;
}
.ul_dynamic .seller_focus{
  float: right;
  padding-right: 38px;
  margin-top: -8px;
  line-height: 0px;
  font-size: 13px;
}
/*关注标签图片的大小*/
.ul_dynamic .seller_focus img{
   width: 16px;
}
.ul_dynamic .seller_title{
  text-align: left;
  font-size: 13px;
}
.ul_dynamic .content_img1 img{
  width: 95px;
  height: 95px;
  float: left;
}
.sort_dynamic .word{
  border: 1px solid #ddd;
  height: 28px;
  text-align: left;
  padding-left: 10px;
  padding-top: 64px;
  font-size: 13px;
}

/*新增样式*/
/*中间*/
.con{
  position: relative;
}
.con .swipe_bar{
  position: relative;
    width: 100%;
    height: 10rem;
    margin-bottom: .3rem;
}
.con .swipe_bar img{
  width: 24rem;
    height: 10rem;
}
.con ul.service_nav{
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  overflow: hidden;
  font-size: 0.5rem;
  color: #333;
}
.con li{
  float: left;
    width: 33%;
    display: flex;
    justify-content: center;
    padding: .4rem 0;
}
.con li img{
  width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-bottom: .3rem;
}
.con .figcaption{
  color: #5B5B5B;
}
/*资讯*/
.con .news > p {
    text-align: left;
    margin-left: .8rem;
    margin: .5rem auto;
    font-size: .8rem;
    padding: 7px;
    padding-top: 8px;
}
.con .mint-navbar{
  border-bottom: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
}
.con .mint-navbar button{
  background-color: #fff;
    border-width: 0;
    border-color: #fff;
    outline-color: #fff;
    color:#2894FF;
}
.con .msg-tab .mint-navbar > .mint-tab-item.is-selected{
  color: #26a2ff;
}
/*推荐*/
.con ul.recommendList {
    background-color: #fff;
    overflow: hidden;
    margin: 0;
    padding: 0;
    padding-bottom: 61px;
}
.con ul.recommendList li{
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
}
hgroup{
    text-align: left;
    width: 70%;
}
.con hgroup p{
    font-size: .7rem;
    color: #272727;
    font-weight: 600;
    font-family: inherit;
    margin: 5px 0;
}
.con hgroup span{
  font-size: .2rem;
}
.con section{
    margin-left: 2rem;
}
.con section img {
    width: 4.2rem;
    height: 3.5rem;
}
</style>
