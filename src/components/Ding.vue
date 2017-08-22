<template>
	<div>
		<div class="ding">
			<span>我的订单</span>
			<a href="javascript:history.go(-1)">
				<</a>
		</div>
		<div>
			<div class="tab">
				<table>
					<tr v-for="(item,index) in ding" :key="index">
						<td>{{index+1}}</td>
						<td>
							<img :src="(item.pic_url || item.pic)">
						</td>
						<td>
							<p>{{item.title}}</p>
							<p>{{item.tuan_price||item.cprice||zdata}} x {{item.counts}}</p>
							<p>商品总价：￥{{((item.tuan_price||item.cprice||zdata)*item.counts).toFixed(2)}}</p>
						</td>
					</tr>
				</table>
				<div class="total" v-if="money">
					<span>实付款:{{money | filter2}}</span>
				</div>
				<div class="del" v-if="money">
					<span @click="delDing">删除订单</span>
					<span>去支付</span>
				</div>
			</div>
		</div>
	</div>
</template> 
<script>
export default {
	data() {
		return {
			ding: [],
			money: 0
		}
	},
	methods: {
		showDing: function () {
			this.$store.commit("showDing");
			this.ding = this.$store.state.dingStor;
			console.log(this.ding);
			this.money = 0;
			for (let i in this.ding) {
				this.money += this.ding[i].tuan_price * this.ding[i].counts;
			}
		},
		delDing: function () {
			this.$store.commit("delDing");
			this.showDing();
		}
	},
	mounted() {
		this.showDing();
	},
	filters: {
		filter2: function (val) {
			return val.toFixed(2);
		}
	}
}
</script>
<style>
.ding {
	height: 44px;
	border-bottom: 1px solid #ff464e;
}

.ding span:nth-of-type(1) {
	position: absolute;
	left: 50%;
	top: 0;
	bottom: 0;
	transform: translate(-50%, 0);
	line-height: 44px;
	font-size: 18px;
	width: 303px;
	text-align: center;
	height: 44px;
}

.ding a {
	position: absolute;
	left: 0;
	top: 0;
	width: 44px;
	height: 44px;
	line-height: 44px;
	text-align: center;
	font-size: 24px;
	font-family: 'iconfont';
	font-style: normal;
}

.tab {
	width: 100%;
}

.tab table {
	width: 100%;
	border-collapse: collapse;
}

.tab tr {
	width: 100%;
	height: 0.93rem;
	background: #fff;
}

.tab tr td:nth-of-type(1) {
	width: 15.5%;
	text-align: center;
}

.tab tr img {
	width: 0.64rem;
	height: 0.64rem;
	display: block;
	margin: 0 auto;
}

.total {
	background: #fff;
}

.total span {
	display: block;
	line-height: 0.64rem;
	text-align: right;
	margin-right: 48px;
}

.del {
	width: 100%;
	height: 50px;
	line-height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	text-align: right;
}

.del span {
	display: inline-block;
	margin-right: 24px;
	height: 28px;
	line-height: 28px;
	padding: 0 8px;
	border: 1px solid #666;
	border-radius: 50%
}
</style>

	<!-- <div id="Ding">
		<router-link tag="h1" to="/mine">
			<img src="../../static/imgs/left.png">
		</router-link>
		<h1>这是更多</h1>
		<input type="text" ref="searchText" id="searchText" @keyup="keyUpSearch" placeholder="请输入地址"/>    
		<div class="address_items" id="address_result" v-if="searchData.length > 0">
			<div class="address_item" v-for="(item,index) in searchData" :key="index">
				<div class="title">{{ item.name }}</div>
				<div class="description">{{ item.pname }}{{ item.cityname }}{{ item.address }}</div>
			</div>
		</div>
		<el-amap vid="amapDemo" :zoom="zoom" :center="center"></el-amap>
	</div>-->

/* export default {
	data(){
		return {
			searchData:[],
			zoom:11,
   			 center: [116.397428, 39.90923]   
		}
	},
	methods: {
		keyUpSearch() {
			// var _this = this;
			// var txt = this.$refs.searchText.value; 
			AMap.service(["AMap.PlaceSearch","AMap.Autocomplete"], function () {
			// 	var placeSearch = new AMap.PlaceSearch({
			// 		//构造地点查询类
			// 		pageSize: 6, pageIndex: 0,
			// 		//city: "成都",
			// 		//城市 
			// 		// cityLimit: 'true'
			// 		// panel: 'temp'
			// 		//搜索结果的展示面板对元素id，不知道为什么一定要有该参数，最终获取的结果才更完整，参数更多跟完整，所以我在页面随便写了一个<div id="temp" style="display:none"></div>
			// 	});
			// 	//关键字查询
			// 	placeSearch.search(txt, function (status, result) {
			// 		if (status == 'complete' && result.info == 'OK') {
			// 			//这里可以console.log(result)，查看所有返回的参数，遍历展示这些基本的，我就不赘述
			// 			console.log(result);
			// 			_this.searchData = result.poiList.pois;
			// 		}
			// 	});
				var autoOptions = {
					city: "", //城市，默认全国
					input:"searchText"//使用联想输入的input的id
				};
				new AMap.Autocomplete(autoOptions);
			})
		}
	}
} */

	
