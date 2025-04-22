import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ChamadasFooter() {
    const imgUrl = "https://www.hospitalinfantilsabara.org.br/wp-content/themes/sabara2020/novo-site/img/ecmo-cover.webp";
    const imgUrl2 = "https://www.hospitalinfantilsabara.org.br/wp-content/themes/sabara2020/novo-site/img/uti-cover.webp"

    return (
        <div className="w-full pt-[50px] flex justify-center">
            <div className="w-[1170px]">
                <div className="m-[50px]">
                    <div className="flex gap-[20px]"> {/* largura ajustada para manter visual equilibrado */}
                        <div className="bg-[#e5001b] flex flex-row rounded-[10px] overflow-hidden w-[50%]">
                            {/* Imagem */}
                            <img className="w-[254px] h-[220px] object-cover" style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)" }} src={imgUrl} alt="Ecmo Sabará" />
                            {/* Bloco vermelho inclinado */}
                            <div className="p-[25px] text-white">
                                <p className="text-[20px] font-bold mb-[10px]">ECMO</p>
                                <p className="text-[15px] mb-[15px]">Tratamento para pacientes com falência cardíaca ou respiratória.</p>
                                <a className="botaoCard" href="https://www.hospitalinfantilsabara.org.br/centro-de-excelencia-e-servicos/centro-de-doencas-do-coracao/o-que-tratamos/ecmo-ecls/">SAIBA MAIS</a>
                            </div>
                        </div>
                        <div className="bg-[#7db713] flex flex-row rounded-[10px] overflow-hidden w-[50%]">
                            {/* Imagem */}
                            <img className="w-[254px] h-[220px] object-cover" style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)" }} src={imgUrl2} alt="Ecmo Sabará" />
                            {/* Bloco verde inclinado */}
                            <div className="p-[25px] text-white">
                                <p className="text-[20px] font-bold mb-[10px]">UTI</p>
                                <p className="text-[15px] mb-[15px]">Cuidado intensivo para crianças com quadros graves.</p>
                                <a className="botaoCard" href="https://www.hospitalinfantilsabara.org.br/unidades-e-servicos-hospitalares/unidade-de-terapia-intensiva/">SAIBA MAIS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ChamadasFooter;