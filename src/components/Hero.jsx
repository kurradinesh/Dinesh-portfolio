import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaReact, FaJava, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiBootstrap } from 'react-icons/si';

const floatingTech = [
  { icon: <FaJava />, label: 'Java' },
  { icon: <FaReact />, label: 'React' },
  { icon: <SiJavascript />, label: 'JS' },
  { icon: <FaDatabase />, label: 'SQL' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiBootstrap />, label: 'Bootstrap' },
];

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer | Computer Science Student';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        index = 0;
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="position-relative d-flex align-items-center overflow-hidden section-padding" style={{ minHeight: '100vh', paddingTop: '110px' }}>
      <div className="mesh-glow"></div>
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-lg-6 text-center text-lg-start"
          >
            <span className="accent-title text-uppercase mb-2 d-block">Available for Opportunities</span>
            <h1 className="hero-title mb-3">Kurra Dinesh</h1>
            <h3 className="h2 fw-bold mb-4 typing-text" style={{ color: 'var(--accent)', minHeight: '2.2rem' }}>{text}<span className="typing-cursor">|</span></h3>
            <p className="lead text-custom-muted mb-4 fs-5" style={{ maxWidth: '620px' }}>
              Passionate Full Stack Developer and B.Tech Computer Science student with expertise in Java, Advanced Java, SQL, MySQL, HTML, CSS, JavaScript, React.js, and Bootstrap. I enjoy building responsive web applications and solving real-world problems through technology.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap mb-4">
              <a href="#projects" className="btn-gradient">View Projects <i className="fas fa-arrow-right small"></i></a>
              <a href="#contact" className="btn-glass-outline">Contact Me</a>
              <a
                href="file:///C:/Users/22nn1/Downloads/Dinesh%20%20%20Resume%20%20%20(%20R%20E%20%20).pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-glass-outline"
              >
                <FaDownload /> Resume
              </a>
            </div>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap social-row">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-pill"><FaGithub /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-pill"><FaLinkedin /></a>
              <a href="mailto:kurradinesh93@gmail.com" className="social-pill"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-lg-6 text-center"
          >
            <div className="profile-shell position-relative d-inline-block">
              <div className="profile-ring" />
              <img src="/dinesh.jpeg" alt="Kurra Dinesh Profile" className="img-fluid rounded-circle hero-profile-avatar" />
              {floatingTech.map((item, index) => (
                <motion.span
                  key={item.label}
                  className="floating-chip"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
                  style={{ top: `${10 + (index % 3) * 25}%`, left: `${8 + (index * 9) % 70}%` }}
                >
                  {item.icon}
                  <small>{item.label}</small>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}