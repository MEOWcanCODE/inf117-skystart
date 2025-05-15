import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import OrgDashboard from '../views/OrgDashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/org-dashboard', name: 'OrgDashboard', component: OrgDashboard },
  { path: '/member-login', name: 'MemberLogin', component: () => import('../views/MemberLogin.vue') },
  { path: '/student-dashboard', name: 'StudentDashboard', component: () => import('../views/StudentDashboard.vue') },
  { path: '/student-courses', name: 'StudentCourses', component: () => import('../views/StudentCourses.vue') },
  { path: '/student-projects', name: 'StudentProjects', component: () => import('../views/StudentProjects.vue') },
  { path: '/student-settings', name: 'StudentSettings', component: () => import('../views/StudentSettings.vue') },

  { path: '/contact-us', name: 'ContactUs', component: () => import('../views/ContactUs.vue') },


]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
