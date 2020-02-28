const express = require("express");
const thePath = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(thePath.join(rootDir, "views", "shop.html"));
});

module.exports = router;
