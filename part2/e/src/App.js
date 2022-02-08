import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
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

    const personExist = persons.find(
      (person) => person.name.toLowerCase() === personObj.name.toLowerCase()
    );

    const changedPerson = { ...personExist, number: newNumber };

    if (personExist) {
      const result = window.confirm(
        `${personObj.name} is already added to phone book, replace the old number with a new one?`
      );
      if (result) {
        personService
          .update(changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
          })
          .catch((error) => {
            setMessage(
              `Error, Information of ${changedPerson.name} has already been removed from the server`
            );

            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      personService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewNumber("");
        setNewName("");
        setMessage(`Added ${returnedPerson.name}`);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  const deletePerson = (person) => {
    const filteredPerson = persons.filter((p) => p.id === person.id);
    const name = filteredPerson[0].name;
    const result = window.confirm(`${name} will be deleted?`);
    if (result) {
      personService.deleteService(person).then((id) => {
        setPersons(persons.filter((p) => p.id !== id));
      });
      setTimeout(() => {
        alert(`${name} is successfully deleted.`);
      }, 500);
    }
  };

  return (
    <div>
      <h2>Phone Book</h2>
      <Notification message={message} />
      <Filter handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        handleName={handleName}
        handleNumber={handleNumber}
      />
      <h3>Numbers</h3>
      <Persons personToShow={personToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
