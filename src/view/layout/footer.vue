<template>
	<div class="tab_a">
      <mt-tabbar>
        <mt-tab-item id="首页">
         <router-link to="/seek">
          <i class="fa fa-home" aria-hidden="true"></i><br />
          <p style="margin-top: -4px;">首页</p>
          </router-link> 
        </mt-tab-item>
        <mt-tab-item id="分类">
         <router-link to="/health">
          <i class="fa fa-th-large" aria-hidden="true"></i><br />
          <p style="margin-top: -4px;">分类</p>
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="购物袋">
        <router-link to="/chat">
           <i class="fa fa-shopping-bag" aria-hidden="true"></i><br />
          <p style="margin-top: -4px;">购物袋</p>
          </router-link> 
        </mt-tab-item>
        <mt-tab-item id="我的">
        <router-link to="/mine">
          <i class="fa fa-user" aria-hidden="true"></i><br />
          <p style="margin-top: -4px;">我的</p>
          </router-link> 
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>

	export default {
		
		data(){
			return{

			}
		}
	}
</script>

<style>

.tab_a .mint-tab-item-label a{
	 color: #333;
    text-decoration: none;
	cursor: none;
}
.tab_a .mint-tab-item-label{
	line-height: 2.3;
}
.tab_a .mint-tab-item-label:hover{
	background-color: #eaeaea;
}
.tab_a .mint-tabbar{
  height: 56px;
  position: fixed;
  z-index: 2;
}
.tab_a .mint-tab-item {
  margin-top: 3px;
}
.tab_a .mint-tab-item {
	padding: 0 0;
	margin-top: 0;
}
.tab_a .mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #333;
}
.tab_a .mint-tab-item i{
  font-size: 16px;
  padding-top: 10px;
}
.tab_a a{
  text-decoration:none;
  color: #333;
}
</style>