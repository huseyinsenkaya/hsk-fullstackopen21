import React from "react";

const Part = (props) => {
  //console.log(props);
  return (
    <>
      <p>
        {props.partName} {props.exercise}
      </p>
    </>
  );
};

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Content = (props) => {
  //console.log(props);
  return (
    <>
      {props.parts.map((e,index) => (
        <Part partName={e.name} exercise={e.exercises} key={index} />
      ))}
      {/* <Part partName={props.parts[0].name} exercise={props.parts[0].exercises} />; */}
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{" "}
      {/* {props.exercises1 + props.exercises2 + props.exercises3} */}
      {props.parts.reduce((a, b) => a + b.exercises, 0)}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header name={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default App;
