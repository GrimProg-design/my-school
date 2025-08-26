const express = require("express");
const app = express();
const indexRoutes = require("./routes/index");
const mongoose = require("mongoose");

const corsMiddleware = require("./middlewares/corsMiddleware")
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler")
const security = require("./middlewares/security")

// * Подключаем cors * //
app.use(corsMiddleware)
//  _______________  //

app.use(logger);

// * Подключаем базу данных * //
mongoose.connect("mongodb://127.0.0.1:27017/for-school", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('База успешно подключена'))
.catch(err => console.log(err))
// * ______________ * //

app.use(express.json());
app.use("/", indexRoutes);
app.use("/get", indexRoutes);
app.use("/post", indexRoutes);
app.use("/users", indexRoutes);
app.use("/add", indexRoutes);

app.use(errorHandler)

module.exports = app;
