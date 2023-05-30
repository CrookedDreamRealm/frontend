<template>
    <v-sheet class="d-flex justify-center align-center bg-deep-purple pa-12" style="height: 100%;">
            <v-card class="mx-auto px-6 py-8" width="400px">
                <v-form
                v-model="form"
                @submit.prevent="onSubmit"
                >
                <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    clearable
                    label="Email"
                ></v-text-field>
        
                <v-text-field
                    v-model="password"
                    type="password"
                    :readonly="loading"
                    :rules="[required]"
                    clearable
                    label="Password"
                    placeholder="Enter your password"
                ></v-text-field>
        
                <br>
        
                <v-btn
                    :disabled="!form"
                    :loading="loading"
                    block
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                >
                    Sign In
                </v-btn>
                </v-form>
            </v-card>
    </v-sheet>
  </template>
 
 <script>
import { useAuthStore } from '@/store/auth'
import { computed } from 'vue'

// access the `store` variable anywhere in the component ✨
const store = useAuthStore()
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
    user: [],
  }),

  methods: {
    async onSubmit () {
      
      this.user.email = this.email;
      this.user.password = this.password;
      this.loading = true;
      try{
        const response = await store.login(this.user).then(() => {});      
        if(localStorage.getItem("user") != null){
          this.$router.push({name: 'Home'});
        }
      } catch (error) {
        console.log(error);
      }
      
      this.loading = false;
      
    },
    required (v) {
      return !!v || 'Field is required'
    },
    handleLogin() {
      
    },
  },
  mounted() {
    if(localStorage.getItem("user") != null){
      this.$router.push({name: 'Home'});
    }
  }
}
</script>