const express = require("express");
const port = 4000;
const app = express();
const placeRouter = require("./routes/place-routes");
app.use("/api/places", placeRouter);
app.listen(port);

