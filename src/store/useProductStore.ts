import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'
import { productApi } from '../constants/api'
import type { TPaginateProduct, TProduct } from '../types/products.type'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as TProduct[],
    page: 1,
    isLastPage: false,
  }),
  actions: {
    async getProducts() {
      const token = Cookies.get('accessToken');
      const result: TPaginateProduct = await axios.get(productApi.paginate, {
        params: { page: this.page },
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      }).then(res => res.data)
      const { data, current_page, last_page } = result;

      this.products.push(...data);
      this.page = current_page + 1;
      this.isLastPage = current_page === last_page;

      return { data };
    }
  }
});