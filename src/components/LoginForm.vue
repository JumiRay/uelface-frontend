<template>
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <router-link to="/register">Don't have an account? Register</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
    
        console.log('Login with:', this.email, this.password);
      }
    }
  };
  </script>
  
  <style src="@/assets/Modern Vue Styles.css"></style>
  