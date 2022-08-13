<script>
  import TopCpn from './components/TopCpn.vue'
  import AsideLabelBoard from "@/components/aside-label/aside-label.vue"
  export default {
    name: 'app',
    components: {TopCpn,AsideLabelBoard}
  }
</script>

<template>
<top-cpn></top-cpn>
<!-- <aside-label-board></aside-label-board> -->
<router-view></router-view>
</template>

