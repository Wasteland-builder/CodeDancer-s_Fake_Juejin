<template>
  <div class="acticleCata">
    {{ cataList }}
    <div v-for="(item, index) in cataList" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, defineProps, onBeforeMount } from "vue";
import Mitt from "../../until/mitt.js";
let props = defineProps(["acticleList"]);
let cataList = ref(props.acticleList);
</script>
