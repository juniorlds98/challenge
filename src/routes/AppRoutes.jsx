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
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/medica/resultado" element={<AreaMedicaResultado />} />
    <Route path="/medica/historico" element={<AreaMedicaHistorico />} />
    <Route path="/confirmacao" element={<TelaConfirmacao />} />
    <Route path="/responsavel" element={<AreaResponsavel />} />
    <Route path="/home-page" element={<HomePage />} />
    <Route path="/agenda" element={<TelaAgenda />} />
    <Route path="/cadastro" element={<TelaCadastro />} />
    <Route path="/administrativo" element={<TelaAdministrativo />} />
    <Route path="/estoque/lote" element={<LotePage />} />
    <Route path="/estoque/produto" element={<ProdutoPage />} />
    <Route path="/home-page" element={<HomePage />} />
  </Routes>
);
