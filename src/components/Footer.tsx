import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Krishna N</span>
          <p className="footer__tagline text-sm">B.Tech Biotechnology | Research & Biotechnology Enthusiast</p>
        </div>
        <p className="footer__copy text-sm">© 2026 Krishna N. All rights reserved.</p>
        <button className="footer__top btn btn-ghost" onClick={scrollToTop} aria-label="Back to top">
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}
