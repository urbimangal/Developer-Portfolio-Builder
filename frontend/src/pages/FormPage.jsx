// =============================================
// pages/FormPage.jsx
// The form where developers enter their info
// =============================================

import { useState } from "react";
import InputField from "../components/InputField";
import TagInput from "../components/TagInput";
import ProjectInput from "../components/ProjectInput";

const API_URL = "http://localhost:5000/api/portfolio";

function FormPage({ onSubmit, initialData }) {

  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    role: initialData?.role || "",
    about: initialData?.about || "",
    skills: initialData?.skills || [],
    projects: initialData?.projects || [],
    github: initialData?.github || "",
    linkedin: initialData?.linkedin || "",
    email: initialData?.email || "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // =================================
  // FORM SUBMIT WITH DEBUGGING
  // =================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    console.log("🚀 Submitting portfolio data:", formData);

    try {

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📡 Response status:", response.status);

      const result = await response.json();

      console.log("📦 Response data:", result);

      if (!response.ok) {
        throw new Error(result.message || "Server error occurred");
      }

      console.log("✅ Portfolio successfully saved");

      onSubmit(result.data);

    } catch (err) {

      console.error("❌ Fetch error:", err);

      setError(
        "Failed to connect to backend. Make sure the backend server is running on http://localhost:5000"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>

      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>

        <h1 style={{ color: "#fff", marginBottom: "40px" }}>
          Developer Portfolio Builder
        </h1>

        <form onSubmit={handleSubmit}>

          <InputField
            label="Full Name"
            value={formData.name}
            onChange={(v) => handleChange("name", v)}
            required
          />

          <InputField
            label="Role"
            value={formData.role}
            onChange={(v) => handleChange("role", v)}
            required
          />

          <TagInput
            label="Skills"
            tags={formData.skills}
            onChange={(tags) => handleChange("skills", tags)}
          />

          <ProjectInput
            projects={formData.projects}
            onChange={(projects) => handleChange("projects", projects)}
          />

          <InputField
            label="Github"
            value={formData.github}
            onChange={(v) => handleChange("github", v)}
          />

          <InputField
            label="LinkedIn"
            value={formData.linkedin}
            onChange={(v) => handleChange("linkedin", v)}
          />

          <InputField
            label="Email"
            value={formData.email}
            onChange={(v) => handleChange("email", v)}
          />

          {error && (
            <div style={{ color: "red", marginTop: "20px" }}>
              ⚠ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "30px",
              padding: "16px",
              width: "100%",
              background: "#22c55e",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Generating..." : "Generate Portfolio"}
          </button>

        </form>

      </main>

    </div>
  );
}

export default FormPage;