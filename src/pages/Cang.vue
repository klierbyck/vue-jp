<template>
	<div class="container">
		<div class="fix-top" v-show="dis">
			<span>生活仓库</span>
			<span @click="gotoDetail"></span>
		</div>
		<div class="googs-sort" :class="{'googs-sort-fix':cla}">
			<ul>
				<li v-for="(item,index) in sorts" @click="getDate(index)" :key="index" :class="[curIndex==index?'active':'']">{{item}}
					<span v-if="index==1">{{upOrDown}}</span>
				</li>
			</ul>
		</div>
		<div class="goods-list clearfix">
			<div class="goods-detail" v-for="(item,index) in lists" :key="index">
				<div class="goods-img">
					<router-link :to="{path:'/detail',query:{data:item}}"> 
						<img v-lazy="item.pic_url">
					</router-link>
				</div>
				<p>
					<span class="cur-price">¥{{item.tuan_price}}</span>
					<span class="pin-icon">拼</span>
					<span class="del-price">¥{{item.oprice}}</span>
					<i class="only-time">{{item.residue}}</i>
				</p>
				<h3>
					<span class="zhi-icon">直发</span>
					{{item.title}}
				</h3>
			</div>
		</div>
		<menus></menus>
	</div>
</template>

<script>
import Menus from '../components/Menu'
// import jsonp from "jsonp"
//导出使用组件
export default {
	data(){
		return {
			sorts:['默认','价格','销量'],
			gosorts:[{"show_stime":"desc"},{"cprice":"asc","show_stime":"desc"},{"cprice":"desc","show_stime":"desc"},{"sales":"desc","show_stime":"desc"}],
			upOrDown:'',
			curIndex:0,
			flag:true,
			lists:[],
			scroll: '',
			dis:true,
			cla:false
		}
	},
	components:{
	    Menus
	},
	methods: {
		gotoDetail:function(){
			this.$router.push({name: 'Category'});
		},
		getDate:function(index){
			this.curIndex = index || 0;
			this.flag=!this.flag;
			var num = index || 0;
			if(num==1){
				if(this.flag){
					num='1-1';
					this.upOrDown="↑";
				}else{
					num='1-2';
					this.upOrDown="↓";
				}
			}else{
				this.upOrDown="";
			}

			// let str = "https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22stock%22%3A%222%22%2C%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%223%22%5D%2C%22source_type%22%3A%5B%221%22%5D%2C%22fcate%22%3A%22490%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_51_1064_18_5_128&machining=danpin&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids="
			// jsonp(str,null,function(err,data){
			// 	console.log(1,err)
			// 	console.log(2,data)
			// })

			this.$http.get('../../static/json/cang'+num+'.json')
			.then((res)=>{
				this.lists = res.data.list;
			})
			// if(num===1){
			// 	if(this.flag){
			// 		num='1';
			// 		this.upOrDown="↑";
			// 	}else{
			// 		num='2';
			// 		this.upOrDown="↓";
			// 	}
			// }else if(num===2){
			// 	num='3';
			// 	this.upOrDown="";
			// }else{
			// 	this.upOrDown="";
			// }
			// this.$http.get('https://shop.juanpi.com/gsort?key={"cdt":{"stock":"2","is_show_presale":"0","hot_type":["1","3"],"source_type":["1"],"fcate":"490","sale_type":2},"order":'+JSON.stringify(this.gosorts[num])+'}&type=50&zhouyi_ids=p8_c3_l1_51_18_5_128&machining=danpin&page=1&rows=80&dtype=JSONP&price_range=&cat_threeids=&callback=gsort_callback')
			// .then((res)=>{
			// 	//axios方式请求数据
			// 	var datas=res.data.substring(res.data.indexOf("(")+1,res.data.lastIndexOf(")"));
			// 	this.lists = JSON.parse(datas).list;
			// })
		},
		menu:function(){
			//在当前页监听鼠标滚动
			if(this.$route.name=='Cang'){
		        this.scroll = document.documentElement.scrollTop||document.body.scrollTop;
		        //判断滚动距离和fix-top的高度
		        if(this.scroll>document.getElementsByClassName('fix-top')[0].offsetHeight){
		        	//隐藏fix-top
		        	this.dis=false;
		        	//设置类样式为固定定位
		        	this.cla=true;
		        }else{
		        	this.dis=true;
		        	this.cla=false;
		        }
		    }
	    }
	},
	created(){
		this.getDate();
		window.addEventListener('scroll', this.menu);
		console.log(this.$el)
		console.log(this.$nextTick)
	}
}
</script>

