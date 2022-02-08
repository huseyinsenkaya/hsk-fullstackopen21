import Person from "./Person";

const Persons = ({personToShow,deletePerson}) => {
  return (
    <>
      <ul>
        {personToShow.map((person, i) => (
          <Person key={i} person={person} deletePerson={deletePerson} />
        ))}
      </ul>
    </>
  );
};

export default Persons;
