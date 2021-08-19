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
    .then(
        dbres => res.json({ time: dbres.rows[0] })
    )
    .catch(
        // add http error here and return db error
        dberr => setImmediate(() => {throw dberr})
    )
});

app.get("/countries", (req, res) => {  
    pool
    .query('SELECT * FROM country')
    .then(
        dbres => res.json({ countries: dbres.rows })
    )
    .catch(
        // add http error here and return db error
        dberr => setImmediate(() => {throw dberr})
    )
});

app.get("/country/:id", (req, res) => {  

    var id = req.params.id;

    pool
    .query('SELECT * FROM country WHERE country_id = $1', [id])
    .then(
        dbres => res.json({ country: dbres.rows[0] })
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
