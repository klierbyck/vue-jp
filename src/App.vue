<template>
	<div class="main">
		<div id="app">
      <router-view>
        
      </router-view>
	  </div>
	</div>
</template>

<script>

//导出使用组件
export default{
  name:'app'
}
</script>

<style>
.main{
  width: 100%;
}
#app{
  width: 100%;
  position: relative; 
}  
</style>
