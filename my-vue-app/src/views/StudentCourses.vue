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