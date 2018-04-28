<template>
    <div class="a_head">
	   <div id="a_s1">  
         <mt-header fixed title="女上衣">    
          <mt-button icon="back" slot="left" @click="handleClose">返回</mt-button>  
            <mt-button icon="more" slot="right" @click="more"></mt-button>  
         </mt-header>           
       </div>
       <!-- 女上衣部分内容         -->
    <div class="a_s2">
        <mt-navbar fixed class="page-part" v-model="selected_1">  
          <mt-tab-item id="1">综合</mt-tab-item>  
          <mt-tab-item id="2">销量</mt-tab-item>  
          <mt-tab-item id="3">新品</mt-tab-item>  
        </mt-navbar> 
    </div>   
    <mt-tab-container v-model="selected_1">  
        <mt-tab-container-item id="1"> 
          <div class="sort_dynamic">
            <ul class="a_style">
              <li><p style="color:#7FB3D5">风格&nbsp|</p></li>
              <li><p>韩系</p></li>
              <li><p>甜美</p></li>
              <li><p>百搭</p></li>
              <li><p>学院</p></li>
            </ul>            
            <hr style="FILTER: progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)" width="90%" color=#7FB3D5 SIZE=1>
            <ul class="b_style">
              <li><p style="color:#7FB3D5">元素&nbsp|</p></li>
              <li><p>纯色</p></li>
              <li><p>蝴蝶结</p></li>
              <li><p>纽扣</p></li>
              <li><p>拼接</p></li>
            </ul>

            <ul class="ul_dynamic">
              <li v-for="dynamic in dynamicList">            
                <el-row :gutter="10">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <div class="a_pic" @click="goB"><img :src="dynamic.pic_img1"></div>
                      <div class="pic_font">{{dynamic.img_name1}}</div>
                      <div class="pic_tag">
                        <div class="price"><strong>{{dynamic.img_price1}}</strong></div>
                        <div class="tag">{{dynamic.img_tag1}}
                        <i class="fa fa-star-o" aria-hidden="true"></i></i>
                        </div>
                      </div>
                    </div>
                  </el-col>

                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <div class="a_pic"><img :src="dynamic.pic_img2"></div>
                      <div class="pic_font">{{dynamic.img_name2}}</div>
                      <div class="pic_tag">
                        <div class="price"><strong>{{dynamic.img_price2}}</strong></div>
                        <div class="tag">{{dynamic.img_tag2}}
                        <i class="fa fa-star-o" aria-hidden="true"></i></i>
                        </div>

                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
           </div>
        </mt-tab-container-item> 
<!-- 销量 -->
        <mt-tab-container-item id="2"> 
        <br/>
          <div class="sort_dynamic">
            <ul class="ul_dynamic">
              <li v-for="dynamic in dynamicList">            
                <el-row :gutter="10">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <div class="a_pic"><img :src="dynamic.pic_img1"></div>
                      <div class="pic_font">{{dynamic.img_name1}}</div>
                      <div class="pic_tag">
                        <div class="price"><strong>{{dynamic.img_price1}}</strong></div>
                        <div class="tag">{{dynamic.img_tag1}}
                        <i class="fa fa-star-o" aria-hidden="true"></i></i>
                        </div>
                      </div>
                    </div>
                  </el-col>

                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <div class="a_pic"><img :src="dynamic.pic_img2"></div>
                      <div class="pic_font">{{dynamic.img_name2}}</div>
                      <div class="pic_tag">
                        <div class="price"><strong>{{dynamic.img_price2}}</strong></div>
                        <div class="tag">{{dynamic.img_tag2}}
                        <i class="fa fa-star-o" aria-hidden="true"></i></i>
                        </div>

                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
           </div>
        </mt-tab-container-item> 
