import { useState } from "react";

function TagInput({ label, hint, tags, onChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const trimmed = inputValue.trim().replace(/,$/, ""); // remove trailing comma
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInputValue("");
  };

  const removeTag = (index) => {
    onChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "'Space Mono', monospace",
          color: "#888",
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>
      {hint && (
        <p style={{ color: "#555", fontSize: "12px", margin: "0 0 10px 0" }}>
          {hint}
        </p>
      )}

      {/* Tag display area + input */}
      <div
        style={{
          minHeight: "52px",
          padding: "10px 12px",
          background: "#111111",
          border: "1px solid #222",
          borderRadius: "8px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          alignItems: "center",
          cursor: "text",
        }}
        onClick={() => document.getElementById("tag-input").focus()}
      >
        {/* Render each tag */}
        {tags.map((tag, i) => (
          <span
            key={i}
            style={{
              background: "#0d1f14",
              border: "1px solid #22c55e",
              color: "#4ade80",
              padding: "4px 10px",
              borderRadius: "20px",
              fontSize: "13px",
              fontFamily: "'Space Mono', monospace",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(i)}
              style={{
                background: "none",
                border: "none",
                color: "#4ade80",
                cursor: "pointer",
                padding: "0",
                fontSize: "14px",
                lineHeight: "1",
              }}
            >
              ×
            </button>
          </span>
        ))}

        {/* Text input for new tag */}
        <input
          id="tag-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder={tags.length === 0 ? "React, Node.js, Python..." : ""}
          style={{
            flex: "1",
            minWidth: "120px",
            background: "transparent",
            border: "none",
            color: "#ffffff",
            fontSize: "14px",
            fontFamily: "'Syne', sans-serif",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}

export default TagInput;
