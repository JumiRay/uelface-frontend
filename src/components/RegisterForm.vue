<template>
    <div class="register-page">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <router-link to="/login">Already have an account? Login</router-link>
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
      register() {
        // Registration Logic
        console.log('Register with:', this.email, this.password);
      }
    }
  };
  </script>
  
  <style src="@/assets/Modern Vue Styles.css"></style>
  