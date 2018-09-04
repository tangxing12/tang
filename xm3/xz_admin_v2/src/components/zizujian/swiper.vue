<template>
   <div>
      <mt-swipe :auto="4000">
                     <mt-swipe-item v-for="item in imgList" :key="item.id">
                         <img :src="item.img_url" alt="" id="im">
                     </mt-swipe-item>
                 </mt-swipe>
   </div>
</template>
<script>
   export default{
      data(){
         return{

         }
      },
      methods:{

      },
      props:[imgList]
   }
</script>
<style>
     .mint-swipe{
         height:200px;
     }
        #im{
         width:100%;
         height:100% ;
     }
</style>