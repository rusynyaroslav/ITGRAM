const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4000;

const { MONGODB_URI } = require("./config");

mongoose.connect(MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("База даних підключена");
});

mongoose.connection.on("error", (error) => {
  console.log("Помилка ", error);
});

require("./models/user_model");
require("./models/post_model");

app.use(express.json());
app.use(require("./routes/authentication"));
app.use(require("./routes/postRoute"));

app.listen(PORT, () => {
  console.log("Успішно");
});
