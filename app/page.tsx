import PortfolioScript from "@/components/PortfolioScript";

export default function Home() {
  return (
    <>
      <div id="progress" aria-hidden="true"></div>

      <header className="topbar">
        <div className="wrap topbar__in">
          <a className="brand" href="#top">
            <i className="brand__dot" aria-hidden="true"></i>
            senuka<span>.rodrigo</span>
          </a>
          <nav className="navlinks" aria-label="Primary" id="primary-nav">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#awards">Awards</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn" href="#contact">
            Hire me <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* ══════════════ HERO ══════════════ */}
        <section className="hero">
          <div className="wrap hero__grid">
            <div className="stagger">
              <p className="hero__tag">
                <i aria-hidden="true"></i> Working under Castoranets as Software Engineer
              </p>
              <h1>
                Senuka<span className="l2">Rodrigo</span>
              </h1>

              <div className="roles" aria-label="Roles">
                <ul className="roles__list">
                  <li>Computer Science undergraduate</li>
                  <li>Full-stack developer</li>
                  <li>Next.js &amp; TypeScript</li>
                  <li>Java &amp; Spring Boot</li>
                </ul>
              </div>

              <p className="hero__lead">
                Computer Science undergraduate at the <strong>University of Westminster</strong>, currently
                seeking a software engineering internship. I&apos;ve built and deployed full-stack applications
                using <strong>Next.js, TypeScript, Firebase and Java</strong> — including a
                neuro-rehabilitation platform now live with real users.
              </p>

              <div className="btnrow">
                <a className="btn" href="#projects">
                  View my work <span className="btn__arrow" aria-hidden="true">→</span>
                </a>
                <a className="btn btn--ghost" href="mailto:senukarrodrigo.07@gmail.com">
                  Get in touch
                </a>
              </div>

              <p className="contactrow">
                <span>◈ Kaluthara, Sri Lanka</span>
                <a href="mailto:senukarrodrigo.07@gmail.com">senukarrodrigo.07@gmail.com</a>
                <a href="tel:+94773847510">+94 77 384 7510</a>
              </p>
            </div>

            {/* SIGNATURE: a live signal trace — the ReViveX monitoring idea, made literal */}
            <figure className="scope">
              <figcaption className="scope__bar">
                <b>● REC</b> Adherence signal <span>ch01 / live</span>
              </figcaption>
              <svg
                viewBox="0 0 560 180"
                role="img"
                aria-label="Stylised waveform representing real-time patient adherence monitoring"
              >
                <g className="scope__grid" aria-hidden="true">
                  <line x1="0" y1="45" x2="560" y2="45" />
                  <line x1="0" y1="90" x2="560" y2="90" />
                  <line x1="0" y1="135" x2="560" y2="135" />
                  <line x1="140" y1="0" x2="140" y2="180" />
                  <line x1="280" y1="0" x2="280" y2="180" />
                  <line x1="420" y1="0" x2="420" y2="180" />
                </g>
                <path
                  className="trace trace--ghost"
                  d="M0 120 L48 120 L60 96 L72 150 L84 108 L96 120 L160 120 L176 100 L190 154 L204 112 L218 120 L290 120 L306 98 L320 152 L334 110 L348 120 L420 120 L436 102 L450 150 L464 114 L478 120 L560 120"
                />
                <path
                  className="trace"
                  d="M0 90 L60 90 L74 40 L88 140 L102 66 L116 90 L180 90 L196 52 L210 128 L224 74 L238 90 L300 90 L316 44 L330 136 L344 70 L358 90 L420 90 L436 56 L450 124 L464 78 L478 90 L540 90 L560 90"
                />
                <circle className="sweep" r="4" fill="#C4F82A" />
              </svg>
              <div className="scope__stats">
                <div>
                  <b data-count="4">0</b>
                  <span>Projects</span>
                </div>
                <div>
                  <b data-count="6">0</b>
                  <span>Team size</span>
                </div>
                <div>
                  <b data-count="1">0</b>
                  <span>Live product</span>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* ══════════════ STATS ══════════════ */}
        <section className="section" style={{ paddingBlock: 0 }} aria-label="At a glance">
          <div className="wrap">
            <div className="stats reveal">
              <div className="stat">
                <b data-count="8">0</b>
                <span>Languages</span>
              </div>
              <div className="stat">
                <b data-count="4">0</b>
                <span>Frameworks</span>
              </div>
              <div className="stat">
                <b data-count="4">0</b>
                <span>Shipped projects</span>
              </div>
              <div className="stat">
                <b data-count="3">0</b>
                <span>Awards &amp; certificates</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ PROJECTS ══════════════ */}
        <section className="section" id="projects">
          <div className="wrap">
            <header className="sec-head reveal">
              <p className="sec-head__top">01 / Projects</p>
              <h2>Things I&apos;ve built and shipped</h2>
              <p>
                Four projects across full-stack web, AI integration and backend architecture — one of them live
                and in use by real patients and therapists.
              </p>
            </header>

            <div className="projects">
              {/* ReViveX */}
              <article className="project project--lead reveal" data-glow="">
                <div>
                  <p className="project__meta">
                    <span className="num">01</span>
                    <span className="badge badge--live">
                      <i aria-hidden="true"></i> Live
                    </span>
                    <span>Team of 6</span>
                    <span>Health tech</span>
                  </p>
                  <h3>ReViveX</h3>
                  <p className="project__sub">
                    A full-stack rehabilitation platform enabling doctors to assign and monitor patient exercise
                    plans in real time.
                  </p>
                  <p>
                    A neuro-rehabilitation platform for Parkinson&apos;s and post-stroke patients. Therapists
                    monitor real-time adherence, assign exercise plans, and receive AI-driven insights.
                    Patients track sessions, streaks and progress through a gamified dashboard.
                  </p>
                  <p>Built with Next.js, TypeScript and Firebase by a team of six.</p>

                  <ul className="contrib">
                    <li>Developed the patient dashboard including session tracking, weekly adherence score and XP progress system</li>
                    <li>Integrated Firebase Firestore for real-time data sync between the doctor and patient portals</li>
                    <li>Built role-based UI for therapist, patient, caregiver and admin user types</li>
                    <li>Collaborated in a team of 6 using Git branching, pull requests and code reviews</li>
                  </ul>

                  <div className="tags">
                    <span className="tag">JavaScript</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">HTML</span>
                    <span className="tag">Next.js</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Firestore</span>
                  </div>

                  <p className="links">
                    <a href="https://revivex-frontend-prod.vercel.app" target="_blank" rel="noopener">
                      Live site
                    </a>
                    <a href="https://github.com/ReViveX-Team-Build" target="_blank" rel="noopener">
                      GitHub
                    </a>
                  </p>
                </div>

                <aside className="panel-side">
                  <h4>Project readout</h4>
                  <dl className="kv">
                    <div>
                      <dt>Role</dt>
                      <dd>Frontend / dashboard</dd>
                    </div>
                    <div>
                      <dt>Team</dt>
                      <dd>6 developers</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>Live in production</dd>
                    </div>
                    <div>
                      <dt>Users</dt>
                      <dd>
                        Patients · Therapists
                        <br />
                        Caregivers · Admins
                      </dd>
                    </div>
                    <div>
                      <dt>Sync</dt>
                      <dd>Real-time (Firestore)</dd>
                    </div>
                    <div>
                      <dt>Workflow</dt>
                      <dd>Git · PRs · Reviews</dd>
                    </div>
                  </dl>
                </aside>
              </article>

              {/* Post Office Management System */}
              <article className="project reveal" data-glow="">
                <p className="project__meta">
                  <span className="num">02</span>
                  <span>Backend</span>
                  <span>REST API</span>
                </p>
                <h3>Post Office Management System</h3>
                <p className="project__sub">A Spring Boot REST API simulating a postal office management system.</p>
                <p>
                  The application manages post offices, parcels and parcel history using a layered
                  architecture with full database integration.
                </p>
                <ul className="contrib contrib--tight">
                  <li>Backend development</li>
                  <li>Layered architecture</li>
                  <li>Database integration</li>
                  <li>Project management with Maven</li>
                  <li>Error handling and structure</li>
                </ul>
                <div className="tags">
                  <span className="tag">Java</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">SQL</span>
                  <span className="tag">XML</span>
                  <span className="tag">Maven</span>
                </div>
                <p className="links">
                  <a
                    href="https://github.com/SenukaRodrigo/University-Projects/tree/main/Ocean%20Realm%20website%20(Group%20Project%20)"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </p>
              </article>

              {/* AI Chat Bot */}
              <article className="project reveal" data-glow="">
                <p className="project__meta">
                  <span className="num">03</span>
                  <span>AI integration</span>
                </p>
                <h3>AI Chat Bot</h3>
                <p className="project__sub">Exploring how AI models integrate with APIs in a production-shaped frontend.</p>
                <p>
                  Implemented in Next.js with a well-organised frontend structure, considered style
                  management and an interactive user interface. The focus was on API integration,
                  API key security and a seamless interaction flow.
                </p>
                <div className="tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">CSS</span>
                </div>
                <p className="links">
                  <a href="https://github.com/SenukaRodrigo/AI-Chat-bot.git" target="_blank" rel="noopener">
                    GitHub
                  </a>
                </p>
              </article>

              {/* Estate-Agent */}
              <article className="project reveal" data-glow="">
                <p className="project__meta">
                  <span className="num">04</span>
                  <span>Frontend architecture</span>
                </p>
                <h3>Estate-Agent</h3>
                <p className="project__sub">A React frontend built on Vite, focused on modular and scalable UI.</p>
                <p>
                  Built for fast development and optimised builds. The project centres on reusable
                  components and clean folder organisation, following a structured component-based
                  architecture that demonstrates modern frontend development practices.
                </p>
                <div className="tags">
                  <span className="tag">React.js</span>
                  <span className="tag">Vite</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                </div>
                <p className="links">
                  <a
                    href="https://github.com/SenukaRodrigo/University-Projects/tree/main/esateAgent"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </p>
              </article>
            </div>

            <p className="note">
              Build note — the GitHub links above point at a placeholder. Swap in the real repository URLs from
              your CV before you publish.
            </p>
          </div>
        </section>

        {/* ══════════════ SKILLS ══════════════ */}
        <section className="section" id="skills">
          <div className="wrap">
            <header className="sec-head reveal">
              <p className="sec-head__top">02 / Skills</p>
              <h2>What I work with</h2>
              <p>
                Languages and frameworks I&apos;ve used to build and deploy real applications, plus the tools and
                working habits around them.
              </p>
            </header>

            <div className="skillgrid">
              <div className="skillcol reveal">
                <h3>
                  Languages <em>08</em>
                </h3>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SQL</li>
                  <li>XML</li>
                </ul>
              </div>
              <div className="skillcol reveal">
                <h3>
                  Frameworks <em>04</em>
                </h3>
                <ul>
                  <li>Next.js</li>
                  <li>React.js</li>
                  <li>Spring Boot</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="skillcol reveal">
                <h3>
                  Tools <em>07</em>
                </h3>
                <ul>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Firebase (Firestore)</li>
                  <li>Figma</li>
                  <li>Notion</li>
                  <li>Documentation tools</li>
                  <li>Microsoft Office</li>
                </ul>
              </div>
              <div className="skillcol reveal">
                <h3>
                  Strengths <em>09</em>
                </h3>
                <ul>
                  <li>Leadership</li>
                  <li>Communication</li>
                  <li>Problem solving</li>
                  <li>Debugging</li>
                  <li>Accountability</li>
                  <li>Collaboration</li>
                  <li>Fast learner</li>
                  <li>Time management</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>

            <div className="marquee reveal" aria-hidden="true">
              <div className="marquee__track">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>Tailwind</span>
                <span>SQL</span>
                <span>Git</span>
                <span>Python</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>Tailwind</span>
                <span>SQL</span>
                <span>Git</span>
                <span>Python</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ EDUCATION ══════════════ */}
        <section className="section" id="education">
          <div className="wrap">
            <header className="sec-head reveal">
              <p className="sec-head__top">03 / Education</p>
              <h2>Where I&apos;ve studied</h2>
              <p>
                Currently in my Computer Science degree at the University of Westminster, delivered in Sri Lanka
                through the Informatics Institute of Technology.
              </p>
            </header>

            <div className="timeline reveal" id="timeline">
              <div className="tl-item">
                <p className="tl-item__when">September 2024 — Present</p>
                <h3>BSc (Hons) in Computer Science</h3>
                <p className="tl-item__org">
                  University of Westminster, UK — affiliated with the Informatics Institute of Technology
                </p>
              </div>
              <div className="tl-item">
                <p className="tl-item__when">September 2023 — May 2024</p>
                <h3>Foundation in Information Technology</h3>
                <p className="tl-item__org">Informatics Institute of Technology (IIT), Sri Lanka</p>
                <span className="tl-item__award">Merit</span>
              </div>
              <div className="tl-item">
                <p className="tl-item__when">January 2009 — May 2024</p>
                <h3>Primary Education — Ordinary Level</h3>
                <p className="tl-item__org">Lyceum International School, Panadura</p>
              </div>
            </div>

            <div className="cards mt reveal" style={{ marginBlockStart: "3.5rem" }}>
              <article className="card">
                <svg
                  className="card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
                <h3>Java Programming</h3>
                <p>
                  A structured program covering core Java development and object-oriented design: syntax, control
                  structures, data types and standard libraries, with deep application of encapsulation,
                  inheritance, polymorphism and abstraction.
                </p>
                <span className="card__grade">2025 · Distinction</span>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════ AWARDS ══════════════ */}
        <section className="section" id="awards">
          <div className="wrap">
            <header className="sec-head reveal">
              <p className="sec-head__top">04 / Certificates &amp; achievements</p>
              <h2>Recognition</h2>
            </header>

            <div className="cards">
              <article className="card reveal">
                <svg
                  className="card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="9" r="5" />
                  <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
                </svg>
                <h3>Java Programming Professional Certificate</h3>
                <p>IIT Professional Development Unit</p>
                <span className="card__grade">Distinction</span>
              </article>

              <article className="card reveal">
                <svg
                  className="card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5" />
                </svg>
                <h3>Foundation Certificate in Higher Education</h3>
                <p>Informatics Institute of Technology</p>
                <span className="card__grade card__grade--alt">Merit</span>
              </article>

              <article className="card reveal">
                <svg
                  className="card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z" />
                </svg>
                <h3>SLIOT Challengers — Finalist</h3>
                <p>University Category</p>
                <span className="card__grade">Finalist</span>
              </article>
            </div>

            <h3 className="reveal" style={{ marginBlock: "3.5rem 1.5rem", fontSize: "1.5rem" }}>
              Outside the code
            </h3>
            <div className="interests">
              <article className="interest reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 17c2 0 2 1.5 4 1.5S10 17 12 17s2 1.5 4 1.5S18 17 20 17" />
                  <path d="M2 21c2 0 2 1.5 4 1.5" />
                  <circle cx="16" cy="6" r="2" />
                  <path d="M6 14l5-4 3 2" />
                </svg>
                <h3>Swimming</h3>
                <p>Regular training and recreational participation.</p>
              </article>
              <article className="interest reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M9 21h6M8 21l1-5h6l1 5" />
                  <path d="M12 3a3 3 0 0 0-3 3c0 1 .5 1.7 1 2.2L8 11h8l-2-2.8c.5-.5 1-1.2 1-2.2a3 3 0 0 0-3-3z" />
                </svg>
                <h3>Chess</h3>
                <p>Strategy-based gameplay and problem solving.</p>
              </article>
              <article className="interest reveal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7l3.5 2.5-1.3 4.1h-4.4L8.5 9.5z" />
                </svg>
                <h3>Football</h3>
                <p>Team participation and collaboration.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════════ REFERENCES ══════════════ */}
        <section className="section" id="references">
          <div className="wrap">
            <header className="sec-head reveal">
              <p className="sec-head__top">05 / References</p>
              <h2>People who&apos;ll vouch for me</h2>
            </header>

            <div className="refs">
              <article className="ref reveal">
                <h3>Mr. Niyomal Boteju</h3>
                <p className="ref__role">Assistant Lecturer</p>
                <p className="ref__org">Informatics Institute of Technology</p>
                <p className="ref__c">
                  <a href="mailto:niyomal.b@iit.ac.lk">niyomal.b@iit.ac.lk</a>
                  <a href="tel:+94777377313">+94 77 737 7313</a>
                </p>
              </article>

              <article className="ref reveal">
                <h3>Mr. Janod Umayanga</h3>
                <p className="ref__role">Software Engineer</p>
                <p className="ref__org">Inivos Technology (Pvt) Ltd</p>
                <p className="ref__c">
                  <a href="mailto:janod.umayanga@inivosglobal.com">janod.umayanga@inivosglobal.com</a>
                  <a href="tel:+94710560492">+94 71 056 0492</a>
                </p>
              </article>
            </div>

            <p className="note">
              Privacy note — a CV goes to one recruiter; a website is public and gets scraped. Publishing your
              referees&apos; personal phone numbers and emails exposes them to spam and cold calls they didn&apos;t
              sign up for. Ask both of them first, and consider replacing the details with &quot;References
              available on request&quot; — recruiters expect that and it costs you nothing.
            </p>
          </div>
        </section>

        {/* ══════════════ CONTACT ══════════════ */}
        <section className="section contact" id="contact">
          <div className="wrap">
            <p className="sec-head__top reveal" style={{ justifyContent: "center" }}>
              06 / Contact
            </p>
            <h2 className="reveal">Let&apos;s build something</h2>
            <p className="reveal">
              I&apos;m looking for a software engineering internship where I can ship real features for real
              users. If that&apos;s something you&apos;re hiring for, I&apos;d like to hear from you.
            </p>

            <div className="btnrow reveal">
              <a className="btn" href="mailto:senukarrodrigo.07@gmail.com">
                Email me <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="tel:+94773847510">
                Call me
              </a>
            </div>

            <div className="contact__links reveal">
              <a href="mailto:senukarrodrigo.07@gmail.com">senukarrodrigo.07@gmail.com</a>
              <a href="tel:+94773847510">+94 77 384 7510</a>
              <a href="http://www.linkedin.com/in/senuka-rodrigo" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a href="https://github.com/SenukaRodrigo" target="_blank" rel="noopener">
                GitHub
              </a>
              <span>Kaluthara, Sri Lanka</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>© 2026 Senuka Rodrigo</span>
        <span>Built with HTML, CSS &amp; a little JavaScript</span>
        <span className="foot__end">
          <i className="brand__dot" aria-hidden="true"></i> Working under Castoranets
        </span>
      </footer>

      <button id="totop" type="button" aria-label="Back to top">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <PortfolioScript />
    </>
  );
}
