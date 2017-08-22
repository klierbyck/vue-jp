<template>
    <div class="home_show_list_all">
        <div class="home_show_list" v-for="(hitems,index) in this.req.list" :key="index">
            <ul class="home_show_list_top">
                <li><img :src="hitems.logo_url"/></li>
                <li>
                    <span>{{hitems.title}}</span>
                    <span>{{hitems.coupon_tips}}</span>
                </li>
                <li><span>{{hitems.mkt_info}}</span></li>
            </ul>
            <div class="home_show_list_div">
                
                <dl class="home_show_list_dl"  v-for="(litems,index) in hitems.sub_data" :key="index">
                    <dt><router-link :to="{path:'home_detail',query:{det : litems}}"><img v-lazy="litems.pic"/></router-link></dt>
                    <dd class="home_show_list_dd">
                        <p><span>{{litems.cp}}</span><i>{{litems.op}}</i></p>
                        <p><span>{{litems.title}}</span></p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>	
					
</template>
<<script>
export default {
    data(){
        return{
            req : [],
            sn : 2
        }
    },
    created(){
        let _this = this;
        if(this.$route.path == "/list1" || this.$route.path == "/"){
             window.addEventListener("scroll",this.sc);
        }     
        fetch("../../static/json/home_items"+_this.sn+".json").then(function(res){return res.json()}).then(function(res){_this.req = res;});
   },
   methods : {
       sc(){
            this.sn>3 ? this.sn = 2 : this.sn += 1;
       }
   }
}
</script>
<<style>

</style>
