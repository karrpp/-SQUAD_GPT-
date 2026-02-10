# 🏛️ 아키텍처 설계 원칙

> 모든 성민 FC 프로젝트에 적용되는 설계 철학

---

## 핵심 원칙

### 1. AI 최소 호출 (AI-Minimal)
```
데이터 저장 시 → AI 호출하지 않음 (비용 $0)
사용자 요청 시 → AI 호출 (온디맨드)
동일 요청 시   → 캐시에서 반환 (재호출 방지)
```

### 2. 레이어드 아키텍처
```
┌──────────────────────────┐
│   클라이언트 (Next.js)     │  UI, 사용자 인터랙션
├──────────────────────────┤
│   API 레이어 (Routes)      │  인증, 검증, 라우팅
├──────────────────────────┤
│   서비스 레이어             │  비즈니스 로직
├──────────────────────────┤
│   AI 레이어 (온디맨드)      │  LLM 호출, 프롬프트 관리
├──────────────────────────┤
│   데이터 레이어 (Supabase)  │  DB, 벡터, 스토리지
└──────────────────────────┘
```

### 3. 모델 분리 전략
```
간단한 작업  →  Haiku  (저비용, 빠른 응답)
복잡한 분석  →  Sonnet (균형)
대안 관점    →  GPT    (멀티 모델)
```

### 4. 프로그레시브 확장
```
v1: 개인 사용 (인증 최소, 단일 사용자)
v2: 멀티 유저 (인증 추가, 역할 분리)
v3: 고도화   (알림, 연동, 모바일 최적화)
```
각 단계에서 이전 코드를 뜯어고치지 않고 확장할 수 있는 구조로 설계한다.

---

## 폴더 구조 패턴

### Next.js App Router 표준
```
src/
├── app/
│   ├── (public)/           # 인증 불필요 페이지
│   │   ├── login/
│   │   └── page.tsx        # 랜딩
│   ├── (protected)/        # 인증 필요 페이지
│   │   ├── dashboard/
│   │   ├── entries/
│   │   └── layout.tsx      # 인증 체크 레이아웃
│   ├── api/
│   │   ├── entries/        # CRUD
│   │   └── ai/             # AI 호출 (온디맨드)
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/                 # 범용 (Button, Input...)
│   ├── features/           # 기능별 (EntryForm, SkillMap...)
│   └── layout/             # 레이아웃 (Header, Sidebar...)
│
├── hooks/                  # useEntries, useAI...
├── lib/
│   ├── supabase/           # Supabase 클라이언트 & 쿼리
│   ├── ai/                 # AI API 클라이언트 & 프롬프트
│   └── utils/              # 유틸리티 함수
│
├── types/                  # 공유 타입 정의
└── config/                 # 환경변수, 상수
```

---

## 데이터베이스 설계 원칙

### 1. 테이블 구조
```sql
-- 모든 테이블 공통 컬럼
id          UUID PRIMARY KEY DEFAULT gen_random_uuid()
created_at  TIMESTAMPTZ DEFAULT NOW()
updated_at  TIMESTAMPTZ DEFAULT NOW()
```

### 2. RLS (Row Level Security)
```sql
-- 모든 테이블에 RLS 활성화
ALTER TABLE entries ENABLE ROW LEVEL SECURITY;

-- 본인 데이터만 접근
CREATE POLICY "Users can view own entries"
  ON entries FOR SELECT
  USING (auth.uid() = user_id);
```

### 3. 벡터 검색 (pgvector)
```sql
-- 임베딩 저장
embedding VECTOR(1536)

-- 시맨틱 검색
SELECT * FROM entries
ORDER BY embedding <=> query_embedding
LIMIT 5;
```

---

## 에러 핸들링 패턴

```typescript
// lib/errors.ts
export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 400
  ) {
    super(message);
  }
}

// 사용
throw new AppError('ENTRY_NOT_FOUND', '일지를 찾을 수 없습니다.', 404);
throw new AppError('AI_TIMEOUT', 'AI 응답 시간이 초과되었습니다.', 504);
```

---

## 성능 원칙

1. **서버 컴포넌트 우선** — 클라이언트 컴포넌트는 인터랙션이 필요한 곳만
2. **캐싱 적극 활용** — AI 결과, 자주 조회되는 데이터
3. **점진적 로딩** — 스켈레톤 UI, 서스펜스 바운더리
4. **이미지 최적화** — next/image 사용
