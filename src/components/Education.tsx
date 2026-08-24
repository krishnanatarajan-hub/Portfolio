import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

export default function Education() {
  const [ref, visible] = useScrollReveal<HTMLElement>();

  return (
    <section className="section education" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Education</span>
          <h2 className="heading-lg">Education</h2>
        </div>

        <div className={`education__card card reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="education__icon">🎓</div>
          <div className="education__info">
            <h3 className="heading-md">B.Tech, Biotechnology</h3>
            <p className="text-lg education__institution">Sri Shakthi Institute of Engineering and Technology</p>
            <span className="tag education__date">2024 – 2028</span>
          </div>
        </div>
      </div>
    </section>
  );
}
