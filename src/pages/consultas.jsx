import { useEffect, useState } from "react";
import "../assets/css/style.css";
import "../assets/css/consultasAdm.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import axios from "axios";

import medicosJson from "../data/medicos.json";
import pacientesJson from "../data/pacientes.json";
import consultasJson from "../data/consultas.json";

export default function Consultas() {
  const [consultas, setConsultas] = useState(consultasJson);
  const [medicos, setMedicos] = useState(medicosJson);
  const [pacientes, setPacientes] = useState(pacientesJson);
  
  return (
    <div>
      <Header></Header>
      <main className="conteudoPrincipal">
        <h2 className="conteudoPrincipal-cadastro-titulo">Consultas</h2>
        <div className="container" id="conteudoPrincipal-lista">
          <table id="tabela-lista">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Paciente</th>
                <th>Médico</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody id="tabela-lista-corpo">
              {consultas.map((event) => {
                let medicoConsulta = medicos.find(m => m.idMedico === event.idMedico);
                let pacienteConsulta = pacientes.find(p => p.idPaciente === event.idPaciente);
                return (
                  <tr key={event.idConsulta}>
                    <td>{event.observacoes}</td>
                    <td>
                      {
                        pacienteConsulta.nome
                      }
                    </td>
                    <td>
                      {
                       medicoConsulta.nome
                      }
                    </td>
                    <td>
                      {Intl.DateTimeFormat("pt-BR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      }).format(new Date(event.dataHora))}
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
