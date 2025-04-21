import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderBootstrap from './HeaderBootstrap';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TempoDeAtendimento from './TempoDeAtendimento';
import Footer from './footer';
import Body from './Body';
import ChamadasFooter from './ChamadasFooter';
import Iniciativas from './Iniciativas';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderBootstrap />
    <TempoDeAtendimento/>
    <Body/>
    <ChamadasFooter/>
    <Iniciativas/>
    <Footer/>
  </StrictMode>
);