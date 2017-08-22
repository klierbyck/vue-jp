<template>
    <ul class="cart-bar">
        <router-link tag="li" to="/">
          <img src="../../static/imgs/home1.png">
          <p>主页</p>
        </router-link>
        <router-link tag="li" to="/cart">
          <img src="../../static/imgs/cart1.png">
          <p>
            购物车
          </p>
          <span v-show="totalNum">{{totalNum}}</span>    
        </router-link>
        <li>
          <img src="../../static/imgs/fav.png">
          <router-link to="/Shou" tag="p">我的收藏</router-link>
        </li>
        <li>
          <p>￥{{item.tuan_price || item.cprice || item.cp.split("￥")[0].slice(1,item.cp.split("￥")[0].length)}}</p>
          <p @click="add">加入购物车</p>
        </li>
  	</ul>
</template>

<script>
  export default {
    props:['data','dprice','tprice','tpriceH'],
    data(){
      return {
        item:this.data
      }
    },
    methods: {
      add() {
        this.$store.commit("add",this.item);
        this.$store.commit("getCounts");
        this.$store.commit("getMoney");
        this.$store.commit("getCartsLength");
      },
      reduce(){
        this.$store.commit("reduce",this.item);
        this.$store.commit("getCounts");
        this.$store.commit("getMoney");
        this.$store.commit("getCartsLength");
      }
    },
    computed: {
      totalNum() {
        return this.$store.state.totalNum;
      }
    }
  }
</script>

<style>

/* 底部菜单栏 */
.cart-bar{
  width: 100%;
  height: 49px;
  background-color: #fff;
  border-top: 1px solid #ff464e;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0;
}
.cart-bar li{
  height:100%;
  display: inline-block;
  padding-top: 4px;
}
.cart-bar li:nth-of-type(1){
  width: 18%;
  border-bottom:none;
  padding-bottom:none;
}
.cart-bar li:nth-of-type(2){
  width: 18%;
  position: relative;
}
.cart-bar li:nth-of-type(2) span{
  position: absolute;
  right:10px;
  top:0;
  display: block;
  width:20px;
  height:20px;
  line-height: 20px;
  text-align: center;
  font-size:12px;
  color:#fff;
  border-radius: 50%;
  background: #ff464e;
}
.cart-bar li:nth-of-type(3){
  width: 24%;
}
.cart-bar li:nth-of-type(3) p:nth-of-type(1){
  padding:4px 0;
}
.cart-bar li:nth-of-type(4){
  height:100%; 
  width: 40%;
  background-color: #ff464e;
  vertical-align: top;
}
.cart-bar li p{
  padding-top: 4px;
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  text-align: center;
  color: #333;
}
 .cart-bar li:nth-of-type(4) p{
   color:#fff;
   font-size:14px;
   padding:4px 0;
} 
.cart-bar li img{
  width: 24px;
  height: 24px;
  margin: 0 auto;
  display: block;
  border: 0;
}
</style>
