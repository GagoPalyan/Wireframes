<script setup lang="ts">
import { RouteEnum } from '../../types/route.enum';
import Link from '../ui/Link.vue';
</script>

<template>
  <div class="flex gap-3 fixed top-5 right-5">
    <Link :to="RouteEnum.LOGIN">Login</Link>
    <Link :to="RouteEnum.REGISTER">Register</Link>
  </div>
</template>