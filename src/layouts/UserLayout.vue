<script setup lang="ts">
import SidebarVue from "../components/partials/Sidebar.vue";
import Header from "../components/partials/Header.vue";

import { ref, watch, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { status } from "../data/headerData.ts";

const route = useRoute();
const headerStatus = ref<string[]>([]);
const mainPath = ref("");
const initialIndex = ref(0);
const isExist = ref(false);

const changeHeaderStatus = () => {
  const path = route.fullPath.split("/");
  const key = path[path?.length - 1];
  initialIndex.value = 0;
  if (status[key as keyof typeof status]) {
    headerStatus.value = status[key as keyof typeof status];
  } else {
    headerStatus.value = [String(key)];
  }

  if (path.includes("settings")) {
    isExist.value = true;
  } else {
    isExist.value = false;
  }
};

const activeStatus = (i: number) => {
  initialIndex.value = i;
};

onUpdated(() => {
  mainPath.value = route.fullPath;
});
watch(mainPath, changeHeaderStatus);
</script>

<template>
  <main class="flex">
    <!-- sidebar -->
    <div class="aside w-14 h-screen overflow-y-auto shadow-2xl">
      <SidebarVue />
    </div>

    <!-- main content -->
    <div class="content overflow-y-auto overflow-x-hidden h-screen">
      <Header
        :initial="changeHeaderStatus"
        :status="headerStatus"
        :i="initialIndex"
        :active="activeStatus"
      />
      <div :class="isExist ? '' : 'p-4'">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style scoped>
.aside::-webkit-scrollbar {
  width: 5px;
}
.aside::-webkit-scrollbar-track {
  background-color: #4b5677;
}
.aside::-webkit-scrollbar-thumb {
  background: #427d9d;
  border-radius: 15px;
}
.content {
  width: calc(100% - 56px);
}
</style>
