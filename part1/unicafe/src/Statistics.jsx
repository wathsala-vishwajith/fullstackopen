import StaticLine from "./StaticLine";

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
        {/* <p> good {setValues[0]} </p>
        <p> neutral {setValues[1]}</p>
        <p> bad {setValues[2]}</p>
        <p> All {sum(setValues)} </p>
        <p>Average {average(setValues)}</p>
        <p>Positive {positive(setValues)}%</p> */}
        <table>
          <tbody>
            <StaticLine text="good" value={setValues[0]} />
            <StaticLine text="neutral" value={setValues[1]} />
            <StaticLine text="bad" value={setValues[2]} />
            <StaticLine text="All" value={sum(setValues)} />
            <StaticLine text="Average" value={average(setValues)} />
            <StaticLine text="Positive" value={positive(setValues)} />
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
