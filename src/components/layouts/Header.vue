<script setup lang="ts">
import { useAuthStore } from '../../store/useAuthStore';
import Button from '../ui/Button.vue';

const auth = useAuthStore();
</script>

<template>
  <section class="w-full h-14 px-5 flex items-center justify-end">
    <Button @click="auth.logout">Logout</Button>
  </section>
</template>