import { useScrollReveal } from '../hooks/useScrollReveal';
import { researchInterests } from '../data/content';
import './ResearchInterests.css';

export default function ResearchInterests() {
  const [ref, visible] = useScrollReveal<HTMLElement>();

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Interests</span>
          <h2 className="heading-lg">Research Interests</h2>
          <p className="text-body">Areas Krishna is passionate about exploring further.</p>
        </div>

        <div className="ri-grid">
          {researchInterests.map((ri, i) => (
            <div
              key={ri.id}
              className={`ri-card card reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08 + 0.15}s` }}
            >
              <span className="ri-card__icon">{ri.icon}</span>
              <h3 className="heading-sm ri-card__title">{ri.title}</h3>
              <p className="text-sm">{ri.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
