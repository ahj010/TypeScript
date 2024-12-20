import diagnoseData from '../../data/diagnoses';
import { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
    return diagnoseData;
};

// const getSpecficDiagnoses = (code: string): Diagnosis[] => {
//     const specificDiagnoses = diagnoseData.find((patient) => patient.entries.diagnosesCode === code);
//     if (!specificDiagnoses) {
//       throw new Error(`Patient with id ${code} not found`);
//     }
//     return {
//       code: specificDiagnoses.code,
//       name: specificDiagnoses.name,
//       latin: specificDiagnoses.latin
//     };
//   };

export default { getDiagnoses };
