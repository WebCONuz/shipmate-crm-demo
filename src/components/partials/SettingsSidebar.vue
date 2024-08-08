<script setup lang="ts">
import { asideData } from "../../data/settingsDatta.ts";
import LinksAccordion from "../../components/accordions/LinksAccorsion.vue";
</script>

<template>
  <aside
    class="settings-aside py-[10px] border-r border-gray-300 bg-white overflow-x-hidden overflow-y-auto"
  >
    <LinksAccordion
      v-for="(item, index) in asideData"
      :data="item"
      :key="index + 'KKMMSS'"
      :isOpen="index === 0 ? true : false"
    />
  </aside>
</template>

<style scoped>
.settings-aside::-webkit-scrollbar {
  width: 4px;
}
.settings-aside::-webkit-scrollbar-track {
  background-color: #e8e7e7;
}
.settings-aside::-webkit-scrollbar-thumb {
  background: #38667f53;
  border-radius: 15px;
}
</style>
