// ===================================================
// 성민 FC — Footer
// ===================================================

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <span style={styles.brand}>성민 FC</span>
          <p style={styles.tagline}>1인 스튜디오 + AI 에이전트 팀</p>
        </div>

        <div style={styles.divider} />

        <div style={styles.bottom}>
          <span style={styles.copy}>© 2026 성민 FC. All rights reserved.</span>
          <a
            href="https://github.com/JugSungMin"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.github}
          >
            GitHub →
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--color-bg-primary)',
    borderTop: '1px solid var(--color-border-primary)',
    padding: 'var(--spacing-12) var(--spacing-8)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  top: {
    textAlign: 'center',
    marginBottom: 'var(--spacing-8)',
  },
  brand: {
    display: 'block',
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-accent)',
    marginBottom: 'var(--spacing-2)',
  },
  tagline: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-muted)',
    margin: 0,
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--color-border-primary)',
    marginBottom: 'var(--spacing-6)',
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--spacing-4)',
  },
  copy: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-muted)',
  },
  github: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-primary)',
    textDecoration: 'none',
    fontWeight: 'var(--font-medium)',
  },
};
