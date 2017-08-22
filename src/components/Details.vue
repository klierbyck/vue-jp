  <template>
  <div class="detail">
    <img v-lazy="(data.pic_url || data.pic)">
    <div class="shou">
      <p>
        ￥{{data.tuan_price||data.cprice||zdata}}
        <span>团购价</span>
        <img :src="'../../static/imgs/shoucang'+Number(flag)+'.png'" @click="storage">
      </p>
      <p>{{data.title}}</p>
    </div>
    <router-link tag="div" to="/cang" class="cangall">
      <img src="../../static/imgs/cangall.png">
    </router-link>
    <img v-for="(item,index) in lists" v-lazy="item" :key="index">
    <cartbar :data="data" :dprice="data.cprice" :tprice="data.tuan_price" :tpriceH="data.cprice"></cartbar>
  </div>
</template>

<script>
import Cartbar from './Cartbar'
export default {
  data() {
    return {
      data: {},
      lists: '',
      zdata: 0,
      flag: false
    }
  },
  methods: {
    getImg: function () {
      this.$http.get('../../static/json/detail.json')
        .then(res => {
          this.lists = res.data.imgs;
        })
      this.$http.get('../../static/json/detail.json')
        .then(res => {
          this.lists = res.data.imgs;
        })
    },
    //点击收藏或者取消收藏
    storage: function () {
      this.flag = !this.flag;
      this.data.stor = this.flag;
      this.$store.commit("storage", this.data);
    },
    getStor: function () {
      //获取收藏数据
      this.$store.commit("getStorage");
      let stors = this.$store.state.stor;
      for (let i in stors) {
        if (i == this.data.goods_id) {
          this.flag = true;
          return;
        }
      }
      this.flag = false;
    }
  },
  computed: {
  },
  components: {
    Cartbar
  },
  created() {
    this.data = this.$route.query.data;
    if (this.data.cp) {
      this.zdata = this.data.cp.split("￥")[0].slice(1, this.data.cp.split("￥")[0].length);
    }
  },
  mounted() {
    this.getImg();
    this.getStor();
  }
}
</script>

<style>
.detail {
  width: 100%;
}

.detail>img {
  width: 100%;
  display: block;
}

.cangall img {
  width: 100%;
  height: 0.6rem;
  display: block;
  margin: 12px 0;
}

.shou {
  position: relative;
}

.shou p {
  padding-left: 12px;
  font-size: 0.18rem;
}

.shou p:nth-of-type(1) {
  color: red;
}

.shou p:nth-of-type(1) span {
  display: inline-block;
  padding: 0 6px;
  background: red;
  color: #fff;
  font-size: 12px;
  margin-left: 10px;
}

.shou p img {
  position: absolute;
  right: 12px;
  bottom: 0px;
  width: .48rem;
  height: .48rem;
}
</style> 