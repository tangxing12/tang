//router.js加载所有组件并且指定访问路径
import Vue from 'vue'
import Router from 'vue-router'
//注册router
Vue.use(Router)
//1.1加载Home组件
import liu from './components/tabbar/liugong.vue'
//导入member文件
import login from './components/tabbar/login.vue'
import cart from './components/tabbar/cart.vue'
import search from './components/tabbar/search.vue'
import newlist from './components/news/newslist'
import detail from './components/news/newdetail.vue'
import img from './components/img/img.vue'
import more from './components/more/more.vue'
import ping from './components/pinglun/pinglun.vue'
import self from './components/self/self.vue'
import shopping from './components/shopping/shopping.vue'
import phone from './components/tellphone/tellphone.vue'
import weizi from './components/weizi/weizi.vue'
import pldetail from './components/pinglun/pldetail.vue'
//导出路由
export default new Router({
    routes:[
        {path:'/',redirect:'/home'},
    {path:"/home",component:liu},
    {path:"/login",component:login},
    {path:"/cart",component:cart},
    {path:"/search",component:search},
    {path:'/newslist',component:newlist},
    {path:'/newsdetail/:id',component:detail},
    {path:'/img',component:img},
    {path:'/more',component:more},
    {path:"/ping",component:ping},
    {path:"/self",component:self},
    {path:"/shopping",component:shopping},
    {path:"/phone",component:phone},
    {path:'/weizi',component:weizi},
    {path:'/pldetail/:id',component:pldetail}
    ]
})
