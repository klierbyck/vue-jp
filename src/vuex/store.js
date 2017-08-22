import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

let state = {
  sea: [],
  carts: {},
  cartsLength: 0,
  totalNum: 0,
  totalMoney: 0,
  selectAll: true,
  flag: true,
  stor: {},
  dingStor: []
}

let mutations = {
  seaa(state, el) {
    state.sea.push(el);
  },
  //增加商品
  add(state, item) {
    //判断购物车数组中是否存在该商品
    if (!state.carts[item.goods_id]) {
      item.counts = 1;
      item.isSelect = true;
      state.carts[item.goods_id] = item;
    } else {
      item.counts += 1;
    }
  },
  //减少商品
  reduce(state, item) {
    //判断购物车数组中的商品数量
    if (item.counts > 1) {
      item.counts -= 1;
    } else {
      delete state.carts[item.goods_id];
    }
  },
  //获取商品总数量
  getCounts(state) {
    state.totalNum = 0;
    for (let key in state.carts) {
      if (state.carts[key].isSelect) {
        state.totalNum += state.carts[key].counts;
      }
    }
    return state.totalNum;
  },
  //获取商品总价格
  getMoney(state) {
    state.totalMoney = 0;
    for (let key in state.carts) {
      if (state.carts[key].isSelect) {
        state.totalMoney += (state.carts[key].tuan_price || state.carts[key].cprice || state.carts[key].cp.split("￥")[0].slice(1, state.carts[key].cp.split("￥")[0].length)) * state.carts[key].counts;
      }
    }
    return state.totalMoney;
  },
  //切换单独商品选中状态
  getSelect(state, id) {
    state.carts[id].isSelect = !state.carts[id].isSelect;
    for (let key in state.carts) {
      if (!state.carts[key].isSelect) {
        state.flag = false;
        break;
      } else {
        state.flag = true;
      }
    }
    if (state.flag) {
      state.selectAll = true;
    } else {
      state.selectAll = false;
    }
  },

  //切换选中所有按钮状态
  getSelectAll(state) {
    state.selectAll = !state.selectAll;
    for (let key in state.carts) {
      if (state.selectAll) {
        state.carts[key].isSelect = true;
      } else {
        state.carts[key].isSelect = false;
      }
    }
  },

  //计算对象中键值对个数
  getCartsLength(state) {
    state.cartsLength = Object.keys(state.carts).length;
  },

  //存储收藏商品
  storage(state, item) {
    //判断是否为收藏状态
    if (item.stor) {
      state.stor[item.goods_id] = item;
    } else {
      delete state.stor[item.goods_id];
    }
    localStorage.setItem("store", JSON.stringify(state.stor));
  },
  //读取localStorage中的数据，若有则赋值给stor对象
  getStorage(state) {
    if (localStorage.getItem("store") != null) {
      state.stor = JSON.parse(localStorage.getItem("store"));
    }
  },
  //获取选好了的商品订单并存入localStorage
  getDing(state) {
    state.dingStor = [];
    for (let key in state.carts) {
      if (state.carts[key].isSelect) {
        state.dingStor.push(state.carts[key])
      }
    }
    localStorage.setItem("ding", JSON.stringify(state.dingStor));
  },
  //读取localStorage中的数据，若有则赋值给dingStor
  showDing(state) {
    if (localStorage.getItem("ding") != null) {
      state.dingStor = JSON.parse(localStorage.getItem("ding"));
    }
  },
  //删除订单
  delDing(state){
    localStorage.removeItem("ding");
    state.dingStor = [];
  }
}

let actions = {

}

let getters = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
