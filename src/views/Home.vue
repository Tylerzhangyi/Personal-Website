<template>
  <div class="home page no-padding">
    <section class="hero-section bg-photo">
      <div class="container">
        <div class="hero-content">
          <div class="hero-left">
            <div class="avatar-wrapper">
              <img src="/avatar-placeholder.jpg" :alt="t('home.avatarAlt')" @error="handleImageError" />
            </div>
          </div>
          <div class="hero-right">
            <p class="eyebrow">{{ t('home.eyebrow') }}</p>
            <h1 class="title">{{ t('home.greeting') }}
              <span class="highlight">Zhang Yi</span>
            </h1>
            <p class="subtitle">
              {{ t('home.subtitle') }}
            </p>
            <div class="cta-group">
              <router-link to="/projects" class="btn btn-primary">{{ t('home.ctaProjects') }}</router-link>
              <router-link to="/contact" class="btn btn-secondary">{{ t('home.ctaContact') }}</router-link>
            </div>
            <div class="socials">
              <a href="https://github.com/Tylerzhangyi" target="_blank" rel="noopener" aria-label="GitHub" class="social-link">
                <CodeBracketIcon class="icon-inline" />
                GitHub
              </a>
              <router-link to="/blog" class="social-link">
                <DocumentTextIcon class="icon-inline" />
                Blog
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bg overlay" aria-hidden="true"></div>
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

    <footer class="home-footer">
      <div class="footer-bottom">
        © {{ new Date().getFullYear() }} Zhang Yi. {{ t('home.footer') }}
      </div>
    </footer>
  </div>
  
</template>

<script>
import { CodeBracketIcon, DocumentTextIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import { i18n, t as $t } from '../utils/i18n'

export default {
  name: 'Home',
  components: {
    CodeBracketIcon,
    DocumentTextIcon,
    RocketLaunchIcon,
    WrenchScrewdriverIcon
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
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #e8fff5 0%, #f0f9ff 50%, #fff 100%);
  z-index: 0; /* 放在背景图之上，内容之下 */
}

.hero-section::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  right: -150px;
  top: -150px;
  background: radial-gradient(closest-side, rgba(38,58,82,0.22), transparent 75%);
  z-index: -1; /* 装饰性光斑，位于遮罩之下 */
}

/* 整幅背景图：请将 hero.jpg 放到 public/ 目录下 */
.bg-photo {
  background-image: url('/hero.jpg');
  background-size: cover;
  background-position: center;
}
.overlay {
  background: linear-gradient(90deg, rgba(38,58,82,0.72) 0%, rgba(38,58,82,0.55) 40%, rgba(38,58,82,0.25) 100%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0 3rem;
  position: relative;
  z-index: 1; /* 内容位于遮罩之上 */
}

.avatar-wrapper {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(253, 191, 76, 0.25);
  outline: 8px solid rgba(66, 185, 131, 0.12);
  background: #e88a55;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-fallback {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: #e88a55;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(185, 151, 66, 0.25);
  outline: 8px solid rgba(66, 185, 131, 0.12);
}

.fallback-char {
  color: #fff;
  font-size: 3.2rem;
  font-weight: 700;
}

.eyebrow {
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 0.8rem;
}

.title {
  font-size: 3rem;
  line-height: 1.15;
  color: #ffffff;
  margin-bottom: 1rem;
}

.highlight {
  color: var(--accent);
}

.subtitle {
  color: #eef1f6;
  font-size: 1.1rem;
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
  background: #fff;
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

.social-link:hover {
  color: var(--accent);
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
  background: #fff;
  padding: 1.6rem;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(0,0,0,0.04);
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
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
  color: #2c3e50;
  margin-bottom: 0.4rem;
}

.feature-card p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 0.6rem;
}

.feature-card .more {
  color: var(--accent);
  font-weight: 600;
}

.home-footer {
  background: var(--color-surface);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-card h3 {
  color: var(--brand);
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.footer-card p,
.footer-card li,
.footer-card a {
  color: var(--color-muted);
  line-height: 1.8;
  font-size: 0.95rem;
}

.footer-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.footer-card a:hover {
  color: var(--accent);
}

.footer-bottom {
  text-align: center;
  color: var(--color-muted);
  font-size: 0.85rem;
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-right {
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.3rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

