let express = require("express");
let { sum } = require("./math");

let app = express();
let data = [1, 2, 3, 4, 5];

app.post("/sum", (req, res) => {
    let total = sum(...data);
    res.send(total);
});

module.exports = app;