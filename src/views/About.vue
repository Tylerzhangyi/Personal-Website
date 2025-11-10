<template>
  <div class="about page">
    <div class="container">
      <h1 class="page-title">关于我</h1>
      <div class="about-content">
        <div class="about-section">
          <h2>个人简介</h2>
          <p>
            I am a student passionate about new technology, dedicated to improving people’s quality of life. 
            I am able to identify and address everyday challenges by integrating computer technology with human-centered design.
          </p>
        </div>

        <div class="about-section">
          <h2>学术兴趣</h2>
          <ul class="interest-list">
            <li>
              <CheckIcon class="check-icon" />
              前端框架与库(Vue.js, JS)
            </li>
            <li>
              <CheckIcon class="check-icon" />
              Java, Python
            </li>
            <li>
              <CheckIcon class="check-icon" />
              用户体验设计
            </li>
            <li>
              <CheckIcon class="check-icon" />
              Web前端开发
            </li>
            <li>
              <CheckIcon class="check-icon" />
              数据库管理(AWS, MySQL)
            </li>
          </ul>
        </div>

        <div class="about-section">
          <h2>个人爱好</h2>
          <p>
            素描,油画,电子游戏
          </p>
        </div>

        <div class="about-section">
          <h2>目标与抱负</h2>
          <p>
            我的目标是成为一名全栈开发者，能够独立完成从设计到部署的整个项目流程。
            我希望能够参与到有意义的项目中，为构建更好的 Web 体验贡献自己的力量。
            同时，我也希望能够继续学习，跟上技术发展的步伐，不断提升自己的技能水平。
          </p>
        </div>

    
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'About',
  components: {
    CheckIcon
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

