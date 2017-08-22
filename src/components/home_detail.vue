<template>
<div class="detail-all">
        <div class="seckill-title">
            <div class="seckill-li1">
                <a href="javascript:history.go(-1)"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFiUExURUxpcZmZmZiYmJmZmZGRkZubm5mZmX9/f5iYmJmZmZeXl5mZmZqampmZmZmZmZmZmZiYmJiYmJmZmZmZmZubm5iYmJmZmZiYmJmZmZmZmZmZmZiYmKqqqpiYmJGRkZiYmJmZmZiYmKKiopmZmZmZmZiYmJmZmZOTk39/f5iYmJmZmZmZmY2NjZmZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZaWlpiYmJmZmZmZmZmZmZmZmZubm5iYmJmZmZmZmZiYmJmZmZiYmJiYmJiYmJmZmZSUlJmZmZmZmZiYmJiYmJWVlZmZmZaWlpeXl5mZmZiYmJmZmZiYmJmZmZiYmJqampqampiYmJiYmJiYmJiYmJaWlpiYmJiYmJiYmJiYmJmZmZmZmZiYmJqampaWlpeXl5mZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZiYmJiYmJiYmJiYmJmZmZmZmZeXl5mZmZmZmRmSHEgAAAB1dFJOUwCAnYoHEgoE/o8bvCHX69Dj9G74M3DVi5e1qLMGkA5t7JULpaanGRMCmsGUCXkjty3PP46MEay6++HEKTRvD4bf2fJrFBi0yX/CHXYiJf3FfXLSymAm/GbM9yfl+VJDN0bqUSwv8O7dX+9LV9PgTT459WJZ5pLKHGIAAAEbSURBVEjH7dXFcsNAFERROwYpjiFxHGZmZmZmZmbG/v+0/uB1ZetZnytNqeZpfL70+v+qDsQqFD/bD1QKfjULQKbdH+/Q95aafeoVcBftz/94A0637P49DuR82/3PF/D0YvcHucDvs92vrAOxTzN3Jlzg8Mbsgy38/EtRsw/V0g/MmX2kg76uz+yjw/QZYbMfSdD3NJr96BQw6BfOczYwPaYMjLd/aSKHeOBmlKB7ku9oU4rOLhYFjlC0N7MobBWK+iIWNeNCESpmMb8sFOEmFht7QuEEWCRulY+1uQ88XChFkjN9cqkUj3fA/ZlSXF8BR7tKcc6j6yaVIrXNwq8ck7UF728fFIqIdz+UKbtqKAHi0kSVV+XnpW/6P7TqQzbxwrmKAAAAAElFTkSuQmCC"/></a>
            </div>
            <div class="seckill-li2 detail-2">{{detail_item.title}}</div>
        </div>
    <!-- <div> -->
    <div class="detail-big-img">
        <img :src="detail_item.pic"/>
    </div>
    <div>
        <p class="detail-list-name">{{detail_item.title}}</p>
        <p class="detail-list-price"><span>{{detail_item.cp}}</span><i>{{detail_item.op}}</i></p>
    </div>
    <div class="itemDetail">
        <p><img src="../../static/imgs/shangpin.png" /></p>
        <ul>
            <li><img src="../../static/imgs/detail-2.png" /> </li>
            <li>
                <img src="https://goods8.juancdn.com/bao/170613/e/e/593ffba9ad0a499a368b457f_750x574.jpg?iopcmd=convert&Q=88&dst=jpg"/>
				<img src="https://goods2.juancdn.com/bao/170429/2/2/59040e72ad0a49532a8b45bf_750x595.jpg?iopcmd=convert&Q=88&dst=jpg"/>
				<img src="https://goods7.juancdn.com/bao/170613/c/9/593ffba7ad0a493f458b4569_750x750.jpg?iopcmd=convert&Q=88&dst=jpg" />
				<img src="https://goods4.juancdn.com/bao/170613/7/3/593ffbaba43d1f62fc1dca1a_750x715.jpg?iopcmd=convert&Q=88&dst=jpg" /> 
				<img src="https://goods8.juancdn.com/bao/170613/e/5/593ffbada43d1f63204e0e26_750x681.jpg?iopcmd=convert&Q=88&dst=jpg" /> 
				<img src="https://goods7.juancdn.com/bao/170613/d/7/593ffbb0a43d1f63284dadb5_750x799.jpg?iopcmd=convert&Q=88&dst=jpg" /> 
				<img src="https://goods2.juancdn.com/bao/170613/3/4/593ffca5a43d1f63f546c900_750x906.jpg?iopcmd=convert&Q=88&dst=jpg" /> 
				<img src="https://goods1.juancdn.com/bao/170613/0/6/593ffcabad0a4931178b45d3_750x882.jpg?iopcmd=convert&Q=88&dst=jpg" /> 
            </li>
        </ul>
    </div>
    <!-- <div>  -->
    <div class="detail-add">
        <ul class="detail-add-ul1">
            <li></li>
            <li>收藏</li>
        </ul>
        <div class="detail-add-div">添加商品：</div>
        <ul class="detail-add-ul2">
            <li><span>-</span></li>
            <li><span>0</span></li>
            <li><span>+</span></li>
        </ul>
        <div class="cart-icon" ui-sref="cart"></div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
			detail_item : []
        }
	},
	created(){
		this.men();
	},
	mounted() {
		this.detail_item = this.$route.query.det;
	},
	methods : {
		men(){
			window.scrollTo(0,0);
		}
	}
}
</script>

