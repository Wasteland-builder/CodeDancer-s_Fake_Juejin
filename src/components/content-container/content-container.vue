<template>
    <div>
        <contentContainerHotpot
          :status="this.data[0].status"
          :author="this.data[0].author"
          :date="this.data[0].date"
          :title="this.data[0].title"
          :content="this.data[0].content"
          :imgsrc="this.data[0].imgsrc">
       </contentContainerHotpot>
       <contentContainerPassage
          :author="this.data[1].author"
          :date="this.data[1].date"
          :title="this.data[1].title"
          :content="this.data[1].content"
          :imgsrc="this.data[1].imgsrc"
          :spottimes="this.data[1].spottimes"
          :thumbups="this.data[1].thumbups"
          :comments="this.data[1].comments"
          :target="this.data[1].target"
          >
        </contentContainerPassage>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import contentContainerHotpot from './content-container-hotpot/content-container-hotpot.vue'
import contentContainerPassage from './content-container-hotpot/content-container-hotpot.vue'
export default defineComponent({
    name:"content-container",
    emits: ['changeParentProps'],
    components:{
    contentContainerHotpot,
    contentContainerPassage
    },
    setup(){
        
    },
    data(){
        return{
           data:[{
                type:'1', //1表示的沸点 2表示文章 3表示动态
                status:'1', //1表示未阅读 2表示已阅读&未点赞 3表示已阅读&已点赞 
                author:'iiru', 
                target:undefined,
                date:'2022-02-15T08:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是文章的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容',
                // imgsrc:"",
                imgsrc:"src/assets/imgcover/1.jpg",
                thumbUps:66,
                sightsees:35,
                comment:5,
           },
           {
                type:'2', //1表示的是沸点 2表示文章 3表示动态
                status:'2', //1表示未阅读 2表示已阅读&未点赞 3表示已阅读&已点赞 
                author:'iiru',  
                target:['前端','Javascrips'],
                date:'2022-06-18T12:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是沸点的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容',
                imgsrc:"src/assets/imgcover/2.jpg",
                thumbUps:66,
                sightsees:35,
                comment:5,
           }]
        }
    },
    methods:{
    
    }
}

)
</script>
<style lang="less" scoped>

</style>