<template>
  <el-dialog
    v-model="this.dataparmas.centerDialogVisible"
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
        <el-input v-model="this.dataparmas.descriptionAdd"
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
        <el-button size="large" @click="this.HandleActive()">取消</el-button>
        <el-button size="large" type="primary" @click="this.HandleActive()"
          >确定举报</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style lang="less" scoped>
     .list-reporting{
       margin:0 2% 0 2%;
       .list-reporting-paragraph{
          line-height:30px;
          width:100%;
        }
          .list-reporting-radio{
            margin:0 4%;
            border-radius:5px;
        }
         }
</style>
<script>
import supportUpload from '@/components/el-upload/el-upload.vue'
export default ({
    name: 'ListWarning',
    emits:['submitReport'],
    props:{
        active:Boolean,
        index:String
    },
    components:{
        supportUpload
    },
   setup(){
        },
    computed:{
      
      normalizedSize:()=>{
        return (
            [  this.index.trim().toLowerCase(),
                this.active.trim().toLowerCase()
              ]
        )
         
      },
    },
    methods:{
      HandleActive(){
        this.dataparmas.centerDialogVisible = false
          this.$emit('submitReport',false)
      }

    },
    watch:{
         index:{
            deep:true,
            handler(news){
                this.dataparmas.index=news;
            }
        },
         active:{
            deep:true,
            handler(news){
                this.dataparmas.centerDialogVisible=news;
                console.log(this.dataparmas.centerDialogVisible)
            }
        }
    },
    data(){
        return{
            dataparmas:{
             index:this.index,
             centerDialogVisible:this.active,
             descriptionAdd:false
            }
        }
    }         
    
})
</script>
