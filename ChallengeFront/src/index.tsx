import "../src/style/index.css";

function Triagem() {
  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white custom-shadow py-4">
        <div className="container justify-content-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              className="logo-navbar"
              src="/src/assets/svgs/logo1.svg"
              alt="Logo"
            />
          </a>
        </div>
      </nav>

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
      <footer className="bg-primary text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <img
                className="logo2"
                src="../src/assets/svgs/logo2.svg"
                alt=""
              />
              <h6 className="fw-bold">Nossa Missão</h6>
              <p className="small">
                Excelência em saúde para crianças e adolescentes por meio da
                assistência, e propiciando campo de ensino e pesquisa.
              </p>

              <h6 className="fw-bold">Redes Sociais</h6>
              <img
                src="../src/assets/svgs/insta.svg"
                alt=""
                className="insta"
              />
              <img src="../src/assets/svgs/face.svg" alt="" className="face" />
              <img
                src="../src/assets/imgs/linkedin.png"
                alt=""
                className="linkedin"
              />
              <img
                src="../src/assets/svgs/youtube.svg"
                alt=""
                className="youtube"
              />
              <div className="d-flex gap-2">
                <svg width="24" height="24"></svg>
                <svg width="24" height="24"></svg>
                <svg width="24" height="24"></svg>
              </div>

              <div className="d-flex align-items-center mt-3">
                <img
                  src="../src/assets/imgs/badget.png"
                  alt=""
                  className="badget"
                />

                <p className="mb-0 small text-white">
                  Hospital Acreditado pela Joint Commission International
                </p>
              </div>
            </div>

            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Nossos Serviços</h6>
              <ul className="list-unstyled small">
                <li>Alta Complexidade</li>
                <li>Ambulatório de Especialidades</li>
                <li>Apoio Diagnóstico</li>
                <li>Centro Cirúrgico</li>
                <li>Hospital Dia</li>
                <li>Internação</li>
                <li>Pronto-Socorro</li>
                <li>Terapia Intensiva</li>
              </ul>
            </div>

            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Alta Complexidade</h6>
              <ul className="list-unstyled small">
                <li>Aerodigestivo</li>
                <li>Cardiologia</li>
                <li>Nefrologia</li>
                <li>Neurologia</li>
                <li>Oncologia</li>
                <li>Reabilitação Intestinal</li>
                <li>Terapia Fetal e Neonatal</li>
              </ul>
            </div>

            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Institucional</h6>
              <ul className="list-unstyled small">
                <li>Canal LGPD</li>
                <li>Escritório de Inovação</li>
                <li>Fundação JLES</li>
                <li>Imprensa</li>
                <li>Instituto PENSI</li>
                <li>Programa de Compliance</li>
                <li>Programa de Voluntariado</li>
                <li>Quem Somos</li>
                <li>Trabalhe conosco</li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Saúde Infantil</h6>
              <ul className="list-unstyled small">
                <li>Doenças de A a Z</li>
                <li>Notícias</li>
                <li>Alimentação Infantil</li>
                <li>Curva de Crescimento</li>
                <li>Cálculo de IMC Infantil</li>
                <li>Calendário de Vacinação</li>
                <li>Calculadora de Jejum</li>
              </ul>
            </div>
          </div>

          <div className="border-top border-light pt-3 mt-4 text-center small">
            <p className="mb-1">
              Copyright © 2024 <strong>Hospital Infantil Sabará</strong> - Todos
              os direitos reservados
            </p>
            <p>
              <a href="#" className="text-white text-decoration-underline me-2">
                Política de Privacidade
              </a>
              <a href="#" className="text-white text-decoration-underline me-2">
                Política de Cookies
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Termos e Condições de Uso
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Triagem;