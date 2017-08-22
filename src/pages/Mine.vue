<template>
	<div>
		<Menus></Menus>
		<div class="main">
			<div class="app">
				<div class="useCenter">
					<header id="head">
						<div class="useTop">
							<span>个人中心</span>
						</div>
						<div class="use-login">
							<router-link to="/Denglu">登录</router-link>
							<i class="line"></i>
							<router-link to="/Denglu">注册</router-link>
						</div>
					</header>
				</div>
				<div class="userBox">
					<div class="uesr-item">
						<router-link to="/Ding" tag="span">我的订单</router-link>
						<router-link to="/Ding" tag="span">全部订单&gt;</router-link>
						<!-- <span>我的订单</span> -->
						<!-- <span>全部订单&gt;</span> -->
					</div>
					<div class="userItems">
						<ul>
							<li>
								<div><img src="../../static/imgs/3.png"/></div>
								<span>代付款</span>
							</li>
							<li>
								<div><img src="../../static/imgs/4.png"/></div>
								<span>代成团</span>
							</li>
							<li>
								<div><img src="../../static/imgs/5.png"/></div>
								<span>代收货</span>
							</li>
							<li>
								<div><img src="../../static/imgs/10.png"/></div>
								<span>退款/售后</span>
							</li>
						</ul>
					</div>
					<div class="userItems1">
						<ul>
							<router-link to="/Shou" tag="li">我的收藏</router-link>
							<li>我的优惠券</li>
							<li>我的拼团</li>				
						</ul>
					</div>
					<div class="userItems2">
						<ul>
							<li>客服中心</li>
							<li>关于卷皮</li>
						</ul>
					</div>
					<div class="foot-nav">
						<ul>
							<li><a href="#">返回首页</a></li>
							<li><a href="javascript:void(0)">电脑版</a></li>
							<li><a href="javascript:void(0)">客服端</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Menus from '../components/Menu'

export default {
	components : {
		Menus
	},
	data(){
		return {
			
		}
	}
}
</script>

<style>
	 .main{
		background: #f4f4f8;
    	margin: 0 auto;
    	width: 100%;
		/*max-width: 16rem;
    	min-width: 6.82667rem;*/
    	position: relative;
	 }
	 .app{
		 position: absolute;
		 margin: 0 auto;
		 background: #f4f4f8;
		 width: 100%;
	 }
	 .useCenter #head{
		 width:100%;
		 height: 1.44rem;
		 background: #ff464e;
	 }
	 .useTop{
		 height: .44rem;
		 line-height: .44rem;
 		 text-align: center;
	 }
	 #head>.useTop>span{
		 text-align: center;
		 font-size: 16px;
		 color:white;
	}
	.use-login{
		height: 1rem;
		position: relative;
		font-size: 0;
		text-align: center;
		line-height: 1rem;
	}
	.use-login a{
		display: inline-block;
		color:#ffffff;
		font-size: 20px;

	}
	.use-login a:first-child{
		padding-right: .96rem;
	}
	.line{
		height: .25rem;
		position: absolute;
		top:50%;
		left:50%;
		width: .02rem;
		background: #fff;
		transform: translate(-50%,-50%);
	}
	.userBox>.uesr-item{
		display: inline-block;
		height: .48rem;
		line-height: .48rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFF;
	}
	.userBox .uesr-item span{
		margin: .12rem
	}
	.userItems{
		background: #fff;
		padding-top: .15rem;
		padding-bottom: .12rem;
	}
	.userItems>ul{
		display: flex;
		justify-content: space-around;
	}
	.userItems>ul>li img{
		width: .3rem;
		height: .3rem;
	}
	.userItems>ul>li div{
		margin:  0 .1rem;
	}
	.userItems1{
		margin-top: .1rem;
		background: #fff;
	}
	.userItems1 ul li{
		height: .48rem;
		line-height: .48rem;
		margin-left: .15rem;
		border-bottom: 1px solid #ccc;
	}
	.userItems1 ul li:last-child{
		border-bottom: none;
	}
	.userItems2{
		margin-top: .1rem;
		background: #fff;
	}
	.userItems2 ul li{
		height: .48rem;
		line-height: .48rem;
		margin-left: .15rem;
	}
	.foot-nav ul{
		display: flex;
		justify-content: space-around;
		padding-top: .1rem;
		background-color: #fff;

	}
	.foot-nav{
		margin-top: .05rem;
	}
</style>