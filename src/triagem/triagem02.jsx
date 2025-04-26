import { useState } from "react";
import Footer from "../components/Footer"
import HeaderBootstrap from "../components/HeaderBootstrap"

function triagem02() {
  return (
    <>
    <HeaderBootstrap/>

       
        <div className="d-flex flex-grow-1">
          {/* SIDEBAR */}
          <aside className="bg-light p-3" style={{ width: "220px" }}>
            <button className="btn btn-success w-100 mb-3">
              Iniciar atendimento
            </button>
            <div className="text-center mb-3">
              <p className="mb-0">Timer</p>
              <strong>00:00:00</strong>
            </div>
            <button className="btn btn-success w-100 mb-2">Resumo</button>
            <button className="btn btn-success w-100">Acompanhamento</button>
          </aside>

          {/* CONTEÚDO PRINCIPAL */}
          <main className="flex-grow-1 p-4">
            <div className="bg-light p-3 mb-4">
              <p className="mb-0">
                <strong>Chico da Silva</strong>
              </p>
              <p className="mb-0">Idade: 12</p>
              <p className="mb-0">Convênio: Amil</p>
              <p className="mb-0">Primeira consulta: Sim</p>
            </div>

            <div className="bg-secondary text-white p-4 rounded">
              <p>
                <strong>Responsável pela triagem</strong>
              </p>
              <p>Inputs relacionados ao mal estar relatado</p>

              <div className="mb-3">
                <label className="form-label">Alergias</label>
                <input className="form-control" placeholder="Digite alergias" />
              </div>

              <div className="mb-3">
                <label className="form-label">Hábitos</label>
                <input className="form-control" placeholder="Digite hábitos" />
              </div>

              <div className="mb-3">
                <label className="form-label">Antecedentes familiares</label>
                <input
                  className="form-control"
                  placeholder="Digite antecedentes"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Antecedentes cirúrgicos</label>
                <input
                  className="form-control"
                  placeholder="Digite antecedentes cirúrgicos"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Digite aqui"
                ></textarea>
              </div>

              <button className="btn btn-success">Enviar</button>
            </div>
          </main>
        </div>

        <Footer/>

    </>
  );
}

export default triagem02;
