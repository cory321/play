const express = require("express");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyParser = require("body-parser");
const thePath = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(thePath.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("404 sorry");
});

app.listen(3000);
