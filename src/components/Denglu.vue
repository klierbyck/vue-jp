<template>
	<div class="box">
		<div class="top">
			<span><router-link to="/Mine">&lt;</router-link></span>
			<span>登录</span>
			<span>注册</span>
		</div>
		<ul class="list">
			<li>卷品账号登录</li>
			<li>手机快捷登录</li>
		</ul>
		<form>
			<table class="tab">
				<tr>
					<td><input type="text" name="" placeholder="手机号/邮箱/用户名" class="inp"></td>
				</tr>
				<tr>
					<td><input type="password" name="" placeholder="密码" class="inp"></td>
				</tr>
				<tr>
					<td><input type="button" name="" value="登录" class="btn"></td>
				</tr>
			</table>
		</form>
	</div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<style type="text/css">
	.top{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: .44rem;
		background-image: linear-gradient(150deg,#ff5a61,50%,#fd631c);
		color: #fff;
	}
	.top span:first-child{
		margin-left: .1rem;
	}
	.top span:last-child{
		margin-right: .1rem;
	}
	.list{
		height: .44rem;
		font-size: 16px;
		text-align: center;
		line-height: .44rem;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.list li{
		float: left;
		width: 50%;
		color: #999;
	}
	.list li:first-child{
		color: #ff464e;
	}
	.tab{
		background-color: #fff;
	}
	.tab td .inp{ 
		width: 3.5rem;
	    height: 0.48rem;
	    margin-left: .1rem;
	    outline: none;
	    border: 0;
	    border-bottom: 1px solid #ccc;
	}
	.btn{
		width: 100%;
		height: .48rem;
		line-height: .48rem;
		text-align: center;
		outline: none;
		background: #dbdbdb;
		border: none;
		font-size: 20px;
		color: #FFF;
	}
</style>