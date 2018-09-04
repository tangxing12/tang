<template>
   <div class="detail">
    <!--新闻标题-->
     <h3 class="title">{{item.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{item.add_time|timeFilter}}</span>
      <span>点击:{{item.click}}次</span>
      <!--内容-->
      <div class="container" v-html="item.content">
      </div>
    </p>
     <!--评论模块 :id中的id与props["id"] 中的id 要对应-->
     <ping-lun :id="this.id"></ping-lun>
   </div>
</template>
<script>
import {Toast} from 'mint-ui'
import pinglun from '../zizujian/pinglun.vue'
   export default{
     data(){
       return{
         id:'',
         item:{}
       }
     },
     created() {
        this.id = this.$route.params.id;
         this.getData();   
     },
     methods:{
          getData(){
            this.$http.get("http://127.0.0.1:3000/news/detail?id="+this.id).then(result=>{
              if(result.body.code = 1){
                     this.item = result.body.msg[0];
              }
            })
          }
     },
     components:{
         //注册子组件
         'ping-lun':pinglun
     }
   }
</script>

<style >
 .detail h3{
   padding-top:5px;

 }
 .detail .subtitle{
   color:#226aff;
   display:flex;
   justify-content:space-between;
 }
</style>