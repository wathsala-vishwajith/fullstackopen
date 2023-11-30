const StaticLine = (props) => {
  // save clicks of each button to its own state
  return (
    <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </>
  );
};

export default StaticLine;
