<template>
  <div class="acticleCata">
    <div v-for="(item, index) in cataList" :key="index" class="cataSon">
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, defineProps, onBeforeMount } from "vue";
import Mitt from "../../until/mitt.js";
let props = defineProps(["acticleList"]);
let cataList = ref(null);
const getList = (list) => {
  cataList.value = list;
}
Mitt.on('tranList', getList);

</script>

<style scoped>
.acticleCata {
  padding: 0 0 0 11px;
  position: relative;
  max-height: 460px;
  margin: 8px 4px 0 0;
  overflow: auto;
}

.cataSon {
  width: 90%;
  padding: 8px;
  line-height: 22px;
  position: relative;
}
.cataSon-active{
}
.cataSon::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  margin-top: 7px;
  width: 4px;
  height: 16px;
  background: #1e80ff;
  border-radius: 0 4px 4px 0;
}
</style>