const Country = ({ country, callbackSetCountries }) => {
  return (
    <>
      <li>
        {country.name.common}{" "}
        <button onClick={() => callbackSetCountries(country)}>show</button>
      </li>
    </>
  );
};

export default Country;

