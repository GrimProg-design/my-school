const cors = require("cors");

const corsOption = {
    origin: "http://localhost:5173"
}

module.exports = cors(corsOption)