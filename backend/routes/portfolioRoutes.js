const express = require("express");
const router = express.Router();
const {
  savePortfolio,
  getPortfolio,
} = require("../controllers/portfolioController");

router.post("/", savePortfolio);

router.get("/", getPortfolio);

module.exports = router;
