import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [ref, visible] = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className={`contact__inner reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Contact</span>
          <h2 className="heading-lg">Let's Connect & Explore Biotechnology</h2>
          <p className="text-lg contact__desc">
            Interested in biotechnology, research, sustainability, and innovative scientific applications.
          </p>

          <div className="contact__info">
            <div className="contact__item">
              <span className="contact__icon">📧</span>
              <div>
                <span className="contact__label text-sm">Email</span>
                <a href="mailto:krishnanatarajan0201@gmail.com" className="contact__value">
                  krishnanatarajan0201@gmail.com
                </a>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon">📞</span>
              <div>
                <span className="contact__label text-sm">Phone</span>
                <a href="tel:+918148744741" className="contact__value">
                  +91 8148744741
                </a>
              </div>
            </div>
            <div className="contact__item">
              <span className="contact__icon">📍</span>
              <div>
                <span className="contact__label text-sm">Location</span>
                <span className="contact__value">Coimbatore, India</span>
              </div>
            </div>
          </div>

          <div className="contact__actions">
            <a href="mailto:krishnanatarajan0201@gmail.com" className="btn btn-primary">
              Email Krishna <span className="btn-arrow">→</span>
            </a>
            <a href="tel:+918148744741" className="btn btn-secondary">
              Call Krishna
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
