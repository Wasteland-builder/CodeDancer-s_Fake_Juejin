<template>
    <div class="content-container">
  
        <div class="content-header">
                   <div class="content-author">
                     {{this.contentdata.author}}
                  </div>  
                  <div class="content-daycounter">
                     {{computerTime()}}
                 </div>  
                  <!-- <div class="content-target" 
                       v-for="(item,id) in this.contentdata.target"
                       :key="'target'+id">
                      {{item}}
                 </div>   -->
                  <div class="content-target" >
                    {{this.contentdata.target}}
                 </div>  
            </div> 
   
             <div class="content-main">
                <div :class="mainerMainCss(this.contentdata.imgsrc)" >
                   <!-- <div class="content-mainer-title"> -->
                  <div :class="mainerTitleCss(this.contentdata.status)">
                    {{this.contentdata.title}}
                 </div>  
                  <span class="content-mainer-description">
                    {{this.contentdata.content}}
                 </span>  
                  </div>
                  <div class="content-img" v-if="(this.imgsrc)">
                      <img :src="(this.contentdata.imgsrc)" />
                 </div>  
            </div>
   
          <div class="content-footer">
                 <div class="content-spottimes">
                        {{this.contentdata.spottimes}}
                 </div>  
                  <div class="content-thumbups">
                    {{this.contentdata.thumbUps}}
                 </div>  
                  <div class="content-comments">
                    {{this.contentdata.comments}}
                 </div>  
        </div>      

    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name:"content-hotpot",
    props:{
        status:String,
        author:String,
        date:String,
        title:String,
        content:String,
        imgsrc:String,
        target:Array,
        spottimes:Number,
        thumbups:Number,
        comments:Number
   },
     computed:{
      normalizedSize:()=>{
            return (
            [ this.status.trim().toLowerCase(),
              this.author.trim().toLowerCase(),
              this.date.trim().toLowerCase(),
              this.title.trim().toLowerCase(),
              this.content.trim().toLowerCase(),
              this.imgsrc.trim().toLowerCase(),
              this.spottimes.trim().toLowerCase(),
              this.thumbups.trim().toLowerCase(),
              this.comments.trim().toLowerCase(),
              this.target]
        )
         
      },
    },
    setup(){
        console.log("1111");
    },
      watch:{
        status:{
            deep:true,
            handler(news){
                this.contentdata.watch=news;
            }
        },
        author:{
            deep:true,
            handler(news){
                this.contentdata.author=news
            }
        },
        date:{
            deep:true,
            handler(news){
                this.contentdata.date=news
            }
        },
         title:{
            deep:true,
            handler(news){
                this.contentdata.title=news
            }
        },
         content:{
            deep:true,
            handler(news){
                this.contentdata.content=news
            },
          imgsrc:{
            deep:true,
            handler(news){
                this.contentdata.imgsrc=news
            }
            },
            target:{
            deep:true,
            immediate: true,
            handler(news){
                this.contentdata.target=news
            }
            }
        }

    }, 
      methods:{
        computerTime(){
          
          let e = new Date(this.contentdata.date).getTime();
             let delta = (new Date().getTime() - e) / 1000;
            if (delta<3600)   return `${parseInt(delta / 60)}分钟前`;
            if (delta<86400) return `${parseInt(delta / (60 * 60))}个小时前`;
            if (delta<604800) return `${parseInt(delta / (60 * 60 * 24))}天前`;
            if (delta<2592000) return `${parseInt(delta / (60 * 60 * 24 * 7))}个星期前`;
            if (delta<31536000) return `${parseInt(delta / (60 * 60 * 24 * 30))}个月前`;
             else return `${parseInt(delta / (60 * 60 * 24 * 365))}年前`;
        },
        mainerTitleCss(e){
          if(e ==="1") return "content-mainer-title" ; 
          else return "content-mainer-title-read" },
         mainerMainCss(src){
          if(src === "") return "content-mainer-npic" ; 
          else return "content-mainer" }
      },
    data(){
        return{
          contentdata:{
              status:this.status,
              author:this.author,
              date:this.date,
              title:this.title,
              content:this.content,
              imgsrc:this.imgsrc,
              target:this.target,
              spottimes:this.spottimes,
              thumbups:this.thumbups,
              comments:this.comments
          }
        }
    }
})
</script>
<style lang="less" scoped>
    .content-container{
        height:10rem;
        width:60rem;
        background-color: #fff;
        .content-header{
        height:20%;
        width:100%;
        background-color: #fff;
        display: flex;
        flex-flow: row;
              .content-author{
                font-size:1.5rem;
                padding:0% 2%; 
                border-right: 1px solid #dedddd; 
                color:#4e5969;
              }
              .content-author:hover{
                font-size:1.5rem;
                padding:0% 2%; 
                border-right: 1px solid #dedddd; 
                color:#1d7dfa;
              }
              .content-daycounter{
                font-size:1rem;
                color:#8e99a2;  
                padding:0.5% 2%;   
              }
              .content-target{
                font-size:1rem;
                padding:0.5% 2%; 
                color:#8e99a2;  
                border-left: 1px solid #dedddd; 
                height:60%
              }
        }
       .content-main{
        height:60%;
        width:100%;
        background-color: #fff;
        display:flex;
        flex-flow: row;
                .content-mainer-npic{
                    width:100%;
                    height:100%;
                    .content-mainer-title{
                        height:40%;
                        margin:2% 2%;
                        font-size:1.6rem;
                        font-weight:600;
                        color:#1d2129;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    .content-mainer-title-read{
                            height:40%;
                            padding:2% 2%;
                            font-size:1.6rem;
                            font-weight:600;
                            color:#86909c;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                    }
                    .content-mainer-description{
                            height:40%;
                            margin:1% 2% 4% 2%;
                            font-size:0.8em;
                            font-weight:600;
                            color:#86909c;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                    }
                  }
                .content-mainer{
                    width:70%;
                    height:100%;
                    .content-mainer-title{
                        height:40%;
                        margin:2% 2%;
                        font-size:1.6rem;
                        font-weight:600;
                        color:#1d2129;
                         display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    .content-mainer-title-read{
                        height:45%;
                        margin:2% 2%;
                        font-size:1.6rem;
                        font-weight:600;
                        color:#86909c;
                         display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                    }
                    .content-mainer-description{
                        height:40%;
                        margin:1% 2% 4% 2%;
                        font-size:0.8em;
                        font-weight:600;
                        color:#86909c;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                }
                .content-img{
                      width:30%;
                    height:100%;
                    img{
                      height:100%;
                      width:60%;
                    }
                }
        }
       .content-footer{
        height:20%;
        width:100%;
        background-color: #fff;
                    .content-spottimes{
                        width:20%

                    }
                    .content-thumbups{
                          width:20%   
                    }
                    .content-comments{
                             width:20%
                    }
              }
    }
</style>