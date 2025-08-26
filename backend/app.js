const express = require("express");
const app = express();
const indexRoutes = require("./routes/index");
const cors = require("cors");
const mongoose = require("mongoose");

// * Подключаем cors * //
app.use(cors());
// Ограничиваем доступ только для нашего фронта
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
//  _______________  //

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
app.use("/add", indexRoutes)

module.exports = app;
