<template>
<div class="pldetail">
  <h3>视频详情</h3>
    <!--评论页并传视视频id-->
  <sp></sp>
  </div>
</template>
<script>
import sppinglun from '../zizujian/sppinglun.vue'
    export default{
        data(){
            return{
              
            }
        },
        created() {
            console.log(this.$route.params.id);
        },
        methods:{

        },
         components:{
          /*注册子组件 */
          "sp":sppinglun
      }
    }
</script>