
export default function Footer() {
  return (
    <footer className="py-4 border-top" style={{ backgroundColor: 'var(--bg-main)', borderColor: 'var(--glass-border)' }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
        <p className="small text-custom-muted mb-0">&copy; 2026 Kurra Dinesh. All Rights Reserved. Built with React.js, Bootstrap & Framer Motion.</p>
        <div className="d-flex gap-3">
          <a href="https://github.com/kurradinesh" target="_blank" rel="noreferrer" className="text-custom-muted fs-5" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kurradinesh/" target="_blank" rel="noreferrer" className="text-custom-muted fs-5" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:kurradinesh93@gmail.com" className="text-custom-muted fs-5"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
}
