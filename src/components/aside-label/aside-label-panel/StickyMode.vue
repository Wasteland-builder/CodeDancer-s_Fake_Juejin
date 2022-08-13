<template>
        <div class="list-aside-reporting">
            <div class="list-aside-border">
                      <focusIcon class="list-aside-iconsvg"/>
            </div>
        </div>
</template>
<style lang="less" scoped>
.list-aside-reporting{
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
     .list-aside-btn{
        width:100px;
        height:100px;
     }
}
</style>
<script>
import focusIcon from '@/assets/icons/focusMode.svg'
export default ({
    name: 'ListWarning',
    components:{
        focusIcon
    },
   setup(){
            
        },     
    
})
</script>
