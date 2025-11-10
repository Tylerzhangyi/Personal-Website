# 个人作品集网站

这是一个使用 Vue.js 3 和 Vite 构建的现代化个人作品集网站。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 项目作品集展示（列表页和详情页）
- ✅ 博客系统（文章列表和详情页）
- ✅ 技能和简历展示
- ✅ 个人介绍页面
- ✅ 有用链接页面
- ✅ 数据驱动的动态内容（从 JSON 文件加载）

## 技术栈

- **Vue.js 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - Vue.js 官方路由管理器
- **JavaScript (ES6+)** - 现代 JavaScript 语法
- **CSS3** - 样式和响应式设计

## 项目结构

```
personal-portfolio/
├── public/
│   ├── data/
│   │   ├── projects.json    # 项目数据
│   │   └── blog.json        # 博客数据
│   └── ...
├── src/
│   ├── components/
│   │   └── Navbar.vue       # 导航栏组件
│   ├── views/
│   │   ├── Home.vue         # 首页
│   │   ├── About.vue        # 关于我
│   │   ├── Skills.vue       # 技能页面
│   │   ├── Projects.vue     # 项目列表
│   │   ├── ProjectDetail.vue # 项目详情
│   │   ├── Blog.vue         # 博客列表
│   │   ├── BlogDetail.vue   # 博客详情
│   │   └── Links.vue        # 链接页面
│   ├── router/
│   │   └── index.js         # 路由配置
│   ├── App.vue              # 根组件
│   ├── main.js              # 入口文件
│   └── style.css            # 全局样式
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 页面说明

### 首页 (Home)
- 欢迎信息和头像
- 个人简介
- 快速链接到主要页面

### 关于我 (About)
- 详细的个人介绍
- 学术兴趣
- 个人爱好
- 目标和抱负
- 照片展示

### 技能 (Skills)
- 技能水平展示（可交互的技能条）
- 教育背景时间线
- 相关课程标签
- 奖项和成就

### 项目 (Projects)
- 项目列表（卡片式展示）
- 项目详情页面
- GitHub 仓库列表
- 技术栈标签
- 项目链接（GitHub、在线演示）

### 博客 (Blog)
- 博客文章列表
- 文章详情页面
- 文章分类和标签
- 发布日期显示

### 链接 (Links)
- 有用的学习资源链接
- 朋友网站链接
- 开发者社区链接

## 数据管理

项目使用本地 JSON 文件存储动态数据：

- `public/data/projects.json` - 项目数据
- `public/data/blog.json` - 博客文章数据

你可以直接编辑这些 JSON 文件来更新内容。

## 自定义

### 修改个人信息

1. 编辑 `src/views/Home.vue` 修改首页内容
2. 编辑 `src/views/About.vue` 修改个人介绍
3. 编辑 `src/views/Skills.vue` 修改技能和教育背景

### 添加项目

编辑 `public/data/projects.json`，添加新的项目对象：

```json
{
  "id": 4,
  "name": "项目名称",
  "intro": "项目简介",
  "description": "详细描述",
  "technologies": ["Vue.js", "JavaScript"],
  "github": "https://github.com/username/repo",
  "demo": "https://demo-url.com"
}
```

### 添加博客文章

编辑 `public/data/blog.json`，添加新的文章对象：

```json
{
  "id": 4,
  "title": "文章标题",
  "excerpt": "文章摘要",
  "content": "文章内容...",
  "date": "2024-03-01",
  "category": "分类",
  "tags": ["标签1", "标签2"]
}
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 开发说明

本项目使用以下开发规范：

- 组件化开发：每个页面都是独立的 Vue 组件
- 响应式设计：使用 CSS Grid 和 Flexbox 实现响应式布局
- 数据驱动：动态内容从 JSON 文件异步加载
- 路由管理：使用 Vue Router 进行页面导航

## 许可证

MIT License

## 作者

你的名字

---

**注意**：这是一个学习项目，用于展示 Vue.js 和 Vite 的使用。你可以基于此项目进行扩展和定制。

