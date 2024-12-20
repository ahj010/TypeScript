import express from 'express';
import diagnoseService from '../services/diagnose';


const diagnosesRouter = express.Router();

diagnosesRouter.get('/', (_req, res) => {
    const diagnoses = diagnoseService.getDiagnoses();
    res.send(diagnoses);
});

// diagnosesRouter.get('/:id' , (req, res) => {
//   const patient = diagnoseService.getSpecficDiagnoses(req.params.id);
//    res.json(patient);
// });

export default diagnosesRouter;
