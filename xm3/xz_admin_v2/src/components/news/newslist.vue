<template>
   <div class="list">
          <ul class="mui-table-view">
     <h3>新闻列表</h3>
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <!--点击这里把参数传递到路由中router.js 页面与页面之间-->
					<router-link :to="'/newsdetail/'+item.id" >
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis float'>
                             <span>时间: {{item.add_time|timeFilter}}</span>
                            <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
   </div>
</template>
<script>
import {Toast} from 'mint-ui'
   export default{
     data(){
       return{
        list:[]
       }
     },
     created() {
       this.getData();
     },
     methods:{
      /*获取数据 */
      getData(){
        this.$http.get("http://127.0.0.1:3000/news/new").then(result=>{
          if(result.body.code = 1){
            this.list = result.body.msg;
          }else{
            Toast("获取数据失败");
          }
        })
      }
     }
   }
</script>

<style >
  .list h1{
    font-size:14px;
  }
.list .float{
  display:flex;
  color:#226aff;
  justify-content:space-between;
} 
</style>