import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion, // eslint-disable-line no-unused-vars
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Cloud,
  Cpu,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waves,
  X,
} from "lucide-react";
import "./App.css";

const sectionRise = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const statCards = [
  {
    value: "2024",
    label: "BSc (Hons) in Computer Science started",
    tone: "teal",
  },
  {
    value: "2025",
    label: "Java Programming course completed (Distinction)",
    tone: "gold",
  },
  {
    value: "Team of 6",
    label: "ReViveX delivered with collaborative Git workflows",
    tone: "violet",
  },
  {
    value: "Live App",
    label: "ReViveX deployed at revivex-frontend-prod.vercel.app",
    tone: "danger",
  },
];

const projectCards = [
  {
    title: "ReViveX",
    stack: "JavaScript, TypeScript, HTML, Next.js, Firebase (FireStore)",
    repo: "https://github.com/ReViveX-Team-Build",
    repoLabel: "GitHub Link",
    live: "https://revivex-frontend-prod.vercel.app",
    liveLabel: "Live URL",
    text: "A neuro-rehabilitation platform for Parkinson's and post-stroke patients where therapists monitor real-time adherence, assign exercise plans, and receive AI-driven insights. Patients track sessions, streaks, and progress via a gamified dashboard. Built with Next.js, TypeScript, and Firebase by a team of 6. Live at revivex-frontend-prod.vercel.app.",
    points: [
      "Developed the patient dashboard including session tracking, weekly adherence score, and XP progress system",
      "Integrated Firebase FireStore for real-time data sync between doctor and patient portals",
      "Built role-based UI for therapists, patients, caregivers, and admins user types",
      "Collaborated in a team of 6 using Git branching, pull requests, and code reviews",
    ],
    icon: Brain,
  },
  {
    title: "AI Chat Bot",
    stack: "Next.js, TypeScript, JavaScript, CSS",
    repo: null,
    text: "Developed an AI chat bot to learn about integrating AI models with APIs, with a clean frontend structure and interactive user flow.",
    points: [
      "Implemented a well-organized Next.js frontend and style management",
      "Emphasized API integration and API key security",
      "Delivered a seamless interaction flow and responsive UI",
    ],
    icon: Sparkles,
  },
  {
    title: "Estate-Agent",
    stack: "React.js, JavaScript, HTML, CSS",
    repo: "https://github.com/Kei774/University-Projects/tree/main/esateAgent",
    repoLabel: "GitHub Link",
    text: "React-based frontend web application built using Vite for fast development and optimized builds.",
    points: [
      "Built a modular, scalable user interface with reusable components",
      "Maintained clean folder organization and structured component architecture",
      "Demonstrated modern frontend development practices",
    ],
    icon: Cpu,
  },
  {
    title: "Post Office Management System",
    stack: "Java, SQL, XML",
    repo: "https://github.com/Kei774/University-Projects",
    repoLabel: "GitHub Link",
    text: "A Spring Boot based REST API that simulates a postal office management system managing post offices, parcels, and parcel history.",
    points: [
      "Backend development",
      "Layered architecture",
      "Database integration",
      "Project management with Maven",
      "Error handling and structure",
    ],
    icon: Cloud,
  },
];

const educationCards = [
  {
    institute:
      "University of Westminster, UK (Affiliated with Informatics Institute of Technology)",
    qualification: "BSc (Hons) in Computer Science",
    period: "September 2024 - Present",
  },
  {
    institute: "Informatics Institute of Technology (IIT), Sri Lanka",
    qualification: "Foundation In Information Technology (Merit)",
    period: "September 2023 - May 2024",
  },
  {
    institute: "Lyceum International School, Panadura",
    qualification: "Primary Education - Ordinary Level",
    period: "January 2009 - May 2024",
  },
];

const languageSkills = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "SQL",
  "XML",
];

const frameworkSkills = ["Next.js", "Tailwind CSS", "React.js", "Spring Boot"];

const toolSkills = [
  "Git",
  "GitHub",
  "Microsoft Office",
  "Firebase (FireStore)",
  "Documentation Tools",
  "Notion",
  "Figma",
];

const softSkills = [
  "Leadership",
  "Communication",
  "Problem Solving",
  "Debugging Skills",
  "Accountability",
  "Collaboration",
  "Fast Learner",
  "Time Management",
  "Adaptability",
];

const extracurricular = [
  "Swimming - Regular training and recreational participation",
  "Chess - Strategy based gameplay and problem solving",
  "Football - Team participation and collaboration",
];

