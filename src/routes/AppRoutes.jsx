import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LotePage from '../estoque/LotePage';
import HomePage from '../main/HomePage';
import ProdutoPage from "../estoque/ProdutoPage";
import TelaConfirmacao from '../administrativo/TelaConfirmacao';
import TelaAgenda from '../administrativo/TelaAgenda';
import TelaCadastro from '../administrativo/TelaCadastro';
import TelaAdministrativo from '../administrativo/TelaAdministrativo';
import Login from '../login/Login';
import AreaResponsavel from '../responsavel/AreaResponsavel'
import AreaMedicaResultado from '../medica/AreaMedicaResultado'
import AreaMedicaHistorico from '../medica/AreaMedicaHistorico'
import AreaMedicaPacientes from '../medica/AreaMedicaPacientes';
import AreaMedicaChat from '../medica/AreaMedicaChat';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/medica/resultado" element={<AreaMedicaResultado />} />
    <Route path="/medica/paciente" element={<AreaMedicaPacientes />} />
    <Route path="/medica/historico" element={<AreaMedicaHistorico />} />
    <Route path="/medica/chat" element={<AreaMedicaChat/>} />
    <Route path="/confirmacao" element={<TelaConfirmacao />} />
    <Route path="/responsavel" element={<AreaResponsavel />} />
    <Route path="/login" element={<Login />} />
    <Route path="/agenda" element={<TelaAgenda />} />
    <Route path="/cadastro" element={<TelaCadastro />} />
    <Route path="/administrativo" element={<TelaAdministrativo />} />
    <Route path="/estoque/lote" element={<LotePage />} />
    <Route path="/estoque/produto" element={<ProdutoPage />} />
  </Routes>
);
