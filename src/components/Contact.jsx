import { useState } from 'react';
import useScrollAnimation from './useScrollAnimation';

export default function Contact() {
  const animatedRef = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:kurradinesh93@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Contact</span>
          <h2 className="section-title">Let’s build something meaningful together</h2>
        </div>

        <div className="row g-5 mt-4 scroll-animate" ref={animatedRef}>
          <div className="col-lg-5">
            <div className="glass-container p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="h5 fw-bold text-white mb-3">Channel Outlets</h4>
                <p className="text-custom-muted mb-4">Open to internships, freelance work, and full-stack opportunities. I respond quickly and value clear, respectful communication.</p>
              </div>
              {[
                { label: 'Email', val: 'kurradinesh93@gmail.com', icon: 'fas fa-envelope-open', href: 'mailto:kurradinesh93@gmail.com' },
                { label: 'Phone', val: '+91 7981619694', icon: 'fas fa-phone-volume', href: 'tel:+917981619694' },
                { label: 'Location', val: 'Andhra Pradesh, India', icon: 'fas fa-earth-americas', href: 'https://www.google.com/maps/search/Andhra+Pradesh,+India' },
                { label: 'GitHub', val: 'GitHub Profile', icon: 'fab fa-github', href: 'https://github.com/kurradinesh' },
              ].map((c) => (
                <a key={c.label} href={c.href || '#'} className="contact-card" target={c.href && c.href.startsWith('http') ? '_blank' : undefined} rel={c.href && c.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <div className="contact-icon"><i className={c.icon}></i></div>
                  <div>
                    <span className="small text-custom-muted">{c.label}</span>
                    <div className="text-white fw-semibold">{c.val}</div>
                  </div>
                </a>
              ))}

              <div className="contact-map-card mt-4">
                <div className="map-dot" />
                <strong>Available for remote work</strong>
                <p className="text-custom-muted small mb-0">Based in Andhra Pradesh and ready to collaborate across time zones.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="glass-container p-4" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="small fw-semibold text-custom-muted mb-1">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} className="form-control input-premium" placeholder="Kurra Dinesh" required />
                </div>
                <div className="col-md-6">
                  <label className="small fw-semibold text-custom-muted mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} className="form-control input-premium" placeholder="kurradinesh93@gmail.com" required />
                </div>
                <div className="col-12">
                  <label className="small fw-semibold text-custom-muted mb-1">Message Body</label>
                  <textarea name="message" value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} className="form-control input-premium" rows="5" placeholder="Tell me about your project idea or opportunity..." required></textarea>
                </div>
                <div className="col-12 mt-4 d-flex flex-wrap gap-3 align-items-center justify-content-between">
                  <p className="text-custom-muted small mb-0">I usually reply within 24 hours.</p>
                  <button type="submit" className="btn-gradient justify-content-center">Send Message <i className="fas fa-paper-plane small"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}