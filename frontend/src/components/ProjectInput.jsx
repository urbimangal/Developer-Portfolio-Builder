import { useState } from "react";

const emptyProject = { title: "", description: "", tech: "", link: "" };

function ProjectInput({ projects, onChange }) {
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState({ ...emptyProject });

  const handleDraftChange = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdd = () => {
    if (!draft.title.trim()) return;
    onChange([...projects, draft]);
    setDraft({ ...emptyProject });
    setIsAdding(false);
  };

  const handleRemove = (index) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      {/* Existing Projects */}
      {projects.map((project, i) => (
        <div
          key={i}
          style={{
            background: "#111111",
            border: "1px solid #222",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "15px",
                marginBottom: "4px",
              }}
            >
              {project.title}
            </div>
            <div style={{ color: "#666", fontSize: "13px", marginBottom: "6px" }}>
              {project.description}
            </div>
            {project.tech && (
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#22c55e",
                  fontSize: "11px",
                }}
              >
                {project.tech}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => handleRemove(i)}
            style={{
              background: "transparent",
              border: "1px solid #333",
              color: "#666",
              borderRadius: "6px",
              padding: "4px 10px",
              cursor: "pointer",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add Project Form */}
      {isAdding ? (
        <div
          style={{
            background: "#0d1f14",
            border: "1px solid #1a3a22",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "12px",
          }}
        >
          <h4
            style={{
              color: "#4ade80",
              fontFamily: "'Space Mono', monospace",
              fontSize: "12px",
              margin: "0 0 16px 0",
              letterSpacing: "0.1em",
            }}
          >
            NEW PROJECT
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { key: "title", label: "Project Title *", placeholder: "My Awesome App" },
              { key: "description", label: "Description", placeholder: "What does this project do?" },
              { key: "tech", label: "Tech Stack", placeholder: "React, Node.js, MongoDB" },
              { key: "link", label: "Project Link", placeholder: "https://github.com/..." },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label style={miniLabelStyle}>{label}</label>
                <input
                  type="text"
                  value={draft[key]}
                  onChange={(e) => handleDraftChange(key, e.target.value)}
                  placeholder={placeholder}
                  style={miniInputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
                  onBlur={(e) => (e.target.style.borderColor = "#1a3a22")}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <button
              type="button"
              onClick={handleAdd}
              style={{
                padding: "10px 20px",
                background: "#22c55e",
                color: "#0a0a0a",
                border: "none",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Add Project
            </button>
            <button
              type="button"
              onClick={() => { setIsAdding(false); setDraft({ ...emptyProject }); }}
              style={{
                padding: "10px 20px",
                background: "transparent",
                color: "#666",
                border: "1px solid #333",
                borderRadius: "6px",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          style={{
            width: "100%",
            padding: "14px",
            background: "transparent",
            border: "1px dashed #333",
            borderRadius: "8px",
            color: "#555",
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "'Syne', sans-serif",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "#22c55e";
            e.target.style.color = "#22c55e";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "#333";
            e.target.style.color = "#555";
          }}
        >
          + Add a Project
        </button>
      )}
    </div>
  );
}

const miniLabelStyle = {
  display: "block",
  fontFamily: "'Space Mono', monospace",
  color: "#4ade80",
  fontSize: "10px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: "6px",
};

const miniInputStyle = {
  width: "100%",
  padding: "10px 12px",
  background: "#0a0a0a",
  border: "1px solid #1a3a22",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "14px",
  fontFamily: "'Syne', sans-serif",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

export default ProjectInput;
