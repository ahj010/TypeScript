import axios from 'axios'
import { DiaryEntry, NewEntry } from '../types'

const baseUrl = 'http://localhost:3000/api/diaries';

 const getAll = async () => {
    const response = await axios.get<DiaryEntry[]>(baseUrl);
    return response.data;
};

const addDiary = async (object: NewEntry) => {
    const response = await axios.post<DiaryEntry>(baseUrl, object);
    console.log(response.data);
    return response.data;
}

export default { getAll, addDiary };
