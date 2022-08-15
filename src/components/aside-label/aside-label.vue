<template>
    <div>
            <div class="panel-wrapper">
                    <thumbUpPanel class="panel-item"
                                 :thumbUpTimes="TimeHandle(this.data.thumbUp)" 
                                 :thumbUpState="TimeHandle(this.data.thumbUpActive)"
                                 @click="ActiveHandle(0,this.data.thumbUpActive)"/>
                    <commentPanel class="panel-item"  :commentTimes="TimeHandle(this.data.comment)"/>
                    <subsPanel class="panel-item"/>
                    <shareActivePanel class="panel-item"/>
                    <hr class="panel-col"/>
                    <reportPanel class="panel-item"
                                 :index="this.data.id"/>
                  <stickPanel class="panel-item"/>
            </div>
            <div class="active-panel-wrapper">
              
            </div>
    </div> 
</template>
<script>

import shareActivePanel from "./aside-label-sharing/aside-label-sharing.vue"
import commentPanel from "./aside-label-panel/Comment.vue"
import reportPanel from "./aside-label-panel/Reporting.vue"
import sharePanel from "./aside-label-panel/Sharing.vue"
import stickPanel from "./aside-label-panel/StickyMode.vue"
import subsPanel from "./aside-label-panel/Subscribe.vue"
import thumbUpPanel from "./aside-label-panel/ThumbUp.vue"
export default {
    name:"aside-label-board",
    emits: ['changeParentProps'],
    setup(){
        const TimeHandle =(e)=>{
            return e;
        }
        return {
            TimeHandle,
        }
    },
    data(){
        return{
           data:{
                id:"1",
                 thumbUp:10,
                 thumbUpActive:false,
                 comment:1,
                 thumbUpActive:false}
        }
    },
    methods:{
        ActiveHandle(sort,status){
             switch(sort){
                case 0 :{if(status) {
                    this.data.thumbUp=this.data.thumbUp-1;
                    this.data.thumbUpActive=false;
                    break;
                } else if(!status){
                    this.data.thumbUp=this.data.thumbUp+1;
                    this.data.thumbUpActive=true;
                    break;
                }}
                case 1 :{if(status) {
                    this.data.thumbUp= this.data.thumbUp-1;
                    this.data.thumbUpActive=false;
                    break;
                } else{
                      this.data.thumbUp=this.data.thumbUp+1;
                    this.data.thumbUpActive=true;
                    break;
                }}
            }
        }
    },
    components:{
        commentPanel,
        reportPanel,
        stickPanel,
        subsPanel,
        sharePanel,
        thumbUpPanel,
        shareActivePanel
    }
}
</script>
<style lang="less" scoped>
    .panel-wrapper{
        margin:5%;
        width:100px;
        height:800px;
        background-color: transparent;
        display: flex;
        flex-flow:column;
        .panel-item{
        width:5rem;
        height:5rem;
        float:center;
        }
         .panel-col{
        width:3rem;
        height:0.1rem;
        border:none;
        float:left;
        background-color:#ffffff;
        }
    }
    
</style>