const express = require("express");
const path = require("path");

const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client-app/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client-app", "build", "index.html"))
  );
}

app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));
