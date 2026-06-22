import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';

const education = [
  {
    title: 'B.Tech in Computer Science',
    place: 'Mohan Babu University',
    period: '2023 – 2027',
    detail: 'CGPA: 8.9/10 • Full Stack Development, DBMS, DSA, OOP, Software Engineering',
  },
  {
    title: 'Intermediate (MPC)',
    place: 'Sri Chaitanya Junior College',
    period: '2021 – 2023',
    detail: '92.7% • Strong base in Mathematics, Programming fundamentals, and analytical thinking.',
  },
  {
    title: 'SSC',
    place: 'Sri Chaitanya School',
    period: '2020 – 2021',
    detail: '100% • Academically consistent with a strong foundation for technical learning.',
  },
];

const certifications = ['Java Programming Certification', 'Web Development Certification', 'SQL Basics Certification'];
const achievements = ['Maintained CGPA of 8.9/10 in B.Tech Computer Science', 'Built multiple real-world web applications and UI systems', 'Developed responsive, production-ready frontends with modern frameworks'];

export default function Resume() {
  const animatedRef = useScrollAnimation();

  return (
    <section id="resume" className="section-padding bg-alt">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Education & Achievements</span>
          <h2 className="section-title">A focused academic path with practical, real-world experience</h2>
        </div>

        <div className="row g-4 mt-4 scroll-animate" ref={animatedRef}>
          <div className="col-lg-7">
            <article className="glass-container p-4 p-md-5 h-100">
              <h3 className="h5 fw-bold text-white mb-4">Academic Timeline</h3>
              <div className="timeline-list">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="timeline-card"
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <div className="timeline-dot" />
                    <div>
                      <p className="text-custom-muted small mb-1">{item.period}</p>
                      <h4 className="h6 text-white mb-1">{item.title}</h4>
                      <p className="text-custom-muted mb-2">{item.place}</p>
                      <p className="small text-custom-muted mb-0">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>
          </div>

          <div className="col-lg-5 d-grid gap-4">
            <article className="glass-container p-4 h-100">
              <h3 className="h5 fw-bold text-white mb-3">Certifications</h3>
              <div className="d-grid gap-3">
                {certifications.map((item) => (
                  <div key={item} className="feature-card">
                    <i className="fas fa-award" style={{ color: 'var(--accent)' }}></i>
                    <p className="mb-0 text-custom-muted">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-container p-4 h-100">
              <h3 className="h5 fw-bold text-white mb-3">Achievements</h3>
              <div className="d-grid gap-3">
                {achievements.map((item) => (
                  <div key={item} className="feature-card">
                    <i className="fas fa-trophy" style={{ color: 'var(--secondary)' }}></i>
                    <p className="mb-0 text-custom-muted">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <a
              href={encodeURI(`${import.meta.env.BASE_URL}Kurra Dinesh Resume.pdf`)}
              download="Kurra Dinesh Resume.pdf"
              className="btn-gradient"
            >
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}