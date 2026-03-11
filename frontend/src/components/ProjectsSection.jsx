import { SectionHeader } from "./AboutSection";

function ProjectsSection({ projects }) {
  return (
    <section id="projects" style={{ padding: "120px 24px", maxWidth: "900px", margin: "0 auto" }}>
      <SectionHeader number="03" title="Projects" />

      {!projects || projects.length === 0 ? (
        <p style={{ color: "#555", fontFamily: "'Space Mono', monospace", fontSize: "14px" }}>
          No projects added yet.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #1a1a1a",
        borderRadius: "12px",
        padding: "28px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s, transform 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#22c55e";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1a1a1a";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #22c55e, transparent)",
        }}
      />

      {/* Project number */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          color: "#333",
          fontSize: "11px",
          letterSpacing: "0.1em",
          marginBottom: "16px",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          color: "#ffffff",
          fontSize: "20px",
          fontWeight: "700",
          margin: "0 0 12px 0",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "#666",
          fontSize: "14px",
          lineHeight: "1.6",
          margin: "0 0 20px 0",
        }}
      >
        {project.description || "No description provided."}
      </p>

      {/* Tech stack */}
      {project.tech && (
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#22c55e",
            fontSize: "11px",
            letterSpacing: "0.05em",
            marginBottom: project.link ? "20px" : "0",
          }}
        >
          {project.tech}
        </div>
      )}

      {/* Project link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            color: "#888",
            fontSize: "13px",
            textDecoration: "none",
            fontFamily: "'Space Mono', monospace",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#22c55e")}
          onMouseLeave={(e) => (e.target.style.color = "#888")}
        >
          View Project ↗
        </a>
      )}
    </div>
  );
}

export default ProjectsSection;
