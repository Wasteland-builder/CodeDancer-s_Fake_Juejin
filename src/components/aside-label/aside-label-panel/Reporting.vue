<template>
    <div @click="this.DialogVisible= true">
        <div class="list-aside-reporting">
            <div class="list-aside-border">
                <warningIcon class="list-aside-iconsvg"/>
            </div>
        </div>
  <el-dialog
    v-model="DialogVisible"
    width="650px"
    destroy-on-close
    border-radius="12px"

  >
  <template #header>
     <p style="font-size:1.8rem;font-weight:512px;color:#515767;margin:2% 5%"> 举报反馈 </p>
     <hr/>
     <div style="font-size:1.15rem;;color:#515168;">掘金工作人员会尽快受理你的举报，随后将通过站内信告知你处理的结果，请尽量补充完整描述</div>
 </template>  
    <div class="list-reporting">
        <el-tabs class="list-reporting-paragraph">
            <span style="color:red;font-size:1.15rem">* </span>
            <span style="font-size:1.2rem">请选择一项投诉原因</span>
        </el-tabs>
        <el-tabs class="list-reporting-paragraph">
        <span style="font-size:1.2rem">内容违规</span>   
        </el-tabs>
        <el-tabs class="list-reporting-paragraph">
                   <!-- <el-radio-group> -->
                          <el-button 
                            size="large"
                            class="list-reporting-radio" 
                            color="#f2f3f5"
                            dark="#eaf2ff"> 低俗色情 </el-button >
                            <el-button 
                            size="large"
                            class="list-reporting-radio" 
                           color="#f2f3f5"
                            dark="#eaf2ff">内容抄袭 </el-button >
                              <el-button 
                            size="large"
                            class="list-reporting-radio" 
                             color="#f2f3f5"
                            dark="#eaf2ff">涉嫌违法 </el-button >
                              <el-button
                            size="large" 
                            class="list-reporting-radio" 
                            color="#f2f3f5"
                            dark="#eaf2ff"> 恶意营销 </el-button >
                 <!-- </el-radio-group>           -->
        </el-tabs>
        <el-tabs class="list-reporting-paragraph">
        <span style="font-size:1.2rem">侵犯权益</span>   
        </el-tabs>
        <el-tabs class="list-reporting-paragraph">
                   <!-- <el-radio-group> -->
                          <el-button 
                            size="large"
                            class="list-reporting-radio" 
                            color="#f2f3f5"
                            dark="#eaf2ff"> 侵犯名誉/隐私/著作/肖像权等</el-button >
                         
        </el-tabs>
         <el-tabs class="list-reporting-paragraph">
        <span style="font-size:1.2rem">其他原因</span>   
        </el-tabs>
        <el-tabs class="list-reporting-paragraph">
                          <el-button 
                            size="large"
                            class="list-reporting-radio" 
                            color="#f2f3f5"
                            dark="#eaf2ff">其他原因</el-button >
                         
        </el-tabs>
        <el-tabs class="list-reporting-paragraph">
            <span style="color:red;font-size:1.15rem">* </span>
            <span style="font-size:1.2rem">补充说明</span>
        </el-tabs>
        <el-input v-model="descriptionAdd"
                :autosize="{ minRows: 3, maxRows: 5}"
                type="textarea"
                placeholder="请输入举报相关的补充说明">
             </el-input> 
        <el-tabs class="list-reporting-paragraph">
            <span style="font-size:1.2rem">图片示例</span>
        </el-tabs>
         <el-tabs class="list-reporting-paragraph">
            <span style="font-size:1.2rem">你可以上传相关证据或涉及举报内容具体位置的图片，帮助工作人员更快地核实处理
            </span>
        </el-tabs>
        <supportUpload> </supportUpload>
    </div>
     <template #footer>
      <span class="dialog-footer">
        <el-button size="large" @click="centerDialogVisible = false">取消</el-button>
        <el-button size="large" type="primary" @click="centerDialogVisible = false"
          >确定举报</el-button>
      </span>
    </template>
  </el-dialog>
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
export default ({
    name: 'ListWarning',
    components:{
        warningIcon,
        supportUpload
    },
   setup(){
        const DialogVisible = ref(false);
        return {
            DialogVisible
        } 
        },     
    
})
</script>
