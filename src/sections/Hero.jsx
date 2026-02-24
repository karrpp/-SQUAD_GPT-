// ===================================================
// 성민 FC — Hero Section
// 첫 인상이 전부다. 3초 안에 팀 정체성을 각인시킨다.
// ===================================================

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 페이드인 효과
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section style={styles.hero}>
      {/* 배경 그라데이션 글로우 */}
      <div style={styles.bgGlow}></div>

      <div style={{
        ...styles.content,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}>
        {/* 로고 영역 */}
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>성민 FC</h1>
          <div style={styles.logoUnderline}></div>
        </div>

        {/* 서브 카피 */}
        <p style={styles.subtitle}>1인 스튜디오 + AI 에이전트 팀</p>

        {/* 미션 문구 */}
        <h2 style={styles.mission}>
          다양한 AI 자아와 협업하며,<br />
          사람들에게 진짜 도움이 되는<br />
          프로덕트를 만든다.
        </h2>

        {/* CTA */}
        <button
          style={styles.cta}
          onClick={handleScrollDown}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(14, 165, 233, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
          }}
        >
          팀 소개 보기
          <span style={styles.ctaArrow}>↓</span>
        </button>
      </div>

      {/* 스크롤 힌트 */}
      <div style={styles.scrollHint}>
        <div style={styles.scrollIndicator}></div>
      </div>
    </section>
  );
}

// ===================================================
// 스타일
// ===================================================

const styles = {
  hero: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-bg-primary)',
    overflow: 'hidden',
    padding: '2rem',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
  },

  // 배경 글로우 효과
  bgGlow: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0) 70%)',
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0,
  },

  content: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
    maxWidth: '900px',
    transition: 'all 0.8s ease-out',
  },

  // 로고
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
  },

  logo: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    fontWeight: '900',
    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '0.05em',
    textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
    margin: 0,
  },

  logoUnderline: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
    borderRadius: '2px',
  },

  // 서브 카피
  subtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: 'var(--color-text-tertiary)',
    fontWeight: '500',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin: 0,
  },

  // 미션 문구
  mission: {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    color: 'var(--color-text-primary)',
    fontWeight: '400',
    lineHeight: '1.6',
    textAlign: 'center',
    margin: '1rem 0',
    maxWidth: '700px',
  },

  // CTA 버튼
  cta: {
    marginTop: '2rem',
    padding: '1rem 2.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'var(--color-text-primary)',
    backgroundColor: 'transparent',
    border: '2px solid var(--color-primary)',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: 'var(--shadow-glow)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  ctaArrow: {
    fontSize: '1.25rem',
    transition: 'transform 0.3s ease',
  },

  // 스크롤 힌트
  scrollHint: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  },

  scrollIndicator: {
    width: '2px',
    height: '40px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '2px',
    opacity: 0.6,
    animation: 'scroll-hint 2s ease-in-out infinite',
  },
};
