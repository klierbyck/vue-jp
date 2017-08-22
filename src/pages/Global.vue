<template>
	<div>
		<div class="headerHH">
			<div>
				全球购
			</div>
			<router-link tag="span" to="/category"></router-link>
		</div>
		<div class="MJQSimg">
			<router-link tag="img" v-lazy="imgH[0]" :to="{path:'Ils',query:{det :'美妆个护'}}"></router-link>
			<router-link tag="img" v-lazy="imgH[1]" :to="{path:'Ils',query:{det :'进口美英'}}"></router-link>
			<router-link tag="img" v-lazy="imgH[2]" :to="{path:'Ils',query:{det :'全球美食'}}"></router-link>
			<router-link tag="img" v-lazy="imgH[3]" :to="{path:'Ils',query:{det :'生活百货'}}"></router-link>
		</div>
	 {{bbb}}
	 	<div v-for="(n,index) in listH" :key="index">
			<img v-lazy="n.shop_cover" v-if="n.shop_cover" class="GlobalImgH"/>
		
			<div class="AnvH" v-if="n.shop_cover" >
				<router-link tag="div"
				 class="AnvLiH" 
				 v-for="(i,index) in n.shop_goods" 
				 :key="index" 
				 :to="{path:'/detail',query:{data:i}}">
					<img v-lazy="i.pic_url"/>
					<p><span>￥{{i.cprice}}</span><span>￥{{i.oprice}}</span></p>
					<div>{{i.title}}</div>
				</router-link>
			</div>
		</div>
		<menus></menus>
	</div>
</template>
<script>
import Menus from '../components/Menu';
import jsonp from 'jsonp'
export default {
	data(){
		return {
			imgH:[],
			listH:[],
			downH2:10
		}	
	},
	methods:{
		fun(name){
			this.$router.push({name: 'Ils',query:{idH:name}})
		}
	 },
	 computed:{
		bbb(){
			let _this=this;
			let str="https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_51_18_5_128&machining=showshopgoods&page=1&rows="+this.downH2+"&callback=gsort2";
			jsonp(str,null,function(err,data){
				_this.listH=data.list;
			});
		}
			

	 },
	 mounted(){
		 let _this=this;
		fetch("../../static/json/globalB.json").then(res => res.json()).then(function(res){
			_this.imgH=[res.module_ads.multi_block[0].data[0].child[0].pic,
					res.module_ads.multi_block[0].data[0].child[1].pic,
					res.module_ads.multi_block[1].data[0].child[0].pic,
					res.module_ads.multi_block[1].data[0].child[1].pic
			];
		});
		document.body.onscroll=function(){
				if(document.body.scrollTop==document.body.offsetHeight-38){
					_this.downH2+=10;
				}else if(document.body.scrollTop==3085){
					_this.downH2+=10;
				}else if(document.body.scrollTop==5555){
					_this.downH2+=10;
				}else if(document.body.scrollTop==8025){
					_this.downH2+=10;
				}else if(document.body.scrollTop==10847){
					_this.downH2+=10;
				}
		};
	
	 },
	components:{
		Menus
	}
}
</script>

<style>
	/* 头部 */
	.headerHH{
		width: 100%;
		height: 0.44rem;
		position: relative;
		background: #fff;
	}
	.headerHH>div{
		width: 80%;
		height: 0.44rem;
		line-height: 0.44rem;
		text-align: center;
		margin: 0 auto;
		font-size:0.18rem;
	}
	.headerHH>span{
	position: absolute;
	right: 0.1rem;
	top: 0.1rem;
	width: 0.24rem;
	height: 0.24rem;
	display: block;
	background: url(../../static/imgs/list.png)no-repeat; 
	background-size:0.24rem 0.24rem;
	}
	/* 四张小图 */
	.MJQSimg{
		width: 100%;
		height: 1.80rem;
		display: flex;
		flex-wrap:wrap; 
	}
	.MJQSimg>img{
		display: block;
		width: 49%;
		height: 0.90rem;
		border-top:0.01rem solid #eee;
		border-left: 0.01rem solid #eee; 
	}
	.MJQSimg>img:nth-child(1),.MJQSimg>img:nth-child(3){
		border-left:none;
	}
	/* 主要列表的大图 */
	.GlobalImgH{
		width: 100%;
		height: 1.82815rem;
		display: block; 
	}
	/* 主要列表的div */
	.AnvH{
		width: 100%;
		height: 1.7rem;
		overflow: scroll;
		display: flex;
		justify-content:space-between;
		align-items: center;
		background: #fff;
	}
	.AnvH::-webkit-scrollbar{
       display: none;
   }
	.AnvLiH{
		width: 0.9rem;
		height: 1.5rem;
	}
	/* 图片 */
	.AnvLiH>img{
		width: 0.9rem;
		height: 0.9rem;
	}
	/* 价格 */
	.AnvLiH>p{
		width: 100%;
		height: 0.1rem;
		line-height: 0.1rem;
		text-align: center;
	}
	.AnvLiH>p>span:first-child{
		font-size: 0.12rem;
		color: #60e;
	}
	.AnvLiH>p>span:last-child{
		font-size: 0.12rem;
		color: #bbb;
		text-decoration: line-through;
	}
	/* 商品名称 */
	.AnvLiH>div{
		width: 100%;
		height: 0.28rem;
		margin-top:0.1rem; 
		line-height: 0.14rem;
		font-size:0.13rem; 
		color: #666;
		text-align: center;

	}
</style>