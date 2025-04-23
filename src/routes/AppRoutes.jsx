import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LotePage from '../estoque/LotePage';
import HomePage from '../main/HomePage';
import ProdutoPage from "../estoque/ProdutoPage";
import TelaConfirmacao from '../administrativo/TelaConfirmacao';
import TelaAgenda from '../administrativo/TelaAgenda';
import TelaCadastro from '../administrativo/TelaCadastro';
import TelaAdministrativo from '../administrativo/TelaAdministrativo';
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<TelaConfirmacao />} />
    <Route path="/home-page" element={<HomePage />} />
    <Route path="/tela-agenda" element={<TelaAgenda />} />
    <Route path="/tela-cadastro" element={<TelaCadastro />} />
    <Route path="/tela-administrativo" element={<TelaAdministrativo />} />
    <Route path="/estoque/lote" element={<LotePage />} />
    <Route path="/estoque/produto" element={<ProdutoPage />} />
    <Route path="/home-page" element={<HomePage />} />
  </Routes>
);
