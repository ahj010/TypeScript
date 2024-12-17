import React, { useState, useEffect } from 'react';
import diaryService from './services/diaries';
import DiaryEntries from './components/DiaryEntries';
import { DiaryEntry, NewEntry , Weather, Visibility } from './types';


function App() {

  const [diary, setDiary] = useState<DiaryEntry[]>([]);
  const [newEntry, setNewEntry] = useState<NewEntry>({} as NewEntry);
  const [error, setError] = useState('');

  useEffect(() => {
   const responsee = diaryService.getAll()
   .then((response) => setDiary(response))
   .catch((error) => console.log('ERRORRRRRR!!!',error));
   console.log(responsee);
    }, [])

    const diaryCreation = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const newEntryObject = {
        date: newEntry.date,
        weather: newEntry.weather,
        visibility: newEntry.visibility,
        comment: newEntry.comment
      };
      try {
        const response = await diaryService.addDiary(newEntryObject);
        setDiary(diary.concat(response));
        setNewEntry({} as NewEntry);
      } catch (error) {
        setError('Error adding new entry: ' + error);
        // console.error('Error adding new entry:', error);
        setTimeout(() => setError(''), 5000);
      }
    }

    const DiaryEntryForm = () => {

      return (
        <div>
            <h2>Add a new entry</h2>
            <form onSubmit={diaryCreation}>
               <div>
               Date: <input type="date" name="date" value={newEntry.date || ''}
               onChange={(event) =>
                setNewEntry({
                  ...newEntry,
                date: event.target.value
                })             }/>
                </div>

            <div>
              visibility
                {Object.values(Visibility).map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="visibility"
                      value={value}
                      checked={newEntry.visibility === value}
                      onChange={(event) =>
                        setNewEntry({
                          ...newEntry,
                          visibility: event.target.value as Visibility,
                        })
                      }
                    />
                    {value}
                  </label>
                ))}
            </div>


            <div>
              weather
                {Object.values(Weather).map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="weather"
                      value={value}
                      checked={newEntry.weather === value}
                      onChange={(event) =>
                        setNewEntry({
                          ...newEntry,
                          weather: event.target.value as Weather,
                        })
                      }
                    />
                    {value}
                  </label>
                ))}
            </div>

                <div>
                    Comment:
                <input
                value={newEntry.comment}
                onChange={(event) =>
                  setNewEntry({
                    ...newEntry,
                    comment: event.target.value,
                  })
                }
              />

                </div>

                <button type="submit" >Add</button>
            </form>
        </div>
      )}

  return (
    <div>
      {error && <h4 style={{ color: 'red' }}>{error}</h4>}
       <DiaryEntryForm />
       <DiaryEntries diary ={diary} />
    </div>
  )
}

export default App
