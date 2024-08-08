<script setup lang="ts">
import Button from "../buttons/Button.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <header class="mt-2 mb-3 relative z-20">
    <div
      class="border-b border-black flex items-end justify-between pb-[6.5px]"
    >
      <!-- create & filter -->
      <div class="flex gap-x-[10px]">
        <h2 class="text-xl text-textBlack font-semibold pr-2">
          {{ props.title }}
        </h2>
        <div class="border-l border-mainGray pl-[10px]">
          <Button class="font-semibold text-white bg-mainBlue px-3 text-sm">
            + New
          </Button>
        </div>
        <Button
          class="font-medium text-mainBlue bg-lightBlue px-3 text-sm border border-mainBlue"
        >
          Active
        </Button>
        <Button
          class="font-medium text-mainBlue bg-lightBlue px-3 text-sm border border-mainBlue"
        >
          Inactive
        </Button>
      </div>

      <!-- info -->
      <div class="flex items-center gap-x-[10px]">
        <slot name="action"></slot>
        <span class="font-semibold text-textGray">
          Total {{ props.length }} {{ props.name }}
        </span>
        <div
          class="w-10 border border-mainGray flex items-center justify-center rounded"
        >
          <i class="bx bx-dots-horizontal-rounded text-2xl text-textGray"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.user_settings:hover .sub_menu {
  top: 32px;
  opacity: 1;
  visibility: visible;
}
</style>
