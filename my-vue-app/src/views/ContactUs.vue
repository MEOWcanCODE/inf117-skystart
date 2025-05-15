<!--
  ContactUs.vue
  Contact page that is available for public view
  Displays how to contact SkyStart
-->

<template>
  <div class="home-container">
    <div class="contact-us">
      <header class="nav-bar">
        <img src="/logo.png" alt="Skystart Logo" class="logo" />
        <div class="nav-links">
          <button>Our Mission</button>
          <button>Contact</button>
        </div>
      </header>
  
      <main class="contact-info">
        <p>
          If you have any questions or concerns, please feel free to contact us at help@skystart.org
        </p>
      </main>
    </div>

  </div>
  </template>
    
  <style scoped>
  .home-container {
    background-color: #f5f5f5;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .nav-bar {
    background-color: #ffffff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    height: 40px;
  }
  
  .nav-links button {
    margin-left: 1rem;
    background: none;
    border: none;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }
  
  .contact-info {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  
  </style>
  