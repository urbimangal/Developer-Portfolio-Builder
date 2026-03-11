function InputField({ label, placeholder, value, onChange, type = "text", required = false, icon }) {
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
        {label} {required && <span style={{ color: "#22c55e" }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        {icon && (
          <span
            style={{
              position: "absolute",
              left: "14px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
            }}
          >
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={{
            width: "100%",
            padding: icon ? "14px 16px 14px 44px" : "14px 16px",
            background: "#111111",
            border: "1px solid #222",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "15px",
            fontFamily: "'Syne', sans-serif",
            outline: "none",
            transition: "border-color 0.2s",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
          onBlur={(e) => (e.target.style.borderColor = "#222")}
        />
      </div>
    </div>
  );
}

export default InputField;
