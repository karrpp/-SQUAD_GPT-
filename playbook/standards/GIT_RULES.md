# 🌿 Git 규칙

> 브랜치 전략, 커밋 컨벤션, PR 규칙

---

## 브랜치 전략

```
main          ← 프로덕션 (배포되는 코드)
  └── dev     ← 개발 통합 브랜치
       ├── feat/기능명      ← 새 기능
       ├── fix/버그명        ← 버그 수정
       ├── refactor/대상     ← 리팩토링
       └── docs/문서명       ← 문서 작업
```

### 규칙
- `main`에 직접 푸시 금지
- 모든 변경은 `dev`에서 분기 → PR → 머지
- `dev` → `main` 머지는 배포 준비 완료 시에만

---

## 커밋 메시지 컨벤션

```
<type>(<scope>): <subject>

[optional body]
[optional footer]
```

### Type
```
feat:     새로운 기능
fix:      버그 수정
refactor: 리팩토링 (기능 변화 없음)
style:    코드 포맷팅 (기능 변화 없음)
docs:     문서 수정
test:     테스트 코드
chore:    빌드, 설정 변경
ai:       AI 프롬프트 또는 모델 관련 변경
```

### Scope (선택)
```
(ui), (api), (db), (auth), (ai), (config)
```

### 에이전트 태그
```
feat(ui): 일지 입력 폼 구현 [claude-code]
fix(api): 인증 토큰 갱신 오류 수정 [codex]
refactor(db): entries 테이블 인덱스 최적화
```

### 예시
```
feat(ui): 일지 입력 폼 구현 [claude-code]
- 제목, 카테고리, 내용 3필드 입력
- 카테고리 enum: daily_log, meeting, sop
- 30초 내 입력 완료 목표 UX

fix(api): AI 요약 호출 시 타임아웃 처리 [claude-code]
- 30초 타임아웃 설정
- 타임아웃 시 사용자에게 재시도 안내

docs: ARCHITECTURE.md 업데이트
- 벡터 DB 구조 추가
- 비용 추정 테이블 갱신
```

---

## PR 규칙

### PR 제목
```
[feat] 일지 입력 폼 구현
[fix] AI 요약 타임아웃 처리
```

### PR 본문 템플릿
```markdown
## 변경 사항
- (무엇을 했는지)

## 관련 이슈
- #이슈번호

## 담당 에이전트
- [ ] Claude Code
- [ ] GPT Codex
- [ ] 수동 작성

## 체크리스트
- [ ] 코드 컨벤션 준수 (CODE_STYLE.md)
- [ ] 타입 에러 없음
- [ ] 테스트 통과
- [ ] 문서 업데이트 (필요 시)
```

---

## .gitignore (공용)

```
node_modules/
.next/
out/
build/
.env
.env*.local
.vercel
*.tsbuildinfo
next-env.d.ts
.DS_Store
supabase/.temp/
```
