const cors = require("cors");

const corsOption = {
    origin: "http://localhost:5173",
    methods: ["GET"],
    allowedApplication: ["Content-Type"]
}

module.exports = cors(corsOption)