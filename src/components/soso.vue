<template>
    <div class="soso">
        <ul class="soso_search head-height">
            <li class="soso_search_input"><input type="text" name="" placeholder="搜索商品" @keyup.enter="seahis($event)" v-model="inputt"/></li>
            <li class="soso_search_list"><router-link to="/" style="color:#666;border:0">取消</router-link></li>
        </ul>
        <p class="resou">热搜</p>
        <ul class="resou-list">
            <li>品牌清仓</li><li>品牌清仓</li><li>短裤女</li><li>品牌清仓</li><li>品牌清仓擦</li><li>品牌清仓</li><li>品牌清仓</li>
            <li>品牌清</li><li>品牌</li><li>清仓</li><li>清仓</li><li>清仓</li><li>品牌清</li>
        </ul>
        <p class="resou resou2">搜索历史<span class="xright" @click="clearAll">clear</span></p>
        <ul class="resou-list">
            <li v-for="(x,index) in hisList" :key="index">{{x}}</li>
        </ul>
    </div>
</template>
<script>

export default {
  data(){
      return{
        inputt : "",
        inputtArr : []
      }
  },
  methods : {
     seahis(e,inputt){
        if((e.target.value) != ""){
            this.inputt = e.target.value;
            this.$store.commit("seaa",this.inputt);
        }
       },
     clearAll(){
        this.$store.state.sea.splice(0,this.$store.state.sea.length);
     } 
  },
  created() {
       
  },
  computed : {
    hisList(){
        return this.$store.state.sea;
    }
  }
}
</script>
<style>
    .soso{
        box-sizing:border-box;
        padding:0 0.2rem;
    }
    .soso_search{
		height:0.54rem; 
		width:100%;
		border-bottom:1px solid #ddd;
		display:flex;
		background: #fff;
	}
	.soso_search_input{
		width:85%;
		line-height:0.54rem;
	}
	.soso_search_input input {
		width:100%;
		background:#f2f2f2 url(../../static/imgs/search.png) no-repeat 0.05rem 0.05rem;
		background-size:0.2rem 0.2rem;
		padding : 0.08rem 0 0.08rem 0.3rem;
		border:0;
		border-radius: 0.05rem;
		outline:none;
		box-sizing: border-box;
	}
    .soso_search_list{
        width:15%;
        text-align:center;
        line-height:0.54rem;
        font-size:0.14rem;
        color:#666;
    }
    .resou-list::after{
        content:"";
        display:block;
        width:0;
        height:0;
        clear:both;
    }
    .resou{
        font-size:0.16rem;
        color:#999;
        box-sizing:border-box;
        padding:0.2rem 0 0 0;
        margin-bottom:0.1rem;
    }
    .resou-list li{
        float:left;
        font-size:0.14rem;
        margin:0 0 0.1rem 0.1rem;
        padding:0.02rem 0.1rem;
        border-radius:0.02rem;
        background:#f4f4f4;
        test-align:center;
        color:#666;
    }
    .resou2{
        position:relative;
    }
    .xright{
        position:absolute;
        right:0.2rem;
        top:0.15rem;
        font-size:0.24rem;
        color:#ff464e;
    }
</style>

