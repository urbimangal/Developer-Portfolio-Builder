const express = require("express");
const cors = require("cors");
const portfolioRoutes = require("./routes/portfolioRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


app.use(express.json());

app.use("/api/portfolio", portfolioRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Developer Portfolio Builder API is running!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
