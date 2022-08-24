<template>
<div @click="this.DialogVisible=true">
        <div  class="list-aside-reporting">
            <div class="list-aside-border">
             <subscribeIcon class="list-aside-iconsvg"/>
            </div>
        </div> 
              <el-dialog v-model="this.DialogVisible"  width="30%" >
                 <template #header>
                    <div class="list-dialog-header">
                        选择收藏夹
                    </div>
                     <div class="list-dialog-sub-header">
                        选择或创建你想添加的收藏集
                    </div>

                </template>
                <template #footer >
                <span class="dialog-footer">
                    <div class="dialog-footer-left" @click="this.createDialogVisible = true">
                        <addIcon style="width: 20;height:20;">  </addIcon>
                         <a style="color:#1e80ff">新建收藏夹</a>
                    </div>
                    <el-button size="large" type="primary" @click="this.DialogVisible = false"
                    >确定</el-button
                    >
                </span>
                </template>
            </el-dialog>
                <el-dialog v-model="this.createDialogVisible"  width="30%" >
                 <template #header>
                    <div class="list-dialog-header">
                        新建收藏夹
                    </div>
                     <div class="list-dialog-main">
                        <div style="display: flex; margin:10px"> 
                           <span style="width: 10%">名称: </span><el-input placeholder="请输入收藏夹名称"/>
                         </div> 
                         <div style="display: flex; margin:10px">
                            <span style="width: 10%">描述: </span> <el-input type="textarea" :rows="6" placeholder="请输入收藏描述(限100字,选填)" v-model="textarea"></el-input>
                         </div>   
                    </div>
                    <div class="list-dialog-status">
                        <div> 
                            <el-radio-group v-model="this.radiostatus" >
                                <el-radio :label="1">
                                    <div style="display: flex;">
                                        <span style="color=#000000;font-weight:550; margin:0 10px">
                                            公开
                                            </span>
                                            <span style="color=#8a919f;font-weight:500;">
                                            当其他人关注此收藏集后不可再更改为隐私
                                            </span>
                                        </div>
                                </el-radio>
                                     
                                  <el-radio :label="2">
                                    <div style="display: flex;">
                                        <span style="color=#000000;font-weight:550; margin:0 10px">
                                            隐私
                                            </span>
                                             <span style="color=#8a919f;font-weight:500;">
                                            仅自己可见此收藏集
                                            </span>
                                        </div>
                                </el-radio>
                            </el-radio-group>
                        </div>   
                    </div>
                </template>
                <template #footer >
                <span>
                      <el-button size="large" @click="this.createDialogVisible = false"
                    >取消</el-button>
                    <el-button size="large" type="primary" @click="this.createDialogVisible = false"
                    >确定</el-button
                    >
                </span>
                </template>
            </el-dialog>

       </div> 
</template>
<style lang="less" scoped>
.list-aside-reporting{
     margin:0% 30%;
    width:200px;
     height:100px;
     display: flex;
.list-aside-border{
        margin:10% 5% 0 5%;
        width:4rem;
        height:4rem;
        border-radius:50%;
        background-color: #fff;
      .list-aside-iconsvg{
             padding: 25% 25% 25% 25%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
            fill: #8a919f;
    
        }
        .list-aside-iconsvg:hover {
            padding: 25% 24% 25% 24%;
            vertical-align: middle;
            width:2.2rem;
            height:2.2rem;
            fill: #515767;
            }
     }
}
 .list-dialog-header{
    font-size:1.6rem;
    text-align: center;
    font-weight: 600;
  } 
  .list-dialog-status{

  }
  .list-dialog-main{
    margin:5% 0;
  }
  .list-dialog-sub-header{
    font-size:1rem;
    text-align: center;
    font-weight: 400;
    color:#8a919f
  } 
  .dialog-footer{
    display:flex;
    flex-flow: row;
    .dialog-footer-left{
        width:80%;
         height:10%;
        text-align: left;
        font-size:1.2rem;
        color:#1e80ff;
    }
  }

</style>
<script>
import { ref } from 'vue'
import subscribeIcon from '@/assets/icons/subscribeStar.svg'
import addIcon from '@/assets/icons/plus.svg'
export default ({
    name: 'ListWarning',
    components:{
        subscribeIcon,addIcon
    },
    setup(){
        const DialogVisible = ref(false);
        const createDialogVisible = ref(false);
         const radiostatus = ref("1");
        const cataglory = ref([{
             cataName:"收藏夹1",
             passageNum:"5",
             subscribe:"0",
             type:"1",
        }
        ]);
        return {
            DialogVisible,
            createDialogVisible,
            cataglory,
            radiostatus
        } 
        } 
    })
</script>
