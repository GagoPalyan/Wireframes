<template>
  <div class="w-[280px] h-[450px] relative flex flex-col items-center justify-end gap-6 mt-6">
    <img class="w-[240px] h-[340px] object-cover absolute -top-6 rounded-lg shadow-lg" :src="picture" :alt="name">
    <div class="w-full h-[750px] flex flex-col items-center justify-end bg-gray-300 rounded-lg shadow-lg p-5">
      <div class="flex items-center justify-center h-20">
        <p class="text-xl font-bold text-gray-700 text-center">{{name}}</p>
      </div>
      <div class="w-full flex items-center justify-between">
        <p class="text-lg font-medium text-gray-400">{{`$${price}`}}</p>
        <Button @click="modal = true">Detials</Button>
      </div>
    </div>
  </div>
  <Modal v-if="modal" :isModalOpen="modal" :onClose="onClose"><CartPopup :picture="picture" :name="name" :price="price" :description="description" /></Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TProduct } from '../../types/products.type';
import Button from '../ui/Button.vue';
import Modal from '../ui/Modal.vue';
import CartPopup from './CartPopup.vue';

defineProps<TProduct>();
const modal = ref(false);
const onClose = () => {
  modal.value = false;
};
</script>