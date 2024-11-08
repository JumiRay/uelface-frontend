<template>
    <div class="upload-photo-page">
      <h2>Upload 1 Photo</h2>
      <input type="file" @change="handleFileUpload" />
      <button @click="uploadPhoto">Upload</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFile: null
      };
    },
    methods: {
      handleFileUpload(event) {
        this.selectedFile = event.target.files[0];
      },
      uploadPhoto() {
        if (this.selectedFile) {
          console.log('Uploading:', this.selectedFile);
          
        } else {
          alert('Please select a photo to upload.');
        }
      }
    }
  };
  </script>
  
  <style src="@/assets/Modern Vue Styles.css"></style>
  