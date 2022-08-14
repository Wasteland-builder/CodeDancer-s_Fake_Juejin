<template>
  <div class="container">
    <div class="left">
      <ContentContainer></ContentContainer>
    </div>
    <div class="right">
      <CancelImg></CancelImg>
      <DownloadApp></DownloadApp>
    </div>
  </div>
</template>

<script setup>
import CancelImg from '../RightCpn/CancelImg.vue';
import DownloadApp from '../RightCpn/DownloadApp.vue';
import ContentContainer from '@/components/content-container/content-container.vue';
</script>

<style scoped lang="less">
.container {
  display: flex;
  margin: 4.5rem auto;
  max-width: 960px;
  height: 2000px;
  background-color: pink;
  justify-content: space-between;
  .left {
    width: 800px;
    background-color: skyblue;
    height: 100%;
  }
  .right {
    width: 240px;
  }
}
</style>