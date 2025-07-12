<script setup lang="ts">
import Header from './Header.vue';
</script>

<template>
  <main class="w-full min-h-screen flex flex-col items-center justify-start gap-6 bg-gray-200 pb-10">
    <Header></Header>
    <slot></slot>
  </main>
</template>