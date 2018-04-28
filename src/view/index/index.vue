<template>
	<div class="index">
		<!-- <router-link to="/hello">鹿晗</router-link> -->
	 	<!-- <sideBar></sideBar>
		<headerTop></headerTop> -->
		<router-view></router-view><!-- index下的子组件在此渲染 -->
		<Bottom></Bottom>
		<!-- <Youfan></Youfan>
		<Login></Login> -->
	</div>
</template>

<script>

	// import sideBar from '@/view/layout/sideBar'
	// import headerTop from '@/view/layout/header'
	import Bottom from '@/view/layout/footer'
	// import Youfan from '@/view/layout/youfan'
	// import Login from '@/view/layout/login'

	export default {
		components: {Bottom},
		data(){
			return {
				
			}
		}
	}

</script>

<style>
	

</style>