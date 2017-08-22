<template>
	<div id="home_index">
		<ul class="home_search head-height" :class="s?'isSearch':''">
			<li class="home_search_input"><input type="text" name="" placeholder="搜索商品" @click="ju" /></li>
			<li class="home_search_list"><router-link to="category"><span></span></router-link></li>
		</ul>
		<list :class="l?'head-fixed':''"></list>
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(swp,index) in home_banner[1]" :key="index">
				<img :src="swp.pic"/>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		<div class="home_nav2">
			<dl class="home_nav2_list" v-for="(banner,index) in home_banner[0]" :key="index">
				<dt><img :src="banner.pic"/></dt>
				<dd>{{banner.words}}</dd>
			</dl>
		</div>
		<dl  class="home_show_three">
			<dt><img :src="home_banner2.pic"/></dt>
			<dd>
				<img :src="home_banner3.pic"/>
				<img :src="home_banner4.pic"/>
			</dd>
		</dl>
		<div class="home_show_title">
			<span>-每天早10点-晚10点上新-</span>
		</div>
		<div class="home_show_list_all">
			<div class="home_show_list" v-for="(hitems,index) in home_items.list" :key="index">
				<ul class="home_show_list_top">
					<li><img :src="hitems.logo_url"/></li>
					<li>
						<span>{{hitems.title}}</span>
						<span>{{hitems.coupon_tips}}</span>
					</li>
					<li><span>{{hitems.mkt_info}}</span></li>
				</ul>
				<div class="home_show_list_div">
					<dl class="home_show_list_dl"  v-for="(litems,index) in hitems.sub_data" :key="index">
						<dt><router-link :to="{path:'/detail',query:{data : litems}}"><img v-lazy="litems.pic"/></router-link></dt>
						<dd class="home_show_list_dd">
							<p><span>{{litems.cp}}</span><i>{{litems.op}}</i></p>
							<p><span>{{litems.title}}</span></p>
						</dd>
					</dl>
				</div>
			</div>
			<home-la class="home_la" v-if="la"></home-la>
		</div>
		<div class="home_top" v-show="height>600" @click="[up(),height=!height]"></div>
		<menus></menus>
	</div>
</template>

<script>
import list from '../components/list'
import Menus from '../components/Menu';
import homeLa from '../components/homeLa'

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
	data(){
		return {
			notNextTick: true,
			swiperOption:{
				autoplay: 1000,
				loop:true,
				grabCursor : true,
				setWrapperSize :true,
				autoHeight: true,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				mousewheelControl : true,
				observer : true,
				observeParents:true,
				autoplayDisableOnInteraction : false,
			},
			height : 0,
			height2 : 0,
			test : 0,
			home_items : [],
			home_banner :[],
			home_banner2 :[],
			home_banner3 :[],
			home_banner4 :[],
			l: false,
			s: false,
			la: false,
			c : 0,
			ar : []
		}
	},	
	components:{
		list,
		Menus,
		swiper,
		swiperSlide,
		homeLa
	},
	created(){
		let _this = this;
		fetch("../../static/json/home_items.json").then(function(res){
			return res.json();
		}).then(function(res){
			_this.home_items = res;
		})
		fetch("../../static/json/home_banner.json").then(function(res){
			return res.json();
		}).then(function(res){
			_this.home_banner = [
				res.module_ads.multi_block[0].data[0].child,
				res.banner_ads
				];
			_this.home_banner2 = res.module_ads.multi_block[1].data[0].child[0],
			_this.home_banner3 = res.module_ads.multi_block[1].data[0].child[1],
			_this.home_banner4 = res.module_ads.multi_block[1].data[0].child[2]	
		});
		// this.comHei();
	},
	computed: {
		swiper(){
			return this.$refs.mySwiper.swiper;
			this.swiper.slideTo(3,3000, false);
		}
	},
	mounted(){
		window.addEventListener("scroll",this.com);
		window.addEventListener("scroll",this.comHei);
	},
	methods : {
		up(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
		com(){
			if(this.$route.path == "/list1" || this.$route.path == "/"){
				this.height = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
				if(this.height>document.querySelector(".head-height").offsetHeight){
						this.l = true;
					}else{
						this.l = false;
					}
				}
		},
		comHei(){
			let _this = this;
			this.c>10 ? this.c=0 : this.c += 1;
			if(_this.c % 9==0){
				if(this.$route.path == "/list1" || this.$route.path == "/"){
					this.height2 = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
					if(document.querySelectorAll(".home_show_list_div")[_this.c].offsetTop-this.height2<document.body.clientHeight){
						setTimeout(function(){
							_this.la = true;
						},1000)
					}
				}
			}
			
		},
		ju(){
			this.$router.push({path:'soso'});
		}
	}
	
}
</script>

