/// user login routes

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../config/mysql");

const router = express.Router();

router.post("/login", (req, res) => {
  const { name } = req.body;

  db.query("SELECT * FROM users WHERE name = ?", [name], async (err, result) => {
    if (result.length === 0) return res.status(404).json({ msg: "User not found" });

    const token = jwt.sign({ id: result[0].id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ token });
  });
});

module.exports = router;

