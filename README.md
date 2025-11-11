# 个人作品集网站

这是一个使用 Vue.js 3 和 Vite 构建的现代化个人作品集网站。

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 完整的中英文国际化支持
- ✅ 项目作品集展示（列表页和详情页）
- ✅ 博客系统（文章列表和详情页，支持 Markdown）
- ✅ 技能和简历展示
- ✅ 个人介绍页面
- ✅ 有用链接页面
- ✅ 联系我页面
- ✅ 数据驱动的动态内容（从 JSON 文件加载）
- ✅ 现代化的 UI 设计（使用 Heroicons 图标库）

## 技术栈

- **Vue.js 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - Vue.js 官方路由管理器
- **JavaScript (ES6+)** - 现代 JavaScript 语法
- **CSS3** - 样式和响应式设计

## 使用的组件和库

### 核心依赖

- **vue** (^3.4.21) - Vue.js 核心框架
- **vue-router** (^4.3.0) - Vue.js 官方路由管理器
- **@heroicons/vue** (^2.2.0) - Heroicons 图标库（提供 SVG 图标组件）
- **marked** (^17.0.0) - Markdown 解析器（用于博客文章渲染）

### Vue 组件

#### 布局组件
- **Navbar.vue** - 顶部导航栏组件，包含语言切换功能

#### 页面组件
- **Home.vue** - 首页组件
- **About.vue** - 关于我页面组件
- **Skills.vue** - 技能和简历页面组件
- **Projects.vue** - 项目列表页面组件
- **ProjectDetail.vue** - 项目详情页面组件
- **Blog.vue** - 博客列表页面组件
- **BlogDetail.vue** - 博客详情页面组件
- **Links.vue** - 有用链接页面组件
- **Contact.vue** - 联系我页面组件

### 使用的图标（来自 @heroicons/vue）

#### Outline 风格图标
- **SparklesIcon** - 导航栏 Logo 图标
- **CodeBracketIcon** - GitHub 链接图标（首页、链接页面）
- **DocumentTextIcon** - 博客图标（首页）
- **RocketLaunchIcon** - 项目图标（首页、项目详情、链接页面）
- **WrenchScrewdriverIcon** - 技能图标（首页）
- **TrophyIcon** - 奖项图标（技能页面）
- **CubeIcon** - GitHub 仓库图标（项目详情）
- **BookOpenIcon** - 文档图标（链接页面）
- **QuestionMarkCircleIcon** - 问答图标（链接页面）
- **PaintBrushIcon** - 设计图标（链接页面）
- **LinkIcon** - 链接图标（链接页面）

#### Solid 风格图标
- **CheckIcon** - 复选框图标（关于页面）

### 工具模块

- **i18n.js** - 国际化工具模块，提供中英文切换功能
  - `i18n` - 响应式语言状态对象
  - `t()` - 翻译函数
  - `getDict()` - 获取翻译字典函数
  - `setLanguage()` - 设置语言函数

## 项目结构

```
personal-portfolio/
├── public/
│   ├── data/
│   │   ├── projects.json      # 项目数据（中文）
│   │   ├── projects.en.json   # 项目数据（英文）
│   │   ├── projects.zh.json   # 项目数据（中文）
│   │   ├── blog.json          # 博客数据（中文）
│   │   ├── blog.en.json       # 博客数据（英文）
│   │   └── blog.zh.json       # 博客数据（中文）
│   └── ...
├── src/
│   ├── components/
│   │   └── Navbar.vue         # 导航栏组件
│   ├── views/
│   │   ├── Home.vue           # 首页
│   │   ├── About.vue          # 关于我
│   │   ├── Skills.vue         # 技能页面
│   │   ├── Projects.vue       # 项目列表
│   │   ├── ProjectDetail.vue  # 项目详情
│   │   ├── Blog.vue           # 博客列表
│   │   ├── BlogDetail.vue     # 博客详情
│   │   ├── Links.vue          # 链接页面
│   │   └── Contact.vue        # 联系我页面
│   ├── router/
│   │   └── index.js           # 路由配置
│   ├── utils/
│   │   └── i18n.js            # 国际化工具模块
│   ├── App.vue                # 根组件
│   ├── main.js                # 入口文件
│   └── style.css              # 全局样式
├── index.html
├── package.json
├── vite.config.js
└── README.md
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

### 联系我 (Contact)
- 联系方式展示（邮箱、GitHub、手机号等）
- 合作意向说明
- 快速操作按钮（发邮件、查看项目）

## 数据管理

项目使用本地 JSON 文件存储动态数据，支持中英文双语：

- `public/data/projects.zh.json` - 项目数据（中文）
- `public/data/projects.en.json` - 项目数据（英文）
- `public/data/blog.zh.json` - 博客文章数据（中文）
- `public/data/blog.en.json` - 博客文章数据（英文）

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
- 国际化：使用自定义 i18n 模块实现中英文切换
- 图标系统：使用 Heroicons 提供统一的图标风格
- Markdown 支持：博客文章支持 Markdown 格式渲染

## 许可证

MIT License


