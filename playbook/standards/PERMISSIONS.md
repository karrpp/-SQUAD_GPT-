# 권한 허용 목록 (settings.json 추가 대상)

Claude Code가 접근할 때 매번 권한을 물어보는 경로/명령 목록.
이 파일에 누적 기록 후 settings.json에 일괄 반영.

---

## 대기 중 (미반영)

| 경로/명령 | 용도 | 발생일 |
|-----------|------|--------|
| `C:\Users\jug71\OneDrive - arshexa\문서\SQUADv2\` | 옵시디언 볼트 전체 | 2026-03-06 |

---

## 반영 완료

| 경로/명령 | 반영일 |
|-----------|--------|
| — | — |

---

## settings.json 추가 방법

옵시디언 볼트 상위 경로 하나만 허용하면 하위 전체 커버됨:

```json
{
  "model": "sonnet",
  "allowedPaths": [
    "C:\Users\jug71\OneDrive - arshexa\문서\SQUADv2\\"
  ]
}
```
