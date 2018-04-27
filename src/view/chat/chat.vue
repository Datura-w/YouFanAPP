<template>
  <div class="shop">
    <div class="shop_head">
      <!-- 使用路由返回上一级 -->
      <!--  <mt-header title="购物袋">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header> -->
       <mt-header fixed title="购物袋"></mt-header>
    </div>
    <div class="shop_content">
       <i class="fa fa-shopping-bag fa-5x" aria-hidden="true"></i><br />
       <p>购物袋还是空的哦~</p>
       <mt-button size="normal">去逛逛</mt-button>
    </div>
  	
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
    	selected:""
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop_head header{
  height: 46px;
  color: #333;
  background-color: #eef1f6;
}
.shop_content{
  margin-top: 50%;
}
.shop_content .fa-shopping-bag{
  color: #ccc;
}
.shop_content p{
  font-size: 15px;
  color: #ccc;
}
.shop_content .mint-button--normal{
  border: 1px solid #333;
  color: #333;
  font-size: 16px;
  height: 33px;
}
</style>
