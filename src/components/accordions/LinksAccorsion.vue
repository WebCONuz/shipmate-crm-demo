<script setup>
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const open = ref(props.isOpen);
const openAccordion = (e) => {
  open.value = !open.value;
};
</script>

<template>
  <div v-if="props.data?.links">
    <!-- title   -->
    <div
      class="p-[10px] flex items-center text-textBlack mb-2 cursor-pointer"
      @click="openAccordion"
    >
      <i
        class="bx bxs-down-arrow duration-200 text-xs"
        :class="open ? 'rotate-180' : 'rotate-0'"
      ></i>
      <p class="ml-[10px] font-medium">{{ props.data.title }}</p>
    </div>
    <!-- accordion -->
    <nav
      class="transition-all duration-200 overflow-hidden flex flex-col"
      :class="open ? 'max-h-[800px]' : 'max-h-0'"
    >
      <router-link
        :to="item.url"
        class="py-[10px] pl-9 mb-2 text-textBlack font-medium hover:bg-lightBlue duration-200 border-t border-b border-gray-200"
        v-for="(item, index) in props.data.links"
        :key="index + 'AAALL'"
      >
        {{ item.name }}
      </router-link>
    </nav>
  </div>
  <div v-else>
    <!-- link -->
    <router-link
      :to="props.data.url"
      class="py-[10px] pl-9 w-full block mb-2 text-textBlack font-medium"
    >
      {{ props.data.title }}
    </router-link>
  </div>
</template>

<style scoped>
.router-link-active {
  color: #086ed6;
  background-color: #ddf2fd;
}
</style>
