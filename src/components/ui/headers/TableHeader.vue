<script setup lang="ts">
import Button from "../buttons/Button.vue";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const input = ref("");
const status = ["Call", "Email", "Task", "Deadline", "Payment"];
const timeStatus = [
  "To-Do",
  "Due",
  "Today",
  "Tomorrow",
  "This week",
  "Next week",
  "Select a period",
];
</script>

<template>
  <header class="mt-2 mb-7 bg-white relative z-20">
    <!-- top -->
    <div
      class="border-b border-black flex items-end justify-between pb-[6.5px]"
    >
      <!-- create leads -->
      <div class="flex gap-x-[10px]">
        <div
          class="w-10 border border-textGray flex items-center justify-center rounded"
        >
          <i class="bx bx-grid text-xl text-textGray"></i>
        </div>
        <div
          class="w-10 border border-mainGray flex items-center justify-center rounded"
        >
          <i class="bx bx-calendar text-xl text-textGray"></i>
        </div>
        <div class="border-l border-mainGray pl-[10px]">
          <Button class="font-semibold text-white bg-mainBlue px-3 text-sm">
            + New {{ props.title }}
          </Button>
        </div>
      </div>

      <!-- info & filter -->
      <div class="flex gap-x-[10px]">
        <!-- 1 -->
        <p class="font-semibold text-textGray flex items-center">
          <span>$120,000</span>
          <span class="mx-[10px] text-xs">*</span>
          <span>1-50 / 2500</span>
        </p>
        <!-- 2 -->
        <el-input v-model="input" placeholder="Search" style="width: 150px" />
        <!-- 3 -->
        <div
          class="user_settings cursor-pointer px-3 border border-mainGray flex items-center justify-center rounded relative"
        >
          <!-- constent -->
          <i class="bx bxs-down-arrow text-textGray mr-2"></i>
          <span class="font-semibold text-textGray">Ali Brain</span>
          <!-- sub menu -->
          <ul
            class="sub_menu opacity-0 invisible w-[150px] absolute top-10 right-0 bg-white border border-mainGray rounded flex flex-col py-1 shadow-lg duration-200"
          >
            <li
              class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
            >
              Some Item 1
            </li>
            <li
              class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
            >
              Some Item 2
            </li>
            <li
              class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
            >
              Some Item 3
            </li>
            <li
              class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
            >
              Some Item 4
            </li>
            <li
              class="w-full py-1 hover:bg-gray-100 duration-200 px-2 cursor-pointer"
            >
              Some Item 5
            </li>
          </ul>
        </div>
        <!-- 4 -->
        <div
          class="w-10 border border-mainGray flex items-center justify-center rounded"
        >
          <i class="bx bx-dots-horizontal-rounded text-2xl text-textGray"></i>
        </div>
      </div>
    </div>
    <!-- bottom -->
    <div
      v-if="$props.title === 'task'"
      class="flex items-center justify-between pt-2"
    >
      <!-- task status -->
      <ul class="flex gap-x-[5px]">
        <li
          class="text-textGray font-medium pr-[10px] border-r border-mainGray cursor-pointer hover:text-mainBlue duration-200 mr-2"
        >
          All
        </li>
        <li
          class="group flex items-center py-1 px-2 bg-lightBlue rounded cursor-pointer hover:bg-mainBlue duration-200"
          v-for="(item, index) in status"
          :key="index"
        >
          <i
            class="bx bx-phone text-gray-400 mr-1 group-hover:text-gray-200 duration-200"
          ></i>
          <span
            class="text-xs font-medium text-mainBlue group-hover:text-white duration-200"
            >{{ item }}</span
          >
        </li>
      </ul>

      <!-- date status -->
      <ul class="flex items-center gap-x-[5px]">
        <li
          class="py-1 px-2 rounded cursor-pointer text-xs font-medium hover:bg-lightBlue hover:text-mainBlue duration-200"
          v-for="(item, index) in timeStatus"
          :key="index"
          :class="
            index === 0
              ? 'bg-lightBlue text-mainBlue'
              : 'bg-white text-textGray'
          "
        >
          {{ item }}
        </li>
      </ul>
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
