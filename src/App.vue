<script>
  import TopCpn from '@/components/TopCpn.vue'
import contentContainer from '@/components/content-container/content-container.vue'
  export default {
    name: 'app',
    components: {TopCpn,contentContainer}
  }
</script>

<template>
<top-cpn></top-cpn>
<<<<<<< HEAD
<content-container style="margin:20% 10%"></content-container>
=======
<!-- <aside-label-board></aside-label-board> -->
>>>>>>> 024da9729b4b1d89781042b0ed038e25bd5d1280
<router-view></router-view>
</template>