<!-- 新品 -->
        <mt-tab-container-item id="3"> 
        <br/>
          <div class="sort_dynamic">
            <ul class="ul_dynamic">
              <li v-for="dynamic in dynamicList">            
                <el-row :gutter="10">
                  <el-col :span="12">
                    <div class="grid-content bg-purple">
                      <div class="a_pic"><img :src="dynamic.pic_img1"></div>
                      <div class="pic_font">{{dynamic.img_name1}}</div>
                      <div class="pic_tag">
                        <div class="price"><strong>{{dynamic.img_price1}}</strong></div>
                        <div class="tag">{{dynamic.img_tag1}}
                        <i class="fa fa-star-o" aria-hidden="true"></i></i>
                        </div>
                      </div>
                    </div>
                  </el-col>

                  <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                      <div class="a_pic"><img :src="dynamic.pic_img2"></div>
                      <div class="pic_font">{{dynamic.img_name2}}</div>
                      <div class="pic_tag">
                        <div class="price"><strong>{{dynamic.img_price2}}</strong></div>
                        <div class="tag">{{dynamic.img_tag2}}
                        <i class="fa fa-star-o" aria-hidden="true"></i></i>
                        </div>

                      </div>
                    </div>
                  </el-col>
                </el-row>
              </li>
            </ul>
           </div>
        </mt-tab-container-item> 
     </mt-tab-container>
<!-- 已经到底了 -->
     <div class="a_footer">已经到底了</div>
  </div>	   
</template>


<script>

export default {
  name: 'a_s1',
  data () {
    return {
    	selected_1: '1',
        value: '',
         //动态列表
        dynamicList:[{
            pic_img1: "",
            img_name1: "",
            img_price1: "",
            img_tag1:"",
            pic_img2: "",
            img_name2: "",
            img_price2: "",
            img_tag2:""
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
	// handleOpen(key, keyPath) {
	// },
	// handleClose(key, keyPath) {
	// }

    handleClose: function(){  
        console.log("返回") 
        this.$router.push({ path: '/sort'}) 
    },  
    more: function(){  
        console.log("更多")  
    } ,
    goB:function(){
      this.$router.push({ path: '/b_sort'})
    },
   getData(){
        //获取动态列表json数据
        this.$http.get('../../static/dataJSON/a_sort_pic.json').then(function(response){ 
          this.dynamicList = response.data.dynamicData;
        },function(response){
          alert('请求失败了')
        })
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
/*综合、新品*/
.a_s2 .mint-navbar{
  top:52px;
}
.a_s2 .mint-tab-item-label {
  font-size: 15px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #eaeaea;
  color: #95A5A6;
}
/*综合列表*/
.sort_dynamic{
  margin-top: 100px;
}
.a_style,.b_style{
  padding-left: 0px;
}
.a_style li{
  width: 20%;
  list-style:none;
  float: left;
  font-size: 13px;
  padding-top: 12px;
}
.b_style li{
  width: 20%;
  list-style:none;
  float: left;
  font-size: 13px;
  margin-top: -16px;
}
.sort_dynamic .el-row {
  margin-bottom: 15px;
  padding: 0 11px;
  &:last-child {
  margin-bottom: 0;
  }
}
.sort_dynamic .el-col {
  border-radius: 4px;
  padding: 0 9px;
  height: 300px;
  }
.sort_dynamic .grid-content {
  height: 300px;
}
.sort_dynamic .el-col el-col-12{
  padding: 0 12px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.ul_dynamic{
  list-style: none;
  padding-left: 0px;
}
/*图片、文字、收藏标签*/
.a_pic{
  height:75%;
}
.a_pic img{
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.pic_font{
  height:17%;
  font-size: 13px;
  text-align: left;
  color: #929293;
}
.pic_tag{
  float: left;
  width: 100%;
  font-size: 13px;
  margin-top: 10px;
}
.price{
  width: 50%;
  float: left;
  text-align: left;
}
.tag{
  width: 35%;
  float: right;
  text-align: right;
  margin-right: 16px;
  color: #626466;
}
/*已经到底了*/
.a_footer{
  height: 165px;
  font-size: 13px;
  background-color: #eaeaea;
  width: 100%;
  padding-top: 6px;
  color: #626466;
}


</style>
