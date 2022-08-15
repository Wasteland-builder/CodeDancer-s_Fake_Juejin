<template>
  <top-cpn></top-cpn>
  <content-container style="margin: 20% 10%"></content-container>
  <router-view></router-view>
</template>

<script setup>
import { ref, provide, nextTick } from 'vue'
import TopCpn from "@/components/TopCpn/TopCpn.vue";
import contentContainer from "@/components/content-container/content-container.vue";
import asidelabel from "@/components/aside-label/aside-label.vue";
</script>