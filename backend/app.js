const express = require("express");
const app = express();
const indexRoutes = require("./routes/index");
const cors = require("cors");

// * Подключаем cors * //
app.use(cors());
// Ограничиваем доступ только для нашего фронта
app.use(cors({
    origin: "http://localhost:5173"
}));
//  _______________  //

app.use(express.json());
app.use("/", indexRoutes);
app.use('/get', indexRoutes)
app.use('/post', indexRoutes)

module.exports = app;