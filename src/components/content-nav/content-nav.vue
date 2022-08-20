<template>
    <div>
        <div class = "nav-main"> 
                   <el-tabs v-model="navValue"  @tab-click="this.handleClick()">
                        <el-tab-pane :label="item.label"  v-for="item in navList" :key="item.key" :name="item.value" >
                        </el-tab-pane>
                  </el-tabs>
                 <div v-if="this.activeSelect">
                   <el-select  class="nav-flitter"  v-model="value" filterable @selected="handleFilter()">
                    <el-option
                    v-for="item in fliter"
                    :key="item.key"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
                  </div>
        </div> 
        <div class="nav-loading" v-if="this.activeLoading">
            <div class="nav-loading-row"></div>
             <div class="nav-loading-row"></div>
            <div class="nav-loading-row"></div>
      </div>
      <div v-if="!this.activeLoading">
        <ContainContainer></ContainContainer>
      </div>
     </div>   
</template>

<script >
import {defineComponent} from 'vue'
import { ref } from 'vue'
import ContainContainer from '@/components/content-container/content-container.vue'
export default defineComponent({
    name:"content-nav",
    components:{
      ContainContainer
    },
    setup(){
           const handleFilter=()=>{   
                console.log(value);
            };
            const value = ref('1')
            const activeroute  = ref('')
            const navValue = ref("1")
            const fliter = [
            {
                value: '1',
                label: '3天内',
                key:"filter-1",
            },
            {
                value: '2',
                label: '7天内',
                key:"filter-2",
            },
            {
                value: '3',
                label: '30天内',
                key:"filter-3",
            },
            {
                value: '4',
                label: '全部',
                key:"filter-4",
            }
            ]
            const navList = [
                    {
                        label:"推荐",
                        key:"label-1",
                          value: '1',
                    },
                    {
                        label:"最新",
                        key:"label-2",
                          value: '2',
                    },
                    {
                        label:"热榜",
                        key:"label-3",
                          value: '3',
                    }

                        ]
        return{
            value,fliter,navList,activeroute,navValue
        }
    },
    data(){
      return{
        activeLoading:false,
        activeSelect:false,
        navValue:""
      }
    },
    methods:{
        
        handleClick(){  
          console.log(this.activeSelect) 
              this.activeLoading = true 
              //模拟页面的异步加载
              setTimeout(()=>{
               this.activeLoading = false    
              },1248)
              console.log(navValue.value)
               switch (navValue.value) {
                case '1':                   break;
                case '2':     break;
                case '3': this.activeSelect = true ;   break;
              }
            }
    }
})

</script>

<style lang="less" scoped>
@keyframes skeleton-stripes {
  0% { background-position: 0 0 }
  to { background-position: 480px 0 }
}

.nav-loading .nav-loading-row{
  margin-bottom: 16px;
  background: linear-gradient(90deg, #fff, #edeff1, #fff);
  background-size: 480px 480px;
  animation: skeleton-stripes .6s linear infinite
}
.nav-loading .nav-loading-row{
  width: 400px;
  height: 50px;
}
.nav-loading .nav-loading-row:nth-of-type(2),
.nav-loading .nav-loading-row:nth-of-type(3) {
  width: 80%
}
    .nav-main{
        width:800px;
        height:50px;
        display:flex;
        flex-flow:row;
        .nav-label{
              width:2rem ;
        }
        .nav-flitter{
            padding: 5px 10px;
            width:7.5rem;
        }
    }
</style>