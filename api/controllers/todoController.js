var Todos = require("../models/todoModel");

var getTodos = (res) => {
    // find mà k tham số sẽ là select all
    Todos.find((err, todos) => {
        if (err)
            res.status(500).json(err)
        else
            res.json(todos)
    })
}

// Define the restful api
module.exports = (app) => {
    //get all todos
    app.get("/api/todos", (req, res) => {
        getTodos(res)
    })

    app.get("/api/todo/:id", (req, res) => {
        Todos.findById({ _id: req.params.id }, (err, todo) => {
            if (err) throw err
            else
                res.json(todo)
        })
    })

    app.post("/api/todo", (req, res) => {
        var todo = {
            text: req.body.text,
            status: req.body.status
        }
        Todos.create(todo, (err, todo) => {
            if (err) throw err
            else
                getTodos(res)
        })
    })

    app.put("/api/todo", (req, res) => {
        if (!req.body._id) return res.status(500).send("ID is required !!!")
        else {
            // param1: Vị trí đối tượng cần thao tác
            // param2: nội dung đối tượng cần change
            // param3: callback
            Todos.update(
                {
                    _id: req.body._id
                }, 
                {
                    text: req.body.text,
                    status: req.body.status
                }, 
                (err, todo) => {
                    if (err) return res.status(500).json(err)
                    else
                        getTodos(res)
                })
        }
    })

    app.delete("/api/todo/:id", (req, res) => {

        Todos.remove({
            _id: req.params.id
        }, (err, todo) => {
            if (err) return res.status(500).json(err)
            else
                getTodos(res)
        })
    })
}