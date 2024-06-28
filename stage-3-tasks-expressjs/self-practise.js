// Self practice start here
const express = require("express");
const server = express();

const logger = require("morgan");

server.use(express.json());
server.use(logger("dev"));

const uuid = require("uuid");

let persons = [];

server.listen(3000, () => {
  console.log(`Server is up at port 3000\n http://localhost:3000`);
});

server.get("/", (req, res) => {
  res.send(persons);
});

server.post("/signup", (req, res) => {
  const newPerson = req.body;
  console.log(newPerson);
  const id = uuid.v6();
  persons.push({
    id,
    firstName: newPerson.firstName,
    lastName: newPerson.lastName,
    email: newPerson.email,
    password: newPerson.password,
  });

  res.send("New person added succesfully");
});

server.get("/login/:email/:password", (req, res) => {
  const email = req.params.email;
  const password = req.params.password;

  const requestedPerson = persons.find((person) => {
    return person.email == email && person.password == password;
  });
  if (requestedPerson) {
    res.send("<p>You are logged in</p>");
  } else {
    res.status(404).end;
  }
});

server.put("/person/:id", function (req, res) {
  const personId = req.params.id;
  const changeperson = req.body;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === personId) {
      persons[i].firstName = changeperson.firstName;
    }
  }

  res.send("data edited ");
});

server.patch("/person/:id", function (req, res) {
  const personId = req.params.id;
  const changeperson = req.body;
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].id === personId) {
      persons[i].lastName = changeperson.lastName;
    }
  }

  res.send("data edited ");
});

server.delete("/person/:id", (req, res) => {
  const personId = req.params.id;
  persons = persons.filter((person) => person.id != personId);
  res.send("data deleted");
});
