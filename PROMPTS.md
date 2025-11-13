1.根据这个要求，帮我写一个粗略的个人网站
1. Project Goal
Welcome to your Midterm PA! The goal of this assessment is for you to comprehensively apply your knowledge of Vue.js (Frontend) and Vite (Build Tool) to build a fully functional, responsive, professional, and unique personal brand website from scratch.

This is not just a technical test; it's an opportunity to build an "online portfolio" for yourself. This website will become an important platform for you when applying to college, finding internships, or showcasing your personal projects.

2. Context & Tech Stack
You have mastered key skills in modern web development:

Vue.js: A progressive JavaScript framework for building dynamic, component-based user interfaces.

Vite: An extremely fast modern front-end build tool that provides a lightning-fast development experience.

This project requires you to focus on front-end development, using Vue to build all pages and interactions, and Vite to manage your project. All dynamic data (like projects and blog posts) will be loaded from local JSON files rather than an external API.

3. Core Requirements
Your personal website must include the following features. You are free to design the layout and style, but the functionality must be complete.

Your site must include a persistent navigation bar (Navbar) to allow users to easily navigate to all main pages (e.g., Home, Projects, Blog, About Me).

A. Static Content
These pages are primarily for displaying information and are relatively fixed.

Homepage:

A clear welcome message and a professional avatar or personal logo.

A brief self-introduction (who you are, what you do).

Quick links to the most important parts of your site (like "Projects" or "Blog").

About Me:

A more detailed personal story, your academic interests, and your passions.

Your personal aspirations/goals.

Encouraged to include more photos, a detailed text introduction, and skill tags.

Skills/Resume:

Skill Set: Clearly display the technologies you have mastered (e.g., Python, JavaScript, Vue, HTML, CSS...). (Bonus: Make it an interactive chart or skill bar).

Resume: Your educational background, relevant courses, and awards/achievements.

Links:

Links to your friends' websites, your favorite learning resources, or developers you admire. Each link should ideally include an icon and a short description.

B. Dynamic Content (JSON-Driven)
These features require asynchronously loading data from local JSON files.

Project Portfolio:

Must be data-driven using JSON. You will need to create a local JSON file in your project (e.g., public/data/projects.json) and asynchronously load (fetch) it in your Vue component to render the project list.

List Page: Display an overview of all your projects (in a card format).

Detail Page: Each project should have a detailed description (a project card):

Project name and introduction.

Screenshots or videos of the project.

The technology stack used.

Your specific contribution (if it was a team project).

Link to the GitHub repository (Required).

(Optional) Link to a Live Demo.

This page or a related one should also display a list of your main GitHub repositories.

Blog/Journal:

Must be data-driven from JSON (Read-only). You will need to create another JSON file (e.g., public/data/blog.json) to store your blog posts.

(GET) Visitors can view a list of posts and the full post details. Visitors should be able to see the list and click to read the full article.

C. Non-Functional Requirements
Responsive Design: The website must display and function well on both desktop and mobile devices.

Git & GitHub: All your code must be pushed to GitHub (during development) with a clear commit history.

4. The "AI Assistant" Rule
In this project, you are encouraged to use AI (like Gemini, ChatGPT, Copilot, etc.) as your "pair programmer." AI is a powerful tool, and learning to "harness" it is an essential skill for modern developers.

However, your final grade depends on your "mastery" of the project, not the AI's.

You Should:
Use AI to learn new concepts (e.g., "How to asynchronously load a local JSON file in Vue?" or "How do dynamic routes work in Vue Router?").

Use AI to generate boilerplate code (e.g., "Write me a template for a fetch request in Vue").

Use AI to debug errors (e.g., "My Vue component isn't rendering, here is my code...").

Use AI to optimize and refactor your code (e.g., "How can I make this function more concise?").

You Must:
Understand every line of code you submit. If the AI gives you code you don't understand, you must learn it or not use it.

Modify and Adapt. You are strictly prohibited from copy-pasting AI-generated code verbatim into your project. You must:

Change it to fit your project's variable and function names.

Adapt it to your JSON data structure and component props.

Apply your own CSS styles or component library to it.

Take responsibility for all your design and technical choices. AI can make mistakes or provide outdated/inefficient solutions.

Assessment Method: During the final presentation, I (the teacher) will randomly select any part of your code and, using your PROMPTS.md file as a reference, ask you to explain it line-by-line, why it's written that way, and how you prompted the AI and modified its answer. If you cannot explain it, that part will be considered incomplete.


2.根据图片修改主页风格

3.主界面我想要是整个图片成为背景，类似这个，同时整个网站的配色风格也使用这个

4.删除peoject的详细描述板块

5.帮我修改网站风格,改成高级简约

6.按钮图标不要用emoji,用icon

7.增加路由和contact界面,点击联系我这个按钮会跳转到一个新界面,上面记载着联系方式

8.在主页面增加foot划分,增加信息.同时主界面的头像大一点

9.在主页的左上角的Tyler Zhang's Portfolio左边增加一个icon,同时导航栏增加联系我

10. 帮我实现中英文的切换功能

11. 我在用vue开发个人网站.实现Home,SKills和About中的所有内容也都要中英文切换

12.帮我在readme中列出我所用到的组件

13.使用back.png作为背景,再在这张图片上叠加一个透明度为0.6道黑色遮罩

14.模仿这个网页的主界面结构,以及风格,重新修改我的主页和整体风格.使用tyler.png这张照片作为人物图片.

15.我已经上传了这个文件在了https://github.com/Tylerzhangyi/Personal-Website  . 我应该如何在github部署这个网站?

16.帮我让这个SHM 项目 PCB 迭代报告 blog的文章在json文件中好看一点,不要以挤在一行.同时在Initial Ver. PCB下面一行插入图片SHM1;First Iteration  的Test result上方一行插入SHM2;Second Iteration的he revised design eliminates the previous short-circuit issue and allows each button to generate a clear on/off signal when pressed, enabling reliable detection by the system. (As shown in the figure below)的下面一行 SHM3;improves spatial organization, and enhances overall assembly efficiency. (As shown in the figure below)的SHM4.尾缀的都是png

17.帮我在每个界面的footer中都增加便捷导航栏和© 2025 Zhang Yi. All rights reserved.

18.copyright居中吗,删除链接

19.调整照片和文字之间的比例和距离

20.去除人物图片的黑色背景.让原本透明的部分保持透明

21.根据要求修改主页

22.帮我把所有的图片放到public下面的一个叫photos的文件夹里面,同时修改这个项目里的所有路径让他匹配修改

23.帮我把切换中英文的按钮并入navigation bar里面

24.技能集合的这个能做成一个维度图吗?类似六维图能力图的那种

25.雷达图的背景线改成白色或者其他显眼的颜色.调整雷达图和边上说明的比例.java的a被挡住了一部分

26.关于我版块中,玫红色点以及百分比的标注动画是直接出现就可以雷达图中

27.完成翻的英文版.同时——记一位热衷公益的程序员蜕变成老师的故事是副标题,每一段开头要有缩进

28.https://www.olympics.com/ioc/news/alibaba-celebrates-olympic-day-with-global-activities-promoting-fitness-inclusion-and-innovation 用这个替换第二篇博客

29.演示的按钮风格也要和主题统一.同时不要叫演示,叫了解.我希望如果存在三个按钮能让他们在一行出现

30.把技把技能页面中和学习经历，奖项之类有关的全部放到关于我的页面中能页面中和学习经历，奖项之类有关的全部放到关于我的页面中

31.学习经历和精选课程，荣誉都是单独一行。同时我想用photos文件夹里面的circuit.svg作为favison