import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';

const categories = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Advanced Java', level: 82 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', level: 94 },
      { name: 'CSS3', level: 91 },
      { name: 'React.js', level: 88 },
      { name: 'Bootstrap', level: 90 },
    ],
  },
  {
    title: 'Database & Tools',
    items: [
      { name: 'MySQL', level: 84 },
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 86 },
      { name: 'VS Code', level: 92 },
    ],
  },
];

const focusAreas = ['OOP', 'DBMS', 'Web Development', 'Problem Solving'];

export default function Skills() {
  const animatedRef = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-alt">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Skills</span>
          <h2 className="section-title">Technical matrix with practical depth</h2>
        </div>

        <div className="row g-4 mt-4 scroll-animate" ref={animatedRef}>
          {categories.map((group, index) => (
            <div className="col-lg-4" key={group.title}>
              <motion.article
                className="glass-container p-4 h-100"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <h3 className="h5 fw-bold text-white mb-4">{group.title}</h3>
                <div className="d-grid gap-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="skill-bar-card">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-white fw-semibold">{item.name}</span>
                        <span className="small text-custom-muted">{item.level}%</span>
                      </div>
                      <div className="skill-bar-shell">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            </div>
          ))}

          <div className="col-12">
            <motion.article
              className="glass-container p-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div>
                  <h3 className="h5 fw-bold text-white mb-1">Core Concepts</h3>
                  <p className="text-custom-muted mb-0">Focused areas that strengthen my development approach.</p>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {focusAreas.map((item) => (
                    <span className="chip-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}