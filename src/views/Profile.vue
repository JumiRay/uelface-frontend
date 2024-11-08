<template>
    <div class="profile-page">
      <h2>Profile Information</h2>
      <div class="card">
        <form @submit.prevent="updateProfile">
          <label for="name">Name:</label>
          <input type="text" v-model="profile.name" id="name" required />
  
          <label for="email">Email:</label>
          <input type="email" v-model="profile.email" id="email" required />
  
          <label for="phone">Phone:</label>
          <input type="text" v-model="profile.phone" id="phone" />
  
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890'
        }
      };
    },
    methods: {
      updateProfile() {
        // Logic for updating user information
        console.log('Profile updated:', this.profile);
      }
    }
  };
  </script>
  
  <style scoped>
  .profile-page {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  