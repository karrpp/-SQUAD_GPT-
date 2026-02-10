# 🎨 코드 컨벤션 & 스타일 가이드

> 모든 성민 FC 프로젝트에 적용되는 코드 작성 규칙

---

## 언어 & 포맷

### TypeScript 필수
- 모든 프로젝트는 TypeScript 사용
- `strict: true` 설정
- `any` 타입 사용 금지 (불가피한 경우 주석으로 사유 기록)

### 포맷팅
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

### 린팅
```json
// ESLint 핵심 규칙
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

---

## 네이밍 규칙

### 파일 & 폴더
```
components/          → PascalCase    → EntryForm.tsx
hooks/               → camelCase     → useEntries.ts
lib/                 → camelCase     → apiClient.ts
types/               → camelCase     → entry.types.ts
app/api/             → kebab-case    → /api/entries/route.ts
```

### 변수 & 함수
```typescript
// 변수: camelCase
const entryCount = 10;

// 상수: UPPER_SNAKE_CASE
const MAX_ENTRIES_PER_PAGE = 20;

// 함수: camelCase + 동사로 시작
function fetchEntries() {}
function createEntry() {}
function handleSubmit() {}

// 컴포넌트: PascalCase
function EntryCard() {}
function DashboardLayout() {}

// 타입/인터페이스: PascalCase + 접미사 없음
type Entry = { ... }
type User = { ... }
interface EntryFormProps { ... }

// Enum: PascalCase + UPPER_SNAKE_CASE 값
enum EntryCategory {
  DAILY_LOG = 'daily_log',
  MEETING_NOTE = 'meeting_note',
  SOP = 'sop',
}
```

### 데이터베이스
```sql
-- 테이블: snake_case (복수형)
entries, users, sop_documents

-- 컬럼: snake_case
created_at, updated_at, user_id, entry_content

-- 인덱스: idx_테이블_컬럼
idx_entries_user_id, idx_entries_created_at
```

---

## 컴포넌트 구조

### React 컴포넌트 패턴
```typescript
// 1. imports
import { useState } from 'react';
import { Entry } from '@/types/entry.types';

// 2. types (컴포넌트 전용)
interface EntryCardProps {
  entry: Entry;
  onEdit: (id: string) => void;
}

// 3. component
export function EntryCard({ entry, onEdit }: EntryCardProps) {
  // 3a. hooks
  const [isExpanded, setIsExpanded] = useState(false);

  // 3b. handlers
  const handleClick = () => setIsExpanded(!isExpanded);

  // 3c. render
  return (
    <div onClick={handleClick}>
      {/* ... */}
    </div>
  );
}
```

### 폴더 구조 (프로젝트 내)
```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # 인증 필요 페이지 그룹
│   ├── api/                # API Routes
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/                 # 범용 UI (Button, Input, Card...)
│   ├── features/           # 기능별 컴포넌트 (EntryForm, Dashboard...)
│   └── layout/             # 레이아웃 (Header, Sidebar, Footer...)
│
├── hooks/                  # 커스텀 훅
├── lib/                    # 유틸리티, API 클라이언트
├── types/                  # TypeScript 타입
└── styles/                 # 글로벌 스타일 (최소화)
```

---

## API 설계 규칙

### RESTful 엔드포인트
```
GET     /api/entries          → 목록 조회
GET     /api/entries/:id      → 단건 조회
POST    /api/entries          → 생성
PATCH   /api/entries/:id      → 수정
DELETE  /api/entries/:id      → 삭제
POST    /api/ai/summarize     → AI 요약 (온디맨드)
POST    /api/ai/analyze       → AI 분석 (온디맨드)
```

### 응답 형식
```typescript
// 성공
{
  "data": { ... },
  "meta": { "total": 100, "page": 1 }
}

// 에러
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "제목은 필수입니다.",
    "details": [...]
  }
}
```

---

## 주석 & 문서화

### 주석 규칙
```typescript
// ✅ 좋은 주석: WHY를 설명
// Haiku 모델은 요약에 충분하고 비용이 1/4 수준
const SUMMARY_MODEL = 'claude-haiku-4-5';

// ❌ 나쁜 주석: WHAT을 반복
// 엔트리를 가져온다
const entries = await fetchEntries();
```

### 함수 문서화
```typescript
/**
 * 사용자의 축적된 데이터를 AI로 분석하여 역량맵을 생성한다.
 * 
 * 온디맨드: 사용자가 '분석' 버튼을 눌렀을 때만 호출됨.
 * 모델: Claude Sonnet 4.5 (비용 ~$0.02/회)
 * 
 * @param userId - 분석 대상 사용자 ID
 * @param dateRange - 분석 기간 (시작일~종료일)
 * @returns 역량맵, 성장 추이, 할일 추천
 */
async function analyzeCompetency(
  userId: string,
  dateRange: DateRange
): Promise<CompetencyReport> { ... }
```

---

## AI 코드 규칙

### 에이전트별 코드 작성 시
```
Claude Code가 작성한 코드 → 커밋 메시지에 [claude-code] 태그
GPT Codex가 작성한 코드    → 커밋 메시지에 [codex] 태그
수동 작성                  → 태그 없음
```

### AI 호출 코드 패턴
```typescript
// ✅ 올바른 패턴: 온디맨드 호출
export async function POST(request: Request) {
  // 1. 사용자 인증 확인
  const user = await authenticate(request);
  
  // 2. DB에서 데이터 조회
  const entries = await getEntries(user.id, dateRange);
  
  // 3. AI 호출 (여기서만 비용 발생)
  const result = await callClaudeAPI({
    model: 'claude-haiku-4-5',
    messages: [{ role: 'user', content: buildPrompt(entries) }],
  });
  
  // 4. 결과 캐싱 (동일 요청 재호출 방지)
  await cacheResult(user.id, result);
  
  return Response.json({ data: result });
}

// ❌ 잘못된 패턴: 자동 호출
// 데이터 저장할 때마다 AI 호출하지 않는다!
```

---

## Git 연동

상세 Git 규칙은 [GIT_RULES.md](./GIT_RULES.md)를 참고.
