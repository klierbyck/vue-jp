import Vue from 'vue'
import App1 from './App'
//默认会查找router下的index文件
import router from './router'
//引入vuex
import store from './vuex/store'
//vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//懒加载设置
import VueLazyload from 'vue-lazyload'
/* // 引入vue-amap  
import AMap from 'vue-amap';  
Vue.use(AMap);  
  
// 初始化vue-amap  
AMap.initAMapApiLoader({  
  // 申请的高德key  
  key: '3c2e801cfeff268b0390ec4c9e0000b6',  
  // 插件集合  
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']  
});  */
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

Vue.use(VueLazyload,{
	preLoad: 1.3,
  	error: './assets/logo.png',
  	loading: './assets/loading.gif'
})

//引入axios插件
import axios from 'axios'
//使用axios插件
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  //将路由挂载到实例上,或（router:引入router时的名字）
  router,
  store,
  //App1的模板会替换el选中作用域的全部内容
  template: '<App1/>',
  components: { App1 }
})
