const Statistics = ({ setValues }) => {
  // save clicks of each button to its own state
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  const sum = (array) => array.reduce((a, b) => a + b);
  const positive = (array) => {
    return ((array[0] * 1 + array[2] * -1) * 100) / sum(array);
  };
  if (sum(setValues) === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <p> good {setValues[0]} </p>
        <p> neutral {setValues[1]}</p>
        <p> bad {setValues[2]}</p>
        <p> All {sum(setValues)} </p>
        <p>Average {average(setValues)}</p>
        <p>Positive {positive(setValues)}%</p>
      </>
    );
  }
};

export default Statistics;
