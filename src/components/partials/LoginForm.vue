<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();
const userData = reactive({
  login: "user@gmail.com",
  password: "123456",
});
function submitData() {
  console.log("Form yuborildi...", userData);
  router.push({ name: "user-leads" });
}
</script>

<template>
  <div class="p-6 rounded-lg box-shadow">
    <div class="title py-2 px-4 bg-blue-100 flex items-center mb-4 rounded-lg">
      <i class="bx bx-lock-open-alt text-[40px] text-gray-600 mr-3"></i>
      <div class="text-gray-600">
        <h1 class="text-xl font-semibold mb-1">Login</h1>
        <p class="text-sm">Please enter your data to login.</p>
      </div>
    </div>
    <form class="block w-full" @submit.prevent="submitData" autocomplete="off">
      <div class="form-item mb-3">
        <label class="text-sm text-gray-700 font-semibold">Username</label>
        <input
          type="email"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          placeholder="example@gmail.com"
          required
          v-model="userData.login"
        />
      </div>
      <div class="form-item mb-5">
        <label class="text-sm text-gray-700 font-semibold">Password</label>
        <input
          type="password"
          class="my-1 outline-none border border-gray-400 ring-0 rounded px-4 py-2 block w-full"
          placeholder="******"
          required
          v-model="userData.password"
        />
      </div>
      <div class="flex justify-end items-center">
        <input
          type="reset"
          class="py-2 px-4 bg-blue-500 text-white rounded mr-2 text-sm"
          value="Reset"
        />
        <input
          type="submit"
          class="py-2 px-4 bg-green-500 text-white rounded text-sm"
          value="Login"
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.box-shadow {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
