"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const getPatients = () => {
    return patients_1.default.map((patient) => ({
        id: patient.id,
        name: patient.name,
        dateOfBirth: patient.dateOfBirth,
        ssn: patient.ssn,
        gender: patient.gender,
        occupation: patient.occupation,
        entries: patient.entries,
    }));
};
const getSpecficPatient = (_id) => {
    const specificPatient = patients_1.default.find((patient) => patient.id === _id);
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
const addPatients = (newPatientData) => {
    const newPatient = Object.assign({ id: (0, uuid_1.v4)(), entries: [] }, newPatientData);
    patients_1.default.push(newPatient);
    console.log(newPatient);
    return newPatient;
};
exports.default = { getPatients, addPatients, getSpecficPatient };
