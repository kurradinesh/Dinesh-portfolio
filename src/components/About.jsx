import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';

const metrics = [
  { value: '8.9/10', label: 'Academic CGPA' },
  { value: '10+', label: 'Projects Built' },
  { value: '100%', label: 'Commitment to Quality' },
];

const highlights = [
  'Responsive and scalable frontend applications',
  'Clean UI, strong UX, and pixel-perfect detail',
  'Java, SQL, React, and modern web stacks',
];

export default function About() {
  const animatedRef = useScrollAnimation();

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Crafting clean, modern, and impactful web experiences</h2>
        </div>

        <div className="row g-4 justify-content-center mt-4">
          <div className="col-lg-9 scroll-animate" ref={animatedRef}>
            <div className="glass-container p-4 p-md-5">
              <div className="row g-4 align-items-stretch">
                <div className="col-lg-7">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src={import.meta.env.BASE_URL + 'Dinesh.jpeg'}
                      alt="Dinesh profile"
                      className="rounded-circle border border-light border-2 shadow"
                      style={{ width: '72px', height: '72px', objectFit: 'cover' }}
                    />
                    <div>
                      <p className="small text-custom-muted mb-1">Profile highlight</p>
                      <h4 className="fw-bold text-white mb-0">Kurra Dinesh</h4>
                    </div>
                  </div>
                  <h4 className="fw-bold text-white mb-3">Professional Summary</h4>
                  <p className="text-custom-muted lh-lg mb-4">
                    Full Stack Developer aspirant and B.Tech Computer Science student at Mohan Babu University with a CGPA of 8.9/10. Skilled in Java, Advanced Java, SQL, MySQL, HTML, CSS, JavaScript, React.js, and Bootstrap, with hands-on experience in developing responsive and user-friendly web applications. Strong understanding of frontend and backend development, database management, object-oriented programming, and software development principles. Passionate about building scalable web solutions, learning emerging technologies, and applying problem-solving skills to real-world challenges. Seeking opportunities as a Full Stack Developer Intern or Junior Full Stack Developer.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {['React.js', 'Java', 'MySQL', 'Bootstrap', 'Responsive Design', 'Problem Solving'].map((tag) => (
                      <span className="chip-pill" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="metric-grid">
                    {metrics.map((item, index) => (
                      <motion.article
                        key={item.label}
                        className="metric-card"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                      >
                        <div className="metric-value">{item.value}</div>
                        <div className="metric-label">{item.label}</div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row g-3 mt-2">
                {highlights.map((item) => (
                  <div className="col-md-4" key={item}>
                    <article className="feature-card">
                      <i className="fas fa-check-circle" style={{ color: 'var(--accent)' }}></i>
                      <p className="mb-0 text-custom-muted">{item}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}