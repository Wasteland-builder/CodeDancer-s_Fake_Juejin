<template>
  <div class="acticleCata">
    <div
      v-for="(item, index) in cataList"
      :key="index"
      class="cataSon"
      :class="[{ 'cataSon-active': index == 1 }]"
      :data-v-md-line="item.lineIndex"
      @click="handleAnchorClick(item.lineIndex)"
      ref="cata"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, defineProps, onBeforeMount } from "vue";
import Mitt from "../../until/mitt.js";
let props = defineProps(["acticleList"]);
let cataList = ref(null);
let cata = ref(null);
const getList = (list) => {
  cataList.value = list;
};
Mitt.on("tranList", getList);

// 更变样式
const changeClass = (item) => {
  for (let i in cata.value) {
    cata.value[i].classList.remove("cataSon-active");
    if (cata.value[i].getAttribute("data-v-md-line") == item) {
      cata.value[i].classList.add("cataSon-active");
    }
  }
};

const handleAnchorClick = (item) => {
  // 发出跳转
  Mitt.emit("scrollTo", item);
  // changeClass(item);
};

// 监听滚动并且更变
const beWatch = (lineIndex) => {
  changeClass(lineIndex);
};
Mitt.on("beWatch", beWatch);

nextTick(() => {
  
});
</script>

<style scoped>
.acticleCata {
  padding: 0 0 0 11px;
  position: relative;
  max-height: 460px;
  width: 240px;
  margin: 8px 4px 0 0;
  overflow: auto;
  background: white;
}

.cataSon {
  width: 90%;
  padding: 8px;
  line-height: 22px;
  position: relative;
}

.cataSon-active {
  color: #1e80ff;
}

.cataSon-active::before {
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