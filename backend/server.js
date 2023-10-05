const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 5000;

// middleware
app.use(express.json());

app.use("/api/v1/users", require("./api/v1/router/user"));

mongoose.connect().then(() => {
  console.log("🚀 connection established");
});

app.listen(PORT, () => {
  console.log(`🚀 listening on port ${PORT}`);
});
