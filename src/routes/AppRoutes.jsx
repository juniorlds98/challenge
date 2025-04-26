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
import Triagem01 from '../triagem/triagem01';
import Triagem02 from '../triagem/triagem02';
import Triagem03 from '../triagem/triagem03';

import AreaResponsavel from '../responsavel/AreaResponsavel'

import AreaMedicaResultado from '../medica/AreaMedicaResultado'
import AreaMedicaHistorico from '../medica/AreaMedicaHistorico'
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/" element={<AreaMedicaResultado />} />
    <Route path="/" element={<AreaMedicaHistorico />} />
    <Route path="/confirm" element={<TelaConfirmacao />} />
    <Route path="/responsavel" element={<AreaResponsavel />} />
    <Route path="/home-page" element={<HomePage />} />
    <Route path="/tela-agenda" element={<TelaAgenda />} />
    <Route path="/tela-cadastro" element={<TelaCadastro />} />
    <Route path="/tela-administrativo" element={<TelaAdministrativo />} />
    <Route path="/estoque/lote" element={<LotePage />} />
    <Route path="/estoque/produto" element={<ProdutoPage />} />
    <Route path="/home-page" element={<HomePage />} />
    <Route path="/triagem01" element={<Triagem01 />} />
    <Route path="/triagem02" element={<Triagem02 />} />
    <Route path="/triagem03" element={<Triagem03 />} />
  </Routes>
);
