<template>
  <div class="acticleContent">
    <div ref="preview" class="detils-body">
      <v-md-preview :text="content"></v-md-preview>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, nextTick, defineProps } from "vue";
const props = defineProps(["content"]);
let content = ref(props.content);
const preview = ref(null);
let atitles = [];

import Mitt from "../../until/mitt.js";
import { debounce } from "../../until/untils";

const tranList = (list) => {
  Mitt.emit("tranList", list);
};

// 监听事件
const beWatch = (lineIndex) => {
  Mitt.emit("beWatch", lineIndex);
};

// 获取文章列表
const getTitle = () => {
  nextTick(() => {
    // 获取所有标题
    const anchors = preview.value.querySelectorAll("h1,h2,h3,h4,h5,h6");
    const titles = Array.from(anchors).filter(
      (title) => !!title.innerText.trim()
    );
    const hTags = Array.from(
      new Set(titles.map((title) => title.tagName))
    ).sort();
    atitles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute("data-v-md-line"),
      indent: hTags.indexOf(el.tagName),
    }));
    tranList(atitles);

    // 进行滚动监听
    // 进行防抖限制
    let srcollMonitor = () => {
      let visibleBottom =
        window.scrollY + document.documentElement.clientHeight;
      let visibleTop = window.scrollY;
      
      for (let i = 0; i < titles.length; ++i) {
        // 这里是将元素移动到屏幕顶部时
        let centerY = titles[i].offsetTop + titles[i].offsetHeight / 2 + 70 ;
        if (centerY > visibleTop && centerY < visibleBottom) {
          beWatch(titles[i].getAttribute("data-v-md-line"));
          break;
        }
      }
    };
    document.addEventListener("scroll", () => {
      debounce(srcollMonitor(), 2000);
    });
  });
};
getTitle();

// 接收跳转
const scrollTo = (item) => {
  const heading = preview.value.querySelector(`[data-v-md-line="${item}"]`);
  heading.scrollIntoView({behavior: "smooth", inline: "nearest"});
};
Mitt.on("scrollTo", scrollTo);
</script>

