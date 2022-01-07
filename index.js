const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const config = require("./config/key");

const mongoose = require("mongoose");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("Connected DB.."))
  .catch((err) => console.log(err));

app.use(cors());

app.use("/api/users", require("./routes/users"));

app.use("/api/favorite", require("./routes/favorite"));

app.use("/api/comment", require("./routes/comment"));

app.use("/api/like", require("./routes/like"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
