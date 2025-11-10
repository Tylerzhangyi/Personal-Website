<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <span>Tyler Zhang's Portfolio</span>
        </router-link>
        <button class="menu-toggle" @click="toggleMenu" aria-label="切换菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">首页</router-link></li>
          <li><router-link to="/about" @click="closeMenu">关于我</router-link></li>
          <li><router-link to="/skills" @click="closeMenu">技能</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">项目</router-link></li>
          <li><router-link to="/blog" @click="closeMenu">博客</router-link></li>
          <li><router-link to="/links" @click="closeMenu">链接</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.85);
  backdrop-filter: saturate(140%) blur(8px);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--brand);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent);
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-text);
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.98);
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    box-shadow: var(--shadow-sm);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>

