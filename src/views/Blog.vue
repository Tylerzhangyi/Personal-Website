<template>
  <div class="blog page">
    <div class="container">
      <h1 class="page-title">{{ t('blog.title') }}</h1>
      
      <div v-if="loading" class="loading">
        <p>{{ t('blog.loading') }}</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <div v-else class="blog-list">
        <article v-for="post in posts" :key="post.id" class="blog-card">
          <div class="blog-card-header">
            <h2 class="blog-title">
              <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
            </h2>
            <div class="blog-meta">
              <span class="blog-date">📅 {{ formatDate(post.date) }}</span>
              <span class="blog-category">{{ post.category }}</span>
            </div>
          </div>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          <router-link :to="`/blog/${post.id}`" class="read-more">{{ t('blog.readMore') }}</router-link>
        </article>

        <div v-if="posts.length === 0" class="no-posts">
          <p>{{ t('blog.empty') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { i18n, t as $t } from '../utils/i18n'
export default {
  name: 'Blog',
  data() {
    return {
      posts: [],
      loading: true,
      error: null
    }
  },
  computed: {
    __lang() { return i18n.lang }
  },
  async mounted() {
    await this.fetchPosts()
  },
  methods: {
    t(key) {
      return $t(key)
    },
    async fetchPosts() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/blog.${i18n.lang}.json`)
        if (!response.ok) {
          throw new Error($t('blog.loadError') || '无法加载博客数据')
        }
        const data = await response.json()
        this.posts = data.posts || []
        this.loading = false
      } catch (error) {
        this.error = error.message
        this.loading = false
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const locale = i18n.lang === 'zh' ? 'zh-CN' : 'en-US'
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  },
  watch: {
    async __lang() {
      this.loading = true
      await this.fetchPosts()
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

.loading,
.error {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.error {
  color: #e74c3c;
}

.blog-list {
  max-width: 800px;
  margin: 0 auto;
}

.blog-card {
  background: var(--color-surface);
  padding: 2.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.blog-card-header {
  margin-bottom: 1rem;
}

.blog-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.blog-title a {
  color: var(--brand);
  transition: color 0.3s;
  font-weight: 600;
}

.blog-title a:hover {
  color: var(--accent);
}

.blog-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--color-muted);
}

.blog-category {
  background: rgba(0,0,0,0.04);
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  color: var(--color-text);
  border: 1px solid var(--border);
}

.blog-excerpt {
  color: var(--color-muted);
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.read-more {
  color: var(--accent);
  font-weight: 500;
  transition: color 0.3s;
}

.read-more:hover {
  color: var(--accent-600);
}

.no-posts {
  text-align: center;
  padding: 3rem;
  color: #999;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .blog-card {
    padding: 1.5rem;
  }

  .blog-title {
    font-size: 1.3rem;
  }
}
</style>

