import Logo from '../assets/img/Logo.png'
import './StylePacientes.css'

function AreaMedicaPacientes() {

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

      <div className='container-buscar-paciente'>  
          <div className='buscar-paciente'>
            <h5 className='pacientes'>Aguardando atendimento</h5> 

            <div className='pesuisar-paciente'>
              <input class="buscar form-control me-2" type="search" placeholder="Buscar por paciente" aria-label="Search"/>
              <button class="pesquisar btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
            </div>

            <div className='lista-paciente'>
              <ul className='lista-paciente-ordenada'>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Alice Rodrigues</a> </p>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Arthur Lima</a> </p>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Davi Moreira</a> </p>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Helena Costa</a> </p>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Lucas Almeida</a> </p>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Miguel Ferreira</a> </p>
                <p><i className="icone-paciente bi bi-person-circle"></i> <a className='nome' href=""> Sofia Martins</a> </p>
              </ul>
            </div>

          </div>

          <div className='container-info'>

          <div class="quantidade-paciente text-center">
            <div class="row">
              <div class="col">
                <p className='container-levantamento-descricao'>Pacientes atendidos</p>
                <p className='container-levantamento-quantidade'>0</p> 
              </div>
              <div class="col">
                <p className='container-levantamento-descricao'>Pacientes para atendimento</p>
                <p className='container-levantamento-quantidade'>0</p>
              </div>
              <div class="col">
                <p className='container-levantamento-descricao'>Pacientes em triagem</p>
                <p className='container-levantamento-quantidade'>0</p> 
              </div>
            </div>
          </div>

          <div class="container-agendamento text-center">
            <div class="row g-2">
              <div class="agendamento col">
                <p className='agendamento-dados'>Tempo de atendimento</p>
                <i class="bi bi-clock-history"></i> <input className='tempo' type="text" />
                <i class="bi bi-clock-history"></i> <input className='tempo' type="text" />
              </div>
              <div class="agendamento col">
                <p className='agendamento-dados'>Retornos</p>
                <input className='data' type="date" />
                <input className='data' type="date" />
              </div>
              <div class="agendamento col">
                <p className='agendamento-dados'>Pacientes</p>
              </div>
              <div class="agendamento col">
                <p className='agendamento-dados'>Agenda</p>
              </div>
            </div>
          </div>

          <div className='container-atendimento-mensal'>
            <div className='atendimento-mensal'>
              <p className='atendimento-mensal-titulo'>Atendimento mensal:</p>
            </div>
          </div>

          </div>
        </div>


    </>
  )
}

export default AreaMedicaPacientes
