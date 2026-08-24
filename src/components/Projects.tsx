import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/content';
import './Projects.css';

function ProcessFlow({ steps }: { steps: string[] }) {
  return (
    <div className="proj-flow">
      {steps.map((step, i) => (
        <div key={i} className="proj-flow__step">
          <span className="proj-flow__label">{step}</span>
          {i < steps.length - 1 && <span className="proj-flow__arrow">→</span>}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  const [ref, visible] = useScrollReveal<HTMLElement>();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Projects</span>
          <h2 className="heading-lg">Research Projects</h2>
          <p className="text-body">Biotechnology research projects exploring sustainable and innovative solutions.</p>
        </div>

        <div className="proj-list">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className={`proj-card card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12 + 0.15}s` }}
            >
              <div className="proj-card__header" 
                onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === proj.id}
                onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === proj.id ? null : proj.id)}
              >
                <div className="proj-card__meta">
                  <span className="proj-card__number">Project 0{proj.id}</span>
                  <span className="proj-card__date text-sm">{proj.date}</span>
                </div>
                <h3 className="heading-md proj-card__title">{proj.title}</h3>
                <p className="text-body proj-card__desc">{proj.description}</p>
                <span className={`proj-card__toggle ${expanded === proj.id ? 'proj-card__toggle--open' : ''}`}>
                  {expanded === proj.id ? 'Show Less' : 'View Details'} <span className="btn-arrow">→</span>
                </span>
              </div>

              <AnimatePresence>
                {expanded === proj.id && (
                  <motion.div
                    className="proj-card__details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="proj-card__inner">
                      <h4 className="heading-sm" style={{ marginBottom: 16 }}>Process Flow</h4>
                      <ProcessFlow steps={proj.flow} />

                      <h4 className="heading-sm" style={{ marginTop: 24, marginBottom: 12 }}>Technical Areas</h4>
                      <div className="proj-card__tags">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
