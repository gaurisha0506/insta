const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const { MONGOURI } = require("./keys");

require('./models/user')

app.use(require('./routes/auth'))
mongoose
  .connect(MONGOURI)
  .then(() => console.log("connected to mongo"))
  .catch((err) => console.log("error in mongo"));

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});


