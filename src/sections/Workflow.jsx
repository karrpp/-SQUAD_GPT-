// ===================================================
// 성민 FC — Workflow Section
// 경기 운영법. workflowSteps 데이터 기반 타임라인.
// ===================================================

import { workflowSteps } from '../data/agents';

export default function Workflow() {
  return (
    <section id="workflow" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>HOW WE PLAY</span>
          <h2 style={styles.title}>경기 운영법</h2>
          <p style={styles.desc}>
            킥오프부터 골까지. 팀이 움직이는 방식.
          </p>
        </div>

        <div style={styles.timeline}>
          {workflowSteps.map((step, i) => (
            <div key={i} style={styles.step}>
              <div style={styles.lineCol}>
                <div style={{ ...styles.dot, backgroundColor: step.color }} />
                {i < workflowSteps.length - 1 && <div style={styles.line} />}
              </div>
              <div style={styles.content}>
                <div style={styles.phase}>{step.phase}</div>
                <p style={styles.stepDesc}>{step.desc}</p>
                <span style={{ ...styles.agentBadge, color: step.color, borderColor: `${step.color}40`, backgroundColor: `${step.color}10` }}>
                  {step.agents}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'var(--spacing-20) var(--spacing-8)',
    backgroundColor: 'var(--color-bg-primary)',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-16)',
  },
  label: {
    display: 'inline-block',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: '0.15em',
    color: 'var(--color-primary)',
    marginBottom: 'var(--spacing-4)',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-text-primary)',
    margin: '0 0 var(--spacing-6)',
  },
  desc: {
    fontSize: 'var(--text-lg)',
    color: 'var(--color-text-tertiary)',
    lineHeight: 'var(--leading-relaxed)',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
  },
  step: {
    display: 'flex',
    gap: 'var(--spacing-6)',
  },
  lineCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    width: '20px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    flexShrink: 0,
    marginTop: '4px',
  },
  line: {
    width: '2px',
    flex: 1,
    backgroundColor: 'var(--color-border-primary)',
    minHeight: '24px',
  },
  content: {
    paddingBottom: 'var(--spacing-10)',
    flex: 1,
  },
  phase: {
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
  },
  stepDesc: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-tertiary)',
    lineHeight: 'var(--leading-relaxed)',
    margin: '0 0 var(--spacing-3)',
  },
  agentBadge: {
    display: 'inline-block',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-medium)',
    padding: '3px 10px',
    borderRadius: 'var(--radius-full)',
    border: '1px solid',
  },
};
