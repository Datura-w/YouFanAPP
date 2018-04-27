<template>
	<div class="index">
		<!-- <router-link to="/hello">鹿晗</router-link> -->
	 	<!-- <sideBar></sideBar>
		<headerTop></headerTop> -->
		<router-view></router-view><!-- index下的子组件在此渲染 -->
		<Bottom></Bottom>
	</div>
</template>

<script>

	// import sideBar from '@/view/layout/sideBar'
	// import headerTop from '@/view/layout/header'
	import Bottom from '@/view/layout/footer'

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