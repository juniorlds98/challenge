import imgUrl from './assets/img/Hospital-Infantil-Sabará.png'
import imgUrl2 from "./assets/img/Component-18.png"
import imgUrl3 from "./assets/img/Fundação-José-Luiz-Egydio-Setúbal.png"
import imgUrl4 from "./assets/img/Instituto-PENSI.png"
import imgUrl5 from "./assets/img/Layer-2.png"
import imgUrl6 from "./assets/img/Layer-1.png"
import './index.css';

function TelaConfirmacao() {
  return (
<div className="flex flex-col min-h-screen bg-white">

{/* Botão voltar */}
      <div className="p-4 self-start">
        <a href="#">
          <img 
            src={imgUrl2} 
            alt="Voltar"
            className='w-[55px]'
          />
        </a>
      </div>

      {/* Conteúdo centralizado */}
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <div className="bg-white shadow-lg rounded-xl border border-gray-300 p-8 flex flex-col items-center">
          <img
            src={imgUrl}
            alt="Hospital Infantil Sabará"
            className="w-[200px] mb-6"
          />

          <div className="buttons flex flex-col gap-4">
            <a href="#" className="button">ÁREA DO MÉDICO</a>
            <a href="#" className="button">ÁREA DE TRIAGEM</a>
            <a href="#" className="button">ÁREA DO RESPONSÁVEL</a>
            <a href="#" className="button">ÁREA ADMINISTRATIVA</a>
          </div>
        </div>
      </main>
      <footer className="flex justify-center mt-auto w-full">
        <div className="flex items-center w-[1200px] bg-[#eaeaea] rounded-t-lg p-4 shadow-lg">
          <div className="w-[260px] px-[30px] pt-[10px] text-left">
            iniciativas da <br/>
            <strong>Fundação José Luiz <br />Egydio Setúbal</strong>
          </div>
          <div className="flex items-center gap-[30px]">
            <a href="https://www.hospitalinfantilsabara.org.br/">
              <img src={imgUrl} alt="Hospital Infantil Sabará" className='w-[180px] h-[110px]' />
            </a>
            <a href="https://autismoerealidade.org.br/">
              <img src={imgUrl5} alt="Autismo e Realidade" className='w-[160px] h-[40px]' />
            </a>
            <a href="https://institutopensi.org.br/">
              <img src={imgUrl4} alt="Instituto PENSI" className='w-[180px] h-[110px]' />
            </a>
            <a href="https://fundacaojles.org.br/departamento-de-pesquisa/">
              <img src={imgUrl6} alt="Departamento de Pesquisa" className='w-[160px] h-[80px]' />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



export default TelaConfirmacao
