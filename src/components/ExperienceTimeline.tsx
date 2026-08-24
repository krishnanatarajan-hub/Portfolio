import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experiences } from '../data/content';
import './ExperienceTimeline.css';

export default function ExperienceTimeline() {
  const [ref, visible] = useScrollReveal<HTMLElement>();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Experience</span>
          <h2 className="heading-lg">Research & Internship Experience</h2>
          <p className="text-body">Practical exposure across biotechnology, molecular biology, bioinformatics, and food testing.</p>
        </div>

        <div className="exp-timeline">
          <div className={`exp-timeline__line reveal ${visible ? 'visible' : ''}`} />
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp-timeline__item reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`exp-timeline__node ${expanded === exp.id ? 'exp-timeline__node--active' : ''}`} />
              <div
                className={`exp-timeline__card card ${expanded === exp.id ? 'exp-timeline__card--expanded' : ''}`}
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expanded === exp.id}
                onKeyDown={(e) => e.key === 'Enter' && setExpanded(expanded === exp.id ? null : exp.id)}
              >
                <div className="exp-timeline__header">
                  <div>
                    <span className="exp-timeline__date text-sm">{exp.date}</span>
                    <h3 className="heading-sm">{exp.role}</h3>
                    <p className="exp-timeline__org">{exp.organization} — {exp.location}</p>
                  </div>
                  <span className={`exp-timeline__toggle ${expanded === exp.id ? 'exp-timeline__toggle--open' : ''}`}>
                    ＋
                  </span>
                </div>

                <AnimatePresence>
                  {expanded === exp.id && (
                    <motion.div
                      className="exp-timeline__details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-body" style={{ marginTop: 16, marginBottom: 16 }}>{exp.description}</p>
                      <div className="exp-timeline__skills">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="tag">{skill}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
