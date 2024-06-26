const express = require("express");
const uid = require("uuid");
const app = express();
const logger = require("morgan");

// app.use(function (req, res, next) {
//   console.log(req.url, req.hostname, req.protocol, req.method);
//   next();
// });

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger("combined"));

let tasks = [
  {
    id: "0001",
    title: "Apply for internship",
    desc: "Fill form and submit",
    status: "Submitted",
  },
  {
    id: "0002",
    title: "Orientation",
    desc: "Accept invite and attend orientation ceremony",
    status: "Submitted",
  },
];

// Add new task
app.post("/task", function (req, res) {
  let taskDetails = req.body;
  console.log(taskDetails);
  const id = uid.v4();
  tasks.push({
    id,
    title: taskDetails.title,
    desc: taskDetails.desc,
    status: taskDetails.status,
  });
  res.send("Task added successfully");
});

// Get all tasks
app.get("/", function (req, res) {
  res.send(tasks);
});

// Get single task by ID
app.get("/task/:id", (req, res) => {
  const TaskId = req.params.id;
  currentTask = tasks.find((task) => task.id === TaskId);
  res.send(currentTask);
});

// Modify title and decs of single task by ID
app.put("/task/:id", (req, res) => {
  const taskId = req.params.id;
  const taskDetailsChanged = req.body;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskId) {
      tasks[i].title = taskDetailsChanged.title;
      tasks[i].desc = taskDetailsChanged.desc;
    }
  }
  res.send("Task title and body modified");
});

// Modify a task Status by id
app.patch("/task/:id", (req, res) => {
  taskId = req.params.id;
  const updatedTaskStatus = req.body;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == taskId) {
      tasks[i].status = updatedTaskStatus.status;
    }
  }
  res.send("Task status modified");
});

// Delete a task by using ID
app.delete("/task/:id", (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter((task) => task.id != taskId);
  res.send("Task deleted successfully");
});

app.post("/login", (req, res) => {
  console.log("request body: ", req.body);
  console.log("Content-Type: ", req.headers["content-type"]);
  res.json({ isSuccessful: true, message: "logged in succesful" });
});

// Listen on port 3000
app.listen(3000, function () {
  console.log("Server is up at \n http://localhost:3000");
});

// app.get("/about", function (req, res) {
//   res.send("Welcome to the about page");
// });

// app.get("/add/:val1/:val2", function (req, res) {
//   const result = parseInt(req.params.val1) + parseInt(req.params.val2);

//   res.send("The result is " + result);
// });

// https://web.postman.co/workspace/My-Workspace~1f2dba67-6577-4b3c-8fbc-2b3ab2d308a7/request/26824850-b1d2f28f-fdda-4ab5-a9ed-26634e25ede9