<style>
.container{
	width: 100%;
	position: relative;
}
.fix-top{
	height: 44px;
	border-bottom: 1px solid #ebebeb;

}
.fix-top span:nth-of-type(1){
	position: absolute;
	left: 50%;
	transform: translate(-50%,0);
	line-height: 44px;
	font-size: 18px;
	width: 303px;
	text-align: center;
}
.fix-top span:nth-of-type(2){
	position: absolute;
	right: 0;
	top: 0;
	width: 44px;
	height: 44px;
	background-image: url(../../static/imgs/list1.png);
	background-repeat: no-repeat;
	background-size: 24px 24px;
	background-position: center center;
}
.googs-sort-fix{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	background: #fff;
}
.googs-sort{
	width: 100%;
	height: 30px;
	padding: 10px 0;
	border-bottom: 1px solid #ebebeb;
	font-size: 0;
	font-weight:700;
}
.googs-sort li{
	font-size: 14px;
	display: inline-block;
	width: 33.33%;
	line-height: 30px;
	border-right: 1px solid #ebebeb;
	box-sizing: border-box;
	text-align: center;
}
.googs-sort li span{
	font-size:20px;
}
.googs-sort li.active{
	color:red
}
.googs-sort li:nth-of-type(2) img{
	width: 12px;
	height: 20px;
	vertical-align: middle;
}
.googs-sort li:nth-of-type(3){
	border: 0 none;
}
.goods-list{
	overflow: auto;
	height: 100%;
}
.clearfix::after,.clearfix::before{
	clear: both;
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    visibility: hidden;
}
.goods-detail{
	width: 49.5%;
	float: left;
	margin-top: 1%;
}
.goods-detail:nth-child(odd){
	margin-right: 1%;
}

.goods-img img{
	width: 100%;
	-webkit-transition: all 2s;
	-o-transition: all 2s;
	transition: all 2s;
}
.goods-img img[lazy=loading] {
  opacity: 0.1;
}
.goods-img img[lazy=error] {

}
.goods-img img[lazy=loaded] {
  opacity: 1;
}
.goods-detail p{
	width: 92%;
	padding: 0 4%;
	font-size: 0.15rem;
	height: 0.24rem;
	line-height: 0.24rem;
	color: #ff464e;
}
.goods-detail .cur-price{
	margin-right: 4px;
	vertical-align: middle;
}
.goods-detail .pin-icon{
	margin-right: 5px;
	padding: 1px;
	background-color: #ff464e;
	color: #fff;
	font-size:0.12rem;
	line-height: 0.24rem;
	vertical-align: middle;
}
.goods-detail .del-price{
	margin-right: 4px;
	vertical-align: middle;
	color: #bbb;
	font-size: 0.12rem;
	text-decoration: line-through;
}
.goods-detail .only-time{
	font-style: normal;
	font-size: 0.12rem;
	float: right;
	color: #bbb;
}
.goods-detail h3{
	width: 96%;
	padding-left: 4%;
	margin-top: 1%;
	font-size: 0.12rem;
	height: 0.20rem;
	line-height: 0.20rem;
	color: #333;
	font-weight: normal;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goods-detail .zhi-icon{
	color: #ff464e;
    border: 1px solid #ff464e;
    padding: 0 2px;
    margin-right: 4px;
}
</style>
