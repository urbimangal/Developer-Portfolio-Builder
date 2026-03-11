function NavBar({ name, activeSection, setActiveSection, onEdit }) {
  const navItems = ["home", "about", "skills", "projects", "contact"];

  const scrollTo = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1a1a",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}
    >
      {/* Name / Logo */}
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: "700",
          letterSpacing: "0.05em",
        }}
      >
        {name || "Portfolio"}
        <span style={{ color: "#22c55e" }}>.</span>
      </span>

      {/* Nav Links — hidden on very small screens for simplicity */}
      <div style={{ display: "flex", gap: "4px" }}>
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            style={{
              background: "transparent",
              border: "none",
              color: activeSection === item ? "#22c55e" : "#666",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "'Syne', sans-serif",
              fontWeight: activeSection === item ? "700" : "400",
              textTransform: "capitalize",
              transition: "color 0.2s",
              letterSpacing: "0.03em",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Edit Button */}
      <button
        onClick={onEdit}
        style={{
          padding: "8px 20px",
          background: "transparent",
          border: "1px solid #333",
          color: "#888",
          borderRadius: "6px",
          fontSize: "12px",
          cursor: "pointer",
          fontFamily: "'Space Mono', monospace",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = "#22c55e";
          e.target.style.color = "#22c55e";
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = "#333";
          e.target.style.color = "#888";
        }}
      >
        ✏ Edit
      </button>
    </nav>
  );
}

export default NavBar;
