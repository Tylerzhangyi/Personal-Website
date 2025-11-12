<template>
  <div class="home page no-padding">
    <section class="hero-section">
      <MatrixRain />
      <div class="container">
        <div class="hero-content">
          <div class="hero-copy">
            <p class="welcome">{{ t('home.welcome') }}</p>
            <h1 class="headline">
              {{ t('home.greeting') }} <span class="accent">Zhang&nbsp;Yi</span>
            </h1>
            <h2 class="role">{{ t('home.role') }}</h2>
            <p class="subtitle">{{ t('home.subtitle') }}</p>
            <div class="cta-group">
              <router-link to="/projects" class="btn btn-primary">{{ t('home.ctaProjects') }}</router-link>
              <router-link to="/contact" class="btn btn-secondary">{{ t('home.ctaContact') }}</router-link>
            </div>
            <div class="socials">
              <a href="https://github.com/Tylerzhangyi" target="_blank" rel="noopener" aria-label="GitHub" class="social-link">
                <CodeBracketIcon class="icon-inline" /> GitHub
              </a>
              <router-link to="/blog" class="social-link">
                <DocumentTextIcon class="icon-inline" /> Blog
              </router-link>
            </div>
          </div>
          <div class="hero-photo">
            <img src="/tyler.png" :alt="t('home.avatarAlt')" @error="handleImageError" />
          </div>
        </div>
      </div>
      <div class="hero-bg" aria-hidden="true"></div>
    </section>

    <section class="features">
      <div class="container">
        <div class="features-grid">
          <router-link to="/projects" class="feature-card">
            <div class="icon">
              <RocketLaunchIcon />
            </div>
            <h3>{{ t('home.features.projects') }}</h3>
            <p>{{ t('home.features.projectsDesc') }}</p>
            <span class="more">{{ t('home.features.view') }}</span>
          </router-link>
          <router-link to="/blog" class="feature-card">
            <div class="icon">
              <DocumentTextIcon />
            </div>
            <h3>{{ t('home.features.blog') }}</h3>
            <p>{{ t('home.features.blogDesc') }}</p>
            <span class="more">{{ t('home.features.read') }}</span>
          </router-link>
          <router-link to="/skills" class="feature-card">
            <div class="icon">
              <WrenchScrewdriverIcon />
            </div>
            <h3>{{ t('home.features.skills') }}</h3>
            <p>{{ t('home.features.skillsDesc') }}</p>
            <span class="more">{{ t('home.features.more') }}</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
import { CodeBracketIcon, DocumentTextIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import { i18n, t as $t } from '../utils/i18n'
import MatrixRain from '../components/MatrixRain.vue'

export default {
  name: 'Home',
  components: {
    CodeBracketIcon,
    DocumentTextIcon,
    RocketLaunchIcon,
    WrenchScrewdriverIcon,
    MatrixRain
  },
  computed: {
    currentLang() {
      return i18n.lang
    }
  },
  methods: {
    t(key) {
      return $t(key)
    },
    handleImageError(e) {
      e.target.style.display = 'none'
      const parent = e.target.parentElement
      parent.classList.add('avatar-fallback')
      const fallbackChar = i18n.lang === 'zh' ? '我' : 'Me'
      parent.innerHTML = `<span class="fallback-char">${fallbackChar}</span>`
    }
  }
}
</script>

<style scoped>
.no-padding {
  padding: 0;
}

.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px; /* 避免与固定导航栏重叠 */
  background: #0a1528; /* 深蓝色背景，与数字雨渐变匹配 */
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.2); /* 减少遮罩透明度，让数字雨更明显 */
  z-index: 1;
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0 3rem;
  position: relative;
  z-index: 2;
}

.welcome {
  color: var(--color-muted);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
}

.headline {
  font-size: 4rem;
  line-height: 1.1;
  color: var(--brand);
  margin-bottom: 0.6rem;
}

.accent { color: var(--accent); }

.role {
  color: var(--brand);
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  margin-bottom: 1.2rem;
}

.subtitle {
  color: var(--color-muted);
  font-size: 1rem;
  line-height: 1.9;
  max-width: 640px;
  margin-bottom: 1.8rem;
}

.cta-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.4rem;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.25s ease;
  text-decoration: none;
}

.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-600); transform: translateY(-2px); }
.btn-secondary { background: rgba(38,58,82,0.12); color: #ffffff; backdrop-filter: blur(2px); border: 1px solid rgba(255,255,255,0.2); }
.btn-secondary:hover { background: rgba(38,58,82,0.22); transform: translateY(-2px); }

.socials {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.social-link {
  color: var(--brand);
  background: rgba(255,255,255,0.06);
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.social-link:hover {
  color: var(--accent);
}

.hero-photo {
  justify-self: end;
  width: 420px;
  height: 520px;
  border-radius: 12px;
  overflow: hidden;
  background: #0d0f13;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.features {
  padding: 3rem 0 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: var(--color-surface);
  padding: 1.6rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid var(--border);
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

.feature-card .icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.6rem;
  color: var(--accent);
}

.feature-card .icon svg {
  width: 100%;
  height: 100%;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-inline {
  width: 1.2rem;
  height: 1.2rem;
}

.feature-card h3 {
  color: var(--brand);
  margin-bottom: 0.4rem;
}

.feature-card p {
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 0.6rem;
}

.feature-card .more {
  color: var(--accent);
  font-weight: 600;
}


@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-photo { justify-self: center; width: 80%; height: auto; max-width: 420px; }
  .headline { font-size: 3rem; }
  .role { font-size: 1.6rem; }
}

@media (max-width: 768px) {
  .subtitle { font-size: 1rem; }
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

