import Part from "./Part";

interface ContentProps {
    courseParts: Array<CoursePart>;
};

const Content = ({courseParts}: ContentProps) => {
    return(
        <div>
            {courseParts.map((part) => (

            <div key={part.name}>
            <Part part={part}/>
            </div>

))}
        </div>
    )
};

export default Content;
