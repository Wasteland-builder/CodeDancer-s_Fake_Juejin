<template>
        <div class="content-container-thumbup">
                    <thumbUpIconSolid v-if="this.data.thumbUpActive" :class="this.listIconCss"/>
                    <thumbUpIcon v-if="!this.data.thumbUpActive" :class="this.listIconCss"/>
                     <div :class="this.listTimesCss" v-if="this.propsStateCheck(this.data.thumbUpState)">{{this.data.thumbUpTime}}</div>
                     <div :class="this.listTimesCss" v-if="!this.propsStateCheck(this.data.thumbUpState)">点赞</div>
       </div>            
</template>
<script>
import thumbUpIcon from '@/assets/icons/thumbUpLight.svg'
import thumbUpIconSolid from '@/assets/icons/thumbUp.svg'
import { defineComponent} from 'vue'
    
export default defineComponent({
    name: 'ListWarning',
    props:{
        thumbUpTimes:Number,
        thumbUpState:String,
        default:0
    },
    computed:{
      normalizedSize:()=>{
        return [
                this.thumbUpTimes.trim().toLowerCase(),
                 this.thumbUpState.trim().toLowerCase()
        ]
           
      },
      normalizedSize:()=>{
        return 
      }
    },
      watch:{
        thumbUpTimes:{
            deep:true,
            handler(news){
                this.data.thumbUpTime=news;
            }
        },
        thumbUpState:{
            deep:true,
            handler(news){
                this.data.thumbUpState=news
            }
        },
    },
   
    setup(){
      return{
        }
    },
    components:{
        thumbUpIcon,
        thumbUpIconSolid
    },
    data(){
        return{
            data:{
               thumbUpState:this.thumbUpState,
            thumbUpTime:this.thumbUpTimes,
            thumbUpActive:false,     
            },
            listIconCss:'',
            listTimesCss:''
        }
    },
    methods:{
     propsStateCheck(e){
           switch(e){
                    case '1':{
                        this.data.thumbUpActive=false;
                        this.listIconCss="content-container-iconsvg"
                         this.listTimesCss="content-container-content" 
                         break;
                    }
                    case '2':{
                          this.data.thumbUpActive=false;
                        this.listIconCss="content-container-iconsvg"
                         this.listTimesCss="content-container-content"
                          break;
                    }
                    case '3':{
                         this.data.thumbUpActive=true;
                        this.listIconCss="content-container-iconsvg-active"
                         this.listTimesCss="content-container-content-active"
                          break;
                    }
                    case '4':{
                        this.data.thumbUpActive=true;
                        this.listIconCss="content-container-iconsvg-active"  
                         this.listTimesCss="content-container-content-active"
                          break;
                    }
                }
            if(this.data.thumbUpTime===0){
                return false
            }   
            else   return true
        }
    }
})
</script>

<style lang="less" scoped>
.content-container-thumbup{
     width:5rem;
     height:2rem;
     display: flex;
     flex-flow: row;
       .content-container-iconsvg-none{
           margin:0 auto;
           padding: 30% 30% 30% 30%;
            vertical-align: middle;
           width:1.5rem;
            height:1.5rem;
            fill: #8a919f;
        }
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
            width:1.5rem;
            height:1.5rem;
            color: #1e80ff;
            float:left
            }           
}
</style>
