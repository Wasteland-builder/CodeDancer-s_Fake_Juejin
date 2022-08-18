<template>
    <div class="content-container"  @mouseover="this.HandleHover()" @mouseout="this.HandleHover()" >
     
   <!-- 头部标签 -->
        <div class="content-header">
           <!-- 头像框 -->
              <div class="content-lefthead">
                 <el-popover placement="top" :width="240" trigger="hover">
                 <div  class="content-header-pop" > 
                    <div class="pop-header">
                        <div class="pop-header-avatar">
                          <el-avatar :size="50" src="http://localhost:5173" rel="external nofollow" >
                            <img
                              :src="this.avatar" rel="external nofollow" 
                                  />
                            </el-avatar>
                          </div>   
                           <div class = "pop-header-profile">
                                <p style="height:30%">{{this.author}}</p>
                                <div style="height:70%" height>{{this.profiles}}</div>
                           </div>
                    </div>
              
                    <div  class="pop-button" style="text-align: center; width:100%; margin: 0">
                      <el-button   size="large" style="width:90%" type="primary" @click="visible = false">                   关注                         </el-button>
                    </div>
                    <div class ="pop-info">
                          <div  class ="pop-info-left">
                              <p>{{this.focus}}</p>
                              <p>关注</p>
                          </div>
                            <div class ="pop-info-right">
                               <p>{{this.followers}}</p>
                              <p>粉丝</p>
                          </div>
                    </div>
                </div> 
                <template #reference>
                  <el-affix class="content-author">
                     {{this.contentdata.author}}
                   </el-affix>  
                </template>
                    </el-popover>
                   
                  <div class="content-daycounter">
                     {{computerTime()}}
                 </div>  
                  <div class="content-target" 
                       v-for="(item,id) in this.contentdata.target"
                       :key="'target'+id">
                      <a class="content-target-content" :href="this.targetPush(item)">{{item}}</a>
                 </div>
               </div>  
                <div class="content-righthead">
                   <div class="content-close" v-if="this.onHandleHover">
                      <ClosePanel :index="this.contentdata.id" 
                                  :author="this.contentdata.author"
                                  :target="this.contentdata.target"/>
                 </div>  
                </div>  
            </div> 
     <!-- 文章主要内容简介 -->
             <div class="content-main">
                <div :class="mainerMainCss(this.contentdata.imgsrc)" >
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
   <!-- 脚标 -->
          <div class="content-footer">
                 <div class="content-spottimes">
                     <Eye style="width:1.5rem;height:1.5rem"/>
                      <div style="color:#86909c">{{this.contentdata.spottimes}}</div>
                 </div>  
                  <div class="content-thumbups">
                    <ThumbUp  @click="activeHandle(this.contentdata.id)" :thumbUpTimes="this.contentdata.thumbUps"  :thumbUpState="this.contentdata.status"/>
                 </div>  
                  <div class="content-comments">
                     <Comment @click="routerLink()" :commentTimes="this.contentdata.comments"/>
                 </div>  
        </div>      

    </div>
