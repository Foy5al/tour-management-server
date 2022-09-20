const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app")

//connect to database
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`database connection is successfully`.green.bold);
});

// server port no
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.yellow.bold);
});
