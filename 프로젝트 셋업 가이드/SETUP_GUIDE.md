# 🛠️ Claude 프로젝트 세팅 가이드

> 이 문서를 따라하면 5분 안에 "성민 FC" Claude 프로젝트가 완성됩니다.

---

## Step 1: 프로젝트 생성

1. claude.ai 접속
2. 좌측 사이드바 → **"프로젝트"** 클릭
3. **"새 프로젝트 만들기"** 클릭
4. 프로젝트 이름: `성민 FC — AI Agent Squad`
5. 설명: `축구팀 형식의 멀티 에이전트 시스템. 프로덕트 설계/개발/운영.`

---

## Step 2: 프로젝트 지침 설정

1. 프로젝트 설정 → **"프로젝트 지침"** (Custom Instructions)
2. `CLAUDE_PROJECT_INSTRUCTIONS.md`의 **전체 내용**을 복사해서 붙여넣기
3. 저장

---

## Step 3: 프로젝트 지식 업로드

프로젝트 설정 → **"프로젝트 지식"** (Knowledge) 에 아래 파일들을 업로드:

### 필수 (7개)
| 순서 | 파일명 | 설명 |
|------|--------|------|
| 1 | `squad-v2.jsx` | 스쿼드 비주얼 & 모든 에이전트 상세 프롬프트 |
| 2 | `ARCHITECTURE.md` | 아키텍처 설계 원칙 |
| 3 | `CODE_STYLE.md` | 코드 컨벤션 |
| 4 | `TECH_STACK.md` | 기술 스택 |
| 5 | `GIT_RULES.md` | Git 규칙 |
| 6 | `PROCESS.md` | 경기 운영법 |
| 7 | `KICKOFF.md` | 프로젝트 킥오프 템플릿 |

### 선택 (2개)
| 파일명 | 설명 |
|--------|------|
| `RETROSPECTIVE.md` | 회고 템플릿 |
| `company-setup.jsx` | 구단 창단 로드맵 비주얼 |

---

## Step 4: 테스트

프로젝트에서 새 대화를 시작하고 다음을 입력해보세요:

### 테스트 1: 에이전트 소환
```
CR7 관점에서 우리 첫 프로젝트(신입사원 AI 에이전트)의 
임팩트 포인트를 잡아줘
```

### 테스트 2: 풀 스쿼드
```
신입사원 AI 에이전트의 일지 입력 화면을 설계하려고 해.
풀 스쿼드 투입해서 경기 운영법 순서대로 의견 줘.
```

### 테스트 3: 코드 컨벤션 확인
```
entries API 라우트를 만들려고 하는데, 
우리 코드 컨벤션에 맞게 구조를 잡아줘.
```

---

## Step 5: 프로젝트별 확장

나중에 개별 프로젝트용 Claude 프로젝트를 추가로 만들 수 있습니다:

- `성민 FC — 신입사원 AI 에이전트` (프로젝트별)
- `성민 FC — 블로그` (콘텐츠 전용)

이때 각 프로젝트의 지침에는:
1. 메인 프로젝트(성민 FC)의 핵심 규칙을 간략히 참조
2. 해당 프로젝트 전용 컨텍스트 추가
3. 투입 에이전트 목록 명시

---

## 파일 위치 정리

다운로드한 파일들의 원래 위치:

```
다운로드 폴더/
├── CLAUDE_PROJECT_INSTRUCTIONS.md   ← Step 2에서 사용
├── squad-v2.jsx                     ← Step 3에서 업로드
├── playbook/
│   ├── PROCESS.md                   ← Step 3에서 업로드
│   ├── standards/
│   │   ├── ARCHITECTURE.md          ← Step 3에서 업로드
│   │   ├── CODE_STYLE.md            ← Step 3에서 업로드
│   │   ├── TECH_STACK.md            ← Step 3에서 업로드
│   │   └── GIT_RULES.md             ← Step 3에서 업로드
│   └── templates/
│       ├── KICKOFF.md               ← Step 3에서 업로드
│       └── RETROSPECTIVE.md         ← Step 3에서 업로드 (선택)
└── company-setup.jsx                ← Step 3에서 업로드 (선택)
```
