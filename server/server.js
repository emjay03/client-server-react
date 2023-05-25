const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "mydb.cieojwvws9ux.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: "sana1001101",
  database: "SAMPLE",
});

app.get("/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get( '/', (req, res) =>res.json('The server is running perfectly !'))

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
