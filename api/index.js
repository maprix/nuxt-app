const express = require("express");
const cors = require("cors");
const { Pool } = require('pg')

const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
})

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend API" });
});

app.get("/now", (req, res) => {  
    pool
    .query('SELECT NOW()')
    //.query('SELECT * FROM users WHERE id = $1', [1])
    .then(
        dbres => res.json({ time: dbres.rows[0] })
    )
    .catch(
        // add http error here and return db error
        dberr => setImmediate(() => {throw dberr})
    )
});

export default {
    path: '/api',
    handler: app
};