<style>
 @import "../../static/swiper-3.4.2.min.css"; 

	#home_index{
		background: #eee;
		margin-bottom:1.2rem;
		position:relative;
	}
	.home_search{
		height:0.54rem; 
		width:100%;
		border-bottom:1px solid #ddd;
		display:flex;
		background: #fff;
	}
	.home_search_input{
		width:85%;
		line-height:0.54rem;
		box-sizing:border-box;
		padding-left:0.2rem;
	}
	.home_search_input input {
		width:100%;
		background:#f2f2f2 url(../../static/imgs/search.png) no-repeat 0.05rem 0.05rem;
		background-size:0.2rem 0.2rem;
		padding : 0.08rem 0 0.08rem 0.3rem;
		border:0;
		border-radius: 0.05rem;
		outline:none;
		box-sizing: border-box;
	}
	.home_search_list{
		width:15%;
		line-height:0.54rem;
		padding-left:0.2rem;
		box-sizing: border-box;
	}
	.home_search_list span{
		display: inline-block;
		padding:0.15rem 0.15rem;
		background: url(../../static/imgs/list.png) no-repeat;
		background-size:0.3rem 0.3rem;
		vertical-align: middle;
	}
	.swiper-slide img{
		 width:100%; 
		height:1.5rem;
	}
	.head-fixed {
		position:fixed;
		left:0;
		top:0;
		z-index:99;
	}	
.home_nav2{
	display: flex;
	justify-content: space-around;
	/* height:0.9rem; */
	background:#fff;
}
.home_nav2_list{
	display: flex;
	flex-direction: column;
	width:25%;
	text-align: center;
}
.home_nav2_list dt{
	height:70%;
	line-height:0.63rem;
}
.home_nav2_list dt img{
	width:50%;
	text-align: center;
	border-radius: 50%;
	vertical-align: middle;
}
.home_nav2_list dd{
	height:30%;
	font-size:0.14rem;
	line-height:0.27rem;
}
.home_show_three{
	display: flex;
	height:2.28rem;
	margin-top:0.06rem;
}
.home_show_three dt{
	width:50%;
}
.home_show_three dt img{
	width:100%;
}
.home_show_three dd{
	width:50%;
	display: flex;
	flex-direction: column;
}
.home_show_three dd img{
	width:100%;
	height:50%;
}
.home_show_title {
	height:0.5rem;
	line-height: 0.5rem;
	text-align:center;
	background: #fff;
	font-size:0.14rem;
}
.home_show_list{
	background: #fff;
	box-sizing: border-box;
	padding:0 0.1rem;
	margin-bottom:0.1rem;
}
.home_show_list_top{
	height:0.56rem;
	display: flex;
}
.home_show_list_top li:nth-of-type(1){
	width:10%;
	line-height:0.56rem;
}
.home_show_list_top li:nth-of-type(1) img{
	width:100%;
	 border:1px solid #ddd; 
	padding:0.1rem 0;
	vertical-align: middle;
}
.home_show_list_top li:nth-of-type(2){
	width:60%;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding:0.06rem 0 0 0.1rem;
}
.home_show_list_top li:nth-of-type(2) span:nth-of-type(1){
	font-size:0.15rem;
	color:#666;
}
.home_show_list_top li:nth-of-type(2) span:nth-of-type(2){
	font-size:0.12rem;
	color:#999;
}
.home_show_list_top li:nth-of-type(3){
	width:30%;
	font-size:0.13rem;
	line-height:0.56rem;
	text-align: right;
	color:#999;
}
.home_show_list_dl{
	width:50%;
	display: flex;
	flex-direction: column;
}
.home_show_list_dl:nth-of-type(1){
	border-right:1px solid #eee;
}
.home_show_list_dl dt{
	/* box-sizing: border-box; */
	padding:0 0.1rem;
}
.home_show_list_dl dt img{
	width:100%;
}
.home_show_list_dd{
	display: flex;
	flex-direction: column;
	padding:0 0.1rem;
}
.home_show_list_dd p:nth-of-type(1) span:nth-of-type(1){
	color:red;
	font-size:0.16rem;
}
.home_show_list_dd p:nth-of-type(1) i{
	color:#999;
	font-size:0.12rem;
	text-decoration: line-through;
	padding:0 0.1rem;
}
.home_show_list_dd p:nth-of-type(2){
	font-size:0.13rem;
	color:#666;
}
.home_show_list_div{
	display: flex;
}
.home_top{
	width:0.45rem;
	height:0.45rem;
	border-radius: 50%;
	position:fixed;
	bottom:0.6rem;
	right:0.2rem;
	z-index:10;
	font-size:0.25rem;
	line-height:0.45rem;
	text-align:center;
	 border:1px solid #aaa; 
	background:#fff url("../../static/imgs/up.png") no-repeat center;
	background-size: 0.5rem 0.5rem;
}
.home_show_list_div img[lazy=loading]{
	opacity:0;
}
.home_show_list_div img[lazy=loaded]{
	animation: opa 1s;
}
@keyframes opa {
	0% {
		opacity:0
	}
	100%{
		opacity:1
	}
}
.home_la{
	min-height: 0.1rem;
}
</style>