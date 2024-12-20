import patientData from '../../data/patients';
import { Patient, NewPatientEntry, AddPatientOptions } from '../types';
import { v4 as uuidv4 } from 'uuid';

const getPatients = (): Patient[] => {
    return patientData.map((patient) => ({
      id: patient.id,
      name: patient.name,
      dateOfBirth: patient.dateOfBirth,
      ssn: patient.ssn,
      gender: patient.gender ,
      occupation: patient.occupation,
      entries: patient.entries,
    }));
  };

  const getSpecficPatient = (_id: string): Patient => {
    const specificPatient = patientData.find((patient) => patient.id === _id);
    if (!specificPatient) {
      throw new Error(`Patient with id ${_id} not found`);
    }
    return {
      id: specificPatient.id,
      name: specificPatient.name,
      dateOfBirth: specificPatient.dateOfBirth,
      ssn: specificPatient.ssn,
      gender: specificPatient.gender,
      occupation: specificPatient.occupation,
      entries: specificPatient.entries,
    };
  };

const addPatients = (newPatientData: AddPatientOptions): NewPatientEntry => {
    const newPatient: Patient = {
        id: uuidv4(),
        entries: [],
        ...newPatientData,
    };
    patientData.push(newPatient);
    console.log(newPatient);

    return newPatient;
};

export default { getPatients, addPatients, getSpecficPatient };
