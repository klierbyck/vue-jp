<template>
	<div class="sub">
		<div class="ilsHeader">
			 {{aaa}}{{num()}}
			<div>{{this.nameH}}</div>
			<a href="javascript:history.go(-1)"></a>
			<span></span>
			<span>...</span>
		</div>
		<div>
			<ul class="ilsNav" :class="{'ilsNav2':cla}">
				<li v-for="(i,ind) in ilsNav" :key="ind" @click="fun3(i)">{{i}}</li>
			</ul>
		</div>
		<div class="ilsCom">
			<router-link tag="div" class="ilsComDiv" v-for="(i,index) in ilsH" :key="index" :to="{path:'/detail',query:{data:i}}" >
				<div class="ilsComImg">
					<img v-lazy="i.pic_url"/>
				</div>
				<p><span>￥{{i.tuan_price}}</span><span>￥{{i.cprice}}</span></p>
				<p>{{i.title}}</p>
			</router-link>
		</div>
	</div>
</template>
<script>
import jsonp from 'jsonp'
export default {
	data(){
		return{
			ilsNav:["推荐","价格","销量","上新","筛选"],
			ilsH:[],
			downH:10,
			nameH:"",
			cla:false
		}
	},
	methods:{
		 num(){
			 this.nameH=this.$route.query.det;
			 },
		fun3(ind){
			if(ind=="推荐"){			
					for(let i=1;i<this.ilsH.length;i++){
						for(let j=0;j<this.ilsH.length-i;j++){					
							if(this.ilsH[j].shop_id<this.ilsH[j+1].shop_id){
								let n2=this.ilsH[j];
								this.ilsH[j]=this.ilsH[j+1];
								this.ilsH[j+1]=n2;
							}
						}
				}
				this.ilsH.reverse();
			}else if(ind=="价格"){			
				for(let i=1;i<this.ilsH.length;i++){
					for(let j=0;j<this.ilsH.length-i;j++){					
						if(this.ilsH[j].tuan_price<this.ilsH[j+1].tuan_price){
							let n2=this.ilsH[j];
							this.ilsH[j]=this.ilsH[j+1];
							this.ilsH[j+1]=n2;
						}
					}
				}
				this.ilsH.reverse();
			}
		}
	 }, 
	computed:{
		aaa:function(){	
			let strP="";
			if(this.$route.query.det=="美妆个护"){
				strP="https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_51_18_5_128&machining=showshopgoods&page=1&rows="+this.downH+"&callback=gsort";
			}else if(this.$route.query.det=="进口美英"){
				strP="https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%222%22%5D%2C%22source_type%22%3A%5B%223%22%5D%2C%22fcate%22%3A%22399%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_51_18_5_128&machining=danpin&page=1&rows="+this.downH+"&dtype=JSONP&price_range=&cat_threeids=&callback=gsort"
			}else if(this.$route.query.det=="全球美食"){
				strP="https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%222%22%5D%2C%22source_type%22%3A%5B%223%22%5D%2C%22fcate%22%3A%22402%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c3_l1_51_18_5_128&machining=danpin&page=2&rows="+this.downH+"&dtype=JSONP&price_range=&cat_threeids=&callback=gsort"
			}else if(this.$route.query.det=="生活百货"){
				strP="https://shop.juanpi.com/gsort?key=401&type=6&zhouyi_ids=p8_c3_l1_51_18_5_128&machining=hotcoupon&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&cm=1&cm_cate=401&callback=gsort"
			}
			let _this=this;
			jsonp(strP,null,function(err,data){
				_this.ilsH=data.list;
			});	
		}
	},
	mounted(){
		let _this=this;
		document.body.onscroll=function(){
				if(document.body.scrollTop>=44){
					_this.cla=true;
				}else{
					_this.cla=false;
				}
				if(document.body.scrollTop==document.body.offsetHeight-38-32){
					_this.downH+=10;
				}else if(document.body.scrollTop==1849-32){
					_this.downH+=10;
				}else if(document.body.scrollTop==3072-32){
					_this.downH+=10;
				}else if(document.body.scrollTop==4289-32){
					_this.downH+=10;
				}else if(document.body.scrollTop==5509-32){
					_this.downH+=10;
				}
		};
	 },
	 deforUpdate(){
		 
	 }
	
}
</script>

<style>
.sub{
	background: #fff;
}
 .ilsHeader{
	width: 100%;
	height: 0.44rem;
	position: relative;
}
.ilsHeader>div{
	width: 75%;
	height: 0.44rem;
	line-height: 0.44rem;
	text-align: center;
	margin: 0 auto;
} 
.ilsHeader>a:first-of-type::after{
	content:" ";
	height: 0.1rem;
	width: 0.1rem;
	border-top:0.02rem solid;
	border-left:0.02rem solid;
	display: inline-block;
	transform:rotate(-45deg) ;
	position: absolute;
	top: 35%;
	left: 0.2rem;
}
.ilsHeader>span:first-of-type{
	width: 0.3rem;
	height: 0.3rem;
	display:inline-block;
	background:url(../../static/imgs/search.png)no-repeat;
	background-size:0.3rem 0.3rem;
	position: absolute;
	right: 0.5rem;
	top: 0.05rem;
}
.ilsHeader>span:last-of-type{
	width: 10%;
	height: 0.44rem;
	display: inline-block;
	text-align: left;
	line-height: 0.33rem;
	font-size:0.25rem; 
	font-weight: bold;
	position: absolute;
	right: 0;
	top: 0;
}
.ilsNav{
	width: 100%;
	height: 0.30rem;
	font-size:0.14rem;
	display: flex;
	line-height: 0.3rem;
	border-bottom:0.01rem solid #efefef; 
	border-top:0.01rem solid #efefef;

}
.ilsNav2{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 99;
	background: #fff;
}
.ilsNav>li{
	width: 20%;
	height: 0.28rem;
	text-align: center;
}
.ilsCom{
	width: 100%;
	display: flex;
	flex-wrap:wrap; 
}
.ilsCom>div{
	width: 50%;
	height: 2.44rem;
	display:inline-block;
}
.ilsComImg{
	width: 1.8rem;
	height: 1.8rem;
}
.ilsComImg>img{
	width: 1.8rem;
	height: 1.8rem;
	display:inline-block;
}
.ilsComDiv>p{
	width: 90%;
	height: 0.24rem;
	margin: 0 auto;
	line-height:0.24rem; 
}
.ilsComDiv>p:first-of-type>span:first-child{
	color: #60e;
}
.ilsComDiv>p:first-of-type>span:last-child{
	font-size:0.12rem; 
	color: #bbb;
	text-decoration: line-through;
}
.ilsComDiv>p:last-of-type{
	font-size:0.12rem; 
}
</style>