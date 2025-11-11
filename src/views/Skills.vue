<template>
  <div class="skills page">
    <div class="container">
      <h1 class="page-title">{{ t('skills.title') }}</h1>
      
      <div class="skills-section">
        <h2>{{ t('skills.skillset') }}</h2>
        <div class="skills-grid">
          <div v-for="skill in skillsList" :key="skill.name" class="skill-item">
            <div class="skill-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-section">
        <h2>{{ t('skills.education') }}</h2>
        <div class="timeline">
          <div v-for="(edu, index) in educationList" :key="index" class="timeline-item">
            <div class="timeline-content">
              <h3>{{ edu.degree }}</h3>
              <p class="institution">{{ edu.institution }}</p>
              <p class="period">{{ edu.period }}</p>
              <p class="description">
                <template v-if="edu.link">
                  <a :href="edu.link" target="_blank" rel="noopener">{{ edu.description }}</a>
                </template>
                <template v-else>
                  {{ edu.description }}
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="courses-section">
        <h2>{{ t('skills.courses') }}</h2>
        <div class="courses-grid">
          <div v-for="course in coursesList" :key="course" class="course-tag">
            {{ course }}
          </div>
        </div>
      </div>

      <div class="awards-section">
        <h2>{{ t('skills.awards') }}</h2>
        <ul class="awards-list">
          <li v-for="award in awardsList" :key="award">
            <TrophyIcon class="award-icon" />
            {{ award }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { TrophyIcon } from '@heroicons/vue/24/outline'
import { i18n, t as $t, getDict } from '../utils/i18n'

export default {
  name: 'Skills',
  components: {
    TrophyIcon
  },
  computed: {
    currentLang() {
      return i18n.lang
    },
    skillsList() {
      return getDict('skills.skillsList') || []
    },
    educationList() {
      return getDict('skills.educationList') || []
    },
    coursesList() {
      return getDict('skills.coursesList') || []
    },
    awardsList() {
      return getDict('skills.awardsList') || []
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

.skills-section,
.resume-section,
.courses-section,
.awards-section {
  background: var(--color-surface);
  padding: 2.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

h2 {
  color: var(--brand);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
}

.skill-item {
  width: 100%;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.95rem;
}

.skill-level {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
}

.skill-bar {
  height: 8px;
  background: rgba(0,0,0,0.06);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-600));
  border-radius: 4px;
  transition: width 0.6s ease;
}

.timeline {
  position: relative;
}

.timeline-item {
  padding-left: 2rem;
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: -2rem;
  width: 2px;
  background: var(--accent);
  opacity: 0.3;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: -5px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 2px var(--accent);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:last-child::before {
  display: none;
}

.timeline-content h3 {
  color: var(--brand);
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
}

.institution {
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

.period {
  color: var(--color-muted);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: var(--color-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.description a {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}

.description a:hover {
  text-decoration: underline;
}

.courses-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.course-tag {
  background: var(--color-surface);
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.9rem;
  white-space: nowrap;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.course-tag:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.awards-list {
  list-style: none;
  padding: 0;
}

.awards-list li {
  padding: 1.2rem 1.5rem;
  margin-bottom: 0.75rem;
  background: var(--color-surface);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text);
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}

.awards-list li:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-sm);
  transform: translateX(4px);
}

.award-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .skills-section,
  .resume-section,
  .courses-section,
  .awards-section {
    padding: 1.5rem;
  }

  .timeline-item {
    padding-left: 1.5rem;
  }
}
</style>

