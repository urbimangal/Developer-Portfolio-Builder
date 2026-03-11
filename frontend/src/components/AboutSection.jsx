function AboutSection({ about }) {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Section Header */}
      <SectionHeader number="01" title="About Me" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left: Decorative element */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "1",
              maxWidth: "220px",
              background: "#111",
              border: "1px solid #1a1a1a",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "80px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Green corner accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "40px",
                height: "40px",
                background: "#22c55e",
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
            />
            👨‍💻
          </div>
        </div>

        {/* Right: Bio text */}
        <div>
          <p
            style={{
              color: "#ccc",
              fontSize: "18px",
              lineHeight: "1.8",
              margin: "0 0 32px 0",
              fontWeight: "400",
            }}
          >
            {about ||
              "This developer hasn't added an about section yet. But they're probably writing great code right now!"}
          </p>

          {/* Fun stat chips */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { icon: "☕", label: "Coffee Powered" },
              { icon: "🚀", label: "Curious Builder" },
              { icon: "🌍", label: "Open Source Fan" },
            ].map(({ icon, label }) => (
              <span
                key={label}
                style={{
                  padding: "8px 16px",
                  background: "#111",
                  border: "1px solid #222",
                  borderRadius: "20px",
                  color: "#888",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {icon} {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ number, title }) {
  return (
    <div style={{ marginBottom: "64px" }}>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          color: "#22c55e",
          fontSize: "12px",
          letterSpacing: "0.2em",
          marginBottom: "12px",
        }}
      >
        {number} ─────
      </div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: "800",
          color: "#ffffff",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default AboutSection;
