<template>
  <div class="postBody">
    <div class="acticleTitle">
      {{ message.title }}
    </div>
    <div class="authorMessage">
      <div class="imgBox">
        <img src="" alt="" />
      </div>
      <div class="authorInfoBox">
        <div class="authorName">{{ message.authorName }}</div>
        <div class="meta-box">
          <span>{{ message.relesaeTime }}</span>
          <span>·阅读量{{ message.view }}</span>
        </div>

      </div>
      <button class="follow-button">+关注</button>
    </div>
    <div class="coverImg">
      <img src="" alt="">
    </div>
    <div class="acticleBody">
      <!-- 在这里渲染文章主体 -->
      {{message.content}}
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["acticleMessage"]);
let message = ref(props.acticleMessage);
</script>

<style scoped lang="less">
.postBody {
  width: 820px;
  background: #fff;
  margin-top: 20px;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  position: relative;
  padding-top: 2.667rem;
  padding-bottom: 3.33rem;
}
.acticleTitle {
  width: 100%;
  margin: 0 0 1.667rem;
  font-size: 2.667rem;
  font-weight: 600;
  line-height: 1.31;
  color: #252933;
}
.authorMessage {
  display: flex;
  align-items: center;
  width: 100%;
  .imgBox {
    flex: 0 0 auto;
    margin-right: 1rem;
    width: 3.333rem;
    height: 3.333rem;
    border-radius: 50%;
    background: red;
  }
  .authorInfoBox {
    min-width: 0;
    flex-grow: 1;
    flex: 1;
    min-height: 43px;
  }
  .authorName {
    height: 2rem;
    font-size: 1.333rem;
    font-weight: 500;
    color: #515767;
    line-height: 2rem;
  }
  .meta-box {
    font-size: 1.167rem;
    color: #8a919f;
    margin-top: 2px;
    line-height: 22px;
  }
  .follow-button {
    margin: 0 0 0 auto;
    padding: 0 1rem;
    height: 34px;
    font-size: 14px;
    color: #1e80ff;
    background: rgba(30, 128, 255, 0.05);
    border: 1px solid rgba(30, 128, 255, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    appearance: none;
    text-transform: none;
    overflow: visible;
    font: inherit;
  }
}
.coverImg {
  width: 100%;
}
.acticleBody {
  width: 100%;
}
</style>  