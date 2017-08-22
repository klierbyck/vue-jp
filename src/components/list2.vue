<template>
    <div class="nvzhuang">
        <div class="headerH head-height">
			<div>
				卷皮
			</div>
			<span></span>
		</div>
        <list :class="l?'head-fixed':''"></list>
        <div class="nvzhuang_nav2">
			<dl class="nvzhuang_nav2_list" v-for="(banner,index) in banner1" :key="index">
                 <dt v-for="(ban,ind) in banner.data.child" :key="ind"><img :src="ban.pic"/></dt> 
			</dl>
		</div>
		 <div class="home_show_list" v-for="(hitems,index) in show" :key="index">
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
					<dt><img v-lazy="litems.pic"/></dt>
					<dd class="home_show_list_dd">
						<p><span>{{litems.cp}}</span><i>{{litems.op}}</i></p>
						<p><span>{{litems.title}}</span></p>
					</dd>
				</dl>
			</div>
		</div> 
        <menus></menus>
    </div>
</template>

<script>
import Menus from './Menu';
import list from './list';
export default {
    data(){
        return {
            banner1: [],
			show : [],
			height:0,
			l:false
        }
    },
    components : {
        Menus,
        list
	},
	created(){
		window.addEventListener("scroll",this.scroll);
	},
    mounted(){
        let _this = this;
        fetch("../../static/json/nvzhuang1.json").then(function(res){
            return res.json()
        }).then(function(res){
            _this.banner1 = res.module_ads.multi_block;
            
        });
        fetch("../../static/json/nvzhuang.json").then(function(res){
            return res.json()
        }).then(function(res){
            _this.show = res.list;
		})
	},
	methods : {
		scroll : function(){
			if(this.$route.path == "/list2"){
				this.height = document.documentElement.scrollTop || document.body.scrollTop || window.scrollTop;
				if(this.height>document.querySelector(".head-height").offsetHeight){
					this.l = true;
				}else{
					this.l = false;
				}
			}
		}
	}
}
</script>

<style>

.nvzhuang{
    background: #eee;
}
.headerH{
		width: 100%;
		height: 0.44rem;
		position: relative;
		background: #fff;
	}
	.headerH>div{
		width: 80%;
		height: 0.44rem;
		text-align: center; 
		margin: 0 auto; 
        color : #f40;
        font: bold 0.24rem "微软雅黑";
        box-sizing:border-box;
        padding-top:0.05rem;
	}
	.headerH>span{
	position: absolute;
	right: 0.1rem;
	top: 0.1rem;
	width: 0.24rem;
	height: 0.24rem;
	display: block;
	background: url(../../static/imgs/list.png)no-repeat; 
	background-size:0.24rem 0.24rem;
	}
	.head-fixed{
		position: fixed;
		left:0;
		top:0;
		z-index:99;
	}
    .nvzhuang_nav2{
	background:#fff;
    position:relative;
    }
    .nvzhuang_nav2_list{
        display: flex;
        text-align: center;
    }
    .nvzhuang_nav2_list dt{
        line-height:0.63rem;
    }
    .nvzhuang_nav2_list dt img{
        width:100%;
        text-align: center;
        border-radius: 50%;
        vertical-align: middle;
    }
    .nvzhuang_nav2 dl:last-child::before{
        content:"";
        display: block;
        background: #eee;
        position:absolute;
        left:0;
        bottom:0.5rem;  
        height:0.06rem; 
        width:100%;     
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
</style>
