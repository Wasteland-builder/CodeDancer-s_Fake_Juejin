<template>
    <div >
       <div v-for="(item,itid) in data" :key="'content-'+itid" style="margin:1% 0;">
          <contentContainerHotpot v-if="item.type==='1'"
          :index="itid"   
          :status="item.status"
          :author="item.author"
          :date="item.date"
          :title="item.title"
          :content="item.content"
          :imgsrc="item.imgsrc"
          :focus="item.focus"
          :followers="item.followers"
          :profiles="item.profiles"
          :avatar="item.avatar" 
          @click="this.ReadHandle(itid)">
       </contentContainerHotpot>
       <contentContainerPassage v-if="item.type==='2'"
          :index="Number(itid)"   
          :status="item.status"
          :author="item.author"
          :date="item.date"
          :title="item.title"
          :content="item.content"
          :imgsrc="item.imgsrc"
          :spottimes="item.spottimes"
          :thumbUps="item.thumbUps"
          :comments="item.comments"
          :target="item.target"
          :focus="item.focus"
          :followers="item.followers"
          :profiles="item.profiles"
          :avatar="item.avatar" 
          @click="this.ReadHandle(itid)"
          @thumbUpClick="ActiveHandle"
          >
        </contentContainerPassage>
       </div> 
            <!-- 可以v-for获取index 赋给 index 同时 注意按照type判断组件类型 -->
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
// import contentNav from '@/components/content-nav/content-nav.vue'
import contentContainerHotpot from './content-container-hotpot/content-container-hotpot.vue'
import contentContainerPassage from './content-container-passage/content-container-passage.vue'
import {login} from '../../api/index.js'
export default defineComponent({
    name:"content-container",
    components:{
    contentContainerHotpot,
    contentContainerPassage
    },
   mounted(){
    // Login(){
    //     Promise.resolve(
    //     login().then((res)=>{
    //     console.log(res)
    // })
    // )
    // }
    },
    data(){
        // 在这里导入数据
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
                target:['前端','Javascripts'],
                date:'2022-06-18T12:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是沸点的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容',
                imgsrc:"src/assets/imgcover/2.jpg",
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
                target:['前端','Javascripts','CSS'],
                date:'2022-08-11T12:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是沸点的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容的内容这是文章的的内容这是文章的的内容这是文章的的内容这是文章的',
                imgsrc:"",
                thumbUps:66,
                spottimes:35,
                comments:5,
           },
             {
                type:'2', //1表示的是沸点 2表示文章 3表示动态
                status:'2', //1表示未阅读 2表示已阅读&未点赞 3表示已阅读&已点赞 
                author:'后端菜鸟', 
                focus:'65',
                followers:'85',
                profiles:'前端小萌新',
                avatar:'https://p6-passport.byteacctimg.com/img/user-avatar/1a03ac3815da9fa8071d2b7d8a893070~300x300.image' ,
                target:['后端','Go'],
                date:'2022-08-11T12:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是沸点的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容的内容这是文章的的内容这是文章的的内容这是文章的的内容这是文章的',
                imgsrc:"",
                thumbUps:66,
                spottimes:35,
                comments:5,
           },
             {
                type:'2', //1表示的是沸点 2表示文章 3表示动态
                status:'2', //1表示未阅读 2表示已阅读&未点赞 3表示已阅读&已点赞 
                author:'一只九岭', 
                focus:'23',
                followers:'123',
                profiles:'前端小萌新',
                avatar:'https://p6-passport.byteacctimg.com/img/user-avatar/1a03ac3815da9fa8071d2b7d8a893070~300x300.image' ,
                target:['CSS','Javascripts'],
                date:'2022-01-23T10:06:21.410588500Z', //标准时间戳 GMT+8
                title:'这是沸点的标题',
                content:'这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容这是文章的内容的内容这是文章的的内容这是文章的的内容这是文章的的内容这是文章的',
                imgsrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3932fb40d29454c9dedea3c66a1bbba~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?",
                thumbUps:22,
                spottimes:55,
                comments:341,
           }
           ]
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
        },
         ReadHandle(id){
         let e = this.data[id].spottimes;
               switch(this.data[id].status) {
                case '1' :{
                    this.data[id].spottimes = e+1;
                    this.data[id].status='2';
                    break;
                }
                //  case '2' :{
                //     this.data[id].spottimes=e+1;
                //     break;
                // }
                 case '3' :{
                    this.data[id].spottimes=e+1;
                    this.data[id].status='4';
                    break;
                }
                //  case '4' :{
                //     this.data[id].spottimes=e+1;
                //     break;
                // }
               }
        }      
    }
}

)
</script>
<style lang="less" scoped>

</style>