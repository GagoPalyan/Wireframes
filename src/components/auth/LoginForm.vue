<script setup lang="ts">
import { reactive } from 'vue';
import { Form } from 'vee-validate';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';
import { loginShema } from '../../utils/schemas.util';
import { useAuthStore } from '../../store/useAuthStore';

const auth = useAuthStore();
const formValue = reactive({
  email: '',
  password: ''
});

const onSubmit = async () => {
  const { email, password } = formValue;
  const req = {
    email,
    password,
  };
  await auth.login(req);
}
</script>

<template>
  <div class="w-80 bg-white relative pt-16 pb-6 flex flex-col items-center rounded-lg">
    <div class="absolute -top-10 h-20 w-72 bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center rounded-lg shadow-lg">
      <h1 class="text-2xl text-white">Login</h1>
    </div>
    <Form @submit="onSubmit" :validation-schema="loginShema" class="w-full px-6 flex flex-col gap-6 items-center">
      <Input name="email" v-model="formValue.email" placeholder="Email..." prefix="email"/>
      <Input name="password" v-model="formValue.password" placeholder="Password..." prefix="password" type="password"/>
      <Button  type="submit" variant="ghost">Lets go</Button>
    </Form>
  </div>
</template>