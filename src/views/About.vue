<template>
  <div class="about page">
    <div class="container">
      <h1 class="page-title">{{ t('about.title') }}</h1>
      <div class="about-content">
        <div class="about-section">
          <h2>{{ t('about.intro') }}</h2>
          <p>
            {{ t('about.introText') }}
          </p>
        </div>

        <div class="about-section">
          <h2>{{ t('about.interests') }}</h2>
          <ul class="interest-list">
            <li v-for="(interest, index) in interestsList" :key="index">
              <CheckIcon class="check-icon" />
              {{ interest }}
            </li>
          </ul>
        </div>

        <div class="about-section">
          <h2>{{ t('about.hobbies') }}</h2>
          <p>
            {{ t('about.hobbiesText') }}
          </p>
        </div>

        <div class="about-section">
          <h2>{{ t('about.goals') }}</h2>
          <p>
            {{ t('about.goalsText') }}
          </p>
        </div>

    
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/24/solid'
import { i18n, t as $t, getDict } from '../utils/i18n'

export default {
  name: 'About',
  components: {
    CheckIcon
  },
  computed: {
    currentLang() {
      return i18n.lang
    },
    interestsList() {
      return getDict('about.interestsList') || []
    }
  },
  methods: {
    t(key) {
      return $t(key)
    }
  }
}
</script>

<style scoped>
.page-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--brand);
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-section {
  background: var(--color-surface);
  padding: 2.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.about-section h2 {
  color: var(--brand);
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.about-section p {
  color: var(--color-muted);
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.interest-list {
  list-style: none;
  padding: 0;
}

.interest-list li {
  padding: 0.75rem 0;
  color: var(--color-text);
  border-bottom: 1px solid var(--border);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.interest-list li:last-child {
  border-bottom: none;
}

.interest-list li:hover {
  padding-left: 0.5rem;
  color: var(--accent);
}

.check-icon {
  width: 1.2rem;
  height: 1.2rem;
  color: var(--accent);
  flex-shrink: 0;
}

.photos-section {
  margin-top: 2rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.photo-placeholder {
  aspect-ratio: 4/3;
  background: #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .about-section {
    padding: 1.5rem;
  }
}
</style>

