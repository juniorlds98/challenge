import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LotePage from '../estoque/LotePage';
import HomePage from '../main/HomePage';
import ProdutoPage from "../estoque/ProdutoPage";
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/estoque/lote" element={<LotePage />} />
    <Route path="/estoque/produto" element={<ProdutoPage />} />
  </Routes>
);
