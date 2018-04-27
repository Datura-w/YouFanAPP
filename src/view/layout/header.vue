<template>
	<!-- <div class="headSearch">
		<div class="locate">
			<span class="locateTip">广州</span>
			<span class="locateIcon"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
		</div>
		<div class="innerSearch">
			<mt-search :value.sync="value" cancel-text="取消" placeholder="疾病/医院/科室/医生等">
		    </mt-search>
		</div>
	</div> -->
</template>

<script>
	export default {
		data(){
			return {
				value:''
			}
		}
	}

</script>

<style>
/*头部*/
/*.headSearch{
	position: fixed;
    overflow: hidden;
    width: 100%;
    height: 2rem;
    margin-top: 9px;
    top: 23px;
    left: 7px;
    right: 0;
    z-index: 100;
    background-color: #fafafa;
}
.locate {
    width: 20%;
    float: left;
    /* text-align: left; */
    /*position: relative;
    margin: 5px auto;
}
.locateTip {
    font-size: .9rem;
    margin: auto;
}
.locateIcon {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: absolute;
    top: 13%;
    left: 74%;
}
.locateIcon i {
    width: 1rem;
    height: 1rem;
    
}
.headSearch .innerSearch {
    float: right;
    width: 75%;
    margin-right: 17px;
}
.headSearch .innerSearch .mint-search {
    height: 100%;
}
.headSearch .innerSearch .mint-searchbar{
    padding: 0;
}
.headSearch .innerSearch .mint-searchbar-inner{
	padding: 0;
    border: 1px solid #e1e1e1;
}
.headSearch .innerSearch .mint-searchbar-inner i{
    padding: .5rem;
}
.headSearch .innerSearch input{
	padding: 0;*/
    /*background-color: #d0d0d0;*/
/*}
.headSearch .innerSearch .mint-searchbar-cancel{
    background-color: white;
    margin: 0;
    font-size: .8rem;
    padding: .4rem;
}*/

/*.locate i.fa {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    position: absolute;
    border: 1px solid;
    left: 2rem;
    top: 0;
}*/
/*.mint-searchbar-cancel{
	font-size: 0.8rem;
}
.mint-search{
	height: 100%;
	margin: 10px 0px 10px 50px;
}
.mint-searchbar{
    background-color: #E0E0E0;
    margin-left: 20px;
}
.mint-searchbar-inner{
}
.mint-searchbar-inner input{
    margin-left: 5px;	
}	*/

</style>