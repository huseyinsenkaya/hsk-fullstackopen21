import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const personToShow =
    filterName.length === 0
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterName)
        );

  const handleName = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };

    let personExist = persons.find((person) => person.name === newName);

    if (personExist) {
      alert(newName + " is already added to phone book.");
    } else {
      setPersons(persons.concat(personObj));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phone Book</h2>

      <Filter handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        handleName={handleName}
        handleNumber={handleNumber}
      />

      <h3>Numbers</h3>

      <Persons personToShow={personToShow} />
    </div>
  );
};

export default App;
