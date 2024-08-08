<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  checked: {
    type: Boolean,
    required: true,
  },
  checkAll: {
    type: Function,
    required: false,
  },
  isBold: {
    type: Boolean,
    required: true,
  },
});
const isChecked = ref<boolean>(false);
const checkedFunction = () => {
  if (props.checkAll) {
    props.checkAll();
  } else {
    isChecked.value = !isChecked.value;
  }
};
</script>

<template>
  <div @click="checkedFunction" class="cursor-pointer">
    <div
      v-if="props.checked || isChecked"
      class="w-4 h-4 rounded border border-mainBlue bg-mainBlue text-white relative"
    >
      <i
        class="bx bx-check text-sm absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2"
      ></i>
    </div>
    <div
      v-else
      class="w-4 h-4 rounded border bg-white"
      :class="props.isBold ? 'border-black' : 'border-gray-400'"
    ></div>
  </div>
</template>

<style scoped></style>
