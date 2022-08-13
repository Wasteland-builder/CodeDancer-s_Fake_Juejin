<template>
               
                <div class="list-aside-sharing">
                     <div class="list-aside-border">
                      <sharingIcon class="list-aside-iconsvg" />
                         </div>
                  </div>
</template>
<style lang="less" scoped>
.list-aside-sharing{
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
<script>
import sharingIcon from '@/assets/icons/sharing.svg'
export default  ({
    name: 'ListWarning',
    components:{
        sharingIcon
    },
   setup(){  
        },     
   data(){
    return{
     panelVisible:false,
    }
   },
   methods:{
        handleVisible(){
            this.panelVisible=true;
        }
   } 
})
</script>
