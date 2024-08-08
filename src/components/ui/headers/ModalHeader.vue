<script setup lang="ts">
import Button from "../buttons/Button.vue";
import Select from "../form_elements/Select.vue";
const props = defineProps({
  close: {
    type: Function,
    required: true,
  },
  next: {
    type: Function,
    required: true,
  },
  prev: {
    type: Function,
    required: true,
  },
  change: {
    type: Function,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <header
    class="h-[72.8px] pl-[17px] pr-8 flex items-center justify-between bg-white border-b border-gray-300"
  >
    <!-- info -->
    <div class="flex items-center">
      <!-- action btns -->
      <div v-if="props.show" class="flex mr-[13px]">
        <div
          @click="props.close"
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded cursor-pointer duration-200"
        >
          <i class="bx bx-x text-gray-500 text-[30px]"></i>
        </div>
        <div
          @click="props.prev"
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded cursor-pointer duration-200 mx-2"
        >
          <i class="bx bx-chevron-up text-gray-500 text-[32px]"></i>
        </div>
        <div
          @click="props.next"
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded cursor-pointer duration-200 mr-2"
        >
          <i class="bx bx-chevron-down text-gray-500 text-[32px]"></i>
        </div>
        <div
          @click="props.change"
          class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded cursor-pointer duration-200"
        >
          <i class="bx bx-exit-fullscreen text-gray-500 text-[24px]"></i>
        </div>
      </div>
      <!-- user info -->
      <p class="flex">
        <span class="text-mainBlue mr-6">{{ "#" + props.data?.id }}</span>
        <b>{{ props.data?.user }}</b>
      </p>
    </div>

    <!-- details -->
    <div class="flex items-center">
      <!-- user -->
      <div class="flex items-center mr-5">
        <div
          class="rounded-full w-10 h-10 overflow-hidden border border-darkBlue mr-2"
        >
          <img
            src="https://images.unsplash.com/profile-1534796299842-cfc036c59a04?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            alt="avatar"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex items-center">
          <span class="mr-[10px]">Ali Brian</span>
          <i class="bx bxs-down-arrow"></i>
        </div>
      </div>
      <!-- filters -->
      <div class="flex">
        <Select />
        <Button
          class="ml-6 font-semibold text-white bg-mainBlue px-3 text-sm mr-[10px]"
        >
          Convert to order
        </Button>
        <Button class="font-semibold text-white bg-mainRed px-3 text-sm mr-6">
          Archive
        </Button>
        <Select />
        <Button
          class="text-gray-500 bg-white w-8 text-xl border border-gray-300 flex items-center justify-center ml-[10px]"
        >
          <i class="bx bx-dots-horizontal-rounded"></i>
        </Button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
