import { useState } from "react";
import Footer from "../components/Footer";
import HeaderBootstrap from "../components/HeaderBootstrap";

function triagem01() {
  return (
    <>
      <HeaderBootstrap />

      <div className="d-flex flex-column min-vh-100">
        <header className="bg-[#005aa9] d-flex align-items-center justify-content-center px-4 py-2 w-100">
          <div className="d-flex gap-3">
            <button className="btn btn-light">Painel</button>
            <button className="btn btn-light">Agenda</button>
            <button className="btn btn-light">Prontuarios</button>
          </div>
        </header>

        <div className="row flex-grow-1 w-100 m-0">
          <aside
            className="col-auto bg-light p-3"
            style={{ minWidth: "180px" }}
          >
            <p className="fw-bold mb-3">
              PACIENTES AGUARDANDO <br />
              ATENDIMENTO TRIAGEM
            </p>
            {["CHICO", "FRANCISCO", "OLIVA", "OLIVEIRA"].map((nome, i) => (
              <div key={i} className="d-flex align-items-center mb-2">
                <div
                  className="rounded-circle bg-success me-2"
                  style={{ width: 15, height: 15 }}
                ></div>
                <span>{nome}</span>
              </div>
            ))}
          </aside>

          <main className="col p-4">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="bg-light p-3 text-center">
                  <strong>PACIENTES ATENDIDOS</strong>
                  <div className="display-6">0</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="bg-light p-3 text-center">
                  <strong>PACIENTES PARA ATENDIMENTO</strong>
                  <div className="display-6">0</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="bg-light p-3 text-center">
                  <strong>PACIENTES EM TRIAGEM</strong>
                  <div className="display-6">0</div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="bg-light p-5 text-center">
                  <strong>NOVO ATENDIMENTO</strong>
                </div>
              </div>

              <div className="col-md-6">
                <div className="bg-light p-5 text-center">
                  <strong>MEDICOS DISPONIVEIS</strong>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default triagem01;
