const Total = (props) => {
  console.log(props);
  const sum = props.exercises.reduce(function (acc, obj) {
    return acc + obj.exercises;
  }, 0);
  return <p>Number of exercises {sum}</p>;
};

export default Total;
