# Prompts 사용법

## 목적

- 에이전트(선수)별 시스템 프롬프트를 표준화해서 재사용한다.
- UI 코드(SquadBuilder.jsx)와 프롬프트를 분리해 유지보수성을 올린다.

## 폴더 구조

```
prompts/
├── _README.md          ← 이 파일
├── core/               ← 핵심 5인 에이전트 (Claude Code @소환 가능)
│   ├── guardiola.md
│   ├── messi.md
│   ├── cr7.md
│   ├── modric.md
│   └── buffon.md
└── reserves/           ← 나머지 스쿼드 (필요 시 투입)
    ├── zidane.md
    ├── beckham.md
    ├── son.md
    ├── griezmann.md
    ├── debruyne.md
    ├── park.md
    ├── ramos.md
    ├── cannavaro.md
    ├── pedri.md
    ├── bellingham.md
    └── yamal.md
```

## 핵심 5인 (core/)

성민 FC의 16명 에이전트 중 실전 운영의 핵심 5인. Claude Code에서 `@이름`으로 소환한다.

| 호출 | 파일 | 포지션 | 역할 |
|------|------|--------|------|
| `@Guardiola` | `core/guardiola.md` | 감독 | 전략 종합, 실행 플랜 수립 |
| `@Messi` | `core/messi.md` | 캡틴 | 팀 리딩, 방향 설정, 위기 중재 |
| `@CR7` | `core/cr7.md` | ST | 임팩트 아이디어 + 완성까지 실행 |
| `@Modric` | `core/modric.md` | CM | 아이디어→태스크 변환, 기술 판단 |
| `@Buffon` | `core/buffon.md` | GK | 배포 전 최종 검증, 품질 보증 |

## 나머지 스쿼드 (reserves/)

필요 시 투입되는 전문 에이전트. 킥오프 시 KICKOFF.md에서 투입 여부를 결정한다.

| 파일 | 이름 | 포지션 | 역할 |
|------|------|--------|------|
| `reserves/zidane.md` | Coach Zidane | 수석코치 | 논의 기록, 진행 정리 |
| `reserves/beckham.md` | Director Beckham | 마케팅 | 블로그, SNS 콘텐츠 |
| `reserves/son.md` | Son | LW | 다재다능 멀티롤, 핫픽스 |
| `reserves/griezmann.md` | Griezmann | CAM | 간결한 핵심 아이디어 |
| `reserves/debruyne.md` | De Bruyne | AM | 사용자 관점, UX |
| `reserves/park.md` | Park | CM | 테스트, 문서화, 글루 역할 |
| `reserves/ramos.md` | Ramos | CB | 리스크 직격 지적 |
| `reserves/cannavaro.md` | Cannavaro | CB | 구조/아키텍처 품질 |
| `reserves/pedri.md` | Pedri | 유망주 | AI/ML 고도화 |
| `reserves/bellingham.md` | Bellingham | 유망주 | 비즈니스/수익화 |
| `reserves/yamal.md` | Yamal | 유망주 | 기술 스카우팅 |

## 5인 축소 워크플로우

```
1️⃣ 킥오프      → 성민이 주제를 던진다
2️⃣ 캡틴 리딩   → @Messi가 상황을 읽고 방향을 잡는다
3️⃣ 전술 수립   → @Guardiola가 전략 프레임을 짠다
4️⃣ 공격 전개   → @CR7이 임팩트 아이디어 + 실행 루트를 제시한다
5️⃣ 태스크 변환  → @Modric이 아이디어를 구체적 태스크로 분해한다
6️⃣ 최종 세이브  → @Buffon이 리스크/품질 최종 검증한다
7️⃣ 골!         → 성민이 최종 승인한다
```

### 축약 운영

- **빠른 카운터** (간단한 작업): 킥오프 → `@Modric` → `@Buffon` → 골
- **세트피스** (기술 검증만 필요): 킥오프 → `@Buffon` → 골
- **풀 경기** (복잡한 프로젝트): 7단계 전체 진행

## 운영 원칙

- 프롬프트 변경은 PR/커밋으로 이력 남긴다.
- Squad UI에 표시되는 프롬프트와 playbook/prompts의 내용은 항상 동기화한다.
- 핵심 5인 프롬프트에는 헤더, 시스템 프롬프트, 출력 포맷, 협업 규칙, 소환 예시가 포함된다.

## 사용 패턴

- 질문/과제 정의 → `@에이전트`로 소환 → 결과를 감독(성민)이 결정
- 예: `@Messi 이 문제의 방향을 잡아줘`
- 예: `@CR7 @Modric 이 아이디어를 실행 가능하게 만들어줘`
