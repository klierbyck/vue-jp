<template>
  <div>
    <div class="shoucang">
      <span>我的收藏</span>
      <router-link to="/Mine">
        <</router-link>
    </div>
    <div class="tab">
      <table>
        <tr v-for="(item,key,index) in stors" :key="index">
          <td>{{index+1}}</td>
          <td><img :src="(item.pic_url || item.pic)"></td>
          <td>
            <p>{{item.title}}</p>
            <p>￥{{item.tuan_price||item.cprice||zdata}} </p>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        stors: {}
      }
    },
    methods: {
      //获取收藏列表
      getShou: function () {
        this.$store.commit("getStorage");
        this.stors = this.$store.state.stor;
      }
    },
    mounted() {
      this.getShou();
    }
  }

</script>
<style>
  .shoucang {
    height: 44px;
    border-bottom: 1px solid #ff464e;
  }

  .shoucang span:nth-of-type(1) {
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

  .shoucang a {
    position: absolute;
    left: 0;
    top: 0;
    width: 44px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 24px;
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
    border-bottom: 1px solid #ff464e;
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

</style>
