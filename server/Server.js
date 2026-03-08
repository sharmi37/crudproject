const express = require( "express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "kavi",
});

db.connect((err) => {
  if (err) console.log("Database not connected");
  else console.log("Database connected");
});

// -------- CREATE LOGIN --------
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "INSERT INTO login (email, password) VALUES (?, ?)";

  db.query(sql, [email, password], (err) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json({ message: "Login data stored successfully" });
  });
});

// -------- READ ALL --------
app.get("/login", (req, res) => {
  db.query("SELECT * FROM login", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// -------- READ ONE --------
app.get("/login/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM login WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

// -------- UPDATE --------
app.put("/login/:id", (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE login SET email=?, password=? WHERE id=?",
    [email, password, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "User updated successfully" });
    }
  );
});

// -------- DELETE --------
app.delete("/login/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM login WHERE id=?", [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "User deleted successfully" });
  });
});

// START SERVER
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;

// Hardcoded Admin
  const adminEmail = "admin@gmail.com";
  const adminPassword = "1234";

  if (email === adminEmail && password === adminPassword) {
    return res.json({
      message: "Admin login successful",
      role: "admin"
    });
  } else {
    return res.status(401).json({
      message: "Access Denied. Admin only."
    });
  }
});
