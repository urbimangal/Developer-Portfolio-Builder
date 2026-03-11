function HeroSection({ data }) {
  const { name, role, github, linkedin, email } = data;

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#22c55e",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
            opacity: "0.8",
          }}
        >
          ◆ Hello, World!
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(48px, 9vw, 96px)",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1",
            margin: "0 0 16px 0",
            letterSpacing: "-0.02em",
          }}
        >
          {name || "Your Name"}
        </h1>

        {/* Role */}
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#22c55e",
            fontSize: "clamp(14px, 2.5vw, 20px)",
            letterSpacing: "0.05em",
            marginBottom: "40px",
          }}
        >
          {role || "Developer"}
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {email && (
            <a
              href={`mailto:${email}`}
              style={{
                padding: "14px 32px",
                background: "#22c55e",
                color: "#0a0a0a",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Contact Me →
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "#ffffff",
                border: "1px solid #333",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              GitHub ↗
            </a>
          )}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "#333",
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #333, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
