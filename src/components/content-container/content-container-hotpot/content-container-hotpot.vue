<template>
  <div
    class="content-container"
    @mouseover="this.HandleHover()"
    @mouseout="HandleHover()"
  >
    <div class="content-header">
      <div class="content-lefthead">
        <!-- 头像框 -->
        <el-popover placement="top" :width="240" trigger="hover">
          <div class="content-header-pop">
            <div class="pop-header">
              <div class="pop-header-avatar">
                <el-avatar
                  :size="50"
                  :src="this.avatar"
                  rel="external nofollow"
                >
                  <img :src="this.avatar" rel="external nofollow" />
                </el-avatar>
              </div>
              <div class="pop-header-profile">
                <p style="height: 30%">{{ this.author }}</p>
                <div style="height: 70%" height>{{ this.profiles }}</div>
              </div>
            </div>

            <div
              class="pop-button"
              style="text-align: center; width: 100%; margin: 0"
            >
              <el-button
                size="large"
                style="width: 90%"
                type="primary"
                @click="visible = false"
              >
                关注
              </el-button>
            </div>
            <div class="pop-info">
              <div class="pop-info-left">
                <p>{{ this.focus }}</p>
                <p>关注</p>
              </div>
              <div class="pop-info-right">
                <p>{{ this.followers }}</p>
                <p>粉丝</p>
              </div>
            </div>
          </div>
          <template #reference>
            <el-affix class="content-author">
              {{ this.contentdata.author }}
            </el-affix>
          </template>
        </el-popover>
        <div class="content-daycounter">
          {{ computerTime() }}
        </div>
      </div>
      <div class="content-righthead">
        <div class="content-close" v-if="this.onHandleHover">
          <ClosePanel
            :index="this.contentdata.index"
            :author="this.contentdata.author"
            :target="[]"
          />
        </div>
      </div>
    </div>
    <div class="content-main">
      <div :class="mainerMainCss(this.contentdata.imgsrc)">
        <div :class="mainerTitleCss(this.contentdata.status)">
          {{ this.contentdata.title }}
        </div>
        <span class="content-mainer-description">
          {{ this.contentdata.content }}
        </span>
      </div>
      <div class="content-img" v-if="this.imgsrc">
        <img :src="this.contentdata.imgsrc" />
      </div>
    </div>
  </div>
