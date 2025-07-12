<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ILinkProps } from '../../types/ui.type';
import { useRoute } from 'vue-router';

const props =defineProps<ILinkProps>();
const route = useRoute()
const isActive = route.path === props.to;
</script>

<template>
  <RouterLink :class="twMerge('text-gray-800 hover:underline font-semibold text-lg', isActive ? 'text-gray-100' : '', linkClassName)" :to="to"><slot></slot></RouterLink>
</template>