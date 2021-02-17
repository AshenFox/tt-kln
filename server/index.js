const express = require("express");
const path = require("path");

const json_server = require("json-server");
const router = json_server.router(path.resolve(__dirname, "db", "db.json"));
// const json_middlewares = json_server.defaults(["../build"]);

// const app = express();
const app = json_server.create();

// Server settings
app.use(express.json({ extended: false }));

// Api route
app.use("/api", router);

// Static files
app.use(express.static(path.resolve(__dirname, "../build")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
