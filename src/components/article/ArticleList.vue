<template>
  <div class="container">
    <div class="left"></div>
    <div class="right">
      <CancelImg></CancelImg>
      <DownloadApp></DownloadApp>
    </div>
  </div>
</template>

<script setup>
import CancelImg from '../right-cpn/CancelImg.vue';
import DownloadApp from '../right-cpn/DownloadApp.vue';
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
    width: 700px;
    background-color: skyblue;
    height: 100%;
  }
  .right {
    width: 240px;
  }
}
</style>