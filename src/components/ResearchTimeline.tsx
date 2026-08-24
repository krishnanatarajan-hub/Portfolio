import { useScrollReveal } from '../hooks/useScrollReveal';
import { timelineEvents } from '../data/content';
import './ResearchTimeline.css';

export default function ResearchTimeline() {
  const [ref, visible] = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="research-journey" className="section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Journey</span>
          <h2 className="heading-lg">Research Journey</h2>
          <p className="text-body">A chronological timeline of Krishna's biotechnology journey.</p>
        </div>

        <div className="rtl">
          <div className={`rtl__line ${visible ? 'rtl__line--revealed' : ''}`} />
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className={`rtl__item ${i % 2 === 0 ? 'rtl__item--left' : 'rtl__item--right'} reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08 + 0.2}s` }}
            >
              <div className="rtl__node" />
              <div className="rtl__content card">
                <span className="rtl__date">{event.date}</span>
                <p className="rtl__label">{event.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
