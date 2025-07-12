<template>
  <div class="fixed top-0 left-0 z-20 w-screen h-screen bg-black bg-opacity-40 flex items-center justify-center px-2" @click.self="onModalClose">
    <slot name="container">
      <div :class="twMerge('md:w-[640px] md:h-[420px] bg-white border-[10px] w-[calc(100% - 40px)] h-auto border-black flex flex-col px-5 py-3', containerClassName)">
        <div class="w-full flex justify-end min-h-10">
          <Icon @click="onModalClose" icon="close" iconClassName="bg-black min-w-10 min-h-10 cursor-pointer" />
        </div>
        <slot></slot>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { effect } from 'vue';
import type { IModalProps } from '../../types/ui.type';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon.vue';


const props = defineProps<IModalProps>();

effect(() => {
  if (props.isModalOpen) {
    document.body.classList.add('overflow-hidden');
  }
});

const onModalClose = () => {
  document.body.classList.remove('overflow-hidden');
  props.onClose();
};
</script>