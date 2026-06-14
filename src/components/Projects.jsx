import { motion } from 'framer-motion';
import useScrollAnimation from './useScrollAnimation';

const stackProjects = [
  {
    title: 'Glow Beauty Hub – Shopify E-Commerce Store',
    desc: 'Designed and developed a Shopify e-commerce store for beauty products, including customized product pages, collections, and navigation with responsive design for desktop and mobile devices.',
    stack: ['Shopify', 'E-Commerce', 'Responsive Design'],
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600',
    liveUrl: 'https://glowbeauty-hub.myshopify.com',
    repoUrl: 'https://github.com/kurradinesh',
    passwordProtected: true,
  },
  {
    title: 'Online Book Store Website',
    desc: 'Developed a responsive bookstore using HTML, CSS, and JavaScript with structured book listings and a modern UI design.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600',
    liveUrl: 'https://github.com/kurradinesh',
    repoUrl: 'https://github.com/kurradinesh',
  },
  {
    title: 'Career Guidance Website',
    desc: 'Developed a platform to help students explore career opportunities through a responsive UI and organized navigation.',
    stack: ['React.js', 'Bootstrap', 'Web Design'],
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600',
    liveUrl: 'https://kurradinesh.github.io/successful-career-guidance/',
    repoUrl: 'https://github.com/kurradinesh',
  },
];

export default function Projects() {
  const animatedRef = useScrollAnimation();

  const handleLiveClick = (event, project) => {
    if (project.passwordProtected) {
      event.preventDefault();
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      window.alert('This Shopify store is password protected. Password: Bujjibabu@7732');
      return;
    }

    return true;
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Projects</span>
          <h2 className="section-title">Featured engineering work with a premium presentation</h2>
        </div>
        <div className="row g-4 mt-4 scroll-animate" ref={animatedRef}>
          {stackProjects.map((proj, i) => (
            <motion.div
              className="col-md-6 col-lg-4"
              key={proj.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <article className="portfolio-card d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="portfolio-img-container">
                    <img src={proj.img} alt={proj.title} />
                    <div className="project-overlay">
                      <span>Premium UI</span>
                      <span>Responsive Layout</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="h5 fw-bold text-white mb-2">{proj.title}</h4>
                    <p className="small text-custom-muted mb-4 lh-relaxed">{proj.desc}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {proj.stack.map((tag) => <span key={tag} className="badge-tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 d-flex justify-content-between align-items-center gap-2">
                  <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="btn-mini"><i className="fab fa-github me-1"></i> Repo</a>
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-mini btn-mini-accent"
                    onClick={(event) => handleLiveClick(event, proj)}
                  >
                    <i className="fas fa-arrow-up-right-from-square me-1"></i> Live
                  </a>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}