<script setup lang="ts">
import SettingsSidebar from "../../../components/partials/SettingsSidebar.vue";
</script>

<template>
  <main class="settings flex">
    <SettingsSidebar class="w-[256px] h-full" />
    <div
      class="settings__content content h-full py-[10px] px-4 bg-bglightGray overflow-x-hidden overflow-y-auto"
    >
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
.settings {
  height: calc(100vh - 57.6px);
}
.settings__content {
  width: calc(100% - 256px);
}
</style>
