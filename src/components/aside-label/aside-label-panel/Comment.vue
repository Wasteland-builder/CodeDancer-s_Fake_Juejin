<template>
        <div class="list-aside-commenting">
            <div class="list-aside-border">
                <div class="list-aside-align-top" v-if="this.propsStateCheck()">{{this.commentTime}}</div>
                    <commentIcon :class="this.listIconCss"/>
            </div>
        </div>
</template>
<script>
import commentIcon from '@/assets/icons/commenting.svg'
import { defineComponent} from 'vue'
    
export default defineComponent({
    name: 'ListWarning',
    props:{
        commentTimes:Number,
        default:0
    },
    computed:{
      normalizedSize:()=>{
        return this.commentTimes.trim().toLowerCase()
      }
    },
    setup(props){
      return{
        
        }
    },
    components:{
        commentIcon
    },
    data(){
        return{
            commentTime:this.commentTimes,
            listIconCss:''
        }
    },
    methods:{
       propsStateCheck(){
            if (this.commentTimes === 0){
                this.listIconCss="list-aside-iconsvg-none"
            return false
            }
           this.listIconCss="list-aside-iconsvg"
            return true
        }
    }
})
</script>

<style lang="less" scoped>
.list-aside-commenting{
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
        
     }
     .list-aside-btn{
        width:100px;
        height:100px;
     }
}
</style>
