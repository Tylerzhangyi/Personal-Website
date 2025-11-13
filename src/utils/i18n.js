import { reactive } from 'vue'

const stored = typeof window !== 'undefined' ? localStorage.getItem('site-language') : null

export const i18n = reactive({
  lang: stored || 'zh'
})

const dict = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      skills: '技能',
      projects: '项目',
      blog: '博客',
      links: '链接',
      contact: '联系我',
      siteTitle: "Tyler Zhang's Portfolio"
    },
    footer: {
      navigation: '便捷导航',
      privacyPolicy: '隐私政策',
      termsOfUse: '使用条款'
    },
    home: {
      eyebrow: '创新者 · 学生',
      greeting: '你好，我是',
      welcome: '欢迎来到我的世界',
      role: '一名开发者。',
      subtitle: '一位希望通过计算机助益世界的创新者。',
      avatarAlt: '头像',
      ctaProjects: '查看项目',
      ctaContact: '联系我',
      features: {
        projects: '项目作品',
        projectsDesc: '精选项目集合，涵盖前端开发与工程化实践。',
        blog: '技术博客',
        blogDesc: '记录学习与实战笔记，分享使用心得与最佳实践。',
        skills: '技能与简历',
        skillsDesc: '技能图谱与教育背景，持续精进与更新。',
        view: '查看项目 →',
        read: '阅读文章 →',
        more: '了解更多 →'
      },
      footer: '保留所有权利。'
    },
    about: {
      title: '关于我',
      intro: '个人简介',
      introText: '我是一名热衷于新技术的学生，致力于改善人们的生活质量。我能够通过将计算机技术与以人为本的设计相结合，识别并解决日常挑战。',
      interests: '学术兴趣',
      interestsList: [
        '人机交互',
        '机器学习',
        'Web前端开发'
      ],
      hobbies: '个人爱好',
      hobbiesText: '素描,油画,电子游戏,棒球',
      goals: '目标与抱负',
      goalsText: '我的目标是成为一名应用开发者，能够独立完成从设计到部署的整个项目流程。我希望能够参与到有意义的项目中，通过自己的计算机知识帮助到更多的人。',
      education: '学习经历',
      courses: '精选课程',
      awards: '奖项与荣誉'
    },
    skills: {
      title: '技能与简历',
      skillset: '技能集合',
      education: '教育背景',
      courses: '相关课程',
      awards: '奖项与成就',
      skillsList: [
        { name: 'Vue.js', level: 85 },
        { name: 'JS', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'Git', level: 70 }
      ],
      educationList: [
        {
          degree: '计算机科学',
          institution: '杭州云谷学校',
          period: '2023 - 2026',
          description: '主修计算机科学，学习了数据结构、算法、数据库等核心课程。'
        },
        {
          degree: '计算机科学',
          institution: 'Harvey Mudd College',
          period: '2024 Summer Session',
          description: '学习了 CSCI035 Computer Science for Insight',
          link: 'https://catalog.hmc.edu/preview_course_nopop.php?catoid=22&coid=7426'
        },
        {
          degree: '机器学习',
          institution: 'Coursera',
          period: '2024-2025',
          description: '学习了Andrew Wu的 Supervised Machine Learning: Regression and Classification、 Advanced Learning Algorithms 和 Unsupervised Learning, Recommenders, Reinforcement Learning',
          link: 'https://www.coursera.org/account/accomplishments/specialization/JO9U8FZU49N3'
        },
        {
          degree: '计算机科学',
          institution: 'Carnegie Mellon University',
          period: '2025 Summer Session',
          description: '学习了 15-112 E Fundamental Of Programming & Computer Science',
          link: 'https://www.cs.cmu.edu/~112/'
        }
      ],
      coursesList: [
        'CL/AP Computer Science A',
        'CL Applied Python Programming, Information and Communication Technology',
        'CL/AP Physics C:Electricity and Magnetism',
        'CL/AP Physics C: Mechanics',
        'Linear Algebra',
        'CL/AP Calculus BC'
      ],
      awardsList: [
        "2024, 2025 Dean's List, Overall Academic Performance Top 3%",
        'AMC 12 5% percentile',
        'Honors College Schloar, Top3%',
        'Top 25% in Cayley/Fermat Math Contests',
        'IHOSA qualified for the National Round'
      ]
    },
    projects: {
      title: '项目作品集',
      loading: '加载中...',
      github: 'GitHub 仓库',
      details: '查看详情',
      demo: '了解',
      visit: '访问仓库 →',
      portfolioDesc: '个人作品集网站',
      loadError: '无法加载项目数据'
    },
    projectDetail: {
      loading: '加载中...',
      back: '返回项目列表',
      intro: '项目简介',
      tech: '技术栈',
      contribution: '我的贡献',
      links: '项目链接',
      screenshots: '项目截图',
      github: 'GitHub 仓库',
      demo: '相关链接',
      screenshot: '截图',
      notFound: '项目不存在',
      loadError: '无法加载项目数据'
    },
    blog: {
      title: '博客文章',
      loading: '加载中...',
      readMore: '阅读全文 →',
      empty: '暂无博客文章',
      back: '返回博客列表',
      notFound: '文章不存在',
      loadError: '无法加载博客数据'
    },
    blogDetail: {
      loading: '加载中...',
      back: '返回博客列表',
      notFound: '文章不存在',
      loadError: '无法加载博客数据'
    },
    links: {
      title: '有用链接',
      visit: '访问链接 →',
      linksList: [
        {
          title: 'Yungu\'s GitHub',
          description: 'Yungu 的 GitHub 仓库, 包含 Yungu计算机的课程作业和项目'
        },
        {
          title: '木酱的个人网站',
          description: '木酱老师的个人网站,啥都有'
        },
        {
          title: 'GitHub',
          description: '全球最大的代码托管平台'
        },
        {
          title: 'Stack Overflow',
          description: '程序员问答社区，解决编程问题的好地方'
        },
        {
          title: 'Vite 官方文档',
          description: '下一代前端构建工具，快速且高效'
        },
        {
          title: 'CSS-Tricks',
          description: '前端开发技巧和教程的优质网站'
        },
        {
          title: '王越舟的个人网站',
          description: '我的朋友王越舟的个人主页，展示了他在技术与创意方面的作品'
        },
        {
          title: '马思嘉的个人网站',
          description: '我的朋友马思嘉的个人主页，展示了他在技术与创意方面的作品'
        },
        {
          title: '邓睿涵的个人网站',
          description: '我的朋友邓睿涵的个人主页，展示了他在技术与创意方面的作品'
        }
      ]
    },
    contact: {
      title: '联系我',
      contactInfo: '联系方式',
      email: '邮箱',
      github: 'GitHub',
      location: '所在地',
      phone: '手机号',
      gameAccount: 'QQ',
      sendMail: '发邮件给我',
      viewProjects: '查看项目',
      cooperation: '合作意向',
      cooperationText: '欢迎就前端开发、Vue 与现代工程化项目进行交流与合作。如果有有趣的想法，也可以一起讨论实践。'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      blog: 'Blog',
      links: 'Links',
      contact: 'Contact',
      siteTitle: "Tyler Zhang's Portfolio"
    },
    footer: {
      navigation: 'Quick Navigation',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use'
    },
    home: {
      eyebrow: 'Innovator · Student',
      greeting: 'Hello, I am',
      welcome: 'Welcome to my world',
      role: 'a Developer.',
      subtitle: 'An innovator who hopes to help the world through computer science.',
      avatarAlt: 'Avatar',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact',
      features: {
        projects: 'Portfolio',
        projectsDesc: 'Selected project collection covering front-end development and engineering practices.',
        blog: 'Tech Blog',
        blogDesc: 'Learning and practical notes, sharing experiences and best practices.',
        skills: 'Skills & Resume',
        skillsDesc: 'Skill map and educational background, continuously improving and updating.',
        view: 'View projects →',
        read: 'Read articles →',
        more: 'Learn more →'
      },
      footer: 'All rights reserved.'
    },
    about: {
      title: 'About Me',
      intro: 'Introduction',
      introText: 'I am a student passionate about new technology, dedicated to improving people\'s quality of life. I am able to identify and address everyday challenges by integrating computer technology with human-centered design.',
      interests: 'Academic Interests',
      interestsList: [
        'Human-Computer Interaction',
        'Machine Learning',
        'Web Front-end Development',
      ],
      hobbies: 'Hobbies',
      hobbiesText: 'Sketching, Oil painting, Video games, Baseball,',
      goals: 'Goals & Aspirations',
      goalsText: 'My goal is to become an application developer, capable of independently completing the entire project process from design to deployment. I hope to be involved in meaningful projects and help more people with my computer knowledge.',
      education: 'Education & Experience',
      courses: 'Featured Courses',
      awards: 'Honors & Awards'
    },
    skills: {
      title: 'Skills & Resume',
      skillset: 'Skill Set',
      education: 'Education',
      courses: 'Relevant Courses',
      awards: 'Awards & Achievements',
      skillsList: [
        { name: 'Vue.js', level: 85 },
        { name: 'JS', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'Git', level: 70 }
      ],
      educationList: [
        {
          degree: 'Computer Science',
          institution: 'Hangzhou Yungu School',
          period: '2023 - 2026',
          description: 'Majoring in Computer Science, studied core courses including data structures, algorithms, databases, etc.'
        },
        {
          degree: 'Computer Science',
          institution: 'Harvey Mudd College',
          period: '2024 Summer Session',
          description: 'Studied CSCI035 Computer Science for Insight',
          link: 'https://catalog.hmc.edu/preview_course_nopop.php?catoid=22&coid=7426'
        },
        {
          degree: 'Machine Learning',
          institution: 'Coursera',
          period: '2024-2025',
          description: 'Studied Andrew Ng\'s Supervised Machine Learning: Regression and Classification, Advanced Learning Algorithms, and Unsupervised Learning, Recommenders, Reinforcement Learning',
          link: 'https://www.coursera.org/account/accomplishments/specialization/JO9U8FZU49N3'
        },
        {
          degree: 'Computer Science',
          institution: 'Carnegie Mellon University',
          period: '2025 Summer Session',
          description: 'Studied 15-112 E Fundamental Of Programming & Computer Science',
          link: 'https://www.cs.cmu.edu/~112/'
        }
      ],
      coursesList: [
        'CL/AP Computer Science A',
        'CL Applied Python Programming, Information and Communication Technology',
        'CL/AP Physics C:Electricity and Magnetism',
        'CL/AP Physics C: Mechanics',
        'Linear Algebra',
        'CL/AP Calculus BC'
      ],
      awardsList: [
        "2024, 2025 Dean's List, Overall Academic Performance Top 3%",
        'AMC 12 5% percentile',
        'Honors College Scholar, Top 3%',
        'Top 25% in Cayley/Fermat Math Contests',
        'IHOSA qualified for the National Round'
      ]
    },
    projects: {
      title: 'Projects',
      loading: 'Loading...',
      github: 'GitHub Repos',
      details: 'Details',
      demo: 'Try',
      visit: 'Visit repo →',
      portfolioDesc: 'Personal Portfolio Website',
      loadError: 'Failed to load project data'
    },
    projectDetail: {
      loading: 'Loading...',
      back: 'Back to Projects',
      intro: 'Overview',
      tech: 'Tech Stack',
      contribution: 'My Contribution',
      links: 'Links',
      screenshots: 'Screenshots',
      github: 'GitHub',
      demo: 'Related Links',
      screenshot: 'Screenshot',
      notFound: 'Project not found',
      loadError: 'Failed to load project data'
    },
    blog: {
      title: 'Blog',
      loading: 'Loading...',
      readMore: 'Read more →',
      empty: 'No posts yet',
      back: 'Back to Blog',
      notFound: 'Post not found',
      loadError: 'Failed to load blog data'
    },
    blogDetail: {
      loading: 'Loading...',
      back: 'Back to Blog',
      notFound: 'Post not found',
      loadError: 'Failed to load blog data'
    },
    links: {
      title: 'Useful Links',
      visit: 'Visit →',
      linksList: [
        {
          title: 'Yungu\'s GitHub',
          description: 'Yungu\'s GitHub repository, containing Yungu Computer\'s course assignments and projects'
        },
        {
          title: "Eric Dai's Personal Website",
          description: "Teacher Mu Jiang's personal website. It has everything"
        },
        {
          title: 'GitHub',
          description: 'The world\'s largest code hosting platform'
        },
        {
          title: 'Stack Overflow',
          description: 'Programmer Q&A community, a great place to solve programming problems'
        },
        {
          title: 'Vite Official Documentation',
          description: 'Next-generation front-end build tool, fast and efficient'
        },
        {
          title: 'CSS-Tricks',
          description: 'Fantastic tips to help you become a professional in CSS'
        },
        {
          title: "Robin's Personal Website",
          description: "My friend Robin's personal homepage showcasing his work across technology and creativity"
        },
        {
          title: "Matthew's Personal Website",
          description: "My friend Matthew's personal homepage showcasing his work across technology and creativity"
        },
        {
          title: "Raymond's Personal Website",
          description: "My friend Raymond's personal homepage showcasing his work across technology and creativity"
        }
      ]
    },
    contact: {
      title: 'Contact',
      contactInfo: 'Contact Info',
      email: 'Email',
      github: 'GitHub',
      location: 'Location',
      phone: 'Phone',
      gameAccount: 'QQ',
      sendMail: 'Email me',
      viewProjects: 'View Projects',
      cooperation: 'Cooperation',
      cooperationText: 'Welcome to exchange and cooperate on front-end development, Vue and modern engineering projects. If you have interesting ideas, we can also discuss and practice together.'
    }
  }
}

export function setLanguage(lang) {
  i18n.lang = lang
  if (typeof window !== 'undefined') {
    localStorage.setItem('site-language', lang)
    document.documentElement.setAttribute('lang', lang)
  }
}

export function t(path) {
  const parts = path.split('.')
  let obj = dict[i18n.lang]
  for (const p of parts) {
    if (!obj) break
    obj = obj[p]
  }
  return obj || path
}

export function getDict(path) {
  const parts = path.split('.')
  let obj = dict[i18n.lang]
  for (const p of parts) {
    if (!obj) break
    obj = obj[p]
  }
  return obj
}


