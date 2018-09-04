<template>
    <div class="comment">
<h3>发表评论</h3>
   <hr>
   <textarea placeholder="请输入评论内容(最多120字)" maxlength="120" v-model="text" ></textarea>
   <mt-button type="primary" size="large" @click="postText">发表评论</mt-button>

   <!--评论列表-->
   <div  class="cmt-list" v-for="(item,i) in dat">
      <div class="cmt-item">
         <div class="cmt-title">
          <span> 第{{i+1}}楼&nbsp;&nbsp;&nbsp;用户:{{item.username}} &nbsp;</span>
          <span class="time"> 发表时间:{{item.add_time|timeFilter}}</span>
         </div>
          <div class="cmt-body">
            {{item.content}}
          </div>
      </div>
   </div>
   <mt-button type="primary" size="large" @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
   export default{
     data(){
      return{
        text:"",
        pno:1,
        dat:[]
      }
     },
     created() {
       this.getselect();
     },
     methods:{
       //判断输入的内容
      postText(){
           var m = this.text.trim();
       if(m.length<3){
         Toast("亲你发表的内容过少 必须大于3个字符");
         return;
       }else{
          var n = this.id;
          this.$http.get(`http://127.0.0.1:3000/comment/postcomment?nid=${n}&content=${m}&username=tom`).then(result=>{
            if(result.body.code = 1){
              Toast(result.body.msg);
              this.text="";
              //自动刷新
              history.go(0);
            }
          })
       }
      },
      //查询留言
      getselect(){
        this.$http.get(`http://127.0.0.1:3000/comment/list?pno=${this.pno}&nid=${this.id}`).then(result=>{
          if(result.body.code = 1){
            //拼接数组
            this.dat = this.dat.concat(result.body.msg);
          }else{
            Toast("网络故障请检查");
          }
        })
      },
      //加载更多
      getmore(){
         this.pno++;
         this.getselect();
      }
    
     },
     props:["id"]
   }
</script>
<style>
   .comment .cmt-title{
   color:blue;
   font-size:14px;
   }
   .time{
     padding-left:92px;
   }
</style>