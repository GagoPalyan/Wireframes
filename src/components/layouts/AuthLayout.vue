<script setup lang="ts">
import AuthPages from '../shared/AuthPages.vue';
</script>

<template>
  <main class="w-screen h-screen flex items-center justify-center bg-[url('/src/assets/images/LoginBackground.jpg')] bg-center bg-cover bg-no-repeat">
    <AuthPages />
    <slot></slot>
  </main>
</template>