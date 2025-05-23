import { createRouter, createWebHistory } from 'vue-router'

// Home & Login
import HomePage from '../views/home/HomePage.vue'
import LoginPage from '../views/home/LoginPage.vue'
import MemberLogin from '../views/home/MemberLogin.vue'

// Org Admin
import OrgDashboard from '../views/org/OrgDashboard.vue'

// Student Dashboard & Tabs
import StudentDashboard from '../views/StudentDashboard.vue'
import CoursePage from '../views/student/courses/CoursePage.vue'
import StudentProjects from '../views/student/Projects.vue'
import StudentSettings from '../views/student/Settings.vue'
import ProjectDetail from '../views/student/ProjectDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/member-login', name: 'MemberLogin', component: MemberLogin },
  { path: '/org-dashboard', name: 'OrgDashboard', component: OrgDashboard },
  {
    path: '/student-dashboard',
    name: 'StudentDashboard',
    component: StudentDashboard
  },
  {
    path: '/student-dashboard/courses',
    name: 'CoursePage',
    component: CoursePage
  },
  {
    path: '/student-dashboard/projects',
    name: 'StudentProjects',
    component: StudentProjects
  },
  {
    path: '/student-dashboard/settings',
    name: 'StudentSettings',
    component: StudentSettings
  },
  {
    path: '/student-dashboard/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
