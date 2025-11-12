<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <router-link to="/" class="logo">
          <SparklesIcon class="logo-icon" />
          <span>Tyler Zhang's Portfolio</span>
        </router-link>
        <button class="menu-toggle" @click="toggleMenu" aria-label="切换菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">{{ t('nav.home') }}</router-link></li>
          <li><router-link to="/about" @click="closeMenu">{{ t('nav.about') }}</router-link></li>
          <li><router-link to="/skills" @click="closeMenu">{{ t('nav.skills') }}</router-link></li>
          <li><router-link to="/projects" @click="closeMenu">{{ t('nav.projects') }}</router-link></li>
          <li><router-link to="/blog" @click="closeMenu">{{ t('nav.blog') }}</router-link></li>
          <li><router-link to="/links" @click="closeMenu">{{ t('nav.links') }}</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">{{ t('nav.contact') }}</router-link></li>
        </ul>
        <button class="lang-toggle" @click="toggleLanguage">
          <span :class="{ active: language === 'zh' }">中文</span>
          <span class="divider">|</span>
          <span :class="{ active: language === 'en' }">EN</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { SparklesIcon } from '@heroicons/vue/24/outline'
import { i18n, setLanguage, t as $t } from '../utils/i18n'

export default {
  name: 'Navbar',
  components: {
    SparklesIcon
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    language() {
      return i18n.lang
    }
  },
  created() {
    document.documentElement.setAttribute('lang', this.language)
  },
  watch: {
    language(newLang) {
      document.documentElement.setAttribute('lang', newLang)
    }
  },
  methods: {
    t(key) {
      return $t(key)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleLanguage() {
      const newLang = this.language === 'zh' ? 'en' : 'zh'
      setLanguage(newLang)
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
  background: rgba(13,16,19,0.8);
  backdrop-filter: saturate(150%) blur(8px);
  box-shadow: var(--shadow-sm);
  z-index: 1000;
}

/* 让导航栏内容更贴近页面左侧 */
.navbar .container {
  padding-left: 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--brand);
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  gap: 0.6rem;
}

.logo-icon {
  width: 1.8rem;
  height: 1.8rem;
  color: var(--accent);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links a {
  color: var(--brand);
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

.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(38,58,82,0.05);
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: center;
}

.lang-toggle:hover {
  background: rgba(38,58,82,0.12);
}

.lang-toggle .divider {
  color: var(--border);
}

.lang-toggle span.active {
  color: var(--accent);
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
    background: rgba(13,16,19,0.98);
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

  .lang-toggle {
    margin-left: 0;
    margin-top: 1rem;
    align-self: center;
  }
}
</style>

