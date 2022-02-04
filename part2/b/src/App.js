import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
