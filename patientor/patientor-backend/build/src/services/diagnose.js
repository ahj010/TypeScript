"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnoses_1 = __importDefault(require("../../data/diagnoses"));
const getDiagnoses = () => {
    return diagnoses_1.default;
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
exports.default = { getDiagnoses };
