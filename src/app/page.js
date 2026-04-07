"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const allSkills = [
  { name: "Python", icon: "python/python-original.svg" },
  { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "HTML5", icon: "html5/html5-original.svg" },
  { name: "CSS3", icon: "css3/css3-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "Flask", icon: "flask/flask-original.svg" },
  { name: "TensorFlow", icon: "tensorflow/tensorflow-original.svg" },
  { name: "Keras", icon: "keras/keras-original.svg" },
  { name: "Pandas", icon: "pandas/pandas-original.svg" },
  { name: "NumPy", icon: "numpy/numpy-original.svg" },
  { name: "Scikit-Learn", icon: "scikitlearn/scikitlearn-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "Azure", icon: "azure/azure-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg" },
  { name: "Jupyter", icon: "jupyter/jupyter-original.svg" },
  { name: "Postman", icon: "postman/postman-original.svg" },
  { name: "NLTK", icon: "python/python-original.svg" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Packet Tracer", icon: "https://cdn.simpleicons.org/cisco/049fd9" },
  { name: "Visual Studio", icon: "visualstudio/visualstudio-plain.svg" },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7" }
];

const projects = [
  {
    name: "E-Learning Platform",
    category: "AI & Education (Final Year Project)",
    desc: "An innovative web platform designed to bridge the gap in algorithmic thinking for novice programmers. It features four core AI models: Problem Classification, Decomposition, Pseudocode Generation, and a Personalized Feedback engine. Unlike standard LLMs, it focuses on guided logical thinking and uses gamification to highly drive user engagement.",
    tech: ["Python", "Flask", "MySQL", "TensorFlow", "JavaScript", "HTML5", "CSS3"],
    github: "YOUR_GITHUB_REPO_LINK_HERE",
    link: null
  },
  {
    name: "English to Sinhala Translator Using Gemini API",
    category: "Web Application & AI",
    desc: "A professional English to Sinhala translation web application powered by the Google Gemini API. It features real-time text-to-speech synthesis and secure API handling using Netlify Serverless Functions.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Netlify"],
    github: "https://github.com/LakshanMG/English_to_Sinhala_Translator_Using_Gemini_API.git",
    link: "https://eng2sin.netlify.app/"
  },
  {
    name: "Text Editor",
    category: "Desktop Application",
    desc: "A feature-rich Windows desktop text editor built with C++/CLI and .NET WinForms. It goes beyond basic file operations by incorporating real-time text processing, auto-capitalization, and dynamic grammar validation to highlight spacing errors.",
    tech: ["C++", "Visual Studio", "GitHub"],
    github: "https://github.com/LakshanMG/ICT-1306---Object-Oriented-Programming---Notepad.git",
    link: null
  },
  {
    name: "Emotion Detection Using Texts",
    category: "Deep Learning & NLP",
    desc: "A robust Natural Language Processing model utilizing Bidirectional LSTMs to detect human emotions from text. The project encompasses extensive dataset preprocessing, baseline model creation, and fine-tuning for optimal accuracy.",
    tech: ["TensorFlow", "Keras", "Pandas", "NumPy", "Jupyter"],
    github: "https://github.com/LakshanMG/Emotion_Detection_Using_Texts.git",
    link: null
  },
  {
    name: "Simple Website to sell vegetables and fruits online",
    category: "Frontend Development",
    desc: "A fully responsive, static e-commerce storefront designed for an agricultural business. Built from scratch using semantic HTML5 and custom CSS3, featuring product catalogs, responsive grid layouts, and a mobile-first design approach.",
    tech: ["HTML5", "CSS3", "GitHub"],
    github: "https://github.com/LakshanMG/ICT-2204---Web-Technologies-Assignment-01.git",
    link: null
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology (BSc IT)",
    institution: "Rajarata University of Sri Lanka",
    duration: "2022 - 2026",
    subtitle: "Faculty of Applied Sciences | Department of Information Technology",
    desc: "Key modules & coursework:",
    bullets: [
      "Principles of Program Design & Programming",
      "Object Oriented Programming",
      "Data Structures",
      "Database Systems",
      "Web Technologies",
      "Software Engineering",
      "Project Management",
      "Computer Networks",
      "Computer Organization & Architecture",
      "Information Systems Security",
      "Introduction to Intelligence System",
      "Introduction to Ethical Hacking",
      "Embedded Systems"
    ],
    logo: "https://www.google.com/s2/favicons?domain=rjt.ac.lk&sz=128"
  },
  {
    id: 2,
    degree: "Primary & Secondary Education",
    institution: "St. Sylvester's College, Kandy",
    duration: "2012 - 2020",
    subtitle: "G.C.E. Advanced Level & Ordinary Level",
    bullets: [
      "G.C.E. A/L (2020): Physics, Combined Mathematics, IT — 3 C's (Z-Score: +1.1425)",
      "G.C.E. O/L: Passed with 6 A's and 3 B's"
    ],
    logo: "/assets/sylvesters.png"
  }
];

const certifications = [
  { id: 1, title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI", type: "virtual", link: "https://www.coursera.org/account/accomplishments/records/M8R168KBZBY4", file: "/assets/certs/deeplearning.pdf", logo: "https://www.google.com/s2/favicons?domain=deeplearning.ai&sz=128" },
  { id: 2, title: "HTML, CSS, Java, & JavaScript​: Full Stack", issuer: "Udemy", type: "virtual", link: "https://www.udemy.com/certificate/UC-59cf069f-b2b5-4e36-b9d5-d4dfd8fe4c93/", file: "/assets/certs/udemy_fullstack.pdf", logo: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128" },
  { id: 3, title: "Master Python Programming", issuer: "Udemy", type: "virtual", link: "https://www.udemy.com/certificate/UC-b56dbda5-3027-4925-8577-88b6b00e9c8f/", file: "/assets/certs/udemy_python.pdf", logo: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128" },
  { id: 4, title: "Practical GitHub Project Management", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/28f0bac00ab2b079994dc72f37df3792fb90962574c1315bf068e1ff9432616b", file: "/assets/certs/linkedin_github.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 5, title: "Agentic AI for Developers", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/1648449fe96ffe2a9a1ae642acca1dc883822aa1687b35006215870a7a00cf2b", file: "/assets/certs/linkedin_ai.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 6, title: "Build AI Agents and Automate Workflows with n8n", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/1e49b124a0086398166543f553b3a28255f0d377b5bf1a52352629cbba20c09e", file: "/assets/certs/linkedin_n8n.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 7, title: "Vibe Code This: AI-Powered Infographics", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/d4c4aef497c9a3ab8a58ac207f9e48ea0c8031b6a3639a4b8002ff1dada0512f", file: "/assets/certs/linkedin_vibe.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 8, title: "Mastering Postman: API Testing", issuer: "Udemy", type: "virtual", link: "https://www.udemy.com/certificate/UC-63e03957-2cb5-4379-ab13-275840c80f9e", file: "/assets/certs/udemy_postman.pdf", logo: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128" },
  { id: 9, title: "Cybersecurity Awareness: Terminology", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/fda96723b6cdfd4ebd2b20a099f0a9ef7c3d6123f0a9c3faa8602bb37bd89079", file: "/assets/certs/linkedin_cyber_term.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 10, title: "Cybersecurity Foundations", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/e8718bde51ab9f941685ff2edbf190cfcc8771dc146eef5917e9e34aa27d3a2c", file: "/assets/certs/linkedin_cyber_foundations.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 11, title: "The Cybersecurity Threat Landscape", issuer: "LinkedIn", type: "virtual", link: "https://www.linkedin.com/learning/certificates/ad4dbfa5de48315efb75514dea5e9ee541d680219deaafc2ea9ca051e1a8d687", file: "/assets/certs/linkedin_cyber_threat.pdf", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
  { id: 12, title: "Career Essentials in Cybersecurity", issuer: "Microsoft", type: "virtual", link: "https://www.linkedin.com/learning/certificates/cbfe5db06cff20260db436bf13b894b6578272388d51b98cadb4811a515e9ea2", file: "/assets/certs/microsoft_cyber.pdf", logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
  { id: 13, title: "Python for Beginners", issuer: "University of Moratuwa", type: "document", file: "/assets/certs/uom_python.pdf", logo: "https://www.google.com/s2/favicons?domain=mrt.ac.lk&sz=128" },
  { id: 14, title: "Python Essentials 1", issuer: "Cisco", type: "virtual", link: "https://www.credly.com/badges/af5a33bb-05cf-4002-8785-14cb0ba567eb/linked_in_profile", file: "/assets/certs/cisco_python.pdf", logo: "https://cdn.simpleicons.org/cisco/049fd9" },
  { id: 15, title: "Introduction to Data Science", issuer: "Cisco", type: "virtual", link: "https://www.credly.com/badges/35a07c2c-9446-4a65-80ed-e2895ccc05b3/linked_in_profile", file: "/assets/certs/cisco_datascience.pdf", logo: "https://cdn.simpleicons.org/cisco/049fd9" },
  { id: 16, title: "Introduction to Cybersecurity", issuer: "Cisco", type: "virtual", link: "https://www.credly.com/badges/82a099d6-dc1f-4703-a3a6-357526cefae1/linked_in_profile", file: "/assets/certs/cisco_cyber.pdf", logo: "https://cdn.simpleicons.org/cisco/049fd9" },
  { id: 17, title: "Introduction to Packet Tracer", issuer: "Cisco", type: "virtual", link: "https://www.credly.com/badges/a8d6162f-2072-42ed-8e29-cb825be2818b/linked_in_profile", file: "/assets/certs/cisco_packet.pdf", logo: "https://cdn.simpleicons.org/cisco/049fd9" },
  { id: 18, title: "Computer Hardware Basics", issuer: "Cisco", type: "virtual", link: "https://www.credly.com/badges/586cf36e-f501-42dc-809c-a775834568e9/linked_in_profile", file: "/assets/certs/cisco_hardware.pdf", logo: "https://cdn.simpleicons.org/cisco/049fd9" },
  {
    id: 19,
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    type: "virtual",
    link: "https://www.coursera.org/account/accomplishments/records/GFWSFSITKAVZ",
    file: "/assets/certs/google_cyber.pdf",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128"
  }
];

const cards = [
  { role: "Technical Lead", title: "FOSS Community", desc: "Driving open-source initiatives and mentoring within the university.", image: "/assets/leadership/foss.jpeg" },
  { role: "Vice Treasurer", title: "ARICT", desc: "As the Vice Treasurer for the Board of ARICT 2024, managed financial strategies within the organization. Handled event budgets, logistics, and resource allocation to ensure the success of major university tech events.", image: "/assets/leadership/arict.jpeg" },
  { role: "Competitive Player", title: "Field Hockey", desc: "Represented Rajarata University in inter-university field hockey championships. Demonstrated strong teamwork, strategic decision-making, and discipline in highly competitive athletic environments.", image: "/assets/leadership/hockey.jpeg" }
];

export default function PortfolioSPA() {
  const [projIndex, setProjIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);

  const [formStatus, setFormStatus] = useState("Idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const nextProject = () => setProjIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setProjIndex((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleKeyDown = (e) => { if (e.key === 'Escape') setSelectedCert(null); };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    const messageValue = event.target.message.value;
    if (!messageValue.trim()) {
      setErrorMessage("Message cannot be empty.");
      setFormStatus("Error");
      return;
    }

    setFormStatus("Submitting");

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: messageValue.trim(),
      botcheck: event.target.botcheck.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus("Success");
        event.target.reset();
        setTimeout(() => setFormStatus("Idle"), 5000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Something went wrong.");
        setFormStatus("Error");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server.");
      setFormStatus("Error");
    }
  };

  return (
    <div className="min-h-screen relative w-full flex flex-col items-center bg-[#07090E] overflow-hidden">

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[1000] bg-[#07090E] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="flex items-center gap-4"
            >
              <Image
                src="/assets/mascot.png"
                alt="Lakshan.Dev Mascot"
                width={60}
                height={60}
                className="rounded-full border-2 border-cyan-400 p-0.5 object-cover shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              />
              <h1 className="text-3xl font-black tracking-widest text-white">LAKSHAN<span className="text-cyan-400">.DEV</span></h1>
            </motion.div>

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "250px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1 bg-cyan-500 mt-8 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-[10px] text-cyan-400/70 font-mono uppercase tracking-widest"
            >
              Initializing Environment...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3, duration: 0.8 }} className="hidden md:flex flex-col items-center fixed left-8 bottom-0 z-50 gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate-700">
        <a href="https://github.com/LakshanMG" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/lakshanmg/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="#contact" title="Send me a message" className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </motion.div>

      <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.5, duration: 0.8 }} className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 py-6 z-50 bg-[#07090E]/70 backdrop-blur-xl border-b border-white/5">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <Image
            src="/assets/mascot.png"
            alt="Lakshan.Dev Mascot"
            width={40}
            height={40}
            className="rounded-full border-2 border-cyan-400 p-0.5 object-cover"
          />
          <h1 className="text-xl font-bold tracking-widest text-white">LAKSHAN<span className="text-cyan-400">.DEV</span></h1>
        </a>
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-slate-400">
          <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Deployments</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
          <a href="#leadership" className="hover:text-cyan-400 transition-colors">Beyond Code</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </motion.nav>

      <section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5, duration: 1, ease: "easeOut" }} className="flex flex-col items-center">
          <p className="text-cyan-400 tracking-[0.4em] text-sm font-bold uppercase mb-0">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4 leading-[1.1] -mt-3">
            Lakshan Wickramasinghe.
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
            Cybersecurity & ML Enthusiast, <br className="hidden md:block" /> Full Stack Developer.
          </h2>
          <p className="max-w-3xl text-slate-400 leading-relaxed text-sm md:text-base font-medium mb-12">
            Highly motivated Information Technology graduate (BSc IT) with a passion for applying technical skills to solve practical challenges. Skilled in programming, web development, networking, machine learning, and database management, bringing a proactive and innovative approach to problem-solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#contact" className="px-8 py-4 bg-cyan-500 text-[#07090E] font-black rounded-xl text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1">
              Contact Me
            </a>
            <a href="#projects" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-white/10 transition-all hover:-translate-y-1">
              View Work
            </a>
          </div>
        </motion.div>
      </section>

      <section id="education" className="py-24 px-6 md:px-12 w-full max-w-7xl relative z-10 scroll-mt-20 border-t border-white/5">
        <div className="mb-12 text-center md:text-left ml-0 md:ml-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Academic Background</h2>
          <p className="text-slate-400 text-sm">My educational journey and academic qualifications.</p>
        </div>

        <div className="flex flex-col gap-6 ml-0 md:ml-12 max-w-[calc(100%-3rem)]">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white/[0.02] border border-white/[0.05] hover:border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start">

              <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden p-3 mt-1">
                <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md rounded-md" suppressHydrationWarning />
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <span className="text-[12px] font-bold text-cyan-400 tracking-widest uppercase">{edu.institution}</span>
                  <span className="hidden sm:block text-slate-600">•</span>
                  <span className="text-[11px] font-semibold text-slate-500 tracking-widest uppercase">{edu.duration}</span>
                </div>

                {edu.subtitle && <p className="text-cyan-300/80 text-xs font-semibold mb-4 tracking-wider uppercase">{edu.subtitle}</p>}
                {edu.desc && <p className="text-sm text-slate-400 mb-3 font-medium">{edu.desc}</p>}

                {edu.bullets && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mt-3">
                    {edu.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[12px] text-slate-300">
                        <svg className="w-4 h-4 text-cyan-500 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>

            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-24 px-6 md:px-12 w-full max-w-7xl relative z-10 scroll-mt-20 border-t border-white/5">
        <div className="mb-16 text-center md:text-left ml-0 md:ml-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Engineering & Deployments</h2>
          <p className="text-slate-400 text-sm">Interactive overview of my core technical stack and major projects.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full ml-0 md:ml-12 max-w-[calc(100%-3rem)]">
          <div className="w-full md:w-[30%] lg:w-[25%] grid grid-cols-2 lg:grid-cols-3 gap-2 shrink-0 content-start bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-5 backdrop-blur-md">
            <h3 className="col-span-2 lg:col-span-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">Tech Stack</h3>
            {allSkills.map(skill => {
              const isActive = projects[projIndex].tech.includes(skill.name);
              const imgSrc = skill.icon.startsWith("http") ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`;

              return (
                <div key={skill.name} className="h-8 flex items-center justify-start w-full">
                  {!isActive && (
                    <motion.div layoutId={`skill-${skill.name}`} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 py-1.5 rounded-lg w-full opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 overflow-hidden">
                      <img src={imgSrc} alt={skill.name} className="w-3.5 h-3.5 shrink-0" suppressHydrationWarning />
                      <span className="text-[8px] font-semibold text-slate-300 uppercase tracking-wider truncate">{skill.name}</span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-[70%] lg:w-[75%] min-h-[500px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 flex flex-col relative shadow-2xl">
            <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-5 min-h-[45px]">
              {projects[projIndex].tech.map(techName => {
                const skill = allSkills.find(s => s.name === techName);
                if (!skill) return null;
                const imgSrc = skill.icon.startsWith("http") ? skill.icon : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}`;

                return (
                  <motion.div key={`active-${techName}`} layoutId={`skill-${techName}`} className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                    <img src={imgSrc} alt={skill.name} className="w-4 h-4 shrink-0" suppressHydrationWarning />
                    <span className="text-[9px] font-bold text-cyan-300 uppercase tracking-widest">{techName}</span>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={projIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col flex-1">
                <p className="text-[10px] font-bold text-cyan-400 tracking-[0.3em] uppercase mb-4">{projects[projIndex].category}</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{projects[projIndex].name}</h2>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mb-10">{projects[projIndex].desc}</p>

                <div className="mt-auto flex gap-4">
                  <a href={projects[projIndex].github} target="_blank" className="px-6 py-3 bg-white text-black font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-colors">View Repo</a>
                  {projects[projIndex].link && (
                    <a href={projects[projIndex].link} target="_blank" className="px-6 py-3 border border-white/20 text-white font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">Live Demo</a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
              <button onClick={prevProject} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button onClick={nextProject} className="w-12 h-12 rounded-full border border-cyan-500/50 bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 px-6 md:px-12 w-full max-w-7xl relative z-10 border-t border-white/5 scroll-mt-20">
        <div className="mb-12 text-center md:text-left ml-0 md:ml-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Certifications & Credentials</h2>
          <p className="text-slate-400 text-sm">Official verifications of my technical proficiencies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-12 max-w-[calc(100%-3rem)]">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white/[0.02] border border-white/[0.05] hover:border-white/10 backdrop-blur-md rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 group flex flex-col">

              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 overflow-hidden p-3">
                <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md rounded-md" suppressHydrationWarning />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
              <p className="text-[11px] font-semibold text-slate-500 tracking-widest uppercase mb-8">{cert.issuer}</p>

              {cert.type === "virtual" ? (
                <a href={cert.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors w-fit mt-auto">
                  Verify Link <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </a>
              ) : (
                <button onClick={() => setSelectedCert(cert)} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10 mt-auto w-fit">
                  View Certificate <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="leadership" className="py-24 px-6 md:px-12 w-full max-w-7xl relative z-10 border-t border-white/5 scroll-mt-20">
        <div className="mb-12 text-center md:text-left ml-0 md:ml-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Beyond Code</h2>
          <p className="text-slate-400 text-sm">Leadership roles and extracurricular achievements.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-12 max-w-[calc(100%-3rem)]">
          {cards.map((card, i) => (
            <div key={i} className="group bg-white/[0.02] border border-white/[0.05] rounded-[2rem] overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col">
              <div className="h-40 bg-white/5 flex items-center justify-center p-6 relative overflow-hidden">
                <img src={card.image} alt={card.title} className="h-20 w-auto object-contain transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" suppressHydrationWarning />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <p className="text-[9px] font-bold text-cyan-500 uppercase tracking-widest mb-2">{card.role}</p>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-medium flex-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 px-6 md:px-12 w-full max-w-4xl mx-auto relative z-10 border-t border-white/5 text-center mb-10 scroll-mt-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">Get In Touch.</h2>
        <p className="text-slate-400 text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently open for new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
        </p>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 w-full max-w-lg mx-auto text-left">
          <div className="flex flex-col md:flex-row gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md"
            />
          </div>

          <input
            type="text"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message..."
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all backdrop-blur-md resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={formStatus === "Submitting"}
            className="w-full mt-2 px-8 py-4 bg-cyan-500 text-[#07090E] font-black rounded-xl text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formStatus === "Submitting" ? "Sending..." : formStatus === "Success" ? "Sent Successfully!" : "Send Message"}
            {formStatus !== "Submitting" && formStatus !== "Success" && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            )}
          </button>

          {formStatus === "Error" && (
            <p className="text-red-400 text-xs text-center mt-2 font-bold">{errorMessage}</p>
          )}
        </form>
      </section>

      <footer className="w-full py-6 text-center border-t border-white/5 relative z-10">
        <p className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Designed & Built by Lakshan Wickramasinghe</p>
      </footer>
      <AnimatePresence>
        {selectedCert && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07090E]/90 backdrop-blur-xl p-4 md:p-12 cursor-pointer" onClick={() => setSelectedCert(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative max-w-5xl w-full bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden cursor-default" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4 border-b border-white/10 mb-2">
                <div>
                  <h3 className="text-white font-bold">{selectedCert.title}</h3>
                  <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">{selectedCert.issuer}</p>
                </div>
                <button onClick={() => setSelectedCert(null)} className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>

              {selectedCert.file && selectedCert.file.endsWith('.pdf') ? (
                <iframe src={selectedCert.file} className="w-full h-[70vh] rounded-xl bg-white" title={selectedCert.title} />
              ) : (
                <img src={selectedCert.file || selectedCert.image} alt={selectedCert.title} className="w-full h-auto rounded-xl object-contain max-h-[70vh]" suppressHydrationWarning />
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}