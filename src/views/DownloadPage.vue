<template>
    <div class="download-page">
      <h2>Download Your Photo</h2>
      <div class="card">
        <img :src="processedPhoto" alt="Processed Photo" />
        <a :href="processedPhoto" download="processed_photo.jpg">
          <button>Download</button>
        </a>
      </div>
      <router-link to="/">Return to main page</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        processedPhoto: 'https://via.placeholder.com/300' // Placeholder URL
      };
    }
  };
  </script>
  
  <style scoped>
  .download-page {
    max-width: 600px;
    margin: 0 auto;
  }
  .card img {
    width: 100%;
    border-radius: var(--border-radius);
  }
  </style>
  