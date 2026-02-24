// ===================================================
// 성민 FC — Values Section
// 4개 핵심 가치. CLAUDE.md 기반.
// ===================================================

const VALUES = [
  {
    number: '01',
    keyword: '간결함',
    desc: '복잡한 것을 단순하게. 불필요한 것을 덜어내라.',
    color: '#0EA5E9',
  },
  {
    number: '02',
    keyword: '완성도',
    desc: '타협 없이 끝까지. 중간에 멈추지 마라.',
    color: '#FFD700',
  },
  {
    number: '03',
    keyword: '헌신',
    desc: '빈틈을 메우는 묵묵한 실행. 화려하지 않아도 된다.',
    color: '#EF4444',
  },
  {
    number: '04',
    keyword: '기록',
    desc: '모든 과정을 남긴다. 왜 그렇게 했는지를 적어라.',
    color: '#A78BFA',
  },
];

export default function Values() {
  return (
    <section id="values" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>CORE VALUES</span>
          <h2 style={styles.title}>핵심 가치</h2>
          <p style={styles.desc}>
            모든 에이전트는 이 질문을 던진다.<br />
            <em style={styles.quote}>"이게 사용자에게 진짜 도움이 되는가?"</em>
          </p>
        </div>

        <div style={styles.grid}>
          {VALUES.map((v) => (
            <div key={v.number} style={styles.card}>
              <div style={{ ...styles.accent, backgroundColor: v.color }} />
              <div style={styles.cardInner}>
                <span style={{ ...styles.number, color: v.color }}>{v.number}</span>
                <h3 style={styles.keyword}>{v.keyword}</h3>
                <p style={styles.cardDesc}>{v.desc}</p>
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
    maxWidth: '1280px',
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
  quote: {
    fontStyle: 'italic',
    color: 'var(--color-text-secondary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 'var(--spacing-6)',
  },
  card: {
    position: 'relative',
    backgroundColor: 'var(--color-bg-secondary)',
    border: '1px solid var(--color-border-primary)',
    borderRadius: 'var(--radius-xl)',
    overflow: 'hidden',
  },
  accent: {
    height: '4px',
    width: '100%',
  },
  cardInner: {
    padding: 'var(--spacing-8)',
  },
  number: {
    display: 'block',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--font-bold)',
    letterSpacing: '0.1em',
    marginBottom: 'var(--spacing-3)',
  },
  keyword: {
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-bold)',
    color: 'var(--color-text-primary)',
    margin: '0 0 var(--spacing-3)',
  },
  cardDesc: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-text-tertiary)',
    lineHeight: 'var(--leading-relaxed)',
    margin: 0,
  },
};
