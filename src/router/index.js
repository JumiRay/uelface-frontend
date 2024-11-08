import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegisterForm from '../components/RegisterForm.vue';
import LoginForm from '../components/LoginForm.vue';
import UploadPhoto from '../components/UploadPhoto.vue';
import Settings from '../components/Settings.vue';
import Profile from '../views/Profile.vue';
import LoadingPage from '../components/LoadingPage.vue';
import Edit_Password from '../components/Edit_Password.vue';
import DownloadPage from '../views/DownloadPage.vue';
import History from '../views/History.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: RegisterForm },
  { path: '/login', component: LoginForm },
  { path: '/upload', component: UploadPhoto },
  { path: '/settings', component: Settings },
  { path: '/profile', component: Profile },
  { path: '/loading-page', component: LoadingPage },
  { path: '/edit-password-page', component: Edit_Password },
  { path: '/download-page', component: DownloadPage },
  { path: '/history', component: History }
];

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
