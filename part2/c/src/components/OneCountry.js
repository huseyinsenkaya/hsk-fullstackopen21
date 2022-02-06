import { useState, useEffect } from "react";
import axios from "axios";

const OneCountry = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  const oneCountry = {
    name: country.name.common,
    capital: country.capital,
    population: country.population,
    languages: Object.values(country.languages),
    flag: country.flags.png,
  };
  const api_key = process.env.REACT_APP_API_KEY;
  const cityName = oneCountry.capital;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`;
  useEffect(() => {
    setLoading(true);
    axios
      .get(weatherUrl)
      .then((response) => {
        setWeather([response.data]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  if (weather.length > 0) {
    const weatherIcon = weather[0].weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    
    return (
      <>
        <h1>{oneCountry.name}</h1>
        <p>{oneCountry.capital}</p>
        <p>{oneCountry.population}</p>
        <h2>languages</h2>
        <ul>
          {oneCountry.languages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
        <img src={oneCountry.flag} />
        <h1>Weather in {oneCountry.capital}</h1>
        <p>
          <b>temperature: </b>
          {weather[0].main.temp}° Celcius
        </p>
        <img src={weatherIconUrl} alt="Weather Icon" />
        <p>
          <b>wind: </b>
          {weather[0].wind.speed}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1>{oneCountry.name}</h1>
        <p>{oneCountry.capital}</p>
        <p>{oneCountry.population}</p>
        <h2>languages</h2>
        <ul>
          {oneCountry.languages.map((lang, i) => (
            <li key={i}>{lang}</li>
          ))}
        </ul>
        <img src={oneCountry.flag} alt="Country Flag" />
      </>
    );
  }
};

export default OneCountry;
