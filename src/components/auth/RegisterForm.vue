<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '../../store/useAuthStore';
import { registerSchema } from '../../utils/schemas.util';
import Input from '../ui/Input.vue';
import { ErrorMessage, Field, Form } from 'vee-validate';
import Date from '../ui/Date.vue';
import Button from '../ui/Button.vue';
import { registerFields } from '../../constants/auth-fields';

const auth = useAuthStore();
const formValue = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  education_start_date: '',
  education_end_date: '',
  terms: false,
});
const errorMessages = reactive({
  email: '',
  name: '',
  password: '',
  password_confirmation: '',
  education_start_date: '',
  education_end_date: '',
  terms: '',
});

const onSubmit = async () => {
  const { name, email, password, password_confirmation, education_start_date, education_end_date, terms } = formValue;
  const req = {
    name,
    email,
    password,
    password_confirmation,
    education_start_date,
    education_end_date,
    terms,
  };
  const response = await auth.register(req);
  if (response) {
    Object.keys(response).forEach((key) => {
      errorMessages[key as keyof typeof errorMessages] = response?.[key as keyof typeof response]?.[0] || '';
    });
  };
};
</script>

<template>
  <div class="w-[400px] bg-white relative py-8 flex flex-col items-center rounded-lg gap-8">
    <h1 class="text-2xl text-gray-600">Register</h1>
    <Form @submit="onSubmit" :validation-schema="registerSchema" class="w-full px-6 flex flex-col gap-6 items-center">
      <template v-for="{name, placeHolder, prefix, type} in registerFields">
        <Date
          v-if="type === 'date'"
          :name="name"
          v-model="formValue[name as keyof typeof formValue]"
          :placeholder="placeHolder"
          :prefix="prefix"
        />
        <Input
          v-else
          :type="type"
          :name="name"
          v-model="formValue[name as keyof typeof formValue]"
          :placeholder="placeHolder"
          :prefix="prefix"
          :error="errorMessages?.[name as keyof typeof errorMessages]"
        />
      </template>
      <div class="w-full flex items-center gap-2 px-1">
        <Field id="terms" class="size-4" type="checkbox" name="terms" :value="true" v-model="formValue.terms"/>
        <label for="terms" class="text-gray-600 text-sm">I agree to the </label><a href="#" class="text-purple-600 hover:underline">terms and conditions</a>
      </div>
      <ErrorMessage name="terms" class="text-red-500 text-sm w-full capitalize"/>
      <Button class="text-xs" type="submit" variant="primary">Get started</Button>
    </Form>
  </div>
</template>