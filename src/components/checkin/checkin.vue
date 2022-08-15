<template>
    <div class="checkin-container" > 
         <div  class="checkin-container-main"> 
                <div  class="checkin-container-icon"> 
                    <calender/>
                </div>
                  <div class="checkin-container-time" > 
                        {{this.timeAnalysis()}}
                </div>
                  <div  class="checkin-container-btn"> 
                      <el-button @click="this.$router.push('/user/center/signin')" class="el-btn" type="primary" round plain>去签到</el-button>
                </div>
          </div>
            <div  class="checkin-container-slogan"> 
                  点亮你在社区的每一天
          </div>
       </div>
</template>

<script >
import { defineComponent } from 'vue'
import  calender from '@/assets/icons/calendar.svg'

export default defineComponent({
    name:'check-in-port',
    components:{  
      calender
    },
    methods:{
        timeAnalysis(){
        let now = new Date()
        let hour = now.getHours() 
          if(hour < 6){return("凌晨好！")} 
          else if (hour < 9){return("早上好！")} 
          else if (hour < 12){return("上午好！")} 
          else if (hour < 14){return("中午好！")} 
          else if (hour < 17){return("下午好！")} 
          else if (hour < 19){return("傍晚好！")} 
          else if (hour < 22){return("晚上好！")} 
          else {return("该休息啦！")} 
        }
    },
    setup(){
    
    return {  
        
      }
     }
})  

</script>
<style lang="less" scoped>
  .checkin-container{
     margin: 20px 0;
     cursor: pointer;
     background: #fff;
     position: relative;
     .checkin-container-main{
      margin-top: 2px;
      display:flex;
      flex-flow: row;
      width:100%;
      height:30%;
      .checkin-container-icon{
        width:10%;
        padding:5% 5% 0 5%;
      }
      .checkin-container-time{
          width:42%;
          text-align: left;
          font-size:18px;
          font-weight:500;
          padding:5% 0%;
      }
      .checkin-container-btn{
            width:40%;
            padding:5% 5% 0 0%;
            .el-btn{
                background-color:#fff;
                color:#1e80ff   
            }
            .el-btn:hover{
                background-color:#ecf5ff;
                color:#1e80ff
            }
      }
     }
     .checkin-container-slogan{
          color:#4e5969;
           padding:0% 20% 5% 20%;
           font-size: 14px;
          font-weight: 400;
     }
  } 
</style>