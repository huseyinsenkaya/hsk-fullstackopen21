import Country from "./Country";
import OneCountry from './OneCountry';


const Content = ({ countries, callbackSetCountries }) => {
  const isOver = countries.length < 10;
  const isOne = countries.length === 1;

  if (isOne) {
    return (
      <>
        <OneCountry country={countries[0]} />
      </>
    );
  } else if (isOver) {
    return (
      <>
        <ul>
          {countries.map((country, i) => (
            <Country
              key={i}
              country={country}
              callbackSetCountries={callbackSetCountries}
            />
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
};

export default Content;
