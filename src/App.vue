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
<content-container style="margin:20% 10%"></content-container>
<router-view></router-view>
</template>

