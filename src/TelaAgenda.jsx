import HeaderBootstrap from './HeaderBootstrap';
import TempoDeAtendimento from './TempoDeAtendimento';
import AgendaMedica from './AgendaMedica';
import ChamadasFooter from './ChamadasFooter';
import Iniciativas from './Iniciativas';
import SidebarPacientes from './SidebarPacientes';
import TabelaAgenda from './TabelaAgenda';
import Footer from './footer';

export default function TelaAgenda() {
  return (
    <>
      <HeaderBootstrap />
      <SidebarPacientes />
      <TempoDeAtendimento />
      <AgendaMedica />
      <TabelaAgenda />
      <ChamadasFooter />
      <Iniciativas />
      <Footer />
    </>
  );
}
