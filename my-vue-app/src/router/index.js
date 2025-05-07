import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import OrgDashboard from '../views/OrgDashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/org-dashboard', name: 'OrgDashboard', component: OrgDashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
