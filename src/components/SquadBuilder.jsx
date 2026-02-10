import { useState } from "react";
import PlayerCard from "./PlayerCard";
import {
  formationPositions,
  workflowSteps,
  getAllPlayers,
  getFieldPlayers,
  getSections,
} from "../data/agents";

export default function SquadBuilder() {
  const [activeView, setActiveView] = useState("squad");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const allPlayers = getAllPlayers();
  const fieldPlayers = getFieldPlayers();
  const sections = getSections();

  const togglePlayer = (name) =>
    setSelectedPlayer(selectedPlayer === name ? null : name);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "#FAFAFA",
        fontFamily: "'SF Pro Display', -apple-system, sans-serif",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div
          style={{
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 20,
            background: "#FFD70020",
            color: "#FFD700",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.06em",
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          ⚽ 성민 FC — AI Agent Squad v2.0
        </div>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            margin: "0 0 4px",
            background: "linear-gradient(135deg, #FFD700, #F59E0B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          성민 FC 스쿼드
        </h1>
        <p style={{ color: "#71717A", fontSize: 12, margin: 0 }}>
          {allPlayers.length}명 — 포메이션 4-3-3 변형 | 선수를 클릭하면 프롬프트
          확인
        </p>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
          background: "#18181B",
          borderRadius: 10,
          padding: 3,
          maxWidth: 420,
          margin: "0 auto 20px",
        }}
      >
        {[
          { id: "squad", label: "⚽ 포메이션" },
          { id: "roster", label: "📋 로스터" },
          { id: "workflow", label: "🔄 경기 운영" },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveView(v.id)}
            style={{
              flex: 1,
              padding: "9px 6px",
              borderRadius: 7,
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              transition: "all 0.2s",
              background: activeView === v.id ? "#27272A" : "transparent",
              color: activeView === v.id ? "#FAFAFA" : "#71717A",
            }}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Formation View */}
      {activeView === "squad" && (
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "155%",
              borderRadius: 20,
              background:
                "linear-gradient(180deg, #0F4D1A 0%, #0A3813 40%, #0A3813 60%, #0F4D1A 100%)",
              border: "3px solid #1A6B2A",
              overflow: "hidden",
            }}
          >
            {/* Field markings */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "8%",
                right: "8%",
                height: 1,
                background: "#1A6B2A60",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 70,
                height: 70,
                borderRadius: "50%",
                border: "1px solid #1A6B2A60",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "25%",
                right: "25%",
                height: "10%",
                borderBottom: "1px solid #1A6B2A60",
                borderLeft: "1px solid #1A6B2A60",
                borderRight: "1px solid #1A6B2A60",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "7%",
                left: "25%",
                right: "25%",
                height: "10%",
                borderTop: "1px solid #1A6B2A60",
                borderLeft: "1px solid #1A6B2A60",
                borderRight: "1px solid #1A6B2A60",
              }}
            />
            {/* Bench area */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "18%",
                background: "#27272A30",
                borderTop: "1px dashed #3F3F4680",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "15.5%",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 9,
                color: "#52525B",
                fontWeight: 600,
                letterSpacing: "0.1em",
              }}
            >
              BENCH
            </div>

            {fieldPlayers.map((p, i) => {
              const pos = formationPositions[p.posKey];
              if (!pos) return null;
              const isSelected = selectedPlayer === p.name;
              const isBench = p.posKey.startsWith("BENCH");
              return (
                <div
                  key={i}
                  onClick={() => togglePlayer(p.name)}
                  style={{
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    transform: "translateX(-50%)",
                    cursor: "pointer",
                    textAlign: "center",
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      width: isBench ? 34 : 40,
                      height: isBench ? 34 : 40,
                      borderRadius: "50%",
                      background: isSelected
                        ? p.color
                        : `${p.color}${isBench ? "60" : "90"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isBench ? 14 : 17,
                      margin: "0 auto 2px",
                      border: isSelected
                        ? "3px solid #FFF"
                        : "2px solid transparent",
                      boxShadow: isSelected
                        ? `0 0 14px ${p.color}60`
                        : "0 2px 6px rgba(0,0,0,0.3)",
                      transition: "all 0.2s",
                    }}
                  >
                    {p.emoji}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#FAFAFA",
                      textShadow: "0 1px 3px rgba(0,0,0,0.9)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: 7,
                      color: "#FFFFFF99",
                      textShadow: "0 1px 2px rgba(0,0,0,0.9)",
                    }}
                  >
                    {p.position}
                  </div>
                </div>
              );
            })}
          </div>

          {selectedPlayer && (
            <div style={{ marginTop: 14 }}>
              <PlayerCard
                player={allPlayers.find((p) => p.name === selectedPlayer)}
                isSelected={true}
                onClick={() => setSelectedPlayer(null)}
              />
            </div>
          )}
        </div>
      )}

      {/* Roster View */}
      {activeView === "roster" && (
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {sections.map((sec) => (
            <div key={sec.title}>
              <div
                style={{
                  fontSize: 11,
                  color: "#71717A",
                  fontWeight: 600,
                  margin: "12px 0 6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {sec.title}
              </div>
              {sec.items.map((p) => (
                <div key={p.name} style={{ marginBottom: 6 }}>
                  <PlayerCard
                    player={p}
                    isSelected={selectedPlayer === p.name}
                    onClick={() => togglePlayer(p.name)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Workflow View */}
      {activeView === "workflow" && (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              borderRadius: 14,
              background: "#18181B",
              border: "1px solid #27272A",
              padding: 20,
              marginBottom: 16,
            }}
          >
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>
              🏟️ 경기 운영법
            </div>
            {workflowSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "10px 0",
                  borderBottom:
                    i < workflowSteps.length - 1
                      ? "1px solid #27272A"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 4,
                    borderRadius: 2,
                    background: step.color,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}
                  >
                    {step.phase}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#A1A1AA", marginBottom: 4 }}
                  >
                    {step.desc}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 5,
                      background: `${step.color}15`,
                      color: step.color,
                    }}
                  >
                    {step.agents}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Example */}
          <div
            style={{
              borderRadius: 14,
              background: "#18181B",
              border: "1px solid #6366F130",
              padding: 20,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
              💬 실전 예시: "일지 입력 화면 어떻게 만들까?"
            </div>
            <div style={{ fontSize: 12, color: "#A1A1AA", lineHeight: 2 }}>
              <strong style={{ color: "#FFD700" }}>성민:</strong> "일지 입력 화면
              UI를 어떻게 만들까?"
              <br />
              <strong style={{ color: "#0EA5E9" }}>Messi:</strong> "이건 사용자
              첫인상을 결정하는 핵심 화면이야. 공격진, 집중하자."
              <br />
              <strong style={{ color: "#EF4444" }}>CR7:</strong> "하이라이트 한 방
              가자. '한 손 입력' 제스처+마이크로 애니메이션으로 '쓰는 맛'을
              만들고, 저장은 0.2초 내 피드백. 이게 전환을 만든다."
              <br />
              <strong style={{ color: "#3B82F6" }}>Griezmann:</strong> "필드
              3개. 제목, 카테고리, 내용. 끝."
              <br />
              <strong style={{ color: "#DC2626" }}>Son:</strong> "프론트 내가
              잡을게. 동시에 API 라우트도 같이 만들어둘게!"
              <br />
              <strong style={{ color: "#F59E0B" }}>Modric:</strong> "태스크
              분리: ① InputForm 컴포넌트 ② /api/entries 라우트 ③ DB 테이블."
              <br />
              <strong style={{ color: "#10B981" }}>De Bruyne:</strong>{" "}
              "신입사원은 바쁘니까 30초 안에 끝나야 해. 퇴근 알림도 고려."
              <br />
              <strong style={{ color: "#059669" }}>Park:</strong> "입력 검증
              로직이랑 에러 핸들링 내가 추가할게. 테스트도."
              <br />
              <strong style={{ color: "#F97316" }}>Ramos:</strong> "카테고리 태그
              필수! 안 넣으면 나중에 분석 데이터 망해."
              <br />
              <strong style={{ color: "#8B5CF6" }}>Cannavaro:</strong> "entries
              테이블 category는 enum으로. 태그는 다대다 관계."
              <br />
              <strong style={{ color: "#6366F1" }}>Coach:</strong> "종합: MVP는
              3필드 + 카테고리 필수. 태스크 3개로 나눠서 실행."
              <br />
              <strong style={{ color: "#64748B" }}>Buffon:</strong> "XSS
              방지랑 입력값 길이 제한 꼭 넣어."
              <br />
              <strong style={{ color: "#FFD700" }}>성민:</strong> "좋아, 이대로
              가자!"
              <br />
              <strong style={{ color: "#A78BFA" }}>Zidane:</strong> "기록 완료.
              결정: 3필드+카테고리, 담당: Son+Park, 보류: 음성입력(v2)"
              <br />
              <strong style={{ color: "#EC4899" }}>Beckham:</strong> "이 과정,
              '첫 화면을 만드는 여정'이라는 제목으로 블로그 글 쓸게."
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
