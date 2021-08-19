const express = require("express");
const cors = require("cors");

const app = express();
const dbConfig = require("./config/db.config.js");

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API" });
});

export default {
    path: '/api',
    handler: app
}
