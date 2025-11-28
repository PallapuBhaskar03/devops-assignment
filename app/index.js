const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/status", (req, res) => {
  res.json({ status: "running", time: new Date() });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
