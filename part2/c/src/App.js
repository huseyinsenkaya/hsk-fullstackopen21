import React, { useState, useEffect } from "react";
import axios from "axios";

import Content from "./components/Content";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setNewFilter(event.target.value);

    if (newFilter) {
      const countriesToShow = allCountries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(newFilter.toLowerCase());
      });
      setCountries(countriesToShow);
    }
  };

  const callbackSetCountries = (data) => {
    setCountries([data]);
  };

  return (
    <div>
      <Filter handleFilter={handleFilter} />

      <Content
        countries={countries}
        callbackSetCountries={callbackSetCountries}
      />
    </div>
  );
};

export default App;
