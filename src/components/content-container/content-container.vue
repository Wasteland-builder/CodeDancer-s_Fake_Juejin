<template>
    <div>
        <contentContainerHotpot
          :status="this.data[0].status"
          :author="this.data[0].author"
          :date="this.data[0].date"
          :title="this.data[0].title"
          :content="this.data[0].content"
          :imgsrc="this.data[0].imgsrc"
          :focus="this.data[0].focus"
          :followers="this.data[0].followers"
          :profiles="this.data[0].profiles"
          :avatar="this.data[0].avatar">
       </contentContainerHotpot>
       <contentContainerPassage
          :index="1"   
          :status="this.data[1].status"
          :author="this.data[1].author"
          :date="this.data[1].date"
          :title="this.data[1].title"
          :content="this.data[1].content"
          :imgsrc="this.data[1].imgsrc"
          :spottimes="this.data[1].spottimes"
          :thumbUps="this.data[1].thumbUps"
          :comments="this.data[1].comments"
          :target="this.data[1].target"
          :focus="this.data[1].focus"
          :followers="this.data[1].followers"
          :profiles="this.data[1].profiles"
          :avatar="this.data[1].avatar" 
          @thumbUpClick="ActiveHandle"
          >
        </contentContainerPassage>
            <!-- 可以v-for获取index 赋给 index 同时 注意按照type判断组件类型 -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import contentContainerHotpot from './content-container-hotpot/content-container-hotpot.vue'
import contentContainerPassage from './content-container-passage/content-container-passage.vue'
export default defineComponent({
    name:"content-container",
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
                status:'1', //1表示未阅读&未点赞 2表示已阅读&未点赞 3表示未阅读&已点赞 4表示已阅读&已点赞 
                author:'null仔', 
                focus:'79',
                followers:'5347',
                profiles:'总是有人要赢的,那为什么不能是我 ?',
                avatar:'https://p9-passport.byteacctimg.com/img/user-avatar/85dbee114c2dde26e5ed4fe9939d119c~300x300.image' ,
                target:undefined,
                date:'2022-02-15T08:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是文章的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容',
                imgsrc:"src/assets/imgcover/1.jpg",
                thumbUps:66,
                spottimes:35,
                comments:5,
           },
           {
                type:'2', //1表示的是沸点 2表示文章 3表示动态
                status:'2', //1表示未阅读 2表示已阅读&未点赞 3表示已阅读&已点赞 
                author:'一瓶酸奶', 
                focus:'65',
                followers:'85',
                profiles:'前端小萌新',
                avatar:'https://p6-passport.byteacctimg.com/img/user-avatar/1a03ac3815da9fa8071d2b7d8a893070~300x300.image' ,
                target:['前端','Javascrips'],
                date:'2022-06-18T12:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是沸点的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容',
                imgsrc:"src/assets/imgcover/2.jpg",
                thumbUps:66,
                spottimes:35,
                comments:5,
           }]
        }
    },
    methods:{
        //接受子组件props参数 使用组件需要这个函数
         ActiveHandle(id){
         let e = this.data[id].thumbUps;
               switch(this.data[id].status) {
                case '1' :{
                    this.data[id].thumbUps = e+1;
                    this.data[id].status='3';
                    break;
                }
                 case '2' :{
                    this.data[id].thumbUps=e+1;
                    this.data[id].status='4';
                    break;
                }
                 case '3' :{
                    this.data[id].thumbUps=e-1;
                    this.data[id].status='1';
                    break;
                }
                 case '4' :{
                    this.data[id].thumbUps=e-1;
                    this.data[id].status='2';
                    break;
                }
               }
        }   
    }
}

)
</script>
<style lang="less" scoped>

</style>