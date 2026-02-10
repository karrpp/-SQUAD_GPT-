function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo}>SQUAD GPT</div>
        <div style={styles.links}>
          <a href="#about" style={styles.link}>About</a>
          <a href="#values" style={styles.link}>Values</a>
          <a href="#squad" style={styles.link}>Squad</a>
          <a href="#workflow" style={styles.link}>Workflow</a>
          <a href="#projects" style={styles.link}>Projects</a>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--color-bg-primary)',
    borderBottom: '1px solid var(--color-border-primary)',
    zIndex: 1000,
    padding: 'var(--spacing-4) 0',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 var(--spacing-6)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-primary)',
  },
  links: {
    display: 'flex',
    gap: 'var(--spacing-6)',
  },
  link: {
    color: 'var(--color-text-secondary)',
    textDecoration: 'none',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-medium)',
    transition: 'color var(--transition-fast)',
  },
};

export default Navbar;