const certificateAchievements = [
  {
    title: "Foundation Certificate in Higher Education (Merit)",
    org: "Informatics Institute of Technology",
  },
  {
    title: "Java Programming Professional Certificate (Distinction)",
    org: "IIT Professional Development Unit",
  },
  {
    title: "Finalist, University Category",
    org: "SLIOT Challengers",
  },
];

const references = [
  {
    name: "Mr. Niyomal Boteju",
    role: "Assistant Lecturer",
    org: "Informatics Institute of Technology",
    email: "niyomal.b@iit.ac.lk",
    phone: "+94 77 737 7313",
  },
  {
    name: "Mr. Janod Umayanga",
    role: "Software Engineer",
    org: "Inivos Technology (pvt) ltd",
    email: "janod.umayanga@inivosglobal.com",
    phone: "+94 71 056 0492",
  },
];

function Preloader({ onDone }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => setFadeOut(true), 3500);
    const done = setTimeout(onDone, 5000);
    return () => {
      clearTimeout(startFade);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}>
      <div className="preloader-grid" />
      <svg
        className="preloader-svg"
        viewBox="0 0 220 300"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          className="preloader-s-path"
          d="M 180 50 L 164 56 C 148 36 114 30 86 42 C 58 53 48 82 58 104 C 69 126 95 135 120 142 C 146 149 166 156 170 177 C 175 203 157 226 127 236 C 97 246 60 241 39 224 L 50 248"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>
      <div className="preloader-name-container">
        <motion.p
          className="preloader-logo-name"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          SENUKA
        </motion.p>
      </div>
    </motion.div>
  );
}

function MedicalCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onDown = () => setActive(true);
    const onUp = () => setActive(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-ring ${active ? "cursor-active" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
    </>
  );
}

function RoleModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <button
          className="modal-backdrop"
          aria-label="Close"
          onClick={onClose}
        />
        <motion.div
          className="modal-card"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}>
          <button
            className="icon-btn"
            onClick={onClose}
            aria-label="Close modal">
            <X size={18} />
          </button>
          <p className="mono-tag">Quick Contact</p>
          <h3>Get in touch</h3>
          <div className="modal-grid">
            <a
              className="role-card role-patient"
              href="mailto:senukarrodrigo.07@gmail.com">
              <Activity size={24} />
              <strong>Email</strong>
              <span>senukarrodrigo.07@gmail.com</span>
            </a>
            <a className="role-card role-doctor" href="tel:+94773847510">
              <Stethoscope size={24} />
              <strong>Phone</strong>
              <span>+94 773847510</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ScrollBackdrop() {
  const { scrollYProgress } = useScroll();
  const sideInfoText =
    "SENUKA RODRIGO • COMPUTER SCIENCE UNDERGRADUATE • FULL STACK ENTHUSIAST • KALUTHARA, SRI LANKA • NEXT.JS • TYPESCRIPT • FIREBASE • JAVA • SPRING BOOT • ";
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 88,
    damping: 24,
    mass: 0.4,
  });
  const orbAY = useTransform(smoothScroll, [0, 1], [0, 380]);
  const orbAX = useTransform(smoothScroll, [0, 1], [0, -140]);
  const orbAS = useTransform(smoothScroll, [0, 1], [1, 1.32]);

  const orbBY = useTransform(smoothScroll, [0, 1], [0, -300]);
  const orbBX = useTransform(smoothScroll, [0, 1], [0, 110]);
  const orbBS = useTransform(smoothScroll, [0, 1], [1, 1.2]);

  const sweepY = useTransform(smoothScroll, [0, 1], ["-20%", "120%"]);
  const sweepO = useTransform(
    smoothScroll,
    [0, 0.12, 0.92, 1],
    [0.2, 0.48, 0.48, 0.25],
  );

  return (
    <div className="scroll-bg" aria-hidden>
      <motion.div
        className="scroll-orb scroll-orb-a"
        style={{ y: orbAY, x: orbAX, scale: orbAS }}
      />
      <motion.div
        className="scroll-orb scroll-orb-b"
        style={{ y: orbBY, x: orbBX, scale: orbBS }}
      />
      <motion.div
        className="scroll-sweep"
        style={{ y: sweepY, opacity: sweepO }}
      />
      <div className="side-strip side-strip-left">
        <div className="side-strip-track">
          <span className="side-strip-item">{sideInfoText}</span>
          <span className="side-strip-item">{sideInfoText}</span>
        </div>
      </div>
      <div className="side-strip side-strip-right">
        <div className="side-strip-track">
          <span className="side-strip-item">{sideInfoText}</span>
          <span className="side-strip-item">{sideInfoText}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [booted, setBooted] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const words = useMemo(
    () => [
      "FULL STACK",
      "NEXT.JS",
      "TYPESCRIPT",
      "FIREBASE",
      "JAVA",
      "SPRING BOOT",
    ],
    [],
  );
  const [wordIndex, setWordIndex] = useState(0);
  const handleBootDone = useCallback(() => {
    setBooted(true);
  }, []);

  useEffect(() => {
    if (!booted) return undefined;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 1800);
    return () => clearInterval(id);
  }, [booted, words.length]);

  const handleLogoNavToggle = useCallback(() => {
    if (window.innerWidth > 980) return;
    setMobileMenuOpen((open) => !open);
  }, []);

  const handleMobileNavClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const handleNavItemClick = useCallback(
    (targetId) => {
      const target = document.getElementById(targetId);
      if (!target) {
        handleMobileNavClose();
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      handleMobileNavClose();
    },
    [handleMobileNavClose],
  );

  return (
    <div className="app-shell">
      <ScrollBackdrop />
      <MedicalCursor />

      <AnimatePresence>
        {!booted && <Preloader onDone={handleBootDone} />}
      </AnimatePresence>

      <RoleModal open={showRoleModal} onClose={() => setShowRoleModal(false)} />

      <AnimatePresence>
        {booted && (
          <motion.main
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}>
            <header className={`top-nav ${mobileMenuOpen ? "menu-open" : ""}`}>
              <button
                type="button"
                className="logo-lockup"
                onClick={handleLogoNavToggle}
                aria-expanded={mobileMenuOpen}
                aria-controls="primary-nav">
                <span className="logo-s" aria-hidden>
                  S
                </span>
                <span>Senuka Rodrigo</span>
              </button>
              <nav id="primary-nav">
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("summary")}>
                  Summary
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("projects")}>
                  Projects
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("education")}>
                  Education
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("certificates")}>
                  Certificates
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("skills")}>
                  Skills
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("references")}>
                  References
                </button>
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => handleNavItemClick("contact")}>
                  Contact
                </button>
              </nav>
              <button
                className="btn btn-primary"
                onClick={() => setShowRoleModal(true)}>
                Quick Contact
              </button>
            </header>

            <section className="hero">
              <div className="hero-overlay hero-grid" />
              <motion.p
                className="mono-tag"
                initial="hidden"
                animate="show"
                variants={sectionRise}>
                Computer Science Undergraduate • Full Stack Enthusiast •
                Kaluthara, Sri Lanka
              </motion.p>
              <motion.h1 initial="hidden" animate="show" variants={sectionRise}>
                SENUKA <span>RODRIGO.</span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="show"
                variants={sectionRise}
                className="hero-copy">
                Computer Science undergraduate at University of Westminster
                currently seeking a software engineering internship. Built and
                deployed full stack applications using Next.js, TypeScript,
                Firebase, and Java with team-based Git workflows.
              </motion.p>
              <motion.div
                className="hero-actions"
                initial="hidden"
                animate="show"
                variants={sectionRise}>
                <a
                  className="btn btn-primary"
                  href="mailto:senukarrodrigo.07@gmail.com">
                  Email Me <ArrowRight size={14} />
                </a>
                <a className="btn btn-ghost" href="tel:+94773847510">
                  Call Me <Stethoscope size={14} />
                </a>
              </motion.div>
              <motion.p
                className="mono-tag"
                initial="hidden"
                animate="show"
                variants={sectionRise}
                style={{ marginTop: 18 }}>
                SPECIALIZES IN {words[wordIndex]}
              </motion.p>
            </section>

            <section id="summary" className="section block-danger">
              <motion.p
                className="mono-tag"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Professional Summary
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Building products with practical team execution.
              </motion.h2>
              <motion.p
                className="hero-copy"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 18 }}
                style={{ marginBottom: 16 }}>
                Computer Science undergraduate at University of Westminster
                currently seeking a software engineering internship. Built and
                deployed full stack applications using Next.js, TypeScript,
                Firebase, and Java. Experienced in team-based development with
                Git workflows across projects with real users.
              </motion.p>
              <div className="stats-grid">
                {statCards.map((card, i) => (
                  <motion.article
                    key={card.label}
                    className={`stat-card stat-${card.tone}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}>
                    <h3>{card.value}</h3>
                    <p>{card.label}</p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section id="projects" className="section block-teal">
              <motion.p
                className="mono-tag"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Projects
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Full stack and frontend systems.
              </motion.h2>
              <div className="offer-grid">
                {projectCards.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      className="offer-card"
                      initial={{ opacity: 0, y: 26 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.09 }}>
                      <Icon size={22} />
                      <h3>{item.title}</h3>
                      <p className="stack-line">{item.stack}</p>
                      {item.repo && (
                        <a
                          className="repo-link"
                          href={item.repo}
                          target="_blank"
                          rel="noreferrer">
                          {item.repoLabel || "GitHub Link"}
                        </a>
                      )}
                      {item.live && (
                        <a
                          className="repo-link"
                          href={item.live}
                          target="_blank"
                          rel="noreferrer">
                          {item.liveLabel || "Live URL"}
                        </a>
                      )}
                      <p>{item.text}</p>
                      <ul className="bullet-list">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <section id="education" className="section block-violet">
              <motion.p
                className="mono-tag"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Education and Courses
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Academic and technical foundation.
              </motion.h2>
              <div className="why-grid">
                {educationCards.map((edu) => (
                  <article key={edu.institute}>
                    <ShieldCheck size={20} />
                    <h3>{edu.qualification}</h3>
                    <p>{edu.institute}</p>
                    <p className="stack-line">{edu.period}</p>
                  </article>
                ))}
                <article>
                  <Sparkles size={20} />
                  <h3>Java Programming</h3>
                  <p className="stack-line">2025 • Distinction 2025</p>
                  <p>
                    Completed a structured program focused on core Java
                    development and object-oriented design principles. The
                    course covered Java syntax, control structures, data types,
                    standard libraries, and deep application of encapsulation,
                    inheritance, polymorphism, and abstraction.
                  </p>
                </article>
              </div>
            </section>

            <section id="certificates" className="section block-teal">
              <motion.p
                className="mono-tag"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Certificates and Achievements
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Recognitions and academic milestones.
              </motion.h2>
              <div className="offer-grid">
                {certificateAchievements.map((item) => (
                  <article key={item.title} className="offer-card">
                    <CheckCircle2 size={22} />
                    <h3>{item.title}</h3>
                    <p>{item.org}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="skills" className="section block-neutral">
              <motion.p
                className="mono-tag"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Skills and Activities
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Technical, soft skills, and extracurricular activities.
              </motion.h2>
              <div className="why-grid">
                <article>
                  <ShieldCheck size={20} />
                  <h3>Languages</h3>
                  <div className="chip-list">
                    {languageSkills.map((item) => (
                      <span key={item} className="chip-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
                <article>
                  <Cpu size={20} />
                  <h3>Frameworks</h3>
                  <div className="chip-list">
                    {frameworkSkills.map((item) => (
                      <span key={item} className="chip-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
                <article>
                  <CheckCircle2 size={20} />
                  <h3>Tools and Technologies</h3>
                  <div className="chip-list">
                    {toolSkills.map((item) => (
                      <span key={item} className="chip-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
                <article>
                  <Sparkles size={20} />
                  <h3>Soft Skills</h3>
                  <div className="chip-list">
                    {softSkills.map((item) => (
                      <span key={item} className="chip-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
                <article>
                  <Waves size={20} />
                  <h3>Extracurricular Activities</h3>
                  <ul className="bullet-list">
                    {extracurricular.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section id="references" className="section block-danger">
              <motion.p
                className="mono-tag"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                References
              </motion.p>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}>
                Academic and industry references.
              </motion.h2>
              <div className="offer-grid">
                {references.map((ref) => (
                  <article key={ref.email} className="offer-card">
                    <CheckCircle2 size={22} />
                    <h3>{ref.name}</h3>
                    <p>{ref.role}</p>
                    <p>{ref.org}</p>
                    <p className="stack-line">Email: {ref.email}</p>
                    <p className="stack-line">Phone: {ref.phone}</p>
                  </article>
                ))}
              </div>
            </section>

            <footer id="contact" className="footer">
              <h2>Let&apos;s build together.</h2>
              <p>
                Kaluthara, Sri Lanka • senukarrodrigo.07@gmail.com • +94
                773847510 •{" "}
                <a
                  href="http://www.linkedin.com/in/senuka-rodrigo"
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn
                </a>
                •{" "}
                <a
                  href="https://github.com/Kei774"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}>
                <a
                  className="btn btn-primary"
                  href="mailto:senukarrodrigo.07@gmail.com">
                  Email
                </a>
                <a className="btn btn-ghost" href="tel:+94773847510">
                  Phone
                </a>
                <a
                  className="btn btn-ghost"
                  href="http://www.linkedin.com/in/senuka-rodrigo"
                  target="_blank"
                  rel="noreferrer">
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/Kei774"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
