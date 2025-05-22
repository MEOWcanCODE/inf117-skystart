<!--
  StudentCourses.vue
  Displays selected course content with video placeholder, question input, and mentor/help buttons.
-->

<template>
  <div class="course-container">
    <div class="course-header">
      <button class="nav-btn blue">← Previous</button>
      <button class="nav-btn yellow">Next →</button>
    </div>

    <div class="course-card">
      <div class="video-placeholder"></div>

      <div class="course-info">
        <h3>Video title</h3>
        <p class="subtitle">Subtitle</p>
        <p class="description">Description for video</p>

        <label class="question-label">Reading comprehension question label</label>
        <p class="question-desc">Description if you would like</p>
        <textarea placeholder="Type here"></textarea>
        <button class="submit-btn">Submit</button>
        <p class="hint">Hint: hint space here</p>
      </div>
    </div>

    <div class="course-footer">
      <button class="footer-btn">↩ Return to projects</button>
      <button class="footer-btn outline">💬 Contact mentor</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.course-container {
  background-color: #f5f5f5;
  padding: 2rem;
  font-family: sans-serif;
  min-height: 100vh;
}

.course-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.nav-btn {
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
}

.nav-btn.blue {
  background-color: #2196f3;
  color: white;
}

.nav-btn.yellow {
  background-color: #ffcc00;
  color: black;
}

.course-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}

.video-placeholder {
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.course-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.subtitle {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.question-label {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  display: block;
}

.question-desc {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.5rem;
}

textarea {
  width: 100%;
  height: 80px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  resize: none;
  margin-bottom: 0.75rem;
}

.submit-btn {
  background-color: #ffcc00;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
}

.hint {
  font-size: 0.75rem;
  color: #888;
  margin-top: 0.25rem;
}

.course-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.footer-btn {
  background-color: #e0e0e0;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}

.footer-btn.outline {
  border: 1px solid #999;
  background: white;
}
</style>
