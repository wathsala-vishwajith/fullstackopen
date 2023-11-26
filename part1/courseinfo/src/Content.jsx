import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part item={props.items[0]} />
      <Part item={props.items[1]} />
      <Part item={props.items[2]} />
    </>
  );
};

export default Content;
