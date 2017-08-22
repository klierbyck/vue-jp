<template>
  <div>
    <menus></menus>
    <div class="fixtop">
      <span class="sh">购物车</span>
    </div>
    <div class="pic" v-if="!isEmpty">
      <img src="../../static/imgs/car.png">
      <p>看到喜欢的就带回家吧</p>
      <router-link to="Global">今日推荐</router-link>
    </div>
    <div class="buy-products">
      <table>
        <tr v-for="(item,index) in cartData" :key="index">
          <td class="select" @click="select(item.goods_id)">
            <span :class="{'is-select':item.isSelect}">✔</span>
          </td>
          <td :style="{'backgroundImage': 'url('+item.pic_url+')'}"></td>
          <td>
            <p>{{item.title}}</p>
            <p>&yen;{{item.tuan_price || item.cprice || item.cp.split("￥")[0].slice(1,item.cp.split("￥")[0].length)}}</p>
            <div class="add-remove">
              <div class="remove" @click="reduce(item)">
                <span></span>
              </div>
              <span class="number">{{item.counts}}</span>
              <div class="add" @click="add(item)">
                <span></span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="all-ready" v-if="isEmpty">
      <p class="select" @click="selectAll">
        <span :class="{'is-select':isAll}">✔</span> 全选
      </p>
      共&nbsp;:&nbsp;
      <span>{{totalMoney.toFixed(2)}}元</span>
      <div @click="getDing">选好了</div>
      <div class="zhe" v-if="!totalMoney">选好了</div>
    </div>
  </div>
</template>

<script>
import Menus from '../components/Menu'
export default {
  data() {
    return {
      cartData: this.$store.state.carts
    }
  },
  methods: {
    //增加商品
    add(item) {
      this.$store.commit("add", item);
      this.$store.commit("getCounts");
      this.$store.commit("getMoney");
      this.$store.commit("getCartsLength");
      console.log(item)
    },
    //减少商品
    reduce(item) {
      this.$store.commit("reduce", item);
      this.$store.commit("getCounts");
      this.$store.commit("getMoney");
      this.$store.commit("getCartsLength");
    },
    //单选切换
    select(id) {
      this.$store.commit("getSelect", id);
      this.$store.commit("getCounts");
      this.$store.commit("getMoney");
    },
    //全选切换
    selectAll() {
      this.$store.commit("getSelectAll");
      this.$store.commit("getCounts");
      this.$store.commit("getMoney");
    },
    //获取订单
    getDing() {
      this.$router.push({name:"Ding"});
      this.$store.commit("getDing")
    }
  },
  computed: {
    //商品总数
    totalNum() {
      return this.$store.state.totalNum;
      console.log(cartData);
    },
    //商品总价
    totalMoney() {
      return this.$store.state.totalMoney;
    },
    //是否全选
    isAll() {
      return this.$store.state.selectAll;
    },
    //购物车是否为空
    isEmpty() {
      return this.$store.state.cartsLength;
    }
  },
  components: {
    Menus
  }
}

</script>

<style>
.fixtop {
  height: .44rem;
  width: 100%;
  background: #fff;
  line-height: .44rem;
  text-align: center;
  border-bottom: 1px solid #ff464e;
}

.sh {
  display: inline-block;
  height: .44rem;
  line-height: .44rem;
  font-size: 18px;
  color: #333;
}

.pic img {
  width: 1.4rem;
  height: auto;
}

.pic {
  margin-left: 1.2rem;
  position: absolute;
  margin-top: 1rem;
}

.pic p {
  font-size: 16px;
  color: #333;
  margin-bottom: .59733rem;
}

.pic a {
  display: inline-block;
  width: 1.38rem;
  height: .4rem;
  line-height: .4rem;
  font-size: 15px;
  color: #ff464e;
  border: 1px solid currentColor;
  text-align: center;
}

.buy-products {
  width: 100%;
}

.buy-products table {
  width: 100%;
  border-collapse: collapse;
}

.buy-products tr {
  width: 100%;
  height: 0.93rem;
  border-bottom: 1px solid #ff464e;
  background: #fff;
}

.buy-products tr td:nth-of-type(1) {
  width: 15.5%;
  text-align: center;
}

.buy-products tr td:nth-of-type(1) span {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  border: 1px solid #666;
  border-radius: 50%;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.16rem;
  color: rgba(0, 0, 0, 0);
}

.buy-products .select .is-select {
  font-size: 0.16rem;
  background: #ff464e;
  color: #fff;
}

.buy-products tr td:nth-of-type(2) {
  width: 15.5%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.buy-products tr td:nth-of-type(3) {
  width: 69%;
  padding-left: 0.28rem;
  position: relative;
}

.buy-products tr td:nth-of-type(3) p {
  height: 0.24rem;
  line-height: 0.24rem;
}

.add-remove {
  width: 1.18rem;
  height: 0.59rem;
  position: absolute;
  right: 0;
  bottom: -0.09rem;
}

.add {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.59rem;
  height: 0.59rem;
  line-height: 0.59rem;
  color: #f40;
  text-align: center;
  z-index: 101;
  cursor: pointer;
}

.add span {
  display: inline-block;
  width: 0.31rem;
  height: 0.31rem;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid #ff464e;
  background: #ff464e url(../../static/imgs/add.png) no-repeat right center;
  background-size: 200% 100%;
}

.number {
  width: 0.94rem;
  height: 0.36rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 0.36rem;
}

.remove {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0.59rem;
  height: 0.59rem;
  line-height: 0.59rem;
  color: #f40;
  text-align: center;
  z-index: 101;
  cursor: pointer;
}

.remove span {
  display: inline-block;
  width: 0.31rem;
  height: 0.31rem;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid #ff464e;
  background: #ff464e url(../../static/imgs/add.png) no-repeat left center;
  background-size: 200% 100%;
}

.all-ready {
  width: 100%;
  height: 0.58rem;
  line-height: 0.58rem;
  background: #fff;
  padding-left: 0.16rem;
  position: relative;
  margin-bottom: 0.08rem;
  font-size: 0.16rem;
  position: fixed;
  bottom: 50px;
}

.all-ready p {
  display: inline-block;
  text-align: center;
  margin-right: 20px;
}

.all-ready p span {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  border: 1px solid #666;
  border-radius: 50%;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.16rem;
  color: rgba(0, 0, 0, 0);
}

.select .is-select {
  font-size: 0.16rem;
  background:#ff464e;
  color: #fff;
}

.all-ready span {
  color: #ff464e;
}

.all-ready div {
  position: absolute;
  right: 0.16rem;
  bottom: 0;
  width: 1.17rem;
  height: 0.58rem;
  line-height: 0.58rem;
  text-align: center;
  background: #ff464e;
}
.all-ready .zhe {
  z-index:1;
}
</style>
