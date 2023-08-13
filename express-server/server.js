const express = require("express");
const { PythonShell } = require("python-shell");
var cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());

// Endpoint to make predictions
app.post("/predict", (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data) {
    return res.status(400).json({ error: "Empty" });
  }
  const options = {
    scriptPath: __dirname,
    args: data,
  };

  PythonShell.run("./predict.py", options, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Prediction failed" });
    }

    const prediction = parseFloat(results[0]);
    return res.json({ prediction });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
