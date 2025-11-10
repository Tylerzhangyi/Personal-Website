<template>
  <div class="projects page">
    <div class="container">
      <h1 class="page-title">项目作品集</h1>
      
      <div v-if="loading" class="loading">
        <p>加载中...</p>
      </div>

      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
      </div>

      <div v-else class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <img :src="project.image || '/placeholder.jpg'" :alt="project.name" @error="handleImageError" />
          </div>
          <div class="project-content">
            <h2>{{ project.name }}</h2>
            <p class="project-intro">{{ project.intro }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
            <div class="project-actions">
              <router-link :to="`/projects/${project.id}`" class="btn btn-primary">查看详情</router-link>
              <a v-if="project.github" :href="project.github" target="_blank" class="btn btn-secondary">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div class="github-section">
        <h2>GitHub 仓库</h2>
        <div class="github-repos">
          <div v-for="repo in githubRepos" :key="repo.name" class="repo-card">
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.description }}</p>
            <a :href="repo.url" target="_blank" class="repo-link">访问仓库 →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      githubRepos: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.fetchProjects()
    await this.fetchGithubRepos()
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await fetch('/data/projects.json')
        if (!response.ok) {
          throw new Error('无法加载项目数据')
        }
        const data = await response.json()
        this.projects = data.projects || []
        this.loading = false
      } catch (error) {
        this.error = error.message
        this.loading = false
      }
    },
    async fetchGithubRepos() {
      // 可以从 projects.json 中提取，或者单独维护
      this.githubRepos = [
        {
          name: 'personal-portfolio',
          description: '个人作品集网站',
          url: 'https://github.com/Tylerzhangyi'
        }
      ]
    },
    handleImageError(e) {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E暂无图片%3C/text%3E%3C/svg%3E'
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--color-surface);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #e0e0e0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-content h2 {
  color: var(--brand);
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.project-intro {
  color: var(--color-muted);
  margin-bottom: 1rem;
  line-height: 1.7;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(0,0,0,0.04);
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: var(--color-text);
  border: 1px solid var(--border);
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-600);
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(38,58,82,0.06);
  color: var(--brand);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: rgba(38,58,82,0.12);
  transform: translateY(-2px);
}

.github-section {
  background: var(--color-surface);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.github-section h2 {
  color: var(--brand);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.github-repos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.repo-card {
  padding: 1.5rem;
  background: var(--color-surface);
  border-radius: 8px;
  border-left: 4px solid var(--accent);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  transition: all 0.2s ease;
}

.repo-card:hover {
  box-shadow: var(--shadow-sm);
  transform: translateX(4px);
}

.repo-card h3 {
  color: var(--brand);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.repo-card p {
  color: var(--color-muted);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.repo-link {
  color: var(--accent);
  font-weight: 500;
  transition: color 0.3s;
}

.repo-link:hover {
  color: var(--accent-600);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2rem;
  }
}
</style>

