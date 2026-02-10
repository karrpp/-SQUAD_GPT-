export default function PlayerCard({ player, isSelected, onClick, compact }) {
  if (!player) return null;
  return (
    <div
      onClick={onClick}
      style={{
        background: isSelected ? `${player.color}12` : "#18181B",
        border: `1px solid ${isSelected ? player.color : "#27272A"}`,
        borderRadius: 14,
        padding: compact ? 12 : 16,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: isSelected ? 10 : 0,
        }}
      >
        <span style={{ fontSize: compact ? 18 : 22 }}>{player.emoji}</span>
        <div style={{ flex: 1 }}>
          <div
            style={{ fontSize: compact ? 12 : 14, fontWeight: 700, color: "#FAFAFA" }}
          >
            {player.name}
          </div>
          <div style={{ fontSize: 11, color: player.color, fontWeight: 600 }}>
            {player.role}
          </div>
        </div>
        <span
          style={{
            fontSize: 9,
            padding: "3px 8px",
            borderRadius: 6,
            background: `${player.color}20`,
            color: player.color,
            fontWeight: 700,
          }}
        >
          {player.position}
        </span>
      </div>

      {isSelected && (
        <>
          <div
            style={{
              fontSize: 12,
              color: "#A1A1AA",
              lineHeight: 1.6,
              marginBottom: 10,
            }}
          >
            {player.description}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              marginBottom: player.prompt ? 10 : 0,
            }}
          >
            {player.traits.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: 10,
                  padding: "3px 8px",
                  borderRadius: 5,
                  background: "#27272A",
                  color: "#D4D4D8",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          {player.prompt && (
            <div
              style={{
                padding: 12,
                borderRadius: 8,
                background: "#09090B",
                border: "1px solid #27272A",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#71717A",
                  fontWeight: 600,
                  marginBottom: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                시스템 프롬프트
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#A1A1AA",
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap",
                }}
              >
                {player.prompt}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
