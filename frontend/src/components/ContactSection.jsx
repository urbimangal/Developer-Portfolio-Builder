import { SectionHeader } from "./AboutSection";

function ContactSection({ email, github, linkedin }) {
  const links = [
    { label: "Email", value: email, href: `mailto:${email}`, icon: "✉️" },
    { label: "GitHub", value: github, href: github, icon: "🐙" },
    { label: "LinkedIn", value: linkedin, href: linkedin, icon: "💼" },
  ].filter((l) => l.value); // only show links that exist

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        background: "#0d0d0d",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeader number="04" title="Contact" />

        {/* Big CTA */}
        <div style={{ marginBottom: "64px" }}>
          <p
            style={{
              color: "#888",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "500px",
              margin: "0 0 40px 0",
            }}
          >
            Have a project in mind? I'm open to new opportunities and
            collaborations. Let's build something great together.
          </p>

          {email && (
            <a
              href={`mailto:${email}`}
              style={{
                display: "inline-block",
                padding: "16px 40px",
                background: "#22c55e",
                color: "#0a0a0a",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "700",
                fontFamily: "'Syne', sans-serif",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Say Hello →
            </a>
          )}
        </div>

        {/* Link Cards */}
        {links.length > 0 && (
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {links.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px 24px",
                  background: "#111",
                  border: "1px solid #222",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  minWidth: "180px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#22c55e";
                  e.currentTarget.style.background = "#0d1f14";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#222";
                  e.currentTarget.style.background = "#111";
                }}
              >
                <span style={{ fontSize: "20px" }}>{icon}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      color: "#444",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "13px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "160px",
                    }}
                  >
                    {label === "Email" ? value : label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
