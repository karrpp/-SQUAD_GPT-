# 📋 Playbook — 성민 FC 운영 매뉴얼

> 이 리포는 성민 FC의 모든 프로젝트에 공유되는 팀 철학, 프로세스, 규칙의 중앙 저장소입니다.

## 구조

```
playbook/
├── README.md                 # 이 파일
├── SQUAD.md                  # 에이전트 스쿼드 정의 & 역할
├── PROCESS.md                # 경기 운영법 (의사결정 흐름)
│
├── standards/                # 코드 & 개발 규칙
│   ├── CODE_STYLE.md         # 코드 컨벤션 & 포맷팅
│   ├── TECH_STACK.md         # 공용 기술 스택
│   ├── GIT_RULES.md          # Git 브랜치 전략 & 커밋 규칙
│   └── ARCHITECTURE.md       # 아키텍처 설계 원칙
│
├── prompts/                  # 에이전트 시스템 프롬프트
│   ├── README.md             # 프롬프트 사용법
│   ├── guardiola.md          # Coach Guardiola
│   ├── zidane.md             # Coach Zidane
│   ├── beckham.md            # Director Beckham
│   ├── messi.md              # Captain Messi
│   ├── cr7.md                # CR7
│   ├── son.md                # Son
│   ├── griezmann.md          # Griezmann
│   ├── modric.md             # Modric
│   ├── debruyne.md           # De Bruyne
│   ├── park.md               # Park
│   ├── ramos.md              # Ramos
│   ├── cannavaro.md          # Cannavaro
│   ├── buffon.md             # Buffon
│   ├── pedri.md              # Pedri (벤치)
│   ├── bellingham.md         # Bellingham (벤치)
│   └── yamal.md              # Yamal (벤치)
│
└── templates/                # 프로젝트 템플릿
    ├── KICKOFF.md            # 새 프로젝트 킥오프 체크리스트
    ├── RETROSPECTIVE.md      # 회고 템플릿
    └── PROJECT_README.md     # 프로젝트 README 템플릿
```

## 사용법

### 새 프로젝트 시작할 때
1. `templates/KICKOFF.md`를 복사해서 프로젝트 리포에 넣기
2. 체크리스트를 따라가며 킥오프 진행
3. `standards/`의 규칙을 프로젝트에 적용

### 에이전트 소환할 때
1. `prompts/`에서 필요한 에이전트의 프롬프트를 가져와서
2. Claude 프로젝트 지침 또는 대화에 삽입
3. `PROCESS.md`의 순서에 따라 운영

### 규칙 변경할 때
1. PR을 올려서 변경 사항 기록
2. Coach Zidane이 변경 이력 기록
3. 모든 프로젝트에 공지
