<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const isActiveEdit = ref<boolean>(false);
const open = ref<any>(props.isOpen);
const openAccordion = (e: any) => {
  console.log(e.target);
  open.value = !open.value;
};
</script>

<template>
  <div v-if="true" class="accordion">
    <!-- title   -->
    <div
      class="py-1 w-full flex items-center justify-between pr-2 cursor-pointer hover:bg-gray-100 duration-200"
    >
      <div class="flex items-center" @click="openAccordion">
        <i
          class="bx bx-chevron-down text-3xl duration-500"
          :class="open ? 'rotate-180' : 'rotate-0'"
        ></i>
        <p class="font-semibold">{{ props.title }}</p>
      </div>
      <div class="flex items-center">
        <slot name="payment" />
        <div
          @click="isActiveEdit = !isActiveEdit"
          class="bg-white w-5 h-5 mx-1 rounded border border-gray-300 flex items-center justify-center"
        >
          <i class="bx bx-pencil text-sm text-textBlack"></i>
        </div>
        <slot name="operation" />
      </div>
    </div>
    <!-- accordion -->
    <ul
      class="overflow-hidden transition-all duration-500"
      :class="open ? 'max-h-[800px]' : 'max-h-0'"
    >
      <li
        class="py-1 px-2 flex gap-x-4 hover:bg-gray-100 cursor-pointer duration-200"
        v-for="item in Object.keys(props.data)"
      >
        <div class="w-1/3 text-nowrap overflow-hidden">
          <i class="bx bxs-car text-mainBlue mr-2"></i>
          <span class="text-darkBlue font-medium capitalize">{{ item }}</span>
        </div>
        <div class="w-2/3 flex justify-between items-center">
          <p
            v-if="!isActiveEdit"
            class="text-textBlack bg-lightBlue text-sm px-1 rounded"
          >
            {{ props.data[item] }}
          </p>
          <input
            v-else
            type="text"
            :value="props.data[item]"
            class="outline-none rounded py-[2px] px-2 text-sm border border-gray-300"
          />
          <div
            class="bg-white w-5 h-5 rounded border border-gray-200 flex items-center justify-center"
          >
            <i class="bx bx-copy text-sm text-textBlack"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="pt-2">333 3 3 3</div>
</template>

<style scoped>
.router-link-active {
  color: #fff;
}
</style>
