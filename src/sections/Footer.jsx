function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>SQUAD GPT - 성민 FC</p>
        <p style={styles.subtext}>1인 스튜디오 + AI 에이전트 팀</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    padding: 'var(--spacing-12) var(--spacing-8)',
    borderTop: '1px solid var(--color-border-primary)',
    backgroundColor: 'var(--color-bg-primary)',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-semibold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-2)',
  },
  subtext: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-tertiary)',
  },
};

export default Footer;
