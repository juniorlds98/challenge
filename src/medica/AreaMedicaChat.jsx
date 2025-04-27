import './StyleChat.css'
import Logo from '../assets/img/Logo.png'

function AreaMedicaChat() {

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

      <div className='container-chat'>
          <div className='historico '>
            <h4 className='titulo-hitorico' >Histórico</h4>

            <div className='topicos-hitorico'>
              <ul className='sub-topicos'>
                  <li><i class="bi bi-file-earmark-medical-fill"></i> Consulta
                    <ul>
                      <li><a href="">Consulta 22/03/25</a></li>
                      <li><a href="">Consulta 15/02/25</a></li></ul>
                    </li>

                  <li><i class="bi bi-clipboard2-pulse"></i> Sintomas
                    <ul>
                      <li><a href="">Histotico de sintomas</a></li></ul>
                    </li>

                  <li><i class="bi bi-file-earmark-text"></i> Diagnosticos
                    <ul>
                      <li><a href="">Diagnostico 1</a></li>
                      <li><a href="">Diagnostico 2</a></li></ul>
                    </li>

                  <li><i class="bi bi-capsule"></i> Medicamentos
                    <ul>
                      <li><a href="">Uso continuo</a></li>
                      <li><a href="">Tratamento</a></li></ul>
                    </li>

                  <li><i class="bi bi-capsule-pill"></i> Alergias
                    <ul>
                      <li><a href="">Medicamentos</a></li>
                      <li><a href="">Outros</a></li></ul>
                    </li>
                  </ul>
            </div>

          </div>

          <div className='chat'>
            <div class="w-full max-w-md h-[600px] shadow-2xl rounded-2xl flex flex-col overflow-hidden">
        
            <h3 class="ermes bg-blue-600 text-center py-4 text-xl font-semibold">
              Hermes
            </h3>

            <div class="container-chat-mensagem flex-1 overflow-y-auto p-4 space-y-4">
              <div class="flex">
                <div class="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[75%]">
                  Vamos iniciar a consulta?
                </div>
              </div>
              
              <div class="flex justify-end">
                <div class="bg-blue-500  p-3 rounded-lg rounded-tr-none max-w-[75%]">
                  Informe quais sintomas a criança está tendo
                </div>
              </div>
            </div>

            <form class="container-mensagens flex justify-center items-center p-3 border-t gap-2">
              <input type="text" placeholder="Digite sua mensagem..." class="mensagens flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
              <button type="submit" class="enviar bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full">
                Enviar
              </button>
              <button type="submit" class="camera bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full">
                <i class="bi bi-camera"></i>
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default AreaMedicaChat
