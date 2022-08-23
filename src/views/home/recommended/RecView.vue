<template>
        <div v-if="this.activeLoading"> 
            <loading></loading>
        </div>
      <div v-if="!this.activeLoading">
             <article-list></article-list>
      </div>
</template>

<script >
import ArticleList from '@/components/article/ArticleList.vue'
import loading from '@/components/loading/loading.vue'
export default {
  components:{
      ArticleList,loading
    },
    data(){
      return{
          activeLoading:false
      }
    },
    methods:{
           handleChangePage:async function(){  
              this.activeLoading = true 
              setTimeout(()=>{
               this.activeLoading = false    
              },256)
            }
    },
    mounted:function() {   //自动触发写入的函数
    this.handleChangePage();
  }
}
</script>
