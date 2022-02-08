const Person = ({ person, deletePerson }) => {
  const handleDelete = (person) => {
    deletePerson(person);
  };

  return (
    <>
      <li>
        {person.name} {person.number}{" "}
        <button onClick={() => handleDelete(person)}>delete</button>{" "}
      </li>
    </>
  );
};

export default Person;
