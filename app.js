const express = require("express");
const mongoose = require("mongoose");
const port = 4000;
const HttpError = require("./models/http-error");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const placeRouter = require("./routes/place-routes");
const userRouter = require("./routes/user-routes");

app.use("/api/places", placeRouter);
app.use("/api/users", userRouter);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/places")
  .then(() => console.log("Connected!"));
app.listen(port);
