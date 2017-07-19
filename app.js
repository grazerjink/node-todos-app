var express = require("express");

// Lấy param dạng post của req
var bodyParser = require("body-parser");

var config = require("./config");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController")
// Log được các req đến
var morgan = require("morgan");
var mongoose = require("mongoose");
var app = express();

// lấy port của hệ thống nếu ko thì 3000
var port = process.env.PORT || 3000;

// Khởi tạo việc sử dụng các middleware
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());

// extended true là lấy được cấc kiểu dữ liệu khác nữa mở rộng ra
app.use(bodyParser.urlencoded({ extended: true }));

// xài morgan log hết tất cả thông tin
app.use(morgan("dev"));

// config ejs engine
app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log("App listening on port:", port);
})