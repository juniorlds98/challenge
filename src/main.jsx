import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderBootstrap from './HeaderBootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import ChamadasFooter from './ChamadasFooter';
import Iniciativas from './Iniciativas';
import CadastroPacienteSabara from './Cadastros';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderBootstrap />
    <CadastroPacienteSabara/>
    <ChamadasFooter/>
    <Iniciativas/>
    <Footer/>
  </StrictMode>
);