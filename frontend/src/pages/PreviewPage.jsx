// =============================================
// pages/PreviewPage.jsx
// Renders the generated portfolio from form data
// =============================================

import { useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function PreviewPage({ data, onEdit }) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Fixed navigation bar */}
      <NavBar
        name={data.name}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onEdit={onEdit}
      />

      {/* Edit Banner — reminder that this is a preview */}
      <div
        style={{
          background: "#0d1f14",
          borderBottom: "1px solid #1a3a22",
          padding: "10px 24px",
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: "12px",
          color: "#4ade80",
          letterSpacing: "0.05em",
        }}
      >
        ✦ PORTFOLIO PREVIEW — This is how your portfolio looks to visitors &nbsp;
        <button
          onClick={onEdit}
          style={{
            background: "transparent",
            border: "1px solid #22c55e",
            color: "#22c55e",
            padding: "2px 12px",
            borderRadius: "20px",
            fontSize: "11px",
            cursor: "pointer",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Edit →
        </button>
      </div>

      {/* Portfolio Sections */}
      <HeroSection data={data} />
      <AboutSection about={data.about} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <ContactSection email={data.email} github={data.github} linkedin={data.linkedin} />

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1a1a1a",
          padding: "32px 24px",
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          fontSize: "12px",
          color: "#444",
        }}
      >
        Built with{" "}
        <span style={{ color: "#22c55e" }}>Developer Portfolio Builder</span>
        {" "}⚡
      </footer>
    </div>
  );
}

export default PreviewPage;
