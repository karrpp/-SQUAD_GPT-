# SQUAD GPT 홈페이지 — 현행 개발 규칙

> **대상**: `src/` 하위 React 웹앱
> **업데이트**: 2026-02-26
> **스택**: React 19 + Vite 7 + JavaScript

---

## 기술 스택

| 영역 | 기술 | 비고 |
|------|------|------|
| 언어 | JavaScript (ES Modules) | TypeScript 미사용 |
| 프레임워크 | React 19 | 함수 컴포넌트 + Hooks |
| 빌드 도구 | Vite 7 | `npm run dev` / `npm run build` |
| 라우팅 | react-router-dom v7 | SPA, BrowserRouter |
| 스타일 | CSS custom properties | `src/styles/tokens.css` 디자인 토큰 |
| 린팅 | ESLint 9 | react-hooks, react-refresh 플러그인 |
| 패키지 | npm | pnpm/yarn 사용하지 않음 |
| 배포 | `npm run build` → `dist/` | |

---

## 폴더 구조

```
src/
├── assets/          ← 정적 이미지, SVG
├── components/      ← 재사용 컴포넌트 (Navbar, PlayerCard 등)
├── data/            ← 정적 데이터 (agents.js 등)
├── pages/           ← 라우트 단위 페이지 (Home.jsx)
├── sections/        ← 페이지 내 섹션 (Hero, About, Squad 등)
├── styles/          ← 글로벌 스타일, 디자인 토큰
│   └── tokens.css   ← CSS 변수 (컬러, 타이포, 스페이싱)
├── App.jsx
├── index.css
└── main.jsx
```

---

## 코드 규칙

### 컴포넌트
```jsx
// ✅ 함수 컴포넌트 + 기본 export
export default function Hero() {
  return <section>...</section>;
}

// ✅ named export (재사용 컴포넌트)
export function PlayerCard({ name, role }) {
  return <div>...</div>;
}
```

### 스타일링
```jsx
// ✅ 디자인 토큰 사용 (tokens.css 변수)
const style = {
  color: 'var(--color-text-primary)',
  padding: 'var(--spacing-4)',
};

// ✅ CSS custom properties 우선
// ❌ 하드코딩 금지: color: '#fff', padding: '16px'

// ✅ 인라인 스타일 또는 CSS Modules
// ❌ 외부 UI 라이브러리 (TailwindCSS, MUI 등) 추가 금지
```

### 파일명
```
컴포넌트     → PascalCase  → PlayerCard.jsx
훅           → camelCase   → useAgents.js
데이터/유틸  → camelCase   → agents.js
스타일       → camelCase   → tokens.css
```

---

## Git 규칙

### 브랜치
- 브랜치: `main` 단일 운영
- 직접 push 허용 (1인 스튜디오)
- 대규모 변경 시 feature 브랜치 생성 후 PR (선택)

### 커밋 메시지
```
한국어 커밋 허용. 의미 단위로 커밋.

예시:
홈페이지 Hero 섹션 구현
네비게이션 반응형 처리 — 모바일 브레이크포인트 추가
Squad 섹션 카드 레이아웃 수정

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

---

## 디자인 토큰 (tokens.css)

| 카테고리 | 변수 패턴 | 예시 |
|----------|-----------|------|
| 컬러 | `--color-{role}-{variant}` | `--color-primary`, `--color-bg-secondary` |
| 타이포 | `--text-{size}` | `--text-xl`, `--text-3xl` |
| 스페이싱 | `--spacing-{n}` | `--spacing-4` (16px), `--spacing-8` (32px) |
| 반경 | `--radius-{size}` | `--radius-md`, `--radius-full` |
| 그림자 | `--shadow-{size}` | `--shadow-md`, `--shadow-glow` |
| 트랜지션 | `--transition-{speed}` | `--transition-base` (200ms) |

---

## 주요 명령어

```bash
npm run dev      # 개발 서버 (localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run lint     # ESLint 검사
npm run preview  # 빌드 결과 로컬 미리보기
```

---

## 미래 프로덕트 전환 시

React+Vite에서 Next.js 스택으로 전환할 때는 `TECH_STACK.md`, `CODE_STYLE.md`, `ARCHITECTURE.md`를 참조한다.
