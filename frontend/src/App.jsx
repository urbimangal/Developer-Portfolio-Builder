// ======================================
// App.jsx — Root Component
// Manages which page/view is shown
// ======================================

import { useState } from "react";
import FormPage from "./pages/FormPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  // portfolioData holds the submitted data — null means no submission yet
  const [portfolioData, setPortfolioData] = useState(null);

  // Called when the user submits the form
  const handleFormSubmit = (data) => {
    setPortfolioData(data);
  };

  // Called when the user wants to go back and edit the form
  const handleEdit = () => {
    setPortfolioData(null);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Syne', sans-serif" }}>
      {portfolioData ? (
        // Show the portfolio preview after form is submitted
        <PreviewPage data={portfolioData} onEdit={handleEdit} />
      ) : (
        // Show the form on first load or when editing
        <FormPage onSubmit={handleFormSubmit} initialData={portfolioData} />
      )}
    </div>
  );
}

export default App;
