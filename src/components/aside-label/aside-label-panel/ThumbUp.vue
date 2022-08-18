<template>
        <div class="list-aside-reporting">
            <div class="list-aside-border">
                <div :class="this.listTimesCss" v-if="this.propsStateCheck()">{{this.data.thumbUpTime}}</div>
                    <thumbUpIcon :class="this.listIconCss"/>
            </div>
        </div>
</template>
<script>
import thumbUpIcon from '@/assets/icons/thumbUp.svg'
import { defineComponent} from 'vue'
    
export default defineComponent({
    name: 'ListWarning',
    props:{
        thumbUpTimes:Number,
        thumbUpState:Boolean,
        default:0
    },
    computed:{
      normalizedSize:()=>{
        return [this.thumbUpTimes.trim().toLowerCase(),
                this.thumbUpState.trim().toLowerCase()
                ]
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
                this.data.thumbUpActive=news
            }
        },
    },
   
    setup(){
      return{
        }
    },
    components:{
        thumbUpIcon
    },
    data(){
        return{
           data:{
            thumbUpActive:this.thumbUpState,
            thumbUpTime:this.thumbUpTimes,
           }, 
            listIconCss:'',
            listTimesCss:''
        }
    },
    methods:{
       propsStateCheck(){
            if (this.thumbUpTimes === 0){
                this.listIconCss="list-aside-iconsvg-none",
                this.listTimesCss="list-aside-align-top"
                return false
            }
           else if(this.thumbUpActive){
            this.listIconCss="list-aside-iconsvg-active"
            this.listTimesCss="list-aside-align-top-active"
            return true
           }
           this.listIconCss="list-aside-iconsvg"
           this.listTimesCss="list-aside-align-top"
           return true
        }
    }
})
</script>

<style lang="less" scoped>
.list-aside-reporting{
    margin:2% 25%;
     width:200px;
     height:100px;
     display: flex;
.list-aside-border{
        margin:10% 5% 0 5%;
        width:4rem;
        height:4rem;
        border-radius:50%;
        background-color: #fff;
       .list-aside-iconsvg-none{
             padding: 30% 30% 30% 30%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            fill: #8a919f;
    
        }
        .list-aside-iconsvg-none:hover {
             padding: 25% 30% 25% 30%;
            vertical-align: middle;
            width:1.8rem;
            height:1.8rem;
            fill: #515767;
            }
         .list-aside-iconsvg{
             padding:0 30% 24% 30%;
            vertical-align: middle;
            width:1.5rem;
            height:1.5rem;
            fill: #8a919f;
            float:left
        }
        .list-aside-iconsvg:hover {
         padding:0 30% 24% 30%;
            vertical-align: middle;
            width:1.8rem;
            height:1.8rem;
            fill: #515767;
             float:left
            }
        .list-aside-align-top{
            background:#c2c8d1;
            color:#f4f5f5;
            width:1.5rem;
            height: 1.5rem;
            border-radius: 0.9rem;
            font-size:0.75rem;
            flex-flow: right;
            float:right;
            text-align:center;
        } 
         .list-aside-iconsvg-active {
            padding:0 30% 24% 30%;
            vertical-align: middle;
            width:1.8rem;
            height:1.8rem;
            fill: #1e80ff;
             float:left
            }
        .list-aside-align-top-active{
            background:#1e80ff;
            color:#f4f5f5;
            width:1.5rem;
            height: 1.5rem;
            border-radius: 0.75rem;
            font-size: 0.5rem;
            flex-flow: right;
            float:right;
            text-align:center;
        }   
        
     }
     .list-aside-btn{
        width:100px;
        height:100px;
     }
}
</style>
