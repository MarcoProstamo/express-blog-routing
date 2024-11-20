const path = require("path");
const posts = require(path.join("../db", "posts.js"));

const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
  res.send("Show all Posts");
});

module.exports = router;