</template>
<script>
import { defineComponent } from 'vue'
import Eye from '@/assets/icons/eye.svg'
import ThumbUp from '../content-container-panel/ThumbUp.vue'
import Comment from '../content-container-panel/Comment.vue'
import ClosePanel  from '../content-container-panel/Close.vue'
export default defineComponent({
    name:"content-hotpot",
    emits: ['ThumbUpClick'],
    components:{
        Eye ,ThumbUp,Comment,ClosePanel
    },
    props:{
        index:Number,
        status:String,
        author:String,
        date:String,
        title:String,
        content:String,
        imgsrc:String,
        target:Array,
        spottimes:Number,
        thumbUps:Number,
        comments:Number,
        focus:String,
        followers:String,
        profiles:String,
        avatar:String
   },
     computed:{
      normalizedSize:()=>{
            return (
            [ this.index.trim().toLowerCase(),
              this.status.trim().toLowerCase(),
              this.author.trim().toLowerCase(),
              this.date.trim().toLowerCase(),
              this.title.trim().toLowerCase(),
              this.content.trim().toLowerCase(),
              this.imgsrc.trim().toLowerCase(),
              this.spottimes.trim().toLowerCase(),
              this.thumbUps.trim().toLowerCase(),
              this.comments.trim().toLowerCase(),
              this.focus.trim().toLowerCase(),
              this.followers.trim().toLowerCase(),
              this.profiles.trim().toLowerCase(),
              this.avatar.trim().toLowerCase(),
              this.target]
        )
         
      },
    },
 watch:{
        status:{
            deep:true,
            handler(news){
                this.contentdata.status=news;
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
           },
            thumbUps:{
            deep:true,
            handler(news){
                this.contentdata.thumbUps=news
            }
            },
            comments:{
            deep:true,
            handler(news){
                this.contentdata.comments=news
            }
            },
            spottimes:{
            deep:true,
            immediate: true,
            handler(news){
                this.contentdata.spottimes=news
            }
          }
    },  
    setup(){
    },
      methods:{
        HandleHover(){
        if(this.onHandleHover) setTimeout(()=>{
           this.onHandleHover = false;
        },30000)  
        else if(!this.onHandleHover) this.onHandleHover = true;
        },
        targetPush(e){
          switch(e){
            case 'Vue.js' : return "https://juejin.cn/tag/Vue.js"
             case 'React.js' : return "https://juejin.cn/tag/React.js"
              case 'Flutter' : return "https://juejin.cn/tag/Flutter"
               case 'Dart' : return "https://juejin.cn/tag/Dart"
                case 'Android' : return "https://juejin.cn/tag/Android"
                 case '后端' : return "https://juejin.cn/tag/后端"
                   case '前端' : return "https://juejin.cn/tag/前端"
                     case 'Javascripts' : return "https://juejin.cn/tag/Javascripts"
                      case 'CSS' : return "https://juejin.cn/tag/CSS"
                       case 'TS' : return "https://juejin.cn/tag/TS"
          }
        },
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
          else return "content-mainer" },
         activeHandle(id){
          this.$emit('thumbUpClick',id)
        },
        routerLink(){
          this.$router.push("/hotpot")
        }   
  },
    data(){
        return{
          contentdata:{
              id:this.index,
              status:this.status,
              author:this.author,
              date:this.date,
              title:this.title,
              content:this.content,
              imgsrc:this.imgsrc,
              target:this.target,
              spottimes:this.spottimes,
              thumbUps:this.thumbUps,
              comments:this.comments,
              focus:this.focus,
              followers:this.followers,
              profiles:this.profiles,
              avatar:this.avatar
          },
          onHandleHover:false
        }
    }
})
</script>
<style lang="less" scoped>
    .content-container{
      box-sizing: border-box;
        height:10rem;
        width:700px;
        background-color: #fff;
        .content-header{
        height:20%;
        width:100%;
        background-color: #fff;
        display: flex;
        flex-flow: row;
        .content-lefthead{
            width:80%;
            height:100%;
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
          
                border-left: 1px solid #dedddd; 
                height:60%
              }
               .content-target-content{
                  color:#8e99a2;  
               }
              .content-target-content:hover{
                color:#1d7dfa;  
              }
        }
         .content-righthead {
             width:20%; 
            height:100%;
            .content-close{
                font-size:1rem;
                padding:0% 0 0% 70% ; 
                color:#8e99a2;  
                flex-flow: right;
                height:60%;
              }
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
                        margin:2% 2% 0% 2%;
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
                            padding:2% 2% 0% 2%;
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
                            margin:0 2% 2% 2%;
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
                        margin:2% 2% 0% 2%;
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
                        margin:2% 2% 0% 2%;
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
                        margin:0 2% 2% 2%;
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
                      height:120%;
                      width:70%;
                    }
                }
        }
       .content-footer{
        height:20%;
        width:100%;
        display: flex;
        flex-flow: row;
                    .content-spottimes{
                      height:100%;
                       width:10%;
                      padding:0 1%;
                      line-height: 1.5;
                      display: flex;
                      flex-flow: row;
                    
                    }
                    .content-thumbups{
                          width:10%;   
                           height:100%;
                             padding:0 1%;
                      line-height: 1.5;
                    }
                    .content-comments{
                             width:10%;
                              height:100%;
                           padding:0 1%;
                          line-height: 1.5;
                    }
              }
    }
       .content-header-pop{
      width:220px;
      height:180px;
      display:flex;
      flex-flow: column;
      .pop-header{
           margin:1% 2%;
           width:100%;
           height:50%;
           display:flex;
           flex-flow: row;
          .pop-header-avatar{
            margin:2% 2%;
            width:30%;
           height:100%;
          }
          .pop-header-profile{
           margin:2% 2%;
           width:60%;
           height:100%;
          }
      }
       .pop-button{
           width:100%;
           height:30%;
           .pop-button-btn{
            font-size: 10px;
           }
        
      }
       .pop-info{
           text-align: center;
           width:100%;
           height:20%;
           display:flex;
           flex-flow: row;
           .pop-info-left{
            padding:0 5%;
               width:50%;
               height:90%;
           }
             .pop-info-right{
              padding:0 5%;
               width:50%;
               height:90%;
           }
      }
     } 
</style>