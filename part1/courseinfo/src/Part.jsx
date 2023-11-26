const Part = (props) => {
  return (
    <div>
      <p>
        {props.item.name} {props.item.exercises}
      </p>
    </div>
  );
};

export default Part;
