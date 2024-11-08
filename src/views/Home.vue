<template>
    <div class="home-page">
      <h2>UEL FACE Examples</h2>
      <div class="example-photos">
        <div v-for="(photo, index) in sampleImages" :key="index" class="photo-item" @click="goToUpload">
          <img :src="photo.src" :alt="photo.alt" class="sample-image" />
        </div>
      </div>
      <!-- <router-link to="/upload">Upload a Photo</router-link> -->
    </div>
  </template>
  
  <script>
  import photo1 from '@/assets/images/photo1.png';
  import photo2 from '@/assets/images/photo2.png';
  import photo3 from '@/assets/images/photo3.png';
  import photo4 from '@/assets/images/photo4.png';
  
  export default {
    data() {
      return {
        sampleImages: [
          { src: photo1, alt: 'Sample Image 1' },
          { src: photo2, alt: 'Sample Image 2' },
          { src: photo3, alt: 'Sample Image 3' },
          { src: photo4, alt: 'Sample Image 4' }
        ]
      };
    },
    methods: {
      goToUpload() {
        this.$router.push('/upload');
      }
    }
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--font-family);
    width: 100%;
    box-sizing: border-box;
  }
  
  .app-wrapper {
    border: 2px solid var(--primary-color);
    border-radius: var(--border-radius);
    margin: 1rem auto;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }
  
  .header-wrapper {
    background-color: var(--primary-color);
    padding: 1rem;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
  }
  
  .nav-wrapper {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .nav-link:hover {
    color: var(--secondary-color);
  }
  
  main {
    flex-grow: 1;
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;
  }
  
  .content-wrapper {
    background-color: #fff;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    margin: 0 auto;
  }
  
  .sample-images {
    margin-top: 2rem;
    text-align: center;
  }
  
  .images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    justify-items: center;
  }
  
  .image-wrapper {
    width: 150px;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .image-wrapper:hover {
    transform: scale(1.05);
  }
  
  .sample-image {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  