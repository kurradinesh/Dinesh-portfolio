import React, { useState, useEffect } from 'react';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'glass-nav-bar py-2' : 'bg-transparent py-4'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white fs-4" href="#home" style={{color: 'var(--text-main)'}}>
          <span style={{color: 'var(--primary)'}}>&lt;</span>Kurra Dinesh<span style={{color: 'var(--primary)'}}>/&gt;</span>
        </a>
        <button className="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav">
          <i className="fas fa-bars-staggered"></i>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <a className="nav-link text-capitalize px-3 fw-medium text-custom-muted" href={`#${section}`}>{section}</a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <button onClick={toggleTheme} className="btn border-0 text-white p-2 d-flex align-items-center justify-content-center" style={{background: 'var(--glass-bg)', borderRadius: '12px', width: '40px', height: '40px', color: 'var(--text-main)'}}>
                <i className={theme === 'dark' ? 'fas fa-sun text-warning' : 'fas fa-moon text-primary'}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}