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
            e.currentTarget.style.backgroundColor = '#0EA5E9';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(14, 165, 233, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(14, 165, 233, 0.3)';
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
    backgroundColor: '#09090B',
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
    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '0.05em',
    textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  logoUnderline: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #FFD700, transparent)',
    borderRadius: '2px',
  },

  // 서브 카피
  subtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    color: '#94A3B8',
    fontWeight: '500',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  // 미션 문구
  mission: {
    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: '1.6',
    textAlign: 'center',
    margin: '1rem 0',
    maxWidth: '700px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  // CTA 버튼
  cta: {
    marginTop: '2rem',
    padding: '1rem 2.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    border: '2px solid #0EA5E9',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
    backgroundColor: '#0EA5E9',
    borderRadius: '2px',
    opacity: 0.6,
    animation: 'scroll-hint 2s ease-in-out infinite',
  },
};

// CSS 애니메이션 (글로벌)
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes scroll-hint {
      0%, 100% {
        opacity: 0.3;
        transform: translateY(0);
      }
      50% {
        opacity: 0.8;
        transform: translateY(10px);
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        padding: 1rem;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}
