const Total =  (props) => {
    const sum = props.exercises.reduce((partialSum,a) => partialSum+a,0);
    return(
        <p>Number of exercises {sum}</p>
    )
}

export default Total