<script setup lang="ts">
import type { ICartPopup } from '../../types/shared.type';
import Button from '../ui/Button.vue';


defineProps<ICartPopup>();
</script>

<template>
  <div class="w-full flex items-center justify-between gap-5 md:flex-row flex-col">
    <img class="w-[250px] h-[320px] object-cover" :src="picture" :alt="name">
    <div class="flex h-full flex-col items-start justify-start gap-10">
      <div class="flex flex-col gap-3">
        <h1 class="text-xl font-bold text-gray-700">{{name}}</h1>
        <h2 class="text-lg font-medium text-gray-400">{{`$${price}`}}</h2>
      </div>
      <div class="flex flex-col gap-3">
        <p class="w-full border-b border-gray-300 py-2 text-sm text-pink-600">Description</p>
        <h3 class="text-sm text-gray-700">{{ description }}</h3>
      </div>
      <Button variant="primary" className="bg-pink-600">Add to cart</Button>
    </div>
  </div>
</template>