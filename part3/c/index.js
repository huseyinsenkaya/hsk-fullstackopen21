require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const Person = require("./models/person");

morgan.token("person", (req) => {
  return req.person;
});

app.use(express.static("build"));
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(morgan(":method :url :status :response-time :person "));

function logger(req, res, next) {
  req.person = JSON.stringify(req.body);
  next();
}

// GET
app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get("/info", (req, res) => {
  Person.find({}).then((persons) => {
    const entries = persons.length;
    res.send(
      `<p>Phone book has info for ${entries} people</p><p>${new Date()}</p>`
    );
  });
});

app.get("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;

  Person.findById(id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => next(err));
});

// POST
app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body || !body.name || !body.number) {
    return res.status(404).json({
      error: "content missing",
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

// DELETE
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;

  Person.findByIdAndDelete(id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((err) => next(err));
});

// PUT
app.put("/api/persons/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  const changedPerson = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(id, changedPerson, { new: true })
    .then((returnedPerson) => {
      if (returnedPerson) {
        res.json(returnedPerson);
      } else {
        res.status(400).end();
      }
    })
    .catch((err) => next(err));
});

//Error handler
app.use((err, req, res, next) => {
  console.log("here");
  res.status(400).send("Error");
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
