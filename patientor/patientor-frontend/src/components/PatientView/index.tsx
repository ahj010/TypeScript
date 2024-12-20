import { useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from "@mui/icons-material/Female";
import { Patient , Diagnosis} from "../../types";
import patientService from "../../services/patients";
import diagnosesService from "../../services/diagnoses";
import Details from "./Details";

const PatientView = () => {
    const match = useMatch("/patients/:id");
    const [patient, setPatient] = useState<Patient | null>(null);
    const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

    useEffect(() => {
        const fetchPatient = async () => {
            if (match?.params.id) {
                try {
                    const fetchedPatient = await patientService.getSpecific(match.params.id as string);
                    setPatient(fetchedPatient);
                } catch (error) {
                    console.error("Error fetching patient:", error);
                    setPatient(null);
                }
            }
        };

        const fetchDiagnoses = async () => {
            const fetchedDiagnoses = await diagnosesService.getAll();
            setDiagnoses(fetchedDiagnoses);
        };
         fetchPatient();
         fetchDiagnoses();
    }, [match?.params.id]);

    if (!patient) {
        return <div>Not found</div>;
    }

    let genderIcon = null;
    if (patient.gender === "male") {
        genderIcon = <MaleIcon />;
    } else if (patient.gender === "female") {
        genderIcon = <FemaleIcon />;
    }


    return (
        <>
        <Box>
        <Typography variant="h3">{patient.name} {genderIcon}</Typography>
        </Box>

            <Box>ssn: {patient.ssn}</Box>
            <Box>occupation: {patient.occupation}</Box>

            <Divider component={"br"}/>

            <Divider component={"div"}>
            <Typography variant="h5">Entries</Typography>

                <Box>
            {patient.entries.map((entry) => <Details key={entry.id} entry={entry} diagnoses={diagnoses} />)}
                </Box>
            </Divider>
          <Box>

            </Box>


        </>
    );
};

export default PatientView;
