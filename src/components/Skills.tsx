import { useScrollReveal } from '../hooks/useScrollReveal';
import { technicalSkills, professionalSkills, skillEcosystemNodes } from '../data/content';
import './Skills.css';

function SkillEcosystem() {
  return (
    <div className="skill-eco">
      <svg className="skill-eco__svg" viewBox="0 0 100 100" aria-label="Biotechnology skill ecosystem visualization">
        {/* Connection lines */}
        {skillEcosystemNodes.filter(n => !n.primary).map((node) => {
          const core = skillEcosystemNodes[0];
          return (
            <line
              key={`line-${node.id}`}
              x1={core.x} y1={core.y}
              x2={node.x} y2={node.y}
              className="skill-eco__line"
            />
          );
        })}
        {/* Nodes */}
        {skillEcosystemNodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x} cy={node.y}
              r={node.primary ? 6 : 3.5}
              className={`skill-eco__node ${node.primary ? 'skill-eco__node--primary' : ''}`}
            >
              <animate attributeName="r" values={`${node.primary ? 6 : 3.5};${node.primary ? 6.8 : 4};${node.primary ? 6 : 3.5}`} dur={`${5 + Math.random() * 3}s`} repeatCount="indefinite" />
            </circle>
            <text
              x={node.x}
              y={node.y + (node.primary ? 10 : 7)}
              className="skill-eco__text"
              textAnchor="middle"
              fontSize={node.primary ? 3 : 2.2}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${visible ? 'visible' : ''}`}>
          <span className="eyebrow">Skills</span>
          <h2 className="heading-lg">Technical & Professional Skills</h2>
        </div>

        <div className={`skills__layout reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className="skills__categories">
            <div className="skills__category">
              <h3 className="heading-sm skills__cat-title">Technical Skills</h3>
              <div className="skills__chips">
                {technicalSkills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skills__category">
              <h3 className="heading-sm skills__cat-title">Professional Skills</h3>
              <div className="skills__chips">
                {professionalSkills.map((s) => (
                  <span key={s} className="tag tag-blue">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <SkillEcosystem />
        </div>
      </div>
    </section>
  );
}
