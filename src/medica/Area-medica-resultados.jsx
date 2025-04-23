import '../medica-resultados.css'
import Logo from '../assets/img/Logo.png'
import crianca from '../assets/img/crianca.jpg'

function Resultado() {

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

    <div className='historico-fluid'>
       <div class="row align-items-center"> 

        <div className='time col-3'>
          <button className="col-10 mb-3 p-2 bg-primary text-white">Parar atendimento</button>
          <h2 id="display" class="display-4 mb-4">00:00:00</h2>
          <button className='col-10 mb-3 p-2 bg-primary text-white'>Resultado</button>
          <button className='col-10 p-2 bg-primary text-white'>Acompanhamento</button>
        </div>
        
        <div className="descricao-paciente col-9 ">
          <div className='paciente'>
            <img src={crianca} class="crianca flex-shrink-0 me-2" alt="imagem de um menino com cabelo e olhos castanho escuro"/> 
            <div>
              <h4 class="mt-0">Vinicius Nogueira da Silva</h4>
              <ul>
                <li><strong>Idade:</strong> 12 anos</li>
                <li><strong>Convênio:</strong> Amil</li>
                <li><strong>Pais:</strong> Maria de Souza Nogueira e Marcos Pereira da Silva</li>
                <li><strong>Primeira consulta:</strong> Sim</li>
                <li><strong>Estado:</strong> </li>{/*Estado do paciente*/}
              </ul>
            </div>
          </div>

          <div className='container-observacoes'>
            <div class="row gap-2 justify-content-center">
                <div className='observacoes col-3'>Alergias</div>
                <div className='observacoes col-2'>Hábitos</div>
                <div className='observacoes col-3'>Antecedentes familiares</div>
                <div className='observacoes col-3'>Antecedentes cirurgicos</div>
                
                
                <div className='Insights col-12'>
                  <h5 className='titulo'>Insights finais:</h5>

                  <div className='campo-1'>
                      <ul class="descricao-geral">
                        <li class="col-12 mb-2">Consultas Anteriores: </li>
                        <li class="col-12 mb-2">Triagem: </li>
                        <li class="col-12 mb-2">
                          <a class="col-12" href="#"><i class="bi bi-file-earmark-text-fill"></i> Relatório do médico:</a>
                        </li>
                    </ul>
                  </div>

                  <div className='campo-2'>
                    <p><i class="bi bi-capsule"></i> Medicamentos indicados pela IA:</p>
                  </div>

                  <div className='campo-3'>
                    <p><i class="bi bi-file-earmark-fill"></i> Exames indicados pe IA:</p>
                  </div>

                  <button className='salvar-info col-1 mb-3 p-2 bg-primary text-white'>Salvar</button>


                  <div className='campo-4'>
                  <button className='col-8 mb-3 p-2 bg-primary text-white'>Confirmação do diagnóstico</button>
                  <button className='col-8 mb-3 p-2 bg-primary text-white'>Confirmação parcial do diagnóstico</button>
                  </div>
              </div>
          </div>

          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Resultado
