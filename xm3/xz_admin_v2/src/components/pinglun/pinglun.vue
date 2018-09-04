<template>
   <div class="ping">
   <h3>有趣视频</h3>
   <div v-for="item in list" :key="item.id" @click="getId(item.id)">
   <video :src="item.video_url" class="sp" controls></video>
   </div>
   <!--加载更多-->
   <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
   </div>
</template>
<script>
import {Toast} from 'mint-ui'
   export default{
    data(){
     return{
       list:[],
       pno:1,
       shu:2
     }
    },
    created() {
        this.getData();
    },
    methods:{
      /*获取数据 */
      getData(){
      this.$http.get(`http://127.0.0.1:3000/sp/list?pno=${this.pno}&&shu=${this.shu}`).then(result=>{
          if(result.body.code ==1){
              this.list = this.list.concat(result.body.msg);
          }else{
              Toast("网络错误请检测网络");
          }
      })
      },
      getMore(){
      this.pno++;
      this.getData();
      },
      getId(id){
          this.$router.push("/pldetail/"+id);
      }
      /*视频暂停时写评论 */
    }
   }
</script>
<style>
.sp{
    width:100%;
    padding-top:5px;
}
</style>