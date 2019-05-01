const express = require("express");

// makes it so we don't have to try catch in our express methods
require("express-async-errors");

const logger = require("morgan");
const bodyParser = require("body-parser");

// TODO: replace with npm package
const notify = require("../pling-package/lib/index");

const app = express();

const port = process.env.PORT || 80;
const key = process.env.PLING_API_KEY || "1556318416501";

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  await notify({
    key,
    title: "Pling from the package!",
    description: "👋 👋 👋 👋"
  });

  res.send("Pling sent!");
});

app.post("/", async (req, res) => {
  const { title = "Title not set", description = "Description not set" } = req.body;
  await notify({
    key,
    title,
    description
  });

  res.send("Custom pling sent!");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  throw new Error("Not found");
});

// error handler
app.use(function(err, req, res, next) {
  res.send(err);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
