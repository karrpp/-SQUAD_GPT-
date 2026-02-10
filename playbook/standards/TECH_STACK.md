# 🧰 공용 기술 스택

> 모든 성민 FC 프로젝트의 기본 기술 스택

---

## Core Stack

| 영역 | 기술 | 선택 이유 |
|------|------|----------|
| **언어** | TypeScript | 타입 안전성, 개발 생산성 |
| **프레임워크** | Next.js 14+ (App Router) | 풀스택, SSR/SSG, API Routes, Vercel 배포 |
| **스타일링** | TailwindCSS | 유틸리티 기반, 빠른 개발, 일관된 디자인 |
| **UI 라이브러리** | shadcn/ui | 커스터마이징 가능, TailwindCSS 기반 |
| **DB** | Supabase (PostgreSQL) | 무료 티어, 인증 내장, 실시간 기능 |
| **벡터 DB** | pgvector (Supabase) | 별도 서비스 없이 시맨틱 검색 |
| **인증** | Supabase Auth | DB와 통합, 소셜 로그인 지원 |
| **배포** | Vercel | Next.js 최적화, 무료 티어, 자동 배포 |
| **모바일** | PWA | 별도 앱 없이 모바일 대응 |

## AI Stack

| 용도 | 모델 | 이유 |
|------|------|------|
| 간단한 요약/분류 | Claude Haiku 4.5 | 최저 비용, 빠른 응답 |
| 복잡한 분석/추론 | Claude Sonnet 4.5 | 비용 대비 최고 성능 |
| 리포트/대안 관점 | GPT-5.2 | 멀티 모델 전략, 다양한 시각 |
| 임베딩 | Supabase/OpenAI Embeddings | pgvector와 통합 |

### AI 모델 선택 원칙
```
비용 낮은 작업 (요약, 분류, 태그)  → Haiku  (~$0.003/회)
비용 중간 작업 (분석, 추천, 매칭)  → Sonnet (~$0.02/회)
비용 높은 작업 (깊은 추론, 리포트) → Sonnet/GPT (~$0.03/회)
```

## Dev Tools

| 도구 | 용도 |
|------|------|
| VS Code | 메인 에디터 |
| Claude Code | 터미널 AI 에이전트 (핵심 개발) |
| GPT Codex | 병렬 AI 에이전트 (반복 작업) |
| GitHub | 코드 저장소 & 협업 |
| Vercel | 배포 & 프리뷰 |

## 패키지 매니저

```bash
# pnpm 사용 (npm/yarn 대신)
pnpm install
pnpm dev
pnpm build
```

## 프로젝트 초기화 명령어

```bash
# 새 프로젝트 시작 시
pnpx create-next-app@latest [project-name] \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# shadcn/ui 추가
pnpx shadcn@latest init

# Supabase 클라이언트
pnpm add @supabase/supabase-js

# AI SDK
pnpm add @anthropic-ai/sdk openai
```

---

## 프로젝트별 커스텀

기본 스택은 위와 같지만, 프로젝트 특성에 따라 추가 기술을 도입할 수 있다.
추가 시 반드시 `KICKOFF.md`에 기록하고 팀에 공유한다.
