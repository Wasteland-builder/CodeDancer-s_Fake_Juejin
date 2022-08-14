<script>
  import TopCpn from '@/components/TopCpn/TopCpn.vue'
import contentContainer from '@/components/content-container/content-container.vue'
import asidelabel from '@/components/aside-label/aside-label.vue'
  export default {
    name: 'app',
    components: {TopCpn,contentContainer,asidelabel}
  }
</script>

<template>
<top-cpn></top-cpn>
<router-view></router-view>
</template>

