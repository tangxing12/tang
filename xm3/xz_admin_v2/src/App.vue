<template>
  <div class="app-container">
  <!--app.vue中的每个页面都会出现-->
  <!--顶部固定导航栏mitui-->
 <mt-header fixed title="我的 K歌" ></mt-header>
    
      <!--多个组件切换 router-view-->
      <router-view></router-view>
       <!--tabbar固定在底部导航条mui-->
       <nav class="mui-bar mui-bar-tab">
       <!--访问地址 相当于a标签跳转页面-->
                    <router-link to="/home" class="mui-tab-item mui-active">
                        <span class="mui-icon mui-icon-home"></span>
                        <span class="mui-tab-label">首页</span>
                    </router-link>
                    <router-link to="/login" class="mui-tab-item" >
                        <span class="mui-icon mui-icon-contact"></span>
                        <span class="mui-tab-label">会员</span>
                    </router-link>
                    <router-link to="/cart" class="mui-tab-item" >
                        <span class="mui-icon-extra mui-icon-extra-cart mui-icon">
                        <span class="mui-badge">0</span>
                        </span>
                        <span class="mui-tab-label">购物车</span>
                    </router-link>
                    <router-link to="/search" class="mui-tab-item" >
                        <span class="mui-icon mui-icon-search"></span>
                        <span class="mui-tab-label">搜索</span>
                    </router-link>
                </nav>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/*mt-header固定顶部布局 */
.app-container{
  padding-top:40px;
  padding-bottom:50px;
}
.mint-header{
  background-color:red!important;
}
</style>
