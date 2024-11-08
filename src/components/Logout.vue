<template>
    <div>
      
      <button @click="showLogoutModal = true">Logout</button>
  
      
      <div v-if="showLogoutModal" class="modal">
        <div class="modal-content">
          <p>Are you sure you want to logout?</p>
          <button @click="logout">Yes</button>
          <button @click="showLogoutModal = false">No</button>
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
        // Execute logout logic, such as clearing user information
        this.$router.push('/login'); 
      }
    }
  };
  </script>
  
  <style scoped>
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
  }
  </style>
  