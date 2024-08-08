<script setup>
import LoginForm from "../../components/partials/LoginForm.vue";
</script>

<template>
  <main class="h-screen w-full flex items-center justify-center">
    <LoginForm class="w-2/5 bg-white border border-gray-300" />
  </main>
</template>

<style scoped>
.login {
  min-height: calc(100vh - 110px);
}
</style>
