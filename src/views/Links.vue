<template>
  <div class="links page">
    <div class="container">
      <h1 class="page-title">有用链接</h1>
      
      <div class="links-grid">
        <div v-for="link in links" :key="link.id" class="link-card">
          <div class="link-icon">
            <component :is="getIconComponent(link.icon)" />
          </div>
          <div class="link-content">
            <h3>
              <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.title }}</a>
            </h3>
            <p>{{ link.description }}</p>
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link-url">
              访问链接 →
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
  data() {
    return {
      links: [
        {
          id: 1,
          title: 'Vue.js 官方文档',
          description: 'Vue.js 的官方文档，学习 Vue 的最佳资源',
          url: 'https://cn.vuejs.org/',
          icon: 'BoltIcon'
        },
        {
          id: 2,
          title: 'MDN Web 文档',
          description: 'Web 开发技术的权威参考文档',
          url: 'https://developer.mozilla.org/zh-CN/',
          icon: 'BookOpenIcon'
        },
        {
          id: 3,
          title: 'GitHub',
          description: '全球最大的代码托管平台',
          url: 'https://github.com/',
          icon: 'CodeBracketIcon'
        },
        {
          id: 4,
          title: 'Stack Overflow',
          description: '程序员问答社区，解决编程问题的好地方',
          url: 'https://stackoverflow.com/',
          icon: 'QuestionMarkCircleIcon'
        },
        {
          id: 5,
          title: 'Vite 官方文档',
          description: '下一代前端构建工具，快速且高效',
          url: 'https://cn.vitejs.dev/',
          icon: 'RocketLaunchIcon'
        },
        {
          id: 6,
          title: 'CSS-Tricks',
          description: '前端开发技巧和教程的优质网站',
          url: 'https://css-tricks.com/',
          icon: 'PaintBrushIcon'
        }
      ]
    }
  },
  methods: {
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

