import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certifications } from '../data/content';
import './CertificationSection.css';

export default function CertificationSection() {
  const [ref, visible] = useScrollReveal<HTMLElement>();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="training" className="section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Training</span>
          <h2 className="heading-lg">Training & Certifications</h2>
          <p className="text-body">Specialized programs and courses in biotechnology and research.</p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className={`cert-card card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1 + 0.15}s` }}
              onClick={() => setExpanded(expanded === cert.id ? null : cert.id)}
              role="button"
              tabIndex={0}
              aria-expanded={expanded === cert.id}
              onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === cert.id ? null : cert.id)}
            >
              <div className="cert-card__top">
                <span className="cert-card__number">0{cert.id}</span>
                <span className="cert-card__mode tag tag-blue">{cert.mode}</span>
              </div>
              <h3 className="heading-sm cert-card__title">{cert.title}</h3>
              <p className="cert-card__meta text-sm">{cert.institution} · {cert.date}</p>

              {cert.highlights && (
                <div className="cert-card__highlights">
                  {cert.highlights.map((h) => (
                    <div key={h.label} className="cert-highlight">
                      <span className="cert-highlight__value">{h.value}</span>
                      <span className="cert-highlight__label">{h.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <AnimatePresence>
                {expanded === cert.id && (
                  <motion.div
                    className="cert-card__details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-body" style={{ marginTop: 16, marginBottom: 16 }}>{cert.description}</p>
                    {cert.topics && (
                      <div className="cert-card__topics">
                        {cert.topics.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <span className={`cert-card__expand ${expanded === cert.id ? 'cert-card__expand--open' : ''}`}>
                {expanded === cert.id ? 'Less' : 'More'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
