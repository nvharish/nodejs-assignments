const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    axios.get("http://localhost:3000/todos").then((data) => {
        //console.log(data);
        res.send(data.data);
    }).catch((err) => {
        res.send(err);
    });
});

app.post('/todos', (req, res) => {
    axios.post("http://localhost:3000/todos", req.body).then((data) => {
        res.send(data.data);
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3001, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("server connected");
    }
})