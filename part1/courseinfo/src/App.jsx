import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
const App = () => {
  const course = "Half Stack application development";
  const part1 = { name: "Fundamentals of React", exercises1: 10 };
  const part2 = { name: "Using props to pass data", exercises2: 7 };
  const part3 = { name: "State of a component", exercises3: 14 };

  return (
    <div>
      <Header course={course} />
      <Content
        items={[
          [part1, exercises1],
          [part2, exercises2],
          [part3, exercises3],
        ]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;

