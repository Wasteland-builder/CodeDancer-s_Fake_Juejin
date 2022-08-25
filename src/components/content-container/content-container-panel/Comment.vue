
<template>
        <div class="content-container-comment">
                    <commentIcon class="content-container-iconsvg"/> 
                     <div :class="this.listTimesCss" v-if="this.propsStateCheck()">{{this.commentTime}}</div>
                     <div :class="this.listTimesCss" v-if="!this.propsStateCheck()">点赞</div>
       </div>            
</template>
<script>
import commentIcon from '@/assets/icons/Comment.svg'
import { defineComponent} from 'vue'
    
export default defineComponent({
    name: 'ListWarning',
    props:{
        commentTimes:Number,
        default:0
    },
    computed:{
      normalizedSize:()=>{
        return [
                this.commentTimes.trim().toLowerCase()
        ]
           
      }
    },
      watch:{
        commentTimes:{
            deep:true,
            handler(news){
                this.commentTime=news;
            }
        }
    },
   
    setup(){
      return{
        }
    },
    components:{
        commentIcon
    },
    data(){
        return{
            commentTime:this.commentTimes,
            listIconCss:'',
            listTimesCss:''
        }
    },
    methods:{
     propsStateCheck(){
       
             this.listIconCss ="content-container-iconsvg"
             this.listTimesCss ="content-container-content" 
            if(this.commentTime === 0){
                return false
            }   
            else   return true
        }
    }
})
</script>

<style lang="less" scoped>
.content-container-comment{
     width:5rem;
     height:2rem;
     display: flex;
     flex-flow: row;
       
        .content-container-iconsvg{
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            fill: #8a919f;
            float:left
        }
        .content-container-iconsvg:hover{
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            fill: #1e80ff;
            float:left
        }
         .content-container-iconsvg-active {
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            fill: #1e80ff;
            float:left
            } 
        .content-container-content{
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            color: #8a919f;
            float:left
        }
        .content-container-content:hover {
            margin:0 auto;
              padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            color: #1e80ff;
             float:left
            }
         .content-container-content-active {
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
            color: #1e80ff;
            float:left
            }           
}
 .content-header-pop{
      width:240px;
      height:200px;
      display:flex;
      flex-flow: column;
      text-align:center 
      .pop-header{
            width:100%;
           height:50%;
      }
       .pop-button{
          width:100%;
           height:30%;
        
      }
       .pop-info{
           width:100%;
           height:20%;
           display:flex;
           flex-flow: row;
           .pop-info-left{
               width:50%;
               height:90%;
           }
             .pop-info-left{
              width:50%;
               height:90%;
           }
      }
 }
</style>
