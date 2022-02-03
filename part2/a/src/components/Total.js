const reducer = (sum, part) => sum + part.exercises;

const Total = ({ parts }) => {
  return (
    <>
      <b>total of {parts.reduce(reducer, 0)} exercises</b>
    </>
  );
};

export default Total;
