const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// third party middleWare
app.use(cors());
app.use(express.json());

// routes
const TourPackageRoute = require("./Routes/TourPackage.route");

app.use("/tour", TourPackageRoute);

app.get("/", (req, res) => {
  res.send("surver is connected!!");
});

module.exports = app;
