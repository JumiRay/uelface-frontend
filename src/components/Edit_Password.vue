<template>
    <div class="edit-password-page">
      <h2>Edit Password</h2>
      <form @submit.prevent="submitPasswordChange">
        <div class="form-group">
          <label for="current-password">Current Password</label>
          <input type="password" id="current-password" v-model="currentPassword" required />
        </div>
        <div class="form-group">
          <label for="new-password">New Password</label>
          <input type="password" id="new-password" v-model="newPassword" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm New Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
    },
    methods: {
      submitPasswordChange() {
        if (this.newPassword !== this.confirmPassword) {
          alert('New passwords do not match. Please try again.');
          return;
        }
        // Execute the logic to change the password, such as calling an API
        alert('Password changed successfully!');
        this.$router.push('/profile'); 
      }
    }
  };
  </script>
  
  <style scoped>
  @import "@/assets/Modern Vue Styles.css";
  
  .edit-password-page {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: var(--primary-color);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: var(--secondary-color);
  }
  </style>
  