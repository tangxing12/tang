//main.js负责加载所有资源(组件，js，css)创建vue对象
import Vue from 'vue'
import App from './App.vue'
//bootstrop
import "popper.js"
import "jquery"
import "bootstrap"
import "@/assets/css/bootstrap.css"
//1加载路由模块
import router from './router.js'
//1.1加载模块vueResource(发送ajax请求)
import VueResource from 'vue-resource'
//1.2将vueresource注册vue
Vue.use(VueResource)
//1.2.2创建全局过滤器
Vue.filter("timeFilter",function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  m<10&&(m="0"+m);
  var d=date.getDate();
  d<10&&(d="0"+d);
  var h=date.getHours();
  h>12&&(h-=12);
  h<10&&(h="0"+h);
  var M=date.getMinutes();
  M<10&&(M="0"+M);
  return `${y}-${m}-${d} ${h}:${M}`;
})
//1.3将Mint-ui（美团开发的手机组件）加载项目在node_modul中
//1.4全部引入Header
import MintUI from 'mint-ui'
 //1.5注册组件（vue第三天的）
Vue.use(MintUI)
 //1.6引入mui css 在lib中
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
//1.7引入mint-ui组件所需样式文件
//默认查找文件路径  
import "mint-ui/lib/style.css"

//是否是生产模式false
Vue.config.productionTip = false
//创建vue实现对象挂载public/index.html#app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
