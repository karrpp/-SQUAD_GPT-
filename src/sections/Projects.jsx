function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>
        <p style={styles.placeholder}>프로젝트 카드 (CR7이 채울 예정)</p>
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
  title: {
    fontSize: 'var(--text-3xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-text-primary)',
    marginBottom: 'var(--spacing-8)',
  },
  placeholder: {
    color: 'var(--color-text-tertiary)',
  },
};

export default Projects;
