const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

morgan.token("person", (req) => {
  return req.person;
});

app.use(express.static("build"));
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(morgan(":method :url :status :response-time :person "));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Client",
    number: "39-23-6423122",
  },
];

function logger(req, res, next) {
  req.person = JSON.stringify(req.body);
  next();
}

const generateID = () => {
  return Math.max(...persons.map((person) => person.id)) + 1;
};

// GET
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  const entries = persons.length;
  res.send(
    `<p>Phone book has info for ${entries} people</p><p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const query = persons.find((person) => person.id === id);

  if (query) {
    res.json(query);
  } else {
    res.status(404).end();
  }
});

// POST
app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body || !body.name || !body.number) {
    return res.status(404).json({
      error: "content missing",
    });
  }

  const person = {
    id: generateID(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(person);
  res.json(person);
});

// DELETE
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
