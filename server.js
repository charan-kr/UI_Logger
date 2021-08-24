const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(config.get("mongoURI"), {
    useUnifiedTopology: true,
    useCreateIndex: false,
  })
  .then(() => console.log("connected to mongodb server"))
  .catch(() => console.log("mongodb connection failed"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server started @ port: ", PORT);
});
