<template>
    <div class="b_head">
	   <div class="b_s1">  
          <img src="./../../assets/b_sort1.jpg" width="100%" >          
       </div>
       <div class="b_name">
       	甜美喇叭袖打底上衣2018新款碎花印花撞色圆领套头原宿风显瘦雪纺衫仙女宽松短款荷叶边娃娃衫
       </div>
       <div class="b_price" style="clear:both">
          <div class="b_p">¥</div>
          <div class="b_p1">68.00</div>
       </div>
       <div class="b_you">免邮费</div>
       <div class="b_card">
          <ul>
            <li style="width:30%;"><img src="./../../assets/b_day.jpg" width="18%" ><p>72小时发货</p></li>
            <li style="width:30%;"><img src="./../../assets/b_liyou.jpg" width="18%" ><p>7天无理由退货</p></li>
            <li style="width:30%;"><img src="./../../assets/b_money.jpg" width="18%" ><p>退货补运费</p></li>
            <li style="width:10%;"><div class="i-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div></li>
          </ul>           
       </div>
<!-- 灰色分割线 -->
    <hr height="10px" color=#eef1f6 SIZE=10>
  <div id="b_color">
    <div class="b_choice">请选择：颜色 尺码</div>
    <div class="choice_ico" >     
      <i class="fa fa-angle-right" aria-hidden="true"><mt-button @click.native="handleClick"><i class="fa fa-bars" aria-hidden="true"></i></mt-button></i>
    </div> 
      <mt-popup v-model="popupVisible" position="left" modal=false>
      <child></child>
    </mt-popup>
  </div>
  <!-- 灰色分割线 -->
  <hr height="10px" color=#eef1f6 SIZE=10>

<!-- 买家评论部分 -->
  <div id="b_color">
    <div class="b_choice" style="color: #909497;">买家评论 34 | 销量 385</div>
    <div class="choice_ico" style="color: #909497;">     
      <i class="fa fa-angle-right" aria-hidden="true"><mt-button @click.native="handleClick"><i class="fa fa-bars" aria-hidden="true"></i></mt-button></i>
    </div> 
  </div>
  <div class="seller_ico">
    <ul>
      <li ><p style="margin-top: 7px;">有图片（7）</p></li>
      <li ><p style="margin-top: 7px;">质量很好（25）</p></li>
      <li ><p style="margin-top: 7px;">料子很不错（18）</p></li>
    </ul> 
  </div>
 
  <div class="sort_dynamic">
      <ul class="ul_dynamic">
         <li v-for="dynamic in dynamicList">
           <el-row :gutter="20">
              <el-col :span="4"><div class="grid-content bg-purple"><img :src="dynamic.seller_img1"></div></el-col>
              <el-col :span="20">
              <div class="grid-content bg-purple">
                <div class="seller_name">{{dynamic.seller_name}}</div>
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
<!-- 灰色分割线 -->
  <hr height="10px" color=#eef1f6 SIZE=10>
<!-- 穿着效果 -->
    <div class="sort_a">
      <mt-navbar class="page-part" v-model="selected_1">  
        <mt-tab-item id="1">图片详情</mt-tab-item>  
        <mt-tab-item id="2">商品参数</mt-tab-item>  
        <mt-tab-item id="3">热卖推荐</mt-tab-item>  
      </mt-navbar>   
      <mt-tab-container v-model="selected_1">  
          <mt-tab-container-item id="1"> 
            <div class="sell_word">小碎花真滴温柔得能掐出水来~这款雪纺衫的衣型和喇叭袖都放的很开，悠闲慵懒，也很显瘦.花色是那种hin好掌握和搭配的浅碎花，清爽素雅，耐看不挑人.衣服的料子轻盈，垂顺有质感又飘逸.而且从系带领口往下，层层的荷叶边叠在一起，有一种清新的空气感，翩然流转的灵动韵味，是仙女本仙啦~</div>
            <div class="seller_pic">
              <p style="text-align: left;padding-left: 4%;">穿着效果</p>
              <ul>
                <li ><img src="./../../assets/seller1.jpg"></li>
                <li ><img src="./../../assets/seller2.jpg"></li>
                <li ><img src="./../../assets/seller4.jpg"></li>
                <li ><img src="./../../assets/seller3.jpg"></li>
              </ul> 
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2"> 
            <div class="seller_shop">
             <ul>
                <li ><div class="s_p1">尺码</div><div class="s_p2">S，XL，L，M</div></li>
                <li ><div class="s_p1">图案</div><div class="s_p2">碎花</div></li>
                <li ><div class="s_p1">颜色</div><div class="s_p2">蓝色，米白色，杏粉色</div></li>
                <li ><div class="s_p1">袖型</div><div class="s_p2">喇叭袖</div></li>
                <li ><div class="s_p1">穿着方式</div><div class="s_p2">套头</div></li>
                <li ><div class="s_p1">衣长</div><div class="s_p2">短款（41-50cm）</div></li>
                <li ><div class="s_p1">版型</div><div class="s_p2">宽松</div></li>
                <li ><div class="s_p1">下摆</div><div class="s_p2">开叉</div></li>
                <li ><div class="s_p1">样式款型</div><div class="s_p2">吊带</div></li>
                <li ><div class="s_p1">季节</div><div class="s_p2">夏季</div></li>
                <li ><div class="s_p1">材质</div><div class="s_p2">雪纺</div></li>
                <li ><div class="s_p1">风格</div><div class="s_p2">甜美</div></li>
              </ul>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3"> 
          </mt-tab-container-item>
       </mt-tab-container>
    </div>


    </div>
