import { useState } from "react";
import Feedback from "./Feedback";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodValue = (newValue) => () => {
    setGood(newValue);
  };
  const setNeutralValue = (newValue) => () => {
    setNeutral(newValue);
  };
  const setBadValue = (newValue) => () => {
    setBad(newValue);
  };

  const setGeneralValue = (newValue, func) => () => {
    func(newValue);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      {/* <Feedback
        functions={[
          setGoodValue(good + 1),
          setNeutralValue(neutral + 1),
          setBadValue(bad + 1),
        ]}
      /> */}
      <Button onClick={setGoodValue(good + 1)} text="Good" />
      <Button onClick={setNeutralValue(neutral + 1)} text="Neutral" />
      <Button onClick={setBadValue(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics setValues={[good, neutral, bad]} />
    </>
  );
};
export default App;

