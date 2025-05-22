<template>
  <div class="project-detail-page">
    <div class="back-button" @click="goBack">← Back to Projects</div>

    <div class="content-wrapper">
      <div class="card top-card">
        <h1>Project name</h1>
        <p class="description">Project description, a short one</p>
        <button class="access-btn">Access website</button>
      </div>

      <div class="card metrics-card">
        <div class="column">
          <h2>User metrics</h2>
          <div class="metric-row">
            <span>Total active users:</span><span>3,241</span>
          </div>
          <div class="metric-row">
            <span>Total monthly users:</span><span>1,311</span>
          </div>
        </div>
        <div class="column">
          <h2>Monthly breakdown</h2>
          <div class="metric-row">
            <span>Revenue:</span><span>1,222</span>
          </div>
          <div class="metric-row">
            <span>Profit:</span><span>1,000</span>
          </div>
          <div class="metric-row">
            <span>Debt after revenue:</span><span>59,231</span>
          </div>
          <div class="metric-row">
            <span>Debt to revenue ratio:</span><span>2:1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goBack() {
  router.push({ path: '/student-dashboard', query: { tab: 'projects' } })
}
</script>

