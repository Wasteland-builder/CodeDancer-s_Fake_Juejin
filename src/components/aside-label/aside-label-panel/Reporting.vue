<template>
    <div @click="this.dialogVisible= true">
        <div class="list-aside-reporting">
            <div class="list-aside-border">
                <warningIcon class="list-aside-iconsvg"/>
            </div>
        </div>
        <Reporting @submitReport="activeHandle" :active="this.dialogVisible" :index="this.passageindex"/>
 </div>
</template>
<style lang="less" scoped>
.list-aside-reporting{
     margin:0% 30% 15% 30%;
     width:200px;
     height:100px;
     display: flex;
.list-aside-border{
        margin:0% 5% 0 5%;
        width:4rem;
        height:4rem;
        border-radius:50%;
        background-color: #fff;
         .list-aside-iconsvg{
             padding: 25% 25% 25% 25%;
            vertical-align: middle;
            width:1.8rem;
            height:1.8rem;
            fill: #8a919f;
    
        }
        .list-aside-iconsvg:hover {
             padding: 25% 20% 24% 20%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
            fill: #515767;
            }
        
     }
    //    style="margin:0 2%;border-radios:5px" 
     .list-reporting{
       margin:0 2% 0 2%;
       .list-reporting-paragraph{
          line-height:30px;
          width:100%;
        }
          .list-reporting-radio{
            margin:0 5%;
            border-radius:5px;
        }
         }
       
          
     }
 
</style>
<script>
import { ref } from 'vue'
import warningIcon from '@/assets/icons/warning.svg'
import supportUpload from '@/components/el-upload/el-upload.vue'
import Reporting from '@/components/reporting/reporting.vue'
export default ({
    name: 'ListWarning',
    components:{
        warningIcon,
        supportUpload,
        Reporting
    },
    props:{
      index:String,
    },
    computed:{
      normalizedSize:()=>{
        return [
                this.index.trim().toLowerCase(),
        ]
           
      }
    },
    methods:{
      activeHandle(status){
         this.dialogVisible=status
        },
    },
   setup(){
        const centerDialogVisible = ref(false);
        return {
            centerDialogVisible
        } 
        },     
    data(){
      return{
        passageindex:this.index,
        dialogVisible:false
      }
    }
})
</script>
