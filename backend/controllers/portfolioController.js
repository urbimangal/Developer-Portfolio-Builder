let portfolioData = null;

const savePortfolio = (req, res) => {
  const data = req.body;

  if (!data.name || !data.role) {
    return res.status(400).json({
      success: false,
      message: "Name and role are required fields.",
    });
  }

  portfolioData = {
    id: Date.now(), 
    ...data,
    createdAt: new Date().toISOString(),
  };

  console.log("📁 Portfolio saved:", portfolioData.name);

  res.status(201).json({
    success: true,
    message: "Portfolio saved successfully!",
    data: portfolioData,
  });
};

const getPortfolio = (req, res) => {
  if (!portfolioData) {
    return res.status(404).json({
      success: false,
      message: "No portfolio data found. Please submit the form first.",
    });
  }

  res.status(200).json({
    success: true,
    data: portfolioData,
  });
};

module.exports = { savePortfolio, getPortfolio };
