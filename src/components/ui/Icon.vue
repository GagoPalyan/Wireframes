<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { IIconProps } from '../../types/ui.type';
import { getIconUrl } from '../../utils/get-icon-url.util';

const props = defineProps<IIconProps>()
const iconUrl = getIconUrl(props.icon);
</script>

<template>
  <div 
    :class="twMerge('min-w-6 min-h-6 mask-no-repeat mask-center mask-cover bg-gray-600', iconClassName)"
    :style="{
      WebkitMaskImage: iconUrl,
      maskImage: iconUrl,
    }"></div>
</template>