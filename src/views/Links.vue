<template>
  <div class="links page">
    <div class="container">
      <h1 class="page-title">{{ t('links.title') }}</h1>
      
      <div class="links-grid">
        <div v-for="(link, index) in linksList" :key="index" class="link-card">
          <div class="link-icon">
            <component :is="getIconComponent(link.icon)" />
          </div>
          <div class="link-content">
            <h3>
              <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
            </h3>
            <p>{{ link.description }}</p>
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link-url">
              {{ t('links.visit') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  BoltIcon, 
  BookOpenIcon, 
  CodeBracketIcon, 
  QuestionMarkCircleIcon, 
  RocketLaunchIcon, 
  PaintBrushIcon,
  LinkIcon
} from '@heroicons/vue/24/outline'
import { i18n, t as $t, getDict } from '../utils/i18n'

export default {
  name: 'Links',
  components: {
    BoltIcon,
    BookOpenIcon,
    CodeBracketIcon,
    QuestionMarkCircleIcon,
    RocketLaunchIcon,
    PaintBrushIcon,
    LinkIcon
  },
  computed: {
    currentLang() {
      return i18n.lang
    },
    linksList() {
      const links = getDict('links.linksList') || []
      const iconMap = ['BoltIcon', 'BookOpenIcon', 'CodeBracketIcon', 'QuestionMarkCircleIcon', 'RocketLaunchIcon', 'PaintBrushIcon']
      const urlMap = {
        zh: [
          'https://cn.vuejs.org/',
          'https://eric.mojalab.cn/',
          'https://github.com/',
          'https://stackoverflow.com/',
          'https://cn.vitejs.dev/',
          'https://css-tricks.com/'
        ],
        en: [
          'https://vuejs.org/',
          'https://eric.mojalab.cn/',
          'https://github.com/',
          'https://stackoverflow.com/',
          'https://vitejs.dev/',
          'https://css-tricks.com/'
        ]
      }
      return links.map((link, index) => ({
        ...link,
        icon: iconMap[index] || 'LinkIcon',
        url: urlMap[i18n.lang][index] || urlMap.en[index]
      }))
    }
  },
  methods: {
    t(key) {
      return $t(key)
    },
    getIconComponent(iconName) {
      const icons = {
        BoltIcon,
        BookOpenIcon,
        CodeBracketIcon,
        QuestionMarkCircleIcon,
        RocketLaunchIcon,
        PaintBrushIcon,
        LinkIcon
      }
      return icons[iconName] || LinkIcon
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

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.link-card {
  background: var(--color-surface);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.link-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.link-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-icon svg {
  width: 100%;
  height: 100%;
}

.link-content {
  flex: 1;
}

.link-content h3 {
  margin-bottom: 0.5rem;
}

.link-content h3 a {
  color: var(--brand);
  transition: color 0.3s;
  font-weight: 600;
}

.link-content h3 a:hover {
  color: var(--accent);
}

.link-content p {
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.link-url {
  color: var(--accent);
  font-weight: 500;
  transition: color 0.3s;
  display: inline-block;
}

.link-url:hover {
  color: var(--accent-600);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }

  .link-card {
    padding: 1.5rem;
  }
}
</style>

