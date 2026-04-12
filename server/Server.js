const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // bodyParser not needed

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "kavi",
});

db.connect((err) => {
  if (err) {
    console.log("Database not connected:", err);
  } else {
    console.log("Database connected");
  }
});


// ================= LOGIN =================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM login WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length > 0) {
      res.json({
        message: "Login successful",
        role: result[0].role,
      });
    } else {
      res.status(401).json({
        message: "Invalid email or password",
      });
    }
  });
});


// ================= READ ALL USERS =================
app.get("/users", (req, res) => {
  db.query("SELECT id, email FROM login", (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

    res.json(result);
  });
});


// ================= READ SINGLE USER =================
app.get("/users/:id", (req, res) => {
  db.query(
    "SELECT id, email FROM login WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(result[0]);
    }
  );
});


// ================= UPDATE USER =================
app.put("/users/:id", (req, res) => {
  const { email } = req.body;

  db.query(
    "UPDATE login SET email=? WHERE id=?",
    [email, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });

      res.json({ message: "User updated successfully" });
    }
  );
});


// ================= DELETE USER =================
app.delete("/users/:id", (req, res) => {
  db.query(
    "DELETE FROM login WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });

      res.json({ message: "User deleted successfully" });
    }
  );
});


// ================= START SERVER =================
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