</template>
<script>
import ClosePanel from "../content-container-panel/Close.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "content-hotpot",
  props: {
    index: Number,
    status: String,
    author: String,
    date: String,
    title: String,
    content: String,
    imgsrc: String,
    focus: String,
    followers: String,
    profiles: String,
    avatar: String,
  },
  components: {
    ClosePanel,
  },
  computed: {
    normalizedSize: () => {
      return [
        this.index.trim().toLowerCase(),
        this.status.trim().toLowerCase(),
        this.author.trim().toLowerCase(),
        this.date.trim().toLowerCase(),
        this.title.trim().toLowerCase(),
        this.content.trim().toLowerCase(),
        this.imgsrc.trim().toLowerCase(),
        this.focus.trim().toLowerCase(),
        this.followers.trim().toLowerCase(),
        this.profiles.trim().toLowerCase(),
        this.avatar.trim().toLowerCase(),
      ];
    },
  },
  setup() {},
  watch: {
    index: {
      deep: true,
      handler(news) {
        this.contentdata.index = news;
      },
    },
    status: {
      deep: true,
      handler(news) {
        this.contentdata.status = news;
      },
    },
    author: {
      deep: true,
      handler(news) {
        this.contentdata.author = news;
      },
    },
    date: {
      deep: true,
      handler(news) {
        this.contentdata.date = news;
      },
    },
    title: {
      deep: true,
      handler(news) {
        this.contentdata.title = news;
      },
    },
    content: {
      deep: true,
      handler(news) {
        this.contentdata.content = news;
      },
    },
    imgsrc: {
      deep: true,
      handler(news) {
        this.contentdata.imgsrc = news;
      },
    },
  },
  methods: {
    HandleHover() {
      if (this.onHandleHover)
        setTimeout(() => {
          this.onHandleHover = false;
        }, 30000);
      else if (!this.onHandleHover) this.onHandleHover = true;
    },

    computerTime() {
      let e = new Date(this.contentdata.date).getTime();
      let delta = (new Date().getTime() - e) / 1000;
      if (delta < 3600) return `${parseInt(delta / 60)}分钟前`;
      if (delta < 86400) return `${parseInt(delta / (60 * 60))}个小时前`;
      if (delta < 604800) return `${parseInt(delta / (60 * 60 * 24))}天前`;
      if (delta < 2592000)
        return `${parseInt(delta / (60 * 60 * 24 * 7))}个星期前`;
      if (delta < 31536000)
        return `${parseInt(delta / (60 * 60 * 24 * 30))}个月前`;
      else return `${parseInt(delta / (60 * 60 * 24 * 365))}年前`;
    },
    mainerTitleCss(e) {
      if (e === "1") return "content-mainer-title";
      else return "content-mainer-title-read";
    },
    mainerMainCss(src) {
      if (src === "") return "content-mainer-npic";
      else return "content-mainer";
    },
  },

  data() {
    return {
      onHandleHover: false,
      contentdata: {
        index: this.index,
        status: this.status,
        author: this.author,
        date: this.date,
        title: this.title,
        content: this.content,
        imgsrc: this.imgsrc,
        focus: this.focus,
        followers: this.followers,
        profiles: this.profiles,
        avatar: this.avatar,
      },
    };
  },
});
</script>
<style lang="less" scoped>
.content-container {
  height: 10rem;
  width: 700px;
  background-color: #fff;
  .content-header {
    height: 20%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-flow: row;
    .content-lefthead {
      width: 80%;
      height: 100%;
      display: flex;
      flex-flow: row;
      .content-author {
        font-size: 1.5rem;
        padding: 0% 2%;
        border-right: 1px solid #dedddd;
        color: #4e5969;
      }
      .content-author:hover {
        font-size: 1.5rem;
        padding: 0% 2%;
        border-right: 1px solid #dedddd;
        color: #1d7dfa;
      }
      .content-daycounter {
        font-size: 1rem;
        color: #8e99a2;
        padding: 0.5% 2%;
      }
      .content-target {
        font-size: 1rem;
        padding: 0.5% 2%;
        color: #8e99a2;
        border-left: 1px solid #dedddd;
        height: 60%;
      }
    }
    .content-righthead {
      width: 20%;
      height: 100%;
      .content-close {
        font-size: 1rem;
        padding: 0% 0 0% 70%;
        color: #8e99a2;
        flex-flow: right;
        height: 60%;
      }
    }
  }
  .content-main {
    height: 60%;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-flow: row;
    .content-mainer-npic {
      width: 100%;
      height: 100%;
      .content-mainer-title {
        height: 40%;
        margin: 2% 2%;
        font-size: 1.6rem;
        font-weight: 600;
        color: #1d2129;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .content-mainer-title-read {
        height: 40%;
        padding: 2% 2%;
        font-size: 1.6rem;
        font-weight: 600;
        color: #86909c;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .content-mainer-description {
        height: 40%;
        margin: 1% 2% 4% 2%;
        font-size: 0.8em;
        font-weight: 600;
        color: #86909c;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .content-mainer {
      width: 70%;
      height: 100%;
      .content-mainer-title {
        height: 40%;
        margin: 2% 2%;
        font-size: 1.6rem;
        font-weight: 600;
        color: #1d2129;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .content-mainer-title-read {
        height: 40%;
        margin: 2% 2%;
        font-size: 1.6rem;
        font-weight: 600;
        color: #86909c;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .content-mainer-description {
        height: 40%;
        margin: 1% 2% 4% 2%;
        font-size: 0.8em;
        font-weight: 600;
        color: #86909c;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .content-img {
      width: 30%;
      height: 100%;
      img {
        height: 120%;
        width: 70%;
      }
    }
  }
}
.content-header-pop {
  width: 220px;
  height: 180px;
  display: flex;
  flex-flow: column;
  .pop-header {
    margin: 1% 2%;
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: row;
    .pop-header-avatar {
      margin: 2% 2%;
      width: 30%;
      height: 100%;
    }
    .pop-header-profile {
      margin: 2% 2%;
      width: 60%;
      height: 100%;
    }
  }
  .pop-button {
    width: 100%;
    height: 30%;
    .pop-button-btn {
      font-size: 10px;
    }
  }
  .pop-info {
    text-align: center;
    width: 100%;
    height: 20%;
    display: flex;
    flex-flow: row;
    .pop-info-left {
      padding: 0 5%;
      width: 50%;
      height: 90%;
    }
    .pop-info-right {
      padding: 0 5%;
      width: 50%;
      height: 90%;
    }
  }
}
// .content-container:hover{
//   background-color: #e4e6eb;
// }
</style>