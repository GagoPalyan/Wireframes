<template>
  <div class="w-full flex flex-col gap-1">
    <div :class="twMerge('flex w-full items-center gap-4', className)">
      <Icon v-if="prefix" :icon="prefix"/>
      <Field
        :name="name"
        v-bind="$attrs"
        @input="onInput"
        ref="inputRef"
        :type="type" 
        :class="twMerge('py-2 w-full text-lg border-b border-gray-300 outline-none', inputClassName)" 
        :placeholder="placeholder"
      />
      <Icon v-if="suffix" :icon="suffix"/>
    </div>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <ErrorMessage v-else :name="name" class="text-red-500 text-sm"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ErrorMessage, Field } from 'vee-validate';
import type { IInputProps } from '../../types/ui.type';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon.vue';

const inputRef = ref('');
const props = withDefaults(defineProps<IInputProps>(), { type: 'text' });
const error = computed(() => props.error);

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>();
const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
};
defineExpose({ inputRef });
</script>