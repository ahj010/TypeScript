interface TotalProps{
    exercises: number
};

const Total = (props: TotalProps) => {
    return (
        <p>
            Number of exercises <b>{props.exercises}</b>
        </p>
    )
};

export default Total;
