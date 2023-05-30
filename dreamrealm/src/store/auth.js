// Utilities
import { defineStore } from 'pinia';
import authService from "@/services/auth.service";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return { 
            user: [],
        }
    },
    getters: {
      getUser(state){
          return state.user
        }
    },
    actions: {
      async login(auth) {
        await authService.login(auth);
      },
      async logout(){
        await authService.logout();
      }
    },
})