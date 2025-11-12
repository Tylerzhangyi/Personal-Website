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
              <span class="article-date">
                <CalendarIcon class="article-date-icon" />
                {{ formatDate(post.date) }}
              </span>
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
import { CalendarIcon } from '@heroicons/vue/24/outline'
import { marked } from 'marked'
import { i18n, t as $t } from '../utils/i18n'

// 配置 marked 选项
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
})

export default {
  name: 'BlogDetail',
  components: {
    CalendarIcon
  },
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
      if (!this.post || !this.post.content) return ''
      try {
        // 将 JSON 中的 \n 字符串转换为真正的换行符
        // JSON 解析后，\\n 会变成字符串 \n（两个字符），需要转换为真正的换行符
        let content = this.post.content.replace(/\\n/g, '\n')
        // marked v4+ 使用同步 parse 方法
        let html = marked.parse(content)
        // 处理图片路径，添加 BASE_URL
        const baseUrl = import.meta.env.BASE_URL
        html = html.replace(/<img([^>]*?)src="(\/[^"]+)"([^>]*?)>/g, (match, before, src, after) => {
          // 如果路径以 / 开头且不是外部链接，添加 BASE_URL
          if (src.startsWith('/') && !src.startsWith('//')) {
            const cleanSrc = src.replace(/^\//, '')
            return `<img${before}src="${baseUrl}${cleanSrc}"${after}>`
          }
          return match
        })
        return html
      } catch (error) {
        console.error('Markdown parsing error:', error)
        return this.post.content.replace(/\\n/g, '\n')
      }
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
        const response = await fetch(`${import.meta.env.BASE_URL}data/blog.${i18n.lang}.json`)
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
  align-items: center;
}

.article-date {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.article-date-icon {
  width: 1rem;
  height: 1rem;
  color: var(--color-muted);
  flex-shrink: 0;
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

.article-content :deep(h1) {
  color: var(--brand);
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.3;
  border-bottom: 2px solid var(--border);
  padding-bottom: 0.5rem;
}

.article-content :deep(h2) {
  color: var(--brand);
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.4;
}

.article-content :deep(h3) {
  color: var(--accent);
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
}

.article-content :deep(h4) {
  color: var(--accent);
  margin-top: 1.2rem;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.article-content :deep(strong) {
  font-weight: 600;
  color: var(--color-text);
}

.article-content :deep(em) {
  font-style: italic;
}

.article-content :deep(a) {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

.article-content :deep(a:hover) {
  border-bottom-color: var(--accent);
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-left: 2rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
}

.article-content :deep(li) {
  margin-bottom: 0.8rem;
  line-height: 1.7;
}

.article-content :deep(ul li) {
  list-style-type: disc;
}

.article-content :deep(ol li) {
  list-style-type: decimal;
}

.article-content :deep(blockquote) {
  border-left: 4px solid var(--accent);
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  color: var(--color-muted);
  font-style: italic;
  background: rgba(0,0,0,0.02);
  padding: 1rem 1.5rem;
  border-radius: 4px;
}

.article-content :deep(code) {
  background: rgba(0,0,0,0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
  font-size: 0.9em;
  border: 1px solid var(--border);
  color: var(--color-text);
}

.article-content :deep(pre) {
  background: rgba(0,0,0,0.04);
  padding: 1.2rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1.5rem 0;
  border: 1px solid var(--border);
}

.article-content :deep(pre code) {
  background: transparent;
  padding: 0;
  border: none;
  font-size: 0.9em;
  line-height: 1.6;
}

.article-content :deep(hr) {
  border: none;
  border-top: 2px solid var(--border);
  margin: 2rem 0;
}

.article-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.article-content :deep(th),
.article-content :deep(td) {
  padding: 0.75rem;
  border: 1px solid var(--border);
  text-align: left;
}

.article-content :deep(th) {
  background: rgba(0,0,0,0.04);
  font-weight: 600;
  color: var(--brand);
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

