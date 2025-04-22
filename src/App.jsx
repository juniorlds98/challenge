import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaConfirmacao from './TelaConfirmacao';
import TelaAgenda from './TelaAgenda';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaConfirmacao />} />
        <Route path="/TelaAgenda" element={<TelaAgenda />} />
      </Routes>
    </BrowserRouter>
  );
}
