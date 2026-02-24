// ===================================================
// 성민 FC — Projects Section
// 준비 중. 실제 프로젝트 생기면 채운다.
// ===================================================

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>PROJECTS</span>
          <h2 style={styles.title}>프로젝트</h2>
          <p style={styles.desc}>팀이 만들고 있는 것들.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.badge}>⚙️ IN PROGRESS</div>
          <h3 style={styles.cardTitle}>성민 FC 홈페이지</h3>
          <p style={styles.cardDesc}>
            지금 보고 있는 이 페이지. SQUAD GPT 에이전트 팀이 함께 만들고 있다.
          </p>
          <div style={styles.stack}>
            {['React 19', 'Vite 7', 'Claude Sonnet 4.6'].map((tag) => (
              <span key={tag} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <p style={styles.coming}>더 많은 프로젝트가 곧 추가됩니다.</p>
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
    maxWidth: '800px',
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
  },
  card: {
    backgroundColor: 'var(--color-bg-tertiary)',
    border: '1px solid var(--color-border-primary)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--spacing-8)',
    marginBottom: 'var(--spacing-6)',
  },
  badge: {
    display: 'inline-block',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--font-semibold)',
    letterSpacing: '0.1em',
    color: '#0EA5E9',
    backgroundColor: '#0EA5E915',
    padding: '4px 10px',
    borderRadius: 'var(--radius-full)',
    marginBottom: 'var(--spacing-4)',
  },
  cardTitle: {
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-text-primary)',
    margin: '0 0 var(--spacing-3)',
  },
  cardDesc: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-text-tertiary)',
    lineHeight: 'var(--leading-relaxed)',
    margin: '0 0 var(--spacing-6)',
  },
  stack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--spacing-2)',
  },
  tag: {
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-muted)',
    backgroundColor: 'var(--color-bg-hover)',
    padding: '4px 10px',
    borderRadius: 'var(--radius-full)',
  },
  coming: {
    textAlign: 'center',
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-muted)',
  },
};
