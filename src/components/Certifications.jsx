import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';

const certifications = [
  {
    title: 'Java Programming Certification',
    issuer: 'Coursera',
    year: '2024',
  },
  {
    title: 'Web Development Certification',
    issuer: 'Udemy',
    year: '2024',
  },
  {
    title: 'SQL Basics Certification',
    issuer: 'Udacity',
    year: '2023',
  },
  {
    title: 'Advanced Java Certification',
    issuer: 'NPTEL',
    year: '2023',
  },
];

export default function Certifications() {
  const animatedRef = useScrollAnimation();

  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Certifications</span>
          <h2 className="section-title">Verified credentials that support my technical profile</h2>
        </div>

        <div className="row g-4 mt-4 scroll-animate" ref={animatedRef}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="col-sm-6 col-lg-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <article className="feature-card h-100 p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="badge-tag">{cert.year}</span>
                  <i className="fas fa-certificate" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}></i>
                </div>
                <h3 className="h6 text-white fw-semibold mb-2">{cert.title}</h3>
                <p className="small text-custom-muted mb-0">Issued by {cert.issuer}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
