<template>
   <div class="liu">
     <!--轮播-->
     <mt-swipe :auto="4000"  class="gao">
  <mt-swipe-item v-for="item in list" :key="item.id"><img :src="item.img_url"/></mt-swipe-item>
</mt-swipe>

<!--六宫格-->
 <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/newslist">
                       <a><span class="mui-icon-extra mui-icon-extra-new"></span></a>
                        <div class="mui-media-body">新闻资讯</div></router-link ></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/img">
                       <a><span class="mui-icon-extra mui-icon-extra-holiday"></span></a>
                        <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/shopping">
                      <a><span class="mui-icon-extra mui-icon-extra-gift"></span></a>
                        <div class="mui-media-body">商品购买</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/ping">
                      <a><span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span></a>
                        <div class="mui-media-body">精彩视频</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/phone">
                       <a id="icon-phone" class="active"><span class="mui-icon mui-icon-phone-filled"></span></a>
                        <div class="mui-media-body">联系我们</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/self">
                      <a id="icon-icon-contact"><span class="mui-icon mui-icon-contact"></span></a>
                        <div class="mui-media-body">自己开店</div></router-link></li>
                         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/weizi">
                      <a id="icon-location"><span class="mui-icon mui-icon-location"></span></a>
                        <div class="mui-media-body">位置共享</div></router-link></li>
                         <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/more">
                     <a id="icon-more"><span class="mui-icon mui-icon-more"></span></a>
                        <div class="mui-media-body">更多功能</div></router-link></li>
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
      created(){
      this.getDate();
      },
      methods:{
          getDate(){
            this.$http.get("http://127.0.0.1:3000/lunbo/list").then(result=>{
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
  .gao{
    height:250px !important;
  }
  img{
    width:100%;
    height:100%;
  }
 
</style>