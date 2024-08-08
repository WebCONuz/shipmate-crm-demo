<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    retuired: true,
  },
});
</script>

<template>
  <section
    class="w-full flex flex-col items-center justify-center min-h-[60vh]"
  >
    <img
      src="https://atlas-content-cdn.pixelsquid.com/stock-images/blue-exclamation-mark-symbols-d78OZMA-600.jpg"
      alt="warning"
      class="w-[150px] mb-4"
    />
    <h2 class="text-3xl text-blue-600 font-semibold mb-2">
      {{ props.title }}
    </h2>
    <p class="text-gray-500 text-lg max-w-[370px] text-center">
      This feature has not yet been added, it will be added soon
    </p>
  </section>
</template>

<style scoped></style>
