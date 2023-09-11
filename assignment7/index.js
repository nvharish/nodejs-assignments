const express = require("express");
const mongoose = require("mongoose");
const assert = require("assert");
const app = express();

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/todoapp", { useNewUrlParser: true, useUnifiedTopology: true }).then(function (res) {
    console.log("DB connected");
}).catch(function (err) {
    console.log(err);
});
const ObjectId = mongoose.Schema.ObjectId;
const TodoSchema = new mongoose.Schema({
    id: ObjectId,
    description: String,
    done: Boolean
});

const Todo = mongoose.model("Todo", TodoSchema);

app.get("/todos", function (req, res) {
    Todo.find().then(function (data) {
        console.log(data);
        res.send(data);

    }).catch(function (err) {
        console.log(err);
    });
});

app.get("/todos/:id", function (req, res) {
    let id = req.params.id;
    Todo.findById(id).then((data) => {
        console.log(data);
        res.send(data);

    }).catch(function (err) {
        console.log(err);
    });
});

app.post("/todos", function (req, res) {
    let todo = new Todo(req.body);
    todo.save().then(function (data) {
        console.log(data);
        res.send(data);

    }).catch(function (err) {
        console.log(err);
    });
});

app.put("/todos/:id", function (req, res) {
    let id = req.params.id;
    Todo.findById(id).then((data) => {
        data.description = req.body.description;
        data.done = req.body.done;
        data.save().then((data) => {
            console.log(data);
            res.send(data);

        }).catch(function (err) {
            console.log(err);
        });
    }).catch(function (err) {
        console.log(err);
    });
});

app.delete("/todos/:id", function (req, res) {
    let id = req.params.id;
    Todo.deleteOne({ _id: id }).then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        console.log(err);
    });
});

app.listen("3000", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server started");
    }
});