<style>
.detail-all{
	width:100%;
	position:relative;
}
.detail-add{
	width:100%;
	/* height:1rem; */
	background: #fff;
	position:fixed;
	bottom:0;
	z-index:3;
	display:flex;
}
.detail-add-ul1{
	width:10%;
	display: flex;
	flex-direction:column;
	font-size:0.1rem;
	text-align: center;
}
.detail-add-ul1 li:nth-of-type(1){
	height:60%;
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAG5UExURQAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM4/8pFgAAACSdFJOUwADASAK83TwOeVQDwSR/NzBJRzbx+gMyOber3Bd8QUCmnXvJ00oy9nU7vm9j/7fESP7LJK70y0bB7pl0ST96tI8QOMQEjR+SA5Sfcr25Ga8g46XblpsgsytaVebBq6kRlx/CJlrJmdVKrXGMBUYH+n01mHaK2KMyUqsoGi2T1QZsm8UHS54MzI68oF6qPjg0NiFhuDbnwAAAbRJREFUOMuNlGdXE1EQQF+AZJOQ3kjovXfpHaSjgNKUqhSVjgXsggLSVPT+YlMgyabsYT7sztxz3+7M23dWiDuHSqt59Hg8PTFE1l6UrxhbXoVA5oSbQIxMZvmJvvAGzOTfOI0OeJitGR1OVcOG92lb65Cx8Hw1Z64Snrh8TpUd9dNMv+5Ky0VntRUhTSX5QVZ6LpZ5b/KRks3gm3eKed2KuToIGiTuCdEFX8NG2N6FvbwwMEtNgfiERTboG9DIQD3lwsNnGVvWFTfJQD+togatfM+SDfI6H0mY6FPe6C7ahY5vytIQTtHsG1EpLikTp/QYFKUUrsQJ6JUcawUNQjh4n6AgZePwXgfgZXwnr5QPvvsXdMnxnIQy6vxJYgaL8aQcHhQEsmewH9vpNpF2mxsp1cZybE5Sg0OpjuiojXbud1IU1m1SCj1tkY4XdrRFLLIfRzh1SGdy1GinsjocDFq4iGrUZsb9LlT+KEQ6j27zsJ6Spdui1ozzZ6yBq5oxfQ+kejVvrbG3zmCEX71CNB1UMNYb93O2/MY9NHBN+7RK4WD0eXx/gD/dyod18J/nb78rAv4HP9FpNT7C9VcAAAAASUVORK5CYII=) no-repeat center;
	background-size:0.3rem 0.3rem;
	line-height:0.8rem;
}
.detail-add-div{
	width:25%;
	font-size:0.14rem;
	line-height:1rem;
	text-align: center;
}
.detail-add-ul2{
	width:65%;
	line-height: 1rem;
	display: flex;
	box-sizing:border-box;
}
.detail-add-ul2 li:nth-of-type(1) span,.detail-add-ul2 li:nth-of-type(3) span{
	display: inline-block;
	padding:0 0.3rem;
	color:#f00;
	font-size:0.3rem;
	font-weight: bold;
}
.detail-add-ul2 li:nth-of-type(2){
	font-size:0.16rem;
	line-height: 1rem;
}
.cart-icon{
	background:#ffd600 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAMAAADxhdbJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHFUExURUxpcf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////74HNBAAAACWdFJOUwCwEOygcNBggJAEwJwFJFDw8qR+MBv+4ItLAuT9A8zfQNxUKAaOPSxmRA72+/UBjOpVM1P5a+jDZKgmtTe+F0rYZaLxDwmIXAdXbCB0cdHpjWhuuazPeK0MxdccW28+98djVnmWl0Lte11BPy+yE/xyttmYHvTORQsSxIYiMRmn83bUgrgNdSmULoHbNJIVZ5tZ3vq/61CyaTYAAAKJSURBVGje7dlnVxNBFAbgJQklMT3BJCIkKEWqghRpIh3B3pVi7733DvZe9vc6m03xgwve927m6Dnzfp6T52x25u7MHU1TUVFRUVFRUeGkzanreii5ED/jk8EZmhlnZKzwXIuez3t/wbm5jt+8LZ7CP98qx/3euqFwyPDmpc0ZR5XgZuXN0S+CeyWPiwtubymSwVGA26bDafpM59bojGwkc+0croTMLXK4lfR/s4LBjdC5HwxugM6dZnBxOredwbXRuQSDe0Ln/LhWDZQVTzPMeZGqeQPmJhDuMszNINwuVEtCn6B1KOeCuAsoVwpx5Sg3jX3Qn2FaDNw/7Jf56jStB+M2gdxLjEM33+chrQLd+32AuDDKNUp9deB2ZS3MDQBaF75xfwNwPTi3B+B241yD1Fen3aJrGzinrttkbh+Hu0PmpjhcmMzVc7gIVfvZyuHIZ8qDrAP6WypXzOImVxO5KK//8I2mdbfyuD5jx//XLY5ADbO7Uiu4cXnNHGMnXSSPuyi4I/K4zYJr9sjzgsLrPySNO5bpywSDsViyRGSFSJGIKx2v28x4WTrn7jI5F3GdJ3jcEJFbz+wVn+yuDhJK2VZ7GtRXpv3R9lQqlQgEApkaMlWczvOyTB663bVf1VXMP5ax172Vy1SfS5/swkZPtej62cgSd1ANxqXDg357LjBemFP8uuUDTpgL5fugHZw3u6SuWTVEmrKXYg6+du9o7gbKYsSB3Bo/zuce5yvG5J9HPM0N+Mjn6vPdeovv3rBdBdOIbyT7Y1UWIzpz3Akbpsq75apv485sT7jGBs7XZ/6Y23JEXcg82kVtWXiVnTuudhxe6hbp0bBT77pZrsqvioqKioqKyn+dX7jWs9PYCXZZAAAAAElFTkSuQmCC);
	background-size:0.4rem 0.4rem;
	background-position:center;
	width:0.5rem;
	height:0.5rem;
	position:absolute;
	right:0.26rem;
	bottom:0.26rem;
	/* line-height:1rem; */
	text-align:center;
	border-radius:50%;
}
.itemDetail p img{
	width:100%;
	padding-top:0.1rem;
}
.imteDetail li {
    font-size:0;
    
}
.itemDetail li img{
	width:100%;
	margin-bottom:0.1rem;
}
.detail-big-img{
	width:100%;
	height:3rem;
	margin-top:0.6rem;
}
.detail-big-img img {
	width:100%;
	height:100%;
}
.detail-list-name{
	text-align:center;
	font-size:0.20rem;
	margin-top:0.1rem;
	overflow:hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	background: #fff;
}
.detail-list-price{
	text-align:center;
	font-size:0.18rem;
	overflow:hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	background: #fff;
}
.detail-list-price span{
	color:#f00;
	font-weight:bold;
	display: inline-block;
	padding-right:0.6rem;
}
.detail-list-price i{
	font:normal 0.12rem "微软雅黑";
	text-decoration:line-through;
}
.seckill-title{
	width:100%;
	height:0.6rem;
	display: flex;
	position:fixed;
	top:0;
	background: #fff;
}
.seckill-li1, .seckill-li3{
	width:15%;
	text-align:center;
	line-height: 0.6rem;
	box-sizing: border-box;
	padding:3% 3%;
}
.seckill-li1 img,.seckill-li3 img{
	width:0.3rem;
	height:0.3rem;
}
.seckill-li2{
	width:70%;
	text-align:center;
	line-height:0.6rem;
	font-size: 0.24rem;
	font-weight: bold;
}
</style>