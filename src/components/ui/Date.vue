<template>
  <div class="w-full flex flex-col gap-1">
    <div :class="twMerge('flex w-full items-center gap-4', className)">
      <Icon v-if="prefix" :icon="prefix"/>
      <div class="w-full relative">
        <label
          :for="name"
          :class="twMerge(
            'w-full h-full absolute top-0 left-0 z-20 text-lg border-b border-gray-300 bg-white flex items-center',
            !!inputRef && inputRef.value ? 'text-gray-900' : 'text-gray-400',
            labelClassName
          )" 
        >
          {{ inputRef && inputRef.value || placeholder }}
        </label>
        <Field
          :id="name"
          :name="name"
          v-bind="$attrs"
          ref="inputRef"
          type="date"
          @input="onInput"
          @focus="onFocus"
          :class="twMerge('py-2 w-full text-lg outline-none', className)" 
        />
      </div>
      <Icon v-if="suffix" :icon="suffix"/>
    </div>
    <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    <ErrorMessage v-else :name="name" class="text-red-500 text-sm"/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ErrorMessage, Field } from 'vee-validate';
import type { IDateProps } from '../../types/ui.type';
import { twMerge } from 'tailwind-merge';
import Icon from './Icon.vue';

const inputRef = ref<HTMLInputElement | null>(null);
const props = defineProps<IDateProps>();
const error = computed(() => props.error);

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>();
const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};
const onFocus = (e: FocusEvent) => {
  (e.target as HTMLInputElement).showPicker()
};
defineExpose({ inputRef });
</script>