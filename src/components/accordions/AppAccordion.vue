<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

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
      class="py-1 w-full flex items-center cursor-pointer pb-2 duration-200"
      :class="open ? '' : 'border-b border-gray-300'"
      @click="openAccordion"
    >
      <p class="font-semibold">{{ props.title }}</p>
      <i
        class="bx bx-chevron-down text-2xl duration-500"
        :class="open ? 'rotate-180' : 'rotate-0'"
      ></i>
    </div>
    <!-- accordion -->
    <div
      class="overflow-hidden transition-all duration-500"
      :class="open ? 'max-h-[800px]' : 'max-h-0'"
    >
      <slot />
    </div>
  </div>
  <div v-else class="pt-2">333 3 3 3</div>
</template>

<style scoped>
.router-link-active {
  color: #fff;
}
</style>
