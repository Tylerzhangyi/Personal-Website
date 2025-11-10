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