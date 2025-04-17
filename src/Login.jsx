import { useState } from 'react'
import './App.css'

function Login() {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1>Login</h1>
        <div class="input-group mb-3">

        <select class="form-select col-3" id="inputGroupSelect01">
            <option selected><i class="bi bi-chevron-double-down"></i></option>
            <option value="P">Paciente</option>
            <option value="M">Médico</option>
            <option value="A">Administrativo</option>
        </select>
        <input type="text" class="form-control col-9" aria-label="" placeholder='Informe seu CPF ou CRM'/>
        </div>

        <div class="input-group ">
        <input type="text" class="form-control" aria-label="" placeholder='Senha'/>
        </div>  
        <a href="#">Esqueceu sua senha?</a>

        <div className="logi">
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        </div> 
        </>
    )
}

export default Login
