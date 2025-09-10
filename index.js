const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

// Simulate gas sensor values (0 - 100 ppm)
function getGasLevel() {
  return Math.floor(Math.random() * 100);
}

// API endpoint
app.get("/gas-status", (req, res) => {
  const gasLevel = getGasLevel();
  const isDanger = gasLevel > 60; // danger threshold

  res.json({
    gasLevel,
    status: isDanger ? "DANGER 🚨" : "SAFE ✅"
  });
});

app.listen(PORT, () => {
  console.log(`Gas Detector running at http://localhost:${PORT}`);
});
