<template>
  <div class="blog-detail page">
    <div class="container">
      <div v-if="loading" class="loading">
        <p>{{ t('blogDetail.loading') }}</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
        <router-link to="/blog" class="btn btn-primary">{{ t('blogDetail.back') }}</router-link>
      </div>

      <div v-else-if="post" class="blog-detail-content">
        <router-link to="/blog" class="back-link">← {{ t('blogDetail.back') }}</router-link>
        
        <article class="blog-article">
          <header class="article-header">
            <h1 class="article-title">{{ post.title }}</h1>
            <div class="article-meta">
              <span class="article-date">📅 {{ formatDate(post.date) }}</span>
              <span class="article-category">{{ post.category }}</span>
            </div>
          </header>

          <div class="article-content">
            <div v-html="formattedContent"></div>
          </div>

          <footer class="article-footer">
            <div class="article-tags" v-if="post.tags && post.tags.length > 0">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { i18n, t as $t } from '../utils/i18n'

marked.setOptions({
  breaks: true,
  gfm: true
})

export default {
  name: 'BlogDetail',
  data() {
    return {
      post: null,
      loading: true,
      error: null
    }
  },
  computed: {
    __lang() { return i18n.lang },
    formattedContent() {
      if (!this.post) return ''
      return marked.parse(this.post.content, { async: false })
    }
  },
  async mounted() {
    await this.fetchPost()
  },
  watch: {
    '$route': 'fetchPost',
    async __lang() {
      this.loading = true
      await this.fetchPost()
    }
  },
  methods: {
    t(key) {
      return $t(key)
    },
    async fetchPost() {
      const postId = this.$route.params.id
      try {
        const response = await fetch(`/data/blog.${i18n.lang}.json`)
        if (!response.ok) {
          throw new Error($t('blogDetail.loadError') || '无法加载博客数据')
        }
        const data = await response.json()
        const post = data.posts.find(p => p.id === parseInt(postId))
        if (!post) {
          throw new Error($t('blogDetail.notFound') || '文章不存在')
        }
        this.post = post
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
  }
}
</script>

<style scoped>
.blog-detail-content {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: var(--accent);
  margin-bottom: 2rem;
  font-weight: 500;
  transition: color 0.3s;
}

.back-link:hover {
  color: var(--accent-600);
}

.blog-article {
  background: var(--color-surface);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.article-header {
  border-bottom: 2px solid var(--border);
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.article-title {
  font-size: 2.5rem;
  color: var(--brand);
  margin-bottom: 1rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.article-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--color-muted);
}

.article-category {
  background: var(--accent);
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
}

.article-content {
  color: var(--color-text);
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.article-content :deep(p) {
  margin-bottom: 1.5rem;
}

.article-content :deep(h2) {
  color: var(--brand);
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.article-content :deep(h3) {
  color: var(--accent);
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-left: 2rem;
  margin-bottom: 1.5rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
}

.article-content :deep(code) {
  background: rgba(0,0,0,0.04);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  border: 1px solid var(--border);
}

.article-footer {
  border-top: 2px solid var(--border);
  padding-top: 1.5rem;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(0,0,0,0.04);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--color-text);
  border: 1px solid var(--border);
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

@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }

  .blog-article {
    padding: 1.5rem;
  }

  .article-content {
    font-size: 1rem;
  }
}
</style>

