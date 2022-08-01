<script>
  import TopCpn from './components/TopCpn.vue'
  import TypeNav from './views/home/TypeNav.vue'
  export default {
    name: 'app',
    components: {TopCpn,TypeNav}
  }
</script>

<template>
<!-- <div>
</div> -->
<!-- <router-view></router-view> -->
<top-cpn></top-cpn>
<type-nav></type-nav>
</template>

