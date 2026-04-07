const express = require("express");
const db = require("../config/mysql");
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});
api.get("/users"); // token automatically added

module.exports = router;

