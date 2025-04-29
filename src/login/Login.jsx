import { useState } from 'react'
import '../login.css'
import Component from '../assets/img/Component 3.png';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        cpfcrm: '',
        password: '',
      });
    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
      try{
        const LoginPayload = {
          cpfcrm: formData.cpfcrm,
          password: formData.password,
        };
        console.log(LoginPayload)
        const response = await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, LoginPayload);
        console.log(response)
        console.log(response.data.nome)
        if(!(response.data.nome == NaN)){
            window.location.href = "/confirmacao";
        }else{
            alert('Credenciais invalidas')
        }
        
      }catch(error){
        alert('erro ao logar',error)
      }
      }
        
    return (
        <>
        <div className='fechamento-tela fechamento-tela-expand-lg bg-body-tertiary fixed-top'>
            <button type="button" className="btn-close" disabled aria-label="Close"></button>
        </div>

        <div className="pagina-login d-flex flex-lg-row flex-column min-vh-100 fixed-top">
            <div className="imagem col-lg-6 d-flex align-items-center justify-content-center p-4">
                <img src={Component} alt="Logo do Hospital com formas geometicas nas cores, azul, vermelho e verde" className="img-fluid imagem-login d-none d-md-block" />
            </div>

            <div className="login col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
                <h1 className="mb-4">Login</h1>

                <form className="w-100" style={{ maxWidth: '400px' }}>
                <div className="mb-3">
                    <select className="form-select" id="tipoUsuario">
                    <option defaultValue>Selecione o usuário</option>
                    <option value="P">Paciente</option>
                    <option value="M">Médico</option>
                    <option value="A">Administrativo</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input type="text" className="form-control" id="cpfcrm" placeholder="Informe seu CPF ou CRM" value={formData.cpfcrm} onChange={(e) => handleChange('cpfcrm', e.target.value)}/>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="password" placeholder="Informe sua senha" value={formData.password} onChange={(e) => handleChange('password', e.target.value)}/>
                </div>

                <div className="mb-3 d-flex justify-content-between">
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <div className="d-grid gap-2">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Entrar</button>
                </div>
                </form>
            </div>
        </div>


        </>
    )
}

export default Login
