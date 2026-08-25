import { motion } from 'framer-motion';
import './Hero.css';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function MolecularBg() {
  const nodes = [
    { cx: '15%', cy: '25%', r: 3 }, { cx: '85%', cy: '20%', r: 2.5 },
    { cx: '10%', cy: '70%', r: 2 }, { cx: '90%', cy: '75%', r: 3.5 },
    { cx: '50%', cy: '15%', r: 2.5 }, { cx: '30%', cy: '85%', r: 2 },
    { cx: '70%', cy: '90%', r: 3 }, { cx: '25%', cy: '50%', r: 2.5 },
    { cx: '75%', cy: '45%', r: 2 }, { cx: '45%', cy: '60%', r: 3 },
    { cx: '60%', cy: '35%', r: 2 }, { cx: '40%', cy: '40%', r: 1.5 },
    { cx: '55%', cy: '80%', r: 2 }, { cx: '20%', cy: '10%', r: 2 },
    { cx: '80%', cy: '55%', r: 2.5 },
  ];
  const lines = [
    [0, 4], [1, 4], [0, 7], [1, 8], [2, 7], [3, 8],
    [5, 2], [6, 3], [7, 9], [8, 9], [4, 10], [10, 11],
    [11, 9], [9, 12], [13, 0], [14, 3], [14, 8],
  ];
  return (
    <svg className="hero__bg-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {lines.map(([a, b], i) => (
        <line
          key={`l${i}`}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          className="hero__bg-line"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={`n${i}`} cx={n.cx} cy={n.cy} r={n.r} className="hero__bg-node">
          <animate attributeName="r" values={`${n.r};${n.r + 0.6};${n.r}`} dur={`${4 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <MolecularBg />
      <div className="hero__gradient" />
      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Biotechnology • Research • Sustainability
          </motion.span>

          <motion.h1 className="heading-xl hero__name" variants={fadeUp}>
            Krishna N
          </motion.h1>

          <motion.p className="heading-md hero__headline" variants={fadeUp}>
            B.Tech Biotechnology | Research & Biotechnology Enthusiast
          </motion.p>

          <motion.p className="text-lg hero__description" variants={fadeUp}>
            Dynamic B.Tech Biotechnology enthusiast with interests in genetics, immunology, 
            and environmental technology — aspiring to contribute to innovative biotechnology 
            solutions for sustainability and health.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              Explore My Work <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('projects')}>
              View Projects
            </button>
          </motion.div>

          <motion.button
            className="btn btn-ghost hero__contact-link"
            variants={fadeUp}
            onClick={() => scrollTo('contact')}
          >
            Get in Touch ↓
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
