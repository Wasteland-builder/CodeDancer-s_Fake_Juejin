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
                    <el-button size="large" type="primary" @click="this.DialogVisible = false"
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
  .list-dialog-header{
    font-size:3rem;
  } 
  .list-dialog-sub-header{
    
  }   
}
</style>
<script>
import { ref } from 'vue'
import subscribeIcon from '@/assets/icons/subscribeStar.svg'
export default ({
    name: 'ListWarning',
    components:{
        subscribeIcon
    },
    setup(){
        const DialogVisible = ref(false);
        return {
            DialogVisible
        } 
        } 
    })
</script>
