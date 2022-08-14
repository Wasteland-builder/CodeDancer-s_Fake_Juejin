
<template>
        <div class="content-container-close">
              <el-popover placement="left" :width="180"  trigger="click">
                    <div class="close-pop-container">
                          <div class="close-pop-container-label" @click="this.BoringHandle()">
                             <unhappyIcon  class="close-pop-container-label-svg"  style=" width:10%;height: 1.6rem;"/>  不感兴趣
                           </div>
                               <el-popover placement="bottom" :width="30" trigger="hover">
                                            <div style="text-align:center">
                                                    屏蔽作者:{{this.author}}
                                                 </div>
                                         <template #reference>
                                            <el-affix >
                                                <div class="close-pop-container-label"  @click="this.Active.BanUser= true">
                                                       <skipUserIcon  class="close-pop-container-label-svg" 
                                                       style=" width:10%;height: 1.6rem;"/>  屏蔽作者:{{this.author}}
                                                 </div>
                                            </el-affix>  
                                            </template>
                               </el-popover>
                            <div class="close-pop-container-label" @click="this.HandleBanLabel(this.Active.BanLabel)">
                                <crossLabelIcon   class="close-pop-container-label-svg"  style=" width:10%;height: 1.6rem;"/>屏蔽标签
                           </div>
                            <div class="close-pop-container-ban-label" v-if="this.Active.BanLabel" >
                                <div class="close-pop-container-ban-label-detail" v-for="(item,index) in targetData" :key="'targer-'+index">
                                          <el-button style="width:2%:font-size:0.8rem"  >{{item}}</el-button>
                                    </div>
                                       <div class="close-pop-container-ban-label-button">
                                           <el-button style='width:55%' type='primary'>确定屏蔽</el-button>
                                    </div>
                           </div>
                            <div class="close-pop-container-label"  @click="this.Active.Report= true">
                               <warningIcon  class="close-pop-container-label-svg"  style=" width:10%;height: 1.6rem;"/> 举报
                           </div>
                      </div>
                <template #reference>
                  <el-affix class="content-container">
                    <closeIcon class="content-container-iconsvg"/> 
                   </el-affix>  
                </template>
        </el-popover> 

            <el-dialog
                v-model="this.Active.BanUser"
                width="40%"
                :before-close="handleClose"
                >
               <p style="font-size:1.5rem;text-align:center"> <span>确定屏蔽 </span><span  style="font-size:1.5rem;text-align:center;color:#ff8350">{{this.author}}</span><span>吗？ </span></p>
                <p  style="font-size:1.5rem;text-align:center"> 首页推荐中将不再展示该作者文章 </p>
                
                  <div style="float:center;width:50%;margin-top:1rem;padding:5% 25%">
                    <el-button style="width:30%;margin:0% 10%" @click="this.Active.BanUser = false">取 消</el-button>
                    <el-button  style="width:30%;margin:0% 10%" type="primary" @click="this.BanUserHandle()">确 定</el-button>
                </div>
                </el-dialog>
                <Reporting :index="this.index" :active="this.Active.Report"/>
      </div>            
</template>
<script >
import closeIcon from '@/assets/icons/close.svg'
import skipUserIcon from '@/assets/icons/skipUser.svg'
import crossLabelIcon from '@/assets/icons/crossLabel.svg'
import unhappyIcon from '@/assets/icons/unhappy.svg'
import warningIcon from '@/assets/icons/warning.svg'
import Reporting from '@/components/reporting/reporting.vue'
import { defineComponent,h } from 'vue'
import { ElMessage } from 'element-plus'
export default defineComponent({
    name: 'ListWarning',
    props:{
        index:Number,
        author:String,
        target:Array,
        default:0
    },
    computed:{
      normalizedSize:()=>{
        return [
                this.id.trim().toLowerCase(),
                this.author.trim().toLowerCase(),
                this.target,
        ]
           
      }
    },
      watch:{
        id:{
            deep:true,
            handler(news){
                this.index=news;
            }
        },
         author:{
            deep:true,
            handler(news){
                this.author=news;
            }
        },
        target:{
            deep:true,
            handler(news){
                this.targetData=news;
            }
        }

    },
    setup(){
   
      return{
        }
    },
    components:{
        closeIcon,skipUserIcon,crossLabelIcon,unhappyIcon,warningIcon,Reporting
    },
    data(){
        return{
            index:this.index,
            author:this.author,
            LabelBoxHeight:'',
            targetData:this.target,
            Active:{
                Boring:false,
                BanUser:false,
                BanLabel:false,
                Report:false
            }
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
        },
      BoringHandle (){
       ElMessage.success({
            message: '将减少此类内容推荐',
            type: 'success',
          })
        this.Active.Boring= false;
     },
       BanUserHandle(){
          ElMessage.success({
               message : h ('p', null, [    
              h ('span', {style:'font-size:1rem;text-align:center'}, '将不再推荐该作者文章，在 '),
               h ('span', {style:'font-size:1rem;color:#388fff;text-align:center'}, '『屏蔽管理』 '),
                 h ('span', {style:'font-size:1rem;text-align:center'}, '可取消屏蔽 '),
            ])
          })
         this.Active.BanUser= false;
     },
     BanLabelHandle (){
         this.Active.BanLabel= false;
     },
     HandleBanLabel(e){
         if (e) {
            this.Active.BanLabel= false;
            this.LabelBoxHeight='240';
           
         }
         else if (!e ) {
            this.Active.BanLabel= true;
            this.LabelBoxHeight='300';
         }
          console.log(this.Active.BanLabel)
     },
     ReportHandle (){
         this.Active.Report= false;
     } 
    }
})
</script>

<style lang="less" scoped>
.content-container-close{
     width:5rem;
     height:5rem;
     display: flex;
     flex-flow: row;
       
        .content-container-iconsvg{
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1rem;
            height:1rem;
            fill: #8a919f;
            float:left
        }
        .content-container-iconsvg:hover{
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:1rem;
            height:1rem;
            fill: #1e80ff;
            float:left
        }
         .content-container-iconsvg-active {
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
            fill: #1e80ff;
            float:left
            } 
        .content-container-content{
            margin:0 auto;
            padding:0 10% 24% 2%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
            color: #8a919f;
            float:left
        }
        .content-container-content:hover {
            margin:0 auto;
              padding:0 10% 24% 2%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
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
.close-pop-container{
     width:24rem;
     height:auto;
    .close-pop-container-label{
        margin:2% 0%;
        width:100%;
        height:20%;
        font-size:1rem;
       .close-pop-container-label-svg{
             width:10%;
             height:80%;
        }
    }
    .close-pop-container-ban-label{
            width:100%;
            height:20%;
            .close-pop-container-ban-label-detail{
                width:100%;
                height:65%;
                display:inline;
                flex-flow: row;
            }
            .close-pop-container-ban-label-button{
                width:100%;
                height:35%;
            }
        }
}
</style>
