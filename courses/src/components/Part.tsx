interface PartProps {
    part: CoursePart;
}

const Part =({ part }: PartProps)  => {

    // const assertNever = (value: never): never => {
    //     throw new Error(
    //       `Unhandled discriminated union member: ${JSON.stringify(value)}`
    //     );
    //   };

            switch (part.kind) {
                case 'basic':
                    return(
                    <div>
                <h4>{part.name} {part.exerciseCount}</h4>
                <i>{part.description}</i>
                    </div>
                    )

                    case 'group':
                    return(
                    <div>
                   <h4>{part.name} {part.exerciseCount}</h4>
                    <p>project exercises {part.groupProjectCount}</p>
                    </div>
                    )

                    case 'background':
                    return (
                    <div>
                   <h4>{part.name} {part.exerciseCount}</h4>
                    <i>{part.description}</i>
                    <p>{part.backgroundMaterial}</p>
                    </div>
                    )

                    case 'special':
                        return (
                        <div>
                        <h4>{part.name} {part.exerciseCount}</h4>
                        <i>{part.description}</i>
                        <p>requirements: { part.requirements.join(', ') }</p>
                        </div>
                        )

                default:
                //   return assertNever(part);
                break;

                }
}

export default Part
