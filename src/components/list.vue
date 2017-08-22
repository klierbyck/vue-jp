<template>
    <div>
        <ul class="home_nav">
			<li v-for="(li,index) in home_list" :key="index"><span><router-link :to="'list'+(index+1)">{{li}}</router-link></span></li>
        </ul>
    </div>
</template>

<<script>
export default {
    data(){
        return {
			l : false,
            home_list : ["上新","女装","鞋包","母婴","数码","居家","男士","美妆","美食"],
        }
    }
}
</script>
<style>
 .router-link-active{
	color:#f40;
	border-bottom:0.02rem solid #f40; 
	padding-bottom:0.05rem;
} 
.home_nav{
	display: flex;
	overflow:auto;
	height:0.4rem;
	border-bottom:1px solid #eee;
	overflow-y:hidden;
	background: #fff;
}
::-webkit-scrollbar{height:4px;}
::-webkit-scrollbar-track{background-color:#fff;}
::-webkit-scrollbar-thumb{background-color:#ddd;} 
::-moz-scrollbar{height:4px;}
::-moz-scrollbar-track{background-color:#fff;}
::-moz-scrollbar-thumb{background-color:#ddd;} 
::-ms-scrollbar{height:4px;}
::-ms-scrollbar-track{background-color:#fff;}
::-ms-scrollbar-thumb{background-color:#ddd;} 
.home_nav li{
	padding:0 0.1rem;
	line-height:0.4rem;
}
.home_nav li span{
	display: inline-block;
	width:0.4rem;
	font-size:0.15rem;
}
</style>
