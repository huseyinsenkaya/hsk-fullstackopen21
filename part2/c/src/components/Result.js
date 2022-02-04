import Countries from "./Countries";

const Result = ({ countriesToShow, callbackSetCountries }) => {
  const isOver = countriesToShow.length < 10;

  if (isOver) {
    return (
      <>
        <Countries
          countriesToShow={countriesToShow}
          callbackSetCountries={callbackSetCountries}
        />
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

export default Result;
