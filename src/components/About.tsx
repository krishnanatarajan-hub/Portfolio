import { useScrollReveal } from '../hooks/useScrollReveal';
import { researchInterests } from '../data/content';
import './About.css';

export default function About() {
  const [ref, visible] = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className={`about__grid reveal ${visible ? 'visible' : ''}`}>
          <div className="about__visual">
            <div className="about__visual-card">
              <svg className="about__dna" viewBox="0 0 200 300" aria-hidden="true">
                <defs>
                  <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--blue)" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {Array.from({ length: 12 }).map((_, i) => {
                  const y = 20 + i * 22;
                  const x1 = 60 + Math.sin(i * 0.6) * 35;
                  const x2 = 140 - Math.sin(i * 0.6) * 35;
                  return (
                    <g key={i} opacity={0.4 + (i % 3) * 0.15}>
                      <circle cx={x1} cy={y} r={4} fill="var(--accent)" />
                      <circle cx={x2} cy={y} r={4} fill="var(--blue)" />
                      <line x1={x1} y1={y} x2={x2} y2={y} stroke="url(#dnaGrad)" strokeWidth="1.5" />
                    </g>
                  );
                })}
                {Array.from({ length: 11 }).map((_, i) => {
                  const y1 = 20 + i * 22;
                  const y2 = 20 + (i + 1) * 22;
                  const x1a = 60 + Math.sin(i * 0.6) * 35;
                  const x1b = 60 + Math.sin((i + 1) * 0.6) * 35;
                  const x2a = 140 - Math.sin(i * 0.6) * 35;
                  const x2b = 140 - Math.sin((i + 1) * 0.6) * 35;
                  return (
                    <g key={`c${i}`}>
                      <line x1={x1a} y1={y1} x2={x1b} y2={y2} stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
                      <line x1={x2a} y1={y1} x2={x2b} y2={y2} stroke="var(--blue)" strokeWidth="1" opacity="0.3" />
                    </g>
                  );
                })}
              </svg>
              <span className="about__visual-label">B.Tech Biotechnology</span>
            </div>
          </div>

          <div className="about__text">
            <span className="eyebrow">About</span>
            <h2 className="heading-lg">About Krishna</h2>
            <p className="text-lg about__bio">
              Krishna N is a B.Tech Biotechnology student at Sri Shakthi Institute of Engineering 
              and Technology, Coimbatore, with a keen interest in genetics, immunology, environmental 
              technology, sustainability, blue biotechnology, and health.
            </p>
            <p className="text-body about__bio">
              With hands-on experience across molecular biology, bioinformatics, food testing, and 
              biotechnology research, Krishna has gained practical exposure through multiple 
              internships and specialized training programs. His research projects demonstrate 
              a commitment to developing innovative, sustainable biotechnology solutions — from 
              biodegradable biosensors and bio-packaging to eco-friendly water purification membranes.
            </p>
          </div>
        </div>

        <div className={`about__interests reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <h3 className="heading-sm about__interests-title">Research Interests</h3>
          <div className="about__pills">
            {researchInterests.map((ri) => (
              <span key={ri.id} className="tag">
                {ri.icon} {ri.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
