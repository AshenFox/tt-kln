const express = require("express");
const path = require("path");

const json_server = require("json-server");
const router = json_server.router(path.resolve(__dirname, "db", "db.json"));
const json_middlewares = json_server.defaults();

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// app.use(jsonServer.bodyParser);

// app.use(json_middlewares);
app.use("/api", router);
app.use(express.static(path.resolve(__dirname, "../build")));

/* app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "../build", "index.html"))
); */

// console.log(path.resolve(__dirname, "../build", "index.html"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
