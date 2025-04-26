import { useState } from "react";
import Footer from "../components/Footer";
import HeaderBootstrap from "../components/HeaderBootstrap";

function triagem03() {
  return (
    <>
      <HeaderBootstrap />

      <div className="container-fluid p-0">
    
      <div className="d-flex" style={{ minHeight: "calc(100vh - 160px)" }}>
        <div
          className="bg-light p-3 d-flex flex-column"
          style={{ width: "220px" }}
        >
          <button className="btn btn-success mb-3">Parar atendimento</button>
          <div className="mb-3">
            <p className="mb-0">Timer</p>
            <h5>00:00:00</h5>
          </div>
          <button className="btn btn-success mb-3">Resumo</button>
          <button className="btn btn-success">Acompanhamento</button>
        </div>

        <div className="flex-grow-1 p-4 bg-light">
          <div className="d-flex align-items-center bg-secondary p-3 rounded text-white mb-3">
            <div
              className="rounded-circle bg-success me-3"
              style={{ width: "60px", height: "60px" }}
            ></div>
            <div>
              <p className="mb-1">Chico da Silva</p>
              <p className="mb-1">Idade: 12</p>
              <p className="mb-1">Convênio: Amil</p>
              <p className="mb-0">Primeira consulta: Sim</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded">
            <h6>
              Insights Iniciais indicado pelo técnico responsável pela triagem:
            </h6>
            <ul>
              <li>Coleta de dados iniciais</li>
              <li>Sintomas iniciais</li>
              <li>Recomendações se necessário</li>
              <li>
                Coleta de questões específicas (Alergia, hábitos, antecedentes
                de patógenos familiares e cirurgia)
              </li>
            </ul>

            <div className="d-flex align-items-center mt-4">
              <div className="bg-danger text-white p-2 flex-grow-1 text-center rounded me-3">
                Confirmação de formulário
              </div>
              <button className="btn btn-success">Salvar</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
    </>
  );
}

export default triagem03;
