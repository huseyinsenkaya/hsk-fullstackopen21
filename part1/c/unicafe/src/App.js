import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  //Components
  const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  const Statistics = ({ text, value }) => {
    let avg = (good - bad) / all;
    let percentage = (100 * good) / all;

    if (all === 0) {
      return (
        <div>
          <h1>No feedback given</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={avg} />
            <StatisticLine text={"percentage"} value={percentage} />
          </tbody>
        </table>
      </div>
    );
  };

  const StatisticLine = ({ text, value }) => {
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </>
    );
  };

  //Handle Events
  const handleClick = (text) => {
    const handler = () => {
      if (text === "good") {
        setGood(good + 1);
      } else if (text === "neutral") {
        setNeutral(neutral + 1);
      } else {
        setBad(bad + 1);
      }
      setAll(all + 1);
    };

    return handler;
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleClick("good")} text={"good"} />
      <Button onClick={handleClick("neutral")} text={"neutral"} />
      <Button onClick={handleClick("bad")} text={"bad"} />

      <Statistics />
    </div>
  );
};

export default App;
