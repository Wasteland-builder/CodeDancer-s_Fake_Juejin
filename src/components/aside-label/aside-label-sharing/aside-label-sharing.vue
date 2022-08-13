<template>
  <el-popover placement="right" :width="100" v-model:visible="visible">
    <div class="list-aside-share-container">
      <el-popover placement="right" :width="100" trigger="hover">
      <template #reference>
        <div class="list-aside-share-border"> 
        <img src="../../../assets/icons/wechat.svg" class="list-aside-iconsvg" />
        <div ckass="list-aside-aside-text"> 微</div>
          <div ckass="list-aside-aside-text"> 信</div>
        </div>
      </template>
              <img src="../../../assets/icons/qrcode.jpg" style="width:128px;align:center" />
    </el-popover>
   
       <div class="list-aside-share-border">
       <img src="../../../assets/icons/weibo.svg" class="list-aside-iconsvg" />
        <div  ckass="list-aside-aside-text">新</div>
        <div  ckass="list-aside-aside-text">浪</div>
        <div  ckass="list-aside-aside-text">微</div>
        <div  ckass="list-aside-aside-text">博</div>
      </div>
        <div class="list-aside-share-border">
       <img src="../../../assets/icons/QQ.svg" class="list-aside-iconsvg" />
        <div  ckass="list-aside-aside-text">Q</div>
          <div  ckass="list-aside-aside-text">Q</div>
      </div>
       </div> 
  <template #reference>
    <el-affix>
           <div class="list-aside-sharing">
                  <div class="list-aside-border">
                      <img src="../../../assets/icons/sharing.svg" class="list-aside-iconsvg" />
                 </div>
         </div>
    </el-affix>
  </template>
</el-popover>
<sharingPanel/>
</template>

<script>
  export default {
    namew:"sharingActivePanel",
    component:{
    },
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
<style lang="less" scoped>
.list-aside-share-container{
    margin:2% 5%;
    width:100px;
    height:128px;
    display: flex;
     flex-flow:column;
    .list-aside-share-border{
        margin:5% 2% 0 2%;
        width:6rem;
        height:3rem;
        background-color: #fff;
        display: inline-flex;
        .list-aside-aside-text{
          float:inline
        }
        .list-aside-iconsvg{
            padding: 2% 25% 2% 25%;
            vertical-align: middle;
            width:2rem;
            height:2rem;
            fill: #8a919f;
        }
        .list-aside-iconsvg:hover {
            padding: 2% 24% 2% 24%;
            vertical-align: middle;
            width:2.2rem;
            height:2.2rem;
            fill: #515767;
            }
     }
}
.list-aside-sharing{
    margin:2% 20%;
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
.list-aside-sharing-border{
     width:100px;
     height:300px;
     display: flex;
}   
</style>