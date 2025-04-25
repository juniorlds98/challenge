import '../responsavel.css'
import Logo from '../assets/img/Logo.png'
import crianca from '../assets/img/crianca.jpg'

function AreaResponsavel() {

  return (
    <>

    <div className='menu menu-expand-lg bg-body-tertiary fixed-top'> 
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className='logo-perfil d-flex justify-content-between'> 
          <img src={Logo} alt="Logo" width="30" height="24" className="img d-inline-block align-text-top "/>
        </div>
      
        <div className='conteudo-central justify-content-center'>
          <nav class="nav nav-pills nav-fill">
            <a class="nav-link active" aria-current="page" href="#">Painel</a>
            <a class="nav-link" href="#">Agenda</a>
            <a class="nav-link" href="#">Prontuarios</a>
          </nav>
        </div>

        <div className='logo-perfil d-flex justify-content-between'> 
          <button className="btn btn-outline-primary rounded-circle">   
          <i className="bi bi-person-circle"></i>
        </button>
        </div>

      </div>
    </div>

    <div className="descricao d-flex position-relative">
        <img src={crianca} class="crianca flex-shrink-0 me-2" alt="imagem de um menino com cabelo e olhos castanho escuro"/>
        <div>
          <h5 class="mt-0">Vinicius Nogueira da Silva</h5>
          <ul>
            <li><strong>Idade:</strong> 12 anos</li>
            <li><strong>Convênio:</strong> Amil</li>
            <li><strong>Pais:</strong> Maria de Souza Nogueira e Marcos Pereira da Silva</li>
            <li><strong>Primeira consulta:</strong> Sim</li>
          </ul>
        </div>
      </div>
          
    <div className='pacinete'>
      <div className='dados-paciente'>
        <ul class="nav nav-underline">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Status</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Número</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Paciente</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Médico</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Telefone</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Convênio</a>
          </li>
        </ul>
      </div>

      <div className='informacao-gerais'>
      <div class="list-group">
        <div class="row row-cols">
          <button type="button" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark-text-fill"></i> Informações gerais</button>
          <button type="button" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark-text-fill"></i> Relatórios sobre saúde</button>
          <button type="button" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark-text-fill"></i> Exames em PDF</button>
          <button type="button" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark-text-fill"></i> Pedidos de novos exames</button>
          <button type="button" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark-text-fill"></i> Receita de medicamentos (Medicamentos disponíveis)</button>
          <button type="button" class="list-group-item list-group-item-action"><i class="bi bi-file-earmark-text-fill"></i> Acompanhamento de status médicos</button>
        </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default AreaResponsavel
