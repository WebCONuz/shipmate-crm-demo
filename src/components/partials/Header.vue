<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  initial: {
    type: Function,
    required: true,
  },
  status: {
    type: Array,
    required: true,
  },
  i: {
    type: Number,
    required: true,
  },
  active: {
    type: Function,
    required: true,
  },
});

const input = ref("");
const content = ref(props.i);

onMounted(async () => {
  props.initial();
  content.value = props.i;
});
</script>

<template>
  <header
    class="w-full flex items-center justify-between shadow-lg sticky top-0 left-0 z-50 bg-white"
  >
    <!-- status list -->
    <nav class="flex text-base cursor-pointer">
      <div
        v-for="(item, index) in props.status"
        class="font-semibold py-4 px-3 capitalize"
        :class="{ price: props.i == index }"
        @click="props.active(index)"
        :key="index + 'AAVVDD'"
      >
        {{ item }}
      </div>
    </nav>

    <!-- details -->
    <div class="flex items-center pr-4">
      <el-input v-model="input" placeholder="Search" />
      <div class="flex items-center ml-12">
        <i class="bx bx-bulb text-3xl text-gray-300"></i>
        <div
          class="rounded-full w-10 h-10 overflow-hidden border-[3px] border-darkBlue ml-3"
        >
          <img
            src="https://images.unsplash.com/profile-1534796299842-cfc036c59a04?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
            alt="avatar"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.price {
  border-bottom: 2px solid #0087ff;
  background-color: #ddf2fd;
}
</style>
