import Person from "./Person";

const Persons = ({personToShow}) => {
  return (
    <>
      <ul>
        {personToShow.map((person, i) => (
          <Person key={i} person={person} />
        ))}
      </ul>
    </>
  );
};

export default Persons;
