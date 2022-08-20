<template>
  <div class="container">
    <div class="left">
      <ContentNav></ContentNav>
    </div>
    <div class="right">
      <Checkin>  </Checkin>
      <CancelImg></CancelImg>
      <DownloadApp></DownloadApp>
    </div>
  </div>
</template>

<script setup>
import CancelImg from '../RightCpn/CancelImg.vue'
import DownloadApp from '../RightCpn/DownloadApp.vue'
import ContentNav from '@/components/content-nav/content-nav.vue'
import Checkin from '@/components/checkin/checkin.vue'

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