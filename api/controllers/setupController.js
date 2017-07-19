var Todos = require("../models/todoModel")

module.exports = (app) => {
    app.get("/api/setupTodos", (req, res) => {
        //Setup data for database
        var seedTodos = [
            {
                text: "Học Node.js",
                status: false
            },
            {
                text: "Học Angular.js",
                status: false
            },
            {
                text: "Viết chương trình hoàn chỉnh",
                status: false
            }
        ]

        // Dùng create khỏi save như ban đầu
        Todos.create(seedTodos, (err, results) => {
            res.send(results);
        })


    })
}