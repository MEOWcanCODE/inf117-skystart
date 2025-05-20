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

<style scoped>
.project-detail-page {
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: sans-serif;
}

.back-button {
  cursor: pointer;
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1rem;
  width: fit-content;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.06);
}

.top-card h1 {
  margin-bottom: 0.25rem;
  font-size: 1.6rem;
}

.description {
  color: #666;
  margin-bottom: 1rem;
}

.access-btn {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
}

.metrics-card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.column {
  flex: 1;
  min-width: 220px;
}

.column h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.metric-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  margin: 0.3rem 0;
}
</style>