</template>

<script>
 export default {
  name: 'b_color',
  data () {
    return {
      popupVisible:false,
      selected_1: '1',
      value: '',  
      //动态列表
      dynamicList:[{
          seller_img1: "",
          seller_name: "",
          focus_img1: "",
          seller_title:"",
          content_img1: "",
          content_img2: "",
          content_img3: ""
        }]
     
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
  handleOpen(key, keyPath) {
  },
  handleClose(key, keyPath) {
  },
  handleClick: function() {
          this.popupVisible = true
   },
   getData(){
    //获取动态列表json数据
      this.$http.get('../../static/dataJSON/b_sort.json').then(function(response){ 
      this.dynamicList = response.data.dynamicData;
      },function(response){
         alert('请求失败了')
      })
    }

  },
  components:{
        child:{
           template:"<h1>颜色:<br/><br/>米白色，蓝色，杏粉色<br/><br/>尺码：<br/><br/>S，M，L，XL</h1>"
                 

        }
      } 
}
</script>
<style>
.b_head{
  height: 1300px;
}
.b_s1{
  width: 100%;
  height: 520px	
}
.b_s1 img{
  width: 100%;
  height: 100%;
}
.b_name{
  height: 46px;
  text-align: left;
  padding: 12px 13px;
  font-size: 17px;
}
.b_price{
  overflow: hidden;/*清除浮动*/
  width: 100%;
}
.b_p{
  font-size: 13px;
  text-align: right;
  float: left;
  padding-top: 3%;
  padding-left: 4%;
  color: #333;
}
.b_p1{
  float: left;
  text-align: left;
  font-size: 43px; 
}
.b_you{
  text-align: left;
  padding-left: 4%;
  font-size: 13px;
  margin-top: 4%;
  color: #909497;
  padding-bottom: 4%;
  border-bottom: 1px solid #eef1f6;
}
/*发货信息部分*/
.b_card{
  overflow: hidden;
}
.b_card ul{
  width: 100%;
  padding:0;
  list-style: none;
  overflow: hidden;
  margin: auto;
}
.b_card ul>li{
  float: left;
  font-size: 12px;
  color: #909497;
  text-align: center;
}
.b_card ul>li i{
  font-size: 21px;
}
.b_card img{
  float: left;
  margin-top: 8%;
  margin-left: 12%;
}
.b_card p{
  text-align: left;
}
.i-right{
  margin-top: 26%;
}
#b_color{
  overflow: hidden;
  height: 27px;
  margin-top: 4%;
}
.b_choice{
  width: 85%;
  float: left;
  font-size: 13px;
  color: #333;
  text-align: left;
  margin-left: 4%;
}
.choice_ico{
  width: 6%;
  float: left;
  padding-left: 18px;
  margin-top: -2%;
}
/*选择颜色尺寸部分*/
.mint-popup{
  font-size: 9px;
  color: #909497;
  width: 96%;
  height: 185px;
  text-align: left;
  padding-left: 4%;
  border-radius: 10px;
  font-family:宋体;
  font-style:normal

}
/*取消按钮所有样式*/
.mint-button--normal {
  color: #fff;
  background: #fff;
  box-shadow: 0 0 0 #fff;/*按钮边框变白*/
}
.mint-button--default {
  box-shadow: 0 0 0 #fff;
}
/*卖家评价部分*/
.seller_ico{
  overflow: hidden;
}
.seller_ico ul{
  list-style: none;
  overflow: hidden;
  margin: auto;
  padding-left: 0px;
}
.seller_ico ul>li{
  border-radius: 10px;
  height: 32px;
  float: left;
  font-size: 13px;
  color:#7FB3D5;
  background-color: #EBF5FB;
  margin-left: 4%;
  padding-left: 2%;
}
/*列表中卖家评价*/
.sort_dynamic .ul_dynamic li{
    width: 100%;
    display:block;
}
.sort_dynamic .ul_dynamic{
  padding-left: 0;
}
.ul_dynamic .grid-content {
  min-height: 45px;
  font-size: 15px;
}
.ul_dynamic li{
  margin-bottom: 10px;
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
  padding-top: 4%;
}
/*.ul_dynamic .el-col .el-col-20{
  height: 51px;
}*/
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
/*图片详情*/
.sort_a{
  height: 500px;
  margin-top: 8%;
}
.sort_a .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #333;
  color: #333;
  background: #eaeaea;
  margin-bottom: -3px;
}
.sort_a .mint-tab-item-label {
  font-size: 17px;
}
.sell_word{
  text-align: left;
  padding: 4% 3%;
  font-size: 15px;
  color: #909497;
}
.seller_pic ul{
  padding-left: 0px;
}
.seller_pic ul>li{
  margin-top: -4%;
}
/*商品参数部分*/
.seller_shop{
  overflow: hidden;
}
.seller_shop ul{
  list-style: none;
  margin-left: -6%;
  overflow: hidden;
}
.seller_shop ul>li{
  border-bottom: 1px solid #eef1f6;
  font-size: 15px;
  text-align: left;
  padding-left: 4%;
  overflow: hidden;
}
.s_p1{
  width: 30%;
  float: left;
  margin-top: 3%;
  margin-bottom: 3%;
}
.s_p2{
  width: 55%;
  float: left;
  margin-top: 3%;
  margin-bottom: 3%;
}

</style>





