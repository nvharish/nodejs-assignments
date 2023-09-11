const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/todoapp").then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error(err);
});

ObjectId = mongoose.Schema.ObjectId;

const TodoSchema = new mongoose.Schema({
    id: ObjectId,
    text: String,
    done: Boolean
});

const Todo = mongoose.model("todo", TodoSchema);

app.get('/todos', (req, res) => {
    Todo.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
});

app.post('/todos', (req, res) => {
    let todo = new Todo(req.body);
    todo.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server connected");
    }
});