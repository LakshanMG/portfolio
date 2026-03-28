🚀 Lakshan.dev - Personal Portfolio

A modern, high-performance, and secure personal portfolio website built to showcase my software engineering journey, academic milestones, and technical expertise.
Built with a focus on Next.js 15, clean UI/UX, and robust backend security for handling user inquiries.

🔗 Live Demo: https://portfolio-plum-nu-58qz3d5e92.vercel.app/

✨ Why this project?

As an Information Technology undergraduate, I wanted to create a digital home that is more than just a static resume. This project was a deep dive into Server-Side Rendering (SSR), complex frontend animations, and building a secure communication bridge between the client and the server without exposing sensitive credentials.

🚀 Key Features

Modern UI/UX: Glassmorphism design elements, glowing background effects, and a responsive mobile-first approach.

Interactive Animations: Page loads, scroll effects, and hover transitions powered by Framer Motion.

Smart Contact Form:

Backend API route built with Next.js.

Sends emails directly using Nodemailer.

ZeroBounce API integration to verify real email addresses.

Honeypot protection and Regex validation to block spam bots.

Dynamic Content Modals: A custom-built smart modal to view PDF certificates and high-resolution images without leaving the page.

CI/CD Pipeline: Integrated with GitHub and Vercel for fully automated continuous deployment.

🛠️ Tech Stack

Frontend: Next.js (React), Tailwind CSS, Framer Motion

Backend: Node.js (Next.js API Routes), Nodemailer

Security & Validation: ZeroBounce API, Custom Honeypot

Hosting & Deployment: Vercel

🔒 Security Measures

This portfolio implements industry-standard security practices to protect backend services:

Server-Side Execution: The contact form logic runs entirely on the server, ensuring API keys are never leaked to the client browser.

Environment Variables: All credentials (Gmail App Passwords, API Keys) are encrypted and stored in Vercel's secure vault—never committed to version control.

Spam Prevention: Implements Honeypot techniques and Regex validation to ensure only high-quality inquiries reach my inbox.

Input Sanitization: Protects against malformed data during the contact form submission process.

Designed & Built by Lakshan Wickramasinghe