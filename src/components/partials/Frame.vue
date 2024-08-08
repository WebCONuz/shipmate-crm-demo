<script setup>
import { ref, defineComponent } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
let content = ref(1);
var toolbarOptions = ["bold", "italic", "underline", "link", "list", "clean"];
const modules = {
  name: "blotFormatter",
  module: BlotFormatter,
  options: {
    upload: (file) => {
      console.log(file);
    },
  },
};
</script>
<template>
  <div class="w-full">
    <!-- Frame Header -->
    <nav
      class="flex items-center w-full gap-2 border-x border-t rounded-t-md border-gray-400 cursor-pointer"
    >
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 1 }"
        @click="content = 1"
      >
        <i class="bx bx-notepad text-2xl mr-1"></i>
        <p class="text-lg">Notes</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 2 }"
        @click="content = 2"
      >
        <i class="bx bx-calendar text-2xl mr-1"></i>
        <p class="text-lg">Tasks</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 3 }"
        @click="content = 3"
      >
        <i class="bx bx-phone text-2xl mr-1"></i>
        <p class="text-lg">Phone</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 4 }"
        @click="content = 4"
      >
        <i class="bx bx-envelope text-2xl mr-1"></i>
        <p class="text-lg">Email</p>
      </div>
      <div
        class="flex h-full items-center px-3 py-2 text-gray-800"
        :class="{ price: content == 5 }"
        @click="content = 5"
      >
        <i class="bx bx-file text-2xl mr-1"></i>
        <p class="text-lg">Files</p>
      </div>
    </nav>

    <!-- Frame content -->
    <div class="w-full border rounded-b-md border-gray-400 h-[160px]">
      <div v-show="content == 1" class="bg-[#FFF4CC] h-full overflow-y-auto">
        <QuillEditor :modules="modules" :toolbar="toolbarOptions" />
      </div>
      <div v-show="content == 2" class="h-full">
        <p>tasks</p>
      </div>
      <div v-show="content == 3" class="h-full">
        <p>phone</p>
      </div>
      <div v-show="content == 4" class="h-full">
        <p>email</p>
      </div>
      <div v-show="content == 5" class="h-full">
        <p>Files</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price {
  border-bottom: 2px solid #0087ff;
  background-color: #ddf2fd;
}
</style>
