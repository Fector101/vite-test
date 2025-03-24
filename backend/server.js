const express = require("express");
const path = require("path");

const app = express();

// Serve the built frontend
app.use(express.static("/frontend"));
console.log(path.join("/frontend", "index.html"));
app.get("*", (req, res) => {
  res.sendFile(path.join("/frontend", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
