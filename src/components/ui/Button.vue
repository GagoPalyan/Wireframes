<template>
  <button @click="onClick" :type="type" :class="twMerge(buttonVariant, className)">
    <Icon v-if="prefix" :icon="prefix"/>
    <slot></slot>
    <Icon v-if="suffix" :icon="suffix"/>
  </button>
</template>

<script setup lang="ts">
import { buttonVariants } from '../../constants/button-variants';
import type { IButtonProps, TButton } from '../../types/ui.type';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon.vue';

const props = withDefaults(defineProps<IButtonProps>(), {
  variant: 'primary',
  state: 'default',
  type: 'button',
  className: '',
  text: '',
});

const buttonVariant = buttonVariants[props.variant as keyof TButton]
</script>