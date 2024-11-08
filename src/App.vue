<template>
   <div id="app" class="app-wrapper">
     <header class="header-wrapper">
       <nav class="nav-wrapper">
         <router-link to="/" class="nav-link">Home</router-link>
         <router-link to="/settings" class="nav-link">Settings</router-link>
         <router-link to="/profile" class="nav-link">Profile</router-link>
         <router-link to="/history" class="nav-link">History</router-link>
         <router-link to="/register" class="nav-link">Register</router-link>
         <router-link to="/login" class="nav-link">Login</router-link>
       </nav>
     </header>
     <main class="main-container">
       <div class="content-wrapper">
         <router-view />
       </div>
     </main>
     <footer>
       <p>&copy; 2024 UEL FACE - All Rights Reserved</p>
     </footer>
   </div>
 </template>
 
 <script>
 export default {
   name: 'App'
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
  max-width: 1200px; 
  min-width: 375px; 
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
  max-width: 1200px; 
  min-width: 375px; 
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