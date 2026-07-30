# Personal Professional Portfolio Website

**Task 1 — Full Stack Web Development Internship (Future Interns)**

A responsive personal portfolio site to showcase skills, projects, and a professional profile.

## Features
- Interactive resume & portfolio sections (About, Skills, Projects)
- Contact form (front-end ready — connect to a backend or a service like Formspree/EmailJS for real email notifications)
- SEO-friendly structure (meta description, keywords, semantic HTML, Open Graph tags)
- Fully responsive design with mobile navigation
- Typewriter animation, scroll-reveal effects

## Tech Stack
- HTML5, CSS3, JavaScript (vanilla — easily portable to React)
- No build step required — just open `index.html`

## How to Run
1. Unzip the folder.
2. Open `index.html` directly in your browser, **or**
3. Serve locally: `npx serve .` (or use the VS Code "Live Server" extension).

## Customize
- Replace "Alex Morgan" and placeholder text with your own details in `index.html`.
- Add your resume PDF and update the `resumeBtn` link in `js/script.js`.
- Update GitHub/LinkedIn links in the hero socials section.
- To make the contact form actually send emails, connect it to:
  - A Node.js/Express backend with Nodemailer, or
  - A no-code service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/).

## Folder Structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## GitHub Submission
Per internship guidelines, host this in a public repo named:
```
FUTURE_FS_01
```
