<template>
    <ul class="footer">
        <router-link tag="li" to="/">
          <img v-if="$route.name=='Home'" src="../../static/imgs/home.png">
          <img v-else src="../../static/imgs/home1.png">
          <p>今日上新</p>
        </router-link>
        <router-link tag="li" to="/cang">
          <img v-if="$route.name=='Cang'" src="../../static/imgs/cang.png">
          <img v-else src="../../static/imgs/cang1.png">
          <p>直发仓</p>
        </router-link>
        <router-link tag="li" to="/global">
          <img v-if="$route.name=='Global'" src="../../static/imgs/global.png">
          <img v-else src="../../static/imgs/global1.png">
          <p>全球购</p>
        </router-link>
        <router-link tag="li" to="/cart">
          <img v-if="$route.name=='Cart'" src="../../static/imgs/cart.png">
          <img v-else src="../../static/imgs/cart1.png">
          <p>购物车
            <span v-show="totalNum">{{totalNum}}</span>
          </p>
        </router-link>
        <router-link tag="li" to="/mine">
          <img v-if="$route.name=='Mine'" src="../../static/imgs/mine.png">
          <img v-else src="../../static/imgs/mine1.png">
          <p>我的卷皮</p>
        </router-link>
  	</ul>
</template>

<script>
  export default {
    computed: {
      totalNum() {
        return this.$store.state.totalNum;
      }
    }
  }

</script>

<style>

/* 底部菜单栏 */
.footer{
  width: 100%;
  height: 49px;
  background-color: #fff;
  border-top: 1px solid #ebebeb;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0;
}
.footer li{
  width: 20%;
  display: inline-block;
  padding-top: 4px;
  position: relative;
}
.footer li p{
  padding-top: 4px;
  font-size: 12px;
  line-height: 12px;
  width: 100%;
  text-align: center;
  color: #333;
}
.footer li:nth-of-type(4) span{
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
.footer li img{
  width: 26px;
  height: 26px;
  margin: 0 auto;
  display: block;
  border: 0;
}
</style>
