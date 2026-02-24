// ===================================================
// 성민 FC — About Section
// 구단 정체성. 왜 만들었는지, 무엇인지.
// ===================================================

export default function About() {
  const cards = [
    {
      icon: '👤',
      title: '1인 스튜디오',
      desc: '성민 혼자 기획하고, 개발하고, 운영한다. 팀이 없어서 느린 게 아니라 AI 에이전트와 함께라 더 빠르다.',
    },
    {
      icon: '🤖',
      title: 'AI 에이전트 팀',
      desc: '11명의 AI 에이전트가 각자의 역할로 협업한다. Messi가 방향을 잡고, CR7이 아이디어를 내고, Buffon이 지킨다.',
    },
    {
      icon: '🌐',
      title: '오픈 빌드',
      desc: '만드는 과정을 전부 공개한다. 왜 그 결정을 했는지, 어떻게 실패했는지, 무엇을 배웠는지.',
    },
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.label}>ABOUT</span>
          <h2 style={styles.title}>
            1인 스튜디오 +<br />AI 에이전트 팀
          </h2>
          <p style={styles.desc}>
            성민 FC는 사람과 AI가 진짜로 협업하는 실험이다.<br />
            다양한 AI 자아와 함께, 사람들에게 진짜 도움이 되는 프로덕트를 만든다.
          </p>
        </div>

        <div style={styles.grid}>
          {cards.map((card) => (
            <div key={card.title} style={styles.card}>
              <div style={styles.cardIcon}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDesc}>{card.desc}</p>
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
    backgroundColor: 'var(--color-bg-secondary)',
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
    lineHeight: 'var(--leading-tight)',
    margin: '0 0 var(--spacing-6)',
  },
  desc: {
    fontSize: 'var(--text-lg)',
    color: 'var(--color-text-tertiary)',
    lineHeight: 'var(--leading-relaxed)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--spacing-6)',
  },
  card: {
    backgroundColor: 'var(--color-bg-tertiary)',
    border: '1px solid var(--color-border-primary)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--spacing-8)',
  },
  cardIcon: {
    fontSize: '2rem',
    marginBottom: 'var(--spacing-4)',
  },
  cardTitle: {
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-semibold)',
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
