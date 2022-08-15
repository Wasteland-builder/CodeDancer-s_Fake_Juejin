<template>
  <div class="container">
    <div class="left">
      <ContentContainer></ContentContainer>
    </div>
    <div class="right">
      <Checkin> </Checkin>
      <CancelImg></CancelImg>
      <DownloadApp></DownloadApp>
    </div>
  </div>
</template>

<script setup>
import CancelImg from '../right-cpn/CancelImg.vue';
import DownloadApp from '../right-cpn/DownloadApp.vue';
import ContentContainer from '@/components/content-container/content-container.vue';
import Checkin from '@/components/checkin/checkin.vue';
</script>
<style scoped lang="less">
.container {
  display: flex;
  margin: 1rem auto;
  max-width: 960px;
  justify-content: space-between;

  .left {
    width: 700px;
    height: 100%;
  }

  .right {
    width: 240px;
  }
}
</style>