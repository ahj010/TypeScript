import { DiaryEntry } from "../types";

const DiaryEntries = ({ diary }: { diary: DiaryEntry[] }) => {
    return (
        <div>
            <h2>Diary Entries</h2>
            {diary.map(entry => (
                <div key={entry.id}>
                    <h4>Date: {entry.date}</h4>
                    <div>
                    <p>Weather: {entry.weather}</p>
                    <p>Visibility: {entry.visibility}</p>
                    <i>{entry.comment}</i>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default DiaryEntries;
