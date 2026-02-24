// ===================================================
// 성민 FC — Squad Section
// SquadBuilder 통합. 기존 컴포넌트 그대로 재사용.
// ===================================================

import SquadBuilder from '../components/SquadBuilder';

export default function Squad() {
  return (
    <section id="squad" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>THE SQUAD</span>
          <h2 style={styles.title}>스쿼드</h2>
          <p style={styles.desc}>
            11명의 AI 에이전트. 각자의 포지션, 각자의 역할.<br />
            선수를 클릭하면 역할과 프롬프트를 확인할 수 있다.
          </p>
        </div>
        <SquadBuilder />
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'var(--spacing-20) var(--spacing-8)',
    backgroundColor: 'var(--color-bg-secondary)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-12)',
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
};
