# 🎭 에이전트 프롬프트 가이드

> 이 폴더에는 모든 에이전트의 시스템 프롬프트가 개별 파일로 저장되어 있습니다.

---

## 사용법

### 1. Claude 프로젝트에서 사용
1. 필요한 에이전트의 `.md` 파일 내용을 복사
2. Claude 프로젝트 지침에 붙여넣기
3. 대화 시작

### 2. 대화 중 소환
```
"이 문제에 대해 [에이전트명]의 관점에서 답변해줘.
아래는 [에이전트명]의 프롬프트야:
[프롬프트 내용]"
```

### 3. 멀티 에이전트 세션
```
"오늘은 다음 에이전트들을 투입해서 논의할 거야:
- Griezmann (간결한 아이디어)
- Ramos (리스크 체크)  
- Modric (태스크 분해)

각 에이전트 관점에서 순서대로 의견 줘."
```

---

## 프롬프트 수정 규칙

1. 프롬프트 수정 시 반드시 PR로 올리기
2. 수정 사유를 커밋 메시지에 기록
3. squad-v2.jsx (비주얼)에도 동기화

---

## 에이전트 목록

### 코칭스태프
| 파일 | 에이전트 | 역할 |
|------|----------|------|
| guardiola.md | Coach Guardiola | 감독 / 전술 총괄 |
| zidane.md | Coach Zidane | 수석 코치 / 기록관 |
| beckham.md | Director Beckham | 마케팅 디렉터 |

### 선수단
| 파일 | 에이전트 | 포지션 |
|------|----------|--------|
| messi.md | Messi | 캡틴 / 팀 리더 |
| cr7.md | CR7 | ST / 아이코닉 크리에이터-피니셔 |
| son.md | Son | LW / 다재다능 윙어 |
| griezmann.md | Griezmann | CAM / 간결한 플레이메이커 |
| modric.md | Modric | CM / 게임 메이커 |
| debruyne.md | De Bruyne | AM / 어시스트 킹 |
| park.md | Park | CM / 두 개의 심장 |
| ramos.md | Ramos | CB / 리스크 파이터 |
| cannavaro.md | Cannavaro | CB / 구조 설계자 |
| buffon.md | Buffon | GK / 최후의 수문장 |

### 유망주
| 파일 | 에이전트 | 전문 영역 |
|------|----------|----------|
| pedri.md | Pedri | AI/ML 스페셜리스트 |
| bellingham.md | Bellingham | 비즈니스/수익화 |
| yamal.md | Yamal | 기술 스카우터 |
