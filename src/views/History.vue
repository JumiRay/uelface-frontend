<template>
    <div class="history-page">
      <h2>Upload History</h2>
      <ul>
        <li v-for="(photo, index) in history" :key="index" @click="goToDownload(photo.src)">
          Photo {{ index + 1 }} - Uploaded on {{ photo.date }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        history: [
          { src: 'https://via.placeholder.com/150', date: '2024-10-20' },
          { src: 'https://via.placeholder.com/150', date: '2024-10-21' },
          { src: 'https://via.placeholder.com/150', date: '2024-10-22' }
        ]
      };
    },
    methods: {
      goToDownload(imageSrc) {
        this.$router.push({ path: '/download-page', query: { image: imageSrc } });
      }
    }
  };
  </script>
  
  <style scoped>
  .history-page {
    max-width: 600px;
    margin: 0 auto;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 1rem;
    margin-bottom: 0.5rem;
    background-color: #fff;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  li:hover {
    transform: scale(1.05);
  }
  </style>
  