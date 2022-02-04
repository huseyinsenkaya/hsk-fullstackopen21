const Country = ({ countriesToShow, callbackSetCountries }) => {
  const isOne = countriesToShow.length === 1;

  const handleClick = (event) => {
    const showCountry = countriesToShow.filter(
      (country) => country.name.common === event
    );
    console.log(showCountry);
    callbackSetCountries(showCountry);
  };

  if (isOne) {
    const oneCountry = {
      name: countriesToShow[0].name.common,
      capital: countriesToShow[0].capital,
      population: countriesToShow[0].population,
      languages: Object.values(countriesToShow[0].languages),
      flag: countriesToShow[0].flags.png,
    };
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
      </>
    );
  } else {
    return (
      <>
        {countriesToShow.map((country, i) => (
          <li key={i}>
            {country.name.common}{" "}
            <input
              type="button"
              value="Show"
              onClick={() => handleClick(country.name.common)}
            />
          </li>
        ))}
      </>
    );
  }
};

export default Country;
