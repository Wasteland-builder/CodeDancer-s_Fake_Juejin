<template>
    <div>
        <div class = "nav-main"> 
                     <el-tabs v-model="navValue"  @tab-click="handleClick()">
                        <el-tab-pane :label="item.label"  v-for="item in navList" :key="item.key" :name="item.value" >
                        </el-tab-pane>
                  </el-tabs>
                  <el-select class="nav-flitter" v-model="value" filterable @selected="handleFilter()">
                    <el-option
                    v-for="item in fliter"
                    :key="item.key"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
        </div> 
     </div>   
</template>

<script >
import {defineComponent} from 'vue'
import { ref } from 'vue'

export default defineComponent({
    
    name:"content-nav",
    setup(){
            const handleClick=(target,action)=>{   
            console.log(target)
            };
             const handleFilter=()=>{   
                console.log(value);
            };
            const value = ref('1')
            const navValue = ref('1')
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
            value,navValue,fliter,navList,handleClick
        }
    }
})

</script>

<style lang="less" scoped>
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