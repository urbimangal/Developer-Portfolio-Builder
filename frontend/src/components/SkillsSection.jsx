import { SectionHeader } from "./AboutSection";

function SkillsSection({ skills }) {
  // If no skills, show a placeholder message
  if (!skills || skills.length === 0) {
    return (
      <section id="skills" style={sectionStyle}>
        <SectionHeader number="02" title="Skills" />
        <p style={{ color: "#555", fontFamily: "'Space Mono', monospace", fontSize: "14px" }}>
          No skills added yet.
        </p>
      </section>
    );
  }

  return (
    <section id="skills" style={{ ...sectionStyle, background: "#0d0d0d" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "120px 24px" }}>
        <SectionHeader number="02" title="Skills" />

        {/* Skills Tag Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {skills.map((skill, i) => (
            <SkillTag key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTag({ skill, index }) {
  const isAccented = index % 4 === 0;

  return (
    <span
      style={{
        padding: "10px 22px",
        background: isAccented ? "#0d1f14" : "#111",
        border: `1px solid ${isAccented ? "#22c55e" : "#222"}`,
        borderRadius: "40px",
        color: isAccented ? "#4ade80" : "#ccc",
        fontFamily: "'Space Mono', monospace",
        fontSize: "13px",
        letterSpacing: "0.03em",
        transition: "all 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "#0d1f14";
        e.target.style.borderColor = "#22c55e";
        e.target.style.color = "#4ade80";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = isAccented ? "#0d1f14" : "#111";
        e.target.style.borderColor = isAccented ? "#22c55e" : "#222";
        e.target.style.color = isAccented ? "#4ade80" : "#ccc";
      }}
    >
      {skill}
    </span>
  );
}

const sectionStyle = {
  padding: "0",
};

export default SkillsSection;
