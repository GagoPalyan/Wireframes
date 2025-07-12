import { defineStore } from 'pinia'
import axios, { AxiosError } from 'axios'
import type { TLoginReq, TRegisterReq } from '../types/auth.type'
import Cookies from 'js-cookie'
import router from '../router'
import { authApi } from '../constants/api'


const auth = ({ accessToken }: { accessToken: string }) => {
  Cookies.set('accessToken', accessToken);
  router.replace('/');
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: Cookies.get('accessToken') || null,
    isAuthenticated: !!Cookies.get('accessToken'),
  }),
  actions: {
    async login(data: TLoginReq) {
      const response = await axios.post(authApi.login, data, {
        headers: { Accept: 'application/json' }
      }).then(res => res.data);

      this.token = response.access_token;
      auth(response);
    },

    async register(data: TRegisterReq) {
      try {
        const response = await axios.post(authApi.register, data, {
          headers: { Accept: 'application/json' }
        }).then((res) => res.data);
        
        this.token = response.access_token;
        auth(response);
      } catch (error) {
        const { response } = error as AxiosError<{ errors: Record<string, string[]> }>
        const errorMessages = response?.data.errors;
        return errorMessages;
      }
    },

    async logout() {
      try {
        await axios.post(authApi.logout, {}, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.token}`
          }
        })
      } catch { };

      this.token = null;
      this.isAuthenticated = false;
      Cookies.remove('accessToken');
      router.replace('login')
    }
  }
});