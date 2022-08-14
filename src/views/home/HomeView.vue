<template>
  <type-nav style="position:absolute"></type-nav>
  <div style="margin: 5% 10%;padding: 0% 2% ;display:flex;flex-flow:row">
   <asidelabel></asidelabel>
  <content-container></content-container>
   <div> 
    <Checkin></Checkin>
  <CancelImg></CancelImg>
  <DownloadApp></DownloadApp>
    </div>
   </div>
</template>

<script>
import TypeNav from './TypeNav.vue'
import DownloadApp from '@/components/RightCpn/DownloadApp.vue'
import CancelImg from '@/components/RightCpn/CancelImg.vue'
import contentContainer from '@/components/content-container/content-container.vue'
import asidelabel from '@/components/aside-label/aside-label.vue'
import Checkin from '@/components/checkin/checkin.vue';
  export default {
    name: 'HomeView',
    components: {
        TypeNav,DownloadApp,CancelImg,contentContainer,asidelabel
    }
  }
</script>

<style scoped>

</style>