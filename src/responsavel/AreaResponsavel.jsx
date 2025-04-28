import '../responsavel/responsavel.css'
import crianca from '../assets/img/crianca.jpg'
import Footer from "../components/Footer"

function AreaResponsavel() {
  return (
    <>
      <header className="custom-header">
        <nav className="header-nav">
          <a href="#">Painel</a>
          <a href="#">Agenda</a>
          <a href="#">Prontuário</a>
        </nav>
      </header>
    <br />

      <div className="descricao d-flex flex-column align-items-center text-center card-shadow p-4 mb-4">
  <img src={crianca} className="crianca mb-3" alt="imagem de um menino com cabelo e olhos castanho escuro"/>
  <h5 className="mt-0 mb-2">Vinicius Nogueira da Silva</h5>
  <ul className="list-unstyled">
    <li><strong>Idade:</strong> 12 anos</li>
    <li><strong>Convênio:</strong> Amil</li>
    <li><strong>Pais:</strong> Maria de Souza Nogueira e Marcos Pereira da Silva</li>
    <li><strong>Primeira consulta:</strong> Sim</li>
  </ul>
</div>


      <div className="paciente">
      <div className="paciente">
  <div className="dados-paciente card-shadow p-4 mb-4 text-center">
    <ul className="nav nav-underline justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="#">Status</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Número</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Paciente</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Médico</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Telefone</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Convênio</a>
      </li>
    </ul>
  </div>
</div>


        <div className="informacao-gerais card-shadow p-3 mb-5">
          <div className="list-group">
            <div className="row row-cols-1 g-2">
              <button type="button" className="list-group-item list-group-item-action">
                <i className="bi bi-file-earmark-text-fill"></i> Informações gerais
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                <i className="bi bi-file-earmark-text-fill"></i> Relatórios sobre saúde
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                <i className="bi bi-file-earmark-text-fill"></i> Exames em PDF
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                <i className="bi bi-file-earmark-text-fill"></i> Pedidos de novos exames
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                <i className="bi bi-file-earmark-text-fill"></i> Receita de medicamentos (Medicamentos disponíveis)
              </button>
              <button type="button" className="list-group-item list-group-item-action">
                <i className="bi bi-file-earmark-text-fill"></i> Acompanhamento de status médicos
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AreaResponsavel