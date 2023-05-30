<template>
    <v-row>
      <v-col>
          <v-toolbar
            color="black"
            :dark="true"
          >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>DreamRealm</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon @click="logout">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-toolbar>
      </v-col>
    </v-row>
  </template>

<script>
import { useAuthStore } from '@/store/auth'

// access the `store` variable anywhere in the component ✨
const store = useAuthStore()
export default {
  data: () => ({
    bars: [
      { class: 'primary', dark: true },
    ],
  }),
  mounted() {
    if(localStorage.getItem("user") != null){
      console.log(localStorage.getItem("user"));
      console.log(store.token);
    }else {
      this.$router.push({name: 'Login'});
    }
  },
  methods : {
    logout(){
      store.logout();
      this.$router.push({name: 'Login'});
    }
  }
}
</script>