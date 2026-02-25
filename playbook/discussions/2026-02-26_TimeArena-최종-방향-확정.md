# Time Arena — 최종 방향 확정 및 추가 결정

> **날짜**: 2026-02-26
> **참여**: 성민(감독), Messi(Opus), Guardiola(Opus), Modric(Sonnet)
> **상태**: 핵심 방향 확정 / 기능 범위 미결 (별도 파일)

---

## 확정 사항

| 항목 | 결정 |
|------|------|
| 스택 | **Expo** (React Native + Web 단일 코드베이스) |
| Phase 1 | **6주** — Expo Web (PWA, Vite 별도 불필요) |
| Phase 2 | **12주** — iOS/Android 빌드 + 스토어 제출 |
| 전체 기간 | **18주** |
| 방향 변경 | 고정 아님. 주기적 리마인드 후 감독 검토 |
| 목표 | 모바일 프로덕트 완성 경험 (수익화 부차적) |
| Casillas 체크포인트 | **2회** (시점 Guardiola 설계 예정) |
| GK 에이전트 | **Buffon → Casillas** 개명 완료 |

---

## Modric 기술 판단 요약

- Expo 동의. 단, **Vite PWA 별도 제작 불필요**
- Expo Web으로 6주 안에 Web 버전 먼저 배포 → PWA 단계 대체
- 마을 시각화: **SVG + Lottie/Reanimated** 조합
- **Week 1 Expo 스파이크** 필수 (환경 세팅 + 실기기 빌드 확인)
- EAS 계정 초기부터 세팅

---

## Messi 캡틴 당부

1. Week 2 끝에 폰에서 빈 화면이라도 빌드 돌아가는 상태 만들기
2. 스코프 조정 권한을 캡틴에게 위임
3. 주 1회 짧은 회고

---

## Guardiola 필수 조건 (감독 수용)

| 조건 | 상태 |
|------|------|
| 최소 기준 설정 (3일 연속 사용 등) | ✅ 수용 — 리마인드 구조로 대체 |
| Week 1 Expo 스파이크 | ✅ 수용 |
| 18주 전체 타임라인 | ✅ 확정 |
| 기능 범위 P0 유지 | 🔴 미결 — 별도 파일 검토 |
| Casillas 중간 검증 2회 | ✅ 확정 |

---

## 미결 사항

- **기능 범위**: `decisions/2026-02-26_TimeArena-기능범위-검토.md` 참조
- **리마인드 구조**: Guardiola 설계 예정 (API 오류로 재시도 필요)

---

## 에이전트 업데이트 내역

- `Buffon` → `Casillas` 전면 개명
  - `.claude/agents/casillas.md`
  - `playbook/prompts/core/casillas.md`
  - `CLAUDE.md` 전체 반영

---

*기록: Pedri (Haiku) — 2026-02-26*
