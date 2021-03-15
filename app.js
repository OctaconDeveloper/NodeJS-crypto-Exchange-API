const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const fs = require("fs");
const hpp = require("hpp");
const Handlebars = require('handlebars');
const appDebugger = require("./app/loggers");
const router = require("./app/routes");

const app = express();


app.use(hpp());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mongoSanitize());


mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }) 
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(
        `${process.env.APP_NAME} running @ port: ${process.env.PORT}`
      );
    }); 
  })
  .catch((error) => {
    appDebugger("error", "DbConnection", "Mongoose", error.message);
  });

app.get("/", async (req, res) => {
  res
    .status(200)
    .send({ code: 200, message: `Welcome to ${process.env.APP_NAME} API Service` });
}); //index



app.get("/health", (req, res) => {
  res.status(200).json({ code: 200, message: "alive" });
}); //api status

app.use(router)