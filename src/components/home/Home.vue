<template>
  <Loading v-if="!data.length" />
  <section v-else class="max-w-[1200px] w-fit grid sm:grid-cols-1 md:grid-cols-2 gap-6 py-10">
    <Cart 
      v-for="({id, name, price, description, picture}) in data"
      :key="id"
      :picture="picture"
      :name="name"
      :price="price"
      :description="description"
    />
  </section>
  <Button @click="loadMore" v-if="hasMore && data.length" className="w-fit animate-bounce">
    <p class="w-fit px-4">Load more</p>
  </Button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useProductStore } from '../../store/useProductStore';
import Cart from '../shared/Cart.vue';
import Loading from '../ui/Loading.vue';
import Button from '../ui/Button.vue';

const productStore = useProductStore();
const hasMore = ref(true);

const data = computed(() => {
  return productStore.products;
});
onMounted(async () => {
  await productStore.getProducts();
});
const loadMore = async () => {
  await productStore.getProducts();
  hasMore.value = !productStore.isLastPage;
};
</script>

