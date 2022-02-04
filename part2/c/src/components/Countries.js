import Country from "./Country";

const Countries = ({ countriesToShow, callbackSetCountries }) => {
  return (
    <>
      <ul>
        <Country
          countriesToShow={countriesToShow}
          callbackSetCountries={callbackSetCountries}
        />
      </ul>
    </>
  );
};

export default Countries;
