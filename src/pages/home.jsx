import React, { useState, Fragment } from "react";

import medicosJson from "../data/medicos.json";
import pacientesJson from "../data/pacientes.json";
import consultasJson from "../data/consultas.json";

const Home = () => {
  const [medicos, setMedicos] = useState(medicosJson);
  const [pacientes, setPacientes] = useState(pacientesJson);
  const [consultas, setConsultas] = useState(consultasJson);

  const totalMedicos = medicos?.length;
  const totalPacientes = pacientes?.length;
  const consultasAgendadas = consultas?.filter(c => c.status === 'Agendada').length;

  return (
    <Fragment>
      <h2>✨ Visão Geral do Sistema</h2>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
       
        <p>
          Total de Médicos: <strong>{totalMedicos}</strong>
        </p>
        <p>
          Total de Pacientes: <strong>{totalPacientes}</strong>
        </p>
        <p>
          Consultas Agendadas: <strong>{consultasAgendadas}</strong>
        </p>
      </div>

    </Fragment>
  );
};

export default Home;
