<template>
	<div>
		<div class="cate-top">
			<span>全部分类</span>
			<a href="javascript:history.go(-1)"><</a>
		</div>
		<div class="search">
			<input type="text" placeholder="搜索商品">
		</div>
		<div class="category">
			<div>
				<ul class="category-left">
					<li v-for="(item,index) in lists" :key="index" @click="selectCategory(index)" :class="{'color-red':activeIndex==index}">{{item.name}}</li>
				</ul>
			</div>
			<div>
				<div class="category-right">
					<div v-for="(item,index) in (lists[num]&&lists[num].secondCateList)" :key="index">
						<img v-lazy="'https://s2.juancdn.com'+item.icon">
						<span>{{item.name}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//导出使用组件
export default {
	data(){
		return {
			lists:[],
			num:0,
			activeIndex:0
		}
	},
	components:{
	    
	},
	methods: {
		// goBack:function(){
		// 	this.$router.push({name: 'Cang'})
		// },
		// goBack:function(){
		// 	this.$router.go(-1);
		// },
		selectCategory:function(index){
			//切换分类及对应的样式
			this.num=index;
			this.activeIndex=index;
		},
		getDate:function(){
			this.$http.get('../../static/json/category.json')
			.then((res)=>{
				//axios方式请求数据
				this.lists = res.data;
			})
		}
	},
	created(){
		this.getDate();
	}
}
</script>

<style>
.cate-top{
	height: 44px;
	border-bottom: 1px solid #ebebeb;
}
.cate-top span:nth-of-type(1){
	position: absolute;
	left: 50%;
	top: 0;
	bottom: 0;
	transform: translate(-50%,0);
	line-height: 44px;
	font-size: 18px;
	width: 303px;
	text-align: center;
	height: 44px;
}
.cate-top a{
	position: absolute;
	left: 0;
	top: 0;
	width: 44px;
	height: 44px;
	line-height: 44px;
	text-align:center;
	font-size: 24px;
	font-family: 'iconfont';
	font-style: normal;
}
.search{
	margin: 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    padding: 3px 0;
    font-size: 13px;
    background-image: url(../../static/imgs/search.png);
    background-repeat: no-repeat;
	background-size: 24px 24px;
	background-position: 5px center;
}
.search input{
	box-sizing: border-box;
	width: 266px;
	height: 24px;
	margin-left: 32px;
	border: none;
	outline-style: none;
	padding: 0;
	color: #999;
    width: 90%;
    left: 0;
    background-color: transparent;
}
.category{
	font-size: 0;
}
.category>div:nth-of-type(1){
	width: 25%;
	font-size: 0.16rem;
	text-indent: 0.16rem;
	float: left;
}
.category>div:nth-of-type(2){
	width: 75%;
	font-size: 0.14rem;
	float: right;
}
.category-left li{
	height: 0.45rem;
	line-height: 0.45rem;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
    background: #f9f9f9;
}
.color-red{
	color: #ff464e;
    border-left: 4px solid #ff464e;
    background-color: #fff;
}
.category-right{
	font-size: 0;
}
.category-right>div{
	box-sizing: border-box;
	padding: 0 10px;
	width: 33.33%;
	display: inline-block;
}
.category-right>div img{
	width: 100%;
}
.category-right>div span{
	font-size: 0.12rem;
	display: block;
	text-align: center;
	color: #333;
}
</style>