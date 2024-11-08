<template>
    <div class="settings-page">
      <h2>Settings</h2>
      <ul>
        <li><router-link to="/history">History</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/edit-password-page">Edit Password</router-link></li>
        <li><button @click="showLogoutModal = true">Log Out</button></li>
      </ul>
      
      
      <div v-if="showLogoutModal" class="modal">
        <div class="modal-content">
          <p>Are you sure you want to logout?</p>
          <div class="button-group">
            <button @click="logout">Yes</button>
            <button @click="showLogoutModal = false">No</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showLogoutModal: false
      };
    },
    methods: {
      logout() {
        this.$router.push('/login'); 
      }
    }
  };
  </script>
  
  <style scoped>
  @import "@/assets/Modern Vue Styles.css";

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .button-group button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .button-group button:hover {
    background-color: #f0f0f0;
  }
  </style>
