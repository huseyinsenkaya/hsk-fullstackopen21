import React, { useState, useEffect } from "react";
import axios from "axios";

import Result from "./components/Result";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = countries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(countryName.toLowerCase());
  });

  const handleCountryName = (event) => {
    setCountryName(event.target.value);
  };

  const callbackSetCountries = (data) => {
    setCountries(data);
  };
  

  return (
    <div>
      find countries <input onChange={handleCountryName} />
      <Result
        countriesToShow={countriesToShow}
        callbackSetCountries={callbackSetCountries}
      />
    </div>
  );
};

export default App;
