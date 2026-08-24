import { useScrollReveal } from '../hooks/useScrollReveal';
import './ProfileDashboard.css';

const cards = [
  {
    icon: '🎓',
    label: 'Education',
    title: 'B.Tech, Biotechnology',
    subtitle: '2024 – 2028',
  },
  {
    icon: '📍',
    label: 'Location',
    title: 'Coimbatore',
    subtitle: 'India',
  },
  {
    icon: '🔬',
    label: 'Experience',
    title: '4 Internships',
    subtitle: 'Research & Laboratory',
  },
  {
    icon: '🧪',
    label: 'Research Interests',
    title: 'Genetics, Immunology',
    subtitle: 'Environmental Tech, Sustainability',
  },
];

export default function ProfileDashboard() {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();

  return (
    <div className="dashboard section" ref={ref}>
      <div className="container">
        <div className={`dashboard__grid reveal ${visible ? 'visible' : ''}`}>
          {cards.map((card, i) => (
            <div key={i} className={`dashboard__card card reveal-delay-${i + 1}`}>
              <span className="dashboard__icon">{card.icon}</span>
              <span className="dashboard__label text-sm">{card.label}</span>
              <h3 className="heading-sm">{card.title}</h3>
              <p className="text-sm">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
