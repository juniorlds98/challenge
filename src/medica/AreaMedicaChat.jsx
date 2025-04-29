import './StyleChat.css'
import Logo from '../assets/img/Logo.png'
import { useState } from 'react'
import axios from 'axios';
import ChatResponse from './components/ChatResponse'

function AreaMedicaChat() {
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({
    observacoes_medicas: "",
    relatorio_pessoal: "",
    pressao: "",
    saturacao_sangue: "",
    peso: 0,
    exames_realizados: "",
    historico_med_familiar: "",
    condicoes_med_preexistentes: "",
    medicacoes_em_uso: "",
    restricoes: "",
    temperatura: ""
  });
const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
};
const handleSubmit = async (e) => {
    e.preventDefault();
  try{
    const DiagnosticPayload = {
      id: 0,
      observacoes_medicas: formData.observacoes_medicas,
      relatorio_pessoal: formData.relatorio_pessoal,
      pressao: formData.pressao,
      saturacao_sangue: formData.saturacao_sangue,
      peso: parseFloat(formData.peso),
      exames_realizados: formData.exames_realizados,
      historico_med_familiar: formData.historico_med_familiar,
      condicoes_med_preexistentes: formData.condicoes_med_preexistentes,
      medicacoes_em_uso: formData.medicacoes_em_uso,
      restricoes: formData.restricoes,
      temperatura: formData.temperatura
    };
    console.log(DiagnosticPayload)
    const response = await axios.post(`${import.meta.env.VITE_API_URL}diagnostico/enviar-para-analise`, DiagnosticPayload);
    setResponseData(response.data);

  }catch(error){
    alert('erro ao encontrar',error)
  }
  }
    
  return (
    <>
    <div className='menu menu-expand-lg bg-body-tertiary fixed-top'> 
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className='logo-perfil d-flex justify-content-between'> 
          <img src={Logo} alt="Logo" width="30" height="24" className="img d-inline-block align-text-top "/> 
        </div> 
      
        <div className='conteudo-central justify-content-center'>
          <nav className="nav nav-pills nav-fill">
            <a className="nav-link active" aria-current="page" href="#">Painel</a>
            <a className="nav-link" href="#">Agenda</a>
            <a className="nav-link" href="#">Prontuarios</a>
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
          <div className='historico1'>
            <h4 className='titulo-hitorico' >Histórico</h4>

            <div className='topicos-hitorico'>
              <ul className='sub-topicos'>
                  <li><i className="bi bi-capsule-pill"></i> Alergias
                    <ul>
                      <input id="restricoes" value={formData.restricoes} onChange={(e) => handleChange('restricoes', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>
                  <li><i className="bi bi-capsule-pill"></i> Observacoes medicas
                    <ul>
                      <textarea id="observacoes_medicas" value={formData.observacoes_medicas} onChange={(e) => handleChange('observacoes_medicas', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> Relatorio Pessoal
                    <ul>
                      <textarea id="relatorio_pessoal" value={formData.relatorio_pessoal} onChange={(e) => handleChange('relatorio_pessoal', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> Pressao
                    <ul>
                      <input id="pressao" value={formData.pressao} onChange={(e) => handleChange('pressao', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> Saturação do Sangue
                    <ul>
                      <input id="saturacao_sangue" value={formData.saturacao_sangue} onChange={(e) => handleChange('saturacao_sangue', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> peso
                    <ul>
                      <input id="peso" value={formData.peso} onChange={(e) => handleChange('peso', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> Exames realizados
                    <ul>
                      <input id="exames_realizados" value={formData.exames_realizados} onChange={(e) => handleChange('exames_realizados', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> historico med. fam.
                    <ul>
                      <input id="historico_med_familiar" value={formData.historico_med_familiar} onChange={(e) => handleChange('historico_med_familiar', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> condicoes med. pre.
                    <ul>
                      <input id="pressao" value={formData.pressao} onChange={(e) => handleChange('pressao', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> medicacoes em uso
                    <ul>
                      <input id="medicacoes_em_uso" value={formData.medicacoes_em_uso} onChange={(e) => handleChange('medicacoes_em_uso', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>

                  <li><i className="bi bi-capsule-pill"></i> temperatura
                    <ul>
                      <input id="temperatura" value={formData.temperatura} onChange={(e) => handleChange('temperatura', e.target.value)} type="text" className="form-control"/>
                    </ul>
                  </li>
                  <br></br>
                  <li>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Enviar</button>
                  </li>
              </ul>
            </div>
          </div>

          <div className='chat'>
          <h3 className="hermes text-center py-4 text-xl font-semibold rounded-xl">
              Hermes
            </h3>
            {responseData && <ChatResponse response={responseData} />}
        </div>
      </div>
    </>
  )
}

export default AreaMedicaChat
